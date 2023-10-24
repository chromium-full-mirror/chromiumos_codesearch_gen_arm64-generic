// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The type of entity a given command represents. Must stay in sync with
 * commander::CommandItem::Entity.
 */
export var Entity;
(function (Entity) {
    Entity[Entity["COMMAND"] = 0] = "COMMAND";
    Entity[Entity["BOOKMARK"] = 1] = "BOOKMARK";
    Entity[Entity["TAB"] = 2] = "TAB";
    Entity[Entity["WINDOW"] = 3] = "WINDOW";
    Entity[Entity["GROUP"] = 4] = "GROUP";
})(Entity || (Entity = {}));
/**
 * The action that should be taken when the view model is received by the view.
 * Must stay in sync with commander::CommanderViewModel::Action. "CLOSE" is
 * included for completeness, but should be handled before the view model
 * reaches the WebUI layer.
 */
export var Action;
(function (Action) {
    Action[Action["DISPLAY_RESULTS"] = 0] = "DISPLAY_RESULTS";
    Action[Action["CLOSE"] = 1] = "CLOSE";
    Action[Action["PROMPT"] = 2] = "PROMPT";
})(Action || (Action = {}));
// TODO(lgrey): Convert Option and ViewModel from class to type when tests
// are in TypeScript.
/**
 * View model for a result option.
 * Corresponds to commander::CommandItemViewModel.
 */
export class Option {
}
/**
 * View model for a result set.
 * Corresponds to commander::CommanderViewModel.
 */
export class ViewModel {
}
