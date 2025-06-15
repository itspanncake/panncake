<template>
    <section class="hero" id="accueil">
        <div class="hero-content fade-in-up">
            <img src="/pfp.png" alt="Profile Panncake" class="profile-avatar"/>
            <h1><span class="pride">Panncake</span></h1>
            <div class="subtitle">Fondateur & Développeur</div>
            <p>Créateur d'EuroPaws, la plateforme furry européenne. Passionné par le développement web, les communautés
                en ligne et l'innovation technologique.</p>

            <div class="social-links">
                <a v-for="social in socialLinks" :key="social.name" :href="social.url" class="social-btn">
                    <span>{{ social.icon }}</span>
                    <font-awesome-icon :icon="social.iconArray" />
                    {{ social.name }}
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
    data() {
        return {
            socialLinks: [
                { name: 'GitHub', url: 'https://github.com/panncake', iconArray: ['fab', 'github'] },
                { name: 'Discord', url: 'https://discord.gg/europaws', iconArray: ['fab', 'discord'] }
            ]
        }
    }
}
</script>