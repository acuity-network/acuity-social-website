<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-card>
          <v-card-text>
            <div class="body-2 mb-4">The Acuity <router-link to="/regenesis">Regenesis</router-link> will create the ACU cryptocurrency. Because Acuity is built using <a href="https://www.substrate.io/">Substrate</a>, ACU will be able to participate natively in DeFi on <a href="https://kusama.network/">Kusama</a> and <a href="https://polkadot.network/">Polkadot</a>. However these ecosystems are not yet mature. DeFi on Ethereum is already mature and includes high profile projects such as <a href="https://uniswap.org/">Uniswap</a>.</div>
            <div class="text-h5 mb-1">WACU ERC20 token</div>
            <div class="body-2 mb-4">After 8th September ACU will represented on Ethereum by an ERC20 token called WACU (Wrapped ACU). ACU will be convertable to WACU and back again. This will serve as an effective mechanism for trading ACU on Ethereum and determining its market value. WACU conversion functionality will be built into the Acuity app.</div>
            <div class="text-h5 mb-1">ACU → WACU</div>
            <div class="body-2 mb-4">ACU can be deposited into the WACU smart contract on the Acuity blockchain. Included in the transaction will be an Ethereum address. The WACU service will detect this and send a transaction to the WACU ERC20 smart contract on the Ethereum blockchain directing it to mint WACU of the amount of ACU deposited (minus a fee to pay for the Ethereum transaction) and to allocate it to the Ethereum address supplied.</div>
            <div class="text-h5 mb-1">WACU → ACU</div>
            <div class="body-2 mb-4">An Ethereum account can instruct the WACU ERC20 smart contract to burn a quantity of its WACU. Included in the transaction will be an Acuity address. The WACU service will detect this and send another transaction to the WACU smart contract on the Acuity blockchain instructing it to release ACU to the supplied Acuity address.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Wrapped ACU',

    data: () => ({
    }),
  })
</script>
