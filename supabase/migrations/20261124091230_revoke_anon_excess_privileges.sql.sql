/*
# Revoke excess privileges from anon on contact_messages

## What changed
The previous migration (create_contact_messages) intended to grant only INSERT
to the `anon` role (so visitors can submit the contact form without signing in),
but the `anon` role ended up with SELECT, UPDATE, and DELETE as well. This
migration revokes those excess privileges so anonymous visitors can only insert
new messages — they cannot read, modify, or delete messages.

## Security changes
- REVOKE SELECT, UPDATE, DELETE ON contact_messages FROM anon
- INSERT remains granted to anon + authenticated (unchanged)
- authenticated retains full CRUD (unchanged)
*/

REVOKE SELECT, UPDATE, DELETE ON contact_messages FROM anon;
