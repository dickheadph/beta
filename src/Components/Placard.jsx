import React from 'react';
function Placard(props) {
  const { icon, title, desc } = props;
  return (
    <>
      <div className='m-2 rounded border-[1px] border-zinc-700 p-5 shadow-md lg:w-[350px] xl:w-[600px]'>
        <h1 className='font-bold'>
          {icon} {title}
        </h1>
        <p className='font-base py-2 text-sm md:text-base lg:text-lg'>{desc}</p>
      </div>
    </>
  );
}

export default Placard;
