<template>
  <div class="app">
    <!-- Header -->
    <AppHeader />

    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    AboutSection,
    ProjectsSection,
    AppFooter
  },
  mounted() {
    this.initScrollEffects()
    this.initSmoothScrolling()
  },
  methods: {
    initScrollEffects() {
      // Header background au scroll
      window.addEventListener('scroll', () => {
        const header = document.querySelector('.header')
        if (window.scrollY > 100) {
          header.style.background = 'rgba(10, 11, 16, 0.98)'
        } else {
          header.style.background = 'rgba(10, 11, 16, 0.95)'
        }
      })

      // Animation au scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      }, observerOptions)

      // Observer tous les éléments de section
      document.querySelectorAll('.section').forEach(section => {
        observer.observe(section)
      })
    },
    initSmoothScrolling() {
      // Smooth scrolling pour les liens de navigation
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        })
      })
    }
  }
}
</script>