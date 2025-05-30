<template>
  <div class="gis-view">
    <CesiumMap></CesiumMap>
  </div>
</template>

<script setup>
import CesiumMap from '@/components/Map/CesiumMap.vue';
</script>

<style lang="scss" scoped>
.gis-view{
  width: 100%;
  height: 100%;
}
</style>