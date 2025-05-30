<template>
  <div class="example-view">
    <div
      v-if="!moduleId"
      v-for="module in modules"
      :key="module.id"
      class="example-view__module"
      @click="goModule(module.id)"
    >
      {{ module.name }}
    </div>
    <ModuleComponent v-else :moduleId="moduleId"></ModuleComponent>
  </div>
</template>

<script setup>
import ModuleComponent from './components/ModuleComponent.vue';
const route = useRoute();
const router = useRouter();
const modules = [
  {
    id: "example1",
    name: "Example 1",
  },
];

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
  .example-view__module {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #000;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
