<template>
	<Modal
		:title="`Transferência #${data?.id}`"
		:exibir="opened"
		:dados="data"
		@close="closeModal"
	>

		<!-- TODO: progress bar -->

		<div class="row">
			<div class="col-12 mb-4">
				<p><b>Transferido de:</b> {{ data?.from }}</p>
				<p>R$ 1.800</p>
			</div>

			<div class="col-12">
				<p><b>Para:</b> {{ data?.to }}</p>
				<p>R$ 1.800</p>
			</div>
		</div>

		<template v-slot:modal-footer>
			<button
				type="button"
				class="btn btn-danger"
				@click="closeModal"
			>
				Fechar
			</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '@/components/modal/Index.vue'

export default {
	name: 'ModalTransfer',
	props: {
		transferId: { type: String, default: '' },
		openStatus: { type: Boolean, default: false }
	},
	components: {
		Modal
	},
	data() {
		return {
			data: {}
		}
	},
	computed: {
		opened() {
			return this.openStatus;
		}
	},
	methods: {
		closeModal() {
			this.$emit('close')
		}
	}
};
</script>