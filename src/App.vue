<template>
  <v-app class="white">
    <Toolbar />
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
export default {
  components: { 
    Toolbar, 
    Footer 
  },
  name: 'App'
}
</script>

