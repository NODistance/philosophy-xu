<!-- html -->
<template>
  <div class="information">
  <div class="background">
    <img class="backimg" src="../assets/backThree.jpg">
  </div>
   <img src="../assets/plogo.png" class="logo_img">
   <div class="title_line"></div>
   <div class="title"> <strong>完善我的账户</strong> </div>
   <normalBox contentText='姓名' ref='name' isEdit='true' class='name' v-on:normalboxInput='inputNameAction'></normalBox>
   <normalBox contentText='手机号码' isEdit='false' :fillValue='phoneNum' class='phone'></normalBox>
   <normalBox contentText='邮箱' isEdit='true' class='mail' v-on:normalboxInput='inputMailAction'></normalBox>
   <!-- 生日选择 -->
   <div class="birthday_view">
    <div class="birthday_title"> 生日 </div>
    <div class="birthday_content">
      <selectButton class="year" title='年' unit='年' :items="years" ref='year' v-on:itemSelectAction='yearSelectAction' v-on:selectAction='yearAction'></selectButton>
      <selectButton class="month" title='月' unit='月' ref='month' :items="months" v-on:itemSelectAction='monthSelectAction' v-on:selectAction='monthAction'></selectButton>
      <selectButton class="day" title='日' ref='day' v-on:itemSelectAction='daySelectAction' v-on:selectAction='dayAction'></selectButton>
    </div>
   </div>
   <!-- 城市选择 -->
   <div class="address_view">
    <div class="address_title"> 详细地址 </div>
    <div class="address_content">
      <citySelectButton class="province" title='省' ref='province' contents='years' :items='provinces' v-on:itemOfCitySelectAction='provinceSelectAction' v-on:selectCityAction='provinceAction'></citySelectButton>
      <citySelectButton class="city" title='市' ref='city' :items='citys' v-on:itemOfCitySelectAction='citySelectAction' v-on:selectCityAction='cityAction'></citySelectButton>
      <citySelectButton class="area" title='区' ref='area' :items='areas' v-on:itemOfCitySelectAction='areaSelectAvtion' v-on:selectCityAction='areaAction'></citySelectButton>
    </div>
   </div>
   <div class="addressInput_view">
    <input type="text" name="input" class="input_address" v-model='address' placeholder="详细地址" @change='addressInputAction'/>
   </div>
   <!-- 按钮 -->
   <certainButton contentText='保存' type='black' class='certain' v-on:certainAction='saveAction'></certainButton>
   <certainButton contentText='取消' type='black' class='cancel' v-on:certainAction='cancelAction'></certainButton>
  </div>
</template>

<!-- js -->
<script>
import normalBox from '../components/custom/Fillbox_normal'
import certainButton from '../components/custom/certainButton'
import selectButton from '../components/custom/Select'
import citySelectButton from '../components/custom/citySelect'
import districts from '../components/untils/districts'
import axios from 'axios'

