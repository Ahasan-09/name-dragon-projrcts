import { useParams } from "react-router-dom";
import Header from "./Share/Header";
import Rightside from "./Share/Rightside";
import Navber from "./Share/Navber";


const DetailsPage = () => {

    const {id} = useParams();
    return (
        <div>
           
            <Header></Header>
            <Navber></Navber>
            <div className=" grid md:grid-cols-4 gap-8 " >
                <div className="  md:col-span-3 border "> 
                <h2 className=" text-2xl font-bold  ">News Details</h2>
                <p> {id}</p>
                </div>


                <div className="border" > 
                <Rightside></Rightside>
                </div>


            </div>
            detailepage
        </div>
    );
};

export default DetailsPage;