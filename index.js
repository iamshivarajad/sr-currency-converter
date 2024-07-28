import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyApi = new Freecurrencyapi('fca_live_GzgDC8jMXSBpmCD3fWdLwsUXiHtoyLI50lZifBRe');

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyApi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })

    const multiplier = res.data[toCurrency];
    return multiplier * units;
}