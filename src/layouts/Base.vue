<script setup>
import Sidebar from '../components/ui/Sidebar.vue';
</script>

<template>
    <div className='flex h-screen font-sans text-white'>
        <Sidebar />
        <slot />
    </div>
</template>