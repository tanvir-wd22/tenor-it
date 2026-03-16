import { useLoaderData } from 'react-router';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import TrendyApps from '../components/TrendyApps';

const Home = () => {
  const loadedData = useLoaderData();
  // console.log(loadedData?.data);
  const apiData = loadedData?.data;

  return (
    <div>
      <section className="mb-4 lg:mb-8 w-11/12 max-w-7xl mx-auto">
        <Banner></Banner>
      </section>
      <section className="max-w-7xl mb-8 lg:mb-16">
        <Hero></Hero>
      </section>
      <section className="w-11/12 max-w-7xl mx-auto">
        <TrendyApps apiData={apiData}></TrendyApps>
      </section>
    </div>
  );
};

export default Home;
