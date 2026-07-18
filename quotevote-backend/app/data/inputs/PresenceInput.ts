import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export interface PresenceInputType {
  status: string;
  statusMessage?: string | null;
}

export const PresenceInput = new GraphQLInputObjectType({
  name: 'PresenceInput',
  description: 'Input for updating presence',
  fields: {
    status: { type: new GraphQLNonNull(GraphQLString) },
    statusMessage: { type: GraphQLString },
  },
});
