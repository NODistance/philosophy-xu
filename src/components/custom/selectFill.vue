<!-- html -->
<template>
  <!-- type is black -->
  <div class="selectFill">
    <!-- title -->
    <div class="title_view">
      <div class="title"> {{contentText}} </div>
    </div>
    <!-- content -->
    <div class="content_view" @click='tapAction'>
      <div class="selectContent">
      <div class="selectTitle" v-text='selectText' v-if="selectText=='YOUR BIRTHDAY'"></div>
      <div class="selectedTitle" v-text='selectText' v-else></div>
      </div>
      <img src="../../assets/select.png" class="select_img">
    </div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'selectFill',
  props: ['contentText', 'selectText'],
  data () {
    return {
      inputValue: '',
      selectText: sessionStorage.Dior
    }
  },
  methods: {
    tapAction: function () {
      console.log('tap')
      this.$emit('tapOfAction')
    }
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selectFill {
  height: 5rem;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title_view {
  height: 1.8rem;
  width: 100%;
  font-size: 0.9rem;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content_view {
  width: 100%;
  height: 3.2rem;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.selectContent {
  margin-left: 1rem;
  height: 80%;
  width: 85%;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title {
  font-size: 0.9rem;
  color: black;
}
.selectTitle {
  font-size: 0.9rem;
  color: gray;
  font-weight: white-space;
}
.selectedTitle {
  font-size: 0.9rem;
  color: black;
  font-weight: white-space;
}
.select_img {
  margin-left: 0.1rem;
  height: 1rem;
  width: 1rem;
}
</style>
