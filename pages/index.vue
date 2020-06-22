<template lang="pug">
  .l-content
    header.l-header
      swiper(
        :options = {
          effect: 'fade',
          speed: 1000,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        }
      )
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/hieda.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/counter.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/glass.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/sign.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/tap.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/blank.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/taps.jpg')
    main.inner
      #map
        img.c-swiper(src='~assets/img/swiper/taps.jpg')
      //- p 四ッ谷荒木町のビールバーJAN(ジャン)です
      //- p 2018年8月1日オープン
      //- p クラフトビール樽生4種、ヱビス樽生、特製の鶏のからあげ
      //- p カウンター席、テーブル席、立ち飲みカウンター
      //- p
      //-   | 日曜日定休
      //-   br
      //-   | ※月曜日が祝日の場合、土日営業し、月曜日がお休み
      //- p クラフトビールは日々替わります！
      //- p
      //-   | 新宿区荒木町2-15 2階
      //-   br
      //-   | 03-3226-1556
      //- font-awesome-icon(icon='dollar-sign')
      //- swiper
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/hieda.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/counter.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/glass.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/sign.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/tap.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/blank.jpg')
        swiper-slide
          img.c-swiper(src='~assets/img/swiper/taps.jpg')
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import Logo from '~/components/Logo.vue'

@Component({
  // components: {
  //   Logo
  // }
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
  height: calc(100vh - 120px);
  object-fit: cover;
}
@media (max-width: 767px) {
  .l-content {
    > .inner {
      width: 100%;
    }
  }
  .c-swiper {
    height: calc(100vh / 7 * 5);
    /* height: calc(100vw * 1.414); */
    /* height: calc(100vw * 1.618); */
  }
}
</style>
