const express = require('express')
//创建路由器对象
const router = express.Router()
//引入连接池
const pool = require('../pool')

//判定用户账号是否存在 存在则返回状态码201
router.post('/SelectUser',(req,res,next)=>{
    let obj =req.body
    console.log(obj.uname)
    pool.query(`select * from user where uname='${obj.uname}'`,(err,data)=>{
        if(err){
          next()
        }else{
            console.log(data)
            if(data.length==''){
                res.send('ok')
            }else{
                res.send({code:201,msg:'用户名已存在'})
            }
        }
    })
})

// 用户注册  
router.post('/Reg',(req,res,next)=>{
    console.log(req.body)
    let obj = req.body
    // i 代表属性名
    let count =400   // 用于记录状态码
    for (var i in obj) {
        if (obj[i] == '') {
            res.send({ code: count, msg: i + '不能为空' })
            count++
            return
        }
    }
    pool.query('insert into user set?',[obj],(err,data)=>{
        if(err){
            next()
        }else{
            res.send({code:200,msg:'注册成功'})
        }
    })
   
})

//查询商品
router.get('/getShop',(req,res,next)=>{
    console.log(req.query)
    let obj =req.query
    pool.query('select * from ')
})

//加入购物车
router.post('/addCar',(req,res,next)=>{
    let obj =req.body
    pool.query('insert into shopCart set?',[obj],(err,data)=>{
        if(err){
            next()
        }else{
            console.log(data)
            if(data.affectedRows==1){
                res.send({code:200,msg:'加入成功'})
            }else{
                res.send({code:201,msg:'添加失败'})
            }
        }
    })
})

//结算购物车

module.exports =router