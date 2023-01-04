# Reads the file names in the given folder into a csv
import sys, os
FILE = 'pictures.csv'

def writeToCsv(folder):
  files = os.listdir(folder)
  print(files)
  with open(folder + FILE, 'w') as f:
    for file in files:
      f.write(file + ',\n')

if __name__ == "__main__":
  folder = sys.argv[1]

  writeToCsv(folder)
  print(folder)
