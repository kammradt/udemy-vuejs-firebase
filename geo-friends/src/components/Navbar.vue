<template>
  <v-toolbar class="mb-2">
    <v-toolbar-title class="display-1" @click="goToIndex">
      <span class="primary--text">Geo</span> <span class="font-weight-light" v-text="'Friends'" />
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
        :to="{ name: 'Signin' }"
        v-if="!user"
        flat
        fab
        v-text="'Sign In'"
        class="text-capitalize"
      />
      <v-btn
        :to="{ name: 'Signup' }"
        v-if="!user"
        flat
        fab
        color="primary"
        v-text="'Sign Up'"
        class="text-capitalize"
      />
      <v-btn
        v-if="user"
        flat
        v-text="user.email"
        class="text-none font-weight-light"
      />
      <v-btn
        @click="logout"
        v-if="user"
        flat
        fab
        v-text="'Logout'"
        class="text-capitalize error--text"
      />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data () {
    return {
      user: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  },
  methods: {
    goToIndex () {
      this.$router.push({ name: 'Index' })
    },
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({ name: 'Signin' })
        })
    }
  }
}
</script>
