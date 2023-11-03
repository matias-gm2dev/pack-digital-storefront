export const MyTestSection = ({cms}: any) => {
  return (
    <div>
      <p>{cms.howdy}</p>
      <span>Hola Mundo!</span>
    </div>
  );
};

MyTestSection.Schema = () => {
  return {
    category: 'Heros',
    label: 'MyTestSection',
    key: 'my-test-section',
    previewSrc:
      'https://cdn.shopify.com/s/files/1/0671/5074/1778/files/text-block-preview.jpg?v=1675730349',
    fields: [
      {
        label: 'Howdy',
        name: 'howdy',
        component: 'text',
        defaultValue: '...',
      },
    ],
  };
};
