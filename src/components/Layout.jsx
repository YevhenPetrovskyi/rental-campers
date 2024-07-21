import PropTypes from 'prop-types';
import { Suspense } from 'react';

import Container from './Container/Container';
import Loader from './Loader/Loader';
import Menu from './Menu/Menu';

const Layout = ({ children }) => {
  return (
    <>
      <Menu />

      <Container>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
