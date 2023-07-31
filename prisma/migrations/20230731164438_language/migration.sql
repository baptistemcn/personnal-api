-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_language_key" ON "Language"("language");
