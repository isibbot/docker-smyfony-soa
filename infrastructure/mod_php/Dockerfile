FROM debian:jessie
RUN apt-get clean && \
    apt-get update && \
    apt-get install -y --force-yes \
        apache2 \
        php5 \
        php5-curl \
        php5-gd \
        php5-mysql \
        php5-xdebug \
        php5-xsl \
        nano \
        curl \
        make \  
        build-essential \
        git

RUN curl -o /tmp/composer-setup.php https://getcomposer.org/installer \
 && curl -o /tmp/composer-setup.sig https://composer.github.io/installer.sig \
 && php -r "if (hash('SHA384', file_get_contents('/tmp/composer-setup.php')) !== trim(file_get_contents('/tmp/composer-setup.sig'))) { unlink('/tmp/composer-setup.php'); echo 'Invalid installer' . PHP_EOL; exit(1); }"

RUN php /tmp/composer-setup.php

RUN mv /tmp/composer-setup.php /usr/local/bin/composer
RUN echo "xdebug.remote_enable=1" >> /etc/php5/mods-available/xdebug.ini \
    && echo "xdebug.remote_autostart=1" >> /etc/php5/mods-available/xdebug.ini

RUN curl -sL https://deb.nodesource.com/setup_6.x |  bash -
RUN apt-get install -y nodejs

RUN npm install -g bower gulp
RUN npm install typings --global
RUN a2enmod \
            php5 \
        rewrite

RUN usermod -u 1000 www-data

# add domain configuration for symfony app and webservice
ADD vhosts.conf /etc/apache2/sites-enabled/

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP    www-data
ENV APACHE_LOG_DIR  /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2.pid

EXPOSE 80
EXPOSE 443

CMD /usr/sbin/apache2ctl -D FOREGROUND