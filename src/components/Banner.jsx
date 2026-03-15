import google from '../assets/google.png';
import apple from '../assets/apple.png';

const Banner = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-center font-bold text-3xl lg:text-5xl">
        We Build <br />
        <span className="text-purple-500 mr-2">Productive</span>
        Apps
      </h1>
      <p className="text-center opacity-70">
        At Tenor It we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center items-center gap-6 text-sm font-semibold">
        <button className="flex items-center gap-1 btn btn-soft">
          <img src={google} className="w-6" alt="google" />
          <span>Play Store</span>
        </button>
        <button className="flex items-center gap-1 btn btn-soft">
          <img src={apple} className="w-6" alt="apple" />
          <span>App Store</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
