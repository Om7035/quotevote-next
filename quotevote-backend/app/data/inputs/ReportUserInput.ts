import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export interface ReportUserInputType {
  _reportedUserId: string;
  reason: string;
  description?: string | null;
  severity?: string | null;
}

export const ReportUserInput = new GraphQLInputObjectType({
  name: 'ReportUserInput',
  fields: {
    _reportedUserId: { type: new GraphQLNonNull(GraphQLString) },
    reason: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    severity: { type: GraphQLString },
  },
});

export interface SendUserInviteInputType {
  email: string;
}

export const SendUserInviteInput = new GraphQLInputObjectType({
  name: 'SendUserInviteInput',
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
});
