const Service = require('egg').Service

class NodeService extends Service {

    //添加文章相关
    async publish(data) {
        const {app} = this;
        const r = await app.mysql.insert('node',data);
        return r;
    }
    //获取笔记列表
    async getNodeList() {
        const { app } = this;
        const sql = `SELECT nid,title,mainpic from node where status = 1`;
        const r = await app.mysql.query(sql);       
        return r;
    }
    async getNode(nid) {
        const { app } = this;
        const sql = `SELECT * from node where nid = ${nid} and status = 1`;
        const r = await app.mysql.query(sql);       
        return r;
    }

}
module.exports = NodeService;