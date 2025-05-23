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
        src="https://i.pinimg.com/736x/1f/c8/85/1fc885056246e9ed5c020383cdb9fa3b.jpg"
        cover
      ></v-img>
  
      <v-card-item>
        <v-card-title>Cafe Badilico</v-card-title>
  
        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>
  
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
          $ • Italian, Cafe
        </div>
  
        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
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


    <v-card
      :disabled="loading"
      :loading="loading"
      class="ml-2 mx-auto my-12"
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
        src="https://http2.mlstatic.com/D_NQ_NP_2X_729130-MLA82199720415_012025-F.webp"
        cover
      ></v-img>
  
      <v-card-item>
        <v-card-title>Cafe Badilico</v-card-title>
  
        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>
  
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
          $ • Italian, Cafe
        </div>
  
        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
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

    

    <v-card
      :disabled="loading"
      :loading="loading"
      class="ml-2 mx-auto my-12"
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
        src="https://i.pinimg.com/736x/52/5d/4d/525d4dbb2fdd6e973e422d53db7655aa.jpg"
        cover
      ></v-img>
  
      <v-card-item>
        <v-card-title>Cafe Badilico</v-card-title>
  
        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>
  
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
          $ • Italian, Cafe
        </div>
  
        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
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


    

    <v-card
      :disabled="loading"
      :loading="loading"
      class="ml-2 mx-auto my-12"
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
        src="https://i.pinimg.com/736x/bc/67/93/bc6793b45efc262e649c5e4a1ccf5f7f.jpg"
        cover
      ></v-img>
  
      <v-card-item>
        <v-card-title>Cafe Badilico</v-card-title>
  
        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>
  
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
          $ • Italian, Cafe
        </div>
  
        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
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

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const selection = ref(1)
function adicionar () {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
</script>