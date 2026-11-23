# Campus Events Stack: Mentor Demo

Campus Events API and PostgreSQL, described in one `compose.yaml`. This copy has one planned mistake: `DB_HOST` is `localhost`. Use it to show health 200 but readiness 503, then fix it live.

## Before class

```bash
cp .env.example .env                 # then set HOST_PORT=8085
mkdir -p secrets
printf 'DUMMY_PRACTICE_ONLY\n' > secrets/db_password.txt
docker volume create campus-demo-data
docker compose -p campus-demo config --quiet
docker compose -p campus-demo build
```

## Run

```bash
docker compose -p campus-demo up -d
curl --noproxy '*' -i http://127.0.0.1:8085/health
curl --noproxy '*' -i http://127.0.0.1:8085/ready
docker compose -p campus-demo down
```

Use a dummy password only. Never run `down -v` or `docker system prune`.
