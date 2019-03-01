//工具方法
const http = require('http')
const cheerio = require('cheerio')
const fs = require('fs')
const superagent = require('superagent')

//抓取数据的网站
const url = 'http://wufazhuce.com/'

const Utils = {
	//抓取部分数据
	reptile() {
		return new Promise((resolve, reject) => {
			superagent.get(url).end((err, res) => {
				if (err) console.log(err)
				let $ = cheerio.load(res.text)
				let dom_list = $('.carousel-inner .item')
				let res_list = []

				for (var i = 0; i < dom_list.length; i++) {
					let obj = {
						img_url: $($(dom_list[i]).find('.fp-one-imagen')).attr(
							'src'
						),
						text: $(dom_list[i])
							.find('.fp-one-cita a')
							.text(),
						time:
							$(dom_list[i])
								.find('.fp-one-titulo-pubdate .may')
								.text() +
							' ' +
							$(
								$(dom_list[i]).find(
									'.fp-one-titulo-pubdate .dom'
								)
							).text()
					}

                    res_list.push(obj)
                    resolve(res_list);
				}

				// fs.writeFile('data.json', JSON.stringify(res_list), error => {
				//     if (error) console.log(error)
				//     console.log('文件写入完成')
				// })
			})
		})
	},

	//抓取整个网页
	reptile_http() {
		http.get(url, res => {
			console.log(res.statusCode)

			if (res.statusCode != '200') {
				console.error('----->请求失败')
				return
			}

			let allData = ''
			res.on('data', chunk => {
				allData += chunk
			})

			res.on('end', () => {
				fs.writeFile('http_data.txt', allData, (err, data) => {
					if (err) console.error('文件存储失败')
					console.log('文件存储成功!!')
				})
			})
		})
	}
}

module.exports = Utils
