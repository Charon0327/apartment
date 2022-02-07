<template>
  <div class="login">
    <span class="icon" @click="close"></span>
    <p class="title">登录</p>
  </div>
</template>
<script>
export default {
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 760px;
  height: 550px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 999;
  border-radius: 6px;
  .title{
    text-align: center;
    font-size: 24px;
    margin-top: 80px;
  }
  .icon{
    display: block;
    width:40px;
    height: 40px;
    background: url('../assets/close.png');
    background-size: contain;
    position: absolute;
    right: 20px;
    top:20px;
    cursor: pointer;
  }
}
</style>