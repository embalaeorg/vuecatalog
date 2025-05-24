<template>

<v-card
      :disabled="loading"
      :loading="loading"
      class="mx-auto my-12"
      max-width="424"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="354"
        :src="produto?.imagem"
        cover
      ></v-img>
  
      <v-card-item>
        <v-card-title>{{ produto.nome }}</v-card-title>
  
        <v-card-subtitle>
          <span class="me-1">{{ produto.descricao }}</span>
  
          <v-icon
            color="error"
            icon="mdi-fire-circle"
            size="small"
          ></v-icon>
        </v-card-subtitle>
      </v-card-item>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            size="small"
            half-increments
            readonly
          ></v-rating>

        </v-row>
  
        <div class="my-4 text-subtitle-1">
          {{ produto.titulo }}
        </div>
  
        <div>{{ produto.complemento }}</div>
      </v-card-text>
  
      <v-divider class="mx-4 mb-1"></v-divider>
    
      <div class="px-4 mb-2">
        <v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
          <v-chip>1x1</v-chip>
          <v-chip>1x2</v-chip>
          <v-chip>1x3</v-chip>
        </v-chip-group>
      </div>
  
      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Adicionar"
          block
          border
          @click="adicionar"
        ></v-btn>
      </v-card-actions>
    </v-card>

</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    produto: {
      type: Object,
      default: null,
    },
  },
  data: () => ({}),
}
</script>
