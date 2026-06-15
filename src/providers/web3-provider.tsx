'use client';

import { bsc, mainnet, polygon } from 'wagmi/chains';
import { http, createConfig, WagmiProvider } from 'wagmi';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from 'src/lib/react-query';

// ----------------------------------------------------------------------

/**
 * CONFIGURAÇÃO WAGMI (v3)
 * Define as redes suportadas e o transporte (HTTP via Provedores Públicos).
 */
export const wagmiConfig = createConfig({
  chains: [mainnet, polygon, bsc],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [bsc.id]: http(),
  },
  ssr: true, // Habilita suporte para Server-Side Rendering no Next.js
});

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function Web3Provider({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
