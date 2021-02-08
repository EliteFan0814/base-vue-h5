<template>
  <div class="base-header">
    <div class="header-wrap flex">
      <div class="item left-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-return"></use>
        </svg>
      </div>
      <div class="item center omit-1">{{title}}</div>
      <div @click="openRight" class="item right-icon">{{rightTitle}}</div>
    </div>
    <div class="holder"></div>
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
      default: undefined
    }
  },
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    openRight() {
      this.$emit('openRight')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-header {
  background-color: #fff;
  .header-wrap {
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 5px;
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
  .holder {
    /* prettier-ignore */
    height: 30PX;
  }
}
</style>