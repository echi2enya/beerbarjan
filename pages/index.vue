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
      .block-timelapse#timelapse
        youtube(
          :video-id='hvIsbzhzanM'
        )
        //-   client-only
        //-     .main-movie
        //-       #js-main-movie
        //-       .main-title-wrap
        //-         .main-title
        //-           .main-title__inner
        //-             p.test-title

        //-   youtube(
        //-     ref='youtube'
        //-     :video-id='hvIsbzhzanM'
        //-     :player-vars='{autoplay:1}'
        //-   )
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
import Photo from '~/components/Photo.vue'
import swiperData from '~/assets/json/swiper.json'

// import Vue from 'vue'
// import VueYoutube from 'vue-youtube'
// Vue.use(VueYoutube)

// import Vue from 'vue'
// import VueYouTubeEmbed from 'vue-youtube-embed'
// Vue.use(VueYouTubeEmbed
// // if you don't want install the component globally
// Vue.use(VueYouTubeEmbed, { global: false })
// // if you want to install the component globally with a different name
// Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })

@Component({
  components: {
    Photo
  }
})

export default class extends Vue {
  private mounted() {
    // _init() {
    // 	//youtube api load
    // 	$('body').append('<script src="https://www.youtube.com/iframe_api">');
    // 	this.resizeMovie();//リサイズを一度実行
    // }
    // resizeMovie() {
    // 	var $w = $(window),
    // 			bw = 1200,
    // 			bh = (bw/16) * 9,
    // 			w = $w.width(),
    // 			h = $w.height(),
    // 			mw = w,
    // 			mh =  Math.round(bh * (mw/bw));
    //
    // 	if ( mh < h ) {
    // 		mh = h;
    // 		mw = Math.round(bw * (mh/bh));
    // 	}
    //
    // 	$('#player').css({
    // 		width: mw,
    // 		height: mh,
    // 		marginTop: (h - mh)/2,
    // 		marginLeft: (w - mw)/2
    // 	});
    // }
    //
    // onPlayerReady(event) {
    // 	$('#loader').delay(2500).animate({"opacity":0}, 800, "swing", function() {
    // 		$(this).css('display', 'none');
    // 	});
    // }
    // onPlayerStateChange(event) {
    // 	if (event.data == YT.PlayerState.ENDED) {
    // 		player.playVideo();
    // 	}
    // }
    //
    // //動画切り替え
    // change_video(e) {
    // 	e.preventDefault();
    // 	var u:any = $('#video_id').val(),
    // 			id:any = /[/?=]([-\w]{11})/.exec(u);
    // 	id = id[1];
    //
    // 	player.loadVideoById(id);
    // }
    //
    // _event() {
    // 	$(window).on( 'resize', $.proxy( this.resizeMovie,this ) );
    // 	$('#player_cover').on( 'click', $.proxy( this.player_cover,this ) );
    // 	$('#change_v').on( 'click', $.proxy( this.change_video,this ) );
    //
    // 	//プレイヤーの定義と設定
    // 	var _this:any = this;
    // 	var onYouTubeIframeAPIReady = function () {
    // 		player = new YT.Player('player', {
    // 			videoId: '',
    // 			playerVars: {
    // 				'autoplay': 1,
    // 				'controls': 0,
    // 				'enablejsapi': 1,
    // 				'iv_load_policy': 3,
    // 				'disablekb':1,
    // 				'showinfo':0,
    // 				'rel':0,
    // 				'start': 5
    // 			},
    // 			events: {
    // 				'onReady': _this.onPlayerReady,
    // 				'onStateChange': _this.onPlayerStateChange
    // 			}
    // 		});
    // 	};
    // 	window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    // }

    // const tag : any = document.createElement('script')
    // tag.src = "https://www.youtube.com/iframe_api"
    // const firstScriptTag : any = document.getElementsByTagName('script')[0]
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    // interface MyWindow extends Window {
    // 	onYouTubeIframeAPIReady(): void;
    // }
    // declare var window: MyWindow;

    // var player;

    // var _this: any = this;
    // function onYouTubeIframeAPIReady() {
    //   const player = new window.YT.Player('js-main-movie', {
    //     videoId: 'w7VNjGuSK_k',
    //     height: '360',
    //     width: '640',
    //     playerVars: {
    //       controls: 0,
    //       autoplay: 1,
    //       disablekb:1,
    //       enablejsapi: 1,
    //       iv_load_policy: 3,
    //       playsinline: 1,
    //       rel: 0
    //     },
    //     events: {
    //       'onReady': _this.onPlayerReady,
    //       'onStateChange': _this.onPlayerStateChange
    //     }
    //   });
    // }

    // function onPlayerReady() {
    // function onPlayerReady(event : any) {
    //   event.target.mute()
    //   event.target.playVideo()
    // }

    // function onPlayerStateChange(event) {
    // function onPlayerStateChange() {
    //   // var ytStatus = event.target.getPlayerState()
    //   // if (ytStatus == YT.PlayerState.ENDED) {
    //   //   player.mute()
    //   //   player.playVideo()
    //   // }
    // }
  }

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

<style lang="scss" scoped>
.block-timelapse {
  .main-movie {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .main-title-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main-title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .test-title {
    display: inline-block;
    width: 460px;
    padding: 10px;
    margin: 0 10px;
    box-sizing: border-box;
    font-size: 2em;
    background: #fff;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin: 10px auto 0;
    padding: 0;
    list-style: none;
  }

  .buttons > * {
    width: 240px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .buttons a {
    display: block;
    padding: 5px;
    background-color: #fff;
    border-radius: 6px;
    text-decoration: none;
    text-align: center;
  }
}
</style>
