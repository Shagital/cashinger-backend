'use strict'

/*
|--------------------------------------------------------------------------
| RegionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Region = use('App/Models/Region')

class RegionSeeder {
  async run () {
    console.info('running region seeder');
    let regions = [
      {
        "id": 3901,
        "name": "Badakhshan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "BDS"
      },
      {
        "id": 3871,
        "name": "Badghis",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "BDG"
      },
      {
        "id": 3875,
        "name": "Baghlan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "BGL"
      },
      {
        "id": 3884,
        "name": "Balkh",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "BAL"
      },
      {
        "id": 3872,
        "name": "Bamyan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "BAM"
      },
      {
        "id": 3892,
        "name": "Daykundi",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "DAY"
      },
      {
        "id": 3899,
        "name": "Farah",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "FRA"
      },
      {
        "id": 3889,
        "name": "Faryab",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "FYB"
      },
      {
        "id": 3870,
        "name": "Ghazni",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "GHA"
      },
      {
        "id": 3888,
        "name": "Ghōr",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "GHO"
      },
      {
        "id": 3873,
        "name": "Helmand",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "HEL"
      },
      {
        "id": 3887,
        "name": "Herat",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "HER"
      },
      {
        "id": 3886,
        "name": "Jowzjan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "JOW"
      },
      {
        "id": 3902,
        "name": "Kabul",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "KAB"
      },
      {
        "id": 3890,
        "name": "Kandahar",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "KAN"
      },
      {
        "id": 3879,
        "name": "Kapisa",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "KAP"
      },
      {
        "id": 3878,
        "name": "Khost",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "KHO"
      },
      {
        "id": 3876,
        "name": "Kunar",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "KNR"
      },
      {
        "id": 3900,
        "name": "Kunduz Province",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "KDZ"
      },
      {
        "id": 3891,
        "name": "Laghman",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "LAG"
      },
      {
        "id": 3897,
        "name": "Logar",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "LOG"
      },
      {
        "id": 3882,
        "name": "Nangarhar",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "NAN"
      },
      {
        "id": 3896,
        "name": "Nimruz",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "NIM"
      },
      {
        "id": 3880,
        "name": "Nuristan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "NUR"
      },
      {
        "id": 3894,
        "name": "Paktia",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "PIA"
      },
      {
        "id": 3877,
        "name": "Paktika",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "PKA"
      },
      {
        "id": 3881,
        "name": "Panjshir",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "PAN"
      },
      {
        "id": 3895,
        "name": "Parwan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "PAR"
      },
      {
        "id": 3883,
        "name": "Samangan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "SAM"
      },
      {
        "id": 3885,
        "name": "Sar-e Pol",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "SAR"
      },
      {
        "id": 3893,
        "name": "Takhar",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "TAK"
      },
      {
        "id": 3898,
        "name": "Urozgan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "URU"
      },
      {
        "id": 3874,
        "name": "Zabul",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "ZAB"
      },
      {
        "id": 603,
        "name": "Berat County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "01"
      },
      {
        "id": 629,
        "name": "Berat District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "BR"
      },
      {
        "id": 607,
        "name": "Bulqizë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "BU"
      },
      {
        "id": 618,
        "name": "Delvinë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "DL"
      },
      {
        "id": 608,
        "name": "Devoll District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "DV"
      },
      {
        "id": 610,
        "name": "Dibër County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "09"
      },
      {
        "id": 605,
        "name": "Dibër District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "DI"
      },
      {
        "id": 632,
        "name": "Durrës County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "02"
      },
      {
        "id": 639,
        "name": "Durrës District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "DR"
      },
      {
        "id": 598,
        "name": "Elbasan County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "03"
      },
      {
        "id": 631,
        "name": "Fier County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "04"
      },
      {
        "id": 627,
        "name": "Fier District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "FR"
      },
      {
        "id": 604,
        "name": "Gjirokastër County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "05"
      },
      {
        "id": 621,
        "name": "Gjirokastër District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "GJ"
      },
      {
        "id": 617,
        "name": "Gramsh District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "GR"
      },
      {
        "id": 600,
        "name": "Has District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "HA"
      },
      {
        "id": 594,
        "name": "Kavajë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "KA"
      },
      {
        "id": 628,
        "name": "Kolonjë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "ER"
      },
      {
        "id": 630,
        "name": "Korçë County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "06"
      },
      {
        "id": 597,
        "name": "Korçë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "KO"
      },
      {
        "id": 614,
        "name": "Krujë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "KR"
      },
      {
        "id": 612,
        "name": "Kuçovë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "KC"
      },
      {
        "id": 601,
        "name": "Kukës County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "07"
      },
      {
        "id": 623,
        "name": "Kukës District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "KU"
      },
      {
        "id": 622,
        "name": "Kurbin District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "KB"
      },
      {
        "id": 609,
        "name": "Lezhë County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "08"
      },
      {
        "id": 595,
        "name": "Lezhë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "LE"
      },
      {
        "id": 596,
        "name": "Librazhd District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "LB"
      },
      {
        "id": 599,
        "name": "Lushnjë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "LU"
      },
      {
        "id": 602,
        "name": "Malësi e Madhe District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "MM"
      },
      {
        "id": 637,
        "name": "Mallakastër District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "MK"
      },
      {
        "id": 635,
        "name": "Mat District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "MT"
      },
      {
        "id": 638,
        "name": "Mirditë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "MR"
      },
      {
        "id": 619,
        "name": "Peqin District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "PQ"
      },
      {
        "id": 625,
        "name": "Përmet District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "PR"
      },
      {
        "id": 606,
        "name": "Pogradec District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "PG"
      },
      {
        "id": 620,
        "name": "Pukë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "PU"
      },
      {
        "id": 624,
        "name": "Sarandë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "SR"
      },
      {
        "id": 611,
        "name": "Shkodër County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "10"
      },
      {
        "id": 626,
        "name": "Shkodër District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "SH"
      },
      {
        "id": 593,
        "name": "Skrapar District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "SK"
      },
      {
        "id": 616,
        "name": "Tepelenë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "TE"
      },
      {
        "id": 615,
        "name": "Tirana County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "11"
      },
      {
        "id": 633,
        "name": "Tirana District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "TR"
      },
      {
        "id": 636,
        "name": "Tropojë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "TP"
      },
      {
        "id": 634,
        "name": "Vlorë County",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "12"
      },
      {
        "id": 613,
        "name": "Vlorë District",
        "country_id": 3,
        "country_code": "AL",
        "state_code": "VL"
      },
      {
        "id": 1118,
        "name": "Adrar Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "01"
      },
      {
        "id": 1119,
        "name": "Aïn Defla Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "44"
      },
      {
        "id": 1122,
        "name": "Aïn Témouchent Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "46"
      },
      {
        "id": 1144,
        "name": "Algiers Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "16"
      },
      {
        "id": 1103,
        "name": "Annaba Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "23"
      },
      {
        "id": 1142,
        "name": "Batna Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "05"
      },
      {
        "id": 1108,
        "name": "Béchar Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "08"
      },
      {
        "id": 1128,
        "name": "Béjaïa Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "06"
      },
      {
        "id": 1114,
        "name": "Biskra",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "07"
      },
      {
        "id": 1111,
        "name": "Blida Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "09"
      },
      {
        "id": 1116,
        "name": "Bordj Bou Arréridj Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "34"
      },
      {
        "id": 1104,
        "name": "Bouïra Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "10"
      },
      {
        "id": 1125,
        "name": "Boumerdès Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "35"
      },
      {
        "id": 1105,
        "name": "Chlef Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "02"
      },
      {
        "id": 1121,
        "name": "Constantine Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "25"
      },
      {
        "id": 1098,
        "name": "Djelfa Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "17"
      },
      {
        "id": 1129,
        "name": "El Bayadh Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "32"
      },
      {
        "id": 1099,
        "name": "El Oued Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "39"
      },
      {
        "id": 1100,
        "name": "El Tarf Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "36"
      },
      {
        "id": 1127,
        "name": "Ghardaïa Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "47"
      },
      {
        "id": 1137,
        "name": "Guelma Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "24"
      },
      {
        "id": 1112,
        "name": "Illizi Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "33"
      },
      {
        "id": 1113,
        "name": "Jijel Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "18"
      },
      {
        "id": 1126,
        "name": "Khenchela Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "40"
      },
      {
        "id": 1138,
        "name": "Laghouat Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "03"
      },
      {
        "id": 1134,
        "name": "M'Sila Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "28"
      },
      {
        "id": 1124,
        "name": "Mascara Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "29"
      },
      {
        "id": 1109,
        "name": "Médéa Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "26"
      },
      {
        "id": 1132,
        "name": "Mila Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "43"
      },
      {
        "id": 1140,
        "name": "Mostaganem Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "27"
      },
      {
        "id": 1102,
        "name": "Naama Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "45"
      },
      {
        "id": 1101,
        "name": "Oran Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "31"
      },
      {
        "id": 1139,
        "name": "Ouargla Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "30"
      },
      {
        "id": 1136,
        "name": "Oum El Bouaghi Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "04"
      },
      {
        "id": 1130,
        "name": "Relizane Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "48"
      },
      {
        "id": 1123,
        "name": "Saïda Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "20"
      },
      {
        "id": 1141,
        "name": "Sétif Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "19"
      },
      {
        "id": 1110,
        "name": "Skikda Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "21"
      },
      {
        "id": 1143,
        "name": "Souk Ahras Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "41"
      },
      {
        "id": 1135,
        "name": "Tamanghasset Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "11"
      },
      {
        "id": 1117,
        "name": "Tébessa Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "12"
      },
      {
        "id": 1106,
        "name": "Tiaret Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "14"
      },
      {
        "id": 1120,
        "name": "Tindouf Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "37"
      },
      {
        "id": 1115,
        "name": "Tipasa Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "42"
      },
      {
        "id": 1133,
        "name": "Tissemsilt Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "38"
      },
      {
        "id": 1131,
        "name": "Tizi Ouzou Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "15"
      },
      {
        "id": 1107,
        "name": "Tlemcen Province",
        "country_id": 4,
        "country_code": "DZ",
        "state_code": "13"
      },
      {
        "id": 488,
        "name": "Andorra la Vella",
        "country_id": 6,
        "country_code": "AD",
        "state_code": "07"
      },
      {
        "id": 489,
        "name": "Canillo",
        "country_id": 6,
        "country_code": "AD",
        "state_code": "02"
      },
      {
        "id": 487,
        "name": "Encamp",
        "country_id": 6,
        "country_code": "AD",
        "state_code": "03"
      },
      {
        "id": 492,
        "name": "Escaldes-Engordany",
        "country_id": 6,
        "country_code": "AD",
        "state_code": "08"
      },
      {
        "id": 493,
        "name": "La Massana",
        "country_id": 6,
        "country_code": "AD",
        "state_code": "04"
      },
      {
        "id": 491,
        "name": "Ordino",
        "country_id": 6,
        "country_code": "AD",
        "state_code": "05"
      },
      {
        "id": 490,
        "name": "Sant Julià de Lòria",
        "country_id": 6,
        "country_code": "AD",
        "state_code": "06"
      },
      {
        "id": 221,
        "name": "Bengo Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "BGO"
      },
      {
        "id": 218,
        "name": "Benguela Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "BGU"
      },
      {
        "id": 212,
        "name": "Bié Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "BIE"
      },
      {
        "id": 228,
        "name": "Cabinda Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "CAB"
      },
      {
        "id": 226,
        "name": "Cuando Cubango Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "CCU"
      },
      {
        "id": 217,
        "name": "Cuanza Norte Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "CNO"
      },
      {
        "id": 216,
        "name": "Cuanza Sul",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "CUS"
      },
      {
        "id": 215,
        "name": "Cunene Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "CNN"
      },
      {
        "id": 213,
        "name": "Huambo Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "HUA"
      },
      {
        "id": 225,
        "name": "Huíla Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "HUI"
      },
      {
        "id": 222,
        "name": "Luanda Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "LUA"
      },
      {
        "id": 223,
        "name": "Lunda Norte Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "LNO"
      },
      {
        "id": 220,
        "name": "Lunda Sul Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "LSU"
      },
      {
        "id": 227,
        "name": "Malanje Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "MAL"
      },
      {
        "id": 219,
        "name": "Moxico Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "MOX"
      },
      {
        "id": 224,
        "name": "Uíge Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "UIG"
      },
      {
        "id": 214,
        "name": "Zaire Province",
        "country_id": 7,
        "country_code": "AO",
        "state_code": "ZAI"
      },
      {
        "id": 3708,
        "name": "Barbuda",
        "country_id": 10,
        "country_code": "AG",
        "state_code": "10"
      },
      {
        "id": 3703,
        "name": "Redonda",
        "country_id": 10,
        "country_code": "AG",
        "state_code": "11"
      },
      {
        "id": 3709,
        "name": "Saint George Parish",
        "country_id": 10,
        "country_code": "AG",
        "state_code": "03"
      },
      {
        "id": 3706,
        "name": "Saint John Parish",
        "country_id": 10,
        "country_code": "AG",
        "state_code": "04"
      },
      {
        "id": 3707,
        "name": "Saint Mary Parish",
        "country_id": 10,
        "country_code": "AG",
        "state_code": "05"
      },
      {
        "id": 3705,
        "name": "Saint Paul Parish",
        "country_id": 10,
        "country_code": "AG",
        "state_code": "06"
      },
      {
        "id": 3704,
        "name": "Saint Peter Parish",
        "country_id": 10,
        "country_code": "AG",
        "state_code": "07"
      },
      {
        "id": 3710,
        "name": "Saint Philip Parish",
        "country_id": 10,
        "country_code": "AG",
        "state_code": "08"
      },
      {
        "id": 3656,
        "name": "Buenos Aires",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "C"
      },
      {
        "id": 3647,
        "name": "Catamarca Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "K"
      },
      {
        "id": 3640,
        "name": "Chaco Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "H"
      },
      {
        "id": 3651,
        "name": "Chubut Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "U"
      },
      {
        "id": 3642,
        "name": "Córdoba Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "X"
      },
      {
        "id": 3638,
        "name": "Corrientes",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "W"
      },
      {
        "id": 3654,
        "name": "Entre Ríos Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "E"
      },
      {
        "id": 3652,
        "name": "Formosa Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "P"
      },
      {
        "id": 3645,
        "name": "Jujuy Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "Y"
      },
      {
        "id": 3655,
        "name": "La Pampa",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "L"
      },
      {
        "id": 3653,
        "name": "La Rioja Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "F"
      },
      {
        "id": 3646,
        "name": "Mendoza",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "M"
      },
      {
        "id": 3644,
        "name": "Misiones Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "N"
      },
      {
        "id": 3648,
        "name": "Neuquén Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "Q"
      },
      {
        "id": 3639,
        "name": "Río Negro Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "R"
      },
      {
        "id": 3643,
        "name": "Salta Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "A"
      },
      {
        "id": 3634,
        "name": "San Juan Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "J"
      },
      {
        "id": 3636,
        "name": "San Luis Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "D"
      },
      {
        "id": 3649,
        "name": "Santa Cruz Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "Z"
      },
      {
        "id": 3641,
        "name": "Santa Fe Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "S"
      },
      {
        "id": 3635,
        "name": "Santiago del Estero Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "G"
      },
      {
        "id": 3650,
        "name": "Tierra del Fuego Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "V"
      },
      {
        "id": 3637,
        "name": "Tucumán Province",
        "country_id": 11,
        "country_code": "AR",
        "state_code": "T"
      },
      {
        "id": 2023,
        "name": "Aragatsotn Region",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "AG"
      },
      {
        "id": 2024,
        "name": "Ararat Province",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "AR"
      },
      {
        "id": 2026,
        "name": "Armavir Region",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "AV"
      },
      {
        "id": 2028,
        "name": "Gegharkunik Province",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "GR"
      },
      {
        "id": 2033,
        "name": "Kotayk Region",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "KT"
      },
      {
        "id": 2029,
        "name": "Lori Region",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "LO"
      },
      {
        "id": 2031,
        "name": "Shirak Region",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "SH"
      },
      {
        "id": 2027,
        "name": "Syunik Province",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "SU"
      },
      {
        "id": 2032,
        "name": "Tavush Region",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "TV"
      },
      {
        "id": 2025,
        "name": "Vayots Dzor Region",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "VD"
      },
      {
        "id": 2030,
        "name": "Yerevan",
        "country_id": 12,
        "country_code": "AM",
        "state_code": "ER"
      },
      {
        "id": 3907,
        "name": "Australian Capital Territory",
        "country_id": 14,
        "country_code": "AU",
        "state_code": "ACT"
      },
      {
        "id": 3909,
        "name": "New South Wales",
        "country_id": 14,
        "country_code": "AU",
        "state_code": "NSW"
      },
      {
        "id": 3910,
        "name": "Northern Territory",
        "country_id": 14,
        "country_code": "AU",
        "state_code": "NT"
      },
      {
        "id": 3905,
        "name": "Queensland",
        "country_id": 14,
        "country_code": "AU",
        "state_code": "QLD"
      },
      {
        "id": 3904,
        "name": "South Australia",
        "country_id": 14,
        "country_code": "AU",
        "state_code": "SA"
      },
      {
        "id": 3908,
        "name": "Tasmania",
        "country_id": 14,
        "country_code": "AU",
        "state_code": "TAS"
      },
      {
        "id": 3903,
        "name": "Victoria",
        "country_id": 14,
        "country_code": "AU",
        "state_code": "VIC"
      },
      {
        "id": 3906,
        "name": "Western Australia",
        "country_id": 14,
        "country_code": "AU",
        "state_code": "WA"
      },
      {
        "id": 2062,
        "name": "Burgenland",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "1"
      },
      {
        "id": 2057,
        "name": "Carinthia",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "2"
      },
      {
        "id": 2065,
        "name": "Lower Austria",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "3"
      },
      {
        "id": 2061,
        "name": "Salzburg",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "5"
      },
      {
        "id": 2059,
        "name": "Styria",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "6"
      },
      {
        "id": 2064,
        "name": "Tyrol",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "7"
      },
      {
        "id": 2058,
        "name": "Upper Austria",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "4"
      },
      {
        "id": 2060,
        "name": "Vienna",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "9"
      },
      {
        "id": 2063,
        "name": "Vorarlberg",
        "country_id": 15,
        "country_code": "AT",
        "state_code": "8"
      },
      {
        "id": 540,
        "name": "Absheron District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "ABS"
      },
      {
        "id": 559,
        "name": "Agdam District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "AGM"
      },
      {
        "id": 553,
        "name": "Agdash District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "AGS"
      },
      {
        "id": 577,
        "name": "Aghjabadi District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "AGC"
      },
      {
        "id": 543,
        "name": "Agstafa District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "AGA"
      },
      {
        "id": 547,
        "name": "Agsu District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "AGU"
      },
      {
        "id": 528,
        "name": "Astara District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "AST"
      },
      {
        "id": 575,
        "name": "Babek District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "BAB"
      },
      {
        "id": 552,
        "name": "Baku",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "BA"
      },
      {
        "id": 560,
        "name": "Balakan District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "BAL"
      },
      {
        "id": 569,
        "name": "Barda District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "BAR"
      },
      {
        "id": 554,
        "name": "Beylagan District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "BEY"
      },
      {
        "id": 532,
        "name": "Bilasuvar District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "BIL"
      },
      {
        "id": 561,
        "name": "Dashkasan District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "DAS"
      },
      {
        "id": 527,
        "name": "Fizuli District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "FUZ"
      },
      {
        "id": 585,
        "name": "Ganja",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "GA"
      },
      {
        "id": 589,
        "name": "Gədəbəy",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "GAD"
      },
      {
        "id": 573,
        "name": "Gobustan District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "QOB"
      },
      {
        "id": 551,
        "name": "Goranboy District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "GOR"
      },
      {
        "id": 531,
        "name": "Goychay",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "GOY"
      },
      {
        "id": 574,
        "name": "Goygol District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "GYG"
      },
      {
        "id": 571,
        "name": "Hajigabul District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "HAC"
      },
      {
        "id": 544,
        "name": "Imishli District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "IMI"
      },
      {
        "id": 564,
        "name": "Ismailli District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "ISM"
      },
      {
        "id": 570,
        "name": "Jabrayil District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "CAB"
      },
      {
        "id": 578,
        "name": "Jalilabad District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "CAL"
      },
      {
        "id": 572,
        "name": "Julfa District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "CUL"
      },
      {
        "id": 525,
        "name": "Kalbajar District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "KAL"
      },
      {
        "id": 567,
        "name": "Kangarli District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "KAN"
      },
      {
        "id": 590,
        "name": "Khachmaz District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "XAC"
      },
      {
        "id": 537,
        "name": "Khizi District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "XIZ"
      },
      {
        "id": 524,
        "name": "Khojali District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "XCI"
      },
      {
        "id": 549,
        "name": "Kurdamir District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "KUR"
      },
      {
        "id": 541,
        "name": "Lachin District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "LAC"
      },
      {
        "id": 587,
        "name": "Lankaran",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "LAN"
      },
      {
        "id": 558,
        "name": "Lankaran District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "LA"
      },
      {
        "id": 546,
        "name": "Lerik District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "LER"
      },
      {
        "id": 568,
        "name": "Martuni",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "XVD"
      },
      {
        "id": 555,
        "name": "Masally District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "MAS"
      },
      {
        "id": 580,
        "name": "Mingachevir",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "MI"
      },
      {
        "id": 562,
        "name": "Nakhchivan Autonomous Republic",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "NX"
      },
      {
        "id": 530,
        "name": "Neftchala District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "NEF"
      },
      {
        "id": 556,
        "name": "Oghuz District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "OGU"
      },
      {
        "id": 534,
        "name": "Ordubad District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "ORD"
      },
      {
        "id": 542,
        "name": "Qabala District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "QAB"
      },
      {
        "id": 526,
        "name": "Qakh District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "QAX"
      },
      {
        "id": 521,
        "name": "Qazakh District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "QAZ"
      },
      {
        "id": 563,
        "name": "Quba District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "QBA"
      },
      {
        "id": 548,
        "name": "Qubadli District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "QBI"
      },
      {
        "id": 588,
        "name": "Qusar District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "QUS"
      },
      {
        "id": 557,
        "name": "Saatly District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SAT"
      },
      {
        "id": 565,
        "name": "Sabirabad District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SAB"
      },
      {
        "id": 522,
        "name": "Sadarak District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SAD"
      },
      {
        "id": 545,
        "name": "Salyan District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SAL"
      },
      {
        "id": 536,
        "name": "Samukh District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SMX"
      },
      {
        "id": 591,
        "name": "Shabran District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SBN"
      },
      {
        "id": 579,
        "name": "Shahbuz District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SAH"
      },
      {
        "id": 518,
        "name": "Shaki",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SA"
      },
      {
        "id": 586,
        "name": "Shaki District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SAK"
      },
      {
        "id": 529,
        "name": "Shamakhi District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SMI"
      },
      {
        "id": 583,
        "name": "Shamkir District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SKR"
      },
      {
        "id": 535,
        "name": "Sharur District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SAR"
      },
      {
        "id": 520,
        "name": "Shirvan",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SR"
      },
      {
        "id": 592,
        "name": "Shusha District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SUS"
      },
      {
        "id": 584,
        "name": "Siazan District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SIY"
      },
      {
        "id": 582,
        "name": "Sumqayit",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "SM"
      },
      {
        "id": 519,
        "name": "Tartar District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "TAR"
      },
      {
        "id": 533,
        "name": "Tovuz District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "TOV"
      },
      {
        "id": 539,
        "name": "Ujar District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "UCA"
      },
      {
        "id": 550,
        "name": "Yardymli District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "YAR"
      },
      {
        "id": 538,
        "name": "Yevlakh",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "YE"
      },
      {
        "id": 523,
        "name": "Yevlakh District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "YEV"
      },
      {
        "id": 581,
        "name": "Zangilan District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "ZAN"
      },
      {
        "id": 566,
        "name": "Zaqatala District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "ZAQ"
      },
      {
        "id": 576,
        "name": "Zardab District",
        "country_id": 16,
        "country_code": "AZ",
        "state_code": "ZAR"
      },
      {
        "id": 3601,
        "name": "Acklins",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "AK"
      },
      {
        "id": 3628,
        "name": "Acklins and Crooked Islands",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "AC"
      },
      {
        "id": 3593,
        "name": "Berry Islands",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "BY"
      },
      {
        "id": 3629,
        "name": "Bimini",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "BI"
      },
      {
        "id": 3605,
        "name": "Black Point",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "BP"
      },
      {
        "id": 3611,
        "name": "Cat Island",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "CI"
      },
      {
        "id": 3603,
        "name": "Central Abaco",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "CO"
      },
      {
        "id": 3631,
        "name": "Central Andros",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "CS"
      },
      {
        "id": 3596,
        "name": "Central Eleuthera",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "CE"
      },
      {
        "id": 3621,
        "name": "Crooked Island",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "CK"
      },
      {
        "id": 3614,
        "name": "East Grand Bahama",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "EG"
      },
      {
        "id": 3612,
        "name": "Exuma",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "EX"
      },
      {
        "id": 3626,
        "name": "Freeport",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "FP"
      },
      {
        "id": 3619,
        "name": "Fresh Creek",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "FC"
      },
      {
        "id": 3597,
        "name": "Governor's Harbour",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "GH"
      },
      {
        "id": 3632,
        "name": "Grand Cay",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "GC"
      },
      {
        "id": 3595,
        "name": "Green Turtle Cay",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "GT"
      },
      {
        "id": 3613,
        "name": "Harbour Island",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "HI"
      },
      {
        "id": 3598,
        "name": "High Rock",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "HR"
      },
      {
        "id": 3624,
        "name": "Hope Town",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "HT"
      },
      {
        "id": 3609,
        "name": "Inagua",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "IN"
      },
      {
        "id": 3618,
        "name": "Kemps Bay",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "KB"
      },
      {
        "id": 3610,
        "name": "Long Island",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "LI"
      },
      {
        "id": 3625,
        "name": "Mangrove Cay",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "MC"
      },
      {
        "id": 3604,
        "name": "Marsh Harbour",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "MH"
      },
      {
        "id": 3633,
        "name": "Mayaguana District",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "MG"
      },
      {
        "id": 3594,
        "name": "Nichollstown and Berry Islands",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "NB"
      },
      {
        "id": 3616,
        "name": "North Abaco",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "NO"
      },
      {
        "id": 3617,
        "name": "North Andros",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "NS"
      },
      {
        "id": 3602,
        "name": "North Eleuthera",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "NE"
      },
      {
        "id": 3615,
        "name": "Ragged Island",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "RI"
      },
      {
        "id": 3623,
        "name": "Rock Sound",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "RS"
      },
      {
        "id": 3600,
        "name": "Rum Cay District",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "RC"
      },
      {
        "id": 3620,
        "name": "San Salvador and Rum Cay",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "SR"
      },
      {
        "id": 3627,
        "name": "San Salvador Island",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "SS"
      },
      {
        "id": 3606,
        "name": "Sandy Point",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "SP"
      },
      {
        "id": 3608,
        "name": "South Abaco",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "SO"
      },
      {
        "id": 3622,
        "name": "South Andros",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "SA"
      },
      {
        "id": 3607,
        "name": "South Eleuthera",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "SE"
      },
      {
        "id": 3630,
        "name": "Spanish Wells",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "SW"
      },
      {
        "id": 3599,
        "name": "West Grand Bahama",
        "country_id": 17,
        "country_code": "BS",
        "state_code": "WG"
      },
      {
        "id": 1992,
        "name": "Capital Governorate",
        "country_id": 18,
        "country_code": "BH",
        "state_code": "13"
      },
      {
        "id": 1996,
        "name": "Central Governorate",
        "country_id": 18,
        "country_code": "BH",
        "state_code": "16"
      },
      {
        "id": 1995,
        "name": "Muharraq Governorate",
        "country_id": 18,
        "country_code": "BH",
        "state_code": "15"
      },
      {
        "id": 1994,
        "name": "Northern Governorate",
        "country_id": 18,
        "country_code": "BH",
        "state_code": "17"
      },
      {
        "id": 1993,
        "name": "Southern Governorate",
        "country_id": 18,
        "country_code": "BH",
        "state_code": "14"
      },
      {
        "id": 796,
        "name": "Bagerhat District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "05"
      },
      {
        "id": 802,
        "name": "Bahadia",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "33"
      },
      {
        "id": 752,
        "name": "Bandarban District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "01"
      },
      {
        "id": 784,
        "name": "Barguna District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "02"
      },
      {
        "id": 818,
        "name": "Barisal District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "06"
      },
      {
        "id": 807,
        "name": "Barisal Division",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "A"
      },
      {
        "id": 756,
        "name": "Bhola District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "07"
      },
      {
        "id": 797,
        "name": "Bogra District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "03"
      },
      {
        "id": 810,
        "name": "Brahmanbaria District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "04"
      },
      {
        "id": 768,
        "name": "Chandpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "09"
      },
      {
        "id": 761,
        "name": "Chapai Nawabganj District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "45"
      },
      {
        "id": 785,
        "name": "Chittagong District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "10"
      },
      {
        "id": 803,
        "name": "Chittagong Division",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "B"
      },
      {
        "id": 788,
        "name": "Chuadanga District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "12"
      },
      {
        "id": 763,
        "name": "Comilla District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "08"
      },
      {
        "id": 751,
        "name": "Cox's Bazar District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "11"
      },
      {
        "id": 771,
        "name": "Dhaka District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "13"
      },
      {
        "id": 760,
        "name": "Dhaka Division",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "C"
      },
      {
        "id": 783,
        "name": "Dinajpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "14"
      },
      {
        "id": 762,
        "name": "Faridpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "15"
      },
      {
        "id": 816,
        "name": "Feni District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "16"
      },
      {
        "id": 795,
        "name": "Gaibandha District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "19"
      },
      {
        "id": 798,
        "name": "Gazipur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "18"
      },
      {
        "id": 792,
        "name": "Gopalganj District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "17"
      },
      {
        "id": 805,
        "name": "Habiganj District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "20"
      },
      {
        "id": 808,
        "name": "Jamalpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "21"
      },
      {
        "id": 757,
        "name": "Jessore District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "22"
      },
      {
        "id": 778,
        "name": "Jhalokati District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "25"
      },
      {
        "id": 789,
        "name": "Jhenaidah District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "23"
      },
      {
        "id": 806,
        "name": "Joypurhat District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "24"
      },
      {
        "id": 786,
        "name": "Khagrachari District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "29"
      },
      {
        "id": 811,
        "name": "Khulna District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "27"
      },
      {
        "id": 775,
        "name": "Khulna Division",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "D"
      },
      {
        "id": 779,
        "name": "Kishoreganj District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "26"
      },
      {
        "id": 793,
        "name": "Kurigram District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "28"
      },
      {
        "id": 774,
        "name": "Kushtia District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "30"
      },
      {
        "id": 819,
        "name": "Lakshmipur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "31"
      },
      {
        "id": 780,
        "name": "Lalmonirhat District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "32"
      },
      {
        "id": 817,
        "name": "Madaripur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "36"
      },
      {
        "id": 776,
        "name": "Meherpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "39"
      },
      {
        "id": 794,
        "name": "Moulvibazar District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "38"
      },
      {
        "id": 790,
        "name": "Munshiganj District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "35"
      },
      {
        "id": 766,
        "name": "Mymensingh District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "34"
      },
      {
        "id": 758,
        "name": "Mymensingh Division",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "H"
      },
      {
        "id": 814,
        "name": "Naogaon District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "48"
      },
      {
        "id": 769,
        "name": "Narail District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "43"
      },
      {
        "id": 770,
        "name": "Narayanganj District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "40"
      },
      {
        "id": 787,
        "name": "Natore District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "44"
      },
      {
        "id": 764,
        "name": "Netrokona District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "41"
      },
      {
        "id": 772,
        "name": "Nilphamari District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "46"
      },
      {
        "id": 815,
        "name": "Noakhali District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "47"
      },
      {
        "id": 754,
        "name": "Pabna District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "49"
      },
      {
        "id": 800,
        "name": "Panchagarh District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "52"
      },
      {
        "id": 777,
        "name": "Patuakhali District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "51"
      },
      {
        "id": 791,
        "name": "Pirojpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "50"
      },
      {
        "id": 773,
        "name": "Rajbari District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "53"
      },
      {
        "id": 813,
        "name": "Rajshahi District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "54"
      },
      {
        "id": 753,
        "name": "Rajshahi Division",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "E"
      },
      {
        "id": 809,
        "name": "Rangamati Hill District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "56"
      },
      {
        "id": 759,
        "name": "Rangpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "55"
      },
      {
        "id": 750,
        "name": "Rangpur Division",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "F"
      },
      {
        "id": 799,
        "name": "Satkhira District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "58"
      },
      {
        "id": 801,
        "name": "Shariatpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "62"
      },
      {
        "id": 755,
        "name": "Sherpur District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "57"
      },
      {
        "id": 781,
        "name": "Sirajganj District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "59"
      },
      {
        "id": 812,
        "name": "Sunamganj District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "61"
      },
      {
        "id": 767,
        "name": "Sylhet District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "60"
      },
      {
        "id": 765,
        "name": "Sylhet Division",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "G"
      },
      {
        "id": 782,
        "name": "Tangail District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "63"
      },
      {
        "id": 804,
        "name": "Thakurgaon District",
        "country_id": 19,
        "country_code": "BD",
        "state_code": "64"
      },
      {
        "id": 1228,
        "name": "Christ Church",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "01"
      },
      {
        "id": 1229,
        "name": "Saint Andrew",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "02"
      },
      {
        "id": 1226,
        "name": "Saint George",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "03"
      },
      {
        "id": 1224,
        "name": "Saint James",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "04"
      },
      {
        "id": 1227,
        "name": "Saint John",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "05"
      },
      {
        "id": 1223,
        "name": "Saint Joseph",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "06"
      },
      {
        "id": 1221,
        "name": "Saint Lucy",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "07"
      },
      {
        "id": 1230,
        "name": "Saint Michael",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "08"
      },
      {
        "id": 1222,
        "name": "Saint Peter",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "09"
      },
      {
        "id": 1220,
        "name": "Saint Philip",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "10"
      },
      {
        "id": 1225,
        "name": "Saint Thomas",
        "country_id": 20,
        "country_code": "BB",
        "state_code": "11"
      },
      {
        "id": 2959,
        "name": "Brest Region",
        "country_id": 21,
        "country_code": "BY",
        "state_code": "BR"
      },
      {
        "id": 2955,
        "name": "Gomel Region",
        "country_id": 21,
        "country_code": "BY",
        "state_code": "HO"
      },
      {
        "id": 2956,
        "name": "Grodno Region",
        "country_id": 21,
        "country_code": "BY",
        "state_code": "HR"
      },
      {
        "id": 2958,
        "name": "Minsk",
        "country_id": 21,
        "country_code": "BY",
        "state_code": "HM"
      },
      {
        "id": 2957,
        "name": "Minsk Region",
        "country_id": 21,
        "country_code": "BY",
        "state_code": "MI"
      },
      {
        "id": 2954,
        "name": "Mogilev Region",
        "country_id": 21,
        "country_code": "BY",
        "state_code": "MA"
      },
      {
        "id": 2960,
        "name": "Vitebsk Region",
        "country_id": 21,
        "country_code": "BY",
        "state_code": "VI"
      },
      {
        "id": 1381,
        "name": "Antwerp",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "VAN"
      },
      {
        "id": 1376,
        "name": "Brussels-Capital Region",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "BRU"
      },
      {
        "id": 1377,
        "name": "East Flanders",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "VOV"
      },
      {
        "id": 1373,
        "name": "Flanders",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "VLG"
      },
      {
        "id": 1374,
        "name": "Flemish Brabant",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "VBR"
      },
      {
        "id": 1375,
        "name": "Hainaut",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "WHT"
      },
      {
        "id": 1384,
        "name": "Liège",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "WLG"
      },
      {
        "id": 1372,
        "name": "Limburg",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "VLI"
      },
      {
        "id": 1379,
        "name": "Luxembourg",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "WLX"
      },
      {
        "id": 1378,
        "name": "Namur",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "WNA"
      },
      {
        "id": 1380,
        "name": "Wallonia",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "WAL"
      },
      {
        "id": 1382,
        "name": "Walloon Brabant",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "WBR"
      },
      {
        "id": 1383,
        "name": "West Flanders",
        "country_id": 22,
        "country_code": "BE",
        "state_code": "VWV"
      },
      {
        "id": 264,
        "name": "Belize District",
        "country_id": 23,
        "country_code": "BZ",
        "state_code": "BZ"
      },
      {
        "id": 269,
        "name": "Cayo District",
        "country_id": 23,
        "country_code": "BZ",
        "state_code": "CY"
      },
      {
        "id": 266,
        "name": "Corozal District",
        "country_id": 23,
        "country_code": "BZ",
        "state_code": "CZL"
      },
      {
        "id": 268,
        "name": "Orange Walk District",
        "country_id": 23,
        "country_code": "BZ",
        "state_code": "OW"
      },
      {
        "id": 265,
        "name": "Stann Creek District",
        "country_id": 23,
        "country_code": "BZ",
        "state_code": "SC"
      },
      {
        "id": 267,
        "name": "Toledo District",
        "country_id": 23,
        "country_code": "BZ",
        "state_code": "TOL"
      },
      {
        "id": 3077,
        "name": "Alibori Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "AL"
      },
      {
        "id": 3076,
        "name": "Atakora Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "AK"
      },
      {
        "id": 3079,
        "name": "Atlantique Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "AQ"
      },
      {
        "id": 3078,
        "name": "Borgou Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "BO"
      },
      {
        "id": 3070,
        "name": "Collines Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "CO"
      },
      {
        "id": 3072,
        "name": "Donga Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "DO"
      },
      {
        "id": 3071,
        "name": "Kouffo Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "KO"
      },
      {
        "id": 3081,
        "name": "Littoral Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "LI"
      },
      {
        "id": 3075,
        "name": "Mono Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "MO"
      },
      {
        "id": 3080,
        "name": "Ouémé Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "OU"
      },
      {
        "id": 3074,
        "name": "Plateau Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "PL"
      },
      {
        "id": 3073,
        "name": "Zou Department",
        "country_id": 24,
        "country_code": "BJ",
        "state_code": "ZO"
      },
      {
        "id": 240,
        "name": "Bumthang District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "33"
      },
      {
        "id": 239,
        "name": "Chukha District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "12"
      },
      {
        "id": 238,
        "name": "Dagana District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "22"
      },
      {
        "id": 229,
        "name": "Gasa District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "GA"
      },
      {
        "id": 232,
        "name": "Haa District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "13"
      },
      {
        "id": 234,
        "name": "Lhuntse District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "44"
      },
      {
        "id": 242,
        "name": "Mongar District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "42"
      },
      {
        "id": 237,
        "name": "Paro District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "11"
      },
      {
        "id": 244,
        "name": "Pemagatshel District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "43"
      },
      {
        "id": 235,
        "name": "Punakha District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "23"
      },
      {
        "id": 243,
        "name": "Samdrup Jongkhar District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "45"
      },
      {
        "id": 246,
        "name": "Samtse District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "14"
      },
      {
        "id": 247,
        "name": "Sarpang District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "31"
      },
      {
        "id": 241,
        "name": "Thimphu District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "15"
      },
      {
        "id": 236,
        "name": "Trashigang District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "41"
      },
      {
        "id": 245,
        "name": "Trongsa District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "32"
      },
      {
        "id": 230,
        "name": "Tsirang District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "21"
      },
      {
        "id": 231,
        "name": "Wangdue Phodrang District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "24"
      },
      {
        "id": 233,
        "name": "Zhemgang District",
        "country_id": 26,
        "country_code": "BT",
        "state_code": "34"
      },
      {
        "id": 3375,
        "name": "Beni Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "B"
      },
      {
        "id": 3382,
        "name": "Chuquisaca Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "H"
      },
      {
        "id": 3381,
        "name": "Cochabamba Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "C"
      },
      {
        "id": 3380,
        "name": "La Paz Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "L"
      },
      {
        "id": 3376,
        "name": "Oruro Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "O"
      },
      {
        "id": 3379,
        "name": "Pando Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "N"
      },
      {
        "id": 3383,
        "name": "Potosí Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "P"
      },
      {
        "id": 3377,
        "name": "Santa Cruz Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "S"
      },
      {
        "id": 3378,
        "name": "Tarija Department",
        "country_id": 27,
        "country_code": "BO",
        "state_code": "T"
      },
      {
        "id": 472,
        "name": "Bosnian Podrinje Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "05"
      },
      {
        "id": 460,
        "name": "Brčko District",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "BRC"
      },
      {
        "id": 471,
        "name": "Canton 10",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "10"
      },
      {
        "id": 462,
        "name": "Central Bosnia Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "06"
      },
      {
        "id": 467,
        "name": "Federation of Bosnia and Herzegovina",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "BIH"
      },
      {
        "id": 463,
        "name": "Herzegovina-Neretva Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "07"
      },
      {
        "id": 464,
        "name": "Posavina Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "02"
      },
      {
        "id": 470,
        "name": "Republika Srpska",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "SRP"
      },
      {
        "id": 466,
        "name": "Sarajevo Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "09"
      },
      {
        "id": 461,
        "name": "Tuzla Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "03"
      },
      {
        "id": 465,
        "name": "Una-Sana Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "01"
      },
      {
        "id": 469,
        "name": "West Herzegovina Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "08"
      },
      {
        "id": 468,
        "name": "Zenica-Doboj Canton",
        "country_id": 28,
        "country_code": "BA",
        "state_code": "04"
      },
      {
        "id": 3067,
        "name": "Central District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "CE"
      },
      {
        "id": 3061,
        "name": "Ghanzi District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "GH"
      },
      {
        "id": 3066,
        "name": "Kgalagadi District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "KG"
      },
      {
        "id": 3062,
        "name": "Kgatleng District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "KL"
      },
      {
        "id": 3069,
        "name": "Kweneng District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "KW"
      },
      {
        "id": 3060,
        "name": "Ngamiland",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "NG"
      },
      {
        "id": 3068,
        "name": "North-East District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "NE"
      },
      {
        "id": 3065,
        "name": "North-West District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "NW"
      },
      {
        "id": 3064,
        "name": "South-East District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "SE"
      },
      {
        "id": 3063,
        "name": "Southern District",
        "country_id": 29,
        "country_code": "BW",
        "state_code": "SO"
      },
      {
        "id": 2012,
        "name": "Acre",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "AC"
      },
      {
        "id": 2007,
        "name": "Alagoas",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "AL"
      },
      {
        "id": 1999,
        "name": "Amapá",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "AP"
      },
      {
        "id": 2004,
        "name": "Amazonas",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "AM"
      },
      {
        "id": 2002,
        "name": "Bahia",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "BA"
      },
      {
        "id": 2016,
        "name": "Ceará",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "CE"
      },
      {
        "id": 2018,
        "name": "Espírito Santo",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "ES"
      },
      {
        "id": 2017,
        "name": "Federal District",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "DF"
      },
      {
        "id": 2000,
        "name": "Goiás",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "GO"
      },
      {
        "id": 2015,
        "name": "Maranhão",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "MA"
      },
      {
        "id": 2011,
        "name": "Mato Grosso",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "MT"
      },
      {
        "id": 2010,
        "name": "Mato Grosso do Sul",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "MS"
      },
      {
        "id": 1998,
        "name": "Minas Gerais",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "MG"
      },
      {
        "id": 2009,
        "name": "Pará",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "PA"
      },
      {
        "id": 2005,
        "name": "Paraíba",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "PB"
      },
      {
        "id": 2022,
        "name": "Paraná",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "PR"
      },
      {
        "id": 2006,
        "name": "Pernambuco",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "PE"
      },
      {
        "id": 2008,
        "name": "Piauí",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "PI"
      },
      {
        "id": 1997,
        "name": "Rio de Janeiro",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "RJ"
      },
      {
        "id": 2019,
        "name": "Rio Grande do Norte",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "RN"
      },
      {
        "id": 2001,
        "name": "Rio Grande do Sul",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "RS"
      },
      {
        "id": 2013,
        "name": "Rondônia",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "RO"
      },
      {
        "id": 2014,
        "name": "Santa Catarina",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "SC"
      },
      {
        "id": 2021,
        "name": "São Paulo",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "SP"
      },
      {
        "id": 2003,
        "name": "Sergipe",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "SE"
      },
      {
        "id": 2020,
        "name": "Tocantins",
        "country_id": 31,
        "country_code": "BR",
        "state_code": "TO"
      },
      {
        "id": 1217,
        "name": "Belait District",
        "country_id": 33,
        "country_code": "BN",
        "state_code": "BE"
      },
      {
        "id": 1216,
        "name": "Brunei-Muara District",
        "country_id": 33,
        "country_code": "BN",
        "state_code": "BM"
      },
      {
        "id": 1218,
        "name": "Temburong District",
        "country_id": 33,
        "country_code": "BN",
        "state_code": "TE"
      },
      {
        "id": 1219,
        "name": "Tutong District",
        "country_id": 33,
        "country_code": "BN",
        "state_code": "TU"
      },
      {
        "id": 4699,
        "name": "Blagoevgrad Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "01"
      },
      {
        "id": 4715,
        "name": "Burgas Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "02"
      },
      {
        "id": 4718,
        "name": "Dobrich Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "08"
      },
      {
        "id": 4693,
        "name": "Gabrovo Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "07"
      },
      {
        "id": 4704,
        "name": "Haskovo Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "26"
      },
      {
        "id": 4702,
        "name": "Kardzhali Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "09"
      },
      {
        "id": 4703,
        "name": "Kyustendil Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "10"
      },
      {
        "id": 4710,
        "name": "Lovech Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "11"
      },
      {
        "id": 4696,
        "name": "Montana Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "12"
      },
      {
        "id": 4712,
        "name": "Pazardzhik Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "13"
      },
      {
        "id": 4695,
        "name": "Pernik Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "14"
      },
      {
        "id": 4706,
        "name": "Pleven Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "15"
      },
      {
        "id": 4701,
        "name": "Plovdiv Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "16"
      },
      {
        "id": 4698,
        "name": "Razgrad Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "17"
      },
      {
        "id": 4713,
        "name": "Ruse Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "18"
      },
      {
        "id": 4708,
        "name": "Silistra Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "19"
      },
      {
        "id": 4700,
        "name": "Sliven Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "20"
      },
      {
        "id": 4694,
        "name": "Smolyan Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "21"
      },
      {
        "id": 4705,
        "name": "Sofia City Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "22"
      },
      {
        "id": 4719,
        "name": "Sofia Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "23"
      },
      {
        "id": 4707,
        "name": "Stara Zagora Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "24"
      },
      {
        "id": 4714,
        "name": "Targovishte Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "25"
      },
      {
        "id": 4717,
        "name": "Varna Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "03"
      },
      {
        "id": 4709,
        "name": "Veliko Tarnovo Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "04"
      },
      {
        "id": 4697,
        "name": "Vidin Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "05"
      },
      {
        "id": 4711,
        "name": "Vratsa Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "06"
      },
      {
        "id": 4716,
        "name": "Yambol Province",
        "country_id": 34,
        "country_code": "BG",
        "state_code": "28"
      },
      {
        "id": 3160,
        "name": "Balé Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "BAL"
      },
      {
        "id": 3155,
        "name": "Bam Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "BAM"
      },
      {
        "id": 3120,
        "name": "Banwa Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "BAN"
      },
      {
        "id": 3152,
        "name": "Bazèga Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "BAZ"
      },
      {
        "id": 3138,
        "name": "Boucle du Mouhoun Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "01"
      },
      {
        "id": 3121,
        "name": "Bougouriba Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "BGR"
      },
      {
        "id": 3131,
        "name": "Boulgou",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "BLG"
      },
      {
        "id": 3153,
        "name": "Cascades Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "02"
      },
      {
        "id": 3136,
        "name": "Centre",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "03"
      },
      {
        "id": 3162,
        "name": "Centre-Est Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "04"
      },
      {
        "id": 3127,
        "name": "Centre-Nord Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "05"
      },
      {
        "id": 3115,
        "name": "Centre-Ouest Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "06"
      },
      {
        "id": 3149,
        "name": "Centre-Sud Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "07"
      },
      {
        "id": 3167,
        "name": "Comoé Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "COM"
      },
      {
        "id": 3158,
        "name": "Est Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "08"
      },
      {
        "id": 3148,
        "name": "Ganzourgou Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "GAN"
      },
      {
        "id": 3122,
        "name": "Gnagna Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "GNA"
      },
      {
        "id": 3143,
        "name": "Gourma Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "GOU"
      },
      {
        "id": 3165,
        "name": "Hauts-Bassins Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "09"
      },
      {
        "id": 3129,
        "name": "Houet Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "HOU"
      },
      {
        "id": 3135,
        "name": "Ioba Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "IOB"
      },
      {
        "id": 3168,
        "name": "Kadiogo Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "KAD"
      },
      {
        "id": 3112,
        "name": "Kénédougou Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "KEN"
      },
      {
        "id": 3132,
        "name": "Komondjari Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "KMD"
      },
      {
        "id": 3157,
        "name": "Kompienga Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "KMP"
      },
      {
        "id": 3146,
        "name": "Kossi Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "KOS"
      },
      {
        "id": 3133,
        "name": "Koulpélogo Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "KOP"
      },
      {
        "id": 3161,
        "name": "Kouritenga Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "KOT"
      },
      {
        "id": 3147,
        "name": "Kourwéogo Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "KOW"
      },
      {
        "id": 3159,
        "name": "Léraba Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "LER"
      },
      {
        "id": 3151,
        "name": "Loroum Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "LOR"
      },
      {
        "id": 3123,
        "name": "Mouhoun",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "MOU"
      },
      {
        "id": 3116,
        "name": "Nahouri Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "NAO"
      },
      {
        "id": 3113,
        "name": "Namentenga Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "NAM"
      },
      {
        "id": 3142,
        "name": "Nayala Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "NAY"
      },
      {
        "id": 3164,
        "name": "Nord Region, Burkina Faso",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "10"
      },
      {
        "id": 3156,
        "name": "Noumbiel Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "NOU"
      },
      {
        "id": 3141,
        "name": "Oubritenga Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "OUB"
      },
      {
        "id": 3144,
        "name": "Oudalan Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "OUD"
      },
      {
        "id": 3117,
        "name": "Passoré Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "PAS"
      },
      {
        "id": 3125,
        "name": "Plateau-Central Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "11"
      },
      {
        "id": 3163,
        "name": "Poni Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "PON"
      },
      {
        "id": 3114,
        "name": "Sahel Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "12"
      },
      {
        "id": 3154,
        "name": "Sanguié Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "SNG"
      },
      {
        "id": 3126,
        "name": "Sanmatenga Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "SMT"
      },
      {
        "id": 3139,
        "name": "Séno Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "SEN"
      },
      {
        "id": 3119,
        "name": "Sissili Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "SIS"
      },
      {
        "id": 3166,
        "name": "Soum Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "SOM"
      },
      {
        "id": 3137,
        "name": "Sourou Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "SOR"
      },
      {
        "id": 3140,
        "name": "Sud-Ouest Region",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "13"
      },
      {
        "id": 3128,
        "name": "Tapoa Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "TAP"
      },
      {
        "id": 3134,
        "name": "Tuy Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "TUI"
      },
      {
        "id": 3124,
        "name": "Yagha Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "YAG"
      },
      {
        "id": 3150,
        "name": "Yatenga Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "YAT"
      },
      {
        "id": 3145,
        "name": "Ziro Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "ZIR"
      },
      {
        "id": 3130,
        "name": "Zondoma Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "ZON"
      },
      {
        "id": 3118,
        "name": "Zoundwéogo Province",
        "country_id": 35,
        "country_code": "BF",
        "state_code": "ZOU"
      },
      {
        "id": 3196,
        "name": "Bubanza Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "BB"
      },
      {
        "id": 3198,
        "name": "Bujumbura Mairie Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "BM"
      },
      {
        "id": 3200,
        "name": "Bujumbura Rural Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "BL"
      },
      {
        "id": 3202,
        "name": "Bururi Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "BR"
      },
      {
        "id": 3201,
        "name": "Cankuzo Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "CA"
      },
      {
        "id": 3190,
        "name": "Cibitoke Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "CI"
      },
      {
        "id": 3197,
        "name": "Gitega Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "GI"
      },
      {
        "id": 3194,
        "name": "Karuzi Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "KR"
      },
      {
        "id": 3192,
        "name": "Kayanza Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "KY"
      },
      {
        "id": 3195,
        "name": "Kirundo Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "KI"
      },
      {
        "id": 3188,
        "name": "Makamba Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "MA"
      },
      {
        "id": 3193,
        "name": "Muramvya Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "MU"
      },
      {
        "id": 3186,
        "name": "Muyinga Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "MY"
      },
      {
        "id": 3187,
        "name": "Mwaro Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "MW"
      },
      {
        "id": 3199,
        "name": "Ngozi Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "NG"
      },
      {
        "id": 3185,
        "name": "Rumonge Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "RM"
      },
      {
        "id": 3189,
        "name": "Rutana Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "RT"
      },
      {
        "id": 3191,
        "name": "Ruyigi Province",
        "country_id": 36,
        "country_code": "BI",
        "state_code": "RY"
      },
      {
        "id": 3984,
        "name": "Banteay Meanchey Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "1"
      },
      {
        "id": 3976,
        "name": "Battambang Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "2"
      },
      {
        "id": 3991,
        "name": "Kampong Cham Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "3"
      },
      {
        "id": 3979,
        "name": "Kampong Chhnang Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "4"
      },
      {
        "id": 3988,
        "name": "Kampong Speu Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "5"
      },
      {
        "id": 3981,
        "name": "Kampot Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "7"
      },
      {
        "id": 3983,
        "name": "Kandal Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "8"
      },
      {
        "id": 3978,
        "name": "Kep Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "23"
      },
      {
        "id": 3982,
        "name": "Koh Kong Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "9"
      },
      {
        "id": 3986,
        "name": "Kratié Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "10"
      },
      {
        "id": 3985,
        "name": "Mondulkiri Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "11"
      },
      {
        "id": 3987,
        "name": "Oddar Meanchey Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "22"
      },
      {
        "id": 3980,
        "name": "Pailin Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "24"
      },
      {
        "id": 3994,
        "name": "Phnom Penh",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "12"
      },
      {
        "id": 3973,
        "name": "Preah Vihear Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "13"
      },
      {
        "id": 3974,
        "name": "Prey Veng Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "14"
      },
      {
        "id": 3977,
        "name": "Pursat Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "15"
      },
      {
        "id": 3990,
        "name": "Ratanakiri Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "16"
      },
      {
        "id": 3992,
        "name": "Siem Reap Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "17"
      },
      {
        "id": 3989,
        "name": "Sihanoukville Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "18"
      },
      {
        "id": 3993,
        "name": "Stung Treng Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "19"
      },
      {
        "id": 3972,
        "name": "Svay Rieng Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "20"
      },
      {
        "id": 3975,
        "name": "Takéo Province",
        "country_id": 37,
        "country_code": "KH",
        "state_code": "21"
      },
      {
        "id": 2663,
        "name": "Adamawa",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "AD"
      },
      {
        "id": 2660,
        "name": "Centre",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "CE"
      },
      {
        "id": 2661,
        "name": "East",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "ES"
      },
      {
        "id": 2656,
        "name": "Far North",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "EN"
      },
      {
        "id": 2662,
        "name": "Littoral",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "LT"
      },
      {
        "id": 2665,
        "name": "North",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "NO"
      },
      {
        "id": 2657,
        "name": "Northwest",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "NW"
      },
      {
        "id": 2659,
        "name": "South",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "SU"
      },
      {
        "id": 2658,
        "name": "Southwest",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "SW"
      },
      {
        "id": 2664,
        "name": "West",
        "country_id": 38,
        "country_code": "CM",
        "state_code": "OU"
      },
      {
        "id": 872,
        "name": "Alberta",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "AB"
      },
      {
        "id": 875,
        "name": "British Columbia",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "BC"
      },
      {
        "id": 867,
        "name": "Manitoba",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "MB"
      },
      {
        "id": 868,
        "name": "New Brunswick",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "NB"
      },
      {
        "id": 877,
        "name": "Newfoundland and Labrador",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "NL"
      },
      {
        "id": 878,
        "name": "Northwest Territories",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "NT"
      },
      {
        "id": 874,
        "name": "Nova Scotia",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "NS"
      },
      {
        "id": 876,
        "name": "Nunavut",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "NU"
      },
      {
        "id": 866,
        "name": "Ontario",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "ON"
      },
      {
        "id": 871,
        "name": "Prince Edward Island",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "PE"
      },
      {
        "id": 873,
        "name": "Quebec",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "QC"
      },
      {
        "id": 870,
        "name": "Saskatchewan",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "SK"
      },
      {
        "id": 869,
        "name": "Yukon",
        "country_id": 39,
        "country_code": "CA",
        "state_code": "YT"
      },
      {
        "id": 2994,
        "name": "Barlavento Islands",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "B"
      },
      {
        "id": 2999,
        "name": "Boa Vista",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "BV"
      },
      {
        "id": 2996,
        "name": "Brava",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "BR"
      },
      {
        "id": 2991,
        "name": "Maio Municipality",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "MA"
      },
      {
        "id": 2987,
        "name": "Mosteiros",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "MO"
      },
      {
        "id": 2997,
        "name": "Paul",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "PA"
      },
      {
        "id": 2989,
        "name": "Porto Novo",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "PN"
      },
      {
        "id": 2988,
        "name": "Praia",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "PR"
      },
      {
        "id": 2982,
        "name": "Ribeira Brava Municipality",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "RB"
      },
      {
        "id": 3002,
        "name": "Ribeira Grande",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "RG"
      },
      {
        "id": 2984,
        "name": "Ribeira Grande de Santiago",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "RS"
      },
      {
        "id": 2998,
        "name": "Sal",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "SL"
      },
      {
        "id": 2985,
        "name": "Santa Catarina",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "CA"
      },
      {
        "id": 2995,
        "name": "Santa Catarina do Fogo",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "CF"
      },
      {
        "id": 3004,
        "name": "Santa Cruz",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "CR"
      },
      {
        "id": 2986,
        "name": "São Domingos",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "SD"
      },
      {
        "id": 3000,
        "name": "São Filipe",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "SF"
      },
      {
        "id": 2993,
        "name": "São Lourenço dos Órgãos",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "SO"
      },
      {
        "id": 2990,
        "name": "São Miguel",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "SM"
      },
      {
        "id": 3001,
        "name": "São Vicente",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "SV"
      },
      {
        "id": 2992,
        "name": "Sotavento Islands",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "S"
      },
      {
        "id": 2983,
        "name": "Tarrafal",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "TA"
      },
      {
        "id": 3003,
        "name": "Tarrafal de São Nicolau",
        "country_id": 40,
        "country_code": "CV",
        "state_code": "TS"
      },
      {
        "id": 1259,
        "name": "Bamingui-Bangoran Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "BB"
      },
      {
        "id": 1262,
        "name": "Bangui",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "BGF"
      },
      {
        "id": 1264,
        "name": "Basse-Kotto Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "BK"
      },
      {
        "id": 1258,
        "name": "Haut-Mbomou Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "HM"
      },
      {
        "id": 1268,
        "name": "Haute-Kotto Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "HK"
      },
      {
        "id": 1263,
        "name": "Kémo Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "KG"
      },
      {
        "id": 1256,
        "name": "Lobaye Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "LB"
      },
      {
        "id": 1257,
        "name": "Mambéré-Kadéï",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "HS"
      },
      {
        "id": 1266,
        "name": "Mbomou Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "MB"
      },
      {
        "id": 1253,
        "name": "Nana-Grébizi Economic Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "KB"
      },
      {
        "id": 1260,
        "name": "Nana-Mambéré Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "NM"
      },
      {
        "id": 1255,
        "name": "Ombella-M'Poko Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "MP"
      },
      {
        "id": 1265,
        "name": "Ouaka Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "UK"
      },
      {
        "id": 1254,
        "name": "Ouham Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "AC"
      },
      {
        "id": 1267,
        "name": "Ouham-Pendé Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "OP"
      },
      {
        "id": 1252,
        "name": "Sangha-Mbaéré",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "SE"
      },
      {
        "id": 1261,
        "name": "Vakaga Prefecture",
        "country_id": 42,
        "country_code": "CF",
        "state_code": "VK"
      },
      {
        "id": 3583,
        "name": "Bahr el Gazel",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "BG"
      },
      {
        "id": 3590,
        "name": "Batha Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "BA"
      },
      {
        "id": 3574,
        "name": "Borkou",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "BO"
      },
      {
        "id": 3578,
        "name": "Ennedi Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "EN"
      },
      {
        "id": 3575,
        "name": "Ennedi-Est",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "EE"
      },
      {
        "id": 3584,
        "name": "Ennedi-Ouest",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "EO"
      },
      {
        "id": 3576,
        "name": "Guéra Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "GR"
      },
      {
        "id": 3573,
        "name": "Hadjer-Lamis",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "HL"
      },
      {
        "id": 3588,
        "name": "Kanem Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "KA"
      },
      {
        "id": 3577,
        "name": "Lac Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "LC"
      },
      {
        "id": 3585,
        "name": "Logone Occidental Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "LO"
      },
      {
        "id": 3591,
        "name": "Logone Oriental Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "LR"
      },
      {
        "id": 3589,
        "name": "Mandoul Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "MA"
      },
      {
        "id": 3580,
        "name": "Mayo-Kebbi Est Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "ME"
      },
      {
        "id": 3571,
        "name": "Mayo-Kebbi Ouest Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "MO"
      },
      {
        "id": 3570,
        "name": "Moyen-Chari Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "MC"
      },
      {
        "id": 3586,
        "name": "N'Djamena",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "ND"
      },
      {
        "id": 3582,
        "name": "Ouaddaï Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "OD"
      },
      {
        "id": 3592,
        "name": "Salamat Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "SA"
      },
      {
        "id": 3572,
        "name": "Sila Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "SI"
      },
      {
        "id": 3579,
        "name": "Tandjilé Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "TA"
      },
      {
        "id": 3587,
        "name": "Tibesti Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "TI"
      },
      {
        "id": 3581,
        "name": "Wadi Fira Region",
        "country_id": 43,
        "country_code": "TD",
        "state_code": "WF"
      },
      {
        "id": 2832,
        "name": "Antofagasta Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "AN"
      },
      {
        "id": 2826,
        "name": "Araucanía Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "AR"
      },
      {
        "id": 2829,
        "name": "Arica y Parinacota Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "AP"
      },
      {
        "id": 2823,
        "name": "Atacama Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "AT"
      },
      {
        "id": 2828,
        "name": "Aysén Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "AI"
      },
      {
        "id": 2827,
        "name": "Bío Bío Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "BI"
      },
      {
        "id": 2825,
        "name": "Coquimbo Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "CO"
      },
      {
        "id": 2835,
        "name": "Los Lagos Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "LL"
      },
      {
        "id": 2834,
        "name": "Los Ríos Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "LR"
      },
      {
        "id": 2836,
        "name": "Magellan and the Chilean Antarctic Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "MA"
      },
      {
        "id": 2833,
        "name": "Maule Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "ML"
      },
      {
        "id": 2831,
        "name": "Ñuble Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "NB"
      },
      {
        "id": 2838,
        "name": "O'Higgins",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "LI"
      },
      {
        "id": 2824,
        "name": "Santiago Metropolitan Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "RM"
      },
      {
        "id": 2837,
        "name": "Tarapacá Region",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "TA"
      },
      {
        "id": 2830,
        "name": "Valparaíso",
        "country_id": 44,
        "country_code": "CL",
        "state_code": "VS"
      },
      {
        "id": 2251,
        "name": "Anhui",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "AH"
      },
      {
        "id": 2257,
        "name": "Beijing",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "BJ"
      },
      {
        "id": 2271,
        "name": "Chongqing",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "CQ"
      },
      {
        "id": 2248,
        "name": "Fujian",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "FJ"
      },
      {
        "id": 2275,
        "name": "Gansu",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "GS"
      },
      {
        "id": 2279,
        "name": "Guangdong",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "GD"
      },
      {
        "id": 2278,
        "name": "Guangxi Zhuang Autonomous Region",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "GX"
      },
      {
        "id": 2261,
        "name": "Guizhou",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "GZ"
      },
      {
        "id": 2273,
        "name": "Hainan",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "HI"
      },
      {
        "id": 2280,
        "name": "Hebei",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "HE"
      },
      {
        "id": 2265,
        "name": "Heilongjiang",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "HL"
      },
      {
        "id": 2259,
        "name": "Henan",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "HA"
      },
      {
        "id": 2267,
        "name": "Hong Kong",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "HK"
      },
      {
        "id": 2274,
        "name": "Hubei",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "HB"
      },
      {
        "id": 2258,
        "name": "Hunan",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "HN"
      },
      {
        "id": 2269,
        "name": "Inner Mongolia",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "NM"
      },
      {
        "id": 2250,
        "name": "Jiangsu",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "JS"
      },
      {
        "id": 2256,
        "name": "Jiangxi",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "JX"
      },
      {
        "id": 2253,
        "name": "Jilin",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "JL"
      },
      {
        "id": 2276,
        "name": "Keelung",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "TW-KEE"
      },
      {
        "id": 2268,
        "name": "Liaoning",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "LN"
      },
      {
        "id": 2266,
        "name": "Macau",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "MO"
      },
      {
        "id": 2262,
        "name": "Ningxia Hui Autonomous Region",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "NX"
      },
      {
        "id": 2270,
        "name": "Qinghai",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "QH"
      },
      {
        "id": 2272,
        "name": "Shaanxi",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "SN"
      },
      {
        "id": 2252,
        "name": "Shandong",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "SD"
      },
      {
        "id": 2249,
        "name": "Shanghai",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "SH"
      },
      {
        "id": 2254,
        "name": "Shanxi",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "SX"
      },
      {
        "id": 2277,
        "name": "Sichuan",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "SC"
      },
      {
        "id": 2255,
        "name": "Taiwan Province, People's Republic of China",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "TW"
      },
      {
        "id": 2264,
        "name": "Tibet Autonomous Region",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "XZ"
      },
      {
        "id": 2263,
        "name": "Xinjiang",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "XJ"
      },
      {
        "id": 2260,
        "name": "Yunnan",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "YN"
      },
      {
        "id": 2247,
        "name": "Zhejiang",
        "country_id": 45,
        "country_code": "CN",
        "state_code": "ZJ"
      },
      {
        "id": 2895,
        "name": "Amazonas Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "AMA"
      },
      {
        "id": 2890,
        "name": "Antioquia Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "ANT"
      },
      {
        "id": 2881,
        "name": "Arauca Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "ARA"
      },
      {
        "id": 2900,
        "name": "Archipelago of Saint Andréws, Providence and Saint Catalina",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "SAP"
      },
      {
        "id": 2880,
        "name": "Atlántico Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "ATL"
      },
      {
        "id": 2893,
        "name": "Bolívar Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "BOL"
      },
      {
        "id": 2903,
        "name": "Boyacá Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "BOY"
      },
      {
        "id": 2887,
        "name": "Caldas Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "CAL"
      },
      {
        "id": 2891,
        "name": "Caquetá Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "CAQ"
      },
      {
        "id": 2892,
        "name": "Casanare Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "CAS"
      },
      {
        "id": 2884,
        "name": "Cauca Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "CAU"
      },
      {
        "id": 2899,
        "name": "Cesar Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "CES"
      },
      {
        "id": 2876,
        "name": "Chocó Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "CHO"
      },
      {
        "id": 2898,
        "name": "Córdoba Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "COR"
      },
      {
        "id": 2875,
        "name": "Cundinamarca Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "CUN"
      },
      {
        "id": 2882,
        "name": "Guainía Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "GUA"
      },
      {
        "id": 2888,
        "name": "Guaviare Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "GUV"
      },
      {
        "id": 2889,
        "name": "La Guajira Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "LAG"
      },
      {
        "id": 2886,
        "name": "Magdalena Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "MAG"
      },
      {
        "id": 2878,
        "name": "Meta",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "MET"
      },
      {
        "id": 2897,
        "name": "Nariño Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "NAR"
      },
      {
        "id": 2877,
        "name": "Norte de Santander Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "NSA"
      },
      {
        "id": 2896,
        "name": "Putumayo Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "PUT"
      },
      {
        "id": 2874,
        "name": "Quindío Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "QUI"
      },
      {
        "id": 2879,
        "name": "Risaralda Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "RIS"
      },
      {
        "id": 2901,
        "name": "Santander Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "SAN"
      },
      {
        "id": 2902,
        "name": "Sucre Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "SUC"
      },
      {
        "id": 2883,
        "name": "Tolima Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "TOL"
      },
      {
        "id": 2904,
        "name": "Valle del Cauca Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "VAC"
      },
      {
        "id": 2885,
        "name": "Vaupés Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "VAU"
      },
      {
        "id": 2894,
        "name": "Vichada Department",
        "country_id": 48,
        "country_code": "CO",
        "state_code": "VID"
      },
      {
        "id": 2821,
        "name": "Anjouan",
        "country_id": 49,
        "country_code": "KM",
        "state_code": "A"
      },
      {
        "id": 2822,
        "name": "Grande Comore",
        "country_id": 49,
        "country_code": "KM",
        "state_code": "G"
      },
      {
        "id": 2820,
        "name": "Mohéli",
        "country_id": 49,
        "country_code": "KM",
        "state_code": "M"
      },
      {
        "id": 2866,
        "name": "Bouenza Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "11"
      },
      {
        "id": 2870,
        "name": "Brazzaville",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "BZV"
      },
      {
        "id": 2864,
        "name": "Cuvette Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "8"
      },
      {
        "id": 2869,
        "name": "Cuvette-Ouest Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "15"
      },
      {
        "id": 2867,
        "name": "Kouilou Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "5"
      },
      {
        "id": 2868,
        "name": "Lékoumou Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "2"
      },
      {
        "id": 2865,
        "name": "Likouala Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "7"
      },
      {
        "id": 2872,
        "name": "Niari Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "9"
      },
      {
        "id": 2862,
        "name": "Plateaux Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "14"
      },
      {
        "id": 2863,
        "name": "Pointe-Noire",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "16"
      },
      {
        "id": 2873,
        "name": "Pool Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "12"
      },
      {
        "id": 2871,
        "name": "Sangha Department",
        "country_id": 50,
        "country_code": "CG",
        "state_code": "13"
      },
      {
        "id": 2754,
        "name": "Bandundu Province",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "BN"
      },
      {
        "id": 2746,
        "name": "Bas-Congo province",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "BC"
      },
      {
        "id": 2753,
        "name": "Bas-Uele",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "BU"
      },
      {
        "id": 2744,
        "name": "Équateur",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "EQ"
      },
      {
        "id": 2750,
        "name": "Haut-Katanga Province",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "HK"
      },
      {
        "id": 2758,
        "name": "Haut-Lomami District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "HL"
      },
      {
        "id": 2734,
        "name": "Haut-Uele",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "HU"
      },
      {
        "id": 2751,
        "name": "Ituri Interim Administration",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "IT"
      },
      {
        "id": 2757,
        "name": "Kasaï District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "KS"
      },
      {
        "id": 2737,
        "name": "Kasaï-Occidental",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "KW"
      },
      {
        "id": 2735,
        "name": "Kasaï-Oriental",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "KE"
      },
      {
        "id": 2742,
        "name": "Katanga Province",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "KA"
      },
      {
        "id": 2741,
        "name": "Kinshasa",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "KN"
      },
      {
        "id": 2740,
        "name": "Kwango District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "KG"
      },
      {
        "id": 2759,
        "name": "Kwilu District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "KL"
      },
      {
        "id": 2747,
        "name": "Lomami Province",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "LO"
      },
      {
        "id": 2755,
        "name": "Mai-Ndombe Province",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "MN"
      },
      {
        "id": 2745,
        "name": "Maniema",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "MA"
      },
      {
        "id": 2752,
        "name": "Mongala District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "MO"
      },
      {
        "id": 2739,
        "name": "Nord-Ubangi District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "NU"
      },
      {
        "id": 2749,
        "name": "North Kivu",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "NK"
      },
      {
        "id": 2736,
        "name": "Orientale Province",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "OR"
      },
      {
        "id": 2743,
        "name": "Sankuru District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "SA"
      },
      {
        "id": 2738,
        "name": "South Kivu",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "SK"
      },
      {
        "id": 2748,
        "name": "Sud-Ubangi",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "SU"
      },
      {
        "id": 2733,
        "name": "Tanganyika Province",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "TA"
      },
      {
        "id": 2756,
        "name": "Tshopo District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "TO"
      },
      {
        "id": 2732,
        "name": "Tshuapa District",
        "country_id": 51,
        "country_code": "CD",
        "state_code": "TU"
      },
      {
        "id": 1215,
        "name": "Alajuela Province",
        "country_id": 53,
        "country_code": "CR",
        "state_code": "A"
      },
      {
        "id": 1209,
        "name": "Guanacaste Province",
        "country_id": 53,
        "country_code": "CR",
        "state_code": "G"
      },
      {
        "id": 1212,
        "name": "Heredia Province",
        "country_id": 53,
        "country_code": "CR",
        "state_code": "H"
      },
      {
        "id": 1213,
        "name": "Limón Province",
        "country_id": 53,
        "country_code": "CR",
        "state_code": "L"
      },
      {
        "id": 1211,
        "name": "Provincia de Cartago",
        "country_id": 53,
        "country_code": "CR",
        "state_code": "C"
      },
      {
        "id": 1210,
        "name": "Puntarenas Province",
        "country_id": 53,
        "country_code": "CR",
        "state_code": "P"
      },
      {
        "id": 1214,
        "name": "San José Province",
        "country_id": 53,
        "country_code": "CR",
        "state_code": "SJ"
      },
      {
        "id": 2634,
        "name": "Abidjan",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "AB"
      },
      {
        "id": 2626,
        "name": "Agnéby",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "16"
      },
      {
        "id": 2636,
        "name": "Bafing Region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "17"
      },
      {
        "id": 2643,
        "name": "Bas-Sassandra District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "BS"
      },
      {
        "id": 2635,
        "name": "Bas-Sassandra Region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "09"
      },
      {
        "id": 2654,
        "name": "Comoé District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "CM"
      },
      {
        "id": 2644,
        "name": "Denguélé District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "DN"
      },
      {
        "id": 2642,
        "name": "Denguélé Region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "10"
      },
      {
        "id": 2645,
        "name": "Dix-Huit Montagnes",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "06"
      },
      {
        "id": 2633,
        "name": "Fromager",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "18"
      },
      {
        "id": 2651,
        "name": "Gôh-Djiboua District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "GD"
      },
      {
        "id": 2638,
        "name": "Haut-Sassandra",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "02"
      },
      {
        "id": 2632,
        "name": "Lacs District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "LC"
      },
      {
        "id": 2640,
        "name": "Lacs Region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "07"
      },
      {
        "id": 2627,
        "name": "Lagunes District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "LG"
      },
      {
        "id": 2639,
        "name": "Lagunes region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "01"
      },
      {
        "id": 2631,
        "name": "Marahoué Region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "12"
      },
      {
        "id": 2629,
        "name": "Montagnes District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "MG"
      },
      {
        "id": 2646,
        "name": "Moyen-Cavally",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "19"
      },
      {
        "id": 2630,
        "name": "Moyen-Comoé",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "05"
      },
      {
        "id": 2655,
        "name": "N'zi-Comoé",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "11"
      },
      {
        "id": 2648,
        "name": "Sassandra-Marahoué District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "SM"
      },
      {
        "id": 2625,
        "name": "Savanes Region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "03"
      },
      {
        "id": 2628,
        "name": "Sud-Bandama",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "15"
      },
      {
        "id": 2652,
        "name": "Sud-Comoé",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "13"
      },
      {
        "id": 2637,
        "name": "Vallée du Bandama District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "VB"
      },
      {
        "id": 2647,
        "name": "Vallée du Bandama Region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "04"
      },
      {
        "id": 2650,
        "name": "Woroba District",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "WR"
      },
      {
        "id": 2649,
        "name": "Worodougou",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "14"
      },
      {
        "id": 2653,
        "name": "Yamoussoukro",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "YM"
      },
      {
        "id": 2641,
        "name": "Zanzan Region",
        "country_id": 54,
        "country_code": "CI",
        "state_code": "ZZ"
      },
      {
        "id": 734,
        "name": "Bjelovar-Bilogora County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "07"
      },
      {
        "id": 737,
        "name": "Brod-Posavina County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "12"
      },
      {
        "id": 728,
        "name": "Dubrovnik-Neretva County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "19"
      },
      {
        "id": 743,
        "name": "Istria County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "18"
      },
      {
        "id": 742,
        "name": "Koprivnica-Križevci County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "06"
      },
      {
        "id": 729,
        "name": "Krapina-Zagorje County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "02"
      },
      {
        "id": 731,
        "name": "Lika-Senj County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "09"
      },
      {
        "id": 726,
        "name": "Međimurje County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "20"
      },
      {
        "id": 740,
        "name": "Osijek-Baranja County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "14"
      },
      {
        "id": 724,
        "name": "Požega-Slavonia County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "11"
      },
      {
        "id": 735,
        "name": "Primorje-Gorski Kotar County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "08"
      },
      {
        "id": 730,
        "name": "Šibenik-Knin County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "15"
      },
      {
        "id": 733,
        "name": "Sisak-Moslavina County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "03"
      },
      {
        "id": 725,
        "name": "Split-Dalmatia County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "17"
      },
      {
        "id": 739,
        "name": "Varaždin County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "05"
      },
      {
        "id": 732,
        "name": "Virovitica-Podravina County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "10"
      },
      {
        "id": 741,
        "name": "Vukovar-Syrmia County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "16"
      },
      {
        "id": 727,
        "name": "Zadar County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "13"
      },
      {
        "id": 738,
        "name": "Zagreb",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "21"
      },
      {
        "id": 736,
        "name": "Zagreb County",
        "country_id": 55,
        "country_code": "HR",
        "state_code": "01"
      },
      {
        "id": 283,
        "name": "Artemisa Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "15"
      },
      {
        "id": 286,
        "name": "Camagüey Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "09"
      },
      {
        "id": 282,
        "name": "Ciego de Ávila Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "08"
      },
      {
        "id": 287,
        "name": "Cienfuegos Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "06"
      },
      {
        "id": 275,
        "name": "Granma Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "12"
      },
      {
        "id": 285,
        "name": "Guantánamo Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "14"
      },
      {
        "id": 272,
        "name": "Havana Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "03"
      },
      {
        "id": 279,
        "name": "Holguín Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "11"
      },
      {
        "id": 278,
        "name": "Isla de la Juventud",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "99"
      },
      {
        "id": 281,
        "name": "Las Tunas Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "10"
      },
      {
        "id": 284,
        "name": "Matanzas Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "04"
      },
      {
        "id": 276,
        "name": "Mayabeque Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "16"
      },
      {
        "id": 277,
        "name": "Pinar del Río Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "01"
      },
      {
        "id": 274,
        "name": "Sancti Spíritus Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "07"
      },
      {
        "id": 273,
        "name": "Santiago de Cuba Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "13"
      },
      {
        "id": 280,
        "name": "Villa Clara Province",
        "country_id": 56,
        "country_code": "CU",
        "state_code": "05"
      },
      {
        "id": 749,
        "name": "Famagusta District",
        "country_id": 57,
        "country_code": "CY",
        "state_code": "04"
      },
      {
        "id": 744,
        "name": "Kyrenia District",
        "country_id": 57,
        "country_code": "CY",
        "state_code": "06"
      },
      {
        "id": 747,
        "name": "Larnaca District",
        "country_id": 57,
        "country_code": "CY",
        "state_code": "03"
      },
      {
        "id": 748,
        "name": "Limassol District",
        "country_id": 57,
        "country_code": "CY",
        "state_code": "02"
      },
      {
        "id": 745,
        "name": "Nicosia District",
        "country_id": 57,
        "country_code": "CY",
        "state_code": "01"
      },
      {
        "id": 746,
        "name": "Paphos District",
        "country_id": 57,
        "country_code": "CY",
        "state_code": "05"
      },
      {
        "id": 4627,
        "name": "Benešov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "201"
      },
      {
        "id": 4620,
        "name": "Beroun District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "202"
      },
      {
        "id": 4615,
        "name": "Blansko District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "641"
      },
      {
        "id": 4542,
        "name": "Břeclav District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "644"
      },
      {
        "id": 4568,
        "name": "Brno-City District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "642"
      },
      {
        "id": 4545,
        "name": "Brno-Country District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "643"
      },
      {
        "id": 4644,
        "name": "Bruntál District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "801"
      },
      {
        "id": 4554,
        "name": "Central Bohemian Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "20"
      },
      {
        "id": 4633,
        "name": "Česká Lípa District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "511"
      },
      {
        "id": 4556,
        "name": "České Budějovice District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "311"
      },
      {
        "id": 4543,
        "name": "Český Krumlov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "312"
      },
      {
        "id": 4573,
        "name": "Cheb District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "411"
      },
      {
        "id": 4553,
        "name": "Chomutov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "422"
      },
      {
        "id": 4634,
        "name": "Chrudim District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "531"
      },
      {
        "id": 4609,
        "name": "Děčín District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "421"
      },
      {
        "id": 4641,
        "name": "Domažlice District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "321"
      },
      {
        "id": 4559,
        "name": "Frýdek-Místek District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "802"
      },
      {
        "id": 4611,
        "name": "Havlíčkův Brod District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "631"
      },
      {
        "id": 4561,
        "name": "Hodonín District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "645"
      },
      {
        "id": 4577,
        "name": "Horní Počernice",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "120"
      },
      {
        "id": 4580,
        "name": "Hradec Králové District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "521"
      },
      {
        "id": 4614,
        "name": "Hradec Králové Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "52"
      },
      {
        "id": 4612,
        "name": "Jablonec nad Nisou District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "512"
      },
      {
        "id": 4625,
        "name": "Jeseník District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "711"
      },
      {
        "id": 4640,
        "name": "Jičín District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "522"
      },
      {
        "id": 4613,
        "name": "Jihlava District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "632"
      },
      {
        "id": 4624,
        "name": "Jindřichův Hradec District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "313"
      },
      {
        "id": 4604,
        "name": "Karlovy Vary District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "412"
      },
      {
        "id": 4581,
        "name": "Karlovy Vary Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "41"
      },
      {
        "id": 4586,
        "name": "Karviná District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "803"
      },
      {
        "id": 4631,
        "name": "Kladno District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "203"
      },
      {
        "id": 4591,
        "name": "Klatovy District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "322"
      },
      {
        "id": 4618,
        "name": "Kolín District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "204"
      },
      {
        "id": 4593,
        "name": "Kroměříž District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "721"
      },
      {
        "id": 4590,
        "name": "Liberec District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "513"
      },
      {
        "id": 4601,
        "name": "Liberec Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "51"
      },
      {
        "id": 4605,
        "name": "Litoměřice District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "423"
      },
      {
        "id": 4617,
        "name": "Louny District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "424"
      },
      {
        "id": 4638,
        "name": "Mělník District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "206"
      },
      {
        "id": 4643,
        "name": "Mladá Boleslav District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "207"
      },
      {
        "id": 4600,
        "name": "Moravian-Silesian Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "80"
      },
      {
        "id": 4629,
        "name": "Most District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "425"
      },
      {
        "id": 4550,
        "name": "Náchod District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "523"
      },
      {
        "id": 4548,
        "name": "Nový Jičín District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "804"
      },
      {
        "id": 4582,
        "name": "Nymburk District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "208"
      },
      {
        "id": 4574,
        "name": "Olomouc District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "712"
      },
      {
        "id": 4589,
        "name": "Olomouc Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "71"
      },
      {
        "id": 4623,
        "name": "Opava District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "805"
      },
      {
        "id": 4584,
        "name": "Ostrava-City District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "806"
      },
      {
        "id": 4547,
        "name": "Pardubice District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "532"
      },
      {
        "id": 4588,
        "name": "Pardubice Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "53"
      },
      {
        "id": 4645,
        "name": "Pelhřimov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "633"
      },
      {
        "id": 4560,
        "name": "Písek District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "314"
      },
      {
        "id": 4607,
        "name": "Plzeň Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "32"
      },
      {
        "id": 4544,
        "name": "Plzeň-City District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "323"
      },
      {
        "id": 4564,
        "name": "Plzeň-North District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "325"
      },
      {
        "id": 4608,
        "name": "Plzeň-South District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "324"
      },
      {
        "id": 4578,
        "name": "Prachatice District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "315"
      },
      {
        "id": 4598,
        "name": "Prague",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "10"
      },
      {
        "id": 4562,
        "name": "Prague 1",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "101"
      },
      {
        "id": 4603,
        "name": "Prague 10",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "110"
      },
      {
        "id": 4570,
        "name": "Prague 11",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "111"
      },
      {
        "id": 4549,
        "name": "Prague 12",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "112"
      },
      {
        "id": 4555,
        "name": "Prague 13",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "113"
      },
      {
        "id": 4585,
        "name": "Prague 14",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "114"
      },
      {
        "id": 4637,
        "name": "Prague 15",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "115"
      },
      {
        "id": 4567,
        "name": "Prague 16",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "116"
      },
      {
        "id": 4616,
        "name": "Prague 2",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "102"
      },
      {
        "id": 4632,
        "name": "Prague 21",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "121"
      },
      {
        "id": 4635,
        "name": "Prague 3",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "103"
      },
      {
        "id": 4587,
        "name": "Prague 4",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "104"
      },
      {
        "id": 4557,
        "name": "Prague 5",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "105"
      },
      {
        "id": 4569,
        "name": "Prague 6",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "106"
      },
      {
        "id": 4610,
        "name": "Prague 7",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "107"
      },
      {
        "id": 4594,
        "name": "Prague 8",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "108"
      },
      {
        "id": 4566,
        "name": "Prague 9",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "109"
      },
      {
        "id": 4606,
        "name": "Prague-East District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "209"
      },
      {
        "id": 4619,
        "name": "Prague-West District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "20A"
      },
      {
        "id": 4626,
        "name": "Přerov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "714"
      },
      {
        "id": 4546,
        "name": "Příbram District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "20B"
      },
      {
        "id": 4551,
        "name": "Prostějov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "713"
      },
      {
        "id": 4558,
        "name": "Rakovník District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "20C"
      },
      {
        "id": 4583,
        "name": "Rokycany District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "326"
      },
      {
        "id": 4636,
        "name": "Rychnov nad Kněžnou District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "524"
      },
      {
        "id": 4596,
        "name": "Semily District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "514"
      },
      {
        "id": 4595,
        "name": "Sokolov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "413"
      },
      {
        "id": 4639,
        "name": "South Bohemian Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "31"
      },
      {
        "id": 4602,
        "name": "South Moravian Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "64"
      },
      {
        "id": 4628,
        "name": "Strakonice District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "316"
      },
      {
        "id": 4642,
        "name": "Šumperk District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "715"
      },
      {
        "id": 4571,
        "name": "Svitavy District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "533"
      },
      {
        "id": 4565,
        "name": "Tábor District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "317"
      },
      {
        "id": 4646,
        "name": "Tachov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "327"
      },
      {
        "id": 4621,
        "name": "Teplice District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "426"
      },
      {
        "id": 4597,
        "name": "Třebíč District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "634"
      },
      {
        "id": 4579,
        "name": "Trutnov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "525"
      },
      {
        "id": 4592,
        "name": "Uherské Hradiště District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "722"
      },
      {
        "id": 4599,
        "name": "Ústí nad Labem District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "427"
      },
      {
        "id": 4576,
        "name": "Ústí nad Labem Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "42"
      },
      {
        "id": 4647,
        "name": "Ústí nad Orlicí District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "534"
      },
      {
        "id": 4572,
        "name": "Vsetín District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "723"
      },
      {
        "id": 4622,
        "name": "Vyškov District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "646"
      },
      {
        "id": 4575,
        "name": "Vysočina Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "63"
      },
      {
        "id": 4648,
        "name": "Žďár nad Sázavou District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "635"
      },
      {
        "id": 4563,
        "name": "Zlín District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "724"
      },
      {
        "id": 4552,
        "name": "Zlín Region",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "72"
      },
      {
        "id": 4630,
        "name": "Znojmo District",
        "country_id": 58,
        "country_code": "CZ",
        "state_code": "647"
      },
      {
        "id": 1530,
        "name": "Capital Region of Denmark",
        "country_id": 59,
        "country_code": "DK",
        "state_code": "84"
      },
      {
        "id": 1531,
        "name": "Central Denmark Region",
        "country_id": 59,
        "country_code": "DK",
        "state_code": "82"
      },
      {
        "id": 1532,
        "name": "North Denmark Region",
        "country_id": 59,
        "country_code": "DK",
        "state_code": "81"
      },
      {
        "id": 1529,
        "name": "Region of Southern Denmark",
        "country_id": 59,
        "country_code": "DK",
        "state_code": "83"
      },
      {
        "id": 1528,
        "name": "Region Zealand",
        "country_id": 59,
        "country_code": "DK",
        "state_code": "85"
      },
      {
        "id": 2933,
        "name": "Ali Sabieh Region",
        "country_id": 60,
        "country_code": "DJ",
        "state_code": "AS"
      },
      {
        "id": 2932,
        "name": "Arta Region",
        "country_id": 60,
        "country_code": "DJ",
        "state_code": "AR"
      },
      {
        "id": 2930,
        "name": "Dikhil Region",
        "country_id": 60,
        "country_code": "DJ",
        "state_code": "DI"
      },
      {
        "id": 2929,
        "name": "Djibouti",
        "country_id": 60,
        "country_code": "DJ",
        "state_code": "DJ"
      },
      {
        "id": 2928,
        "name": "Obock Region",
        "country_id": 60,
        "country_code": "DJ",
        "state_code": "OB"
      },
      {
        "id": 2931,
        "name": "Tadjourah Region",
        "country_id": 60,
        "country_code": "DJ",
        "state_code": "TA"
      },
      {
        "id": 4082,
        "name": "Saint Andrew Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "02"
      },
      {
        "id": 4078,
        "name": "Saint David Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "03"
      },
      {
        "id": 4079,
        "name": "Saint George Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "04"
      },
      {
        "id": 4076,
        "name": "Saint John Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "05"
      },
      {
        "id": 4085,
        "name": "Saint Joseph Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "06"
      },
      {
        "id": 4083,
        "name": "Saint Luke Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "07"
      },
      {
        "id": 4077,
        "name": "Saint Mark Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "08"
      },
      {
        "id": 4080,
        "name": "Saint Patrick Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "09"
      },
      {
        "id": 4084,
        "name": "Saint Paul Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "10"
      },
      {
        "id": 4081,
        "name": "Saint Peter Parish",
        "country_id": 61,
        "country_code": "DM",
        "state_code": "11"
      },
      {
        "id": 4114,
        "name": "Azua Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "02"
      },
      {
        "id": 4105,
        "name": "Baoruco Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "03"
      },
      {
        "id": 4090,
        "name": "Barahona Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "04"
      },
      {
        "id": 4107,
        "name": "Dajabón Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "05"
      },
      {
        "id": 4095,
        "name": "Distrito Nacional",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "01"
      },
      {
        "id": 4113,
        "name": "Duarte Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "06"
      },
      {
        "id": 4086,
        "name": "El Seibo Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "08"
      },
      {
        "id": 4102,
        "name": "Espaillat Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "09"
      },
      {
        "id": 4106,
        "name": "Hato Mayor Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "30"
      },
      {
        "id": 4089,
        "name": "Hermanas Mirabal Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "19"
      },
      {
        "id": 4097,
        "name": "Independencia",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "10"
      },
      {
        "id": 4109,
        "name": "La Altagracia Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "11"
      },
      {
        "id": 4087,
        "name": "La Romana Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "12"
      },
      {
        "id": 4116,
        "name": "La Vega Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "13"
      },
      {
        "id": 4094,
        "name": "María Trinidad Sánchez Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "14"
      },
      {
        "id": 4099,
        "name": "Monseñor Nouel Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "28"
      },
      {
        "id": 4115,
        "name": "Monte Cristi Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "15"
      },
      {
        "id": 4111,
        "name": "Monte Plata Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "29"
      },
      {
        "id": 4101,
        "name": "Pedernales Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "16"
      },
      {
        "id": 4096,
        "name": "Peravia Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "17"
      },
      {
        "id": 4092,
        "name": "Puerto Plata Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "18"
      },
      {
        "id": 4103,
        "name": "Samaná Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "20"
      },
      {
        "id": 4091,
        "name": "San Cristóbal Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "21"
      },
      {
        "id": 4112,
        "name": "San José de Ocoa Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "31"
      },
      {
        "id": 4098,
        "name": "San Juan Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "22"
      },
      {
        "id": 4110,
        "name": "San Pedro de Macorís",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "23"
      },
      {
        "id": 4088,
        "name": "Sánchez Ramírez Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "24"
      },
      {
        "id": 4108,
        "name": "Santiago Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "25"
      },
      {
        "id": 4100,
        "name": "Santiago Rodríguez Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "26"
      },
      {
        "id": 4093,
        "name": "Santo Domingo Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "32"
      },
      {
        "id": 4104,
        "name": "Valverde Province",
        "country_id": 62,
        "country_code": "DO",
        "state_code": "27"
      },
      {
        "id": 4520,
        "name": "Aileu municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "AL"
      },
      {
        "id": 4518,
        "name": "Ainaro Municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "AN"
      },
      {
        "id": 4521,
        "name": "Baucau Municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "BA"
      },
      {
        "id": 4525,
        "name": "Bobonaro Municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "BO"
      },
      {
        "id": 4522,
        "name": "Cova Lima Municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "CO"
      },
      {
        "id": 4524,
        "name": "Dili municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "DI"
      },
      {
        "id": 4516,
        "name": "Ermera District",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "ER"
      },
      {
        "id": 4523,
        "name": "Lautém Municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "LA"
      },
      {
        "id": 4515,
        "name": "Liquiçá Municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "LI"
      },
      {
        "id": 4517,
        "name": "Manatuto District",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "MT"
      },
      {
        "id": 4519,
        "name": "Manufahi Municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "MF"
      },
      {
        "id": 4514,
        "name": "Viqueque Municipality",
        "country_id": 63,
        "country_code": "TL",
        "state_code": "VI"
      },
      {
        "id": 2923,
        "name": "Azuay Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "A"
      },
      {
        "id": 2920,
        "name": "Bolívar Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "B"
      },
      {
        "id": 2917,
        "name": "Cañar Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "F"
      },
      {
        "id": 2915,
        "name": "Carchi Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "C"
      },
      {
        "id": 2925,
        "name": "Chimborazo Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "H"
      },
      {
        "id": 2921,
        "name": "Cotopaxi Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "X"
      },
      {
        "id": 2924,
        "name": "El Oro Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "O"
      },
      {
        "id": 2922,
        "name": "Esmeraldas",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "E"
      },
      {
        "id": 2905,
        "name": "Galápagos Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "W"
      },
      {
        "id": 2914,
        "name": "Guayas Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "G"
      },
      {
        "id": 2911,
        "name": "Imbabura Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "I"
      },
      {
        "id": 2910,
        "name": "Los Ríos Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "R"
      },
      {
        "id": 2913,
        "name": "Manabí Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "M"
      },
      {
        "id": 2918,
        "name": "Morona-Santiago Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "S"
      },
      {
        "id": 2916,
        "name": "Napo Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "N"
      },
      {
        "id": 2926,
        "name": "Orellana Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "D"
      },
      {
        "id": 2907,
        "name": "Pastaza Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "Y"
      },
      {
        "id": 2927,
        "name": "Pichincha Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "P"
      },
      {
        "id": 2912,
        "name": "Santa Elena Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "SE"
      },
      {
        "id": 2919,
        "name": "Santo Domingo de los Tsáchilas Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "SD"
      },
      {
        "id": 2906,
        "name": "Sucumbíos Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "U"
      },
      {
        "id": 2908,
        "name": "Tungurahua Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "T"
      },
      {
        "id": 2909,
        "name": "Zamora-Chinchipe Province",
        "country_id": 64,
        "country_code": "EC",
        "state_code": "Z"
      },
      {
        "id": 3235,
        "name": "Alexandria Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "ALX"
      },
      {
        "id": 3225,
        "name": "Aswan Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "ASN"
      },
      {
        "id": 3236,
        "name": "Asyut Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "AST"
      },
      {
        "id": 3241,
        "name": "Beheira Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "BH"
      },
      {
        "id": 3230,
        "name": "Beni Suef Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "BNS"
      },
      {
        "id": 3223,
        "name": "Cairo Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "C"
      },
      {
        "id": 3245,
        "name": "Dakahlia Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "DK"
      },
      {
        "id": 3224,
        "name": "Damietta Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "DT"
      },
      {
        "id": 3238,
        "name": "Faiyum Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "FYM"
      },
      {
        "id": 3234,
        "name": "Gharbia Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "GH"
      },
      {
        "id": 3239,
        "name": "Giza Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "GZ"
      },
      {
        "id": 3244,
        "name": "Ismailia Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "IS"
      },
      {
        "id": 3222,
        "name": "Kafr el-Sheikh Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "KFS"
      },
      {
        "id": 3242,
        "name": "Luxor Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "LX"
      },
      {
        "id": 3231,
        "name": "Matrouh Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "MT"
      },
      {
        "id": 3243,
        "name": "Minya Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "MN"
      },
      {
        "id": 3228,
        "name": "Monufia Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "MNF"
      },
      {
        "id": 3246,
        "name": "New Valley Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "WAD"
      },
      {
        "id": 3227,
        "name": "North Sinai Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "SIN"
      },
      {
        "id": 3229,
        "name": "Port Said Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "PTS"
      },
      {
        "id": 3232,
        "name": "Qalyubia Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "KB"
      },
      {
        "id": 3247,
        "name": "Qena Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "KN"
      },
      {
        "id": 3240,
        "name": "Red Sea Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "BA"
      },
      {
        "id": 3226,
        "name": "Sohag Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "SHG"
      },
      {
        "id": 3237,
        "name": "South Sinai Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "JS"
      },
      {
        "id": 3233,
        "name": "Suez Governorate",
        "country_id": 65,
        "country_code": "EG",
        "state_code": "SUZ"
      },
      {
        "id": 4139,
        "name": "Ahuachapán Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "AH"
      },
      {
        "id": 4132,
        "name": "Cabañas Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "CA"
      },
      {
        "id": 4131,
        "name": "Chalatenango Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "CH"
      },
      {
        "id": 4137,
        "name": "Cuscatlán Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "CU"
      },
      {
        "id": 4134,
        "name": "La Libertad Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "LI"
      },
      {
        "id": 4136,
        "name": "La Paz Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "PA"
      },
      {
        "id": 4138,
        "name": "La Unión Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "UN"
      },
      {
        "id": 4130,
        "name": "Morazán Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "MO"
      },
      {
        "id": 4135,
        "name": "San Miguel Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "SM"
      },
      {
        "id": 4133,
        "name": "San Salvador Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "SS"
      },
      {
        "id": 4127,
        "name": "San Vicente Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "SV"
      },
      {
        "id": 4128,
        "name": "Santa Ana Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "SA"
      },
      {
        "id": 4140,
        "name": "Sonsonate Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "SO"
      },
      {
        "id": 4129,
        "name": "Usulután Department",
        "country_id": 66,
        "country_code": "SV",
        "state_code": "US"
      },
      {
        "id": 3444,
        "name": "Annobón Province",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "AN"
      },
      {
        "id": 3446,
        "name": "Bioko Norte Province",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "BN"
      },
      {
        "id": 3443,
        "name": "Bioko Sur Province",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "BS"
      },
      {
        "id": 3445,
        "name": "Centro Sur Province",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "CS"
      },
      {
        "id": 3442,
        "name": "Insular Region",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "I"
      },
      {
        "id": 3439,
        "name": "Kié-Ntem Province",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "KN"
      },
      {
        "id": 3441,
        "name": "Litoral Province",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "LI"
      },
      {
        "id": 3438,
        "name": "Río Muni",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "C"
      },
      {
        "id": 3440,
        "name": "Wele-Nzas Province",
        "country_id": 67,
        "country_code": "GQ",
        "state_code": "WN"
      },
      {
        "id": 3425,
        "name": "Anseba Region",
        "country_id": 68,
        "country_code": "ER",
        "state_code": "AN"
      },
      {
        "id": 3427,
        "name": "Debub Region",
        "country_id": 68,
        "country_code": "ER",
        "state_code": "DU"
      },
      {
        "id": 3428,
        "name": "Gash-Barka Region",
        "country_id": 68,
        "country_code": "ER",
        "state_code": "GB"
      },
      {
        "id": 3426,
        "name": "Maekel Region",
        "country_id": 68,
        "country_code": "ER",
        "state_code": "MA"
      },
      {
        "id": 3424,
        "name": "Northern Red Sea Region",
        "country_id": 68,
        "country_code": "ER",
        "state_code": "SK"
      },
      {
        "id": 3429,
        "name": "Southern Red Sea Region",
        "country_id": 68,
        "country_code": "ER",
        "state_code": "DK"
      },
      {
        "id": 3567,
        "name": "Harju County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "37"
      },
      {
        "id": 3555,
        "name": "Hiiu County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "39"
      },
      {
        "id": 3569,
        "name": "Ida-Viru County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "44"
      },
      {
        "id": 3566,
        "name": "Järva County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "51"
      },
      {
        "id": 3565,
        "name": "Jõgeva County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "49"
      },
      {
        "id": 3568,
        "name": "Lääne County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "57"
      },
      {
        "id": 3564,
        "name": "Lääne-Viru County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "59"
      },
      {
        "id": 3562,
        "name": "Pärnu County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "67"
      },
      {
        "id": 3563,
        "name": "Põlva County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "65"
      },
      {
        "id": 3559,
        "name": "Rapla County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "70"
      },
      {
        "id": 3561,
        "name": "Saare County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "74"
      },
      {
        "id": 3557,
        "name": "Tartu County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "78"
      },
      {
        "id": 3558,
        "name": "Valga County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "82"
      },
      {
        "id": 3556,
        "name": "Viljandi County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "84"
      },
      {
        "id": 3560,
        "name": "Võru County",
        "country_id": 69,
        "country_code": "EE",
        "state_code": "86"
      },
      {
        "id": 11,
        "name": "Addis Ababa",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "AA"
      },
      {
        "id": 6,
        "name": "Afar Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "AF"
      },
      {
        "id": 3,
        "name": "Amhara Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "AM"
      },
      {
        "id": 9,
        "name": "Benishangul-Gumuz Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "BE"
      },
      {
        "id": 8,
        "name": "Dire Dawa",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "DD"
      },
      {
        "id": 10,
        "name": "Gambela Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "GA"
      },
      {
        "id": 7,
        "name": "Harari Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "HA"
      },
      {
        "id": 5,
        "name": "Oromia Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "OR"
      },
      {
        "id": 2,
        "name": "Somali Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "SO"
      },
      {
        "id": 1,
        "name": "Southern Nations, Nationalities, and Peoples' Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "SN"
      },
      {
        "id": 4,
        "name": "Tigray Region",
        "country_id": 70,
        "country_code": "ET",
        "state_code": "TI"
      },
      {
        "id": 1917,
        "name": "Ba",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "01"
      },
      {
        "id": 1930,
        "name": "Bua",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "02"
      },
      {
        "id": 1924,
        "name": "Cakaudrove",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "03"
      },
      {
        "id": 1929,
        "name": "Central Division",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "C"
      },
      {
        "id": 1932,
        "name": "Eastern Division",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "E"
      },
      {
        "id": 1934,
        "name": "Kadavu",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "04"
      },
      {
        "id": 1933,
        "name": "Lau",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "05"
      },
      {
        "id": 1916,
        "name": "Lomaiviti",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "06"
      },
      {
        "id": 1922,
        "name": "Macuata",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "07"
      },
      {
        "id": 1919,
        "name": "Nadroga-Navosa",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "08"
      },
      {
        "id": 1927,
        "name": "Naitasiri",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "09"
      },
      {
        "id": 1928,
        "name": "Namosi",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "10"
      },
      {
        "id": 1921,
        "name": "Northern Division",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "N"
      },
      {
        "id": 1926,
        "name": "Ra",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "11"
      },
      {
        "id": 1920,
        "name": "Rewa",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "12"
      },
      {
        "id": 1931,
        "name": "Rotuma",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "R"
      },
      {
        "id": 1925,
        "name": "Serua",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "13"
      },
      {
        "id": 1918,
        "name": "Tailevu",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "14"
      },
      {
        "id": 1923,
        "name": "Western Division",
        "country_id": 73,
        "country_code": "FJ",
        "state_code": "W"
      },
      {
        "id": 1509,
        "name": "Åland Islands",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "01"
      },
      {
        "id": 1511,
        "name": "Central Finland",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "08"
      },
      {
        "id": 1494,
        "name": "Central Ostrobothnia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "07"
      },
      {
        "id": 1492,
        "name": "Eastern Finland Province",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "IS"
      },
      {
        "id": 1507,
        "name": "Finland Proper",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "19"
      },
      {
        "id": 1496,
        "name": "Kainuu",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "05"
      },
      {
        "id": 1512,
        "name": "Kymenlaakso",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "09"
      },
      {
        "id": 1500,
        "name": "Lapland",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "LL"
      },
      {
        "id": 1504,
        "name": "North Karelia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "13"
      },
      {
        "id": 1505,
        "name": "Northern Ostrobothnia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "14"
      },
      {
        "id": 1503,
        "name": "Northern Savonia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "15"
      },
      {
        "id": 1508,
        "name": "Ostrobothnia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "12"
      },
      {
        "id": 1499,
        "name": "Oulu Province",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "OL"
      },
      {
        "id": 1502,
        "name": "Päijänne Tavastia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "16"
      },
      {
        "id": 1506,
        "name": "Pirkanmaa",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "11"
      },
      {
        "id": 1501,
        "name": "Satakunta",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "17"
      },
      {
        "id": 1497,
        "name": "South Karelia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "02"
      },
      {
        "id": 1498,
        "name": "Southern Ostrobothnia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "03"
      },
      {
        "id": 1495,
        "name": "Southern Savonia",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "04"
      },
      {
        "id": 1493,
        "name": "Tavastia Proper",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "06"
      },
      {
        "id": 1510,
        "name": "Uusimaa",
        "country_id": 74,
        "country_code": "FI",
        "state_code": "18"
      },
      {
        "id": 4800,
        "name": "Alo",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "WF-AL"
      },
      {
        "id": 4811,
        "name": "Alsace",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "A"
      },
      {
        "id": 4808,
        "name": "Aquitaine",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "B"
      },
      {
        "id": 4789,
        "name": "Auvergne",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "C"
      },
      {
        "id": 4798,
        "name": "Auvergne-Rhône-Alpes",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "ARA"
      },
      {
        "id": 4825,
        "name": "Bourgogne-Franche-Comté",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "BFC"
      },
      {
        "id": 4807,
        "name": "Brittany",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "BRE"
      },
      {
        "id": 4788,
        "name": "Burgundy",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "D"
      },
      {
        "id": 4818,
        "name": "Centre-Val de Loire",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "CVL"
      },
      {
        "id": 4791,
        "name": "Champagne-Ardenne",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "G"
      },
      {
        "id": 4806,
        "name": "Corsica",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "COR"
      },
      {
        "id": 4805,
        "name": "Franche-Comté",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "I"
      },
      {
        "id": 4822,
        "name": "French Guiana",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "GF"
      },
      {
        "id": 4824,
        "name": "French Polynesia",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "PF"
      },
      {
        "id": 4820,
        "name": "Grand Est",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "GES"
      },
      {
        "id": 4829,
        "name": "Guadeloupe",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "GP"
      },
      {
        "id": 4828,
        "name": "Hauts-de-France",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "HDF"
      },
      {
        "id": 4796,
        "name": "Île-de-France",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "IDF"
      },
      {
        "id": 4803,
        "name": "Languedoc-Roussillon",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "K"
      },
      {
        "id": 4792,
        "name": "Limousin",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "L"
      },
      {
        "id": 4801,
        "name": "Lorraine",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "M"
      },
      {
        "id": 4814,
        "name": "Lower Normandy",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "P"
      },
      {
        "id": 4827,
        "name": "Martinique",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "MQ"
      },
      {
        "id": 4797,
        "name": "Mayotte",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "YT"
      },
      {
        "id": 4793,
        "name": "Nord-Pas-de-Calais",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "O"
      },
      {
        "id": 4804,
        "name": "Normandy",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "NOR"
      },
      {
        "id": 4795,
        "name": "Nouvelle-Aquitaine",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "NAQ"
      },
      {
        "id": 4799,
        "name": "Occitania",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "OCC"
      },
      {
        "id": 4816,
        "name": "Paris",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "75"
      },
      {
        "id": 4802,
        "name": "Pays de la Loire",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "PDL"
      },
      {
        "id": 4790,
        "name": "Picardy",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "S"
      },
      {
        "id": 4815,
        "name": "Poitou-Charentes",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "T"
      },
      {
        "id": 4812,
        "name": "Provence-Alpes-Côte d'Azur",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "PAC"
      },
      {
        "id": 4823,
        "name": "Réunion",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "RE"
      },
      {
        "id": 4813,
        "name": "Rhône-Alpes",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "V"
      },
      {
        "id": 4794,
        "name": "Saint Barthélemy",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "BL"
      },
      {
        "id": 4809,
        "name": "Saint Martin",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "MF"
      },
      {
        "id": 4821,
        "name": "Saint Pierre and Miquelon",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "PM"
      },
      {
        "id": 4819,
        "name": "Sigave",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "WF-SG"
      },
      {
        "id": 4826,
        "name": "Upper Normandy",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "Q"
      },
      {
        "id": 4817,
        "name": "Uvea",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "WF-UV"
      },
      {
        "id": 4810,
        "name": "Wallis and Futuna",
        "country_id": 75,
        "country_code": "FR",
        "state_code": "WF"
      },
      {
        "id": 2727,
        "name": "Estuaire Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "1"
      },
      {
        "id": 2726,
        "name": "Haut-Ogooué Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "2"
      },
      {
        "id": 2730,
        "name": "Moyen-Ogooué Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "3"
      },
      {
        "id": 2731,
        "name": "Ngounié Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "4"
      },
      {
        "id": 2725,
        "name": "Nyanga Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "5"
      },
      {
        "id": 2724,
        "name": "Ogooué-Ivindo Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "6"
      },
      {
        "id": 2729,
        "name": "Ogooué-Lolo Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "7"
      },
      {
        "id": 2728,
        "name": "Ogooué-Maritime Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "8"
      },
      {
        "id": 2723,
        "name": "Woleu-Ntem Province",
        "country_id": 79,
        "country_code": "GA",
        "state_code": "9"
      },
      {
        "id": 2666,
        "name": "Banjul",
        "country_id": 80,
        "country_code": "GM",
        "state_code": "B"
      },
      {
        "id": 2669,
        "name": "Central River Division",
        "country_id": 80,
        "country_code": "GM",
        "state_code": "M"
      },
      {
        "id": 2670,
        "name": "Lower River Division",
        "country_id": 80,
        "country_code": "GM",
        "state_code": "L"
      },
      {
        "id": 2671,
        "name": "North Bank Division",
        "country_id": 80,
        "country_code": "GM",
        "state_code": "N"
      },
      {
        "id": 2668,
        "name": "Upper River Division",
        "country_id": 80,
        "country_code": "GM",
        "state_code": "U"
      },
      {
        "id": 2667,
        "name": "West Coast Division",
        "country_id": 80,
        "country_code": "GM",
        "state_code": "W"
      },
      {
        "id": 900,
        "name": "Adjara",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "AJ"
      },
      {
        "id": 901,
        "name": "Autonomous Republic of Abkhazia",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "AB"
      },
      {
        "id": 907,
        "name": "Guria",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "GU"
      },
      {
        "id": 905,
        "name": "Imereti",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "IM"
      },
      {
        "id": 910,
        "name": "Kakheti",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "KA"
      },
      {
        "id": 897,
        "name": "Khelvachauri Municipality",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "29"
      },
      {
        "id": 904,
        "name": "Kvemo Kartli",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "KK"
      },
      {
        "id": 902,
        "name": "Mtskheta-Mtianeti",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "MM"
      },
      {
        "id": 909,
        "name": "Racha-Lechkhumi and Kvemo Svaneti",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "RL"
      },
      {
        "id": 908,
        "name": "Samegrelo-Zemo Svaneti",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "SZ"
      },
      {
        "id": 906,
        "name": "Samtskhe-Javakheti",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "SJ"
      },
      {
        "id": 898,
        "name": "Senaki Municipality",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "50"
      },
      {
        "id": 903,
        "name": "Shida Kartli",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "SK"
      },
      {
        "id": 899,
        "name": "Tbilisi",
        "country_id": 81,
        "country_code": "GE",
        "state_code": "TB"
      },
      {
        "id": 3006,
        "name": "Baden-Württemberg",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "BW"
      },
      {
        "id": 3009,
        "name": "Bavaria",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "BY"
      },
      {
        "id": 3010,
        "name": "Berlin",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "BE"
      },
      {
        "id": 3013,
        "name": "Brandenburg",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "BB"
      },
      {
        "id": 3014,
        "name": "Bremen",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "HB"
      },
      {
        "id": 3016,
        "name": "Hamburg",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "HH"
      },
      {
        "id": 3018,
        "name": "Hesse",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "HE"
      },
      {
        "id": 3008,
        "name": "Lower Saxony",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "NI"
      },
      {
        "id": 3007,
        "name": "Mecklenburg-Vorpommern",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "MV"
      },
      {
        "id": 3012,
        "name": "Neufahrn in Niederbayern",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "LA"
      },
      {
        "id": 3017,
        "name": "North Rhine-Westphalia",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "NW"
      },
      {
        "id": 3019,
        "name": "Rhineland-Palatinate",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "RP"
      },
      {
        "id": 3020,
        "name": "Saarland",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "SL"
      },
      {
        "id": 3021,
        "name": "Saxony",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "SN"
      },
      {
        "id": 3011,
        "name": "Saxony-Anhalt",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "ST"
      },
      {
        "id": 3005,
        "name": "Schleswig-Holstein",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "SH"
      },
      {
        "id": 3015,
        "name": "Thuringia",
        "country_id": 82,
        "country_code": "DE",
        "state_code": "TH"
      },
      {
        "id": 48,
        "name": "Ashanti Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "AH"
      },
      {
        "id": 53,
        "name": "Brong-Ahafo Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "BA"
      },
      {
        "id": 52,
        "name": "Central Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "CP"
      },
      {
        "id": 50,
        "name": "Eastern Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "EP"
      },
      {
        "id": 54,
        "name": "Greater Accra Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "AA"
      },
      {
        "id": 51,
        "name": "Northern Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "NP"
      },
      {
        "id": 55,
        "name": "Upper East Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "UE"
      },
      {
        "id": 57,
        "name": "Upper West Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "UW"
      },
      {
        "id": 56,
        "name": "Volta Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "TV"
      },
      {
        "id": 49,
        "name": "Western Region",
        "country_id": 83,
        "country_code": "GH",
        "state_code": "WP"
      },
      {
        "id": 2116,
        "name": "Achaea Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "13"
      },
      {
        "id": 2123,
        "name": "Aetolia-Acarnania Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "01"
      },
      {
        "id": 2098,
        "name": "Arcadia Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "12"
      },
      {
        "id": 2105,
        "name": "Argolis Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "11"
      },
      {
        "id": 2122,
        "name": "Attica Region",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "I"
      },
      {
        "id": 2126,
        "name": "Boeotia Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "03"
      },
      {
        "id": 2128,
        "name": "Central Greece Region",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "H"
      },
      {
        "id": 2125,
        "name": "Central Macedonia",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "B"
      },
      {
        "id": 2115,
        "name": "Chania Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "94"
      },
      {
        "id": 2124,
        "name": "Corfu Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "22"
      },
      {
        "id": 2129,
        "name": "Corinthia Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "15"
      },
      {
        "id": 2109,
        "name": "Crete Region",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "M"
      },
      {
        "id": 2130,
        "name": "Drama Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "52"
      },
      {
        "id": 2120,
        "name": "East Attica Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "A2"
      },
      {
        "id": 2117,
        "name": "East Macedonia and Thrace",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "A"
      },
      {
        "id": 2110,
        "name": "Epirus Region",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "D"
      },
      {
        "id": 2101,
        "name": "Euboea",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "04"
      },
      {
        "id": 2102,
        "name": "Grevena Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "51"
      },
      {
        "id": 2099,
        "name": "Imathia Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "53"
      },
      {
        "id": 2113,
        "name": "Ioannina Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "33"
      },
      {
        "id": 2131,
        "name": "Ionian Islands Region",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "F"
      },
      {
        "id": 2095,
        "name": "Karditsa Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "41"
      },
      {
        "id": 2100,
        "name": "Kastoria Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "56"
      },
      {
        "id": 2127,
        "name": "Kefalonia Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "23"
      },
      {
        "id": 2111,
        "name": "Kilkis Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "57"
      },
      {
        "id": 2112,
        "name": "Kozani Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "58"
      },
      {
        "id": 2106,
        "name": "Laconia",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "16"
      },
      {
        "id": 2132,
        "name": "Larissa Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "42"
      },
      {
        "id": 2104,
        "name": "Lefkada Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "24"
      },
      {
        "id": 2107,
        "name": "Pella Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "59"
      },
      {
        "id": 2119,
        "name": "Peloponnese Region",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "J"
      },
      {
        "id": 2114,
        "name": "Phthiotis Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "06"
      },
      {
        "id": 2103,
        "name": "Preveza Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "34"
      },
      {
        "id": 2121,
        "name": "Serres Prefecture",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "62"
      },
      {
        "id": 2118,
        "name": "South Aegean",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "L"
      },
      {
        "id": 2097,
        "name": "Thessaloniki Regional Unit",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "54"
      },
      {
        "id": 2096,
        "name": "West Greece Region",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "G"
      },
      {
        "id": 2108,
        "name": "West Macedonia Region",
        "country_id": 85,
        "country_code": "GR",
        "state_code": "C"
      },
      {
        "id": 3867,
        "name": "Carriacou and Petite Martinique",
        "country_id": 87,
        "country_code": "GD",
        "state_code": "10"
      },
      {
        "id": 3865,
        "name": "Saint Andrew Parish",
        "country_id": 87,
        "country_code": "GD",
        "state_code": "01"
      },
      {
        "id": 3869,
        "name": "Saint David Parish",
        "country_id": 87,
        "country_code": "GD",
        "state_code": "02"
      },
      {
        "id": 3864,
        "name": "Saint George Parish",
        "country_id": 87,
        "country_code": "GD",
        "state_code": "03"
      },
      {
        "id": 3868,
        "name": "Saint John Parish",
        "country_id": 87,
        "country_code": "GD",
        "state_code": "04"
      },
      {
        "id": 3866,
        "name": "Saint Mark Parish",
        "country_id": 87,
        "country_code": "GD",
        "state_code": "05"
      },
      {
        "id": 3863,
        "name": "Saint Patrick Parish",
        "country_id": 87,
        "country_code": "GD",
        "state_code": "06"
      },
      {
        "id": 3671,
        "name": "Alta Verapaz Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "AV"
      },
      {
        "id": 3674,
        "name": "Baja Verapaz Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "BV"
      },
      {
        "id": 3675,
        "name": "Chimaltenango Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "CM"
      },
      {
        "id": 3666,
        "name": "Chiquimula Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "CQ"
      },
      {
        "id": 3662,
        "name": "El Progreso Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "PR"
      },
      {
        "id": 3677,
        "name": "Escuintla Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "ES"
      },
      {
        "id": 3672,
        "name": "Guatemala Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "GU"
      },
      {
        "id": 3670,
        "name": "Huehuetenango Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "HU"
      },
      {
        "id": 3659,
        "name": "Izabal Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "IZ"
      },
      {
        "id": 3658,
        "name": "Jalapa Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "JA"
      },
      {
        "id": 3673,
        "name": "Jutiapa Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "JU"
      },
      {
        "id": 3669,
        "name": "Petén Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "PE"
      },
      {
        "id": 3668,
        "name": "Quetzaltenango Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "QZ"
      },
      {
        "id": 3657,
        "name": "Quiché Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "QC"
      },
      {
        "id": 3664,
        "name": "Retalhuleu Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "RE"
      },
      {
        "id": 3676,
        "name": "Sacatepéquez Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "SA"
      },
      {
        "id": 3667,
        "name": "San Marcos Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "SM"
      },
      {
        "id": 3665,
        "name": "Santa Rosa Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "SR"
      },
      {
        "id": 3661,
        "name": "Sololá Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "SO"
      },
      {
        "id": 3660,
        "name": "Suchitepéquez Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "SU"
      },
      {
        "id": 3663,
        "name": "Totonicapán Department",
        "country_id": 90,
        "country_code": "GT",
        "state_code": "TO"
      },
      {
        "id": 2672,
        "name": "Beyla Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "BE"
      },
      {
        "id": 2699,
        "name": "Boffa Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "BF"
      },
      {
        "id": 2709,
        "name": "Boké Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "BK"
      },
      {
        "id": 2676,
        "name": "Boké Region",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "B"
      },
      {
        "id": 2686,
        "name": "Conakry",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "C"
      },
      {
        "id": 2705,
        "name": "Coyah Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "CO"
      },
      {
        "id": 2679,
        "name": "Dabola Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "DB"
      },
      {
        "id": 2706,
        "name": "Dalaba Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "DL"
      },
      {
        "id": 2688,
        "name": "Dinguiraye Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "DI"
      },
      {
        "id": 2681,
        "name": "Dubréka Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "DU"
      },
      {
        "id": 2682,
        "name": "Faranah Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "FA"
      },
      {
        "id": 2683,
        "name": "Forécariah Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "FO"
      },
      {
        "id": 2675,
        "name": "Fria Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "FR"
      },
      {
        "id": 2685,
        "name": "Gaoual Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "GA"
      },
      {
        "id": 2711,
        "name": "Guéckédou Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "GU"
      },
      {
        "id": 2704,
        "name": "Kankan Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "KA"
      },
      {
        "id": 2697,
        "name": "Kankan Region",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "K"
      },
      {
        "id": 2710,
        "name": "Kérouané Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "KE"
      },
      {
        "id": 2693,
        "name": "Kindia Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "KD"
      },
      {
        "id": 2701,
        "name": "Kindia Region",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "D"
      },
      {
        "id": 2691,
        "name": "Kissidougou Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "KS"
      },
      {
        "id": 2692,
        "name": "Koubia Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "KB"
      },
      {
        "id": 2703,
        "name": "Koundara Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "KN"
      },
      {
        "id": 2695,
        "name": "Kouroussa Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "KO"
      },
      {
        "id": 2680,
        "name": "Labé Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "LA"
      },
      {
        "id": 2677,
        "name": "Labé Region",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "L"
      },
      {
        "id": 2690,
        "name": "Lélouma Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "LE"
      },
      {
        "id": 2708,
        "name": "Lola Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "LO"
      },
      {
        "id": 2702,
        "name": "Macenta Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "MC"
      },
      {
        "id": 2700,
        "name": "Mali Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "ML"
      },
      {
        "id": 2689,
        "name": "Mamou Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "MM"
      },
      {
        "id": 2698,
        "name": "Mamou Region",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "M"
      },
      {
        "id": 2673,
        "name": "Mandiana Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "MD"
      },
      {
        "id": 2678,
        "name": "Nzérékoré Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "NZ"
      },
      {
        "id": 2684,
        "name": "Nzérékoré Region",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "N"
      },
      {
        "id": 2694,
        "name": "Pita Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "PI"
      },
      {
        "id": 2707,
        "name": "Siguiri Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "SI"
      },
      {
        "id": 2687,
        "name": "Télimélé Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "TE"
      },
      {
        "id": 2696,
        "name": "Tougué Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "TO"
      },
      {
        "id": 2674,
        "name": "Yomou Prefecture",
        "country_id": 92,
        "country_code": "GN",
        "state_code": "YO"
      },
      {
        "id": 2720,
        "name": "Bafatá",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "BA"
      },
      {
        "id": 2714,
        "name": "Biombo Region",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "BM"
      },
      {
        "id": 2722,
        "name": "Bolama Region",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "BL"
      },
      {
        "id": 2713,
        "name": "Cacheu Region",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "CA"
      },
      {
        "id": 2719,
        "name": "Gabú Region",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "GA"
      },
      {
        "id": 2721,
        "name": "Leste Province",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "L"
      },
      {
        "id": 2717,
        "name": "Norte Province",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "N"
      },
      {
        "id": 2718,
        "name": "Oio Region",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "OI"
      },
      {
        "id": 2715,
        "name": "Quinara Region",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "QU"
      },
      {
        "id": 2716,
        "name": "Sul Province",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "S"
      },
      {
        "id": 2712,
        "name": "Tombali Region",
        "country_id": 93,
        "country_code": "GW",
        "state_code": "TO"
      },
      {
        "id": 2764,
        "name": "Barima-Waini",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "BA"
      },
      {
        "id": 2760,
        "name": "Cuyuni-Mazaruni",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "CU"
      },
      {
        "id": 2767,
        "name": "Demerara-Mahaica",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "DE"
      },
      {
        "id": 2766,
        "name": "East Berbice-Corentyne",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "EB"
      },
      {
        "id": 2768,
        "name": "Essequibo Islands-West Demerara",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "ES"
      },
      {
        "id": 2762,
        "name": "Mahaica-Berbice",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "MA"
      },
      {
        "id": 2765,
        "name": "Pomeroon-Supenaam",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "PM"
      },
      {
        "id": 2761,
        "name": "Potaro-Siparuni",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "PT"
      },
      {
        "id": 2763,
        "name": "Upper Demerara-Berbice",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "UD"
      },
      {
        "id": 2769,
        "name": "Upper Takutu-Upper Essequibo",
        "country_id": 94,
        "country_code": "GY",
        "state_code": "UT"
      },
      {
        "id": 4123,
        "name": "Artibonite",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "AR"
      },
      {
        "id": 4125,
        "name": "Centre",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "CE"
      },
      {
        "id": 4119,
        "name": "Grand'Anse",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "GA"
      },
      {
        "id": 4118,
        "name": "Nippes",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "NI"
      },
      {
        "id": 4117,
        "name": "Nord",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "ND"
      },
      {
        "id": 4121,
        "name": "Nord-Est",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "NE"
      },
      {
        "id": 4126,
        "name": "Nord-Ouest",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "NO"
      },
      {
        "id": 4120,
        "name": "Ouest",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "OU"
      },
      {
        "id": 4122,
        "name": "Sud",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "SD"
      },
      {
        "id": 4124,
        "name": "Sud-Est",
        "country_id": 95,
        "country_code": "HT",
        "state_code": "SE"
      },
      {
        "id": 4047,
        "name": "Atlántida Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "AT"
      },
      {
        "id": 4045,
        "name": "Bay Islands Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "IB"
      },
      {
        "id": 4041,
        "name": "Choluteca Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "CH"
      },
      {
        "id": 4051,
        "name": "Colón Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "CL"
      },
      {
        "id": 4042,
        "name": "Comayagua Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "CM"
      },
      {
        "id": 4049,
        "name": "Copán Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "CP"
      },
      {
        "id": 4046,
        "name": "Cortés Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "CR"
      },
      {
        "id": 4043,
        "name": "El Paraíso Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "EP"
      },
      {
        "id": 4052,
        "name": "Francisco Morazán Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "FM"
      },
      {
        "id": 4048,
        "name": "Gracias a Dios Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "GD"
      },
      {
        "id": 4044,
        "name": "Intibucá Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "IN"
      },
      {
        "id": 4058,
        "name": "La Paz Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "LP"
      },
      {
        "id": 4054,
        "name": "Lempira Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "LE"
      },
      {
        "id": 4056,
        "name": "Ocotepeque Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "OC"
      },
      {
        "id": 4050,
        "name": "Olancho Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "OL"
      },
      {
        "id": 4053,
        "name": "Santa Bárbara Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "SB"
      },
      {
        "id": 4055,
        "name": "Valle Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "VA"
      },
      {
        "id": 4057,
        "name": "Yoro Department",
        "country_id": 97,
        "country_code": "HN",
        "state_code": "YO"
      },
      {
        "id": 1048,
        "name": "Bács-Kiskun County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "BK"
      },
      {
        "id": 1055,
        "name": "Baranya County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "BA"
      },
      {
        "id": 1060,
        "name": "Békés County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "BE"
      },
      {
        "id": 1036,
        "name": "Békéscsaba",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "BC"
      },
      {
        "id": 1058,
        "name": "Borsod-Abaúj-Zemplén County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "BZ"
      },
      {
        "id": 1064,
        "name": "Budapest",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "BU"
      },
      {
        "id": 1031,
        "name": "Csongrád County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "CS"
      },
      {
        "id": 1032,
        "name": "Debrecen",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "DE"
      },
      {
        "id": 1049,
        "name": "Dunaújváros",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "DU"
      },
      {
        "id": 1037,
        "name": "Eger",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "EG"
      },
      {
        "id": 1028,
        "name": "Érd",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "ER"
      },
      {
        "id": 1044,
        "name": "Fejér County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "FE"
      },
      {
        "id": 1041,
        "name": "Győr",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "GY"
      },
      {
        "id": 1042,
        "name": "Győr-Moson-Sopron County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "GS"
      },
      {
        "id": 1063,
        "name": "Hajdú-Bihar County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "HB"
      },
      {
        "id": 1040,
        "name": "Heves County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "HE"
      },
      {
        "id": 1027,
        "name": "Hódmezővásárhely",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "HV"
      },
      {
        "id": 1043,
        "name": "Jász-Nagykun-Szolnok County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "JN"
      },
      {
        "id": 1067,
        "name": "Kaposvár",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "KV"
      },
      {
        "id": 1056,
        "name": "Kecskemét",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "KM"
      },
      {
        "id": 1065,
        "name": "Miskolc",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "MI"
      },
      {
        "id": 1030,
        "name": "Nagykanizsa",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "NK"
      },
      {
        "id": 1051,
        "name": "Nógrád County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "NO"
      },
      {
        "id": 1034,
        "name": "Nyíregyháza",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "NY"
      },
      {
        "id": 1053,
        "name": "Pécs",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "PS"
      },
      {
        "id": 1059,
        "name": "Pest County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "PE"
      },
      {
        "id": 1068,
        "name": "Salgótarján",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "ST"
      },
      {
        "id": 1035,
        "name": "Somogy County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "SO"
      },
      {
        "id": 1057,
        "name": "Sopron",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "SN"
      },
      {
        "id": 1045,
        "name": "Szabolcs-Szatmár-Bereg County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "SZ"
      },
      {
        "id": 1029,
        "name": "Szeged",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "SD"
      },
      {
        "id": 1033,
        "name": "Székesfehérvár",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "SF"
      },
      {
        "id": 1061,
        "name": "Szekszárd",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "SS"
      },
      {
        "id": 1047,
        "name": "Szolnok",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "SK"
      },
      {
        "id": 1052,
        "name": "Szombathely",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "SH"
      },
      {
        "id": 1066,
        "name": "Tatabánya",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "TB"
      },
      {
        "id": 1038,
        "name": "Tolna County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "TO"
      },
      {
        "id": 1039,
        "name": "Vas County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "VA"
      },
      {
        "id": 1062,
        "name": "Veszprém",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "VM"
      },
      {
        "id": 1054,
        "name": "Veszprém County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "VE"
      },
      {
        "id": 1046,
        "name": "Zala County",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "ZA"
      },
      {
        "id": 1050,
        "name": "Zalaegerszeg",
        "country_id": 99,
        "country_code": "HU",
        "state_code": "ZE"
      },
      {
        "id": 3431,
        "name": "Capital Region",
        "country_id": 100,
        "country_code": "IS",
        "state_code": "1"
      },
      {
        "id": 3433,
        "name": "Eastern Region",
        "country_id": 100,
        "country_code": "IS",
        "state_code": "7"
      },
      {
        "id": 3437,
        "name": "Northeastern Region",
        "country_id": 100,
        "country_code": "IS",
        "state_code": "6"
      },
      {
        "id": 3435,
        "name": "Northwestern Region",
        "country_id": 100,
        "country_code": "IS",
        "state_code": "5"
      },
      {
        "id": 3430,
        "name": "Southern Peninsula Region",
        "country_id": 100,
        "country_code": "IS",
        "state_code": "2"
      },
      {
        "id": 3434,
        "name": "Southern Region",
        "country_id": 100,
        "country_code": "IS",
        "state_code": "8"
      },
      {
        "id": 3436,
        "name": "Western Region",
        "country_id": 100,
        "country_code": "IS",
        "state_code": "3"
      },
      {
        "id": 3432,
        "name": "Westfjords",
        "country_id": 100,
        "country_code": "IS",
        "state_code": "4"
      },
      {
        "id": 4023,
        "name": "Andaman and Nicobar Islands",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "AN"
      },
      {
        "id": 4017,
        "name": "Andhra Pradesh",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "AP"
      },
      {
        "id": 4024,
        "name": "Arunachal Pradesh",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "AR"
      },
      {
        "id": 4027,
        "name": "Assam",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "AS"
      },
      {
        "id": 4037,
        "name": "Bihar",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "BR"
      },
      {
        "id": 4031,
        "name": "Chandigarh",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "CH"
      },
      {
        "id": 4040,
        "name": "Chhattisgarh",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "CT"
      },
      {
        "id": 4032,
        "name": "Dadra and Nagar Haveli",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "DN"
      },
      {
        "id": 4033,
        "name": "Daman and Diu",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "DD"
      },
      {
        "id": 4021,
        "name": "Delhi",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "DL"
      },
      {
        "id": 4009,
        "name": "Goa",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "GA"
      },
      {
        "id": 4030,
        "name": "Gujarat",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "GJ"
      },
      {
        "id": 4007,
        "name": "Haryana",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "HR"
      },
      {
        "id": 4020,
        "name": "Himachal Pradesh",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "HP"
      },
      {
        "id": 4029,
        "name": "Jammu and Kashmir",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "JK"
      },
      {
        "id": 4025,
        "name": "Jharkhand",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "JH"
      },
      {
        "id": 4026,
        "name": "Karnataka",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "KA"
      },
      {
        "id": 4028,
        "name": "Kerala",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "KL"
      },
      {
        "id": 4852,
        "name": "Ladakh",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "LA"
      },
      {
        "id": 4019,
        "name": "Lakshadweep",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "LD"
      },
      {
        "id": 4039,
        "name": "Madhya Pradesh",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "MP"
      },
      {
        "id": 4008,
        "name": "Maharashtra",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "MH"
      },
      {
        "id": 4010,
        "name": "Manipur",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "MN"
      },
      {
        "id": 4006,
        "name": "Meghalaya",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "ML"
      },
      {
        "id": 4036,
        "name": "Mizoram",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "MZ"
      },
      {
        "id": 4018,
        "name": "Nagaland",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "NL"
      },
      {
        "id": 4013,
        "name": "Odisha",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "OR"
      },
      {
        "id": 4011,
        "name": "Puducherry",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "PY"
      },
      {
        "id": 4015,
        "name": "Punjab",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "PB"
      },
      {
        "id": 4014,
        "name": "Rajasthan",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "RJ"
      },
      {
        "id": 4034,
        "name": "Sikkim",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "SK"
      },
      {
        "id": 4035,
        "name": "Tamil Nadu",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "TN"
      },
      {
        "id": 4012,
        "name": "Telangana",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "TG"
      },
      {
        "id": 4038,
        "name": "Tripura",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "TR"
      },
      {
        "id": 4022,
        "name": "Uttar Pradesh",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "UP"
      },
      {
        "id": 4016,
        "name": "Uttarakhand",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "UT"
      },
      {
        "id": 4853,
        "name": "West Bengal",
        "country_id": 101,
        "country_code": "IN",
        "state_code": "WB"
      },
      {
        "id": 1822,
        "name": "Aceh",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "AC"
      },
      {
        "id": 1826,
        "name": "Bali",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "BA"
      },
      {
        "id": 1820,
        "name": "Bangka Belitung Islands",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "BB"
      },
      {
        "id": 1810,
        "name": "Banten",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "BT"
      },
      {
        "id": 1793,
        "name": "Bengkulu",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "BE"
      },
      {
        "id": 1802,
        "name": "Central Java",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "JT"
      },
      {
        "id": 1794,
        "name": "Central Kalimantan",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "KT"
      },
      {
        "id": 1813,
        "name": "Central Sulawesi",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "ST"
      },
      {
        "id": 1827,
        "name": "East Java",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "JI"
      },
      {
        "id": 1804,
        "name": "East Kalimantan",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "KI"
      },
      {
        "id": 1818,
        "name": "East Nusa Tenggara",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "NT"
      },
      {
        "id": 1812,
        "name": "Gorontalo",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "GO"
      },
      {
        "id": 1805,
        "name": "Jakarta",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "JK"
      },
      {
        "id": 1815,
        "name": "Jambi",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "JA"
      },
      {
        "id": 1806,
        "name": "Kalimantan",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "KA"
      },
      {
        "id": 1811,
        "name": "Lampung",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "LA"
      },
      {
        "id": 1821,
        "name": "Lesser Sunda Islands",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "NU"
      },
      {
        "id": 1800,
        "name": "Maluku",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "MA"
      },
      {
        "id": 1823,
        "name": "Maluku Islands",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "ML"
      },
      {
        "id": 1824,
        "name": "North Kalimantan",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "KU"
      },
      {
        "id": 1801,
        "name": "North Maluku",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "MU"
      },
      {
        "id": 1808,
        "name": "North Sulawesi",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SA"
      },
      {
        "id": 1792,
        "name": "North Sumatra",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SU"
      },
      {
        "id": 1798,
        "name": "Papua",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "PA"
      },
      {
        "id": 1809,
        "name": "Riau",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "RI"
      },
      {
        "id": 1807,
        "name": "Riau Islands",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "KR"
      },
      {
        "id": 1819,
        "name": "South Kalimantan",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "KS"
      },
      {
        "id": 1795,
        "name": "South Sulawesi",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SN"
      },
      {
        "id": 1816,
        "name": "South Sumatra",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SS"
      },
      {
        "id": 1796,
        "name": "Southeast Sulawesi",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SG"
      },
      {
        "id": 1829,
        "name": "Special Region of Yogyakarta",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "YO"
      },
      {
        "id": 1803,
        "name": "Sulawesi",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SL"
      },
      {
        "id": 1797,
        "name": "Sumatra",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SM"
      },
      {
        "id": 1825,
        "name": "West Java",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "JB"
      },
      {
        "id": 1814,
        "name": "West Nusa Tenggara",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "NB"
      },
      {
        "id": 1799,
        "name": "West Papua",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "PB"
      },
      {
        "id": 1817,
        "name": "West Sulawesi",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SR"
      },
      {
        "id": 1828,
        "name": "West Sumatra",
        "country_id": 102,
        "country_code": "ID",
        "state_code": "SB"
      },
      {
        "id": 3929,
        "name": "Alborz Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "32"
      },
      {
        "id": 3934,
        "name": "Ardabil Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "03"
      },
      {
        "id": 3932,
        "name": "Bushehr Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "06"
      },
      {
        "id": 3921,
        "name": "Chaharmahal and Bakhtiari Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "08"
      },
      {
        "id": 3944,
        "name": "East Azerbaijan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "01"
      },
      {
        "id": 3939,
        "name": "Fars Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "14"
      },
      {
        "id": 3920,
        "name": "Gilan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "19"
      },
      {
        "id": 3933,
        "name": "Golestan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "27"
      },
      {
        "id": 3937,
        "name": "Hormozgan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "23"
      },
      {
        "id": 3918,
        "name": "Ilam Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "05"
      },
      {
        "id": 3923,
        "name": "Isfahan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "04"
      },
      {
        "id": 3943,
        "name": "Kerman Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "15"
      },
      {
        "id": 3919,
        "name": "Kermanshah Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "17"
      },
      {
        "id": 3917,
        "name": "Khuzestan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "10"
      },
      {
        "id": 3926,
        "name": "Kohgiluyeh and Boyer-Ahmad Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "18"
      },
      {
        "id": 3935,
        "name": "Kurdistan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "16"
      },
      {
        "id": 3928,
        "name": "Lorestan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "20"
      },
      {
        "id": 3916,
        "name": "Markazi Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "22"
      },
      {
        "id": 3938,
        "name": "Mazandaran Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "21"
      },
      {
        "id": 3942,
        "name": "North Khorasan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "31"
      },
      {
        "id": 3941,
        "name": "Qazvin Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "28"
      },
      {
        "id": 3922,
        "name": "Qom Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "26"
      },
      {
        "id": 3927,
        "name": "Razavi Khorasan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "30"
      },
      {
        "id": 3940,
        "name": "Semnan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "12"
      },
      {
        "id": 3931,
        "name": "Sistan and Baluchestan",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "13"
      },
      {
        "id": 3930,
        "name": "South Khorasan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "29"
      },
      {
        "id": 3945,
        "name": "Tehran Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "07"
      },
      {
        "id": 3924,
        "name": "West Azarbaijan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "02"
      },
      {
        "id": 3936,
        "name": "Yazd Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "25"
      },
      {
        "id": 3925,
        "name": "Zanjan Province",
        "country_id": 103,
        "country_code": "IR",
        "state_code": "11"
      },
      {
        "id": 3964,
        "name": "Al Anbar Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "AN"
      },
      {
        "id": 3958,
        "name": "Al Muthanna Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "MU"
      },
      {
        "id": 3956,
        "name": "Al-Qādisiyyah Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "QA"
      },
      {
        "id": 3955,
        "name": "Babylon Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "BB"
      },
      {
        "id": 3959,
        "name": "Baghdad Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "BG"
      },
      {
        "id": 3960,
        "name": "Basra Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "BA"
      },
      {
        "id": 3954,
        "name": "Dhi Qar Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "DQ"
      },
      {
        "id": 3965,
        "name": "Diyala Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "DI"
      },
      {
        "id": 3967,
        "name": "Dohuk Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "DA"
      },
      {
        "id": 3968,
        "name": "Erbil Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "AR"
      },
      {
        "id": 3957,
        "name": "Karbala Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "KA"
      },
      {
        "id": 3971,
        "name": "Kirkuk Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "KI"
      },
      {
        "id": 3966,
        "name": "Maysan Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "MA"
      },
      {
        "id": 3962,
        "name": "Najaf Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "NA"
      },
      {
        "id": 3963,
        "name": "Nineveh Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "NI"
      },
      {
        "id": 3961,
        "name": "Saladin Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "SD"
      },
      {
        "id": 3969,
        "name": "Sulaymaniyah Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "SU"
      },
      {
        "id": 3970,
        "name": "Wasit Governorate",
        "country_id": 104,
        "country_code": "IQ",
        "state_code": "WA"
      },
      {
        "id": 1087,
        "name": "Connacht",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "C"
      },
      {
        "id": 1095,
        "name": "County Carlow",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "CW"
      },
      {
        "id": 1088,
        "name": "County Cavan",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "CN"
      },
      {
        "id": 1091,
        "name": "County Clare",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "CE"
      },
      {
        "id": 1074,
        "name": "County Cork",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "CO"
      },
      {
        "id": 1071,
        "name": "County Donegal",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "DL"
      },
      {
        "id": 1072,
        "name": "County Dublin",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "D"
      },
      {
        "id": 1079,
        "name": "County Galway",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "G"
      },
      {
        "id": 1077,
        "name": "County Kerry",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "KY"
      },
      {
        "id": 1082,
        "name": "County Kildare",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "KE"
      },
      {
        "id": 1090,
        "name": "County Kilkenny",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "KK"
      },
      {
        "id": 1096,
        "name": "County Laois",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "LS"
      },
      {
        "id": 1094,
        "name": "County Limerick",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "LK"
      },
      {
        "id": 1076,
        "name": "County Longford",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "LD"
      },
      {
        "id": 1083,
        "name": "County Louth",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "LH"
      },
      {
        "id": 1084,
        "name": "County Mayo",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "MO"
      },
      {
        "id": 1092,
        "name": "County Meath",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "MH"
      },
      {
        "id": 1075,
        "name": "County Monaghan",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "MN"
      },
      {
        "id": 1078,
        "name": "County Offaly",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "OY"
      },
      {
        "id": 1081,
        "name": "County Roscommon",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "RN"
      },
      {
        "id": 1070,
        "name": "County Sligo",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "SO"
      },
      {
        "id": 1069,
        "name": "County Tipperary",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "TA"
      },
      {
        "id": 1089,
        "name": "County Waterford",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "WD"
      },
      {
        "id": 1097,
        "name": "County Westmeath",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "WH"
      },
      {
        "id": 1093,
        "name": "County Wexford",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "WX"
      },
      {
        "id": 1085,
        "name": "County Wicklow",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "WW"
      },
      {
        "id": 1073,
        "name": "Leinster",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "L"
      },
      {
        "id": 1080,
        "name": "Munster",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "M"
      },
      {
        "id": 1086,
        "name": "Ulster",
        "country_id": 105,
        "country_code": "IE",
        "state_code": "U"
      },
      {
        "id": 1367,
        "name": "Central District",
        "country_id": 106,
        "country_code": "IL",
        "state_code": "M"
      },
      {
        "id": 1369,
        "name": "Haifa District",
        "country_id": 106,
        "country_code": "IL",
        "state_code": "HA"
      },
      {
        "id": 1370,
        "name": "Jerusalem District",
        "country_id": 106,
        "country_code": "IL",
        "state_code": "JM"
      },
      {
        "id": 1366,
        "name": "Northern District",
        "country_id": 106,
        "country_code": "IL",
        "state_code": "Z"
      },
      {
        "id": 1368,
        "name": "Southern District",
        "country_id": 106,
        "country_code": "IL",
        "state_code": "D"
      },
      {
        "id": 1371,
        "name": "Tel Aviv District",
        "country_id": 106,
        "country_code": "IL",
        "state_code": "TA"
      },
      {
        "id": 1679,
        "name": "Abruzzo",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "65"
      },
      {
        "id": 1716,
        "name": "Aosta Valley",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "23"
      },
      {
        "id": 1688,
        "name": "Apulia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "75"
      },
      {
        "id": 1706,
        "name": "Basilicata",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "77"
      },
      {
        "id": 1701,
        "name": "Benevento Province",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BN"
      },
      {
        "id": 1703,
        "name": "Calabria",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "78"
      },
      {
        "id": 1669,
        "name": "Campania",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "72"
      },
      {
        "id": 1773,
        "name": "Emilia-Romagna",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "45"
      },
      {
        "id": 1756,
        "name": "Friuli–Venezia Giulia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "36"
      },
      {
        "id": 1678,
        "name": "Lazio",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "62"
      },
      {
        "id": 1727,
        "name": "Libero consorzio comunale di Agrigento",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "AG"
      },
      {
        "id": 1718,
        "name": "Libero consorzio comunale di Caltanissetta",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CL"
      },
      {
        "id": 1723,
        "name": "Libero consorzio comunale di Enna",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "EN"
      },
      {
        "id": 1729,
        "name": "Libero consorzio comunale di Ragusa",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "RG"
      },
      {
        "id": 1667,
        "name": "Libero consorzio comunale di Siracusa",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "SR"
      },
      {
        "id": 1733,
        "name": "Libero consorzio comunale di Trapani",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "TP"
      },
      {
        "id": 1768,
        "name": "Liguria",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "42"
      },
      {
        "id": 1705,
        "name": "Lombardy",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "25"
      },
      {
        "id": 1670,
        "name": "Marche",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "57"
      },
      {
        "id": 1772,
        "name": "Metropolitan City of Bari",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BA"
      },
      {
        "id": 1684,
        "name": "Metropolitan City of Bologna",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BO"
      },
      {
        "id": 1682,
        "name": "Metropolitan City of Cagliari",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CA"
      },
      {
        "id": 1766,
        "name": "Metropolitan City of Catania",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CT"
      },
      {
        "id": 1680,
        "name": "Metropolitan City of Florence",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "FI"
      },
      {
        "id": 1699,
        "name": "Metropolitan City of Genoa",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "GE"
      },
      {
        "id": 1770,
        "name": "Metropolitan City of Messina",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "ME"
      },
      {
        "id": 1698,
        "name": "Metropolitan City of Milan",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "MI"
      },
      {
        "id": 1724,
        "name": "Metropolitan City of Naples",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "NA"
      },
      {
        "id": 1668,
        "name": "Metropolitan City of Palermo",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PA"
      },
      {
        "id": 1671,
        "name": "Metropolitan City of Reggio Calabria",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "RC"
      },
      {
        "id": 1711,
        "name": "Metropolitan City of Rome",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "RM"
      },
      {
        "id": 1710,
        "name": "Metropolitan City of Turin",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "TO"
      },
      {
        "id": 1673,
        "name": "Metropolitan City of Venice",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VE"
      },
      {
        "id": 1695,
        "name": "Molise",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "67"
      },
      {
        "id": 1693,
        "name": "Pesaro and Urbino Province",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PU"
      },
      {
        "id": 1702,
        "name": "Piedmont",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "21"
      },
      {
        "id": 1783,
        "name": "Province of Alessandria",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "AL"
      },
      {
        "id": 1672,
        "name": "Province of Ancona",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "AN"
      },
      {
        "id": 1681,
        "name": "Province of Ascoli Piceno",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "AP"
      },
      {
        "id": 1780,
        "name": "Province of Asti",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "AT"
      },
      {
        "id": 1692,
        "name": "Province of Avellino",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "AV"
      },
      {
        "id": 1686,
        "name": "Province of Barletta-Andria-Trani",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BT"
      },
      {
        "id": 1689,
        "name": "Province of Belluno",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BL"
      },
      {
        "id": 1704,
        "name": "Province of Bergamo",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BG"
      },
      {
        "id": 1778,
        "name": "Province of Biella",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BI"
      },
      {
        "id": 1717,
        "name": "Province of Brescia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BS"
      },
      {
        "id": 1714,
        "name": "Province of Brindisi",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BR"
      },
      {
        "id": 1721,
        "name": "Province of Campobasso",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CB"
      },
      {
        "id": 1730,
        "name": "Province of Carbonia-Iglesias",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CI"
      },
      {
        "id": 1731,
        "name": "Province of Caserta",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CE"
      },
      {
        "id": 1728,
        "name": "Province of Catanzaro",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CZ"
      },
      {
        "id": 1739,
        "name": "Province of Chieti",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CH"
      },
      {
        "id": 1740,
        "name": "Province of Como",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CO"
      },
      {
        "id": 1742,
        "name": "Province of Cosenza",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CS"
      },
      {
        "id": 1751,
        "name": "Province of Cremona",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CR"
      },
      {
        "id": 1754,
        "name": "Province of Crotone",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "KR"
      },
      {
        "id": 1775,
        "name": "Province of Cuneo",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "CN"
      },
      {
        "id": 1744,
        "name": "Province of Fermo",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "FM"
      },
      {
        "id": 1746,
        "name": "Province of Ferrara",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "FE"
      },
      {
        "id": 1771,
        "name": "Province of Foggia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "FG"
      },
      {
        "id": 1779,
        "name": "Province of Forlì-Cesena",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "FC"
      },
      {
        "id": 1776,
        "name": "Province of Frosinone",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "FR"
      },
      {
        "id": 1777,
        "name": "Province of Gorizia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "GO"
      },
      {
        "id": 1787,
        "name": "Province of Grosseto",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "GR"
      },
      {
        "id": 1788,
        "name": "Province of Imperia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "IM"
      },
      {
        "id": 1789,
        "name": "Province of Isernia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "IS"
      },
      {
        "id": 1781,
        "name": "Province of L'Aquila",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "AQ"
      },
      {
        "id": 1791,
        "name": "Province of La Spezia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "SP"
      },
      {
        "id": 1674,
        "name": "Province of Latina",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "LT"
      },
      {
        "id": 1675,
        "name": "Province of Lecce",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "LE"
      },
      {
        "id": 1677,
        "name": "Province of Lecco",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "LC"
      },
      {
        "id": 1745,
        "name": "Province of Livorno",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "LI"
      },
      {
        "id": 1747,
        "name": "Province of Lodi",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "LO"
      },
      {
        "id": 1749,
        "name": "Province of Lucca",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "LU"
      },
      {
        "id": 1750,
        "name": "Province of Macerata",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "MC"
      },
      {
        "id": 1758,
        "name": "Province of Mantua",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "MN"
      },
      {
        "id": 1759,
        "name": "Province of Massa and Carrara",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "MS"
      },
      {
        "id": 1760,
        "name": "Province of Matera",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "MT"
      },
      {
        "id": 1761,
        "name": "Province of Medio Campidano",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VS"
      },
      {
        "id": 1757,
        "name": "Province of Modena",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "MO"
      },
      {
        "id": 1769,
        "name": "Province of Monza and Brianza",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "MB"
      },
      {
        "id": 1774,
        "name": "Province of Novara",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "NO"
      },
      {
        "id": 1790,
        "name": "Province of Nuoro",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "NU"
      },
      {
        "id": 1782,
        "name": "Province of Ogliastra",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "OG"
      },
      {
        "id": 1784,
        "name": "Province of Olbia-Tempio",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "OT"
      },
      {
        "id": 1786,
        "name": "Province of Oristano",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "OR"
      },
      {
        "id": 1665,
        "name": "Province of Padua",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PD"
      },
      {
        "id": 1666,
        "name": "Province of Parma",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PR"
      },
      {
        "id": 1676,
        "name": "Province of Pavia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PV"
      },
      {
        "id": 1691,
        "name": "Province of Perugia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PG"
      },
      {
        "id": 1694,
        "name": "Province of Pescara",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PE"
      },
      {
        "id": 1696,
        "name": "Province of Piacenza",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PC"
      },
      {
        "id": 1685,
        "name": "Province of Pisa",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PI"
      },
      {
        "id": 1687,
        "name": "Province of Pistoia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PT"
      },
      {
        "id": 1690,
        "name": "Province of Pordenone",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PN"
      },
      {
        "id": 1697,
        "name": "Province of Potenza",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PZ"
      },
      {
        "id": 1700,
        "name": "Province of Prato",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "PO"
      },
      {
        "id": 1707,
        "name": "Province of Ravenna",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "RA"
      },
      {
        "id": 1708,
        "name": "Province of Reggio Emilia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "RE"
      },
      {
        "id": 1712,
        "name": "Province of Rieti",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "RI"
      },
      {
        "id": 1713,
        "name": "Province of Rimini",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "RN"
      },
      {
        "id": 1719,
        "name": "Province of Rovigo",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "RO"
      },
      {
        "id": 1720,
        "name": "Province of Salerno",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "SA"
      },
      {
        "id": 1722,
        "name": "Province of Sassari",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "SS"
      },
      {
        "id": 1732,
        "name": "Province of Savona",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "SV"
      },
      {
        "id": 1734,
        "name": "Province of Siena",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "SI"
      },
      {
        "id": 1741,
        "name": "Province of Sondrio",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "SO"
      },
      {
        "id": 1743,
        "name": "Province of Taranto",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "TA"
      },
      {
        "id": 1752,
        "name": "Province of Teramo",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "TE"
      },
      {
        "id": 1755,
        "name": "Province of Terni",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "TR"
      },
      {
        "id": 1762,
        "name": "Province of Treviso",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "TV"
      },
      {
        "id": 1763,
        "name": "Province of Trieste",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "TS"
      },
      {
        "id": 1764,
        "name": "Province of Udine",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "UD"
      },
      {
        "id": 1765,
        "name": "Province of Varese",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VA"
      },
      {
        "id": 1726,
        "name": "Province of Verbano-Cusio-Ossola",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VB"
      },
      {
        "id": 1785,
        "name": "Province of Vercelli",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VC"
      },
      {
        "id": 1736,
        "name": "Province of Verona",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VR"
      },
      {
        "id": 1737,
        "name": "Province of Vibo Valentia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VV"
      },
      {
        "id": 1738,
        "name": "Province of Vicenza",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VI"
      },
      {
        "id": 1735,
        "name": "Province of Viterbo",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "VT"
      },
      {
        "id": 1715,
        "name": "Sardinia",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "88"
      },
      {
        "id": 1709,
        "name": "Sicily",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "82"
      },
      {
        "id": 1767,
        "name": "South Tyrol",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "BZ"
      },
      {
        "id": 1748,
        "name": "Trentino",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "TN"
      },
      {
        "id": 1725,
        "name": "Trentino-South Tyrol",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "32"
      },
      {
        "id": 1664,
        "name": "Tuscany",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "52"
      },
      {
        "id": 1683,
        "name": "Umbria",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "55"
      },
      {
        "id": 1753,
        "name": "Veneto",
        "country_id": 107,
        "country_code": "IT",
        "state_code": "34"
      },
      {
        "id": 3753,
        "name": "Clarendon Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "13"
      },
      {
        "id": 3749,
        "name": "Hanover Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "09"
      },
      {
        "id": 3748,
        "name": "Kingston Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "01"
      },
      {
        "id": 3754,
        "name": "Manchester Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "12"
      },
      {
        "id": 3752,
        "name": "Portland Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "04"
      },
      {
        "id": 3751,
        "name": "Saint Andrew",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "02"
      },
      {
        "id": 3744,
        "name": "Saint Ann Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "06"
      },
      {
        "id": 3746,
        "name": "Saint Catherine Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "14"
      },
      {
        "id": 3743,
        "name": "Saint Elizabeth Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "11"
      },
      {
        "id": 3745,
        "name": "Saint James Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "08"
      },
      {
        "id": 3747,
        "name": "Saint Mary Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "05"
      },
      {
        "id": 3750,
        "name": "Saint Thomas Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "03"
      },
      {
        "id": 3755,
        "name": "Trelawny Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "07"
      },
      {
        "id": 3742,
        "name": "Westmoreland Parish",
        "country_id": 108,
        "country_code": "JM",
        "state_code": "10"
      },
      {
        "id": 827,
        "name": "Aichi Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "23"
      },
      {
        "id": 829,
        "name": "Akita Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "05"
      },
      {
        "id": 839,
        "name": "Aomori Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "02"
      },
      {
        "id": 821,
        "name": "Chiba Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "12"
      },
      {
        "id": 865,
        "name": "Ehime Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "38"
      },
      {
        "id": 848,
        "name": "Fukui Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "18"
      },
      {
        "id": 861,
        "name": "Fukuoka Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "40"
      },
      {
        "id": 847,
        "name": "Fukushima Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "07"
      },
      {
        "id": 858,
        "name": "Gifu Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "21"
      },
      {
        "id": 862,
        "name": "Gunma Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "10"
      },
      {
        "id": 828,
        "name": "Hiroshima Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "34"
      },
      {
        "id": 832,
        "name": "Hokkaidō Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "01"
      },
      {
        "id": 831,
        "name": "Hyōgo Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "28"
      },
      {
        "id": 851,
        "name": "Ibaraki Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "08"
      },
      {
        "id": 830,
        "name": "Ishikawa Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "17"
      },
      {
        "id": 856,
        "name": "Iwate Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "03"
      },
      {
        "id": 864,
        "name": "Kagawa Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "37"
      },
      {
        "id": 840,
        "name": "Kagoshima Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "46"
      },
      {
        "id": 842,
        "name": "Kanagawa Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "14"
      },
      {
        "id": 846,
        "name": "Kumamoto Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "43"
      },
      {
        "id": 834,
        "name": "Kyōto Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "26"
      },
      {
        "id": 833,
        "name": "Mie Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "24"
      },
      {
        "id": 857,
        "name": "Miyagi Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "04"
      },
      {
        "id": 855,
        "name": "Miyazaki Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "45"
      },
      {
        "id": 843,
        "name": "Nagano Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "20"
      },
      {
        "id": 849,
        "name": "Nagasaki Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "42"
      },
      {
        "id": 824,
        "name": "Nara Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "29"
      },
      {
        "id": 841,
        "name": "Niigata Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "15"
      },
      {
        "id": 822,
        "name": "Ōita Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "44"
      },
      {
        "id": 820,
        "name": "Okayama Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "33"
      },
      {
        "id": 853,
        "name": "Okinawa Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "47"
      },
      {
        "id": 859,
        "name": "Ōsaka Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "27"
      },
      {
        "id": 863,
        "name": "Saga Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "41"
      },
      {
        "id": 860,
        "name": "Saitama Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "11"
      },
      {
        "id": 845,
        "name": "Shiga Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "25"
      },
      {
        "id": 826,
        "name": "Shimane Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "32"
      },
      {
        "id": 825,
        "name": "Shizuoka Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "22"
      },
      {
        "id": 854,
        "name": "Tochigi Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "09"
      },
      {
        "id": 836,
        "name": "Tokushima Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "36"
      },
      {
        "id": 823,
        "name": "Tokyo",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "13"
      },
      {
        "id": 850,
        "name": "Tottori Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "31"
      },
      {
        "id": 838,
        "name": "Toyama Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "16"
      },
      {
        "id": 844,
        "name": "Wakayama Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "30"
      },
      {
        "id": 837,
        "name": "Yamagata Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "06"
      },
      {
        "id": 835,
        "name": "Yamaguchi Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "35"
      },
      {
        "id": 852,
        "name": "Yamanashi Prefecture",
        "country_id": 109,
        "country_code": "JP",
        "state_code": "19"
      },
      {
        "id": 963,
        "name": "Ajloun Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "AJ"
      },
      {
        "id": 965,
        "name": "Amman Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "AM"
      },
      {
        "id": 959,
        "name": "Aqaba Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "AQ"
      },
      {
        "id": 961,
        "name": "Balqa Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "BA"
      },
      {
        "id": 960,
        "name": "Irbid Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "IR"
      },
      {
        "id": 966,
        "name": "Jerash Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "JA"
      },
      {
        "id": 956,
        "name": "Karak Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "KA"
      },
      {
        "id": 964,
        "name": "Ma'an Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "MN"
      },
      {
        "id": 958,
        "name": "Madaba Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "MD"
      },
      {
        "id": 962,
        "name": "Mafraq Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "MA"
      },
      {
        "id": 957,
        "name": "Tafilah Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "AT"
      },
      {
        "id": 967,
        "name": "Zarqa Governorate",
        "country_id": 111,
        "country_code": "JO",
        "state_code": "AZ"
      },
      {
        "id": 145,
        "name": "Akmola Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "AKM"
      },
      {
        "id": 151,
        "name": "Aktobe Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "AKT"
      },
      {
        "id": 152,
        "name": "Almaty",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "ALA"
      },
      {
        "id": 143,
        "name": "Almaty Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "ALM"
      },
      {
        "id": 153,
        "name": "Atyrau Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "ATY"
      },
      {
        "id": 155,
        "name": "Baikonur",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "BAY"
      },
      {
        "id": 154,
        "name": "East Kazakhstan Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "VOS"
      },
      {
        "id": 147,
        "name": "Jambyl Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "ZHA"
      },
      {
        "id": 150,
        "name": "Karaganda Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "KAR"
      },
      {
        "id": 157,
        "name": "Kostanay Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "KUS"
      },
      {
        "id": 142,
        "name": "Kyzylorda Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "KZY"
      },
      {
        "id": 141,
        "name": "Mangystau Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "MAN"
      },
      {
        "id": 144,
        "name": "North Kazakhstan Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "SEV"
      },
      {
        "id": 156,
        "name": "Nur-Sultan",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "AST"
      },
      {
        "id": 146,
        "name": "Pavlodar Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "PAV"
      },
      {
        "id": 149,
        "name": "Turkestan Region",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "YUZ"
      },
      {
        "id": 148,
        "name": "West Kazakhstan Province",
        "country_id": 112,
        "country_code": "KZ",
        "state_code": "ZAP"
      },
      {
        "id": 181,
        "name": "Baringo County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "01"
      },
      {
        "id": 210,
        "name": "Bomet County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "02"
      },
      {
        "id": 168,
        "name": "Bungoma County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "03"
      },
      {
        "id": 161,
        "name": "Busia County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "04"
      },
      {
        "id": 160,
        "name": "Central Province",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "200"
      },
      {
        "id": 172,
        "name": "Coast Province",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "300"
      },
      {
        "id": 189,
        "name": "Eastern Province",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "400"
      },
      {
        "id": 201,
        "name": "Elgeyo-Marakwet County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "05"
      },
      {
        "id": 163,
        "name": "Embu County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "06"
      },
      {
        "id": 196,
        "name": "Garissa County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "07"
      },
      {
        "id": 195,
        "name": "Homa Bay County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "08"
      },
      {
        "id": 170,
        "name": "Isiolo County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "09"
      },
      {
        "id": 197,
        "name": "Kajiado County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "10"
      },
      {
        "id": 158,
        "name": "Kakamega County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "11"
      },
      {
        "id": 193,
        "name": "Kericho County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "12"
      },
      {
        "id": 199,
        "name": "Kiambu County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "13"
      },
      {
        "id": 174,
        "name": "Kilifi County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "14"
      },
      {
        "id": 167,
        "name": "Kirinyaga County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "15"
      },
      {
        "id": 159,
        "name": "Kisii County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "16"
      },
      {
        "id": 171,
        "name": "Kisumu County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "17"
      },
      {
        "id": 211,
        "name": "Kitui County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "18"
      },
      {
        "id": 173,
        "name": "Kwale County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "19"
      },
      {
        "id": 164,
        "name": "Laikipia County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "20"
      },
      {
        "id": 166,
        "name": "Lamu County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "21"
      },
      {
        "id": 184,
        "name": "Machakos County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "22"
      },
      {
        "id": 188,
        "name": "Makueni County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "23"
      },
      {
        "id": 187,
        "name": "Mandera County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "24"
      },
      {
        "id": 194,
        "name": "Marsabit County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "25"
      },
      {
        "id": 198,
        "name": "Meru County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "26"
      },
      {
        "id": 190,
        "name": "Migori County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "27"
      },
      {
        "id": 200,
        "name": "Mombasa County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "28"
      },
      {
        "id": 178,
        "name": "Muranga County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "29"
      },
      {
        "id": 191,
        "name": "Nairobi",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "110"
      },
      {
        "id": 203,
        "name": "Nakuru District",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "31"
      },
      {
        "id": 165,
        "name": "Nandi District",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "32"
      },
      {
        "id": 175,
        "name": "Narok County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "33"
      },
      {
        "id": 162,
        "name": "North Eastern Province",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "500"
      },
      {
        "id": 209,
        "name": "Nyamira District",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "34"
      },
      {
        "id": 192,
        "name": "Nyandarua County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "35"
      },
      {
        "id": 204,
        "name": "Nyanza Province",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "600"
      },
      {
        "id": 180,
        "name": "Nyeri County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "36"
      },
      {
        "id": 179,
        "name": "Rift Valley Province",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "700"
      },
      {
        "id": 207,
        "name": "Samburu County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "37"
      },
      {
        "id": 186,
        "name": "Siaya County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "38"
      },
      {
        "id": 176,
        "name": "Taita–Taveta County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "39"
      },
      {
        "id": 205,
        "name": "Tana River County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "40"
      },
      {
        "id": 185,
        "name": "Tharaka Nithi County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "41"
      },
      {
        "id": 183,
        "name": "Trans-Nzoia District",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "42"
      },
      {
        "id": 206,
        "name": "Turkana County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "43"
      },
      {
        "id": 169,
        "name": "Uasin Gishu District",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "44"
      },
      {
        "id": 202,
        "name": "Vihiga District",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "45"
      },
      {
        "id": 182,
        "name": "Wajir County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "46"
      },
      {
        "id": 208,
        "name": "West Pokot County",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "47"
      },
      {
        "id": 177,
        "name": "Western Province",
        "country_id": 113,
        "country_code": "KE",
        "state_code": "800"
      },
      {
        "id": 1831,
        "name": "Gilbert Islands",
        "country_id": 114,
        "country_code": "KI",
        "state_code": "G"
      },
      {
        "id": 1832,
        "name": "Line Islands",
        "country_id": 114,
        "country_code": "KI",
        "state_code": "L"
      },
      {
        "id": 1830,
        "name": "Phoenix Islands",
        "country_id": 114,
        "country_code": "KI",
        "state_code": "P"
      },
      {
        "id": 3998,
        "name": "Chagang Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "04"
      },
      {
        "id": 3999,
        "name": "Kangwon Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "07"
      },
      {
        "id": 3995,
        "name": "North Hamgyong Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "09"
      },
      {
        "id": 4004,
        "name": "North Hwanghae Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "06"
      },
      {
        "id": 4002,
        "name": "North Pyongan Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "03"
      },
      {
        "id": 4005,
        "name": "Pyongyang",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "01"
      },
      {
        "id": 4001,
        "name": "Rason",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "13"
      },
      {
        "id": 3996,
        "name": "Ryanggang Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "10"
      },
      {
        "id": 4000,
        "name": "South Hamgyong Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "08"
      },
      {
        "id": 4003,
        "name": "South Hwanghae Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "05"
      },
      {
        "id": 3997,
        "name": "South Pyongan Province",
        "country_id": 115,
        "country_code": "KP",
        "state_code": "02"
      },
      {
        "id": 3860,
        "name": "Busan",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "26"
      },
      {
        "id": 3846,
        "name": "Daegu",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "27"
      },
      {
        "id": 3850,
        "name": "Daejeon",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "30"
      },
      {
        "id": 3862,
        "name": "Gangwon Province",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "42"
      },
      {
        "id": 3858,
        "name": "Gwangju",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "29"
      },
      {
        "id": 3847,
        "name": "Gyeonggi Province",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "41"
      },
      {
        "id": 3848,
        "name": "Incheon",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "28"
      },
      {
        "id": 3853,
        "name": "Jeju",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "49"
      },
      {
        "id": 3854,
        "name": "North Chungcheong Province",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "43"
      },
      {
        "id": 3855,
        "name": "North Gyeongsang Province",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "47"
      },
      {
        "id": 3851,
        "name": "North Jeolla Province",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "45"
      },
      {
        "id": 3861,
        "name": "Sejong City",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "50"
      },
      {
        "id": 3849,
        "name": "Seoul",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "11"
      },
      {
        "id": 3859,
        "name": "South Chungcheong Province",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "44"
      },
      {
        "id": 3857,
        "name": "South Gyeongsang Province",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "48"
      },
      {
        "id": 3856,
        "name": "South Jeolla Province",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "46"
      },
      {
        "id": 3852,
        "name": "Ulsan",
        "country_id": 116,
        "country_code": "KR",
        "state_code": "31"
      },
      {
        "id": 977,
        "name": "Al Ahmadi Governorate",
        "country_id": 117,
        "country_code": "KW",
        "state_code": "AH"
      },
      {
        "id": 975,
        "name": "Al Farwaniyah Governorate",
        "country_id": 117,
        "country_code": "KW",
        "state_code": "FA"
      },
      {
        "id": 972,
        "name": "Al Jahra Governorate",
        "country_id": 117,
        "country_code": "KW",
        "state_code": "JA"
      },
      {
        "id": 976,
        "name": "Capital Governorate",
        "country_id": 117,
        "country_code": "KW",
        "state_code": "KU"
      },
      {
        "id": 973,
        "name": "Hawalli Governorate",
        "country_id": 117,
        "country_code": "KW",
        "state_code": "HA"
      },
      {
        "id": 974,
        "name": "Mubarak Al-Kabeer Governorate",
        "country_id": 117,
        "country_code": "KW",
        "state_code": "MU"
      },
      {
        "id": 998,
        "name": "Batken Region",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "B"
      },
      {
        "id": 1001,
        "name": "Bishkek",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "GB"
      },
      {
        "id": 1004,
        "name": "Chuy Region",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "C"
      },
      {
        "id": 1002,
        "name": "Issyk-Kul Region",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "Y"
      },
      {
        "id": 1000,
        "name": "Jalal-Abad Region",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "J"
      },
      {
        "id": 999,
        "name": "Naryn Region",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "N"
      },
      {
        "id": 1003,
        "name": "Osh",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "GO"
      },
      {
        "id": 1005,
        "name": "Osh Region",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "O"
      },
      {
        "id": 997,
        "name": "Talas Region",
        "country_id": 118,
        "country_code": "KG",
        "state_code": "T"
      },
      {
        "id": 982,
        "name": "Attapeu Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "AT"
      },
      {
        "id": 991,
        "name": "Bokeo Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "BK"
      },
      {
        "id": 985,
        "name": "Bolikhamsai Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "BL"
      },
      {
        "id": 996,
        "name": "Champasak Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "CH"
      },
      {
        "id": 989,
        "name": "Houaphanh Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "HO"
      },
      {
        "id": 986,
        "name": "Khammouane Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "KH"
      },
      {
        "id": 992,
        "name": "Luang Namtha Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "LM"
      },
      {
        "id": 978,
        "name": "Luang Prabang Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "LP"
      },
      {
        "id": 988,
        "name": "Oudomxay Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "OU"
      },
      {
        "id": 987,
        "name": "Phongsaly Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "PH"
      },
      {
        "id": 993,
        "name": "Sainyabuli Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "XA"
      },
      {
        "id": 981,
        "name": "Salavan Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "SL"
      },
      {
        "id": 990,
        "name": "Savannakhet Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "SV"
      },
      {
        "id": 984,
        "name": "Sekong Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "XE"
      },
      {
        "id": 979,
        "name": "Vientiane Prefecture",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "VT"
      },
      {
        "id": 980,
        "name": "Vientiane Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "VI"
      },
      {
        "id": 994,
        "name": "Xaisomboun",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "XN"
      },
      {
        "id": 983,
        "name": "Xaisomboun Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "XS"
      },
      {
        "id": 995,
        "name": "Xiangkhouang Province",
        "country_id": 119,
        "country_code": "LA",
        "state_code": "XI"
      },
      {
        "id": 4445,
        "name": "Aglona Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "001"
      },
      {
        "id": 4472,
        "name": "Aizkraukle Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "002"
      },
      {
        "id": 4496,
        "name": "Aizpute Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "003"
      },
      {
        "id": 4499,
        "name": "Aknīste Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "004"
      },
      {
        "id": 4484,
        "name": "Aloja Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "005"
      },
      {
        "id": 4485,
        "name": "Alsunga Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "006"
      },
      {
        "id": 4487,
        "name": "Alūksne Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "007"
      },
      {
        "id": 4497,
        "name": "Amata Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "008"
      },
      {
        "id": 4457,
        "name": "Ape Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "009"
      },
      {
        "id": 4481,
        "name": "Auce Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "010"
      },
      {
        "id": 4427,
        "name": "Babīte Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "012"
      },
      {
        "id": 4482,
        "name": "Baldone Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "013"
      },
      {
        "id": 4498,
        "name": "Baltinava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "014"
      },
      {
        "id": 4505,
        "name": "Balvi Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "015"
      },
      {
        "id": 4465,
        "name": "Bauska Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "016"
      },
      {
        "id": 4471,
        "name": "Beverīna Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "017"
      },
      {
        "id": 4468,
        "name": "Brocēni Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "018"
      },
      {
        "id": 4411,
        "name": "Burtnieki Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "019"
      },
      {
        "id": 4454,
        "name": "Carnikava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "020"
      },
      {
        "id": 4469,
        "name": "Cēsis Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "022"
      },
      {
        "id": 4414,
        "name": "Cesvaine Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "021"
      },
      {
        "id": 4410,
        "name": "Cibla Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "023"
      },
      {
        "id": 4504,
        "name": "Dagda Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "024"
      },
      {
        "id": 4463,
        "name": "Daugavpils",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "DGV"
      },
      {
        "id": 4492,
        "name": "Daugavpils Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "025"
      },
      {
        "id": 4437,
        "name": "Dobele Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "026"
      },
      {
        "id": 4428,
        "name": "Dundaga Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "027"
      },
      {
        "id": 4458,
        "name": "Durbe Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "028"
      },
      {
        "id": 4448,
        "name": "Engure Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "029"
      },
      {
        "id": 4444,
        "name": "Ērgļi Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "030"
      },
      {
        "id": 4510,
        "name": "Garkalne Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "031"
      },
      {
        "id": 4470,
        "name": "Grobiņa Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "032"
      },
      {
        "id": 4400,
        "name": "Gulbene Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "033"
      },
      {
        "id": 4441,
        "name": "Iecava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "034"
      },
      {
        "id": 4511,
        "name": "Ikšķile Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "035"
      },
      {
        "id": 4399,
        "name": "Ilūkste Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "036"
      },
      {
        "id": 4449,
        "name": "Inčukalns Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "037"
      },
      {
        "id": 4475,
        "name": "Jaunjelgava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "038"
      },
      {
        "id": 4407,
        "name": "Jaunpiebalga Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "039"
      },
      {
        "id": 4489,
        "name": "Jaunpils Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "040"
      },
      {
        "id": 4464,
        "name": "Jēkabpils",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "JKB"
      },
      {
        "id": 4438,
        "name": "Jēkabpils Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "042"
      },
      {
        "id": 4500,
        "name": "Jelgava",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "JEL"
      },
      {
        "id": 4424,
        "name": "Jelgava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "041"
      },
      {
        "id": 4446,
        "name": "Jūrmala",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "JUR"
      },
      {
        "id": 4420,
        "name": "Kandava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "043"
      },
      {
        "id": 4453,
        "name": "Kārsava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "044"
      },
      {
        "id": 4412,
        "name": "Ķegums Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "051"
      },
      {
        "id": 4435,
        "name": "Ķekava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "052"
      },
      {
        "id": 4495,
        "name": "Kocēni Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "045"
      },
      {
        "id": 4452,
        "name": "Koknese Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "046"
      },
      {
        "id": 4474,
        "name": "Krāslava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "047"
      },
      {
        "id": 4422,
        "name": "Krimulda Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "048"
      },
      {
        "id": 4413,
        "name": "Krustpils Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "049"
      },
      {
        "id": 4490,
        "name": "Kuldīga Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "050"
      },
      {
        "id": 4512,
        "name": "Lielvārde Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "053"
      },
      {
        "id": 4460,
        "name": "Liepāja",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "LPX"
      },
      {
        "id": 4488,
        "name": "Līgatne Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "055"
      },
      {
        "id": 4418,
        "name": "Limbaži Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "054"
      },
      {
        "id": 4401,
        "name": "Līvāni Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "056"
      },
      {
        "id": 4419,
        "name": "Lubāna Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "057"
      },
      {
        "id": 4501,
        "name": "Ludza Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "058"
      },
      {
        "id": 4433,
        "name": "Madona Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "059"
      },
      {
        "id": 4461,
        "name": "Mālpils Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "061"
      },
      {
        "id": 4450,
        "name": "Mārupe Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "062"
      },
      {
        "id": 4513,
        "name": "Mazsalaca Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "060"
      },
      {
        "id": 4451,
        "name": "Mērsrags Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "063"
      },
      {
        "id": 4398,
        "name": "Naukšēni Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "064"
      },
      {
        "id": 4432,
        "name": "Nereta Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "065"
      },
      {
        "id": 4436,
        "name": "Nīca Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "066"
      },
      {
        "id": 4416,
        "name": "Ogre Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "067"
      },
      {
        "id": 4417,
        "name": "Olaine Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "068"
      },
      {
        "id": 4442,
        "name": "Ozolnieki Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "069"
      },
      {
        "id": 4507,
        "name": "Pārgauja Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "070"
      },
      {
        "id": 4467,
        "name": "Pāvilosta Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "071"
      },
      {
        "id": 4405,
        "name": "Pļaviņas Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "072"
      },
      {
        "id": 4483,
        "name": "Preiļi Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "073"
      },
      {
        "id": 4429,
        "name": "Priekule Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "074"
      },
      {
        "id": 4506,
        "name": "Priekuļi Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "075"
      },
      {
        "id": 4479,
        "name": "Rauna Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "076"
      },
      {
        "id": 4509,
        "name": "Rēzekne",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "REZ"
      },
      {
        "id": 4455,
        "name": "Rēzekne Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "077"
      },
      {
        "id": 4502,
        "name": "Riebiņi Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "078"
      },
      {
        "id": 4491,
        "name": "Riga",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "RIX"
      },
      {
        "id": 4440,
        "name": "Roja Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "079"
      },
      {
        "id": 4493,
        "name": "Ropaži Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "080"
      },
      {
        "id": 4503,
        "name": "Rucava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "081"
      },
      {
        "id": 4423,
        "name": "Rugāji Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "082"
      },
      {
        "id": 4426,
        "name": "Rūjiena Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "084"
      },
      {
        "id": 4404,
        "name": "Rundāle Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "083"
      },
      {
        "id": 4434,
        "name": "Sala Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "085"
      },
      {
        "id": 4396,
        "name": "Salacgrīva Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "086"
      },
      {
        "id": 4402,
        "name": "Salaspils Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "087"
      },
      {
        "id": 4439,
        "name": "Saldus Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "088"
      },
      {
        "id": 4443,
        "name": "Saulkrasti Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "089"
      },
      {
        "id": 4408,
        "name": "Sēja Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "090"
      },
      {
        "id": 4476,
        "name": "Sigulda Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "091"
      },
      {
        "id": 4415,
        "name": "Skrīveri Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "092"
      },
      {
        "id": 4447,
        "name": "Skrunda Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "093"
      },
      {
        "id": 4462,
        "name": "Smiltene Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "094"
      },
      {
        "id": 4478,
        "name": "Stopiņi Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "095"
      },
      {
        "id": 4494,
        "name": "Strenči Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "096"
      },
      {
        "id": 4459,
        "name": "Talsi Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "097"
      },
      {
        "id": 4480,
        "name": "Tērvete Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "098"
      },
      {
        "id": 4409,
        "name": "Tukums Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "099"
      },
      {
        "id": 4508,
        "name": "Vaiņode Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "100"
      },
      {
        "id": 4425,
        "name": "Valka Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "101"
      },
      {
        "id": 4473,
        "name": "Valmiera",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "VMR"
      },
      {
        "id": 4431,
        "name": "Varakļāni Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "102"
      },
      {
        "id": 4406,
        "name": "Vārkava Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "103"
      },
      {
        "id": 4466,
        "name": "Vecpiebalga Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "104"
      },
      {
        "id": 4397,
        "name": "Vecumnieki Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "105"
      },
      {
        "id": 4421,
        "name": "Ventspils",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "VEN"
      },
      {
        "id": 4403,
        "name": "Ventspils Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "106"
      },
      {
        "id": 4456,
        "name": "Viesīte Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "107"
      },
      {
        "id": 4477,
        "name": "Viļaka Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "108"
      },
      {
        "id": 4486,
        "name": "Viļāni Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "109"
      },
      {
        "id": 4430,
        "name": "Zilupe Municipality",
        "country_id": 120,
        "country_code": "LV",
        "state_code": "110"
      },
      {
        "id": 2285,
        "name": "Akkar Governorate",
        "country_id": 121,
        "country_code": "LB",
        "state_code": "AK"
      },
      {
        "id": 2283,
        "name": "Baalbek-Hermel Governorate",
        "country_id": 121,
        "country_code": "LB",
        "state_code": "BH"
      },
      {
        "id": 2286,
        "name": "Beirut Governorate",
        "country_id": 121,
        "country_code": "LB",
        "state_code": "BA"
      },
      {
        "id": 2287,
        "name": "Beqaa Governorate",
        "country_id": 121,
        "country_code": "LB",
        "state_code": "BI"
      },
      {
        "id": 2282,
        "name": "Mount Lebanon Governorate",
        "country_id": 121,
        "country_code": "LB",
        "state_code": "JL"
      },
      {
        "id": 2288,
        "name": "Nabatieh Governorate",
        "country_id": 121,
        "country_code": "LB",
        "state_code": "NA"
      },
      {
        "id": 2284,
        "name": "North Governorate",
        "country_id": 121,
        "country_code": "LB",
        "state_code": "AS"
      },
      {
        "id": 2281,
        "name": "South Governorate",
        "country_id": 121,
        "country_code": "LB",
        "state_code": "JA"
      },
      {
        "id": 3030,
        "name": "Berea District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "D"
      },
      {
        "id": 3029,
        "name": "Butha-Buthe District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "B"
      },
      {
        "id": 3026,
        "name": "Leribe District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "C"
      },
      {
        "id": 3022,
        "name": "Mafeteng District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "E"
      },
      {
        "id": 3028,
        "name": "Maseru District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "A"
      },
      {
        "id": 3023,
        "name": "Mohale's Hoek District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "F"
      },
      {
        "id": 3024,
        "name": "Mokhotlong District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "J"
      },
      {
        "id": 3025,
        "name": "Qacha's Nek District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "H"
      },
      {
        "id": 3027,
        "name": "Quthing District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "G"
      },
      {
        "id": 3031,
        "name": "Thaba-Tseka District",
        "country_id": 122,
        "country_code": "LS",
        "state_code": "K"
      },
      {
        "id": 3041,
        "name": "Bomi County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "BM"
      },
      {
        "id": 3034,
        "name": "Bong County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "BG"
      },
      {
        "id": 3044,
        "name": "Gbarpolu County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "GP"
      },
      {
        "id": 3040,
        "name": "Grand Bassa County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "GB"
      },
      {
        "id": 3036,
        "name": "Grand Cape Mount County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "CM"
      },
      {
        "id": 3039,
        "name": "Grand Gedeh County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "GG"
      },
      {
        "id": 3045,
        "name": "Grand Kru County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "GK"
      },
      {
        "id": 3037,
        "name": "Lofa County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "LO"
      },
      {
        "id": 3043,
        "name": "Margibi County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "MG"
      },
      {
        "id": 3042,
        "name": "Maryland County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "MY"
      },
      {
        "id": 3032,
        "name": "Montserrado County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "MO"
      },
      {
        "id": 3046,
        "name": "Nimba",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "NI"
      },
      {
        "id": 3033,
        "name": "River Cess County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "RI"
      },
      {
        "id": 3038,
        "name": "River Gee County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "RG"
      },
      {
        "id": 3035,
        "name": "Sinoe County",
        "country_id": 123,
        "country_code": "LR",
        "state_code": "SI"
      },
      {
        "id": 2964,
        "name": "Al Wahat District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "WA"
      },
      {
        "id": 2981,
        "name": "Benghazi",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "BA"
      },
      {
        "id": 2966,
        "name": "Derna District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "DR"
      },
      {
        "id": 2969,
        "name": "Ghat District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "GT"
      },
      {
        "id": 2980,
        "name": "Jabal al Akhdar",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "JA"
      },
      {
        "id": 2974,
        "name": "Jabal al Gharbi District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "JG"
      },
      {
        "id": 2979,
        "name": "Jafara",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "JI"
      },
      {
        "id": 2970,
        "name": "Jufra",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "JU"
      },
      {
        "id": 2972,
        "name": "Kufra District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "KF"
      },
      {
        "id": 2968,
        "name": "Marj District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "MJ"
      },
      {
        "id": 2978,
        "name": "Misrata District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "MI"
      },
      {
        "id": 2961,
        "name": "Murqub",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "MB"
      },
      {
        "id": 2967,
        "name": "Murzuq District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "MQ"
      },
      {
        "id": 2976,
        "name": "Nalut District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "NL"
      },
      {
        "id": 2962,
        "name": "Nuqat al Khams",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "NQ"
      },
      {
        "id": 2965,
        "name": "Sabha District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "SB"
      },
      {
        "id": 2977,
        "name": "Sirte District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "SR"
      },
      {
        "id": 2971,
        "name": "Tripoli District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "TB"
      },
      {
        "id": 2973,
        "name": "Wadi al Hayaa District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "WD"
      },
      {
        "id": 2975,
        "name": "Wadi al Shatii District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "WS"
      },
      {
        "id": 2963,
        "name": "Zawiya District",
        "country_id": 124,
        "country_code": "LY",
        "state_code": "ZA"
      },
      {
        "id": 458,
        "name": "Balzers",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "01"
      },
      {
        "id": 451,
        "name": "Eschen",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "02"
      },
      {
        "id": 457,
        "name": "Gamprin",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "03"
      },
      {
        "id": 455,
        "name": "Mauren",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "04"
      },
      {
        "id": 454,
        "name": "Planken",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "05"
      },
      {
        "id": 453,
        "name": "Ruggell",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "06"
      },
      {
        "id": 450,
        "name": "Schaan",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "07"
      },
      {
        "id": 449,
        "name": "Schellenberg",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "08"
      },
      {
        "id": 459,
        "name": "Triesen",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "09"
      },
      {
        "id": 456,
        "name": "Triesenberg",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "10"
      },
      {
        "id": 452,
        "name": "Vaduz",
        "country_id": 125,
        "country_code": "LI",
        "state_code": "11"
      },
      {
        "id": 1561,
        "name": "Akmenė District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "01"
      },
      {
        "id": 1605,
        "name": "Alytus City Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "02"
      },
      {
        "id": 1574,
        "name": "Alytus County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "AL"
      },
      {
        "id": 1599,
        "name": "Alytus District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "03"
      },
      {
        "id": 1603,
        "name": "Birštonas Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "05"
      },
      {
        "id": 1566,
        "name": "Biržai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "06"
      },
      {
        "id": 1579,
        "name": "Druskininkai municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "07"
      },
      {
        "id": 1559,
        "name": "Elektrėnai municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "08"
      },
      {
        "id": 1562,
        "name": "Ignalina District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "09"
      },
      {
        "id": 1567,
        "name": "Jonava District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "10"
      },
      {
        "id": 1581,
        "name": "Joniškis District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "11"
      },
      {
        "id": 1555,
        "name": "Jurbarkas District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "12"
      },
      {
        "id": 1583,
        "name": "Kaišiadorys District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "13"
      },
      {
        "id": 1591,
        "name": "Kalvarija municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "14"
      },
      {
        "id": 1580,
        "name": "Kaunas City Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "15"
      },
      {
        "id": 1556,
        "name": "Kaunas County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "KU"
      },
      {
        "id": 1565,
        "name": "Kaunas District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "16"
      },
      {
        "id": 1575,
        "name": "Kazlų Rūda municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "17"
      },
      {
        "id": 1584,
        "name": "Kėdainiai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "18"
      },
      {
        "id": 1618,
        "name": "Kelmė District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "19"
      },
      {
        "id": 1597,
        "name": "Klaipeda City Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "20"
      },
      {
        "id": 1600,
        "name": "Klaipėda County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "KL"
      },
      {
        "id": 1604,
        "name": "Klaipėda District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "21"
      },
      {
        "id": 1571,
        "name": "Kretinga District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "22"
      },
      {
        "id": 1585,
        "name": "Kupiškis District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "23"
      },
      {
        "id": 1611,
        "name": "Lazdijai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "24"
      },
      {
        "id": 1570,
        "name": "Marijampolė County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "MR"
      },
      {
        "id": 1610,
        "name": "Marijampolė Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "25"
      },
      {
        "id": 1557,
        "name": "Mažeikiai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "26"
      },
      {
        "id": 1582,
        "name": "Molėtai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "27"
      },
      {
        "id": 1563,
        "name": "Neringa Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "28"
      },
      {
        "id": 1612,
        "name": "Pagėgiai municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "29"
      },
      {
        "id": 1595,
        "name": "Pakruojis District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "30"
      },
      {
        "id": 1588,
        "name": "Palanga City Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "31"
      },
      {
        "id": 1589,
        "name": "Panevėžys City Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "32"
      },
      {
        "id": 1558,
        "name": "Panevėžys County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "PN"
      },
      {
        "id": 1614,
        "name": "Panevėžys District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "33"
      },
      {
        "id": 1616,
        "name": "Pasvalys District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "34"
      },
      {
        "id": 1553,
        "name": "Plungė District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "35"
      },
      {
        "id": 1578,
        "name": "Prienai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "36"
      },
      {
        "id": 1568,
        "name": "Radviliškis District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "37"
      },
      {
        "id": 1587,
        "name": "Raseiniai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "38"
      },
      {
        "id": 1590,
        "name": "Rietavas municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "39"
      },
      {
        "id": 1615,
        "name": "Rokiškis District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "40"
      },
      {
        "id": 1576,
        "name": "Šakiai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "41"
      },
      {
        "id": 1577,
        "name": "Šalčininkai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "42"
      },
      {
        "id": 1609,
        "name": "Šiauliai City Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "43"
      },
      {
        "id": 1586,
        "name": "Šiauliai County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "SA"
      },
      {
        "id": 1554,
        "name": "Šiauliai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "44"
      },
      {
        "id": 1613,
        "name": "Šilalė District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "45"
      },
      {
        "id": 1607,
        "name": "Šilutė District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "46"
      },
      {
        "id": 1594,
        "name": "Širvintos District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "47"
      },
      {
        "id": 1617,
        "name": "Skuodas District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "48"
      },
      {
        "id": 1560,
        "name": "Švenčionys District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "49"
      },
      {
        "id": 1573,
        "name": "Tauragė County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "TA"
      },
      {
        "id": 1572,
        "name": "Tauragė District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "50"
      },
      {
        "id": 1569,
        "name": "Telšiai County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "TE"
      },
      {
        "id": 1608,
        "name": "Telšiai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "51"
      },
      {
        "id": 1593,
        "name": "Trakai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "52"
      },
      {
        "id": 1596,
        "name": "Ukmergė District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "53"
      },
      {
        "id": 1621,
        "name": "Utena County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "UT"
      },
      {
        "id": 1598,
        "name": "Utena District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "54"
      },
      {
        "id": 1602,
        "name": "Varėna District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "55"
      },
      {
        "id": 1620,
        "name": "Vilkaviškis District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "56"
      },
      {
        "id": 1606,
        "name": "Vilnius City Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "57"
      },
      {
        "id": 1601,
        "name": "Vilnius County",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "VL"
      },
      {
        "id": 1592,
        "name": "Vilnius District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "58"
      },
      {
        "id": 1564,
        "name": "Visaginas Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "59"
      },
      {
        "id": 1619,
        "name": "Zarasai District Municipality",
        "country_id": 126,
        "country_code": "LT",
        "state_code": "60"
      },
      {
        "id": 1518,
        "name": "Canton of Capellen",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "CA"
      },
      {
        "id": 1521,
        "name": "Canton of Clervaux",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "CL"
      },
      {
        "id": 1513,
        "name": "Canton of Diekirch",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "DI"
      },
      {
        "id": 1515,
        "name": "Canton of Echternach",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "EC"
      },
      {
        "id": 1517,
        "name": "Canton of Esch-sur-Alzette",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "ES"
      },
      {
        "id": 1525,
        "name": "Canton of Grevenmacher",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "GR"
      },
      {
        "id": 1527,
        "name": "Canton of Luxembourg",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "LU"
      },
      {
        "id": 1522,
        "name": "Canton of Mersch",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "ME"
      },
      {
        "id": 1516,
        "name": "Canton of Redange",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "RD"
      },
      {
        "id": 1519,
        "name": "Canton of Remich",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "RM"
      },
      {
        "id": 1523,
        "name": "Canton of Vianden",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "VD"
      },
      {
        "id": 1526,
        "name": "Canton of Wiltz",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "WI"
      },
      {
        "id": 1524,
        "name": "Diekirch District",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "D"
      },
      {
        "id": 1520,
        "name": "Grevenmacher District",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "G"
      },
      {
        "id": 1514,
        "name": "Luxembourg District",
        "country_id": 127,
        "country_code": "LU",
        "state_code": "L"
      },
      {
        "id": 703,
        "name": "Aerodrom Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "01"
      },
      {
        "id": 656,
        "name": "Aračinovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "02"
      },
      {
        "id": 716,
        "name": "Berovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "03"
      },
      {
        "id": 679,
        "name": "Bitola Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "04"
      },
      {
        "id": 649,
        "name": "Bogdanci Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "05"
      },
      {
        "id": 721,
        "name": "Bogovinje Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "06"
      },
      {
        "id": 652,
        "name": "Bosilovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "07"
      },
      {
        "id": 660,
        "name": "Brvenica Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "08"
      },
      {
        "id": 694,
        "name": "Butel Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "09"
      },
      {
        "id": 704,
        "name": "Čair Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "79"
      },
      {
        "id": 676,
        "name": "Čaška Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "80"
      },
      {
        "id": 702,
        "name": "Centar Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "77"
      },
      {
        "id": 720,
        "name": "Centar Župa Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "78"
      },
      {
        "id": 644,
        "name": "Češinovo-Obleševo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "81"
      },
      {
        "id": 715,
        "name": "Čučer-Sandevo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "82"
      },
      {
        "id": 645,
        "name": "Debarca Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "22"
      },
      {
        "id": 695,
        "name": "Delčevo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "23"
      },
      {
        "id": 687,
        "name": "Demir Hisar Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "25"
      },
      {
        "id": 655,
        "name": "Demir Kapija Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "24"
      },
      {
        "id": 697,
        "name": "Dojran Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "26"
      },
      {
        "id": 675,
        "name": "Dolneni Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "27"
      },
      {
        "id": 657,
        "name": "Drugovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "28"
      },
      {
        "id": 707,
        "name": "Gazi Baba Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "17"
      },
      {
        "id": 648,
        "name": "Gevgelija Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "18"
      },
      {
        "id": 722,
        "name": "Gjorče Petrov Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "29"
      },
      {
        "id": 693,
        "name": "Gostivar Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "19"
      },
      {
        "id": 708,
        "name": "Gradsko Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "20"
      },
      {
        "id": 684,
        "name": "Greater Skopje",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "85"
      },
      {
        "id": 690,
        "name": "Ilinden Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "34"
      },
      {
        "id": 678,
        "name": "Jegunovce Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "35"
      },
      {
        "id": 674,
        "name": "Karbinci",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "37"
      },
      {
        "id": 681,
        "name": "Karpoš Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "38"
      },
      {
        "id": 713,
        "name": "Kavadarci Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "36"
      },
      {
        "id": 688,
        "name": "Kičevo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "40"
      },
      {
        "id": 686,
        "name": "Kisela Voda Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "39"
      },
      {
        "id": 723,
        "name": "Kočani Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "42"
      },
      {
        "id": 665,
        "name": "Konče Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "41"
      },
      {
        "id": 641,
        "name": "Kratovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "43"
      },
      {
        "id": 677,
        "name": "Kriva Palanka Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "44"
      },
      {
        "id": 647,
        "name": "Krivogaštani Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "45"
      },
      {
        "id": 714,
        "name": "Kruševo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "46"
      },
      {
        "id": 683,
        "name": "Kumanovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "47"
      },
      {
        "id": 659,
        "name": "Lipkovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "48"
      },
      {
        "id": 705,
        "name": "Lozovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "49"
      },
      {
        "id": 701,
        "name": "Makedonska Kamenica Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "51"
      },
      {
        "id": 692,
        "name": "Makedonski Brod Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "52"
      },
      {
        "id": 669,
        "name": "Mavrovo and Rostuša Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "50"
      },
      {
        "id": 653,
        "name": "Mogila Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "53"
      },
      {
        "id": 664,
        "name": "Negotino Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "54"
      },
      {
        "id": 696,
        "name": "Novaci Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "55"
      },
      {
        "id": 718,
        "name": "Novo Selo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "56"
      },
      {
        "id": 699,
        "name": "Ohrid Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "58"
      },
      {
        "id": 682,
        "name": "Oslomej Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "57"
      },
      {
        "id": 685,
        "name": "Pehčevo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "60"
      },
      {
        "id": 698,
        "name": "Petrovec Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "59"
      },
      {
        "id": 670,
        "name": "Plasnica Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "61"
      },
      {
        "id": 666,
        "name": "Prilep Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "62"
      },
      {
        "id": 646,
        "name": "Probištip Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "63"
      },
      {
        "id": 709,
        "name": "Radoviš Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "64"
      },
      {
        "id": 717,
        "name": "Rankovce Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "65"
      },
      {
        "id": 712,
        "name": "Resen Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "66"
      },
      {
        "id": 691,
        "name": "Rosoman Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "67"
      },
      {
        "id": 667,
        "name": "Saraj Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "68"
      },
      {
        "id": 719,
        "name": "Sopište Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "70"
      },
      {
        "id": 643,
        "name": "Staro Nagoričane Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "71"
      },
      {
        "id": 661,
        "name": "Štip Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "83"
      },
      {
        "id": 700,
        "name": "Struga Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "72"
      },
      {
        "id": 710,
        "name": "Strumica Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "73"
      },
      {
        "id": 711,
        "name": "Studeničani Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "74"
      },
      {
        "id": 680,
        "name": "Šuto Orizari Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "84"
      },
      {
        "id": 640,
        "name": "Sveti Nikole Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "69"
      },
      {
        "id": 654,
        "name": "Tearce Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "75"
      },
      {
        "id": 663,
        "name": "Tetovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "76"
      },
      {
        "id": 671,
        "name": "Valandovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "10"
      },
      {
        "id": 658,
        "name": "Vasilevo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "11"
      },
      {
        "id": 651,
        "name": "Veles Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "13"
      },
      {
        "id": 662,
        "name": "Vevčani Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "12"
      },
      {
        "id": 672,
        "name": "Vinica Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "14"
      },
      {
        "id": 650,
        "name": "Vraneštica Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "15"
      },
      {
        "id": 689,
        "name": "Vrapčište Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "16"
      },
      {
        "id": 642,
        "name": "Zajas Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "31"
      },
      {
        "id": 706,
        "name": "Zelenikovo Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "32"
      },
      {
        "id": 668,
        "name": "Želino Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "30"
      },
      {
        "id": 673,
        "name": "Zrnovci Municipality",
        "country_id": 129,
        "country_code": "MK",
        "state_code": "33"
      },
      {
        "id": 2951,
        "name": "Antananarivo Province",
        "country_id": 130,
        "country_code": "MG",
        "state_code": "T"
      },
      {
        "id": 2950,
        "name": "Antsiranana Province",
        "country_id": 130,
        "country_code": "MG",
        "state_code": "D"
      },
      {
        "id": 2948,
        "name": "Fianarantsoa Province",
        "country_id": 130,
        "country_code": "MG",
        "state_code": "F"
      },
      {
        "id": 2953,
        "name": "Mahajanga Province",
        "country_id": 130,
        "country_code": "MG",
        "state_code": "M"
      },
      {
        "id": 2952,
        "name": "Toamasina Province",
        "country_id": 130,
        "country_code": "MG",
        "state_code": "A"
      },
      {
        "id": 2949,
        "name": "Toliara Province",
        "country_id": 130,
        "country_code": "MG",
        "state_code": "U"
      },
      {
        "id": 3096,
        "name": "Balaka District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "BA"
      },
      {
        "id": 3102,
        "name": "Blantyre District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "BL"
      },
      {
        "id": 3092,
        "name": "Central Region",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "C"
      },
      {
        "id": 3107,
        "name": "Chikwawa District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "CK"
      },
      {
        "id": 3109,
        "name": "Chiradzulu District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "CR"
      },
      {
        "id": 3087,
        "name": "Chitipa district",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "CT"
      },
      {
        "id": 3097,
        "name": "Dedza District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "DE"
      },
      {
        "id": 3090,
        "name": "Dowa District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "DO"
      },
      {
        "id": 3091,
        "name": "Karonga District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "KR"
      },
      {
        "id": 3094,
        "name": "Kasungu District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "KS"
      },
      {
        "id": 3093,
        "name": "Likoma District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "LK"
      },
      {
        "id": 3101,
        "name": "Lilongwe District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "LI"
      },
      {
        "id": 3082,
        "name": "Machinga District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "MH"
      },
      {
        "id": 3110,
        "name": "Mangochi District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "MG"
      },
      {
        "id": 3099,
        "name": "Mchinji District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "MC"
      },
      {
        "id": 3103,
        "name": "Mulanje District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "MU"
      },
      {
        "id": 3084,
        "name": "Mwanza District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "MW"
      },
      {
        "id": 3104,
        "name": "Mzimba District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "MZ"
      },
      {
        "id": 3095,
        "name": "Nkhata Bay District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "NB"
      },
      {
        "id": 3100,
        "name": "Nkhotakota District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "NK"
      },
      {
        "id": 3105,
        "name": "Northern Region",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "N"
      },
      {
        "id": 3085,
        "name": "Nsanje District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "NS"
      },
      {
        "id": 3088,
        "name": "Ntcheu District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "NU"
      },
      {
        "id": 3111,
        "name": "Ntchisi District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "NI"
      },
      {
        "id": 3108,
        "name": "Phalombe District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "PH"
      },
      {
        "id": 3089,
        "name": "Rumphi District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "RU"
      },
      {
        "id": 3086,
        "name": "Salima District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "SA"
      },
      {
        "id": 3106,
        "name": "Southern Region",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "S"
      },
      {
        "id": 3098,
        "name": "Thyolo District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "TH"
      },
      {
        "id": 3083,
        "name": "Zomba District",
        "country_id": 131,
        "country_code": "MW",
        "state_code": "ZO"
      },
      {
        "id": 1950,
        "name": "Johor",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "01"
      },
      {
        "id": 1947,
        "name": "Kedah",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "02"
      },
      {
        "id": 1946,
        "name": "Kelantan",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "03"
      },
      {
        "id": 1949,
        "name": "Kuala Lumpur",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "14"
      },
      {
        "id": 1935,
        "name": "Labuan",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "15"
      },
      {
        "id": 1941,
        "name": "Melaka",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "04"
      },
      {
        "id": 1948,
        "name": "Negeri Sembilan",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "05"
      },
      {
        "id": 1940,
        "name": "Pahang",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "06"
      },
      {
        "id": 1939,
        "name": "Penang",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "07"
      },
      {
        "id": 1943,
        "name": "Perak",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "08"
      },
      {
        "id": 1938,
        "name": "Perlis",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "09"
      },
      {
        "id": 1945,
        "name": "Putrajaya",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "16"
      },
      {
        "id": 1936,
        "name": "Sabah",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "12"
      },
      {
        "id": 1937,
        "name": "Sarawak",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "13"
      },
      {
        "id": 1944,
        "name": "Selangor",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "10"
      },
      {
        "id": 1942,
        "name": "Terengganu",
        "country_id": 132,
        "country_code": "MY",
        "state_code": "11"
      },
      {
        "id": 2594,
        "name": "Addu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "01"
      },
      {
        "id": 2587,
        "name": "Alif Alif Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "02"
      },
      {
        "id": 2600,
        "name": "Alif Dhaal Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "00"
      },
      {
        "id": 2604,
        "name": "Central Province",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "CE"
      },
      {
        "id": 2590,
        "name": "Dhaalu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "17"
      },
      {
        "id": 2599,
        "name": "Faafu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "14"
      },
      {
        "id": 2598,
        "name": "Gaafu Alif Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "27"
      },
      {
        "id": 2603,
        "name": "Gaafu Dhaalu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "28"
      },
      {
        "id": 2595,
        "name": "Gnaviyani Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "29"
      },
      {
        "id": 2586,
        "name": "Haa Alif Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "07"
      },
      {
        "id": 2597,
        "name": "Haa Dhaalu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "23"
      },
      {
        "id": 2596,
        "name": "Kaafu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "26"
      },
      {
        "id": 2601,
        "name": "Laamu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "05"
      },
      {
        "id": 2607,
        "name": "Lhaviyani Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "03"
      },
      {
        "id": 2609,
        "name": "Malé",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "MLE"
      },
      {
        "id": 2608,
        "name": "Meemu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "12"
      },
      {
        "id": 2592,
        "name": "Noonu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "25"
      },
      {
        "id": 2589,
        "name": "North Central Province",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "NC"
      },
      {
        "id": 2588,
        "name": "North Province",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "NO"
      },
      {
        "id": 2602,
        "name": "Raa Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "13"
      },
      {
        "id": 2585,
        "name": "Shaviyani Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "24"
      },
      {
        "id": 2606,
        "name": "South Central Province",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "SC"
      },
      {
        "id": 2605,
        "name": "South Province",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "SU"
      },
      {
        "id": 2591,
        "name": "Thaa Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "08"
      },
      {
        "id": 2593,
        "name": "Upper South Province",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "US"
      },
      {
        "id": 2584,
        "name": "Vaavu Atoll",
        "country_id": 133,
        "country_code": "MV",
        "state_code": "04"
      },
      {
        "id": 253,
        "name": "Bamako",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "BKO"
      },
      {
        "id": 258,
        "name": "Gao Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "7"
      },
      {
        "id": 252,
        "name": "Kayes Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "1"
      },
      {
        "id": 257,
        "name": "Kidal Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "8"
      },
      {
        "id": 250,
        "name": "Koulikoro Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "2"
      },
      {
        "id": 251,
        "name": "Ménaka Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "9"
      },
      {
        "id": 255,
        "name": "Mopti Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "5"
      },
      {
        "id": 249,
        "name": "Ségou Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "4"
      },
      {
        "id": 254,
        "name": "Sikasso Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "3"
      },
      {
        "id": 256,
        "name": "Taoudénit Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "10"
      },
      {
        "id": 248,
        "name": "Tombouctou Region",
        "country_id": 134,
        "country_code": "ML",
        "state_code": "6"
      },
      {
        "id": 110,
        "name": "Attard",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "01"
      },
      {
        "id": 108,
        "name": "Balzan",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "02"
      },
      {
        "id": 107,
        "name": "Birgu",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "03"
      },
      {
        "id": 97,
        "name": "Birkirkara",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "04"
      },
      {
        "id": 88,
        "name": "Birżebbuġa",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "05"
      },
      {
        "id": 138,
        "name": "Cospicua",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "06"
      },
      {
        "id": 117,
        "name": "Dingli",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "07"
      },
      {
        "id": 129,
        "name": "Fgura",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "08"
      },
      {
        "id": 84,
        "name": "Floriana",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "09"
      },
      {
        "id": 134,
        "name": "Fontana",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "10"
      },
      {
        "id": 130,
        "name": "Għajnsielem",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "13"
      },
      {
        "id": 92,
        "name": "Għarb",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "14"
      },
      {
        "id": 120,
        "name": "Għargħur",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "15"
      },
      {
        "id": 106,
        "name": "Għasri",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "16"
      },
      {
        "id": 124,
        "name": "Għaxaq",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "17"
      },
      {
        "id": 118,
        "name": "Gudja",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "11"
      },
      {
        "id": 113,
        "name": "Gżira",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "12"
      },
      {
        "id": 105,
        "name": "Ħamrun",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "18"
      },
      {
        "id": 93,
        "name": "Iklin",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "19"
      },
      {
        "id": 99,
        "name": "Kalkara",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "21"
      },
      {
        "id": 91,
        "name": "Kerċem",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "22"
      },
      {
        "id": 82,
        "name": "Kirkop",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "23"
      },
      {
        "id": 126,
        "name": "Lija",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "24"
      },
      {
        "id": 77,
        "name": "Luqa",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "25"
      },
      {
        "id": 128,
        "name": "Marsa",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "26"
      },
      {
        "id": 137,
        "name": "Marsaskala",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "27"
      },
      {
        "id": 78,
        "name": "Marsaxlokk",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "28"
      },
      {
        "id": 89,
        "name": "Mdina",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "29"
      },
      {
        "id": 102,
        "name": "Mellieħa",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "30"
      },
      {
        "id": 109,
        "name": "Mġarr",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "31"
      },
      {
        "id": 140,
        "name": "Mosta",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "32"
      },
      {
        "id": 74,
        "name": "Mqabba",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "33"
      },
      {
        "id": 96,
        "name": "Msida",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "34"
      },
      {
        "id": 131,
        "name": "Mtarfa",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "35"
      },
      {
        "id": 132,
        "name": "Munxar",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "36"
      },
      {
        "id": 133,
        "name": "Nadur",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "37"
      },
      {
        "id": 112,
        "name": "Naxxar",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "38"
      },
      {
        "id": 115,
        "name": "Paola",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "39"
      },
      {
        "id": 125,
        "name": "Pembroke",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "40"
      },
      {
        "id": 127,
        "name": "Pietà",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "41"
      },
      {
        "id": 79,
        "name": "Qala",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "42"
      },
      {
        "id": 119,
        "name": "Qormi",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "43"
      },
      {
        "id": 111,
        "name": "Qrendi",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "44"
      },
      {
        "id": 83,
        "name": "Rabat",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "46"
      },
      {
        "id": 87,
        "name": "Saint Lawrence",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "50"
      },
      {
        "id": 75,
        "name": "San Ġwann",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "49"
      },
      {
        "id": 116,
        "name": "Sannat",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "52"
      },
      {
        "id": 94,
        "name": "Santa Luċija",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "53"
      },
      {
        "id": 90,
        "name": "Santa Venera",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "54"
      },
      {
        "id": 136,
        "name": "Senglea",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "20"
      },
      {
        "id": 98,
        "name": "Siġġiewi",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "55"
      },
      {
        "id": 104,
        "name": "Sliema",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "56"
      },
      {
        "id": 100,
        "name": "St. Julian's",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "48"
      },
      {
        "id": 139,
        "name": "St. Paul's Bay",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "51"
      },
      {
        "id": 86,
        "name": "Swieqi",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "57"
      },
      {
        "id": 122,
        "name": "Ta' Xbiex",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "58"
      },
      {
        "id": 103,
        "name": "Tarxien",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "59"
      },
      {
        "id": 95,
        "name": "Valletta",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "60"
      },
      {
        "id": 101,
        "name": "Victoria",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "45"
      },
      {
        "id": 114,
        "name": "Xagħra",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "61"
      },
      {
        "id": 121,
        "name": "Xewkija",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "62"
      },
      {
        "id": 81,
        "name": "Xgħajra",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "63"
      },
      {
        "id": 123,
        "name": "Żabbar",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "64"
      },
      {
        "id": 85,
        "name": "Żebbuġ Gozo",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "65"
      },
      {
        "id": 80,
        "name": "Żebbuġ Malta",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "66"
      },
      {
        "id": 135,
        "name": "Żejtun",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "67"
      },
      {
        "id": 76,
        "name": "Żurrieq",
        "country_id": 135,
        "country_code": "MT",
        "state_code": "68"
      },
      {
        "id": 2574,
        "name": "Ralik Chain",
        "country_id": 137,
        "country_code": "MH",
        "state_code": "L"
      },
      {
        "id": 2573,
        "name": "Ratak Chain",
        "country_id": 137,
        "country_code": "MH",
        "state_code": "T"
      },
      {
        "id": 3344,
        "name": "Adrar Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "07"
      },
      {
        "id": 3349,
        "name": "Assaba Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "03"
      },
      {
        "id": 3339,
        "name": "Brakna Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "05"
      },
      {
        "id": 3346,
        "name": "Dakhlet Nouadhibou",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "08"
      },
      {
        "id": 3341,
        "name": "Gorgol Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "04"
      },
      {
        "id": 3350,
        "name": "Guidimaka Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "10"
      },
      {
        "id": 3338,
        "name": "Hodh Ech Chargui Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "01"
      },
      {
        "id": 3351,
        "name": "Hodh El Gharbi Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "02"
      },
      {
        "id": 3342,
        "name": "Inchiri Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "12"
      },
      {
        "id": 3343,
        "name": "Nouakchott-Nord Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "14"
      },
      {
        "id": 3352,
        "name": "Nouakchott-Ouest Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "13"
      },
      {
        "id": 3347,
        "name": "Nouakchott-Sud Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "15"
      },
      {
        "id": 3345,
        "name": "Tagant Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "09"
      },
      {
        "id": 3340,
        "name": "Tiris Zemmour Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "11"
      },
      {
        "id": 3348,
        "name": "Trarza Region",
        "country_id": 139,
        "country_code": "MR",
        "state_code": "06"
      },
      {
        "id": 3248,
        "name": "Agaléga",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "AG"
      },
      {
        "id": 3262,
        "name": "Beau Bassin-Rose Hill",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "BR"
      },
      {
        "id": 3251,
        "name": "Cargados Carajos",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "CC"
      },
      {
        "id": 3255,
        "name": "Curepipe",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "CU"
      },
      {
        "id": 3254,
        "name": "Flacq District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "FL"
      },
      {
        "id": 3264,
        "name": "Grand Port District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "GP"
      },
      {
        "id": 3253,
        "name": "Moka District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "MO"
      },
      {
        "id": 3250,
        "name": "Pamplemousses District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "PA"
      },
      {
        "id": 3263,
        "name": "Plaines Wilhems District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "PW"
      },
      {
        "id": 3256,
        "name": "Port Louis",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "PU"
      },
      {
        "id": 3260,
        "name": "Port Louis District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "PL"
      },
      {
        "id": 3258,
        "name": "Quatre Bornes",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "QB"
      },
      {
        "id": 3261,
        "name": "Rivière du Rempart District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "RR"
      },
      {
        "id": 3259,
        "name": "Rivière Noire District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "BL"
      },
      {
        "id": 3249,
        "name": "Rodrigues",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "RO"
      },
      {
        "id": 3257,
        "name": "Savanne District",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "SA"
      },
      {
        "id": 3252,
        "name": "Vacoas-Phoenix",
        "country_id": 140,
        "country_code": "MU",
        "state_code": "VP"
      },
      {
        "id": 3456,
        "name": "Aguascalientes",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "AGU"
      },
      {
        "id": 3457,
        "name": "Baja California",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "BCN"
      },
      {
        "id": 3460,
        "name": "Baja California Sur",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "BCS"
      },
      {
        "id": 3475,
        "name": "Campeche",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "CAM"
      },
      {
        "id": 3451,
        "name": "Chiapas",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "CHP"
      },
      {
        "id": 3447,
        "name": "Chihuahua",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "CHH"
      },
      {
        "id": 3471,
        "name": "Coahuila",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "COA"
      },
      {
        "id": 3472,
        "name": "Colima",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "COL"
      },
      {
        "id": 3453,
        "name": "Durango",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "DUR"
      },
      {
        "id": 3469,
        "name": "Guanajuato",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "GUA"
      },
      {
        "id": 3459,
        "name": "Guerrero",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "GRO"
      },
      {
        "id": 3470,
        "name": "Hidalgo",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "HID"
      },
      {
        "id": 3450,
        "name": "México",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "MEX"
      },
      {
        "id": 3473,
        "name": "Mexico City",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "CMX"
      },
      {
        "id": 3474,
        "name": "Michoacán",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "MIC"
      },
      {
        "id": 3465,
        "name": "Morelos",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "MOR"
      },
      {
        "id": 3477,
        "name": "Nayarit",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "NAY"
      },
      {
        "id": 3452,
        "name": "Nuevo León",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "NLE"
      },
      {
        "id": 3448,
        "name": "Oaxaca",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "OAX"
      },
      {
        "id": 3476,
        "name": "Puebla",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "PUE"
      },
      {
        "id": 3455,
        "name": "Querétaro",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "QUE"
      },
      {
        "id": 3467,
        "name": "Quintana Roo",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "ROO"
      },
      {
        "id": 3461,
        "name": "San Luis Potosí",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "SLP"
      },
      {
        "id": 3449,
        "name": "Sinaloa",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "SIN"
      },
      {
        "id": 3468,
        "name": "Sonora",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "SON"
      },
      {
        "id": 3454,
        "name": "Tabasco",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "TAB"
      },
      {
        "id": 3463,
        "name": "Tamaulipas",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "TAM"
      },
      {
        "id": 3458,
        "name": "Tlaxcala",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "TLA"
      },
      {
        "id": 3464,
        "name": "Veracruz",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "VER"
      },
      {
        "id": 3466,
        "name": "Yucatán",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "YUC"
      },
      {
        "id": 3462,
        "name": "Zacatecas",
        "country_id": 142,
        "country_code": "MX",
        "state_code": "ZAC"
      },
      {
        "id": 2580,
        "name": "Chuuk State",
        "country_id": 143,
        "country_code": "FM",
        "state_code": "TRK"
      },
      {
        "id": 2583,
        "name": "Kosrae State",
        "country_id": 143,
        "country_code": "FM",
        "state_code": "KSA"
      },
      {
        "id": 2581,
        "name": "Pohnpei State",
        "country_id": 143,
        "country_code": "FM",
        "state_code": "PNI"
      },
      {
        "id": 2582,
        "name": "Yap State",
        "country_id": 143,
        "country_code": "FM",
        "state_code": "YAP"
      },
      {
        "id": 4368,
        "name": "Anenii Noi District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "AN"
      },
      {
        "id": 4393,
        "name": "Bălți Municipality",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "BA"
      },
      {
        "id": 4379,
        "name": "Basarabeasca District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "BS"
      },
      {
        "id": 4362,
        "name": "Bender Municipality",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "BD"
      },
      {
        "id": 4375,
        "name": "Briceni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "BR"
      },
      {
        "id": 4391,
        "name": "Cahul District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "CA"
      },
      {
        "id": 4366,
        "name": "Călărași District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "CL"
      },
      {
        "id": 4380,
        "name": "Cantemir District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "CT"
      },
      {
        "id": 4365,
        "name": "Căușeni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "CS"
      },
      {
        "id": 4373,
        "name": "Chișinău Municipality",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "CU"
      },
      {
        "id": 4360,
        "name": "Cimișlia District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "CM"
      },
      {
        "id": 4390,
        "name": "Criuleni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "CR"
      },
      {
        "id": 4384,
        "name": "Dondușeni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "DO"
      },
      {
        "id": 4392,
        "name": "Drochia District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "DR"
      },
      {
        "id": 4383,
        "name": "Dubăsari District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "DU"
      },
      {
        "id": 4387,
        "name": "Edineț District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "ED"
      },
      {
        "id": 4381,
        "name": "Fălești District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "FA"
      },
      {
        "id": 4370,
        "name": "Florești District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "FL"
      },
      {
        "id": 4385,
        "name": "Gagauzia",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "GA"
      },
      {
        "id": 4367,
        "name": "Glodeni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "GL"
      },
      {
        "id": 4382,
        "name": "Hîncești District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "HI"
      },
      {
        "id": 4369,
        "name": "Ialoveni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "IA"
      },
      {
        "id": 4363,
        "name": "Nisporeni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "NI"
      },
      {
        "id": 4389,
        "name": "Ocnița District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "OC"
      },
      {
        "id": 4361,
        "name": "Orhei District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "OR"
      },
      {
        "id": 4394,
        "name": "Rezina District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "RE"
      },
      {
        "id": 4376,
        "name": "Rîșcani District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "RI"
      },
      {
        "id": 4364,
        "name": "Sîngerei District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "SI"
      },
      {
        "id": 4388,
        "name": "Șoldănești District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "SD"
      },
      {
        "id": 4374,
        "name": "Soroca District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "SO"
      },
      {
        "id": 4378,
        "name": "Ștefan Vodă District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "SV"
      },
      {
        "id": 4377,
        "name": "Strășeni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "ST"
      },
      {
        "id": 4372,
        "name": "Taraclia District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "TA"
      },
      {
        "id": 4371,
        "name": "Telenești District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "TE"
      },
      {
        "id": 4395,
        "name": "Transnistria autonomous territorial unit",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "SN"
      },
      {
        "id": 4386,
        "name": "Ungheni District",
        "country_id": 144,
        "country_code": "MD",
        "state_code": "UN"
      },
      {
        "id": 1973,
        "name": "Arkhangai Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "073"
      },
      {
        "id": 1969,
        "name": "Bayan-Ölgii Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "071"
      },
      {
        "id": 1976,
        "name": "Bayankhongor Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "069"
      },
      {
        "id": 1961,
        "name": "Bulgan Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "067"
      },
      {
        "id": 1962,
        "name": "Darkhan-Uul Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "037"
      },
      {
        "id": 1963,
        "name": "Dornod Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "061"
      },
      {
        "id": 1981,
        "name": "Dornogovi Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "063"
      },
      {
        "id": 1970,
        "name": "Dundgovi Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "059"
      },
      {
        "id": 1972,
        "name": "Govi-Altai Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "065"
      },
      {
        "id": 1978,
        "name": "Govisümber Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "064"
      },
      {
        "id": 1974,
        "name": "Khentii Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "039"
      },
      {
        "id": 1964,
        "name": "Khovd Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "043"
      },
      {
        "id": 1975,
        "name": "Khövsgöl Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "041"
      },
      {
        "id": 1967,
        "name": "Ömnögovi Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "053"
      },
      {
        "id": 1966,
        "name": "Orkhon Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "035"
      },
      {
        "id": 1965,
        "name": "Övörkhangai Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "055"
      },
      {
        "id": 1980,
        "name": "Selenge Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "049"
      },
      {
        "id": 1977,
        "name": "Sükhbaatar Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "051"
      },
      {
        "id": 1968,
        "name": "Töv Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "047"
      },
      {
        "id": 1971,
        "name": "Uvs Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "046"
      },
      {
        "id": 1979,
        "name": "Zavkhan Province",
        "country_id": 146,
        "country_code": "MN",
        "state_code": "057"
      },
      {
        "id": 23,
        "name": "Andrijevica Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "01"
      },
      {
        "id": 13,
        "name": "Bar Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "02"
      },
      {
        "id": 21,
        "name": "Berane Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "03"
      },
      {
        "id": 25,
        "name": "Bijelo Polje Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "04"
      },
      {
        "id": 30,
        "name": "Budva Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "05"
      },
      {
        "id": 14,
        "name": "Danilovgrad Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "07"
      },
      {
        "id": 24,
        "name": "Gusinje Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "22"
      },
      {
        "id": 31,
        "name": "Kolašin Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "09"
      },
      {
        "id": 26,
        "name": "Kotor Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "10"
      },
      {
        "id": 22,
        "name": "Mojkovac Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "11"
      },
      {
        "id": 17,
        "name": "Nikšić Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "12"
      },
      {
        "id": 28,
        "name": "Old Royal Capital Cetinje",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "06"
      },
      {
        "id": 12,
        "name": "Petnjica Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "23"
      },
      {
        "id": 19,
        "name": "Plav Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "13"
      },
      {
        "id": 20,
        "name": "Pljevlja Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "14"
      },
      {
        "id": 16,
        "name": "Plužine Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "15"
      },
      {
        "id": 27,
        "name": "Podgorica Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "16"
      },
      {
        "id": 15,
        "name": "Rožaje Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "17"
      },
      {
        "id": 18,
        "name": "Šavnik Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "18"
      },
      {
        "id": 29,
        "name": "Tivat Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "19"
      },
      {
        "id": 33,
        "name": "Ulcinj Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "20"
      },
      {
        "id": 32,
        "name": "Žabljak Municipality",
        "country_id": 147,
        "country_code": "ME",
        "state_code": "21"
      },
      {
        "id": 3320,
        "name": "Al Haouz Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "HAO"
      },
      {
        "id": 3267,
        "name": "Al Hoceïma Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "HOC"
      },
      {
        "id": 3266,
        "name": "Aousserd Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "AOU"
      },
      {
        "id": 3297,
        "name": "Assa-Zag Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "ASZ"
      },
      {
        "id": 3321,
        "name": "Azilal Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "AZI"
      },
      {
        "id": 3304,
        "name": "Ben Slimane Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "BES"
      },
      {
        "id": 3278,
        "name": "Béni Mellal-Khénifra",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "05"
      },
      {
        "id": 3272,
        "name": "Béni-Mellal Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "BEM"
      },
      {
        "id": 3285,
        "name": "Berkane Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "BER"
      },
      {
        "id": 3275,
        "name": "Boujdour Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "BOD"
      },
      {
        "id": 3270,
        "name": "Boulemane Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "BOM"
      },
      {
        "id": 3303,
        "name": "Casablanca-Settat",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "06"
      },
      {
        "id": 3310,
        "name": "Chefchaouen Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "CHE"
      },
      {
        "id": 3274,
        "name": "Chichaoua Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "CHI"
      },
      {
        "id": 3306,
        "name": "Dakhla-Oued Ed-Dahab",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "12"
      },
      {
        "id": 3290,
        "name": "Drâa-Tafilalet",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "08"
      },
      {
        "id": 3291,
        "name": "El Hajeb Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "HAJ"
      },
      {
        "id": 3280,
        "name": "El Jadida Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "JDI"
      },
      {
        "id": 3299,
        "name": "Errachidia Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "ERR"
      },
      {
        "id": 3292,
        "name": "Es Semara Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "ESM"
      },
      {
        "id": 3316,
        "name": "Essaouira Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "ESI"
      },
      {
        "id": 3300,
        "name": "Fahs Anjra Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "FAH"
      },
      {
        "id": 3313,
        "name": "Fès-Meknès",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "03"
      },
      {
        "id": 3301,
        "name": "Figuig Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "FIG"
      },
      {
        "id": 3265,
        "name": "Guelmim Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "GUE"
      },
      {
        "id": 3305,
        "name": "Guelmim-Oued Noun",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "10"
      },
      {
        "id": 3325,
        "name": "Ifrane Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "IFR"
      },
      {
        "id": 3294,
        "name": "Inezgane-Aït Melloul Prefecture",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "INE"
      },
      {
        "id": 3307,
        "name": "Jerada Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "JRA"
      },
      {
        "id": 3309,
        "name": "Kelaat Sraghna Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "KES"
      },
      {
        "id": 3308,
        "name": "Kénitra Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "KEN"
      },
      {
        "id": 3276,
        "name": "Khémisset Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "KHE"
      },
      {
        "id": 3317,
        "name": "Khénifra Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "KHN"
      },
      {
        "id": 3326,
        "name": "Khouribga Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "KHO"
      },
      {
        "id": 3293,
        "name": "Laâyoune Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "LAA"
      },
      {
        "id": 3298,
        "name": "Laâyoune-Sakia El Hamra",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "11"
      },
      {
        "id": 3268,
        "name": "Larache Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "LAR"
      },
      {
        "id": 3288,
        "name": "Marrakesh-Safi",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "07"
      },
      {
        "id": 3284,
        "name": "Mediouna Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "MED"
      },
      {
        "id": 3315,
        "name": "Moulay Yacoub Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "MOU"
      },
      {
        "id": 3281,
        "name": "Nador Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "NAD"
      },
      {
        "id": 3287,
        "name": "Nouaceur Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "NOU"
      },
      {
        "id": 3271,
        "name": "Oriental",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "02"
      },
      {
        "id": 3269,
        "name": "Ouarzazate Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "OUA"
      },
      {
        "id": 3319,
        "name": "Oued Ed-Dahab Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "OUD"
      },
      {
        "id": 3311,
        "name": "Safi Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "SAF"
      },
      {
        "id": 3289,
        "name": "Sefrou Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "SEF"
      },
      {
        "id": 3282,
        "name": "Settat Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "SET"
      },
      {
        "id": 3302,
        "name": "Shtouka Ait Baha Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "CHT"
      },
      {
        "id": 3279,
        "name": "Sidi Kacem Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "SIK"
      },
      {
        "id": 3273,
        "name": "Sidi Youssef Ben Ali",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "SYB"
      },
      {
        "id": 3295,
        "name": "Souss-Massa",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "09"
      },
      {
        "id": 3286,
        "name": "Tan-Tan Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "TNT"
      },
      {
        "id": 3324,
        "name": "Tanger-Tétouan-Al Hoceïma",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "01"
      },
      {
        "id": 3323,
        "name": "Taounate Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "TAO"
      },
      {
        "id": 3322,
        "name": "Taourirt Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "TAI"
      },
      {
        "id": 3314,
        "name": "Taroudant Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "TAR"
      },
      {
        "id": 3312,
        "name": "Tata Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "TAT"
      },
      {
        "id": 3296,
        "name": "Taza Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "TAZ"
      },
      {
        "id": 3318,
        "name": "Tétouan Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "TET"
      },
      {
        "id": 3277,
        "name": "Tiznit Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "TIZ"
      },
      {
        "id": 3283,
        "name": "Zagora Province",
        "country_id": 149,
        "country_code": "MA",
        "state_code": "ZAG"
      },
      {
        "id": 3327,
        "name": "Cabo Delgado Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "P"
      },
      {
        "id": 3329,
        "name": "Gaza Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "G"
      },
      {
        "id": 3330,
        "name": "Inhambane Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "I"
      },
      {
        "id": 3337,
        "name": "Manica Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "B"
      },
      {
        "id": 3335,
        "name": "Maputo",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "MPM"
      },
      {
        "id": 3332,
        "name": "Maputo Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "L"
      },
      {
        "id": 3336,
        "name": "Nampula Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "N"
      },
      {
        "id": 3333,
        "name": "Niassa Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "A"
      },
      {
        "id": 3331,
        "name": "Sofala Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "S"
      },
      {
        "id": 3334,
        "name": "Tete Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "T"
      },
      {
        "id": 3328,
        "name": "Zambezia Province",
        "country_id": 150,
        "country_code": "MZ",
        "state_code": "Q"
      },
      {
        "id": 2142,
        "name": "Ayeyarwady Region",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "07"
      },
      {
        "id": 2141,
        "name": "Bago",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "02"
      },
      {
        "id": 2137,
        "name": "Chin State",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "14"
      },
      {
        "id": 2143,
        "name": "Kachin State",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "11"
      },
      {
        "id": 2144,
        "name": "Kayah State",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "12"
      },
      {
        "id": 2133,
        "name": "Kayin State",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "13"
      },
      {
        "id": 2136,
        "name": "Magway Region",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "03"
      },
      {
        "id": 2134,
        "name": "Mandalay Region",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "04"
      },
      {
        "id": 2147,
        "name": "Mon State",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "15"
      },
      {
        "id": 2146,
        "name": "Naypyidaw Union Territory",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "18"
      },
      {
        "id": 2138,
        "name": "Rakhine State",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "16"
      },
      {
        "id": 2145,
        "name": "Sagaing Region",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "01"
      },
      {
        "id": 2139,
        "name": "Shan State",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "17"
      },
      {
        "id": 2140,
        "name": "Tanintharyi Region",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "05"
      },
      {
        "id": 2135,
        "name": "Yangon Region",
        "country_id": 151,
        "country_code": "MM",
        "state_code": "06"
      },
      {
        "id": 43,
        "name": "Erongo Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "ER"
      },
      {
        "id": 38,
        "name": "Hardap Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "HA"
      },
      {
        "id": 45,
        "name": "Karas Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "KA"
      },
      {
        "id": 36,
        "name": "Kavango East Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "KE"
      },
      {
        "id": 35,
        "name": "Kavango West Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "KW"
      },
      {
        "id": 44,
        "name": "Khomas Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "KH"
      },
      {
        "id": 34,
        "name": "Kunene Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "KU"
      },
      {
        "id": 40,
        "name": "Ohangwena Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "OW"
      },
      {
        "id": 41,
        "name": "Omaheke Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "OH"
      },
      {
        "id": 39,
        "name": "Omusati Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "OS"
      },
      {
        "id": 37,
        "name": "Oshana Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "ON"
      },
      {
        "id": 42,
        "name": "Oshikoto Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "OT"
      },
      {
        "id": 46,
        "name": "Otjozondjupa Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "OD"
      },
      {
        "id": 47,
        "name": "Zambezi Region",
        "country_id": 152,
        "country_code": "NA",
        "state_code": "CA"
      },
      {
        "id": 4656,
        "name": "Aiwo District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "01"
      },
      {
        "id": 4658,
        "name": "Anabar District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "02"
      },
      {
        "id": 4667,
        "name": "Anetan District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "03"
      },
      {
        "id": 4663,
        "name": "Anibare District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "04"
      },
      {
        "id": 4660,
        "name": "Baiti District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "05"
      },
      {
        "id": 4665,
        "name": "Boe District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "06"
      },
      {
        "id": 4662,
        "name": "Buada District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "07"
      },
      {
        "id": 4666,
        "name": "Denigomodu District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "08"
      },
      {
        "id": 4654,
        "name": "Ewa District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "09"
      },
      {
        "id": 4661,
        "name": "Ijuw District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "10"
      },
      {
        "id": 4657,
        "name": "Meneng District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "11"
      },
      {
        "id": 4659,
        "name": "Nibok District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "12"
      },
      {
        "id": 4655,
        "name": "Uaboe District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "13"
      },
      {
        "id": 4664,
        "name": "Yaren District",
        "country_id": 153,
        "country_code": "NR",
        "state_code": "14"
      },
      {
        "id": 2082,
        "name": "Bagmati Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "BA"
      },
      {
        "id": 2071,
        "name": "Bheri Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "BH"
      },
      {
        "id": 2073,
        "name": "Central Region",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "1"
      },
      {
        "id": 2080,
        "name": "Dhaulagiri Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "DH"
      },
      {
        "id": 2069,
        "name": "Eastern Development Region",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "4"
      },
      {
        "id": 2068,
        "name": "Far-Western Development Region",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "5"
      },
      {
        "id": 2081,
        "name": "Gandaki Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "GA"
      },
      {
        "id": 2076,
        "name": "Janakpur Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "JA"
      },
      {
        "id": 2079,
        "name": "Karnali Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "KA"
      },
      {
        "id": 2072,
        "name": "Kosi Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "KO"
      },
      {
        "id": 2074,
        "name": "Lumbini Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "LU"
      },
      {
        "id": 2083,
        "name": "Mahakali Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "MA"
      },
      {
        "id": 2070,
        "name": "Mechi Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "ME"
      },
      {
        "id": 2066,
        "name": "Mid-Western Region",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "2"
      },
      {
        "id": 2075,
        "name": "Narayani Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "NA"
      },
      {
        "id": 2077,
        "name": "Rapti Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "RA"
      },
      {
        "id": 2084,
        "name": "Sagarmatha Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "SA"
      },
      {
        "id": 2078,
        "name": "Seti Zone",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "SE"
      },
      {
        "id": 2067,
        "name": "Western Region",
        "country_id": 154,
        "country_code": "NP",
        "state_code": "3"
      },
      {
        "id": 2624,
        "name": "Bonaire",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "BQ1"
      },
      {
        "id": 2613,
        "name": "Drenthe",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "DR"
      },
      {
        "id": 2619,
        "name": "Flevoland",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "FL"
      },
      {
        "id": 2622,
        "name": "Friesland",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "FR"
      },
      {
        "id": 2611,
        "name": "Gelderland",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "GE"
      },
      {
        "id": 2617,
        "name": "Groningen",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "GR"
      },
      {
        "id": 2615,
        "name": "Limburg",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "LI"
      },
      {
        "id": 2623,
        "name": "North Brabant",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "NB"
      },
      {
        "id": 2612,
        "name": "North Holland",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "NH"
      },
      {
        "id": 2618,
        "name": "Overijssel",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "OV"
      },
      {
        "id": 2621,
        "name": "Saba",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "BQ2"
      },
      {
        "id": 2616,
        "name": "Sint Eustatius",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "BQ3"
      },
      {
        "id": 2614,
        "name": "South Holland",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "ZH"
      },
      {
        "id": 2610,
        "name": "Utrecht",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "UT"
      },
      {
        "id": 2620,
        "name": "Zeeland",
        "country_id": 156,
        "country_code": "NL",
        "state_code": "ZE"
      },
      {
        "id": 4072,
        "name": "Auckland Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "AUK"
      },
      {
        "id": 4074,
        "name": "Bay of Plenty Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "BOP"
      },
      {
        "id": 4066,
        "name": "Canterbury Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "CAN"
      },
      {
        "id": 4067,
        "name": "Chatham Islands",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "CIT"
      },
      {
        "id": 4068,
        "name": "Gisborne District",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "GIS"
      },
      {
        "id": 4075,
        "name": "Hawke's Bay Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "HKB"
      },
      {
        "id": 4060,
        "name": "Manawatu-Wanganui Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "MWT"
      },
      {
        "id": 4063,
        "name": "Marlborough Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "MBH"
      },
      {
        "id": 4070,
        "name": "Nelson Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "NSN"
      },
      {
        "id": 4059,
        "name": "Northland Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "NTL"
      },
      {
        "id": 4062,
        "name": "Otago Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "OTA"
      },
      {
        "id": 4071,
        "name": "Southland Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "STL"
      },
      {
        "id": 4069,
        "name": "Taranaki Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "TKI"
      },
      {
        "id": 4073,
        "name": "Tasman District",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "TAS"
      },
      {
        "id": 4061,
        "name": "Waikato Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "WKO"
      },
      {
        "id": 4065,
        "name": "Wellington Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "WGN"
      },
      {
        "id": 4064,
        "name": "West Coast Region",
        "country_id": 158,
        "country_code": "NZ",
        "state_code": "WTC"
      },
      {
        "id": 946,
        "name": "Boaco Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "BO"
      },
      {
        "id": 950,
        "name": "Carazo Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "CA"
      },
      {
        "id": 954,
        "name": "Chinandega Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "CI"
      },
      {
        "id": 940,
        "name": "Chontales Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "CO"
      },
      {
        "id": 945,
        "name": "Estelí Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "ES"
      },
      {
        "id": 943,
        "name": "Granada Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "GR"
      },
      {
        "id": 955,
        "name": "Jinotega Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "JI"
      },
      {
        "id": 944,
        "name": "León Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "LE"
      },
      {
        "id": 948,
        "name": "Madriz Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "MD"
      },
      {
        "id": 941,
        "name": "Managua Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "MN"
      },
      {
        "id": 953,
        "name": "Masaya Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "MS"
      },
      {
        "id": 947,
        "name": "Matagalpa Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "MT"
      },
      {
        "id": 951,
        "name": "North Caribbean Coast Autonomous Region",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "AN"
      },
      {
        "id": 949,
        "name": "Río San Juan Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "SJ"
      },
      {
        "id": 942,
        "name": "Rivas Department",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "RI"
      },
      {
        "id": 952,
        "name": "South Caribbean Coast Autonomous Region",
        "country_id": 159,
        "country_code": "NI",
        "state_code": "AS"
      },
      {
        "id": 71,
        "name": "Agadez Region",
        "country_id": 160,
        "country_code": "NE",
        "state_code": "1"
      },
      {
        "id": 72,
        "name": "Diffa Region",
        "country_id": 160,
        "country_code": "NE",
        "state_code": "2"
      },
      {
        "id": 68,
        "name": "Dosso Region",
        "country_id": 160,
        "country_code": "NE",
        "state_code": "3"
      },
      {
        "id": 70,
        "name": "Maradi Region",
        "country_id": 160,
        "country_code": "NE",
        "state_code": "4"
      },
      {
        "id": 73,
        "name": "Tahoua Region",
        "country_id": 160,
        "country_code": "NE",
        "state_code": "5"
      },
      {
        "id": 67,
        "name": "Tillabéri Region",
        "country_id": 160,
        "country_code": "NE",
        "state_code": "6"
      },
      {
        "id": 69,
        "name": "Zinder Region",
        "country_id": 160,
        "country_code": "NE",
        "state_code": "7"
      },
      {
        "id": 303,
        "name": "Abia State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "AB"
      },
      {
        "id": 320,
        "name": "Adamawa State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "AD"
      },
      {
        "id": 304,
        "name": "Akwa Ibom State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "AK"
      },
      {
        "id": 315,
        "name": "Anambra State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "AN"
      },
      {
        "id": 312,
        "name": "Bauchi State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "BA"
      },
      {
        "id": 305,
        "name": "Bayelsa State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "BY"
      },
      {
        "id": 291,
        "name": "Benue State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "BE"
      },
      {
        "id": 307,
        "name": "Borno State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "BO"
      },
      {
        "id": 314,
        "name": "Cross River State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "CR"
      },
      {
        "id": 316,
        "name": "Delta State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "DE"
      },
      {
        "id": 311,
        "name": "Ebonyi State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "EB"
      },
      {
        "id": 318,
        "name": "Edo State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "ED"
      },
      {
        "id": 309,
        "name": "Ekiti State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "EK"
      },
      {
        "id": 289,
        "name": "Enugu State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "EN"
      },
      {
        "id": 293,
        "name": "Federal Capital Territory",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "FC"
      },
      {
        "id": 310,
        "name": "Gombe State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "GO"
      },
      {
        "id": 308,
        "name": "Imo State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "IM"
      },
      {
        "id": 288,
        "name": "Jigawa State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "JI"
      },
      {
        "id": 294,
        "name": "Kaduna State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "KD"
      },
      {
        "id": 300,
        "name": "Kano State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "KN"
      },
      {
        "id": 313,
        "name": "Katsina State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "KT"
      },
      {
        "id": 290,
        "name": "Kebbi State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "KE"
      },
      {
        "id": 298,
        "name": "Kogi State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "KO"
      },
      {
        "id": 295,
        "name": "Kwara State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "KW"
      },
      {
        "id": 306,
        "name": "Lagos",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "LA"
      },
      {
        "id": 301,
        "name": "Nasarawa State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "NA"
      },
      {
        "id": 317,
        "name": "Niger State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "NI"
      },
      {
        "id": 323,
        "name": "Ogun State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "OG"
      },
      {
        "id": 321,
        "name": "Ondo State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "ON"
      },
      {
        "id": 322,
        "name": "Osun State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "OS"
      },
      {
        "id": 296,
        "name": "Oyo State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "OY"
      },
      {
        "id": 302,
        "name": "Plateau State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "PL"
      },
      {
        "id": 292,
        "name": "Sokoto State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "SO"
      },
      {
        "id": 319,
        "name": "Taraba State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "TA"
      },
      {
        "id": 297,
        "name": "Yobe State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "YO"
      },
      {
        "id": 299,
        "name": "Zamfara State",
        "country_id": 161,
        "country_code": "NG",
        "state_code": "ZA"
      },
      {
        "id": 1017,
        "name": "Akershus",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "02"
      },
      {
        "id": 1011,
        "name": "Buskerud",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "06"
      },
      {
        "id": 1016,
        "name": "Finnmark",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "20"
      },
      {
        "id": 1019,
        "name": "Hedmark",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "04"
      },
      {
        "id": 1023,
        "name": "Hordaland",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "12"
      },
      {
        "id": 1026,
        "name": "Jan Mayen",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "22"
      },
      {
        "id": 1020,
        "name": "Møre og Romsdal",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "15"
      },
      {
        "id": 1012,
        "name": "Nord-Trøndelag",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "17"
      },
      {
        "id": 1025,
        "name": "Nordland",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "18"
      },
      {
        "id": 1009,
        "name": "Oppland",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "05"
      },
      {
        "id": 1007,
        "name": "Oslo",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "03"
      },
      {
        "id": 1022,
        "name": "Østfold",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "01"
      },
      {
        "id": 1021,
        "name": "Rogaland",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "11"
      },
      {
        "id": 1018,
        "name": "Sogn og Fjordane",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "14"
      },
      {
        "id": 1010,
        "name": "Sør-Trøndelag",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "16"
      },
      {
        "id": 1013,
        "name": "Svalbard",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "21"
      },
      {
        "id": 1024,
        "name": "Telemark",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "08"
      },
      {
        "id": 1015,
        "name": "Troms",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "19"
      },
      {
        "id": 1006,
        "name": "Trøndelag",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "50"
      },
      {
        "id": 1014,
        "name": "Vest-Agder",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "10"
      },
      {
        "id": 1008,
        "name": "Vestfold",
        "country_id": 165,
        "country_code": "NO",
        "state_code": "07"
      },
      {
        "id": 3058,
        "name": "Ad Dakhiliyah Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "DA"
      },
      {
        "id": 3047,
        "name": "Ad Dhahirah Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "ZA"
      },
      {
        "id": 3048,
        "name": "Al Batinah North Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "BS"
      },
      {
        "id": 3050,
        "name": "Al Batinah Region",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "BA"
      },
      {
        "id": 3049,
        "name": "Al Batinah South Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "BJ"
      },
      {
        "id": 3059,
        "name": "Al Buraimi Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "BU"
      },
      {
        "id": 3056,
        "name": "Al Wusta Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "WU"
      },
      {
        "id": 3053,
        "name": "Ash Sharqiyah North Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "SS"
      },
      {
        "id": 3051,
        "name": "Ash Sharqiyah Region",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "SH"
      },
      {
        "id": 3054,
        "name": "Ash Sharqiyah South Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "SJ"
      },
      {
        "id": 3057,
        "name": "Dhofar Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "ZU"
      },
      {
        "id": 3052,
        "name": "Musandam Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "MU"
      },
      {
        "id": 3055,
        "name": "Muscat Governorate",
        "country_id": 166,
        "country_code": "OM",
        "state_code": "MA"
      },
      {
        "id": 3172,
        "name": "Azad Kashmir",
        "country_id": 167,
        "country_code": "PK",
        "state_code": "JK"
      },
      {
        "id": 3174,
        "name": "Balochistan",
        "country_id": 167,
        "country_code": "PK",
        "state_code": "BA"
      },
      {
        "id": 3173,
        "name": "Federally Administered Tribal Areas",
        "country_id": 167,
        "country_code": "PK",
        "state_code": "TA"
      },
      {
        "id": 3170,
        "name": "Gilgit-Baltistan",
        "country_id": 167,
        "country_code": "PK",
        "state_code": "GB"
      },
      {
        "id": 3169,
        "name": "Islamabad Capital Territory",
        "country_id": 167,
        "country_code": "PK",
        "state_code": "IS"
      },
      {
        "id": 3171,
        "name": "Khyber Pakhtunkhwa",
        "country_id": 167,
        "country_code": "PK",
        "state_code": "KP"
      },
      {
        "id": 3176,
        "name": "Punjab",
        "country_id": 167,
        "country_code": "PK",
        "state_code": "PB"
      },
      {
        "id": 3175,
        "name": "Sindh",
        "country_id": 167,
        "country_code": "PK",
        "state_code": "SD"
      },
      {
        "id": 4540,
        "name": "Aimeliik",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "002"
      },
      {
        "id": 4528,
        "name": "Airai",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "004"
      },
      {
        "id": 4538,
        "name": "Angaur",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "010"
      },
      {
        "id": 4529,
        "name": "Hatohobei",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "050"
      },
      {
        "id": 4539,
        "name": "Kayangel",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "100"
      },
      {
        "id": 4532,
        "name": "Koror",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "150"
      },
      {
        "id": 4530,
        "name": "Melekeok",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "212"
      },
      {
        "id": 4537,
        "name": "Ngaraard",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "214"
      },
      {
        "id": 4533,
        "name": "Ngarchelong",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "218"
      },
      {
        "id": 4527,
        "name": "Ngardmau",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "222"
      },
      {
        "id": 4531,
        "name": "Ngatpang",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "224"
      },
      {
        "id": 4536,
        "name": "Ngchesar",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "226"
      },
      {
        "id": 4541,
        "name": "Ngeremlengui",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "227"
      },
      {
        "id": 4534,
        "name": "Ngiwal",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "228"
      },
      {
        "id": 4526,
        "name": "Peleliu",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "350"
      },
      {
        "id": 4535,
        "name": "Sonsorol",
        "country_id": 168,
        "country_code": "PW",
        "state_code": "370"
      },
      {
        "id": 1393,
        "name": "Bocas del Toro Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "1"
      },
      {
        "id": 1397,
        "name": "Chiriquí Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "4"
      },
      {
        "id": 1387,
        "name": "Coclé Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "2"
      },
      {
        "id": 1386,
        "name": "Colón Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "3"
      },
      {
        "id": 1385,
        "name": "Darién Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "5"
      },
      {
        "id": 1396,
        "name": "Emberá-Wounaan Comarca",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "EM"
      },
      {
        "id": 1388,
        "name": "Guna Yala",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "KY"
      },
      {
        "id": 1389,
        "name": "Herrera Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "6"
      },
      {
        "id": 1390,
        "name": "Los Santos Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "7"
      },
      {
        "id": 1391,
        "name": "Ngöbe-Buglé Comarca",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "NB"
      },
      {
        "id": 1394,
        "name": "Panamá Oeste Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "10"
      },
      {
        "id": 1395,
        "name": "Panamá Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "8"
      },
      {
        "id": 1392,
        "name": "Veraguas Province",
        "country_id": 170,
        "country_code": "PA",
        "state_code": "9"
      },
      {
        "id": 4831,
        "name": "Bougainville",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "NSB"
      },
      {
        "id": 4847,
        "name": "Central Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "CPM"
      },
      {
        "id": 4846,
        "name": "Chimbu Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "CPK"
      },
      {
        "id": 4834,
        "name": "East New Britain",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "EBR"
      },
      {
        "id": 4845,
        "name": "Eastern Highlands Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "EHG"
      },
      {
        "id": 4848,
        "name": "Enga Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "EPW"
      },
      {
        "id": 4839,
        "name": "Gulf",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "GPK"
      },
      {
        "id": 4833,
        "name": "Hela",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "HLA"
      },
      {
        "id": 4832,
        "name": "Jiwaka Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "JWK"
      },
      {
        "id": 4843,
        "name": "Madang Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "MPM"
      },
      {
        "id": 4842,
        "name": "Manus Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "MRL"
      },
      {
        "id": 4849,
        "name": "Milne Bay Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "MBA"
      },
      {
        "id": 4835,
        "name": "Morobe Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "MPL"
      },
      {
        "id": 4841,
        "name": "New Ireland Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "NIK"
      },
      {
        "id": 4838,
        "name": "Oro Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "NPP"
      },
      {
        "id": 4837,
        "name": "Port Moresby",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "NCD"
      },
      {
        "id": 4836,
        "name": "Sandaun Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "SAN"
      },
      {
        "id": 4844,
        "name": "Southern Highlands Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "SHM"
      },
      {
        "id": 4830,
        "name": "West New Britain Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "WBK"
      },
      {
        "id": 4840,
        "name": "Western Highlands Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "WHM"
      },
      {
        "id": 4850,
        "name": "Western Province",
        "country_id": 171,
        "country_code": "PG",
        "state_code": "WPD"
      },
      {
        "id": 2785,
        "name": "Alto Paraguay Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "16"
      },
      {
        "id": 2784,
        "name": "Alto Paraná Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "10"
      },
      {
        "id": 2782,
        "name": "Amambay Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "13"
      },
      {
        "id": 2780,
        "name": "Boquerón Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "19"
      },
      {
        "id": 2773,
        "name": "Caaguazú",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "5"
      },
      {
        "id": 2775,
        "name": "Caazapá",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "6"
      },
      {
        "id": 2771,
        "name": "Canindeyú",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "14"
      },
      {
        "id": 2777,
        "name": "Central Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "11"
      },
      {
        "id": 2779,
        "name": "Concepción Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "1"
      },
      {
        "id": 2783,
        "name": "Cordillera Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "3"
      },
      {
        "id": 2772,
        "name": "Guairá Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "4"
      },
      {
        "id": 2778,
        "name": "Itapúa",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "7"
      },
      {
        "id": 2786,
        "name": "Misiones Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "8"
      },
      {
        "id": 2781,
        "name": "Ñeembucú Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "12"
      },
      {
        "id": 2774,
        "name": "Paraguarí Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "9"
      },
      {
        "id": 2770,
        "name": "Presidente Hayes Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "15"
      },
      {
        "id": 2776,
        "name": "San Pedro Department",
        "country_id": 172,
        "country_code": "PY",
        "state_code": "2"
      },
      {
        "id": 3685,
        "name": "Amazonas",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "AMA"
      },
      {
        "id": 3680,
        "name": "Áncash",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "ANC"
      },
      {
        "id": 3699,
        "name": "Apurímac",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "APU"
      },
      {
        "id": 3681,
        "name": "Arequipa",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "ARE"
      },
      {
        "id": 3692,
        "name": "Ayacucho",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "AYA"
      },
      {
        "id": 3688,
        "name": "Cajamarca",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "CAJ"
      },
      {
        "id": 3701,
        "name": "Callao",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "CAL"
      },
      {
        "id": 3691,
        "name": "Cusco",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "CUS"
      },
      {
        "id": 3679,
        "name": "Huancavelica",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "HUV"
      },
      {
        "id": 3687,
        "name": "Huanuco",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "HUC"
      },
      {
        "id": 3700,
        "name": "Ica",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "ICA"
      },
      {
        "id": 3693,
        "name": "Junín",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "JUN"
      },
      {
        "id": 3683,
        "name": "La Libertad",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "LAL"
      },
      {
        "id": 3702,
        "name": "Lambayeque",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "LAM"
      },
      {
        "id": 3695,
        "name": "Lima",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "LIM"
      },
      {
        "id": 3690,
        "name": "Lima Province",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "LMA"
      },
      {
        "id": 3678,
        "name": "Madre de Dios",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "MDD"
      },
      {
        "id": 3698,
        "name": "Moquegua",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "MOQ"
      },
      {
        "id": 3686,
        "name": "Pasco",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "PAS"
      },
      {
        "id": 3697,
        "name": "Piura",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "PIU"
      },
      {
        "id": 3682,
        "name": "Puno",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "PUN"
      },
      {
        "id": 3694,
        "name": "San Martín",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "SAM"
      },
      {
        "id": 3696,
        "name": "Tacna",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "TAC"
      },
      {
        "id": 3689,
        "name": "Tumbes",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "TUM"
      },
      {
        "id": 3684,
        "name": "Ucayali",
        "country_id": 173,
        "country_code": "PE",
        "state_code": "UCA"
      },
      {
        "id": 1324,
        "name": "Abra",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ABR"
      },
      {
        "id": 1323,
        "name": "Agusan del Norte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "AGN"
      },
      {
        "id": 1326,
        "name": "Agusan del Sur",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "AGS"
      },
      {
        "id": 1331,
        "name": "Aklan",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "AKL"
      },
      {
        "id": 1337,
        "name": "Albay",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ALB"
      },
      {
        "id": 1336,
        "name": "Antique",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ANT"
      },
      {
        "id": 1334,
        "name": "Apayao",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "APA"
      },
      {
        "id": 1341,
        "name": "Aurora",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "AUR"
      },
      {
        "id": 1316,
        "name": "Autonomous Region in Muslim Mindanao",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "14"
      },
      {
        "id": 1346,
        "name": "Basilan",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BAS"
      },
      {
        "id": 1344,
        "name": "Bataan",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BAN"
      },
      {
        "id": 1352,
        "name": "Batanes",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BTN"
      },
      {
        "id": 1359,
        "name": "Batangas",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BTG"
      },
      {
        "id": 1363,
        "name": "Benguet",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BEN"
      },
      {
        "id": 1304,
        "name": "Bicol Region",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "05"
      },
      {
        "id": 1274,
        "name": "Biliran",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BIL"
      },
      {
        "id": 1272,
        "name": "Bohol",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BOH"
      },
      {
        "id": 1270,
        "name": "Bukidnon",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BUK"
      },
      {
        "id": 1278,
        "name": "Bulacan",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "BUL"
      },
      {
        "id": 1279,
        "name": "Cagayan",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "CAG"
      },
      {
        "id": 1342,
        "name": "Cagayan Valley",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "02"
      },
      {
        "id": 1294,
        "name": "Calabarzon",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "40"
      },
      {
        "id": 1283,
        "name": "Camarines Norte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "CAN"
      },
      {
        "id": 1287,
        "name": "Camarines Sur",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "CAS"
      },
      {
        "id": 1285,
        "name": "Camiguin",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "CAM"
      },
      {
        "id": 1292,
        "name": "Capiz",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "CAP"
      },
      {
        "id": 1314,
        "name": "Caraga",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "13"
      },
      {
        "id": 1301,
        "name": "Catanduanes",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "CAT"
      },
      {
        "id": 1307,
        "name": "Cavite",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "CAV"
      },
      {
        "id": 1306,
        "name": "Cebu",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "CEB"
      },
      {
        "id": 1345,
        "name": "Central Luzon",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "03"
      },
      {
        "id": 1308,
        "name": "Central Visayas",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "07"
      },
      {
        "id": 1311,
        "name": "Compostela Valley",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "COM"
      },
      {
        "id": 1335,
        "name": "Cordillera Administrative Region",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "15"
      },
      {
        "id": 1320,
        "name": "Cotabato",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "NCO"
      },
      {
        "id": 1319,
        "name": "Davao del Norte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "DAV"
      },
      {
        "id": 1318,
        "name": "Davao del Sur",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "DAS"
      },
      {
        "id": 1309,
        "name": "Davao Occidental",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "DVO"
      },
      {
        "id": 1289,
        "name": "Davao Oriental",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "DAO"
      },
      {
        "id": 1340,
        "name": "Davao Region",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "11"
      },
      {
        "id": 1291,
        "name": "Dinagat Islands",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "DIN"
      },
      {
        "id": 1290,
        "name": "Eastern Samar",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "EAS"
      },
      {
        "id": 1322,
        "name": "Eastern Visayas",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "08"
      },
      {
        "id": 1303,
        "name": "Guimaras",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "GUI"
      },
      {
        "id": 1300,
        "name": "Ifugao",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "IFU"
      },
      {
        "id": 1298,
        "name": "Ilocos Norte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ILN"
      },
      {
        "id": 1355,
        "name": "Ilocos Region",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "01"
      },
      {
        "id": 1321,
        "name": "Ilocos Sur",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ILS"
      },
      {
        "id": 1315,
        "name": "Iloilo",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ILI"
      },
      {
        "id": 1313,
        "name": "Isabela",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ISA"
      },
      {
        "id": 1312,
        "name": "Kalinga",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "KAL"
      },
      {
        "id": 1317,
        "name": "La Union",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "LUN"
      },
      {
        "id": 1328,
        "name": "Laguna",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "LAG"
      },
      {
        "id": 1327,
        "name": "Lanao del Norte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "LAN"
      },
      {
        "id": 1333,
        "name": "Lanao del Sur",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "LAS"
      },
      {
        "id": 1332,
        "name": "Leyte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "LEY"
      },
      {
        "id": 1330,
        "name": "Maguindanao",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "MAG"
      },
      {
        "id": 1329,
        "name": "Marinduque",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "MAD"
      },
      {
        "id": 1338,
        "name": "Masbate",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "MAS"
      },
      {
        "id": 1347,
        "name": "Metro Manila",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "00"
      },
      {
        "id": 1299,
        "name": "Mimaropa",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "41"
      },
      {
        "id": 1343,
        "name": "Misamis Occidental",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "MSC"
      },
      {
        "id": 1348,
        "name": "Misamis Oriental",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "MSR"
      },
      {
        "id": 1353,
        "name": "Mountain Province",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "MOU"
      },
      {
        "id": 1351,
        "name": "Negros Occidental",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "NEC"
      },
      {
        "id": 1350,
        "name": "Negros Oriental",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "NER"
      },
      {
        "id": 1339,
        "name": "Northern Mindanao",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "10"
      },
      {
        "id": 1349,
        "name": "Northern Samar",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "NSA"
      },
      {
        "id": 1360,
        "name": "Nueva Ecija",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "NUE"
      },
      {
        "id": 1358,
        "name": "Nueva Vizcaya",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "NUV"
      },
      {
        "id": 1356,
        "name": "Occidental Mindoro",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "MDC"
      },
      {
        "id": 1354,
        "name": "Oriental Mindoro",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "MDR"
      },
      {
        "id": 1361,
        "name": "Palawan",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "PLW"
      },
      {
        "id": 1365,
        "name": "Pampanga",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "PAM"
      },
      {
        "id": 1364,
        "name": "Pangasinan",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "PAN"
      },
      {
        "id": 1275,
        "name": "Quezon",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "QUE"
      },
      {
        "id": 1273,
        "name": "Quirino",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "QUI"
      },
      {
        "id": 1271,
        "name": "Rizal",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "RIZ"
      },
      {
        "id": 1269,
        "name": "Romblon",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ROM"
      },
      {
        "id": 1277,
        "name": "Sarangani",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SAR"
      },
      {
        "id": 1276,
        "name": "Siquijor",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SIG"
      },
      {
        "id": 1310,
        "name": "Soccsksargen",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "12"
      },
      {
        "id": 1281,
        "name": "Sorsogon",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SOR"
      },
      {
        "id": 1280,
        "name": "South Cotabato",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SCO"
      },
      {
        "id": 1284,
        "name": "Southern Leyte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SLE"
      },
      {
        "id": 1282,
        "name": "Sultan Kudarat",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SUK"
      },
      {
        "id": 1288,
        "name": "Sulu",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SLU"
      },
      {
        "id": 1286,
        "name": "Surigao del Norte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SUN"
      },
      {
        "id": 1296,
        "name": "Surigao del Sur",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "SUR"
      },
      {
        "id": 1295,
        "name": "Tarlac",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "TAR"
      },
      {
        "id": 1293,
        "name": "Tawi-Tawi",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "TAW"
      },
      {
        "id": 1305,
        "name": "Western Visayas",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "06"
      },
      {
        "id": 1297,
        "name": "Zambales",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ZMB"
      },
      {
        "id": 1302,
        "name": "Zamboanga del Norte",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ZAN"
      },
      {
        "id": 1357,
        "name": "Zamboanga del Sur",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ZAS"
      },
      {
        "id": 1325,
        "name": "Zamboanga Peninsula",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "09"
      },
      {
        "id": 1362,
        "name": "Zamboanga Sibugay",
        "country_id": 174,
        "country_code": "PH",
        "state_code": "ZSI"
      },
      {
        "id": 1634,
        "name": "Greater Poland Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "WP"
      },
      {
        "id": 1627,
        "name": "Kielce",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "KI"
      },
      {
        "id": 1625,
        "name": "Kuyavian-Pomeranian Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "KP"
      },
      {
        "id": 1635,
        "name": "Lesser Poland Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "MA"
      },
      {
        "id": 1629,
        "name": "Lower Silesian Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "DS"
      },
      {
        "id": 1638,
        "name": "Lublin Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "LU"
      },
      {
        "id": 1631,
        "name": "Lubusz Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "LB"
      },
      {
        "id": 1636,
        "name": "Łódź Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "LD"
      },
      {
        "id": 1637,
        "name": "Masovian Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "MZ"
      },
      {
        "id": 1622,
        "name": "Opole Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "OP"
      },
      {
        "id": 1626,
        "name": "Podkarpackie Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "PK"
      },
      {
        "id": 1632,
        "name": "Podlaskie Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "PD"
      },
      {
        "id": 1624,
        "name": "Pomeranian Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "PM"
      },
      {
        "id": 1623,
        "name": "Silesian Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "SL"
      },
      {
        "id": 1630,
        "name": "Świętokrzyskie Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "SK"
      },
      {
        "id": 1628,
        "name": "Warmian-Masurian Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "WN"
      },
      {
        "id": 1633,
        "name": "West Pomeranian Voivodeship",
        "country_id": 176,
        "country_code": "PL",
        "state_code": "ZP"
      },
      {
        "id": 2235,
        "name": "Aveiro District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "01"
      },
      {
        "id": 2233,
        "name": "Azores",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "20"
      },
      {
        "id": 2230,
        "name": "Beja District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "02"
      },
      {
        "id": 2244,
        "name": "Braga District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "03"
      },
      {
        "id": 2229,
        "name": "Bragança District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "04"
      },
      {
        "id": 2241,
        "name": "Castelo Branco District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "05"
      },
      {
        "id": 2246,
        "name": "Coimbra District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "06"
      },
      {
        "id": 2236,
        "name": "Évora District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "07"
      },
      {
        "id": 2239,
        "name": "Faro District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "08"
      },
      {
        "id": 2240,
        "name": "Leiria District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "10"
      },
      {
        "id": 2228,
        "name": "Lisbon District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "11"
      },
      {
        "id": 2231,
        "name": "Madeira",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "30"
      },
      {
        "id": 2232,
        "name": "Portalegre District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "12"
      },
      {
        "id": 2243,
        "name": "Porto District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "13"
      },
      {
        "id": 2238,
        "name": "Santarém District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "14"
      },
      {
        "id": 2242,
        "name": "Setúbal District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "15"
      },
      {
        "id": 2245,
        "name": "Viana do Castelo District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "16"
      },
      {
        "id": 2234,
        "name": "Vila Real District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "17"
      },
      {
        "id": 2237,
        "name": "Viseu District",
        "country_id": 177,
        "country_code": "PT",
        "state_code": "18"
      },
      {
        "id": 3182,
        "name": "Al Daayen",
        "country_id": 179,
        "country_code": "QA",
        "state_code": "ZA"
      },
      {
        "id": 3183,
        "name": "Al Khor",
        "country_id": 179,
        "country_code": "QA",
        "state_code": "KH"
      },
      {
        "id": 3177,
        "name": "Al Rayyan Municipality",
        "country_id": 179,
        "country_code": "QA",
        "state_code": "RA"
      },
      {
        "id": 3179,
        "name": "Al Wakrah",
        "country_id": 179,
        "country_code": "QA",
        "state_code": "WA"
      },
      {
        "id": 3178,
        "name": "Al-Shahaniya",
        "country_id": 179,
        "country_code": "QA",
        "state_code": "SH"
      },
      {
        "id": 3181,
        "name": "Doha",
        "country_id": 179,
        "country_code": "QA",
        "state_code": "DA"
      },
      {
        "id": 3180,
        "name": "Madinat ash Shamal",
        "country_id": 179,
        "country_code": "QA",
        "state_code": "MS"
      },
      {
        "id": 3184,
        "name": "Umm Salal Municipality",
        "country_id": 179,
        "country_code": "QA",
        "state_code": "US"
      },
      {
        "id": 4724,
        "name": "Alba",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "AB"
      },
      {
        "id": 4739,
        "name": "Arad County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "AR"
      },
      {
        "id": 4722,
        "name": "Arges",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "AG"
      },
      {
        "id": 4744,
        "name": "Bacău County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "BC"
      },
      {
        "id": 4723,
        "name": "Bihor County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "BH"
      },
      {
        "id": 4733,
        "name": "Bistrița-Năsăud County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "BN"
      },
      {
        "id": 4740,
        "name": "Botoșani County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "BT"
      },
      {
        "id": 4736,
        "name": "Braila",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "BR"
      },
      {
        "id": 4759,
        "name": "Brașov County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "BV"
      },
      {
        "id": 4730,
        "name": "Bucharest",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "B"
      },
      {
        "id": 4756,
        "name": "Buzău County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "BZ"
      },
      {
        "id": 4732,
        "name": "Călărași County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "CL"
      },
      {
        "id": 4753,
        "name": "Caraș-Severin County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "CS"
      },
      {
        "id": 4734,
        "name": "Cluj County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "CJ"
      },
      {
        "id": 4737,
        "name": "Constanța County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "CT"
      },
      {
        "id": 4754,
        "name": "Covasna County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "CV"
      },
      {
        "id": 4745,
        "name": "Dâmbovița County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "DB"
      },
      {
        "id": 4742,
        "name": "Dolj County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "DJ"
      },
      {
        "id": 4747,
        "name": "Galați County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "GL"
      },
      {
        "id": 4726,
        "name": "Giurgiu County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "GR"
      },
      {
        "id": 4750,
        "name": "Gorj County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "GJ"
      },
      {
        "id": 4749,
        "name": "Harghita County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "HR"
      },
      {
        "id": 4721,
        "name": "Hunedoara County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "HD"
      },
      {
        "id": 4743,
        "name": "Ialomița County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "IL"
      },
      {
        "id": 4735,
        "name": "Iași County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "IS"
      },
      {
        "id": 4725,
        "name": "Ilfov County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "IF"
      },
      {
        "id": 4760,
        "name": "Maramureș County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "MM"
      },
      {
        "id": 4751,
        "name": "Mehedinți County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "MH"
      },
      {
        "id": 4731,
        "name": "Neamț County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "NT"
      },
      {
        "id": 4738,
        "name": "Olt County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "OT"
      },
      {
        "id": 4729,
        "name": "Prahova County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "PH"
      },
      {
        "id": 4741,
        "name": "Sălaj County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "SJ"
      },
      {
        "id": 4746,
        "name": "Satu Mare County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "SM"
      },
      {
        "id": 4755,
        "name": "Sibiu County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "SB"
      },
      {
        "id": 4720,
        "name": "Suceava County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "SV"
      },
      {
        "id": 4728,
        "name": "Teleorman County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "TR"
      },
      {
        "id": 4748,
        "name": "Timiș County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "TM"
      },
      {
        "id": 4727,
        "name": "Tulcea County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "TL"
      },
      {
        "id": 4757,
        "name": "Vâlcea County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "VL"
      },
      {
        "id": 4752,
        "name": "Vaslui County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "VS"
      },
      {
        "id": 4758,
        "name": "Vrancea County",
        "country_id": 181,
        "country_code": "RO",
        "state_code": "VN"
      },
      {
        "id": 1911,
        "name": "Altai Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "ALT"
      },
      {
        "id": 1876,
        "name": "Altai Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "AL"
      },
      {
        "id": 1858,
        "name": "Amur Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "AMU"
      },
      {
        "id": 1849,
        "name": "Arkhangelsk",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "ARK"
      },
      {
        "id": 1866,
        "name": "Astrakhan Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "AST"
      },
      {
        "id": 1903,
        "name": "Belgorod Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "BEL"
      },
      {
        "id": 1867,
        "name": "Bryansk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "BRY"
      },
      {
        "id": 1893,
        "name": "Chechen Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "CE"
      },
      {
        "id": 1845,
        "name": "Chelyabinsk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "CHE"
      },
      {
        "id": 1859,
        "name": "Chukotka Autonomous Okrug",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "CHU"
      },
      {
        "id": 1914,
        "name": "Chuvash Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "CU"
      },
      {
        "id": 1880,
        "name": "Irkutsk",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "IRK"
      },
      {
        "id": 1864,
        "name": "Ivanovo Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "IVA"
      },
      {
        "id": 1835,
        "name": "Jewish Autonomous Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "YEV"
      },
      {
        "id": 1892,
        "name": "Kabardino-Balkar Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KB"
      },
      {
        "id": 1902,
        "name": "Kaliningrad",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KGD"
      },
      {
        "id": 1844,
        "name": "Kaluga Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KLU"
      },
      {
        "id": 1865,
        "name": "Kamchatka Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KAM"
      },
      {
        "id": 1869,
        "name": "Karachay-Cherkess Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KC"
      },
      {
        "id": 1897,
        "name": "Kemerovo Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KEM"
      },
      {
        "id": 1873,
        "name": "Khabarovsk Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KHA"
      },
      {
        "id": 1838,
        "name": "Khanty-Mansi Autonomous Okrug",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KHM"
      },
      {
        "id": 1890,
        "name": "Kirov Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KIR"
      },
      {
        "id": 1899,
        "name": "Komi Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KO"
      },
      {
        "id": 1910,
        "name": "Kostroma Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KOS"
      },
      {
        "id": 1891,
        "name": "Krasnodar Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KDA"
      },
      {
        "id": 1840,
        "name": "Krasnoyarsk Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KYA"
      },
      {
        "id": 1915,
        "name": "Kurgan Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KGN"
      },
      {
        "id": 1855,
        "name": "Kursk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KRS"
      },
      {
        "id": 1896,
        "name": "Leningrad Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "LEN"
      },
      {
        "id": 1889,
        "name": "Lipetsk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "LIP"
      },
      {
        "id": 1839,
        "name": "Magadan Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "MAG"
      },
      {
        "id": 1870,
        "name": "Mari El Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "ME"
      },
      {
        "id": 1901,
        "name": "Moscow",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "MOW"
      },
      {
        "id": 1882,
        "name": "Moscow Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "MOS"
      },
      {
        "id": 1843,
        "name": "Murmansk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "MUR"
      },
      {
        "id": 1836,
        "name": "Nenets Autonomous Okrug",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "NEN"
      },
      {
        "id": 1857,
        "name": "Nizhny Novgorod Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "NIZ"
      },
      {
        "id": 1834,
        "name": "Novgorod Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "NGR"
      },
      {
        "id": 1888,
        "name": "Novosibirsk",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "NVS"
      },
      {
        "id": 1846,
        "name": "Omsk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "OMS"
      },
      {
        "id": 1886,
        "name": "Orenburg Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "ORE"
      },
      {
        "id": 1908,
        "name": "Oryol Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "ORL"
      },
      {
        "id": 1909,
        "name": "Penza Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "PNZ"
      },
      {
        "id": 1871,
        "name": "Perm Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "PER"
      },
      {
        "id": 1833,
        "name": "Primorsky Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "PRI"
      },
      {
        "id": 1863,
        "name": "Pskov Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "PSK"
      },
      {
        "id": 1852,
        "name": "Republic of Adygea",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "AD"
      },
      {
        "id": 1854,
        "name": "Republic of Bashkortostan",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "BA"
      },
      {
        "id": 1842,
        "name": "Republic of Buryatia",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "BU"
      },
      {
        "id": 1850,
        "name": "Republic of Dagestan",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "DA"
      },
      {
        "id": 1884,
        "name": "Republic of Ingushetia",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "IN"
      },
      {
        "id": 1883,
        "name": "Republic of Kalmykia",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KL"
      },
      {
        "id": 1841,
        "name": "Republic of Karelia",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KR"
      },
      {
        "id": 1877,
        "name": "Republic of Khakassia",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "KK"
      },
      {
        "id": 1898,
        "name": "Republic of Mordovia",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "MO"
      },
      {
        "id": 1853,
        "name": "Republic of North Ossetia-Alania",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "SE"
      },
      {
        "id": 1861,
        "name": "Republic of Tatarstan",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "TA"
      },
      {
        "id": 1837,
        "name": "Rostov Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "ROS"
      },
      {
        "id": 1905,
        "name": "Ryazan Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "RYA"
      },
      {
        "id": 1879,
        "name": "Saint Petersburg",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "SPE"
      },
      {
        "id": 1848,
        "name": "Sakha Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "SA"
      },
      {
        "id": 1875,
        "name": "Sakhalin",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "SAK"
      },
      {
        "id": 1862,
        "name": "Samara Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "SAM"
      },
      {
        "id": 1887,
        "name": "Saratov Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "SAR"
      },
      {
        "id": 1912,
        "name": "Sevastopol",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "UA-40"
      },
      {
        "id": 1885,
        "name": "Smolensk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "SMO"
      },
      {
        "id": 1868,
        "name": "Stavropol Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "STA"
      },
      {
        "id": 1894,
        "name": "Sverdlovsk",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "SVE"
      },
      {
        "id": 1878,
        "name": "Tambov Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "TAM"
      },
      {
        "id": 1872,
        "name": "Tomsk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "TOM"
      },
      {
        "id": 1895,
        "name": "Tula Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "TUL"
      },
      {
        "id": 1900,
        "name": "Tuva Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "TY"
      },
      {
        "id": 1860,
        "name": "Tver Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "TVE"
      },
      {
        "id": 1907,
        "name": "Tyumen Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "TYU"
      },
      {
        "id": 1913,
        "name": "Udmurt Republic",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "UD"
      },
      {
        "id": 1856,
        "name": "Ulyanovsk Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "ULY"
      },
      {
        "id": 1881,
        "name": "Vladimir Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "VLA"
      },
      {
        "id": 1874,
        "name": "Vologda Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "VLG"
      },
      {
        "id": 1906,
        "name": "Voronezh Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "VOR"
      },
      {
        "id": 1847,
        "name": "Yamalo-Nenets Autonomous Okrug",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "YAN"
      },
      {
        "id": 1851,
        "name": "Yaroslavl Oblast",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "YAR"
      },
      {
        "id": 1904,
        "name": "Zabaykalsky Krai",
        "country_id": 182,
        "country_code": "RU",
        "state_code": "ZAB"
      },
      {
        "id": 261,
        "name": "Eastern Province",
        "country_id": 183,
        "country_code": "RW",
        "state_code": "02"
      },
      {
        "id": 262,
        "name": "Kigali district",
        "country_id": 183,
        "country_code": "RW",
        "state_code": "01"
      },
      {
        "id": 263,
        "name": "Northern Province",
        "country_id": 183,
        "country_code": "RW",
        "state_code": "03"
      },
      {
        "id": 259,
        "name": "Southern Province",
        "country_id": 183,
        "country_code": "RW",
        "state_code": "05"
      },
      {
        "id": 260,
        "name": "Western Province",
        "country_id": 183,
        "country_code": "RW",
        "state_code": "04"
      },
      {
        "id": 3833,
        "name": "Christ Church Nichola Town Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "01"
      },
      {
        "id": 3832,
        "name": "Nevis",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "N"
      },
      {
        "id": 3836,
        "name": "Saint Anne Sandy Point Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "02"
      },
      {
        "id": 3837,
        "name": "Saint George Gingerland Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "04"
      },
      {
        "id": 3835,
        "name": "Saint James Windward Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "05"
      },
      {
        "id": 3845,
        "name": "Saint John Capisterre Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "06"
      },
      {
        "id": 3840,
        "name": "Saint John Figtree Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "07"
      },
      {
        "id": 3841,
        "name": "Saint Kitts",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "K"
      },
      {
        "id": 3844,
        "name": "Saint Mary Cayon Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "08"
      },
      {
        "id": 3834,
        "name": "Saint Paul Capisterre Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "09"
      },
      {
        "id": 3838,
        "name": "Saint Paul Charlestown Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "10"
      },
      {
        "id": 3831,
        "name": "Saint Peter Basseterre Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "11"
      },
      {
        "id": 3839,
        "name": "Saint Thomas Lowland Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "12"
      },
      {
        "id": 3842,
        "name": "Saint Thomas Middle Island Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "13"
      },
      {
        "id": 3843,
        "name": "Trinity Palmetto Point Parish",
        "country_id": 185,
        "country_code": "KN",
        "state_code": "15"
      },
      {
        "id": 3757,
        "name": "Anse la Raye Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "01"
      },
      {
        "id": 3761,
        "name": "Canaries",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "12"
      },
      {
        "id": 3758,
        "name": "Castries Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "02"
      },
      {
        "id": 3760,
        "name": "Choiseul Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "03"
      },
      {
        "id": 3767,
        "name": "Dauphin Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "04"
      },
      {
        "id": 3756,
        "name": "Dennery Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "05"
      },
      {
        "id": 3766,
        "name": "Gros Islet Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "06"
      },
      {
        "id": 3759,
        "name": "Laborie Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "07"
      },
      {
        "id": 3762,
        "name": "Micoud Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "08"
      },
      {
        "id": 3765,
        "name": "Praslin Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "09"
      },
      {
        "id": 3764,
        "name": "Soufrière Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "10"
      },
      {
        "id": 3763,
        "name": "Vieux Fort Quarter",
        "country_id": 186,
        "country_code": "LC",
        "state_code": "11"
      },
      {
        "id": 3389,
        "name": "Charlotte Parish",
        "country_id": 188,
        "country_code": "VC",
        "state_code": "01"
      },
      {
        "id": 3388,
        "name": "Grenadines Parish",
        "country_id": 188,
        "country_code": "VC",
        "state_code": "06"
      },
      {
        "id": 3386,
        "name": "Saint Andrew Parish",
        "country_id": 188,
        "country_code": "VC",
        "state_code": "02"
      },
      {
        "id": 3387,
        "name": "Saint David Parish",
        "country_id": 188,
        "country_code": "VC",
        "state_code": "03"
      },
      {
        "id": 3384,
        "name": "Saint George Parish",
        "country_id": 188,
        "country_code": "VC",
        "state_code": "04"
      },
      {
        "id": 3385,
        "name": "Saint Patrick Parish",
        "country_id": 188,
        "country_code": "VC",
        "state_code": "05"
      },
      {
        "id": 4763,
        "name": "A'ana",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "AA"
      },
      {
        "id": 4761,
        "name": "Aiga-i-le-Tai",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "AL"
      },
      {
        "id": 4765,
        "name": "Atua",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "AT"
      },
      {
        "id": 4764,
        "name": "Fa'asaleleaga",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "FA"
      },
      {
        "id": 4769,
        "name": "Gaga'emauga",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "GE"
      },
      {
        "id": 4771,
        "name": "Gaga'ifomauga",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "GI"
      },
      {
        "id": 4767,
        "name": "Palauli",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "PA"
      },
      {
        "id": 4762,
        "name": "Satupa'itea",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "SA"
      },
      {
        "id": 4770,
        "name": "Tuamasaga",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "TU"
      },
      {
        "id": 4768,
        "name": "Va'a-o-Fonoti",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "VF"
      },
      {
        "id": 4766,
        "name": "Vaisigano",
        "country_id": 191,
        "country_code": "WS",
        "state_code": "VS"
      },
      {
        "id": 59,
        "name": "Acquaviva",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "01"
      },
      {
        "id": 61,
        "name": "Borgo Maggiore",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "06"
      },
      {
        "id": 60,
        "name": "Chiesanuova",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "02"
      },
      {
        "id": 64,
        "name": "Domagnano",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "03"
      },
      {
        "id": 62,
        "name": "Faetano",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "04"
      },
      {
        "id": 66,
        "name": "Fiorentino",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "05"
      },
      {
        "id": 63,
        "name": "Montegiardino",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "08"
      },
      {
        "id": 58,
        "name": "San Marino",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "07"
      },
      {
        "id": 65,
        "name": "Serravalle",
        "country_id": 192,
        "country_code": "SM",
        "state_code": "09"
      },
      {
        "id": 270,
        "name": "Príncipe Province",
        "country_id": 193,
        "country_code": "ST",
        "state_code": "P"
      },
      {
        "id": 271,
        "name": "São Tomé Province",
        "country_id": 193,
        "country_code": "ST",
        "state_code": "S"
      },
      {
        "id": 2853,
        "name": "'Asir Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "14"
      },
      {
        "id": 2859,
        "name": "Al Bahah Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "11"
      },
      {
        "id": 2857,
        "name": "Al Jawf Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "12"
      },
      {
        "id": 2851,
        "name": "Al Madinah Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "03"
      },
      {
        "id": 2861,
        "name": "Al-Qassim Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "05"
      },
      {
        "id": 2856,
        "name": "Eastern Province",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "04"
      },
      {
        "id": 2855,
        "name": "Ha'il Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "06"
      },
      {
        "id": 2858,
        "name": "Jizan Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "09"
      },
      {
        "id": 2850,
        "name": "Makkah Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "02"
      },
      {
        "id": 2860,
        "name": "Najran Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "10"
      },
      {
        "id": 2854,
        "name": "Northern Borders Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "08"
      },
      {
        "id": 2849,
        "name": "Riyadh Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "01"
      },
      {
        "id": 2852,
        "name": "Tabuk Region",
        "country_id": 194,
        "country_code": "SA",
        "state_code": "07"
      },
      {
        "id": 473,
        "name": "Dakar",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "DK"
      },
      {
        "id": 480,
        "name": "Diourbel Region",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "DB"
      },
      {
        "id": 479,
        "name": "Fatick",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "FK"
      },
      {
        "id": 475,
        "name": "Kaffrine",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "KA"
      },
      {
        "id": 483,
        "name": "Kaolack",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "KL"
      },
      {
        "id": 481,
        "name": "Kédougou",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "KE"
      },
      {
        "id": 474,
        "name": "Kolda",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "KD"
      },
      {
        "id": 485,
        "name": "Louga",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "LG"
      },
      {
        "id": 476,
        "name": "Matam",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "MT"
      },
      {
        "id": 477,
        "name": "Saint-Louis",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "SL"
      },
      {
        "id": 482,
        "name": "Sédhiou",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "SE"
      },
      {
        "id": 486,
        "name": "Tambacounda Region",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "TC"
      },
      {
        "id": 484,
        "name": "Thiès Region",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "TH"
      },
      {
        "id": 478,
        "name": "Ziguinchor",
        "country_id": 195,
        "country_code": "SN",
        "state_code": "ZG"
      },
      {
        "id": 3730,
        "name": "Autonomous Province of Kosovo and Metohija",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "KM"
      },
      {
        "id": 3728,
        "name": "Belgrade",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "00"
      },
      {
        "id": 3717,
        "name": "Bor District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "14"
      },
      {
        "id": 3732,
        "name": "Braničevo District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "11"
      },
      {
        "id": 3716,
        "name": "Central Banat District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "02"
      },
      {
        "id": 3715,
        "name": "Jablanica District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "23"
      },
      {
        "id": 3724,
        "name": "Kolubara District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "09"
      },
      {
        "id": 3739,
        "name": "Kosovo-Pomoravlje District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "29"
      },
      {
        "id": 3735,
        "name": "Kosovska Mitrovica District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "28"
      },
      {
        "id": 3719,
        "name": "Mačva District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "08"
      },
      {
        "id": 3727,
        "name": "Moravica District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "17"
      },
      {
        "id": 3722,
        "name": "Nišava District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "20"
      },
      {
        "id": 3714,
        "name": "North Bačka District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "01"
      },
      {
        "id": 3736,
        "name": "North Banat District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "03"
      },
      {
        "id": 3721,
        "name": "Pčinja District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "24"
      },
      {
        "id": 3738,
        "name": "Peć District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "26"
      },
      {
        "id": 3712,
        "name": "Pirot District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "22"
      },
      {
        "id": 3741,
        "name": "Podunavlje District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "10"
      },
      {
        "id": 3737,
        "name": "Pomoravlje District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "13"
      },
      {
        "id": 3723,
        "name": "Prizren District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "27"
      },
      {
        "id": 3720,
        "name": "Rasina District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "19"
      },
      {
        "id": 3725,
        "name": "Raška District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "18"
      },
      {
        "id": 3711,
        "name": "South Bačka District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "06"
      },
      {
        "id": 3713,
        "name": "South Banat District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "04"
      },
      {
        "id": 3740,
        "name": "Srem District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "07"
      },
      {
        "id": 3734,
        "name": "Šumadija District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "12"
      },
      {
        "id": 3718,
        "name": "Toplica District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "21"
      },
      {
        "id": 3733,
        "name": "Vojvodina",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "VO"
      },
      {
        "id": 3726,
        "name": "West Bačka District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "05"
      },
      {
        "id": 3731,
        "name": "Zaječar District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "15"
      },
      {
        "id": 3729,
        "name": "Zlatibor District",
        "country_id": 196,
        "country_code": "RS",
        "state_code": "16"
      },
      {
        "id": 513,
        "name": "Anse Boileau",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "02"
      },
      {
        "id": 502,
        "name": "Anse Royale",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "05"
      },
      {
        "id": 506,
        "name": "Anse-aux-Pins",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "01"
      },
      {
        "id": 508,
        "name": "Au Cap",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "04"
      },
      {
        "id": 497,
        "name": "Baie Lazare",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "06"
      },
      {
        "id": 514,
        "name": "Baie Sainte Anne",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "07"
      },
      {
        "id": 512,
        "name": "Beau Vallon",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "08"
      },
      {
        "id": 515,
        "name": "Bel Air",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "09"
      },
      {
        "id": 505,
        "name": "Bel Ombre",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "10"
      },
      {
        "id": 517,
        "name": "Cascade",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "11"
      },
      {
        "id": 503,
        "name": "Glacis",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "12"
      },
      {
        "id": 500,
        "name": "Grand'Anse Mahé",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "13"
      },
      {
        "id": 504,
        "name": "Grand'Anse Praslin",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "14"
      },
      {
        "id": 495,
        "name": "La Digue",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "15"
      },
      {
        "id": 516,
        "name": "La Rivière Anglaise",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "16"
      },
      {
        "id": 499,
        "name": "Les Mamelles",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "24"
      },
      {
        "id": 494,
        "name": "Mont Buxton",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "17"
      },
      {
        "id": 498,
        "name": "Mont Fleuri",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "18"
      },
      {
        "id": 511,
        "name": "Plaisance",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "19"
      },
      {
        "id": 510,
        "name": "Pointe La Rue",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "20"
      },
      {
        "id": 507,
        "name": "Port Glaud",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "21"
      },
      {
        "id": 501,
        "name": "Roche Caiman",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "25"
      },
      {
        "id": 496,
        "name": "Saint Louis",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "22"
      },
      {
        "id": 509,
        "name": "Takamaka",
        "country_id": 197,
        "country_code": "SC",
        "state_code": "23"
      },
      {
        "id": 914,
        "name": "Eastern Province",
        "country_id": 198,
        "country_code": "SL",
        "state_code": "E"
      },
      {
        "id": 911,
        "name": "Northern Province",
        "country_id": 198,
        "country_code": "SL",
        "state_code": "N"
      },
      {
        "id": 912,
        "name": "Southern Province",
        "country_id": 198,
        "country_code": "SL",
        "state_code": "S"
      },
      {
        "id": 913,
        "name": "Western Area",
        "country_id": 198,
        "country_code": "SL",
        "state_code": "W"
      },
      {
        "id": 4651,
        "name": "Central Singapore Community Development Council",
        "country_id": 199,
        "country_code": "SG",
        "state_code": "01"
      },
      {
        "id": 4649,
        "name": "North East Community Development Council",
        "country_id": 199,
        "country_code": "SG",
        "state_code": "02"
      },
      {
        "id": 4653,
        "name": "North West Community Development Council",
        "country_id": 199,
        "country_code": "SG",
        "state_code": "03"
      },
      {
        "id": 4650,
        "name": "South East Community Development Council",
        "country_id": 199,
        "country_code": "SG",
        "state_code": "04"
      },
      {
        "id": 4652,
        "name": "South West Community Development Council",
        "country_id": 199,
        "country_code": "SG",
        "state_code": "05"
      },
      {
        "id": 4352,
        "name": "Banská Bystrica Region",
        "country_id": 200,
        "country_code": "SK",
        "state_code": "BC"
      },
      {
        "id": 4356,
        "name": "Bratislava Region",
        "country_id": 200,
        "country_code": "SK",
        "state_code": "BL"
      },
      {
        "id": 4353,
        "name": "Košice Region",
        "country_id": 200,
        "country_code": "SK",
        "state_code": "KI"
      },
      {
        "id": 4357,
        "name": "Nitra Region",
        "country_id": 200,
        "country_code": "SK",
        "state_code": "NI"
      },
      {
        "id": 4354,
        "name": "Prešov Region",
        "country_id": 200,
        "country_code": "SK",
        "state_code": "PV"
      },
      {
        "id": 4358,
        "name": "Trenčín Region",
        "country_id": 200,
        "country_code": "SK",
        "state_code": "TC"
      },
      {
        "id": 4355,
        "name": "Trnava Region",
        "country_id": 200,
        "country_code": "SK",
        "state_code": "TA"
      },
      {
        "id": 4359,
        "name": "Žilina Region",
        "country_id": 200,
        "country_code": "SK",
        "state_code": "ZI"
      },
      {
        "id": 4183,
        "name": "Ajdovščina Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "001"
      },
      {
        "id": 4326,
        "name": "Ankaran Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "213"
      },
      {
        "id": 4301,
        "name": "Beltinci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "002"
      },
      {
        "id": 4166,
        "name": "Benedikt Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "148"
      },
      {
        "id": 4179,
        "name": "Bistrica ob Sotli Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "149"
      },
      {
        "id": 4202,
        "name": "Bled Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "003"
      },
      {
        "id": 4278,
        "name": "Bloke Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "150"
      },
      {
        "id": 4282,
        "name": "Bohinj Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "004"
      },
      {
        "id": 4200,
        "name": "Borovnica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "005"
      },
      {
        "id": 4181,
        "name": "Bovec Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "006"
      },
      {
        "id": 4141,
        "name": "Braslovče Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "151"
      },
      {
        "id": 4240,
        "name": "Brda Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "007"
      },
      {
        "id": 4215,
        "name": "Brežice Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "009"
      },
      {
        "id": 4165,
        "name": "Brezovica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "008"
      },
      {
        "id": 4147,
        "name": "Cankova Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "152"
      },
      {
        "id": 4310,
        "name": "Cerklje na Gorenjskem Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "012"
      },
      {
        "id": 4162,
        "name": "Cerknica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "013"
      },
      {
        "id": 4178,
        "name": "Cerkno Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "014"
      },
      {
        "id": 4176,
        "name": "Cerkvenjak Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "153"
      },
      {
        "id": 4191,
        "name": "City Municipality of Celje",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "011"
      },
      {
        "id": 4236,
        "name": "City Municipality of Novo Mesto",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "085"
      },
      {
        "id": 4151,
        "name": "Črenšovci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "015"
      },
      {
        "id": 4232,
        "name": "Črna na Koroškem Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "016"
      },
      {
        "id": 4291,
        "name": "Črnomelj Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "017"
      },
      {
        "id": 4304,
        "name": "Destrnik Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "018"
      },
      {
        "id": 4167,
        "name": "Divača Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "019"
      },
      {
        "id": 4295,
        "name": "Dobje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "154"
      },
      {
        "id": 4216,
        "name": "Dobrepolje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "020"
      },
      {
        "id": 4252,
        "name": "Dobrna Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "155"
      },
      {
        "id": 4308,
        "name": "Dobrova–Polhov Gradec Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "021"
      },
      {
        "id": 4189,
        "name": "Dobrovnik Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "156"
      },
      {
        "id": 4173,
        "name": "Dol pri Ljubljani Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "022"
      },
      {
        "id": 4281,
        "name": "Dolenjske Toplice Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "157"
      },
      {
        "id": 4159,
        "name": "Domžale Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "023"
      },
      {
        "id": 4290,
        "name": "Dornava Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "024"
      },
      {
        "id": 4345,
        "name": "Dravograd Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "025"
      },
      {
        "id": 4213,
        "name": "Duplek Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "026"
      },
      {
        "id": 4293,
        "name": "Gorenja Vas–Poljane Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "027"
      },
      {
        "id": 4210,
        "name": "Gorišnica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "028"
      },
      {
        "id": 4284,
        "name": "Gorje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "207"
      },
      {
        "id": 4343,
        "name": "Gornja Radgona Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "029"
      },
      {
        "id": 4339,
        "name": "Gornji Grad Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "030"
      },
      {
        "id": 4271,
        "name": "Gornji Petrovci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "031"
      },
      {
        "id": 4217,
        "name": "Grad Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "158"
      },
      {
        "id": 4336,
        "name": "Grosuplje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "032"
      },
      {
        "id": 4145,
        "name": "Hajdina Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "159"
      },
      {
        "id": 4175,
        "name": "Hoče–Slivnica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "160"
      },
      {
        "id": 4327,
        "name": "Hodoš Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "161"
      },
      {
        "id": 4193,
        "name": "Horjul Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "162"
      },
      {
        "id": 4341,
        "name": "Hrastnik Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "034"
      },
      {
        "id": 4321,
        "name": "Hrpelje–Kozina Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "035"
      },
      {
        "id": 4152,
        "name": "Idrija Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "036"
      },
      {
        "id": 4286,
        "name": "Ig Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "037"
      },
      {
        "id": 4305,
        "name": "Ivančna Gorica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "039"
      },
      {
        "id": 4322,
        "name": "Izola Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "040"
      },
      {
        "id": 4337,
        "name": "Jesenice Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "041"
      },
      {
        "id": 4203,
        "name": "Jezersko Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "163"
      },
      {
        "id": 4266,
        "name": "Juršinci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "042"
      },
      {
        "id": 4180,
        "name": "Kamnik Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "043"
      },
      {
        "id": 4227,
        "name": "Kanal ob Soči Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "044"
      },
      {
        "id": 4150,
        "name": "Kidričevo Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "045"
      },
      {
        "id": 4243,
        "name": "Kobarid Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "046"
      },
      {
        "id": 4325,
        "name": "Kobilje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "047"
      },
      {
        "id": 4335,
        "name": "Kočevje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "048"
      },
      {
        "id": 4315,
        "name": "Komen Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "049"
      },
      {
        "id": 4283,
        "name": "Komenda Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "164"
      },
      {
        "id": 4319,
        "name": "Koper City Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "050"
      },
      {
        "id": 4254,
        "name": "Kostanjevica na Krki Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "197"
      },
      {
        "id": 4331,
        "name": "Kostel Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "165"
      },
      {
        "id": 4186,
        "name": "Kozje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "051"
      },
      {
        "id": 4287,
        "name": "Kranj City Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "052"
      },
      {
        "id": 4340,
        "name": "Kranjska Gora Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "053"
      },
      {
        "id": 4238,
        "name": "Križevci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "166"
      },
      {
        "id": 4197,
        "name": "Kungota",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "055"
      },
      {
        "id": 4211,
        "name": "Kuzma Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "056"
      },
      {
        "id": 4338,
        "name": "Laško Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "057"
      },
      {
        "id": 4142,
        "name": "Lenart Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "058"
      },
      {
        "id": 4225,
        "name": "Lendava Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "059"
      },
      {
        "id": 4347,
        "name": "Litija Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "060"
      },
      {
        "id": 4270,
        "name": "Ljubljana City Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "061"
      },
      {
        "id": 4294,
        "name": "Ljubno Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "062"
      },
      {
        "id": 4351,
        "name": "Ljutomer Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "063"
      },
      {
        "id": 4306,
        "name": "Log–Dragomer Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "208"
      },
      {
        "id": 4350,
        "name": "Logatec Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "064"
      },
      {
        "id": 4174,
        "name": "Loška Dolina Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "065"
      },
      {
        "id": 4158,
        "name": "Loški Potok Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "066"
      },
      {
        "id": 4156,
        "name": "Lovrenc na Pohorju Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "167"
      },
      {
        "id": 4219,
        "name": "Luče Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "067"
      },
      {
        "id": 4302,
        "name": "Lukovica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "068"
      },
      {
        "id": 4157,
        "name": "Majšperk Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "069"
      },
      {
        "id": 4224,
        "name": "Makole Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "198"
      },
      {
        "id": 4242,
        "name": "Maribor City Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "070"
      },
      {
        "id": 4244,
        "name": "Markovci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "168"
      },
      {
        "id": 4349,
        "name": "Medvode Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "071"
      },
      {
        "id": 4348,
        "name": "Mengeš Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "072"
      },
      {
        "id": 4323,
        "name": "Metlika Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "073"
      },
      {
        "id": 4265,
        "name": "Mežica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "074"
      },
      {
        "id": 4223,
        "name": "Miklavž na Dravskem Polju Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "169"
      },
      {
        "id": 4220,
        "name": "Miren–Kostanjevica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "075"
      },
      {
        "id": 4298,
        "name": "Mirna Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "212"
      },
      {
        "id": 4237,
        "name": "Mirna Peč Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "170"
      },
      {
        "id": 4212,
        "name": "Mislinja Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "076"
      },
      {
        "id": 4297,
        "name": "Mokronog–Trebelno Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "199"
      },
      {
        "id": 4168,
        "name": "Moravče Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "077"
      },
      {
        "id": 4218,
        "name": "Moravske Toplice Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "078"
      },
      {
        "id": 4190,
        "name": "Mozirje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "079"
      },
      {
        "id": 4318,
        "name": "Municipality of Apače",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "195"
      },
      {
        "id": 4309,
        "name": "Municipality of Cirkulane",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "196"
      },
      {
        "id": 4344,
        "name": "Municipality of Ilirska Bistrica",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "038"
      },
      {
        "id": 4314,
        "name": "Municipality of Krško",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "054"
      },
      {
        "id": 4187,
        "name": "Municipality of Škofljica",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "123"
      },
      {
        "id": 4313,
        "name": "Murska Sobota City Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "080"
      },
      {
        "id": 4208,
        "name": "Muta Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "081"
      },
      {
        "id": 4177,
        "name": "Naklo Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "082"
      },
      {
        "id": 4329,
        "name": "Nazarje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "083"
      },
      {
        "id": 4205,
        "name": "Nova Gorica City Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "084"
      },
      {
        "id": 4320,
        "name": "Odranci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "086"
      },
      {
        "id": 4143,
        "name": "Oplotnica",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "171"
      },
      {
        "id": 4221,
        "name": "Ormož Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "087"
      },
      {
        "id": 4199,
        "name": "Osilnica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "088"
      },
      {
        "id": 4172,
        "name": "Pesnica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "089"
      },
      {
        "id": 4201,
        "name": "Piran Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "090"
      },
      {
        "id": 4184,
        "name": "Pivka Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "091"
      },
      {
        "id": 4146,
        "name": "Podčetrtek Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "092"
      },
      {
        "id": 4161,
        "name": "Podlehnik Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "172"
      },
      {
        "id": 4234,
        "name": "Podvelka Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "093"
      },
      {
        "id": 4239,
        "name": "Poljčane Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "200"
      },
      {
        "id": 4272,
        "name": "Polzela Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "173"
      },
      {
        "id": 4330,
        "name": "Postojna Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "094"
      },
      {
        "id": 4188,
        "name": "Prebold Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "174"
      },
      {
        "id": 4303,
        "name": "Preddvor Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "095"
      },
      {
        "id": 4274,
        "name": "Prevalje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "175"
      },
      {
        "id": 4228,
        "name": "Ptuj City Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "096"
      },
      {
        "id": 4288,
        "name": "Puconci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "097"
      },
      {
        "id": 4204,
        "name": "Rače–Fram Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "098"
      },
      {
        "id": 4195,
        "name": "Radeče Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "099"
      },
      {
        "id": 4292,
        "name": "Radenci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "100"
      },
      {
        "id": 4275,
        "name": "Radlje ob Dravi Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "101"
      },
      {
        "id": 4231,
        "name": "Radovljica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "102"
      },
      {
        "id": 4155,
        "name": "Ravne na Koroškem Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "103"
      },
      {
        "id": 4206,
        "name": "Razkrižje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "176"
      },
      {
        "id": 4160,
        "name": "Rečica ob Savinji Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "209"
      },
      {
        "id": 4253,
        "name": "Renče–Vogrsko Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "201"
      },
      {
        "id": 4235,
        "name": "Ribnica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "104"
      },
      {
        "id": 4207,
        "name": "Ribnica na Pohorju Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "177"
      },
      {
        "id": 4233,
        "name": "Rogaška Slatina Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "106"
      },
      {
        "id": 4264,
        "name": "Rogašovci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "105"
      },
      {
        "id": 4209,
        "name": "Rogatec Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "107"
      },
      {
        "id": 4280,
        "name": "Ruše Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "108"
      },
      {
        "id": 4222,
        "name": "Šalovci Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "033"
      },
      {
        "id": 4230,
        "name": "Selnica ob Dravi Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "178"
      },
      {
        "id": 4346,
        "name": "Semič Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "109"
      },
      {
        "id": 4317,
        "name": "Šempeter–Vrtojba Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "183"
      },
      {
        "id": 4299,
        "name": "Šenčur Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "117"
      },
      {
        "id": 4324,
        "name": "Šentilj Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "118"
      },
      {
        "id": 4241,
        "name": "Šentjernej Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "119"
      },
      {
        "id": 4171,
        "name": "Šentjur Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "120"
      },
      {
        "id": 4311,
        "name": "Šentrupert Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "211"
      },
      {
        "id": 4268,
        "name": "Sevnica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "110"
      },
      {
        "id": 4149,
        "name": "Sežana Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "111"
      },
      {
        "id": 4170,
        "name": "Škocjan Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "121"
      },
      {
        "id": 4316,
        "name": "Škofja Loka Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "122"
      },
      {
        "id": 4169,
        "name": "Slovenj Gradec City Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "112"
      },
      {
        "id": 4332,
        "name": "Slovenska Bistrica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "113"
      },
      {
        "id": 4198,
        "name": "Slovenske Konjice Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "114"
      },
      {
        "id": 4285,
        "name": "Šmarje pri Jelšah Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "124"
      },
      {
        "id": 4289,
        "name": "Šmarješke Toplice Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "206"
      },
      {
        "id": 4296,
        "name": "Šmartno ob Paki Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "125"
      },
      {
        "id": 4279,
        "name": "Šmartno pri Litiji Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "194"
      },
      {
        "id": 4277,
        "name": "Sodražica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "179"
      },
      {
        "id": 4261,
        "name": "Solčava Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "180"
      },
      {
        "id": 4248,
        "name": "Šoštanj Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "126"
      },
      {
        "id": 4263,
        "name": "Središče ob Dravi",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "202"
      },
      {
        "id": 4259,
        "name": "Starše Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "115"
      },
      {
        "id": 4185,
        "name": "Štore Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "127"
      },
      {
        "id": 4333,
        "name": "Straža Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "203"
      },
      {
        "id": 4164,
        "name": "Sveta Ana Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "181"
      },
      {
        "id": 4260,
        "name": "Sveta Trojica v Slovenskih Goricah Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "204"
      },
      {
        "id": 4229,
        "name": "Sveti Andraž v Slovenskih Goricah Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "182"
      },
      {
        "id": 4255,
        "name": "Sveti Jurij ob Ščavnici Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "116"
      },
      {
        "id": 4328,
        "name": "Sveti Jurij v Slovenskih Goricah Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "210"
      },
      {
        "id": 4273,
        "name": "Sveti Tomaž Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "205"
      },
      {
        "id": 4194,
        "name": "Tabor Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "184"
      },
      {
        "id": 4312,
        "name": "Tišina Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "010"
      },
      {
        "id": 4247,
        "name": "Tolmin Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "128"
      },
      {
        "id": 4246,
        "name": "Trbovlje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "129"
      },
      {
        "id": 4214,
        "name": "Trebnje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "130"
      },
      {
        "id": 4153,
        "name": "Trnovska Vas Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "185"
      },
      {
        "id": 4250,
        "name": "Tržič Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "131"
      },
      {
        "id": 4334,
        "name": "Trzin Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "186"
      },
      {
        "id": 4251,
        "name": "Turnišče Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "132"
      },
      {
        "id": 4267,
        "name": "Velika Polana Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "187"
      },
      {
        "id": 4144,
        "name": "Velike Lašče Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "134"
      },
      {
        "id": 4257,
        "name": "Veržej Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "188"
      },
      {
        "id": 4300,
        "name": "Videm Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "135"
      },
      {
        "id": 4196,
        "name": "Vipava Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "136"
      },
      {
        "id": 4148,
        "name": "Vitanje Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "137"
      },
      {
        "id": 4154,
        "name": "Vodice Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "138"
      },
      {
        "id": 4245,
        "name": "Vojnik Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "139"
      },
      {
        "id": 4163,
        "name": "Vransko Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "189"
      },
      {
        "id": 4262,
        "name": "Vrhnika Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "140"
      },
      {
        "id": 4226,
        "name": "Vuzenica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "141"
      },
      {
        "id": 4269,
        "name": "Zagorje ob Savi Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "142"
      },
      {
        "id": 4258,
        "name": "Žalec Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "190"
      },
      {
        "id": 4182,
        "name": "Zavrč Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "143"
      },
      {
        "id": 4256,
        "name": "Železniki Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "146"
      },
      {
        "id": 4249,
        "name": "Žetale Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "191"
      },
      {
        "id": 4192,
        "name": "Žiri Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "147"
      },
      {
        "id": 4276,
        "name": "Žirovnica Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "192"
      },
      {
        "id": 4342,
        "name": "Zreče Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "144"
      },
      {
        "id": 4307,
        "name": "Žužemberk Municipality",
        "country_id": 201,
        "country_code": "SI",
        "state_code": "193"
      },
      {
        "id": 4784,
        "name": "Central Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "CE"
      },
      {
        "id": 4781,
        "name": "Choiseul Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "CH"
      },
      {
        "id": 4785,
        "name": "Guadalcanal Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "GU"
      },
      {
        "id": 4778,
        "name": "Honiara",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "CT"
      },
      {
        "id": 4780,
        "name": "Isabel Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "IS"
      },
      {
        "id": 4782,
        "name": "Makira-Ulawa Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "MK"
      },
      {
        "id": 4783,
        "name": "Malaita Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "ML"
      },
      {
        "id": 4787,
        "name": "Rennell and Bellona Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "RB"
      },
      {
        "id": 4779,
        "name": "Temotu Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "TE"
      },
      {
        "id": 4786,
        "name": "Western Province",
        "country_id": 202,
        "country_code": "SB",
        "state_code": "WE"
      },
      {
        "id": 925,
        "name": "Awdal Region",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "AW"
      },
      {
        "id": 917,
        "name": "Bakool",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "BK"
      },
      {
        "id": 927,
        "name": "Banaadir",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "BN"
      },
      {
        "id": 930,
        "name": "Bari",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "BR"
      },
      {
        "id": 926,
        "name": "Bay",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "BY"
      },
      {
        "id": 918,
        "name": "Galguduud",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "GA"
      },
      {
        "id": 928,
        "name": "Gedo",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "GE"
      },
      {
        "id": 915,
        "name": "Hiran",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "HI"
      },
      {
        "id": 924,
        "name": "Lower Juba",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "JH"
      },
      {
        "id": 921,
        "name": "Lower Shebelle",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "SH"
      },
      {
        "id": 922,
        "name": "Middle Juba",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "JD"
      },
      {
        "id": 923,
        "name": "Middle Shebelle",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "SD"
      },
      {
        "id": 916,
        "name": "Mudug",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "MU"
      },
      {
        "id": 920,
        "name": "Nugal",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "NU"
      },
      {
        "id": 919,
        "name": "Sanaag Region",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "SA"
      },
      {
        "id": 929,
        "name": "Togdheer Region",
        "country_id": 203,
        "country_code": "SO",
        "state_code": "TO"
      },
      {
        "id": 938,
        "name": "Eastern Cape",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "EC"
      },
      {
        "id": 932,
        "name": "Free State",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "FS"
      },
      {
        "id": 936,
        "name": "Gauteng",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "GT"
      },
      {
        "id": 935,
        "name": "KwaZulu-Natal",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "NL"
      },
      {
        "id": 933,
        "name": "Limpopo",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "LP"
      },
      {
        "id": 937,
        "name": "Mpumalanga",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "MP"
      },
      {
        "id": 934,
        "name": "North West",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "NW"
      },
      {
        "id": 931,
        "name": "Northern Cape",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "NC"
      },
      {
        "id": 939,
        "name": "Western Cape",
        "country_id": 204,
        "country_code": "ZA",
        "state_code": "WC"
      },
      {
        "id": 2092,
        "name": "Central Equatoria",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "EC"
      },
      {
        "id": 2093,
        "name": "Eastern Equatoria",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "EE"
      },
      {
        "id": 2094,
        "name": "Jonglei State",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "JG"
      },
      {
        "id": 2090,
        "name": "Lakes",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "LK"
      },
      {
        "id": 2088,
        "name": "Northern Bahr el Ghazal",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "BN"
      },
      {
        "id": 2085,
        "name": "Unity",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "UY"
      },
      {
        "id": 2086,
        "name": "Upper Nile",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "NU"
      },
      {
        "id": 2087,
        "name": "Warrap",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "WR"
      },
      {
        "id": 2091,
        "name": "Western Bahr el Ghazal",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "BW"
      },
      {
        "id": 2089,
        "name": "Western Equatoria",
        "country_id": 206,
        "country_code": "SS",
        "state_code": "EW"
      },
      {
        "id": 1179,
        "name": "A Coruña Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "C"
      },
      {
        "id": 1168,
        "name": "Albacete Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "AB"
      },
      {
        "id": 1156,
        "name": "Alicante Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "A"
      },
      {
        "id": 1151,
        "name": "Almería Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "AL"
      },
      {
        "id": 1193,
        "name": "Andalusia",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "AN"
      },
      {
        "id": 1148,
        "name": "Araba \/ Álava",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "VI"
      },
      {
        "id": 1177,
        "name": "Aragon",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "AR"
      },
      {
        "id": 1153,
        "name": "Badajoz Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "BA"
      },
      {
        "id": 1174,
        "name": "Balearic Islands",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "PM"
      },
      {
        "id": 1180,
        "name": "Barcelona Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "B"
      },
      {
        "id": 1191,
        "name": "Basque Country",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "PV"
      },
      {
        "id": 1186,
        "name": "Biscay",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "BI"
      },
      {
        "id": 1146,
        "name": "Burgos Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "BU"
      },
      {
        "id": 1196,
        "name": "Cáceres Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CC"
      },
      {
        "id": 1201,
        "name": "Cádiz Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CA"
      },
      {
        "id": 1185,
        "name": "Canary Islands",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CN"
      },
      {
        "id": 1170,
        "name": "Cantabria",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "S"
      },
      {
        "id": 1207,
        "name": "Castellón Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CS"
      },
      {
        "id": 1184,
        "name": "Castile and León",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CL"
      },
      {
        "id": 1205,
        "name": "Castile-La Mancha",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CM"
      },
      {
        "id": 1203,
        "name": "Catalonia",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CT"
      },
      {
        "id": 1206,
        "name": "Ceuta",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CE"
      },
      {
        "id": 1150,
        "name": "Ciudad Real Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CR"
      },
      {
        "id": 1158,
        "name": "Community of Madrid",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "MD"
      },
      {
        "id": 1197,
        "name": "Córdoba Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CO"
      },
      {
        "id": 1169,
        "name": "Cuenca Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "CU"
      },
      {
        "id": 1190,
        "name": "Extremadura",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "EX"
      },
      {
        "id": 1167,
        "name": "Galicia",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "GA"
      },
      {
        "id": 1202,
        "name": "Gipuzkoa",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "SS"
      },
      {
        "id": 1178,
        "name": "Girona Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "GI"
      },
      {
        "id": 1194,
        "name": "Granada Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "GR"
      },
      {
        "id": 1172,
        "name": "Guadalajara Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "GU"
      },
      {
        "id": 1199,
        "name": "Huelva Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "H"
      },
      {
        "id": 1163,
        "name": "Huesca Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "HU"
      },
      {
        "id": 1181,
        "name": "Jaén Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "J"
      },
      {
        "id": 1171,
        "name": "La Rioja",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "RI"
      },
      {
        "id": 1166,
        "name": "Las Palmas Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "GC"
      },
      {
        "id": 1200,
        "name": "León Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "LE"
      },
      {
        "id": 1195,
        "name": "Lleida Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "L"
      },
      {
        "id": 1187,
        "name": "Lugo Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "LU"
      },
      {
        "id": 1149,
        "name": "Madrid Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "M"
      },
      {
        "id": 1188,
        "name": "Málaga Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "MA"
      },
      {
        "id": 1159,
        "name": "Melilla",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "ML"
      },
      {
        "id": 1145,
        "name": "Murcia Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "MU"
      },
      {
        "id": 1204,
        "name": "Navarre",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "NC"
      },
      {
        "id": 1173,
        "name": "Ourense Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "OR"
      },
      {
        "id": 1157,
        "name": "Palencia Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "P"
      },
      {
        "id": 1154,
        "name": "Pontevedra Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "PO"
      },
      {
        "id": 1160,
        "name": "Province of Asturias",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "O"
      },
      {
        "id": 1189,
        "name": "Province of Ávila",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "AV"
      },
      {
        "id": 1176,
        "name": "Region of Murcia",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "MC"
      },
      {
        "id": 1147,
        "name": "Salamanca Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "SA"
      },
      {
        "id": 1198,
        "name": "Santa Cruz de Tenerife Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "TF"
      },
      {
        "id": 1192,
        "name": "Segovia Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "SG"
      },
      {
        "id": 1155,
        "name": "Seville Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "SE"
      },
      {
        "id": 1208,
        "name": "Soria Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "SO"
      },
      {
        "id": 1164,
        "name": "Tarragona Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "T"
      },
      {
        "id": 1182,
        "name": "Teruel Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "TE"
      },
      {
        "id": 1165,
        "name": "Toledo Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "TO"
      },
      {
        "id": 1152,
        "name": "Valencia Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "V"
      },
      {
        "id": 1175,
        "name": "Valencian Community",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "VC"
      },
      {
        "id": 1183,
        "name": "Valladolid Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "VA"
      },
      {
        "id": 1161,
        "name": "Zamora Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "ZA"
      },
      {
        "id": 1162,
        "name": "Zaragoza Province",
        "country_id": 207,
        "country_code": "ES",
        "state_code": "Z"
      },
      {
        "id": 2799,
        "name": "Ampara District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "52"
      },
      {
        "id": 2816,
        "name": "Anuradhapura District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "71"
      },
      {
        "id": 2790,
        "name": "Badulla District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "81"
      },
      {
        "id": 2818,
        "name": "Batticaloa District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "51"
      },
      {
        "id": 2798,
        "name": "Central Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "2"
      },
      {
        "id": 2815,
        "name": "Colombo District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "11"
      },
      {
        "id": 2808,
        "name": "Eastern Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "5"
      },
      {
        "id": 2792,
        "name": "Galle District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "31"
      },
      {
        "id": 2804,
        "name": "Gampaha District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "12"
      },
      {
        "id": 2791,
        "name": "Hambantota District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "33"
      },
      {
        "id": 2787,
        "name": "Jaffna District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "41"
      },
      {
        "id": 2789,
        "name": "Kalutara District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "13"
      },
      {
        "id": 2788,
        "name": "Kandy District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "21"
      },
      {
        "id": 2797,
        "name": "Kegalle District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "92"
      },
      {
        "id": 2793,
        "name": "Kilinochchi District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "42"
      },
      {
        "id": 2805,
        "name": "Mannar District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "43"
      },
      {
        "id": 2810,
        "name": "Matale District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "22"
      },
      {
        "id": 2806,
        "name": "Matara District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "32"
      },
      {
        "id": 2819,
        "name": "Monaragala District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "82"
      },
      {
        "id": 2814,
        "name": "Mullaitivu District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "45"
      },
      {
        "id": 2800,
        "name": "North Central Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "7"
      },
      {
        "id": 2817,
        "name": "North Western Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "6"
      },
      {
        "id": 2813,
        "name": "Northern Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "4"
      },
      {
        "id": 2794,
        "name": "Nuwara Eliya District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "23"
      },
      {
        "id": 2812,
        "name": "Polonnaruwa District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "72"
      },
      {
        "id": 2796,
        "name": "Puttalam District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "62"
      },
      {
        "id": 2807,
        "name": "Ratnapura district",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "91"
      },
      {
        "id": 2803,
        "name": "Sabaragamuwa Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "9"
      },
      {
        "id": 2801,
        "name": "Southern Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "3"
      },
      {
        "id": 2795,
        "name": "Trincomalee District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "53"
      },
      {
        "id": 2811,
        "name": "Uva Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "8"
      },
      {
        "id": 2809,
        "name": "Vavuniya District",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "44"
      },
      {
        "id": 2802,
        "name": "Western Province",
        "country_id": 208,
        "country_code": "LK",
        "state_code": "1"
      },
      {
        "id": 885,
        "name": "Al Jazirah",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "GZ"
      },
      {
        "id": 886,
        "name": "Al Qadarif",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "GD"
      },
      {
        "id": 887,
        "name": "Blue Nile",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "NB"
      },
      {
        "id": 896,
        "name": "Central Darfur",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "DC"
      },
      {
        "id": 892,
        "name": "East Darfur",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "DE"
      },
      {
        "id": 884,
        "name": "Kassala",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "KA"
      },
      {
        "id": 881,
        "name": "Khartoum",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "KH"
      },
      {
        "id": 890,
        "name": "North Darfur",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "DN"
      },
      {
        "id": 893,
        "name": "North Kordofan",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "KN"
      },
      {
        "id": 895,
        "name": "Northern",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "NO"
      },
      {
        "id": 880,
        "name": "Red Sea",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "RS"
      },
      {
        "id": 891,
        "name": "River Nile",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "NR"
      },
      {
        "id": 882,
        "name": "Sennar",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "SI"
      },
      {
        "id": 894,
        "name": "South Darfur",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "DS"
      },
      {
        "id": 883,
        "name": "South Kordofan",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "KS"
      },
      {
        "id": 888,
        "name": "West Darfur",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "DW"
      },
      {
        "id": 889,
        "name": "West Kordofan",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "GK"
      },
      {
        "id": 879,
        "name": "White Nile",
        "country_id": 209,
        "country_code": "SD",
        "state_code": "NW"
      },
      {
        "id": 2846,
        "name": "Brokopondo District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "BR"
      },
      {
        "id": 2839,
        "name": "Commewijne District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "CM"
      },
      {
        "id": 2842,
        "name": "Coronie District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "CR"
      },
      {
        "id": 2845,
        "name": "Marowijne District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "MA"
      },
      {
        "id": 2840,
        "name": "Nickerie District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "NI"
      },
      {
        "id": 2841,
        "name": "Para District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "PR"
      },
      {
        "id": 2843,
        "name": "Paramaribo District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "PM"
      },
      {
        "id": 2848,
        "name": "Saramacca District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "SA"
      },
      {
        "id": 2847,
        "name": "Sipaliwini District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "SI"
      },
      {
        "id": 2844,
        "name": "Wanica District",
        "country_id": 210,
        "country_code": "SR",
        "state_code": "WA"
      },
      {
        "id": 969,
        "name": "Hhohho District",
        "country_id": 212,
        "country_code": "SZ",
        "state_code": "HH"
      },
      {
        "id": 970,
        "name": "Lubombo District",
        "country_id": 212,
        "country_code": "SZ",
        "state_code": "LU"
      },
      {
        "id": 968,
        "name": "Manzini District",
        "country_id": 212,
        "country_code": "SZ",
        "state_code": "MA"
      },
      {
        "id": 971,
        "name": "Shiselweni District",
        "country_id": 212,
        "country_code": "SZ",
        "state_code": "SH"
      },
      {
        "id": 1537,
        "name": "Blekinge",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "K"
      },
      {
        "id": 1534,
        "name": "Dalarna County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "W"
      },
      {
        "id": 1533,
        "name": "Gävleborg County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "X"
      },
      {
        "id": 1546,
        "name": "Gotland County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "I"
      },
      {
        "id": 1548,
        "name": "Halland County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "N"
      },
      {
        "id": 1550,
        "name": "Jönköping County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "F"
      },
      {
        "id": 1544,
        "name": "Kalmar County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "H"
      },
      {
        "id": 1542,
        "name": "Kronoberg County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "G"
      },
      {
        "id": 1538,
        "name": "Norrbotten County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "BD"
      },
      {
        "id": 1539,
        "name": "Örebro County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "T"
      },
      {
        "id": 1536,
        "name": "Östergötland County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "E"
      },
      {
        "id": 1541,
        "name": "Skåne County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "M"
      },
      {
        "id": 1540,
        "name": "Södermanland County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "D"
      },
      {
        "id": 1551,
        "name": "Stockholm County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "AB"
      },
      {
        "id": 1545,
        "name": "Uppsala County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "C"
      },
      {
        "id": 1535,
        "name": "Värmland County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "S"
      },
      {
        "id": 1543,
        "name": "Västerbotten County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "AC"
      },
      {
        "id": 1552,
        "name": "Västernorrland County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "Y"
      },
      {
        "id": 1549,
        "name": "Västmanland County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "U"
      },
      {
        "id": 1547,
        "name": "Västra Götaland County",
        "country_id": 213,
        "country_code": "SE",
        "state_code": "O"
      },
      {
        "id": 1639,
        "name": "Aargau",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "AG"
      },
      {
        "id": 1655,
        "name": "Appenzell Ausserrhoden",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "AR"
      },
      {
        "id": 1649,
        "name": "Appenzell Innerrhoden",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "AI"
      },
      {
        "id": 1641,
        "name": "Basel-Landschaft",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "BL"
      },
      {
        "id": 1645,
        "name": "canton of Bern",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "BE"
      },
      {
        "id": 1640,
        "name": "Canton of Fribourg",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "FR"
      },
      {
        "id": 1647,
        "name": "Canton of Geneva",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "GE"
      },
      {
        "id": 1658,
        "name": "Canton of Jura",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "JU"
      },
      {
        "id": 1663,
        "name": "Canton of Lucerne",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "LU"
      },
      {
        "id": 1659,
        "name": "Canton of Neuchâtel",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "NE"
      },
      {
        "id": 1654,
        "name": "Canton of Schaffhausen",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "SH"
      },
      {
        "id": 1662,
        "name": "Canton of Solothurn",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "SO"
      },
      {
        "id": 1644,
        "name": "Canton of St. Gallen",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "SG"
      },
      {
        "id": 1648,
        "name": "Canton of Valais",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "VS"
      },
      {
        "id": 1651,
        "name": "Canton of Vaud",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "VD"
      },
      {
        "id": 1646,
        "name": "Canton of Zug",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "ZG"
      },
      {
        "id": 1656,
        "name": "canton of Zürich",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "ZH"
      },
      {
        "id": 1661,
        "name": "Glarus",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "GL"
      },
      {
        "id": 1660,
        "name": "Graubünden",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "GR"
      },
      {
        "id": 1652,
        "name": "Nidwalden",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "NW"
      },
      {
        "id": 1650,
        "name": "Obwalden",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "OW"
      },
      {
        "id": 1653,
        "name": "Schwyz",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "SZ"
      },
      {
        "id": 1657,
        "name": "Thurgau",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "TG"
      },
      {
        "id": 1643,
        "name": "Ticino",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "TI"
      },
      {
        "id": 1642,
        "name": "Uri",
        "country_id": 214,
        "country_code": "CH",
        "state_code": "UR"
      },
      {
        "id": 2941,
        "name": "Al-Hasakah Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "HA"
      },
      {
        "id": 2944,
        "name": "Al-Raqqah Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "RA"
      },
      {
        "id": 2946,
        "name": "Aleppo Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "HL"
      },
      {
        "id": 2936,
        "name": "As-Suwayda Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "SU"
      },
      {
        "id": 2939,
        "name": "Damascus Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "DI"
      },
      {
        "id": 2945,
        "name": "Daraa Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "DR"
      },
      {
        "id": 2937,
        "name": "Deir ez-Zor Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "DY"
      },
      {
        "id": 2934,
        "name": "Hama Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "HM"
      },
      {
        "id": 2942,
        "name": "Homs Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "HI"
      },
      {
        "id": 2940,
        "name": "Idlib Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "ID"
      },
      {
        "id": 2938,
        "name": "Latakia Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "LA"
      },
      {
        "id": 2943,
        "name": "Quneitra Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "QU"
      },
      {
        "id": 2935,
        "name": "Rif Dimashq Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "RD"
      },
      {
        "id": 2947,
        "name": "Tartus Governorate",
        "country_id": 215,
        "country_code": "SY",
        "state_code": "TA"
      },
      {
        "id": 3404,
        "name": "Changhua County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "CHA"
      },
      {
        "id": 3418,
        "name": "Chiayi City",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "CYQ"
      },
      {
        "id": 3408,
        "name": "Chiayi County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "CYI"
      },
      {
        "id": 3417,
        "name": "Hsinchu",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "HSZ"
      },
      {
        "id": 3423,
        "name": "Hsinchu County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "HSQ"
      },
      {
        "id": 3411,
        "name": "Hualien County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "HUA"
      },
      {
        "id": 3412,
        "name": "Kaohsiung",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "KHH"
      },
      {
        "id": 3409,
        "name": "Kaohsiung County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "KHQ"
      },
      {
        "id": 3415,
        "name": "Kinmen",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "KIN"
      },
      {
        "id": 3420,
        "name": "Lienchiang County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "LIE"
      },
      {
        "id": 3413,
        "name": "Miaoli County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "MIA"
      },
      {
        "id": 3407,
        "name": "Nantou County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "NAN"
      },
      {
        "id": 3403,
        "name": "Penghu County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "PEN"
      },
      {
        "id": 3405,
        "name": "Pingtung County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "PIF"
      },
      {
        "id": 3406,
        "name": "Taichung",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "TXG"
      },
      {
        "id": 3414,
        "name": "Taichung County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "TXQ"
      },
      {
        "id": 3421,
        "name": "Tainan",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "TNN"
      },
      {
        "id": 3401,
        "name": "Tainan County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "TNQ"
      },
      {
        "id": 3422,
        "name": "Taipei",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "TPE"
      },
      {
        "id": 3410,
        "name": "Taitung County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "TTT"
      },
      {
        "id": 3419,
        "name": "Taoyuan City",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "TAO"
      },
      {
        "id": 3402,
        "name": "Yilan County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "ILA"
      },
      {
        "id": 3416,
        "name": "Yunlin County",
        "country_id": 216,
        "country_code": "TW",
        "state_code": "YUN"
      },
      {
        "id": 3397,
        "name": "districts of Republican Subordination",
        "country_id": 217,
        "country_code": "TJ",
        "state_code": "RA"
      },
      {
        "id": 3399,
        "name": "Gorno-Badakhshan Autonomous Province",
        "country_id": 217,
        "country_code": "TJ",
        "state_code": "GB"
      },
      {
        "id": 3398,
        "name": "Khatlon Province",
        "country_id": 217,
        "country_code": "TJ",
        "state_code": "KT"
      },
      {
        "id": 3400,
        "name": "Sughd Province",
        "country_id": 217,
        "country_code": "TJ",
        "state_code": "SU"
      },
      {
        "id": 1491,
        "name": "Arusha Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "01"
      },
      {
        "id": 1490,
        "name": "Dar es Salaam Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "02"
      },
      {
        "id": 1466,
        "name": "Dodoma Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "03"
      },
      {
        "id": 1481,
        "name": "Geita Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "27"
      },
      {
        "id": 1489,
        "name": "Iringa Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "04"
      },
      {
        "id": 1465,
        "name": "Kagera Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "05"
      },
      {
        "id": 1482,
        "name": "Katavi Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "28"
      },
      {
        "id": 1478,
        "name": "Kigoma Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "08"
      },
      {
        "id": 1467,
        "name": "Kilimanjaro Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "09"
      },
      {
        "id": 1483,
        "name": "Lindi Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "12"
      },
      {
        "id": 1484,
        "name": "Manyara Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "26"
      },
      {
        "id": 1468,
        "name": "Mara Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "13"
      },
      {
        "id": 1470,
        "name": "Morogoro Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "16"
      },
      {
        "id": 1476,
        "name": "Mtwara Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "17"
      },
      {
        "id": 1479,
        "name": "Mwanza Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "18"
      },
      {
        "id": 1480,
        "name": "Njombe Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "29"
      },
      {
        "id": 1488,
        "name": "North Pemba Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "06"
      },
      {
        "id": 1485,
        "name": "Pwani Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "19"
      },
      {
        "id": 1477,
        "name": "Rukwa Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "20"
      },
      {
        "id": 1486,
        "name": "Ruvuma Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "21"
      },
      {
        "id": 1463,
        "name": "Shinyanga Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "22"
      },
      {
        "id": 1464,
        "name": "Simiyu Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "30"
      },
      {
        "id": 1474,
        "name": "Singida Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "23"
      },
      {
        "id": 1472,
        "name": "South Pemba Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "10"
      },
      {
        "id": 1469,
        "name": "Tabora Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "24"
      },
      {
        "id": 1487,
        "name": "Tanga Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "25"
      },
      {
        "id": 1471,
        "name": "Zanzibar Central\/South Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "11"
      },
      {
        "id": 1473,
        "name": "Zanzibar North Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "07"
      },
      {
        "id": 1475,
        "name": "Zanzibar Urban\/West Region",
        "country_id": 218,
        "country_code": "TZ",
        "state_code": "15"
      },
      {
        "id": 3523,
        "name": "Amnat Charoen",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "37"
      },
      {
        "id": 3519,
        "name": "Ang Thong",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "15"
      },
      {
        "id": 3554,
        "name": "Bangkok",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "10"
      },
      {
        "id": 3533,
        "name": "Bueng Kan",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "38"
      },
      {
        "id": 3534,
        "name": "Buri Ram",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "31"
      },
      {
        "id": 3552,
        "name": "Chachoengsao",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "24"
      },
      {
        "id": 3522,
        "name": "Chai Nat",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "18"
      },
      {
        "id": 3486,
        "name": "Chanthaburi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "22"
      },
      {
        "id": 3491,
        "name": "Chiang Mai",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "50"
      },
      {
        "id": 3498,
        "name": "Chiang Rai",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "57"
      },
      {
        "id": 3513,
        "name": "Chon Buri",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "20"
      },
      {
        "id": 3526,
        "name": "Chumphon",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "86"
      },
      {
        "id": 3550,
        "name": "Kalasin",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "46"
      },
      {
        "id": 3516,
        "name": "Kamphaeng Phet",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "62"
      },
      {
        "id": 3511,
        "name": "Kanchanaburi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "71"
      },
      {
        "id": 3485,
        "name": "Khon Kaen",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "40"
      },
      {
        "id": 3478,
        "name": "Krabi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "81"
      },
      {
        "id": 3544,
        "name": "Lampang",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "52"
      },
      {
        "id": 3483,
        "name": "Lamphun",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "51"
      },
      {
        "id": 3509,
        "name": "Loei",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "42"
      },
      {
        "id": 3543,
        "name": "Lopburi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "16"
      },
      {
        "id": 3505,
        "name": "Mae Hong Son",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "58"
      },
      {
        "id": 3517,
        "name": "Maha Sarakham",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "44"
      },
      {
        "id": 3546,
        "name": "Mukdahan",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "49"
      },
      {
        "id": 3535,
        "name": "Nakhon Nayok",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "26"
      },
      {
        "id": 3503,
        "name": "Nakhon Pathom",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "73"
      },
      {
        "id": 3548,
        "name": "Nakhon Phanom",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "48"
      },
      {
        "id": 3497,
        "name": "Nakhon Ratchasima",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "30"
      },
      {
        "id": 3492,
        "name": "Nakhon Sawan",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "60"
      },
      {
        "id": 3520,
        "name": "Nakhon Si Thammarat",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "80"
      },
      {
        "id": 3530,
        "name": "Nan",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "55"
      },
      {
        "id": 3553,
        "name": "Narathiwat",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "96"
      },
      {
        "id": 3480,
        "name": "Nong Bua Lam Phu",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "39"
      },
      {
        "id": 3484,
        "name": "Nong Khai",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "43"
      },
      {
        "id": 3495,
        "name": "Nonthaburi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "12"
      },
      {
        "id": 3500,
        "name": "Pathum Thani",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "13"
      },
      {
        "id": 3540,
        "name": "Pattani",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "94"
      },
      {
        "id": 3507,
        "name": "Pattaya",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "S"
      },
      {
        "id": 3549,
        "name": "Phang Nga",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "82"
      },
      {
        "id": 3488,
        "name": "Phatthalung",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "93"
      },
      {
        "id": 3538,
        "name": "Phayao",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "56"
      },
      {
        "id": 3515,
        "name": "Phetchabun",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "67"
      },
      {
        "id": 3532,
        "name": "Phetchaburi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "76"
      },
      {
        "id": 3514,
        "name": "Phichit",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "66"
      },
      {
        "id": 3506,
        "name": "Phitsanulok",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "65"
      },
      {
        "id": 3494,
        "name": "Phra Nakhon Si Ayutthaya",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "14"
      },
      {
        "id": 3528,
        "name": "Phrae",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "54"
      },
      {
        "id": 3536,
        "name": "Phuket",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "83"
      },
      {
        "id": 3542,
        "name": "Prachin Buri",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "25"
      },
      {
        "id": 3508,
        "name": "Prachuap Khiri Khan",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "77"
      },
      {
        "id": 3479,
        "name": "Ranong",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "85"
      },
      {
        "id": 3499,
        "name": "Ratchaburi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "70"
      },
      {
        "id": 3518,
        "name": "Rayong",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "21"
      },
      {
        "id": 3510,
        "name": "Roi Et",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "45"
      },
      {
        "id": 3529,
        "name": "Sa Kaeo",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "27"
      },
      {
        "id": 3501,
        "name": "Sakon Nakhon",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "47"
      },
      {
        "id": 3481,
        "name": "Samut Prakan",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "11"
      },
      {
        "id": 3504,
        "name": "Samut Sakhon",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "74"
      },
      {
        "id": 3502,
        "name": "Samut Songkhram",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "75"
      },
      {
        "id": 3487,
        "name": "Saraburi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "19"
      },
      {
        "id": 3537,
        "name": "Satun",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "91"
      },
      {
        "id": 3547,
        "name": "Si Sa Ket",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "33"
      },
      {
        "id": 3490,
        "name": "Sing Buri",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "17"
      },
      {
        "id": 3539,
        "name": "Songkhla",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "90"
      },
      {
        "id": 3545,
        "name": "Sukhothai",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "64"
      },
      {
        "id": 3524,
        "name": "Suphanburi",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "72"
      },
      {
        "id": 3482,
        "name": "Surat Thani",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "84"
      },
      {
        "id": 3531,
        "name": "Surin",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "32"
      },
      {
        "id": 3525,
        "name": "Tak",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "63"
      },
      {
        "id": 3541,
        "name": "Trang",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "92"
      },
      {
        "id": 3496,
        "name": "Trat",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "23"
      },
      {
        "id": 3512,
        "name": "Ubon Ratchathani",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "34"
      },
      {
        "id": 3527,
        "name": "Udon Thani",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "41"
      },
      {
        "id": 3551,
        "name": "Uthai Thani",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "61"
      },
      {
        "id": 3489,
        "name": "Uttaradit",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "53"
      },
      {
        "id": 3493,
        "name": "Yala",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "95"
      },
      {
        "id": 3521,
        "name": "Yasothon",
        "country_id": 219,
        "country_code": "TH",
        "state_code": "35"
      },
      {
        "id": 2575,
        "name": "Centrale Region",
        "country_id": 220,
        "country_code": "TG",
        "state_code": "C"
      },
      {
        "id": 2579,
        "name": "Kara Region",
        "country_id": 220,
        "country_code": "TG",
        "state_code": "K"
      },
      {
        "id": 2576,
        "name": "Maritime",
        "country_id": 220,
        "country_code": "TG",
        "state_code": "M"
      },
      {
        "id": 2577,
        "name": "Plateaux Region",
        "country_id": 220,
        "country_code": "TG",
        "state_code": "P"
      },
      {
        "id": 2578,
        "name": "Savanes Region",
        "country_id": 220,
        "country_code": "TG",
        "state_code": "S"
      },
      {
        "id": 3913,
        "name": "Haʻapai",
        "country_id": 222,
        "country_code": "TO",
        "state_code": "02"
      },
      {
        "id": 3915,
        "name": "ʻEua",
        "country_id": 222,
        "country_code": "TO",
        "state_code": "01"
      },
      {
        "id": 3914,
        "name": "Niuas",
        "country_id": 222,
        "country_code": "TO",
        "state_code": "03"
      },
      {
        "id": 3912,
        "name": "Tongatapu",
        "country_id": 222,
        "country_code": "TO",
        "state_code": "04"
      },
      {
        "id": 3911,
        "name": "Vavaʻu",
        "country_id": 222,
        "country_code": "TO",
        "state_code": "05"
      },
      {
        "id": 3362,
        "name": "Arima",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "ARI"
      },
      {
        "id": 3366,
        "name": "Chaguanas",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "CHA"
      },
      {
        "id": 3354,
        "name": "Couva-Tabaquite-Talparo Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "CTT"
      },
      {
        "id": 3367,
        "name": "Diego Martin Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "DMN"
      },
      {
        "id": 3355,
        "name": "Eastern Tobago",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "ETO"
      },
      {
        "id": 3365,
        "name": "Penal-Debe Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "PED"
      },
      {
        "id": 3360,
        "name": "Point Fortin",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "PTF"
      },
      {
        "id": 3363,
        "name": "Port of Spain",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "POS"
      },
      {
        "id": 3368,
        "name": "Princes Town Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "PRT"
      },
      {
        "id": 3356,
        "name": "Rio Claro-Mayaro Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "MRC"
      },
      {
        "id": 3359,
        "name": "San Fernando",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "SFO"
      },
      {
        "id": 3357,
        "name": "San Juan-Laventille Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "SJL"
      },
      {
        "id": 3361,
        "name": "Sangre Grande Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "SGE"
      },
      {
        "id": 3364,
        "name": "Siparia Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "SIP"
      },
      {
        "id": 3358,
        "name": "Tunapuna-Piarco Regional Corporation",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "TUP"
      },
      {
        "id": 3353,
        "name": "Western Tobago",
        "country_id": 223,
        "country_code": "TT",
        "state_code": "WTO"
      },
      {
        "id": 2550,
        "name": "Ariana Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "12"
      },
      {
        "id": 2566,
        "name": "Ben Arous Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "13"
      },
      {
        "id": 2551,
        "name": "Bizerte Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "23"
      },
      {
        "id": 2558,
        "name": "Gabès Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "81"
      },
      {
        "id": 2556,
        "name": "Gafsa Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "71"
      },
      {
        "id": 2552,
        "name": "Jendouba Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "32"
      },
      {
        "id": 2564,
        "name": "Kairouan Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "41"
      },
      {
        "id": 2570,
        "name": "Kasserine Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "42"
      },
      {
        "id": 2572,
        "name": "Kassrine",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "31"
      },
      {
        "id": 2562,
        "name": "Kebili Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "73"
      },
      {
        "id": 2561,
        "name": "Kef Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "33"
      },
      {
        "id": 2568,
        "name": "Mahdia Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "53"
      },
      {
        "id": 2555,
        "name": "Manouba Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "14"
      },
      {
        "id": 2560,
        "name": "Medenine Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "82"
      },
      {
        "id": 2553,
        "name": "Monastir Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "52"
      },
      {
        "id": 2557,
        "name": "Sfax Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "61"
      },
      {
        "id": 2567,
        "name": "Sidi Bouzid Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "43"
      },
      {
        "id": 2563,
        "name": "Siliana Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "34"
      },
      {
        "id": 2571,
        "name": "Sousse Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "51"
      },
      {
        "id": 2559,
        "name": "Tataouine Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "83"
      },
      {
        "id": 2569,
        "name": "Tozeur Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "72"
      },
      {
        "id": 2554,
        "name": "Tunis Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "11"
      },
      {
        "id": 2565,
        "name": "Zaghouan Governorate",
        "country_id": 224,
        "country_code": "TN",
        "state_code": "22"
      },
      {
        "id": 2212,
        "name": "Adana Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "01"
      },
      {
        "id": 2155,
        "name": "Adıyaman Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "02"
      },
      {
        "id": 2179,
        "name": "Afyonkarahisar Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "03"
      },
      {
        "id": 2193,
        "name": "Ağrı Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "04"
      },
      {
        "id": 2210,
        "name": "Aksaray Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "68"
      },
      {
        "id": 2161,
        "name": "Amasya Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "05"
      },
      {
        "id": 2217,
        "name": "Ankara Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "06"
      },
      {
        "id": 2169,
        "name": "Antalya Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "07"
      },
      {
        "id": 2185,
        "name": "Ardahan Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "75"
      },
      {
        "id": 2191,
        "name": "Artvin Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "08"
      },
      {
        "id": 2187,
        "name": "Aydın Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "09"
      },
      {
        "id": 2175,
        "name": "Balıkesir Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "10"
      },
      {
        "id": 2148,
        "name": "Bartın Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "74"
      },
      {
        "id": 2194,
        "name": "Batman Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "72"
      },
      {
        "id": 2177,
        "name": "Bayburt Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "69"
      },
      {
        "id": 2221,
        "name": "Bilecik Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "11"
      },
      {
        "id": 2153,
        "name": "Bingöl Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "12"
      },
      {
        "id": 2215,
        "name": "Bitlis Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "13"
      },
      {
        "id": 2172,
        "name": "Bolu Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "14"
      },
      {
        "id": 2209,
        "name": "Burdur Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "15"
      },
      {
        "id": 2163,
        "name": "Bursa Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "16"
      },
      {
        "id": 2216,
        "name": "Çanakkale Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "17"
      },
      {
        "id": 2168,
        "name": "Çankırı Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "18"
      },
      {
        "id": 2173,
        "name": "Çorum Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "19"
      },
      {
        "id": 2157,
        "name": "Denizli Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "20"
      },
      {
        "id": 2226,
        "name": "Diyarbakır Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "21"
      },
      {
        "id": 2202,
        "name": "Düzce Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "81"
      },
      {
        "id": 2151,
        "name": "Edirne Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "22"
      },
      {
        "id": 2159,
        "name": "Elazığ Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "23"
      },
      {
        "id": 2160,
        "name": "Erzincan Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "24"
      },
      {
        "id": 2165,
        "name": "Erzurum Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "25"
      },
      {
        "id": 2164,
        "name": "Eskişehir Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "26"
      },
      {
        "id": 2203,
        "name": "Gaziantep Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "27"
      },
      {
        "id": 2186,
        "name": "Giresun Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "28"
      },
      {
        "id": 2204,
        "name": "Gümüşhane Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "29"
      },
      {
        "id": 2190,
        "name": "Hakkâri Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "30"
      },
      {
        "id": 2211,
        "name": "Hatay Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "31"
      },
      {
        "id": 2166,
        "name": "Iğdır Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "76"
      },
      {
        "id": 2222,
        "name": "Isparta Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "32"
      },
      {
        "id": 2170,
        "name": "Istanbul Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "34"
      },
      {
        "id": 2205,
        "name": "İzmir Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "35"
      },
      {
        "id": 2227,
        "name": "Kahramanmaraş Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "46"
      },
      {
        "id": 2223,
        "name": "Karabük Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "78"
      },
      {
        "id": 2184,
        "name": "Karaman Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "70"
      },
      {
        "id": 2208,
        "name": "Kars Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "36"
      },
      {
        "id": 2197,
        "name": "Kastamonu Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "37"
      },
      {
        "id": 2200,
        "name": "Kayseri Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "38"
      },
      {
        "id": 2154,
        "name": "Kilis Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "79"
      },
      {
        "id": 2178,
        "name": "Kırıkkale Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "71"
      },
      {
        "id": 2176,
        "name": "Kırklareli Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "39"
      },
      {
        "id": 2180,
        "name": "Kırşehir Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "40"
      },
      {
        "id": 2195,
        "name": "Kocaeli Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "41"
      },
      {
        "id": 2171,
        "name": "Konya Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "42"
      },
      {
        "id": 2149,
        "name": "Kütahya Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "43"
      },
      {
        "id": 2158,
        "name": "Malatya Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "44"
      },
      {
        "id": 2198,
        "name": "Manisa Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "45"
      },
      {
        "id": 2224,
        "name": "Mardin Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "47"
      },
      {
        "id": 2156,
        "name": "Mersin Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "33"
      },
      {
        "id": 2182,
        "name": "Muğla Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "48"
      },
      {
        "id": 2162,
        "name": "Muş Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "49"
      },
      {
        "id": 2196,
        "name": "Nevşehir Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "50"
      },
      {
        "id": 2189,
        "name": "Niğde Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "51"
      },
      {
        "id": 2174,
        "name": "Ordu Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "52"
      },
      {
        "id": 2214,
        "name": "Osmaniye Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "80"
      },
      {
        "id": 2219,
        "name": "Rize Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "53"
      },
      {
        "id": 2150,
        "name": "Sakarya Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "54"
      },
      {
        "id": 2220,
        "name": "Samsun Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "55"
      },
      {
        "id": 2183,
        "name": "Şanlıurfa Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "63"
      },
      {
        "id": 2207,
        "name": "Siirt Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "56"
      },
      {
        "id": 4854,
        "name": "Sinop Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "57"
      },
      {
        "id": 2181,
        "name": "Sivas Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "58"
      },
      {
        "id": 2225,
        "name": "Şırnak Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "73"
      },
      {
        "id": 2167,
        "name": "Tekirdağ Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "59"
      },
      {
        "id": 2199,
        "name": "Tokat Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "60"
      },
      {
        "id": 2206,
        "name": "Trabzon Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "61"
      },
      {
        "id": 2192,
        "name": "Tunceli Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "62"
      },
      {
        "id": 2201,
        "name": "Uşak Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "64"
      },
      {
        "id": 2152,
        "name": "Van Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "65"
      },
      {
        "id": 2218,
        "name": "Yalova Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "77"
      },
      {
        "id": 2188,
        "name": "Yozgat Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "66"
      },
      {
        "id": 2213,
        "name": "Zonguldak Province",
        "country_id": 225,
        "country_code": "TR",
        "state_code": "67"
      },
      {
        "id": 3374,
        "name": "Ahal Region",
        "country_id": 226,
        "country_code": "TM",
        "state_code": "A"
      },
      {
        "id": 3371,
        "name": "Ashgabat",
        "country_id": 226,
        "country_code": "TM",
        "state_code": "S"
      },
      {
        "id": 3372,
        "name": "Balkan Region",
        "country_id": 226,
        "country_code": "TM",
        "state_code": "B"
      },
      {
        "id": 3373,
        "name": "Daşoguz Region",
        "country_id": 226,
        "country_code": "TM",
        "state_code": "D"
      },
      {
        "id": 3370,
        "name": "Lebap Region",
        "country_id": 226,
        "country_code": "TM",
        "state_code": "L"
      },
      {
        "id": 3369,
        "name": "Mary Region",
        "country_id": 226,
        "country_code": "TM",
        "state_code": "M"
      },
      {
        "id": 3951,
        "name": "Funafuti",
        "country_id": 228,
        "country_code": "TV",
        "state_code": "FUN"
      },
      {
        "id": 3947,
        "name": "Nanumanga",
        "country_id": 228,
        "country_code": "TV",
        "state_code": "NMG"
      },
      {
        "id": 3949,
        "name": "Nanumea",
        "country_id": 228,
        "country_code": "TV",
        "state_code": "NMA"
      },
      {
        "id": 3946,
        "name": "Niutao Island Council",
        "country_id": 228,
        "country_code": "TV",
        "state_code": "NIT"
      },
      {
        "id": 3948,
        "name": "Nui",
        "country_id": 228,
        "country_code": "TV",
        "state_code": "NUI"
      },
      {
        "id": 3952,
        "name": "Nukufetau",
        "country_id": 228,
        "country_code": "TV",
        "state_code": "NKF"
      },
      {
        "id": 3953,
        "name": "Nukulaelae",
        "country_id": 228,
        "country_code": "TV",
        "state_code": "NKL"
      },
      {
        "id": 3950,
        "name": "Vaitupu",
        "country_id": 228,
        "country_code": "TV",
        "state_code": "VAI"
      },
      {
        "id": 329,
        "name": "Abim District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "314"
      },
      {
        "id": 361,
        "name": "Adjumani District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "301"
      },
      {
        "id": 392,
        "name": "Agago District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "322"
      },
      {
        "id": 344,
        "name": "Alebtong District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "323"
      },
      {
        "id": 416,
        "name": "Amolatar District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "315"
      },
      {
        "id": 353,
        "name": "Amudat District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "324"
      },
      {
        "id": 352,
        "name": "Amuria District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "216"
      },
      {
        "id": 335,
        "name": "Amuru District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "316"
      },
      {
        "id": 328,
        "name": "Apac District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "302"
      },
      {
        "id": 447,
        "name": "Arua District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "303"
      },
      {
        "id": 441,
        "name": "Budaka District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "217"
      },
      {
        "id": 349,
        "name": "Bududa District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "218"
      },
      {
        "id": 387,
        "name": "Bugiri District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "201"
      },
      {
        "id": 391,
        "name": "Buhweju District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "420"
      },
      {
        "id": 377,
        "name": "Buikwe District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "117"
      },
      {
        "id": 343,
        "name": "Bukedea District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "219"
      },
      {
        "id": 375,
        "name": "Bukomansimbi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "118"
      },
      {
        "id": 385,
        "name": "Bukwo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "220"
      },
      {
        "id": 428,
        "name": "Bulambuli District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "225"
      },
      {
        "id": 389,
        "name": "Buliisa District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "416"
      },
      {
        "id": 419,
        "name": "Bundibugyo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "401"
      },
      {
        "id": 381,
        "name": "Bunyangabu District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "430"
      },
      {
        "id": 386,
        "name": "Bushenyi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "402"
      },
      {
        "id": 431,
        "name": "Busia District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "202"
      },
      {
        "id": 365,
        "name": "Butaleja District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "221"
      },
      {
        "id": 384,
        "name": "Butambala District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "119"
      },
      {
        "id": 388,
        "name": "Butebo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "233"
      },
      {
        "id": 414,
        "name": "Buvuma District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "120"
      },
      {
        "id": 380,
        "name": "Buyende District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "226"
      },
      {
        "id": 396,
        "name": "Central Region",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "C"
      },
      {
        "id": 341,
        "name": "Dokolo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "317"
      },
      {
        "id": 372,
        "name": "Eastern Region",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "E"
      },
      {
        "id": 366,
        "name": "Gomba District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "121"
      },
      {
        "id": 413,
        "name": "Gulu District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "304"
      },
      {
        "id": 339,
        "name": "Ibanda District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "417"
      },
      {
        "id": 340,
        "name": "Iganga District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "203"
      },
      {
        "id": 383,
        "name": "Isingiro District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "418"
      },
      {
        "id": 367,
        "name": "Jinja District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "204"
      },
      {
        "id": 434,
        "name": "Kaabong District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "318"
      },
      {
        "id": 426,
        "name": "Kabale District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "404"
      },
      {
        "id": 326,
        "name": "Kabarole District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "405"
      },
      {
        "id": 336,
        "name": "Kaberamaido District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "213"
      },
      {
        "id": 403,
        "name": "Kagadi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "427"
      },
      {
        "id": 399,
        "name": "Kakumiro District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "428"
      },
      {
        "id": 405,
        "name": "Kalangala District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "101"
      },
      {
        "id": 398,
        "name": "Kaliro District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "222"
      },
      {
        "id": 394,
        "name": "Kalungu District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "122"
      },
      {
        "id": 382,
        "name": "Kampala District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "102"
      },
      {
        "id": 334,
        "name": "Kamuli District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "205"
      },
      {
        "id": 360,
        "name": "Kamwenge District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "413"
      },
      {
        "id": 373,
        "name": "Kanungu District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "414"
      },
      {
        "id": 432,
        "name": "Kapchorwa District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "206"
      },
      {
        "id": 440,
        "name": "Kasese District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "406"
      },
      {
        "id": 420,
        "name": "Katakwi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "207"
      },
      {
        "id": 368,
        "name": "Kayunga District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "112"
      },
      {
        "id": 436,
        "name": "Kibaale District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "407"
      },
      {
        "id": 347,
        "name": "Kiboga District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "103"
      },
      {
        "id": 338,
        "name": "Kibuku District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "227"
      },
      {
        "id": 355,
        "name": "Kiruhura District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "419"
      },
      {
        "id": 346,
        "name": "Kiryandongo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "421"
      },
      {
        "id": 409,
        "name": "Kisoro District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "408"
      },
      {
        "id": 348,
        "name": "Kitgum District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "305"
      },
      {
        "id": 345,
        "name": "Koboko District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "319"
      },
      {
        "id": 401,
        "name": "Kole District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "325"
      },
      {
        "id": 443,
        "name": "Kotido District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "306"
      },
      {
        "id": 425,
        "name": "Kumi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "208"
      },
      {
        "id": 369,
        "name": "Kween District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "228"
      },
      {
        "id": 325,
        "name": "Kyankwanzi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "123"
      },
      {
        "id": 437,
        "name": "Kyegegwa District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "422"
      },
      {
        "id": 402,
        "name": "Kyenjojo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "415"
      },
      {
        "id": 448,
        "name": "Kyotera District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "125"
      },
      {
        "id": 411,
        "name": "Lamwo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "326"
      },
      {
        "id": 342,
        "name": "Lira District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "307"
      },
      {
        "id": 445,
        "name": "Luuka District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "229"
      },
      {
        "id": 433,
        "name": "Luwero District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "104"
      },
      {
        "id": 417,
        "name": "Lwengo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "124"
      },
      {
        "id": 376,
        "name": "Lyantonde District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "114"
      },
      {
        "id": 438,
        "name": "Manafwa District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "223"
      },
      {
        "id": 421,
        "name": "Maracha District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "320"
      },
      {
        "id": 356,
        "name": "Masaka District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "105"
      },
      {
        "id": 354,
        "name": "Masindi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "409"
      },
      {
        "id": 418,
        "name": "Mayuge District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "214"
      },
      {
        "id": 350,
        "name": "Mbale District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "209"
      },
      {
        "id": 415,
        "name": "Mbarara District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "410"
      },
      {
        "id": 435,
        "name": "Mitooma District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "423"
      },
      {
        "id": 364,
        "name": "Mityana District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "115"
      },
      {
        "id": 395,
        "name": "Moroto District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "308"
      },
      {
        "id": 363,
        "name": "Moyo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "309"
      },
      {
        "id": 327,
        "name": "Mpigi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "106"
      },
      {
        "id": 371,
        "name": "Mubende District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "107"
      },
      {
        "id": 410,
        "name": "Mukono District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "108"
      },
      {
        "id": 393,
        "name": "Nakapiripirit District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "311"
      },
      {
        "id": 423,
        "name": "Nakaseke District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "116"
      },
      {
        "id": 406,
        "name": "Nakasongola District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "109"
      },
      {
        "id": 351,
        "name": "Namayingo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "230"
      },
      {
        "id": 400,
        "name": "Namisindwa District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "234"
      },
      {
        "id": 337,
        "name": "Namutumba District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "224"
      },
      {
        "id": 430,
        "name": "Napak District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "327"
      },
      {
        "id": 446,
        "name": "Nebbi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "310"
      },
      {
        "id": 424,
        "name": "Ngora District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "231"
      },
      {
        "id": 332,
        "name": "Northern Region",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "N"
      },
      {
        "id": 422,
        "name": "Ntoroko District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "424"
      },
      {
        "id": 404,
        "name": "Ntungamo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "411"
      },
      {
        "id": 378,
        "name": "Nwoya District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "328"
      },
      {
        "id": 374,
        "name": "Omoro District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "331"
      },
      {
        "id": 390,
        "name": "Otuke District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "329"
      },
      {
        "id": 397,
        "name": "Oyam District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "321"
      },
      {
        "id": 408,
        "name": "Pader District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "312"
      },
      {
        "id": 357,
        "name": "Pakwach District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "332"
      },
      {
        "id": 412,
        "name": "Pallisa District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "210"
      },
      {
        "id": 439,
        "name": "Rakai District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "110"
      },
      {
        "id": 358,
        "name": "Rubanda District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "429"
      },
      {
        "id": 442,
        "name": "Rubirizi District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "425"
      },
      {
        "id": 331,
        "name": "Rukiga District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "431"
      },
      {
        "id": 324,
        "name": "Rukungiri District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "412"
      },
      {
        "id": 427,
        "name": "Sembabule District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "111"
      },
      {
        "id": 333,
        "name": "Serere District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "232"
      },
      {
        "id": 407,
        "name": "Sheema District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "426"
      },
      {
        "id": 429,
        "name": "Sironko District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "215"
      },
      {
        "id": 444,
        "name": "Soroti District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "211"
      },
      {
        "id": 359,
        "name": "Tororo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "212"
      },
      {
        "id": 362,
        "name": "Wakiso District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "113"
      },
      {
        "id": 370,
        "name": "Western Region",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "W"
      },
      {
        "id": 330,
        "name": "Yumbe District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "313"
      },
      {
        "id": 379,
        "name": "Zombo District",
        "country_id": 229,
        "country_code": "UG",
        "state_code": "330"
      },
      {
        "id": 4689,
        "name": "Autonomous Republic of Crimea",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "43"
      },
      {
        "id": 4680,
        "name": "Cherkasy Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "71"
      },
      {
        "id": 4692,
        "name": "Chernihiv Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "74"
      },
      {
        "id": 4678,
        "name": "Chernivtsi Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "77"
      },
      {
        "id": 4675,
        "name": "Dnipropetrovsk Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "12"
      },
      {
        "id": 4691,
        "name": "Donetsk Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "14"
      },
      {
        "id": 4682,
        "name": "Ivano-Frankivsk Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "26"
      },
      {
        "id": 4686,
        "name": "Kharkiv Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "63"
      },
      {
        "id": 4684,
        "name": "Kherson Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "65"
      },
      {
        "id": 4681,
        "name": "Khmelnytsky Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "68"
      },
      {
        "id": 4676,
        "name": "Kiev",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "30"
      },
      {
        "id": 4677,
        "name": "Kirovohrad Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "35"
      },
      {
        "id": 4671,
        "name": "Kyiv Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "32"
      },
      {
        "id": 4673,
        "name": "Luhansk Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "09"
      },
      {
        "id": 4672,
        "name": "Lviv Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "46"
      },
      {
        "id": 4679,
        "name": "Mykolaiv Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "48"
      },
      {
        "id": 4688,
        "name": "Odessa Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "51"
      },
      {
        "id": 4683,
        "name": "Rivne Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "56"
      },
      {
        "id": 4685,
        "name": "Sumy Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "59"
      },
      {
        "id": 4674,
        "name": "Ternopil Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "61"
      },
      {
        "id": 4669,
        "name": "Vinnytsia Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "05"
      },
      {
        "id": 4690,
        "name": "Volyn Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "07"
      },
      {
        "id": 4670,
        "name": "Zakarpattia Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "21"
      },
      {
        "id": 4687,
        "name": "Zaporizhzhya Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "23"
      },
      {
        "id": 4668,
        "name": "Zhytomyr Oblast",
        "country_id": 230,
        "country_code": "UA",
        "state_code": "18"
      },
      {
        "id": 3396,
        "name": "Abu Dhabi Emirate",
        "country_id": 231,
        "country_code": "AE",
        "state_code": "AZ"
      },
      {
        "id": 3395,
        "name": "Ajman Emirate",
        "country_id": 231,
        "country_code": "AE",
        "state_code": "AJ"
      },
      {
        "id": 3391,
        "name": "Dubai",
        "country_id": 231,
        "country_code": "AE",
        "state_code": "DU"
      },
      {
        "id": 3393,
        "name": "Fujairah",
        "country_id": 231,
        "country_code": "AE",
        "state_code": "FU"
      },
      {
        "id": 3394,
        "name": "Ras al-Khaimah",
        "country_id": 231,
        "country_code": "AE",
        "state_code": "RK"
      },
      {
        "id": 3390,
        "name": "Sharjah Emirate",
        "country_id": 231,
        "country_code": "AE",
        "state_code": "SH"
      },
      {
        "id": 3392,
        "name": "Umm al-Quwain",
        "country_id": 231,
        "country_code": "AE",
        "state_code": "UQ"
      },
      {
        "id": 2463,
        "name": "Aberdeen",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ABE"
      },
      {
        "id": 2401,
        "name": "Aberdeenshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ABD"
      },
      {
        "id": 2387,
        "name": "Angus",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ANS"
      },
      {
        "id": 2533,
        "name": "Antrim",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ANT"
      },
      {
        "id": 2412,
        "name": "Antrim and Newtownabbey",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ANN"
      },
      {
        "id": 2498,
        "name": "Ards",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ARD"
      },
      {
        "id": 2523,
        "name": "Ards and North Down",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "AND"
      },
      {
        "id": 2392,
        "name": "Argyll and Bute",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "AGB"
      },
      {
        "id": 2331,
        "name": "Armagh City and District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ARM"
      },
      {
        "id": 2324,
        "name": "Armagh, Banbridge and Craigavon",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ABC"
      },
      {
        "id": 2378,
        "name": "Ascension Island",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SH-AC"
      },
      {
        "id": 2363,
        "name": "Ballymena Borough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BLA"
      },
      {
        "id": 2361,
        "name": "Ballymoney",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BLY"
      },
      {
        "id": 2315,
        "name": "Banbridge",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BNB"
      },
      {
        "id": 2499,
        "name": "Barnsley",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BNS"
      },
      {
        "id": 2339,
        "name": "Bath and North East Somerset",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BAS"
      },
      {
        "id": 2507,
        "name": "Bedford",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BDF"
      },
      {
        "id": 2311,
        "name": "Belfast district",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BFS"
      },
      {
        "id": 2425,
        "name": "Birmingham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BIR"
      },
      {
        "id": 2329,
        "name": "Blackburn with Darwen",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BBD"
      },
      {
        "id": 2451,
        "name": "Blackpool",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BPL"
      },
      {
        "id": 2530,
        "name": "Blaenau Gwent County Borough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BGW"
      },
      {
        "id": 2504,
        "name": "Bolton",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BOL"
      },
      {
        "id": 2342,
        "name": "Bournemouth",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BMH"
      },
      {
        "id": 2470,
        "name": "Bracknell Forest",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BRC"
      },
      {
        "id": 2529,
        "name": "Bradford",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BRD"
      },
      {
        "id": 2452,
        "name": "Bridgend County Borough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BGE"
      },
      {
        "id": 2395,
        "name": "Brighton and Hove",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BNH"
      },
      {
        "id": 2405,
        "name": "Buckinghamshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BKM"
      },
      {
        "id": 2459,
        "name": "Bury",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BUR"
      },
      {
        "id": 2298,
        "name": "Caerphilly County Borough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CAY"
      },
      {
        "id": 2517,
        "name": "Calderdale",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CLD"
      },
      {
        "id": 2423,
        "name": "Cambridgeshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CAM"
      },
      {
        "id": 2484,
        "name": "Carmarthenshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CMN"
      },
      {
        "id": 2439,
        "name": "Carrickfergus Borough Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CKF"
      },
      {
        "id": 2525,
        "name": "Castlereagh",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CSR"
      },
      {
        "id": 2316,
        "name": "Causeway Coast and Glens",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CCG"
      },
      {
        "id": 2303,
        "name": "Central Bedfordshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CBF"
      },
      {
        "id": 2509,
        "name": "Ceredigion",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CGN"
      },
      {
        "id": 2444,
        "name": "Cheshire East",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CHE"
      },
      {
        "id": 2442,
        "name": "Cheshire West and Chester",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CHW"
      },
      {
        "id": 2528,
        "name": "City and County of Cardiff",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CRF"
      },
      {
        "id": 2433,
        "name": "City and County of Swansea",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SWA"
      },
      {
        "id": 2413,
        "name": "City of Bristol",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BST"
      },
      {
        "id": 2485,
        "name": "City of Derby",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DER"
      },
      {
        "id": 2475,
        "name": "City of Kingston upon Hull",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "KHL"
      },
      {
        "id": 2318,
        "name": "City of Leicester",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LCE"
      },
      {
        "id": 2424,
        "name": "City of London",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LND"
      },
      {
        "id": 2359,
        "name": "City of Nottingham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NGM"
      },
      {
        "id": 2297,
        "name": "City of Peterborough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "PTE"
      },
      {
        "id": 2514,
        "name": "City of Plymouth",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "PLY"
      },
      {
        "id": 2305,
        "name": "City of Portsmouth",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "POR"
      },
      {
        "id": 2294,
        "name": "City of Southampton",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "STH"
      },
      {
        "id": 2506,
        "name": "City of Stoke-on-Trent",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "STE"
      },
      {
        "id": 2372,
        "name": "City of Sunderland",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SND"
      },
      {
        "id": 2357,
        "name": "City of Westminster",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WSM"
      },
      {
        "id": 2489,
        "name": "City of Wolverhampton",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WLV"
      },
      {
        "id": 2426,
        "name": "City of York",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "YOR"
      },
      {
        "id": 2450,
        "name": "Clackmannanshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CLK"
      },
      {
        "id": 2461,
        "name": "Coleraine Borough Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CLR"
      },
      {
        "id": 2352,
        "name": "Conwy County Borough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CWY"
      },
      {
        "id": 2445,
        "name": "Cookstown District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CKT"
      },
      {
        "id": 2312,
        "name": "Cornwall",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CON"
      },
      {
        "id": 2406,
        "name": "County Durham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DUR"
      },
      {
        "id": 2438,
        "name": "Coventry",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "COV"
      },
      {
        "id": 2449,
        "name": "Craigavon Borough Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CGV"
      },
      {
        "id": 2334,
        "name": "Cumbria",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CMA"
      },
      {
        "id": 2389,
        "name": "Darlington",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DAL"
      },
      {
        "id": 2497,
        "name": "Denbighshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DEN"
      },
      {
        "id": 2403,
        "name": "Derbyshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DBY"
      },
      {
        "id": 2446,
        "name": "Derry City and Strabane",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DRS"
      },
      {
        "id": 2417,
        "name": "Derry City Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DRY"
      },
      {
        "id": 2491,
        "name": "Devon",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DEV"
      },
      {
        "id": 2364,
        "name": "Doncaster",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DNC"
      },
      {
        "id": 2345,
        "name": "Dorset",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DOR"
      },
      {
        "id": 2304,
        "name": "Down District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DOW"
      },
      {
        "id": 2457,
        "name": "Dudley",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DUD"
      },
      {
        "id": 2415,
        "name": "Dumfries and Galloway",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DGY"
      },
      {
        "id": 2511,
        "name": "Dundee",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DND"
      },
      {
        "id": 2508,
        "name": "Dungannon and South Tyrone Borough Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "DGN"
      },
      {
        "id": 2374,
        "name": "East Ayrshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "EAY"
      },
      {
        "id": 2454,
        "name": "East Dunbartonshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "EDU"
      },
      {
        "id": 2462,
        "name": "East Lothian",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ELN"
      },
      {
        "id": 2333,
        "name": "East Renfrewshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ERW"
      },
      {
        "id": 2370,
        "name": "East Riding of Yorkshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ERY"
      },
      {
        "id": 2414,
        "name": "East Sussex",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ESX"
      },
      {
        "id": 2428,
        "name": "Edinburgh",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "EDH"
      },
      {
        "id": 2336,
        "name": "England",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ENG"
      },
      {
        "id": 2410,
        "name": "Essex",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ESS"
      },
      {
        "id": 2344,
        "name": "Falkirk",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "FAL"
      },
      {
        "id": 2366,
        "name": "Fermanagh and Omagh",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "FMO"
      },
      {
        "id": 2531,
        "name": "Fermanagh District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "FER"
      },
      {
        "id": 2479,
        "name": "Fife",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "FIF"
      },
      {
        "id": 2437,
        "name": "Flintshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "FLN"
      },
      {
        "id": 2431,
        "name": "Gateshead",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "GAT"
      },
      {
        "id": 2404,
        "name": "Glasgow",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "GLG"
      },
      {
        "id": 2373,
        "name": "Gloucestershire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "GLS"
      },
      {
        "id": 2379,
        "name": "Gwynedd",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "GWN"
      },
      {
        "id": 2466,
        "name": "Halton",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HAL"
      },
      {
        "id": 2435,
        "name": "Hampshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HAM"
      },
      {
        "id": 2309,
        "name": "Hartlepool",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HPL"
      },
      {
        "id": 2500,
        "name": "Herefordshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HEF"
      },
      {
        "id": 2369,
        "name": "Hertfordshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HRT"
      },
      {
        "id": 2383,
        "name": "Highland",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HLD"
      },
      {
        "id": 2388,
        "name": "Inverclyde",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "IVC"
      },
      {
        "id": 2289,
        "name": "Isle of Wight",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "IOW"
      },
      {
        "id": 2343,
        "name": "Isles of Scilly",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "IOS"
      },
      {
        "id": 2464,
        "name": "Kent",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "KEN"
      },
      {
        "id": 2371,
        "name": "Kirklees",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "KIR"
      },
      {
        "id": 2330,
        "name": "Knowsley",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "KWL"
      },
      {
        "id": 2495,
        "name": "Lancashire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LAN"
      },
      {
        "id": 2515,
        "name": "Larne Borough Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LRN"
      },
      {
        "id": 2503,
        "name": "Leeds",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LDS"
      },
      {
        "id": 2516,
        "name": "Leicestershire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LEC"
      },
      {
        "id": 2382,
        "name": "Limavady Borough Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LMV"
      },
      {
        "id": 2355,
        "name": "Lincolnshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LIN"
      },
      {
        "id": 2460,
        "name": "Lisburn and Castlereagh",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LBC"
      },
      {
        "id": 2494,
        "name": "Lisburn City Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LSB"
      },
      {
        "id": 2340,
        "name": "Liverpool",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LIV"
      },
      {
        "id": 2356,
        "name": "London Borough of Barking and Dagenham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BDG"
      },
      {
        "id": 2520,
        "name": "London Borough of Barnet",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BNE"
      },
      {
        "id": 2307,
        "name": "London Borough of Bexley",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BEX"
      },
      {
        "id": 2291,
        "name": "London Borough of Brent",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BEN"
      },
      {
        "id": 2490,
        "name": "London Borough of Bromley",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "BRY"
      },
      {
        "id": 2349,
        "name": "London Borough of Camden",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CMD"
      },
      {
        "id": 2512,
        "name": "London Borough of Croydon",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "CRY"
      },
      {
        "id": 2532,
        "name": "London Borough of Ealing",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "EAL"
      },
      {
        "id": 2476,
        "name": "London Borough of Enfield",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ENF"
      },
      {
        "id": 2411,
        "name": "London Borough of Hackney",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HCK"
      },
      {
        "id": 2448,
        "name": "London Borough of Hammersmith and Fulham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HMF"
      },
      {
        "id": 2306,
        "name": "London Borough of Haringey",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HRY"
      },
      {
        "id": 2385,
        "name": "London Borough of Harrow",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HRW"
      },
      {
        "id": 2347,
        "name": "London Borough of Havering",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HAV"
      },
      {
        "id": 2376,
        "name": "London Borough of Hillingdon",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HIL"
      },
      {
        "id": 2380,
        "name": "London Borough of Hounslow",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "HNS"
      },
      {
        "id": 2319,
        "name": "London Borough of Islington",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ISL"
      },
      {
        "id": 2396,
        "name": "London Borough of Lambeth",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LBH"
      },
      {
        "id": 2358,
        "name": "London Borough of Lewisham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "LEW"
      },
      {
        "id": 2483,
        "name": "London Borough of Merton",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MRT"
      },
      {
        "id": 2418,
        "name": "London Borough of Newham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NWM"
      },
      {
        "id": 2397,
        "name": "London Borough of Redbridge",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "RDB"
      },
      {
        "id": 2501,
        "name": "London Borough of Richmond upon Thames",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "RIC"
      },
      {
        "id": 2432,
        "name": "London Borough of Southwark",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SWK"
      },
      {
        "id": 2313,
        "name": "London Borough of Sutton",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "STN"
      },
      {
        "id": 2390,
        "name": "London Borough of Tower Hamlets",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "TWH"
      },
      {
        "id": 2326,
        "name": "London Borough of Waltham Forest",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WFT"
      },
      {
        "id": 2434,
        "name": "London Borough of Wandsworth",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WND"
      },
      {
        "id": 2322,
        "name": "Magherafelt District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MFT"
      },
      {
        "id": 2398,
        "name": "Manchester",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MAN"
      },
      {
        "id": 2381,
        "name": "Medway",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MDW"
      },
      {
        "id": 2328,
        "name": "Merthyr Tydfil County Borough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MTY"
      },
      {
        "id": 2320,
        "name": "Metropolitan Borough of Wigan",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WGN"
      },
      {
        "id": 2429,
        "name": "Mid and East Antrim",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MEA"
      },
      {
        "id": 2399,
        "name": "Mid Ulster",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MUL"
      },
      {
        "id": 2332,
        "name": "Middlesbrough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MDB"
      },
      {
        "id": 2519,
        "name": "Midlothian",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MLN"
      },
      {
        "id": 2416,
        "name": "Milton Keynes",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MIK"
      },
      {
        "id": 2402,
        "name": "Monmouthshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MON"
      },
      {
        "id": 2360,
        "name": "Moray",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MRY"
      },
      {
        "id": 2348,
        "name": "Moyle District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "MYL"
      },
      {
        "id": 2351,
        "name": "Neath Port Talbot County Borough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NTL"
      },
      {
        "id": 2458,
        "name": "Newcastle upon Tyne",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NET"
      },
      {
        "id": 2524,
        "name": "Newport",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NWP"
      },
      {
        "id": 2350,
        "name": "Newry and Mourne District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NYM"
      },
      {
        "id": 2534,
        "name": "Newry, Mourne and Down",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NMD"
      },
      {
        "id": 2317,
        "name": "Newtownabbey Borough Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NTA"
      },
      {
        "id": 2473,
        "name": "Norfolk",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NFK"
      },
      {
        "id": 2535,
        "name": "North Ayrshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NAY"
      },
      {
        "id": 2513,
        "name": "North Down Borough Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NDN"
      },
      {
        "id": 2384,
        "name": "North East Lincolnshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NEL"
      },
      {
        "id": 2487,
        "name": "North Lanarkshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NLK"
      },
      {
        "id": 2453,
        "name": "North Lincolnshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NLN"
      },
      {
        "id": 2430,
        "name": "North Somerset",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NSM"
      },
      {
        "id": 2521,
        "name": "North Tyneside",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NTY"
      },
      {
        "id": 2522,
        "name": "North Yorkshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NYK"
      },
      {
        "id": 2480,
        "name": "Northamptonshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NTH"
      },
      {
        "id": 2337,
        "name": "Northern Ireland",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NIR"
      },
      {
        "id": 2365,
        "name": "Northumberland",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NBL"
      },
      {
        "id": 2456,
        "name": "Nottinghamshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "NTT"
      },
      {
        "id": 2477,
        "name": "Oldham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "OLD"
      },
      {
        "id": 2314,
        "name": "Omagh District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "OMH"
      },
      {
        "id": 2474,
        "name": "Orkney Islands",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ORK"
      },
      {
        "id": 2353,
        "name": "Outer Hebrides",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ELS"
      },
      {
        "id": 2321,
        "name": "Oxfordshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "OXF"
      },
      {
        "id": 2486,
        "name": "Pembrokeshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "PEM"
      },
      {
        "id": 2325,
        "name": "Perth and Kinross",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "PKN"
      },
      {
        "id": 2302,
        "name": "Poole",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "POL"
      },
      {
        "id": 2441,
        "name": "Powys",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "POW"
      },
      {
        "id": 2455,
        "name": "Reading",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "RDG"
      },
      {
        "id": 2527,
        "name": "Redcar and Cleveland",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "RCC"
      },
      {
        "id": 2443,
        "name": "Renfrewshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "RFW"
      },
      {
        "id": 2301,
        "name": "Rhondda Cynon Taf",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "RCT"
      },
      {
        "id": 2327,
        "name": "Rochdale",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "RCH"
      },
      {
        "id": 2308,
        "name": "Rotherham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ROT"
      },
      {
        "id": 2492,
        "name": "Royal Borough of Greenwich",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "GRE"
      },
      {
        "id": 2368,
        "name": "Royal Borough of Kensington and Chelsea",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "KEC"
      },
      {
        "id": 2481,
        "name": "Royal Borough of Kingston upon Thames",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "KTT"
      },
      {
        "id": 2472,
        "name": "Rutland",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "RUT"
      },
      {
        "id": 2502,
        "name": "Saint Helena",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SH-HL"
      },
      {
        "id": 2493,
        "name": "Salford",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SLF"
      },
      {
        "id": 2341,
        "name": "Sandwell",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SAW"
      },
      {
        "id": 2335,
        "name": "Scotland",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SCT"
      },
      {
        "id": 2346,
        "name": "Scottish Borders",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SCB"
      },
      {
        "id": 2518,
        "name": "Sefton",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SFT"
      },
      {
        "id": 2295,
        "name": "Sheffield",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SHF"
      },
      {
        "id": 2300,
        "name": "Shetland Islands",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "ZET"
      },
      {
        "id": 2407,
        "name": "Shropshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SHR"
      },
      {
        "id": 2427,
        "name": "Slough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SLG"
      },
      {
        "id": 2469,
        "name": "Solihull",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SOL"
      },
      {
        "id": 2386,
        "name": "Somerset",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SOM"
      },
      {
        "id": 2377,
        "name": "South Ayrshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SAY"
      },
      {
        "id": 2400,
        "name": "South Gloucestershire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SGC"
      },
      {
        "id": 2362,
        "name": "South Lanarkshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SLK"
      },
      {
        "id": 2409,
        "name": "South Tyneside",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "STY"
      },
      {
        "id": 2323,
        "name": "Southend-on-Sea",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SOS"
      },
      {
        "id": 2290,
        "name": "St Helens",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SHN"
      },
      {
        "id": 2447,
        "name": "Staffordshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "STS"
      },
      {
        "id": 2488,
        "name": "Stirling",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "STG"
      },
      {
        "id": 2394,
        "name": "Stockport",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SKP"
      },
      {
        "id": 2421,
        "name": "Stockton-on-Tees",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "STT"
      },
      {
        "id": 2393,
        "name": "Strabane District Council",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "STB"
      },
      {
        "id": 2467,
        "name": "Suffolk",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SFK"
      },
      {
        "id": 2526,
        "name": "Surrey",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SRY"
      },
      {
        "id": 2422,
        "name": "Swindon",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "SWD"
      },
      {
        "id": 2367,
        "name": "Tameside",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "TAM"
      },
      {
        "id": 2310,
        "name": "Telford and Wrekin",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "TFW"
      },
      {
        "id": 2468,
        "name": "Thurrock",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "THR"
      },
      {
        "id": 2478,
        "name": "Torbay",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "TOB"
      },
      {
        "id": 2496,
        "name": "Torfaen",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "TOF"
      },
      {
        "id": 2293,
        "name": "Trafford",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "TRF"
      },
      {
        "id": 2375,
        "name": "United Kingdom",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "UKM"
      },
      {
        "id": 2299,
        "name": "Vale of Glamorgan",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "VGL"
      },
      {
        "id": 2465,
        "name": "Wakefield",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WKF"
      },
      {
        "id": 2338,
        "name": "Wales",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WLS"
      },
      {
        "id": 2292,
        "name": "Walsall",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WLL"
      },
      {
        "id": 2420,
        "name": "Warrington",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WRT"
      },
      {
        "id": 2505,
        "name": "Warwickshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WAR"
      },
      {
        "id": 2471,
        "name": "West Berkshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WBK"
      },
      {
        "id": 2440,
        "name": "West Dunbartonshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WDU"
      },
      {
        "id": 2354,
        "name": "West Lothian",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WLN"
      },
      {
        "id": 2296,
        "name": "West Sussex",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WSX"
      },
      {
        "id": 2391,
        "name": "Wiltshire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WIL"
      },
      {
        "id": 2482,
        "name": "Windsor and Maidenhead",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WNM"
      },
      {
        "id": 2408,
        "name": "Wirral",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WRL"
      },
      {
        "id": 2419,
        "name": "Wokingham",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WOK"
      },
      {
        "id": 2510,
        "name": "Worcestershire",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WOR"
      },
      {
        "id": 2436,
        "name": "Wrexham County Borough",
        "country_id": 232,
        "country_code": "GB",
        "state_code": "WRX"
      },
      {
        "id": 1456,
        "name": "Alabama",
        "country_id": 233,
        "country_code": "US",
        "state_code": "AL"
      },
      {
        "id": 1400,
        "name": "Alaska",
        "country_id": 233,
        "country_code": "US",
        "state_code": "AK"
      },
      {
        "id": 1424,
        "name": "American Samoa",
        "country_id": 233,
        "country_code": "US",
        "state_code": "AS"
      },
      {
        "id": 1434,
        "name": "Arizona",
        "country_id": 233,
        "country_code": "US",
        "state_code": "AZ"
      },
      {
        "id": 1444,
        "name": "Arkansas",
        "country_id": 233,
        "country_code": "US",
        "state_code": "AR"
      },
      {
        "id": 1402,
        "name": "Baker Island",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-81"
      },
      {
        "id": 1416,
        "name": "California",
        "country_id": 233,
        "country_code": "US",
        "state_code": "CA"
      },
      {
        "id": 1450,
        "name": "Colorado",
        "country_id": 233,
        "country_code": "US",
        "state_code": "CO"
      },
      {
        "id": 1435,
        "name": "Connecticut",
        "country_id": 233,
        "country_code": "US",
        "state_code": "CT"
      },
      {
        "id": 1399,
        "name": "Delaware",
        "country_id": 233,
        "country_code": "US",
        "state_code": "DE"
      },
      {
        "id": 1437,
        "name": "District of Columbia",
        "country_id": 233,
        "country_code": "US",
        "state_code": "DC"
      },
      {
        "id": 1436,
        "name": "Florida",
        "country_id": 233,
        "country_code": "US",
        "state_code": "FL"
      },
      {
        "id": 1455,
        "name": "Georgia",
        "country_id": 233,
        "country_code": "US",
        "state_code": "GA"
      },
      {
        "id": 1412,
        "name": "Guam",
        "country_id": 233,
        "country_code": "US",
        "state_code": "GU"
      },
      {
        "id": 1411,
        "name": "Hawaii",
        "country_id": 233,
        "country_code": "US",
        "state_code": "HI"
      },
      {
        "id": 1398,
        "name": "Howland Island",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-84"
      },
      {
        "id": 1460,
        "name": "Idaho",
        "country_id": 233,
        "country_code": "US",
        "state_code": "ID"
      },
      {
        "id": 1425,
        "name": "Illinois",
        "country_id": 233,
        "country_code": "US",
        "state_code": "IL"
      },
      {
        "id": 1440,
        "name": "Indiana",
        "country_id": 233,
        "country_code": "US",
        "state_code": "IN"
      },
      {
        "id": 1459,
        "name": "Iowa",
        "country_id": 233,
        "country_code": "US",
        "state_code": "IA"
      },
      {
        "id": 1410,
        "name": "Jarvis Island",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-86"
      },
      {
        "id": 1428,
        "name": "Johnston Atoll",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-67"
      },
      {
        "id": 1406,
        "name": "Kansas",
        "country_id": 233,
        "country_code": "US",
        "state_code": "KS"
      },
      {
        "id": 1419,
        "name": "Kentucky",
        "country_id": 233,
        "country_code": "US",
        "state_code": "KY"
      },
      {
        "id": 1403,
        "name": "Kingman Reef",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-89"
      },
      {
        "id": 1457,
        "name": "Louisiana",
        "country_id": 233,
        "country_code": "US",
        "state_code": "LA"
      },
      {
        "id": 1453,
        "name": "Maine",
        "country_id": 233,
        "country_code": "US",
        "state_code": "ME"
      },
      {
        "id": 1401,
        "name": "Maryland",
        "country_id": 233,
        "country_code": "US",
        "state_code": "MD"
      },
      {
        "id": 1433,
        "name": "Massachusetts",
        "country_id": 233,
        "country_code": "US",
        "state_code": "MA"
      },
      {
        "id": 1426,
        "name": "Michigan",
        "country_id": 233,
        "country_code": "US",
        "state_code": "MI"
      },
      {
        "id": 1438,
        "name": "Midway Atoll",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-71"
      },
      {
        "id": 1420,
        "name": "Minnesota",
        "country_id": 233,
        "country_code": "US",
        "state_code": "MN"
      },
      {
        "id": 1430,
        "name": "Mississippi",
        "country_id": 233,
        "country_code": "US",
        "state_code": "MS"
      },
      {
        "id": 1451,
        "name": "Missouri",
        "country_id": 233,
        "country_code": "US",
        "state_code": "MO"
      },
      {
        "id": 1446,
        "name": "Montana",
        "country_id": 233,
        "country_code": "US",
        "state_code": "MT"
      },
      {
        "id": 1439,
        "name": "Navassa Island",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-76"
      },
      {
        "id": 1408,
        "name": "Nebraska",
        "country_id": 233,
        "country_code": "US",
        "state_code": "NE"
      },
      {
        "id": 1458,
        "name": "Nevada",
        "country_id": 233,
        "country_code": "US",
        "state_code": "NV"
      },
      {
        "id": 1404,
        "name": "New Hampshire",
        "country_id": 233,
        "country_code": "US",
        "state_code": "NH"
      },
      {
        "id": 1417,
        "name": "New Jersey",
        "country_id": 233,
        "country_code": "US",
        "state_code": "NJ"
      },
      {
        "id": 1423,
        "name": "New Mexico",
        "country_id": 233,
        "country_code": "US",
        "state_code": "NM"
      },
      {
        "id": 1452,
        "name": "New York",
        "country_id": 233,
        "country_code": "US",
        "state_code": "NY"
      },
      {
        "id": 1447,
        "name": "North Carolina",
        "country_id": 233,
        "country_code": "US",
        "state_code": "NC"
      },
      {
        "id": 1418,
        "name": "North Dakota",
        "country_id": 233,
        "country_code": "US",
        "state_code": "ND"
      },
      {
        "id": 1431,
        "name": "Northern Mariana Islands",
        "country_id": 233,
        "country_code": "US",
        "state_code": "MP"
      },
      {
        "id": 4851,
        "name": "Ohio",
        "country_id": 233,
        "country_code": "US",
        "state_code": "OH"
      },
      {
        "id": 1421,
        "name": "Oklahoma",
        "country_id": 233,
        "country_code": "US",
        "state_code": "OK"
      },
      {
        "id": 1415,
        "name": "Oregon",
        "country_id": 233,
        "country_code": "US",
        "state_code": "OR"
      },
      {
        "id": 1448,
        "name": "Palmyra Atoll",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-95"
      },
      {
        "id": 1422,
        "name": "Pennsylvania",
        "country_id": 233,
        "country_code": "US",
        "state_code": "PA"
      },
      {
        "id": 1449,
        "name": "Puerto Rico",
        "country_id": 233,
        "country_code": "US",
        "state_code": "PR"
      },
      {
        "id": 1461,
        "name": "Rhode Island",
        "country_id": 233,
        "country_code": "US",
        "state_code": "RI"
      },
      {
        "id": 1443,
        "name": "South Carolina",
        "country_id": 233,
        "country_code": "US",
        "state_code": "SC"
      },
      {
        "id": 1445,
        "name": "South Dakota",
        "country_id": 233,
        "country_code": "US",
        "state_code": "SD"
      },
      {
        "id": 1454,
        "name": "Tennessee",
        "country_id": 233,
        "country_code": "US",
        "state_code": "TN"
      },
      {
        "id": 1407,
        "name": "Texas",
        "country_id": 233,
        "country_code": "US",
        "state_code": "TX"
      },
      {
        "id": 1432,
        "name": "United States Minor Outlying Islands",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM"
      },
      {
        "id": 1413,
        "name": "United States Virgin Islands",
        "country_id": 233,
        "country_code": "US",
        "state_code": "VI"
      },
      {
        "id": 1414,
        "name": "Utah",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UT"
      },
      {
        "id": 1409,
        "name": "Vermont",
        "country_id": 233,
        "country_code": "US",
        "state_code": "VT"
      },
      {
        "id": 1427,
        "name": "Virginia",
        "country_id": 233,
        "country_code": "US",
        "state_code": "VA"
      },
      {
        "id": 1405,
        "name": "Wake Island",
        "country_id": 233,
        "country_code": "US",
        "state_code": "UM-79"
      },
      {
        "id": 1462,
        "name": "Washington",
        "country_id": 233,
        "country_code": "US",
        "state_code": "WA"
      },
      {
        "id": 1429,
        "name": "West Virginia",
        "country_id": 233,
        "country_code": "US",
        "state_code": "WV"
      },
      {
        "id": 1441,
        "name": "Wisconsin",
        "country_id": 233,
        "country_code": "US",
        "state_code": "WI"
      },
      {
        "id": 1442,
        "name": "Wyoming",
        "country_id": 233,
        "country_code": "US",
        "state_code": "WY"
      },
      {
        "id": 3205,
        "name": "Artigas Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "AR"
      },
      {
        "id": 3213,
        "name": "Canelones Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "CA"
      },
      {
        "id": 3211,
        "name": "Cerro Largo Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "CL"
      },
      {
        "id": 3208,
        "name": "Colonia Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "CO"
      },
      {
        "id": 3209,
        "name": "Durazno Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "DU"
      },
      {
        "id": 3203,
        "name": "Flores Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "FS"
      },
      {
        "id": 3217,
        "name": "Florida Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "FD"
      },
      {
        "id": 3215,
        "name": "Lavalleja Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "LA"
      },
      {
        "id": 3206,
        "name": "Maldonado Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "MA"
      },
      {
        "id": 3218,
        "name": "Montevideo Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "MO"
      },
      {
        "id": 3212,
        "name": "Paysandú Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "PA"
      },
      {
        "id": 3210,
        "name": "Río Negro Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "RN"
      },
      {
        "id": 3207,
        "name": "Rivera Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "RV"
      },
      {
        "id": 3216,
        "name": "Rocha Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "RO"
      },
      {
        "id": 3220,
        "name": "Salto Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "SA"
      },
      {
        "id": 3204,
        "name": "San José Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "SJ"
      },
      {
        "id": 3219,
        "name": "Soriano Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "SO"
      },
      {
        "id": 3221,
        "name": "Tacuarembó Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "TA"
      },
      {
        "id": 3214,
        "name": "Treinta y Tres Department",
        "country_id": 235,
        "country_code": "UY",
        "state_code": "TT"
      },
      {
        "id": 2540,
        "name": "Andijan Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "AN"
      },
      {
        "id": 2541,
        "name": "Bukhara Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "BU"
      },
      {
        "id": 2538,
        "name": "Fergana Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "FA"
      },
      {
        "id": 2545,
        "name": "Jizzakh Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "JI"
      },
      {
        "id": 2548,
        "name": "Karakalpakstan",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "QR"
      },
      {
        "id": 2537,
        "name": "Namangan Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "NG"
      },
      {
        "id": 2542,
        "name": "Navoiy Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "NW"
      },
      {
        "id": 2543,
        "name": "Qashqadaryo Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "QA"
      },
      {
        "id": 2544,
        "name": "Samarqand Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "SA"
      },
      {
        "id": 2547,
        "name": "Sirdaryo Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "SI"
      },
      {
        "id": 2546,
        "name": "Surxondaryo Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "SU"
      },
      {
        "id": 2536,
        "name": "Tashkent",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "TK"
      },
      {
        "id": 2549,
        "name": "Tashkent Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "TO"
      },
      {
        "id": 2539,
        "name": "Xorazm Region",
        "country_id": 236,
        "country_code": "UZ",
        "state_code": "XO"
      },
      {
        "id": 4775,
        "name": "Malampa",
        "country_id": 237,
        "country_code": "VU",
        "state_code": "MAP"
      },
      {
        "id": 4773,
        "name": "Penama",
        "country_id": 237,
        "country_code": "VU",
        "state_code": "PAM"
      },
      {
        "id": 4776,
        "name": "Sanma",
        "country_id": 237,
        "country_code": "VU",
        "state_code": "SAM"
      },
      {
        "id": 4774,
        "name": "Shefa",
        "country_id": 237,
        "country_code": "VU",
        "state_code": "SEE"
      },
      {
        "id": 4777,
        "name": "Tafea",
        "country_id": 237,
        "country_code": "VU",
        "state_code": "TAE"
      },
      {
        "id": 4772,
        "name": "Torba",
        "country_id": 237,
        "country_code": "VU",
        "state_code": "TOB"
      },
      {
        "id": 2044,
        "name": "Amazonas",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "Z"
      },
      {
        "id": 2050,
        "name": "Anzoátegui",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "B"
      },
      {
        "id": 4856,
        "name": "Apure",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "C"
      },
      {
        "id": 2047,
        "name": "Aragua",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "D"
      },
      {
        "id": 2049,
        "name": "Barinas",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "E"
      },
      {
        "id": 2039,
        "name": "Bolívar",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "F"
      },
      {
        "id": 4855,
        "name": "Capital District",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "A"
      },
      {
        "id": 2040,
        "name": "Carabobo",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "G"
      },
      {
        "id": 2034,
        "name": "Cojedes",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "H"
      },
      {
        "id": 2051,
        "name": "Delta Amacuro",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "Y"
      },
      {
        "id": 2035,
        "name": "Falcón",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "I"
      },
      {
        "id": 2046,
        "name": "Federal Dependencies of Venezuela",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "W"
      },
      {
        "id": 2045,
        "name": "Guárico",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "J"
      },
      {
        "id": 2038,
        "name": "Lara",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "K"
      },
      {
        "id": 2053,
        "name": "Mérida",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "L"
      },
      {
        "id": 2037,
        "name": "Miranda",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "M"
      },
      {
        "id": 2054,
        "name": "Monagas",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "N"
      },
      {
        "id": 2052,
        "name": "Nueva Esparta",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "O"
      },
      {
        "id": 2036,
        "name": "Portuguesa",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "P"
      },
      {
        "id": 2056,
        "name": "Sucre",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "R"
      },
      {
        "id": 2048,
        "name": "Táchira",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "S"
      },
      {
        "id": 2043,
        "name": "Trujillo",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "T"
      },
      {
        "id": 2055,
        "name": "Vargas",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "X"
      },
      {
        "id": 2041,
        "name": "Yaracuy",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "U"
      },
      {
        "id": 2042,
        "name": "Zulia",
        "country_id": 239,
        "country_code": "VE",
        "state_code": "V"
      },
      {
        "id": 3794,
        "name": "An Giang",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "44"
      },
      {
        "id": 3770,
        "name": "Bà Rịa-Vũng Tàu",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "43"
      },
      {
        "id": 3815,
        "name": "Bắc Giang",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "54"
      },
      {
        "id": 3822,
        "name": "Bắc Kạn",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "53"
      },
      {
        "id": 3804,
        "name": "Bạc Liêu",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "55"
      },
      {
        "id": 3791,
        "name": "Bắc Ninh",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "56"
      },
      {
        "id": 3796,
        "name": "Bến Tre",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "50"
      },
      {
        "id": 3785,
        "name": "Bình Dương",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "57"
      },
      {
        "id": 3830,
        "name": "Bình Định",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "31"
      },
      {
        "id": 3797,
        "name": "Bình Phước",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "58"
      },
      {
        "id": 3787,
        "name": "Bình Thuận",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "40"
      },
      {
        "id": 3778,
        "name": "Cà Mau",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "59"
      },
      {
        "id": 3782,
        "name": "Cao Bằng",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "04"
      },
      {
        "id": 3806,
        "name": "Da Nang",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "DN"
      },
      {
        "id": 3829,
        "name": "Đắk Lắk",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "33"
      },
      {
        "id": 3823,
        "name": "Đắk Nông",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "72"
      },
      {
        "id": 3773,
        "name": "Điện Biên",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "71"
      },
      {
        "id": 3821,
        "name": "Đồng Nai",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "39"
      },
      {
        "id": 3769,
        "name": "Đồng Tháp",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "45"
      },
      {
        "id": 3813,
        "name": "Gia Lai",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "30"
      },
      {
        "id": 3779,
        "name": "Hà Giang",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "03"
      },
      {
        "id": 3802,
        "name": "Hà Nam",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "63"
      },
      {
        "id": 3820,
        "name": "Hà Tây",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "15"
      },
      {
        "id": 3816,
        "name": "Hà Tĩnh",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "23"
      },
      {
        "id": 3827,
        "name": "Hải Dương",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "61"
      },
      {
        "id": 3783,
        "name": "Haiphong",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "HP"
      },
      {
        "id": 3810,
        "name": "Hanoi",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "HN"
      },
      {
        "id": 3777,
        "name": "Hậu Giang",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "73"
      },
      {
        "id": 3811,
        "name": "Ho Chi Minh City",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "SG"
      },
      {
        "id": 3799,
        "name": "Hòa Bình",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "14"
      },
      {
        "id": 3768,
        "name": "Hưng Yên",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "66"
      },
      {
        "id": 3793,
        "name": "Khánh Hòa",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "34"
      },
      {
        "id": 3800,
        "name": "Kiên Giang",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "47"
      },
      {
        "id": 3772,
        "name": "Kon Tum",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "28"
      },
      {
        "id": 3825,
        "name": "Lai Châu",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "01"
      },
      {
        "id": 3818,
        "name": "Lâm Đồng",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "35"
      },
      {
        "id": 3792,
        "name": "Lạng Sơn",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "09"
      },
      {
        "id": 3817,
        "name": "Lào Cai",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "02"
      },
      {
        "id": 3808,
        "name": "Long An",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "41"
      },
      {
        "id": 3789,
        "name": "Nam Định",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "67"
      },
      {
        "id": 3780,
        "name": "Nghệ An",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "22"
      },
      {
        "id": 3786,
        "name": "Ninh Bình",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "18"
      },
      {
        "id": 3788,
        "name": "Ninh Thuận",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "36"
      },
      {
        "id": 3801,
        "name": "Phú Thọ",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "68"
      },
      {
        "id": 3824,
        "name": "Phú Yên",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "32"
      },
      {
        "id": 3809,
        "name": "Quảng Bình",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "24"
      },
      {
        "id": 3776,
        "name": "Quảng Nam",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "27"
      },
      {
        "id": 3828,
        "name": "Quảng Ngãi",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "29"
      },
      {
        "id": 3814,
        "name": "Quảng Ninh",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "13"
      },
      {
        "id": 3803,
        "name": "Quảng Trị",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "25"
      },
      {
        "id": 3819,
        "name": "Sóc Trăng",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "52"
      },
      {
        "id": 3812,
        "name": "Sơn La",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "05"
      },
      {
        "id": 3826,
        "name": "Tây Ninh",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "37"
      },
      {
        "id": 3775,
        "name": "Thái Bình",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "20"
      },
      {
        "id": 3807,
        "name": "Thái Nguyên",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "69"
      },
      {
        "id": 3771,
        "name": "Thanh Hóa",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "21"
      },
      {
        "id": 3798,
        "name": "Thừa Thiên-Huế",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "26"
      },
      {
        "id": 3781,
        "name": "Tiền Giang",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "46"
      },
      {
        "id": 3805,
        "name": "Trà Vinh",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "51"
      },
      {
        "id": 3795,
        "name": "Tuyên Quang",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "07"
      },
      {
        "id": 3790,
        "name": "Vĩnh Long",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "49"
      },
      {
        "id": 3774,
        "name": "Vĩnh Phúc",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "70"
      },
      {
        "id": 3784,
        "name": "Yên Bái",
        "country_id": 240,
        "country_code": "VN",
        "state_code": "06"
      },
      {
        "id": 1242,
        "name": "'Adan Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "AD"
      },
      {
        "id": 1250,
        "name": "'Amran Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "AM"
      },
      {
        "id": 1237,
        "name": "Abyan Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "AB"
      },
      {
        "id": 1240,
        "name": "Al Bayda' Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "BA"
      },
      {
        "id": 1241,
        "name": "Al Hudaydah Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "HU"
      },
      {
        "id": 1243,
        "name": "Al Jawf Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "JA"
      },
      {
        "id": 1251,
        "name": "Al Mahrah Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "MR"
      },
      {
        "id": 1235,
        "name": "Al Mahwit Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "MW"
      },
      {
        "id": 1246,
        "name": "Dhamar Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "DH"
      },
      {
        "id": 1238,
        "name": "Hadhramaut Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "HD"
      },
      {
        "id": 1244,
        "name": "Hajjah Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "HJ"
      },
      {
        "id": 1233,
        "name": "Ibb Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "IB"
      },
      {
        "id": 1245,
        "name": "Lahij Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "LA"
      },
      {
        "id": 1234,
        "name": "Ma'rib Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "MA"
      },
      {
        "id": 1248,
        "name": "Raymah Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "RA"
      },
      {
        "id": 1249,
        "name": "Saada Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "SD"
      },
      {
        "id": 1232,
        "name": "Sana'a",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "SA"
      },
      {
        "id": 1236,
        "name": "Sana'a Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "SN"
      },
      {
        "id": 1247,
        "name": "Shabwah Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "SH"
      },
      {
        "id": 1239,
        "name": "Socotra Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "SU"
      },
      {
        "id": 1231,
        "name": "Ta'izz Governorate",
        "country_id": 245,
        "country_code": "YE",
        "state_code": "TA"
      },
      {
        "id": 1986,
        "name": "Central Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "02"
      },
      {
        "id": 1984,
        "name": "Copperbelt Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "08"
      },
      {
        "id": 1991,
        "name": "Eastern Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "03"
      },
      {
        "id": 1987,
        "name": "Luapula Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "04"
      },
      {
        "id": 1988,
        "name": "Lusaka Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "09"
      },
      {
        "id": 1989,
        "name": "Muchinga Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "10"
      },
      {
        "id": 1982,
        "name": "Northern Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "05"
      },
      {
        "id": 1985,
        "name": "Northwestern Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "06"
      },
      {
        "id": 1990,
        "name": "Southern Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "07"
      },
      {
        "id": 1983,
        "name": "Western Province",
        "country_id": 246,
        "country_code": "ZM",
        "state_code": "01"
      },
      {
        "id": 1956,
        "name": "Bulawayo Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "BU"
      },
      {
        "id": 1958,
        "name": "Harare Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "HA"
      },
      {
        "id": 1959,
        "name": "Manicaland",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "MA"
      },
      {
        "id": 1955,
        "name": "Mashonaland Central Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "MC"
      },
      {
        "id": 1951,
        "name": "Mashonaland East Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "ME"
      },
      {
        "id": 1953,
        "name": "Mashonaland West Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "MW"
      },
      {
        "id": 1960,
        "name": "Masvingo Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "MV"
      },
      {
        "id": 1954,
        "name": "Matabeleland North Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "MN"
      },
      {
        "id": 1952,
        "name": "Matabeleland South Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "MS"
      },
      {
        "id": 1957,
        "name": "Midlands Province",
        "country_id": 247,
        "country_code": "ZW",
        "state_code": "MI"
      }
    ]

    let count = 0;
    for(let region of regions) {
      if (process.env.NODE_ENV !== 'production' && count === 100) break;
      await Region.create(region);
      count++;
    }

  }
}

module.exports = RegionSeeder
