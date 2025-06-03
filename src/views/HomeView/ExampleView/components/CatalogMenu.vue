<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="200"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
    v-model:value="activeKey"
    :collapsed-width="64"
    :options="modules"
    key-field="id"
    label-field="name"
    :on-update:value="clickItem"
    :render-icon="renderIcon"
  />
</n-layout-sider>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
import { ElIcon } from 'element-plus'
const activeKey = ref(null)
const modules = window.globalConfig.exampleOptions
const { width, height } = useWindowSize()
const collapsed = ref(false)
watch(()=> width.value < 768, (val) => {
  collapsed.value = val
},{
  immediate: true
})
function renderIcon( option ) {
  return h(ElIcon,{
    size:16
  },{
    default: ()=> h(resolveComponent(option.iconName))
  })
}

function clickItem(item){
  window.location.href = '#' +item
}
</script>

<style lang="scss" scoped>
.n-menu.n-menu--vertical{
  height: calc(100vh - $header-height);
  overflow: auto;
}
</style>