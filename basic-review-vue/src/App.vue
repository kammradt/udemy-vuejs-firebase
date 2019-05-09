<template>
  <div id="app">
    <h1>Hi there!</h1>
    <p>{{ greet }}</p>
    <p>{{ sayLorem() }}</p>
    <a :href="githubUrl" target="_blank">github.com/kammradt</a>
    <p :class="classes">Inspect my classes!</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      greet: 'Good to see you here!',
      githubUrl: 'https://github.com/kammradt',
      classes: ['red', 'blue', 'from', 'an', 'array']
    }
  },
  methods:{
    sayLorem() {
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
