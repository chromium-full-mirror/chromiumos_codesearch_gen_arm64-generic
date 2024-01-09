// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/document_scan.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_DOCUMENT_SCAN_H__
#define CHROME_COMMON_EXTENSIONS_API_DOCUMENT_SCAN_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace document_scan {

//
// Types
//

struct ScanOptions {
  ScanOptions();
  ~ScanOptions();
  ScanOptions(const ScanOptions&) = delete;
  ScanOptions& operator=(const ScanOptions&) = delete;
  ScanOptions(ScanOptions&& rhs) noexcept;
  ScanOptions& operator=(ScanOptions&& rhs) noexcept;

  // Populates a ScanOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScanOptions& out);

  // Populates a ScanOptions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScanOptions& out);

  // Creates a deep copy of ScanOptions.
  ScanOptions Clone() const;

  // Creates a ScanOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ScanOptions> FromValue(const base::Value::Dict& value);

  // Creates a ScanOptions object from a base::Value, or nullopt on failure.
  static std::optional<ScanOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScanOptions object.
  base::Value::Dict ToValue() const;

  // The MIME types that are accepted by the caller.
  std::optional<std::vector<std::string>> mime_types;

  // The number of scanned images allowed (defaults to 1).
  std::optional<int> max_images;

};

struct ScanResults {
  ScanResults();
  ~ScanResults();
  ScanResults(const ScanResults&) = delete;
  ScanResults& operator=(const ScanResults&) = delete;
  ScanResults(ScanResults&& rhs) noexcept;
  ScanResults& operator=(ScanResults&& rhs) noexcept;

  // Populates a ScanResults object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScanResults& out);

  // Populates a ScanResults object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScanResults& out);

  // Creates a deep copy of ScanResults.
  ScanResults Clone() const;

  // Creates a ScanResults object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ScanResults> FromValue(const base::Value::Dict& value);

  // Creates a ScanResults object from a base::Value, or nullopt on failure.
  static std::optional<ScanResults> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScanResults object.
  base::Value::Dict ToValue() const;

  // The data image URLs in a form that can be passed as the "src" value to an
  // image tag.
  std::vector<std::string> data_urls;

  // The MIME type of <code>dataUrls</code>.
  std::string mime_type;

};

// OperationResult is an enum that indicates the result of each operation
// performed by the backend.  It contains the same causes as SANE_Status plus
// additional statuses that come from the IPC layers and image conversion
// stages.
enum class OperationResult {
  kNone = 0,
  kUnknown,
  kSuccess,
  kUnsupported,
  kCancelled,
  kDeviceBusy,
  kInvalid,
  kWrongType,
  kEof,
  kAdfJammed,
  kAdfEmpty,
  kCoverOpen,
  kIoError,
  kAccessDenied,
  kNoMemory,
  kUnreachable,
  kMissing,
  kInternalError,
  kMaxValue = kInternalError,
};


const char* ToString(OperationResult as_enum);
OperationResult ParseOperationResult(base::StringPiece as_string);
std::u16string GetOperationResultParseError(base::StringPiece as_string);

// How the scanner is connected to the computer.
enum class ConnectionType {
  kNone = 0,
  kUnspecified,
  kUsb,
  kNetwork,
  kMaxValue = kNetwork,
};


const char* ToString(ConnectionType as_enum);
ConnectionType ParseConnectionType(base::StringPiece as_string);
std::u16string GetConnectionTypeParseError(base::StringPiece as_string);

struct ScannerInfo {
  ScannerInfo();
  ~ScannerInfo();
  ScannerInfo(const ScannerInfo&) = delete;
  ScannerInfo& operator=(const ScannerInfo&) = delete;
  ScannerInfo(ScannerInfo&& rhs) noexcept;
  ScannerInfo& operator=(ScannerInfo&& rhs) noexcept;

  // Populates a ScannerInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScannerInfo& out);

  // Populates a ScannerInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScannerInfo& out);

  // Creates a deep copy of ScannerInfo.
  ScannerInfo Clone() const;

