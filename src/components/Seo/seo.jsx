import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export const SEO = ({ description, lang, meta, title, slug, isPost }) => {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const url = `${siteMetadata.siteUrl}${slug}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      {...(title
        ? {
            titleTemplate: `%s • Ivan Tusnolobov`,
            title,
          }
        : {
            title: siteMetadata.title,
          })}
      meta={[
        {
          name: `image`,
          content: siteMetadata.image,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || siteMetadata.title,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: siteMetadata.image,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: isPost ? `article` : `website`,
        },
        {
          property: `fb:app_id`,
          content: siteMetadata.social.fbAppID,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: 'twitter:image',
          content: siteMetadata.image,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title || siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  isPost: PropTypes.bool,
};
