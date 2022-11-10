<script setup>
import { onBeforeMount, ref, watch } from "vue";
import InvoiceTable from "@/components/invoice/Table.vue";
import Footer from "@/components/ui/Footer.vue";
import SlideOver from "../components/ui/SlideOver.vue";
// import { useFetchData } from "@/composables/fetchInvoices"
import { useInvoicesStore } from "@/stores/invoices"
import { useRouter, useRoute } from "vue-router";

import BaseInput from "../components/ui/BaseInput.vue";

const router = useRouter()
const route = useRoute()
const invoicesStore = useInvoicesStore()

const showSlideOver = ref(false)

const msg = ref('')

const toggleSlideOver = ()  => showSlideOver.value = !showSlideOver.value

// const { isLoading, data, fetchData } = useFetchData()

// fetchData(`http://localhost:3000/invoices`)

const filterByStatus = (event) => {
  router.push({ path: '/', query: { status: event.target.value } }) // ?status=drfat
}

watch(
  () => route.query.status,
  (status) => {
    invoicesStore.statusSelected = status || ''
  },
  { immediate: true }
)

onBeforeMount(async () => {
    await invoicesStore.fetchAll();
})
</script>

<template>
  <main class="flex justify-center w-screen overflow-y-auto bg-slate-900 dark:bg-gray-50 dark:text-gray-900">
    <div class="w-6/12 flex flex-col">
      <div class="flex justify-between mt-20 mb-14">
        <div>
          <h1 class="text-5xl font-semi-bold mb-1 ">Invoices</h1>
          <small class="text-lg dark:text-gray-400">There are 7 total invoices</small>
        </div>
        <div class="flex items-center gap-8">
          <select class="bg-transparent focus:outline-none cursor-pointer border-0" v-model="invoicesStore.statusSelected" @change="filterByStatus">
            <option class="text-gray-800" value="">Filter by status</option>
            <option class="text-gray-800" value="paid">Paid</option>
            <option class="text-gray-800" value="pending">Pending</option>
            <option class="text-gray-800" value="draft">Draft</option>
          </select>
          <button class="flex items-center gap-2 py-1 pl-1 pr-3 bg-purple-800 text-white text-sm font-semibold rounded-full shadow focus:outline-none" @click="toggleSlideOver">
            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
            New Invoice
          </button>
        </div>
      </div>

      <InvoiceTable />

      <teleport to="#teleport-root">
        <SlideOver :is-open="showSlideOver" @onToggleSlideOver="toggleSlideOver">
          <template #header>New #XM9141</template>
          <template #content>
            <div class="text-sm font-semibold mb-3 text-purple-500">Bill From</div>

            <div class="grid grid-cols-6 gap-4">
              <div class="col-span-9">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Street Address" />
              </div>
              <div class="col-span-9 sm:col-span-3">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="City" />
              </div>
              <div class="col-span-9 sm:col-span-3">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Post Code" />
              </div>
              <div class="col-span-9 sm:col-span-3">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Country" />
              </div>
            </div>

            <div class="text-sm font-semibold mb-3 text-purple-500 mt-10">Bill To</div>

            <div class="grid grid-cols-9 gap-4">
              <div class="col-span-9">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Client's Name" />
              </div>
              <div class="col-span-9">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Client's Email" />
              </div>
              <div class="col-span-9">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Street Address" />
              </div>
              <div class="col-span-9 sm:col-span-3">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="City" />
              </div>
              <div class="col-span-9 sm:col-span-3">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Post Code" />
              </div>
              <div class="col-span-9 sm:col-span-3">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Country" />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-4 mt-8">
              <div class="col-span-6 sm:col-span-3">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Invoice Date" />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Payment Terms" />
              </div>
              <div class="col-span-6">
                <BaseInput type="text" class="text-zinc-900" v-model="msg" label="Project Description" />
              </div>
            </div>

            <div class="text-xl font-semibold mb-3 text-purple-200 mt-10">Item List</div>

            <table class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
              <thead>
                <tr class="bg-slate-50 dark:bg-slate-700">
                  <th class="border border-slate-600">Item Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Banner Design</td>
                  <td>1</td>
                  <td>156.00</td>
                  <td>156.01</td>
                  <td>DEL</td>
                </tr>
                <tr>
                  <td>Banner Design</td>
                  <td>1</td>
                  <td>156.00</td>
                  <td>156.01</td>
                  <td>DEL</td>
                </tr>
              </tbody>
            </table>

          </template>
        </SlideOver>
      </teleport>
      <Footer />
    </div>
  </main>
</template>

<style>
</style>
