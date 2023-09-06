import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import Slider from "../Slider";
import SocialMediaSidebar from "../SocialMediaSidebar";
import Footer from "../Footer";
import SocialMediaIcons from "../SocialMediaIcons";
import VideoPlayer from "../VideoPlayer";
// import Header from "../Header";




export default function IndexPage() {
  return (
    <div>
      <div className="text-logo">
        <div className="text-4xl md:text-4xl text-logo text-center pt-4 pb-1 md:pb-4">
          JobNexus
        </div>
        <div className=" text-center text-3xl   pb-10">( WORK FROM HOME )</div>
        <div className=" text-center text-2xl   pb-10">
            <a href="#" className="text-gray-400 hover:text-hover_color">
              <i className="mx-2 hover:hover_color">Follow us on instagram to get the latest updates</i>
            </a>
        </div>
        <SocialMediaIcons/>

        <div className=" text-center text-2xl    pb-10">Join a Team that Inspires Greatness at JobNexus</div>

        {/* <!-- Customer Service Representative --> */}
        <div className="lg:px-[20%] flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between">
            <span className="md:w-3/4 sm:w-3/4 hover:underline">
              Customer Service Representative:
            </span>
            <Link
              to={"/apply/customer-service-representative"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4 rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>

        {/* <!-- Sales Representative --> */}
        <div className="lg:px-[20%] flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between">
            <span className="md:w-3/4 sm:w-3/4 hover:underline">
              English Tutor (class 5 to 8)
            </span>
            <Link
              to={"/apply/english-tutor"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4 rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>
        <div className="lg:px-[20%]  flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between ">
            <span className="md:w-3/4 sm:w-3/4 hover:underline ">
              Math Tutor (class 5 to 8)
            </span>
            <Link
              to={"/apply/math-tutor"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4  rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>
        <div className="lg:px-[20%]  flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between ">
            <span className="md:w-3/4 sm:w-3/4 hover:underline ">
              Science Tutor (class 5 to 8)
            </span>
            <Link
              to={"/apply/science-tutor"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4   rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>

        {/* <!-- Call Center Agent --> */}
        <div className="lg:px-[20%]  flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between ">
            <span className="md:w-3/4 sm:w-3/4 hover:underline ">
              Sales Representative :
            </span>
            <Link
              to={"/apply/sales-representative"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4  rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>

        {/* <!-- Copy writer --> */}
        <div className="lg:px-[20%] flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between">
            <span className="md:w-3/4 sm:w-3/4 hover:underline">
              CopyWriter:
            </span>
            <Link
              to={"/apply/copy-writer"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4 rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>

        {/* <!-- Customer Relationship Manager --> */}
        <div className="lg:px-[20%]  flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between ">
            <span className="md:w-3/4 sm:w-3/4 hover:underline ">
              Social Media Manager:
            </span>
            <Link
              to={"/apply/social-media-manager"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4  rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>
        {/* <!-- Market Researcher --> */}
        <div className="lg:px-[20%]  flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between ">
            <span className="md:w-3/4 sm:w-3/4 hover:underline ">
              Market Researcher:
            </span>
            <Link
              to={"/apply/market-researcher"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4  rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>

        {/* social media video editing  */}
        <div className="lg:px-[20%]  flex flex-col sm:flex-row md:flex-row items-center text-xl md:text-2xl mx-4 md:mx-10 text-left py-2 md:py-3 border-b">
          <div className="flex sm:flex-row items-center w-full justify-between ">
            <span className="md:w-3/4 sm:w-3/4 hover:underline ">
              Social Media Video editor:
            </span>
            <Link
              to={"/apply/video-editor"}
              className="sm:w-1/4 bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 md:w-1/4  rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
      <div>
        <SocialMediaSidebar/>
        <VideoPlayer/>
        <Slider/>
        <ContactForm />
        <Footer/>
      </div>
    </div>
  );
}
