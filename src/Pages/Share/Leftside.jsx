import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Leftside = () => {

    const [categories,setcategories] =useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=> setcategories(data))
    },[])

    // console.log(categories)

    return (
        <div>
            <h2 className=" m-3 text-center font-semibold text-2xl"> Allcategories :{categories.length}</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className=" block font-medium  p-2 ml-10  space-y-4 " key={category.id}>{category.name} </Link>)
            }
        </div>
    );
};

export default Leftside;