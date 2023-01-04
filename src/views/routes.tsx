import React from 'react';

import {
  Service as ServiceView,
  CompanyTerms as CompanyTermsView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <ServiceView {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}): JSX.Element => <CompanyTermsView {...params} />,
  },
  {
    path: '/contact',
    renderer: (params = {}): JSX.Element => (
      <ContactPageCoverView {...params} />
    ),
  },
  {
    path: '/about',
    renderer: (params = {}): JSX.Element => <AboutSideCoverView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}): JSX.Element => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}): JSX.Element => <NotFoundCoverView {...params} />,
  },
];

export default routes;
