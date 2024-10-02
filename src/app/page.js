"use client"
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Page = () => {
  useEffect(() => {
    const img = document.getElementsByClassName("bg-img")[0];
    const box1 = document.getElementsByClassName("blur-1")[0]
    const box2 = document.getElementsByClassName("blur-2")[0]

    const forCircleSize = () => {
      if (window.innerWidth < 400) return 120;
      if (window.innerWidth < 1024) return 150;

      return 200
    }

    window.addEventListener("scroll", () => {
      const current = window.scrollY;
      const circleSize = forCircleSize()
      img.style.clipPath = `circle(${circleSize + current}px at bottom)`
      img.style.opacity = Math.min(1, 0.3 + (current / 1000) * 0.8);
      box1.style.opacity = 0.7 - (current / 1000)
      box2.style.opacity = 0.7 - (current / 1000)
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HOME */}
      <div className="home w-[100vw] h-[100vh] text-[#ead1b3] overflow-hidden relative">
        <img src="./bg-1.jpg" alt="bg" class="bg-img" />

        <nav>
          <ul className="flex justify-evenly  gap-3  items-center  text-sm py-5 px-10 font-semibold tracking-widest md:justify-between md:gap-10 md:text-base">
            <li className=" hover:border-[#7a6b57] hover:border-[1px] hover:rounded-full px-3 py-2 hover:shadow-sm hover:shadow-[#ffe2c08c]">
              <a href="#contact">Contact</a>
            </li>
            <li className="h-[1px] bg-[#42464d] w-1/2"></li>
            <li className="text-xl md:text-4xl">Eatofy</li>
            <li className="h-[1px] bg-[#42464d] w-1/2"></li>
            <li className="hover:border-[#7a6b57] hover:border-[1px] hover:rounded-full px-3 py-2 hover:shadow-sm hover:shadow-[#ffe2c08c]">
              <a href="#service">Service</a>
            </li>
          </ul>
        </nav>
        <div className="justify-center items-center flex-col flex lg:flex my-3 xl:mt-0 " >
          <div className="w-[1px] h-20 bg-[#42464d]"></div>
          <div className="w-5 h-5 border-2 rounded-full border-[#42464d]"></div>
        </div>
        <div className="header flex flex-col gap-10 justify-center items-center text-center ">
          <h1 className="text-5xl w-[90%] sm:text-6xl sm:w-1/2 xl:w-1/3 xl:text-[5rem] ">
            Powering all the ways you do Business
          </h1>
          <p className="text-[#9a9486] w-[90%] leading-relaxed lg:w-1/3 font-semibold text- ">
            Work smarter, automate for efficiency, and open up new revenue
            streams on the software and hardware platform millions of business
            trust.
          </p>
          <button className="flex justify-center items-center px-10 py-3 border-[#d5bfa6] font-semibold border-2 rounded-full tracking-widest hover:bg-[#660033]">
            Book a Demo
          </button>
        </div>
        <div className="md:flex justify-center items-center flex-col  my-3 sm:mt-10 hidden  xl:hidden " >
          <div className="w-[1px] h-20 bg-[#42464d]"></div>
          <div className="w-5 h-5 border-2 rounded-full border-[#42464d]"></div>
        </div>
        <div className="blur-effect">
          <div className="blur-1 absolute -bottom-0 xl:-bottom-80 hidden xl:block -left-10 w-[700px] rounded-full h-[500px] blur-3xl bg-[#aa314a] xl:-left-52 2xl:w-[800px]"></div>
          <div className="blur-2 absolute -bottom-80 -right-10 w-[500px] xl:w-[700px] rounded-full xl:h-[500px] blur-3xl bg-[#267d7c] xl:-right-52 2xl:w-[800px]"></div>
        </div>
      </div>

      {/* empty box */}
      <div className="w-[100vw] h-[100vh]  bg-[#131f30] "></div>

      {/* About */}
      <div className="about w-[100vw] h-auto  bg-[#131f30] text-[#ead1b3] py-28 relative">
        <div className="flex  flex-col xl:flex-row gap-10  justify-center items-center mx-auto w-[80%]">
          <div className="about-detail flex items-start gap-5 md:gap-10 flex-col text-start">

            <div className="headline flex justify-center items-center gap-3">
              <div className="flex justify-center items-center">
                <div className="h-[1px] w-5 bg-[#42464d]"></div>
                <div className="h-3 w-3 border-[#42464d] border-2 rounded-full"></div>
              </div>
              <h2 className="text-xl lg:text-2xl underline underline-offset-4">
                About Us
              </h2>
            </div>

            <h1 className=" text-3xl xl:w-1/2 xl:text-7xl fade-in-text ">
              Simplifying Restaurant Management
            </h1>
            <p className="xl:w-9/12 fade-in-text">
              Eatofy is a smart, user-friendly POS system designed to streamline
              restaurant operations. From order tracking to inventory management
              and analytics, Eatofy helps you run your business efficiently.
              Whether you manage a small café or a large chain, our flexible
              platform empowers you to focus on delivering great customer
              experiences while reducing costs and saving time. Join the future
              of restaurant management with Eatofy!
            </p>
          </div>
          <div className="about-img order-1 relative ">
            <img
              src="./about-1.avif"
              alt="about"
              className=" w-[100vw] h-[30vh] sm:h-[40vh] md:w-[60vw] lg:h-[50vh]  object-cover object-center rounded-md hover:scale-105"
            />
            <img
              src="./about-2.jpg"
              alt="about"
              className="hidden bounce-in-text lg:absolute lg:block top-1/3 -left-10 w-[50vw] h-[30vw] xl:w-[20vw] xl:h-[40vh] object-cover object-center rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Service */}
      <div
        id="service"
        className="w-[100vw] text-[#ead1b3] py-28 overflow-hidden relative"
      >
        <div className="blur-effect -z-10">
          <div className="absolute -bottom-10 -right-10 w-1/3 rounded-full h-1/3 blur-3xl bg-[#267d7c] opacity-50"></div>
          <div className="absolute top-1/3 opacity-30 -left-10 w-1/3 rounded-full h-1/3 blur-3xl bg-[#9a9486] "></div>
        </div>
        <div className="service-list xl:w-[80%] mx-auto flex flex-col justify-center items-center  gap-10">

          <div className="headline -ml-10 flex justify-center items-center gap-3">
            <div className="flex justify-center items-center">
              <div className="h-[1px] w-5 bg-[#42464d]"></div>
              <div className="h-3 w-3 border-[#42464d] border-2 rounded-full"></div>
            </div>
            <h2 className="text-xl lg:text-2xl underline underline-offset-4">
              Service
            </h2>
          </div>

          <div className="service-2 flex flex-col justify-center items-center p-5 gap-5 md:flex-row lg:gap-10 ">
            <img
              src="./service-3.webp"
              alt="service"
              className="w-fit h-fit  hover:scale-105 transition sm:h-[50vh] md:w-[40vw]  object-contain rounded-2xl xl:w-1/3  xl:h-1/3"
            />
            <div className="fade-in-text flex flex-col justify-center items-start sm:text-center  sm:items-center gap-3">
              <h3 className="text-3xl md:text-4xl xl:text-7xl">
                Video Marketing
              </h3>
              <p className="text-[#9a9486] xl:w-1/2">
                Our Video Marketing service helps you create engaging video
                content to promote your brand, reach a wider audience, and drive
                conversions.
              </p>
            </div>
          </div>

          <div className="service-1 flex flex-col justify-center items-center p-5 gap-5 md:flex-row lg:gap-10 ">
            <img
              src="./service-1.avif"
              alt="service"
              className="md:order-2 w-fit h-fit hover:scale-105 transition sm:h-[40vh] md:w-[60vw]  object-contain rounded-2xl  xl:w-1/4 xl:h-1/4"
            />
            <div className="fade-in-text flex flex-col justify-center items-start sm:text-center  sm:items-center gap-3">
              <h3 className="text-3xl md:text-4xl xl:text-7xl">
                Order Management
              </h3>
              <p className="text-[#9a9486] xl:w-1/2">
                Our Order Management service streamlines the process of handling
                customer orders, from initial placement to final delivery,
                ensuring efficiency and accuracy.
              </p>
            </div>
          </div>

          <div className="service-3 flex flex-col justify-center items-center p-5 gap-5 md:flex-row lg:gap-10 ">
            <img
              src="./service-2.png"
              alt="service"
              className="w-fit h-fit border-2 hover:scale-105 transition border-[#ead1b3] p-5 sm:h-[40vh] md:w-[40vw]  object-contain rounded-2xl xl:w-1/3 xl:h-1/3"
            />
            <div className="fade-in-text flex flex-col justify-center items-start sm:text-center  sm:items-center gap-3">
              <h3 className="text-3xl md:text-4xl xl:text-7xl">
                Inventory Management
              </h3>
              <p className="text-[#9a9486] xl:w-1/2">
                Our Inventory Management service provides comprehensive tools to
                track and manage your inventory in real-time, ensuring optimal
                stock levels and minimizing losses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div
        id="features"
        className=" w-[100vw]  bg-[#131f30] text-[#ead1b3] py-28 relative "
      >
        <header className="info  text-[#ead1b3] h-auto   w-[80%] mx-auto">

          <div className="headline -ml-10 flex justify-center items-center gap-3">
            <div className="flex justify-center items-center">
              <div className="h-[1px] w-5 bg-[#42464d]"></div>
              <div className="h-3 w-3 border-[#42464d] border-2 rounded-full"></div>
            </div>
            <h2 className="text-xl lg:text-2xl underline underline-offset-4">
              Features
            </h2>
          </div>

          <section className="content flex justify-center flex-col md:flex-row gap-10 py-16 md:py-20 text-center">
            <article className="feature  flex  items-center flex-col gap-3">
              <h1 className="text-3xl xl:text-6xl fade-in-text">
                Kitchen Order Ticket
              </h1>
              <p className="xl:w-9/12 fade-in-text">
                Streamline orders with real-time ticket generation for kitchen
                staff, ensuring accuracy and speed during busy hours.
              </p>
            </article>
            <article className="feature flex items-center flex-col gap-3">
              <h1 className="text-3xl xl:text-6xl fade-in-text">
                Point Of Sale POS
              </h1>
              <p className="xl:w-9/12 fade-in-text">
                Efficiently manage sales transactions, process payments, and
                keep track of customer orders with our all-in-one POS system.
              </p>
            </article>
            <article className="feature flex flex-col  items-center gap-3">
              <h1 className="text-3xl xl:text-6xl fade-in-text">
                Report And Analysis
              </h1>
              <p className="xl:w-9/12 fade-in-text">
                Gain valuable insights into your business performance through
                detailed sales reports and data-driven analysis tools.
              </p>
            </article>
          </section>
        </header>
        <div className="w-[80%] mx-auto flex flex-col justify-center gap-10 items-center">
          <div className="projects w-[100vw] md:w-[60vw] xl:w-[40vw] rounded-md">
            <Carousel
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              interval={3000}
              transitionTime={1000}
              stopOnHover={false}
              infiniteLoop={true}
              className="rounded-2xl overflow-hidden"
            >
              <div>
                <h1 className="mb-3 font-semibold text-xl text-[#ead1b3] underline underline-offset-4">
                  Kitchen Order Ticket
                </h1>
                <img src="./feature-1.jpg" alt="feature" />
              </div>
              <div>
                <h1 className="mb-3 font-semibold text-xl text-[#ead1b3] underline underline-offset-4">
                  Point OF Sale (POS)
                </h1>
                <img src="./feature-2.jpg" alt="feature" />
              </div>
              <div>
                <h1 className="mb-3 font-semibold text-xl text-[#ead1b3] underline underline-offset-4">
                  Report And Analysis
                </h1>
                <img src="./feature-3.jpeg" alt="feature" />
              </div>
            </Carousel>
          </div>
          {/* Projects-end */}
        </div>
      </div>

      {/* Footer */}
      <div
        id="contact"
        className="info text-[#ead1b3] w-[100vw] relative overflow-hidden"
      >
        <div className="blur-effect">
          <div className="absolute -bottom-80 hidden xl:block opacity-35 -left-10 w-[700px] rounded-full h-[500px] blur-3xl bg-[#aa314a] "></div>
          <div className="absolute -bottom-80 opacity-35 -right-10 w-[700px] rounded-full h-[500px] blur-3xl bg-[#267d7c] "></div>
        </div>
        <div className="p-2 md:p-0">
          <section className="bg-[#0f1a28] text-[#ead1b3] px-3 lg:w-[80%]  lg:mx-auto h-auto py-20 mb-20 lg:my-32 flex justify-center items-center gap-10 flex-col rounded-xl">
            <div className="headline -ml-10 flex justify-center items-center gap-3">
              <div className="flex justify-center items-center">
                <div className="h-[1px] w-5 bg-[#42464d]"></div>
                <div className="h-3 w-3 border-[#42464d] border-2 rounded-full"></div>
              </div>
              <h2 className="text-xl lg:text-2xl underline underline-offset-4">
                Contact Us
              </h2>
            </div>
            <p className="text-3xl md:text-5xl lg:text-6xl text-center xl:text-7xl xl:w-[90%]">
              Get in touch with our team to clarify your queries
            </p>
            <div className="flex justify-center items-center gap-5 md:gap-10 flex-wrap ">
              <input
                type="email"
                id="email"
                placeholder="YOUR EMAIL.."
                className="placeholder:text-[#ead1b3] bg-slate-800 border-none  pl-5 py-2 pr-16 md:pr-20 rounded-full border-2 border-slate-600"
              />
              <div className="bg-red-400 hover:bg-[#ead1b3] text-[#ead1b3] hover:text-red-400 py-2 px-5 md:pr-20 text-center rounded-full">
                Join Us
              </div>
            </div>
          </section>
        </div>
        <div className="px-2 md:px-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl ml-5 mb-5 fade-in-text">Eatofy</h2>
          
          <footer className="flex justify-center items-center gap-10 text-slate-200 fade-in-text text-center">
            <div className="flex justify-center flex-wrap gap-10 md:flex-nowrap">
              <div className="flex flex-col justify-center items-center xl:justify-center xl:items-center gap-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/3">
                <h1 className="font-bold text-lg">About Us</h1>
                <p>
                  We are dedicated to providing the best restaurant management
                  solutions to streamline your operations and enhance your
                  customer experience.
                </p>
              </div>
              <div className="flex flex-col items-center gap-5 w-full md:w-1/3 xl:w-1/3">
                <h1 className="font-bold text-lg">Service</h1>
                <ul className="flex flex-col justify-center items-center gap-3">
                  <li>Order Management</li>
                  <li>Inventory Management</li>
                  <li>Video Marketing</li>
                </ul>
              </div>
              <div className="flex flex-col  items-center gap-5 w-full md:w-1/3 xl:w-1/3">
                <h1 className="font-bold text-lg">Conatact Us</h1>
                <ul className="flex flex-col justify-center items-center gap-3">
                  <li>Email:support@eatofy.com</li>
                  <li>Phone: +91 84199-99929</li>
                  <li>Address: 123 123 Restaurant St, Food City, FC 12345</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
        <div className="flex justify-center items-center my-20 ">
          <p className="text-white  bottom-5 px-5 text-center md:px-0 md:right-1/3">
            © 2024 Eatofy. All rights reserved. Developed by Appniche
            Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