  // Creates a ScannerInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ScannerInfo> FromValue(const base::Value::Dict& value);

  // Creates a ScannerInfo object from a base::Value, or nullopt on failure.
  static std::optional<ScannerInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScannerInfo object.
  base::Value::Dict ToValue() const;

  // For connecting with <code>openScanner</code>.
  std::string scanner_id;

  // Printable name for displaying in the UI.
  std::string name;

  // Scanner manufacturer.
  std::string manufacturer;

  // Scanner model if available, or a generic description.
  std::string model;

  // For matching against other <code>ScannerInfo</code> entries that point to the
  // same physical device.
  std::string device_uuid;

  // How the scanner is connected to the computer.
  ConnectionType connection_type;

  // If true, the scanner connection's transport cannot be intercepted by a
  // passive listener, such as TLS or USB.
  bool secure;

  // MIME types that can be requested for returned scans.
  std::vector<std::string> image_formats;

};

// The type of an option.  This is the same set of types as SANE_Value_Type.
enum class OptionType {
  kNone = 0,
  kUnknown,
  kBool,
  kInt,
  kFixed,
  kString,
  kButton,
  kGroup,
  kMaxValue = kGroup,
};


const char* ToString(OptionType as_enum);
OptionType ParseOptionType(base::StringPiece as_string);
std::u16string GetOptionTypeParseError(base::StringPiece as_string);

// The unit of measurement for an option.  This is the same set of units as
// SANE_Unit.
enum class OptionUnit {
  kNone = 0,
  kUnitless,
  kPixel,
  kBit,
  kMm,
  kDpi,
  kPercent,
  kMicrosecond,
  kMaxValue = kMicrosecond,
};


const char* ToString(OptionUnit as_enum);
OptionUnit ParseOptionUnit(base::StringPiece as_string);
std::u16string GetOptionUnitParseError(base::StringPiece as_string);

// The type of constraint represented by an OptionConstraint.
enum class ConstraintType {
  kNone = 0,
  kIntRange,
  kFixedRange,
  kIntList,
  kFixedList,
  kStringList,
  kMaxValue = kStringList,
};


const char* ToString(ConstraintType as_enum);
ConstraintType ParseConstraintType(base::StringPiece as_string);
std::u16string GetConstraintTypeParseError(base::StringPiece as_string);

struct OptionConstraint {
  OptionConstraint();
  ~OptionConstraint();
  OptionConstraint(const OptionConstraint&) = delete;
  OptionConstraint& operator=(const OptionConstraint&) = delete;
  OptionConstraint(OptionConstraint&& rhs) noexcept;
  OptionConstraint& operator=(OptionConstraint&& rhs) noexcept;

  // Populates a OptionConstraint object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionConstraint& out);

  // Populates a OptionConstraint object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OptionConstraint& out);

  // Creates a deep copy of OptionConstraint.
  OptionConstraint Clone() const;

  // Creates a OptionConstraint object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OptionConstraint> FromValue(const base::Value::Dict& value);

  // Creates a OptionConstraint object from a base::Value, or nullopt on
  // failure.
  static std::optional<OptionConstraint> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOptionConstraint object.
  base::Value::Dict ToValue() const;

  struct Min {
    Min();
    ~Min();
    Min(const Min&) = delete;
    Min& operator=(const Min&) = delete;
    Min(Min&& rhs) noexcept;
    Min& operator=(Min&& rhs) noexcept;

    // Populates a Min object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Min& out);

    // Creates a deep copy of Min.
    Min Clone() const;

    // Creates a Min object from a base::Value, or nullopt on failure.
    static std::optional<Min> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisMin
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<double> as_number;
  };

  struct Max {
    Max();
    ~Max();
    Max(const Max&) = delete;
    Max& operator=(const Max&) = delete;
    Max(Max&& rhs) noexcept;
    Max& operator=(Max&& rhs) noexcept;

    // Populates a Max object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Max& out);

    // Creates a deep copy of Max.
    Max Clone() const;

    // Creates a Max object from a base::Value, or nullopt on failure.
    static std::optional<Max> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisMax
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<double> as_number;
  };

