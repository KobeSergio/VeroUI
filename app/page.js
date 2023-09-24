"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import { Carousel } from "@material-tailwind/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-full top-0 left-0">
      <Parallax  pages={5}>
        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0}>
          <div className="w-full h-full bg-gradient-to-b from-white via-yellow-50 to-yellow-50"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <div className="w-full h-full flex flex-col items-center mt-16">
            <h1 className="font-montserrat font-extrabold text-[50px] text-center text-black">
              Equal Perspectives
            </h1>
            <h3 className="font-lora italic font-normal text-lg text-black">
              A Parallax Journey Through Gender Equity on Men
            </h3>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.33}>
          <div className="w-full h-full bg-[url('/assets/top.png')] bg-contain bg-no-repeat bg-bottom"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.13}>
          <div className="w-full h-full bg-[url('/assets/middle1.png')] bg-contain bg-no-repeat bg-bottom"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="w-full h-full bg-[url('/assets/bottom.png')] bg-contain bg-no-repeat bg-bottom"></div>
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
          <div className="w-full h-full bg-gradient-to-b from-yellow-100 via-yellow-100 to-blue-50"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[85%]" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[80%] -rotate-90" />
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
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[70%] rotate-180" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[40%]" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[10%] -rotate-45" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[70%]" />
        </ParallaxLayer>

        {/* Significance of the Project */}
        <ParallaxLayer offset={2} speed={0}>
          <div className="w-full h-full bg-gradient-to-b from-blue-50 via-blue-100 to-purple-50"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[45%]" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[40%] -rotate-45" />
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
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[30%] rotate-180" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[40%] " />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[10%] -rotate-90" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[70%]" />
        </ParallaxLayer>

        {/* Banner & Submit Post Button*/}
        <ParallaxLayer offset={3} speed={0}>
          <div className="w-full h-full bg-gradient-to-b from-purple-50 via-purple-100 to-green-50"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.7} speed={0.8}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[45%] -rotate-3" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[40%] rotate-180" />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.45} className="z-40">
          <Carousel loop="true" autoplay="true" className="h-[70vh]">
            <div className="w-full h-full bg-[url('/assets/4.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/1.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/2.jpg')] bg-contain bg-no-repeat bg-bottom"></div>
          </Carousel>
        </ParallaxLayer>
        <ParallaxLayer offset={3.85} speed={0.5} className="z-40">
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="w-fit flex bg-[#7163DE] text-white py-5 px-8 justify-center rounded-full font-montserrat text-lg font-semibold cursor-pointer mb-4"
              onClick={() => router.push("/discussion-forum")}
            >
              View Discussion Forum
            </button>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.8} speed={-0}>
          <div className="bg-black bg-opacity-10 rounded-full ml-[5%] w-fit max-h-fit p-16 flex flex-col justify-center items-center">
            <button
              type="button"
              className="w-fit flex bg-[#2E89E4] text-white py-5 px-8 justify-center rounded-full font-montserrat text-lg font-semibold cursor-pointer mb-4"
              onClick={() => router.push("/project")}       
            >
              View the Project
            </button>
          </div>
        </ParallaxLayer>

        {/* Partners */}
        <ParallaxLayer offset={4} speed={0}>
          <div className="w-full h-full bg-gradient-to-b from-green-50 via-green-100 to-green-200"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={-0}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[60%] rotate-45" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[90%] " />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0.45}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[90%] " />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[30%] rotate-6" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} speed={0} sticky={{ start: 3.9, end: 1 }}>
          <div className="bg-black bg-opacity-10 rounded-lg py-4 flex flex-col justify-center items-center">
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
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[85%] rotate-90" />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[80%] rotate-180" />
        </ParallaxLayer>
        <ParallaxLayer offset={4.2} speed={0.8}>
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[14%] -rotate-90" />
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[5%]" />
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} speed={0}>
          <h1 className="font-montserrat font-extrabold text-center text-3xl text-black pb-4">
            Project Creators
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.3}
          speed={-0.1}
          factor={1 / 2}
          className="flex pt-12 justify-center items-center"
        >
          <div className="w-[300px] h-[300px] flex flex-col justify-center items-center bg-[#AB6B4F] rounded-lg p-6">
            <div className="w-40 h-40 bg-[url('/assets/silva.jpg')] bg-cover bg-center bg-no-repeat rounded-full" />

            <h4 className="font-montserrat font-medium text-xl text-white pt-4">
              Veronica Silva
            </h4>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.3}
          speed={0.2}
          factor={1 / 2}
          className="w-full flex flex-row justify-around"
        >
          <div className="w-[300px] h-[300px] flex flex-col justify-center items-center bg-[#8FAADC] rounded-lg p-6">
            <div className="w-40 h-40 bg-[url('/assets/vergara.png')] bg-cover bg-center bg-no-repeat rounded-full" />
            <h4 className="font-montserrat font-medium text-xl text-white pt-4">
              Krishna Vergara
            </h4>
          </div>
          <div className="w-[300px] h-[300px] flex flex-col justify-center items-center bg-[#A9D18E] rounded-lg p-6">
          <div className="w-40 h-40 bg-[url('/assets/devera.png')] bg-cover bg-center bg-no-repeat rounded-full" />
            <h4 className="font-montserrat font-medium text-xl text-white pt-4">
              Matt Klarenz De Vera
            </h4>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[60%] rotate-180" />
          <div className="w-[5%] h-[10%] ml-[40%] " />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.2}>
          <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[10%] " />
          <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[70%] rotate-45" />
        </ParallaxLayer>

        {/* Footer */}
        <ParallaxLayer offset={5.1} speed={-0.2}>
          <footer className="flex flex-col pb-6 px-6 lg:px-12">
            <hr className="bg-white h-1 rounded-sm "></hr>
            <div className="flex flex-row flex-wrap justify-center lg:justify-between max-lg:gap-2 mt-4">
              <h4 className="font-montserrat font-semibold text-sm text-white text-center lg:text-start">
                Copyright 2023 © Bonafide Development Co.
              </h4>
              <div className="flex flex-row gap-5 items-center">
                <Link
                  href={"https://www.facebook.com/CvSUGADResourceCenter"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/assets/socials/facebook.png"}
                    width={20}
                    height={20}
                    alt={"facebook logo"}
                  />
                </Link>
                <Link href={""} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={"/assets/socials/discord.png"}
                    width={20}
                    height={20}
                    alt={"discord logo"}
                  />
                </Link>
                <Link href={""} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={"/assets/socials/twitter.png"}
                    width={20}
                    height={20}
                    alt={"twitter logo"}
                  />
                </Link>
                <Link href={""} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={"/assets/socials/google.png"}
                    width={20}
                    height={20}
                    alt={"google logo"}
                  />
                </Link>
                <Link href={""} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={"/assets/socials/linked_in.png"}
                    width={20}
                    height={20}
                    alt={"linkedin logo"}
                  />
                </Link>
              </div>
            </div>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
