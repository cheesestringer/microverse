import { useTitle } from '@microverse/hooks';
import NxWelcome from './nx-welcome';

export function App() {
  useTitle('Home');
  return <NxWelcome title="home" />;
}

export default App;
