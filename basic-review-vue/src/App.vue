<template>
  <div id="app">
    <h1>Hi there!</h1>
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends" />
    <br>
    {{ error }}
    <input type="text" v-model="searchKeyword">
    <div  v-for="post in filteredPosts" :key="post.id">
      <p> <strong> {{ post.title }} </strong> </p>
      <p> {{ post.body | cuttingUntil50}}</p>
      <br>
    </div>

  </div>
</template>

<script>
import AllFriends from '@/components/AllFriends'
import OnlineFriends from '@/components/OnlineFriends'
import axios from 'axios'

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
      ],
      posts: [],
      error: null,
      searchKeyword: ''
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.includes(this.searchKeyword)
      })
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      this.posts = response.data
    }).catch(error => {
      this.error = error
    })
  },
  methods: {
    deleteFriend(payload){
      // this.friends.pop(payload.name)
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
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
