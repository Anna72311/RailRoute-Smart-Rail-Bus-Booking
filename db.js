const INITIAL_DATA = {
  users:[
    {id:'u1',name:'Anannya Mishra',email:'mishra.anannya241@vit.edu',password:'admin123',role:'admin',createdAt:'2025-01-01',active:true},
    {id:'u2',name:'Suhani Patani',email:'suhani.patani@vit.edu',password:'user123',role:'admin',createdAt:'2025-04-20',active:true},
    {id:'u3',name:'Urshita Gangisetty',email:'urshita.gangisetty@vit.edu',password:'user123',role:'admin',createdAt:'2025-04-20',active:true},
  ],
  cities:['Mumbai','Pune','Nashik','Nagpur','Delhi','Bangalore','Hyderabad','Chennai','Kolkata','Jaipur','Ahmedabad','Lucknow','Bhopal','Surat','Indore'],
  trains:[
    {id:'t1',name:'Mumbai-Pune Express',number:'12101',type:'express',from:'Mumbai',to:'Pune',via:['Lonavala','Talegaon'],dep:'06:00',arr:'07:35',duration:95,price:320,safety:9.2,seats:48},
    {id:'t2',name:'Pune-Mumbai Intercity',number:'12128',type:'superfast',from:'Pune',to:'Mumbai',via:['Talegaon','Lonavala','Thane'],dep:'17:55',arr:'21:05',duration:190,price:380,safety:9.5,seats:64},
    {id:'t3',name:'Deccan Queen',number:'12123',type:'express',from:'Mumbai',to:'Pune',via:['Lonavala'],dep:'17:10',arr:'20:25',duration:195,price:450,safety:9.8,seats:56},
    {id:'t4',name:'Rajdhani Express',number:'12951',type:'superfast',from:'Mumbai',to:'Delhi',via:['Surat','Vadodara','Kota'],dep:'16:00',arr:'08:30',duration:990,price:2400,safety:9.5,seats:72},
    {id:'t5',name:'Garib Rath',number:'12910',type:'regular',from:'Mumbai',to:'Delhi',via:['Surat','Kota'],dep:'13:00',arr:'09:00',duration:1200,price:850,safety:8.2,seats:78},
    {id:'t6',name:'Shatabdi Express',number:'12002',type:'superfast',from:'Delhi',to:'Bhopal',via:['Agra','Gwalior','Jhansi'],dep:'06:00',arr:'14:00',duration:480,price:1100,safety:9.6,seats:60},
    {id:'t7',name:'Kolkata Mail',number:'12322',type:'express',from:'Kolkata',to:'Delhi',via:['Dhanbad','Gaya','Prayagraj'],dep:'21:00',arr:'15:30',duration:1110,price:1800,safety:9.1,seats:54},
    {id:'t8',name:'Pink City Exp',number:'12915',type:'express',from:'Delhi',to:'Jaipur',via:['Alwar'],dep:'10:30',arr:'15:00',duration:270,price:420,safety:8.9,seats:45},
    {id:'t9',name:'Sanghamitra Exp',number:'12296',type:'superfast',from:'Bangalore',to:'Chennai',via:['Krishnarajapuram','Vellore'],dep:'08:00',arr:'14:00',duration:360,price:550,safety:9.3,seats:64},
    {id:'t10',name:'Charminar Exp',number:'12760',type:'express',from:'Hyderabad',to:'Chennai',via:['Warangal','Vijayawada'],dep:'18:00',arr:'07:00',duration:780,price:620,safety:9.2,seats:56},
    {id:'t11',name:'Lucknow Express',number:'12230',type:'regular',from:'Lucknow',to:'Delhi',via:['Bareilly','Moradabad'],dep:'22:00',arr:'06:30',duration:510,price:350,safety:8.5,seats:70},
    {id:'t12',name:'Indore-Surat Exp',number:'12914',type:'express',from:'Indore',to:'Surat',via:['Ujjain','Ratlam'],dep:'20:30',arr:'05:00',duration:510,price:480,safety:9.0,seats:50},
    {id:'t13',name:'Nagpur-Hyderabad',number:'12724',type:'superfast',from:'Nagpur',to:'Hyderabad',via:['Chandrapur','Kazipet'],dep:'09:00',arr:'18:00',duration:540,price:590,safety:9.4,seats:48},
    {id:'t14',name:'Sabarmati Exp',number:'19166',type:'regular',from:'Ahmedabad',to:'Jaipur',via:['Abu Road','Ajmer'],dep:'14:00',arr:'02:00',duration:720,price:380,safety:8.1,seats:60},
    {id:'t15',name:'Bangalore-Hyderabad',number:'12786',type:'superfast',from:'Bangalore',to:'Hyderabad',via:['Anantapur','Kurnool'],dep:'21:20',arr:'07:00',duration:580,price:1450,safety:9.2,seats:50},
    {id:'t16',name:'Kacheguda Exp',number:'12710',type:'regular',from:'Bangalore',to:'Hyderabad',via:['Dharmavaram'],dep:'18:00',arr:'06:00',duration:720,price:420,safety:8.4,seats:72}
  ],
  buses:[
    {id:'b1',name:'Shivneri Volvo',number:'MH-43-BT-9901',type:'bus-ac',from:'Mumbai',to:'Pune',via:['Khopoli'],dep:'06:00',arr:'09:30',duration:210,price:400,safety:8.5,seats:40},
    {id:'b2',name:'MSRTC Asiad',number:'MH-12-AQ-4455',type:'bus-normal',from:'Pune',to:'Nashik',via:['Narayangaon','Sangamner'],dep:'08:30',arr:'14:00',duration:330,price:280,safety:7.8,seats:45},
    {id:'b3',name:'Orange Travels',number:'AP-02-ZZ-1234',type:'bus-ac',from:'Bangalore',to:'Hyderabad',via:['Anantapur'],dep:'22:00',arr:'06:30',duration:510,price:1200,safety:9.8,seats:36},
    {id:'b4',name:'Zingbus Premium',number:'DL-01-XP-8877',type:'bus-ac',from:'Delhi',to:'Jaipur',via:['Gurgaon'],dep:'08:00',arr:'13:00',duration:300,price:650,safety:9.7,seats:40},
    {id:'b5',name:'Intercity Sleeper',number:'MP-09-BC-4411',type:'bus-ac',from:'Indore',to:'Bhopal',via:['Dewas'],dep:'07:00',arr:'10:30',duration:210,price:450,safety:9.0,seats:32},
    {id:'b6',name:'Gujarat Travels',number:'GJ-01-MM-0099',type:'bus-ac',from:'Ahmedabad',to:'Surat',via:['Baroda'],dep:'05:30',arr:'10:00',duration:270,price:500,safety:9.2,seats:40},
    {id:'b7',name:'Royal Travels',number:'TN-01-XY-5544',type:'bus-ac',from:'Chennai',to:'Bangalore',via:['Hosur'],dep:'23:30',arr:'06:00',duration:390,price:800,safety:9.5,seats:38}
  ],
  airplanes:[
    {id:'a1',name:'IndiGo',number:'6E-2134',type:'flight-economy',from:'Mumbai',to:'Delhi',via:[],dep:'07:00',arr:'09:15',duration:135,price:4500,safety:9.8,seats:180},
    {id:'a2',name:'Air India',number:'AI-102',type:'flight-business',from:'Delhi',to:'Bangalore',via:[],dep:'10:00',arr:'12:45',duration:165,price:12000,safety:9.9,seats:150},
    {id:'a3',name:'SpiceJet',number:'SG-871',type:'flight-economy',from:'Kolkata',to:'Chennai',via:[],dep:'14:00',arr:'16:30',duration:150,price:3800,safety:9.4,seats:180}
  ],
  foodItems:[
    {id:'f1',cat:'main',name:'Veg Thali',icon:'🍱',desc:'Dal, sabji, rice, roti, papad',price:120},
    {id:'f2',cat:'main',name:'Chicken Biryani',icon:'🍗',desc:'Spicy dum biryani with raita',price:220},
    {id:'f3',cat:'main',name:'Paneer Tikka',icon:'🥘',desc:'Grilled paneer with mint chutney',price:180},
    {id:'f4',cat:'snacks',name:'Club Sandwich',icon:'🥪',desc:'Grilled veg sandwich with fries',price:90},
    {id:'f5',cat:'snacks',name:'Samosa Plate',icon:'🥟',desc:'2 Crispy samosas with tea',price:60},
    {id:'f6',cat:'beverages',name:'Masala Tea',icon:'☕',desc:'Strong ginger cardamom tea',price:30},
    {id:'f7',cat:'beverages',name:'Cold Coffee',icon:'🥤',desc:'Chilled creamy coffee',price:80},
    {id:'f8',cat:'beverages',name:'Fresh Lime',icon:'🍋',desc:'Refreshing sweet & salty soda',price:50}
  ],
  bookings:[
    {id:'bk1001',userId:'u1',vehicleId:'t1',vehicleType:'train',vehicleName:'Mumbai-Pune Express',from:'Mumbai',to:'Pune',date:'2026-03-10',dep:'06:00',arr:'07:35',seats:['A3','A4'],foodOrders:[{icon:'🍱',name:'Veg Thali',price:120}],baseCost:640,foodCost:120,total:760,status:'past',bookedAt:'2026-03-08'},
  ]
};

