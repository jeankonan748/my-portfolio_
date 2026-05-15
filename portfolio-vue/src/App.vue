<template>
  <div id="top">
    <div id="preloader">
      <div id="loader"></div>
    </div>

    <AppHeader :social="social" :activeSection="activeSection" />

    <main>
      <IntroSection :profile="profile" />
      <AboutSection :profile="profile" :timeline="timeline" />
      <SkillsSection :skills="skills" />
      <ProjectsSection :projects="projects" />
      <ContactSection :profile="profile" :social="social" />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import IntroSection from './components/sections/IntroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

import profile from './data/profile.json'
import social from './data/social.json'
import skills from './data/skills.json'
import projects from './data/projects.json'
import timeline from './data/timeline.json'

const activeSection = ref('intro')

function onScroll() {
  const sections = ['intro', 'about', 'services', 'works', 'contact']
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && window.scrollY >= el.offsetTop - 200) {
      activeSection.value = sections[i]
      break
    }
  }
}

onMounted(() => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 300,
    once: true,
    disable: 'mobile'
  })

  window.addEventListener('load', () => {
    document.querySelector('html')?.classList.add('ss-loaded')
    const loader = document.getElementById('loader')
    const preloader = document.getElementById('preloader')
    if (loader) loader.style.display = 'none'
    if (preloader) setTimeout(() => { preloader.style.display = 'none' }, 300)
  })

  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
