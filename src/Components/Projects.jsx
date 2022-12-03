import React from 'react';
import Wave from '../assets/wave.png';
import Card from '../Shared/Card';
function Proects() {
  return (
    <>
      <Card>
        <div>
          <img src={Wave} alt='' className='w-full object-cover' />
          <div className='p-4'>
            <h1>Monito | Pet Shop</h1>
            <p className='text-justify'>
              Homerun as an e-commerce site built for Homeowners and brokers.
              This app enables users to create listings and specify whether
              their Home is for sale or for Rent. This app is built using
              React.js, TailwindCSS, Firebse and other NPM libraries. This has
              OAuth feature where user could either write or use their google
              acc to register. GeoApify API was used for Geo-coding and
              React-Leaflet to view the property location.
            </p>
          </div>
          <div className='mb-4 flex justify-center space-x-6'>
            <button className='rounded border-[1px] bg-transparent py-2 px-3 outline-none hover:bg-zinc-900 hover:text-white'>
              Live Website
            </button>
            <button className='rounded border-[1px] bg-transparent py-2 px-3 outline-none hover:bg-zinc-900 hover:text-white'>
              Github Repo
            </button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Proects;
