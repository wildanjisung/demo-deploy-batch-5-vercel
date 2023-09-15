<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>angka dari store : {{ angkaDariStore }}</h1>

    <v-text-field
      label="Outlined"
      outlined
      v-model="nilai"
    ></v-text-field>

    <v-row
      align="center"
      justify="space-around"
    >
      <v-btn
        color="primary"
        elevation="2"
        @click="changeAngka"
      >
        Ganti angka di store
      </v-btn>

      <v-btn
        color="primary"
        elevation="2"
        @click="fetchPokemon"
      >
        Fetch Pokemon
      </v-btn>

      <v-btn
        color="primary"
        elevation="2"
        @click="gantiWarna('#19a7d2')"
      >
        Biru
      </v-btn>

      <v-btn
        color="primary"
        elevation="2"
        @click="gantiWarna('#19d294')"
      >
        Hijau
      </v-btn>

      <v-btn
        color="primary"
        elevation="2"
        @click="gantiWarna('#d2a719')"
      >
        Oren
      </v-btn>

      <v-btn
        color="primary"
        elevation="2"
        @click="gantiGelap"
      >
        Gelap Terang
      </v-btn>
    </v-row>

    <!-- list pokemon -->
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name Pokemon
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="pokemon in listDariStore" 
            :key="pokemon.name"
          >
            <td>{{ pokemon.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      nilai: 0
    }
  },
  methods: {
    changeAngka() {
      this.$store.commit("setAngka", this.nilai)
    },
    fetchPokemon() {
      this.$store.dispatch("fetchList");
    },
    gantiWarna(color) {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.dark.primary = color
      } else {
        this.$vuetify.theme.themes.light.primary = color
      }
    },
    gantiGelap() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  computed: {
    angkaDariStore() {
      return this.$store.state.angka
    },
    listDariStore() {
      return this.$store.state.list
    },
  }
}
</script>
