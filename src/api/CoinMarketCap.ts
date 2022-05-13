/*
 * @Author: HLGhpz
 * @Date: 2022-05-13 15:33:04
 * @LastEditors: HLGhpz
 * @LastEditTime: 2022-05-13 17:07:25
 * @Description:
 *
 * Copyright (c) 2022 by HLGhpz, All Rights Reserved.
 */

import axios from 'axios'

let response: any = null;

async function getCoinMarketCap() {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/historical', {
      headers: {
        'X-CMC_PRO_API_KEY': 'a2a4274f-371e-4c0e-a67f-4839f6b9e414',
      },
      proxy: {
        host: '127.0.0.1',
        port: 7890,
      },
      params: {
        id: 1,
        time_start: "2019-01-01",
        time_end: "2020-01-01",
        interval: "7d"
      }
    });
  } catch (err) {
    console.log('接口错误', err)
  }
  if (response) {
    const data = response.data;
    console.log(data)
  }
}

export default getCoinMarketCap;
