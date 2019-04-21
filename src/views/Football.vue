<template>
  <div class="football">

    <v-container class="my-2">
      <v-layout row justify-start class="mb-2">
        <v-tooltip top>
          <v-btn small flat color="black" @click="sortBy('time')" slot="activator">
            <v-icon small left>date_range</v-icon>
            <span class="caption text-lowercase">по дате</span>
          </v-btn>
          <span>сортировать по дате</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="black" @click="sortBy('koefficient')" slot="activator">
            <v-icon small left>trending_up</v-icon>
            <span class="caption text-lowercase">по коэффициенту</span>
          </v-btn>
          <span>сортировать по коэффициенту</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-tooltip top class="hidden-sm-and-down">
          <v-btn small flat color="black" @click="view" slot="activator">
            <v-icon small left>view_module</v-icon>
            <span class="caption text-lowercase">сетка</span>
          </v-btn>
          <span>изменить вид</span>
        </v-tooltip>
      </v-layout>
    </v-container>

    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                v-for="card in projects"
                :key="card.id"
                xs12 sm12
                v-bind="{ [`md${flex}`]: true }" 
              > 
                <v-card>
                  <v-img :src="card.image" height="250px"></v-img>
                  <v-card-title>
                    <div>
                      <div class="body-2 font-weight-bold">{{ card.zagolovok }}</div>
                    
                      <div class="body-1 font-weight-regular">{{ card.prognoz }}</div>
                      <div class="caption">{{ card.time }}</div>
                      <div class="body-2 red--text">{{ card.koefficient }}</div>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import db from '@/fb'

export default {
  data() {
    return {
      projects: [],
      flex: 4,
    }
  },

  methods: {

    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },

    view() {
      if (this.flex == '3') {
        this.flex = '4'
      }
      else if (this.flex == '4') {
        this.flex = '6'
      }
      else if (this.flex == '6') {
        this.flex = '3'
      }
    }

  },

  created() {
    db.collection('projects').where('vidsporta', '==', 'football').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }  
      })
    })
  }
}
</script>

