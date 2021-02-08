<template>
  <div class="layout">
    <div class="tab-wrap">
      <router-view></router-view>
    </div>
    <BaseTabbar></BaseTabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {}
  },
  created() {
    this.test()
  },
  methods: {
    test() {
      console.log('xxx', process.env.BASE_URL)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  .tab-wrap {
    border: 1px solid red;
    /* prettier-ignore */
    height:calc(100vh - 50PX);
    overflow-y: scroll;
  }
}
</style>