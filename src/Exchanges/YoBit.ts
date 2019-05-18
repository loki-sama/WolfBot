import * as utils from "@ekliptor/apputils";
const logger = utils.logger
    , nconf = utils.nconf;
import {MarketOrder, Ticker, Trade, TradeHistory, Currency} from "@ekliptor/bit-models";
import {CcxtExchange} from "./CcxtExchange";
import {ExOptions, OpenOrders, OrderParameters} from "./AbstractExchange";
import * as ccxt from "ccxt";
import {OrderResult} from "../structs/OrderResult";


export default class YoBit extends CcxtExchange {
    constructor(options: ExOptions) {
        super(options);
        this.exchangeLabel = Currency.Exchange.YOBIT;
        this.minTradingValue = 0.001;
        this.fee = 0.002;
        this.currencies.setSwitchCurrencyPair(true);
        this.apiClient = new ccxt.yobit(this.getExchangeConfig()); // apiSecret is empty
        this.apiClient.loadMarkets().then(() => {
            this.onExchangeReady();
        }).catch((err) => {
            logger.error("Error loading %s markets", this.className, err);
        });
    }

    // ################################################################
    // ###################### PRIVATE FUNCTIONS #######################

}