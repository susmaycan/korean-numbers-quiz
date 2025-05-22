<script setup lang="ts">
import { useDisplay } from 'vuetify'

defineProps<{
  isLoading: boolean
  list: NumberResult[]
}>()

const { mobile } = useDisplay()

const { isDateQuizType, isTimeDateQuizType } = useSettings()

const showTooltip = ref(false)

const tooltipText = computed(() => {
  if (!isDateQuizType.value) return null

  if (isTimeDateQuizType.value) return 'hour_warning'

  return 'date_warning'
})
</script>
<template>
  <div class="d-flex flex-column w-100 pa-5">
    <div class="d-flex align-center justify-space-between">
      <div>
        <h2>{{ $t('results') }}</h2>
        <div class="d-flex align-center">
          <v-tooltip
            v-if="tooltipText"
            v-model="showTooltip"
            :text="$t(tooltipText)"
            location="bottom"
          >
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                icon="mdi-information"
                color="info"
                class="mr-2"
                @click="showTooltip = !showTooltip"
              />
            </template>
          </v-tooltip>
          <p>{{ $t('fill_data') }}</p>
        </div>
      </div>
      <results-toggle v-if="!mobile" />
    </div>
    <results-toggle v-if="mobile" />
    <div v-if="isLoading" class="justify-center ma-3 align-items-center">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div v-else class="number-list mt-8">
      <number-row
        v-for="(number, index) in list"
        :key="`${number.number}-${index}-${Date.now()}`"
        :row="number"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.number-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

@media (max-width: 1000px) {
  .number-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 756px) {
  .number-list {
    grid-template-columns: repeat(1, 1fr);
  }

  .empty-list-container {
    margin: 1em;
  }
}
</style>
