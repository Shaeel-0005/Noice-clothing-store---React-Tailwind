
import styles, { layout } from "../../style";
import { banner } from "../../assets/index";
import './font.css';
import Shop from "../../Pages/Shop"

const Banner = () => (
  <div className="banner " style={{ backgroundColor: "#f7ecea" }}>
    <div className={`${layout.section} ${styles.paddingX}w-full `}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
         Get Your Outfit here!
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic mollitia
          animi nostrum tenetur expedita dolorum numquam sint exercitationem
          perspiciatis doloribus! Qui repellat voluptatem ipsam possimus
          debitis? Ratione labore voluptatum assumenda!
        </p>
        
        <button className="bg-[#F46F4E] shadow-orange-50 py-3 px-5 font-semibold
         font-inknut-antiqua-light rounded-sm mt-4 text-white"><a href= {Shop} >Shop All</a></button>
        
      </div>
      <div className={`${layout.sectionImg}`}>
        <img
          src={banner}
          alt="banner"
          className="w-[100%] h-[100%] object-contain relative z-[5]"
        />
      </div>
    </div>
  </div>
);

export default Banner;
