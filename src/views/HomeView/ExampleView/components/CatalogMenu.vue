<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="225"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
    :default-value="defaultValue"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
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
const activeKey = ref('')
const defaultValue = ref(window.location.hash.slice(1))
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