<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon="mdi-translate" />
    </template>
    <v-list>
      <v-list-item
        v-for="item in locales"
        :key="item.code"
        :value="item.code"
        @click="selectLocale(item.code)"
        :disabled="isSelectedLocal(item.code)"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const selectLocale = (code) => {
  setLocale(code)
}

const isSelectedLocal = (code) => locale === code
</script>
