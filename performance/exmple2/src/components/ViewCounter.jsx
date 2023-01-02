import React from 'react';
//re run /re evaluation


const ViewCounter = ({ num, increaseCount }) => {
console.log('view counter component');
//print



return (
<div className='box'>
<p>{num}</p> 
<button onClick={increaseCount}>Increase</button>

</div>
);
};
export default ViewCounter;