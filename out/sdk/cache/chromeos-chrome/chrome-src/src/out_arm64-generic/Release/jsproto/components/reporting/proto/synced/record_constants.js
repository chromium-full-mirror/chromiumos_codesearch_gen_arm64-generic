// source: components/reporting/proto/synced/record_constants.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.reporting.Destination');
goog.provide('proto.reporting.Priority');

/**
 * @enum {number}
 */
proto.reporting.Destination = {
  UNDEFINED_DESTINATION: 0,
  UPLOAD_EVENTS: 1,
  MEET_DEVICE_TELEMETRY: 2,
  WEB_PROTECT: 3,
  ARC_INSTALL: 4,
  POLICY_VALIDATION: 5,
  EXTENSION_INSTALL: 6,
  REPORTING_RECORD: 7,
  PRINT_JOBS: 9,
  EXTENSIONS_WORKFLOW: 10,
  DLP_EVENTS: 11,
  LOGIN_LOGOUT_EVENTS: 12,
  HEARTBEAT_EVENTS: 13,
  INFO_METRIC: 14,
  TELEMETRY_METRIC: 15,
  EVENT_METRIC: 16,
  ADDED_REMOVED_EVENTS: 17,
  CRD_EVENTS: 18,
  PERIPHERAL_EVENTS: 19,
  SUSPICIOUS_EVENTS: 20,
  LOCK_UNLOCK_EVENTS: 21,
  CROS_SECURITY_AGENT: 22,
  CROS_SECURITY_PROCESS: 23,
  OS_EVENTS: 24,
  LEGACY_TECH: 25,
  CROS_SECURITY_NETWORK: 26,
  LOG_UPLOAD: 27,
  CROS_SECURITY_USER: 28,
  KIOSK_HEARTBEAT_EVENTS: 29,
  CHROME_BROWSER_ENTERPRISE: 30,
  CRASH_EVENTS: 31
};

/**
 * @enum {number}
 */
proto.reporting.Priority = {
  UNDEFINED_PRIORITY: 0,
  IMMEDIATE: 1,
  FAST_BATCH: 2,
  SLOW_BATCH: 3,
  BACKGROUND_BATCH: 4,
  MANUAL_BATCH: 5,
  SECURITY: 6,
  MANUAL_BATCH_LACROS: 7
};

