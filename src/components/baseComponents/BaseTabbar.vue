<template>
  <div class="base-tabbar">
    <div class="tabbar-list flex-center">
      <div v-for="(item,index) in tabbarList" :key="index" @click="handleTab(item)" class="tabbar-item flex-column"
        :class="{'item-active':activeIndex === index}">
        <div class="img-wrap">
          <img :src="activeIndex === index?item.activeIcon:item.icon" :alt="item.title">
        </div>
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
  // position: fixed;
  // width: 100%;
  // bottom: 0;
  background-color: #fff;
  .tabbar-list {
    /* prettier-ignore */
    padding: 5PX 0;
    /* prettier-ignore */
    font-size: 14PX;
    /* prettier-ignore */
    line-height: 15PX;
    .tabbar-item {
      width: 25%;
      color: #858585;
      .img-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        /* prettier-ignore */
        margin-bottom:5PX;
        /* prettier-ignore */
        width: 20PX;
        /* prettier-ignore */
        height: 20PX;
        img {
          display: block;
          /* prettier-ignore */
          max-width: 20PX;
          /* prettier-ignore */
          max-height: 20PX;
        }
      }
    }
    .item-active {
      color: #f95913;
    }
  }
}
</style>