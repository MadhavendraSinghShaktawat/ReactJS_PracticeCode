function Button(){
    let count = 0;
    const handleClick = ()=> console.log("OUCH!")
    const handleClick2 = (name) => console.log(`${name} stop clicking me`) 
    const handleClick3 = (name)=>{
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`) 
        }else{
            count++;
            console.log(`${name} stop clicking me`)
        }
    }

    const handleClick4 = (e) => console.log(e);              // here e = 'event'
    const handleClick5 = (e) => e.target.textContent = "Hii there";   // it will change content of an button
    const handleClick6 = (e1) => e1.target.textContent = "Don't Click me";   // it will change content of an button

    return(<div>
        <button  onClick={(e)=>handleClick5(e) }>Click me</button>
        <button  onDoubleClick={(e1)=>handleClick6(e1)}>Click me</button>        
    </div>)
    
}

export default Button