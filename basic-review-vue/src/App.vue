<template>
  <div id="app">
    <h1>Hi there!</h1>
    <button @click="showName = !showName">{{ buttonText }}</button>
    <p v-if="showName">Hi!</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      showName: false
    }
  },
  computed: {
    buttonText() {
      return this.showName ? 'Hide!' : 'Show!';
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
