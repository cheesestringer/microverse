import { useEffect } from 'react';

export const useTitle = (value: string): void => {
  useEffect(() => {
    document.title = value;
  }, [value]);
};

export default useTitle;
