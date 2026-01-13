<template>
  <div id="monacoContainer" ref="monacoContainerRef"></div>
</template>

<script setup>
import * as monaco from "monaco-editor";
import { onMounted, ref ,watch} from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  theme: {
    type: String,
    default: "vs-light",
  },
  lang: {
    type: String,
    default: "html",
  },
  /**
   * monaco editor options
   * @type {import('monaco-editor').editor.IStandaloneEditorConstructionOptions}
   */
  options: {
    type: Object,
    default: () => ({}),
  },
});

window.MonacoEnvironment = {
  getWorker: async function (moduleId, label) {
    // 使用动态导入加载对应的worker
    if (label === "json") {
      const { default: JsonWorker } = await import("monaco-editor/esm/vs/language/json/json.worker?worker")
      return new JsonWorker()
    }
    if (label === "css" || label === "scss" || label === "less") {
      const { default: CssWorker } = await import("monaco-editor/esm/vs/language/css/css.worker?worker")
      return new CssWorker()
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      const { default: HtmlWorker } = await import("monaco-editor/esm/vs/language/html/html.worker?worker")
      return new HtmlWorker()
    }
    if (label === "typescript" || label === "javascript") {
      const { default: TsWorker } = await import("monaco-editor/esm/vs/language/typescript/ts.worker?worker")
      return new TsWorker()
    }
    // 默认的编辑器worker
    const { default: EditorWorker } = await import("monaco-editor/esm/vs/editor/editor.worker?worker")
    return new EditorWorker()
  },
}

let editorInstance = null;
watch(() => props.modelValue, (newVal, oldVal) => {
  // 更新编辑器内容的逻辑
  if (newVal!== editorInstance.getValue()) {
    editorInstance.setValue(newVal);
  }
});

watch(() => props.theme, (newVal, oldVal) => {
  // 更新主题的逻辑
  monaco.editor.setTheme(newVal);
});

watch(() => props.lang, (newVal, oldVal) => {
  // 更新语言逻辑
  monaco.editor.setModelLanguage(editorInstance.getModel(), newVal);
});

const monacoContainerRef = ref(null);

const emit = defineEmits(["update:modelValue"]);

function initializeMonaco() {
  editorInstance = monaco.editor.create(monacoContainerRef.value, {
    ...props.options,
    value: props.modelValue,
    language: props.lang,
    theme: props.theme,
  });

  editorInstance.onDidChangeModelContent(() => {
    const value = editorInstance.getValue();
    // 触发 v-model 更新
    emit("update:modelValue", value);
  });
  
  monaco.html.htmlDefaults.setOptions({
    enableScriptSuggestions : true,
  })
}
onMounted(() => {
  initializeMonaco();
});

onUnmounted(() => {
  if (editorInstance) {
    editorInstance.dispose();
    editorInstance = null;
  }
});

function getInstance() {
  return editorInstance;
}

defineExpose({
  getInstance,
});
</script>

<style scoped>
/* #monacoContainer {
  width: 100%;
  height: 100%;
} */
</style>