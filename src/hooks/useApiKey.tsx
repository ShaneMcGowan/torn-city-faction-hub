import { useContext } from 'react';
import { ApiKeyContext } from '../context/api-key-context';

export const useApiKey = () => {
  return useContext(ApiKeyContext);
}