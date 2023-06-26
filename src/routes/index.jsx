import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("../views/index.jsx"));

const Home = () => {
  return (
    <Suspense fallback={null}>
      <HomePage />
    </Suspense>
  );
};

export default Home;
