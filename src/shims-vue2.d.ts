import Vue from "vue";

declare module 'vue/types/vue' {
  interface Vue {
    $acuityClient: any,
    $ethClient: any,
    $activeAccount: any,
  }
}
