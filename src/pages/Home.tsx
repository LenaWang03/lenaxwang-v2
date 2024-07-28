import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import landingBG from "../imgs/landingBG.svg";
import landingCat from "../imgs/landingCat.svg";
import shootingStar from "../imgs/shootingStar.svg";
import landingRing from "../imgs/landingRing.svg";
import landingRingTwo from "../imgs/landingRingTwo.svg";
import wormHoleIn from "../imgs/WormHoleIn.svg";
import ExperienceCard from "../components/ExperienceCard";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="home">
        <div className="homeText">
          <p>Hello traveller, </p>
          <span className="hugeFont">Are You Lost?</span>
          <h1>You've stumbled upon Lena's domain</h1>
          <p>While you're here I guess I can tell you a bit about her...</p>
        </div>
        <img className="landingBG" alt="landingBG" src={landingBG} />
        <img className="landingCat" alt="landingCat" src={landingCat} />
        <img className="shootingStar" alt="shootingStar" src={shootingStar} />
        {/* <img className="landingRing" alt="landingRing" src={landingRing} />
        <img
          className="landingRing two"
          alt="landingRing"
          src={landingRingTwo}
        /> */}
        <div className="homeContent">
          <div className="rightText" style={{ marginTop: "900px" }}>
            <p>
              She studies Computer Science at The University of British Columbia
              and has a passion for creating things. This website is an ongoing
              project that shes constantly updating, so If you have any
              suggestions or feedback, feel free to contact her! She is also an
              encycolpedia for anything "The Office" related :)
            </p>
          </div>
          <div className="inlineBlock">
            Would you like to get to know her on a more personal level? Follow
            me through this wormhole...
            <img className="wormHoleIn" alt="wormHoleIn" src={wormHoleIn} />
          </div>
          <div className="rightText">
            I have recently migrated to v2 of my personal website! Things are
            still changing so it is still not responsive in mobile yet👉👈 If
            you would like to take a look at v1 click here
          </div>
          <div className="centeredText">
            ...otherwise, here are some things she’s been up to lately
          </div>
          <p></p>

          <ExperienceCard
            company="Grin Technologies"
            position="Software Dev"
            img="grin-demo.png"
            description="Connecting EV build enthusiasts across the world one project at a time"
            tags={[
              "Software Development",
              "Large-Scale Project",
              "PHP",
              "Internship",
            ]}
            logo="grin.png"
          />
          <div className="skills">
            <h1>Skills</h1>
            <p>
              This is where the planets should go and where all my skills should
              be -- this is a work in progress check back later!
            </p>
          </div>
          <div className="experience">
            <h1>Experience</h1>
          </div>

          <div className="interests">
            <h1>Interests</h1>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