function initDB(){
    if(!localStorage.getItem('rr_initialized4')){
        localStorage.setItem('rr_users',JSON.stringify(INITIAL_DATA.users));
        localStorage.setItem('rr_cities',JSON.stringify(INITIAL_DATA.cities));
        localStorage.setItem('rr_trains',JSON.stringify(INITIAL_DATA.trains));
        localStorage.setItem('rr_buses',JSON.stringify(INITIAL_DATA.buses));
        localStorage.setItem('rr_airplanes',JSON.stringify(INITIAL_DATA.airplanes));
        localStorage.setItem('rr_food',JSON.stringify(INITIAL_DATA.foodItems));
        localStorage.setItem('rr_bookings',JSON.stringify(INITIAL_DATA.bookings));
        localStorage.setItem('rr_initialized4','1');
    }
}

const DB = {
    get: k => JSON.parse(localStorage.getItem('rr_'+k)||'[]'),
    set: (k,v) => localStorage.setItem('rr_'+k,JSON.stringify(v)),
    find: (k,fn) => DB.get(k).find(fn),
    filter: (k,fn) => DB.get(k).filter(fn),
    add: (k,item) => { const d=DB.get(k); d.push(item); DB.set(k,d); },
    update: (k,id,changes) => {
        const d=DB.get(k);
        const i=d.findIndex(x=>x.id===id);
        if(i>-1){ d[i]={...d[i],...changes}; DB.set(k,d); }
    },
    remove: (k,id) => DB.set(k,DB.get(k).filter(x=>x.id!==id))
};

function uid(){ return 'id_'+Math.random().toString(36).substr(2, 9); }