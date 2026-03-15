import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <>
      <section>
        <Navbar></Navbar>
      </section>
      <section className="my-8 lg:my-16">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Root;
