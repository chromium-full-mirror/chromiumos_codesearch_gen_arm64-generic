// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
/**
 * Enumeration of measurement unit types.
 */
export var MeasurementSystemUnitType;
(function (MeasurementSystemUnitType) {
    MeasurementSystemUnitType[MeasurementSystemUnitType["METRIC"] = 0] = "METRIC";
    MeasurementSystemUnitType[MeasurementSystemUnitType["IMPERIAL"] = 1] = "IMPERIAL";
})(MeasurementSystemUnitType || (MeasurementSystemUnitType = {}));
export class MeasurementSystem {
    /**
     * Measurement system of the print preview. Used to parse and serialize
     * point measurements into the system's local units (e.g. millimeters,
     * inches).
     * @param thousandsDelimiter Delimiter between thousands digits.
     * @param decimalDelimiter Delimiter between integers and decimals.
     * @param unitType Measurement unit type of the system.
     */
    constructor(thousandsDelimiter, decimalDelimiter, unitType) {
        this.thousandsDelimiter_ = thousandsDelimiter || ',';
        this.decimalDelimiter_ = decimalDelimiter || '.';
        assert(measurementSystemPrefs.has(unitType));
        this.measurementSystemPrefs_ = measurementSystemPrefs.get(unitType);
    }
    get unitSymbol() {
        return this.measurementSystemPrefs_.unitSymbol;
    }
    get thousandsDelimiter() {
        return this.thousandsDelimiter_;
    }
    get decimalDelimiter() {
        return this.decimalDelimiter_;
    }
    /**
     * Rounds a value in the local system's units to the appropriate precision.
     */
    roundValue(value) {
        const precision = this.measurementSystemPrefs_.precision;
        const roundedValue = Math.round(value / precision) * precision;
        // Truncate
        return +roundedValue.toFixed(this.measurementSystemPrefs_.decimalPlaces);
    }
    /**
     * @param pts Value in points to convert to local units.
     * @return Value in local units.
     */
    convertFromPoints(pts) {
        return pts / this.measurementSystemPrefs_.ptsPerUnit;
    }
    /**
     * @param localUnits Value in local units to convert to points.
     * @return Value in points.
     */
    convertToPoints(localUnits) {
        return localUnits * this.measurementSystemPrefs_.ptsPerUnit;
    }
}
/**
 * Maximum resolution and number of decimal places for local unit values.
 */
const measurementSystemPrefs = new Map([
    [
        MeasurementSystemUnitType.METRIC,
        {
            precision: 0.5,
            decimalPlaces: 1,
            ptsPerUnit: 72.0 / 25.4,
            unitSymbol: 'mm',
        },
    ],
    [
        MeasurementSystemUnitType.IMPERIAL,
        { precision: 0.01, decimalPlaces: 2, ptsPerUnit: 72.0, unitSymbol: '"' },
    ],
]);
