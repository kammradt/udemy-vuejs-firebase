<template>
  <div id="app">
    <h1>Hi there!</h1>
    <p>{{ text }}</p>
    <p>{{ sayHello() }}</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      text: 'Variable!',
      name: 'John'
    }
  },
  methods:{
    sayHello() {
      return `Hello ${this.name}!`
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
