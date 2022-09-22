<script setup>
import InvoiceTable from "@/components/invoice/Table.vue";
import Footer from "@/components/ui/Footer.vue";
</script>

<template>
  <main class="flex justify-center w-screen overflow-y-auto">
    <div class="w-6/12 flex flex-col">
      <div class="flex justify-between mt-20 mb-14">
        <div>
          <h1 class="text-5xl font-semi-bold mb-1">Invoices</h1>
          <small>There are 7 total invoices</small>
        </div>
        <div class="flex items-center gap-8">
          <select class="bg-transparent focus:outline-none cursor-pointer">
            <option class="text-gray-800" value="">Filter by status</option>
            <option class="text-gray-800" value="paid">Paid</option>
            <option class="text-gray-800" value="pending">Pending</option>
            <option class="text-gray-800" value="draft">Draft</option>
          </select>
          <button class="flex items-center gap-2 py-1 pl-1 pr-3 bg-purple-800 text-white text-sm font-semibold rounded-full shadow focus:outline-none">
            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
            New Invoice
          </button>
        </div>
      </div>

      <InvoiceTable />

      <Footer />
    </div>
  </main>
</template>

<style>
</style>
