<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'


const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <DocumentationIcon />
  <a href="/catalogo/listar" target="_blank" rel="noopener">Catálogo de Produtos</a>

</template>
