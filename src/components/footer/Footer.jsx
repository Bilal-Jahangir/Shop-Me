import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const footerLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "blog",
    link: "/#blog",
  },
];
function Footer() {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3
                flex items-center gap-1"
            >
              <FiShoppingBag size="30" />
              SHOP ME
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure aut
              maiores exercitationem, ipsa quis neque molestiae fugit corporis
              ipsum minima ducimus minus quos pariatur enim excepturi officia
              voluptate quaerat. Quibusdam, aliquam eum?
            </p>
          </div>
          <div className="py-8 px-4">
            <h1 className="sm-text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Important Links
            </h1>
            <ul className="flex flex-col gap-3">
              {/* loops for footer important links */}
              {footerLinks.map((data) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  key={data.title}
                >
                  {data.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="py-8 px-4">
              <h1 className="sm-text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                {/* loop for footer links */}
                {footerLinks.map((data) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={data.title}
                  >
                    {data.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 mt-6 ">
            <a href="#">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="#">
              <FaFacebook className="text-3xl" />
            </a>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <FaMapLocationDot />
              <p>Karachi, Pakistan</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <IoCall />
              <p>+92-123-1234</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
