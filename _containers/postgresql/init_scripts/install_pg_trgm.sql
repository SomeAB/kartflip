-- Connect to the database with the given name
\c KFpostgresqldb

-- Then install the pg_trgm extension, IF it does not exist
CREATE EXTENSION IF NOT EXISTS pg_trgm;
