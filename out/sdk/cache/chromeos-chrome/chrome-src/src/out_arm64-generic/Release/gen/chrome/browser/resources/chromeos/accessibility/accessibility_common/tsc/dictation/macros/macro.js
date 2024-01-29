// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { MacroName } from './macro_names.js';
/**
 * Reasons that canTryAction in CheckContextResult might be false.
 * Similar to MacroError::ErrorType in
 * google3/intelligence/dbw/proto/actuator/errors/macro_error.proto, but
 * only with fields used by Chrome OS.
 */
export var MacroError;
(function (MacroError) {
    MacroError[MacroError["UNKNOWN"] = 0] = "UNKNOWN";
    // User intent was poorly formed. For example, a numerical field was set
    // to a string value.
    MacroError[MacroError["INVALID_USER_INTENT"] = 1] = "INVALID_USER_INTENT";
    // Returned when the context is invalid for a macro execution,
    // for example selecting the word "cat" when there is no word "cat" in
    // the text area.
    MacroError[MacroError["BAD_CONTEXT"] = 2] = "BAD_CONTEXT";
    // Actuation would fail to be successful. For example, the text area might
    // no longer be active, or the action cannot be taken in the given context.
    MacroError[MacroError["FAILED_ACTUATION"] = 3] = "FAILED_ACTUATION";
})(MacroError || (MacroError = {}));
/**
 * An interface for a Dictation Macro, which can determine if intents are
 * actionable and execute them.
 * @abstract
 */
export class Macro {
    macroName_;
    checker_;
    /** @param macroName The name of this macro. */
    constructor(macroName, checker) {
        this.macroName_ = macroName;
        this.checker_ = checker;
    }
    /** Gets the description of the macro the user intends to execute. */
    getName() {
        return this.macroName_;
    }
    /** Gets the human-readable description of the macro. Useful for debugging. */
    getNameAsString() {
        return MacroName[this.macroName_];
    }
    /**
     * Checks whether a macro can attempt to run in the current context.
     * If this macro has several steps, just checks the first step.
     */
    checkContext() {
        if (!this.checker_) {
            // Unable to check context.
            return this.createSuccessCheckContextResult_();
        }
        const failedContext = this.checker_.getFailedContext();
        if (!failedContext) {
            return this.createSuccessCheckContextResult_();
        }
        return this.createFailureCheckContextResult_(MacroError.BAD_CONTEXT, failedContext);
    }
    /**
     * Attempts to execute a macro in the current context. This base method
     * should be overridden by each subclass.
     */
    run() {
        throw new Error(`The run() function must be implemented by each subclass.`);
    }
    /** Protected helper method to create a CheckContextResult with an error. */
    createFailureCheckContextResult_(error, failedContext) {
        return { canTryAction: false, error, failedContext };
    }
    /**
     * Protected helper method to create a CheckContextResult representing
     * success.
     */
    createSuccessCheckContextResult_() {
        return { canTryAction: true };
    }
    /** Protected helper method to create a RunMacroResult. */
    createRunMacroResult_(isSuccess, error) {
        return { isSuccess, error };
    }
    isSmart() {
        return false;
    }
}
