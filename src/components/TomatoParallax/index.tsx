import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TomatoParallax.module.css";
import TomatoSVG from "../../sprites/tomatina.svg";

gsap.registerPlugin(ScrollTrigger);

export default function TomatoParallax(): JSX.Element {
  useEffect(() => {
    const layers = gsap.utils.toArray<HTMLDivElement>(".tomato-layer");
    console.log("Found layers:", layers); // Debugging log
  
    layers.forEach((layer, i) => {
      gsap.to(layer, {
        y: (i % 2 === 0 ? -1 : 1) * 100,
        rotation: (i % 2 === 0 ? 1 : -1) * 10,
        scale: 1.1,
        scrollTrigger: {
          trigger: layer,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });
  }, []);
  

  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.svgWrapper}>
        <img src={TomatoSVG} className={styles.tomatoSVG} alt="Tomato Background" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`tomato-layer ${styles[`layer${i}`]}`}></div>
        ))}
      </div>
    </div>
  );
  
}
