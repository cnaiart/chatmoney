<template>
    <div v-if="modelValue">
        <div v-if="type == 'image'">
            <el-image-viewer
                v-if="previewLists.length"
                :url-list="previewLists"
                hide-on-click-modal
                :teleported="true"
                @close="handleClose"
            />
        </div>
        <div v-if="type == 'video' || type == 'audio'">
            <el-dialog
                v-model="visible"
                width="740px"
                :title="`${type == 'video' ? '视频预览' : '音频预览'}`"
                :before-close="handleClose"
                :destroy-on-close="false"
            >
                <video-player ref="playerRef" :src="url" width="100%" height="450px" autoPlay />
            </el-dialog>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    url: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'image'
    }
})
const emit = defineEmits<{
    (event: 'update:modelValue', value: boolean): void
}>()

const playerRef = shallowRef()

const visible = computed({
    get() {
        return props.modelValue
    },

    set(value) {
        emit('update:modelValue', value)
    }
})

const handleClose = () => {
    emit('update:modelValue', false)
}

const previewLists = ref<any[]>([])

watch(
    () => props.modelValue,
    (value) => {
        if (value) {
            setTimeout(() => {
                previewLists.value = [props.url]
                playerRef.value?.play()
            }, 500)
        } else {
            setTimeout(() => {
                previewLists.value = []
                playerRef.value?.pause()
            })
        }
    }
)
</script>
