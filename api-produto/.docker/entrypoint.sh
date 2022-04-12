#!/bin/bash

cd /home/node/produto

npm install
npx prisma db push
npm run start