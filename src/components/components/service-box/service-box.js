import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./service-box.scss";

const ServiceBox = React.memo(({ item }) => (
  <article className="service-box">
    <div className="service-box__image-wrapper">
      <FontAwesomeIcon icon={item && item.icon} />
    </div>
    <h1 className="service-box__title"> {item && item.title} </h1>
    <p className="service-box__description">{item && item.description}</p>
  </article>
));

export default ServiceBox;
