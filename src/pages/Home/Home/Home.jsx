import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Equipment from "../Equipment/Equipment";
import HosInfo from "../HosInfo/HosInfo";
import TechServices from "../TechServices/TechServices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Equipment></Equipment>
            <HosInfo></HosInfo>
            <TechServices></TechServices>
            <Appointment></Appointment>
            <Blog></Blog>
        </div>
    );
};

export default Home;