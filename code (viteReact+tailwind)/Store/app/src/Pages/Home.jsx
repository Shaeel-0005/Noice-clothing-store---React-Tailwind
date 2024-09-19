import { Footer, Header, Testimonial } from '/src/components/Common';

import Banner from "../components/Home/Banner";
import Pop from "../components/Home/Banner_pop";
import Products from "../components/Home/Top_product";
import About from "../components/Home/about";
import Categories from "../components/Home/categories";
import Blog from "../components/Home/Blog";

const home = () => (
  <>
    <div className="w-full">
      <Header/>
    </div>

    {/* Hero Section */}
    <Banner />
    <Pop />

    {/* Products Section */}
    <Products />

    {/* About Section */}
    <About />

    {/* Categories Section */}
    <Categories />

    <Testimonial/>

    {/* Blog Section */}
    <Blog />

    <Footer />
  </>
);

export default home;