<template>
  <div class="content-default" id="#top">
    <header class="header-default">
      <!-- <client-only>
        <swiper
          :options = {
            effect: 'fade',
            speed: 2000,
            loop: true,
            autoplay: {
              delay: 0,
              disableOnInteraction: false
            }
          }
        >
          <template v-for='src in headerData'>
            <swiper-slide>
              <img class="header" :src='require("~/assets/img/" + src)'>
            </swiper-slide>
          </template>
        </swiper>
      </client-only> -->
    </header>
    <main class="main-default">
      <client-only>
        <div id="js-main-movie"></div>
        <script>
          var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          var player;
          function onYouTubeIframeAPIReady() {
            player = new YT.Player('js-main-movie', {
              videoId: 'hvIsbzhzanM',
              height: '360',
              width: '640',
              playerVars: {
                controls: 0,
                autoplay: 1,
                disablekb:1,
                enablejsapi: 1,
                iv_load_policy: 3,
                playsinline: 1,
                rel: 0
              },
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }

          function onPlayerReady(event) {
            event.target.mute();
            event.target.playVideo();
          }

          function onPlayerStateChange(event) {
            var ytStatus = event.target.getPlayerState();
            if (ytStatus == YT.PlayerState.ENDED) {
              player.mute();
              player.playVideo();
            }
          }
        </script>
      </client-only>

      <div class="block-information" id="#information">
        <div class="inner">
          <div class="about">
            <p class="text">
              <strong class="strong">クラフトビールは日々替わります。お楽しみに</strong>
            </p>
            <p class="text">2018年8月1日オープン</p>
            <p class="text">クラフトビール樽生4種、ヱビス樽生、特製の鶏のからあげ…<br>
              カウンター席、テーブル席、立ち飲みカウンター</p>
            <p class="text">日曜日定休<br>
              <span class="note">※月曜日が祝日の場合、土日営業し月曜日がお休み</span></p>
          </div>
          <div class="twitter">
            <a
              class='twitter-timeline'
              href='https://twitter.com/beerbarjan?ref_src=twsrc%5Etfw'
              data-chrome='noheader nofooter'
              data-tweet-limit='1'
              data-theme='dark'
            >Tweets by beerbarjan</a>
          </div>
        </div>
      </div>
      <!-- <div class="block-photo" id="photo">
        <client-only>
          <swiper>
            <template v-for='(src, index) in photoData'>
              <swiper-slide v-if='(index + 1) % 5 === 1'>
                <template v-for='(childSrc, childIndex) in photoData'>
                  <Photo v-if='childIndex >= index && childIndex < index + 5' :src='childSrc' :name='"photo" + childIndex'></Photo>
                </template>
              </swiper-slide>
            </template>
          </swiper>
        </client-only>
      </div>
      <div class="block-map" id="map">
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.524019656593!2d139.720235815259!3d35.68872038019251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5478ef5331%3A0x567a2eb3b90b0a8e!2z44OT44O844Or44OQ44O8SkFO!5e0!3m2!1sja!2sjp!4v1592832322146!5m2!1sja!2sjp' frameborder='0' style='border:0;width:100%;height:100%;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>
      </div> -->
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Photo from '~/components/Photo.vue'
import swiperData from '~/assets/json/swiper.json'

@Component({
  components: {
    Photo
  }
})

export default class extends Vue {
  private optionsPhoto = {
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

  // private ytPlayer: any = []

  private mounted() {
    // const ytPlayer = new YT.Player('player', {
    //   height: 390,
    //   width: 640,
    //   videoId: 'vifZUxk2WgI',
    //   playerVars: {//パラメータ
    //     playsinline: 1,// インライン再生指定
    //     rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
    //     controls: 0,// コントローラー出さない
    //     showinfo: 0// タイトルとか動画情報出さない
    //   },
    //   events: {//　イベント
    //     'onReady': this.onPlayerReady
    //   }
    // });

    // var ytPlayer;

    // window['onYouTubeIframeAPIReady'] = function() {
    //   ytPlayer = new window['YT'].Player('player', {
    //     height: 390,
    //     width: 640,
    //     videoId: 'hvIsbzhzanM',
    //     playerVars: {//パラメータ
    //       playsinline: 1,// インライン再生指定
    //       rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
    //       controls: 0,// コントローラー出さない
    //       showinfo: 0// タイトルとか動画情報出さない
    //     },
    //     events: {
    //       'onReady': onPlayerReady
    //     }
    //   });
    // }

  //   (window as { [key: string]: any })['onYouTubeIframeAPIReady'] = function() {
  //     ytPlayer = new (window as { [key: string]: any })['YT'].Player('player', {
  //       height: 390,
  //       width: 640,
  //       videoId: 'hvIsbzhzanM',
  //       playerVars: {//パラメータ
  //         playsinline: 1,// インライン再生指定
  //         rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
  //         controls: 0,// コントローラー出さない
  //         showinfo: 0// タイトルとか動画情報出さない
  //       },
  //       events: {
  //         'onReady': onPlayerReady
  //       }
  //     });
  //   }
  //
  //   function onPlayerReady() {
  //     console.log('onReady')
  //     // this.ytPlayer.mute()
  //     // this.ytPlayer.playVideo()
  //   }
  // }

  // private get headerData() {
  //   return this.shuffle(swiperData.header)
  // }
  //
  // private get photoData() {
  //   return this.shuffle(swiperData.photo)
  // }
  //
  // private shuffle(array:any) {
  //   var copy = [], n = array.length, i;
  //   while (n) {
  //     i = Math.floor(Math.random() * n--);
  //     copy.push(array.splice(i, 1)[0]);
  //   }
  //   return copy;
  // }

  // private onPlayerReady(event) {
  //   document.getElementById("pause").addEventListener("click", function() {
  //     player.pauseVideo()
  //   })
  //   document.getElementById("play").addEventListener("click", function() {
  //     player.playVideo()
  //   })
  // }

  // private onPlayerReady() {
  //   console.log('onReady')
  //   // this.ytPlayer.mute()
  //   // this.ytPlayer.playVideo()
  // }
}
</script>

<script>
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer;

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('player', {
    height: 390,
    width: 640,
    videoId: 'hvIsbzhzanM',
    playerVars: {//パラメータ
      playsinline: 1,// インライン再生指定
      rel      : 0,// 再生中の動画と同じチャンネルの関連動画を表示
      controls: 0,// コントローラー出さない
      showinfo: 0// タイトルとか動画情報出さない
    },
    events: {//　イベント
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady() {
  console.log('onReady')
  ytPlayer.mute();// ミュートにしてから
  ytPlayer.playVideo();// 再生
}
</script>
