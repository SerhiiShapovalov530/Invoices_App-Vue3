<script setup>
import { RouterLink } from 'vue-router'
import Footer from '@/components/ui/Footer.vue';
</script>

<template>
    <main class="flex justify-center w-screen overflow-y-auto bg-slate-900 dark:bg-gray-50 dark:text-gray-900">
        <div class="w-6/12 flex flex-col">
            <div class="flex justify-between mt-20 mb-14">
                <div>
                    <router-link to="/">
                        <div class="flex text-violet-500 cursor-pointer p-2 rounded-full">
                            <svg class="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-white mx-3">Go back</span>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="flex duration-300 justify-between items-center p-6 rounded-lg bg-slate-800 text-slate-400 dark:bg-white shadow-md mb-8">
                <div class="text-center flex items-center gap-6 text-lg">
                    Status
                    <div class="backdrop-blur-xl bg-orange-400/10 text-orange-400 text-center w-32 py-3 rounded-md font-bold capitalize">
                        ● Pending
                    </div>
                </div>
                <div class="flex gap-4">
                    <button class="w-20 py-4 bg-slate-600 text-white text-sm font-semibold rounded-full shadow focus:outline-none text-center">
                        Edit
                    </button>
                    <button class="w-28 py-4 bg-rose-600 text-white text-sm font-semibold rounded-full shadow focus:outline-none text-center">
                        Delete
                    </button>
                    <button class="w-32 py-4 bg-purple-600 text-white text-sm font-semibold rounded-full shadow focus:outline-none text-center">
                        Mark as Paid
                    </button>
                </div>
            </div>

            <div class="flex flex-col duration-300 p-12 rounded-lg bg-slate-800 text-slate-400 dark:bg-white shadow-md">
                <div class="flex justify-between">
                    <div class="w-32 text-left text-2xl">
                        #<span class="text-white font-semibold dark:text-gray-900">RT3080</span>
                        <div class="text-lg">Graphic Design</div>
                    </div>
                    <div class="text-right">
                        <div>79 Union Terrain</div>
                        <div>London</div>
                        <div>EJEZ</div>
                        <div>United Kingdom</div>
                    </div>
                </div>
                
                <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
                    <div class="mt-10">
                        <div class="text-lg">Invoice Date</div>
                        <span class="text-2xl text-white font-semibold dark:text-gray-900">21 Aug 2021</span>
                    </div>
                    <div class="mt-10 row-span-2">
                        <div class="text-lg">Bill To</div>
                        <span class="text-2xl text-white font-semibold dark:text-gray-900">Alex Grim</span>
                        <div class="mt-2">
                            <div>hola amigo como estas</div>
                            <div>hola amigo como estas</div>
                            <div>hola amigo como estas</div>
                            <div>hola amigo como estas</div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <div class="text-lg">Sent to</div>
                        <span class="text-2xl text-white font-semibold dark:text-gray-900">alexgrim@mail.coms</span>
                    </div>
                    <div class="mt-10 ">
                        <div class="text-lg">Payment Due</div>
                        <span class="text-2xl text-white font-semibold dark:text-gray-900">20 Oct 2021</span>
                    </div>
                </div>

                <div class="bg-slate-400/10">
                    <table class="table-auto w-full rounded-md">
                              <thead>
                            <tr>
                                <th class="text-left p-4">Item Name</th>
                                <th class="text-center p-4">Qty</th>
                                <th class="text-right p-4">Price</th>
                                <th class="text-right p-4">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left p-4">x</td>
                                <td class="text-center p-4">1</td>
                                <td class="text-right p-4">x</td>
                                <td class="text-right p-4">x</td>
                            </tr>
                            <tr>
                                <td class="text-left p-4">x</td>
                                <td class="text-center p-4">1</td>
                                <td class="text-right p-4">2</td>
                                <td class="text-right p-4">x</td>
                            </tr>
                        </tbody>
                        <tfoot class="h-20 bg-slate-900 m-5">
                            <tr>
                                <td class="text-left p-4">Amount Due</td>
                                <td colspan="2"></td>
                                <td class="text-right p-4 text-3xl text-white font-semibold">
                                    $ 556.00
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>


            <h1>Invoice View Page {{ $route.params.id }}</h1>

            <Footer />
        </div>
    </main>
</template>