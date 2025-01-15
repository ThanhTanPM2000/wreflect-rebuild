import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `http://localhost:4000/graphql`,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  // documents: ['lib/graphql2/**/*.{ts,tsx}'],
  generates: {
    '__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        withHooks: true,
      },
    },
  },
  // ignoreNoDocuments: true,
};

export default config;
