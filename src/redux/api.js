import {isEmpty} from 'lodash';
const baseURL = 'http://localhost:4000';
export const getUser = '/user';
export const getAccounts = ({page, range, orderon, orderby, searchTerm}) => {
    let url =  `${baseURL}/accounts?page=${page}&range=${range}`;
    if(orderon && !isEmpty(orderon)){
        url = `${url}&orderon=${orderon}`
    }
    if(orderby && !isEmpty(orderby)){
        url = `${url}&orderby=${orderby}`
    }
    if(searchTerm && !isEmpty(searchTerm)){
        url = `${url}&search=${searchTerm}`
    }
    return url;
}
export const getInvoices = ({page, range, orderon, orderby, searchTerm}) => {
    let url =  `${baseURL}/invoices?page=${page}&range=${range}`;
    if(orderon && !isEmpty(orderon)){
        url = `${url}&orderon=${orderon}`
    }
    if(orderby && !isEmpty(orderby)){
        url = `${url}&orderby=${orderby}`
    }
    if(searchTerm && !isEmpty(searchTerm)){
        url = `${url}&search=${searchTerm}`
    }
    return url;
}
// export const getAccounts = `${baseURL}/accounts?page=1&range=10`;
// export const loadMoreAccounts = (page, range) => `${baseURL}/accounts?page=${page}&range=${range}`;
// export const sortAccounts = (page, range, orderon, orderby) => `${baseURL}/accounts?page=${page}&range=${range}&orderon=${orderon}&orderby=${orderby}`;
// export const getInvoice = `${baseURL}/invoices?page=1&range=10`;
// export const loadMoreInvoice = (page, range) => `${baseURL}/invoices?page=${page}&range=${range}`;
// export const sortInvoice = (page, range, orderon, orderby) => `${baseURL}/invoices?page=${page}&range=${range}&orderon=${orderon}&orderby=${orderby}`;

export const accountDetails = id =>`${baseURL}/accountDetails?id=${id}`;
