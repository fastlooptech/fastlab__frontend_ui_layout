import '../assets/fonts.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  viewport: {
    defaultViewport: "iphone-12",
    viewports: {
      "iphone-se": {
        type: "mobile",
        styles: {
          width: "375px",
          height: "667px",
        },
        name: "iPhone SE",
      },
      "iphone-12": {
        type: "mobile",
        styles: {
          width: "390px",
          height: "667px",
        },
        name: "iPhone 12",
      },
      "ipad-portrait": {
        type: "mobile",
        styles: {
          width: "768px",
          height: "1024px",
        },
        name: "iPad Portrait",
      },
      "ipad-landscape": {
        type: "mobile",
        styles: {
          width: "1024px",
          height: "768px",
        },
        name: "iPad Landscape",
      },
      "small-desktop": {
        type: "desktop",
        styles: {
          width: "1280px",
          height: "800px",
        },
        name: "Small Desktop",
      },
      "medium-desktop": {
        type: "desktop",
        styles: {
          width: "1600px",
          height: "1024px",
        },
        name: "Medium Desktop",
      },
      "large-desktop": {
        type: "desktop",
        styles: {
          width: "1920px",
          height: "1080px",
        },
        name: "Large Desktop",
      },
    },
  },
};

export const decorators = [
  Story => (
    <>
    <style>{`#root {padding: 0 !important; width: 100%;}`}</style>
    <main
      className='w-full'
      style={{
        fontFamily: '"TG Praktikal", sans-serif',
      }}
    >
      <Story />
    </main>
    </>
  ),
];
