#!/usr/bin/env bash

wget -O /tmp/nginx.key http://nginx.org/keys/nginx_signing.key
apt-key add /tmp/nginx.key
echo "deb http://nginx.org/packages/ubuntu/ trusty nginx" > /etc/apt/sources.list.d/nginx.list

apt-get update
apt-get dist-upgrade -y
apt-get install -y nginx

service nginx stop

update-rc.d nginx remove
rm /etc/init.d/nginx

cp /vagrant/vagrant/etc/nginx.upstart.conf /etc/init/nginx.conf
rm /etc/nginx/conf.d/default.conf
ln -fs /vagrant/vagrant/etc/nginx.conf /etc/nginx/conf.d/default.conf

service nginx start