  struct Quant {
    Quant();
    ~Quant();
    Quant(const Quant&) = delete;
    Quant& operator=(const Quant&) = delete;
    Quant(Quant&& rhs) noexcept;
    Quant& operator=(Quant&& rhs) noexcept;

    // Populates a Quant object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Quant& out);

    // Creates a deep copy of Quant.
    Quant Clone() const;

    // Creates a Quant object from a base::Value, or nullopt on failure.
    static std::optional<Quant> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisQuant
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<double> as_number;
  };

  struct List {
    List();
    ~List();
    List(const List&) = delete;
    List& operator=(const List&) = delete;
    List(List&& rhs) noexcept;
    List& operator=(List&& rhs) noexcept;

    // Populates a List object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, List& out);

    // Creates a deep copy of List.
    List Clone() const;

    // Creates a List object from a base::Value, or nullopt on failure.
    static std::optional<List> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisList
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::vector<double>> as_numbers;
    std::optional<std::vector<int>> as_integers;
    std::optional<std::vector<std::string>> as_strings;
  };


  ConstraintType type;

  std::optional<Min> min;

  std::optional<Max> max;

  std::optional<Quant> quant;

  std::optional<List> list;

};

// How an option can be changed.
enum class Configurability {
  kNone = 0,
  kNotConfigurable,
  kSoftwareConfigurable,
  kHardwareConfigurable,
  kMaxValue = kHardwareConfigurable,
};


const char* ToString(Configurability as_enum);
Configurability ParseConfigurability(base::StringPiece as_string);
std::u16string GetConfigurabilityParseError(base::StringPiece as_string);

struct ScannerOption {
  ScannerOption();
  ~ScannerOption();
  ScannerOption(const ScannerOption&) = delete;
  ScannerOption& operator=(const ScannerOption&) = delete;
  ScannerOption(ScannerOption&& rhs) noexcept;
  ScannerOption& operator=(ScannerOption&& rhs) noexcept;

  // Populates a ScannerOption object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScannerOption& out);

  // Populates a ScannerOption object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScannerOption& out);

  // Creates a deep copy of ScannerOption.
  ScannerOption Clone() const;

  // Creates a ScannerOption object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ScannerOption> FromValue(const base::Value::Dict& value);

  // Creates a ScannerOption object from a base::Value, or nullopt on failure.
  static std::optional<ScannerOption> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScannerOption object.
  base::Value::Dict ToValue() const;

  // Current value of the option if relevant. Note the type passed here must match
  // the type specified in <code>type</code>.
  struct Value {
    Value();
    ~Value();
    Value(const Value&) = delete;
    Value& operator=(const Value&) = delete;
    Value(Value&& rhs) noexcept;
    Value& operator=(Value&& rhs) noexcept;

    // Populates a Value object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Value& out);

    // Creates a deep copy of Value.
    Value Clone() const;

    // Creates a Value object from a base::Value, or nullopt on failure.
    static std::optional<Value> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisValue
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<bool> as_boolean;
    std::optional<double> as_number;
    std::optional<std::vector<double>> as_numbers;
    std::optional<int> as_integer;
    std::optional<std::vector<int>> as_integers;
    std::optional<std::string> as_string;
  };


  // Option name using lowercase a-z, numbers, and dashes.
  std::string name;

  // Printable one-line title.
  std::string title;

  // Longer description of the option.
  std::string description;

  // The type that <code>value</code> will contain and that is needed for setting
  // this option.
  OptionType type;

  // Unit of measurement for this option.
  OptionUnit unit;

  // Current value of the option if relevant. Note the type passed here must match
  // the type specified in <code>type</code>.
  std::optional<Value> value;

  // Constraint on possible values.
  std::optional<OptionConstraint> constraint;

  // Can be detected from software.
  bool is_detectable;

  // Whether/how the option can be changed.
  Configurability configurability;

  // Can be automatically set by the backend.
  bool is_auto_settable;

  // Emulated by the backend if true.
  bool is_emulated;

  // Option is active and can be set/retrieved.  If false, the <code>value</code>
  // field will not be set.
  bool is_active;

