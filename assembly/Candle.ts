import {
    JSON
} from ".";
@json
export class Candle {
    timestamp!: i64;
    high!: f64;
    low!: f64;
    open!: f64;
    close!: f64;
    constructor(timestamp: i64, high: f64, low: f64, open: f64, close: f64) {
        this.timestamp = timestamp;
        this.high = high;
        this.low = low;
        this.open = open;
        this.close = close;
    }
}