<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix">
      <el-button type="primary" @click="mainClick(link)">View</el-button>
      <span class="ref-header">{{ name }}</span>
    </div>
    <p>{{ description }}</p>
  </el-card>
</template>

<script lang="ts">
export default {
  name: 'Reference',
  props: {
    link: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    mainClick(link: string) {
      window.open(link, '_blank');
    },
  },
};
</script>
<style>
</style>
