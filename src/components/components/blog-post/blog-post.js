import React, { useState } from "react";
import { Button } from "./../form-items/form-items";
import SocialLinkList  from "./../social-links/social-links";
import { getMonthLocale } from "./../../../services/date-service/date-service";
import PropTypes from 'prop-types';
import "./blog-post.scss";

/**
 *
 * Blog post is the post teaser component
 *
 * It is being used for our events
 *
 */


/**
 *
 * The box that contains the date in small format.
 *
 * @param {Date} date The date to show
 *
 */
const DateBox = ({date}) => {
  // add a leading zero at the number
  const day = ("0" + date.getDate()).slice(-2);
  const month = getMonthLocale(date);

  return (
    <div className="blog-post__date-box" >
      <div className="blog-post__date-day"> {day} </div>
      <div className="blog-post__date-month"> {month} </div>
    </div>
  );
}

/**
 *
 * Shows the teaser of a blogpost
 *
 * @param {BlogPost} post The blogpost to show
 *
 */
const BlogPost = React.memo(({post}) => {
  const [expanded, setExpanded] = useState(0);
  const maxTeaserChars = 300;

  const text = expanded
    ? post.description
    : post.description.substring(0, maxTeaserChars);

  const content = !expanded && post.description.length > maxTeaserChars
    ? text + "..."
    : text;

  const buttonText = expanded
    ? "Collapse"
    : "Read More";

  return (
    <article className="blog-post">
      <header className="blog-post__header">
        <DateBox date={post.startDate} />
        <div className="blog-post__image-wrapper">
          <img
            src={post && post.imageSource}
            alt={post && post.imageText}
            className="blog-post__image"
          />
        </div>
      </header>
      <div className="blog-post__contents">
        <SocialLinkList links={post.links} />
        <h1 className="blog-post__title"> { post && post.title } </h1>
        <p className="blog-post__description"> { content } </p>

        {
          post.description.length > maxTeaserChars
          &&
          <Button text={buttonText} onClick={() => {setExpanded(!expanded);} }/>
        }
      </div>
    </article>
  );
});

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageSource: PropTypes.string,
    imageText: PropTypes.string,
    links: PropTypes.array,
    startDate: PropTypes.date
  })
};

export default BlogPost;
