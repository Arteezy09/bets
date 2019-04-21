<template>
  <v-dialog max-width="600px" v-model="dialog" persistent>
    <v-btn flat slot="activator" class="secondary">Добавить прогноз</v-btn>
    <v-card>
      <v-card-title>
        <h2 class="ml-3">Новый прогноз</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-textarea v-model="zagolovok" label="Заголовок" :rules="inputRules" outline></v-textarea>
          <v-textarea v-model="image" label="Ссылка на фотографию" outline :rules="inputRules"></v-textarea>
          <v-text-field v-model="prognoz" label="Прогноз" :rules="inputRules" clearable outline></v-text-field>
          <v-text-field v-model="koefficient" label="Коэффициент" :rules="inputRules" clearable outline></v-text-field>
          <v-select v-model="vidsporta" :items="items" label="Вид спорта" outline :rules="inputRules"></v-select>   
          <v-text-field v-model="time" label="Время матча" :rules="inputRules" clearable outline></v-text-field>

          <v-spacer></v-spacer>

          <v-btn small flat @click="cancel" class="secondary mt-5">Отмена</v-btn>
          <v-btn small flat @click="submit" class="secondary mt-5 ml-2" :loading="loading">Принять</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import db from '@/fb'

export default {
  data() {
    return {
      zagolovok: '',
      image: '',
      prognoz: '',
      koefficient: '',
      items: ['football', 'hockey', 'tennis', 'cybersport', 'basketball', 'volleyball', 'boxing/MMA'],
      vidsporta: '',
      time: '',
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 4 || 'Minimum length is 4 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true
        const project = { 
          zagolovok: this.zagolovok,
          image: this.image,
          prognoz: this.prognoz,
          koefficient: this.koefficient,
          vidsporta: this.vidsporta,
          time: this.time,
        }
        db.collection('projects').add(project)
        .then(() => {
          this.loading = false
          this.dialog = false
          this.$emit('projectAdded')
          this.zagolovok = ''
          this.image = ''
          this.prognoz = ''
          this.koefficient = ''
          this.vidsporta = ''
          this.time = ''
        })
      }
    },
    cancel() {
      this.dialog = false
    }
  }
}
</script>
