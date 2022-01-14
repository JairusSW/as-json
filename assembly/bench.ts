renderResult(upper: f32, lower: f32, bins: f32[], startTick: f32): string {
    // Create encoder
    let encoder = new JSONEncoder();

    // Construct necessary object
    encoder.pushObject("result");

    encoder.setString("upperBound", upper.toString());
    encoder.setString("lowerBound", lower.toString());

    encoder.setString("startTick", startTick.toString());
    // Set Bin Key
    encoder.setString("bin")
    // Set Array
    encoder.pushArray(null)
    encoder.setBoolean(null, true)
    encoder.setBoolean(null, false)
    encoder.setBoolean(null, true)
    encoder.popArray()
    // Finish object
    encoder.popObject();

    return "{" + encoder.toString() + "}";
}