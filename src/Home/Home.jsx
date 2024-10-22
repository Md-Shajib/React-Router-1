import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className="flex flex-col ">
            <Nav></Nav>
            {
                navigation.state === "loading" ? <h1>Loading....</h1> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;