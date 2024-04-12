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
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "sticky_notes_collectionId" TEXT NOT NULL,

    CONSTRAINT "Sticky_note_item_pkey" PRIMARY KEY ("id")
);

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
