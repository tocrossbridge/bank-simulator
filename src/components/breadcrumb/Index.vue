<template>
	<!-- TODO: adicionar novas rotas conforme user for navegando -->
	<div class="container my-5">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li
					class="breadcrumb-item active"
					aria-current="page"
					@click="navigateToHome"
				>
					Home
				</li>
			</ol>
		</nav>
	</div>
</template>
<script>
export default {
	name: "Breadcrumb",
	methods: {
		navigateToHome() {
			this.$router.push('/');
		},
	}
}
</script>