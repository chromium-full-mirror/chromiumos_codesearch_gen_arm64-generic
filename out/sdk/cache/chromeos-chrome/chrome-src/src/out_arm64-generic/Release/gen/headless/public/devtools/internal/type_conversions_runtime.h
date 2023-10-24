// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_RUNTIME_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_RUNTIME_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {



template <>
struct FromValue<runtime::SerializationOptions> {
  static std::unique_ptr<runtime::SerializationOptions> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::SerializationOptions::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::SerializationOptions& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::DeepSerializedValue> {
  static std::unique_ptr<runtime::DeepSerializedValue> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::DeepSerializedValue::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::DeepSerializedValue& value) {
  return value.Serialize();
}




template <>
struct FromValue<runtime::RemoteObject> {
  static std::unique_ptr<runtime::RemoteObject> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::RemoteObject::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::RemoteObject& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::CustomPreview> {
  static std::unique_ptr<runtime::CustomPreview> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::CustomPreview::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::CustomPreview& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ObjectPreview> {
  static std::unique_ptr<runtime::ObjectPreview> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ObjectPreview::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ObjectPreview& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::PropertyPreview> {
  static std::unique_ptr<runtime::PropertyPreview> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::PropertyPreview::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::PropertyPreview& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::EntryPreview> {
  static std::unique_ptr<runtime::EntryPreview> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::EntryPreview::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::EntryPreview& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::PropertyDescriptor> {
  static std::unique_ptr<runtime::PropertyDescriptor> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::PropertyDescriptor::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::PropertyDescriptor& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::InternalPropertyDescriptor> {
  static std::unique_ptr<runtime::InternalPropertyDescriptor> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::InternalPropertyDescriptor::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::InternalPropertyDescriptor& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::PrivatePropertyDescriptor> {
  static std::unique_ptr<runtime::PrivatePropertyDescriptor> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::PrivatePropertyDescriptor::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::PrivatePropertyDescriptor& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::CallArgument> {
  static std::unique_ptr<runtime::CallArgument> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::CallArgument::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::CallArgument& value) {
  return value.Serialize();
}



template <>
struct FromValue<runtime::ExecutionContextDescription> {
  static std::unique_ptr<runtime::ExecutionContextDescription> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ExecutionContextDescription::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ExecutionContextDescription& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ExceptionDetails> {
  static std::unique_ptr<runtime::ExceptionDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ExceptionDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ExceptionDetails& value) {
  return value.Serialize();
}




template <>
struct FromValue<runtime::CallFrame> {
  static std::unique_ptr<runtime::CallFrame> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::CallFrame::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::CallFrame& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::StackTrace> {
  static std::unique_ptr<runtime::StackTrace> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::StackTrace::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::StackTrace& value) {
  return value.Serialize();
}



template <>
struct FromValue<runtime::StackTraceId> {
  static std::unique_ptr<runtime::StackTraceId> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::StackTraceId::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::StackTraceId& value) {
  return value.Serialize();
}

template <>
struct FromValue<runtime::SerializationOptionsSerialization> {
  static runtime::SerializationOptionsSerialization Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::SerializationOptionsSerialization::DEEP;
    }
    if (value.GetString() == "deep")
      return runtime::SerializationOptionsSerialization::DEEP;
    if (value.GetString() == "json")
      return runtime::SerializationOptionsSerialization::JSON;
    if (value.GetString() == "idOnly")
      return runtime::SerializationOptionsSerialization::ID_ONLY;
    errors->AddError("invalid enum value");
    return runtime::SerializationOptionsSerialization::DEEP;
  }
};

template <>
inline base::Value ToValue(const runtime::SerializationOptionsSerialization& value) {
  switch (value) {
    case runtime::SerializationOptionsSerialization::DEEP:
      return base::Value("deep");
    case runtime::SerializationOptionsSerialization::JSON:
      return base::Value("json");
    case runtime::SerializationOptionsSerialization::ID_ONLY:
      return base::Value("idOnly");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<runtime::DeepSerializedValueType> {
  static runtime::DeepSerializedValueType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::DeepSerializedValueType::UNDEFINED;
    }
    if (value.GetString() == "undefined")
      return runtime::DeepSerializedValueType::UNDEFINED;
    if (value.GetString() == "null")
      return runtime::DeepSerializedValueType::NONE;
    if (value.GetString() == "string")
      return runtime::DeepSerializedValueType::STRING;
    if (value.GetString() == "number")
      return runtime::DeepSerializedValueType::NUMBER;
    if (value.GetString() == "boolean")
      return runtime::DeepSerializedValueType::BOOLEAN;
    if (value.GetString() == "bigint")
      return runtime::DeepSerializedValueType::BIGINT;
    if (value.GetString() == "regexp")
      return runtime::DeepSerializedValueType::REGEXP;
    if (value.GetString() == "date")
      return runtime::DeepSerializedValueType::DATE;
    if (value.GetString() == "symbol")
      return runtime::DeepSerializedValueType::SYMBOL;
    if (value.GetString() == "array")
      return runtime::DeepSerializedValueType::ARRAY;
    if (value.GetString() == "object")
      return runtime::DeepSerializedValueType::OBJECT;
    if (value.GetString() == "function")
      return runtime::DeepSerializedValueType::FUNCTION;
    if (value.GetString() == "map")
      return runtime::DeepSerializedValueType::MAP;
    if (value.GetString() == "set")
      return runtime::DeepSerializedValueType::SET;
    if (value.GetString() == "weakmap")
      return runtime::DeepSerializedValueType::WEAKMAP;
    if (value.GetString() == "weakset")
      return runtime::DeepSerializedValueType::WEAKSET;
    if (value.GetString() == "error")
      return runtime::DeepSerializedValueType::ERR;
    if (value.GetString() == "proxy")
      return runtime::DeepSerializedValueType::PROXY;
    if (value.GetString() == "promise")
      return runtime::DeepSerializedValueType::PROMISE;
    if (value.GetString() == "typedarray")
      return runtime::DeepSerializedValueType::TYPEDARRAY;
    if (value.GetString() == "arraybuffer")
      return runtime::DeepSerializedValueType::ARRAYBUFFER;
    if (value.GetString() == "node")
      return runtime::DeepSerializedValueType::NODE;
    if (value.GetString() == "window")
      return runtime::DeepSerializedValueType::WINDOW;
    if (value.GetString() == "generator")
      return runtime::DeepSerializedValueType::GENERATOR;
    errors->AddError("invalid enum value");
    return runtime::DeepSerializedValueType::UNDEFINED;
  }
};

template <>
inline base::Value ToValue(const runtime::DeepSerializedValueType& value) {
  switch (value) {
    case runtime::DeepSerializedValueType::UNDEFINED:
      return base::Value("undefined");
    case runtime::DeepSerializedValueType::NONE:
      return base::Value("null");
    case runtime::DeepSerializedValueType::STRING:
      return base::Value("string");
    case runtime::DeepSerializedValueType::NUMBER:
      return base::Value("number");
    case runtime::DeepSerializedValueType::BOOLEAN:
      return base::Value("boolean");
    case runtime::DeepSerializedValueType::BIGINT:
      return base::Value("bigint");
    case runtime::DeepSerializedValueType::REGEXP:
      return base::Value("regexp");
    case runtime::DeepSerializedValueType::DATE:
      return base::Value("date");
    case runtime::DeepSerializedValueType::SYMBOL:
      return base::Value("symbol");
    case runtime::DeepSerializedValueType::ARRAY:
      return base::Value("array");
    case runtime::DeepSerializedValueType::OBJECT:
      return base::Value("object");
    case runtime::DeepSerializedValueType::FUNCTION:
      return base::Value("function");
    case runtime::DeepSerializedValueType::MAP:
      return base::Value("map");
    case runtime::DeepSerializedValueType::SET:
      return base::Value("set");
    case runtime::DeepSerializedValueType::WEAKMAP:
      return base::Value("weakmap");
    case runtime::DeepSerializedValueType::WEAKSET:
      return base::Value("weakset");
    case runtime::DeepSerializedValueType::ERR:
      return base::Value("error");
    case runtime::DeepSerializedValueType::PROXY:
      return base::Value("proxy");
    case runtime::DeepSerializedValueType::PROMISE:
      return base::Value("promise");
    case runtime::DeepSerializedValueType::TYPEDARRAY:
      return base::Value("typedarray");
    case runtime::DeepSerializedValueType::ARRAYBUFFER:
      return base::Value("arraybuffer");
    case runtime::DeepSerializedValueType::NODE:
      return base::Value("node");
    case runtime::DeepSerializedValueType::WINDOW:
      return base::Value("window");
    case runtime::DeepSerializedValueType::GENERATOR:
      return base::Value("generator");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<runtime::RemoteObjectType> {
  static runtime::RemoteObjectType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::RemoteObjectType::OBJECT;
    }
    if (value.GetString() == "object")
      return runtime::RemoteObjectType::OBJECT;
    if (value.GetString() == "function")
      return runtime::RemoteObjectType::FUNCTION;
    if (value.GetString() == "undefined")
      return runtime::RemoteObjectType::UNDEFINED;
    if (value.GetString() == "string")
      return runtime::RemoteObjectType::STRING;
    if (value.GetString() == "number")
      return runtime::RemoteObjectType::NUMBER;
    if (value.GetString() == "boolean")
      return runtime::RemoteObjectType::BOOLEAN;
    if (value.GetString() == "symbol")
      return runtime::RemoteObjectType::SYMBOL;
    if (value.GetString() == "bigint")
      return runtime::RemoteObjectType::BIGINT;
    errors->AddError("invalid enum value");
    return runtime::RemoteObjectType::OBJECT;
  }
};

template <>
inline base::Value ToValue(const runtime::RemoteObjectType& value) {
  switch (value) {
    case runtime::RemoteObjectType::OBJECT:
      return base::Value("object");
    case runtime::RemoteObjectType::FUNCTION:
      return base::Value("function");
    case runtime::RemoteObjectType::UNDEFINED:
      return base::Value("undefined");
    case runtime::RemoteObjectType::STRING:
      return base::Value("string");
    case runtime::RemoteObjectType::NUMBER:
      return base::Value("number");
    case runtime::RemoteObjectType::BOOLEAN:
      return base::Value("boolean");
    case runtime::RemoteObjectType::SYMBOL:
      return base::Value("symbol");
    case runtime::RemoteObjectType::BIGINT:
      return base::Value("bigint");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<runtime::RemoteObjectSubtype> {
  static runtime::RemoteObjectSubtype Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::RemoteObjectSubtype::ARRAY;
    }
    if (value.GetString() == "array")
      return runtime::RemoteObjectSubtype::ARRAY;
    if (value.GetString() == "null")
      return runtime::RemoteObjectSubtype::NONE;
    if (value.GetString() == "node")
      return runtime::RemoteObjectSubtype::NODE;
    if (value.GetString() == "regexp")
      return runtime::RemoteObjectSubtype::REGEXP;
    if (value.GetString() == "date")
      return runtime::RemoteObjectSubtype::DATE;
    if (value.GetString() == "map")
      return runtime::RemoteObjectSubtype::MAP;
    if (value.GetString() == "set")
      return runtime::RemoteObjectSubtype::SET;
    if (value.GetString() == "weakmap")
      return runtime::RemoteObjectSubtype::WEAKMAP;
    if (value.GetString() == "weakset")
      return runtime::RemoteObjectSubtype::WEAKSET;
    if (value.GetString() == "iterator")
      return runtime::RemoteObjectSubtype::ITERATOR;
    if (value.GetString() == "generator")
      return runtime::RemoteObjectSubtype::GENERATOR;
    if (value.GetString() == "error")
      return runtime::RemoteObjectSubtype::ERR;
    if (value.GetString() == "proxy")
      return runtime::RemoteObjectSubtype::PROXY;
    if (value.GetString() == "promise")
      return runtime::RemoteObjectSubtype::PROMISE;
    if (value.GetString() == "typedarray")
      return runtime::RemoteObjectSubtype::TYPEDARRAY;
    if (value.GetString() == "arraybuffer")
      return runtime::RemoteObjectSubtype::ARRAYBUFFER;
    if (value.GetString() == "dataview")
      return runtime::RemoteObjectSubtype::DATAVIEW;
    if (value.GetString() == "webassemblymemory")
      return runtime::RemoteObjectSubtype::WEBASSEMBLYMEMORY;
    if (value.GetString() == "wasmvalue")
      return runtime::RemoteObjectSubtype::WASMVALUE;
    errors->AddError("invalid enum value");
    return runtime::RemoteObjectSubtype::ARRAY;
  }
};

template <>
inline base::Value ToValue(const runtime::RemoteObjectSubtype& value) {
  switch (value) {
    case runtime::RemoteObjectSubtype::ARRAY:
      return base::Value("array");
    case runtime::RemoteObjectSubtype::NONE:
      return base::Value("null");
    case runtime::RemoteObjectSubtype::NODE:
      return base::Value("node");
    case runtime::RemoteObjectSubtype::REGEXP:
      return base::Value("regexp");
    case runtime::RemoteObjectSubtype::DATE:
      return base::Value("date");
    case runtime::RemoteObjectSubtype::MAP:
      return base::Value("map");
    case runtime::RemoteObjectSubtype::SET:
      return base::Value("set");
    case runtime::RemoteObjectSubtype::WEAKMAP:
      return base::Value("weakmap");
    case runtime::RemoteObjectSubtype::WEAKSET:
      return base::Value("weakset");
    case runtime::RemoteObjectSubtype::ITERATOR:
      return base::Value("iterator");
    case runtime::RemoteObjectSubtype::GENERATOR:
      return base::Value("generator");
    case runtime::RemoteObjectSubtype::ERR:
      return base::Value("error");
    case runtime::RemoteObjectSubtype::PROXY:
      return base::Value("proxy");
    case runtime::RemoteObjectSubtype::PROMISE:
      return base::Value("promise");
    case runtime::RemoteObjectSubtype::TYPEDARRAY:
      return base::Value("typedarray");
    case runtime::RemoteObjectSubtype::ARRAYBUFFER:
      return base::Value("arraybuffer");
    case runtime::RemoteObjectSubtype::DATAVIEW:
      return base::Value("dataview");
    case runtime::RemoteObjectSubtype::WEBASSEMBLYMEMORY:
      return base::Value("webassemblymemory");
    case runtime::RemoteObjectSubtype::WASMVALUE:
      return base::Value("wasmvalue");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<runtime::ObjectPreviewType> {
  static runtime::ObjectPreviewType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::ObjectPreviewType::OBJECT;
    }
    if (value.GetString() == "object")
      return runtime::ObjectPreviewType::OBJECT;
    if (value.GetString() == "function")
      return runtime::ObjectPreviewType::FUNCTION;
    if (value.GetString() == "undefined")
      return runtime::ObjectPreviewType::UNDEFINED;
    if (value.GetString() == "string")
      return runtime::ObjectPreviewType::STRING;
    if (value.GetString() == "number")
      return runtime::ObjectPreviewType::NUMBER;
    if (value.GetString() == "boolean")
      return runtime::ObjectPreviewType::BOOLEAN;
    if (value.GetString() == "symbol")
      return runtime::ObjectPreviewType::SYMBOL;
    if (value.GetString() == "bigint")
      return runtime::ObjectPreviewType::BIGINT;
    errors->AddError("invalid enum value");
    return runtime::ObjectPreviewType::OBJECT;
  }
};

template <>
inline base::Value ToValue(const runtime::ObjectPreviewType& value) {
  switch (value) {
    case runtime::ObjectPreviewType::OBJECT:
      return base::Value("object");
    case runtime::ObjectPreviewType::FUNCTION:
      return base::Value("function");
    case runtime::ObjectPreviewType::UNDEFINED:
      return base::Value("undefined");
    case runtime::ObjectPreviewType::STRING:
      return base::Value("string");
    case runtime::ObjectPreviewType::NUMBER:
      return base::Value("number");
    case runtime::ObjectPreviewType::BOOLEAN:
      return base::Value("boolean");
    case runtime::ObjectPreviewType::SYMBOL:
      return base::Value("symbol");
    case runtime::ObjectPreviewType::BIGINT:
      return base::Value("bigint");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<runtime::ObjectPreviewSubtype> {
  static runtime::ObjectPreviewSubtype Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::ObjectPreviewSubtype::ARRAY;
    }
    if (value.GetString() == "array")
      return runtime::ObjectPreviewSubtype::ARRAY;
    if (value.GetString() == "null")
      return runtime::ObjectPreviewSubtype::NONE;
    if (value.GetString() == "node")
      return runtime::ObjectPreviewSubtype::NODE;
    if (value.GetString() == "regexp")
      return runtime::ObjectPreviewSubtype::REGEXP;
    if (value.GetString() == "date")
      return runtime::ObjectPreviewSubtype::DATE;
    if (value.GetString() == "map")
      return runtime::ObjectPreviewSubtype::MAP;
    if (value.GetString() == "set")
      return runtime::ObjectPreviewSubtype::SET;
    if (value.GetString() == "weakmap")
      return runtime::ObjectPreviewSubtype::WEAKMAP;
    if (value.GetString() == "weakset")
      return runtime::ObjectPreviewSubtype::WEAKSET;
    if (value.GetString() == "iterator")
      return runtime::ObjectPreviewSubtype::ITERATOR;
    if (value.GetString() == "generator")
      return runtime::ObjectPreviewSubtype::GENERATOR;
    if (value.GetString() == "error")
      return runtime::ObjectPreviewSubtype::ERR;
    if (value.GetString() == "proxy")
      return runtime::ObjectPreviewSubtype::PROXY;
    if (value.GetString() == "promise")
      return runtime::ObjectPreviewSubtype::PROMISE;
    if (value.GetString() == "typedarray")
      return runtime::ObjectPreviewSubtype::TYPEDARRAY;
    if (value.GetString() == "arraybuffer")
      return runtime::ObjectPreviewSubtype::ARRAYBUFFER;
    if (value.GetString() == "dataview")
      return runtime::ObjectPreviewSubtype::DATAVIEW;
    if (value.GetString() == "webassemblymemory")
      return runtime::ObjectPreviewSubtype::WEBASSEMBLYMEMORY;
    if (value.GetString() == "wasmvalue")
      return runtime::ObjectPreviewSubtype::WASMVALUE;
    errors->AddError("invalid enum value");
    return runtime::ObjectPreviewSubtype::ARRAY;
  }
};

template <>
inline base::Value ToValue(const runtime::ObjectPreviewSubtype& value) {
  switch (value) {
    case runtime::ObjectPreviewSubtype::ARRAY:
      return base::Value("array");
    case runtime::ObjectPreviewSubtype::NONE:
      return base::Value("null");
    case runtime::ObjectPreviewSubtype::NODE:
      return base::Value("node");
    case runtime::ObjectPreviewSubtype::REGEXP:
      return base::Value("regexp");
    case runtime::ObjectPreviewSubtype::DATE:
      return base::Value("date");
    case runtime::ObjectPreviewSubtype::MAP:
      return base::Value("map");
    case runtime::ObjectPreviewSubtype::SET:
      return base::Value("set");
    case runtime::ObjectPreviewSubtype::WEAKMAP:
      return base::Value("weakmap");
    case runtime::ObjectPreviewSubtype::WEAKSET:
      return base::Value("weakset");
    case runtime::ObjectPreviewSubtype::ITERATOR:
      return base::Value("iterator");
    case runtime::ObjectPreviewSubtype::GENERATOR:
      return base::Value("generator");
    case runtime::ObjectPreviewSubtype::ERR:
      return base::Value("error");
    case runtime::ObjectPreviewSubtype::PROXY:
      return base::Value("proxy");
    case runtime::ObjectPreviewSubtype::PROMISE:
      return base::Value("promise");
    case runtime::ObjectPreviewSubtype::TYPEDARRAY:
      return base::Value("typedarray");
    case runtime::ObjectPreviewSubtype::ARRAYBUFFER:
      return base::Value("arraybuffer");
    case runtime::ObjectPreviewSubtype::DATAVIEW:
      return base::Value("dataview");
    case runtime::ObjectPreviewSubtype::WEBASSEMBLYMEMORY:
      return base::Value("webassemblymemory");
    case runtime::ObjectPreviewSubtype::WASMVALUE:
      return base::Value("wasmvalue");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<runtime::PropertyPreviewType> {
  static runtime::PropertyPreviewType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::PropertyPreviewType::OBJECT;
    }
    if (value.GetString() == "object")
      return runtime::PropertyPreviewType::OBJECT;
    if (value.GetString() == "function")
      return runtime::PropertyPreviewType::FUNCTION;
    if (value.GetString() == "undefined")
      return runtime::PropertyPreviewType::UNDEFINED;
    if (value.GetString() == "string")
      return runtime::PropertyPreviewType::STRING;
    if (value.GetString() == "number")
      return runtime::PropertyPreviewType::NUMBER;
    if (value.GetString() == "boolean")
      return runtime::PropertyPreviewType::BOOLEAN;
    if (value.GetString() == "symbol")
      return runtime::PropertyPreviewType::SYMBOL;
    if (value.GetString() == "accessor")
      return runtime::PropertyPreviewType::ACCESSOR;
    if (value.GetString() == "bigint")
      return runtime::PropertyPreviewType::BIGINT;
    errors->AddError("invalid enum value");
    return runtime::PropertyPreviewType::OBJECT;
  }
};

template <>
inline base::Value ToValue(const runtime::PropertyPreviewType& value) {
  switch (value) {
    case runtime::PropertyPreviewType::OBJECT:
      return base::Value("object");
    case runtime::PropertyPreviewType::FUNCTION:
      return base::Value("function");
    case runtime::PropertyPreviewType::UNDEFINED:
      return base::Value("undefined");
    case runtime::PropertyPreviewType::STRING:
      return base::Value("string");
    case runtime::PropertyPreviewType::NUMBER:
      return base::Value("number");
    case runtime::PropertyPreviewType::BOOLEAN:
      return base::Value("boolean");
    case runtime::PropertyPreviewType::SYMBOL:
      return base::Value("symbol");
    case runtime::PropertyPreviewType::ACCESSOR:
      return base::Value("accessor");
    case runtime::PropertyPreviewType::BIGINT:
      return base::Value("bigint");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<runtime::PropertyPreviewSubtype> {
  static runtime::PropertyPreviewSubtype Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::PropertyPreviewSubtype::ARRAY;
    }
    if (value.GetString() == "array")
      return runtime::PropertyPreviewSubtype::ARRAY;
    if (value.GetString() == "null")
      return runtime::PropertyPreviewSubtype::NONE;
    if (value.GetString() == "node")
      return runtime::PropertyPreviewSubtype::NODE;
    if (value.GetString() == "regexp")
      return runtime::PropertyPreviewSubtype::REGEXP;
    if (value.GetString() == "date")
      return runtime::PropertyPreviewSubtype::DATE;
    if (value.GetString() == "map")
      return runtime::PropertyPreviewSubtype::MAP;
    if (value.GetString() == "set")
      return runtime::PropertyPreviewSubtype::SET;
    if (value.GetString() == "weakmap")
      return runtime::PropertyPreviewSubtype::WEAKMAP;
    if (value.GetString() == "weakset")
      return runtime::PropertyPreviewSubtype::WEAKSET;
    if (value.GetString() == "iterator")
      return runtime::PropertyPreviewSubtype::ITERATOR;
    if (value.GetString() == "generator")
      return runtime::PropertyPreviewSubtype::GENERATOR;
    if (value.GetString() == "error")
      return runtime::PropertyPreviewSubtype::ERR;
    if (value.GetString() == "proxy")
      return runtime::PropertyPreviewSubtype::PROXY;
    if (value.GetString() == "promise")
      return runtime::PropertyPreviewSubtype::PROMISE;
    if (value.GetString() == "typedarray")
      return runtime::PropertyPreviewSubtype::TYPEDARRAY;
    if (value.GetString() == "arraybuffer")
      return runtime::PropertyPreviewSubtype::ARRAYBUFFER;
    if (value.GetString() == "dataview")
      return runtime::PropertyPreviewSubtype::DATAVIEW;
    if (value.GetString() == "webassemblymemory")
      return runtime::PropertyPreviewSubtype::WEBASSEMBLYMEMORY;
    if (value.GetString() == "wasmvalue")
      return runtime::PropertyPreviewSubtype::WASMVALUE;
    errors->AddError("invalid enum value");
    return runtime::PropertyPreviewSubtype::ARRAY;
  }
};

template <>
inline base::Value ToValue(const runtime::PropertyPreviewSubtype& value) {
  switch (value) {
    case runtime::PropertyPreviewSubtype::ARRAY:
      return base::Value("array");
    case runtime::PropertyPreviewSubtype::NONE:
      return base::Value("null");
    case runtime::PropertyPreviewSubtype::NODE:
      return base::Value("node");
    case runtime::PropertyPreviewSubtype::REGEXP:
      return base::Value("regexp");
    case runtime::PropertyPreviewSubtype::DATE:
      return base::Value("date");
    case runtime::PropertyPreviewSubtype::MAP:
      return base::Value("map");
    case runtime::PropertyPreviewSubtype::SET:
      return base::Value("set");
    case runtime::PropertyPreviewSubtype::WEAKMAP:
      return base::Value("weakmap");
    case runtime::PropertyPreviewSubtype::WEAKSET:
      return base::Value("weakset");
    case runtime::PropertyPreviewSubtype::ITERATOR:
      return base::Value("iterator");
    case runtime::PropertyPreviewSubtype::GENERATOR:
      return base::Value("generator");
    case runtime::PropertyPreviewSubtype::ERR:
      return base::Value("error");
    case runtime::PropertyPreviewSubtype::PROXY:
      return base::Value("proxy");
    case runtime::PropertyPreviewSubtype::PROMISE:
      return base::Value("promise");
    case runtime::PropertyPreviewSubtype::TYPEDARRAY:
      return base::Value("typedarray");
    case runtime::PropertyPreviewSubtype::ARRAYBUFFER:
      return base::Value("arraybuffer");
    case runtime::PropertyPreviewSubtype::DATAVIEW:
      return base::Value("dataview");
    case runtime::PropertyPreviewSubtype::WEBASSEMBLYMEMORY:
      return base::Value("webassemblymemory");
    case runtime::PropertyPreviewSubtype::WASMVALUE:
      return base::Value("wasmvalue");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<runtime::AwaitPromiseParams> {
  static std::unique_ptr<runtime::AwaitPromiseParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::AwaitPromiseParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::AwaitPromiseParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::AwaitPromiseResult> {
  static std::unique_ptr<runtime::AwaitPromiseResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::AwaitPromiseResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::AwaitPromiseResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::CallFunctionOnParams> {
  static std::unique_ptr<runtime::CallFunctionOnParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::CallFunctionOnParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::CallFunctionOnParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::CallFunctionOnResult> {
  static std::unique_ptr<runtime::CallFunctionOnResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::CallFunctionOnResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::CallFunctionOnResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::CompileScriptParams> {
  static std::unique_ptr<runtime::CompileScriptParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::CompileScriptParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::CompileScriptParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::CompileScriptResult> {
  static std::unique_ptr<runtime::CompileScriptResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::CompileScriptResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::CompileScriptResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::DisableParams> {
  static std::unique_ptr<runtime::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::DisableResult> {
  static std::unique_ptr<runtime::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::DiscardConsoleEntriesParams> {
  static std::unique_ptr<runtime::DiscardConsoleEntriesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::DiscardConsoleEntriesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::DiscardConsoleEntriesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::DiscardConsoleEntriesResult> {
  static std::unique_ptr<runtime::DiscardConsoleEntriesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::DiscardConsoleEntriesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::DiscardConsoleEntriesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::EnableParams> {
  static std::unique_ptr<runtime::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::EnableResult> {
  static std::unique_ptr<runtime::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::EvaluateParams> {
  static std::unique_ptr<runtime::EvaluateParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::EvaluateParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::EvaluateParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::EvaluateResult> {
  static std::unique_ptr<runtime::EvaluateResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::EvaluateResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::EvaluateResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GetIsolateIdParams> {
  static std::unique_ptr<runtime::GetIsolateIdParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GetIsolateIdParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GetIsolateIdParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GetIsolateIdResult> {
  static std::unique_ptr<runtime::GetIsolateIdResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GetIsolateIdResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GetIsolateIdResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GetHeapUsageParams> {
  static std::unique_ptr<runtime::GetHeapUsageParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GetHeapUsageParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GetHeapUsageParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GetHeapUsageResult> {
  static std::unique_ptr<runtime::GetHeapUsageResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GetHeapUsageResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GetHeapUsageResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GetPropertiesParams> {
  static std::unique_ptr<runtime::GetPropertiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GetPropertiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GetPropertiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GetPropertiesResult> {
  static std::unique_ptr<runtime::GetPropertiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GetPropertiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GetPropertiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GlobalLexicalScopeNamesParams> {
  static std::unique_ptr<runtime::GlobalLexicalScopeNamesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GlobalLexicalScopeNamesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GlobalLexicalScopeNamesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GlobalLexicalScopeNamesResult> {
  static std::unique_ptr<runtime::GlobalLexicalScopeNamesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GlobalLexicalScopeNamesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GlobalLexicalScopeNamesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::QueryObjectsParams> {
  static std::unique_ptr<runtime::QueryObjectsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::QueryObjectsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::QueryObjectsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::QueryObjectsResult> {
  static std::unique_ptr<runtime::QueryObjectsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::QueryObjectsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::QueryObjectsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ReleaseObjectParams> {
  static std::unique_ptr<runtime::ReleaseObjectParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ReleaseObjectParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ReleaseObjectParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ReleaseObjectResult> {
  static std::unique_ptr<runtime::ReleaseObjectResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ReleaseObjectResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ReleaseObjectResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ReleaseObjectGroupParams> {
  static std::unique_ptr<runtime::ReleaseObjectGroupParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ReleaseObjectGroupParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ReleaseObjectGroupParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ReleaseObjectGroupResult> {
  static std::unique_ptr<runtime::ReleaseObjectGroupResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ReleaseObjectGroupResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ReleaseObjectGroupResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::RunIfWaitingForDebuggerParams> {
  static std::unique_ptr<runtime::RunIfWaitingForDebuggerParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::RunIfWaitingForDebuggerParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::RunIfWaitingForDebuggerParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::RunIfWaitingForDebuggerResult> {
  static std::unique_ptr<runtime::RunIfWaitingForDebuggerResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::RunIfWaitingForDebuggerResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::RunIfWaitingForDebuggerResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::RunScriptParams> {
  static std::unique_ptr<runtime::RunScriptParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::RunScriptParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::RunScriptParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::RunScriptResult> {
  static std::unique_ptr<runtime::RunScriptResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::RunScriptResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::RunScriptResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::SetAsyncCallStackDepthParams> {
  static std::unique_ptr<runtime::SetAsyncCallStackDepthParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::SetAsyncCallStackDepthParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::SetAsyncCallStackDepthParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::SetAsyncCallStackDepthResult> {
  static std::unique_ptr<runtime::SetAsyncCallStackDepthResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::SetAsyncCallStackDepthResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::SetAsyncCallStackDepthResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::SetCustomObjectFormatterEnabledParams> {
  static std::unique_ptr<runtime::SetCustomObjectFormatterEnabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::SetCustomObjectFormatterEnabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::SetCustomObjectFormatterEnabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::SetCustomObjectFormatterEnabledResult> {
  static std::unique_ptr<runtime::SetCustomObjectFormatterEnabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::SetCustomObjectFormatterEnabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::SetCustomObjectFormatterEnabledResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::SetMaxCallStackSizeToCaptureParams> {
  static std::unique_ptr<runtime::SetMaxCallStackSizeToCaptureParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::SetMaxCallStackSizeToCaptureParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::SetMaxCallStackSizeToCaptureParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::SetMaxCallStackSizeToCaptureResult> {
  static std::unique_ptr<runtime::SetMaxCallStackSizeToCaptureResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::SetMaxCallStackSizeToCaptureResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::SetMaxCallStackSizeToCaptureResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::TerminateExecutionParams> {
  static std::unique_ptr<runtime::TerminateExecutionParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::TerminateExecutionParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::TerminateExecutionParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::TerminateExecutionResult> {
  static std::unique_ptr<runtime::TerminateExecutionResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::TerminateExecutionResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::TerminateExecutionResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::AddBindingParams> {
  static std::unique_ptr<runtime::AddBindingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::AddBindingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::AddBindingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::AddBindingResult> {
  static std::unique_ptr<runtime::AddBindingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::AddBindingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::AddBindingResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::RemoveBindingParams> {
  static std::unique_ptr<runtime::RemoveBindingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::RemoveBindingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::RemoveBindingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::RemoveBindingResult> {
  static std::unique_ptr<runtime::RemoveBindingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::RemoveBindingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::RemoveBindingResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GetExceptionDetailsParams> {
  static std::unique_ptr<runtime::GetExceptionDetailsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GetExceptionDetailsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GetExceptionDetailsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::GetExceptionDetailsResult> {
  static std::unique_ptr<runtime::GetExceptionDetailsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::GetExceptionDetailsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::GetExceptionDetailsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::BindingCalledParams> {
  static std::unique_ptr<runtime::BindingCalledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::BindingCalledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::BindingCalledParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<runtime::ConsoleAPICalledType> {
  static runtime::ConsoleAPICalledType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return runtime::ConsoleAPICalledType::LOG;
    }
    if (value.GetString() == "log")
      return runtime::ConsoleAPICalledType::LOG;
    if (value.GetString() == "debug")
      return runtime::ConsoleAPICalledType::DEBUG;
    if (value.GetString() == "info")
      return runtime::ConsoleAPICalledType::INFO;
    if (value.GetString() == "error")
      return runtime::ConsoleAPICalledType::ERR;
    if (value.GetString() == "warning")
      return runtime::ConsoleAPICalledType::WARNING;
    if (value.GetString() == "dir")
      return runtime::ConsoleAPICalledType::DIR;
    if (value.GetString() == "dirxml")
      return runtime::ConsoleAPICalledType::DIRXML;
    if (value.GetString() == "table")
      return runtime::ConsoleAPICalledType::TABLE;
    if (value.GetString() == "trace")
      return runtime::ConsoleAPICalledType::TRACE;
    if (value.GetString() == "clear")
      return runtime::ConsoleAPICalledType::CLEAR;
    if (value.GetString() == "startGroup")
      return runtime::ConsoleAPICalledType::START_GROUP;
    if (value.GetString() == "startGroupCollapsed")
      return runtime::ConsoleAPICalledType::START_GROUP_COLLAPSED;
    if (value.GetString() == "endGroup")
      return runtime::ConsoleAPICalledType::END_GROUP;
    if (value.GetString() == "assert")
      return runtime::ConsoleAPICalledType::ASSERT;
    if (value.GetString() == "profile")
      return runtime::ConsoleAPICalledType::PROFILE;
    if (value.GetString() == "profileEnd")
      return runtime::ConsoleAPICalledType::PROFILE_END;
    if (value.GetString() == "count")
      return runtime::ConsoleAPICalledType::COUNT;
    if (value.GetString() == "timeEnd")
      return runtime::ConsoleAPICalledType::TIME_END;
    errors->AddError("invalid enum value");
    return runtime::ConsoleAPICalledType::LOG;
  }
};

template <>
inline base::Value ToValue(const runtime::ConsoleAPICalledType& value) {
  switch (value) {
    case runtime::ConsoleAPICalledType::LOG:
      return base::Value("log");
    case runtime::ConsoleAPICalledType::DEBUG:
      return base::Value("debug");
    case runtime::ConsoleAPICalledType::INFO:
      return base::Value("info");
    case runtime::ConsoleAPICalledType::ERR:
      return base::Value("error");
    case runtime::ConsoleAPICalledType::WARNING:
      return base::Value("warning");
    case runtime::ConsoleAPICalledType::DIR:
      return base::Value("dir");
    case runtime::ConsoleAPICalledType::DIRXML:
      return base::Value("dirxml");
    case runtime::ConsoleAPICalledType::TABLE:
      return base::Value("table");
    case runtime::ConsoleAPICalledType::TRACE:
      return base::Value("trace");
    case runtime::ConsoleAPICalledType::CLEAR:
      return base::Value("clear");
    case runtime::ConsoleAPICalledType::START_GROUP:
      return base::Value("startGroup");
    case runtime::ConsoleAPICalledType::START_GROUP_COLLAPSED:
      return base::Value("startGroupCollapsed");
    case runtime::ConsoleAPICalledType::END_GROUP:
      return base::Value("endGroup");
    case runtime::ConsoleAPICalledType::ASSERT:
      return base::Value("assert");
    case runtime::ConsoleAPICalledType::PROFILE:
      return base::Value("profile");
    case runtime::ConsoleAPICalledType::PROFILE_END:
      return base::Value("profileEnd");
    case runtime::ConsoleAPICalledType::COUNT:
      return base::Value("count");
    case runtime::ConsoleAPICalledType::TIME_END:
      return base::Value("timeEnd");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<runtime::ConsoleAPICalledParams> {
  static std::unique_ptr<runtime::ConsoleAPICalledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ConsoleAPICalledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ConsoleAPICalledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ExceptionRevokedParams> {
  static std::unique_ptr<runtime::ExceptionRevokedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ExceptionRevokedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ExceptionRevokedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ExceptionThrownParams> {
  static std::unique_ptr<runtime::ExceptionThrownParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ExceptionThrownParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ExceptionThrownParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ExecutionContextCreatedParams> {
  static std::unique_ptr<runtime::ExecutionContextCreatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ExecutionContextCreatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ExecutionContextCreatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ExecutionContextDestroyedParams> {
  static std::unique_ptr<runtime::ExecutionContextDestroyedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ExecutionContextDestroyedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ExecutionContextDestroyedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::ExecutionContextsClearedParams> {
  static std::unique_ptr<runtime::ExecutionContextsClearedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::ExecutionContextsClearedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::ExecutionContextsClearedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<runtime::InspectRequestedParams> {
  static std::unique_ptr<runtime::InspectRequestedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return runtime::InspectRequestedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const runtime::InspectRequestedParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_RUNTIME_H_
