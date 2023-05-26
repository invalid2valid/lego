import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomeCatCard from "./HomeCatCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();
  const [loader, setLoader] = useState(true);
  const [category, setCategory] = useState("DC");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(
      `https://lego-bego-server-invalid2valid.vercel.app/alltoys/category?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
    console.log(category);
    setLoader(false);
  }, [category]);
  console.log(toys);
  return (
    <div className="m-2">
      <h1 className="m-5 text-center font-bold text-4xl text-[#212A3E]">
        The <span className="line-through text-[#9BA4B5] ">Lego</span> War Begin
        Here
      </h1>
      {/* carosol */}
      <div className="carousel w-full h-[500px] rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://www.lego.com/cdn/cs/catalog/assets/bltd8b1088f0b42425b/1/AID900588GL_LSW_Theme_Banner_Wide_2275x732.jpg?format=webply"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.lego.com/cdn/cs/catalog/assets/blt1b1e9221605d5394/1/Theme-Banner-Wide-Low.jpg?format=webply"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.lego.com/cdn/cs/catalog/assets/blt75aa533853a85468/1/AID2300135C4GL_Theme_Banner_Wide_2275x732.jpg?format=webply"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://www.lego.com/cdn/cs/catalog/assets/blt38d72975e4624775/1/AID2201479C4GL_HarryPotter_Group_Theme_Banner_Wide_2745x732.jpg?format=webply"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* React TAb */}
      <div className="my-20">
        <h1 className="m-5 text-center font-bold text-4xl text-[#212A3E] underline">
          Category
        </h1>
        <Tabs>
          <TabList className={"font-semibold text-lg"}>
            <Tab onClick={() => setCategory("DC")}>DC</Tab>
            <Tab onClick={() => setCategory("Star Wars")}> Star Wars</Tab>
            <Tab onClick={() => setCategory("Avatar")}>Avatar</Tab>
          </TabList>

          <TabPanel>
            <h2 className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {toys.map((t) => (
                <HomeCatCard key={t._id} toy={t}></HomeCatCard>
              ))}
            </h2>
          </TabPanel>
          <TabPanel>
            <h2 className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {toys.map((t) => (
                <HomeCatCard key={t._id} toy={t}></HomeCatCard>
              ))}
            </h2>
          </TabPanel>
          <TabPanel>
            <h2 className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {toys.map((t) => (
                <HomeCatCard key={t._id} toy={t}></HomeCatCard>
              ))}
            </h2>
          </TabPanel>
        </Tabs>
      </div>
      {/* gallery section */}
      <div className=" mt-20 mb-5  text-center  text-[#212A3E]">
        <h1 className="mt-10 font-bold text-4xl">Photo Gallery</h1>
        <p>Explore the World of LEGO</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center my-10">
          <img
            data-aos="flip-up"
            className=" hover:shadow-2xl rounded-lg border-4 border-gray-600  shadow-lg object-cover h-[350px]"
            src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            data-aos="flip-down"
            className=" hover:shadow-2xl rounded-lg border-4 border-gray-600  shadow-lg object-cover md:w-full h-[350px] lg:col-span-2"
            src="https://images.unsplash.com/photo-1577113398331-d843d3341a63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          {/* <img
            className=" hover:shadow-2xl rounded-lg border-4 border-gray-600  shadow-lg object-cover h-[350px]"
            src="https://images.unsplash.com/photo-1505322033502-1f4385692e6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          /> */}
          <img
            data-aos="flip-up"
            className=" hover:shadow-2xl rounded-lg border-4 border-gray-600  shadow-lg object-cover h-[350px] md:w-full lg:col-span-2"
            src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <img
            data-aos="flip-down"
            className=" hover:shadow-2xl rounded-lg border-4 border-gray-600  shadow-lg object-cover h-[350px]"
            src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          {/* <img
            className=" hover:shadow-2xl rounded-lg border-4 border-gray-600  shadow-lg object-cover h-[350px]"
            src="https://images.unsplash.com/photo-1575470522418-b88b692b8084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          /> */}
        </div>
      </div>

      {/* why LOGO game is important */}
      <h1 className="mt-20 m-5 text-center font-bold text-4xl text-[#212A3E]">
        Why Lego is important!?
      </h1>
      <div>
        <p className="text-justify">
          Lego games are important for children because they offer numerous
          benefits to their overall development. Here are some reasons why Lego
          games are considered valuable for children: <br /> Creativity and
          Imagination: Lego games encourage children to use their creativity and
          imagination. By building and creating different structures using Lego
          bricks, children can explore their imagination and develop their
          creative thinking skills. <br /> <br />
          Problem-Solving Skills: Lego games require children to plan, design,
          and solve problems. They need to think critically and use logical
          reasoning to overcome challenges while constructing with Lego bricks.
          This helps develop their problem-solving and analytical skills. <br />{" "}
          <br />
          Fine Motor Skills: Playing with Lego bricks involves manipulating and
          assembling small pieces, which helps children develop their fine motor
          skills. The precise movements required to connect and detach Lego
          pieces enhance their hand-eye coordination and dexterity. <br />{" "}
          <br />
          Spatial Awareness and Geometry: Building with Lego involves
          understanding spatial relationships and concepts of geometry. Children
          learn about shapes, sizes, symmetry, and proportions while
          constructing various structures, improving their spatial awareness and
          mathematical understanding. <br /> <br />
          Collaboration and Communication: Lego games can promote teamwork,
          collaboration, and communication skills when children play together.
          They learn to share ideas, work together towards a common goal, and
          express their thoughts and opinions, fostering social interactions and
          cooperation. <br /> <br />
          Persistence and Resilience: Constructing complex Lego structures
          requires patience, persistence, and the ability to deal with setbacks.
          Children learn to overcome challenges, experiment with different
          solutions, and develop resilience by not giving up easily.{" "}
        </p>
        <p className="text-right my-10 italic font-semibold">
          Lego games provide a fun and educational platform for children to
          develop various skills, stimulate their creativity, and enhance their
          cognitive abilities.
        </p>
      </div>
      <div>
        <h1 className="mt-20 m-5 text-center font-bold text-4xl text-[#212A3E]">
          Promo Video:
        </h1>

        <div className="flex flex-col items-center justify-center rounded-2xl">
          <iframe
            data-aos="zoom-in"
            className=" w-full md:w-1/2 h-[200px] border-4 border-gray-700 md:h-[400px] rounded-2xl"
            src="https://www.youtube.com/embed/y9Y5ZvC-MHg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center my-10  font-semibold" data-aos="zoom-in">
            Lego games provide a fun and educational platform for children to
            develop various skills, stimulate their creativity, and enhance
            their cognitive abilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
