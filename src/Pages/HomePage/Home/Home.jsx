import React from 'react';
import Slider from '../Slider/Slider';
import PopularInstructors from '../PopularInstructorsSection/PopularInstructors';
import PopularClassSection from '../PopularClassSection/PopularClassSection';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>SA || Home</title>
        </Helmet>
      </div>
      <Slider></Slider>
      <PopularClassSection></PopularClassSection>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;