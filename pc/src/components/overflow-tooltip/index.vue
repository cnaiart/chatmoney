<template>
  <div class="overflow-tooltip">
    <el-tooltip
      v-bind="props"
      popper-class="overflow-tooltip-popper whitespace-pre-wrap"
      :disabled="disabled"
    >
      <div
        ref="textRef"
        class="overflow-text line-clamp-1"
        :style="{ textOverflow: overflowType, '-webkit-line-clamp': line }"
      >
        {{ content }}
      </div>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { useEventListener } from '@vueuse/core'
import { type Placement, useTooltipContentProps } from 'element-plus'
import type { PropType } from 'vue'

const props = defineProps({
  ...useTooltipContentProps,
  teleported: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'top'
  },
  overflowType: {
    type: String as PropType<'ellipsis' | 'unset' | 'clip'>,
    default: 'ellipsis'
  },
  line: {
    type: Number,
    default: 1
  }
})
const textRef = shallowRef<HTMLElement>()
const disabled = ref(false)

useEventListener(textRef, 'mouseenter', () => {
  if (props.disabled) {
    disabled.value = true
    return
  }
  if (
    textRef.value?.scrollWidth! > textRef.value?.offsetWidth! ||
    textRef.value?.scrollHeight! > textRef.value?.offsetHeight!
  ) {
    disabled.value = false
  } else {
    disabled.value = true
  }
})
</script>

<style lang="scss">
.overflow-tooltip-popper {
  max-width: 800px;
}
</style>
