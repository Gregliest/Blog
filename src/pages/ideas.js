import { ArticlesSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";

export default function IdeasPage() {
  return (
    <>
      <Seo title="Ideas" useTitleTemplate={true} noIndex={true} />
      <Page>
        <ArticlesSection sectionId="articles" heading="Ideas to Change the World" sources={['Medium']} />
      </Page>
    </>
  );
}
