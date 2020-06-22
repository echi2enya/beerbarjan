<template lang="pug">
  .l-container
    nuxt
    Footer
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Footer from '~/components/Footer.vue'

@Component({
  components: {
    Footer
  }
})

export default class extends Vue {}
</script>

<style lang="scss">
.l-container {
  position: relative;
}
</style>
