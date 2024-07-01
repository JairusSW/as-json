import { bl } from "../bl";
import {
    BACK_SLASH,
    BACKSPACE,
    CARRIAGE_RETURN,
    FORM_FEED,
    NEW_LINE,
    QUOTE,
    QUOTE_WORD,
    TAB
} from "../chars";
import { Sink } from "../sink";
import { _intTo16, intTo16, unsafeCharCodeAt } from "../util";

// @ts-ignore: Decorator valid here
@inline export function serializeString(data: string): string {
    if (data.length === 0) {
        return QUOTE_WORD + QUOTE_WORD;
    }

    let result = Sink.fromString(QUOTE_WORD, data.length);

    let last: i32 = 0;
    for (let i = 0; i < data.length; i++) {
        const char = unsafeCharCodeAt(<string>data, i);
        if (char === QUOTE || char === BACK_SLASH) {
            result.write(<string>data, last, i);
            result.writeCodePoint(BACK_SLASH);
            last = i;
        } else if (16 > char) {
            result.write(<string>data, last, i);
            last = i + 1;
            switch (char) {
                case BACKSPACE: {
                    result.write("\\b");
                    break;
                }
                case TAB: {
                    result.write("\\t");
                    break;
                }
                case NEW_LINE: {
                    result.write("\\n");
                    break;
                }
                case FORM_FEED: {
                    result.write("\\f");
                    break;
                }
                case CARRIAGE_RETURN: {
                    result.write("\\r");
                    break;
                }
                default: {
                    // all chars 0-31 must be encoded as a four digit unicode escape sequence
                    // \u0000 to \u000f handled here
                    result.write("\\u000");
                    result.write(char.toString(16));
                    break;
                }
            }
        } else if (32 > char) {
            result.write(<string>data, last, i);
            last = i + 1;
            // all chars 0-31 must be encoded as a four digit unicode escape sequence
            // \u0010 to \u001f handled here
            result.write("\\u00");
            result.write(char.toString(16));
        }
    }
    result.write(<string>data, last);
    result.writeCodePoint(QUOTE);
    return result.toString();
}

