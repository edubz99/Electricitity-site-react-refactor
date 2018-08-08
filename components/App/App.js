import React, { Component } from 'react';
import './App.scss';
import Wrapper from '../Wrapper/Wrapper';
import Landing from '../Landing/Landing';
import CarouselItem from '../CarouselItem/CarouselItem';
import Navigation from  '../Navigation/Navigation';
import Services from  '../Services/Services';
import Gallery from  '../Gallery/Gallery';
import Contact from  '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Wrapper>
          <Landing />
          <CarouselItem />
          <Services />
          <Gallery />
          <Contact />
        </Wrapper>
      </div>
    );
  }
}

export default App;
