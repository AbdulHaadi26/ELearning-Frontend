import { useState } from "react";
import ContainerFluid from "../../components/container-fluid/fluid.container";
import HomeBanner from "./banner.home";
import HomeSongs from "./songs.home";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <ContainerFluid>
      <HomeBanner searchText={searchText} setSearchText={setSearchText} />
      <HomeSongs />
    </ContainerFluid>
  );
};

export default HomePage;
