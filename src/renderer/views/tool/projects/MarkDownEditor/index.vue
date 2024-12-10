<template>
    <div id="markdown" class="">

    </div>
</template>
<script setup>
import Vditor from 'vditor'
import "vditor/src/assets/less/index.less"
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
onMounted(() => {
    const vditor = new Vditor('markdown', {
        minHeight: 500,
        theme: store.state.setting.config.theme, //classic(light) dark 
        icon: 'material',
        lang: 'zh_CN',//en_US, ja_JP, ko_KR, ru_RU, zh_CN, zh_TW
        toolbar: [
            'emoji', 'headings', 'bold', 'italic', 'strike', 'line', '|',
            'quote', 'list', 'ordered-list', 'check', 'outdent', '|',
            'indent', 'code', 'inline-code', 'insert-after', 'insert-before', 'undo', '|',
            'redo', 'link', '|',
            'table', '|',
            'edit-mode', 'both', 'preview', 'outline', 'code-theme', 'content-theme', 'export', 'devtools',]
    })
})

const content = ref('');


</script>
<style lang=scss scoped></style>
