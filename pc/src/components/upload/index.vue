<template>
  <div class="upload">
    <el-upload
      ref="uploadRefs"
      v-model:file-list="fileList"
      v-bind="$attrs"
      :multiple="multiple"
      :limit="limit"
      :show-file-list="showFileList"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-exceed="handleExceed"
      :on-error="handleError"
      :accept="getAccept"
      :on-remove="handleRemove"
      :http-request="httpRequest"
      :before-upload="handelBeforeUpload"
      :on-preview="handlePictureCardPreview"
    >
      <template v-for="(slot, key) in $slots" #[key]="slotData">
        <slot :name="key" v-bind="slotData" :loading="loading" />
      </template>
    </el-upload>
    <el-dialog
      v-if="!showFileList && fileList.length"
      v-model="visible"
      title="上传进度"
      :close-on-click-modal="false"
      width="500px"
      :modal="false"
      @close="handleClose"
    >
      <div class="file-list p-4">
        <template v-for="(item, index) in fileList" :key="index">
          <div class="mb-5">
            <div>{{ item.name }}</div>
            <div class="flex-1">
              <el-progress :percentage="parseInt(String(item.percentage))" />
            </div>
          </div>
        </template>
      </div>
    </el-dialog>
    <el-dialog v-model="dialogVisible" width="50vw">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type {
  ElUpload,
  UploadRequestOptions,
  UploadUserFile,
  UploadRawFile
} from 'element-plus'
import type { PropType } from 'vue'
import feedback from '@/utils/feedback'
import { uploadFile } from '@/api/app'

const props = defineProps({
  files: {
    type: Array as PropType<UploadUserFile[]>,
    default: () => []
  },
  // 上传文件类型
  type: {
    type: String,
    default: 'image'
  },
  // 是否支持多选
  multiple: {
    type: Boolean,
    default: true
  },
  // 多选时最多选择几条
  limit: {
    type: Number,
    default: 10
  },
  // 上传时的额外参数
  data: {
    type: Object,
    default: () => ({})
  },
  // 上传文件的字段名
  name: {
    type: String,
    default: 'file'
  },
  // 上传时的请求头额外参数
  header: {
    type: Object,
    default: () => ({})
  },
  //是否显示列表进度，显示列表进度将
  showFileList: {
    type: Boolean,
    default: false
  }
})

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handlePictureCardPreview = (uploadFile: any) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
const loading = ref(false)
const emit = defineEmits([
  'end',
  'start',
  'change',
  'error',
  'success',
  'update:files'
])
const uploadRefs = shallowRef<InstanceType<typeof ElUpload>>()

const visible = ref(false)
const fileList = ref<UploadUserFile[]>([])

const handleProgress = () => {
  visible.value = true
}
const handleChange = (file: any) => {
  emit('change', file)
  if (fileList.value.length == 0) {
    loading.value = false
    emit('end')
  }
}
const handleSuccess = (response: any, file: any) => {
  emit('success', response)
  emit('update:files', [
    ...props.files,
    {
      url: response.uri,
      name: response.name
    }
  ])
  const fileIndex = fileList.value.indexOf(file)
  !props.showFileList && fileList.value.splice(fileIndex, 1)
  handleChange(file)
}

const handleRemove = (file: any) => {
  const fileIndex = fileList.value.indexOf(file)
  const newFiles = props.files
  newFiles.splice(fileIndex, 1)
  emit('update:files', [...newFiles])
}

const handleError = (event: any, file: any) => {
  feedback.msgError(`${file.name}文件上传失败`)
  uploadRefs.value?.abort(file)
  visible.value = false
  emit('error', file)
  handleChange(file)
}
const handleExceed = () => {
  feedback.msgError(`超出上传上限${props.limit}，请重新上传`)
}
const handleClose = () => {
  fileList.value = []
  visible.value = false
}

const getAccept = computed(() => {
  switch (props.type) {
    case 'image':
      return '.jpg,.png,.gif,.jpeg'
    case 'video':
      return '.wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv'
    case 'audio':
      return
    default:
      return '*'
  }
})
const httpRequest = (options: UploadRequestOptions) => {
  return uploadFile(props.type as any, {
    file: options.file,
    name: props.name,
    header: props.header,
    data: props.data
  })
}

const handelBeforeUpload = (rawFile: UploadRawFile) => {
  loading.value = true
  emit('start', rawFile)
}

watch(
  () => props.files,
  (value) => {
    if (!fileList.value.length && value?.length) {
      fileList.value = [...value]
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.upload {
  :deep() {
    .el-upload-list--picture-card {
      --el-upload-list-picture-card-size: 80px;
    }
    .el-upload--picture-card {
      --el-upload-picture-card-size: 80px;
    }
    .el-upload-list__item .el-icon--close-tip {
      visibility: hidden;
    }
  }
}
</style>
