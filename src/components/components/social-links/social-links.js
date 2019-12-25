import React from 'react';
import PropTypes from 'prop-types';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./social-links.scss";

library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faYoutube);
library.add(faEnvelope);
library.add(faLink);


/**
 *
 * Gets the font-awesome icon given a type
 *
 * @param {string} type The type of the icon
 *
 */
const getIcon = (type) => {
  switch (type) {
    case "facebook": return faFacebook;
    case "youtube": return faYoutube;
    case "instagram": return faInstagram;
    case "twitter": return faTwitter;
    case "mail": return faEnvelope;
    case "generic": return faLink;

    // generic as default
    default: return faLink;
  };
}


/**
 *
 * The single link item
 *
 * @param {object} item The link item to show
 *
 */
export const SocialLink = ({item}) => {

  const icon = getIcon(item.type);

  return (
    <a
      href = {item.url}
      target = "_blank"
      rel = "noopener noreferrer"
      className="social-links__item-link"
      title={item.text}
    >
      <FontAwesomeIcon icon={icon} className="social-links__item-icon" size="lg"/>
      {
        item &&
        item.text &&
        <span className="visually-hidden"> {item.text} </span>
      }
    </a>
  );
}

SocialLink.prototype = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string
  }).isRequired,
  inverted: PropTypes.boolean
}



/**
 *
 * A list with the social links
 *
 * @param {object} links The array with the links' data.
 * @param {boolean} inverted  Indicates whether the color is  primary or inverted.
 *
 */
const SocialLinkList = ({links, inverted}) => {

  const linksList = links.map((item, i) => {
    if (!item) {
      return null;
    } else {
      return (
        <li className="social-links__list-item" key={i} >
          <SocialLink item={item} inverted={!!inverted} />
        </li>
      );
    }
  });

  return (
    <ul className="social-links">
      {linksList}
    </ul>
  );
}

SocialLinkList.prototype = {
  links: PropTypes.array.isRequired,
  inverted: PropTypes.boolean
}

export default SocialLinkList;
