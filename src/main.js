// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import wx from 'weixin-js-sdk'
import API from './components/untils/API.js'

Vue.use(MintUI);

Vue.config.productionTip = false
axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data () {
    return {
    }
  },
  methods: {
      url: function () {
          let url = location.href.substring(0, location.href.length - location.hash.length)
          return url.endsWith('?') ? url.substring(0, url.length - 1) : url
      },
      configOfWX: function() {
          axios.get('/api/v1/jsconfig.json?shortUrl=philosophy&url=' + this.url() + this.$router.currentRoute.path, {
          })
              .then(function (response) {
                  let json = response.data;
                  console.log(json)
                  wx.config({
                      debug: true,
                      appId: json.appId,
                      timestamp: json.timestamp,
                      nonceStr: json.nonceStr,
                      signature: json.signature,
                      jsApiList: ['chooseImage']
                  });
                  // wx.config 成功调用后，在wx.ready进行调用API接口
                  wx.ready(function() {
                  });
                  wx.success(function (res) {
                      console.log('haha' + JSON.stringify(res))
                  });
              })
              .catch(function (error){
                  console.log(JSON.stringify(error));
              })
      },
  },
  beforeCreate () {
  },
  created () {
      this.configOfWX();
  },
})
