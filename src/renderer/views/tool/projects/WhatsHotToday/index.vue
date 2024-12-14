<template>
    <div class="hot_cards" v-if="all.success == true">
        <el-card class="card" :key="a1" v-for="a1 in all.data">
            <template #header>
                <div style="display: flex;justify-content: space-between;">
                    <el-text size="large" type="primary">{{ a1.name }}</el-text>
                    <el-tag type="info">{{ a1.update_time }}</el-tag>
                </div>
                <!-- <el-tag>{{ a1.subtitle != ''?a1.subtitle:'-' }}</el-tag> -->
            </template>
            <div class="hots">
                <el-scrollbar height="300px">
                    <a 
                    style="
                    margin: 5px;
                    padding: 0;
                    display: flex;
                    width: 100%;
                    " target="_blank" :href="a1data.url" :key="a1data"
                        v-for="a1data in a1.data">
                        <div
                            style="border-radius:5px;border:1px solid;border-top-right-radius: 0;border-bottom-right-radius:0;line-height: 50px;width: 30px;height: 50px;text-align: center;">
                            {{ a1data.index }}
                        </div>
                        <div class="hot">
                            <el-text class="title">{{ a1data.title }}</el-text>
                            <br>
                            <el-tag v-if="a1data.hot != ''">{{ a1data.hot }}</el-tag>
                        </div>
                    </a>


                </el-scrollbar>
            </div>
        </el-card>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const all = ref([])
onMounted(() => {
    gethot()
});

async function gethot() {
    const url = 'https://api.vvhan.com/api/hotlist/all'
    all.value = await api.getrequest(url)
    console.log(all.value)
}
</script>
<style lang="scss" scoped>
.hot_cards {
    // width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    // gap: 10px;
    .card {
        width: 47%;
        margin: 10px;
    }

    .hots {
        width: 100%;

        .hot {
            width: calc(100% - 60px);
            height: 40px;
            padding: 5px;
            border: 1px solid;
            border-radius: 5px;
            border-left: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            .title {
                width: 90%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            &:hover {
                background-color: #77777722;
            }
        }
    }
}
</style>
