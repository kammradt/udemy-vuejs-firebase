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
        flat
        fab
        v-text="'Sign In'"
        class="text-capitalize"
      />
      <v-btn
        :to="{ name: 'Signup' }"
        flat
        fab
        color="primary"
        v-text="'Sign Up'"
        class="text-capitalize"
      />
      <v-btn
        @click="logout"
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
