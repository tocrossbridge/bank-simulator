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
					/>
				</div>

				<div class="modal-body">
					<slot />
				</div>

				<div class="modal-footer">
					<slot name="modal-footer" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { Modal } from 'bootstrap'

var myModal = {};

export default {
	name: 'Modal',
	props: {
		id: { type: String, default: "modal" },
		exibir: { type: Boolean, default: false },
		title: { type: String, default: '' },
		transactionId: { type: String, default: '' }
	},
	mounted() {
		myModal = new Modal(document.getElementById(this.id));
	},
	watch: {
		exibir(valor) {
			valor ? myModal.show() : myModal.hide();
		}
	},
	methods: {
		closeModal() { this.$emit('close') }
	}
}
</script>