<template>
  <div class="search__box">
    <input
      type="text"
      placeholder="Pesquise por título"
      name="title"
      v-model="filterBy.title"
      @blur="changeFilter"
    />

    <select name="status" @change="changeFilter" v-model="filterBy.status">
      <option
        v-for="status in filters.status"
        :key="status"
        :value="status.name"
      >
        {{ status.name }}
      </option>
    </select>

    <p class="alert__text" v-if="alert">
      Digite título e filtre por status para visualizar os resultados
    </p>
  </div>
</template>

<script>
export default {
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
    changeFilter() {
      if (this.filterBy.title != "" && this.filterBy.status != "") {
        this.alert = false;
        this.$emit("changeFilter", this.filterBy);
      } else {
        this.alert = true;
      }
    },
  },
};
</script>
<style scoped>
.search__box {
  margin: 2em auto;
}
.search__box > * {
  margin: 0 1em 0 0;
}
.search__box > *:last-child {
  margin: 0;
}
.alert__text {
  color: var(--clr-pink);
}
</style>