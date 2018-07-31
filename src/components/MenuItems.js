import React from 'react';

export default ({menuItems}) => {
    let menu = [];
    menuItems.map((m, i)=>{
        menu.push(<div key={i} className="menu-item">
        <div className="icon">
            <i className={`fas ${m.icon}`}></i>
        </div>
        <div className="label">{m.label}</div>
    </div>)
    })
    return menu;
}