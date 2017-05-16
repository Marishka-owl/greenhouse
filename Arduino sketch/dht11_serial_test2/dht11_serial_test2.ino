#include <dht11.h>
dht11 DHT;
#define DHT11_PIN 4

//переменные для работы
int temp, hum;
boolean dht_error, dht_error_fl1, dht_error_fl2;

//инициализация (до запуска основного цикла)
void setup(){
  Serial.begin(9600); //разрешение работы serialport
  pinMode(13, OUTPUT); //подключение 13 пина на выход
  dht_error = dht_error_fl1 = dht_error_fl2 = false; //начальные значения ошибок
}

//основной цикл
void loop(){
  String data_send = String("");
  char msg = ' ';
  if (Serial.available()>0){  //проверка наличия принятых сообщений на порте
    msg = Serial.read();  //если есть, то считываем
  }
   
  //разбор прочитанных из порта данных
  if (msg=='Y') {  
    digitalWrite(13, HIGH);  // включаю светодиод  
 
  } else if (msg=='N') {  
    digitalWrite(13, LOW);   // выключаю светодиод  
  }
  
  //считывание данных с датчика
  dht_error = check_temp(); //1 - без ошибок, 0 - есть ошибки
  //формирование строки
  data_send = data_send+temp+","+hum+"|"+dht_error+","+dht_error_fl1+","+dht_error_fl2;
  //отправка
  Serial.println(data_send);
  //Serial.println(temp,1); //запись в порт

  delay(1000);
}

boolean check_temp(){
  //Serial.print("DHT11, \t");
  int chk = DHT.read(DHT11_PIN);    // READ DATA
  if (chk==DHTLIB_OK){
    // DISPLAT DATA
    //Serial.print(DHT.humidity,1);
    //Serial.print(",\t");
    //Serial.println(DHT.temperature,1);
    temp = DHT.temperature;
    hum = DHT.humidity;
    dht_error_fl1 = false;
    dht_error_fl2 = false;
    return true;
  }
  else{
    switch (chk){
      case DHTLIB_ERROR_CHECKSUM: 
                  dht_error_fl1 = false;
                  dht_error_fl2 = true;
                  //Serial.print("DHT11 Checksum error,\t"); 
                  break;
      case DHTLIB_ERROR_TIMEOUT: 
                  dht_error_fl1 = true;
                  dht_error_fl2 = false;
                  //Serial.print("DHT11 Time out error,\t"); 
                  break;
      default: 
                dht_error_fl1 = true;
                dht_error_fl2 = true;
                // Serial.print("DHT11 Unknown error,\t"); 
                break;
    }
    temp=hum=0;
    return false;
  }
}
