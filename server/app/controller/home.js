'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs')

class HomeController extends Controller {
  async upload(){
    const { ctx } = this;
    if (!ctx.session.userinfo) {
      ctx.body = { code: 403, msg: "请登录" };
      return;
    }
    let result = {
      "erro":0,
      "data":[]
    }
    //接收上传上来的文件
    const files = ctx.request.files;
    //存放文件的目录
    const toFolder = path.dirname(__dirname) + '/public/uploads/';
    files.forEach(f=>{
      fs.copyFileSync(f.filepath,toFolder + path.basename(f.filepath));
      let url = 'http://127.0.0.1:7001/public/uploads/' + path.basename(f.filepath);
      result.data.push({url});
    })
    ctx.body = result;
  }
}


module.exports = HomeController;
