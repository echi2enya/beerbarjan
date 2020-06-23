<template lang="pug">
  footer.l-footer
    .inner
      img.logo(src='~assets/img/logo/279x279.jpg')
      nav.nav
        nuxt-link.anchor(to='' v-scroll-to='"#top"') TOP
        nuxt-link.anchor(to='' v-scroll-to='"#map"') MAP
        nuxt-link.anchor(to='' v-scroll-to='"#information"') INFORMATION
        nuxt-link.anchor(to='' v-scroll-to='"#news"') NEW
        nuxt-link.anchor(to='' v-scroll-to='"#photo"') PHOTO
      p.information
        | 四ッ谷荒木町
        |
        strong.name ビールバーJAN
        |
        | 新宿区荒木町2-15 2階 03-3226-1556
      //- p 2018年8月1日オープン
      //- p クラフトビール樽生4種、ヱビス樽生、特製の鶏のからあげ
      //- p カウンター席、テーブル席、立ち飲みカウンター
      //- p
      //-   | 日曜日定休
      //-   b
      //-   | ※月曜日が祝日の場合、土日営業し、月曜日がお休み
      //- p クラフトビールは日々替わります！
</template>

<style lang="scss">
.l-footer {
  width: 100%;
  height: 120px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  > .inner {
    max-width: 980px;
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    margin: 0 auto;
    padding: 10px 10px;
    > .nav {
      position: absolute;
      top: 0;
      right: 0;
    }
    > .logo {
      width: 100px;
      height: 100px;
      display: block;
    }
    > .information {
      margin-left: 20px;
      > .name {
        font-size: 24px;
      }
    }
  }
}
@media (max-width: 767px) {
  .l-footer {
    height: calc(100vh / 7 * 2);
  }
}
</style>
