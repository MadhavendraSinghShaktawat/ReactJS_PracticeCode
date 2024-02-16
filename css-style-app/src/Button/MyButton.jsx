//  There are three types of styling in React CSS
//  1.) External 
//  1.) Modules 
//  1.) Inline 


import styles from './MyButton.module.css'
function MyButton(){
    return(
        <button  className={styles.button}>Click Me</button>
    );
}

export default MyButton