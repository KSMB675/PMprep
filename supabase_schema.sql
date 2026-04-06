-- Run this in your Supabase SQL Editor

create table if not exists quiz_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  mode text not null,           -- 'practice' or 'exam'
  category text not null,       -- 'all' or specific category name
  total integer not null,
  correct integer not null,
  answers jsonb,                -- array of { questionId, selected, correct }
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table quiz_results enable row level security;

-- Users can only see and insert their own results
create policy "Users can view own results"
  on quiz_results for select
  using (auth.uid() = user_id);

create policy "Users can insert own results"
  on quiz_results for insert
  with check (auth.uid() = user_id);
