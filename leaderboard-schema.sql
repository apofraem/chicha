-- Klas Kayoko community study leaderboard
-- Jalankan di Supabase SQL Editor.
create table if not exists public.study_sessions (
  id bigint generated always as identity primary key,
  display_name text not null check (char_length(display_name) between 1 and 32),
  minutes integer not null check (minutes between 1 and 600),
  created_at timestamptz not null default now()
);
alter table public.study_sessions enable row level security;

drop policy if exists "Anyone can read study sessions" on public.study_sessions;
create policy "Anyone can read study sessions" on public.study_sessions for select to anon, authenticated using (true);

drop policy if exists "Anyone can submit a study session" on public.study_sessions;
create policy "Anyone can submit a study session" on public.study_sessions for insert to anon, authenticated
with check (char_length(display_name) between 1 and 32 and minutes between 1 and 600);

grant select, insert on public.study_sessions to anon, authenticated;
