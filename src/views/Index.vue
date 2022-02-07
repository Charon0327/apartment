<template>
  <div class="index">
    <Nav class="top"  @login="login" />
    <Swiper />
    <ApartmentList />
    <Login  v-if="islogin" @close="close" />
  </div>
</template>
<script>
import Nav from "../components/Nav.vue";
import Swiper from "../components/Swiper.vue";
import ApartmentList from "@/components/ApartmentList.vue";
import Login from "@/components/Login.vue";
export default {
  data () {
    return {
      islogin: false
    }
  },
  components: {
    Nav,
    Swiper,
    ApartmentList,
    Login
  },
  methods:{
    login () {
      this.islogin = !this.islogin
    },
    close () {
      this.islogin = !this.islogin
    }
  }
}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  .top {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
}
</style>