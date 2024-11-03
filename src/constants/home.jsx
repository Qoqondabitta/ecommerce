const Add = React.lazy(() => import("../components/Announcement/Add"));
const Nav = React.lazy(() => import("../components/navbars/secondNav/Nav"));
const BigSlider = React.lazy(() =>
  import("../components/sliders/bigSlider/BigSlider")
);
const Genders = React.lazy(() => import("../components/genders/Genders"));
const MostSellers = React.lazy(() => import("../components/most/MostSellers"));
const TripleSlider = React.lazy(() =>
  import("../components/sliders/trippleSlider/tripleSlider")
);
const Sneakers = React.lazy(() => import("../components/sneakers/Sneakers"));
const ClothTab = React.lazy(() => import("../components/tabs/ClothTab"));

export const homeComponents = [
  {
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Add />
      </React.Suspense>
    ),
  },
  {
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Nav />
      </React.Suspense>
    ),
  },
  {
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <BigSlider />
      </React.Suspense>
    ),
  },
  {
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Genders />
      </React.Suspense>
    ),
  },
  {
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <MostSellers />
      </React.Suspense>
    ),
  },
  {
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <TripleSlider />
      </React.Suspense>
    ),
  },
  {
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Sneakers />
      </React.Suspense>
    ),
  },
  {
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <ClothTab />
      </React.Suspense>
    ),
  },
];