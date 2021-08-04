import React from "react";
import "./Home.css" 



export const Home = () => (
    <>
        <div className="home_div">
            <h1 className="header">Welcome To The Fit Factory!</h1>
            <h3 className="slogan">Where You Can Witness The Fitness!</h3>
        </div>
        <div>
            <h3 className="intro">Hello, welcome to my page! My name is Luke Madrazo! Here are some quick knowledge for you! Macros is short for macronutrients, of which there are three: protein, carbohydrates and fats. All foods are divided up into a combination of these 3 macros, and that's how the calorie content is made up. Protein and carbs are four calories per gram, and fat is nine calories per gram. It's all about calories in versus calories out. With a combination of weight training and nutrition, you need to be burning more calories than what you are consuming! So now let's get started on your transformation journey and hop on the Gain-Train!</h3>
        </div>
        <section class="testimonials">
            <h1>What My Say!</h1>
            <p>Raw and honest testimonials that prove that our Gaming University works!</p>

            <div class="row">
                <div class="testimonial-col">
                    {/* <img src="images/luke.jpg" /> */}
                    <div>
                        <p>Luke was very tough but got me the results that I wanted!</p>
                        <h3>Angie V.</h3>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="testimonial-col">
                {/* <img src="images/gabe.jpg"/> */}
                <div>
                    <p>I was never into fitness but now I enjoy it!</p>
                    <h3>Ramon M.</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                </div>
            </div>
            <div class="testimonial-col">
                {/* <img src="images/sis.jpg"/> */}
                <div>
                    <p>I'm good with books ... weights? Not so much!</p>
                    <h3>Yesenia T.</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
            </div>

    </section>

    </>
)