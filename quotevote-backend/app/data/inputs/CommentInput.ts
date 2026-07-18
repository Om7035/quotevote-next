import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export interface CommentInputType {
  postId: string;
  userId: string;
  content: string;
  startWordIndex: number;
  endWordIndex: number;
  quote?: string | null;
  url?: string | null;
  reaction?: string | null;
}

export const CommentInput = new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    postId: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    startWordIndex: { type: new GraphQLNonNull(GraphQLInt) },
    endWordIndex: { type: new GraphQLNonNull(GraphQLInt) },
    quote: { type: GraphQLString },
    url: { type: GraphQLString },
    reaction: { type: GraphQLString },
  },
});
