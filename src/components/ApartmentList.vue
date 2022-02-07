<template>
  <div class="list">
    <Apartment v-for="item in apartments" :key="item.id" :apartment="item"/>
  </div>
</template>
<style lang="scss" scoped>
.list{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
<script>
import Apartment from "@/components/Apartment.vue"
import gy1 from '@/assets/gy1.webp'
export default {
  data () {
    return {
      apartments:[
        {
          id: 1,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        },
        {
          id: 2,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        },
        {
          id: 3,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        },{
          id: 4,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        },{
          id: 5,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        },{
          id: 6,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        },{
          id: 7,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        },{
          id: 8,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        },{
          id: 9,
          title: '电梯阳台厨房大单房',
          address: '深圳市宝安区和平商务公寓玻璃围村13栋',
          price: 1500,
          mainpic: gy1
        }
      ]
    }
  },
  components: {
    Apartment
  }
}
</script>