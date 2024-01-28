<template>
	<div class="container">
		<filter-transaction />
		<table-transactions />
	</div>
</template>
<script>
import FilterTransaction from './components/Filter.vue'
import TableTransactions from './components/Table.vue'

export default {
	name: 'Transactions',
	components: {
		FilterTransaction,
		TableTransactions
	},
}
</script>
<style>
.container {
	max-width: 1200px;
	padding: 20px;
}
</style>