import { useState } from 'react'
import { InputBox } from './components'
import  useCurrencyInfo  from "./hooks/useCurrencyInfo"



function App() {
  const [amount, setAmount]                   = useState(null)
  const [from, setFrom]                       = useState("usd")
  const [to, setTo]                           = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(null)
  
  const currencyMap = {
    aed: "United Arab Emirates - AED",
    afn: "Afghanistan - AFN",
    all: "Albania - ALL",
    amd: "Armenia - AMD",
    ang: "Netherlands Antilles - ANG",
    aoa: "Angola - AOA",
    ars: "Argentina - ARS",
    aud: "Australia - AUD",
    awg: "Aruba - AWG",
    azn: "Azerbaijan - AZN",
    bam: "Bosnia and Herzegovina - BAM",
    bbd: "Barbados - BBD",
    bdt: "Bangladesh - BDT",
    bgn: "Bulgaria - BGN",
    bhd: "Bahrain - BHD",
    bif: "Burundi - BIF",
    bmd: "Bermuda - BMD",
    bnd: "Brunei - BND",
    bob: "Bolivia - BOB",
    brl: "Brazil - BRL",
    bsd: "Bahamas - BSD",
    btn: "Bhutan - BTN",
    bwp: "Botswana - BWP",
    byn: "Belarus - BYN",
    bzd: "Belize - BZD",
    cad: "Canada - CAD",
    cdf: "Democratic Republic of the Congo - CDF",
    chf: "Switzerland - CHF",
    clp: "Chile - CLP",
    cny: "China - CNY",
    cop: "Colombia - COP",
    crc: "Costa Rica - CRC",
    cup: "Cuba - CUP",
    cve: "Cape Verde - CVE",
    czk: "Czech Republic - CZK",
    djf: "Djibouti - DJF",
    dkk: "Denmark - DKK",
    dop: "Dominican Republic - DOP",
    dzd: "Algeria - DZD",
    egp: "Egypt - EGP",
    ern: "Eritrea - ERN",
    etb: "Ethiopia - ETB",
    eur: "Eurozone - EUR",
    fjd: "Fiji - FJD",
    fkp: "Falkland Islands - FKP",
    gbp: "United Kingdom - GBP",
    gel: "Georgia - GEL",
    ghs: "Ghana - GHS",
    gip: "Gibraltar - GIP",
    gmd: "Gambia - GMD",
    gnf: "Guinea - GNF",
    gtq: "Guatemala - GTQ",
    gyd: "Guyana - GYD",
    hkd: "Hong Kong - HKD",
    hnl: "Honduras - HNL",
    hrk: "Croatia - HRK",
    htg: "Haiti - HTG",
    huf: "Hungary - HUF",
    idr: "Indonesia - IDR",
    ils: "Israel - ILS",
    inr: "India - INR",
    iqd: "Iraq - IQD",
    irr: "Iran - IRR",
    isk: "Iceland - ISK",
    jmd: "Jamaica - JMD",
    jod: "Jordan - JOD",
    jpy: "Japan - JPY",
    kes: "Kenya - KES",
    kgs: "Kyrgyzstan - KGS",
    khr: "Cambodia - KHR",
    kmf: "Comoros - KMF",
    krw: "South Korea - KRW",
    kwd: "Kuwait - KWD",
    kyd: "Cayman Islands - KYD",
    kzt: "Kazakhstan - KZT",
    lak: "Laos - LAK",
    lbp: "Lebanon - LBP",
    lkr: "Sri Lanka - LKR",
    lrd: "Liberia - LRD",
    lsl: "Lesotho - LSL",
    lyd: "Libya - LYD",
    mad: "Morocco - MAD",
    mdl: "Moldova - MDL",
    mga: "Madagascar - MGA",
    mkd: "North Macedonia - MKD",
    mmk: "Myanmar - MMK",
    mnt: "Mongolia - MNT",
    mop: "Macau - MOP",
    mru: "Mauritania - MRU",
    mur: "Mauritius - MUR",
    mvr: "Maldives - MVR",
    mwk: "Malawi - MWK",
    mxn: "Mexico - MXN",
    myr: "Malaysia - MYR",
    mzn: "Mozambique - MZN",
    nad: "Namibia - NAD",
    ngn: "Nigeria - NGN",
    nio: "Nicaragua - NIO",
    nok: "Norway - NOK",
    npr: "Nepal - NPR",
    nzd: "New Zealand - NZD",
    omr: "Oman - OMR",
    pab: "Panama - PAB",
    pen: "Peru - PEN",
    pgk: "Papua New Guinea - PGK",
    php: "Philippines - PHP",
    pkr: "Pakistan - PKR",
    pln: "Poland - PLN",
    pyg: "Paraguay - PYG",
    qar: "Qatar - QAR",
    ron: "Romania - RON",
    rsd: "Serbia - RSD",
    rub: "Russia - RUB",
    rwf: "Rwanda - RWF",
    sar: "Saudi Arabia - SAR",
    sbd: "Solomon Islands - SBD",
    scr: "Seychelles - SCR",
    sdg: "Sudan - SDG",
    sek: "Sweden - SEK",
    sgd: "Singapore - SGD",
    shp: "Saint Helena - SHP",
    sll: "Sierra Leone - SLL",
    sos: "Somalia - SOS",
    srd: "Suriname - SRD",
    ssp: "South Sudan - SSP",
    stn: "São Tomé and Príncipe - STN",
    syp: "Syria - SYP",
    szl: "Eswatini - SZL",
    thb: "Thailand - THB",
    tjs: "Tajikistan - TJS",
    tmt: "Turkmenistan - TMT",
    tnd: "Tunisia - TND",
    top: "Tonga - TOP",
    try: "Turkey - TRY",
    ttd: "Trinidad and Tobago - TTD",
    twd: "Taiwan - TWD",
    tzs: "Tanzania - TZS",
    uah: "Ukraine - UAH",
    ugx: "Uganda - UGX",
    usd: "United States - USD",
    uyu: "Uruguay - UYU",
    uzs: "Uzbekistan - UZS",
    ves: "Venezuela - VES",
    vnd: "Vietnam - VND",
    vuv: "Vanuatu - VUV",
    wst: "Samoa - WST",
    xaf: "Central African CFA Franc - XAF",
    xcd: "East Caribbean Dollar - XCD",
    xof: "West African CFA Franc - XOF",
    xpf: "CFP Franc - XPF",
    yer: "Yemen - YER",
    zar: "South Africa - ZAR",
    zmw: "Zambia - ZMW",
    zwl: "Zimbabwe - ZWL",
  };
  
  
 
  


  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo ?? {}).map((code) => ({
    code,
    name: currencyMap[code] || code.toUpperCase(), // Use mapped name, or fallback to uppercase code
  }));
  

  const swap = ()=>{

    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  } 

const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
}



return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url("https://images.pexels.com/photos/7567606/pexels-photo-7567606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                       className='hover:cursor-pointer'
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(baseCurrency) => setFrom(baseCurrency)}
                          selectCurrency={from}
                          onAmountChange={(amount) => setAmount(amount)}
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                      
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5  hover:cursor-pointer"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4 ">
                      <InputBox
                      className='hover:cursor-pointer'
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(baseCurrency)=>(setTo(baseCurrency))}
                          selectCurrency={to}
                          amountDisable
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:cursor-pointer">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
