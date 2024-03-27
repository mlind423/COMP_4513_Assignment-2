
import Races from "./races";
import Standings from "./standings";
import { useState } from "react";
export default function PrimaryPageContent(props) {
//Might want to reactively request the year on change idk
//For now functionality is being tested on one year sampled from the api
//https://absorbed-deluxe-nyala.glitch.me/api/races/season/2013
const raceData = [{"raceId":880,"year":2013,"round":1,"circuitId":1,"name":"Australian Grand Prix","date":"2013-03-17","time":"06:00:00","url":"http://en.wikipedia.org/wiki/2013_Australian_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":881,"year":2013,"round":2,"circuitId":2,"name":"Malaysian Grand Prix","date":"2013-03-24","time":"08:00:00","url":"http://en.wikipedia.org/wiki/2013_Malaysian_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":882,"year":2013,"round":3,"circuitId":17,"name":"Chinese Grand Prix","date":"2013-04-14","time":"07:00:00","url":"http://en.wikipedia.org/wiki/2013_Chinese_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":883,"year":2013,"round":4,"circuitId":3,"name":"Bahrain Grand Prix","date":"2013-04-21","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_Bahrain_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":884,"year":2013,"round":5,"circuitId":4,"name":"Spanish Grand Prix","date":"2013-05-12","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_Spanish_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":885,"year":2013,"round":6,"circuitId":6,"name":"Monaco Grand Prix","date":"2013-05-26","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_Monaco_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":886,"year":2013,"round":7,"circuitId":7,"name":"Canadian Grand Prix","date":"2013-06-09","time":"18:00:00","url":"http://en.wikipedia.org/wiki/2013_Canadian_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":887,"year":2013,"round":8,"circuitId":9,"name":"British Grand Prix","date":"2013-06-30","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_British_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":888,"year":2013,"round":9,"circuitId":20,"name":"German Grand Prix","date":"2013-07-07","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_German_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":890,"year":2013,"round":10,"circuitId":11,"name":"Hungarian Grand Prix","date":"2013-07-28","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_Hungarian_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":891,"year":2013,"round":11,"circuitId":13,"name":"Belgian Grand Prix","date":"2013-08-25","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_Belgian_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":892,"year":2013,"round":12,"circuitId":14,"name":"Italian Grand Prix","date":"2013-09-08","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_Italian_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":893,"year":2013,"round":13,"circuitId":15,"name":"Singapore Grand Prix","date":"2013-09-22","time":"12:00:00","url":"http://en.wikipedia.org/wiki/2013_Singapore_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":894,"year":2013,"round":14,"circuitId":35,"name":"Korean Grand Prix","date":"2013-10-06","time":"06:00:00","url":"http://en.wikipedia.org/wiki/2013_Korean_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":895,"year":2013,"round":15,"circuitId":22,"name":"Japanese Grand Prix","date":"2013-10-13","time":"06:00:00","url":"http://en.wikipedia.org/wiki/2013_Japanese_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":896,"year":2013,"round":16,"circuitId":68,"name":"Indian Grand Prix","date":"2013-10-27","time":"09:30:00","url":"http://en.wikipedia.org/wiki/2013_Indian_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":897,"year":2013,"round":17,"circuitId":24,"name":"Abu Dhabi Grand Prix","date":"2013-11-03","time":"13:00:00","url":"http://en.wikipedia.org/wiki/2013_Abu_Dhabi_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":898,"year":2013,"round":18,"circuitId":69,"name":"United States Grand Prix","date":"2013-11-17","time":"19:00:00","url":"http://en.wikipedia.org/wiki/2013_United_States_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null},{"raceId":899,"year":2013,"round":19,"circuitId":18,"name":"Brazilian Grand Prix","date":"2013-11-24","time":"16:00:00","url":"http://en.wikipedia.org/wiki/2013_Brazilian_Grand_Prix","fp1_date":null,"fp1_time":null,"fp2_date":null,"fp2_time":null,"fp3_date":null,"fp3_time":null,"quali_date":null,"quali_time":null,"sprint_date":null,"sprint_time":null}]
//Similarily, one might make the case for Results/Standings
//Constructor Standings
//https://absorbed-deluxe-nyala.glitch.me/api/standings/861/constructors
const constructorsStandings = [{"points":55,"position":1,"positionText":"1","wins":1,"constructors":{"name":"McLaren","nationality":"British","constructorRef":"mclaren"}},{"points":42,"position":2,"positionText":"2","wins":0,"constructors":{"name":"Red Bull","nationality":"Austrian","constructorRef":"red_bull"}},{"points":35,"position":3,"positionText":"3","wins":1,"constructors":{"name":"Ferrari","nationality":"Italian","constructorRef":"ferrari"}},{"points":30,"position":4,"positionText":"4","wins":0,"constructors":{"name":"Sauber","nationality":"Swiss","constructorRef":"sauber"}},{"points":16,"position":5,"positionText":"5","wins":0,"constructors":{"name":"Lotus F1","nationality":"British","constructorRef":"lotus_f1"}},{"points":9,"position":6,"positionText":"6","wins":0,"constructors":{"name":"Force India","nationality":"Indian","constructorRef":"force_india"}},{"points":8,"position":7,"positionText":"7","wins":0,"constructors":{"name":"Williams","nationality":"British","constructorRef":"williams"}},{"points":6,"position":8,"positionText":"8","wins":0,"constructors":{"name":"Toro Rosso","nationality":"Italian","constructorRef":"toro_rosso"}},{"points":1,"position":9,"positionText":"9","wins":0,"constructors":{"name":"Mercedes","nationality":"German","constructorRef":"mercedes"}},{"points":0,"position":10,"positionText":"10","wins":0,"constructors":{"name":"Marussia","nationality":"Russian","constructorRef":"marussia"}},{"points":0,"position":11,"positionText":"11","wins":0,"constructors":{"name":"Caterham","nationality":"Malaysian","constructorRef":"caterham"}},{"points":0,"position":12,"positionText":"12","wins":0,"constructors":{"name":"HRT","nationality":"Spanish","constructorRef":"hrt"}}]
//drivers Standings
//https://absorbed-deluxe-nyala.glitch.me/api/standings/861/drivers
const driversStandings= [{"points":"35","position":1,"positionText":"1","wins":"1","drivers":{"code":"ALO","surname":"Alonso","forename":"Fernando","driverRef":"alonso"}},{"points":"30","position":2,"positionText":"2","wins":"0","drivers":{"code":"HAM","surname":"Hamilton","forename":"Lewis","driverRef":"hamilton"}},{"points":"25","position":3,"positionText":"3","wins":"1","drivers":{"code":"BUT","surname":"Button","forename":"Jenson","driverRef":"button"}},{"points":"24","position":4,"positionText":"4","wins":"0","drivers":{"code":"WEB","surname":"Webber","forename":"Mark","driverRef":"webber"}},{"points":"22","position":5,"positionText":"5","wins":"0","drivers":{"code":"PER","surname":"Pérez","forename":"Sergio","driverRef":"perez"}},{"points":"18","position":6,"positionText":"6","wins":"0","drivers":{"code":"VET","surname":"Vettel","forename":"Sebastian","driverRef":"vettel"}},{"points":"16","position":7,"positionText":"7","wins":"0","drivers":{"code":"RAI","surname":"Räikkönen","forename":"Kimi","driverRef":"raikkonen"}},{"points":"8","position":8,"positionText":"8","wins":"0","drivers":{"code":"SEN","surname":"Senna","forename":"Bruno","driverRef":"bruno_senna"}},{"points":"8","position":9,"positionText":"9","wins":"0","drivers":{"code":"KOB","surname":"Kobayashi","forename":"Kamui","driverRef":"kobayashi"}},{"points":"7","position":10,"positionText":"10","wins":"0","drivers":{"code":"DIR","surname":"di Resta","forename":"Paul","driverRef":"resta"}},{"points":"4","position":11,"positionText":"11","wins":"0","drivers":{"code":"VER","surname":"Vergne","forename":"Jean-Éric","driverRef":"vergne"}},{"points":"2","position":12,"positionText":"12","wins":"0","drivers":{"code":"RIC","surname":"Ricciardo","forename":"Daniel","driverRef":"ricciardo"}},{"points":"2","position":13,"positionText":"13","wins":"0","drivers":{"code":"HUL","surname":"Hülkenberg","forename":"Nico","driverRef":"hulkenberg"}},{"points":"1","position":14,"positionText":"14","wins":"0","drivers":{"code":"MSC","surname":"Schumacher","forename":"Michael","driverRef":"michael_schumacher"}},{"points":"0","position":15,"positionText":"15","wins":"0","drivers":{"code":"ROS","surname":"Rosberg","forename":"Nico","driverRef":"rosberg"}},{"points":"0","position":16,"positionText":"16","wins":"0","drivers":{"code":"MAL","surname":"Maldonado","forename":"Pastor","driverRef":"maldonado"}},{"points":"0","position":17,"positionText":"17","wins":"0","drivers":{"code":"GLO","surname":"Glock","forename":"Timo","driverRef":"glock"}},{"points":"0","position":18,"positionText":"18","wins":"0","drivers":{"code":"PIC","surname":"Pic","forename":"Charles","driverRef":"pic"}},{"points":"0","position":19,"positionText":"19","wins":"0","drivers":{"code":"MAS","surname":"Massa","forename":"Felipe","driverRef":"massa"}},{"points":"0","position":20,"positionText":"20","wins":"0","drivers":{"code":"PET","surname":"Petrov","forename":"Vitaly","driverRef":"petrov"}},{"points":"0","position":21,"positionText":"21","wins":"0","drivers":{"code":"KOV","surname":"Kovalainen","forename":"Heikki","driverRef":"kovalainen"}},{"points":"0","position":22,"positionText":"22","wins":"0","drivers":{"code":"KAR","surname":"Karthikeyan","forename":"Narain","driverRef":"karthikeyan"}},{"points":"0","position":23,"positionText":"23","wins":"0","drivers":{"code":"DLR","surname":"de la Rosa","forename":"Pedro","driverRef":"rosa"}},{"points":"0","position":24,"positionText":"24","wins":"0","drivers":{"code":"GRO","surname":"Grosjean","forename":"Romain","driverRef":"grosjean"}}]
const standingsData = {
    drivers: driversStandings,
    constructors: constructorsStandings
}
    return (
        <div id="SM-main">
            <Races id="a" raceData={raceData}></Races>
            <Standings id="SM-standings" data={standingsData}></Standings>
            {/* <div id="SM-standings">
                <h3>Standings</h3>
                <div id="SM-race-content">
                    <div id="SM-drivers">
                        Blah
                    </div>
                    <div id="SM-constructors">
                        Blah
                    </div>
                </div>
            </div> */}
        </div>
    )
}