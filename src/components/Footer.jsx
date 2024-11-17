import '../styles/Footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer(){
    return(
        <div className="Footer">
            <div className="contact">
            <h3>Contact me on:</h3>
            <FaPhone /> <span>8639455281</span> <br />
            <IoMdMail style={{paddingTop:'4'}}/> <span>vasanthkumar1130@gmail.com</span>
            </div>
            
            <div className="social">
            <h3>Social:</h3>
            <ol>
                <li><a href="https://www.linkedin.com/in/vasanth-kumar-molagadu-3486a820a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><CiLinkedin size={30}/> </a></li>
                <li><a href="https://wa.me/8639455281?text"><FaWhatsapp size={30}/></a></li>
                <li><a href="https://ig.me/m/__v_a_s_a_n_th__"><FaInstagram size={30} /></a></li>
                <li><a href=" https://twitter.com/messages/compose?recipient_id=1066510993918844928"><FaXTwitter size={30}/></a></li>
            </ol>
            </div>
        </div>
    )
}