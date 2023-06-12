import React from 'react';
import Slider from '../Slider/Slider';
import PopularInstructors from '../PopularInstructorsSection/PopularInstructors';
import PopularClassSection from '../PopularClassSection/PopularClassSection';
import { Helmet } from 'react-helmet';
import ChampionsCorner from '../ChampionsCorner/ChampionsCorner';

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
      <ChampionsCorner></ChampionsCorner>
    </div>
  );
};

export default Home;