import React from 'react';
import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
import banner5 from "../../../assets/images/banner/5.jpg"
import banner6 from "../../../assets/images/banner/6.jpg"

const Baner = () => {
    return (
        <div>
            <div className="carousel w-full  ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="  text-neutral-content py-20 my-20 lg:my-40 mt-10">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className='flex gap-1 items-center'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline">Primary</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-10 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 lg:bottom-10">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <div className="hero bg-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="  text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className='flex gap-1 items-center'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline">Primary</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 lg:bottom-10">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <div className="hero bg-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="  text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className='flex gap-1 items-center'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline">Primary</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 lg:bottom-10">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <div className="hero bg-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${banner4})` }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="  text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className='flex gap-1 items-center'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline">Primary</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 lg:bottom-10">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baner;