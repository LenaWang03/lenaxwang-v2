import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import landingBG from "../imgs/landingBG.svg";
import landingCat from "../imgs/landingCat.svg";
import shootingStar from "../imgs/shootingStar.svg";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="homeContent">
        <div className="homeText">
          <p>Hello traveller, </p>
          <span className="hugeFont">Are You Lost?</span>
          <h1>You've stumbled upon Lena's domain</h1>
          <p>While you're here I guess I can tell you a bit about her...</p>
        </div>
        <img alt="landingBG" src={landingBG} />
        <img className="landingCat" alt="landingCat" src={landingCat} />
        <img className="shootingStar" alt="shootingStar" src={shootingStar} />
      </main>

      <Footer />
    </>
  );
};

export default Home;
