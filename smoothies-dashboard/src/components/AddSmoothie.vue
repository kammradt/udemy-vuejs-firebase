<template>
  <v-content>
    <v-container grid-list-mg>
      <v-flex
        xs12
        font-weight-thin
        display-3
        class="secondary--text"
        text-xs-center
      >
        Add a new <span class="font-weight-light primary--text">Smoothie!</span>
      </v-flex>
      <v-form @submit.prevent="AddSmoothie">
        <v-layout column>
          <v-text-field label="Smoothie name" v-model="smoothie.title"/>
          <v-text-field
            @keydown.enter="addIngredient"
            v-model="smoothie.ingredient"
            label="Ingredients"
            hint="Press 'Enter' to add"
            class="mb-3"
          />
          <v-alert timeout="2000" :value="smoothie.isInvalid" color="primary" type="error" dismissible>
            <span class="font-weight-light subheading"> {{ smoothie.errorText }} </span>
          </v-alert>
          <v-flex v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <v-text-field
              v-model="smoothie.ingredients[index]"
              :label="`ingredient ${index + 1}`"
            />
          </v-flex>
          <v-btn @click="addSmoothie" v-text="'Add smoothie'" color="primary" />
        </v-layout>
      </v-form>
    </v-container>
  </v-content>
</template>

<script>
import db from '@/firebase/init'
import setTimeout from 'timers'
import slugify from 'slugify'

export default {
  name: 'AddSmoothie',
  data() {
    return {
      smoothie: {
        title: null,
        ingredient: null,
        ingredients: [],
        slug: null,
        isInvalid: false,
        errorText: null
      }
    }
  },
  methods: {
    addSmoothie() {
      if (this.smoothie.title) {

        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })

        db.collection('smoothies')
          .add({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug
          })
          .then(() => {
            this.$router.push({ name: 'Index' })
          })
          .catch(error => {
            console.log(error)
          })

      } else {
        this.smoothie.errorText = 'Enter a valid smoothie title!'
        this.smoothie.isInvalid = true
        setTimeout(() => { this.smoothie.isInvalid = false }, 2000)
      }
    },
    addIngredient() {
      if (this.smoothie.ingredient) {
        this.smoothie.ingredients.push(this.smoothie.ingredient)
        this.smoothie.ingredient = null
        this.smoothie.isInvalid = false
      } else {
        this.smoothie.errorText = 'Enter a valid ingredient!'
        this.smoothie.isInvalid = true
        setTimeout(() => { this.smoothie.isInvalid = false }, 2000)
      }
    }
  }
}
</script>
