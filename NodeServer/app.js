const express = require('express')
const querystring = require('querystring')
const userRouter= require('./routers/user')
const shopRouter=require('./routers/shop')
const bodyParser = require('body-parser')
const { static } = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8080, () => {
    console.log('web服务器启动成功')
})
//各版本跨域
app.all('*', function(req, res, next) {
    //设为指定的域
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // @ts-ignore
    res.header('Access-Control-Allow-Credentials', true);
    res.header("X-Powered-By", ' 3.2.1');
    next();
});
app.use((err,req,res,next)=>{
    //err   接收的错误信息
    console.log(err);
    res.send({code:500,msg:"服务器端错误"})
})
app.use('/public',express.static('./public'))
app.use('/user',userRouter)
app.use('/shop',shopRouter)










//错误处理中间件一定要放在路由器后面
//要拦截所有产生的错误
app.use((err,req,res,next)=>{
    //err   接收的错误信息
    console.log(err);
    res.send({code:500,msg:"服务器端错误"})
})

