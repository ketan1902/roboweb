import React from 'react';


const Searchbox =({searchfield,searchChange}) => {
	return(
		<div className = 'pa3'>
			<input 
			className= 'pa2 bg-lightest-green ba'
			type='search' 
			placeholder = 'search robots'
			onChange = { searchChange }
			/>
		
		</div>
 )
}
export default Searchbox;