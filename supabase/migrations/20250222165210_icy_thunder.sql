/*
  # Add contact fields to appointments table

  1. Changes
    - Add `name` column (text, not null)
    - Add `mobile_number` column (text, not null)

  2. Notes
    - Both fields are required for all appointments
    - Existing policies remain unchanged
*/

DO $$ BEGIN
  ALTER TABLE appointments 
    ADD COLUMN IF NOT EXISTS name text NOT NULL,
    ADD COLUMN IF NOT EXISTS mobile_number text NOT NULL;
END $$;