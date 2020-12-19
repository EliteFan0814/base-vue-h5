<template>
  <div class="base-tabbar">
    <div class="tabbar-list flex-center">
      <div v-for="(item,index) in tabbarList" :key="index" @click="handleTab(item)" class="tabbar-item flex-column"
        :class="{'item-active':activeIndex === index}">
        <img :src="activeIndex === index?item.activeIcon:item.icon" :alt="item.title">
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbarList: this.$store.getters.navList.list
    }
  },
  computed: {
    activeIndex() {
      for (let i = 0; i < this.tabbarList.length; i++) {
        if (this.tabbarList[i].name === this.$route.name) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    handleTab(item) {
      this.$router.push({ name: item.name })
    }
  }
}
</script>

<style lang="scss" scoped>
.base-tabbar {
  position: fixed;
  width: 100%;
  bottom: 0;
  .tabbar-list {
    font-size: 11px;
    .tabbar-item {
      width: 25%;
      color: #858585;
      img {
        width: 20px;
        height: 21.5px;
      }
    }
    .item-active {
      color: #f95913;
    }
  }
}
</style>