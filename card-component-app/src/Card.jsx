import profilePic from "./assets/1.jpg"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile picture" />
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make youtube video and play games.</p>
        </div>
    );
}

export default Card