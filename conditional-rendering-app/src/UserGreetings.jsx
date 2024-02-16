function UserGreetings(props){    
    // if(props.isLoggedIn){
    //     return(
    //     <div>
    //         <h1>Welcome {props.username}</h1>
    //     </div>
    //     );
    // }else{
    //     return(
    //         <div>
    //             <h1>Please Logg In to continue</h1>
    //         </div>
    //     );
    // }
    return(props.isLoggedIn ? <h1>Welcome {props.username}</h1>:<h1>Please Logg In to continue</h1>)
}

export default UserGreetings