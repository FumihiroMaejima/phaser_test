# FROM nginx:1.17.7
FROM nginx:1.18-alpine

WORKDIR /var/www/

RUN apk update && \
    apk add --update --no-cache --virtual=.build-dependencies && \
    apk add --update \
    nodejs \
    npm && \
    npm install -g yarn && \
    yarn global add @vue/cli
    #  && \
    # yarn install && \
    # yarn build

CMD ["nginx", "-g", "daemon off;","-c","/etc/nginx/nginx.conf"]
