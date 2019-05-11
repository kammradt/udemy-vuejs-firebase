<template>
  <div>
      <h2>All friends</h2>
      <div v-for="friend in friends" :key="friend.name">
        <span>{{ friend.name }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AllFriends',
  props: ['friends']
}
</script>
