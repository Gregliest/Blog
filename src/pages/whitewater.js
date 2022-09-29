import { ArticlesSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";

export default function WhitewaterPage() {
  return (
    <>
      <Seo title="Whitewater Kayaking, Boating" useTitleTemplate={true} noIndex={true} />
      <Page>
        <ArticlesSection sectionId="articles" heading="Whitewater" sources={['Medium']} />
      </Page>
    </>
  );
}
