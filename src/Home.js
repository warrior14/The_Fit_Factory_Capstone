import React from "react";
import "./Home.css" 



export const Home = () => (
    <div className="home__div">
        <div className="home_div">
            <h1 className="header">Welcome To The Fit Factory!</h1>
            <h3 className="slogan">Where You Can Witness The Fitness!</h3>
        </div>
        <div>
            <h3 className="intro">Hello! My name is Luke Madrazo and here are some quick tips for you! Macros is short for macronutrients, of which there are three: protein, carbohydrates and fats. 
                <br/>All foods are divided up into a combination of these 3 macros and that's how the calorie content is made up of. Protein and carbs are four calories per gram, and fat is nine calories per gram. 
                <br/>It's all about calories in versus calories out. With a combination of weight training and nutrition, you need to be burning more calories than what you are consuming! On the contrary, if your goal is to get bigger then you would need to
                 eat in a caloric surplus!
                Additionally, I suggest lifting heavy weights with less repititions and more cool down time. If you want to tone, then lift light weights and do less cool down time with lots of repetitions.
                <br/>So now, let's take the first step towards your fitness journey!</h3>





        </div>
        <div className="testi">
            <section className="testimonials">
                <h1 className="testimonialHeader">Reviews!</h1>
                <h2 className="testimonialParagraph"><strong>Testimonials from my previous clients!</strong></h2>

                <div className="row">
                    <div className="testimonial-col">
                        {/* <img src="images/luke.jpg" /> */}
                        <div>
                            <p>Luke was very tough but got me the results that I wanted!</p>
                            <h3>Angie V.</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="testimonial-col">
                        {/* <img src="images/gabe.jpg"/> */}
                        <div>
                            <p>I was never into fitness but now I enjoy it!</p>
                            <h3>Ramon M.</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                    </div>
                    <div className="testimonial-col">
                        {/* <img src="images/sis.jpg"/> */}
                        <div>
                            <p>I'm good with books ... weights? Not so much!</p>
                            <h3>Yesenia T.</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="clients" src="./images/afk4.JPG" alt=""/>
                    <img className="clients" src="./images/afk2.jpg" alt=""/>
                    <img className="clients" src="./images/afk5.jpg" alt=""/>
                    <img className="clients" src="./images/afk3.jpg" alt=""/>
                    <img className="clients" src="./images/afk7 (1).jpg" alt=""/>
                    <img  className="clients"src="./images/afk8.jpg" alt=""/>
                    <img  className="clients"src="./images/afk9.JPG" alt=""/>
                    <img className="clients" src="./images/afk.jpg" alt=""/>

                </div>

        </section>
    </div>

    </div>
)