const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');


// 创建服务器
const server = http.createServer();
// 服务器的事件
server.on('error', (error)=>{
    console.log('服务器启动失败');
    console.log(error);
})

server.on('listening', ()=>{
    console.log('服务器启动成功，开始监听');
})
// 启动服务器，监听
server.listen(8080, 'localhost');
// server.listen(8000, '10.36.145.119');

server.on('request', (request, response)=>{
    console.log('接收到了客户端的请求');
    // request:客户端发送过来的请求对象（包含：url、headers、body）
    // response：将要响应给客户端的响应对象（包含：headers和数据部分）

    // console.log(request.headers);
    console.log(request.url);//路径，请求参数

    //对url进行判断，再对客户端进行响应
    let urlObj = url.parse(request.url);
    let path = urlObj.pathname;

//   请求：1、页面文件
//   2、静态资源
//   3、ajax请求


    // 处理页面请求
    if(path === '/home' || path === '/'){
        // 读取html文件内容，响应客户端
        fs.readFile('www/index.html', (error, data)=>{
            if(!error){
                //查询数据库数据，跟页面结合，成为一个完整的带有动态数据的页面
                // 再响应客户端
                response.write(data);
                response.end();
            }
        });
    }

    //处理css文件(静态资源)
    else if(path.startsWith('/css/')){
        fs.readFile('www'+path, (error, data)=>{
            if(!error){
                response.write(data);
                response.end();
            }
        })
    }

    //处理图片(静态资源)
    else if(path.startsWith('/images/')){
        fs.readFile('www'+path, (error, data)=>{
            if(!error){
                response.write(data);
                response.end();
            }
        })
    }

    //处理js(静态资源)
    else if(path.startsWith('/js/')){
        fs.readFile('www'+path, (error, data)=>{
            if(!error){
                response.write(data);
                response.end();
            }
        })
    }

    // 处理ajax请求
    else if(path.startsWith('/api/')){
        //这个一个ajax请求
        // 操作数据库
    }

    //解决跨域的问题			正向代理
    else if(path === '/v4/api/film/now-playing'){
        //向真正有数据的服务器转发这个请求
        let req = https.request({
            hostname: 'm.maizuo.com',
            port: 443,
            path: urlObj.path,
            methods: 'GET'
        }, (res)=>{
            res.on('data', (bf)=>{
                response.write(bf);
            });
            res.on('end', ()=>{
                // 得到数据，响应客户端
                response.end();
            })
        });
        req.end();
    } 
    // response.write('hello world');
    // response.write('hello world');
    // response.write('hello world');

})