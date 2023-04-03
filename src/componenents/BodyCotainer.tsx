import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";



const BodyContainer=()=>{
    return(
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
export default BodyContainer;
