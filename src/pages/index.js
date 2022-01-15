import * as React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { Box, Heading, Paragraph } from "grommet";

import Layout from "../components/Layout/Layout";

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Helmet>
    <Heading>Hi people</Heading>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <Paragraph>Now go build something great.</Paragraph>
    <Box width={{ max: "300px" }} pad="small">
      Put image
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
