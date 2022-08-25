import React from "react";


function UserItem(props) {

    return ( 
        <li className = "list-group-item">
            <img src={props.img} alt="{props.media} " width={44}/>
                <div className="list">  
                    <input className = "form-check-input" id="{props.media}"
                            type = "checkbox" />
                    <label className = "form-check-label" htmlFor="{props.media}">{props.media} </label>
            </div>
        </li>

    );
}
export default UserItem; 