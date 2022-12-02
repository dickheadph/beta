import React from 'react';
import Wave from 'react-wavify';
function Wavee() {
  return (
    <>
      <div className=''>
        <Wave
          className='rotate-180 absolute w-screen h-[60vh] mb-[5%]'
          fill='#0a0a0a'
          paused={false}
          opacity='0.7'
          options={{
            height: 100,
            amplitude: 90,
            speed: 0.12,
            points: 6,
          }}
        />
        <Wave
          className='rotate-180 absolute w-screen h-[60vh] mb-[5%]'
          fill='#3f3f46'
          paused={false}
          opacity='0.6'
          options={{
            height: 100,
            amplitude: 90,
            speed: 0.18,
            points: 5,
          }}
        />
        <Wave
          className='rotate-180 absolute w-screen h-[60vh] mb-[5%]'
          fill='#18181b'
          paused={false}
          opacity='0.5'
          options={{
            height: 90,
            amplitude: 100,
            speed: 0.14,
            points: 4,
          }}
        />
        <Wave
          className='rotate-180 absolute w-screen h-[60vh] mb-[5%]'
          fill='#28292f'
          paused={false}
          opacity='0.10'
          options={{
            height: 100,
            amplitude: 90,
            speed: 0.15,
            points: 5,
          }}
        />
      </div>
    </>
  );
}

export default Wavee;
