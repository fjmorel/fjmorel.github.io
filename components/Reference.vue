<template>
  <v-card>
    <v-card-title>{{ site.name }}</v-card-title>
    <v-card-subtitle>{{ site.description }}</v-card-subtitle>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" outlined @click="mainClick()">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Site } from '@/types/models';

export default Vue.extend({
  name: 'Reference',
  props: {
    site: {
      type: Object,
      required: true,
    } as PropOptions<Site>,
  },
  methods: {
    mainClick() {
      window.open(this.$props.site.link, '_blank');
    },
  },
});
</script>
