<script>
import IconLogo from './icons/IconLogo.vue';

export default {
    components: { IconLogo }
}
</script>
<template>
    <header>
        <IconLogo />
    </header>
</template>
<style scoped>
header {
    margin: 2em;
}
@media screen and (min-width: 900px) {
    header {
        margin: 2em auto;
    }
}
</style>
