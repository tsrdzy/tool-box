<template>
    <div style="display: flex;justify-content: space-between;">

        <div style="width: 45%;">
            <el-text class="mx-1" type="primary">JSON文件</el-text>
            <br>
            <br>
            <el-input v-model="jsondata" style="width: 100%" :autosize="{ minRows: 2, maxRows: 15 }" type="textarea"
                placeholder="请输入JSON字符串" v-on:input="datacheck" />
        </div>
        <div style="width: 45%;">
            <el-text class="mx-1" type="primary">转换设置</el-text>
            <br>
            <br>
            <!-- <el-text v-if="!isdatacheck" class="mx-1" type="danger">[{{ datacheckcontent }}]</el-text> -->
            <div :key="datacheckcontent" :element-loading-text="datacheckcontent"
                element-loading-svg-view-box="0, 0, 0, 0" v-loading="!isdatacheck">
                <div v-loading="!isdatacheck1" element-loading-text="转换中...">
                    <el-input v-model="tablename" style="max-width: 600px" placeholder="输入表格导出时的名称">
                        <template #prepend>表格名称</template>
                    </el-input>
                    <div style="border: 1px solid #77777777;border-radius: 5px;padding: 5px;margin: 5px 0;">
                        <div>需要导出的列:</div>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox :key="checkListsX" v-for="checkListsX in checkLists" :label="checkListsX"
                                :value="checkListsX" />
                        </el-checkbox-group>
                    </div>
                    <br>
                    <el-button style="width: 100%;" @click="startransfer()">
                        转换并导出Excel
                    </el-button>
                </div>

            </div>

        </div>
    </div>

</template>

<script setup>
import { utils, writeFileXLSX } from "xlsx";
import { ref } from "vue"
import { ElNotification } from "element-plus";
const jsondata = ref('')//json数据
const isdatacheck = ref(false)//是否正在转换
const datacheckcontent = ref('当前JSON为空')//当前JSON格式错误

const isdatacheck1 = ref(true)//是否正在转换

const checkLists = ref([])//所有列
const checkList = ref([])//需要导出的列

const tablename = ref('ToolBoxTable')//表格名称

async function startransfer() {
    if (datacheck() != true) {
        return
    }
    const audio = new Audio("../assets/audios/hint.wav")
    audio.play()
    ElNotification.success({
        title: '提示',
        message: '正在转换中,请稍等片刻...',
        position: 'bottom-right',
        showClose: false,
        duration: 2000
    })
    isdatacheck1.value = false
    // 1. 创建工作簿
    const workBook = utils.book_new()
    const jsonData = JSON.parse(jsondata.value);
    if (Array.isArray(jsonData)) {
        // 根据checkList筛选列
        const filteredData = jsonData.map(item => {
            const filteredItem = {};
            checkList.value.forEach(key => {
                if (item.hasOwnProperty(key)) {
                    filteredItem[key] = item[key];
                }
            });
            return filteredItem;
        });
        // 2. 创建工作表
        const workSheet = utils.json_to_sheet(filteredData, {
            header: checkList.value
        })
        // 3. 将工作表放入工作簿中
        utils.book_append_sheet(workBook, workSheet)
        // 4. 生成数据保存
        if (tablename.value == '' || tablename.value == null || tablename.value == undefined) {
            tablename.value = ' '
        }
        await writeFileXLSX(workBook, `${tablename.value}.xlsx`, {
            bookType: 'xlsx'
        })
        isdatacheck1.value = true
    }
}
function getheader() {
    try {
        const workSheet = utils.json_to_sheet(JSON.parse(jsondata.value))
        const _jsonData = utils.sheet_to_json(workSheet, { header: 1 });
        const headers = _jsonData[0];
        checkLists.value = headers
        checkList.value = headers
        return true
    } catch (e) {
        isdatacheck.value = false
        datacheckcontent.value = '当前JSON格式错误'
        return false
    }

    // // 3. 将工作表放入工作簿中
    // utils.book_append_sheet(workBook, workSheet)
    // // 4. 生成数据保存
    // writeFileXLSX(workBook, `测试.xlsx`, {
    //     bookType: 'xlsx'
    // })
}
function datacheck() {
    if (jsondata.value == '' || jsondata.value == null || jsondata.value == undefined) {
        isdatacheck.value = false
        datacheckcontent.value = '当前JSON为空'
        return false
    } else {
        isdatacheck.value = true
        return getheader()
    }

}

</script>

<style></style>