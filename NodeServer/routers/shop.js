const express = require('express')
//创建路由器对象
const router = express.Router()
//引入连接池
const pool = require('../pool')
<<<<<<< HEAD
const multer = require('multer')

//  用于保存图片名称
let ImgUrl =''
// 中间件 解析文件 使上传的图片到指定位置 并且修改指定的名称
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img')
            //上传的目录位置
    },
    filename: function(req, file, cb) {
        console.log(file)
        //  上传的文件要保存的名字
        ImgUrl=file.originalname
        cb(null,file.originalname)

    }
})
//添加图片信息
var upload = multer({ storage: storage })
// 上传图片 接口 upload        这里的single里的值要等与前台的那么值 否则接收不到
router.post('/upload',upload.single('photo'),(req,res,next)=>{
        console.log('localhost:8080/public/img/'+ImgUrl)
        // 返回给前台 图片地址
        res.send({code:200,msg:'localhost:8080/public/img/'+ImgUrl})
})


//验证商家登录
router.post('/login',(req,res,next)=>{
    let obj =req.body
    console.log(req.body)
    pool.query('select * from admin where uname=? and upwd=?',[obj.uname,obj.upwd],(err,data)=>{
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
=======

//验证商家登录
router.post('/login',(req,res)=>{
    
>>>>>>> 701eae47c6fd0fa83bd29e614ffae035ec02bd06
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