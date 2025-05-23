import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import aboutimg from "../assets/aboutus.png";
import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";
// import dev3 from "../assets/dev3.jpg";
import CreateEarnHome from "../components/home/CreateEarnHome";

const AboutUs = () => {
  const devs = [
    {
      id: 1,
      src: dev1,
      name: "Uday Bari",
      skill: "MERN Stack Developer",
      link1: "https://www.linkedin.com/in/uday-bari-324hu",
      link2: "https://github.com/Udaybari-Dev",
    },
    {
      id: 2,
      src: dev2,
      name: "Kinshuk Singhal",
      skill: "BackEnd Developer",
      link1: "https://www.linkedin.com/in/kinshuk-singhal-3432b6238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://github.com/KinshukSinghal",
    },
    // {
    //   id: 3,
    //   src: dev3,
    //   name: "Hassaan Ali",
    //   skill: "Frontend Developer",
    //   link1: "https://www.linkedin.com/in/hassaanvfx/",
    //   link2: "https://github.com/hassaancode",
    // },
  ];

  return (
    <>
      <div className="text-white flex items-center justify-center flex-col h-[280px] bg-cover bg-hero-img">
        <h1 id="home" className="text-center font-bold text-3xl">
          About Us
        </h1>
        <div className="flex gap-2 font-medium pt-2">
          <Link
            to={"/"}
            className=" no-underline hover:text-theme-color transition-all"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-theme-color">About Us</span>
        </div>
      </div>
      {/* About US PARENT */}
      <div className="text-white flex flex-col gap-20 pt-20 px-6 lg:px-11 ">
        {/* ABOUT US Section */}
        <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
          <img className="min-w-48 " src={aboutimg} alt="aboutusimage" />
          <div className="flex flex-col gap-4 lg:min-w-[50%] lg:w-1/2">
            <div className="mb-4">
              <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
                About Us
              </span>
              <h2 className="mt-2 text-4xl font-medium">
              The Ultimate Auction Hub — Bid, Buy, and Sell Anything, Anytime with E-bidX
              </h2>
            </div>
            <div className="text-body-text-color">
              <p className="mb-2">
              We are an online auction platform focused on unique digital assets. Here, artists, designers, and creators 
              worldwide connect to buy, sell, and discover outstanding digital works in a vibrant bidding space.
              </p>
              <p className="mb-2">
              Looking for the perfect stock video to enhance your project? Or a unique logo to kickstart your brand? Our growing 
              library offers a vast range of fonts, graphics, 3D models, sound effects, and more – all available through exciting live auctions.
              </p>
              <p>
              Join as a seller and display your creativity! Sell your work and 
              engage with a global community eager to power their visions with your creative flair.
              </p>
            </div>
          </div>
        </div>
        {/* OUR TEAM SECTION*/}
        <div className="m-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
              Our Team
            </span>
            <h2 className="mt-2 text-4xl font-medium">Meet With Our Experts</h2>
          </div>
          <div className=" grid  md:grid-cols-3 items-center justify-center gap-5 max-w-[1500px]">
            {/* dev component */}
            {devs.map(({ id, src, name, skill, link1, link2 }) => (
              <div
                key={id}
                className="border border-border-info-color bg-theme-bg p-5 flex flex-col items-center gap-3 text-center rounded-[20px]"
              >
                <div className="rounded-[20px] overflow-hidden">
                  <img
                    className="rounded-[20px] hover:scale-105 transition-all duration-300"
                    src={src}
                    alt="creatorimg"
                  />
                </div>
                <div>
                  <span className="text-xl font-medium">{name}</span>
                  <br />
                  <span className="text-body-text-color">{skill}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    className="rounded-full bg-theme-color p-2 hover:bg-hover transition-all duration-300"
                    href={link2}
                    target="_blank"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    className="rounded-full bg-theme-color p-2 hover:bg-hover transition-all duration-300"
                    href={link1}
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[1500px] m-auto">
          <div className="mb-10 text-center">
            <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
              Process
            </span>
            <h2 className="mt-2 text-4xl font-medium">
              Create And Sell{" "}
              <span className="text-color-primary">Your Products</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 m-auto gap-5   w-full  md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col text-white gap-4 justify-start p-8 rounded-2xl bg-theme-bg ">
              <h2 className="text-5xl font-bold text-stroke">01</h2>
              <h3 className="text-2xl font-bold">Setup your Account</h3>
              <p className="text-body-text-color">
                Register for a free account and unlock the power to sell
                anything, anytime.
              </p>
            </div>
            <div className="flex flex-col text-white gap-4 justify-start p-8 rounded-2xl bg-theme-bg ">
              <h2 className="text-5xl font-bold text-stroke">02</h2>
              <h3 className="text-2xl font-bold">Create Your Auction</h3>
              <p className="text-body-text-color">
                Create a compelling listing that showcases your item and
                attracts potential buyers.
              </p>
            </div>
            <div className="flex flex-col text-white gap-4 justify-start p-8 rounded-2xl bg-theme-bg ">
              <h2 className="text-5xl font-bold text-stroke">03</h2>
              <h3 className="text-2xl font-bold">Add Starting Price for Bid</h3>
              <p className="text-body-text-color">
                Determine your starting bid and consider a reserve price for
                added control.
              </p>
            </div>
            <div className="flex flex-col text-white gap-4 justify-start p-8 rounded-2xl bg-theme-bg ">
              <h2 className="text-5xl font-bold text-stroke">04</h2>
              <h3 className="text-2xl font-bold">List Product for Sale</h3>
              <p className="text-body-text-color">
                Publish your Product and watch the bids come in, turning your
                unused items into revenue.
              </p>
            </div>
          </div>
        </div>
        <CreateEarnHome />
      </div>
    </>
  );
};

export default AboutUs;
