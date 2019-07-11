<template>
  <v-toolbar class="mb-2">
    <v-toolbar-title class="display-1">
      <span class="primary--text">Geo</span> <span class="font-weight-light" v-text="'Friends'" />
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn flat v-text="'Sign In'" class="text-capitalize headline font-weight-light" />
      <v-btn
        :to="{ name: 'Signup' }"
        flat
        color="primary"
        v-text="'Sign Up'"
        class="text-capitalize headline"
      />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
