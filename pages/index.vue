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
          <Reference
            :link="item.link"
            :name="item.name"
            :description="item.description"
          />
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
          <Project
            :title="item.title"
            :subheading="item.subheading"
            :description="item.description"
            :techs="item.techs"
            :actions="item.actions"
          />
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
