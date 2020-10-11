<template>
  <div>
    <client-only>
      <div class="main-movie">
        <div id="js-main-movie"></div>
        <div class="main-title-wrap">
          <div class="main-title">
            <div class="main-title__inner">
              <p class="test-title">背景 YouTubeテスト</p>
              <ul class="buttons">
                <li><a href="https://www.fidelity.co.jp/" target="_blank">ボタン1</a></li>
                <li><a href="https://www.fidelity.jp/" target="_blank">ボタン2</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <script>
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('js-main-movie', {
            videoId: 'w7VNjGuSK_k',
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

    var ytPlayer;

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

    (window as { [key: string]: any })['onYouTubeIframeAPIReady'] = function() {
      ytPlayer = new (window as { [key: string]: any })['YT'].Player('player', {
        height: 390,
        width: 640,
        videoId: 'hvIsbzhzanM',
        playerVars: {//パラメータ
          playsinline: 1,// インライン再生指定
          rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
          controls: 0,// コントローラー出さない
          showinfo: 0// タイトルとか動画情報出さない
        },
        events: {
          'onReady': onPlayerReady
        }
      });
    }

    function onPlayerReady() {
      console.log('onReady')
      // this.ytPlayer.mute()
      // this.ytPlayer.playVideo()
    }
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
