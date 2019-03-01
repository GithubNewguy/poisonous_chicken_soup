const api_route = require('express').Router();

const MODAL_API =  require('./index.js')

//分离出的接口前缀 待完善
const base_api = '/api/'

//接口数组
const INTERFACE_BASE_ARR = [{
    name : 'getUserInfo',
    //接口请求类型
    type : 'get',
    //对应数据层相应的数据方法
    return_data : MODAL_API.getUserInfo
},{
    name : 'getNewsInfo',
    //接口请求类型
    type : 'get',
    //对应数据层相应的数据方法
    return_data : MODAL_API.getNewsInfo
}]


//遍历请求接口名
INTERFACE_BASE_ARR.forEach(item=>{
    api_route[item.type](`${base_api}${item.name}` , (req,res)=>{
        item.return_data().then(data=>{
            res.send({
                code  : 0,
                data
            })
        })
        
    })
})

module.exports = api_route;

