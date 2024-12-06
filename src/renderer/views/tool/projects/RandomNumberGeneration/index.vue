<template>
    <div class="card">
        <span>随机数范围:</span>
        <el-input type="number" v-model="mininput" style="width: 100%" placeholder="最小值" />
        <div style="width: 30px;height: 2px; background-color: #77777799;margin: 15px 5px;">
        </div>
        <el-input type="number" v-model="maxinput" style="width: 100%" placeholder="最大值" />
    </div>
    <div class="card">
        <span>生成个数:</span>
        <el-input type="number" v-model="countinput" placeholder="生成个数" />
    </div>
    <div class="card">
        <span>包含小数:</span>
        <el-switch v-model="ispoint" inline-prompt active-text="是" inactive-text="否" />
    </div>
    <div class="card">
        <span>小数位数:</span>
        <el-input :disabled="!ispoint" type="number" v-model="pointcount" placeholder="小数的位数" />
    </div>
    <div class="card">
        <el-button type="primary" v-on:click="create" style="width: 100%;">生成</el-button>
    </div>
    <br>
    <el-card>
        <template #header>随机结果:</template>
        <div class="allinput">
            <div class="allipnut_1" :key="allinputX" v-for="allinputX in allinput">{{ allinputX }}</div>
        </div>
    </el-card>

</template>
<script setup>
import { ref } from "vue";
const mininput = ref(1);
const maxinput = ref(5);
const countinput = ref(10);
const ispoint = ref(false);
const pointcount = ref(2);
const allinput = ref([]);

function create() {
    allinput.value = []
    if (ispoint.value) {
        const pointCountNum = parseInt(pointcount.value, 10);
        const scaleFactor = Math.pow(10, pointCountNum);
        for (let i = 0; i < countinput.value; i++) {
            const randomValue = Math.random();
            const scaledRandom = Math.floor(randomValue * scaleFactor);
            const result = (scaledRandom / scaleFactor) * (maxinput.value - mininput.value) + mininput.value;
            allinput.value.push(result.toFixed(pointCountNum));
        }
    } else {
        for (let i = 0; i < countinput.value; i++) {
            allinput.value.push(Math.floor(Math.random() * (maxinput.value - mininput.value + 1) + mininput.value));
        }
    }
}
</script>
<style lang=scss scoped>
.card {
    display: flex;
    margin-bottom: 10px;

    span {
        display: block;
        font-size: 14px;
        min-width: 80px;
        // max-width: 80px;
        height: 30px;
        line-height: 30px;
    }
}

.allinput {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 10px;
    justify-content: space-between;

    .allipnut_1 {
        margin: 4px;
        padding: 2px;
        width: 120px;
        box-shadow: 0 0 2px;
        border-radius: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
