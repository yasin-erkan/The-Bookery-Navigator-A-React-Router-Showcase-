const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center gap-5 p-4">
      <h1
        className="text-warning fw-bold text-center"
        style={{ fontSize: "3.5rem" }}
      >
        Welcome to Bookery
      </h1>
      <img
        src="/welcome.webp"
        className="img-fluid rounded shadow-lg"
        alt="Welcome to Bookery"
        style={{ maxWidth: "80%", height: "auto" }}
      />
      <p className="text-light text-center" style={{ fontSize: "1.2rem" }}>
        <b>You can find all the newly published books on the products page!</b>
      </p>
    </div>
  );
};

export default Home;
