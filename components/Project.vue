<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix">
      <el-button
        v-for="link in project.actions"
        :key="link.url"
        :href="link.url"
        type="primary"
        plain
        @click="mainClick(link.url)"
      >
        {{ link.text }}
      </el-button>
      <span class="ref-header">{{ project.title }}</span>
    </div>
    <div>
      <h3>
        <small>{{ project.subheading }}</small>
      </h3>
      <p class="project-description">{{ project.description }}</p>
      <p class="techs">
        <span class="category">Technical environment</span>:
        <span class="tech-list">{{ project.techs }}</span>
      </p>
    </div>
  </el-card>
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
p {
  line-height: 1.5em;
  margin-top: 10px;
}
</style>
