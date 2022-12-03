import React from 'react';

function Card(props) {
  return (
    <>
      <div className='m-2 rounded border-[1px] border-[#0a0a0a]/70 shadow-md md:w-[360px] lg:w-[470px] xl:w-[500px]'>
        {props.children}
      </div>
    </>
  );
}

export default Card;
