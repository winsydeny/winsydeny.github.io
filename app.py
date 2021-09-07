from bs4 import BeautifulSoup
import bs4
import requests
import re

url = 'https://www.dy2018.com/'
# r = requests.get(url)
# r.encoding = 'gbk'
# # print(r.text)
# soup = BeautifulSoup(r.text, 'html.parser')
# # print(soup)
# list = soup.a
# # list.name = 'href'
# a =  soup.find_all('a')
def file(val):
  with open('data.txt','a',encoding='utf-8') as f:
    f.write(val + '\n')


def get(path):
  r = requests.get(url+path)
  r.encoding = 'gbk'
  soup = BeautifulSoup(r.text, 'html.parser')
  list = soup.find_all('a')
  total_index = 0

  for item in list:
    link = item.string
    if  link and re.search('magnet:',link):
      file(link)
      total_index = total_index + 1
      print('reading the number:',total_index)





def _init(url):
  url = 'https://www.dy2018.com/'
  r = requests.get(url)
  r.encoding = 'gbk'
  soup = BeautifulSoup(r.text, 'html.parser')
  index = 0
  a =  soup.find_all('a')
  for item in a:
      # print(item.attrs)
      # print(item['href'])
      h = item['href']
      if h and re.search('/i/',h):
        get(h)
      index += 1


# _init(url)



class Movies:
  total_index = 0
  def __init__(self):
    # self.url = url
    pass
  def _init(self,url):
    self.url = url
    # if self.url == '':
    #   print('error url')
    #   return 
    # url = 'https://www.dy2018.com/'
    r = requests.get(self.url)
    r.encoding = 'gbk'
    soup = BeautifulSoup(r.text, 'html.parser')
    print(soup)
    index = 0
    a =  soup.find_all('a')
    for item in a:
      # print(item)
        # print(item.attrs)
        # print(item['href'])
      h = item['href']
      if  h and re.search('/html/',h):
        print('more',h)
        self._init(self.url+h)
      else:
        if h and re.search('/i/',h):
          pass
          # self.get(h)
      index += 1
    # print('total',index)



  def file(self,val):
    with open('data.txt','a',encoding='utf-8') as f:
      f.write(val + '\n')
  



  def get(self,path):
    r = requests.get(url+path)
    r.encoding = 'gbk'
    soup = BeautifulSoup(r.text, 'html.parser')
    list = soup.find_all('a')

    for item in list:
      link = item.string
      if  link and re.search('magnet:',link):
        self.file(link)
        self.total_index  +=  1
        print('reading the number:',self.total_index)
# print(m.url)
    # print('context: {}'.format(data))

# print('total:',index)

# magnet:?xt=urn:btih:d360cdcfd6668ecbe1b18a797b2f2d473060448d&dn=机智医生生活第二季第10集.mp4

# get()

m = Movies()

m._init(url)




