import axios from 'axios';

export interface ResponseItem {
  age: number;
  country: string;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  }
}

axios.defaults.baseURL =  'http://localhost:8099/users'

export const apiClient = {
  listKids: () => axios.get<{data: ResponseItem[]}>('/kids'),
  listAdults: () => axios.get<{data: ResponseItem[]}>('/adults'),
  listSeniors: () => axios.get<ResponseItem[]>('/seniors')
}