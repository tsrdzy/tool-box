<template>
    <div class="cctp">
        <el-input v-on:input="topinyin()" resize="none" v-model="textarea1" style="width: 48%"
            :autosize="{ minRows: 15 }" type="textarea" placeholder="请输入汉字" />
        <div style="text-align: center;">
           >>>
        </div>
        <el-input :readonly="true" resize="none" v-model="textarea2" style="width: 48%"
            :autosize="{ minRows: 15 }" type="textarea" placeholder="拼音" />
    </div>
</template>
<script setup>
import { pinyin } from 'pinyin-pro';
import { ref } from 'vue'
const textarea1 = ref('')
const textarea2 = ref('')
function topinyin() {
    textarea2.value = pinyin(textarea1.value, { nonZh: 'consecutive' });
}
</script>
<style lang=scss scoped>
.cctp {
    display: flex;
    justify-content: space-between;
}
</style>
