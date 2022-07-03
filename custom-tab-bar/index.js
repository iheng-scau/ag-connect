Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      text: "Ag+"
    }, {
      pagePath: "/pages/twc/twc",
      text: "T.W.C"
    },
    {
      pagePath: "/pages/activity/activity",
      text: "Activity"
    },
    {
      pagePath: "/pages/chat/chat",
      text: "Chat"
    },
    {
      pagePath: "/pages/me/me",
      text: "Me"
    }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})