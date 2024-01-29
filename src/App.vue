<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderApp from "@/components/Header.vue";
import Breadcrumb from "@/components/breadcrumb/Index.vue";
</script>

<template>
	<HeaderApp />
	<Breadcrumb />
	<RouterView />
</template>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>