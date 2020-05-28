<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        :cols="2"
      >
        <v-spacer></v-spacer>
      </v-col>
      <v-col
        :cols="8"
      >
        <v-card raised>
          <v-card-subtitle v-text="msg" class="subtitle"></v-card-subtitle>
          <v-card-title>
            Star Wars - People ({{ rows }})
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :items-per-page="perPage"
            :page="page"
            :headers="headers"
            :search="search"
            :server-items-length="rows"
            :loading="loading"
            :options.sync="options"
            :items="getPersonagens.results"
            hide-default-footer
            class="elevation-1"
          ></v-data-table>
          <v-divider></v-divider>
          <v-card-actions>
            <v-pagination
              v-model="page"
              :length="pagesTotal"
              :total-visible="7"
              :value="page"
            ></v-pagination>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        :cols="2"
      >
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
    import { mapActions, mapGetters } from "vuex"
    export default {
        props: {
          msg: String
        },
        data() {
            return {
                loading: false,
                search: '',
                options: {},
                headers: [
                    {
                        text: 'Name',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {
                        text: 'Height',
                        align: 'start',
                        sortable: false,
                        value: 'height',
                    },
                    {
                        text: 'Hair',
                        align: 'start',
                        sortable: false,
                        value: 'hair_color',
                    },
                    {
                        text: 'Skin',
                        align: 'start',
                        sortable: false,
                        value: 'skin_color',
                    },
                ],
                perPage: 10,
                page: 1,
            }
        },
        computed: {
          ...mapGetters(['getPersonagens']),
          rows() {
              return this.getPersonagens.count
          },
          pagesTotal() {
              return Math.ceil(this.rows/this.perPage)
          },
        },
        watch: {
          'page'(){
            let params = {'search': this.search, 'page': this.page}
            this.carregarPersonagens(params)
          },
          'search'(){
            let params = {'search': this.search, 'page': this.page}
            this.procurarPersonagens(params)
          }
        },
        methods: {
          ...mapActions(['carregarPersonagens', 'procurarPersonagens']),
        },
        mounted() {
          let params = {'search': this.search, 'page': this.page}
          this.carregarPersonagens(params)
        },
    }
</script>
<style>
  .theme--light.v-pagination .v-pagination__item--active {
    color: #000 !important;
    font-weight: bold !important;;
    background-color: #f3f3f3 !important;
  }
  .v-data-table .v-data-table-header tr th {
    text-align: left !important;
    font-weight: bold;
    font-size: 1em;
  }
  .v-card .v-card__subtitle.subtitle {
    text-align: center !important;
    font-weight: bold;
    font-size: 1em;
  }
</style>