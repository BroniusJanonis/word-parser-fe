FROM anapsix/alpine-java
MAINTAINER bronius.janonis@gmail.com
ADD word-parser-fe.war /opt/word-parser-fe.war
ADD start.sh .
EXPOSE 8090
CMD ["bash", "start.sh"]