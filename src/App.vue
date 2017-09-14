<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
require('../static/reset.css');
export default {
  name: 'app',
	data() {
		return {
      }
    },
    methods: {
      change: function () {
      }
    }
	}
</script>

<style>
#app {
  /*Avenir', Helvetica, Arial, sans-serif*/
  /*"Times New Roman",Georgia,Serif*/
  font-family: "Times New Roman",Georgia,Serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
