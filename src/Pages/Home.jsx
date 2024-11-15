import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import zapier from "../assets/zapier.png";
import spotify from "../assets/spotify.png";
import zoom from "../assets/zoom.png";
import amazon from "../assets/amazon.png";
import adobe from "../assets/adobe.png";
import notion from "../assets/notion.png";
import netflix from "../assets/netflix.png";
import Banner from "../assets/banner.png";
import Card from "../Components/CardReUse.jsx";
import Icon from '../assets/icon.png'
import CoursesReUse from "../Components/CourseReUse.jsx";
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Image5 from '../assets/image5.png'
import Image6 from '../assets/image6.png'


const Home = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="text-center px-32 py-16">
            <h1>Unlock Your Creative Potential</h1>
            <h3>with Online Design and Development Courses.</h3>
            <p>Learn from Industry Experts and Enhance Your Skills.</p>
            <div className="flex gap-6 pt-12 mx-auto w-1/4">
              <button className="bg-primary text-white font-semibold px-3 py-2 rounded-md">
                Explore Courses
              </button>
              <button className="font-semibold">View Pricing</button>
            </div>
          </div>
          <div className="flex items-center justify-around py-20">
            <img src={zapier} alt="" />
            <img src={spotify} alt="" />
            <img src={zoom} alt="" />
            <img src={amazon} alt="" />
            <img src={adobe} alt="" />
            <img src={notion} alt="" />
            <img src={netflix} alt="" />
          </div>
          <div className="banner-section">
            <img src={Banner} alt="" />
          </div>
          <div className="flex items-center justify-around py-20">
            <div>
            <h2 className="text-2xl font-semibold pb-2">Benefits</h2>
            <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
            </div>
            <div>
                <button className="font-semibold text-xs">View All</button>
            </div>
           
          </div>
          <div className="py-4 px-12 sm:grid md:grid-cols-2 lg:grid-cols-3">
          <Card head= "01" heading = "Flexible Learning Schedule" des = "Fit your coursework around your existing commitments and obligations." image ={Icon}/>
          <Card head= "02" heading = "Expert Instruction" des = "Learn from industry experts who have hands-on experience in design and development."  image ={Icon}/>
          <Card head= "03" heading = "Diverse Course Offerings" des = "Explore a wide range of design and development courses covering various topics."  image ={Icon}/>
          <Card head= "04" heading = "Updated Curriculum" des = "Access courses with up-to-date content reflecting the latest trends and industry practices." image ={Icon}/>
          <Card head= "05" heading = "Practical Projects and Assignments" des = "Develop a portfolio showcasing your skills and abilities to potential employers."  image ={Icon}/>
          <Card head= "06" heading = "Interactive Learning Environment" des = "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."  image ={Icon}/>
          </div>
          <div className="flex items-center justify-around py-10">
            <div>
            <h2 className="text-2xl font-semibold pb-2">Our Courses</h2>
            <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.
            </p>
            </div>
            <div>
                <button className="font-semibold text-xs">View All</button>
            </div>
           
          </div>
          <div className='sm:grid sm:grid-cols-2'>
          <CoursesReUse image = {Image1} time = "8 Weeks Intermediate By David Brown" heading = "Mobile App Development" des = "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin." btn = "Get it Now"/>
          <CoursesReUse image = {Image2} time = "6 Weeks Intermediate By Emily Johnson" heading = "UI/UX Design" des = "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."/>
          <CoursesReUse image = {Image3} time = "8 Weeks Intermediate By David Brown" heading = "Mobile App Development" des = "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."/>
          <CoursesReUse image = {Image4} time = "10 Weeks Beginner By Sarah Thompson" heading = "Graphic Design for Beginners" des = "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."/>
          <CoursesReUse image = {Image5} time = "10 Weeks Intermediate By Michael Adams" heading = "Front-End Web Development" des = "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."/>
          <CoursesReUse image = {Image6} time = "6 Weeks Advance By Jennifer Wilson" heading = "Advanced JavaScript" des = "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."/>
          </div>
 

        </div>
      </section>
    </>
  );
};

export default Home;
