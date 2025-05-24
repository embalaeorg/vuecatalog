<template>

<div v-for="produto in catalogoStore.produtos" :key="produto.id">

  <produto-card :produto="produto" :isActive="true" :loading="catalogoStore.loading" class="mr-4">
  </produto-card>

</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProdutoCard from '../../components/ProdutoCard.vue'
import { mapState } from "pinia"
import { useCatalogoStore } from "@/stores/catalogoStore"

const catalogoStore = useCatalogoStore()
const loading = ref(false)

onMounted(() => {
  console.log('onmounted')
  catalogoStore.listarProdutos()
})

function adicionar () {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
</script>