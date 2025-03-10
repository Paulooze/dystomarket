import validator from 'validator';

export function isStrongPassword(password: string) {
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });
}

export function makeAccessTokenCookie() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    domain: process.env.COOKIE_DOMAIN,
    maxAge: 900,
    path: '/',
    sameSite: true,
    signed: true,
  };
}

export function makeRefreshTokenCookie() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    domain: process.env.COOKIE_DOMAIN,
    maxAge: 7 * 24 * 60 * 60,
    path: '/refresh-token',
    sameSite: true,
    signed: true,
  };
}
