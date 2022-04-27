
const z = require("zebras")
const avgSpeed = z.pipe([
    // array of functions for input to travel through
    z.readCSV,
    z.parseNums(["speed", "acc"]),
    z.getCol("speed"),
    z.mean,
])("data.csv")