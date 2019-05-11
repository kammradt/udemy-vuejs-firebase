<template>
  <div>
      <h2>Online friends</h2>
      <div v-for="friend in friends" :key="friend.name">
        <span v-if="friend.online">{{ friend.name }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineFriends',
  props: ['friends']

}
</script>

<style scoped>
h2, span{
  color: green
}
</style>
