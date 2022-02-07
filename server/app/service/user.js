const Service = require('egg').Service

class UserService extends Service {

    //添加文章相关
    async reg(data) {
        const result = await this.app.mysql.insert('user', data);
        return result;
    }

}
module.exports = UserService;