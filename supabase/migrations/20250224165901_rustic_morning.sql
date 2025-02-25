/*
  # Add vehicle type column to appointments table

  1. Changes
    - Add required vehicle_type column to appointments table
*/

DO $$ BEGIN
  ALTER TABLE appointments 
    ADD COLUMN IF NOT EXISTS vehicle_type text NOT NULL;
END $$;