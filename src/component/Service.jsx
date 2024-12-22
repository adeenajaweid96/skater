import React from "react";
import image1 from "../assets/img_1.jpg.webp";
import image2 from "../assets/img_2.jpg.webp";

const Service = () => {
  return (
    <div className="bg-[#222222] w-[100%] h-[100vh] ">
      <h2 className="text-[#F1601E] text-5xl font-semibold pt-20 pb-6 flex justify-center items-center text-center">
        SERVICES
      </h2>
      <p className="text-gray-500  text-center text-xl ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet natus
        reiciendis <br />
        reprehenderit repellendus architecto, sapiente adipisci dolore aliquam
        velit
      </p>

      <div className="flex flex-wrap">
        <img src={image1} alt="half-image" className="flex justify-center items-center w-[40%] h-[20%] " />

        <h1>My Best Performance</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit. Ducimus id dignissimos nemo
          <br /> minus perspiciatis ullam itaque voluptas iure
          <br /> vero, nesciunt unde odit aspernatur distinctio,
          <br /> maiores facere officiis. Cum, esse, iusto?
          <br /> <br/>
          Minus perspiciatis ullam itaque voluptas iure<br/> vero, nesciunt unde odit
          aspernatur distinctio,<br/> maiores facere officiis. Cum, esse, iusto?<br/><br/><br/>
        </p>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
  );
};

export default Service;
