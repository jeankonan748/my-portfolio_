<template>
  <footer>
    <div class="row">
      <div class="column large-full ss-copyright">
        <span>© Copyright Jean Kouassi. {{ new Date().getFullYear() }}</span>
      </div>
      <div class="ss-go-top">
        <a class="smoothscroll" title="Retour en haut" href="#top" @click.prevent="scrollTop"></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