  // UI should not display this option by default.
  bool is_advanced;

  // Option is used for internal configuration and should never be displayed in
  // the UI.
  bool is_internal;

};

struct DeviceFilter {
  DeviceFilter();
  ~DeviceFilter();
  DeviceFilter(const DeviceFilter&) = delete;
  DeviceFilter& operator=(const DeviceFilter&) = delete;
  DeviceFilter(DeviceFilter&& rhs) noexcept;
  DeviceFilter& operator=(DeviceFilter&& rhs) noexcept;

  // Populates a DeviceFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceFilter& out);

  // Populates a DeviceFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceFilter& out);

  // Creates a deep copy of DeviceFilter.
  DeviceFilter Clone() const;

  // Creates a DeviceFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DeviceFilter> FromValue(const base::Value::Dict& value);

  // Creates a DeviceFilter object from a base::Value, or nullopt on failure.
  static std::optional<DeviceFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceFilter object.
  base::Value::Dict ToValue() const;

  // Only return scanners that are directly attached to the computer.
  std::optional<bool> local;

  // Only return scanners that use a secure transport, such as USB or TLS.
  std::optional<bool> secure;

};

struct OptionGroup {
  OptionGroup();
  ~OptionGroup();
  OptionGroup(const OptionGroup&) = delete;
  OptionGroup& operator=(const OptionGroup&) = delete;
  OptionGroup(OptionGroup&& rhs) noexcept;
  OptionGroup& operator=(OptionGroup&& rhs) noexcept;

  // Populates a OptionGroup object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionGroup& out);

  // Populates a OptionGroup object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, OptionGroup& out);

  // Creates a deep copy of OptionGroup.
  OptionGroup Clone() const;

  // Creates a OptionGroup object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OptionGroup> FromValue(const base::Value::Dict& value);

  // Creates a OptionGroup object from a base::Value, or nullopt on failure.
  static std::optional<OptionGroup> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOptionGroup object.
  base::Value::Dict ToValue() const;

  // Printable title, e.g. "Geometry options".
  std::string title;

  // Names of contained options, in backend-provided order.
  std::vector<std::string> members;

};

struct GetScannerListResponse {
  GetScannerListResponse();
  ~GetScannerListResponse();
  GetScannerListResponse(const GetScannerListResponse&) = delete;
  GetScannerListResponse& operator=(const GetScannerListResponse&) = delete;
  GetScannerListResponse(GetScannerListResponse&& rhs) noexcept;
  GetScannerListResponse& operator=(GetScannerListResponse&& rhs) noexcept;

  // Populates a GetScannerListResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetScannerListResponse& out);

  // Populates a GetScannerListResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetScannerListResponse& out);

  // Creates a deep copy of GetScannerListResponse.
  GetScannerListResponse Clone() const;

  // Creates a GetScannerListResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetScannerListResponse> FromValue(const base::Value::Dict& value);

  // Creates a GetScannerListResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetScannerListResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetScannerListResponse object.
  base::Value::Dict ToValue() const;

  // The backend's enumeration result.  Note that partial results could be
  // returned even if this indicates an error.
  OperationResult result;

  // A possibly-empty list of scanners that match the provided
  // <code>DeviceFilter</code>.
  std::vector<ScannerInfo> scanners;

};

struct OpenScannerResponse {
  OpenScannerResponse();
  ~OpenScannerResponse();
  OpenScannerResponse(const OpenScannerResponse&) = delete;
  OpenScannerResponse& operator=(const OpenScannerResponse&) = delete;
  OpenScannerResponse(OpenScannerResponse&& rhs) noexcept;
  OpenScannerResponse& operator=(OpenScannerResponse&& rhs) noexcept;

  // Populates a OpenScannerResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenScannerResponse& out);

  // Populates a OpenScannerResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenScannerResponse& out);

  // Creates a deep copy of OpenScannerResponse.
  OpenScannerResponse Clone() const;

  // Creates a OpenScannerResponse object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<OpenScannerResponse> FromValue(const base::Value::Dict& value);

