const b = 0;
if (b === QUOTE || b === BACK_SLASH) {
    bl.write_s_se(data, last, i);
    bl.write_16(BACK_SLASH);
    last = i;
    i += 2;
} else if (<u16>16 > b) {
    bl.write_s_se(data, last, i);
    last = i + 2;
    i += 2;
    switch (b) {
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
            bl.write_32((_intTo16(b) << 16) | 48); /* 0_ */
            break;
        }
    }
} else if (<u16>32 > b) {
    bl.write_s_se(<string>data, last, i);
    last = i + 2;
    // all chars 0-31 must be encoded as a four digit unicode escape sequence
    // \u0010 to \u001f handled here
    bl.write_64(13511005048209500) /* \\u00 */
    bl.write_32((intTo16(b) << 16) | 48); /* 0_ */
    i += 2;
}