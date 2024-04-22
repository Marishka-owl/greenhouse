/*pins*/
#define PUMP_PIN 10
#define WATERLEV_OUT_PIN 8
#define WATERLEV_IN_PIN 7
#define SOILH_PIN A0
#define LED_PIN 13
#define LED_STRIP 12
/*states of the automat*/
#define STATE_STANDBY 0
#define STATE_WATERING 1
//#define STATE_NOWATER 2
int State = STATE_STANDBY; 
#define PUMP_ON LOW
#define PUMP_OFF HIGH


//sensors' information
int soil_hum;
boolean no_water, soil_ok;
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
  digitalWrite(PUMP_PIN, PUMP_OFF);
  digitalWrite(LED_PIN, HIGH);
  digitalWrite(LED_STRIP, LOW);
  Serial.begin(9600);
  
}

void loop() {
  //Serial.print("State: ");
  //Serial.println(State);
  data_send = String("");
  data_send = data_send+State+"|";
  switch(State){
    case STATE_STANDBY:
      if(!check_water()){
        no_water = true;//State = STATE_NOWATER;
        // break;
      }
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
      str = String("");
      str = str+ no_water+"|"+soil_hum+","+soil_ok;
      data_send += str;
      Serial.println(data_send);        
      delay (10000);
    break;
    
    case STATE_WATERING:
      digitalWrite(LED_PIN, LOW);
      digitalWrite(PUMP_PIN, PUMP_ON);
      //Serial.println("!start watering");
      delay(10000);
      digitalWrite(PUMP_PIN, PUMP_OFF);
     // Serial.println("!end watering");
      State = STATE_STANDBY;
      digitalWrite(LED_PIN, HIGH);
    break;
    
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
}

int check_soil(){
  int soilh_val = analogRead(SOILH_PIN);
  //Serial.println(soilh_val);
  return soilh_val;
}
