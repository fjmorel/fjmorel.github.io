<template>
  <v-row>
    <v-col cols="12">
      <h3>{{ title }}</h3>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    } as PropOptions<string>,
  },
});
</script>
