import { ArticlesSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";

export default function CodePage() {
  return (
    <>
      <Seo title="Coding, Software Engineering" useTitleTemplate={true} noIndex={true} />
      <Page>
        <ArticlesSection sectionId="articles" heading="Software Engineering" sources={['Medium']} />
      </Page>
    </>
  );
}
