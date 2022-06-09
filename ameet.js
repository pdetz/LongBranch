const EVENTS = 
[{"n":"1","gender":"M","ageGroup":5,"distance":"100M","stroke":0},{"n":"2","gender":"F","ageGroup":5,"distance":"100M","stroke":0},{"n":"3","gender":"M","ageGroup":3,"distance":"100M","stroke":0},{"n":"4","gender":"F","ageGroup":3,"distance":"100M","stroke":0},{"n":"5","gender":"M","ageGroup":4,"distance":"100M","stroke":0},{"n":"6","gender":"F","ageGroup":4,"distance":"100M","stroke":0},{"n":"7","gender":"M","ageGroup":0,"distance":"25M","stroke":1},{"n":"8","gender":"F","ageGroup":0,"distance":"25M","stroke":1},{"n":"9","gender":"M","ageGroup":1,"distance":"50M","stroke":1},{"n":"10","gender":"F","ageGroup":1,"distance":"50M","stroke":1},{"n":"11","gender":"M","ageGroup":2,"distance":"50M","stroke":1},{"n":"12","gender":"F","ageGroup":2,"distance":"50M","stroke":1},{"n":"13","gender":"M","ageGroup":3,"distance":"50M","stroke":1},{"n":"14","gender":"F","ageGroup":3,"distance":"50M","stroke":1},{"n":"15","gender":"M","ageGroup":4,"distance":"100M","stroke":1},{"n":"16","gender":"F","ageGroup":4,"distance":"100M","stroke":1},{"n":"17","gender":"M","ageGroup":0,"distance":"25M","stroke":2},{"n":"18","gender":"F","ageGroup":0,"distance":"25M","stroke":2},{"n":"19","gender":"M","ageGroup":1,"distance":"25M","stroke":2},{"n":"20","gender":"F","ageGroup":1,"distance":"25M","stroke":2},{"n":"21","gender":"M","ageGroup":2,"distance":"50M","stroke":2},{"n":"22","gender":"F","ageGroup":2,"distance":"50M","stroke":2},{"n":"23","gender":"M","ageGroup":3,"distance":"50M","stroke":2},{"n":"24","gender":"F","ageGroup":3,"distance":"50M","stroke":2},{"n":"25","gender":"M","ageGroup":4,"distance":"100M","stroke":2},{"n":"26","gender":"F","ageGroup":4,"distance":"100M","stroke":2},{"n":"27","gender":"M","ageGroup":4,"distance":"50M","stroke":5},{"n":"28","gender":"F","ageGroup":4,"distance":"50M","stroke":5},{"n":"29","gender":"M","ageGroup":0,"distance":"25M","stroke":3},{"n":"30","gender":"F","ageGroup":0,"distance":"25M","stroke":3},{"n":"31","gender":"M","ageGroup":1,"distance":"25M","stroke":3},{"n":"32","gender":"F","ageGroup":1,"distance":"25M","stroke":3},{"n":"33","gender":"M","ageGroup":2,"distance":"50M","stroke":3},{"n":"34","gender":"F","ageGroup":2,"distance":"50M","stroke":3},{"n":"35","gender":"M","ageGroup":3,"distance":"50M","stroke":3},{"n":"36","gender":"F","ageGroup":3,"distance":"50M","stroke":3},{"n":"37","gender":"M","ageGroup":4,"distance":"100M","stroke":3},{"n":"38","gender":"F","ageGroup":4,"distance":"100M","stroke":3},{"n":"39","gender":"M","ageGroup":0,"distance":"25M","stroke":4},{"n":"40","gender":"F","ageGroup":0,"distance":"25M","stroke":4},{"n":"41","gender":"M","ageGroup":1,"distance":"25M","stroke":4},{"n":"42","gender":"F","ageGroup":1,"distance":"25M","stroke":4},{"n":"43","gender":"M","ageGroup":2,"distance":"50M","stroke":4},{"n":"44","gender":"F","ageGroup":2,"distance":"50M","stroke":4},{"n":"45","gender":"M","ageGroup":3,"distance":"50M","stroke":4},{"n":"46","gender":"F","ageGroup":3,"distance":"50M","stroke":4},{"n":"47","gender":"M","ageGroup":4,"distance":"50M","stroke":4},{"n":"48","gender":"F","ageGroup":4,"distance":"50M","stroke":4},{"n":"49","gender":"M","ageGroup":1,"distance":"175M","stroke":5},{"n":"50","gender":"F","ageGroup":1,"distance":"175M","stroke":5}];
const LBWW = [{"dob":"07312006","nombre":"Katherine","apellido":"Amaya","nickname":"Kathy","gender":"F","id":"V073106KATVAMAY","address":"408 Thayer pl /Silver Spring MD 20910"},{"dob":"02042002","nombre":"Helina","apellido":"Asfaw","nickname":"","gender":"F","id":"S020402HELSASFA","address":"735 Sligo Ave APT 503 /Silver Spring MD 20910"},{"dob":"02262003","nombre":"Aspen","apellido":"Bloomer","nickname":"Aspen","gender":"F","id":"C022603ASPCBLOO","address":"134 Ritchie Ave. /Silver Spring MD 20910"},{"dob":"09242001","nombre":"Sky","apellido":"Bloomer","nickname":"Sky","gender":"F","id":"C092401SKYCBLOO","address":"134 Ritchie Ave. /Silver Spring MD 20910"},{"dob":"05182005","nombre":"Kaleb","apellido":"Bryant","nickname":"Kaleb","gender":"M","id":"051805KALABRYA","address":"1733 Dublin Drive /Silver Spring MD 20902"},{"dob":"07302005","nombre":"Emelly","apellido":"Cardona Rodriguez","nickname":"","gender":"F","id":"E073005EMEECARD","address":"8711 Gilbert Pl. #4 /Takoma Park MD 20912"},{"dob":"08112010","nombre":"Estefany","apellido":"Cardona Rodriguez","nickname":"","gender":"F","id":"M081110ESTMCARD","address":"8711 Gilbert Pl. #4 /Takoma Park MD 20912"},{"dob":"10222012","nombre":"Alexandra","apellido":"Chacon","nickname":"","gender":"F","id":"102212ALE*CHAC","address":"1022 Quebec Terrace Apt. T1 /Silver Spring MD 20903"},{"dob":"09172009","nombre":"Genesis","apellido":"Chacon","nickname":"","gender":"F","id":"091709GEN*CHAC","address":"1022 Quebec Terrace Apt. T1 /Silver Spring MD 20903"},{"dob":"10092004","nombre":"Henry","apellido":"Davies","nickname":"","gender":"M","id":"H100904HENHDAVI","address":"6717 POPLAR AVE /TAKOMA PARK MD 20912"},{"dob":"08012007","nombre":"Ashley","apellido":"Diaz","nickname":"","gender":"F","id":"080107ASH*DIAZ","address":" / an araqu"},{"dob":"02032012","nombre":"Alexander","apellido":"Dixon","nickname":"Xander","gender":"M","id":"020312ALE*DIXO","address":"9209 Glenville Road /Silver Spring MD 20901"},{"dob":"11062005","nombre":"Ben","apellido":"Dixon","nickname":"","gender":"M","id":"110605BEN*DIXO","address":"9209 Glenville Road /Silver Spring MD 20901"},{"dob":"09012004","nombre":"Rhys","apellido":"Dixon","nickname":"","gender":"F","id":"090104RHY*DIXO","address":"9209 Glenville Road /Silver Spring MD 20901"},{"dob":"01222008","nombre":"Drew","apellido":"Ewing","nickname":"Bee","gender":"F","id":"012208DREEEWIN","address":"7103 13th Ave /Takoma Park MD 20912"},{"dob":"07032008","nombre":"Jaelyn","apellido":"Faye","nickname":"","gender":"F","id":"070308JAE*FAYE","address":"633 Mississippi Ave /Silver Spring MD 20910"},{"dob":"04182006","nombre":"Kieran","apellido":"Ferguson","nickname":"","gender":"M","id":"041806KIERFERG","address":"43 Philadelphia Avenue /Takoma Park MD 20912"},{"dob":"01132008","nombre":"Teagan","apellido":"Ferguson","nickname":"","gender":"F","id":"011308TEAEFERG","address":"43 Philadelphia Avenue /Takoma Park MD 20912"},{"dob":"07222011","nombre":"Aden","apellido":"Fogel","nickname":"","gender":"M","id":"L072211ADELFOGE","address":"7981 Eastern Avenue C8 /Silver Spring MD 20910"},{"dob":"03182011","nombre":"Riley","apellido":"Ford","nickname":"","gender":"F","id":"031811RIL*FORD","address":"808 Hillsboro dr /Silver spring MD 20902"},{"dob":"04012012","nombre":"Georgia","apellido":"Forshey","nickname":"Georgia","gender":"F","id":"F040112GEOFFORS","address":"8750 Georgia Ave #623A /Silver Spring MD 20910"},{"dob":"01302004","nombre":"Zion","apellido":"Frost","nickname":"","gender":"F","id":"013004ZIO*FROS","address":"808 Hillsboro dr /Silver spring MD 20902"},{"dob":"09182003","nombre":"Adrian","apellido":"Garcia","nickname":"Adrian","gender":"M","id":"A091803ADRAGARC","address":"14024 Northwyn Dr /Silver Spring MD 20904"},{"dob":"12012010","nombre":"Avni","apellido":"Giebel","nickname":"Avni","gender":"F","id":"B120110AVN*GIEB","address":"7513 Dundalk Road /Takoma Park MD 20912"},{"dob":"11072003","nombre":"Oona","apellido":"Giebel","nickname":"Oona","gender":"F","id":"S110703OON*GIEB","address":"7513 Dundalk Road /Takoma Park MD 20912"},{"dob":"08052011","nombre":"Mila","apellido":"Hinderstein","nickname":"Mila","gender":"F","id":"P080511MILPHIND","address":"512 Boston Ave. /Takoma Park MD 20912"},{"dob":"10232002","nombre":"Vannya","apellido":"Huarca","nickname":"","gender":"F","id":"102302VAN*HUAR","address":"2813 Ashmont Terrace /Silver Spring MD 20906"},{"dob":"10052006","nombre":"Anais","apellido":"Jordan","nickname":"","gender":"F","id":"100506ANA*JORD","address":"10416 Royal Rd. /Silver Spring MD 20903"},{"dob":"07182004","nombre":"Ari","apellido":"Joshi","nickname":"","gender":"M","id":"071804ARI*JOSH","address":"2128 Edgeware st /Silver Spring MD 20905"},{"dob":"07182004","nombre":"Ariel","apellido":"Joshi","nickname":"Ari","gender":"M","id":"071804ARI*JOSH","address":"2128 Edgeware St /Silver Spring MD 20905"},{"dob":"01092007","nombre":"Gabriel","apellido":"Joshi","nickname":"Gabi","gender":"M","id":"010907GAB*JOSH","address":"2128 Edgeware St /Silver Spring MD 20905"},{"dob":"05242005","nombre":"Melisa","apellido":"Kalayoglu","nickname":"","gender":"F","id":"052405MEL*KALA","address":"1108 Woodside Pkwy /Silver Spring MD 20910"},{"dob":"01042007","nombre":"Diego","apellido":"Martinez","nickname":"","gender":"M","id":"010407DIE*MART","address":"10709 Lester St /Silver Spring MD 20902"},{"dob":"07052005","nombre":"Jonah","apellido":"McDonald","nickname":"","gender":"M","id":"S070505JONSMCDO","address":"7406 Birch Ave /Takoma Park MD 20912"},{"dob":"08182010","nombre":"Fernando","apellido":"Moreno","nickname":"","gender":"M","id":"G081810FER*MORE","address":"804 Northampton dr. /Silver spring MD 20903"},{"dob":"07182014","nombre":"Ejimaria","apellido":"Murrain","nickname":"Ejimaria","gender":"F","id":"R071814EJIRMURR","address":"8409 Hartford Ave /Silver Spring MD 20910"},{"dob":"09022012","nombre":"Miles","apellido":"Murrain","nickname":"","gender":"M","id":"090212MIL*MURR","address":" / ro semar"},{"dob":"09112010","nombre":"Rashad","apellido":"Murrain","nickname":"","gender":"M","id":"091110RAS*MURR","address":" / ro semar"},{"dob":"12292008","nombre":"Tayro","apellido":"Oliva","nickname":"Tayro","gender":"M","id":"J122908TAYJOLIV","address":"706 Gilbert st #6 /Takoma Park MD 20912"},{"dob":"11162010","nombre":"Yerik","apellido":"Oliva","nickname":"","gender":"M","id":"Y111610YERYOLIV","address":"706 Gilbert st #6 /Takoma Park MD 20912"},{"dob":"08062009","nombre":"Aaron","apellido":"Orellana","nickname":"","gender":"M","id":"080609AAR*OREL","address":" / ed son_6"},{"dob":"10292002","nombre":"Edson","apellido":"Orellana","nickname":"","gender":"M","id":"102902EDS*OREL","address":" / ed son_6"},{"dob":"06222007","nombre":"Patrick","apellido":"Orellana","nickname":"","gender":"M","id":"062207PAT*OREL","address":" / ed son_6"},{"dob":"06162007","nombre":"Gaby","apellido":"Perla","nickname":"","gender":"F","id":"061607GAB*PERL","address":"8308 Flower Avenue 105 /Takoma Park MD 20912"},{"dob":"10222002","nombre":"Ethan","apellido":"Phan","nickname":"","gender":"M","id":"102202ETHDPHAN","address":"8206 Cedar St /Silver Spring MD 20910"},{"dob":"12142011","nombre":"Anushka","apellido":"Ramachandran","nickname":"","gender":"F","id":"121411ANU*RAMA","address":"7300 Trescott Ave /Takoma Park MD 20912"},{"dob":"01222008","nombre":"Arjun","apellido":"Ramachandran","nickname":"","gender":"M","id":"012208ARJ*RAMA","address":"7300 Trescott Ave /Takoma Park MD 20912"},{"dob":"02112003","nombre":"Parker","apellido":"Robinson","nickname":"","gender":"M","id":"T021103PARTROBI","address":"8409 Galveston Rd /Silver Spring MD 20910"},{"dob":"02072005","nombre":"Tully","apellido":"Robinson","nickname":"","gender":"M","id":"H020705TULHROBI","address":"8409 Galveston Rd /Silver Spring MD 20910"},{"dob":"08102005","nombre":"Anthony","apellido":"Salemi","nickname":"","gender":"M","id":"J081005ANTJSALE","address":"400 Boston Ave /Takoma Park MD 20912"},{"dob":"05012007","nombre":"Sofia","apellido":"Salemi","nickname":"","gender":"F","id":"A050107SOFASALE","address":"400 Boston Ave /Takoma Park MD 20912"},{"dob":"08192006","nombre":"Amy","apellido":"Santizo","nickname":"","gender":"F","id":"T081906AMYTSANT","address":" / m. santi"},{"dob":"04052006","nombre":"Fabiola","apellido":"Sisk","nickname":"Fabi","gender":"F","id":"040506FAB*SISK","address":"9510 Bristol Ave /Silver Spring MD 20901"},{"dob":"04012011","nombre":"Safiya","apellido":"Sorenson","nickname":"Safiya","gender":"F","id":"R040111SAFRSORE","address":"6407 5th Ave /Takoma Park MD 20912"},{"dob":"11192005","nombre":"Lorena","apellido":"Sosa","nickname":"Lorena","gender":"F","id":"L111905LORLSOSA","address":"8823 Glenville Rd /Silver Spring MD 20901"},{"dob":"12032005","nombre":"Francarlo","apellido":"Sosa Barrios","nickname":"Francky","gender":"M","id":"120305FRASSOSA","address":"1116 Quebec St /Silver spring MD 20903"},{"dob":"11082005","nombre":"Joseph","apellido":"Sparshott","nickname":"Joe","gender":"M","id":"D110805JOSDSPAR","address":"604 Ray Drive /Silver Spring MD 20910"},{"dob":"04222008","nombre":"Thomas","apellido":"Sparshott","nickname":"Tom","gender":"M","id":"J042208THOJSPAR","address":"604 Ray Drive /Silver Spring MD 20910"},{"dob":"01142011","nombre":"Lailah","apellido":"Strube","nickname":"","gender":"F","id":"011411LAI*STRU","address":"24 Manor Circle Apt 206 /Takoma Park MD 20912"},{"dob":"10052007","nombre":"Imogen","apellido":"Talmadge","nickname":"","gender":"F","id":"V100507IMOVTALM","address":"9404 Mintwood St /Silver Spring MD 20901"},{"dob":"09272005","nombre":"Otto","apellido":"Vanskike","nickname":"Otto","gender":"M","id":"R092705OTT*VANS","address":"7710 Takoma Ave /Takoma Park MD 20912"},{"dob":"02252004","nombre":"Dulce","apellido":"Vasquez-Cardona","nickname":"","gender":"F","id":"022504DUL*VASQ","address":"706 Gilbert St Apt 6 /TAKOMA PARK MD 20912"},{"dob":"01212006","nombre":"claire","apellido":"young","nickname":"","gender":"F","id":"012106CLA*YOUN","address":"304 LEXINGTON DR /Silver Spring MD 20901"},{"dob":"04282011","nombre":"lauren","apellido":"young","nickname":"","gender":"F","id":"042811LAU*YOUN","address":"304 LEXINGTON DR /Silver Spring MD 20901"},{"dob":"10182007","nombre":"lindsay","apellido":"young","nickname":"lindsay","gender":"F","id":"101807LINLYOUN","address":"304 LEXINGTON DR /Silver Spring MD 20901"}];
