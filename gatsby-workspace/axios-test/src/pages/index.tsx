import React from "react";
import { Layout } from "../components/layout";
import { Diagnostics } from "../components/diagnostics";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Diagnostics />
    </Layout>
  );
}

export default IndexPage;