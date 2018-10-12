FROM node:10.12.0-alpine as frontend_dist
ENV appdir /frontend
WORKDIR /frontend
COPY frontend/package.json .
RUN yarn
COPY frontend .
RUN yarn run build


FROM node:10.12.0-alpine as webapp
ENV serverDir /var/webapp
RUN mkdir -p ${serverDir}
WORKDIR ${serverDir}
COPY ./api/package.json /tmp
RUN cd /tmp && yarn 
RUN cd ${serverDir} && ln -s /tmp/node_modules

COPY api .
COPY --from=frontend_dist /frontend/dist ./public

RUN yarn run build-server

EXPOSE 9095
CMD [ "yarn", "run", "start" ]
