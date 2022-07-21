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
          <img class="loading__img" src="../assets/images/loading.png" alt="">
          Carregando dados...
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
            <Transactions v-on:openModal="showTransactionModal($event)" :transactions="transactionsFiltered" />
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
            loading: true,
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
    async mounted() {
      this.fetchTransactions()
    },
    methods: {
      async fetchTransactions(){

        try{
          getAllTransactions()
            .then(response => {

              // yeah yeah, the down below itsn't really necessary but I want you to see the loading :)
              setTimeout(() => {
                this.filterTransactionsByDate(response.data)
                this.loading = false
              }, 1500);
              // enjoy :)

            })
        }catch(e){
          this.errored = true;
          console.log(error);
        }
      },
      updateFilter(newFilter){
        this.filterBy = newFilter

        let tempList = []

        this.transactions.forEach(element => {

          // I have doubts about business rules here, so I chose the path that only works with 2 are select,
          // but u know that if you change && to || it will work in the other possibility
          if(element.title.toLowerCase() == this.filterBy.title.toLowerCase() && element.status == this.filterBy.status.toLowerCase()){
            tempList.push(element)
          }

        });

        this.transactionsFiltered = tempList
      },
      showTransactionModal(transactionId){
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
      filterTransactionsByDate(responseData){
        let oldDate
        let tempList = []

        responseData.forEach(element => {
          let currentDate = new Date(element.date)
          
          if(currentDate >= oldDate){
            tempList.push(element)
          }

          oldDate = currentDate
        });

        this.transactions = tempList
        this.transactionsFiltered = tempList
      }
    }
}
</script>

<style>
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