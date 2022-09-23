import axios from 'axios'
import { ref } from 'vue'

export const useFetchData = () => {
  const data = ref(null)
  const isLoading = ref(true)

  const fetchData = async (url) => {
    isLoading.value = true

    try {
      const response = await axios.get(url)
      data.value = response.data
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    data,
    fetchData
  }
}
