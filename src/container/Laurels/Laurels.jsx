import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Laurels.css';

const AwardCard = (props) => (
  <div className='app__laurels_awards-card'>
    <img src={props.image} alt='award image' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: '#DCCA87' }}>{props.title}</p>
      <p className='p__cormorant'>{props.subtitle}</p>
    </div>
  </div>
)

const awards = data.awards.map((award, index) => (
  <AwardCard key={award.title + index} title={award.title} image={award.imgUrl} subtitle={award.subtitle} />
))


const Laurels = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & Recognition'/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {awards}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
);

export default Laurels;
