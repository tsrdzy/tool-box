<template>
    <div>
        <label for="updateaudio">
            <div class="updateaudio" v-if="nowaudiobase64 == ''">
                <div class="logo">+</div>
                <div class="title">上传音频文件</div>
                <input v-on:change="getaudio" style="display: none;" type="file" id="updateaudio">
            </div>
        </label>
        <div class="fileinfo" v-if="nowaudiobase64 != ''">
            <div class="name">{{ fileaudio.name }}</div>
            <div class="infos">
                <div class="size">{{ (fileaudio.size / 1024 / 1024).toFixed(2) }}MB</div>
                <div class="type">{{ fileaudio.type }}</div>
            </div>
            <div v-on:click="deleteaudio" class="delete">×</div>
        </div>
        <div class="setaudio" v-if="nowaudiobase64 != ''" v-loading="loading" element-loading-text="加载中...">
            <div class="slider">

                <div class="audioshow1">
                    <AudioPlayer :title="'源音频'" :audioBase64="nowaudiobase64"></AudioPlayer>
                </div>
            </div>
            <div class="sets">
                <div class="set">
                    <span>音量大小</span>
                    <el-slider v-on:change="starconvert" :min="0" :max="1" :step="0.1" v-model="volumesize" show-input
                        size="small" />
                </div>
                <div class="set">
                    <span>播放倍率</span>
                    <el-slider v-on:change="starconvert" :min="0.5" :max="4" :step="0.1" v-model="playbackspeed"
                        show-input size="small" />
                </div>
            </div>
            <!-- <el-button v-on:click="starconvert" style="width: 100%;">生成新音频</el-button> -->
            <div :key="comt" class="audioshow1">
                <AudioPlayer :title="'转换音频'" :audioBase64="nowaudiobase64" :audiovolume="volumesize"
                    :audioratio="playbackspeed">
                </AudioPlayer>
            </div>
        </div>
    </div>
</template>
<script setup>
import AudioPlayer from './modules/AudioPlayer.vue';
import { ref } from 'vue';
const fileaudio = ref('');//文件
const nowaudiobase64 = ref('');//转换为base64的音频
const loading = ref(false)//是否加载中

const volumesize = ref(1);//音量大小
const playbackspeed = ref(1);//播放倍率

const comt = ref(0);//是否重新渲染
function getaudio(event) {
    const audio = event.target.files;
    fileaudio.value = audio[0];
    var reader = new FileReader();
    reader.readAsDataURL(audio[0]);
    reader.onload = function () {
        nowaudiobase64.value = reader.result;
        loading.value = false;
    }
}
function starconvert() {
    comt.value = Math.random();
}
function deleteaudio() {
    nowaudiobase64.value = ''
    fileaudio.value = ''
    volumesize.value = 1;
    playbackspeed.value = 1;
    comt.value = Math.random();
}
</script>
<style lang=scss scoped>
.updateaudio {
    width: 100%;
    height: 50px;
    border: 1px dashed;
    text-align: center;
    border-radius: 5px;
    line-height: 25px;

    .logo {
        font-size: 26px;
        height: 25px;
        line-height: 25px;
    }

    .title {
        font-size: 16px;
        height: 25px;
        line-height: 25px;
    }
}

.fileinfo {
    border: 1px solid #77777777;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    position: relative;
    height: 40px;
    background-color: #77777755;

    .delete {
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        text-align: center;
        line-height: 50px;
        font-size: 28px;
        background-color: var(--el-mask-color);
        color: #777777ff;
        position: absolute;
        border-radius: 5px;
        transition: all 0.1s;

        &:hover {
            opacity: 1;
        }
    }

    .name {
        font-size: 15px;
        border-bottom: 1px solid var(--el-text-color-secondary);
    }

    .infos {
        display: flex;
        justify-content: space-between;

        .size,
        .type {
            font-size: 14px;
            color: var(--el-text-color-secondary);
        }
    }

}

.sets {
    margin: 10px 20px;
    display: flex;
    justify-content: space-between;

    .set {
        width: 40%;
        align-items: center;
        margin-top: 0;
        font-size: 14px;
        color: var(--el-text-color-secondary);
        line-height: 44px;
        margin-bottom: 0;

        span {
            width: 100px;
        }

        display: flex;
        width: 40%;
    }
}
</style>
