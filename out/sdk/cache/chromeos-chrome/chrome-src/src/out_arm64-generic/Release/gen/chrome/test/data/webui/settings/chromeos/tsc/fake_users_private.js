// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Fake of the chrome.usersPrivate API. Only methods that are called
 * during testing have been implemented.
 */
export class FakeUsersPrivate {
    users = [];
    setUsersForTesting(users) {
        this.users = users;
    }
    addUser(email) {
        this.users.push({
            email,
            displayEmail: email,
            name: 'Test User',
            isOwner: false,
            isChild: false,
        });
        return Promise.resolve(true);
    }
    getUsers() {
        return Promise.resolve(this.users);
    }
    removeUser(email) {
        this.users = this.users.filter(user => user.email !== email);
        return Promise.resolve(true);
    }
    isUserInList(email) {
        const exists = !!this.users.find(user => user.email === email);
        return Promise.resolve(exists);
    }
    isUserListManaged() {
        return Promise.resolve(false);
    }
    getLoginStatus() {
        const loginStatuses = this.users.map((_user) => {
            return {
                isLoggedIn: true,
                isScreenLocked: false,
            };
        });
        return Promise.resolve(loginStatuses);
    }
    getCurrentUser() {
        return Promise.resolve(this.users[0]);
    }
}
