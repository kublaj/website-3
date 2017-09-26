import Route from './Route';
import RouteProps from './RouteProps';

export const gettingStartedRoutes = [
  new Route({
    url: '/getting-started/install',
    component: 'install-page',
    props: new RouteProps({
      name: 'Install'
    })
  }),
  new Route({
    url: '/getting-started/about',
    component: 'about-page',
    props: new RouteProps({
      name: 'About'
    })
  }),
  new Route({
    url: '/getting-started/custombuild',
    component: 'custom-build',
    props: new RouteProps({
      name: 'Custom Build'
    })
  }),
];

export const genericsRoutes = [
  new Route({
    url: '/generics/global',
    component: 'generics-global',
    props: new RouteProps({
      name: 'Global'
    })
  })
];

export const objectsRoutes = [
  new Route({
    url: '/objects/containers',
    component: 'objects-containers',
    props: new RouteProps({
      name: 'Containers'
    })
  }),
  new Route({
    url: '/objects/grid',
    component: 'objects-grid',
    props: new RouteProps({
      name: 'Grid'
    })
  }),
  new Route({
    url: '/objects/panels',
    component: 'objects-panels',
    props: new RouteProps({
      name: 'Panels'
    })
  }),
  new Route({
    url: '/objects/images',
    component: 'objects-images',
    props: new RouteProps({
      name: 'Images'
    })
  }),
  new Route({
    url: '/objects/drawers',
    component: 'objects-drawers',
    props: new RouteProps({
      name: 'Drawers'
    })
  }),
  new Route({
    url: '/objects/medias',
    component: 'objects-medias',
    props: new RouteProps({
      name: 'Medias'
    })
  }),
  new Route({
    url: '/objects/modals',
    component: 'objects-modals',
    props: new RouteProps({
      name: 'Modals'
    })
  })
];

export const utilsRoutes = [
  new Route({
    url: '/utils/alignment',
    component: 'utils-alignment',
    props: new RouteProps({
      name: 'Alignment'
    })
  }),
  new Route({
    url: '/utils/boxing',
    component: 'utils-boxing',
    props: new RouteProps({
      name: 'Boxing'
    })
  }),
  new Route({
    url: '/utils/elevation',
    component: 'utils-elevation',
    props: new RouteProps({
      name: 'Elevation'
    })
  }),
  new Route({
    url: '/utils/sizes',
    component: 'utils-sizes',
    props: new RouteProps({
      name: 'Sizes'
    })
  }),
  new Route({
    url: '/utils/colors',
    component: 'utils-colors',
    props: new RouteProps({
      name: 'Colors'
    })
  }),
  new Route({
    url: '/utils/visibility',
    component: 'utils-visibility',
    props: new RouteProps({
      name: 'Visibility'
    })
  })
];

export const componentsRoutes = [new Route({
  url: '/components/buttons',
  component: 'components-buttons',
  props: new RouteProps({
    name: 'Buttons'
  })
})];

export const allRoutes = [{
  title: 'Getting Started',
  routes: gettingStartedRoutes
}, {
  title: 'Generics',
  routes: genericsRoutes
}, {
  title: 'Objects',
  routes: objectsRoutes
}, {
  title: 'Components',
  routes: componentsRoutes
}, {
  title: 'Utils',
  routes: utilsRoutes
}];