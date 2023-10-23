import About from "../About/About";
import Baner from "../Baner/Baner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="space-y-5">
            <Baner></Baner>
            <About></About>
            <Services></Services>
            
        </div>
    );
};

export default Home;