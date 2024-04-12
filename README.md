# BuJo -app

A group fullstack project for learning and showcasing skills.

The Bullet Journal application is a web browser application that functions as a personal Log or notebook. The application offers users the usual ability to combine useful functions of the same location, such as a calendar and memos. In the application, the user can write notes or make to-do lists.

## Credits

-   Suvi Lindholm (Sharkaw)
-   Pasi Pakarinen
-   Pinja Kerkkänen (4zarue)

## Setting up the project

1. Run in terminal `npm install --save dev prisma`
2. Create local PostgresSQL database.
3. Place your database credentials to .env. You can use .env.example as a base `cp .env.example .env`
4. Run in terminal `npx prisma generate`
5. Run in terminal `npx prisma migrate dev`
6. Run in terminal `npm run build`

### Making changing in Prisma schema

After saving changes,

1. Run in terminal `npx prisma migrate dev --name new-field` and name migration accordingly.
2. Run in terminal `npx prisma generate`

### Making changing in Prisma seed

After saving changes,

1. Run in terminal `npx prisma generate`
2. Run in terminal `npx prisma db seed`.
3. Create a migration `npx prisma migrate dev --name new-field`
