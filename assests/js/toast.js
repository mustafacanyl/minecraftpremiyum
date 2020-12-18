// Set the options that I want
toastr.options = {
    "closeButton": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
var sehirler =['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
    'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir',
    'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
    'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
    'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
    'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
    'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'];
var paketler =['Elmas', 'Altın', 'Zümrüt', 'Zümrüt', 'Demir', 'Optifine Cape', 'Zümrüt', 'Full Süper Paket', 'Zümrüt'];
var zamanlar =['1 saat önce', '2 saat önce', '3 saat önce', '4 saat önce', '5 saat önce', '6 saat önce','7 saat önce', '8 saat önce', '9 saat önce', '10 saat önce', '11 saat önce', '12 saat önce','13 saat önce', '14 saat önce', '15 saat önce', '16 saat önce', '17 saat önce', '18 saat önce','19 saat önce',
    '20 saat önce', '21 saat önce', '22 saat önce', '23 saat önce', '24 saat önce','1 gün önce','2 gün önce','3 gün önce','4 gün önce','5 gün önce',
    '6 gün önce','7 gün önce','8 gün önce','9 gün önce','10 gün önce','11 gün önce','12 gün önce','13 gün önce',
    '14 gün önce','15 gün önce','16 gün önce','17 gün önce','1 hafta önce','2 hafta önce','3 hafta önce','4 hafta önce','5 hafta önce','6 hafta önce','7 hafta önce','8 hafta önce','9 hafta önce','10 hafta önce','11 hafta önce','12 hafta önce','13 hafta önce','14 hafta önce','15 hafta önce','16 hafta önce','17 hafta önce'
    ,'1 ay önce','2 ay önce','3 ay önce'];
var min = 0;
var max = 80;
var min2 = 0;
var max2 = 5;
var min3 = 10000;

var max3 = 60000;
var min3 = 10000;

var max3 = 60000;
var min4 = 0;
var max4 = 60;
$(document).ready(function onDocumentReady() {
    setInterval(function doThisEveryTwoSeconds() {
        toastr.success(sehirler[Math.floor(Math.random() * (max - min + 1)) + min] + " Şehrinden Bir Oyuncu <br>"+zamanlar[Math.floor(Math.random() * (max4 - min4 + 1)) + min4]+" "+paketler[Math.floor(Math.random() * (max2 - min2 + 1)) + min2]+" Paket Satın Aldı");
    }, Math.floor(Math.random() * (max3 - min3 + 1)) + min3);   // 2000 is 2 seconds
});