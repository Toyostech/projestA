import React from "react";
import liststyle from './Userlist.module.css'
import Card from "../UI/Card";

const Userlist = (props) => {
    return (
        <React.Fragment>
            <Card className={liststyle.users}>
                <h2>List Of Data</h2>
                <ul>
                    {props.users.map((user =>
                        <li key={user.id}>
                            {user.name}  {user.phoneline} {user.address} {user.mail} {user.date}
                            
                        </li>
                        
                    ))}
                </ul>
                

            </Card>

        </React.Fragment>
    )
}
export default Userlist;