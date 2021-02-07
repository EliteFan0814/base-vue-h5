<template>
  <div class="base-header">
    <div class="header-wrap flex">
      <div class="item left-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-return"></use>
        </svg>
      </div>
      <div class="item center omit-1">{{title}}</div>
      <div class="item right-icon">{{rightTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题标题标题标题标题标题'
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
  padding: 0 5px;
  .header-wrap {
    box-sizing: border-box;
    .item {
      /* prettier-ignore */
      font-size: 16PX;
      /* prettier-ignore */
      line-height: 30PX;
      text-align: center;
    }

    .left-icon {
      text-align: left;
      width: 27.5%;
    }
    .center {
      width: 45%;
    }
    .right-icon {
      text-align: right;
      width: 27.5%;
    }
  }
}
</style>