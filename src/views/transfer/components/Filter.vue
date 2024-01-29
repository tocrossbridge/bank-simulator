<template>
	<form class="row my-5">
		<div class="col-12 col-md-2 form-group mb-3">
			<label>Tipo da transferência:</label>
			<input
				type="text"
				class="form-control"
				placeholder="Digite"
				v-model="filterBy.type"
			/>
		</div>

		<div class="col-12 col-md-2 form-group mb-3">
			<label>Descrição da transferência</label>
			<input
				type="text"
				class="form-control"
				placeholder="Digite"
				v-model="filterBy.description"
			/>
		</div>

		<div class="col-12 col-md-2 form-group mb-3">
			<label>Status da tranferência:</label>
			<select
				class="form-control"
				v-model="filterBy.status"
			>
				<option
					v-for="status in filters.status"
					:key="status"
					:value="status.name"
				>
					{{ status.name }}
				</option>
			</select>
		</div>

		<div class="col-12 col-md-2 form-group d-flex mb-3">
			<button
				type="button"
				class="btn btn-primary mt-auto"
				@click="emitFilter"
			>
				Filtrar
			</button>
		</div>
	</form>
</template>

<script>
export default {
	name: 'FilterTransfers',
	data() {
		return {
			alert: false,
			filters: {
				type: "",
				description: "",
				status: [
					{ name: "Criada", value: "created" },
					{ name: "Em andamento", value: "processing" },
					{ name: "Processada", value: "processed" },
					{ name: "Cancelada", value: "canceled" },
				],
			},
			filterBy: {
				type: "",
				description: "",
				status: "",
			},
		};
	},
	methods: {
		emitFilter() {
			// TODO: refatorar
			if (this.filterBy.type != "" && this.filterBy.status != "") {
				this.alert = false;
				this.$emit("emitFilter", this.filterBy);
			} else {
				this.alert = true;
			}
		},
	},
};
</script>