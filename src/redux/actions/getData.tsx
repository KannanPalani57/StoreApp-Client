export function getProductListBy(category:any) {
    //   console.log("These are items from useEffect: ", dataArray);
    return (dispatch:any) => {
      console.log('inside action',category); 
      if (category) {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
          .then((res) => res.json())
          .then((json) =>dispatch({ type: "DISPLAYCATEGORYPRODUCTS", data: json }));
          
      } else throw new Error("Error ! Product not found ");
      // dispatch({ type: "CATEGORYCHANGE", data: dataArray });
    };
  }
  