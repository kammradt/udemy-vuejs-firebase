<template>
  <nav class="main-nav">
    <ul>
      <li> <router-link :to="{name: 'Home'}">Home</router-link> </li>
      <li> <router-link :to="{name: 'About'}">About</router-link> </li>
    </ul>
    <h2>Users</h2>
    <ul>
      <li v-for="(userId, index) in userIds" :key="index">
        <router-link :to="{ name: 'ViewProfile' , params: { user_id: userId }}">
          <span>Profile {{ userId }} </span>
        </router-link>
      </li>
    </ul>
    <h2> Navigation controls </h2>
    <ul id="buttons">
      <li><button @click="goBack">Go back</button></li>
      <li><button @click="goHome">Redirect to home</button></li>
      <li><button @click="goForward">Go Forward</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      userIds: ['123', '222', '333', '444']
    }
  },
  methods: {
    goHome () {
      this.$router.push({name: 'Home'})
    },
    goBack () {
      this.$router.go(-1)
    },
    goForward () {
      this.$router.go(1)
    }
  }
}
</script>

<style>
  .router-link-exact-active {
    color: red;
  }
</style>
