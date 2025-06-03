<template>
  <div class="example-view">
    <n-layout has-sider>
      <CatalogMenu v-if="!moduleId"></CatalogMenu>
      <div class="example-view__content" v-if="!moduleId">
        <div
          v-for="module in modules"
          :key="module.id"
          class="example-view__module"
        >  
          <h2 class="example-view__module__name" :id="module.id">{{ module.name }}</h2>
          <n-grid class="example-view__module__children" cols="0 400:1 400:3 800:5" :x-gap="25" :y-gap="25">
            <n-grid-item
              :id="child.id"
              v-for="child in module.children"
              :key="child.id"
              class="example-view__module__children__item"
              @click.stop="goModule(child.id)"
            >
              <img :src="child.img" alt="" srcset="">
              <h3>{{ child.name }}</h3>
            </n-grid-item>
          </n-grid>
        </div>
      </div>
      <ModuleComponent v-else :moduleId="moduleId"></ModuleComponent>
    </n-layout>  
  </div>
</template>

<script setup>
import CatalogMenu from './components/CatalogMenu.vue';
import ModuleComponent from './components/ModuleComponent.vue';
const route = useRoute();
const router = useRouter();
const modules = window.globalConfig.exampleOptions

const moduleId = ref('')

watch(() => route.params.exampleId, (newVal) => {
  moduleId.value = newVal
},{
  immediate: true
})

function goModule(id) {
  router.push({ name: 'ExampleView', params: { exampleId: id } })
}
</script>

<style lang="scss" scoped>
.example-view {
  display: flex;
  .example-view__content{
    flex: 1;
    height: calc(100vh - $header-height);
    overflow: auto;
  }
  .example-view__module {
    padding: 20px;
    padding-top: 0;
    border-bottom: 2px solid #ccc;
    .example-view__module__name{
      font-size: 25px;
      line-height: 50px;
    }
    .example-view__module__children{
      .example-view__module__children__item{
        overflow: hidden;
        cursor: pointer;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid #ccc;
        transition: all 0.3s ease-in-out;
        background-color: #fff;
        img{
          width: 100%;
          aspect-ratio: 1/0.8;
          object-fit: fill;
          display: block;
        }
        h3{
          text-align: center;
          line-height: 40px;
        }
        &:hover{
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
