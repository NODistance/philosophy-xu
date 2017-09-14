<!-- 
  @param：
  （1）type - 按钮的类型，目前包括 black white
  （2）contentText - 按钮标题
 -->
<!-- html -->
<template>
  <!-- type is black -->
  <div class="containButton_black" v-if='type=="black"' @click='certainAction'>
    <div class="centent_view_black">
      <div class="centent_text_black"> {{contentText}} </div>
    </div>
  </div>
  <!-- type is white -->
  <div class="containButton_white" v-else-if='type=="white"' @click='certainAction'>
    <div class="centent_view_white">
      <div class="centent_text_white"> {{contentText}} </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'containButton',
  props: ['contentText', 'type'],
  data () {
    return {
    }
  },
  methods: {
    // 向父视图传递事件响应
    certainAction: function () {
      this.$emit('certainAction')
    }
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* type is black */
.containButton_black {
	height: 3.5rem;
	width: 85%;
	background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
}
.centent_view_black {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.centent_text_black {
  font-size: 1rem;
  color: white;
}

/* type is white */
.containButton_white {
  height: 3rem;
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
}
.centent_view_white {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.centent_text_white {
  font-size: 1rem;
  color: black;
}

</style>
