/*
  # Fix vehicle type column in appointments table

  1. Changes
    - Remove any existing vehicle_type column to avoid duplicates
    - Add vehicle_type column with proper constraints
    - Set default value for backward compatibility
    - Add check constraint to ensure valid vehicle types

  2. Notes
    - Uses DO block for safe execution
    - Adds check constraint for data integrity
    - Sets default value to maintain compatibility
*/

DO $$ 
BEGIN
  -- First remove any existing vehicle_type column to avoid duplicates
  IF EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'appointments' 
    AND column_name = 'vehicle_type'
  ) THEN
    ALTER TABLE appointments DROP COLUMN vehicle_type;
  END IF;

  -- Add the column with proper constraints
  ALTER TABLE appointments 
    ADD COLUMN vehicle_type text NOT NULL DEFAULT 'sedan-suv'
    CHECK (vehicle_type IN ('hatchback', 'sedan-suv', 'xuv'));

  -- Add an index for better query performance
  CREATE INDEX IF NOT EXISTS idx_appointments_vehicle_type 
    ON appointments(vehicle_type);
END $$;