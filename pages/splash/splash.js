// pages/index/splash/splash.js
Page({
  data: {
    logoSrc : "../../images/ag-palace.png",
    styleClass: "fa-solid fa-building-columns"
  },

  onShow() {
    this.animate("#logo", [
      {opacity:100, ease: 'ease-out'},
      {opacity:0}
    ], 2000, () => {
      this.setData({
        logoSrc : "../../images/twc.png",
        styleClass: "fa-solid fa-star"
      });
      this.animate("#logo", [
        {opacity:0},
        {opacity:100, ease: 'ease-out'}
      ], 2000, function(){
        wx.navigateTo({
           url: '/pages/index/index',
          })
      })
    })
  }
})