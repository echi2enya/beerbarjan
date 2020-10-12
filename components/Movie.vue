<template>
  <div class="block-movie" id="js-movie">
    <script>
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('js-movie', {
          videoId: 'UKKc6aPN3So',
          height: 1080,
          width: 1920,
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {}
</script>
