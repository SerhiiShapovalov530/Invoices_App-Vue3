import axios from 'axios'
import { defineStore } from 'pinia'

export const useInvoicesStore = defineStore('invoices', {
  state: () => ({
    isLoading: false,
    invoices: [],
    statusSelected: ''
  }),
  getters: {
    filterByStatus: (state) => () => {
      if (!state.statusSelected) return state.invoices
      return state.invoices.filter(invoice => invoice.status === state.statusSelected)
    }
  },
  actions: {
    async fetchAll () {
      const URL = 'http://localhost:3000/invoices'
      try {
        this.isLoading = true
        const response = await axios.get(URL)
        this.invoices = await response.data
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    }
  }
})
