import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[500px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl object-fill" />
        <div className="absolute rounded-xl flex items-center left-0 right-0 bottom-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
          <div className="text-white space-y-5 w-1/3 pl-5">
            <h1 className="text-4xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form.
            </p>
            <div>
              <button className="btn btn-active btn-primary mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-info">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl object-fill" />
        <div className="absolute rounded-xl flex items-center left-0 right-0 bottom-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
          <div className="text-white space-y-5 w-1/3 pl-5">
            <h1 className="text-4xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form.
            </p>
            <div>
              <button className="btn btn-active btn-primary mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-info">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl object-fill" />
        <div className="absolute rounded-xl flex items-center left-0 right-0 bottom-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
          <div className="text-white space-y-5 w-1/3 pl-5">
            <h1 className="text-4xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form.
            </p>
            <div>
              <button className="btn btn-active btn-primary mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-info">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl object-fill" />
        <div className="absolute rounded-xl flex items-center left-0 right-0 bottom-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
          <div className="text-white space-y-5 w-1/3 pl-5">
            <h1 className="text-4xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variation of passages of available, but the
              majority have suffered alteration in some form.
            </p>
            <div>
              <button className="btn btn-active btn-primary mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-info">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
