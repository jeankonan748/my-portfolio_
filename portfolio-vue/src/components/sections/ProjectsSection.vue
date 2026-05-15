<template>
  <section id="works" class="s-works target-section">
    <div class="row heading-block heading-block--center" data-aos="fade-up">
      <div class="column large-full">
        <h2 class="section-heading section-heading--centerbottom">Projets Réalisés</h2>
        <p class="section-desc">Voici quelques-uns des projets que j'ai réalisés. N'hésitez pas à les consulter.</p>
      </div>
    </div>

    <div class="projects-grid">
      <div
        class="project-card"
        v-for="project in projects"
        :key="project.id"
        data-aos="fade-up"
      >
        <div class="project-card__video-wrap">
          <video v-if="project.video" controls preload="metadata">
            <source :src="project.video" type="video/mp4">
          </video>
          <img v-else-if="project.thumbnail" :src="project.thumbnail" :alt="project.title">
          <div class="project-card__overlay">
            <span class="project-card__category">{{ project.categoryLabel }}</span>
          </div>
        </div>

        <div class="project-card__body">
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__desc">{{ project.description }}</p>

          <div class="project-card__tags" v-if="project.technologies?.length">
            <span class="project-card__tag" v-for="tech in project.technologies" :key="tech">
              {{ tech }}
            </span>
          </div>

          <div class="project-card__links" v-if="project.github || project.demo">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="project-card__btn">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="project-card__btn project-card__btn--accent">
              <i class="fas fa-external-link-alt"></i> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ projects: Array })
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  width: 89%;
  max-width: 1400px;
  margin: 8rem auto 0;
}

.project-card {
  background: #0d0d0d;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
}

/* ── video wrapper ── */
.project-card__video-wrap {
  position: relative;
  background: #000;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.project-card__video-wrap video,
.project-card__video-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* category badge on top-right of video */
.project-card__overlay {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  pointer-events: none;
}

.project-card__category {
  background: #cf1767;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 20px;
}

/* ── card body ── */
.project-card__body {
  padding: 2.8rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  flex: 1;
}

.project-card__title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.project-card__desc {
  font-size: 1.5rem;
  color: #aaaaaa;
  line-height: 1.7;
  margin: 0;
}

/* ── tech tags ── */
.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.project-card__tag {
  font-size: 1.1rem;
  font-weight: 600;
  color: #cf1767;
  background: rgba(207, 23, 103, 0.1);
  border: 1px solid rgba(207, 23, 103, 0.3);
  border-radius: 4px;
  padding: 0.3rem 0.9rem;
  letter-spacing: 0.04em;
}

/* ── links ── */
.project-card__links {
  display: flex;
  gap: 1.2rem;
  margin-top: auto;
}

.project-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 0.7rem 1.6rem;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.project-card__btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.project-card__btn--accent {
  background: #cf1767;
  border-color: #cf1767;
  color: #fff;
}

.project-card__btn--accent:hover {
  background: #a8124f;
  border-color: #a8124f;
  color: #fff;
}

/* ── responsive ── */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
    width: 92%;
  }
}

@media (max-width: 600px) {
  .projects-grid {
    gap: 3rem;
    margin-top: 5rem;
  }
  .project-card__body {
    padding: 2rem 2rem 2.4rem;
  }
  .project-card__title {
    font-size: 1.9rem;
  }
}
</style>
