export const environment = {
  production: true,
    ollamaUrl: (window as any).__env__.ollamaUrl || 'http://localhost:11434',
    ollamaModel: (window as any).__env__.ollamaModel || 'llama2',
};
