<template lang="pug">
  .c-photo
    img.thumbnail(:src='require("~/assets/img/" + src)' :class='{ "-zoom" : isZoom }' @click='isZoom = !isZoom')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ default: '' }) src!: string

  private isZoom: boolean = false
}
</script>


<style lang="scss" scoped>
.c-photo {
  > .thumbnail {
    width: calc(100vw / 5);
    height: calc(100vw / 5 / 1.618);
    object-fit: cover;
    &.-zoom {
      transform: scale(4);
    }
  }
}
@media (max-width: 767px) {
  .c-photo {
    > .thumbnail {
      width: calc(100vw / 3);
      height: calc(100vw / 3);
    }
  }
}
</style>
