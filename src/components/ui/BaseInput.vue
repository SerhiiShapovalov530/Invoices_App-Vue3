<script>
export default { inheritAttrs: false }
</script>

<script setup>
defineProps(['label', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="block text-sm font-medium text-white">
    {{ label }}
    <input
      class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </label>
</template>

