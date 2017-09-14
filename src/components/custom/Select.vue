<!-- html -->
<template>
  <!-- 控件样式 -->
  <div class="select">
    <div class="select_button" @click='selectAction'>
      <div class="title_view">
      <div class="title" v-if='selectValue.length==0'> {{title}} </div>
      <div class="title" v-else> {{selectValue}} </div>
    </div>
    <img src="../../assets/select.png" class="select_photo">
    </div>
    <!-- 控件点选样式 -->
    <div class="suite_view" ref='suite' v-if='isShow'>
      <ul class="item_view" v-if="items.length>0">
        <li class="item" v-for='item in items' @click='selectItemAction'>{{item}}</li>
      </ul>
      <ul class="item_view" v-else>
        <li class="item" v-for='day in days' @click='selectItemAction'>{{day}}</li>
      </ul>
    </div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'select',
  props: {
    title: '',
    unit: '',
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      isShow: false,
      selectValue: '',
      days: []
    }
  },
  methods: {
    // 点击 弹出套件
    selectAction: function () {
      this.isShow = !this.isShow;
      this.$emit('selectAction');
    },
    // 获取用户点选的数值 并且传给父控件
    selectItemAction: function () {
      this.isShow = !this.isShow;
      this.selectValue = event.target.innerText;
      this.$emit('itemSelectAction', this.selectValue);
    },
    // 通过 $refs 操作执行该方法（通过判断平年闰年来确定日期）
    calculationOfDay: function (year, month) {
      // 闰年
      if ((year%4 == 0 && year%100 != 0) || year%400 == 0) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
          this.setDays(31);
        } else {
          // 二月份 闰年28天
          if (month == 2) {
            this.setDays(28);
          } else {
            this.setDays(30);
          }
        }
      } else {
        // 平年
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
          this.setDays(31);
        } else {
          // 二月份 闰年28天
          if (month == 2) {
            this.setDays(29);
          } else {
            this.setDays(30);
          }
        }
      }
    },
    setDays: function (max) {
      for (var i = 1; i <= max; i++) {
        this.days.push(i);
      }
    },
    setDefaultValue: function (value) {
      this.selectValue = value;
    }
  },
  created () {
    // 设置日期默认值
    this.setDays(30);
  },
  mounted () {
  },
  
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select {
  height: 3rem;
  width: 25vw;
}
.select_button {
  height: 100%;
  width: 100%;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title_view {
  width: 18vw;
  /*height: 100%;*/
  /*background-color: red;*/
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  color: black;
  /*background-color: blue;*/
}
.select_photo {
  margin-left: 1vw;
  height: 1rem;
  width: 1rem;
}
.suite_view { 
  position: absolute;
  -webkit-overflow-scrolling: touch;
  /*margin-top: 0.1rem;*/
  height: 13rem;
  width: 25.5vw;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  font-size: 1rem;
  text-align: center;
}
.item_view {
  padding: 0;
  width: 100%;
}
.item {
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: black;
  text-align: center;
}
</style>
