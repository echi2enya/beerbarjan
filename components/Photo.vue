<template lang="pug">
  .photo-default
    img.thumbnail(:src='require("~/assets/img/" + src)' @click='open')
    modal(:name='name')
      .-zoom(@click='close')
        img.photo(:src='require("~/assets/img/" + src)')
        font-awesome-layers
          font-awesome-icon(:icon='["fas", "times"]')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ default: '' }) src!: string
  @Prop({ default: '' }) name!: string

  private open() {
    this.$modal.push(this.name)
  }

  private close() {
    this.$modal.pop()
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &-content {
    width: 95%;
    max-width: 800px;
    &.-zoom {
      position: relative;
      padding: 0;
      > .photo {
        width: 100%;
        height: auto;
        display: block;
      }
      > .fa-layers {
        position: absolute;
        bottom: -32px;
        right: 0;
        font-size: 3.0rem;
        color: #fff;
        opacity: 0.2;
      }
    }
  }
}
%photo {
  > .thumbnail {
    width: calc(100vw / 5);
    height: calc(100vw / 5 / 1.618);
    display: block;
    object-fit: cover;
  }
}
.photo-default {
  @extend %photo;
}
@media (max-width: 767px) {
  .modal {
    &-content {
      &.-zoom {
        > .fa-layers {
          bottom: -22px;
          font-size: 2.0rem;
        }
      }
    }
  }
  %photo {
    > .thumbnail {
      width: calc(100vw / 3);
      height: calc(100vw / 3);
    }
  }
}
</style>
