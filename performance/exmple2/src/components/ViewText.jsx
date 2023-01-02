import React from 'react';

 
const ViewText = ({ text  , addAge}) => {
console.log('view text component');

const apiConnect = () => {
for (let i = 0; i <= 500_000_000; i++) {}
console.log('view text component');
};
apiConnect();


return (
<div className='box'>
<button onClick={addAge}>addAge</button>
<p>the included text:</p>
<p>{text.name}</p>
</div>
);
};
export default React.memo(ViewText);