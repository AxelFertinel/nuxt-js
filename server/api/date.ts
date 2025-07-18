export default defineEventHandler(() => {
    const data = {
        createAt: new Date(),
        toJSON() {
            return {
                createdAt: {
                    year: this.createAt.getFullYear(),
                    month: this.createAt.getMonth(),
                    date: this.createAt.getDate(),
                },
            };
        },
    };
    return data;
});
