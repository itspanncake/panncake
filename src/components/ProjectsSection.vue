<template>
    <section class="section" id="projets">
        <div class="section-header">
            <h2 class="section-title">Mes Projets</h2>
            <p class="section-subtitle">Découvrez les projets sur lesquels j'ai travaillé et qui me tiennent à cœur</p>
        </div>

        <div class="projects-grid">
            <div v-for="project in projects" :key="project.id" class="project-card">
                <div class="project-header">
                    <img v-if="project.image" :src="project.image" :height="project.imageHeight" :width="project.imageWidth" :alt="project.title">
                    <span v-else>{{ project.icon }}</span>
                </div>
                <div class="project-content">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-description">{{ project.description }}</p>
                    <div class="project-tech">
                        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
                    </div>
                    <div class="project-links">
                        <a v-for="link in project.links" :key="link.text" :href="link.url" class="project-link">
                            {{ link.icon }} {{ link.text }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectsSection',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'EuroPaws',
                    description: 'Plateforme furry européenne, dôté d\'un système de commissions artistes, planification d\'événements et panel membre.',
                    technologies: ['React', 'Node.js', 'Vue.js'],
                    image: 'ep-nobg.png',
                    imageHeight: '256',
                    imageWidth: '256',
                    icon: '🐾',
                    links: [
                        { text: 'Site Web', url: 'https://europaws.panncake.fr', icon: '🌐' }
                    ]
                },
                {
                    id: 2,
                    title: 'Skyria',
                    description: 'Serveur Minecraft survie semi-rp, économie stable, système de villes, protection de zones, axé sur le gameplay et la bonne entente.',
                    image: 'skyria-nobg.png',
                    imageHeight: '160',
                    imageWidth: '160',
                    technologies: ['Java', 'JavaScript'],
                    links: [
                        { text: 'Site Web', url: 'https://skyria.fr', icon: '🌐' }
                    ]
                }
            ]
        }
    }
}
</script>