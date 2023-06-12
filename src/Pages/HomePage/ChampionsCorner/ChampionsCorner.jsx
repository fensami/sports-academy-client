import React, { useEffect, useState } from 'react';

const ChampionsCorner = () => {
  const [champions, setChampions] = useState([])
  useEffect(() => {
    fetch('/champion.json')
    .then(res => res.json())
    .then(data => {
      setChampions(data);
    })
  },[])
  return (
    <div>
      <p className='text-5xl font-bold uppercase my-12 text-[#339e9b] text-center'>Champions Corner</p>

<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
  {
    champions.map((champion, index) => <div key={index} className="card border-2 w-96 bg-base-100 shadow">
    <div className="card-body mt-12">
      <h2 className="card-title"></h2>
      <p>{champion.name}</p>
      <p>{champion.gameName}</p>
      <p>years Of Experience : {champion.yearsOfExperience}</p>
      <p>{champion.role}</p>
    </div>
    <figure><img className='w-full h-64' src={champion.image} alt="Shoes" /></figure>
  </div>)
  }
</div>


     {/* {
      champions.map((champion, index) =>  )
     }  */}


    </div>
  );
};

export default ChampionsCorner;