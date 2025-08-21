import { internalMutationGeneric, internalQueryGeneric } from "convex/server";
import { v } from "convex/values";

export const create = internalMutationGeneric({
  args: {
    username: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", args);
  },
});

export const get = internalQueryGeneric({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();
  },
});
