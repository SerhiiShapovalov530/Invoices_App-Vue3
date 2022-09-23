<script setup>
// import { ref } from "vue";
import InvoiceRow from "@/components/invoice/Row.vue";

import { useInvoicesStore } from "@/stores/invoices"

const invoicesStore = useInvoicesStore()

// const invoices = ref([
//     { id: '1', status: 'paid' },
//     { id: '2', status: 'pending' },
//     { id: '3', status: 'paid' },
//     { id: '4', status: 'pending' },
//     { id: '5', status: 'pending' },
//     { id: '6', status: 'pending' },
//     { id: '7', status: 'draft' },
//     { id: '8', status: 'draft' },
//     { id: '9', status: 'draft' },
//     { id: '7', status: 'draft' },
// ])

// defineProps({
//     'data': {
//         type: Array,
//         default: []
//     }
// })
</script>
    
<template>
    <div v-if="!invoicesStore.isLoading" class="flex flex-col gap-4">
        <InvoiceRow
            v-for="invoice in invoicesStore.filterByStatus()"
            :data="invoice"
            :key="invoice.id"
        />
    </div>
    <div v-else>loading...</div>
</template>