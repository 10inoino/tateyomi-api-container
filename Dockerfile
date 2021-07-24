FROM node:14

# install nest.js
RUN npm install -g @nestjs/cli

# install serverless framework and other
RUN npm install -g serverless
RUN npm i -S aws-lambda aws-serverless-express express
RUN npm i -D @types/aws-serverless-express serverless-layers

WORKDIR /var/task