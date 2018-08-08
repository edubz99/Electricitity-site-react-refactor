import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';

class CarouselItem extends Component {
  render() {

    const images = [
      {
        id:1,
        link:'images/caurosel/1.jpg',
        title:'Electrical Services',
        description:'We cover all aspects of domestic and commercial electrical work, both indoors and out – so whether you need an electrician to install a new light, undertake a complete rewire, or solve an electrical problem, we can help. No Job is Too Small!'
      },
      {
        id:2,
        link:'images/caurosel/2.jpg',
        title:'A Friendly, Proffesional & Reliable Service',
        description:'With an emphasis on relationships and customer service, we aim to lead the path for excellence with experienced quality electrical workmanship & Union-certified electricial solutions.'
      },
      {
        id:3,
        link:'images/caurosel/3.jpg',
        title:'Tools & Specialist Equipment',
        description:'From new construction to retrofitting and electrical maintenance of older commercial buildings, Moran Electric manages projects thoroughly from start to completion.'
      }
    ]
    return (
      <div className="section-wrapper">
        <Carousel>
            {images.map(image => {
              return (
                <Carousel.Item key={image.id}>
                  <img key={image.id} src={image.link} alt={image.title}/>
                  <Carousel.Caption>
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </Carousel.Caption>
              </Carousel.Item>
              )
            })}
        </Carousel>
       </div>
    );
  }
}

export default CarouselItem;
    
 