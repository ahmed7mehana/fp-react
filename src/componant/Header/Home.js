import React from "react";
import Header from "./Header";
import Data from "./../../Data";
import './home.css'
import pridimg from'../../img/prid.png'
import ingerimg from'../../img/imgimg .png'
import Carousel from 'react-bootstrap/Carousel';
import p1 from'./../../img/p1.jpg'
import p2 from'./../../img/p2.jpg'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Home =()=>{

const blogitem=Data.map((item)=>{
return(
    <div className="col-md-4">
        <div className="box">
        <img src={item.img} alt="oops"/>
        <h2>{item.title}</h2>
        <span>time: {item.time}</span>
        <h6>{item.price}</h6>
        </div>
        <button>learn more</button>
    </div>
)})

return(

<>
<Header/>
    <div className="numbers">
        <div className="container">
        <div className="row">

        <div className="col-md-3">
        <h2>1287+</h2>
        <h6>SAVINGS</h6>
        </div>

        <div className="col-md-3">
        <h2>5786+</h2>
        <h6>PHOTOS</h6>
        </div>

        <div className="col-md-3">
        <h2>1440+</h2>
        <h6>ROCKETS</h6>
        </div>

        <div className="col-md-3">
        <h2>7110+</h2>
        <h6>GLOBES</h6>
        </div>
    </div>
    </div>
</div>

<section id="About" className="pride">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={pridimg} title="oops"/>
            </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odiofinibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
<button>learn more</button>
                    </div>
        </div>
    </div>
</section>

<section className="ingredients">
    <div className="container">
        <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul>
                        <li>Etiam sed dolor ac diam volutpat.</li>
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <li>purus a odio finibus bibendum.</li>
                    </ul>
                       <button>learn more</button>
                    </div>
                    <div className="col-md-6"><img src={ingerimg} title="oops"/></div>
        </div>
    </div>
</section>

<section className="paralex">
    <div className="container">
        <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>When a man's stomach is full it makes nodifference whether he is rich or poor.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
<a href="https://www.youtube.com/watch?v=bZx8rPd-PKQ" >Watch our story</a>
                    </div>
        </div>
    </div>
</section>

<section id="Explore" className="blogs">
    <div className="container">
        <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Explore Our Foods</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
</p>
</div>
</div>

<div className="row">
{blogitem}
</div>

</div>
</section>

<section id="Rev" className="slider">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <h2>Testimonials</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12">
        <Carousel>
            <Carousel.Item>
            <img  src={p1} alt="img" />
            <Carousel.Caption>
                <h3>Simab Dave - Web Designer</h3>
                <p>"Far far away, behind the word mountains, far from the countries Vokalia 
                    and Consonantia, there live the blind texts. Separated they live."</p>
                     </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
            <img  src={p2} alt="img" />
            <Carousel.Caption>
                <h3>Johnthan Doe - UX Designer</h3>
                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            </div>
        </div>
    </div>
</section>

<section id="FAQ" className="FAQ">
<div className="container">
<div className="row">
<div className="col-lg-12 col-md-12">
<h2>Frequently Asked Questions</h2>
</div>
</div>
<div className="row">
<div className="col-md-6">
<h4>~ Is Foodera Bread really baked fresh each day?</h4>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
</p>

<h4>~ Can I order your products online?</h4>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
</div>
<div className="col-md-6">
<h4>~ Do you bake breads containing animal fats or products?</h4>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>

<h4>~ When are you opening a shop near me?</h4>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
</div>
</div>
</div>
</section>

<section className="passion">
    <div className="container">
<div className="row"><div className="col-md-8"><h2>Baked fresh daily by bakers with passion.</h2> </div>
<div className="col-md-4"><button>learn more</button></div></div>
    </div>
</section>


<div className="subscribe">
    <div className="container">
    <div className="row">
<div className="col-lg-12 col-md-12">
<h2>Hurry up! Subscribe our newsletter
and get 25% Off</h2>
<p>Limited time offer for this month. No credit card required.</p>
<Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Email address here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">subscribe</Button>
          </Form>
</div>
</div>
 </div>
</div>
</>
)}


export default Home ;
