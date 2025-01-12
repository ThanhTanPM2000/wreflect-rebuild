// filepath: /Users/tannguyenthanh/Downloads/wReflect/server/src/errors/CustomGraphQLError.ts
import { GraphQLError } from 'graphql';

export class CustomGraphQLError extends GraphQLError {
  constructor(message: string, extensions: Record<string, any>) {
    super(message);
  }
}
