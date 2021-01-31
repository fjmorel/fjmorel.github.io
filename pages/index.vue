<template>
  <v-app>
    <v-app-bar color="blue" app>Fred Morel - Software Developer</v-app-bar>
    <v-main class="grey lighten-3">
      <v-container fluid>
        <SectionHeader title="Online Presence" />
        <v-row>
          <v-col
            v-for="item in sites"
            :key="item.name"
            cols="12"
            sm="5"
            lg="3"
            xl="3"
          >
            <Reference :site="item" />
          </v-col>
        </v-row>
        <SectionHeader title="Projects" />
        <v-row>
          <v-col
            v-for="item in projects"
            :key="item.name"
            cols="12"
            sm="6"
            lg="4"
            xl="3"
          >
            <Project :project="item" />
          </v-col>
        </v-row>
        <SectionHeader title="History" />
        <v-row>
          <v-col cols="12" sm="6" xl="4">
            <Education />
          </v-col>
          <v-col cols="12" sm="6" xl="4">
            <Work />
          </v-col>
        </v-row>
        <SectionHeader title="Other" />
        <v-row>
          <v-col cols="12" sm="6" xl="4">
            <Downloads />
          </v-col>
          <v-col cols="12" sm="6" xl="4">
            <Contact />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { sites } from '@/data/sites';
import { projects } from '@/data/projects';

export default {
  name: 'HomePage',
  data() {
    return { sites, projects };
  },
};
</script>
