import React from 'react';

function Card(props) {
  return (
    <>
      <div className='rounded border-[1px] border-[#0a0a0a]/70 xl:w-[500px] m-2'>
        {props.children}
      </div>
    </>
  );
}

export default Card;
