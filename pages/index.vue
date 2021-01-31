<template>
  <el-container>
    <el-header class="header" height="60px">
      <Header />
    </el-header>
    <el-main>
      <SectionHeader title="Online Presence" />
      <el-row>
        <el-col
          v-for="item in sites"
          :key="item.name"
          :xs="24"
          :sm="10"
          :lg="7"
          :xl="4"
        >
          <Reference :site="item" />
        </el-col>
      </el-row>
      <SectionHeader title="Projects" />
      <el-row>
        <el-col
          v-for="item in projects"
          :key="item.name"
          :xs="24"
          :sm="12"
          :lg="8"
          :xl="4"
        >
          <Project :project="item" />
        </el-col>
      </el-row>
      <SectionHeader title="History" />
      <el-row>
        <el-col :xs="24" :sm="12" :xl="8">
          <Education />
        </el-col>
        <el-col :xs="24" :sm="12" :xl="8">
          <Work />
        </el-col>
      </el-row>
      <SectionHeader title="Other" />
      <el-row>
        <el-col :xs="24" :sm="12" :xl="8">
          <Downloads />
        </el-col>
        <el-col :xs="24" :sm="12" :xl="8">
          <Contact />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
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

<style>
</style>
