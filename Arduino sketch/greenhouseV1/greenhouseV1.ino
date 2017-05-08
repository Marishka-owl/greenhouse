#include <dht11.h>
dht11 DHT;

/*pins*/
#define PUMP_PIN 9
#define WATERLEV_OUT_PIN 8
#define WATERLEV_IN_PIN 7
#define PHOTO_PIN A1
#define SOILH_PIN A0
#define DHT11_PIN 4
#define LED_PIN 13
#define LED_STRIP 12
/*states of the automat*/
#define STATE_STANDBY 0
#define STATE_WATERING 1
//#define STATE_NOWATER 2
int State = STATE_STANDBY; 

//sensors' information
int soil_hum, light, temp, hum;
boolean no_water, soil_ok, light_ok, temp_ok, hum_ok;
boolean dht_error, dht_error_fl1, dht_error_fl2;
//string for Serial port
String data_send= String ("");
String str = String("");

void setup() {
  // put your setup code here, to run once:
  pinMode(PUMP_PIN, OUTPUT);
  pinMode(WATERLEV_OUT_PIN, OUTPUT);
  pinMode(WATERLEV_IN_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
  pinMode(LED_STRIP, OUTPUT);
  digitalWrite(WATERLEV_OUT_PIN, HIGH);
  digitalWrite(LED_PIN, HIGH);
  digitalWrite(LED_STRIP, LOW);
  Serial.begin(9600);
  dht_error = dht_error_fl1 = dht_error_fl2 = false;
  
}

void loop() {
  //Serial.print("State: ");
  //Serial.println(State);
  data_send = String("");
  data_send = data_send+State+"|";
  switch(State){
    case STATE_STANDBY:
      if(!check_water())
        no_water = true;//State = STATE_NOWATER;
      else
        no_water = false;
        
      check_conditions();
      //check soil_hum
      if (soil_hum > 800){
        soil_ok = false;
        if (!no_water)
           State = STATE_WATERING;
      }
      else soil_ok = true;//Serial.println("soil OK");
      //check light
      if (light>120){
        light_ok=false;//Serial.println("light NO");
        digitalWrite(LED_STRIP, HIGH);
      }
      else{ 
        light_ok=true;//Serial.println("light OK");
        digitalWrite(LED_STRIP, LOW);
      }
      //check temp
      if (temp<20.0)
        temp_ok = false;//Serial.println("temp NO");
      else 
        temp_ok = true;//Serial.println("temp OK");
      str = String("");
      str = str+ no_water+"|"+soil_hum+","+soil_ok+"|"+light+","+light_ok+"|"+temp+","+hum+","+temp_ok+","+dht_error+","+dht_error_fl1+","+dht_error_fl2;
      data_send += str;
      Serial.println(data_send);        
      delay (1000);
    break;
    
    case STATE_WATERING:
      digitalWrite(PUMP_PIN, HIGH);
      //Serial.println("!start watering");
      delay(1000);
      digitalWrite(PUMP_PIN, LOW);
     // Serial.println("!end watering");
      State = STATE_STANDBY;
    break;
    
    /*case STATE_NOWATER:
      digitalWrite(LED_PIN, HIGH);
      Serial.println("NO WATER!");
      delay (1000);
      if(!no_water()){
        State = STATE_STANDBY;
        digitalWrite(LED_PIN, LOW);
      }
    break;*/
    default: State = STATE_STANDBY; break;
  }
}

boolean check_water(){
  digitalWrite(WATERLEV_OUT_PIN, LOW);
  boolean water = digitalRead(WATERLEV_IN_PIN);
  digitalWrite(WATERLEV_OUT_PIN, HIGH);
  if (water)
    return false;
  else 
    return true;
}

void check_conditions(){
  soil_hum = check_soil();
  light = check_light();
  dht_error = check_temp();
  
  /*Serial.print(soil_hum);
  Serial.print(",\t");
  Serial.print(temp);
  Serial.print(",\t");
  Serial.println(light);*/
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

int check_soil(){
  int soilh_val = analogRead(SOILH_PIN);
  //Serial.println(soilh_val);
  return soilh_val;
}

int check_light(){
  int light = analogRead(PHOTO_PIN);
  //Serial.println(light);
  return light;
}

