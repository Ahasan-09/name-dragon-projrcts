import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className=" flex p-4">
           <button className="btn btn-secondary">Secondary</button>
           <Marquee pauseOnHover={true} >
  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
    );
};

export default BreakingNews;