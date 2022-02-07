<template>
  <div class="nav">
    <div class="nav-left">
      <img src="@/assets/logo.png" alt="">
      <span>如家公寓</span>
    </div>
    <div class="nav-right">
      <span class="person"></span>
      <!-- <div class="login-btn">
        <router-link>登录</router-link>
      </div> -->
      <div class="login-btn" @click="login">登录</div> 
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login () {
      this.$emit('login')
    }
  }
}
</script>
<style lang="scss" scoped>
.nav{
  width: 100%;
  height: 80px;
  color: #ffffff;
  background: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
  .nav-left{
    display: flex;
    align-items: center;
    font-size: 24px;
    img{
      width: 60px;
      height: 60px;
      margin-right: 15px;
    }
  }
  .nav-right{
    display: flex;
    align-items: center;
    .person{
      display: block;
      width: 30px;
      height: 30px;
      background: url('../assets/个人中心.png');
      background-size: contain;
      // margin-right: 10px;
    }
    .login-btn{
      width: 50px;
      height: 35px;
      // background-color: rgb(40, 134, 241);
      border-radius: 5px;
      line-height: 35px;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
    }
  }
}
</style>