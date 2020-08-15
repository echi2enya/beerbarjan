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
            p.text
              strong.strong クラフトビールは日々替わります。お楽しみに
            p.text 2018年8月1日オープン
            p.text クラフトビール樽生4種、ヱビス樽生、特製の鶏のからあげ…
              br
              | カウンター席、テーブル席、立ち飲みカウンター
            p.text 日曜日定休
              br
              span.note ※月曜日が祝日の場合、土日営業し月曜日がお休み
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
            template(v-for='(photo, index) in photosShuffle')
              swiper-slide(v-if='(index + 1) % 5 === 1')
                template(v-for='(childPhoto, childIndex) in photosShuffle')
                  Photo(v-if='childIndex >= index && childIndex < index + 5' :src='childPhoto' :name='"childPhoto" + childIndex')
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
  private photos:Array<string> = [
    'brewer/sanktgallen/hop/flower.jpg',
    'brewer/sanktgallen/hop/tree.jpg',
    'brewer/sanktgallen/pinApple.jpg',
    'brewer/sanktgallen/shonanGold/box.jpg',
    'brewer/sanktgallen/shonanGold/tree.jpg',
    'card/stand.jpg',
    'corona/door_1.jpg',
    'corona/door_2.jpg',
    'corona/sign_1.jpg',
    'corona/sign_2.jpg',
    'corona/sticker.jpg',
    'counter/glass.jpg',
    'counter/table.jpg',
    'etc/appearance.jpg',
    'etc/laCachette.jpg',
    'etc/paperLantern.jpg',
    'etc/sharikimon.jpg',
    'etc/sign.jpg',
    'food/assorted/rawHam.jpg',
    'food/assorted/salami.jpg',
    'food/assorted/yamaimo.jpg',
    'food/karaage.jpg',
    'food/liverPutty.jpg',
    'food/sausage/white.jpg',
    'food/torisoba/beer.jpg',
    'food/torisoba/circle.jpg',
    'food/torisoba/zoom.jpg',
    'glass/drinking.jpg',
    'glass/foam.jpg',
    'glass/straight.jpg',
    'glass/weizen.jpg',
    'glass/weizen_poster.jpg',
    'hieda/left.jpg',
    'menu/beer_width.jpg',
    'menu/food.jpg',
    'tap/beginning.jpg',
    'tap/finish.jpg',
    'tap/foam.jpg',
    'tap/smile.jpg',
    'wall/entrance.jpg'
  ]

  private get photosShuffle() {
    return this.shuffle(this.photos)
  }

  private shuffle(array:any) {
    var copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  }
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
        > .text {
          font-size: 1.6rem;
          &:not(:first-child) {
            margin-top: 25px;
          }
          > .strong {
            font-size: 2.0rem;
          }
          > .note {
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
          > .text {
            font-size: 1.4rem;
            > .strong {
              font-size: 1.6rem;
            }
            > .note {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
