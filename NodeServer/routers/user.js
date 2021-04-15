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

//验证用户登录
router.post('/login',(req,res)=>{
    let obj =req.body
<<<<<<< HEAD
=======
    console.log(obj)
>>>>>>> 5175c0d (更新项目)
    pool.query('select * from user where uname=? and upwd=?',[obj.uname,obj.upwd],(err,data)=>{
        if(err){
            next()
        }else{
           if(data.length>0){
            res.send({code:200,msg:'ok'})
           }else{
               res.send({code:401,msg:'账户或者密码错误'})
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

//获取热搜商品
router.get('/getShop',(req,res,next)=>{
    pool.query('select * from productList order by many desc',(err,data)=>{
        if(err){
            next()
        }else{
           res.send(data)
        }
    })
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