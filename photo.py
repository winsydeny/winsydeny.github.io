from pathlib import Path
import os

def is_dir(file_name):
  return os.path.isdir(file_name)


def is_img():
  pass

def is_empty_fold(path):
  return not os.listdir(path)
  

#  照片不完整 照片完整
# 照片不完整 => 身份证 户口本 房屋照片




path = './test'
entries_1 = Path(path)
for entry_1 in entries_1.iterdir():
  print('wrap1=>',path+'/'+entry_1.name)
  print(os.path.isdir(path+'/'+entry_1.name))
  if os.path.isdir(path+'/'+entry_1.name):
    print('w')
    entries_2 = Path(os.path.join(path,entry_1.name))
    for entry_2 in entries_2.iterdir():
      print('wrap2=>',entry_2.name)

      if is_dir(entry_2.name):
        if is_empty_fold(path + entries_2.name):
          print('空文件')


      


# print(os.path.isdir('./test/1'))

# cwd = os.getcwd()
# print(cwd)
# def file():
#   with open('data.txt','r',encoding='utf-8') as f:
#     print(f.read())


# file()