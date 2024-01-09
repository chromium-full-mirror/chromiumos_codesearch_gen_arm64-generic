// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function makePasswordCheckStatus(params) {
    return {
        state: params.state || chrome.passwordsPrivate.PasswordCheckState.IDLE,
        totalNumberOfPasswords: params.totalNumber,
        alreadyProcessed: params.checked,
        remainingInQueue: params.remaining,
        elapsedTimeSinceLastCheck: params.lastCheck,
    };
}
export function makeFamilyFetchResults(status, members) {
    return {
        status: status || chrome.passwordsPrivate.FamilyFetchStatus.SUCCESS,
        familyMembers: members || [],
    };
}
export function makeRecipientInfo(isEligible = true) {
    return {
        userId: 'user-id',
        email: 'user@example.com',
        displayName: 'New User',
        profileImageUrl: 'data://image/url',
        isEligible: isEligible,
    };
}
/**
 * Creates a single item for the list of passwords, in the format sent by the
 * password manager native code. If no |params.id| is passed, it is set to a
 * default, value so this should probably not be done in tests with multiple
 * entries (|params.id| is unique). If no |params.frontendId| is passed, it is
 * set to the same value set for |params.id|.
 */
export function createPasswordEntry(params) {
    // Generate fake data if param is undefined.
    params = params || {};
    const url = params.url || 'www.foo.com';
    const domain = {
        name: url,
        url: `https://${url}/login`,
        signonRealm: `https://${url}/login`,
    };
    const username = params.username !== undefined ? params.username : 'user';
    const id = params.id !== undefined ? params.id : 42;
    // Fallback to device store if no parameter provided.
    let storeType = chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
    if (params.inAccountStore && params.inProfileStore) {
        storeType = chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT;
    }
    else if (params.inAccountStore) {
        storeType = chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT;
    }
    else if (params.inProfileStore) {
        storeType = chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
    }
    const note = params.note || '';
    return {
        isPasskey: params.isPasskey || false,
        username: username,
        displayName: params.displayName,
        federationText: params.federationText,
        id: id,
        storedIn: storeType,
        note: note,
        changePasswordUrl: params.changePasswordUrl,
        password: params.password || '',
        affiliatedDomains: params.affiliatedDomains || [domain],
    };
}
export function createCredentialGroup(params) {
    params = params || {};
    return {
        name: params.name || '',
        iconUrl: params.icon || '',
        entries: params.credentials || [],
    };
}
/**
 * Creates a single item for the list of password blockedSites. If no |id| is
 * passed, it is set to a default, value so this should probably not be done in
 * tests with multiple entries (|id| is unique).
 */
export function createBlockedSiteEntry(url, id) {
    url = url || 'www.foo.com';
    id = id || 42;
    return {
        urls: {
            signonRealm: 'http://' + url + '/login',
            shown: url,
            link: 'http://' + url + '/login',
        },
        id: id,
    };
}
export function makePasswordManagerPrefs() {
    return {
        credentials_enable_service: {
            key: 'credentials_enable_service',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: true,
        },
        credentials_enable_autosignin: {
            key: 'credentials_enable_autosignin',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: true,
        },
        profile: {
            password_dismiss_compromised_alert: {
                key: 'profile.password_dismiss_compromised_alert',
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                value: true,
            },
        },
        password_manager: {
            // 
            password_sharing_enabled: {
                key: 'password_manager.password_sharing_enabled',
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                value: true,
            },
        },
    };
}
/**
 * Creates a new insecure credential.
 */
export function makeInsecureCredential(params) {
    // Generate fake data if param is undefined.
    params = params || {};
    const url = params.url !== undefined ? params.url : 'www.foo.com';
    const username = params.username !== undefined ? params.username : 'user';
    const id = params.id !== undefined ? params.id : 42;
    const elapsedMinSinceCompromise = params.elapsedMinSinceCompromise || 0;
    const types = params.types || [];
    const compromisedInfo = {
        compromiseTime: Date.now() - (elapsedMinSinceCompromise * 60000),
        elapsedTimeSinceCompromise: `${elapsedMinSinceCompromise} minutes ago`,
        compromiseTypes: types,
        isMuted: params.isMuted ?? false,
    };
    return {
        affiliatedDomains: [{
                name: url,
                url: `https://${url}/login`,
                signonRealm: `https://${url}/login`,
            }],
        isPasskey: false,
        id: id || 0,
        storedIn: chrome.passwordsPrivate.PasswordStoreSet.DEVICE,
        changePasswordUrl: `https://${url}/`,
        username: username,
        password: params.password,
        note: '',
        compromisedInfo: types.length ? compromisedInfo : undefined,
    };
}
export function createAffiliatedDomain(domain) {
    return {
        name: domain,
        url: `https://${domain}/login`,
        signonRealm: `https://${domain}/login`,
    };
}
