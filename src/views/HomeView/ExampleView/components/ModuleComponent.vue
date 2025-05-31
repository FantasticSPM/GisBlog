<template>
  <div class="module-component">
    <div class="editor" v-show="editorShow">
      <div class="editor-header">
        <div>
          <span>代码编辑器</span>
          <span>（可编辑）</span>
        </div>
        <div class="btns">
          <n-button type="info" size="small" @click="previewHtml">运行</n-button>
          <n-button size="small" @click="resetHtml">重置</n-button>
          <n-button strong secondary type="info" size="small" @click="editorShow = !editorShow">隐藏</n-button>
        </div>
      </div>

      <v-ace-editor
      v-model:value="content"
      lang="html"
      theme="chrome"
      :options="options"
      class="ace-editor"/>
    </div>
  
    <div class="preview">
      <n-button v-if="!editorShow" class="btn" strong type="info" size="small" @click="editorShow = !editorShow">显示</n-button>
      <iframe ref="iframe" :src="`/ExampleHtml/${props.moduleId}.html`" frameborder="0" width="100%" height="100%"></iframe>
    </div>
  </div>
</template>

<script setup>
import { VAceEditor } from 'vue3-ace-editor';
import { addCompleter } from 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-json'; // 加载语言定义文件
import 'ace-builds/src-noconflict/theme-chrome'; // 加载主题定义文件
const content = ref('')
const props = defineProps({
  moduleId:{
    type: [String,Number],
    default: ''
  }
})
const editorShow = ref(true)
const options = {
  wrap:true,
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
}
addCompleter({
  getCompletions: function(editor, session, pos, prefix, callback) {
    callback(null, [
      {
        name: 'hello',
        value: 'hello',
        score: 1000,
        meta: 'hello'
      },
      {
        name: 'world',
        value: 'world',
        score: 1000,
        meta: 'world'
      }
    ]);
  }
})
loadHtml()
//加载文本
const iframe = ref(null)
async function loadHtml(){
  const moduleId = props.moduleId
  let res = await fetch(`/ExampleHtml/${moduleId}.html`).then(res=>res.text())
  content.value = res
}


//预览
function previewHtml(){
  
  iframe.value.src = 'about:blank'
  iframe.value.onload = function() {
    iframe.value.contentWindow.document.open();
    iframe.value.contentWindow.document.write(content.value);
    iframe.value.contentWindow.document.close();
  }
}

//重置
async function resetHtml(){
  await loadHtml()
  previewHtml()
}
</script>

<style lang="scss" scoped>
.module-component{
  display: flex;
  width: 100%;
  height: calc(100vh - $header-height - $footer-height);
  .editor{
    width: 400px;
    border-right: 1px solid #ccc;
    
    .ace-editor{
      height: calc(100% - 38px);
    }
    .editor-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
    }
    .btns{
      display: flex;
      justify-content: flex-end;
      margin: 5px 0;
      gap: 10px;
    }
  }
  .preview{
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0;
    position: relative;
    iframe{
      display: inline-block;
      vertical-align: bottom;
    }
    .btn{
      position: absolute;
      top: 5px;
      left: 5px;
    }
  }
}

</style>