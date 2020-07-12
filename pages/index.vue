<template lang="pug">
  .l-content#top
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
            img.c-header(src='~assets/img/swiper/hieda.jpg')
          swiper-slide
            img.c-header(src='~assets/img/swiper/counter.jpg')
          swiper-slide
            img.c-header(src='~assets/img/swiper/glass.jpg')
          swiper-slide
            img.c-header(src='~assets/img/swiper/sign.jpg')
          swiper-slide
            img.c-header(src='~assets/img/swiper/tap.jpg')
          swiper-slide
            img.c-header(src='~assets/img/swiper/blank.jpg')
    main.l-main
      .c-block.-information#information
        .inner
          .about
            p
              strong クラフトビールは日々替わります。お楽しみに
            br
            p 2018年8月1日オープン
            br
            p クラフトビール樽生4種、ヱビス樽生、特製の鶏のからあげ…
            p カウンター席、テーブル席、立ち飲みカウンター
            br
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
      .c-block.-photo#photo
        client-only
          swiper(
            :options = {
              speed: 500,
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false
              },
              slidesPerView: 3,
              centeredSlides: true,
              breakpoints: {
                768: {
                  slidesPerView: 5
                }
              }
            }
          )
            swiper-slide
              Photo(src='counter/glass.jpg' name='photo1')
              Photo(src='brewer/sanktgallen/hop/tree.jpg' name='photo2')
              Photo(src='etc/paperLantern.jpg' name='photo3')
              Photo(src='counter/table.jpg' name='photo4')
              Photo(src='etc/sign.jpg' name='photo5')
            swiper-slide
              Photo(src='etc/laCachette.jpg' name='photo6')
              Photo(src='card/stand.jpg' name='photo7')
              Photo(src='etc/appearance.jpg' name='photo8')
              Photo(src='brewer/sanktgallen/hop/flower.jpg' name='photo9')
              Photo(src='food/karaage.jpg' name='photo10')
            swiper-slide
              Photo(src='brewer/sanktgallen/pinApple.jpg' name='photo11')
              Photo(src='food/assorted/salami.jpg' name='photo12')
              Photo(src='etc/sharikimon.jpg' name='photo13')
              Photo(src='tap/smile.jpg' name='photo14')
              Photo(src='food/torisoba/zoom.jpg' name='photo15')
            swiper-slide
              Photo(src='menu/food.jpg' name='photo16')
              Photo(src='food/torisoba/circle.jpg' name='photo17')
              Photo(src='glass/weizen.jpg' name='photo18')
              Photo(src='glass/straight.jpg' name='photo19')
              Photo(src='menu/beer_width.jpg' name='photo20')
            swiper-slide
              Photo(src='food/assorted/rawHam.jpg' name='photo21')
              Photo(src='glass/drinking.jpg' name='photo22')
              Photo(src='brewer/sanktgallen/shonanGold/tree.jpg' name='photo23')
              Photo(src='hieda/left.jpg' name='photo24')
              Photo(src='tap/foam.jpg' name='photo25')
            swiper-slide
              Photo(src='glass/weizen_poster.jpg' name='photo26')
              Photo(src='tap/finish.jpg' name='photo27')
              Photo(src='food/assorted/yamaimo.jpg' name='photo28')
              Photo(src='tap/beginning.jpg' name='photo29')
              Photo(src='wall/entrance.jpg' name='photo30')
            swiper-slide
              Photo(src='food/liverPutty.jpg' name='photo31')
              Photo(src='glass/foam.jpg' name='photo32')
              Photo(src='food/torisoba/beer.jpg' name='photo33')
              Photo(src='food/sausage/white.jpg' name='photo34')
              Photo(src='brewer/sanktgallen/shonanGold/box.jpg' name='photo35')
      .c-block.-map#map
        iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.524019656593!2d139.720235815259!3d35.68872038019251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5478ef5331%3A0x567a2eb3b90b0a8e!2z44OT44O844Or44OQ44O8SkFO!5e0!3m2!1sja!2sjp!4v1592832322146!5m2!1sja!2sjp' frameborder='0' style='border:0;width:100%;height:100%;' allowfullscreen='' aria-hidden='false' tabindex='0')
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Photo from '~/components/Photo.vue'

@Component({
  components: {
    Photo
  }
})

export default class extends Vue {
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
  height: 100vh;
  position: sticky;
  top: 0;
}
.l-main {
  position: sticky;
  top: 0;
}
.c-header {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.c-block {
  width: 100vw;
  height: 100vh;
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
        p {
          &:not(:first-child) {
            margin-top: 10px;
          }
          font-size: 1.6rem;
          strong {
            font-size: 2.0rem;
          }
          span {
            font-size: 1.4rem;
          }
        }
      }
      > .twitter {
      }
    }
  }
  &.-photo {
    height: auto;
    background-color: #292f33;
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
          p {
            font-size: 1.4rem;
            strong {
              font-size: 1.6rem;
            }
            span {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
