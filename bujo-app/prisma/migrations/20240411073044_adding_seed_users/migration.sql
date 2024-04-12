/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `content` on table `Sticky_note_item` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Sticky_note_item" ALTER COLUMN "content" SET NOT NULL;

-- CreateTable
CREATE TABLE "To_do_lists_collection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "journalId" TEXT NOT NULL,

    CONSTRAINT "To_do_lists_collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "To_do_list_item" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "to_do_lists_collectionId" TEXT NOT NULL,

    CONSTRAINT "To_do_list_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calendar_collection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "journalId" TEXT NOT NULL,

    CONSTRAINT "Calendar_collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calendar_item" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "calendar_collectionId" TEXT NOT NULL,

    CONSTRAINT "Calendar_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "To_do_lists_collection" ADD CONSTRAINT "To_do_lists_collection_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "To_do_list_item" ADD CONSTRAINT "To_do_list_item_to_do_lists_collectionId_fkey" FOREIGN KEY ("to_do_lists_collectionId") REFERENCES "To_do_lists_collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendar_collection" ADD CONSTRAINT "Calendar_collection_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendar_item" ADD CONSTRAINT "Calendar_item_calendar_collectionId_fkey" FOREIGN KEY ("calendar_collectionId") REFERENCES "Calendar_collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
