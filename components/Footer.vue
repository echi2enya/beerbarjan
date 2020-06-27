<template lang="pug">
  footer.l-footer
    .c-footer
      .link
        nav.page
          nuxt-link.anchor(to='' v-scroll-to='"#top"') TOP
          nuxt-link.anchor(to='' v-scroll-to='"#map"') MAP
          nuxt-link.anchor(to='' v-scroll-to='"#information"') INFORMATION
          nuxt-link.anchor(to='' v-scroll-to='"#news"') NEW
          nuxt-link.anchor(to='' v-scroll-to='"#photo"') PHOTO
        //- nav.nav
          nuxt-link.anchor(to='#top') TOP
          nuxt-link.anchor(to='#map') MAP
          nuxt-link.anchor(to='#informationn') INFORMATION
          nuxt-link.anchor(to='#news') NEW
          nuxt-link.anchor(to='#photo') PHOTO
        nav.external
          a.anchor(href='https://twitter.com/beerbarjan' target='_blank')
            font-awesome-layers(class='fa-fw fa-2x')
              font-awesome-icon(:icon='["fab", "twitter"]')
          a.anchor(href='https://www.facebook.com/pages/category/Product-Service/%E3%83%93%E3%83%BC%E3%83%AB%E3%83%90%E3%83%BC-JAN-1739676409488264/' target='_blank')
            font-awesome-layers(class='fa-fw fa-2x')
              font-awesome-icon(:icon='["fab", "facebook"]')
          a.anchor(href='https://www.google.com/maps/place/%E3%80%92160-0007+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E8%8D%92%E6%9C%A8%E7%94%BA+2%E9%9A%8E+%E5%89%8D%E7%94%B0%E3%83%93%E3%83%AB+%E3%83%93%E3%83%BC%E3%83%AB%E3%83%90%E3%83%BCJAN/@35.6887204,139.7224245,17z/data=!4m2!3m1!1s0x60188d5478ef5331:0x567a2eb3b90b0a8e' target='_blank')
            font-awesome-layers(class='fa-fw fa-2x')
              font-awesome-icon(:icon='["fab", "google"]')
          a.anchor(href='https://tabelog.com/tokyo/A1309/A130903/13225631/' target='_blank')
            font-awesome-layers(class='fa-fw fa-2x')
              font-awesome-icon(:icon='["fas", "utensils"]')
      .information
        img.logo(src='~assets/img/logo/279x279.jpg')
        .text
          p.arakicho 四ッ谷荒木町
          h1.name ビールバーJAN
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
  // display: flex;
  // justify-content: flex-start;
  // align-items: flex-end;
  // flex-wrap: wrap;
  position: relative;
  margin: 10px auto;
  > .link {
    > .page {
      position: absolute;
      top: 0;
      right: 0;
      > .anchor {
        + .anchor {
          margin-left: 10px;
        }
      }
    }
    > .external {
      position: absolute;
      bottom: 0;
      right: 0;
      > .anchor {
        + .anchor {
          margin-left: 5px;
        }
      }
    }
  }
  > .information {
    // height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    > .logo {
      width: 100px;
      height: 100px;
      display: block;
    }
    > .text {
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
      margin-left: 20px;
      > .arakicho {
      }
      > .name {
        margin-left: 10px;
        font-size: 2.4rem;
      }
      > .address {
        margin-left: 30px;
      }
      > .tel {
        margin-left: 10px;
      }
    }
  }
}
@media (max-width: 767px) {
  .l-footer {
    height: auto;
  }
  .c-footer {
    // height: calc(100% - 20px);
    // flex-direction: column;
    // align-items: stretch;
    height: auto;
    display: block;
    margin: {
      top: 5px;
      bottom: 5px;
    }
    padding: {
      left: 5px;
      right: 5px;
    }
    // align-items: flex-end;
    // padding: {
    //   top: 10px;
    // }
    > .link {
      > .page {
        // flex-basis: 100%;
        position: relative;
        margin-bottom: 10px;
        text-align: center;
      }
      > .external {
        // flex-basis: 100%;
        position: relative;
        margin-bottom: 20px;
        text-align: center;
      }
    }
    > .information {
      align-items: flex-end;
      > .logo {
        width: 60px;
        height: 60px;
      }
      > .text {
        // display: flex;
        flex-direction: column;
        margin-left: 10px;
        > .arakicho,
        > .address,
        > .tel {
          font-size: 1.0rem;
        }
        > .name,
        > .address,
        > .tel {
          margin-left: 0;
        }
        > .name {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