  // Creates a OpenScannerResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<OpenScannerResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenScannerResponse object.
  base::Value::Dict ToValue() const;

  // If <code>result</code> is <code>OperationResult.SUCCESS</code>, a key-value
  // mapping from option names to <code>ScannerOption</code>.
  struct Options {
    Options();
    ~Options();
    Options(const Options&) = delete;
    Options& operator=(const Options&) = delete;
    Options(Options&& rhs) noexcept;
    Options& operator=(Options&& rhs) noexcept;

    // Populates a Options object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Options& out);

    // Populates a Options object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Options& out);

    // Creates a deep copy of Options.
    Options Clone() const;

    // Creates a Options object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Options> FromValue(const base::Value::Dict& value);

    // Creates a Options object from a base::Value, or nullopt on failure.
    static std::optional<Options> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisOptions object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // Same scanner ID passed to <code>openScanner()</code>.
  std::string scanner_id;

  // Backend result of opening the scanner.
  OperationResult result;

  // If <code>result</code> is <code>OperationResult.SUCCESS</code>, a handle to
  // the scanner that can be used for further operations.
  std::optional<std::string> scanner_handle;

  // If <code>result</code> is <code>OperationResult.SUCCESS</code>, a key-value
  // mapping from option names to <code>ScannerOption</code>.
  std::optional<Options> options;

};

struct GetOptionGroupsResponse {
  GetOptionGroupsResponse();
  ~GetOptionGroupsResponse();
  GetOptionGroupsResponse(const GetOptionGroupsResponse&) = delete;
  GetOptionGroupsResponse& operator=(const GetOptionGroupsResponse&) = delete;
  GetOptionGroupsResponse(GetOptionGroupsResponse&& rhs) noexcept;
  GetOptionGroupsResponse& operator=(GetOptionGroupsResponse&& rhs) noexcept;

  // Populates a GetOptionGroupsResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetOptionGroupsResponse& out);

  // Populates a GetOptionGroupsResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetOptionGroupsResponse& out);

  // Creates a deep copy of GetOptionGroupsResponse.
  GetOptionGroupsResponse Clone() const;

  // Creates a GetOptionGroupsResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetOptionGroupsResponse> FromValue(const base::Value::Dict& value);

  // Creates a GetOptionGroupsResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetOptionGroupsResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetOptionGroupsResponse object.
  base::Value::Dict ToValue() const;

  // Same scanner handle passed to <code>getOptionGroups()</code>.
  std::string scanner_handle;

  // The backend's result of getting the option groups.
  OperationResult result;

  // If <code>result</code> is <code>OperationResult.SUCCESS</code>, a list of
  // option groups in the order supplied by the backend.
  std::optional<std::vector<OptionGroup>> groups;

};

struct CloseScannerResponse {
  CloseScannerResponse();
  ~CloseScannerResponse();
  CloseScannerResponse(const CloseScannerResponse&) = delete;
  CloseScannerResponse& operator=(const CloseScannerResponse&) = delete;
  CloseScannerResponse(CloseScannerResponse&& rhs) noexcept;
  CloseScannerResponse& operator=(CloseScannerResponse&& rhs) noexcept;

  // Populates a CloseScannerResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CloseScannerResponse& out);

  // Populates a CloseScannerResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CloseScannerResponse& out);

  // Creates a deep copy of CloseScannerResponse.
  CloseScannerResponse Clone() const;

  // Creates a CloseScannerResponse object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<CloseScannerResponse> FromValue(const base::Value::Dict& value);

  // Creates a CloseScannerResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<CloseScannerResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCloseScannerResponse object.
  base::Value::Dict ToValue() const;

  // Same scanner handle passed to <code>closeScanner()</code>.
  std::string scanner_handle;

  // Backend result of closing the scanner.  Even if this value is not
  // <code>OperationResult.SUCCESS</code>, the handle will be invalid and should
  // not be used for any further operations.
  OperationResult result;

};

struct OptionSetting {
  OptionSetting();
  ~OptionSetting();
  OptionSetting(const OptionSetting&) = delete;
  OptionSetting& operator=(const OptionSetting&) = delete;
  OptionSetting(OptionSetting&& rhs) noexcept;
  OptionSetting& operator=(OptionSetting&& rhs) noexcept;

