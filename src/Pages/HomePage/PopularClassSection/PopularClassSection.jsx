import React from 'react';

const PopularClassSection = () => {
  return (
    <div className='my-8'>
      <p className='text-5xl text-center font-bold  text-[#38ada9] '>Popular Classes</p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 '>
        <article className='flex flex-col shadow-xl border-2 rounded p-5'>
          <img className='rounded-md h-full'  src="https://img.freepik.com/premium-photo/basketball-strategy-team-sports-coach-talking-usa-sport-group-about-coaching-game-court-young-athlete-students-communication-about-idea-during-training-professional-competition_590464-86954.jpg?w=2000" alt="" />
          <p className='text-2xl my-3 font-semibold'>Basketball</p>
          <p className='text-lg font-semibold'>Students: 120</p>
        </article>
        <article className='flex flex-col shadow-xl border-2 rounded p-5'>
          <img className='rounded-md h-full'  src="https://media.gettyimages.com/id/501676602/photo/coach-giving-instruction-to-his-kids-soccer-team.jpg?s=612x612&w=gi&k=20&c=LP6ClbHS6BmEpGOz0TqVJA6wH9x619nawOcT3Q0ZwmA=" alt="" />
          <p className='text-2xl my-3 font-semibold'>Football</p>
          <p className='text-lg font-semibold'>Students: 150</p>
        </article>
        <article className='flex flex-col shadow-xl border-2 rounded p-5'>
          <img className='rounded-md h-full'  src="https://media.istockphoto.com/id/1421326043/photo/children-tennis-and-sport-with-a-group-of-friends-and-kids-on-a-sports-court-for-training.jpg?s=612x612&w=0&k=20&c=W85DQGevZ3NP4rYuIYBlg2wmnLqKo2zQ-k-RK-FBY7Q=" alt="" />
          <p className='text-2xl my-3 font-semibold'>Tennis</p>
          <p className='text-lg font-semibold'>Students: 50</p>
        </article>
        <article className='flex flex-col shadow-xl border-2 rounded p-5'>
          <img className='rounded-md h-full'  src="https://aquastarswim.com.au/app/uploads/2022/01/210414-Aquastar-80-Cropped.jpg" alt="" />
          <p className='text-2xl my-3 font-semibold'>Swimming</p>
          <p className='text-lg font-semibold'>Students: 80</p>
        </article>
        <article className='flex flex-col shadow-xl border-2 rounded p-5'>
          <img className='rounded-md h-full'  src="https://membersolutions.com/wp-content/uploads/2017/04/iStock_80106731_XXXLARGE-1.jpg" alt="" />
          <p className='text-2xl my-3 font-semibold'>Martial Arts</p>
          <p className='text-lg font-semibold'>Students: 80</p>
        </article>
        <article className='flex flex-col shadow-xl border-2 rounded p-5'>
          <img className='rounded-md h-full'  src="https://www.bkgymswim.com.au/wp-content/uploads/2019/10/KH_064_BKids_040819-1260x630.jpg" alt="" />
          <p className='text-2xl my-3 font-semibold'>Gymnastics</p>
          <p className='text-lg font-semibold'>Students: 80</p>
        </article>
        <article className='flex flex-col shadow-xl border-2 rounded p-5'>
          <img className='rounded-md h-full'  src="https://aquastarswim.com.au/app/uploads/2022/01/210414-Aquastar-80-Cropped.jpg" alt="" />
          <p className='text-2xl my-3 font-semibold'>Swimming</p>
          <p className='text-lg font-semibold'>Students: 80</p>
        </article>
       



      
      </div>
    </div>
  );
};

export default PopularClassSection;