const express = require('express');
//页面层路由
const Router  = express.Router();


//页面路由
const page_obj_arr = [{
    path : 'index',
    template : 'index',
},{
    path : 'page1',
    template : 'page1',
},{
    path : 'page2',
    template : 'page2',
}]

page_obj_arr.forEach(item=>{
    Router.get(`/${item.path}`,(req,res)=>{
        res.render(item.template)
    })
})

module.exports = Router;