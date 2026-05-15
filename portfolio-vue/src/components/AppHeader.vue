<template>
  <header class="s-header" :class="{ sticky: isSticky }">
    <div class="header-logo">
      <a class="site-logo" href="#top" @click.prevent="scrollTo('top')">
        <img src="/images/Jean Kouassi.png" alt="Jean Kouassi">
      </a>
    </div>

    <nav class="header-nav-wrap" :class="{ mobile: isMobile }" ref="navRef">
      <ul class="header-main-nav">
        <li v-for="item in navItems" :key="item.id" :class="{ current: activeSection === item.id }">
          <a href="#" @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </li>
      </ul>

      <ul class="header-social">
        <li v-for="s in social" :key="s.name">
          <a :href="s.url" target="_blank" rel="noopener">
            <i :class="s.icon" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>

    <a class="header-menu-toggle" href="#" @click.prevent="toggleMenu">
      <span :class="{ 'is-clicked': menuOpen }">Menu</span>
    </a>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  social: Array,
  activeSection: String
})

const isSticky = ref(false)
const menuOpen = ref(false)
const isMobile = ref(false)
const navRef = ref(null)

const navItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'À Propos' },
  { id: 'services', label: 'Compétences' },
  { id: 'works', label: 'Projets' },
  { id: 'contact', label: 'Contact' }
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  } else if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  if (isMobile.value) {
    menuOpen.value = false
    if (navRef.value) navRef.value.style.display = ''
  }
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (navRef.value) {
    navRef.value.style.display = menuOpen.value ? 'block' : ''
  }
}

function onScroll() {
  isSticky.value = window.scrollY > 0
}

function onResize() {
  const toggle = document.querySelector('.header-menu-toggle')
  isMobile.value = toggle ? getComputedStyle(toggle).display !== 'none' : false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onResize)
  onResize()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>
