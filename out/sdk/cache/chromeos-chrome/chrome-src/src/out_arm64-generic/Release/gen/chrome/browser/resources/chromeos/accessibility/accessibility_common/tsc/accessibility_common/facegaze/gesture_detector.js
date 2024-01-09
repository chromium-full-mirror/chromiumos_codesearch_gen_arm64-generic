// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** The facial gestures that are supported by FaceGaze. */
export var FacialGesture;
(function (FacialGesture) {
    FacialGesture["BROW_DOWN_LEFT"] = "browDownLeft";
    FacialGesture["BROW_DOWN_RIGHT"] = "browDownRight";
    FacialGesture["BROW_INNER_UP"] = "browInnerUp";
    FacialGesture["JAW_OPEN"] = "jawOpen";
    FacialGesture["MOUTH_LEFT"] = "mouthLeft";
    FacialGesture["MOUTH_RIGHT"] = "mouthRight";
})(FacialGesture || (FacialGesture = {}));
export class GestureDetector {
    /**
     * Computes which FacialGestures were detected. Note that this will only
     * return a gesture if it is specified in `confidenceMap`, as this function
     * uses the confidence to decide whether or not to include the gesture in
     * the final result.
     */
    static detect(result, confidenceMap) {
        const gestures = [];
        for (const classification of result.faceBlendshapes) {
            for (const category of classification.categories) {
                const gesture = category.categoryName;
                const confidence = confidenceMap.get(gesture);
                if (confidence === undefined) {
                    continue;
                }
                if (category.score < confidence) {
                    continue;
                }
                gestures.push(gesture);
            }
        }
        return gestures;
    }
}
