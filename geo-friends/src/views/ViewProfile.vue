<template>
  <h1 v-if="profile">User profile: {{profile.nickname}}</h1>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'ViewProfile',
  data () {
    return {
      profile: {
        //
      }
    }
  },
  mounted () {
    let search = db.collection('users')
    search.doc(this.$route.params.id).get()
      .then(user => {
        this.profile = user.data()
      })
  }
}
</script>
