import { defineStore } from "pinia"
import CatalogoApi from "@/api/catalogo.api.js"

export const useCatalogoStore = defineStore("catalogoStore", {
  state: () => ({
    loading: false,
    produtos: [],
  }),
  actions: {
    async listarProdutos() {

      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 4000)

      const response = await CatalogoApi.listarProdutos()

      this.produtos = response.produtos
      return this.produtos
    },
  },
})
