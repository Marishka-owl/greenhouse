#send notification
import requests
import sys
import time
import random

URL = 'https://api.telegram.org/bot'
TOKEN='347565674:AAHhPyMvmHwNQ9fCX-lVcCIFdOK4mnu6GBA' 

def doit():
    var = random.uniform(19,27)
    print "var=", var
    if (var>22):
        message_data = {'chat_id': '367449014', 'text': "!!!Warning!!!"}

        try:
            request = requests.post(URL+TOKEN+'/sendMessage', data=message_data)
        except:
            print('Send message error')
            return False

        if not request.status_code == 200:
            return False
#bot.sendMessage(367449014, 'Warring!')
while True:
    doit()
    time.sleep(16)
    
