import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const About = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h2>A propos</h2>
      <div className="about">
        <p>
          MARMICOOK est une application web react avec appel à une API de
          cuisine, j'utilise plusieurs technique javascript et react pour
          m'entraîner, le site sera sûrement amener à évoluer avec le temps.
          Pour l'appel à l'API j'utilise axios, j'utilise également sass et
          bootstrap-react. J'utilise également un fake server (json-server) pour
          pouvoir utiliser mon application web comme CRUD
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat
          nisi veritatis harum nostrum corrupti qui, quos est quisquam rem
          officiis placeat ea minima odio dolore ad. Nisi nihil quas doloribus
          impedit sapiente hic adipisci velit ex officiis modi nostrum sequi
          explicabo animi earum quasi numquam, optio nemo, consequatur
          reiciendis.
        </p>
      </div>
    </div>
  );
};

export default About;
