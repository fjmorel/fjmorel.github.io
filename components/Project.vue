<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix">
      <el-button
        v-for="link in actions"
        :key="link.url"
        :href="link.url"
        type="primary"
        plain
        @click="mainClick(link.url)"
      >
        {{ link.text }}
      </el-button>
      <span class="ref-header">{{ title }}</span>
    </div>
    <div>
      <h3>
        <small>{{ subheading }}</small>
      </h3>
      <p class="project-description">{{ description }}</p>
      <p class="techs">
        <span class="category">Technical environment</span>:
        <span class="tech-list">{{ techs }}</span>
      </p>
    </div>
  </el-card>
</template>

<script lang="ts">
export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    subheading: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
    techs: {
      type: String,
      default: '',
      required: true,
    },
    actions: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  methods: {
    mainClick(url: string) {
      window.open(url, '_blank');
    },
  },
};
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
