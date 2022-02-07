'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/isLogin',controller.user.isLogin)
  router.post('/upload',controller.home.upload);
  router.post('/publish',controller.node.publish);
  router.post('/reg',controller.user.reg);
  router.post('/login',controller.user.login);
  router.get('/getNodeList',controller.node.getNodeList);
  router.get('/getNode',controller.node.getNode);
};
