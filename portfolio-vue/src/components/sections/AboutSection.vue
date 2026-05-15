<template>
  <section id="about" class="s-about target-section">

    <div class="about-me">
      <div class="row heading-block" data-aos="fade-up">
        <div class="column large-full">
          <h2 class="section-heading">À Propos</h2>
        </div>
      </div>

      <div class="row about-me__content" data-aos="fade-up">
        <div class="column large-full about-me__text">
          <p class="lead">{{ profile.bio.intro }}</p>
          <p>{{ profile.bio.formation }}</p>
          <p>{{ profile.bio.realisations }}</p>
          <p><b>Vision & Ambitions :</b> {{ profile.bio.vision }}</p>
        </div>
      </div>

      <div class="row about-me__buttons">
        <div class="column large-half tab-full" data-aos="fade-up">
          <a :href="`mailto:${profile.email}`" class="btn btn--stroke full-width">Embauche-moi</a>
        </div>
        <div class="column large-half tab-full" data-aos="fade-up">
          <a :href="profile.cv" :download="profile.cv.split('/').pop()" class="btn btn--primary full-width">
            Mon CV
          </a>
        </div>
      </div>
    </div>

    <div class="about-experience">
      <div class="row heading-block" data-aos="fade-up">
        <div class="column large-full">
          <h2 class="section-heading">Parcours & Expérience</h2>
        </div>
      </div>

      <div class="row about-experience__timeline">

        <!-- Expérience -->
        <div class="column large-half tab-full" data-aos="fade-up">
          <div class="timeline">
            <div class="timeline__icon-wrap">
              <span class="timeline__icon timeline__icon--work"></span>
            </div>
            <div class="timeline__block" v-for="exp in timeline.experience" :key="exp.company">
              <div class="timeline__bullet"></div>
              <div class="timeline__header">
                <p class="timeline__timeframe">{{ exp.period }}</p>
                <h3 class="item-title">{{ exp.company }}</h3>
                <h5>{{ exp.role }}</h5>
              </div>
              <div class="timeline__desc">
                <p>{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formation -->
        <div class="column large-half tab-full" data-aos="fade-up">
          <div class="timeline">
            <div class="timeline__icon-wrap">
              <span class="timeline__icon timeline__icon--education"></span>
            </div>
            <div class="timeline__block" v-for="edu in timeline.education" :key="edu.school + edu.degree">
              <div class="timeline__bullet"></div>
              <div class="timeline__header">
                <p class="timeline__timeframe">{{ edu.period }}</p>
                <h3 class="item-title">{{ edu.school }}</h3>
                <h5>{{ edu.degree }}</h5>
              </div>
              <div class="timeline__desc" v-if="edu.description">
                <p>{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
defineProps({
  profile: Object,
  timeline: Object
})
</script>
