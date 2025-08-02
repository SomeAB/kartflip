## Common Development Commands

This document lists frequently used commands for development and maintenance tasks in the KartFlip project. Each command includes a brief explanation and the exact syntax to use.

---

### 1. Collect Static Files

Use this command to collect all static files from your Django project into the static root directory inside the running Daphne container. This updates in a silent manner, thanks to the `--noinput` flag

```sh
docker exec -it kf_daphne python manage.py collectstatic --noinput
```

### 2. Rebuild and Restart All Docker Services

Use this command to stop all running containers, rebuild the images, and start the services again in detached mode. This is useful after making changes to Dockerfiles or dependencies.

```sh
docker-compose down; docker-compose build; docker-compose up -d
```
