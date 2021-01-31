<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix">
      <el-button type="primary" @click="mainClick()">View</el-button>
      <span class="ref-header">{{ site.name }}</span>
    </div>
    <p>{{ site.description }}</p>
  </el-card>
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
<style>
</style>
