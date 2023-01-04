# Generates mdx files for photos in the csv and adds the posts to the repo
# Steps
# 1. Read csv with format (filename, title, tags[colon separated], summary)
# 2. Generate mdx
# 3. Move photo to proper location, given the tags
# 4. Move mdx file to proper location, given the tags
from datetime import date
import csv
import shutil
from exif import Image
import sys, os

def generateMdx(filename, title, tags, summary, captureDate):
  file = getPhotoFolder(tags) + filename
  tagsString = "['" + ('\',\'').join(tags.split(':')) + "']"

  mdx = f"""---
title: '{title}'
date: '{captureDate}'
postedDate: '{date.today()}'
tags: {tagsString}
type: 'Photo'
image: '{file}'
thumbnail: '{file}'
summary: '{summary}'
draft: true
---

# {title}

![{title}]({file})

"""

  return mdx

def getPhotoFolder(tags):
  prefix = '/static/images/'
  return getFolder(prefix, tags)

def getAbsolutePhotoFolder(tags):
  directory = os.getcwd().replace('scripts', '')
  prefix = directory + 'public/static/images/'
  return getFolder(prefix, tags)

def getMdxFolder(tags):
  directory = os.getcwd().replace('scripts', '')
  prefix = directory + 'data/blog/'
  return getFolder(prefix, tags)

def getFolder(prefix, tags):
  if 'kayaking' in tags or 'whitewater' in tags:
    return prefix + 'kayaking/'
  elif 'outdoors' in tags:
    return prefix + 'outdoors/'
  else:
    return prefix + 'photography/'

# Assumes 2014:12:21 11:13:53 format
def getCaptureDate(img):
  captureDate = img.get("datetime_original")
  captureDate = captureDate.split(' ')[0].replace(':', '-')
  return captureDate

def process(csvFile, folder):
  with open(csvFile, 'r') as f:
    reader = csv.reader(f)

    for (filename, title, tags, summary) in reader:
      processFile(filename, title, tags, summary, folder)

def processFile(filename, title, tags, summary, folder):
  imageFile = folder + filename
  with open(imageFile, 'rb') as imageF:
    img = Image(imageF)
    captureDate = getCaptureDate(img)

    exifList = ['x_resolution', 'y_resolution', 'resolution_unit', '_exif_ifd_pointer', 'exif_version', 'color_space']
    for x in img.list_all():
      if x not in exifList:
        img.delete(x)

    mdx = generateMdx(filename, title, tags, summary, captureDate)

    # Create Mdx file
    t = filename.split('.')[0]
    mdxFile = getMdxFolder(tags) + t.lower() + '.mdx'
    with open(mdxFile, 'w') as mf:
      mf.write(mdx)

    with open(getAbsolutePhotoFolder(tags) + filename, 'wb') as newImageF:
      newImageF.write(img.get_file())

if __name__ == "__main__":
  csvFile = sys.argv[1]
  folder = sys.argv[2]
  print('here')

  process(csvFile, folder)