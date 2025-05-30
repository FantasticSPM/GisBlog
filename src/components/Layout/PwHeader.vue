<template>
  <div class="pw-header">
    <div class="logo">
      GIS LIU
    </div>
    <n-menu
      class="pw-header-menu"
      v-model:value="$route.name"
      mode="horizontal"
      :options="menus"
      responsive
      @update:value="handleSelect"
      dropdown-placement="right-start"
    />
  </div>
</template>

<script setup>
import { ElIcon } from 'element-plus'
const menus = ref(window.globalConfig.menuOptions.map(item => {
  return{
    label: item.label,
    key: item.component,
    icon: ()=> h(ElIcon,{
      size:16
    },{
      default: ()=> h(resolveComponent(item.iconName))
    }),
    childern: item.children
  }
}))
const router = useRouter()
function handleSelect(val){
  router.push({
    name:val
  })
}
</script>

<style scoped lang="scss">
.pw-header {
  // padding: 10px;
  background-color: $header-bg-color;
  height: 100%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  position:sticky;
  .logo{
    width: 100px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  :deep().pw-header-menu{
    // width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .v-overflow{
      justify-content: flex-end;
    }
  }
}
</style>