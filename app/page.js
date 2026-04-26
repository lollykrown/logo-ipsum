import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";


export default function Home() {
  return (
    <main className="w-full items-center justify-between mt-16 bg-white dark:bg-black sm:items-start">
    {/* Hero */}
    <section
      style={{ backgroundImage: `url(/bg.png)` }}
      className="h-screen bg-cover bg-center border-b-8 border-b-solid border-b-slate-400"
    >
      <div className="w-full h-full ">
        <div className="bg-(--color-bg)/70 h-3/5 flex flex-col justify-stretch items-start pt-24">
          <div className="text-white px-8 md:ps-20">
            <div className="w-8 bg-(--color-yellow-dark) h-1 rounded"></div>
            <h1 className="text-5xl font-serif font-extrabold py-3">Everything All At Once</h1>
            <p className="mt-2 mb-8 md:mb-14">Synergism. Metamorph. Alliance.</p>
            <button className="bg-(--color-yellow) p-3 text-xs text-black mb-8 ">CHECK OUR PARTNERS</button>
          </div>
          <div className="grid grid-cols-3 mt-auto w-full">
            <div className="bg-(--color-yellow) p-6 flex items-center justify-between">
              <p className="font-semibold ">Insights Today</p>
              <FaArrowRightLong />
            </div>
            <div className="bg-(--color-yellow-dark) p-6 flex items-center">
              <p className="font-semibold ">Digital Transformation and RPA </p>
            </div>
            <div className="bg-(--color-yellow-darker) p-6 flex items-center">
              <p className="font-semibold">Intelligent Automation</p>
            </div>
          </div>
        </div>
        <div className="bg-(--color-bg)/90 h-2/5">
          <div className="grid grid-cols-2 grid-rows-2 mt-auto h-full text-white">
            <div className="p-6 border-[0.5px] border-gray-400 flex flex-col justify-center px-8 md:px-12">
              <p className="text-3xl font-bold">Audit and Assurance</p>
              <div className="w-9 bg-(--color-yellow-darker) rounded h-1 mt-1"></div>
            </div>
            <div className="p-6 border-[0.5px] border-gray-400 flex flex-col justify-center px-8 md:px-12">
              <p className="text-3xl font-bold">Advisory</p>
              <div className="w-9 bg-(--color-yellow-darker) rounded h-1 mt-1"></div>
            </div>
            <div className="p-6 border-[0.5px] border-gray-400 flex flex-col justify-center px-8 md:px-12">
              <p className="text-3xl font-bold">Tax and Compliance</p>
              <div className="w-9 bg-(--color-yellow-darker) rounded h-1 mt-1"></div>
            </div>
            <div className="p-6 border-[0.5px] border-gray-400 flex flex-col justify-center px-8 md:px-12">
              <p className="text-3xl font-bold">Outsourcing and Managed Services</p>
              <div className="w-9 bg-(--color-yellow-darker) rounded h-1 mt-1"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section className="grid grid-cols-8">
      <div className="bg-(--color-yellow) col-span-8 md:col-span-3 py-18 px-8">
        <div>
          <h4 className="font-bold text-xl mb-2">Integrity</h4>
          <p>Practicing honesty and showing a consistent and uncompromising adherence to strong moral 
            and ethical principles and values.</p>
        </div>
        <div className="mt-9">
          <h4 className="font-bold text-xl mb-2">Professionalism</h4>
          <p>Practicing honesty and showing a consistent and uncompromising adherence to strong moral 
            and ethical principles and values.</p>
        </div>
        <div className="mt-9">
          <h4 className="font-bold text-xl mb-2">Ethics</h4>
          <p>Practicing honesty and showing a consistent and uncompromising adherence to strong moral 
            and ethical principles and values.</p>
        </div>
      </div>
      <div className="bg-white col-span-8 md:col-span-5 ">
        <div className="py-20 px-10">
          <h4 className="font-bold text-3xl mb-2">Delivering lasting results making difference</h4>
          <div className="w-8 bg-(--color-yellow-dark) h-1 rounded"></div>
          <div className="flex gap-4 mt-12">
            <p className="flex-1 widest leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. </p>
            <p className="flex-1 widest leading-8">Vivamus arcu felis bibendum ut tristique et. Diam in arcu cursus euismod quis. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Orci porta non pulvinar neque laoreet suspendisse interdum. Pharetra convallis posuere morbi leo. Faucibus ornare suspendisse sed nisi lacus sed.</p>
          </div>
        </div>
        <div className="bg-(--color-blue-dark) text-white flex items-center gap-12 py-8 px-10 font-bold">
          <p>Get to know us more</p>
          <FaArrowRightLong />
        </div>
      </div>
    </section>
    <section>
      <div  style={{ backgroundImage: `url(/bg-2.png)` }}
        className="h-[80vh] bg-cover bg-center text-white">
        <div className="bg-(--color-bg)/40 h-full ">
        <div className="flex flex-col justify-center items-start h-full md:max-w-xl lg:max-w-3xl px-8">
          <ImQuotesLeft className="w-10 h-10 text-white "/>
          <h2 className="text-4xl font-bold capitalize font-serif italic ms-12">We've been providing quality solutions for over 20 years</h2>
          <ImQuotesRight className="w-10 h-10 ml-auto -mt-4 text-white"/>
          <p className="font-bold self-end">Mr. Mario Dela Cruz</p>
          <p className="italic self-end">Managing Partner</p>
        </div>
        </div>
      </div>
      <div className="bg-(--color-blue-dark) text-white text-xl flex items-center gap-12 py-8 px-10 font-bold">
          <p>Our Leaderships</p>
          <FaArrowRightLong />
      </div>
    </section>
    <section>
      <div className="px-12 py-6">
        <p className="font-bold text-xl">Featured Topics</p>
      </div>
      <div className="bg-(--color-yellow) grid grid-cols-9 pb-6">
        <div className="col-span-9 md:col-span-3">
          <div className="relative w-full h-[250]">
          <Image src='/bg5.png' alt='business' fill className="" />
          </div>
          <div className="p-6">
            <p className="text-xs">August 20, 2022</p>
            <p className="font-bold text-xl my-3">Reaching your full cloud potential</p>
            <p className="">The cloud is not a tactic; it is a strategic tool. In this article, PwC experts outline seven mission-critical factors for changing your approach. </p>
            <p className="font-bold md:-mb-8 mt-12">Read More</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/bg9.png)` }}
          className=" bg-cover bg-center col-span-9 md:col-span-3 min-h-120"
        >
          <div className="bg-[#412f05]/50 h-full p-8 flex flex-col justify-end text-white">
            <p className="text-xs text-gray-100">August 21, 2022</p>
            <p className="font-bold">Accounting Automation Transforming Business Solutions</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/bg6.png)` }}
          className=" bg-cover bg-center col-span-9 md:col-span-3 min-h-120"
        >
          <div className="bg-[#412f05]/40 h-full p-8 flex flex-col justify-end text-white">
            <p className="text-xs text-gray-100">August 21, 2022</p>
            <p className="font-bold">Estavillo and Company CPAs to Asia Top 30</p>
          </div>
        </div>
      </div>
      <div className="bg-(--color-yellow) grid grid-cols-9 pb-6">
        <div
          style={{ backgroundImage: `url(/bg4.png)` }}
          className=" bg-cover bg-center col-span-9 md:col-span-3 min-h-120"
        >
          <div className="bg-[#412f05]/50 h-full p-8 flex flex-col justify-end text-white">
            <p className="text-xs text-gray-100">August 21, 2022</p>
            <p className="font-bold">Local Government focusing on nation’s greener and healthier lifestyle</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/bg3.png)` }}
          className=" bg-cover bg-center col-span-9 md:col-span-3 min-h-120"
        >
          <div className="bg-[#412f05]/50 h-full p-8 flex flex-col justify-end text-white">
            <p className="text-xs text-gray-100">August 21, 2022</p>
            <p className="font-bold">Focusing on teamwork for exponential business growth</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/bg7.png)` }}
          className=" bg-cover bg-center col-span-9 md:col-span-3 min-h-120"
        >
          <div className="bg-[#412f05]/50 h-full p-8 flex flex-col justify-end text-white">
            <p className="text-xs text-gray-100">August 21, 2022</p>
            <p className="font-bold">The future of cybersecurity</p>
          </div>
        </div>
      </div>

    </section>
    <section>
      <div className="bg-(--color-blue-dark) text-white text-xl flex flex-col items-center gap-2 py-8 px-10 font-bold">
        <p>Our Business Technology Partners and Toolkits</p>
        <div className="w-8 bg-(--color-yellow-darker) h-1 rounded"></div>
      </div>
      <div className="bg-white grid grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div
            key={i}
            className="relative aspect-square flex items-center justify-center p-6 object-contain hover:scale-105 transition-all duration-300"
          >
            <Image
              src={`/logo${i + 1}.png`}
              fill
              alt={`logo${i + 1}`}
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
    <section >
      <div className="bg-[#2A2A2A] text-white text-xl flex flex-col items-start gap-2 py-8 px-10 ">
        <p className="font-bold">How can we help you?</p>
        <p className="">Get in touch with us or our visit us in our office.</p>
        <div className="w-8 bg-(--color-yellow-darker) h-1 rounded"></div>
      </div>
      <div className="relative bg-(--color-blue) pb-16">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.119026633373!2d-1.397605323172066!3d54.90083307278075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e6682f83fdcdd%3A0xb0b32e423cea2013!2s16%20Elmwood%20St%2C%20Sunderland%20SR2%207JJ!5e0!3m2!1sen!2suk!4v1777235330049!5m2!1sen!2suk" 
        className="w-full h-100" allowFullScreen="" loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div style={{ backgroundImage: `url(/bg11.png)` }} className="h-100 mt-4 bg-cover bg-center ">
        <div className="bg-[#412f05]/40  h-full "> </div>
        </div>
        <div className="bg-(--color-yellow) py-8 px-12 absolute top-1/2 left-0 -translate-y-1/2 md:min-w-xl xl:min-w-2xl">
          <h4 className="text-xl font-bold">Visit Us</h4>
          <div className="w-8 bg-black h-0.5 rounded my-4"></div>
          <div className="flex gap-4 items-center">
            <IoLocationSharp className="w-6 h-6"/>
            <p>1111 Chambers St., New York City USA</p>
          </div>
          <h4 className="text-xl font-bold mt-12">Contact Us</h4>
          <div className="w-8 bg-black h-0.5 rounded my-6"></div>
          <form className="flex flex-col ">
            <div className="grid grid-cols-2 gap-3 mt-3">
              <input type="text" placeholder="Name" 
              className="bg-white text-xs px-3 py-2 col-span-2 md:col-span-1"/>
              <input type="text" placeholder="Email" 
              className="bg-white text-xs px-3 py-2 col-span-2 md:col-span-1"/>
            </div>
            <textarea type="text" placeholder="Message" 
            className="bg-white text-xs px-3 py-2 mt-6 w-full" rows="5"/>
            <button className="self-end border-2 px-3 py-2 text-xs mt-6 hover:scale-105">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>

    </main>
  );
}
