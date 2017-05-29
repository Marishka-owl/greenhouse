import requests
import serial
import sys
import time
import random
import telepot

from pyparsing import * 
number = Word(nums)
slash = Literal('|').suppress()
comma = Literal(',').suppress()
point = number + ZeroOrMore(slash + number)
parse_module = point + ZeroOrMore(comma + point)

URL = 'https://api.telegram.org/bot'
TOKEN='383512652:AAG0T4k4ssAwWwyhpzTxq7tMuq210Ly3o2w'
ser = serial.Serial('/dev/ttyUSB1', 9600, dsrdtr = 1,timeout = 0)
st = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
t =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
dd = 0
div_mes = 2

def doit(line):
	if line: 
		st = parse_module.parseString(line)
		print st
		if (st[0] == 0):
			if (t[0] == 0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!NO WATER!!!')
				print 'Send message to 384131126'
			t[0]=(t[0] + 1) % div_mes
		if (int(st[1]) < 60 or int(st[1]) > 85):
			if (t[1] == 0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!CRITICAL SOIL HUMIDITY!!!')
				print 'Send message to 384131126'
			t[1]=(t[1] + 1) % div_mes
		if (int(st[3]) < 700 or int(st[3]) > 850):
			if (t[3] == 0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!CRITICAL ILLUMINATION!!!')
				print 'Send message to 384131126'
			t[3]=(t[3] + 1) % div_mes
		if (int(st[5]) < 18 or int(st[5]) > 27):
			if (t[5] == 0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!CRITICAL TEMPERATURE!!!')
				print 'Send message to 384131126'
			t[5]=(t[5] + 1) % div_mes
		if (int(st[6]) < 50 or int(st[6]) > 90):
			if (t[6] == 0):
				bot.sendMessage(384131126, '!!!Warning!!!\n!!!CRITICAL HUMIDITY!!!')
				print 'Send message to 384131126'
			t[6]=(t[6] + 1) % div_mes

def ans(msg, line):
	if line: #[0]:
		stm = parse_module.parseString(line)
	chat_id = msg[0]['message']['chat']['id']
	command = msg[0]['message']['text']
		
	print 'Got commang: %s from %s' % (command, chat_id)
	if command == '/device_info':
		q = 'temp = %s C\nhum = %s%%\nsoil hum = %s%%\nlight = %s lum ' % (st[5], st[6], st[1], st[3] )
		bot.sendMessage(chat_id, q)
		print 'Send message to %s' % chat_id
	elif command == '/device_info_temp':
		q = 'temp = %s C' % st[5]
		bot.sendMessage(chat_id, q)
		print 'Send message to %s' % chat_id
	elif command == '/device_info_hum':
		q = 'hum = %s%% ' % st[6]
		bot.sendMessage(chat_id, q)
		print 'Send message to %s' % chat_id
	elif command == '/device_info_soil':
		q = 'soil hum = %s%% ' % st[1]
		bot.sendMessage(chat_id, q)
		print 'Send message to %s' % chat_id
	elif command == '/device_info_light':
		q = 'light = %s lum' % st[3]
		bot.sendMessage(chat_id, q)
		print 'Send message to %s' % chat_id
	elif command == '/qqq':
		bot.sendMessage(chat_id, 'check!\2')
		print 'Send message to %s' % chat_id

bot = telepot.Bot(TOKEN)
msg_id = 0
time.sleep(4)
while True:
	if dd==0:
		serialline = ser.readline()#.split('\n')	
		doit(serialline)
	dd=(dd+1)%5
	up = bot.getUpdates(msg_id+1)
	if (up):
		print up
		msg_id = up[0]['update_id']		
		ans(up, serialline)
	time.sleep(1)
