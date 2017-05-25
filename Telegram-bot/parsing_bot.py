import requests
import serial
import sys
import time
import random
import telepot

from pyparsing import * #nums,  ZeroOrMore
number = Word(nums)
slash = Literal('|').suppress()
comma = Literal(',').suppress()
point = number + ZeroOrMore(slash + number)
parse_module = point + ZeroOrMore(comma + point)

URL = 'https://api.telegram.org/bot'
TOKEN='383512652:AAG0T4k4ssAwWwyhpzTxq7tMuq210Ly3o2w'
ser = serial.Serial('/dev/ttyUSB0', 9600, dsrdtr = 1,timeout = 0)
st = [0, 0, 0, 0, 0]
t =  [0, 0, 0, 0, 0]

def doit():
	ser.write('Y')
	serialline = ser.readline()#.split('\n')
	if serialline: #[0]:
		st = parse_module.parseString(serialline)
		print st

		if (int(st[0]) < 20 or int(st[0]) > 28):
			if (t[0]==0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!CRITICAL TEMPERATURE!!!')
			t[0]=(t[0]+1)%10
		else:	t[0]=0
		if (int(st[1]) < 15 or int(st[1]) > 85):
			if (t[1]==0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!CRITICAL HUMIDITY!!!')
			t[1]=(t[1]+1)%10
		else:	t[1]=0


def handle(msg):
	chat_id = msg['chat']['id']
	command = msg['text']
	serialline = ser.readline()#.split('\n')
	if serialline: #[0]:
		stm = parse_module.parseString(serialline)
		
	print 'Got commang: %s from %s' % (command, chat_id)
#	st = parse_module.parseString(data_in).asList()
	if command == '/device_info':
	#	st = parse_module.parseString(data_in).asList()
		q = 'temp = %s C\nhum = %s%% ' % (stm[0], stm[1])
		bot.sendMessage(chat_id, q)
	elif command == '/device_info_temp':
	#	st = parse_module.parseString(data_in).asList()
		q = 'temp = %s C' % stm[0]
		bot.sendMessage(chat_id, q)
	elif command == '/device_info_hum':
	#	st = parse_module.parseString(data_in).asList()
		q = 'hum = %s %% ' % stm[1]
		bot.sendMessage(chat_id, q)
	elif command == '/qqq':
		bot.sendMessage(chat_id, 'check!')

bot = telepot.Bot(TOKEN)
bot.message_loop(handle)

time.sleep(2)

while True:
	doit()
	time.sleep(2)

