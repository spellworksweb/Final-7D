/*
  # Add vehicle type column to appointments table

  1. Changes
    - Add vehicle_type column to appointments table
    - Make vehicle_type column required (NOT NULL)

  2. Notes
    - This is a non-destructive change that adds a new required column
*/

DO $$ BEGIN
  ALTER TABLE appointments 
    ADD COLUMN IF NOT EXISTS vehicle_type text NOT NULL;
END $$;