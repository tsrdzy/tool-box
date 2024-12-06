<template>
        <el-radio-group v-on:change="handleChange" v-model="system">
            <el-radio :value="2">二进制</el-radio>
            <el-radio :value="4">四进制</el-radio>
            <el-radio :value="8">八进制</el-radio>
            <el-radio :value="10">十进制</el-radio>
            <el-radio :value="12">十二进制</el-radio>
            <el-radio :value="16">十六进制</el-radio>
            <el-radio :value="32">三十二进制</el-radio>
            <el-radio :value="-1">
                <el-input-number size="small" v-model="system1" :min="2" :max="36" @change="handleChange" />
            </el-radio>
        </el-radio-group>
        <el-input v-on:input="handleChange" v-model="nowipnut" placeholder="请输入值" class="input-with-select">
        </el-input>
        <div>
            <div>常用:</div>
            <el-input :readonly="true" v-model="allinput['i2']" placeholder="null">
                <template #prepend><span style="width: 80px;text-align: center;">二进制</span></template>
            </el-input>
            <el-input :readonly="true" v-model="allinput['i8']" placeholder="null">
                <template #prepend><span style="width: 80px;text-align: center;">八进制</span></template>
            </el-input>
            <el-input :readonly="true" v-model="allinput['i10']" placeholder="null">
                <template #prepend><span style="width: 80px;text-align: center;">十进制</span></template>
            </el-input>
            <el-input :readonly="true" v-model="allinput['i12']" placeholder="null">
                <template #prepend><span style="width: 80px;text-align: center;">十二进制</span></template>
            </el-input>
            <el-input :readonly="true" v-model="allinput['i16']" placeholder="null">
                <template #prepend><span style="width: 80px;text-align: center;">十六进制</span></template>
            </el-input>
            <el-input :readonly="true" v-model="allinput['i32']" placeholder="null">
                <template #prepend><span style="width: 80px;text-align: center;">三十二进制</span></template>
            </el-input>
        </div>
        <div>全部:</div>
        <div class="all">
            <el-input style="width: 40%;" :key="allin" v-for="allin of 31" :readonly="true"
                v-model="allinput['i' + (allin + 1)]" placeholder="null">
                <template #prepend>
                    <span style="width: 80px;text-align: center;">{{ allin + 1 }}进制</span>
                </template>
            </el-input>
        </div>
</template>
<script setup>
import { onMounted, ref } from "vue"
let system = ref(2)
let system1 = ref(2)
let nowipnut = ref()
const allinput = ref({})
onMounted(() => {
    // system.value = 2;
    // nowipnut.value = 1;
    // handleChange()
})
function handleChange() {
    if(!nowipnut.value) return
    let validChars = "0-1";
    if (system.value == -1) {
        if (system1.value <= 10) {
            validChars = `0-${system1.value - 1}`;
        } else {
            validChars = `0-9a-${String.fromCharCode(96 + system1.value - 10)}`;
        }
        nowipnut.value = nowipnut.value.replace(new RegExp(`[^${validChars}]`, 'g'), "");
    } else {
        if (system.value <= 10) {
            validChars = `0-${system.value - 1}`;
        } else {
            validChars = `0-9a-${String.fromCharCode(96 + system.value - 10)}`;
        }
        nowipnut.value = nowipnut.value.replace(new RegExp(`[^${validChars}]`, 'g'), "");
    }


    allinput.value = []
    let tennumber = null
    if (system.value == -1) {
        tennumber = parseInt(nowipnut.value, system1.value);
    } else {
        tennumber = parseInt(nowipnut.value, system.value);
    }
    for (let i = 2; i <= 36; i++) {
        let input = tennumber.toString(i)
        allinput.value["i" + i] = input
    }
}

</script>
<style lang=scss scoped>

.el-input {
    margin: 5px;
}

.all {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
