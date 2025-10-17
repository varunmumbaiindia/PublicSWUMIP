-- One table for all leads
CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  instagram TEXT NOT NULL,
  followed INTEGER NOT NULL, -- 1 yes, 0 no
  qr TEXT,                   -- 'leh' or NULL
  utm_source TEXT,
  utm_campaign TEXT,
  ip TEXT
);

-- Helpful index
CREATE INDEX IF NOT EXISTS idx_submissions_created ON submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_submissions_qr ON submissions(qr);
