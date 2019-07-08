<template>
  <v-container align-content-center>
    <v-card class="ma-3">
      <v-flex
        v-text="'Welcome to vue-chat 💬'"
        teal--text
        font-weight-light
        display-2
        text-xs-center
        pt-4
      />
      <v-form ref="form" @submit.prevent="enterChat" class="ma-3">
        <v-text-field
          label="Name"
          placeholder="Enter your name"
          v-model="name"
          :rules="nameRules"
          :counter="20"
          required
        />
      </v-form>
      <v-card-actions>
        <v-btn
          @click="enterChat"
          v-text="'Enter'"
          color="primary"
          class="headline font-weight-light"
          block
        />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: null,
    nameRules: [
      v => (!!v) || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      v => (v && v.length >= 5) || 'Name must be at least 5 characters'
    ]
  }),

  methods: {
    enterChat () {
      if (this.$refs.form.validate()) {
        this.$router.push({
          name: 'Chat',
          params: { name: this.name }
        })
        this.clear()
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
