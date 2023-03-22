import '../assets/fonts.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <div
      style={{
        fontFamily: '"TG Praktikal", sans-serif',
      }}
    >
      <Story />
    </div>
  ),
];
