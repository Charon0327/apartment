module.exports = options => {
    return async function jwt(ctx, next) {
        // 接收head里面提交上来的token信息
        let token = ctx.request.header.authorization;
        console.log(token);
        // 如果请求头里面没有token，我们尝试去url地址里面去获取token  GET请求
        if(!token){
            token = ctx.request.query.authorization;
        }
        let decode;
        console.log('接收的token:',token);
        if (token && token != 'null') {
            try {
                // 解码token
                decode = await ctx.app.jwt.verify(token, options.secret);
                console.log('解码之后：', decode);
                // 把解码之后的数据追加到全局的上下文身上：ctx
                ctx.userinfo = decode;
                // 如果解码成功，就继续往下执行
                await next();
            } catch (error) {
                ctx.status = 401;
                ctx.body = {
                    code: 401,
                    msg: error.message,
                };
                return;
            }
        } else {
            ctx.status = 401;
            ctx.body = {
                code: 401,
                msg: '请登录',
            };
            return;
        }
    };
};