/*
# Create contact_messages table for portfolio contact form

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email for replies
  - `message` (text, not null) — the message body from the contact form
  - `created_at` (timestamptz, defaults to now()) — when the message was submitted
  - `read` (boolean, default false) — tracks whether the site owner has read the message

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon, authenticated` so visitors can submit messages without signing in.
- Grant SELECT, UPDATE, DELETE to `authenticated` so the site owner can read and manage messages after signing in.
- INSERT policy allows anyone to submit (WITH CHECK true) since this is a public contact form.
- No SELECT/UPDATE/DELETE policy for anon — visitors cannot read or modify messages.

3. Important notes
- This is a single-tenant portfolio with no sign-in screen, so the contact form
  writes as the `anon` role. Only INSERT is granted to anon; reading and
  managing messages requires an authenticated session.
- An index on `created_at` supports chronological ordering of messages.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  read boolean NOT NULL DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
  ON contact_messages (created_at DESC);

-- Allow anyone to submit a contact message
GRANT INSERT ON contact_messages TO anon, authenticated;

-- Allow authenticated users (site owner) to read and manage messages
GRANT SELECT, UPDATE, DELETE ON contact_messages TO authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact_messages" ON contact_messages;
CREATE POLICY "auth_select_contact_messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "auth_update_contact_messages" ON contact_messages;
CREATE POLICY "auth_update_contact_messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact_messages" ON contact_messages;
CREATE POLICY "auth_delete_contact_messages"
  ON contact_messages FOR DELETE
  TO authenticated
  USING (true);
