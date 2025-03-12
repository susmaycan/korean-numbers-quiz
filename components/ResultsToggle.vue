<script setup lang="ts">
const { showResults } = useSettings()
</script>
<template>
  <div class="pr-5">
    <v-switch
      v-model="showResults"
      hide-details
      :label="showResults ? $t('hide_results') : $t('reveal_results')"
    ></v-switch>
  </div>
</template>
