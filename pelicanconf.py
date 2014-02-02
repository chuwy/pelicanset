#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

DEBUG = True

AUTHOR = u'Anton Parkhomenko'
SITENAME = u'chuwy'
SITEURL = ''

TIMEZONE = 'Asia/Krasnoyarsk'

PLUGIN_PATH = 'plugins'
PLUGINS = ['rumonths']

DEFAULT_LANG = u'ru'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

PYGMENTS_RST_OPTIONS = {'linenos': True}

THEME = 'themes/pelican-theme-okam'

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
