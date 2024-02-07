import Navigationbar from "../Components/Navbar";
import MainContent from "../Components/MainContent";
import Certificate from "../Components/Certificate";

import "../Components/Components-style/Home.css";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="main-content">
          <Navigationbar />
          <MainContent />
        </div>
      </div>
    </>
  );
};
export default HomePage;
