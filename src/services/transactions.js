import axios from "axios";

export const getAllTransactions = () => {
    return axios.get("https://warren-transactions-api.herokuapp.com/api/transactions")
};

export const getTransaction = (transactionId) => {
    return axios.get(`https://warren-transactions-api.herokuapp.com/api/transactions/${transactionId}`)
}