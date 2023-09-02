<script setup>
import { SwitchRoot, SwitchThumb } from 'radix-vue';

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const checkState = defineModel();
</script>

<template>
  <div>
    <p>disabled: {{ disabled }}</p>

    <SwitchRoot
      v-model:checked="checkState"
      :disabled="disabled"
      class="
        w-44px
        h-24px
        b-0
        p-2px
        rounded-full
        transition
        outlines
        cursor-default
        data-[state=checked]:bg-black
        disabled:op-50 disabled:cursor-not-allowed
      "
    >
      <SwitchThumb
        class="
          block
          w-5
          h-5
          bg-white
          shadow-sm
          rounded-full
          transition-transform
          hover:will-change-transform
          data-[state=checked]:translate-x-full
        "
      />
    </SwitchRoot>
  </div>
</template>