// @ts-ignore: Decorator valid here
@inline export function serializeStringBL(data: string): void {
    const len = data.length << 1;
    if (len === 0) {
        bl.write_32(2228258); /* "" */
        return;
    }

    let offset = 0;
    bl.write_16(34); /* " */

    // if (len > 7) {
    //     for (; offset < len - 7; offset += 8) {
    //         const char = load<u64>(changetype<usize>(data) + offset);
    //         const a = i32(char & 0xFFFF);
    //         const b = i32((char >> 16) & 0xFFFF);
    //         const c = i32((char >> 32) & 0xFFFF);
    //         const d = i32((char >> 48) & 0xFFFF);

    //         //console.log(`a: ${String.fromCharCode(a)}\nb: ${String.fromCharCode(b)}\nc: ${String.fromCharCode(c)}\nd: ${String.fromCharCode(d)}`);

    //         if (a > 31) {
    //             if (a === QUOTE) {
    //                 bl.write_32(2228316); /* \\" */
    //             } else if (a === BACK_SLASH) {
    //                 bl.write_32(6029404); /* \\\\ */
    //             } else {
    //                 bl.write_16(a);
    //             }
    //         } else {
    //             if (a < 16) {
    //                 switch (a) {
    //                     case BACKSPACE: {
    //                         bl.write_32(6422620); /* \\b */
    //                         break;
    //                     }
    //                     case TAB: {
    //                         bl.write_32(7602268); /* \\t */
    //                         break;
    //                     }
    //                     case NEW_LINE: {
    //                         bl.write_32(7209052); /* \\n */
    //                         break;
    //                     }
    //                     case FORM_FEED: {
    //                         bl.write_32(6684764); /* \\f */
    //                         break;
    //                     }
    //                     case CARRIAGE_RETURN: {
    //                         bl.write_32(7471196); /* \\r */
    //                         break;
    //                     }
    //                     default: {
    //                         // all chars 0-31 must be encoded as a four digit unicode escape sequence
    //                         // \u0000 to \u000f handled here
    //                         bl.write_64(13511005048209500) /* \\u00 */
    //                         bl.write_32((_intTo16(a) << 16) | 48); /* 0_ */
    //                         break;
    //                     }
    //                 }
    //             } else {
    //                 // all chars 0-31 must be encoded as a four digit unicode escape sequence
    //                 // \u0010 to \u001f handled here
    //                 bl.write_64(13511005048209500) /* \\u00 */
    //                 bl.write_32((intTo16(a) << 16) | 48); /* 0_ */
    //             }
    //         }

    //         if (b > 31) {
    //             if (b === QUOTE) {
    //                 bl.write_32(2228316); /* \\" */
    //             } else if (b === BACK_SLASH) {
    //                 bl.write_32(6029404); /* \\\\ */
    //             } else {
    //                 bl.write_16(b);
    //             }
    //         } else {
    //             if (b < 16) {
    //                 switch (b) {
    //                     case BACKSPACE: {
    //                         bl.write_32(6422620); /* \\b */
    //                         break;
    //                     }
    //                     case TAB: {
    //                         bl.write_32(7602268); /* \\t */
    //                         break;
    //                     }
    //                     case NEW_LINE: {
    //                         bl.write_32(7209052); /* \\n */
    //                         break;
    //                     }
    //                     case FORM_FEED: {
    //                         bl.write_32(6684764); /* \\f */
    //                         break;
    //                     }
    //                     case CARRIAGE_RETURN: {
    //                         bl.write_32(7471196); /* \\r */
    //                         break;
    //                     }
    //                     default: {
    //                         // all chars 0-31 must be encoded as a four digit unicode escape sequence
    //                         // \u0000 to \u000f handled here
    //                         bl.write_64(13511005048209500) /* \\u00 */
    //                         bl.write_32((_intTo16(b) << 16) | 48); /* 0_ */
    //                         break;
    //                     }
    //                 }
    //             } else {
    //                 // all chars 0-31 must be encoded as a four digit unicode escape sequence
    //                 // \u0010 to \u001f handled here
    //                 bl.write_64(13511005048209500) /* \\u00 */
    //                 bl.write_32((intTo16(b) << 16) | 48); /* 0_ */
    //             }
    //         }

    //         if (c > 31) {
    //             if (c === QUOTE) {
    //                 bl.write_32(2228316); /* \\" */
    //             } else if (c === BACK_SLASH) {
    //                 bl.write_32(6029404); /* \\\\ */
    //             } else {
    //                 bl.write_16(c);
    //             }
    //         } else {
    //             if (c < 16) {
    //                 switch (c) {
    //                     case BACKSPACE: {
    //                         bl.write_32(6422620); /* \\b */
    //                         break;
    //                     }
    //                     case TAB: {
    //                         bl.write_32(7602268); /* \\t */
    //                         break;
    //                     }
    //                     case NEW_LINE: {
    //                         bl.write_32(7209052); /* \\n */
    //                         break;
    //                     }
    //                     case FORM_FEED: {
    //                         bl.write_32(6684764); /* \\f */
    //                         break;
    //                     }
    //                     case CARRIAGE_RETURN: {
    //                         bl.write_32(7471196); /* \\r */
    //                         break;
    //                     }
    //                     default: {
    //                         // all chars 0-31 must be encoded as a four digit unicode escape sequence
    //                         // \u0000 to \u000f handled here
    //                         bl.write_64(13511005048209500) /* \\u00 */
    //                         bl.write_32((_intTo16(c) << 16) | 48); /* 0_ */
    //                         break;
    //                     }
    //                 }
    //             } else {
    //                 // all chars 0-31 must be encoded as a four digit unicode escape sequence
    //                 // \u0010 to \u001f handled here
    //                 bl.write_64(13511005048209500) /* \\u00 */
    //                 bl.write_32((intTo16(c) << 16) | 48); /* 0_ */
    //             }
    //         }
    //         if (d > 31) {
    //             if (d === QUOTE) {
    //                 bl.write_32(2228316); /* \\" */
    //             } else if (d === BACK_SLASH) {
    //                 bl.write_32(6029404); /* \\\\ */
    //             } else {
    //                 bl.write_16(d);
    //             }
    //         } else {
    //             if (d < 16) {
    //                 switch (d) {
    //                     case BACKSPACE: {
    //                         bl.write_32(6422620); /* \\b */
    //                         break;
    //                     }
    //                     case TAB: {
    //                         bl.write_32(7602268); /* \\t */
    //                         break;
    //                     }
    //                     case NEW_LINE: {
    //                         bl.write_32(7209052); /* \\n */
    //                         break;
    //                     }
    //                     case FORM_FEED: {
    //                         bl.write_32(6684764); /* \\f */
    //                         break;
    //                     }
    //                     case CARRIAGE_RETURN: {
    //                         bl.write_32(7471196); /* \\r */
    //                         break;
    //                     }
    //                     default: {
    //                         // all chars 0-31 must be encoded as a four digit unicode escape sequence
    //                         // \u0000 to \u000f handled here
    //                         bl.write_64(13511005048209500) /* \\u00 */
    //                         bl.write_32((_intTo16(d) << 16) | 48); /* 0_ */
    //                         break;
    //                     }
    //                 }
    //             } else {
    //                 // all chars 0-31 must be encoded as a four digit unicode escape sequence
    //                 // \u0010 to \u001f handled here
    //                 bl.write_64(13511005048209500) /* \\u00 */
    //                 bl.write_32((intTo16(d) << 16) | 48); /* 0_ */
    //             }
    //         }
    //     }
    // }

    if (len > 3) {
        for (; offset < len - 3; offset += 4) {
            const char = load<u32>(changetype<usize>(data) + offset);
            const a = char & 0xFFFF;
            const b = char >> 16;

            //console.log("a: " + String.fromCharCode(a));
            //console.log("b: " + String.fromCharCode(b));
            if (a > 31) {
                if (b > 31) {
                    switch (a) {
                        case QUOTE: {
                            bl.write_32(2228316); /* \\" */
                            break;
                        }
                        case BACK_SLASH: {
                            bl.write_32(6029404); /* \\\\ */
                            break;
                        }
                        default: {
                            switch (b) {
                                case QUOTE: {
                                    bl.write_16(a);
                                    bl.write_32(2228316); /* \\" */
                                    break;
                                }
                                case BACK_SLASH: {
                                    bl.write_16(a);
                                    bl.write_32(6029404); /* \\\\ */
                                    break;
                                }
                                default: {
                                    bl.write_32(char);
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    switch (a) {
                        case QUOTE: {
                            bl.write_32(2228316); /* \\" */
                            break;
                        }
                        case BACK_SLASH: {
                            bl.write_32(6029404); /* \\\\ */
                            break;
                        }
                        default: {
                            bl.write_16(a);
                            break;
                        }
                    }
                }
            } else {
                if (a < 16) {
                    switch (a) {
                        case BACKSPACE: {
                            bl.write_32(6422620); /* \\b */
                            break;
                        }
                        case TAB: {
                            bl.write_32(7602268); /* \\t */
                            break;
                        }
                        case NEW_LINE: {
                            bl.write_32(7209052); /* \\n */
                            break;
                        }
                        case FORM_FEED: {
                            bl.write_32(6684764); /* \\f */
                            break;
                        }
                        case CARRIAGE_RETURN: {
                            bl.write_32(7471196); /* \\r */
                            break;
                        }
                        default: {
                            // all chars 0-31 must be encoded as a four digit unicode escape sequence
                            // \u0000 to \u000f handled here
                            bl.write_64(13511005048209500) /* \\u00 */
                            bl.write_32((_intTo16(a) << 16) | 48); /* 0_ */
                            break;
                        }
                    }
                } else {
                    // all chars 0-31 must be encoded as a four digit unicode escape sequence
                    // \u0010 to \u001f handled here
                    bl.write_64(13511005048209500) /* \\u00 */
                    bl.write_32((intTo16(a) << 16) | 48); /* 0_ */
                }
            }

            // if (b > 31) {
            //     if (b === QUOTE) {
            //         bl.write_32(2228316); /* \\" */
            //     } else if (b === BACK_SLASH) {
            //         bl.write_32(6029404); /* \\\\ */
            //     } else {
            //         bl.write_16(b);
            //     }
            // } else {
            //     if (b < 16) {
            //         switch (b) {
            //             case BACKSPACE: {
            //                 bl.write_32(6422620); /* \\b */
            //                 break;
            //             }
            //             case TAB: {
            //                 bl.write_32(7602268); /* \\t */
            //                 break;
            //             }
            //             case NEW_LINE: {
            //                 bl.write_32(7209052); /* \\n */
            //                 break;
            //             }
            //             case FORM_FEED: {
            //                 bl.write_32(6684764); /* \\f */
            //                 break;
            //             }
            //             case CARRIAGE_RETURN: {
            //                 bl.write_32(7471196); /* \\r */
            //                 break;
            //             }
            //             default: {
            //                 // all chars 0-31 must be encoded as a four digit unicode escape sequence
            //                 // \u0000 to \u000f handled here
            //                 bl.write_64(13511005048209500) /* \\u00 */
            //                 bl.write_32((_intTo16(b) << 16) | 48); /* 0_ */
            //                 break;
            //             }
            //         }
            //     } else {
            //         // all chars 0-31 must be encoded as a four digit unicode escape sequence
            //         // \u0010 to \u001f handled here
            //         bl.write_64(13511005048209500) /* \\u00 */
            //         bl.write_32((intTo16(b) << 16) | 48); /* 0_ */
            //     }
            // }
        }
        if (offset < len) {
            const c = load<u16>(changetype<usize>(data) + len - 2);
            if (c > 31) {
                if (c === QUOTE) {
                    bl.write_32(2228316); /* \\" */
                } else if (c === BACK_SLASH) {
                    bl.write_32(6029404); /* \\\\ */
                } else {
                    bl.write_32(2228224 | c); /* "_ */
                }
            } else {
                if (c < 16) {
                    switch (c) {
                        case BACKSPACE: {
                            bl.write_32(6422620); /* \\b */
                            bl.write_16(34); /* " */
                            break;
                        }
                        case TAB: {
                            bl.write_32(7602268); /* \\t */
                            bl.write_16(34); /* " */
                            break;
                        }
                        case NEW_LINE: {
                            bl.write_32(7209052); /* \\n */
                            bl.write_16(34); /* " */
                            break;
                        }
                        case FORM_FEED: {
                            bl.write_32(6684764); /* \\f */
                            bl.write_16(34); /* " */
                            break;
                        }
                        case CARRIAGE_RETURN: {
                            bl.write_32(7471196); /* \\r */
                            bl.write_16(34); /* " */
                            break;
                        }
                        default: {
                            // all chars 0-31 must be encoded as a four digit unicode escape sequence
                            // \u0000 to \u000f handled here
                            bl.write_64(13511005048209500) /* \\u00 */
                            bl.write_32((_intTo16(c) << 16) | 48); /* 0_ */
                            bl.write_16(34); /* " */
                            break;
                        }
                    }
                } else {
                    // all chars 0-31 must be encoded as a four digit unicode escape sequence
                    // \u0010 to \u001f handled here
                    bl.write_64(13511005048209500) /* \\u00 */
                    bl.write_32((intTo16(c) << 16) | 48); /* 0_ */
                    bl.write_16(34); /* " */
                }
            }
        }
    } else {
        const c = load<u16>(changetype<usize>(data) + len - 2);
        if (c > 31) {
            if (c === QUOTE) {
                bl.write_32(2228316); /* \\" */
            } else if (c === BACK_SLASH) {
                bl.write_32(6029404); /* \\\\ */
            } else {
                bl.write_32(2228224 | c); /* "_ */
            }
        } else {
            if (c < 16) {
                switch (c) {
                    case BACKSPACE: {
                        bl.write_32(6422620); /* \\b */
                        bl.write_16(34); /* " */
                        break;
                    }
                    case TAB: {
                        bl.write_32(7602268); /* \\t */
                        bl.write_16(34); /* " */
                        break;
                    }
                    case NEW_LINE: {
                        bl.write_32(7209052); /* \\n */
                        bl.write_16(34); /* " */
                        break;
                    }
                    case FORM_FEED: {
                        bl.write_32(6684764); /* \\f */
                        bl.write_16(34); /* " */
                        break;
                    }
                    case CARRIAGE_RETURN: {
                        bl.write_32(7471196); /* \\r */
                        bl.write_16(34); /* " */
                        break;
                    }
                    default: {
                        // all chars 0-31 must be encoded as a four digit unicode escape sequence
                        // \u0000 to \u000f handled here
                        bl.write_64(13511005048209500) /* \\u00 */
                        bl.write_32((_intTo16(c) << 16) | 48); /* 0_ */
                        bl.write_16(34); /* " */
                        break;
                    }
                }
            } else {
                // all chars 0-31 must be encoded as a four digit unicode escape sequence
                // \u0010 to \u001f handled here
                bl.write_64(13511005048209500) /* \\u00 */
                bl.write_32((intTo16(c) << 16) | 48); /* 0_ */
                bl.write_16(34); /* " */
            }
        }
    }
}