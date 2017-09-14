<!-- html -->
<template>
  <div class="singleInfo">
    <!-- title -->
    <div class="title_view">
      <div class="titleText"> {{title}} </div>
    </div>
    <!-- content -->
    <div class="content_view" v-if='content>0 || content!=undefined'>
      <div class="contentText"> {{content}} </div>
    </div>
    <div class="no_content_view" v-else></div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'singleInfo',
  props: ['title', 'content'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleInfo {
  height: 3rem;
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title_view {
  width: 30%;
  font-size: 1rem;
  color: black;
}
.titleText {
  text-align: left;
}
.content_view {
  width: 70%;
  font-size: 1rem;
  border-style: solid;
  border-bottom-width: 0.07rem;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: gray;
  color: gray;
}
.contentText {
  text-align: left;
}
.no_content_view {
  width: 70%;
  height: 2.5rem;
  border-style: solid;
  border-bottom-width: 0.07rem;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: gray;
  color: gray;
}
</style>
