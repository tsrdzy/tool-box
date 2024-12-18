<template>
    <div class="jsontoxml">
        <div v-if="hint != ''">
            <el-text>提示: </el-text>
            <el-text type="danger">{{ hint }}</el-text>
        </div>

        <br>
        <br>
        <div class="cards">
            <el-input v-on:input="toinput('json')" v-model="inputjson" style="width: 48%" resize="none"
                :autosize="{ minRows: 10, maxRows: 15 }" type="textarea" placeholder="JSON" />

            <el-input v-on:input="toinput('xml')" v-model="inputxml" style="width: 48%" resize="none"
                :autosize="{ minRows: 10, maxRows: 15 }" type="textarea" placeholder="XML" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import X2JS from 'x2js';
import xmlFormat from 'xml-formatter';
import JSON5 from 'json5';
const inputjson = ref('');
const inputxml = ref('');

const hint = ref('')

function toinput(data) {
    hint.value = ''
    const x2js = new X2JS();
    try {
        if (data == 'json') {
            inputxml.value = xmlFormat(x2js.js2xml(JSON5.parse(inputjson.value)));
            console.log(inputxml.value)
        } else {
            inputjson.value = JSON5.stringify(x2js.xml2js(inputxml.value), null, 4)
            console.log(inputjson.value)
        }
        hint.value = ''
    } catch {
        console.log("shujucuowu")
        hint.value = 'JSON或XML错误'
    }

}
</script>

<style lang='scss' scoped>
.jsontoxml {
    .cards {
        display: flex;
        justify-content: space-between;
    }
}
</style>
