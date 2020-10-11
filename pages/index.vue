<template lang="pug">
  .content-default#top
    header.header-default
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
          template(v-for='src in headerData')
            swiper-slide
              img.header(:src='require("~/assets/img/" + src)')
    main.main-default
      .block-information#information
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
      .block-movie
        client-only
          Movie
      .block-photo#photo
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
            template(v-for='(src, index) in photoData')
              swiper-slide(v-if='(index + 1) % 5 === 1')
                template(v-for='(childSrc, childIndex) in photoData')
                  Photo(v-if='childIndex >= index && childIndex < index + 5' :src='childSrc' :name='"photo" + childIndex')
      .block-map#map
        iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.524019656593!2d139.720235815259!3d35.68872038019251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5478ef5331%3A0x567a2eb3b90b0a8e!2z44OT44O844Or44OQ44O8SkFO!5e0!3m2!1sja!2sjp!4v1592832322146!5m2!1sja!2sjp' frameborder='0' style='border:0;width:100%;height:100%;' allowfullscreen='' aria-hidden='false' tabindex='0')
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Movie from '~/components/Movie.vue'
import Photo from '~/components/Photo.vue'
import swiperData from '~/assets/json/swiper.json'

@Component({
  components: {
    Movie,
    Photo
  }
})

export default class extends Vue {
  private get headerData() {
    return this.shuffle(swiperData.header)
  }

  private get photoData() {
    return this.shuffle(swiperData.photo)
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
