/*
  # Add vehicle type column to appointments table

  1. Changes
    - Add vehicle_type column to appointments table
    - Make it required (NOT NULL)
    - Add it only if it doesn't exist

  2. Notes
    - Uses IF NOT EXISTS to prevent errors if column already exists
    - Maintains data integrity by requiring the column
*/

DO $$ BEGIN
  ALTER TABLE appointments 
    ADD COLUMN IF NOT EXISTS vehicle_type text NOT NULL DEFAULT 'sedan-suv';
END $$;