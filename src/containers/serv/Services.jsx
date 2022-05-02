import './services.css'
import React from 'react'
import { Feature } from '../../components';

const ServiceData = [
  {
    title: 'Residencial',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Commercial',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    title: 'Heating',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Solar',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const Services = () => {
  return (
    <div className='__services section__paddin' id='services'>
      <div className='__services_heading'>
        <h1 className='gradient__text'>
          Let us do the wiring for you.
        </h1>
        <p>
          You don't have to worry about a thing when it comes to your electrical service. Remember, we're professionals who got our certificate in an institution and can handle any job, big or small.
        </p> 
      </div>
      <div className='__services_container'>
        {ServiceData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Services