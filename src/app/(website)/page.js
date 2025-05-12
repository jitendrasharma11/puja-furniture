import React from "react";
import TopSlider from "./home-page-components/TopSlider";
import Card from "./home-page-components/Card";
import ReviewSlide from "./about/ReviewSection/ReviewSlide";
import BestSelling from "./home-page-components/BestSelling";
import KeysCard from "./home-page-components/KeysCard";
import Tab from "./home-page-components/Tab";



export default function Home() {
  return (
    <>
     <TopSlider/>
     <Card/>
     <BestSelling/>
     <Tab/>
     <KeysCard/>
     <ReviewSlide/>
     
    </>
  );
}