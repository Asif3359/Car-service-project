import About from "../About/About";
import Baner from "../Baner/Baner";
import ContactInfo from "../ContactInfo/ContactInfo";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../TEam/Team";


const Home = () => {
    return (
        <div className="space-y-10">
            <Baner></Baner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <Products></Products>
            <Team></Team>
            
        </div>
    );
};

export default Home;