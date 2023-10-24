// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_INPUT_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_INPUT_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_input.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<input::TouchPoint> {
  static std::unique_ptr<input::TouchPoint> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::TouchPoint::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::TouchPoint& value) {
  return value.Serialize();
}

template <>
struct FromValue<input::GestureSourceType> {
  static input::GestureSourceType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return input::GestureSourceType::DEFAULT;
    }
    if (value.GetString() == "default")
      return input::GestureSourceType::DEFAULT;
    if (value.GetString() == "touch")
      return input::GestureSourceType::TOUCH;
    if (value.GetString() == "mouse")
      return input::GestureSourceType::MOUSE;
    errors->AddError("invalid enum value");
    return input::GestureSourceType::DEFAULT;
  }
};

template <>
inline base::Value ToValue(const input::GestureSourceType& value) {
  switch (value) {
    case input::GestureSourceType::DEFAULT:
      return base::Value("default");
    case input::GestureSourceType::TOUCH:
      return base::Value("touch");
    case input::GestureSourceType::MOUSE:
      return base::Value("mouse");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<input::MouseButton> {
  static input::MouseButton Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return input::MouseButton::NONE;
    }
    if (value.GetString() == "none")
      return input::MouseButton::NONE;
    if (value.GetString() == "left")
      return input::MouseButton::LEFT;
    if (value.GetString() == "middle")
      return input::MouseButton::MIDDLE;
    if (value.GetString() == "right")
      return input::MouseButton::RIGHT;
    if (value.GetString() == "back")
      return input::MouseButton::BACK;
    if (value.GetString() == "forward")
      return input::MouseButton::FORWARD;
    errors->AddError("invalid enum value");
    return input::MouseButton::NONE;
  }
};

template <>
inline base::Value ToValue(const input::MouseButton& value) {
  switch (value) {
    case input::MouseButton::NONE:
      return base::Value("none");
    case input::MouseButton::LEFT:
      return base::Value("left");
    case input::MouseButton::MIDDLE:
      return base::Value("middle");
    case input::MouseButton::RIGHT:
      return base::Value("right");
    case input::MouseButton::BACK:
      return base::Value("back");
    case input::MouseButton::FORWARD:
      return base::Value("forward");
  };
  NOTREACHED();
  return base::Value();
}


template <>
struct FromValue<input::DragDataItem> {
  static std::unique_ptr<input::DragDataItem> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DragDataItem::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DragDataItem& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::DragData> {
  static std::unique_ptr<input::DragData> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DragData::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DragData& value) {
  return value.Serialize();
}

template <>
struct FromValue<input::DispatchDragEventType> {
  static input::DispatchDragEventType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return input::DispatchDragEventType::DRAG_ENTER;
    }
    if (value.GetString() == "dragEnter")
      return input::DispatchDragEventType::DRAG_ENTER;
    if (value.GetString() == "dragOver")
      return input::DispatchDragEventType::DRAG_OVER;
    if (value.GetString() == "drop")
      return input::DispatchDragEventType::DROP;
    if (value.GetString() == "dragCancel")
      return input::DispatchDragEventType::DRAG_CANCEL;
    errors->AddError("invalid enum value");
    return input::DispatchDragEventType::DRAG_ENTER;
  }
};

