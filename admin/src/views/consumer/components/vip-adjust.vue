<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="550px"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="84px" @submit.native.prevent>
                <el-form-item label="会员等级">
                    <el-select v-model="formData.member_package_id" class="w-[380px]">
                        <el-option label="请选择" value></el-option>
                        <el-option
                            v-for="(item, index) in menberList"
                            :key="index"
                            :label="item.name"
                            :value="item.id"
                            :disabled="currentPackageIndex < index && currentPackageIndex != -1"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="到期时间">
                    <div>
                        <div class="flex items-center">
                            <el-date-picker
                                class="!w-[310px] date-picker"
                                v-model="formData.member_end_time"
                                type="datetime"
                                placeholder="请选择"
                                value-format="YYYY-MM-DD HH:mm:ss"
                                :disabled="!!formData.member_perpetual"
                            />
                            <el-checkbox
                                class="ml-4"
                                v-model="formData.member_perpetual"
                                :true-label="1"
                                :false-label="0"
                            >永久</el-checkbox
                            >
                        </div>
                        <div class="form-tips">留空表示关闭全部会员</div>
                    </div>
                </el-form-item>
            </el-form>
        </popup>
    </div>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { adjustMember, getMemberList } from '@/api/consumer'
const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')
const popupTitle = computed(() => {
    return (mode.value = '调整会员时间')
})
const formData: any = ref({
    id: '',
    member_end_time: '',
    member_perpetual: 0,
    member_package_id: ''
})

const menberList: any = ref([])

const currentPackageIndex = computed(() => {
    return menberList.value.findIndex((item: any) => {
        return item.id == formData.value.member_package_id
    }) || -1
})

const handleSubmit = async () => {
    if (formData.member_end_time == null) {
        formData.member_end_time = ''
    }
    await adjustMember(formData.value)
    popupRef.value?.close()
    emit('success')
}

const open = (type = 'add') => {
    mode.value = type
    popupRef.value?.open()
    getMemberdrowDownList()
}

const setFormData = async (data: any, id: any) => {
    console.log(data)
    setTimeout(() => {
        if (!data.is_perpetual) {
            formData.value.member_end_time = data.package_time
        }
        formData.value.member_perpetual = data.is_perpetual
        formData.value.member_package_id = data.package_id || ''
        formData.value.id = id
    }, 500)
}

//获取会员下拉
const getMemberdrowDownList = async () => {
    menberList.value = await getMemberList()
}

const handleClose = () => {
    emit('close')
}

defineExpose({
    open,
    setFormData
})
</script>

<style lang="scss">
.date-picker {
    .el-input__wrapper {
        width: 100% !important;
    }
}

</style>