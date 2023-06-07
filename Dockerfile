FROM cypress/included:10.7.0
RUN mkdir /cypressdocker
WORKDIR /cypressdocker
COPY ./cypress .
RUN npm install
ENTRYPOINT ["npm", "run"]
