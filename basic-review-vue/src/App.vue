<template>
  <div id="app">
    <h1>Hi there!</h1>
    <p>X: {{ coords.x }} | Y: {{ coords.y }} </p>
    <div class="canvas" @mousemove="getCoords">

    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      coords: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    getCoords(e) {
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
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
.canvas {
  width: 300px;
  height: 300px;
  margin-top: 20px;
  background: #ddd;
  margin: auto
}
</style>
