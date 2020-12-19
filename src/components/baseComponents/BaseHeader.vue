<template>
  <div class="base-header">
    <div class="header-wrap flex">
      <div class="item left-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-return"></use>
        </svg>
      </div>
      <div class="item">{{title}}</div>
      <div class="item">{{rightTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    rightTitle: {
      type: String,
      default: '右标题'
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.base-header {
  border: 1px solid red;
  .header-wrap {
    .item {
      font-size: 18px;
      border: 1px solid red;
      width: 33.33%;
    }
  }
}
</style>