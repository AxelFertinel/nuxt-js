import { prisma } from "~~/server/lib/prisma";

export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.param.id);

    return await prisma.task.delete({
        where: {
            id,
        },
    });
});
