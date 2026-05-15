<template>
  <section id="services" class="s-services ss-dark target-section">
    <div class="shadow-overlay"></div>

    <div class="row heading-block heading-block--center" data-aos="fade-up">
      <div class="column large-full">
        <h2 class="section-heading section-heading--centerbottom">Compétences</h2>
        <p class="section-desc">Technologies utilisées</p>
      </div>
    </div>

    <div class="row services-list block-large-1-3 block-medium-1-2 block-tab-full">
      <div class="column item-service" v-for="skill in skills" :key="skill.name" data-aos="fade-up">
        <div class="item-service__content">
          <h4 class="item-title">{{ skill.name }}</h4>
          <img :src="skill.icon" :alt="`Icône ${skill.name}`" width="50" height="50">
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ skills: Array })
</script>
