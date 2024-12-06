<template>

    <div>
      <div class="cards">
        <div class="card_1">
          <div class="card">
            <div class="title">运算符:</div>
            <div class="option">
              <el-checkbox v-model="symbol1" label="加法" />
              <el-checkbox v-model="symbol2" label="减法" />
              <el-checkbox v-model="symbol3" label="乘法" />
              <el-checkbox v-model="symbol4" label="除法" />
            </div>
          </div>
          <div class="card">
            <div class="title">允许小数:</div>
            <div class="option">
              <el-switch v-model="decimals" inline-prompt active-text="是" inactive-text="否" />
            </div>
          </div>
          <div class=card v-if="decimals">
            <div class="title">小数位数:</div>
            <el-input type="number" v-model="DecimalDigits" style="width: 240px" placeholder="小数的位数" />
          </div>
          <div class=card>
            <div class="title">数字个数:</div>
            <el-input type="number" v-model="NumberDigits" style="width: 240px" placeholder="运算的位数,最小为两位数运算" />
          </div>
          <div class=card>
            <div class="title">数字范围:</div>
            <div>
              <el-input type="number" v-model="NumberScopemin" style="width: 240px" placeholder="数字的最小值" />-<el-input
                type="number" v-model="NumberScopemax" style="width: 240px" placeholder="数字的最大值" />
            </div>
          </div>
          <div class=card>
            <div class="title">出题数量:</div>
            <el-input type="number" v-model="count" style="width: 240px" placeholder="生成题目的数量" />
          </div>
          <el-button v-on:click="createtopic" type="primary">生成题目</el-button>
          <el-button v-on:click="printtopic" type="primary">打印题目</el-button>
        </div>
      </div>
      <div class="card">
        <div class="title">显示答案:</div>
        <div class="option">
          <el-switch v-model="showanswer" inline-prompt active-text="是" inactive-text="否" />
        </div>
      </div>
    </div>
    <div id="topic">
      <div class="topic"
        style="display: grid;grid-gap: 10px;grid-template-columns: repeat(auto-fill, minmax(300px, 10fr));">
        <div class="topic-item" style=" display: flex;min-width: 200px;" v-for="(item, index) in topicArray"
          :key="index">
          <span class="topic-1">{{ item[0] }} </span>
          <span class="topic-2" v-if="showanswer">{{ item[1] }}</span>
        </div>
      </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
import printJS from "print-js";
import * as math from 'mathjs';

let symbol1 = ref(true);//加法
let symbol2 = ref(false);//减法
let symbol3 = ref(false);//乘法
let symbol4 = ref(false);//除法
let decimals = ref(false);//是否允许小数
let showanswer = ref(false);//是否显示答案
let DecimalDigits = ref(1);//小数位数
let NumberDigits = ref(2);//数字个数
let NumberScopemin = ref(1);//数字范围
let NumberScopemax = ref(10);//数字范围
let count = ref(10);//出题数量

let topicArray = ref([]);
// 生成题目
const createtopic = () => {
  topicArray.value = []
  //运算符数组
  let symbolArray = [];
  if (symbol1.value) symbolArray.push("+");//加法
  if (symbol2.value) symbolArray.push("-");//减法
  if (symbol3.value) symbolArray.push("*");//乘法
  if (symbol4.value) symbolArray.push("/");//除法
  //随机数范围
  let min = NumberScopemin.value;
  let max = NumberScopemax.value + 1;

  if (decimals.value == false) {

    for (let i = 0; i < count.value; i++) {
      let numArray = []
      //根据NumberDigits生成单个随机个数的算术题
      for (let i = 0; i < NumberDigits.value; i++) {
        numArray.push(Math.floor(Math.random() * (max - min) + min));
      }

      let sumcontent = "";
      for (let i = 0; i < numArray.length - 1; i++) {
        let symbol = symbolArray[Math.floor(Math.random() * symbolArray.length)];
        sumcontent += numArray[i] + symbol;
      }
      sumcontent += numArray[numArray.length - 1];
      let result = math.evaluate(sumcontent).toFixed(DecimalDigits.value);
      topicArray.value.push([sumcontent.replace(/\*/g, "×").replace(/\//g, '÷') + "=", result]);

    }
  } else {
    for (let i = 0; i < count.value; i++) {
      let numArray = [];
      // 根据NumberDigits生成单个随机个数的算术题，改进了生成随机数和运算符拼接逻辑
      for (let j = 0; j < NumberDigits.value; j++) {
        let randomNum = Math.random() * (max - min) + min;
        // 控制小数位数，先将生成的随机数按照指定小数位数格式化后再添加到数组
        numArray.push(randomNum.toFixed(DecimalDigits.value));
        if (j < NumberDigits.value - 1) {
          // 除了最后一个数，每次添加完随机数后添加一个随机运算符
          let symbol = symbolArray[Math.floor(Math.random() * symbolArray.length)];
          numArray.push(symbol);
        }
      }

      let sumcontent = "";
      for (let k = 0; k < numArray.length; k++) {
        sumcontent += numArray[k];
      }
      // 使用parseFloat确保正确解析结果，再按照指定小数位数格式化
      let result = parseFloat(math.evaluate(sumcontent).toFixed(DecimalDigits.value));
      topicArray.value.push([sumcontent.replace(/\*/g, "×").replace(/\//g, '÷') + "=", result]);
    }
  }
  return true;
};
const printtopic = () => {
  let isprint = false;
  if (topicArray.value.length == 0) {
    isprint = createtopic();
  } else {
    isprint = true;
  }
  if (isprint) {
    setTimeout(function () {
      printJS({
        printable: "topic",
        type: "html",
        scanStyles: false,
        targetStyles: ['*'],
      });
    }, 500);

  }

};

</script>

<style lang="scss" scoped>

  .cards {
    box-shadow: 0 0 2px;
    margin: 10px;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
  }

  .card {
    display: flex;
    height: 40px;
    line-height: 40px;

    .title {
      width: 85px;
      font-size: 14px;
    }

    .el-input {
      height: 30px;
      margin: 5px 0;
    }
  }

  #topic {
    box-shadow: 0 0 2px;
    flex-grow: 2;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 auto;
    margin: 0 10px 0 10px;
  }

</style>