<template>
	<div class="container my-5">
		<div class="row">
			<!-- Exibição do nome do usuário logado -->
			<div class="col-12 mb-3">
				<h1 class="mb-4">Bem-vindo {{ userName }}!</h1>
			</div>

			<!-- Exibição do saldo disponível -->
			<div class="col-12 mb-4">
				<div>
					<small>Saldo disponível</small>
					<h3>{{ formatCurrency(saldo) }}</h3>
				</div>
			</div>

			<!-- Botões iniciais -->
			<div class="col-12 d-block d-md-flex justify-content-between mb-4">
				<button
					class="btn btn-primary m-2"
					@click="navigateToPixArea"
				>Área PIX</button>
				<button
					class="btn btn-primary m-2"
					@click="navigateToPagar"
				>Pagar</button>
				<button
					class="btn btn-primary m-2"
					@click="navigateToTransferir"
				>Transferir</button>
				<button
					class="btn btn-primary m-2"
					@click="navigateToCobrar"
					disabled
				>Cobrar</button>
				<button
					class="btn btn-primary m-2"
					@click="navigateToExtrato"
				>Extrato</button>
				<button
					class="btn btn-primary m-2"
					@click="navigateToCofrinho"
					disabled
				>Cofrinho</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			userName: 'Usuário',
			saldo: 0
		};
	},
	methods: {
		formatCurrency(value) {
			return `R$ ${value.toFixed(2)}`;
		},
		navigateToPixArea() {
			this.$router.push('/pix');
		},
		navigateToPagar() {
			this.$router.push('/pay');
		},
		navigateToTransferir() {
			this.$router.push('/transferencias');
		},
		navigateToCobrar() {
			// TODO: Implementar a navegação para a página de cobrança
		},
		navigateToExtrato() {
			this.$router.push('/bank-statement');
		},
		navigateToCofrinho() {
			// TODO: Implementar a navegação para a página do cofrinho
		}
	}
};
</script>