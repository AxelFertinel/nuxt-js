import { prisma } from "~~/server/lib/prisma";

export default defineEventHandler(async () => {
    return await prisma.task.findMay({
        orderBy: {
            createdAt: "desc",
        },
    });
});
