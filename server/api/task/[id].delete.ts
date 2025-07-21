import { prisma } from "~~/server/lib/prisma";

export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.params!.id);
    console.log("🙍‍♀️ id:", id);

    return await prisma.task.delete({
        where: {
            id,
        },
    });
});
