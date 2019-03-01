//接口层
const fs = require('fs')
const Utils = require('./reptile')

const API = {

	//获取用户信息
	getUserInfo() {
		return  new Promise((resolve,reject)=>{
			let obj = {
				name: 'wang',
				age: '25',
				job: 'coder'
			}
			resolve(obj)
		})
	},

	//获取页面展示信息
	getNewsInfo() {
		return Utils.reptile()
	}
}


//数据层 待完善 主要是从数据库内操作数据
module.exports = API
