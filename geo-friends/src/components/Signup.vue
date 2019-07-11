<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 pt-5>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary" class="text-xs-center">
              <v-flex display-1 v-text="'Join us!'" />
            </v-toolbar>
            <v-card-text>
              <v-flex
                v-if="feedback"
                v-text="feedback"
                headline
                class="text-xs-center error--text"
              />
              <v-form ref="form" @submit.prevent="createAccount">
                <v-text-field
                  v-model="form.email"
                  :rules="[rules.required, rules.maximum, rules.email]"
                  label="Email"
                  prepend-icon="person"
                  type="text"
                />
                <v-text-field
                  v-model="form.nickname"
                  :rules="[rules.required, rules.maximum]"
                  label="Nickname"
                  prepend-icon="person"
                  type="text"
                />
                <v-text-field
                  v-model="form.password"
                  :rules="[rules.required, rules.maximum]"
                  label="Password"
                  prepend-icon="lock"
                  type="password"
                  @keydown.enter="createAccount"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-text="'Create Account'"
                @click="createAccount"
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
import slugift from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      form: {
        email: '',
        password: '',
        nickname: '',
        slug: ''
      },
      feedback: '',
      rules: {
        required: v => !!v || 'Please insert a valid value.',
        maximum: v => v.length <= 120 || 'Maximum 120 characters',
        email: v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    createAccount () {
      if (this.$refs.form.validate()) {
        this.form.slug = slugift(this.form.nickname, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })

        let search = db.collection('users').doc(this.form.slug)
        search.get().then(doc => {
          if (doc.exists) {
            this.showFeedback('This nickname already exist!')
          } else {
            firebase.auth()
              .createUserWithEmailAndPassword(this.form.email, this.form.password)
              .then(credentials => {
                search.set({
                  nickname: this.form.nickname,
                  geolocation: null,
                  user_id: credentials.user.uid
                })
              }).then(() => {
                this.$router.push({ name: 'Index' })
              })
              .catch(error => {
                this.showFeedback(error.message)
              })
          }
        })
        // this.$refs.form.reset()
      } else {
        this.showFeedback('Fill fields correctly!')
      }
    },
    showFeedback (text) {
      this.feedback = text
      setTimeout(() => this.feedback = '', 4000)
    }
  }
}
</script>