  // Populates a OptionSetting object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionSetting& out);

  // Populates a OptionSetting object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OptionSetting& out);

  // Creates a deep copy of OptionSetting.
  OptionSetting Clone() const;

  // Creates a OptionSetting object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OptionSetting> FromValue(const base::Value::Dict& value);

  // Creates a OptionSetting object from a base::Value, or nullopt on failure.
  static std::optional<OptionSetting> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOptionSetting object.
  base::Value::Dict ToValue() const;

  // Value to set.  Leave unset to request automatic setting for options that have
  // <code>autoSettable</code> enabled.  The type supplied for <code>value</code>
  // must match <code>type</code>.
  struct Value {
    Value();
    ~Value();
    Value(const Value&) = delete;
    Value& operator=(const Value&) = delete;
    Value(Value&& rhs) noexcept;
    Value& operator=(Value&& rhs) noexcept;

    // Populates a Value object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Value& out);

    // Creates a deep copy of Value.
    Value Clone() const;

    // Creates a Value object from a base::Value, or nullopt on failure.
    static std::optional<Value> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisValue
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<bool> as_boolean;
    std::optional<double> as_number;
    std::optional<std::vector<double>> as_numbers;
    std::optional<int> as_integer;
    std::optional<std::vector<int>> as_integers;
    std::optional<std::string> as_string;
  };


  // Name of the option to set.
  std::string name;

  // Type of the option.  The requested type must match the real type of the
  // underlying option.
  OptionType type;

  // Value to set.  Leave unset to request automatic setting for options that have
  // <code>autoSettable</code> enabled.  The type supplied for <code>value</code>
  // must match <code>type</code>.
  std::optional<Value> value;

};

struct SetOptionResult {
  SetOptionResult();
  ~SetOptionResult();
  SetOptionResult(const SetOptionResult&) = delete;
  SetOptionResult& operator=(const SetOptionResult&) = delete;
  SetOptionResult(SetOptionResult&& rhs) noexcept;
  SetOptionResult& operator=(SetOptionResult&& rhs) noexcept;

  // Populates a SetOptionResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetOptionResult& out);

  // Populates a SetOptionResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetOptionResult& out);

  // Creates a deep copy of SetOptionResult.
  SetOptionResult Clone() const;

  // Creates a SetOptionResult object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SetOptionResult> FromValue(const base::Value::Dict& value);

  // Creates a SetOptionResult object from a base::Value, or nullopt on failure.
  static std::optional<SetOptionResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetOptionResult object.
  base::Value::Dict ToValue() const;

  // Name of the option that was set.
  std::string name;

  // Backend result of setting the option.
  OperationResult result;

};

struct SetOptionsResponse {
  SetOptionsResponse();
  ~SetOptionsResponse();
  SetOptionsResponse(const SetOptionsResponse&) = delete;
  SetOptionsResponse& operator=(const SetOptionsResponse&) = delete;
  SetOptionsResponse(SetOptionsResponse&& rhs) noexcept;
  SetOptionsResponse& operator=(SetOptionsResponse&& rhs) noexcept;

  // Populates a SetOptionsResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetOptionsResponse& out);

  // Populates a SetOptionsResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetOptionsResponse& out);

  // Creates a deep copy of SetOptionsResponse.
  SetOptionsResponse Clone() const;

  // Creates a SetOptionsResponse object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SetOptionsResponse> FromValue(const base::Value::Dict& value);

  // Creates a SetOptionsResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<SetOptionsResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetOptionsResponse object.
  base::Value::Dict ToValue() const;

  // <p>Updated key-value mapping from option names to <code>ScannerOption</code>
  // containing the new configuration after attempting to set all supplied
  // options.  This has the same structure as the <code>options</code> field in
  // <code>OpenScannerResponse</code>.</p><p>This field will be set even if some
  // options were not set successfully, but will be unset if retrieving the
  // updated configuration fails (e.g., if the scanner is disconnected in the
  // middle).</p>
  struct Options {
    Options();
    ~Options();
    Options(const Options&) = delete;
    Options& operator=(const Options&) = delete;
    Options(Options&& rhs) noexcept;
    Options& operator=(Options&& rhs) noexcept;

