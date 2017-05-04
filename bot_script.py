#just hello
#import telepot
#token = "347565674:AAHhPyMvmHwNQ9fCX-lVcCIFdOK4mnu6GBA"
#TelegramBot = telepot.Bot(token)
#print TelegramBot.getMe()
#TelegramBot.sendMessage(367449014, 'Hey!')
#from pprint import pprint
#response = TelegramBot.getUpdates()
#pprint(response)

import sys
import time
import telepot

def handle(msg):
    content_type, chat_type, chat_id = telepot.glance(msg)
    print(content_type, chat_type, chat_id)

    if content_type == 'text':
        bot.sendMessage(chat_id, msg['text'])

TOKEN = "347565674:AAHhPyMvmHwNQ9fCX-lVcCIFdOK4mnu6GBA"
#=sys.argv[1]  # get token from command-line

bot = telepot.Bot(TOKEN)
bot.message_loop(handle)
print ('Listening ...')

# Keep the program running.
while 1:
    time.sleep(10)
