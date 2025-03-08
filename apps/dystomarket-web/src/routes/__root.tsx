import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <div className="container mx-auto p-4 min-h-screen pt-10">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
}
