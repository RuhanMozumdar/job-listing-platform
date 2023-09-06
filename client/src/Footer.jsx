
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 p-4">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-bold">Job<span className="text-yellow-400">Nexus</span></h3>
          <p className="mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-500">Home</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-blue-500">About</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-blue-500">Contact</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-blue-500">Blog</a>
          </p>
          <p className="text-sm mt-4">Copyright © 2023 <strong>JobNexus</strong> All rights reserved</p>
        </div>
        <div className="w-full md:w-1/4 mt-8 md:mt-0">
          <div className="flex items-center">
            <i className="fa fa-map-marker text-blue-500 text-2xl"></i>
            <p className="ml-2"><span>Bangalore</span> Karnataka</p>
          </div>

          <div className="flex items-center mt-4">
            <i className="fa fa-envelope text-blue-500 text-2xl"></i>
            <p className="ml-2"><a href="mailto:jobnexus123@gmail.com" className="text-gray-400 hover:text-blue-500">jobnexus123@gmail.com</a></p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <p className="text-gray-400">About the company</p>
          <p className="mt-4">Our company is a dynamic and innovative job placement firm, dedicated to connecting top talent with leading organizations. We prioritize skillful matchmaking to ensure both employers and job seekers find the perfect fit. Join us to unlock your career potential or meet your hiring needs with confidence.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-facebook fa-lg mx-2"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-twitter fa-lg mx-2"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-instagram fa-lg mx-2"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
