import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { CardPaymentMethodInput, type CardPaymentMethodInputType } from './CardPaymentMethodInput';

export interface StripeCustomerInputType {
  first_name: string;
  last_name?: string | null;
  email: string;
  card: CardPaymentMethodInputType;
}

export const StripeCustomerInput = new GraphQLInputObjectType({
  name: 'StripeCustomerInput',
  fields: {
    first_name: { type: new GraphQLNonNull(GraphQLString) },
    last_name: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    card: { type: new GraphQLNonNull(CardPaymentMethodInput) },
  },
});
