import React, {useState, useEffect} from "react";
import blobImage from "../assets/home-blob.svg"
import { Products, Partners, Hero, Contact, Footer } from "../components";
const Home = () => {
  // const [currentSection, setCurrentSection] = useState<number>(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const sectionHeight = window.innerHeight;
  //     console.log(scrollPosition);
  //     console.log(sectionHeight);

  //     // 현재 스크롤 위치에서 어떤 섹션인지 계산
  //     const newSection = Math.floor(scrollPosition / sectionHeight);
  //     console.log(newSection);

  //     setCurrentSection(newSection);
  //     console.log(currentSection);
  //   };

  //   // 스크롤 이벤트 리스너 등록
  //   window.addEventListener('scroll', handleScroll);

  //   // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return <div className="static w-screen">
    <Hero />
    <Products />
    <Partners />
    <Contact />
    <div style={{
      backgroundImage: `url(${blobImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "40%",
      width: '100%',
      height: '100%',
      }}
      className="absolute left-[-100px] top-[900px] -z-10"
    ></div>
    <div style={{
      backgroundImage: `url(${blobImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: '700px',
      height: '800px',
      transform: 'rotate(30deg)',
      }}
      className="absolute right-[-300px] top-[1800px] -z-10"
    ></div>
    <div style={{
      backgroundImage: `url(${blobImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: '700px',
      height: '800px',
      }}
      className="absolute right-[-300px] top-[-300px] -z-10"
    ></div>
    <Footer />
  </div>;
};

export default Home;
