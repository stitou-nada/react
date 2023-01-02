import { useState , useMemo, useCallback} from 'react';
import React from 'react';
import ViewCounter from './components/ViewCounter';
import ViewText from './components/ViewText';
function App() {
const [count, setCount] = useState(0);
const name= useMemo (()=>{
    
    return{name:"karem"};
},[]) ;



const counterHandler = () => {
    setCount((prev) => prev + 1);
};
const ageHandler = useCallback(()=>
{console.log("age");
},[]); 


return (
<div className='App'>
<ViewCounter num={count} increaseCount={counterHandler} />
<ViewText  text={name} addAge={ageHandler} />
</div>
);
}
export default App;