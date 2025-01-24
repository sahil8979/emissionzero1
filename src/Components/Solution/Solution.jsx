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
            Emission Zero’s algae photobioreactors are a groundbreaking solution for CO₂ mitigation, harnessing the natural power of photosynthesis. Algae converts carbon dioxide into oxygen and biomass with an efficiency 400 times greater than trees. Unlike traditional methods, our photobioreactors are rapidly deployable, begin functioning immediately, and can be installed in diverse environments, from urban spaces to industrial settings. The captured CO₂ not only reduces greenhouse gas emissions but also creates algae biomass, which can be used for biofuels, fertilizers, or other sustainable products. This scalable, eco-friendly approach significantly accelerates efforts to combat climate change and restore environmental balance.
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
           Particulate matter is a critical pollutant, and our solution includes state-of-the-art electrostatic precipitators (ESPs) to address it effectively. ESPs use electrical charges to ionize airborne particles, which are then collected on oppositely charged plates. This process captures fine particles like dust, soot, and aerosols, ensuring cleaner air in industrial and urban environments. Our ESPs are energy-efficient, require minimal maintenance, and can handle high volumes of air, making them a reliable solution for mitigating particulate pollution. By integrating ESP technology with our algae photobioreactors, we offer a comprehensive air purification system that tackles multiple pollutants for a healthier atmosphere.
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
           Heavy metals, such as lead, mercury, and cadmium, are hazardous pollutants that can cause significant environmental and health challenges. Emission Zero’s technology incorporates advanced filtration systems to capture these toxic substances from the air, ensuring safer ecosystems. By utilizing a combination of physical and chemical processes, our systems efficiently remove heavy metals from emissions, preventing their accumulation in the soil, water, and air. This innovative approach not only protects human health but also preserves biodiversity and promotes ecological balance. With our comprehensive solutions, we aim to create an environment free from heavy metal contamination for future generations.
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
            Nitrogen oxides (NOx) are significant contributors to smog and acid rain, posing severe environmental and health risks. Emission Zero combats NOx emissions by integrating catalytic systems into our solutions, converting harmful nitrogen oxides into benign nitrogen and water vapor. These systems operate efficiently alongside our algae photobioreactors, ensuring minimal environmental footprint. By addressing NOx at its source, our technology plays a crucial role in reducing air pollution, mitigating climate change effects, and improving respiratory health for communities. Together, these efforts represent a proactive and sustainable approach to creating a cleaner and more livable environment.
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
