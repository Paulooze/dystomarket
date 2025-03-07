'use client';
const Footer = () => {
  return (
    <footer className="bg-card py-4 mt-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Dystomarket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
