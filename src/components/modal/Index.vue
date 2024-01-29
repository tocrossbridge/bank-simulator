<template>
	<div
		:id="id"
		class="modal fade"
		data-bs-backdrop="static"
		data-bs-keyboard="false"
		tabindex="-1"
		aria-labelledby="staticBackdropLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{ title }}</h5>
					<button
						type="button"
						class="btn-close"
						aria-label="Close"
						@click="closeModal"
					></button>
				</div>

				<div class="modal-body">
					<slot></slot>
				</div>

				<div class="modal-footer">
					<slot name="modal-footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
	name: 'Modal',
	props: {
		id: { type: String, default: 'modal' },
		exibir: { type: Boolean, default: false },
		title: { type: String, default: '' },
		transactionId: { type: String, default: '' },
	},
	data() {
		return {
			modalInstance: null,
		};
	},
	watch: {
		exibir(valor) {
			valor ? this.showModal() : this.hideModal();
		},
	},
	mounted() {
		this.modalInstance = new Modal(document.getElementById(this.id));
	},
	methods: {
		showModal() {
			if (this.modalInstance) {
				this.modalInstance.show();
			}
		},
		hideModal() {
			if (this.modalInstance) {
				this.modalInstance.hide();
			}
		},
		closeModal() {
			this.$emit('close');
		},
	},
};
</script>