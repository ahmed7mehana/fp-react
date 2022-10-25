import React from "react";
import './footer.css'

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiFillDribbbleCircle } from "react-icons/ai";
// import { AiFillDribbbleCircle } from "react-icons/fi";




const Footer =()=>{
    return(
        <>
        <section className="footer">
    <div className="container">
        <div className="row">
<div className="col-lg-12 col-md-12">
<a href="##">register</a>
<a href="##">forum</a>
<a href="##">Afilliate</a>
<a href="##">FAQ</a>
            </div>
        </div>
<div className="icon">
<div className="row">
<div className="col-lg-12 col-md-12">
<a href="##"><BsFacebook/></a>
<a href="##"><BsInstagram/></a>
<a href="##"><CiYoutube/></a>
<a href="##"><FiLinkedin/></a>
<a href="##"><FiInstagram/></a>
<a href="##"><AiFillDribbbleCircle/></a>
</div>
</div>
</div>

<p>© 2021. Foodera. All rights reserved.</p>
    </div>
</section>
</>
    )
}

export default Footer;