import Banner from '../components/Banner';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <section className="mb-4 lg:mb-8 w-11/12 mx-auto">
        <Banner></Banner>
      </section>
      <section>
        <Hero></Hero>
      </section>
    </div>
  );
};

export default Home;
