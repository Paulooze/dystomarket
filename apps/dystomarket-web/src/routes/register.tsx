import { RegisterForm } from '@/components/register-form';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/register')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <div className="max-w-full lg:max-w-2xl lg:mx-auto">
      <h1 className="text-4xl font-semibold mb-4">Sign Up</h1>
      <p className="mb-4">
        Trade in the chaos of a cyberpunk economy, follow your favorite
        megacorporations, and watch AI-generated news reshape the markets in
        real time.
      </p>
      <p className="mb-8">
        Sign up now to track stocks, uncover corporate conspiracies, and
        experience the future of finance—where the only rule is survival.
      </p>
      <div className="block p-4 bg-gray-700 mb-4">
        <RegisterForm
          onSuccess={() => {
            navigate({
              from: '/register',
              to: '/',
            });
          }}
        />
      </div>
    </div>
  );
}
