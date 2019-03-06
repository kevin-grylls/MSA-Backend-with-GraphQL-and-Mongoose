import Document from "../models/document";

const resolvers = {
  Query: {
    sample: async () => {
      const result = await Document.find();
      if (!result) return null;
      return result;
    }
  },
  Mutation: {
    sample: async (_, { sample }) => {
      const result = await new Document({
        sample
      }).save();

      return Document.findById(result._id);
    }
  }
};

export default resolvers;
