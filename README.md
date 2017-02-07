# docker-smyfony-soa

### Intent

This project is an learning and example into using..

* Docker (Via Dockerfile and docker-compose)
* Composer
* Symfony
  * Doctrine
* Mysql

With a final aim to produce a simple REST api with symfony which will be consumed by one of the plethora of modern Javascript frameworks.

### Prerequisites

##### PHP and some of its pals.
`sudo apt-get install php7.0 php7.0-mbstring php7.0-zip php7.0-xml`

Pre-empt symfony from complaining and set php.ini `date.timezone = Europe/London`

`sudo vi /etc/php/7.0/cli/php.ini`

##### Composer
`sudo apt install composer`

##### Symfony
```
sudo mkdir -p /usr/local/bin
sudo curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
sudo chmod a+x /usr/local/bin/symfony
```


