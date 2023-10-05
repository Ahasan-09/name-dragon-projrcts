import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./Share/Header";
import Leftside from "./Share/Leftside";
import Navber from "./Share/Navber";
import Rightside from "./Share/Rightside";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
           
         <BreakingNews></BreakingNews>
         <Navber></Navber>
         
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <Leftside></Leftside>

                </div>
                <div className=" border md:col-span-2">
                   {
                    news.map(anews=> <NewsCard key={anews._id} news={anews} ></NewsCard>)
                   }

                </div>
                <div className="border">
                    <Rightside></Rightside>

                </div>
            </div>
        </div>
    );
};

export default Home;