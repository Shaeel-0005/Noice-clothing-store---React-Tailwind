
import styles, { layout } from "../../style";
import {about} from "../../assets/index"

const aboutus =()=> {
  return (
    <div className={`${layout.section} px-16  `}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Who We Are</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ipsam ut quia vel et distinctio? Similique harum quod aliquam
          necessitatibus, nam rem, sed est quis praesentium quae enim maxime
          ratione explicabo hic culpa repudiandae voluptatum assumenda
          consequatur deleniti! Repellendus, atque!
        </p><br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ipsam ut quia vel et distinctio? Similique harum quod aliquam
          necessitatibus, nam rem, sed est quis praesentium quae enim maxime
          ratione explicabo hic culpa repudiandae voluptatum assumenda
          consequatur deleniti! Repellendus, atque!
        </p>
        <button className="bg-yellow-400 text-white text-[14px] border-[1px] shadow-orange-400 py-2 px-3 mt-5 "><a href="#">Read More</a></button>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={about} alt="" />
      </div>
    </div>
  );
}
export default aboutus;
