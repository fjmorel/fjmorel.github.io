<template>
  <v-card>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle>{{ project.subheading }}</v-card-subtitle>
    <v-card-text>
      <p class="project-description">{{ project.description }}</p>
      <p class="techs">
        <span class="category">Technical environment</span>:
        <span class="tech-list">{{ project.techs }}</span>
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        v-for="link in project.actions"
        :key="link.url"
        :href="link.url"
        color="primary"
        outlined
        @click="mainClick(link.url)"
      >
        {{ link.text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Project } from '@/types/models';

export default Vue.extend({
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true,
    } as PropOptions<Project>,
  },
  methods: {
    mainClick(url: string) {
      window.open(url, '_blank');
    },
  },
});
</script>

<style scoped>
.techs {
  font-size: 0.9em;
}

.category {
  font-weight: bold;
}

.tech-list {
  font-style: italic;
}
</style>
