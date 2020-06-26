<template lang="pug">
  footer.l-footer
    .c-footer
      img.logo(src='~assets/img/logo/279x279.jpg')
      nav.nav
        nuxt-link.anchor(to='' v-scroll-to='"#top"') TOP
        nuxt-link.anchor(to='' v-scroll-to='"#map"') MAP
        nuxt-link.anchor(to='' v-scroll-to='"#information"') INFORMATION
        nuxt-link.anchor(to='' v-scroll-to='"#news"') NEW
        nuxt-link.anchor(to='' v-scroll-to='"#photo"') PHOTO
      nav.sns
        nuxt-link.anchor(to='https://twitter.com/beerbarjan')
          font-awesome-icon(icon='twitter')
        nuxt-link.anchor(to='https://www.facebook.com/pages/category/Product-Service/%E3%83%93%E3%83%BC%E3%83%AB%E3%83%90%E3%83%BC-JAN-1739676409488264/')
          i.fas.fa-twitter
      .information
        p.arakicho 四ッ谷荒木町
        p.name ビールバーJAN
        p.address 新宿区荒木町2-15 2階
        p.tel 03-3226-1556
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
}
.c-footer {
  max-width: 980px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  margin: 10px auto;
  > .nav {
    position: absolute;
    top: 0;
    right: 0;
    > .anchor {
      + .anchor {
        margin-left: 10px;
      }
    }
  }
  > .logo {
    width: 100px;
    height: 100px;
    display: block;
    margin-right: 20px;
  }
  > .information {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    > .arakicho {
    }
    > .name {
      margin-left: 10px;
      font-size: 24px;
      font-weight: bold;
    }
    > .address {
      margin-left: 30px;
    }
    > .tel {
      margin-left: 10px;
    }
  }
}
@media (max-width: 767px) {
  .l-footer {
    height: calc(100vh / 7 * 2);
    padding: {
      left: 10px;
      right: 10px;
      bottom: 10px;
    }
  }
  .c-footer {
    height: 100%;
    align-items: flex-end;
    padding: {
      top: 10px;
    }
    > .nav {
      > .anchor {
        + .anchor {
        }
      }
    }
    > .logo {
    }
    > .information {
      display: flex;
      flex-direction: column;
      > .arakicho {
      }
      > .name,
      > .address,
      > .tel {
        margin-left: 0;
      }
    }
  }
}
</style>
