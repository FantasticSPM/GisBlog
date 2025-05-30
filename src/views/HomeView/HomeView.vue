<template>
  <el-container class="Gis-View">
    <el-header class="Gis-View-header">
      <PwHeader></PwHeader>
    </el-header>
    <el-container class="Gis-View-container">
      <!-- <el-aside v-if="isShowAside" width="200px" class="Gis-View-aside">Aside</el-aside> -->
      <el-container>
        <el-main class="Gis-View-main">
          <RouterView></RouterView>
        </el-main>
        <!-- <el-footer class="Gis-View-footer">
          <PwFooter></PwFooter>
        </el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
const route = useRoute()
import PwHeader from '@/components/Layout/PwHeader.vue'
import PwFooter from '@/components/Layout/PwFooter.vue'
const isShowAside = ref(true)
watch(()=>route.name, (val) => {
  isShowAside.value = (val !== 'ExampleView')
},{
  immediate: true
})
</script>

<style lang="scss">
.Gis-View{
  .Gis-View-header{
    width: 100%;
    position: fixed;
    height: $header-height;
    padding: 0;
  }
  .Gis-View-container{
    margin-top: $header-height;
    min-height: calc(100vh - $header-height); 
    .Gis-View-aside{
      overflow: auto;
    }
    .Gis-View-main{
      overflow: auto;
      padding: 0;
    }
    .Gis-View-footer{
      height: $footer-height;
      padding: 0;
    } 
  }
}
</style>