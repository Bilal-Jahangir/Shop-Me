import Slider from "react-slick";

const testimonialsData = [
  {
    id: 1,
    name: "Elon Musk",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil sequi. Voluptatem maxime rerum, animi nam debitis, quam ipsum consectetur suscipit earum, culpa tempore possimus! Ullam consectetur illo est unde!",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "Bill Gates",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil sequi. Voluptatem maxime rerum, animi nam debitis, quam ipsum consectetur suscipit earum, culpa tempore possimus! Ullam consectetur illo est unde!",
    img: "https://picsum.photos/200/300/?blur",
  },
  {
    id: 3,
    name: "Jack Ma",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil sequi. Voluptatem maxime rerum, animi nam debitis, quam ipsum consectetur suscipit earum, culpa tempore possimus! Ullam consectetur illo est unde!",
    img: "https://picsum.photos/200/300.jpg",
  },
  {
    id: 4,
    name: "Jeff Bezoz",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil sequi. Voluptatem maxime rerum, animi nam debitis, quam ipsum consectetur suscipit earum, culpa tempore possimus! Ullam consectetur illo est unde!",
    img: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 5,
    name: "Larry Page",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, nihil sequi. Voluptatem maxime rerum, animi nam debitis, quam ipsum consectetur suscipit earum, culpa tempore possimus! Ullam consectetur illo est unde!",
    img: "https://picsum.photos/200",
  },
];

function Testimoinals() {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slideToscroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoints: 10000,
        settings: {
          slideToShow: 3,
          slideToscroll: 1,
          infinite: true,
        },
      },
      {
        breakpoints: 1024,
        settings: {
          slideToShow: 2,
          slideToscroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoints: 640,
        settings: {
          slideToShow: 1,
          slideToscroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Our Customer Reviews
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            exercitationem. Repellat tempora, corporis soluta odit optio
            corrupti quisquam, maxime saepe cupiditate provident reiciendis
            debitis minima cum. Numquam rem modi adipisci et voluptatibus.
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg
                        py-8 px-6 rounded-xl bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img src={data.img} className="rounded-full w-20 h-20" />
                  </div>
                  <div className="flex flex-col tems-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">
                        {data.text}
                      </p>
                      <h1
                        className="text-xl font-bold text-black/80"
                      >
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimoinals;
