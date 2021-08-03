const initialState = {
    data:[]
 
 }
 
  const Reducer_showData=(state=initialState,action:any)=>{
      console.log('in reducer')
     switch(action.type){
         case 'DISPLAYCATEGORYPRODUCTS':
             return {...state,data:[action.data]}
         default: return state
 
     }
 
 }
 
  export default Reducer_showData 