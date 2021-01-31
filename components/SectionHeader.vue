<template>
  <el-row>
    <el-col :xs="24">
      <h3 class="section-header">{{ title }}</h3>
    </el-col>
  </el-row>
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

<style scoped>
.section-header {
  color: black;
  font-weight: bold;
  padding: 20px 0;
  font-size: 20px;
}
</style>
