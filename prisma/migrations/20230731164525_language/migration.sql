-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT NOT NULL,
    "experienceId" INTEGER,
    CONSTRAINT "Language_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Language" ("id", "language") SELECT "id", "language" FROM "Language";
DROP TABLE "Language";
ALTER TABLE "new_Language" RENAME TO "Language";
CREATE UNIQUE INDEX "Language_language_key" ON "Language"("language");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
