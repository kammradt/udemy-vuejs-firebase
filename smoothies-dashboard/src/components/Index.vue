<template>
  <v-content>
    <v-container grid-list-md mt-4>
      <v-layout align-start justify-start row wrap>
        <v-flex xs12 md4 v-for="smoothie in smoothies" :key="smoothie.id">
          <v-card class="ma-2">
            <v-card-title class="font-weight-light headline">
              {{ smoothie.title }}
              <v-spacer></v-spacer>
              <v-btn @click="deleteSmoothie(smoothie.id)" icon dark outline color="error">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-btn
                v-for="(ingredient, index) in smoothie.ingredients"
                :key="index"
                color="primary"
                round
                outline
                v-text="ingredient"
              />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return {
      smoothies: []
    }
  },
  created(){
    db.collection('smoothies')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let smoothie = doc.data()
          smoothie.id = doc.id
          this.smoothies.push(smoothie)
        });
      })

  },
  methods: {
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie =>{
        return smoothie.id != id
      })
    }
  }
}
</script>
