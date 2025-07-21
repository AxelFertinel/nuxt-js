import { prisma } from "~~/server/lib/prisma";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log("🔵 body:", body);

    return await prisma.task.create({
        data: {
            title: body.title,
        },
    });
});
