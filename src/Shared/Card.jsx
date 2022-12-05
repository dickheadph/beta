import React from 'react';

function Card(props) {
  return (
    <>
      <div className='m-2 rounded-lg  border-[1px] shadow-md md:w-[360px] lg:w-[470px] xl:w-[550px]'>
        {props.children}
      </div>
    </>
  );
}

export default Card;
