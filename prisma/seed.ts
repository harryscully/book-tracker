import { prisma } from "../lib/prisma"
import "dotenv/config"

async function main() {
    const user = await prisma.user.upsert({
        where: { email: "harry@mail.com"},
        update: {},
        create: {
            name: "Harry",
            email: "harry@mail.com"
        }
    })

    await prisma.book.upsert({
        where: { title_userId: {title: "The Memory Police", userId: user.id } },
        update: {},
        create: {
            title: "The Memory Police",
            author: "Yoko Ogawa",
            publishedYear: 1994,
            genre: "Dystopia",
            status: "READING",
            notes: "Really enjoying this book! About halfway through...",
            userId: user.id,
        }
    })

    await prisma.book.upsert({
        where: { title_userId: {title: "Breakfast of Champions", userId: user.id } },
        update: {},
        create: {
            title: "Breakfast of Champions",
            author: "Kurt Vonnegut",
            publishedYear: 1999,
            genre: "Science Fiction",
            status: "WANT_TO_READ",
            userId: user.id,
        }
    })

    await prisma.book.upsert({
        where: { title_userId: {title: "Project Hail Mary", userId: user.id } },
        update: {},
        create: {
            title: "Project Hail Mary",
            author: "Andy Weir",
            publishedYear: 2021,
            genre: "Science Fiction",
            status: "FINISHED",
            notes: "5 stars. Amazing",
            userId: user.id,
        }
    })

    await prisma.book.upsert({
        where: { title_userId: {title: "Madonna in a Fur Coat", userId: user.id } },
        update: {},
        create: {
            title: "Madonna in a Fur Coat",
            author: "Sabhattin Ali",
            publishedYear: 1943,
            genre: "Classics",
            status: "FINISHED",
            notes: "No words. It's so good!",
            userId: user.id,
        }
    })

    await prisma.book.upsert({
        where: { title_userId: {title: "The Castle", userId: user.id } },
        update: {},
        create: {
            title: "The Castle",
            author: "Franz Kafka",
            publishedYear: 1926,
            genre: "Political Fiction",
            status: "WANT_TO_READ",
            userId: user.id,
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })