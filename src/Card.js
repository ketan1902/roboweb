import React from 'react';

const Card= (props) => {
	const {email,username,name,id} = props;

	return(
	<div className ='bg-light-blue dib pa3 ma2 grow bw2 shadow-5'>
		<img alt ='robot' src = {`https://robohash.org/${id}?200x200`}/>

	  
		<div className= 'tc'>
		    <h2> {name} </h2>
		    <p>{username}</p>
		    <p> {email}</p>


    </div>

	    </div>

	  		)
}

export default Card;