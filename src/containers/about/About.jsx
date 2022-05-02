import React from 'react'
import { Feature } from '../../components'
import './about.css'


const About = () => {
  return (
/*     <div className='wrap'>
 */    <div className='__about section__margin' id='about'>
      <div className='__about_feature'>
      <Feature title="Stay safe." text= "We provide professional electrical services for residential and commercial properties. We are licensed and insured, but most importantly, we're here to keep you safe." />
      </div>
      <div className='__about_heading'>
        <h1 className='gradient__text'>
          Professional electricians for residential and commercial services
        </h1>
        <p>Get in touch</p>
      </div>
      <div className='__about_container'>
        
      <Feature title="Low Cost" text= "Our electrical services are designed with your safety in mind. Reliable and high-quality products you can trust for the lowest price." />
      <Feature title="High Standards" text= "Our electrical service is committed to delivering the best possible service to all our clients, whether it be for a local business or family home." />
      <Feature title="Reliability" text="We offer you an exceptionally high level of service from the initial consultation stage through to completion of your project with minimum disruption, supplying you with a complete solution, fully tested and certified." />
      </div>
    </div>
/*     </div>
 */  )
}

export default About