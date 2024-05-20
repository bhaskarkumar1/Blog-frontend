import React from "react";
import Navbar from "../Components/Navbar/Navbar";
const About = ({t,setT}) => {
  return (
    <>
         <Navbar t={t}  setT={setT}/>
      <div style={{"height":"87vh", "display":"flex","justifyContent":"center","alignItem":"center" ,    "background": "radial-gradient(#F7C566, #fff)"
}}>
        <div style={{"width":"65%", "textAlign":"center", "marginTop":"100px"}}>
        <h1>About Us</h1>
        <p style={{"marginTop":"8%", "fontWeight":"550","wordSpacing":"5px","lineHeight":"1.7"}}>
          Welcome to Blog, where stories thrive. We're a
          vibrant community of writers, thinkers, and creators united by our
          love for storytelling. At Blog, we're all about
          amplifying diverse voices. Whether you're an experienced writer or
          just starting out, you'll find a home here to share your stories and
          ideas with the world. Our blog covers a wide range of topics, from
          personal reflections to thought-provoking analysis, spanning
          literature, culture, politics, tech, and lifestyle. But more than just
          a platform, we're a tight-knit community. Connect with fellow writers,
          engage in enriching discussions, and discover new perspectives. Thank
          you for being a part of our journey. Let's inspire and make a
          difference, one story at a time.{" "}
        </p>
        </div>
      </div>
    </>
  );
};

export default About;
