import React from 'react';
import Card from '../Shared/Card';
import Button from '../Shared/PrimButton';
import SecButton from '../Shared/SecButton';
function Proects(props) {
  const { name, cat, img, desc, live, repo } = props;
  return (
    <>
      <Card>
        <div>
          <img
            src={img}
            alt=''
            className='object-fit h-[250px] w-full rounded-t-lg p-1 lg:h-[300px]'
          />
          <div className='p-4'>
            <h1 className='text-center text-xl font-bold xl:text-left'>
              {name}
            </h1>
            <h1>Tag: {cat.toUpperCase()}</h1>
            <p className='text-justify text-sm md:text-base'>{desc}</p>
          </div>
          <div className='mb-4 flex justify-center space-x-6'>
            <a href={live}>
              <Button name='Visit site' />
            </a>
            <a href={repo}>
              <SecButton name='View Repo' />
            </a>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Proects;
