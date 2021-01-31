<template>
  <el-card shadow="always">
    <div slot="header">
      <span class="ref-header">Work</span>
    </div>
    <h3>
      Building Systems Analyst
      <small>at General Services Administration</small>
    </h3>
    <ul>
      <li v-for="item in notes" :key="item">{{ item }}</li>
    </ul>
  </el-card>
</template>

<script lang="ts">
export default {
  name: 'Work',
  data() {
    return {
      notes: [
        'Earned the Public Building Service Commissioner’s Award for my support of the national solid waste and recycling program.',
        'Received FAC-P/PM Level 1 Certification (Federal Acquisition Certification for Program and Project Managers)',
        'Monitor and troubleshoot devices in region-wide Advanced Metering program.',
        'Built a dashboard for energy & water utility data on the branch’s Google Site based on a pre-existing Excel dashboard.',
        'Built a set of spreadsheets with added features for easier Waste Diversion tracking.',
        'Built an automated archival system for Waste Diversion reports using a custom-built email filter and a Google Group.',
        'Built a server monitor as a Windows server using SQL queries to monitor an item that the server couldn’t do itself in order to decrease response time in case of failure.',
        'Built a small scheduling component in LonMaker as a backup for the existing scheduling that failed.',
        'Built a front-end to display and manage historical advanced metering data for the region.',
      ],
    };
  },
};
</script>

<style>
</style>
