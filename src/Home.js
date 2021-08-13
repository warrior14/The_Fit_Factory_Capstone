import React from "react";
import "./Home.css" 
import { JelloAnimation } from "../src/components/animations/AnimationHelper";
import {StyleRoot} from 'radium';


export const Home = () => (
    <StyleRoot>
            <div className="home__div" style={JelloAnimation(2)}>
                <div className="home_div">
                    <h1 className="header">Welcome To The Fit Factory!</h1>
                    <h3 className="slogan">Where You Can Witness The Fitness!</h3>
                </div>
                <div>
                    <h3 className="intro">Hello! My name is Luke Madrazo and here are some quick tips for you! Macros is short for macronutrients, of which there are three: protein, carbs and fats. 
                        <br/>All foods are divided up into a combination of these 3 macros and that's how the calorie content is made up of. Protein and carbs are four calories per gram, and fat is nine calories per gram. 
                        <br/>It's all about calories in versus calories out. With a combination of nutrition, cardio and weight training, you need to be burning more calories than what you are consuming to lose weight! Lifting light weights with lots of repetitions and less cool down time will get you more toned. On the contrary, if your goal is to get bigger then you would need to
                        eat in a caloric surplus!
                        Additionally, I suggest lifting heavy weights with less repititions and more cool down time.
                        <br/>Don't be afraid to take the first step towards your fitness journey!</h3>





                </div>
                <div className="testi">
                    <section className="testimonials">
                        <h1 className="testimonialHeader">Reviews!</h1>
                        <h2 className="testimonialParagraph"><strong>Testimonials from clients!</strong></h2>

                        <div className="row">
                            <div className="testimonial-col">
                                {/* <img src="images/luke.jpg" /> */}
                                <div>
                                    <p>Luke is a fun and crazy trainer that got me amazing results!</p>
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
                                <p>I'm good with books ... weights? Not so much!</p>
                                <h3>Yesenia T.</h3>
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
                                    <p>I was never into fitness but now, fitness is my business!</p>
                                    <h3>Ramon M.</h3>
                                    
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                            </div>
                        </div>
                        <div className="theClients">
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
    </StyleRoot>
)