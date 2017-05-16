import serial
import os
import sys
 
#открываем порт
ser = serial.Serial('COM6', 9600, dsrdtr = 1,timeout = 0)
 
#маршрутизация данных
def mySwitch():
	time.sleep(0.2)
	serialline = ser.readline().split('\n')
	mydata = serialline[0]
	print (mydata)
 
#процедура передачи данных в порт
#включение светодиода (тест)
def ledON():
      ser.write("Y") 
      print ('led ON')
 
#проба записать что-то в порт
ledON()
 
#основной цикл программы
while 1:
       
      #запуск чтения из порта и маршрутизация по файлам
      try:
            mySwitch()
 
      #выход по Ctrl+C
      except KeyboardInterrupt:
            break
 
      
#выключаем светодиод
ser.write("N")
print ('led OFF')
 
#закрываем порт
ser.close()