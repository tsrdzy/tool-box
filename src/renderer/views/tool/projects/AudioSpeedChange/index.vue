<template>
    <div>
        <label for="updateaudio" v-if="nowaudiobase64 == ''">
            <div class="updateaudio">
                <div class="logo">+</div>
                <div class="title">上传音频文件</div>
                <input v-on:change="getaudio" style="display: none;" type="file" id="updateaudio">
            </div>
        </label>
        <div class="setaudio" v-if="nowaudiobase64 != ''">
            <div class="slider">
                <span class="title">源音频</span>
                <div class="audioshow1">
                    <span v-show="!_ispause" v-on:click="ispause(true)" class="icon iconfont">&#xea70;</span>
                    <span v-show="_ispause" v-on:click="ispause(false)" class="icon iconfont">&#xea71;</span>
                    <el-slider v-on:change="updateAudioPosition" class="jindu" :min="0" :max="aduiolength"
                        v-model="nowaudiolength" />
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { Howl, Howler } from 'howler';
import { ref, watch, computed } from 'vue';
const nowaudiobase64 = ref('');
const aduiolength = ref(0);
const nowaudiolength = ref(0);
const sound = ref([])
const _ispause = ref(false)
const _id = ref([])
// 新增定时器的ref，用于存储定时器ID
const updateTimer = ref(null);
function ispause(bool) {
    _ispause.value = bool
    if (bool) {
        _id.value = sound.value.play()
        startProgressUpdate(); // 开始播放时启动更新进度逻辑
    } else {
        sound.value.pause()
        stopProgressUpdate(); // 暂停时停止更新进度逻辑
    }
}


function updateAudioPosition() {
    sound.value.seek(nowaudiolength.value);
}
function getaudio(event) {
    const audio = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(audio[0]);
    reader.onload = function () {
        nowaudiobase64.value = reader.result;
        sound.value = new Howl({
            src: [nowaudiobase64.value],
            autoplay: false,
            loop: false,
            volume: 0.5
        });
        console.log(sound.value.duration())
        sound.value.on('play', updateProgress);
        sound.value.on('seek', updateProgress);

        aduiolength.value = sound.value.duration();

    }
}
function updateProgress() {
    nowaudiolength.value = sound.value.seek() || 0;

}
function startProgressUpdate() {
    if (!updateTimer.value) {
        updateTimer.value = setInterval(() => {
            updateProgress();
        }, 100); // 每隔100毫秒检查更新一次播放进度，可根据实际情况调整间隔时间
    }
}
function stopProgressUpdate() {
    if (updateTimer.value) {
        clearInterval(updateTimer.value);
        updateTimer.value = null;
    }
}
// 监听nowaudiolength的变化，当它改变时也更新音频播放位置（比如外部手动修改了这个值等情况）
watch(nowaudiolength, (newVal) => {
    sound.value.seek(newVal);
});
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

.setaudio {
    .slider {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 0;
        font-size: 14px;
        color: var(--el-text-color-secondary);
        line-height: 44px;
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 0;

        .title {
            width: 80px;
            border: 1px solid;
            border-right: 0;
            text-align: center;
            background-color: #77777733;
        }

        .audioshow1 {
            border: 1px solid;
            display: flex;
            align-items: center;
            width: 100%;

            .jindu {
                margin: 0 20px;
            }

            .icon {
                width: 30px;

            }
        }

    }
}
</style>
