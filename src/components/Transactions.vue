<template>
  <tr
    @click="openModal(transaction.id)"
    v-for="(transaction, index) in transactions"
    :key="index"
  >
    <td data-label="Título">{{ transaction.title }}</td>
    <td data-label="Descrição">{{ transaction.description }}</td>
    <td data-label="Status">
      <div :class="`table__tag table__tag--` + transaction.status">
        {{ transaction.status }}
      </div>
    </td>
    <td data-label="Valor">{{ transaction.amount }}</td>
  </tr>
</template>
<script>
export default {
  props: ["transactions"],
  methods: {
    openModal(transactionId) {
      this.$emit("openModal", transactionId);
    }
  }
};
</script>