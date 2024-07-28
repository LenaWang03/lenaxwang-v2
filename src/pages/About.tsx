import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import streak from "../imgs/streak.svg";
import room from "../imgs/room.svg";

const About = () => {
  return (
    <>
      <NavBar />
      <main className="aboutContent">
        hi
        <div className="origin">
          <img className="streak" alt="streak" src={streak} />
          <img className="room" alt="room" src={room} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
