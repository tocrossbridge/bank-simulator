<template>
    <tr @click="openModal(transaction.id)" v-for="(transaction, index) in transactions" :key="index">
        <td>{{ transaction.title }}</td>
        <td>{{ transaction.description }}</td>
        <td>
        <div :class="`table__tag table__tag--`+transaction.status">{{ transaction.status }}</div>
        </td>
        <td>{{ transaction.amount }}</td>
    </tr>
</template>
<script>
export default {
    props: [
        'transactions'
    ],
    methods: {
        openModal(transactionId){
            this.$emit('openModal', transactionId)
        }
    }
}
</script>