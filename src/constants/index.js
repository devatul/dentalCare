
export const menuData = [
    {label:'Dashboard', link:'/dashboard', icon:'fa-plus-square'},
    {label:'Invoice', link:'/invoice', icon:'fa-file'},
    {label:'Accounts', link:'/accounts', icon:'fa-user-friends'},
    {label:'Reports', link:'/reports', icon:'fa-chart-pie'},
    {label:'Settings', link:'/settings', icon:'fa-cog'},
]

export const menuBottomData = [
    {label:'Help', icon:'fa-question-circle'}
]

export const accounts = {
    title: 'Accounts',
    searchFields:[],
    headers:['Name', 'Date', 'Status'],
    rows : [
        {
            name:'ABC',
            image:'',
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            name:'ABC',
            image:'',
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            name:'ABC',
            image:'',
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
        {
            name:'ABC',
            image:'',
            date:{d:'9 Mar 2018',t:'3:00PM - 9:00AM'},
            status: 'Approved'
        },
    ]
}
export const dashboard = {
    title: 'Dashboard'
}
export const invoice = {
    title: 'Invoice',
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
    userName:'sam '
}
