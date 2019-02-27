FROM anapsix/alpine-java
MAINTAINER bronius.janonis@gmail.com
ADD word-parser-fe.jar /opt/word-parser-fe.jar
ADD start.sh .
EXPOSE 8090
CMD ["bash", "start.sh"]