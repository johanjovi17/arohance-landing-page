import React from "react";

const ourCollaborators = [
  {
    alt: "adrover",
    src: "/assets/adrover.jpg",
  },
  {
    alt: "atmajyothi",
    src: "/assets/atmajyoti.jpg",
  },
  {
    alt: "bingewatch",
    src: "/assets/bingewatch.jpg",
  },
  {
    alt: "daadis",
    src: "/assets/daadis.jpg",
  },
  {
    alt: "mv",
    src: "/assets/mv.jpg",
  },
  {
    alt: "navarithi",
    src: "/assets/navarithi.jpg",
  },
  {
    alt: "parshwa",
    src: "/assets/parshwa.jpg",
  },
  {
    alt: "smart",
    src: "/assets/smart.jpg",
  },
  {
    alt: "tapover",
    src: "/assets/tapover.jpg",
  },
  {
    alt: "vrf",
    src: "/assets/vrf.jpg",
  },
  {
    alt: "ysj",
    src: "/assets/ysj.jpg",
  },
];

const OurCollaborators = () => {
  return (
    <div className="our-collorators-container">
      <h2 className="our-collaborators-title">Our Collaborators</h2>
      <div className="our-collaborators-slider-container">
        <div className="our-collaborators-slide-track">
          {ourCollaborators.map((ourCollaborator) => (
            <div className="our-collaborators-slide">
              <img
                src={ourCollaborator.src}
                alt={ourCollaborator.alt}
                className="our-collaborators-slide-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCollaborators;
