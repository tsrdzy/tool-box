<template>
    <div v-if="audioBase64" class="slider" v-loading="loading" element-loading-text="加载中...">
        <span class="title">{{ props.title }}</span>
        <div class="audioshow">
            <span v-on:click="togglePlay" class="icon iconfont" v-html="playButtonText"></span>
            <el-slider :step="1" @change="seekToTime" class="jindu" :min="0" :max="Number(duration)"
                v-model="currentTime" />
            <span>{{ currentTimeFormat }}</span> / <span>{{ durationFormat }}</span>
        </div>

    </div>
    <div v-else>错误的音频!</div>
</template>

<script setup>
import { ref, watch, computed, onBeforeUnmount } from 'vue'; // 在这里添加computed的导入
import { Howl } from 'howler';

// 定义响应式数据
const sound = ref(null);// 音频对象
//计时器
const seekTimer = ref(0);// 播放进度
const isPlaying = ref(false);// 是否播放
const currentTime = ref(0);// 当前播放时间
const duration = ref(0);// 音频总时长

const loading = ref(true);
// 计算属性，返回对应文本
const playButtonText = computed(() => (isPlaying.value ? '&#xea71;' : '&#xea70;'));
const currentTimeFormat = computed(() => `${Math.floor(currentTime.value)}s`);
const durationFormat = computed(() => `${Math.floor(duration.value)}s`);

//销毁
onBeforeUnmount(() => {
    if (sound.value) {
        sound.value.unload(); // 销毁音频实例
        sound.value = null;
        isPlaying.value = false;
        currentTime.value = 0;
        duration.value = 0;
        clearInterval(seekTimer.value); // 清除定时器
    }
});

// 方法定义
const initSound = (base64Data, audiovolume, audioratio) => {
    const url = base64Data
    if (sound.value) {
        sound.value.unload();
    }
    sound.value = new Howl({
        src: [url],
        volume: audiovolume,
        rate: audioratio,
        onplay: () => {
            isPlaying.value = true;
            seekTimer.value = setInterval(() => {
                if (sound.value) {
                    currentTime.value = Math.floor(sound.value.seek() / props.audioratio);
                }
            }, 500);
        },
        onpause: () => {
            isPlaying.value = false;
            clearInterval(seekTimer.value);
            if (sound.value) {
                currentTime.value = Math.floor(sound.value.seek() / props.audioratio);
            }
        },
        onend: () => {
            isPlaying.value = false;
            currentTime.value = 0;
        },
        onload: () => {
            duration.value = (sound.value.duration() / audioratio).toFixed(0);
            loading.value = false;
        },
        ontimeupdate: (pos) => {
            currentTime.value = pos;
        }
    });
};

const togglePlay = () => {
    if (sound.value) {
        if (isPlaying.value) {
            sound.value.pause();
        } else {
            sound.value.play();
        }
    }
};

const seekToTime = () => {
    if (sound.value) {
        sound.value.seek(currentTime.value);
    }
};
const props = defineProps({
    audioBase64: {
        type: String,
        required: true
    },
    audiovolume: {
        type: Number,
        default: 1
    },
    audioratio: {
        type: Number,
        default: 1
    },
    title: {
        type: String,
        default: '音频'
    }

});
watch(() => props.audioBase64, (newValue) => {
    if (newValue) {
        initSound(newValue, props.audiovolume, props.audioratio);
    }
}, { immediate: true });
</script>

<style lang="scss" scoped>
.slider {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
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

    .audioshow {
        border: 1px solid;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 20px;

        .jindu {
            margin: 0 20px;
        }

        .icon {
            width: 30px;

        }
    }

}
</style>