const express = require('express')
//创建路由器对象
const router = express.Router()
//引入连接池
const pool = require('../pool')

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


module.exports =router