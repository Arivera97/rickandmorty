const About = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "200px",
          marginTop: "70px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="https://movementstrategy.com/wp-content/themes/bigdrop-theme/mortyawardy/the-gist-of-it.gif"
            alt="Morty"
            style={{ maxWidth: "45%" }}
          />
        </div>
        <h1
          style={{
            color: "black",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Consumiendo API de Rick and Morty
        </h1>
        <h1>Bienvenido/a!</h1>
        <p>
          Este proyecto es un trabajo para SoyHenry que tiene como objetivo
          mostrar información detallada sobre los personajes de la famosa serie
          de televisión "Rick and Morty".
        </p>
        <p>
          En esta página podrás encontrar una lista completa de los personajes
          de la serie, junto con información sobre su género, especie y estado
          de vida. Para lograr esto, estamos utilizando una API de SoyHenry de
          Rick and Morty que nos proporciona toda la información necesaria.
        </p>
        <p>
          La página es muy fácil de usar. Solo necesitas buscar el personaje que
          deseas conocer y automáticamente se mostrará la información disponible
          sobre el personaje.
        </p>
        <p>
          Gracias por visitar este proyecto de Rick and Morty. ¡Que la fuerza te
          acompañe!
        </p>
      </div>
    </div>
  );
};

export default About;
