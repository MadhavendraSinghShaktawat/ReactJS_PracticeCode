import PropTypes from 'prop-types'

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
    const WelcomeMSG = <h1 className="welcome-message">Welcome {props.username}</h1>
    const LoginMSG = <h1 className="login-prompt">Please Logg In to continue</h1>
    return(props.isLoggedIn ? WelcomeMSG : LoginMSG)
}
UserGreetings.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreetings