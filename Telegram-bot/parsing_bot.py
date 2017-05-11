import sys
import time
import random
import datetime
import telepot

from pyparsing import * #nums,  ZeroOrMore
number = Word(nums)
slash = Literal('|').suppress()
comma = Literal(',').suppress()
point = number + ZeroOrMore(slash + number)
parse_module = point + ZeroOrMore(comma + point)

data_in = '0|80,1|800,1|22,70,1,1,0,0,0'

parse_module.parseString(data_in)

def handle(msg):
	chat_id = msg['chat']['id']
	command = msg['text']

	print 'Got commang: %s' % command

	if command == '/device_info':
		t = random.randint(18,27)
		h = random.randint(20,100)
		s = random.randint(100,1023)
		l = random.randint(0,1023)
		q = ''
		q = q + 'temp = ' + str(t) +'C\nhum = '+ str(h) + '%\nsoil hum = '+ str(s) + '%\nlight = ' + str(l) + 'lum '
		bot.sendMessage(chat_id, q)
	elif command == '/device_info_temp':
		t = random.randint(18,27)
		bot.sendMessage(chat_id, 'temp = %s C' % t)
	elif command == '/device_info_hum':
		h = random.randint(20,100)
		bot.sendMessage(chat_id, 'hum = ' + str(h) + ' % ')
	elif command == '/device_info_soil':
		s = random.randint(100,1023)
		bot.sendMessage(chat_id, 'soil hum = ' + str(s) + ' % ')
	elif command == '/device_info_light':
		l = random.randint(0,1023)
		bot.sendMessage(chat_id, 'light = %s lum' % l)
	elif command == '/parse':
		st = parse_module.parseString(data_in).asList()
		bot.sendMessage(chat_id, st)
		q = ''
		q = q + 'temp = ' + st[5] +' C\nhum = '+ st[6] + '%\nsoil hum = '+ st[1] + '%\nlight = ' + st[3] + ' lum '
		bot.sendMessage(chat_id, q)

bot = telepot.Bot('383512652:AAG0T4k4ssAwWwyhpzTxq7tMuq210Ly3o2w')
bot.message_loop(handle)
print 'I am listening ...'
while 1:
	time.sleep(10)
