<template>
  <v-timeline dense="true" style="margin: 0 20px;">
    <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.completed ? '#E6007A' : primary">
      <template v-slot:opposite>
        {{ item.when }}
      </template>
      <v-card class="elevation-2">
        <v-card-title style="word-break: normal;">{{ item.title }}</v-card-title>
        <v-card-subtitle v-if="dense">{{ item.when }}</v-card-subtitle>
        <v-card-text v-html="item.text"></v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'AtomicSwap',

    data: () => ({
      items: [
        {
          title: 'System designed',
          text: '',
          completed: true,
        },
        {
          title: 'Solidity smart contracts written',
          text: '',
          completed: true,
        },
        {
          title: 'Off-chain worker to index order book',
          text: '',
          completed: false,
        },
        {
          title: 'Create basic frontend',
          text: '',
          completed: false,
        },
        {
          title: 'Deploy contracts to Acuity',
          text: 'Deploy either "Contract" or "Ethereum" pallet on Acuity',
          completed: false,
        },
        {
          title: 'Deploy contracts on Ethereum',
          text: '',
          completed: false,
        },
        {
          title: 'Daemon to report value & volume to Coin Gecko, etc',
          text: '',
          completed: false,
        },
        {
          title: 'Add Ethereum Classic Support',
          text: '',
          completed: false,
        },
        {
          title: 'Improve frontend',
          text: '',
          completed: false,
        },
      ],
    }),
  })
</script>