export default {
  name: 'information',
  components: {normalBox, certainButton, selectButton, citySelectButton},
  data () {
    return {
      // 关于时间选择
      years: [],
      months: [],
      days: [],
      year: '',
      month: '',
      day: '',
      birthday: '',
      // 用户手填项
      phoneNum: sessionStorage.phoneNum,
      userName: '',
      mail: '',
      address: '',
      // 关于地址选择
      provinces: [],
      citys: [],
      areas: [],
      province: '',
      provinceCode: '',
      city: '',
      cityCode: '',
      area: '',
      areaCode: ''
    }
  },
  methods: {
    // 名字输入
    inputNameAction: function (inputValue) {
      this.userName = inputValue;
    },
    // 邮箱输入
    inputMailAction: function (inputValue) {
      this.mail = inputValue;
    },
    // 用户生日选择事件
    yearAction: function() {
      this.$refs.month.isShow = false;
      this.$refs.day.isShow = false;
    },
    yearSelectAction: function (selectValue) {
      // 控制 用户再次点击年份按钮 月份和日期 置为默认值
      if (this.year.length == 0) {
        this.$refs.month.setDefaultValue('1');
        this.$refs.day.setDefaultValue('1');
      }
      // 时间默认值
      this.year = selectValue;
      this.birthday = this.year + '-' + '1' + '-' + '1';
    },
    monthAction: function() {
      this.$refs.year.isShow = false;
      this.$refs.day.isShow = false;
    },
    monthSelectAction: function (selectValue) {
      this.month = selectValue;
      this.$refs.day.calculationOfDay(this.year, selectValue);
    },
    dayAction: function () {
      this.$refs.year.isShow = false;
      this.$refs.month.isShow = false;
    },
    daySelectAction: function (selectValue) {
      this.day = selectValue;
      this.birthday = this.year + '-' + this.month + '-' + this.day;
    },
    // 地址选择事件
    provinceAction: function () {
      this.$refs.city.isShow = false;
      this.$refs.area.isShow = false;
    },
    provinceSelectAction: function (name, value) {
      this.province = name;
      this.provinceCode = value;
      this.citys = districts.cityUnder(value);
    },
    cityAction: function () {
      this.$refs.province.isShow = false;
      this.$refs.area.isShow = false;
    },
    citySelectAction: function (name, value) {
      this.city = name;
      this.cityCode = value;
      this.areas = districts.districtUnder(value);
    },
    areaAction: function () {
      this.$refs.province.isShow = false;
      this.$refs.city.isShow = false;
    },
    areaSelectAvtion: function (name, value) {
      this.area = name;
      this.areaCode = value;
    },
    addressInputAction: function () {
      console.log(this.address);
    },
    // 保存
    saveAction: function () {
      this.checkUserFill();
    },
    // 取消
    cancelAction: function () {
      console.log('cancel');
      this.$router.back();
    },
    // 邮箱正则判断
    checkMail: function (mail) {
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(mail)) {
        this.$toast('您输入的邮箱错误');
        return false;
      }
      return true;
    },
    // 判断用户填写信息
    checkUserFill: function () {
      // 如果用户未填写信息 则不发送请求 直接跳转到我的账户页面
      if (this.userName.length == 0 && this.mail.length == 0 && this.birthday.length == 0 && this.address.length == 0) {
        this.$router.push('Account');
      } else {
           // 
           this.networkOfuserInfo();
      }
    },
    // 网络上传 用户所填信息
    networkOfuserInfo: function () {
      var that = this;
      var params = {};
      if (that.userName) {
        params['name'] = that.userName;
      }
      if (that.mail) {
        params['email'] = that.mail;
      }
      if (that.birthday) {
        params['birth_date'] = that.birthday;
      }
      if (that.provinceCode) {
        params['province_code'] = that.provinceCode;
      }
      if (that.cityCode) {
        params['city_code'] = that.cityCode;
      }
      if (that.areaCode) {
        params['country_code'] = that.areaCode;
      }
      if (that.province) {
        params['province_name'] = that.province;
      }
      if (that.city) {
        params['city_name'] = that.city;
      }
      if (that.area) {
        params['country_name'] = that.area;
      }
      if (that.address) {
        params['address'] = that.address;
      }

      axios.post('/api/member/update.json', {
        base: params
      })
      .then(function (response) {
        if (response.data.resultCode == '1') {
          that.$router.push('Account');
        } else {
          that.$toast('用户所填信息上传失败');
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    networkOfAccount: function () {
      var that = this;
      axios.get(API.baseURL + '/api/v2/crm/member/get.json', {
      })
      .then(function (response) {
        if (response.data.resultCode == '1') {
          that.userInfo = response.data.data.base;
        }
      })
      .catch(function (error) {
         console.log(error);
      })
    }
  },
  // 生命钩子
  mounted () {
    // this.$refs.name.inputValue = '张旭'
    // this.$refs.year.selectValue = '1990'
    // year
    for (var i = 1900; i < 2017; i++) {
      this.years.push(i);
    }
    // month
    for (var i = 1; i <= 12; i++) {
      this.months.push(i);
    }
    this.provinces = districts.provinces();
  },
  created () {
    // this.networkOfAccount();
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  background-color: transparent;
}
.background {
  left: 0;
  top: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.backimg {
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.logo_img {
  margin-top: 3rem;
  height: 3.05rem;
  width: 11.4rem;
}
.title_line {
  margin-top: 1rem;
  height: 0.1rem;
  width: 5rem;
  background-color: black;
}
.title {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: black;
}
.name {
  margin-top: 2rem;
}
.phone {
  margin-top: 1rem;
}
.mail {
  margin-top: 1rem;
}
.certain {
  margin-top: 3rem;
}
.cancel {
  margin-top: 2rem;
  margin-bottom: 5rem;
}
.birthday_view {
  margin-top: 1rem;
  width: 85%;
  height: 5rem;
}
.birthday_content {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.birthday_title {
  height: 1.7rem;
  width: 100%;
  font-size: 0.9rem;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.address_view {
  margin-top: 1rem;
  width: 85%;
  height: 5rem;
}
.address_content {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.address_title {
  height: 1.7rem;
  width: 100%;
  font-size: 0.9rem;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.addressInput_view {
  margin-top: 0.2rem;
  width: 85%;
  height: 3rem;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
}
.input_address {
  width: 96%;
  height: 100%;
  outline: medium;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
}
@media only screen and (min-device-width:320px) and (max-device-width: 355px){
  .background {
    height: 176%;
  }
}
</style>
