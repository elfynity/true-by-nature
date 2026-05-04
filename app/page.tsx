import styles from "@/app/home.module.css";

const Home = () => {
  return (
    <>
    <div id={styles.main} className="contentPadding">
      <div className="text-wrapper">

        <div id={styles.title}>
          <h1>Hand-Made, All Natural Luxury Soaps</h1>
          
          <h2>Tallow and plant-based soaps free of harsh chemicals, designed to nourish your skin and the planet. Made in Kloof, Durban</h2>


        </div>{/* title */}    

        <p>True by Nature's soaps are handmade with love and patience and only contain natural oils. They are free of nasty chemicals and surfactants that strip your skin of its natural moisture.</p>
      </div>{/* text-wrapper */}  
    </div>{/* bg */}  
    </>
  );
}

export default Home;
