import axios from "axios";

const baseUrl = 'https://warren-transactions-api.herokuapp.com/api'

export const getAllTransactions = () => {
    return axios.get(baseUrl+"/transactions")
};

export const getTransaction = (transactionId) => {
    return axios.get(baseUrl+`/transactions/${transactionId}`)
}