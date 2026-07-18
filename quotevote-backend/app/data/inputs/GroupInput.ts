import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export interface GroupInputType {
  creatorId: string;
  title: string;
  description: string;
  url?: string | null;
  privacy: string;
}

export const GroupInput = new GraphQLInputObjectType({
  name: 'GroupInput',
  fields: {
    creatorId: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: GraphQLString },
    privacy: { type: new GraphQLNonNull(GraphQLString) },
  },
});
