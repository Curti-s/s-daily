import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const ExclusivePremierPage = () => {}

ExclusivePremierPage.propTypes = { data:PropTypes.object.isRequired };

export const exclusivePremierPageQuery = graphql`
  query($id:String!) {
    graphCmsPage(id: { eq:$id }) {
      title
      description 
      seo {
        browserTitle
        description 
        slug
      }
    }
  }
`;
export default ExclusivePremierPage;

