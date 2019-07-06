<template>
  <v-content>
    <v-container grid-list-md v-if="smoothie">
      <v-flex
        xs12
        font-weight-thin
        display-3
        class="secondary--text"
        text-xs-center
      >
        Edit <span class="font-weight-light primary--text"> {{ this.smoothie.title }}</span> !
      </v-flex>
      <v-form @submit.prevent="editSmoothie">
        <v-layout column>
          <v-text-field label="Smoothie name" v-model="smoothie.title"/>
          <v-text-field
            @keydown.enter="addIngredient"
            v-model="ingredient"
            label="Ingredients"
            hint="Press 'Enter' to add"
            class="mb-3"
          />
          <v-alert timeout="2000" :value="isInvalid" color="primary" type="error" dismissible>
            <span class="font-weight-light subheading"> {{ errorText }} </span>
          </v-alert>
          <v-flex v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <v-text-field
              v-model="smoothie.ingredients[index]"
              :label="`ingredient ${index + 1}`"
              :prepend-inner-icon="'delete'"
              @click:prepend-inner="deleteIngredient(ingredient)"
            />
          </v-flex>
          <v-btn @click="editSmoothie" v-text="'Update smoothie'" color="primary" />
        </v-layout>
      </v-form>
    </v-container>
  </v-content>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'EditSmoothie',
  data() {
    return {
      smoothie: null,
      ingredient: null,
      isInvalid: false,
      errorText: null
    }
  },
  created() {
    let search = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    search.get().then(response => {
      response.forEach(record => {
        this.smoothie = record.data()
        this.smoothie.id = record.id
      });
    })
  },
  methods: {
    editSmoothie() {
      if (this.smoothie.title) {
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })

        db.collection('smoothies')
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug
          })
          .then(() => {
            this.$router.push({ name: 'Index' })
          })

      } else {
        this.errorText = 'Enter a valid smoothie title!'
        this.isInvalid = true
        setTimeout(() => this.isInvalid = false, 2000)

      }
    },
    addIngredient() {
      if (this.ingredient) {
        this.smoothie.ingredients.push(this.ingredient)
        this.ingredient = null
        this.isInvalid = false
      } else {
        this.errorText = 'Enter a valid ingredient!'
        this.isInvalid = true
        setTimeout(() => this.isInvalid = false, 2000)
      }
    },
    deleteIngredient(deletedIngredient) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
        return deletedIngredient != ingredient
      }) 
    }
  }
}
</script>
