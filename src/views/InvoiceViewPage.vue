
<script setup>
import Footer from '@/components/ui/Footer.vue';
</script>

<template>
    <main class="flex justify-center w-screen overflow-y-auto bg-slate-900 dark:bg-gray-50 dark:text-gray-900">
        <div class="w-6/12 flex flex-col">
            <div class="flex justify-between mt-20 mb-14">
                <div>
                    <h1 class="text-5xl font-semi-bold mb-1 ">Go back</h1>
                </div>
            </div>

            <h1>Invoice View Page {{ $route.params.id }}</h1>

            <Footer />
        </div>
    </main>
</template>