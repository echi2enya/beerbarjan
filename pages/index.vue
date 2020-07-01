<template lang="pug">
  .l-content#top(ontouchstart='')
    header.l-header
      swiper(
        :options = {
          effect: 'fade',
          speed: 2000,
          loop: true,
          autoplay: {
            delay: 0,
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
    main
      .c-block#map
        iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.524019656593!2d139.720235815259!3d35.68872038019251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5478ef5331%3A0x567a2eb3b90b0a8e!2z44OT44O844Or44OQ44O8SkFO!5e0!3m2!1sja!2sjp!4v1592832322146!5m2!1sja!2sjp' frameborder='0' style='border:0;width:100%;height:100%;' allowfullscreen='' aria-hidden='false' tabindex='0')
      .c-block#information
        .inner
          img.c-swiper(src='~assets/img/swiper/glass.jpg')
      .c-block#news
        .inner
          img.c-swiper(src='~assets/img/swiper/taps.jpg')
      .c-block#photo
        .inner
          img.c-swiper(src='~assets/img/swiper/blank.jpg')
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
.l-content {
  > .inner {
    width: 980px;
    margin: 0 auto;
  }
}
.l-header {
  width: 100vw;
  height: calc(100vh - (100px + 10px * 2));
  position: sticky;
  top: 0;
  .l-container.-scroll-top & {
    height: 100vh;
  }
}
.c-swiper {
  width: 100vw;
  height: calc(100vh - (100px + 10px * 2));
  object-fit: cover;
  .l-container.-scroll-top & {
    height: 100vh;
  }
}
.c-block {
  width: 100vw;
  height: calc(100vh - (100px + 10px * 2));
  position: relative;
  position: sticky;
  top: 0;
  background-color: #fff;
}
@media (max-width: 767px) {
  .l-content {
    > .inner {
      width: 100%;
    }
  }
  .l-header {
    height: calc(100vh / 7 * 5);
  }
  .c-swiper {
    height: calc(100vh / 7 * 5);
  }
  .c-block {
    height: calc(100vh / 7 * 5);
  }
}
</style>
