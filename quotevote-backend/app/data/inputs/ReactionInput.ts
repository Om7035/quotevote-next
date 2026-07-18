import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export interface ReactionInputType {
  userId?: string | null;
  messageId?: string | null;
  actionId?: string | null;
  emoji?: string | null;
}

export const ReactionInput = new GraphQLInputObjectType({
  name: 'ReactionInput',
  fields: {
    userId: { type: GraphQLString },
    messageId: { type: GraphQLString },
    actionId: { type: GraphQLString },
    emoji: { type: GraphQLString },
  },
});
