module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/css/baseLayout.scss";`
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height']
          })
        ]
      }
    }
  }
}
