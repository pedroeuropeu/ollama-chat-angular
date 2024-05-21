FROM nginx:alpine
COPY dist/chat/ /usr/share/nginx/html
COPY src/env.js /usr/share/nginx/html/env.js
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
