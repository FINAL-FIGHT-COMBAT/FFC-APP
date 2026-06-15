'use client';

import { useQuery } from '@tanstack/react-query';

import { queryClient } from 'src/lib/react-query';
import axiosInstance, { endpoints } from 'src/lib/axios';

import { mapToCommentList } from './mappers/blog-mapper';

// ----------------------------------------------------------------------

/**
 * Hook para obter comentários de um Post específico usando React Query.
 */
export function useGetPostComments(postId: string) {
  const { data: comments = [], isLoading, error, isFetching } = useQuery({
    queryKey: ['post', postId, 'comments'],
    queryFn: async () => {
      if (!postId) return [];
      const url = `${endpoints.post.root}/${postId}/comments`;
      const res = await axiosInstance.get<{ success: boolean; data: any[] }>(url);
      return mapToCommentList(res.data.data || []);
    },
    enabled: !!postId,
  });

  return {
    comments,
    commentsLoading: isLoading,
    commentsError: error,
    commentsValidating: isFetching,
    commentsEmpty: !isLoading && !comments.length,
  };
}

// ----------------------------------------------------------------------

/**
 * Função para adicionar comentário a um Post específico.
 */
export async function addComment(postId: string, commentData: { content: string }) {
  const url = `${endpoints.post.root}/${postId}/comments`;

  const res = await axiosInstance.post(url, commentData);

  // Invalida o cache de comentários no React Query para forçar recarregamento
  queryClient.invalidateQueries({ queryKey: ['post', postId, 'comments'] });

  return res.data;
}

// ----------------------------------------------------------------------

/**
 * Função para favoritar um Post específico.
 */
export async function favoritePost(postId: string) {
  const url = `${endpoints.post.root}/${postId}/favorite`;

  const res = await axiosInstance.post(url);

  // Invalida o cache do post se necessário
  queryClient.invalidateQueries({ queryKey: ['post', postId] });

  return res.data;
}
