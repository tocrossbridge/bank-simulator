<template>
	<div>
		<table>
			<thead>
				<tr>
					<td>Título</td>
					<td>Descrição</td>
					<td>Status</td>
					<td>Valor</td>
				</tr>
			</thead>
			<tbody>
				<Transactions
					:openModal="openModal"
					:transactions="transactions"
				/>
			</tbody>
		</table>

		<modal-transaction :modal="this.modal" />
	</div>
</template>
<script>
import { getAllTransactions } from "@/services/transactions";

import ModalTransaction from "./Modal.vue";
import Transactions from "@/components/Transactions.vue";

export default {
	name: 'TableTransactions',
	components: {
		ModalTransaction,
		Transactions
	},
	mounted() {
		this.getTransactions()
	},
	data() {
		return {
			filter: {},
			data: {},
			modal: {}
		}
	},
	methods: {
		async getTransactions() {
			try {
				// TODO: obter response da api a partir do filtro
				const response = await getAllTransactions();
				// this.data = response.data;
				this.$set(this.data, response.data);
			} catch (error) {
				// TODO: exibir modal de erro aqui
			} finally {
				// TODO: encerrar loading
			}
		},
		openModal(transaction) {
			// TODO: open modal
		}
	}
}
</script>