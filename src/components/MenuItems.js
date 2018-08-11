import React from 'react';

export default ({menuItems, onClick, activeRoute, page}) => {
    let menu = [];
    
    menuItems.map((m, i)=>{
        menu.push(<div key={i} className={`menu-item ${page === m.label ? 'active' : ''}`} onClick={()=>onClick(m.link)}>
        <div className="icon">
            <i className={`fas ${m.icon}`}></i>
        </div>
        <div className="label">{m.label}</div>
    </div>)
    })
    return menu;
}