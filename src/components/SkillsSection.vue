<template>
    <section class="section" id="skills">
        <div class="section-header">
            <h2 class="section-title">Mon Parcours</h2>
            <p class="section-subtitle">Retour sur les étapes clés de mon développement professionnel</p>
        </div>

        <div class="timeline">
            <div v-for="skill in skills" :key="skill.id" class="timeline-item">
                <div class="timeline-date">{{ skill.period }}</div>
                <div class="timeline-title">{{ skill.title }}</div>
                <div class="timeline-company">{{ skill.company }}</div>
                <div class="timeline-description">{{ skill.description }}</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SkillsSection',
    data() {
        return {
            skills: [
                {
                    id: 1,
                    period: '2024 - Présent',
                    title: 'Fondateur & CEO',
                    company: 'EuroPaws',
                    description: 'Création et développement de la première plateforme furry européenne unifiée. Gestion d\'équipe, développement technique, stratégie produit et croissance communautaire.'
                },
                {
                    id: 2,
                    period: '2022 - 2024',
                    title: 'Lead Developer',
                    company: 'TechStart Solutions',
                    description: 'Direction technique de projets web complexes. Développement full-stack, architecture microservices et management d\'équipe de développeurs.'
                },
                {
                    id: 3,
                    period: '2020 - 2022',
                    title: 'Full Stack Developer',
                    company: 'WebCraft Agency',
                    description: 'Développement d\'applications web modernes pour des clients variés. Spécialisation en React, Node.js et intégrations API complexes.'
                },
                {
                    id: 4,
                    period: '2019 - 2020',
                    title: 'Junior Developer',
                    company: 'Digital Innovations',
                    description: 'Premiers pas dans le développement web professionnel. Apprentissage des technologies modernes et contribution à des projets clients.'
                }
            ]
        }
    }
}
</script>