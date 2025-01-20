import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `http://localhost:4000/graphql`,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['app/**/*.{ts,tsx}'],
  generates: {
    '__generated__/generated-hooks.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        inlineFragmentTypes: 'mask',
        withHooks: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
