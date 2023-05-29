import React from "react";

function Home(bananas) {
  return (
    <div id="home">
      <h1 style={{ color: bananas.color }}>
        {bananas.name} is a Web Developer from {bananas.city}
      </h1>
    </div>
  );
}

export default Home;