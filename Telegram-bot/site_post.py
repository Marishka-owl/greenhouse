#import httplib, urllib #py2
import http.client, urllib.parse
import serial
import time
import sys
import random

#data = sys.stdin.readline() #read from consol
ser = serial.Serial('COM6', 9600, dsrdtr = 1,timeout = 0)

def doit():
    
   #print field
   #field='var'
   #var=random.uniform(19,27)
   serialline = ser.readline()#.split('\n')
   var=0
   if serialline:#[0]:
      var = serialline#[0]
   print ("var=", var)
   #params = urllib.urlencode({field: var}) #py2
   params = urllib.parse.urlencode({'var': var})
   headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}
   #conn = httplib.HTTPConnection("192.168.107.132:80") #py2
   conn = http.client.HTTPConnection("192.168.44.128:80")
   conn.request("POST", "/get_sensor_data.php", params, headers)
   response = conn.getresponse()
   print (response.status, response.reason)
   data = response.read()
   conn.close()
    
      
#sleep for 16 seconds (api limit of 15 secs)
if __name__ == "__main__":
    while True:
        doit()
        time.sleep(16)