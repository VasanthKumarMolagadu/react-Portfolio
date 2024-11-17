import '../styles/Details.css'
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiHibernate } from "react-icons/si";

export default function Details(){
    return(
        <div className="Details">
            <div className="projects">
                <h2>Projects:</h2>
                <h3>Anti-Theft Protection of Vehicle Using IOT and GPS with Fingerprint Verification</h3>
                <ul>
                <li><p>Developed a Embedded system integrating IoT, GPS, and biometric authentication to enhance vehicle security.</p></li>
                <li><p>The Anti-Theft Protection of Vehicle Using IoT, GPS, and Fingerprint Verification is a security system that combines various technologies to protect vehicles from theft. The system involves integrating the Internet of Things (IoT), Global Positioning System (GPS), and biometric fingerprint verification to provide enhanced security features for vehicles. This solution ensures that only authorized individuals can start the vehicle, while providing real-time tracking in case of theft.</p></li>
                </ul>
                
                <h3>BuyNow - E-Commerce Website (React.js-based)</h3>
                <ul>
                    <li><p>Created a fully functional e-commerce website, BuyNow, using React.js.</p></li>
                    <li><p>Integrated features like user/admin authentication, product catalog, shopping cart.</p></li>
                </ul>
            </div>
            <div className="skills">
                <h2>Skills:</h2>
                <ul>
                    <li><h3><u>Programming Language</u></h3></li>
                </ul>
                <div className="skillContainer">
                    <div className="programming">

                    <div className="java">
                    <FaJava size={100}/> <h4>Core Java</h4>
                    </div>

                    <div className="j2ee">
                    <FaJava size={100}/> <h4>J2EE(JDBC,Servlet)</h4>
                    </div>
                    </div>

                    <ul>
                        <li><h3><u>FrameWork</u></h3></li>
                    </ul>
                    <div className="framework">
                    <div className="hibernate">
                    <SiHibernate size={100}/> <h4>Hibernate</h4>
                    </div>
                    </div>

                    <ul>
                        <li><h3><u>Web Technologies</u></h3></li>
                    </ul>
                    <div className="webtech">
                    <div className="html">
                    <FaHtml5 size={100}/> <h4>HTML</h4>
                    </div>

                    <div className="css">
                    <FaCss3Alt size={100}/> <h4>CSS</h4>
                    </div>

                    <div className='js'>
                    <IoLogoJavascript size={100}/> <h4>Java-Script</h4>
                    </div>

                    <div className="react">
                    <FaReact size={100}/><h4>React Js</h4>
                    </div>
                    </div>
                    
                    <ul>
                        <li><h3><u>Database</u></h3></li>
                    </ul>
                    <div className="dbms">
                    <div className="sql">
                    <GrOracle size={100}/> <h3>Oracle SQL</h3>
                    </div>
                    </div>

                </div>
            </div>

            <div className="certificates">
                <h2>Certificates:</h2>
                <iframe src="/Ethical Hacking.pdf" frameborder="1"></iframe>
                <iframe src="Introduction To Internet Of Things.pdf" frameborder="1"></iframe>
                <iframe src="/Privacy And Security In Online Social Media.pdf" frameborder="1"></iframe>
            </div>
        </div>
    )
}