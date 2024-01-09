// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/element_type_helpers.h.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/core/html/html_tag_names.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_CORE_HTML_ELEMENT_TYPE_HELPERS_H_
#define THIRD_PARTY_BLINK_RENDERER_CORE_HTML_ELEMENT_TYPE_HELPERS_H_

#include "third_party/blink/renderer/core/html/html_element.h"
#include "third_party/blink/renderer/core/html_names.h"
#include "third_party/blink/renderer/platform/runtime_enabled_features.h"

namespace blink {

class Document;

// Type checking.
class HTMLAnchorElement;
template <>
inline bool IsElementOfType<const HTMLAnchorElement>(const Node& node) {
  return IsA<HTMLAnchorElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLAnchorElement>(const HTMLElement& element) {
  return IsA<HTMLAnchorElement>(element);
}
template <>
struct DowncastTraits<HTMLAnchorElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kATag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLAnchorElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLAreaElement;
template <>
inline bool IsElementOfType<const HTMLAreaElement>(const Node& node) {
  return IsA<HTMLAreaElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLAreaElement>(const HTMLElement& element) {
  return IsA<HTMLAreaElement>(element);
}
template <>
struct DowncastTraits<HTMLAreaElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kAreaTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLAreaElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLAudioElement;
template <>
inline bool IsElementOfType<const HTMLAudioElement>(const Node& node) {
  return IsA<HTMLAudioElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLAudioElement>(const HTMLElement& element) {
  return IsA<HTMLAudioElement>(element);
}
template <>
struct DowncastTraits<HTMLAudioElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kAudioTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLAudioElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLBaseElement;
template <>
inline bool IsElementOfType<const HTMLBaseElement>(const Node& node) {
  return IsA<HTMLBaseElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLBaseElement>(const HTMLElement& element) {
  return IsA<HTMLBaseElement>(element);
}
template <>
struct DowncastTraits<HTMLBaseElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kBaseTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLBaseElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLBDIElement;
template <>
inline bool IsElementOfType<const HTMLBDIElement>(const Node& node) {
  return IsA<HTMLBDIElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLBDIElement>(const HTMLElement& element) {
  return IsA<HTMLBDIElement>(element);
}
template <>
struct DowncastTraits<HTMLBDIElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kBdiTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLBDIElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLBodyElement;
template <>
inline bool IsElementOfType<const HTMLBodyElement>(const Node& node) {
  return IsA<HTMLBodyElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLBodyElement>(const HTMLElement& element) {
  return IsA<HTMLBodyElement>(element);
}
template <>
struct DowncastTraits<HTMLBodyElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kBodyTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLBodyElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLBRElement;
template <>
inline bool IsElementOfType<const HTMLBRElement>(const Node& node) {
  return IsA<HTMLBRElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLBRElement>(const HTMLElement& element) {
  return IsA<HTMLBRElement>(element);
}
template <>
struct DowncastTraits<HTMLBRElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kBrTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLBRElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLButtonElement;
template <>
inline bool IsElementOfType<const HTMLButtonElement>(const Node& node) {
  return IsA<HTMLButtonElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLButtonElement>(const HTMLElement& element) {
  return IsA<HTMLButtonElement>(element);
}
template <>
struct DowncastTraits<HTMLButtonElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kButtonTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLButtonElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLCanvasElement;
template <>
inline bool IsElementOfType<const HTMLCanvasElement>(const Node& node) {
  return IsA<HTMLCanvasElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLCanvasElement>(const HTMLElement& element) {
  return IsA<HTMLCanvasElement>(element);
}
template <>
struct DowncastTraits<HTMLCanvasElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kCanvasTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLCanvasElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLTableCaptionElement;
template <>
inline bool IsElementOfType<const HTMLTableCaptionElement>(const Node& node) {
  return IsA<HTMLTableCaptionElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLTableCaptionElement>(const HTMLElement& element) {
  return IsA<HTMLTableCaptionElement>(element);
}
template <>
struct DowncastTraits<HTMLTableCaptionElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kCaptionTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLTableCaptionElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLDataElement;
template <>
inline bool IsElementOfType<const HTMLDataElement>(const Node& node) {
  return IsA<HTMLDataElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLDataElement>(const HTMLElement& element) {
  return IsA<HTMLDataElement>(element);
}
template <>
struct DowncastTraits<HTMLDataElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kDataTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLDataElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLDataListElement;
template <>
inline bool IsElementOfType<const HTMLDataListElement>(const Node& node) {
  return IsA<HTMLDataListElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLDataListElement>(const HTMLElement& element) {
  return IsA<HTMLDataListElement>(element);
}
template <>
struct DowncastTraits<HTMLDataListElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kDatalistTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLDataListElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLDetailsElement;
template <>
inline bool IsElementOfType<const HTMLDetailsElement>(const Node& node) {
  return IsA<HTMLDetailsElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLDetailsElement>(const HTMLElement& element) {
  return IsA<HTMLDetailsElement>(element);
}
template <>
struct DowncastTraits<HTMLDetailsElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kDetailsTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLDetailsElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLDialogElement;
template <>
inline bool IsElementOfType<const HTMLDialogElement>(const Node& node) {
  return IsA<HTMLDialogElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLDialogElement>(const HTMLElement& element) {
  return IsA<HTMLDialogElement>(element);
}
template <>
struct DowncastTraits<HTMLDialogElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kDialogTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLDialogElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLDirectoryElement;
template <>
inline bool IsElementOfType<const HTMLDirectoryElement>(const Node& node) {
  return IsA<HTMLDirectoryElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLDirectoryElement>(const HTMLElement& element) {
  return IsA<HTMLDirectoryElement>(element);
}
template <>
struct DowncastTraits<HTMLDirectoryElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kDirTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLDirectoryElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLDivElement;
template <>
inline bool IsElementOfType<const HTMLDivElement>(const Node& node) {
  return IsA<HTMLDivElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLDivElement>(const HTMLElement& element) {
  return IsA<HTMLDivElement>(element);
}
template <>
struct DowncastTraits<HTMLDivElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kDivTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLDivElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLDListElement;
template <>
inline bool IsElementOfType<const HTMLDListElement>(const Node& node) {
  return IsA<HTMLDListElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLDListElement>(const HTMLElement& element) {
  return IsA<HTMLDListElement>(element);
}
template <>
struct DowncastTraits<HTMLDListElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kDlTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLDListElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLEmbedElement;
template <>
inline bool IsElementOfType<const HTMLEmbedElement>(const Node& node) {
  return IsA<HTMLEmbedElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLEmbedElement>(const HTMLElement& element) {
  return IsA<HTMLEmbedElement>(element);
}
template <>
struct DowncastTraits<HTMLEmbedElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kEmbedTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLEmbedElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLFieldSetElement;
template <>
inline bool IsElementOfType<const HTMLFieldSetElement>(const Node& node) {
  return IsA<HTMLFieldSetElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLFieldSetElement>(const HTMLElement& element) {
  return IsA<HTMLFieldSetElement>(element);
}
template <>
struct DowncastTraits<HTMLFieldSetElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kFieldsetTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLFieldSetElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLFontElement;
template <>
inline bool IsElementOfType<const HTMLFontElement>(const Node& node) {
  return IsA<HTMLFontElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLFontElement>(const HTMLElement& element) {
  return IsA<HTMLFontElement>(element);
}
template <>
struct DowncastTraits<HTMLFontElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kFontTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLFontElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLFormElement;
template <>
inline bool IsElementOfType<const HTMLFormElement>(const Node& node) {
  return IsA<HTMLFormElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLFormElement>(const HTMLElement& element) {
  return IsA<HTMLFormElement>(element);
}
template <>
struct DowncastTraits<HTMLFormElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kFormTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLFormElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLFrameElement;
template <>
inline bool IsElementOfType<const HTMLFrameElement>(const Node& node) {
  return IsA<HTMLFrameElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLFrameElement>(const HTMLElement& element) {
  return IsA<HTMLFrameElement>(element);
}
template <>
struct DowncastTraits<HTMLFrameElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kFrameTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLFrameElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLFrameSetElement;
template <>
inline bool IsElementOfType<const HTMLFrameSetElement>(const Node& node) {
  return IsA<HTMLFrameSetElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLFrameSetElement>(const HTMLElement& element) {
  return IsA<HTMLFrameSetElement>(element);
}
template <>
struct DowncastTraits<HTMLFrameSetElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kFramesetTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLFrameSetElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLHeadElement;
template <>
inline bool IsElementOfType<const HTMLHeadElement>(const Node& node) {
  return IsA<HTMLHeadElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLHeadElement>(const HTMLElement& element) {
  return IsA<HTMLHeadElement>(element);
}
template <>
struct DowncastTraits<HTMLHeadElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kHeadTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLHeadElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLHRElement;
template <>
inline bool IsElementOfType<const HTMLHRElement>(const Node& node) {
  return IsA<HTMLHRElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLHRElement>(const HTMLElement& element) {
  return IsA<HTMLHRElement>(element);
}
template <>
struct DowncastTraits<HTMLHRElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kHrTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLHRElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLHtmlElement;
template <>
inline bool IsElementOfType<const HTMLHtmlElement>(const Node& node) {
  return IsA<HTMLHtmlElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLHtmlElement>(const HTMLElement& element) {
  return IsA<HTMLHtmlElement>(element);
}
template <>
struct DowncastTraits<HTMLHtmlElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kHTMLTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLHtmlElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLIFrameElement;
template <>
inline bool IsElementOfType<const HTMLIFrameElement>(const Node& node) {
  return IsA<HTMLIFrameElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLIFrameElement>(const HTMLElement& element) {
  return IsA<HTMLIFrameElement>(element);
}
template <>
struct DowncastTraits<HTMLIFrameElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kIFrameTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLIFrameElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLImageElement;
template <>
inline bool IsElementOfType<const HTMLImageElement>(const Node& node) {
  return IsA<HTMLImageElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLImageElement>(const HTMLElement& element) {
  return IsA<HTMLImageElement>(element);
}
template <>
struct DowncastTraits<HTMLImageElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kImgTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLImageElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLInputElement;
template <>
inline bool IsElementOfType<const HTMLInputElement>(const Node& node) {
  return IsA<HTMLInputElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLInputElement>(const HTMLElement& element) {
  return IsA<HTMLInputElement>(element);
}
template <>
struct DowncastTraits<HTMLInputElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kInputTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLInputElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLLabelElement;
template <>
inline bool IsElementOfType<const HTMLLabelElement>(const Node& node) {
  return IsA<HTMLLabelElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLLabelElement>(const HTMLElement& element) {
  return IsA<HTMLLabelElement>(element);
}
template <>
struct DowncastTraits<HTMLLabelElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kLabelTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLLabelElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLLegendElement;
template <>
inline bool IsElementOfType<const HTMLLegendElement>(const Node& node) {
  return IsA<HTMLLegendElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLLegendElement>(const HTMLElement& element) {
  return IsA<HTMLLegendElement>(element);
}
template <>
struct DowncastTraits<HTMLLegendElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kLegendTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLLegendElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLLIElement;
template <>
inline bool IsElementOfType<const HTMLLIElement>(const Node& node) {
  return IsA<HTMLLIElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLLIElement>(const HTMLElement& element) {
  return IsA<HTMLLIElement>(element);
}
template <>
struct DowncastTraits<HTMLLIElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kLiTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLLIElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLLinkElement;
template <>
inline bool IsElementOfType<const HTMLLinkElement>(const Node& node) {
  return IsA<HTMLLinkElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLLinkElement>(const HTMLElement& element) {
  return IsA<HTMLLinkElement>(element);
}
template <>
struct DowncastTraits<HTMLLinkElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kLinkTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLLinkElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLListboxElement;
template <>
inline bool IsElementOfType<const HTMLListboxElement>(const Node& node) {
  return IsA<HTMLListboxElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLListboxElement>(const HTMLElement& element) {
  return IsA<HTMLListboxElement>(element);
}
template <>
struct DowncastTraits<HTMLListboxElement> {
  static bool AllowFrom(const Element& element) {
    // If the following line doesn't compile, your feature may vary by context,
    // in which case you'll need to write your own type helpers that can
    // distinguish elements without relying solely on tag name.
    if (!RuntimeEnabledFeatures::HTMLSelectListElementEnabled())
      return false;
    return element.HasTagName(html_names::kListboxTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLListboxElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLMapElement;
template <>
inline bool IsElementOfType<const HTMLMapElement>(const Node& node) {
  return IsA<HTMLMapElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLMapElement>(const HTMLElement& element) {
  return IsA<HTMLMapElement>(element);
}
template <>
struct DowncastTraits<HTMLMapElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kMapTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLMapElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLMarqueeElement;
template <>
inline bool IsElementOfType<const HTMLMarqueeElement>(const Node& node) {
  return IsA<HTMLMarqueeElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLMarqueeElement>(const HTMLElement& element) {
  return IsA<HTMLMarqueeElement>(element);
}
template <>
struct DowncastTraits<HTMLMarqueeElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kMarqueeTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLMarqueeElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLMenuElement;
template <>
inline bool IsElementOfType<const HTMLMenuElement>(const Node& node) {
  return IsA<HTMLMenuElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLMenuElement>(const HTMLElement& element) {
  return IsA<HTMLMenuElement>(element);
}
template <>
struct DowncastTraits<HTMLMenuElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kMenuTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLMenuElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLMetaElement;
template <>
inline bool IsElementOfType<const HTMLMetaElement>(const Node& node) {
  return IsA<HTMLMetaElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLMetaElement>(const HTMLElement& element) {
  return IsA<HTMLMetaElement>(element);
}
template <>
struct DowncastTraits<HTMLMetaElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kMetaTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLMetaElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLMeterElement;
template <>
inline bool IsElementOfType<const HTMLMeterElement>(const Node& node) {
  return IsA<HTMLMeterElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLMeterElement>(const HTMLElement& element) {
  return IsA<HTMLMeterElement>(element);
}
template <>
struct DowncastTraits<HTMLMeterElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kMeterTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLMeterElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLNoEmbedElement;
template <>
inline bool IsElementOfType<const HTMLNoEmbedElement>(const Node& node) {
  return IsA<HTMLNoEmbedElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLNoEmbedElement>(const HTMLElement& element) {
  return IsA<HTMLNoEmbedElement>(element);
}
template <>
struct DowncastTraits<HTMLNoEmbedElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kNoembedTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLNoEmbedElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLNoScriptElement;
template <>
inline bool IsElementOfType<const HTMLNoScriptElement>(const Node& node) {
  return IsA<HTMLNoScriptElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLNoScriptElement>(const HTMLElement& element) {
  return IsA<HTMLNoScriptElement>(element);
}
template <>
struct DowncastTraits<HTMLNoScriptElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kNoscriptTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLNoScriptElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLObjectElement;
template <>
inline bool IsElementOfType<const HTMLObjectElement>(const Node& node) {
  return IsA<HTMLObjectElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLObjectElement>(const HTMLElement& element) {
  return IsA<HTMLObjectElement>(element);
}
template <>
struct DowncastTraits<HTMLObjectElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kObjectTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLObjectElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLOListElement;
template <>
inline bool IsElementOfType<const HTMLOListElement>(const Node& node) {
  return IsA<HTMLOListElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLOListElement>(const HTMLElement& element) {
  return IsA<HTMLOListElement>(element);
}
template <>
struct DowncastTraits<HTMLOListElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kOlTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLOListElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLOptGroupElement;
template <>
inline bool IsElementOfType<const HTMLOptGroupElement>(const Node& node) {
  return IsA<HTMLOptGroupElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLOptGroupElement>(const HTMLElement& element) {
  return IsA<HTMLOptGroupElement>(element);
}
template <>
struct DowncastTraits<HTMLOptGroupElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kOptgroupTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLOptGroupElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLOptionElement;
template <>
inline bool IsElementOfType<const HTMLOptionElement>(const Node& node) {
  return IsA<HTMLOptionElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLOptionElement>(const HTMLElement& element) {
  return IsA<HTMLOptionElement>(element);
}
template <>
struct DowncastTraits<HTMLOptionElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kOptionTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLOptionElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLOutputElement;
template <>
inline bool IsElementOfType<const HTMLOutputElement>(const Node& node) {
  return IsA<HTMLOutputElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLOutputElement>(const HTMLElement& element) {
  return IsA<HTMLOutputElement>(element);
}
template <>
struct DowncastTraits<HTMLOutputElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kOutputTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLOutputElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLParagraphElement;
template <>
inline bool IsElementOfType<const HTMLParagraphElement>(const Node& node) {
  return IsA<HTMLParagraphElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLParagraphElement>(const HTMLElement& element) {
  return IsA<HTMLParagraphElement>(element);
}
template <>
struct DowncastTraits<HTMLParagraphElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kPTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLParagraphElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLParamElement;
template <>
inline bool IsElementOfType<const HTMLParamElement>(const Node& node) {
  return IsA<HTMLParamElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLParamElement>(const HTMLElement& element) {
  return IsA<HTMLParamElement>(element);
}
template <>
struct DowncastTraits<HTMLParamElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kParamTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLParamElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLPermissionElement;
template <>
inline bool IsElementOfType<const HTMLPermissionElement>(const Node& node) {
  return IsA<HTMLPermissionElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLPermissionElement>(const HTMLElement& element) {
  return IsA<HTMLPermissionElement>(element);
}
template <>
struct DowncastTraits<HTMLPermissionElement> {
  static bool AllowFrom(const Element& element) {
    // If the following line doesn't compile, your feature may vary by context,
    // in which case you'll need to write your own type helpers that can
    // distinguish elements without relying solely on tag name.
    if (!RuntimeEnabledFeatures::PermissionElementEnabled())
      return false;
    return element.HasTagName(html_names::kPermissionTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLPermissionElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLPictureElement;
template <>
inline bool IsElementOfType<const HTMLPictureElement>(const Node& node) {
  return IsA<HTMLPictureElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLPictureElement>(const HTMLElement& element) {
  return IsA<HTMLPictureElement>(element);
}
template <>
struct DowncastTraits<HTMLPictureElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kPictureTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLPictureElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLProgressElement;
template <>
inline bool IsElementOfType<const HTMLProgressElement>(const Node& node) {
  return IsA<HTMLProgressElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLProgressElement>(const HTMLElement& element) {
  return IsA<HTMLProgressElement>(element);
}
template <>
struct DowncastTraits<HTMLProgressElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kProgressTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLProgressElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLRTElement;
template <>
inline bool IsElementOfType<const HTMLRTElement>(const Node& node) {
  return IsA<HTMLRTElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLRTElement>(const HTMLElement& element) {
  return IsA<HTMLRTElement>(element);
}
template <>
struct DowncastTraits<HTMLRTElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kRtTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLRTElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLRubyElement;
template <>
inline bool IsElementOfType<const HTMLRubyElement>(const Node& node) {
  return IsA<HTMLRubyElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLRubyElement>(const HTMLElement& element) {
  return IsA<HTMLRubyElement>(element);
}
template <>
struct DowncastTraits<HTMLRubyElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kRubyTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLRubyElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLScriptElement;
template <>
inline bool IsElementOfType<const HTMLScriptElement>(const Node& node) {
  return IsA<HTMLScriptElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLScriptElement>(const HTMLElement& element) {
  return IsA<HTMLScriptElement>(element);
}
template <>
struct DowncastTraits<HTMLScriptElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kScriptTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLScriptElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLSelectElement;
template <>
inline bool IsElementOfType<const HTMLSelectElement>(const Node& node) {
  return IsA<HTMLSelectElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLSelectElement>(const HTMLElement& element) {
  return IsA<HTMLSelectElement>(element);
}
template <>
struct DowncastTraits<HTMLSelectElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kSelectTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLSelectElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLSelectListElement;
template <>
inline bool IsElementOfType<const HTMLSelectListElement>(const Node& node) {
  return IsA<HTMLSelectListElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLSelectListElement>(const HTMLElement& element) {
  return IsA<HTMLSelectListElement>(element);
}
template <>
struct DowncastTraits<HTMLSelectListElement> {
  static bool AllowFrom(const Element& element) {
    // If the following line doesn't compile, your feature may vary by context,
    // in which case you'll need to write your own type helpers that can
    // distinguish elements without relying solely on tag name.
    if (!RuntimeEnabledFeatures::HTMLSelectListElementEnabled())
      return false;
    return element.HasTagName(html_names::kSelectlistTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLSelectListElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLSlotElement;
template <>
inline bool IsElementOfType<const HTMLSlotElement>(const Node& node) {
  return IsA<HTMLSlotElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLSlotElement>(const HTMLElement& element) {
  return IsA<HTMLSlotElement>(element);
}
template <>
struct DowncastTraits<HTMLSlotElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kSlotTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLSlotElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLSourceElement;
template <>
inline bool IsElementOfType<const HTMLSourceElement>(const Node& node) {
  return IsA<HTMLSourceElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLSourceElement>(const HTMLElement& element) {
  return IsA<HTMLSourceElement>(element);
}
template <>
struct DowncastTraits<HTMLSourceElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kSourceTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLSourceElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLSpanElement;
template <>
inline bool IsElementOfType<const HTMLSpanElement>(const Node& node) {
  return IsA<HTMLSpanElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLSpanElement>(const HTMLElement& element) {
  return IsA<HTMLSpanElement>(element);
}
template <>
struct DowncastTraits<HTMLSpanElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kSpanTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLSpanElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLStyleElement;
template <>
inline bool IsElementOfType<const HTMLStyleElement>(const Node& node) {
  return IsA<HTMLStyleElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLStyleElement>(const HTMLElement& element) {
  return IsA<HTMLStyleElement>(element);
}
template <>
struct DowncastTraits<HTMLStyleElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kStyleTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLStyleElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLSummaryElement;
template <>
inline bool IsElementOfType<const HTMLSummaryElement>(const Node& node) {
  return IsA<HTMLSummaryElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLSummaryElement>(const HTMLElement& element) {
  return IsA<HTMLSummaryElement>(element);
}
template <>
struct DowncastTraits<HTMLSummaryElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kSummaryTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLSummaryElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLTableElement;
template <>
inline bool IsElementOfType<const HTMLTableElement>(const Node& node) {
  return IsA<HTMLTableElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLTableElement>(const HTMLElement& element) {
  return IsA<HTMLTableElement>(element);
}
template <>
struct DowncastTraits<HTMLTableElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kTableTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLTableElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLTemplateElement;
template <>
inline bool IsElementOfType<const HTMLTemplateElement>(const Node& node) {
  return IsA<HTMLTemplateElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLTemplateElement>(const HTMLElement& element) {
  return IsA<HTMLTemplateElement>(element);
}
template <>
struct DowncastTraits<HTMLTemplateElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kTemplateTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLTemplateElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLTextAreaElement;
template <>
inline bool IsElementOfType<const HTMLTextAreaElement>(const Node& node) {
  return IsA<HTMLTextAreaElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLTextAreaElement>(const HTMLElement& element) {
  return IsA<HTMLTextAreaElement>(element);
}
template <>
struct DowncastTraits<HTMLTextAreaElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kTextareaTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLTextAreaElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLTimeElement;
template <>
inline bool IsElementOfType<const HTMLTimeElement>(const Node& node) {
  return IsA<HTMLTimeElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLTimeElement>(const HTMLElement& element) {
  return IsA<HTMLTimeElement>(element);
}
template <>
struct DowncastTraits<HTMLTimeElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kTimeTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLTimeElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLTitleElement;
template <>
inline bool IsElementOfType<const HTMLTitleElement>(const Node& node) {
  return IsA<HTMLTitleElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLTitleElement>(const HTMLElement& element) {
  return IsA<HTMLTitleElement>(element);
}
template <>
struct DowncastTraits<HTMLTitleElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kTitleTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLTitleElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLTableRowElement;
template <>
inline bool IsElementOfType<const HTMLTableRowElement>(const Node& node) {
  return IsA<HTMLTableRowElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLTableRowElement>(const HTMLElement& element) {
  return IsA<HTMLTableRowElement>(element);
}
template <>
struct DowncastTraits<HTMLTableRowElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kTrTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLTableRowElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLTrackElement;
template <>
inline bool IsElementOfType<const HTMLTrackElement>(const Node& node) {
  return IsA<HTMLTrackElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLTrackElement>(const HTMLElement& element) {
  return IsA<HTMLTrackElement>(element);
}
template <>
struct DowncastTraits<HTMLTrackElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kTrackTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLTrackElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLUListElement;
template <>
inline bool IsElementOfType<const HTMLUListElement>(const Node& node) {
  return IsA<HTMLUListElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLUListElement>(const HTMLElement& element) {
  return IsA<HTMLUListElement>(element);
}
template <>
struct DowncastTraits<HTMLUListElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kUlTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLUListElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLVideoElement;
template <>
inline bool IsElementOfType<const HTMLVideoElement>(const Node& node) {
  return IsA<HTMLVideoElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLVideoElement>(const HTMLElement& element) {
  return IsA<HTMLVideoElement>(element);
}
template <>
struct DowncastTraits<HTMLVideoElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kVideoTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLVideoElement>(UnsafeTo<HTMLElement>(node));
  }
};

class HTMLWBRElement;
template <>
inline bool IsElementOfType<const HTMLWBRElement>(const Node& node) {
  return IsA<HTMLWBRElement>(node);
}
template <>
inline bool IsElementOfType<const HTMLWBRElement>(const HTMLElement& element) {
  return IsA<HTMLWBRElement>(element);
}
template <>
struct DowncastTraits<HTMLWBRElement> {
  static bool AllowFrom(const Element& element) {
    return element.HasTagName(html_names::kWbrTag);
  }
  static bool AllowFrom(const Node& node) {
    // UnsafeTo<> is safe because Is*Element(), by definition, only returns
    // true if `node` is derived from `Element`.
    return node.IsHTMLElement() && IsA<HTMLWBRElement>(UnsafeTo<HTMLElement>(node));
  }
};



enum class HTMLElementType {
kHTMLAnchorElement,
kHTMLAreaElement,
kHTMLAudioElement,
kHTMLBaseElement,
kHTMLBodyElement,
kHTMLBRElement,
kHTMLButtonElement,
kHTMLCanvasElement,
kHTMLDataElement,
kHTMLDataListElement,
kHTMLDetailsElement,
kHTMLDialogElement,
kHTMLDirectoryElement,
kHTMLDivElement,
kHTMLDListElement,
kHTMLElement,
kHTMLEmbedElement,
kHTMLFencedFrameElement,
kHTMLFieldSetElement,
kHTMLFontElement,
kHTMLFormElement,
kHTMLFrameElement,
kHTMLFrameSetElement,
kHTMLHeadElement,
kHTMLHeadingElement,
kHTMLHRElement,
kHTMLHtmlElement,
kHTMLIFrameElement,
kHTMLImageElement,
kHTMLInputElement,
kHTMLLabelElement,
kHTMLLegendElement,
kHTMLLIElement,
kHTMLLinkElement,
kHTMLListboxElement,
kHTMLMapElement,
kHTMLMarqueeElement,
kHTMLMenuElement,
kHTMLMetaElement,
kHTMLMeterElement,
kHTMLModElement,
kHTMLObjectElement,
kHTMLOListElement,
kHTMLOptGroupElement,
kHTMLOptionElement,
kHTMLOutputElement,
kHTMLParagraphElement,
kHTMLParamElement,
kHTMLPermissionElement,
kHTMLPictureElement,
kHTMLPreElement,
kHTMLProgressElement,
kHTMLQuoteElement,
kHTMLScriptElement,
kHTMLSelectElement,
kHTMLSelectListElement,
kHTMLSlotElement,
kHTMLSourceElement,
kHTMLSpanElement,
kHTMLStyleElement,
kHTMLTableCaptionElement,
kHTMLTableCellElement,
kHTMLTableColElement,
kHTMLTableElement,
kHTMLTableRowElement,
kHTMLTableSectionElement,
kHTMLTemplateElement,
kHTMLTextAreaElement,
kHTMLTimeElement,
kHTMLTitleElement,
kHTMLTrackElement,
kHTMLUListElement,
kHTMLUnknownElement,
kHTMLVideoElement,
};

// Tag checking.
// |tag_name| is the local name for an HTML element in lowercase.
// The corresponding HTMLElement type for the tag name will be returned.
// Do NOT use this function with SVG tag names and SVGElements.
// If |tag_name| is an undefined HTML tag name HTMLUnknownElement is returned.
HTMLElementType HtmlElementTypeForTag(const AtomicString& tag_name, const Document*);

bool IsKnownBuiltinTagName(const AtomicString& tag_name);

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_CORE_HTML_ELEMENT_TYPE_HELPERS_H_
