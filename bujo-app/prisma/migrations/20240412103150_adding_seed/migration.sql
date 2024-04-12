-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookshelf" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Bookshelf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "bookshelfId" TEXT NOT NULL,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes_collection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "journalId" TEXT NOT NULL,

    CONSTRAINT "Notes_collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes_item" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "notes_collectionId" TEXT NOT NULL,

    CONSTRAINT "Notes_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sticky_notes_collection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "journalId" TEXT NOT NULL,

    CONSTRAINT "Sticky_notes_collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sticky_note_item" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "sticky_notes_collectionId" TEXT NOT NULL,

    CONSTRAINT "Sticky_note_item_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Bookshelf" ADD CONSTRAINT "Bookshelf_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal" ADD CONSTRAINT "Journal_bookshelfId_fkey" FOREIGN KEY ("bookshelfId") REFERENCES "Bookshelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes_collection" ADD CONSTRAINT "Notes_collection_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes_item" ADD CONSTRAINT "Notes_item_notes_collectionId_fkey" FOREIGN KEY ("notes_collectionId") REFERENCES "Notes_collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sticky_notes_collection" ADD CONSTRAINT "Sticky_notes_collection_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sticky_note_item" ADD CONSTRAINT "Sticky_note_item_sticky_notes_collectionId_fkey" FOREIGN KEY ("sticky_notes_collectionId") REFERENCES "Sticky_notes_collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "To_do_lists_collection" ADD CONSTRAINT "To_do_lists_collection_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "To_do_list_item" ADD CONSTRAINT "To_do_list_item_to_do_lists_collectionId_fkey" FOREIGN KEY ("to_do_lists_collectionId") REFERENCES "To_do_lists_collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendar_collection" ADD CONSTRAINT "Calendar_collection_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendar_item" ADD CONSTRAINT "Calendar_item_calendar_collectionId_fkey" FOREIGN KEY ("calendar_collectionId") REFERENCES "Calendar_collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
