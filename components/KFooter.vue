<template>
  <v-footer>
    <div class="text-center">
      <div>
        <v-icon icon="mdi-copyright" class="mr-1"></v-icon
        >{{ new Date().getFullYear() }} -
        {{ $t('footer_text') }}
        <a target="_blank" href="https://susmaycan.dev"
          ><v-icon icon="mdi-open-in-new"
        /></a>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
