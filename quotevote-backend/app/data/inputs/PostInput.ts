import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export interface PostInputType {
  userId: string;
  groupId: string;
  title: string;
  text: string;
  citationUrl?: string | null;
  attribution?: string | null;
}

export const PostInput = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    userId: { type: new GraphQLNonNull(GraphQLString) },
    groupId: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    citationUrl: { type: GraphQLString },
    attribution: { type: GraphQLString },
  },
});