    // Populates a Options object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Options& out);

    // Populates a Options object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Options& out);

    // Creates a deep copy of Options.
    Options Clone() const;

    // Creates a Options object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Options> FromValue(const base::Value::Dict& value);

    // Creates a Options object from a base::Value, or nullopt on failure.
    static std::optional<Options> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisOptions object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // The same scanner handle passed to <code>setOptions()</code>.
  std::string scanner_handle;

  // One result per passed-in <code>OptionSetting</code>.
  std::vector<SetOptionResult> results;

  // <p>Updated key-value mapping from option names to <code>ScannerOption</code>
  // containing the new configuration after attempting to set all supplied
  // options.  This has the same structure as the <code>options</code> field in
  // <code>OpenScannerResponse</code>.</p><p>This field will be set even if some
  // options were not set successfully, but will be unset if retrieving the
  // updated configuration fails (e.g., if the scanner is disconnected in the
  // middle).</p>
  std::optional<Options> options;

};

struct StartScanOptions {
  StartScanOptions();
  ~StartScanOptions();
  StartScanOptions(const StartScanOptions&) = delete;
  StartScanOptions& operator=(const StartScanOptions&) = delete;
  StartScanOptions(StartScanOptions&& rhs) noexcept;
  StartScanOptions& operator=(StartScanOptions&& rhs) noexcept;

  // Populates a StartScanOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StartScanOptions& out);

  // Populates a StartScanOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StartScanOptions& out);

  // Creates a deep copy of StartScanOptions.
  StartScanOptions Clone() const;

  // Creates a StartScanOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<StartScanOptions> FromValue(const base::Value::Dict& value);

  // Creates a StartScanOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<StartScanOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStartScanOptions object.
  base::Value::Dict ToValue() const;

  // MIME type to return scanned data in.
  std::string format;

};

struct StartScanResponse {
  StartScanResponse();
  ~StartScanResponse();
  StartScanResponse(const StartScanResponse&) = delete;
  StartScanResponse& operator=(const StartScanResponse&) = delete;
  StartScanResponse(StartScanResponse&& rhs) noexcept;
  StartScanResponse& operator=(StartScanResponse&& rhs) noexcept;

  // Populates a StartScanResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StartScanResponse& out);

  // Populates a StartScanResponse object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StartScanResponse& out);

  // Creates a deep copy of StartScanResponse.
  StartScanResponse Clone() const;

  // Creates a StartScanResponse object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<StartScanResponse> FromValue(const base::Value::Dict& value);

  // Creates a StartScanResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<StartScanResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStartScanResponse object.
  base::Value::Dict ToValue() const;

  // The same scanner handle that was passed to <code>startScan()</code>.
  std::string scanner_handle;

  // The backend's start scan result.
  OperationResult result;

  // If <code>result</code> is <code>OperationResult.SUCCESS</code>, a handle that
  // can be used to read scan data or cancel the job.
  std::optional<std::string> job;

};

struct CancelScanResponse {
  CancelScanResponse();
  ~CancelScanResponse();
  CancelScanResponse(const CancelScanResponse&) = delete;
  CancelScanResponse& operator=(const CancelScanResponse&) = delete;
  CancelScanResponse(CancelScanResponse&& rhs) noexcept;
  CancelScanResponse& operator=(CancelScanResponse&& rhs) noexcept;

  // Populates a CancelScanResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CancelScanResponse& out);

  // Populates a CancelScanResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CancelScanResponse& out);

  // Creates a deep copy of CancelScanResponse.
  CancelScanResponse Clone() const;

  // Creates a CancelScanResponse object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CancelScanResponse> FromValue(const base::Value::Dict& value);

  // Creates a CancelScanResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<CancelScanResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCancelScanResponse object.
  base::Value::Dict ToValue() const;

