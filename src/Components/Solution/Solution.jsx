
import "./Solution.css";

const Solutions = () => {
  return (
    <div className="solutions-container">
      {/* Subtitle */}
      <h5 className="solutions-subtitle">Solutions</h5>
      <div className="solutions-line"></div>

      {/* Main Title */}
      <h2 className="solutions-title">Key to clean future</h2>

      {/* Grid Section */}
      <div className="solutions-grid">
        {/* EV Charging */}
        <div className="solution-card">
          <img
            src="/assets/ev charging.png"
            alt="EV Charging"
            className="icon"
          />
          <h4 className="card-title">EV charging</h4>
          <p className="card-text">
            EVs use electricity as a power source, which can be generated from
            renewable energy sources. Our solutions help decarbonize the
            transportation sector.
          </p>
          <a href="#" className="read-more">
            Read more
          </a>
        </div>

        {/* Solar Energy */}
        <div className="solution-card">
          <img
            src="/public/assets/solar chrging.png"
            alt="Solar Energy"
            className="icon"
          />
          <h4 className="card-title">Solar Energy</h4>
          <p className="card-text">
            Solar panels convert sunlight into electricity. Photovoltaic (PV)
            cells on these panels capture solar energy and convert it into
            electrical power.
          </p>
          <a href="#" className="read-more">
            Read more
          </a>
        </div>

        {/* Wind Energy */}
        <div className="solution-card">
          <img
            src="/assets/wind energy.png"
            alt="Wind Energy"
            className="icon"
          />
          <h4 className="card-title">Wind Energy</h4>
          <p className="card-text">
            Wind turbines harness the kinetic energy of the wind to generate
            electricity. Wind farms with multiple turbines produce clean energy.
          </p>
          <a href="#" className="read-more">
            Read more
          </a>
        </div>

        {/* Hydropower */}
        <div className="solution-card">
          <img
            src="/assets/Hydropower.png"
            alt="Hydropower"
            className="icon"
          />
          <h4 className="card-title">Hydropower</h4>
          <p className="card-text">
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
          </p>
          <a href="#" className="read-more">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
