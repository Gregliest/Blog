import { ArticlesSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";

export default function OutdoorsPage() {
  return (
    <>
      <Seo title="Climbing, Outdoors, Rescue" useTitleTemplate={true} noIndex={true} />
      <Page>
        <ArticlesSection sectionId="articles" heading="Climbing, Outdoor Adventures, Rescue, etc" sources={['Medium']} />
      </Page>
    </>
  );
}
