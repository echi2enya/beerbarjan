<template lang="pug">
  .container-default(:class='{ "-offsetY_0" : offsetY_0 }' ref='container')
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
      this.pageOffsetY()
      setTimeout(() => {
        this.pageOffsetY()
        this.flag = true
      }, 100)
    }
  }

  private pageOffsetY() {
    this.offsetY_0 = window.pageYOffset === 0 ? true : false
  }
}
</script>

<style lang="scss">
%container {
  position: relative;
}
.container-default {
  @extend %container;
}
</style>
