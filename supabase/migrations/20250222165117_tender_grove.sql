/*
  # Create appointments table and security policies

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `service_type` (text, not null)
      - `preferred_date` (date, not null)
      - `preferred_time` (time, not null)
      - `additional_info` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `appointments` table
    - Add policies for public access to create and view appointments
*/

DO $$ BEGIN
  -- Create the appointments table if it doesn't exist
  CREATE TABLE IF NOT EXISTS appointments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    service_type text NOT NULL,
    preferred_date date NOT NULL,
    preferred_time time NOT NULL,
    additional_info text,
    created_at timestamptz DEFAULT now()
  );

  -- Enable Row Level Security
  ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Anyone can create appointments" ON appointments;
  DROP POLICY IF EXISTS "Anyone can view appointments" ON appointments;

  -- Create new policies
  CREATE POLICY "Anyone can create appointments"
    ON appointments
    FOR INSERT
    TO public
    WITH CHECK (true);

  CREATE POLICY "Anyone can view appointments"
    ON appointments
    FOR SELECT
    TO public
    USING (true);

END $$;