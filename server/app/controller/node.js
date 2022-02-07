"use strict";

const Controller = require("egg").Controller;

class NodeController extends Controller {
  async publish() {
    const { ctx, app } = this;
    if (!ctx.session.userinfo) {
      ctx.body = { code: 403, msg: "请登录" };
      return;
    }
    let result = {
      code: 1,
      msg: "添加成功",
    };
    const formData = ctx.request.body;
    console.log(formData);
    let r;
    try {
      r = await ctx.service.node.publish(formData);
    } catch (error) {
      console.log(error);
      result = {
        code: -1,
        msg: "添加失败，请联系管理员",
      };
    } finally {
      ctx.body = result;
    }
  }
  async getNodeList() {
    const { ctx, app } = this;
    
    let result = {
      code: 1,
      msg: "获取成功",
      data: []
    };
    let r;
    try {
      r = await ctx.service.node.getNodeList();
      result.data = r;
    } catch (error) {
      console.log(error);
      result = {
        code: -1,
        msg: "获取失败，请联系管理员",
      };
    } finally {
      ctx.body = result;
    }
  }
  async getNode() {
    const { ctx, app } = this;

    let result = {
      code: 1,
      msg: "获取成功",
      data: []
    };
    const nid = ctx.request.query.nid;
    console.log(nid);
    let r;
    try {
      r = await ctx.service.node.getNode(nid);
      result.data = r;
    } catch (error) {
      console.log(error);
      result = {
        code: -1,
        msg: "获取失败，请联系管理员",
      };
    } finally {
      ctx.body = result;
    }
  }
}

module.exports = NodeController;
