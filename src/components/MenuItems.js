import React from 'react';

export default ({menuItems, onClick}) => {
    let menu = [];
    menuItems.map((m, i)=>{
        menu.push(<div key={i} className="menu-item" onClick={()=>onClick(m.link)}>
        <div className="icon">
            <i className={`fas ${m.icon}`}></i>
        </div>
        <div className="label">{m.label}</div>
    </div>)
    })
    return menu;
}