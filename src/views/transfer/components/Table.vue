<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Data</th>
					<th scope="col">Tipo</th>
					<th scope="col">Descrição</th>
					<th scope="col">Status</th>
					<th scope="col">Valor</th>
				</tr>
			</thead>
			<tbody>
				<tr
					@click="openModal(transfer.id)"
					v-for="(transfer, index) in data"
					:key="index"
				>
					<td data-label="Data">{{ transfer.date }}</td>
					<td data-label="Tipo">{{ transfer.type }}</td>
					<td data-label="Descrição">{{ transfer.description }}</td>
					<td data-label="Status">
						<div :class="`table__tag table__tag--` + transfer.status">
							{{ transfer.status }}
						</div>
					</td>
					<td data-label="Valor">{{ transfer.amount }}</td>
				</tr>
			</tbody>
		</table>

		<modal-transfer
			:openStatus="modal.openStatus"
			:transferId="modal.transferId"
			@close="closeModal"
		/>
	</div>
</template>
<script>
import { getAllTransfers } from "@/common/services/transfers";

import ModalTransfer from "./Modal.vue";

export default {
	name: 'TableTransfers',
	components: {
		ModalTransfer,
	},
	mounted() {
		this.getTransfers()
	},
	data() {
		return {
			filter: {},
			data: {},
			modal: {
				transactionId: '',
				openStatus: false
			}
		}
	},
	methods: {
		async getTransfers() {
			try {
				// TODO: obter response da api a partir do filtro
				const response = await getAllTransfers();
				this.data = response.data;
			} catch (error) {
				// TODO: exibir modal de erro aqui
			} finally {
				// TODO: encerrar loading
			}
		},
		openModal(transferId) {
			this.modal.transferId = transferId;
			this.modal.openStatus = true;
		},
		closeModal() {
			this.modal.transferId = '';
			this.modal.openStatus = false
		}
	}
}
</script>