"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

//Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Home() {
  const parallax = useRef();
  // return (
  //   <div className="w-full h-ful">
  //     <Parallax ref={parallax} pages={8}>
  //       <ParallaxLayer
  //         offset={0}
  //         factor={8}
  //         speed={0}
  //         className="bg-white"
  //       ></ParallaxLayer>
  //       <ParallaxLayer
  //         offset={1}
  //         speed={1}
  //         style={{ backgroundColor: "#021238" }}
  //       />
  //       <ParallaxLayer
  //         offset={0}
  //         speed={1}
  //         className="bg-white"
  //         style={{
  //           backgroundImage: 'url("/assets/header.png")',
  //           backgroundSize: "100% 100%",
  //         }}
  //       ></ParallaxLayer>
  //       <ParallaxLayer offset={0}>
  //         <div className="w-full flex flex-col justify-center items-center top-0 my-28">
  //           <h1 className="font-montserrat font-extrabold text-[50px] text-center text-black">
  //             Equal Perspectives
  //           </h1>
  //           <h3 className="font-lora italic font-normal text-lg text-black">
  //             A Parallax Journey Through Gender Equity on Men
  //           </h3>
  //         </div>
  //       </ParallaxLayer>
  //       <ParallaxLayer offset={1}>
  //         <div className="flex flex-row justify-between">
  //           <div className="w-1/2 justify-center items-center">
  //             <img
  //               src={"/assets/second_container_akbayan.png"}
  //               style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
  //             />
  //           </div>

  //           <div className="w-1/2 flex flex-col p-24">
  //             <h1 className="font-montserrat font-extrabold text-[50px] text-black">
  //               About the Project
  //             </h1>
  //             <p className="font-lora italic font-normal text-lg text-white">
  //               We are composed of National University IT students promoting the
  //               men&apos;s mental health and gender equality in terms of
  //               emotional and lifestyle through Parallax Website. The
  //               researchers came up with the study to be able to recognize
  //               promoting social equality for men creating a more friendly,
  //               equitable society and eradicate social stigma and stereotyping
  //               against men. Variables that lead to inequality must be
  //               identified and addressed. This includes facing the damaging
  //               preconceptions and expectations about what it means to be a man,
  //               as well as tackling structural prejudices in society.
  //             </p>
  //           </div>
  //         </div>
  //       </ParallaxLayer>
  //     </Parallax>
  //   </div>
  // );

  return (
    <div className="w-full h-full bg-[#253237]">
      <Parallax ref={parallax} pages={8}>
        {/* main bg */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: 'url("/assets/divider_.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        />

        <ParallaxLayer offset={1} speed={1} className="bg-[#ADD4E5]" />
        <ParallaxLayer offset={2} speed={1} factor={1.5} className="bg-[#D4C896]" />
        <ParallaxLayer offset={3} speed={1} factor={1.5} className="bg-[#F4B1A8]" />

        <ParallaxLayer
          offset={1.3}
          speed={0}
          style={{ pointerEvents: "none" }}
        >
          <img
            src="/assets/second_container_akbayan.png"
            style={{ width: "25%", marginLeft: "60%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1}>
          <img
            src={url("cloud")}
            style={{
              display: "block",
              width: "20%",
              marginLeft: "60%",
              opacity: 0.4,
            }}
          />
          <div className="ml-[35%] w-[30%] flex flex-col justify-center">
            <button
              type="button"
              className="flex bg-yellow-800 py-5 px-8 justify-center rounded-full font-montserrat text-xl font-semibold cursor-pointer mb-4"
            >
              Join Us
            </button>
            <p className="font-montserrat text-xl font-semibold text-yellow-950 text-center">
              along with other
            </p>
            <h2 className="font-montserrat text-4xl font-bold text-yellow-950 text-center my-2">
              1,234,567
            </h2>
            <p className="font-montserrat text-xl font-semibold text-yellow-950 text-center">
              people who joined
            </p>
          </div>

          <img
            src={url("cloud")}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "80%",
              opacity: 0.4,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={0} className="flex flex-row justify-between">
          <div className="w-full flex flex-col p-24">
            <div className="flex flex-col">
              <h1 className="font-montserrat font-extrabold text-[50px] text-black">
                Significance of the Project
              </h1>
              <p className="p-4 bg-white bg-opacity-20 rounded-lg font-lora italic font-normal text-lg text-black">
                Better understanding of the people to have an awareness of the
                said topic and as well as can be used for advocacy on human
                rights specifically on the importance of men&apos; gender
                equality.<br></br><br></br> Improved perspective of what is the emotional
                flexibility on men&apos; gender role and equality and broaden
                knowledge about the topic&apos; result. <br></br><br></br> An insight of a tackled
                topic for advocates, educators, and learners. Creating a
                parallax website about “Promoting Men&apos; Emotional
                Flexibility” is another way to resolve the issue involving the
                breaking down of the society&apos; expectation about men
                suppressing their emotions to encourage men to be more openly
                expressive. Our parallax website&apos; goal is to educate users
                or readers on the significance of emotional intelligence and to
                give resources and tools to assist men in developing these
                skills.
              </p>
              <button
              type="button"
              className="w-fit flex bg-yellow-800 py-5 px-8 justify-center rounded-full font-montserrat text-xl font-semibold cursor-pointer mt-4"
            >
              View the project
            </button>
            </div>
          </div>
          <img
            src="/assets/mens_day.png"
            style={{ display: "block", width: "25%", height:"70%", marginRight:"10%"}}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={-0.3} />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="font-montserrat font-extrabold text-[50px] text-center text-black">
              Equal Perspectives
            </h1>
            <h3 className="font-lora italic font-normal text-lg text-black">
              A Parallax Journey Through Gender Equity on Men
            </h3>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="w-full flex flex-col p-24">
            <div className="flex flex-col">
              <h1 className="font-montserrat font-extrabold text-[50px] text-black">
                About the Project
              </h1>
              <p className="p-4 bg-white bg-opacity-20 rounded-lg font-lora italic font-normal text-lg text-black">
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

        {/* <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={"/assets/klarenz_.png"} style={{ width: "40%" }} />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
