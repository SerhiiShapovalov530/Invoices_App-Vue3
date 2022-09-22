<script setup>
import { ref } from "vue";
import InvoiceRow from "@/components/invoice/Row.vue";

const invoices = ref([
    { id: 1, status: 'paid' },
    { id: 2, status: 'pending' },
    { id: 3, status: 'paid' },
    { id: 4, status: 'pending' },
    { id: 5, status: 'pending' },
    { id: 6, status: 'pending' },
    { id: 7, status: 'draft' },
    { id: 8, status: 'draft' },
    { id: 9, status: 'draft' },
    { id: 7, status: 'draft' },
])
</script>
    
<template>
    <div class="flex flex-col gap-4">
        <InvoiceRow
            v-for="invoice in invoices"
            :status="invoice.status"
            :key="invoice.id"
        />
    </div>
</template>