import HomePageStyles from "./homePage.styles";

const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="homePage">
        <h1 className="homePage__title">IGEX</h1>
        <div className="homePage__container">
          <p className="homePage__container_paragraph">
            We are holding company. Participate in business related with Ocean resources. Sea water, minerals, prrotein production, health, and beauty. Sustainable aproach to humaanity's great
            challenge: conquer the ocean. Join in this exiting trip. Let's do it.
          </p>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
