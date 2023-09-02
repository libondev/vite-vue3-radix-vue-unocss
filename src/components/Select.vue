<script lang="ts" setup>
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'

const sizes = useSizes()

defineProps({
  size: {
    type: String as PropType<keyof typeof sizes>,
    default: 'default'
  },
  options: {
    type: Array as PropType<string[]>,
    default: () => ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple','Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple','Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple','Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple','Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple','Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple','Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
  },
  placeholder: {
    type: String,
    default: 'Please select'
  }
})

const selectedValue = defineModel<string>()
</script>

<template>
  <SelectRoot v-model="selectedValue">
    <SelectTrigger
      class="inline-flex w-full font-inherit items-center b-(1 solid input) outlines bg-background text-sm disabled:(cursor-not-allowed op-50)"
      :class="sizes[size]"
      aria-label="Customize options"
    >
      <SelectValue :data-tips="placeholder" class="w-full text-left empty:before:(content-[attr(data-tips)] op-50)" />
    </SelectTrigger>

    <SelectPortal to="body">
      <SelectContent
        class="relative z-10 min-w-40 w-full overflow-hidden rounded-md b-(1 solid input) bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        :side-offset="5"
        position="popper"
      >
        <SelectScrollUpButton class="flex-center h-5 z-11 absolute top-0 cursor-n-resize w-full bg-background cursor-default hover:bg-secondary">
          <i class="i-carbon-chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport class="p-1 max-h-50">
          <SelectLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
            Fruits
          </SelectLabel>

          <SelectGroup>
            <SelectItem
              v-for="(option, index) in options"
              :key="index"
              class="relative flex items-center cursor-default select-none rounded-sm py-1.5 pl-7 pr-2 truncate text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:(pointer-events-none op-50)"
              :title="option"
              :value="option"
            >
              <SelectItemIndicator as-child>
                <i class="i-carbon-checkmark absolute left-2" />
              </SelectItemIndicator>

              {{ option }}
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton class="flex-center h-5 z-11 absolute bottom-0 cursor-s-resize w-full bg-background cursor-default hover:bg-secondary">
          <i class="i-carbon-chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
