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
      <ul class="item_view">
        <li class="item" v-for='item in items' @click='selectItemAction' :id='item.value'>{{item.name}}</li>
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
      this.$emit('selectCityAction');
    },
    // 获取用户点选的数值 并且传给父控件
    selectItemAction: function () {
      this.isShow = !this.isShow;
      this.selectValue = event.target.innerText;
      // 同时将 城市名称 和 城市编码传给父控件
      this.$emit('itemOfCitySelectAction', this.selectValue, event.target.id);
    },
  },
  created () {
  }
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
