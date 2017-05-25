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
dd = 0
div_mes = 2

def doit(line):
#	serialline = ser.readline()#.split('\n')
	if line: #[0]:
		st = parse_module.parseString(line)
		print st
		if (int(st[0]) < 20 or int(st[0]) > 28):
			if (t[0] == 0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!CRITICAL TEMPERATURE!!!')
				print 'Send message to 384131126' 
			t[0]=(t[0] + 1) % div_mes
		else:	t[0]=0
		if (int(st[1]) < 15 or int(st[1]) > 85):
			if (t[1] == 0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!CRITICAL HUMIDITY!!!')
				print 'Send message to 384131126'
			t[1]=(t[1] + 1) % div_mes
		else:	t[1]=0

def ans(msg, line):
	if line: #[0]:
		stm = parse_module.parseString(line)
	chat_id = msg[0]['message']['chat']['id']
	command = msg[0]['message']['text']
#	serialline = ser.readline()#.split('\n')
		
	print 'Got commang: %s from %s' % (command, chat_id)
	if command == '/device_info_hum':
		q = 'hum = %s %% ' % stm[1]
		bot.sendMessage(chat_id, q)
		print 'Send message to %s' % chat_id
	elif command == '/device_info_temp':
		q = 'temp = %s C' % stm[0]
		bot.sendMessage(chat_id, q)
		print 'Send message to %s' % chat_id
	elif command == '/device_info':
		q = 'temp = %s C\nhum = %s%% ' % (stm[0], stm[1])
		bot.sendMessage(chat_id, q)
		print 'Send message to %s' % chat_id
	elif command == '/qqq':
		bot.sendMessage(chat_id, 'check!')
		print 'Send message to %s' % chat_id

bot = telepot.Bot(TOKEN)
time.sleep(2)
msg_id = 0
while True:
	if dd==0:
		serialline = ser.readline()#.split('\n')	
		doit(serialline)
	dd=(dd+1)%5
	up = bot.getUpdates(msg_id+1)
	if (up):
		msg_id = up[0]['update_id']		
		ans(up, serialline)
	time.sleep(1)