  // The same job handle that was passed to <code>cancelScan()</code>.
  std::string job;

  // The backend's cancel scan result.
  OperationResult result;

};

struct ReadScanDataResponse {
  ReadScanDataResponse();
  ~ReadScanDataResponse();
  ReadScanDataResponse(const ReadScanDataResponse&) = delete;
  ReadScanDataResponse& operator=(const ReadScanDataResponse&) = delete;
  ReadScanDataResponse(ReadScanDataResponse&& rhs) noexcept;
  ReadScanDataResponse& operator=(ReadScanDataResponse&& rhs) noexcept;

  // Populates a ReadScanDataResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReadScanDataResponse& out);

  // Populates a ReadScanDataResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReadScanDataResponse& out);

  // Creates a deep copy of ReadScanDataResponse.
  ReadScanDataResponse Clone() const;

  // Creates a ReadScanDataResponse object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ReadScanDataResponse> FromValue(const base::Value::Dict& value);

  // Creates a ReadScanDataResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<ReadScanDataResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReadScanDataResponse object.
  base::Value::Dict ToValue() const;

  // Same job handle passed to <code>readScanData()</code>.
  std::string job;

  // The backend result of reading data.  If this is
  // <code>OperationResult.SUCCESS</code>, <code>data</code> will contain the next
  // (possibly zero-length) chunk of image data that was ready for reading.  If
  // this is <code>OperationResult.EOF</code>, <code>data</code> will contain the
  // final chunk of image data.
  OperationResult result;

  // If result is <code>OperationResult.SUCCESS</code>, the next chunk of scanned
  // image data.
  std::optional<std::vector<uint8_t>> data;

  // If result is <code>OperationResult.SUCCESS</code>, an estimate of how much of
  // the total scan data has been delivered so far, in the range 0-100.
  std::optional<int> estimated_completion;

};


//
// Functions
//

namespace Scan {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Object containing scan parameters.
  ScanOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ScanResults& result);
}  // namespace Results

}  // namespace Scan

namespace GetScannerList {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // <code>DeviceFilter</code> indicating which types of scanners should be
  // returned.
  DeviceFilter filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const GetScannerListResponse& response);
}  // namespace Results

}  // namespace GetScannerList

namespace OpenScanner {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Scanner id previously returned from <code>getScannerList</code> indicating
  // which scanner should be opened.
  std::string scanner_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const OpenScannerResponse& response);
}  // namespace Results

}  // namespace OpenScanner

namespace GetOptionGroups {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Open scanner handle previously returned from <code>openScanner</code>.
  std::string scanner_handle;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const GetOptionGroupsResponse& response);
}  // namespace Results

}  // namespace GetOptionGroups

namespace CloseScanner {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Open scanner handle previously returned from <code>openScanner</code>.
  std::string scanner_handle;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CloseScannerResponse& response);
}  // namespace Results

}  // namespace CloseScanner

namespace SetOptions {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Open scanner handle previously returned from <code>openScanner</code>.
  std::string scanner_handle;

  // A list of <code>OptionSetting</code>s that will be applied to
  // <code>scannerHandle</code>.
  std::vector<OptionSetting> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SetOptionsResponse& response);
}  // namespace Results

}  // namespace SetOptions

namespace StartScan {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Open scanner handle previously returned from <code>openScanner</code>.
  std::string scanner_handle;

  // <code>StartScanOptions</code> indicating what options are to be used for the
  // scan.  <code>StartScanOptions.format</code> must match one of the entries
  // returned in the scanner's <code>ScannerInfo</code>.
  StartScanOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const StartScanResponse& response);
}  // namespace Results

}  // namespace StartScan

namespace CancelScan {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An active scan job previously returned from <code>startScan</code>.
  std::string job;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CancelScanResponse& response);
}  // namespace Results

}  // namespace CancelScan

namespace ReadScanData {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Active job handle previously returned from <code>startScan</code>.
  std::string job;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ReadScanDataResponse& response);
}  // namespace Results

}  // namespace ReadScanData

}  // namespace document_scan
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DOCUMENT_SCAN_H__
