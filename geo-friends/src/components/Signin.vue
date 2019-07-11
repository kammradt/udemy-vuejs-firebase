<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 pt-5>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary" class="text-xs-center">
              <v-flex display-1 v-text="'Lets go!'" />
            </v-toolbar>
            <v-card-text>
              <v-flex
                v-if="feedback"
                v-text="feedback"
                headline
                class="text-xs-center error--text"
              />
              <v-form @submit.prevent="login">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  prepend-icon="person"
                  type="text"
                />
                <v-text-field
                  v-model="form.password"
                  label="Password"
                  prepend-icon="lock"
                  type="password"
                  @keydown.enter="login"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-text="'Login'"
                @click="login"
                class="headline"
                block
                color="primary"
              />
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      feedback: ''
    }
  },
  methods: {
    login () {
      if (this.form.email && this.form.password) {
        firebase.auth().signInWithEmailAndPassword(
          this.form.email, this.form.password
        ).then(credencials => {
          this.$router.push({ name: 'Index' })
        }).catch(error => {
          this.feedback = error.message
        })
      } else {
        this.showFeedback('Please fill both fields!')
      }
    },
    showFeedback (text) {
      this.feedback = text
      // eslint-disable-next-line
      setTimeout(() => this.feedback = '', 4000)
    }
  }
}
</script>
