import { TRPCError, initTRPC } from "@trpc/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const router = initTRPC.create().router;
export const publicProcedure = initTRPC.create().procedure;
export const privateProcedure = initTRPC.create().procedure.use(
    initTRPC.create().middleware(async opts => {
        const { getUser, isAuthenticated: auth } = getKindeServerSession();

        const isAuthenticated = await auth();
        const user = await getUser();

        if (!isAuthenticated) {
            throw new TRPCError({ code: "UNAUTHORIZED" });
        }

        return opts.next({ ctx: { userId: user?.id } });
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
