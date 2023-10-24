import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import person1 from "../../../assets/images/team/1.jpg"
import person2 from "../../../assets/images/team/2.jpg"
import person3 from "../../../assets/images/team/3.jpg"
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const cardData = [
    {
        title: 'Card 1',
        description: 'This is the description for Card 1',
        imageUrl: `${person1}`,
    },
    {
        title: 'Card 2',
        description: 'This is the description for Card 2',
        imageUrl: `${person2}`,
    },
    {
        title: 'Card 3',
        description: 'This is the description for Card 3',
        imageUrl: `${person3}`,
    },
    {
        title: 'Card 4',
        description: 'This is the description for Card 4',
        imageUrl: `${person1}`,
    },
    {
        title: 'Card 5',
        description: 'This is the description for Card 5',
        imageUrl: `${person2}`,
    },
    {
        title: 'Card 6',
        description: 'This is the description for Card 5',
        imageUrl: `${person3}`,
    },
    // Add more card data as needed
];

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards per view
    slidesToScroll: 1,
};

const Team = () => {
    return (

        <div className='mt-10'>
            <div className='text-center w-full lg:w-3/4 mx-auto'>
                <h1 className='text-orange-400 text-2xl font-semibold'>Team</h1>
                <h1 className='text-4xl'>Meat Our Team Member </h1>
                <p className='w-full lg:w-3/4 mx-auto py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos deserunt error! Pariatur ullam quia doloribus delectus sint vel. .</p>
            </div>
            <div>
                <Slider {...settings}>
                    {cardData.map((card, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-base-100 shadow-md border-2 rounded-lg p-4">
                                <img src={card.imageUrl} alt={card.title} className="w-full h-auto object-cover rounded-lg" />
                                <h2 className="text-xl font-semibold mt-2">{card.title}</h2>
                                <p className="">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Team;


