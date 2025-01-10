

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
const URLapi = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"

let dd = document.querySelectorAll(".dropdown");
let inputtext = document.querySelector("#amtinput");
let flagimg = document.querySelectorAll(".flag");
let btn = document.querySelector(".getrate");
let msg = document.querySelector(".msg");

//here evt.target will be select object kyu ki event vahi pe trigger hua
const updateflag = (evt) =>{
  let newcurrcode = evt.target.value;
  // console.log(newcurrcode);
  let kahaseaaya = evt.target.parentElement;
  // console.log(kahaseaaya);
  // console.log(kahaseaaya.id);
  if(kahaseaaya.id== "from"){
  flagimg[0].src = `https://flagsapi.com/${countryList[newcurrcode]}/flat/64.png`;
  }
  else{
  flagimg[1].src = `https://flagsapi.com/${countryList[newcurrcode]}/flat/64.png`;
  }
};

const updaterate = async () => {
    let u1 = dd[0].value.toLowerCase();
    console.log(u1);
    let u2 = dd[1].value.toLowerCase();
    console.log(u2);
    let newurl = `${URLapi}${u1}.json`
    let apidata = await fetch(newurl);
    let usdata = await apidata.json();
    let exchrate = usdata[u1][u2];
    console.log(exchrate);
    let amount = inputtext.value;
    let finalamt = amount * exchrate ;
    if(amount<=0) {
      msg.innerText = "Enter a valid amount";
    }
    else
    msg.innerText = `${amount} ${u1.toUpperCase()} = ${finalamt} ${u2.toUpperCase()}`;
};


for(let selects of dd){
for(let currcode in countryList){
   let newopt =  document.createElement("option");
   newopt.class = "options" ;
   newopt.innerText = `${currcode}`;
   newopt.value = `${currcode}`;
   selects.append(newopt); 

   if(selects.id == "fromwala" && currcode== "USD") {
    newopt.selected = "selected";
   }
   else if(selects.id != "fromwala" && currcode=="INR"){
    newopt.selected = "selected";
   }
}
  selects.addEventListener("change",updateflag);
}

btn.addEventListener("click", updaterate);






