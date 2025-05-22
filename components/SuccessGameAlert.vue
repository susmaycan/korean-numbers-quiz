<script setup lang="ts">
defineProps<{
  allCorrectAnswers: boolean
}>()

const emits = defineEmits(['generate-quiz'])

const timeout = 6000
</script>
<template>
  <v-snackbar
    :model-value="!!allCorrectAnswers"
    color="success"
    :timeout="timeout"
    multi-line
  >
    <div>
      <h3 class="mb-1">{{ $t('win_title') }}</h3>
      <p>{{ $t('win_message') }}</p>
    </div>
    <template v-slot:actions>
      <v-btn variant="text" @click="emits('generate-quiz')">{{
        $t('play_again')
      }}</v-btn>
    </template>
  </v-snackbar>
</template>
