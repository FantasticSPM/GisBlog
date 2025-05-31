<template>
  <n-menu
    :options="modules"
    key-field="id"
    label-field="name"
    :on-update:value="clickItem"
  />
</template>

<script setup>
const modules = window.globalConfig.exampleOptions
function clickItem(item){
  window.location.href = '#' +item
}
</script>

<style lang="scss" scoped>
.n-menu.n-menu--vertical{
  height: calc(100vh - $header-height);
  overflow: auto;
  width: 200px;
}
</style>