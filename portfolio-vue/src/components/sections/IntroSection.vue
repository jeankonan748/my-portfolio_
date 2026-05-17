<template>
  <section id="intro" class="s-intro target-section">
    <div class="row intro-content">
      <div class="column large-9 mob-full intro-text">
        <h3>Hey, Je suis {{ profile.nickname || profile.name.split(' ')[1] }}</h3>
        <h1>
          <span v-for="(role, i) in profile.roles" :key="i">
            {{ role }}<br v-if="i < profile.roles.length - 1">
          </span>
        </h1>
      </div>

      <div class="intro-buttons">
        <a :href="profile.cv" download class="btn btn--primary btn--large">
          Télécharger CV
        </a>
      </div>

      <div class="intro-scroll">
        <a href="#about" class="intro-scroll-link" @click.prevent="scrollTo('about')">
          Défilez vers le bas
        </a>
      </div>

      <div class="intro-grid"></div>
      <div class="intro-pic"></div>
    </div>
  </section>
</template>

<script setup>
defineProps({ profile: Object })

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
}
</script>
