#!/bin/bash

cd /home/node/extrato

npm install
npx prisma db push
npm run start