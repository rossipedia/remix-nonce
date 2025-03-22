import { createContext, useContext } from 'react';

declare module '@remix-run/node' {
  interface AppLoadContext {
    nonce: string;
  }
}

const NonceContext = createContext<string | undefined>(undefined);

export const NonceProvider = NonceContext.Provider;

export function useNonce() {
  return useContext(NonceContext);
}
