import { Companies } from '@/components/companies';
import CompaniesLoadingState from '@/components/companies/companies-loading-state';
import News from '@/components/news';
import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex items-start flex-col-reverse lg:flex-row">
        <Helmet prioritizeSeoTags>
          <title>
            Dystomarket - The Ultimate Dystopian Stock Market Simulation
          </title>
          <meta
            name="description"
            content="Dystomarket is an AI-powered, cyberpunk-style stock market simulator where fictional megacorporations rise and fall based on AI-generated news, hostile takeovers, and global economic chaos. Track market trends, uncover corporate conspiracies, and experience a world where the economy is as unstable as reality."
          />
          <meta
            property="og:title"
            content="Dystomarket - The Ultimate Dystopian Stock Market Simulation"
          />
          <meta
            property="og:description"
            content="Dystomarket is an AI-powered, cyberpunk-style stock market simulator where fictional megacorporations rise and fall based on AI-generated news, hostile takeovers, and global economic chaos. Track market trends, uncover corporate conspiracies, and experience a world where the economy is as unstable as reality."
          />
          <meta
            property="og:image"
            content="https://dystomarket.com/og-image.png"
          />
          <meta property="og:url" content="https://dystomarket.com" />
          <meta property="og:type" content="website" />
        </Helmet>
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
    </>
  );
}
