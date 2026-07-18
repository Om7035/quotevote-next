import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export interface CardPaymentMethodInputType {
  number: string;
  exp_month: string;
  exp_year: string;
  cvc: string;
}

export const CardPaymentMethodInput = new GraphQLInputObjectType({
  name: 'CardPaymentMethodInput',
  fields: {
    number: { type: new GraphQLNonNull(GraphQLString) },
    exp_month: { type: new GraphQLNonNull(GraphQLString) },
    exp_year: { type: new GraphQLNonNull(GraphQLString) },
    cvc: { type: new GraphQLNonNull(GraphQLString) },
  },
});
