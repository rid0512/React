import {useEffect} from 'react'; 
function ListProducts(){ 
 
//useEffect takes a callback as an argument and list of dependencies 
//useEffect => invoked only once on when mounted, pass an array of empty dependencies 
 
//useEffect(() => {callback}, [dependencies]) 
 
useEffect(() => {console.log("useEffect on mount"}, []); //will be called only once during the lifecycle of the component. Make API Call from React application. 
//generate jsx 
return( 
    <div>
    <h4>List Products</h4>
    </div> 

) 

} 
export default ListProducts;