"use client";

import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { Carousel } from "@material-tailwind/react";
import { BsChevronUp } from "react-icons/bs"

export default function Project() {
  const parallax = useRef();

  return (
    <div className="w-full h-full top-0 left-0 ">
      
      
      {/* 1st section */}
      <Parallax ref={parallax} pages={5}>
      <ParallaxLayer
          offset={0.89}
          speed={-1}
          factor={6}
          style={{ position: "absolute", zIndex: "40", marginLeft: "95%", cursor: "pointer"}}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <BsChevronUp  size={50} className="text-black rounded-full bg-white p-4"/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={6}
          style={{
            backgroundImage:
              "url(/assets/star.png), linear-gradient(#2b1055, #7597de)",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        />
        <ParallaxLayer offset={0} speed={-0.7} factor={1}>
          <h1 className="font-montserrat font-extrabold text-[100px] text-center text-white py-16">
            Move Katropa
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.01}
          style={{
            backgroundImage: "url(/assets/33.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            backgroundImage: "url(/assets/55.png)",
            backgroundSize: "cover",
          }}
        />
        
        {/* 5th section */}
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{backgroundColor: "#7597de"}}
        />
        <ParallaxLayer
          offset={2.9}
          speed={-0.1}
          style={{
            padding: "96px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="font-montserrat font-extrabold text-3xl text-white pb-4">
            ...by integrating GAD in ALL of its programs.
          </h1>
          <Carousel loop={true} autoplay={true} className="">
            <div className="w-full h-full bg-[url('/assets/a1.png')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/a2.png')] bg-contain bg-no-repeat bg-bottom"></div>
            <div className="w-full h-full bg-[url('/assets/a3.png')] bg-contain bg-no-repeat bg-bottom"></div>
          </Carousel>
        </ParallaxLayer>

        {/* 4th section */}
        <ParallaxLayer
          offset={2}
          speed={0}
        />
        <ParallaxLayer
          offset={1.9}
          speed={-0.1}
          style={{
            padding: "96px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="font-montserrat font-extrabold text-3xl text-white pb-4">
            Since then, CvSU MOVE & KATROPA institutionalized & supported the
            university quest on VAW-free community...
          </h1>
        </ParallaxLayer>
        
        {/* 3rd section */}
        <ParallaxLayer
          offset={0.99}
          speed={0}
        />
        <ParallaxLayer
          offset={1}
          speed={-0.09}
          style={{
            padding: "96px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="font-montserrat font-extrabold text-3xl text-white pb-4">
            CVSU MOVE KATROPA WERE ESTABLISHED ON 2017
          </h1>
        </ParallaxLayer>

          {/* 2nd section */}
        <ParallaxLayer
          offset={0.999}
          speed={1}
          style={{ backgroundColor: "#1c0522", padding: "64px" }}
        >
          <h1 className="font-montserrat font-extrabold text-3xl text-white pb-4">
            The CVSU Move Katropa
          </h1>
          <p className="font-montserrat font-normal text-base xl:text-xl text-white">
            In a patriarchal society, where men dominate and rule our community,
            violence and abuses against women and girls are rampant. Undeniably,
            the masculinity ideology as part of our people&apos;s attitude may
            cause gender-based violence and other practices of gender
            discrimination. In these changing times, it is necessary to use the
            power of men and boys in ending different forms of violence and
            criminalities. <br></br>
            <br></br> In the Philippines, the violence against women may be one
            of the first crimes against a person because of their gender.
            Despite of the government initiatives and efforts to stop all forms
            of violence against women, reported cases of VAW is still
            increasing. Likewise, gender-based violence remains pervasive
            despite of the passage of laws and policies such as RA 9262:
            (Anti-Violence Against and Women and Children Law), RA 9710 (Magna
            Carta of Women), the amended RA 8353 (Anti Rape Law), RA 7877
            (Anti-Sexual Harassment Act) and the recent RA 11313 (Safe Spaces
            Law). <br></br>
            <br></br> In the 2017 report of the National Demographic Health
            Survey (NDHS), one (1) in four (4) married women aged 15 to 49 have
            experienced spousal violence (this act includes physical, sexual, or
            emotional violence) by their most recent and or current partners.
            The report also shows the only one of three women who experience
            sexual and physical abuses asked help, the most common source of
            assistance was not directed to the law enforcing authorities but
            with victim&apos;s own family (65%) and trusted friends (18%). In
            these reported cases, 41% of victims never sought help or even told
            to anyone. Moreover, 11% of women justified that a husband is
            beating his spouse for any of these causes: neglects children, going
            out without husband&apos;s permission, argues with him, burns food,
            and refusal to have sex
          </p>
        </ParallaxLayer>
        {/* Footer */}
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ backgroundImage: "url(/assets/dd.png)", backgroundSize: "contain",
          backgroundPosition: "center", }}
        />
      </Parallax>
    </div>
  );
}
