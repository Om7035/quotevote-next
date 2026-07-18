import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export interface RequestUserAccessInputType {
  email: string;
}

export const RequestUserAccessInput = new GraphQLInputObjectType({
  name: 'RequestUserAccessInput',
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
});
