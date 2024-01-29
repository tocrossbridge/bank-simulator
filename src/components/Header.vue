<template>
	<header>
		<!-- TODO: melhorar header -->
		<IconLogo />
	</header>
</template>
<script>
import IconLogo from "./icons/IconLogo.vue";

export default {
	name: 'HeaderApp',
	components: { IconLogo }
};
</script>
<style>
header {
	padding: 20px;
	background-color: #212121;
}
</style>