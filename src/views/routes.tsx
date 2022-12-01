import React from 'react';

import {
  Customers as CustomersView,
  HireUs as HireUsView,
  Service as ServiceView,
  About as AboutView,
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
    path: '/customers',
    renderer: (params = {}): JSX.Element => <CustomersView {...params} />,
  },
  {
    path: '/hire-us',
    renderer: (params = {}): JSX.Element => <HireUsView {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}): JSX.Element => <CompanyTermsView {...params} />,
  },
  {
    path: '/contact-page-cover',
    renderer: (params = {}): JSX.Element => (
      <ContactPageCoverView {...params} />
    ),
  },
  {
    path: '/about',
    renderer: (params = {}): JSX.Element => <AboutView {...params} />,
  },
  {
    path: '/about-side-cover',
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
