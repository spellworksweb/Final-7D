/*
  # Recreate appointments table with correct structure

  1. Changes
    - Drop existing appointments table
    - Create new appointments table with all required fields
    - Enable RLS and create policies
    - Add appropriate constraints and indexes

  2. New Table Structure
    - id (uuid, primary key)
    - name (text, required)
    - mobile_number (text, required)
    - vehicle_type (text, required)
    - service_type (text, required)
    - preferred_date (date, required)
    - preferred_time (time, required)
    - additional_info (text, optional)
    - created_at (timestamptz)

  3. Security
    - Enable RLS
    - Add policies for public access
*/

DO $$ 
BEGIN
  -- Drop existing table
  DROP TABLE IF EXISTS appointments;

  -- Create new table with correct structure
  CREATE TABLE appointments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    mobile_number text NOT NULL,
    vehicle_type text NOT NULL,
    service_type text NOT NULL,
    preferred_date date NOT NULL,
    preferred_time time NOT NULL,
    additional_info text,
    created_at timestamptz DEFAULT now(),
    CONSTRAINT valid_vehicle_type CHECK (vehicle_type IN ('hatchback', 'sedan-suv', 'xuv')),
    CONSTRAINT valid_service_type CHECK (service_type IN (
      'basic-wash',
      'standard-wash',
      'premium-wash',
      'ceramic-coating',
      'graphene-coating',
      'chassis-coating',
      'silencer-coating'
    ))
  );

  -- Create indexes for better performance
  CREATE INDEX idx_appointments_date_time ON appointments(preferred_date, preferred_time);
  CREATE INDEX idx_appointments_vehicle_type ON appointments(vehicle_type);
  CREATE INDEX idx_appointments_service_type ON appointments(service_type);

  -- Enable RLS
  ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

  -- Create policies
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