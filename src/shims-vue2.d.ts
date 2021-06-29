import Vue from "vue";

declare module 'vue/types/vue' {
  interface Vue {
    $api: any,
    $activeAccount: any,
  }
}
