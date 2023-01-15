import { GraphQLObjectType } from "graphql";

import AuthenticationType from "./authentication";
import ConfirmationType from "./confirmation";

/**
 * Root type for GraphQL mutations.
 */
const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutation",
    fields: () => ({
        authentication: { type: AuthenticationType, resolve: () => true },
        confirmation: { type: ConfirmationType, resolve: () => true },
    }),
});

export default RootMutationType;
