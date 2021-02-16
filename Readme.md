##Фронтальный компонент

### Запуск контейнера для отлдадки

Сборка контейнера
```
docker build -t sample:dev .
```

Запуск
```
docker run \
    -itd \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```

### Запуск и сборка  prod ready контейнера

Сборка проекта
```
docker build -f Dockerfile.prod -t sample:prod .
```

Запуск контейнера
```
docker run -it --rm -p 1337:80 sample:prod
```

Пуш проекта в репозиторий
```
docker push kudddy/frontend:latest
```

### Полезная статья с мануалом
```
https://mherman.org/blog/dockerizing-a-react-app/
```