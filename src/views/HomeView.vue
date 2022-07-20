<template>
  <main>

    <Filter v-on:changeFilter="updateFilter($event)" />

    <div>
      <div v-if="errored">
        <p>Oooops!</p>
        <p>Tivemos um erro do nosso lado, por favor tente mais tarde :)</p>
      </div>

      <div v-else>
        <div class="loading__box" v-if="loading">
          Carregando dados...
          <img class="loading__img" src="../assets/images/loading.png" alt="">
        </div>
        <table v-else>
          <thead>
            <tr>
              <td>Título</td>
              <td>Descrição</td>
              <td>Status</td>
              <td>Valor</td>
            </tr>
          </thead>
          <tbody>
            <Transactions :transactions="transactionsFiltered" />
          </tbody>
        </table>
      </div>
    </div>

    <Modal :modal="this.modal" />
  </main>
</template>

<script>
import Filter from '../components/Filter.vue';
import Transactions from '../components/Transactions.vue';
import Modal from '../components/Modal.vue';
import { getAllTransactions, getTransaction } from '../services/transactions';

export default {
    components: { Modal, Filter, Transactions },
    data() {
        return {
            errored: false,
            transactions: [],
            transactionsFiltered: [],
            modal: {
              open: false,
              data: []
            },
            filterBy: {}
        };
    },
    mounted() {
      this.fetchTransactions()
    },
    methods: {
      fetchTransactions(){
        getAllTransactions()
          .then(response => {
            this.transactionsFiltered = response.data
            this.transactions = response.data
          })
          .catch(error => {
            this.errored = true;
            console.log(error);
          })
          .finally(() => this.loading = false);
      },
      openModal(transactionId){
        console.log('modal')
        getTransaction(transactionId)
          .then(response => {
            this.modal.open = true
            this.modal.data = response.data
          })
          .catch(error => {
            this.errored = true;
            console.log(error);
          })
          .finally(() => this.loading = false);
      },
      updateFilter(newFilter){
        // console.log('filter father', newFilter)
        this.filterBy = newFilter

        let tempList = []

        this.transactions.forEach(element => {

          // I have doubts about business rules here, so I chose the path that only works with 2 are select,
          // but u know that if you change && to || it will work in the other possibility
          if(element.title == this.filterBy.title && element.status == this.filterBy.status){
            tempList.push(element)
          }

        });

        this.transactionsFiltered = tempList
      }
    }
}
</script>

<style>
.search__box{
  margin: 2em auto;
}

/* table */
table{
  width: 100%;
  border-collapse: collapse;
}
thead{
  background: var(--clr-pink);
}
thead > tr > td {
  color: var(--clr-white);
}
td{
  padding: 1em;
  text-align: left;
  border-bottom: 1px solid var(--clr-ligth-grey);
}
tr:nth-child(even) { background-color: #F5F6FA; }
tr:hover{
  color: var(--clr-pink);
}

.table__tag{
  width: fit-content;
  padding: 0 1em;

  text-align: center;
  color: var(--clr-white);

  border-radius: 1em;
  background-color: var(--clr-light-grey); /* default bg */
}
.table__tag--created{ background-color: var(--clr-light-grey); }
.table__tag--processing{ background-color: rgb(105, 88, 203); }
.table__tag--processed{ background-color: rgb(57, 142, 57); }
</style>