<template>
  <div id="app">
    <h1>Hi there!</h1>
    <ul>
      <li v-for="person in people" :key="person.name">
        <p>Name: {{ person.name }}</p>
        <p>Age: {{ person.age }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      people: [
        { name: 'alvezin ', age: '20' },
        { name: 'kammzin ', age: '19' },
        { name: 'castiin ', age: '12' },
        { name: 'malquin ', age: '30' },
      ]
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
