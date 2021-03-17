import { ThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { components, shorthands } from "../../mdx-components";
import { primaryTheme } from "../../theme";
import Root from "./Root";

interface GraphType {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

interface LayoutProps {
  pageContext: {
    frontmatter: {
      title?: string;
      path?: string;
    };
  };
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const data: GraphType = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const pageTitle = props.pageContext.frontmatter.title;

  const title = `${pageTitle ? `${pageTitle} - ` : ""}${data.site.siteMetadata?.title}`;

  return (
    <MDXProvider components={{ ...shorthands, ...components }}>
      <ThemeProvider theme={primaryTheme}>
        <Helmet title={title}></Helmet>
        <Root>{props.children}</Root>
      </ThemeProvider>
    </MDXProvider>
  );
};

export default Layout;
