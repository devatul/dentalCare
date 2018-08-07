export const getUser = '/user';
export const getAccounts = '/accounts';
export const loadMoreAccounts = (page, range) => `/accounts?page=${page}&range=${range}`;
export const sortAccounts = (orderon, orderby) => `/accounts?orderon=${orderon}&orderby=${orderby}`;
export const invoice = '/invoice';
export const loadMoreInvoice = (page, range) => `/invoice?page=${page}&range=${range}`;
export const sortInvoice = (orderon, orderby) => `/invoice?orderon=${orderon}&orderby=${orderby}`;


