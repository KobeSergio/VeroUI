"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from "@material-tailwind/react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

// Create a custom button component
function CustomCarouselButton({ children, onClick }) {
  return (
    <button className="custom-carousel-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function Home() {
  const parallax = useRef();

  return (
    <div className="w-full h-full" style={{ top: "0", left: "0" }}>
      <Parallax ref={parallax} pages={5}>
        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0}>
          <div className="w-full h-full bg-white"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <div className="w-full h-full flex flex-col items-center mt-20">
            <h1 className="font-montserrat font-extrabold text-[50px] text-center text-black">
              Equal Perspectives
            </h1>
            <h3 className="font-lora italic font-normal text-lg text-black">
              A Parallax Journey Through Gender Equity on Men
            </h3>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.33}>
          <div className="w-full h-[700px] bg-[url('/assets/top.png')] bg-contain bg-no-repeat bg-bottom"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.13}>
          <div className="w-full h-full bg-[url('/assets/middle1.png')] bg-contain bg-no-repeat bg-bottom"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="w-full min-h-full bg-[url('/assets/bottom.png')] bg-contain bg-no-repeat bg-bottom"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0}>
          <div className="w-full h-12 bg-blue"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={-0.33}>
          <div className="w-full flex justify-center font-montserrat font-bold text-2xl text-black">
            Scroll down to see more
          </div>
        </ParallaxLayer>

        {/* About the Project */}
        <ParallaxLayer offset={1} speed={0}>
          <div className="w-full h-full bg-white"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[85%] bg-[#FFD966] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[80%] bg-[#FFD966] opacity-20" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.45}
          className="flex justify-center items-center"
        >
          <div className="flex flex-row justify-between">
            <div className="w-2/5 bg-[#FFD966] flex justify-center items-center">
              <div className="w-full h-full bg-[url('/assets/second_container_akbayan.png')] bg-contain bg-no-repeat bg-bottom"></div>
            </div>
            <div className="w-3/5 flex flex-col p-24">
              <h6 className="font-montserrat font-semibold text-lg uppercase text-[#FFD966]">
                About the Project
              </h6>
              <h1 className="font-montserrat font-extrabold text-3xl text-black pb-4">
                Mental Health and Gender Equality
              </h1>
              <p className="font-lora italic font-normal text-xl text-black">
                We are composed of National University IT students promoting the
                men&apos;s mental health and gender equality in terms of
                emotional and lifestyle through Parallax Website. The
                researchers came up with the study to be able to recognize
                promoting social equality for men creating a more friendly,
                equitable society and eradicate social stigma and stereotyping
                against men. Variables that lead to inequality must be
                identified and addressed. This includes facing the damaging
                preconceptions and expectations about what it means to be a man,
                as well as tackling structural prejudices in society.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[70%] bg-[#FFD966] opacity-10" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[40%] bg-[#FFD966] opacity-10" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[10%] bg-[#FFD966] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[70%] bg-[#FFD966] opacity-20" />
        </ParallaxLayer>

        {/* Significance of the Project */}
        <ParallaxLayer offset={2} speed={0}>
          <div className="w-full h-full bg-white"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[45%] bg-[#2E89E4] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[40%] bg-[#2E89E4] opacity-20" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.45}
          className="flex flex-row justify-center items-center"
        >
          <div className="flex flex-row justify-between">
            <div className="w-full flex flex-col p-24">
              <h6 className="font-montserrat font-semibold text-lg uppercase text-[#2E89E4]">
                Significance of the Project
              </h6>
              <h1 className="font-montserrat font-extrabold text-3xl text-black pb-4">
                Awareness and Improved Perspective
              </h1>
              <p className="font-lora italic font-normal text-xl text-black">
                Better understanding of the people to have an awareness of the
                said topic and as well as can be used for advocacy on human
                rights specifically on the importance of men&apos; gender
                equality.<br></br>
                <br></br> Improved perspective of what is the emotional
                flexibility on men&apos; gender role and equality and broaden
                knowledge about the topic&apos; result. <br></br>
                <br></br> An insight of a tackled topic for advocates,
                educators, and learners. Creating a parallax website about
                “Promoting Men&apos; Emotional Flexibility” is another way to
                resolve the issue involving the breaking down of the
                society&apos; expectation about men suppressing their emotions
                to encourage men to be more openly expressive. Our parallax
                website&apos; goal is to educate users or readers on the
                significance of emotional intelligence and to give resources and
                tools to assist men in developing these skills.
              </p>
            </div>
            <div className="w-2/5 min-h-fit bg-[#D2F7FF] flex justify-center items-center">
              <div className="w-full h-full bg-[url('/assets/mens_day.png')] bg-contain bg-no-repeat bg-bottom"></div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.7}
          speed={-0.3}
          sticky={{ start: 1.7, end: 1 }}
        >
          <div className="bg-black bg-opacity-10 rounded-full ml-[70%] w-fit min-h-fit p-16 flex flex-col justify-center items-center">
            <button
              type="button"
              className="w-fit flex bg-[#FFD966] text-white py-5 px-8 justify-center rounded-full font-montserrat text-lg font-semibold cursor-pointer mb-4"
            >
              Join Us
            </button>
            <p className="font-montserrat text-xl font-semibold text-yellow-950 text-center">
              along with other
            </p>
            <h2 className="font-montserrat text-5xl font-bold text-yellow-950 text-center my-2">
              1,234,567
            </h2>
            <p className="font-montserrat text-xl font-semibold text-yellow-950 text-center">
              people who joined
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.75} speed={0.5}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[30%] bg-[#2E89E4] opacity-10" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[40%] bg-[#2E89E4] opacity-10" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[10%] bg-[#2E89E4] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[70%] bg-[#2E89E4] opacity-20" />
        </ParallaxLayer>

        {/* Banner & Submit Post Button*/}
        <ParallaxLayer offset={3} speed={0}>
          <div className="w-full h-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} speed={0.8}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[45%] bg-[#2E89E4] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[40%] bg-[#2E89E4] opacity-20" />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.45} className="z-40">
          <Carousel loop="true" autoplay="true" className="h-[70vh] ">
            <div className="w-full h-full bg-[url('/assets/4.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/1.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/2.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
          </Carousel>
        </ParallaxLayer>
        <ParallaxLayer offset={3.85} speed={0.5}>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="w-fit flex bg-[#7163DE] text-white py-5 px-8 justify-center rounded-full font-montserrat text-lg font-semibold cursor-pointer mb-4"
            >
              Submit a Post
            </button>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.8} speed={-0.2}>
          <div className="bg-black bg-opacity-10 rounded-full ml-[5%] w-fit max-h-fit p-16 flex flex-col justify-center items-center">
            <button
              type="button"
              className="w-fit flex bg-[#2E89E4] text-white py-5 px-8 justify-center rounded-full font-montserrat text-lg font-semibold cursor-pointer mb-4"
            >
              View the Project
            </button>
          </div>
        </ParallaxLayer>

        {/* Partners */}
        <ParallaxLayer offset={3.9} speed={0.45}>
          <div className="w-full h-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={-0}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[60%] bg-[#7163DE] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[90%] bg-[#7163DE] opacity-20" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0.45}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[90%] bg-[#2E89E4] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[30%] bg-[#2E89E4] opacity-20" />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={4} speed={0.8}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[85%] bg-[#FFD966] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[80%] bg-[#FFD966] opacity-20" />
        </ParallaxLayer> */}
        <ParallaxLayer offset={3.9} speed={0.45} factor={1 / 2}>
          <div className="flex flex-col pt-24">
            <h1 className="font-montserrat font-extrabold text-center text-3xl text-black pb-4">
              Partners
            </h1>
            <Marquee>
              <Image
                src={"/assets/move.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/5.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/3.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/move.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/5.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/3.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/move.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/5.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/3.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/move.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/5.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/3.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/move.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/5.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
              <Image
                src={"/assets/3.png"}
                width={100}
                height={100}
                alt=""
                className="mr-12"
              />
            </Marquee>
          </div>
        </ParallaxLayer>

        {/* Project Creators */}
        <ParallaxLayer offset={4.4} speed={0.8}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[85%] bg-[#AB6B4F] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[80%] bg-[#8FAADC] opacity-20" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.2}
          speed={-0.1}
          factor={1 / 2}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <h1 className="font-montserrat font-extrabold text-center text-3xl text-black pb-4">
            Project Creators
          </h1>
          <div className="w-[350px] h-[300px] flex flex-col justify-center items-center bg-[#AB6B4F] rounded-lg p-6">
            <Image
              src={"/assets/nica_.png"}
              width={100}
              height={100}
              alt=""
              className="w-40"
            />
            <h4 className="font-montserrat font-medium text-xl text-white pt-4">
              Veronica Silva
            </h4>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.2}
          speed={0.2}
          factor={1 / 2}
          className="w-full flex flex-row justify-around"
        >
          <div className="w-[350px] h-[300px] flex flex-col justify-center items-center bg-[#8FAADC] rounded-lg p-6">
            <Image
              src={"/assets/vergara_.png"}
              width={100}
              height={100}
              alt=""
              className="w-40"
            />
            <h4 className="font-montserrat font-medium text-xl text-white pt-4">
              Krishna Vergara
            </h4>
          </div>
          <div className="w-[350px] h-[300px] flex flex-col justify-center items-center bg-[#A9D18E] rounded-lg p-6">
            <Image
              src={"/assets/klarenz_.png"}
              width={100}
              height={100}
              alt=""
              className="w-40"
            />
            <h4 className="font-montserrat font-medium text-xl text-white pt-4">
              Matt Klarenz De Vera
            </h4>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[70%] bg-[#FFD966] opacity-10" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[40%] bg-[#8FAADC] opacity-10" />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.2}>
          <div className="w-[10%] h-[20%] rounded-full block ml-[10%] bg-[#A9D18E] opacity-20" />
          <div className="w-[5%] h-[10%] rounded-full block ml-[70%] bg-[#FFD966] opacity-20" />
        </ParallaxLayer>
        <ParallaxLayer></ParallaxLayer>
      </Parallax>
    </div>
  );
}
