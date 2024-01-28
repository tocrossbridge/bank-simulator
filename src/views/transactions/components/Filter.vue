<template>
	<div>
		<input
			type="text"
			placeholder="Pesquise por título"
			name="title"
			v-model="filterBy.title"
		/>

		<select
			name="status"
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

		<button
			type="button"
			@click="emitFilter"
		>
			Filtrar
		</button>

		<p v-if="alert">
			Digite título e filtre por status para visualizar os resultados
		</p>
	</div>
</template>

<script>
export default {
	name: 'FilterTransactions',
	props: ["filterBy"],
	data() {
		return {
			alert: false,
			filters: {
				title: "",
				status: [
					{ name: "Status" },
					{ name: "created" },
					{ name: "processing" },
					{ name: "processed" },
				],
			},
			filterBy: {
				title: "",
				status: "",
			},
		};
	},
	methods: {
		emitFilter() {
			// TODO: refatorar
			if (this.filterBy.title != "" && this.filterBy.status != "") {
				this.alert = false;
				this.$emit("emitFilter", this.filterBy);
			} else {
				this.alert = true;
			}
		},
	},
};
</script>