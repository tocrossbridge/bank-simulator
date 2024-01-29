<template>
	<div class="container">
		<filter-transfers />
		<table-transfers />
	</div>
</template>
<script>
import FilterTransfers from './components/Filter.vue'
import TableTransfers from './components/Table.vue'

export default {
	name: 'Transactions',
	components: {
		FilterTransfers,
		TableTransfers
	},
}
</script>