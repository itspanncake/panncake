<template>
    <section class="section" id="apropos">
        <div class="section-header">
            <h2 class="section-title">À propos de moi</h2>
            <p class="section-subtitle">Découvrez mon parcours, mes compétences et ma passion pour la technologie</p>
        </div>

        <div class="about-content">
            <div v-for="me in me" :key="me.name" class="about-text">
                <h3>{{ me.name }}</h3>
                <p>{{ me.text }}</p>
            </div>

            <div class="skills-grid">
                <div v-for="skill in skills" :key="skill.name" class="skill-item">
                    <div class="skill-icon"><font-awesome-icon :icon="skill.iconArray" /> </div>
                    <div class="skill-name">{{ skill.name }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutSection',
    data() {
        return {
            skills: [
                { name: 'JavaScript', iconArray: ['fab', 'square-js'] },
                { name: 'Node.js', iconArray: ['fab', 'node'] },
                { name: 'Vue.js', iconArray: ['fab', 'vuejs'] },
                { name: 'Git', iconArray: ['fab', 'git'] },
            ],

            me: [
                {
                    name: 'Mon histoire',
                    text: "Membre de la communauté furry depuis de nombreuses années, j'ai fondé EuroPaws " +
                    "avec la vision de créer une plateforme européenne unie. Mon ambition était de construire " +
                    "un espace où chacun se sentirait véritablement chez soi, favorisant ainsi des connexions authentiques."
                },
                {
                    name: 'Ma mission',
                    text: "Je crée des projets qui rapprochent les individus et stimulent les échanges créatifs. " +
                    "Mon focus est d'améliorer constamment l'expérience utilisateur et de développer des plateformes " +
                    "qui facilitent une interaction riche et significative entre les personnes."
                },
                {
                    name: 'Mes valeurs',
                    text: "L'inclusion, l'innovation et la qualité sont au cœur de ma démarche. Je suis convaincu " +
                    "du pouvoir des communautés et de l'importance de bâtir des espaces numériques sécurisés " +
                    "et accueillants pour tous."
                }
            ]
        }
    }
}
</script>