// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { KeyTrustLevel, KeyType } from './connectors_internals.mojom-webui.js';
const TrustLevelStringMap = {
    [KeyTrustLevel.UNSPECIFIED]: 'Unspecified',
    [KeyTrustLevel.HW]: 'HW',
    [KeyTrustLevel.OS]: 'OS',
};
const KeyTypeStringMap = {
    [KeyType.UNKNOWN]: 'Unknown',
    [KeyType.RSA]: 'RSA',
    [KeyType.EC]: 'EC',
};
export function trustLevelToString(trustLevel) {
    return TrustLevelStringMap[trustLevel] || 'invalid';
}
export function keyTypeToString(keyType) {
    return KeyTypeStringMap[keyType] || 'invalid';
}
export function keySyncCodeToString(syncKeyResponseCode) {
    if (!syncKeyResponseCode) {
        return 'Undefined';
    }
    const value = syncKeyResponseCode.value;
    if (value / 100 === 2) {
        return `Success (${value})`;
    }
    return `Failure (${value})`;
}
