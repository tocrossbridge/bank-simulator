import axios from "axios";

// Mock:
const getAll = {
  data: [
    {
      "id": "5f89f9f257fe42957bf6dbfd",
      "type": "Resgate",
      "description": "et labore proident aute nulla",
      "status": "created",
      "amount": 2078.66,
      "date": "2018-12-22",
      "from": "João Guilherme Souza",
      "to": "Usuario Logado"
    },
    {
      "id": "5f89f9f271e4213092bd4e41",
      "type": "Depósito",
      "description": "excepteur veniam proident irure pariatur",
      "status": "created",
      "amount": 148856.29,
      "date": "2017-07-23",
      "from": "Trade Jr.",
      "to": "Usuario Logado"
    },
    {
      "id": "5f89f9f2f318e70ff298f528",
      "type": "Movimentação interna",
      "description": "eu officia laborum labore aute",
      "status": "processed",
      "amount": 25092.8,
      "date": "2016-08-25",
      "from": "Usuario Logado",
      "to": "Usuario Logado"
    }
  ],
  error: 'uepaaa'
};

const getOne = {
  data: {
    "id": "5f89f9f23e427f64fc2ea101",
    "type": "Depósito",
    "description": "aute aliqua eu excepteur et",
    "status": "processing",
    "amount": 51668.85,
    "date": "2020-01-01",
    "from": "Férias",
    "to": "Conta Warren"
  },
  error: 'uepaaa'
};

export const getAllTransfers = () => {
  return getAll;
  // return axios.get(baseUrl + "/transfer");
};

export const getTransfer = (transferId) => {
  return getOne;
  // return axios.get(baseUrl + `/transfer/${transferId}`);
};
