<template>
  <v-toolbar>
    <v-toolbar-title class="display-1">
      Geo <span class="font-weight-light" v-text="'Friends'" />
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn icon>
        <v-icon color="red">favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
