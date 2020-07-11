<template lang="pug">
  footer.l-footer
    .c-footer
      .link
        nav.page
          nuxt-link.anchor(to='' v-scroll-to='"#information"') INFORMATION
          nuxt-link.anchor(to='' v-scroll-to='"#menu"') MENU
          //- nuxt-link.anchor(to='' v-scroll-to='"#photo"') PHOTO
          nuxt-link.anchor(to='' v-scroll-to='"#map"') MAP
        nav.external
          a.anchor.-twitter(href='https://twitter.com/beerbarjan' target='_blank')
            font-awesome-layers
              font-awesome-icon(:icon='["fab", "twitter"]')
          a.anchor.-facebook(href='https://www.facebook.com/pages/category/Product-Service/%E3%83%93%E3%83%BC%E3%83%AB%E3%83%90%E3%83%BC-JAN-1739676409488264/' target='_blank')
            font-awesome-layers
              font-awesome-icon(:icon='["fab", "facebook"]')
          a.anchor.-google(href='https://www.google.com/maps/place/%E3%80%92160-0007+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E8%8D%92%E6%9C%A8%E7%94%BA+2%E9%9A%8E+%E5%89%8D%E7%94%B0%E3%83%93%E3%83%AB+%E3%83%93%E3%83%BC%E3%83%AB%E3%83%90%E3%83%BCJAN/@35.6887204,139.7224245,17z/data=!4m2!3m1!1s0x60188d5478ef5331:0x567a2eb3b90b0a8e' target='_blank')
            font-awesome-layers
              font-awesome-icon(:icon='["fab", "google"]')
          a.anchor.-tabelog(href='https://tabelog.com/tokyo/A1309/A130903/13225631/' target='_blank')
            font-awesome-layers
              font-awesome-icon(:icon='["fas", "utensils"]')
      .information
        img.logo(src='~assets/img/logo/279x279.jpg')
        .text
          p.arakicho 四ッ谷荒木町
          h1.name ビールバーJAN
          p.address 新宿区荒木町2-15 2階
          p.tel 03-3226-1556
      .arrows
        nuxt-link.arrow.-top(to='' v-scroll-to='"#top"')
          font-awesome-layers
            font-awesome-icon(:icon='["fas", "arrow-circle-up"]')
        nuxt-link.arrow.-next(to='' v-scroll-to='"#top"')
          font-awesome-layers
            font-awesome-icon(:icon='["fas", "arrow-circle-down"]')
      //- p 2018年8月1日オープン
      //- p クラフトビール樽生4種、ヱビス樽生、特製の鶏のからあげ
      //- p カウンター席、テーブル席、立ち飲みカウンター
      //- p
      //-   | 日曜日定休
      //-   b
      //-   | ※月曜日が祝日の場合、土日営業し、月曜日がお休み
      //- p クラフトビールは日々替わります！
</template>

<style lang="scss" scoped>
.l-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 100px + 10px * 2;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  transition: none;
  .l-container.-offsetY_0 & {
    border-top: none;
    background-color: transparent;
    transition: 0.2s ease-in;
  }
}
.c-footer {
  position: relative;
  max-width: 980px;
  height: 100px;
  margin: {
    left: auto;
    right: auto;
  }
  > .link {
    .l-container.-offsetY_0 & {
      opacity: 0;
    }
    > .page {
      position: absolute;
      top: 0;
      right: 0;
      > .anchor {
        + .anchor {
          margin-left: 10px;
          padding-left: 10px;
          border-left: 1px solid #999;
        }
      }
    }
    > .external {
      position: absolute;
      bottom: 0;
      right: 0;
      > .anchor {
        color: #999;
        &.-twitter {
          &:hover,
          &:active {
            color: #55acee;
          }
        }
        &.-facebook {
          &:hover,
          &:active {
            color: #3b5998;
          }
        }
        &.-google {
          &:hover,
          &:active {
            color: #dd5144;
          }
        }
        &.-tabelog {
          &:hover,
          &:active {
            color: #fd9628;
          }
        }
        + .anchor {
          margin-left: 10px;
        }
        > .fa-layers {
          font-size: 2.6rem;
        }
      }
    }
  }
  > .information {
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
      .l-container.-offsetY_0 & {
        opacity: 0;
      }
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
  > .arrows {
    position: absolute;
    top: - (30px * 2 + 10px);
    right: 0;
    display: flex;
    flex-direction: column;
    > .arrow {
      > .fa-layers {
        font-size: 30px;
        color: #eee;
        opacity: 0.7;
      }
      &.-top {
        .l-container.-offsetY_0 & {
          display: none;
        }
        > .fa-layers {
        }
      }
      &.-next {
        > .fa-layers {
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .l-footer {
  }
  .c-footer {
    height: auto;
    > .link {
      > .page {
        position: relative;
        margin-bottom: 20px;
        font-size: 1.6rem;
        text-align: center;
      }
      > .external {
        width: 32px * 2 + 10px;
        > .anchor {
          display: inline-block;
          + .anchor {
            margin-left: 0;
          }
          &:nth-child(even) {
            margin-left: 10px;
          }
          &:nth-child(even) {
            margin-top: 10px;
          }
          > .fa-layers {
            font-size: 3.2rem;
          }
        }
      }
    }
    > .information {
      align-items: flex-end;
      > .logo {
        width: 80px;
        height: 80px;
      }
      > .text {
        flex-direction: column;
        margin-left: 10px;
        > .name,
        > .address,
        > .tel {
          margin-left: 0;
        }
        > .name {
          font-size: 1.8rem;
        }
        > .address,
        > .tel {
          font-size: 1.2rem;
        }
      }
    }
    > .arrows {
      top: - (30px * 2 + 10px);
      right: 0;
    }
  }
}
</style>
