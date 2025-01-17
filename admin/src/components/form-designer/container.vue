<template>
    <el-form v-if="isFormRender" ref="formRef" label-width="105px" :model="formModel.props">
        <el-form-item label="类型" prop="name">
            <div class="flex flex-wrap mx-[-5px]">
                <div
                    v-for="(item, index) in materials"
                    class="cursor-pointer px-4 border border-br border-solid rounded m-[5px]"
                    :key="index"
                    :class="{
                        'border-primary text-primary': currentIndex === index
                    }"
                    @click="selectWidget(index)"
                >
                    {{ item.title }}
                </div>
            </div>
        </el-form-item>
        <template v-for="prop in currentWidget?.props" :key="prop.name + formModel.id">
            <el-form-item
                v-if="showSetter(prop.condition)"
                :label="prop.label"
                :prop="prop.name"
                :rules="prop.rules"
            >
                <div class="flex-1">
                    <SetterComponent
                        :key="prop.name + formModel.id"
                        v-model="formModel.props"
                        :setter-name="getSetterName(prop.setter)"
                        :props-item="prop"
                    />
                    <div class="form-tips">{{ prop.tip }}</div>
                </div>
            </el-form-item>
        </template>
    </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import type { WidgetMeta, WidgetNormalization } from './material'
import { parseProps, type ConditionType } from './props'
import { isFunction } from 'lodash-es'
import { parseStringToFunction } from './parse-fun'
import { getSetterName } from './setter'
import { SetterComponent } from './setter-component'
import { uniqueId } from '@/utils/unique-id'
const materials = Object.values(
    import.meta.glob(['./material/*.ts', '!./material/_*.ts'], {
        eager: true
    })
)
    .map((module: any) => module?.default || module?.meta)
    .sort((a, b) => a.sort - b.sort)
const props = withDefaults(
    defineProps<{
        modelValue: WidgetNormalization
    }>(),
    {}
)
const emit = defineEmits<{
    (event: 'update:modelValue', value: WidgetNormalization): void
}>()

const formCache = reactive<Record<string, any>>({})

const formModel = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const isFormRender = computed(() => !!Object.keys(formModel.value.props).length)

const formRef = shallowRef<FormInstance>()

const currentIndex = computed({
    get() {
        const current = materials.findIndex((material) => material.name === formModel.value.name)
        currentWidget.value = materials[current]
        return current !== -1 ? current : 0
    },
    set(value) {
        currentWidget.value = materials[value]
        const id = uniqueId()
        formModel.value = formCache[currentWidget.value?.name!] || {
            name: currentWidget.value?.name!,
            title: currentWidget.value?.title!,
            id: id,
            props: parseProps(currentWidget.value?.props || {})
        }
    }
})

const currentWidget = ref<WidgetMeta>()
const selectWidget = (index: number) => {
    formCache[props.modelValue.name] = props.modelValue
    currentIndex.value = index
}

const showSetter = (condition?: ConditionType) => {
    if (!condition) return true
    if (isFunction(condition)) {
        return condition(formModel)
    }
    if (condition.type == 'JSFunction') {
        return parseStringToFunction(condition.value)(formModel)
    }
    return true
}

onMounted(() => {
    if (!formModel.value.name) selectWidget(0)
})

watch(formModel, (val) => {
    console.log(val)
})

defineExpose({
    async validate() {
        const valid = await formRef.value?.validate()
        return valid
    }
})
</script>
