import { useState} from 'react'

function GuestPage(){

    return (
        <div>
            <h1 >Welcome to Dumbways</h1>
            <p>Please Sign In</p>
        </div>
    )
}


function UserPage(){
    return (
        <div>
            <h1 >Welcome to Dumbways User</h1>
            
        </div>
    )
}

function ConditionalRendering(){
    const [login, setLogin] = useState(false);

    if(login){
        return (
            <>
                <UserPage />
                
                <button onClick={() => setLogin(false)}>Logout</button>
            </>
        )
    } else {
        return (
            <>
                <GuestPage />
                
                <button onClick={() => setLogin(true)}>Login</button>
            </>
        )
    }
}


export default ConditionalRendering