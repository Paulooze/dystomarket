import { Companies } from '@/components/companies';
import CompaniesLoadingState from '@/components/companies/companies-loading-state';
import News from '@/components/news';
import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-start flex-col-reverse lg:flex-row">
      <div className="flex-1">
        <Suspense fallback={<CompaniesLoadingState />}>
          <Companies />
        </Suspense>
      </div>
      <div className="lg:w-1/4 lg:ml-8 mb-8 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-4  text-dysto-white">
          Recent News
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <News />
        </Suspense>
      </div>
    </div>
  );
}
