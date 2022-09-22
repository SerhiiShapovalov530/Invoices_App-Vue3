<script setup>
import Sidebar from '../components/ui/Sidebar.vue';
</script>

<template>
    <div className='flex h-screen font-sans text-white bg-slate-900'>
        <Sidebar />
        <slot />
    </div>
</template>