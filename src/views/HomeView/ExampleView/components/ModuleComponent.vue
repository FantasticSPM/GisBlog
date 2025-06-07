<template>
  <n-layout has-sider class="module-component">
    <n-layout-sider
      class="editor"
      collapse-mode="width"
      :collapsed-width="0"
      :width="400"
      show-trigger="arrow-circle"
      bordered
    >
      <div class="editor-header">
        <div>
          <span>代码编辑器</span>
          <span>（可编辑）</span>
        </div>
        <div class="btns">
          <n-button type="info" size="small" @click="previewHtml"
            >运行</n-button
          >
          <n-button size="small" @click="resetHtml">重置</n-button>
        </div>
      </div>
      <v-ace-editor
        v-model:value="content"
        lang="html"
        theme="chrome"
        :options="options"
        class="ace-editor"
      />
    </n-layout-sider>
    <n-layout-content class="preview">
      <iframe ref="iframe" frameborder="0" width="100%" height="100%"></iframe>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { ElLoading } from "element-plus";
import { VAceEditor } from "vue3-ace-editor";
import { addCompleter } from "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json"; // 加载语言定义文件
import "ace-builds/src-noconflict/theme-chrome"; // 加载主题定义文件
const route = useRoute();
const router = useRouter();
const content = ref("");

const editorShow = ref(true);
const options = {
  wrap: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  tabSize: 2,
  fontSize: 13,
  useSoftTabs: true,
  showPrintMargin: false,
  highlightActiveLine: true,
  showGutter: true,
  displayIndentGuides: true,
};
addCompleter({
  getCompletions: function (editor, session, pos, prefix, callback) {
    callback(null, [
      {
        name: "hello",
        value: "hello",
        score: 1000,
        meta: "hello",
      },
      {
        name: "world",
        value: "world",
        score: 1000,
        meta: "world",
      },
    ]);
  },
});

//加载文本
let loading;
const iframe = ref(null);
loadHtml();
async function loadHtml() {
  loading = ElLoading.service({
    lock: true,
    text: "正在加载中......",
    background: "rgba(255, 255, 255, 0.6)",
  });
  const exampleId = route.query.exampleId;
  const moduleId = route.query.moduleId;
  const path = `/ExampleHtml/${moduleId}/${exampleId}.html`;
  let res = await fetch(path).then((res) => res.text());
  iframe.value.src = path;
  iframe.value.onload = function () {
    const document = iframe.value.contentWindow.document;
    content.value = res;
    const err = document.querySelector("#app");
    if (err) {
      alert("文件不存在");
      router.go(-1);
    }
    loading && loading.close();
    loading = null;
    iframe.value.onload = null;
  };
}

//预览
function previewHtml() {
  loading = ElLoading.service({
    lock: true,
    text: "正在加载中......",
    background: "rgba(255, 255, 255, 0.6)",
  });
  iframe.value.src = "about:blank";
  setTimeout(() => {
    iframe.value.contentWindow.document.open();
    iframe.value.contentWindow.document.write(content.value);
    iframe.value.contentWindow.document.close();
    iframe.value.onload = function () {
      loading && loading.close();
      loading = null;
      iframe.value.onload = null;
    };
  }, 100);
}

//重置
async function resetHtml() {
  await loadHtml();
  // previewHtml()
}

onBeforeUnmount(() => {
  loading && loading.close();
});
</script>

<style lang="scss" scoped>
.module-component {
  width: 100%;
  height: calc(100vh - $header-height - $footer-height);
  .editor {
    width: 100%;
    .ace-editor {
      height: calc(100% - 38px);
      z-index: 1;
    }
    .editor-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      margin: 5px 0;
      gap: 10px;
    }
  }
  .preview {
    width: 100%;
    height: 100%;
    padding: 0;
    position: relative;
    iframe {
      display: inline-block;
      vertical-align: bottom;
    }
    .btn {
      position: absolute;
      bottom: 30px;
      right: 5px;
    }
  }
}
</style>
