# Run Your Stack with Docker Compose

mentor-starter. Docker Compose v2, Bash and curl required. No host Node or PostgreSQL. Use only dummy credentials. App explicitly reads DB_PASSWORD_FILE; PostgreSQL image supports POSTGRES_PASSWORD_FILE. Local Compose secret files remain host-backed plaintext, not vault storage.

Before class/practice: mkdir -p secrets; create secrets/db_password.txt with a dummy-only string locally. Do not commit or screenshot contents. Copy .env.example to .env; set available HOST_PORT (mentor 8085, student 8086).

Create a fresh exercise volume once: docker volume create lu210-demo-data
Use project consistently: docker compose -p lu210-demo config --quiet
Start: docker compose -p lu210-demo up -d --build
Inspect: docker compose -p lu210-demo ps
Request /health, /ready and /api/events on chosen host port.
Stop/remove known stack: docker compose -p lu210-demo down
Inspect retained volume: docker volume inspect lu210-demo-data

No down -v or prune. External volume must already exist; reuse only your own exercise volume. DB init scripts run only on empty data directory; editing local password does not change an existing database password. Choose fresh exercise names if unknown collision. Never delete shared data to fix init/auth errors. Database port is not published. DB service name is internal hostname, not localhost or host port. Healthcheck orders initial startup only; it is not ongoing failure recovery. Syntax validation does not prove credentials/readiness.
