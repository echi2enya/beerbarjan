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
  // private container: any = null
  // private pageYOffset: number = window.pageYOffset

  private mounted() {
    // if (this.float) {
    //   this.floatWrap = this.$refs.floatWrap as Element
    //   this.floatPrice = this.$refs.floatPrice as Element
    //   if (this.floatPrice.clientWidth > this.floatWrap.clientWidth / 2 && !this.isFinished) {
    //     this.isFloatColumn = true
    //   }
    //   this.scroll()
    //   window.addEventListener('scroll', this.scroll)
    // }
    // this.container = this.$refs.container as Element
    // console.log(this.container.scrollTop)
    // console.log(window.pageYOffset)
    // console.log(this.pageYOffset)
    this.scroll()
    window.addEventListener('scroll', this.scroll)
  }

  // @Watch('this.pageYOffset')
  // console.log('this.pageYOffset')
  private scroll() {
    // if (this.float) {
    //   const buttonTop = document.getElementById('buttonTop')
    //   const positionStart = buttonTop!.clientHeight + buttonTop!.offsetTop
    //   if (window.scrollY > positionStart || this.isFinished) {
    //     this.showFloat = true
    //   } else {
    //     this.showFloat = false
    //   }
    // }
    this.offsetY_0 = window.pageYOffset === 0 ? true : false
  }
}
</script>

<style lang="scss">
.l-container {
  position: relative;
}
</style>
