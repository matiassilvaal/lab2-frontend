import logo from "../logo2.png";

const Logo = () => {
  return (
    <h1>
      <a href="/">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "500px",
            height: "200px",
          }}
        />
      </a>
    </h1>
  );
};

export default Logo;
