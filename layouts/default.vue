<template lang="pug">
  .l-container(:class='{ "-offsetY_0" : offsetY_0 }' ref='container')
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

export default class extends Vue {
  private offsetY_0: boolean = false
  private flag: boolean = true

  private mounted() {
    this.scroll()
    window.addEventListener('scroll', this.scroll)
  }

  private scroll() {
    if (this.flag) {
      this.flag = false
      setTimeout(() => {
        this.offsetY_0 = window.pageYOffset === 0 ? true : false
        this.flag = true
      }, 200)
    }
  }
}
</script>

<style lang="scss">
.l-container {
  position: relative;
}
</style>
