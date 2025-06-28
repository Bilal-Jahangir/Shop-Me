import img1 from "../../assets/shirt/shirt.png";
import img2 from "../../assets/shirt/shirt2.png";
import img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa6";

const productsData = [
  {
    id: 1,
    img: img1,
    title: "casual wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae inventore aliquam quae",
  },
  {
    id: 2,
    img: img2,
    title: "Printed Shirts",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae inventore aliquam quae",
  },
  {
    id: 3,
    img: img3,
    title: "Women Shirts",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae inventore aliquam quae",
  },
];
function TopProducts({ handleOrderPopUp }) {
  return (
    <div className="container">
      <div className="text-left mb-24">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Rated Products For You
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          exercitationem earum molestiae labore, praesentium nesciunt ut
          accusamus quia repellat aspernatur ad.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 mt-30 md:grid-cols-3
            gap-20 md:gap-5 place-items-center"
        >
          {
            // loops for products data
            productsData.map((data) => (
              <div
                key={data.id}
                data-aos="zoom-in"
                className="rounded-2xl text-center bg-white
                         dark:bg-gray-800 hover:bg-black/80 
                         dark:hover:bg-primary hover:text-white relatve shadow-xl
                         duration-300 group max-w-[300px]"
              >
                <div>
                  <img
                    src={data.img}
                    className="max-w-[140px] block mx-auto
                                transform -translate-y-20 group-hover:scale-105 duration-300 
                                drop-shadow-md"
                  />
                </div>
                <div
                  className="w-full flex items-center justify-center 
                            gap-1"
                >
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duartion-300 text-white py-1 px-4 
                                rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopUp}
                >
                  Order Now
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
