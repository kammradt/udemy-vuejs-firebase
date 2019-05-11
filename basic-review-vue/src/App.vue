<template>
  <div id="app">
    <h1>Hi there!</h1>
    <AllFriends :friends="friends" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import AllFriends from '@/components/AllFriends'
import OnlineFriends from '@/components/OnlineFriends'

export default {
  name: 'app',
  components: {
    AllFriends, OnlineFriends
  },
  data() {
    return {
      friends: [
        { name: 'Kamm', online: true },
        { name: 'Alve', online: true },
        { name: 'Cast', online: false },
        { name: 'Natn', online: false }
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
