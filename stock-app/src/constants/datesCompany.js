export const searchdates = {
    count: 4,
    result: [
      {
        description: "APPLE INC",
        displaySymbol: "AAPL",
        symbol: "AAPL",
        type: "Common Stock",
      },
      {
        description: "APPLE INC",
        displaySymbol: "AAPL.SW",
        symbol: "AAPL.SW",
        type: "Common Stock",
      },
      {
        description: "APPLE INC",
        displaySymbol: "APC.BE",
        symbol: "APC.BE",
        type: "Common Stock",
      },
      {
        description: "APPLE INC",
        displaySymbol: "APC.DE",
        symbol: "APC.DE",
        type: "Common Stock",
      },
    ],
  };
  // const basePath = "https://finnhub.io/api/v1";
  // const apiKey = "ck1bl1hr01qnva7rk7fgck1bl1hr01qnva7rk7g0";
  // export const searchdates = async (query) => {
  //   const url = `${basePath}/search?q=${query}&token=${apiKey}`;
  //   const response = await fetch(url);
  
  //   if (!response.ok) {
  //     const message = `An error has occured: ${response.status}`;
  //     throw new Error(message);
  //   }
  
  //   return await response.json();
  // };
  
  export const companyDates = {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ/NMS (GLOBAL MARKET)",
    ipo: "1980-12-12",
    marketCapitalization: 1415993,
    name: "Apple Inc",
    phone: "14089961010",
    shareOutstanding: 4375.47998046875,
    ticker: "AAPL",
    weburl: "https://www.apple.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Technology",
  };
  export const charmData = {
    c: [217.68, 221.03, 219.89],
    h: [222.49, 221.5, 220.94],
    l: [217.19, 217.1402, 218.83],
    o: [221.03, 218.55, 220],
    s: "ok",
    t: [1569297600, 1569384000, 1569470400],
    v: [33463820, 24018876, 20730608],
  };
  
  // export const charmData = async (stockSymbol, resolution, from, to) => {
  //   const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`;
  //   const response = await fetch(url);
  
  //   if (!response.ok) {
  //     const message = `An error has occured: ${response.status}`;
  //     throw new Error(message);
  //   }
  
  //   return await response.json();
  // };