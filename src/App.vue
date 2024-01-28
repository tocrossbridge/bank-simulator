<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderApp from "./components/Header.vue";
</script>

<template>
	<HeaderApp />
	<RouterView />
</template>
<style>
body {
	margin: 0;
	padding: 0;
}
</style>