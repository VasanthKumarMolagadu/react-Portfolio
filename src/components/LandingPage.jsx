import Navbar from "./Navbar"
import '../styles/LandingPage.css'
import AboutMe from "./AboutMe"
import Details from "./Details"
import Footer from "./Footer"
export default function HomePage(){
    return(
        <div className="HomePage">
            <Navbar/>
            <div className="imgNAbst">
                <div className="imag">
                    <img src="/IMG_3471.jpg" alt="pic" />
                </div>
                <div className="abst">
                    <h1>Java FullStack Developer</h1>
                    <h3>Career Objective:</h3>
                    <p>To be associated with a dynamic and progressive organization that will allow me to utilize my abilities and skills in the field to add value to the organization while providing me with opportunities for growth.</p>
                    <p id="sign">-M. Vasanth Kumar</p>
                </div>
            </div>
            <AboutMe/>
            <Details/>
            <Footer/>
        </div>
    )
}