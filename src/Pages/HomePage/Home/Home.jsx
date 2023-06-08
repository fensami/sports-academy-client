import React from 'react';
import Slider from '../Slider/Slider';
import PopularInstructors from '../PopularInstructorsSection/PopularInstructors';
import PopularClassSection from '../PopularClassSection/PopularClassSection';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClassSection></PopularClassSection>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;