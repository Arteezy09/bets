<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="secondary">
      <span>Добавлен новый прогноз!</span>
      <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat dark app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">KDA</span>
        <span>BETS</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-md-and-down">

        <v-btn flat class="toolbut1" to='/' active-class="">
          <span>Все прогнозы</span>
        </v-btn>

        <v-btn flat class="toolbut1" to='/football' active-class="">
          <span>Футбол</span>
        </v-btn>

        <v-btn flat class="toolbut1" to='/hockey' active-class="">
          <span>Хоккей</span>
        </v-btn>

        <v-btn flat class="toolbut1" to='/tennis' active-class="">
          <span>Теннис</span>
        </v-btn>

        <v-btn flat class="toolbut1" to='/cybersport' active-class="">
          <span>Киберспорт</span>
        </v-btn>

        <v-menu offset-y open-on-hover>
          <v-btn flat slot="activator" class="toolbut1">
            <span>Другие виды</span>
            <v-icon>expand_more</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="link in links1" :key="link.text" :to="link.route">
              <v-btn flat class="toolbut1" block>
                <v-list-tile-title>{{ link.text }}</v-list-tile-title>
              </v-btn>
            </v-list-tile>
          </v-list>
        </v-menu>
        
      </v-toolbar-items>
      
      <Popup @projectAdded="snackbar = true" class="hidden-sm-and-down" />

    </v-toolbar>


    <v-navigation-drawer app v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <i class="fas fa-volleyball-ball"></i>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: { 
    Popup 
  },
  data() {
    return {
      drawer: false,
      links: [
        { text: 'Все прогнозы', route: '/' },
        { text: 'Футбол', route: '/football' },
        { text: 'Хоккей', route: '/hockey' },
        { text: 'Теннис', route: '/tennis' },
        { text: 'Киберспорт', route: '/cybersport' },
        { text: 'Баскетбол', route: '/basketball' },
        { text: 'Волейбол', route: '/volleyball' },
        { text: 'Бокс/MMA', route: '/boxing' }
      ],
      links1: [
        { text: 'баскетбол', route: '/basketball' },
        { text: 'волейбол', route: '/volleyball' },
        { text: 'бокс/MMA', route: '/boxing' }
      ],
      snackbar: false
    }
  }
}
</script>

<style>

.toolbut1:hover {
  background: #00E676;
  color: black;
  transition: background .2s linear;
}

</style>


