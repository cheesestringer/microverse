import { render } from '@testing-library/react';
import { useTitle } from './useTitle';

describe('useTitle', () => {
  const TitleComponent = ({ title }: { title: string }) => {
    useTitle(title);
    return null;
  };

  it('sets the document title', () => {
    const title = 'Hello there 🎉';
    render(<TitleComponent title={title} />);

    // assert the title
    expect(document.title).toBe(title);
  });

  it('updates the document title when the title changes', () => {
    const initialTitle = 'Hello there 🎉';
    const { rerender } = render(<TitleComponent title={initialTitle} />);

    // assert the title
    expect(document.title).toBe(initialTitle);

    const updatedTitle = 'Hello there 🚀';
    rerender(<TitleComponent title={updatedTitle} />);

    // assert the updated title
    expect(document.title).toBe(updatedTitle);
  });
});
