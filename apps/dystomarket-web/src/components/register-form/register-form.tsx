import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useForm } from '@tanstack/react-form';
import { useMutation } from '@tanstack/react-query';
import { AlertCircle, CircleHelp } from 'lucide-react';
import isEmail from 'validator/es/lib/isEmail';
import isStrongPassword from 'validator/es/lib/isStrongPassword';
import { postRegister } from './register-form.helpers';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type Props = {
  onSuccess: () => void;
};

export default function RegisterForm({ onSuccess }: Props) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const mutation = useMutation({
    mutationFn: postRegister,
  });
  const form = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: (data) => {
      mutation.mutate(data.value, {
        onSuccess: () => {
          onSuccess();
        },
        onError: (error) => {
          if (error.message === '400') {
            setErrorMessage('Check the form and try again.');
          }
        },
      });
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        form.handleSubmit();
      }}
    >
      {errorMessage != null && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <div className="mb-4">
        <form.Field
          name="username"
          children={(field) => {
            return (
              <>
                <Label htmlFor={field.name}>Username</Label>
                <Input
                  className="h-12"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(event) => field.handleChange(event.target.value)}
                />
              </>
            );
          }}
        />
      </div>
      <div className="mb-4">
        <form.Field
          name="email"
          validators={{
            onBlur: ({ value }) => {
              return !isEmail(value) && value.length > 0
                ? 'Enter a valid e-mail address'
                : undefined;
            },
          }}
          children={(field) => {
            return (
              <>
                <Label htmlFor={field.name}>E-mail</Label>
                <Input
                  className={`h-12 ${
                    field.state.meta.errors.length ? 'border-red-600' : ''
                  }`}
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(event) => field.handleChange(event.target.value)}
                  onBlur={field.handleBlur}
                />
                {field.state.meta.errors ? (
                  <span role="alert" className="text-sm text-red-600 pt-2">
                    {field.state.meta.errors.join(', ')}
                  </span>
                ) : null}
              </>
            );
          }}
        />
      </div>
      <div className="mb-4">
        <form.Field
          name="password"
          validators={{
            onBlur: ({ value }) => {
              return !isStrongPassword(value) && value.length > 0
                ? 'Use at least 8 characters, including upper/lowercase, a number, and a special symbol.'
                : undefined;
            },
          }}
          children={(field) => {
            return (
              <>
                <Label htmlFor={field.name}>
                  Password
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CircleHelp />
                      </TooltipTrigger>
                      <TooltipContent>
                        At least 8 characters, including upper/lowercase, a
                        number, and a special symbol.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input
                  className={`h-12 ${
                    field.state.meta.errors.length ? 'border-red-600' : ''
                  }`}
                  type="password"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(event) => field.handleChange(event.target.value)}
                  onBlur={field.handleBlur}
                />
                {field.state.meta.errors ? (
                  <span role="alert" className="text-sm text-red-600 pt-2">
                    {field.state.meta.errors.join(', ')}
                  </span>
                ) : null}
              </>
            );
          }}
        />
      </div>
      <div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => {
            return (
              <button
                type="submit"
                className="inline-flex items-center px-4 h-12 cursor-pointer bg-dysto-green hover:bg-green-200 text-green-950 font-semibold disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={mutation.isPending || !canSubmit}
              >
                {isSubmitting ? 'Signing up...' : 'Sign up'}
              </button>
            );
          }}
        />
      </div>
    </form>
  );
}
