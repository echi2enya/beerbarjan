<template lang="pug">
  .l-content#top(ontouchstart='')
    header.l-header
      client-only
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
      .c-block.-information#information
        .inner
          .about
            p
              strong クラフトビールは日々替わります。お楽しみに
            p 2018年8月1日オープン
            p クラフトビール樽生4種、ヱビス樽生、特製の鶏のからあげ他。カウンター席、テーブル席、立ち飲みカウンター
            p 日曜日定休
              br
              span ※月曜日が祝日の場合、土日営業し月曜日がお休み
          .twitter
            a(
              class='twitter-timeline'
              href='https://twitter.com/beerbarjan?ref_src=twsrc%5Etfw'
              data-chrome='noheader nofooter'
              data-tweet-limit='1'
              data-theme='dark'
            ) Tweets by beerbarjan
      .c-block.-menu#menu
        .inner
          img.c-swiper(src='~assets/img/swiper/taps.jpg')
      .c-block.-map#map
        iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.524019656593!2d139.720235815259!3d35.68872038019251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5478ef5331%3A0x567a2eb3b90b0a8e!2z44OT44O844Or44OQ44O8SkFO!5e0!3m2!1sja!2sjp!4v1592832322146!5m2!1sja!2sjp' frameborder='0' style='border:0;width:100%;height:100%;' allowfullscreen='' aria-hidden='false' tabindex='0')
      //- .c-block#photo
        .inner
          img.c-swiper(src='~assets/img/swiper/blank.jpg')
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
// import Logo from '~/components/Logo.vue'

@Component({
  // components: {
  //   Tweet
  // }
})

export default class extends Vue {
  // head: {
  //   title: 'test',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  //   ]
  // }
}
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
  .l-container.-offsetY_0 & {
    height: 100vh;
  }
}
.c-swiper {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.c-block {
  width: 100vw;
  height: calc(100vh - (100px + 10px * 2));
  position: relative;
  position: sticky;
  top: 0;
  background-color: #fff;
  &.-information {
    height: auto;
    > .inner {
      max-width: 980px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: {
        left: auto;
        right: auto;
      }
      padding: {
        top: 15px;
        bottom: 15px;
      }
      > .about {
        max-width: 50%;
        padding: 10px;
        p:not(:first-child) {
          margin-top: 10px;
        }
        span {
          font-size: 1.2rem;
        }
      }
      > .twitter {
      }
    }
  }
  &.-menu {
  }
  &.-map {
    height: 100vh;
  }
}
@media (max-width: 767px) {
  .l-content {
    > .inner {
      width: 100%;
    }
  }
  .c-block {
    height: calc(100vh - (10px + 14px * 1.5 + 20px + 80px + 10px));
    &.-information {
      height: auto;
      > .inner {
        flex-direction: column-reverse;
        padding: {
          top: 0;
          bottom: 0;
        }
        > .twitter {
          width: 100%;
          background-color: #292f33;
        }
        > .about {
          max-width: none;
        }
      }
    }
  }
}
</style>
