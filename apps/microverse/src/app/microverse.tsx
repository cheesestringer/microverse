import { useTitle } from '@microverse/hooks';
import NxWelcome from './nx-welcome';

export function Microverse() {
  useTitle('Microverse');
  return <NxWelcome title="microverse" />;
}

export default Microverse;
