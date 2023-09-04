import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import landingBG from "../imgs/landingBG.svg";
import landingCat from "../imgs/landingCat.svg";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="homeContent">
        <div className="homeText">
          <h1>Hello, I'm </h1>
          <span className="hugeFont">Lena Wang.</span>
        </div>
        <img alt="landingBG" src={landingBG} />
        <img className="landingCat" alt="landingCat" src={landingCat} />
      </main>

      <Footer />
    </>
  );
};

export default Home;
