import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos de cache padrão
      gcTime: 1000 * 60 * 30, // Coleta de lixo em 30 minutos
      refetchOnWindowFocus: false, // Evita requisições repetidas ao re-focar na janela
      retry: 1, // Tenta novamente apenas uma vez em caso de falha
    },
  },
});
