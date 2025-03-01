export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  nuxtApp.provide('apiFetch', (url: string, options = {}) => {
    return $fetch(url, {
      baseURL: 'http://localhost:3000', // 기본 URL 적용
      ...options
    });
  });

  nuxtApp.provide('apiUseFetch', (url: string, options = {}) => {
    return useFetch(url, {
      baseURL: 'http://localhost:3000', // 기본 URL 적용
      ...options
    });
  });
});