template <>
inline base::Value ToValue(const input::DispatchDragEventType& value) {
  switch (value) {
    case input::DispatchDragEventType::DRAG_ENTER:
      return base::Value("dragEnter");
    case input::DispatchDragEventType::DRAG_OVER:
      return base::Value("dragOver");
    case input::DispatchDragEventType::DROP:
      return base::Value("drop");
    case input::DispatchDragEventType::DRAG_CANCEL:
      return base::Value("dragCancel");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<input::DispatchDragEventParams> {
  static std::unique_ptr<input::DispatchDragEventParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DispatchDragEventParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DispatchDragEventParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::DispatchDragEventResult> {
  static std::unique_ptr<input::DispatchDragEventResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DispatchDragEventResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DispatchDragEventResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<input::DispatchKeyEventType> {
  static input::DispatchKeyEventType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return input::DispatchKeyEventType::KEY_DOWN;
    }
    if (value.GetString() == "keyDown")
      return input::DispatchKeyEventType::KEY_DOWN;
    if (value.GetString() == "keyUp")
      return input::DispatchKeyEventType::KEY_UP;
    if (value.GetString() == "rawKeyDown")
      return input::DispatchKeyEventType::RAW_KEY_DOWN;
    if (value.GetString() == "char")
      return input::DispatchKeyEventType::CHAR;
    errors->AddError("invalid enum value");
    return input::DispatchKeyEventType::KEY_DOWN;
  }
};

template <>
inline base::Value ToValue(const input::DispatchKeyEventType& value) {
  switch (value) {
    case input::DispatchKeyEventType::KEY_DOWN:
      return base::Value("keyDown");
    case input::DispatchKeyEventType::KEY_UP:
      return base::Value("keyUp");
    case input::DispatchKeyEventType::RAW_KEY_DOWN:
      return base::Value("rawKeyDown");
    case input::DispatchKeyEventType::CHAR:
      return base::Value("char");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<input::DispatchKeyEventParams> {
  static std::unique_ptr<input::DispatchKeyEventParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DispatchKeyEventParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DispatchKeyEventParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::DispatchKeyEventResult> {
  static std::unique_ptr<input::DispatchKeyEventResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DispatchKeyEventResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DispatchKeyEventResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::InsertTextParams> {
  static std::unique_ptr<input::InsertTextParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::InsertTextParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::InsertTextParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::InsertTextResult> {
  static std::unique_ptr<input::InsertTextResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::InsertTextResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::InsertTextResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::ImeSetCompositionParams> {
  static std::unique_ptr<input::ImeSetCompositionParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::ImeSetCompositionParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::ImeSetCompositionParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::ImeSetCompositionResult> {
  static std::unique_ptr<input::ImeSetCompositionResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::ImeSetCompositionResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::ImeSetCompositionResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<input::DispatchMouseEventType> {
  static input::DispatchMouseEventType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return input::DispatchMouseEventType::MOUSE_PRESSED;
    }
    if (value.GetString() == "mousePressed")
      return input::DispatchMouseEventType::MOUSE_PRESSED;
    if (value.GetString() == "mouseReleased")
      return input::DispatchMouseEventType::MOUSE_RELEASED;
    if (value.GetString() == "mouseMoved")
      return input::DispatchMouseEventType::MOUSE_PTR_MOVED;
    if (value.GetString() == "mouseWheel")
      return input::DispatchMouseEventType::MOUSE_WHEEL;
    errors->AddError("invalid enum value");
    return input::DispatchMouseEventType::MOUSE_PRESSED;
  }
};

template <>
inline base::Value ToValue(const input::DispatchMouseEventType& value) {
  switch (value) {
    case input::DispatchMouseEventType::MOUSE_PRESSED:
      return base::Value("mousePressed");
    case input::DispatchMouseEventType::MOUSE_RELEASED:
      return base::Value("mouseReleased");
    case input::DispatchMouseEventType::MOUSE_PTR_MOVED:
      return base::Value("mouseMoved");
    case input::DispatchMouseEventType::MOUSE_WHEEL:
      return base::Value("mouseWheel");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<input::DispatchMouseEventPointerType> {
  static input::DispatchMouseEventPointerType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return input::DispatchMouseEventPointerType::MOUSE;
    }
    if (value.GetString() == "mouse")
      return input::DispatchMouseEventPointerType::MOUSE;
    if (value.GetString() == "pen")
      return input::DispatchMouseEventPointerType::PEN;
    errors->AddError("invalid enum value");
    return input::DispatchMouseEventPointerType::MOUSE;
  }
};

template <>
inline base::Value ToValue(const input::DispatchMouseEventPointerType& value) {
  switch (value) {
    case input::DispatchMouseEventPointerType::MOUSE:
      return base::Value("mouse");
    case input::DispatchMouseEventPointerType::PEN:
      return base::Value("pen");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<input::DispatchMouseEventParams> {
  static std::unique_ptr<input::DispatchMouseEventParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DispatchMouseEventParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DispatchMouseEventParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::DispatchMouseEventResult> {
  static std::unique_ptr<input::DispatchMouseEventResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DispatchMouseEventResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DispatchMouseEventResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<input::DispatchTouchEventType> {
  static input::DispatchTouchEventType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return input::DispatchTouchEventType::TOUCH_START;
    }
    if (value.GetString() == "touchStart")
      return input::DispatchTouchEventType::TOUCH_START;
    if (value.GetString() == "touchEnd")
      return input::DispatchTouchEventType::TOUCH_END;
    if (value.GetString() == "touchMove")
      return input::DispatchTouchEventType::TOUCH_MOVE;
    if (value.GetString() == "touchCancel")
      return input::DispatchTouchEventType::TOUCH_CANCEL;
    errors->AddError("invalid enum value");
    return input::DispatchTouchEventType::TOUCH_START;
  }
};

template <>
inline base::Value ToValue(const input::DispatchTouchEventType& value) {
  switch (value) {
    case input::DispatchTouchEventType::TOUCH_START:
      return base::Value("touchStart");
    case input::DispatchTouchEventType::TOUCH_END:
      return base::Value("touchEnd");
    case input::DispatchTouchEventType::TOUCH_MOVE:
      return base::Value("touchMove");
    case input::DispatchTouchEventType::TOUCH_CANCEL:
      return base::Value("touchCancel");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<input::DispatchTouchEventParams> {
  static std::unique_ptr<input::DispatchTouchEventParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DispatchTouchEventParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DispatchTouchEventParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::DispatchTouchEventResult> {
  static std::unique_ptr<input::DispatchTouchEventResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DispatchTouchEventResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DispatchTouchEventResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::CancelDraggingParams> {
  static std::unique_ptr<input::CancelDraggingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::CancelDraggingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::CancelDraggingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::CancelDraggingResult> {
  static std::unique_ptr<input::CancelDraggingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::CancelDraggingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::CancelDraggingResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<input::EmulateTouchFromMouseEventType> {
  static input::EmulateTouchFromMouseEventType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return input::EmulateTouchFromMouseEventType::MOUSE_PRESSED;
    }
    if (value.GetString() == "mousePressed")
      return input::EmulateTouchFromMouseEventType::MOUSE_PRESSED;
    if (value.GetString() == "mouseReleased")
      return input::EmulateTouchFromMouseEventType::MOUSE_RELEASED;
    if (value.GetString() == "mouseMoved")
      return input::EmulateTouchFromMouseEventType::MOUSE_PTR_MOVED;
    if (value.GetString() == "mouseWheel")
      return input::EmulateTouchFromMouseEventType::MOUSE_WHEEL;
    errors->AddError("invalid enum value");
    return input::EmulateTouchFromMouseEventType::MOUSE_PRESSED;
  }
};

template <>
inline base::Value ToValue(const input::EmulateTouchFromMouseEventType& value) {
  switch (value) {
    case input::EmulateTouchFromMouseEventType::MOUSE_PRESSED:
      return base::Value("mousePressed");
    case input::EmulateTouchFromMouseEventType::MOUSE_RELEASED:
      return base::Value("mouseReleased");
    case input::EmulateTouchFromMouseEventType::MOUSE_PTR_MOVED:
      return base::Value("mouseMoved");
    case input::EmulateTouchFromMouseEventType::MOUSE_WHEEL:
      return base::Value("mouseWheel");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<input::EmulateTouchFromMouseEventParams> {
  static std::unique_ptr<input::EmulateTouchFromMouseEventParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::EmulateTouchFromMouseEventParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::EmulateTouchFromMouseEventParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::EmulateTouchFromMouseEventResult> {
  static std::unique_ptr<input::EmulateTouchFromMouseEventResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::EmulateTouchFromMouseEventResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::EmulateTouchFromMouseEventResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SetIgnoreInputEventsParams> {
  static std::unique_ptr<input::SetIgnoreInputEventsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SetIgnoreInputEventsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SetIgnoreInputEventsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SetIgnoreInputEventsResult> {
  static std::unique_ptr<input::SetIgnoreInputEventsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SetIgnoreInputEventsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SetIgnoreInputEventsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SetInterceptDragsParams> {
  static std::unique_ptr<input::SetInterceptDragsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SetInterceptDragsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SetInterceptDragsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SetInterceptDragsResult> {
  static std::unique_ptr<input::SetInterceptDragsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SetInterceptDragsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SetInterceptDragsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SynthesizePinchGestureParams> {
  static std::unique_ptr<input::SynthesizePinchGestureParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SynthesizePinchGestureParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SynthesizePinchGestureParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SynthesizePinchGestureResult> {
  static std::unique_ptr<input::SynthesizePinchGestureResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SynthesizePinchGestureResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SynthesizePinchGestureResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SynthesizeScrollGestureParams> {
  static std::unique_ptr<input::SynthesizeScrollGestureParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SynthesizeScrollGestureParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SynthesizeScrollGestureParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SynthesizeScrollGestureResult> {
  static std::unique_ptr<input::SynthesizeScrollGestureResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SynthesizeScrollGestureResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SynthesizeScrollGestureResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SynthesizeTapGestureParams> {
  static std::unique_ptr<input::SynthesizeTapGestureParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SynthesizeTapGestureParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SynthesizeTapGestureParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::SynthesizeTapGestureResult> {
  static std::unique_ptr<input::SynthesizeTapGestureResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::SynthesizeTapGestureResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::SynthesizeTapGestureResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<input::DragInterceptedParams> {
  static std::unique_ptr<input::DragInterceptedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return input::DragInterceptedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const input::DragInterceptedParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_INPUT_H_
