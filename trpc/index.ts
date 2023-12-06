import { TRPCError, initTRPC } from "@trpc/server";
import { auth } from "@clerk/nextjs";

export const router = initTRPC.create().router;
export const publicProcedure = initTRPC.create().procedure;
export const privateProcedure = initTRPC.create().procedure.use(
    initTRPC.create().middleware(async opts => {
        const { userId } = auth();

        if (!userId) {
            throw new TRPCError({ code: "UNAUTHORIZED" });
        }

        return opts.next({ ctx: { userId: userId } });
    })
);

export const appRouter = router({
    yo: publicProcedure.query(async () => {
        return { message: "sup mf" };
    }),
    sup: privateProcedure.query(async ({ ctx }) => {
        const { userId } = ctx;

        return { message: "sup mf", userId: userId };
    })
});

export type AppRouter = typeof appRouter;
