<!-- html -->
<template>
  <div class="headTitle">
    <div class="title">{{title}}</div>
    <div class="line"></div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'headTitle',
  data () {
    return {
    }
  },
  props : {
      title: {type: String}
  },
  methods: {
  },
  watch: {
  },
  created () {
  }
}
</script>
<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 4vh;
  font-weight: bold;
  color: black;
}
.line {
  margin-top: 2.8vh;
  height: 0.05rem;
  width: 60%;
  background-color: black;
}
</style>
