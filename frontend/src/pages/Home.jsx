import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import {Link} from 'react-router-dom';
import {BsArrowRight} from "react-icons/bs";
const Home =()=>{
    return(
        <>
            {/*==================Hero Section Start===================*/}
                <section className='hero__section pt-[60px] 2xl:h-[700px]'>
                    <div className='container'>
                        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                            {/*==================Hero Content===================*/}
                            <div>
                                <div className='lg:w-[570px]'>
                                    <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>We help patients live a healthy, longer life.</h1>
                                    <p className='text_para'>Lorem ipsum dolor sit amet, consecrate radicalising elite. Qui dicta minus molest vel beat natures event ration temporise param harm alias officio assume official quicksand deletion eos cupidity color dolorous!</p>
                                    <button className='btn'>Request an Appointment</button>
                                </div>
                                {/*==================Hero Content===================*/}
                                <div className='mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                                        <div>
                                            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                                            <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                            <p className='text_para'>Years of experience</p>
                                        </div>

                                        <div>
                                            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                                            <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                                            <p className='text_para'>Clinic Location</p>
                                        </div>

                                        <div>
                                            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                                            <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                                            <p className='text_para'>Patient Satisfaction</p>
                                        </div>
                                    </div>
                               
                            </div>
                            {/*==================Hero Content===================*/}

                            <div className='flex gap-[30px] justify-end'>
                                <div>
                                    <img src={heroImg01} alt=''/>
                                </div>
                                <div className='mt-[30px]'>
                                    <img src={heroImg02} alt='' className='w-full mb-[30px]'/>
                                    <img src={heroImg03} alt='' className='w-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/*==================Hero Section End===================*/}
            <section>
                <div className='container'>
                    <div className='lg:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>Providing the best medical services</h2>
                        <p className='text_para text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
                    </div>
                    {/*<div className='flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'></div>*/}
                    <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                        <div className='py-[30px] px-5'>
                            <div className='flex items-center justify-center'>
                                <img src={icon01} alt=''/>
                            </div>

                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                                <p className='text-center text-[16px] leading-7 text-textColor font-[400] mt-4 '>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic</p>
                                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home