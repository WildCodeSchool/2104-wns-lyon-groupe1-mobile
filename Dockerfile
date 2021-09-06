FROM node:14.17.5

EXPOSE 19000
EXPOSE 19001

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g expo-cli
COPY src src
COPY public public
COPY assets assets

CMD expo start --web

#===============================================================
# EXPOSE 19000
# EXPOSE 19001

# ENV ADB_IP="192.168.1.98"
# ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.255.255.255"

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN npm install -g expo-cli
# COPY src src
# COPY public public
# COPY assets assets

# CMD expo connect $ADB_IP && \
#     expo start
#===============================================================
