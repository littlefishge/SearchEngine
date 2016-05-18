#! /usr/bin/env python
# coding=utf8

import logging
import json
import codecs

json_file = 'sites.json'
csv_file = 'sites.csv'

rst = ['category,subcategory,webname,weblink,imgpath,description\n', ]
with codecs.open(json_file, 'r', 'utf8') as f:
    for k, v in json.load(f).items():
        for item in v:
            try:
                line = '%s,%s,%s,%s,%s,%s\n' % (
                    k,
                    item.get('subcategory', ''),
                    item.get('webname', ''),
                    item.get('weblink', ''),
                    item.get('imgpath', ''),
                    item.get('description', ''),
                )
                rst.append(line)
            except:
                logging.exception('wrong item: %s', json.dumps(item))



with codecs.open(csv_file, 'w', 'utf8') as f:
    f.writelines(rst)
