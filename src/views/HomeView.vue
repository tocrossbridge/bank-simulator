<template>
  <main>

    <div class="search__box">
      <input type="text" placeholder="Pesquise por título">
      <select name="" id="">
        <option value="">Status</option>
      </select>
    </div>

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
            <Transactions :transactions="transactions" />
          </tbody>
        </table>
      </div>
    </div>

    <Modal :modal="this.modal" />
  </main>
</template>

<script>
import Transactions from '../components/Transactions.vue';
import Modal from '../components/Modal.vue';
import { getAllTransactions, getTransaction } from '../services/transactions';

export default {
    components: { Modal, Transactions },
    data() {
        return {
            errored: false,
            transactions: [],
            modal: {
              open: false,
              data: []
            }
        };
    },
    mounted() {
      this.fetchTransactions()
    },
    methods: {
      fetchTransactions(){
        getAllTransactions()
          .then(response => {
            this.transactions = response.data
          })
          .catch(error => {
            this.errored = true;
            console.log(error);
          })
          .finally(() => this.loading = false);
        },
      openModal(transactionId){
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