import Banner from '../components/Banner';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <section className="mb-4 lg:mb-8 w-11/12 mx-auto">
        <Banner></Banner>
      </section>
      <section className="mb-8 lg:mb-16">
        <Hero></Hero>
      </section>
    </div>
  );
};

export default Home;
