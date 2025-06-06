import { NavMenu } from '../NavMenu/NavMenu.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutContainer, OutletContainer } from './Layout.styled.js';
import { useScrollToTop } from '../../hooks/useScrollToTop.js';

export const Layout = () => {
  useScrollToTop();

  return (
    <LayoutContainer>
      <NavMenu />
      <OutletContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </OutletContainer>
      <Footer />
    </LayoutContainer>
  );
};
