import hero from '../assets/hero.png';
const Hero = () => {
  return (
    <div>
      <div className="max-w-lg w-11/12 mx-auto">
        <img src={hero} alt="hero" className="w-full h-50vh" />
      </div>
      <div className="py-8 bg-linear-to-r from-purple-700 to-violet-400 flex justify-center items-center">
        <div className="text-white ">
          <h1 className="text-2xl sm:text-4xl text-center font-bold mb-4">
            Trusted by Millions, Built for You
          </h1>
          <div className="stats stats-vertical sm:stats-horizontal">
            <div className="stat ">
              <div className="stat-title text-white">Total Downloads</div>
              <div className="stat-value">29.6M</div>
              <div className="stat-desc text-white">
                21% more than last month
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-white">Total Reviews</div>
              <div className="stat-value">906K</div>
              <div className="stat-desc text-white">
                46% more than last month
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-white">Active Apps</div>
              <div className="stat-value">132+</div>
              <div className="stat-desc text-white">31 more will Launch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
