import React, { useState, useRef, useEffect } from 'react';
import "./Solution.css";
import solar from '../../../public/assets/solar chrging.png';

const Solutions = () => {
  const [isExpanded, setIsExpanded] = useState({
    carbondioxide: false,
    Particulatematter: false,
    Heavymetals: false,
    nitrogenoxide: false
  });

  // Refs for each solution card content
  const carbondioxideRef = useRef(null);
  const ParticulatematterRef = useRef(null);
  const HeavymetalsRef = useRef(null);
  const nitrogenoxideRef = useRef(null);

  // Function to toggle the expanded state
  const toggleExpand = (key) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  // Handle clicks outside of the solution cards
  const handleClickOutside = (event) => {
    if (
      carbondioxideRef.current && !carbondioxideRef.current.contains(event.target) &&
      ParticulatematterRef.current && !ParticulatematterRef.current.contains(event.target) &&
      HeavymetalsRef.current && !HeavymetalsRef.current.contains(event.target) &&
      nitrogenoxideRef.current && !nitrogenoxideRef.current.contains(event.target)
    ) {
      setIsExpanded({
        carbondioxide: false,
        Particulatematter: false,
        Heavymetals: false,
        nitrogenoxide: false
      });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="solutions-container" id="solutions">
      {/* Subtitle */}
      <h5 className="solutions-subtitle">Solutions</h5>
      <div className="solutions-line"></div>

      {/* Main Title */}
      <h2 className="solutions-title">Key to clean Air</h2>

      {/* Grid Section */}
      <div className="solutions-grid">
        {/* EV Charging */}
        <div className="solution-card" ref={carbondioxideRef}>
          <img
            src="/assets/ev charging.png"
            alt="EV Charging"
            className="icon"
          />
          <h4 className="card-title">Carbon Dioxide</h4>
          <p
            className={`card-text ${isExpanded.carbondioxide ? 'expanded' : ''}`}
          >
            EVs use electricity as a power source, which can be generated from
            renewable energy sources. Our solutions help decarbonize the
            transportation sector.
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
          </p>
          <button
            className="read-more"
            onClick={() => toggleExpand('carbondioxide')}
          >
            {isExpanded.evCharging ? 'Read less' : 'Read more'}
          </button>
        </div>

        {/* Solar Energy */}
        <div className="solution-card" ref={ParticulatematterRef}>
          <img
            src={solar}
            alt="Solar Energy"
            className="icon"
          />
          <h4 className="card-title">Particulate Matter (PM)</h4>
          <p
            className={`card-text ${isExpanded.Particulatematter ? 'expanded' : ''}`}
          >
            Solar panels convert sunlight into electricity. Photovoltaic (PV)
            cells on these panels capture solar energy and convert it into
            electrical power.
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
          </p>
          <button
            className="read-more"
            onClick={() => toggleExpand('Particulatematter')}
          >
            {isExpanded.Particulatematter ? 'Read less' : 'Read more'}
          </button>
        </div>

        {/* Wind Energy */}
        <div className="solution-card" ref={HeavymetalsRef}>
          <img
            src="/assets/wind energy.png"
            alt="Wind Energy"
            className="icon"
          />
          <h4 className="card-title">Heavy Metals</h4>
          <p
            className={`card-text ${isExpanded.Heavymetals ? 'expanded' : ''}`}
          >
            Wind turbines harness the kinetic energy of the wind to generate
            electricity. Wind farms with multiple turbines produce clean energy.
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
          </p>
          <button
            className="read-more"
            onClick={() => toggleExpand('Heavymetals')}
          >
            {isExpanded.Heavymetals ? 'Read less' : 'Read more'}
          </button>
        </div>

        {/* nitrogenoxide */}
        <div className="solution-card" ref={nitrogenoxideRef}>
          <img
            src="/assets/Hydropower.png"
            alt="nitrogenoxide"
            className="icon"
          />
          <h4 className="card-title">Nitrogen Oxide (NOx)</h4>
          <p
            className={`card-text ${isExpanded.nitrogenoxide ? 'expanded' : ''}`}
          >
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
            This technology uses the energy from flowing water, such as rivers
            and dams, to generate electricity. It is one of the oldest forms of
            renewable energy.
          </p>
          <button
            className="read-more"
            onClick={() => toggleExpand('nitrogenoxide')}
          >
            {isExpanded.nitrogenoxide ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
