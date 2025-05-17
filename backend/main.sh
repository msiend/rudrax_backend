#!/bin/bash

# === CONFIGURATION ===
DB_NAME="jagya_db"
DB_USER="reynrel01"
DB_PASSWORD='reynrel01@vpsHOST$#'


# Path to the cloned repo (update if it's different)
REPO_PATH="./_docs/database/"

# Name of the .sql file in your repo
SQL_FILE="jagya_db.sql"

# Optional: Backup existing DB
BACKUP_DATE=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="backup_before_import_$BACKUP_DATE.sql"

echo "🔄 Backing up existing database..."
mysqldump -u $DB_USER -p$DB_PASSWORD $DB_NAME > $BACKUP_FILE

if [ $? -ne 0 ]; then
    echo " Backup failed. Aborting import."
    exit 1
fi

echo " Backup saved as $BACKUP_FILE"

# === STEP 2: Import SQL file from repo ===
echo "📥 Importing database from $REPO_PATH/$SQL_FILE ..."
mysql -u $DB_USER -p$DB_PASSWORD $DB_NAME < "$REPO_PATH/$SQL_FILE"

if [ $? -ne 0 ]; then
    echo " Import failed!"
    exit 1
fi

echo " Database imported successfully from $SQL_FILE"
