<template>
  <section id="contact" class="s-contact ss-dark target-section">
    <div class="row contact-main" data-aos="fade-up">
      <div class="column large-full">
        <p class="section-desc">
          Envoyez-moi un mail pour collaborer !
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>.
        </p>
      </div>
    </div>

    <div class="row contact-infos" data-aos="fade-up" data-aos-anchor=".contact-main">
      <div class="column large-5 medium-full contact-phone">
        <h4><a :href="`tel:${profile.phone}`">Appelez-moi</a></h4>
      </div>

      <div class="column large-7 medium-full contact-social">
        <h4>Social</h4>
        <ul>
          <li v-for="s in social" :key="s.name">
            <a :href="s.url" target="_blank" rel="noopener">
              <i :class="s.icon" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  profile: Object,
  social: Array
})
</script>
