<template>
  <div class="apartment">
    <img :src="apartment.mainpic"
         alt="" />
    <div class="content">
      <p>{{ apartment.title }}</p>
      <p class="address">{{ apartment.address }}</p>
      <p class="price">{{apartment.price}}元</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['apartment'],
};
</script>
<style lang="scss" scoped>
.apartment {
  width: 250px;
  height: 370px;
  border: 1px solid #e6e6e6;
  box-shadow: 5px 4px 4px #ccc;
  margin: 50px 0;
  cursor: pointer;
  img {
    width: 250px;
    height: 260px;
  }
  .content {
    margin: 10px;
  }
  .address {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 6px 0 15px 0;
  }
  .price{
    color: #ff6e2e;
  }
}
</style>
