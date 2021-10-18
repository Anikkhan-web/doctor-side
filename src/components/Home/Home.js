import React from 'react';
import { CardImg, Carousel, Image } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
      <>
      <Carousel>
<Carousel.Item>
  <img
    className="d-block  w-100"
    src="https://i.ibb.co/VLPd5JG/360-F-215027714-9qdgv7wqjf-Qglx-YLs-O0-AFN0-EYy4-Hkmuj.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h2>Find A doctor & Appointment online</h2>
    <p>Welcome to UK Dental Clinic of Uttara in Bangladesh, wherever we tend to concentrate on providing you the gold commonplace in dental care. At UK Dental Clinic of Uttara at Dhaka in Bangladesh, we've encircled ourselves with friendly, compassionate thrust workers so you'll have the simplest dental expertise attainable. </p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block  w-100"
    src="https://i.ibb.co/GCkn0Wt/Banner.png"
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>Find A doctor & Appointment online</h3>
    <p>Welcome to UK Dental Clinic of Uttara in Bangladesh, wherever we tend to concentrate on providing you the gold commonplace in dental care. At UK Dental Clinic of Uttara at Dhaka in Bangladesh, we've encircled ourselves with friendly, compassionate thrust workers so you'll have the simplest dental expertise attainable. </p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block  w-100"
    src="https://i.ibb.co/NCdqLKT/banner-home.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Find A doctor & Appointment online</h3>
    <p>Welcome to UK Dental Clinic of Uttara in Bangladesh, wherever we tend to concentrate on providing you the gold commonplace in dental care. At UK Dental Clinic of Uttara at Dhaka in Bangladesh, we've encircled ourselves with friendly, compassionate thrust workers so you'll have the simplest dental expertise attainable. </p>
  </Carousel.Caption>
</Carousel.Item>
 </Carousel> 
    <Services></Services>
    <Team></Team>
    <Gallery></Gallery>
    <Contact></Contact>
    </>
    );
};

export default Home;


