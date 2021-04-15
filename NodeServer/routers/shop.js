const express = require('express')
//创建路由器对象
const router = express.Router()
//引入连接池
const pool = require('../pool')

//验证商家登录
router.post('/login',(req,res)=>{
    
})

//判定商家用户名是否存在 存在则返回状态码201
router.post('/SelectUser',(req,res,next)=>{
    let obj =req.body
    console.log(obj.uname)
    pool.query(`select * from admin where uname='${obj.uname}'`,(err,data)=>{
        if(err){
          next()
        }else{
            console.log(data)
            if(data.length==''){
                res.send('ok')
            }else{
                res.send({code:201,msg:'商家用户名已存在'})
            }
        }
    })
})

// 商家注册
router.post('/Reg',(req,res,next)=>{
    let obj =req.body
    console.log(obj)
    let count =400   // 用于记录状态码
    for (var i in obj) {
        if (obj[i] == '') {
            res.send({ code: count, msg: i + '不能为空' })
            count++
            return
        }
    }
    pool.query('insert into admin set?',[obj],(err,data)=>{
        if(err){
            next()
        }else{
            if(data.affectedRows==1){
                res.send({code:200,msg:'注册成功'})
            }else{
                res.send({code:201,msg:'注册失败'})
            }
        }
    })
})

 //添加商品
router.post('/addShop',(req,res,next)=>{
    let obj =req.body
    console.log(obj)
    let count =400   // 用于记录状态码
    for (var i in obj) {
        if (obj[i] == '') {
            res.send({ code: count, msg: i + '不能为空' })
            count++
            return
        }
    }
    // 查询商品标题是否重复再做添加
    pool.query(`select * from productList where title='${obj.title}'`,(err,data)=>{
        if(err){
            next()
        }else{
            if(data.length==0){
                pool.query('insert into productList set?',[obj],(err,data)=>{
                    if(err){
                        next()
                    }else{
                        console.log(data)
                        if(data.affectedRows==1){
                            res.send({code:200,msg:'添加成功'})
                        }else{
                            res.send({code:201,msg:'添加失败'})
                        }
                    }
                })
            }else{
                res.send({code:202,msg:'商品标题已存在'})
            }

        }
    })
})


//查询商品 按照搜索次数从高到低排列
router.get('/GetTopList',(req,res,next)=>{
    pool.query('select * from productlist order by many desc',(err,data)=>{
        if(err){
            next()
        }else{
          if(data.length>0){
               res.send({code:200,msg:data})
          }else{
              res.send({code:201,msg:'未查询到商品信息'})
          }
           
        }
    })
})


module.exports =router