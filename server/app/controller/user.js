"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async reg() {
    const { ctx, app } = this;
    let result = {
      //定义理想状态的返回结果
      code: 1,
      msg: "注册成功",
    };
    let data = ctx.request.body;
    console.log(data);
    let d = new Date();
    let addtimes = `${d.getFullYear()}-${
      d.getMonth() + 1
    }-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    data.addtimes = addtimes;
    let r;
    try {
      r = await ctx.service.user.reg(data);
      console.log(r);
    } catch (error) {
      console.log(error);
      result = { code: -1, msg: "注册失败，请联系管理员" };
    } finally {
      ctx.body = result;
    }
    ctx.body = result; //向前端发送消息
  }
  async login() {
    const { ctx, app } = this;
    let result = {
      code: 1,
      msg: "登录成功",
    };
    //获取客户端提交上来的数据
    const formdata = ctx.request.body;
    //到数据库进行数据验证
    let sql = `SELECT * FROM user WHERE username = '${formdata.username}'`;
    const r = await app.mysql.query(sql);
    console.log(r);
    if (r.length == 0) {
      result = {
        code: -1,
        msg: "账号不存在， 请注册",
      };
    } else if (r[0].passwd != formdata.passwd) {
      result = {
        code: 0,
        msg: "密码错误",
      };
    }else{
      ctx.session.userinfo = {
        uid: r[0].uid,
        username: r[0].username
      };
      result.userinfo = ctx.session.userinfo;
      ctx.body = result;
    }
    // } else {
    //   const userinfo = {
    //     uid: r[0].uid,
    //     username: formdata.username,
    //     tel: r[0].tel,
    //   };
    //   console.log(userinfo);
    //   const token = await app.jwt.sign(userinfo, app.config.jwt.secret);
    //   //追加token到往前端响应的数据里面
    //   result.token = token;
    ctx.body = result;
  }
  async isLogin(){
    const { ctx, app } = this;
    let result = { code: 1, msg: "登录中" };
    result.data = ctx.session.userinfo;
    if (!ctx.session.userinfo) {
      result = { code: -1, msg: "未登录" };
    }
    console.log(ctx.session.userinfo);
    
    ctx.body = result;
  }

}

module.exports = UserController;
