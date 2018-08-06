
export const menuData = [
    {label:'Dashboard', link:'/dashboard', icon:'fa-plus-square'},
    {label:'Invoices', link:'/invoice', icon:'fa-file'},
    {label:'Accounts', link:'/accounts', icon:'fa-user-friends'},
    {label:'Reports', link:'/reports', icon:'fa-chart-pie'},
    {label:'Settings', link:'/settings', icon:'fa-cog'},
]

export const menuBottomData = [
    {label:'Help', icon:'fa-question-circle', link:'/help'}
]

export const accounts = {
    rows : [
        {
            id:1,
            name:'ABC-1',
            image:'',
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            id:2,
            name:'ABC-2',
            image:'',
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            id:3,
            name:'ABC-3',
            image:'',
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            id:4,
            name:'ABC-4',
            image:'',
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
    ]
}
export const accountsDetalsData = {
    userName:'Bertie Nichols' 
}
export const dashboard = {
    title: 'Dashboard',
    headers:["Full Name", 'Amount', 'Date of Generation'],
    rows : []
}
export const invoice = {
    title: 'Invoices',
    headers:["", 'Patient', 'Issued Date', 'Status', 'Due Now', ""],
    rows : [
        {
            invoiceNo:'',
            name:'ABC',
            image:'',
            dueDate:{d:'9 Jul 2018',t:'3:00PM - 9:00AM'},
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            invoiceNo:'',
            name:'ABC',
            image:'',
            dueDate:{d:'9 Jul 2018',t:'3:00PM - 9:00AM'},
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            invoiceNo:'',
            name:'ABC',
            image:'',
            dueDate:{d:'9 Jul 2018',t:'3:00PM - 9:00AM'},
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            invoiceNo:'',
            name:'ABC',
            image:'',
            dueDate:{d:'9 Jul 2018',t:'3:00PM - 9:00AM'},
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
    ]
}
export const reports = {
    title: 'Reports'
}
export const settings = {
    title: 'Settings'
}
export const userData = {
    title: 'User Account',
    userName:'sam '
}
