-- schema for expense tracker with row-level security and ownership policies

create extension if not exists "uuid-ossp";

create table if not exists expenses (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  title text not null,
  amount numeric not null,
  category text not null,
  date date not null,
  created_at timestamp with time zone default now() not null
);

-- enable row level security
alter table expenses enable row level security;

-- policy: allow logged-in user to select their own rows
create policy "select own expenses" on expenses
  for select
  using (auth.uid() = user_id);

-- policy: allow logged-in user to insert with their own user_id
create policy "insert own expenses" on expenses
  for insert
  with check (auth.uid() = user_id);

-- policy: allow logged-in user to update their own rows
create policy "update own expenses" on expenses
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- policy: allow logged-in user to delete their own rows
create policy "delete own expenses" on expenses
  for delete
  using (auth.uid() = user_id);
