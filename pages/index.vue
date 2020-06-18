<template lang="pug">
  .l-content
    header.l-header
      swiper
        swiper-slide
          .c-swiper
            img.img(src='~assets/img/swiper/hieda.jpg')
        swiper-slide
          .c-swiper
            img.img(src='~assets/img/swiper/counter.jpg')
        swiper-slide
          .c-swiper
            img.img(src='~assets/img/swiper/glass.jpg')
        swiper-slide
          .c-swiper
            img.img(src='~assets/img/swiper/sign.jpg')
        swiper-slide
          .c-swiper
            img.img(src='~assets/img/swiper/tap.jpg')
        swiper-slide
          .c-swiper
            img.img(src='~assets/img/swiper/blank.jpg')
        swiper-slide
          .c-swiper
            img.img(src='~assets/img/swiper/taps.jpg')
    main.inner
      font-awesome-icon(icon='dollar-sign')
    footer
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})

export default class extends Vue {}
</script>

<style lang="scss" scoped>
.l-header {
  width: 100vw;
  height: 100vh;
}
.l-content {
  > .inner {
    width: 980px;
    margin: 0 auto;
  }
}
.c-swiper {
  width: 100vw;
  height: 100vh;
  > .img {
    object-fit: contain;
    // object-position: center;
  }
}
@media (max-width: 767px) {
  .l-content {
    > .inner {
      width: 100%;
    }
  }
}
</style>
