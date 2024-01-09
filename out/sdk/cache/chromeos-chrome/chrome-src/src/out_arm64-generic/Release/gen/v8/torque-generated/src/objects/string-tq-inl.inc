// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=7&c=1
template <class D, class P>
class TorqueGeneratedStringAsserts {
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=47&c=9
  static constexpr int kLengthOffset = sizeof(P);
  static constexpr int kLengthOffsetEnd = kLengthOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;

  static_assert(kLengthOffset == offsetof(D, length_),
                "Value of String::kLengthOffset defined in Torque and offset of field String::length in C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=66&c=1
template <class D, class P>
class TorqueGeneratedConsStringAsserts {
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=78&c=3
  static constexpr int kFirstOffset = sizeof(P);
  static constexpr int kFirstOffsetEnd = kFirstOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=79&c=3
  static constexpr int kSecondOffset = kFirstOffsetEnd + 1;
  static constexpr int kSecondOffsetEnd = kSecondOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kSecondOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kSecondOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kSecondOffsetEnd + 1;
  static constexpr int kHeaderSize = kSecondOffsetEnd + 1;
  static constexpr int kSize = kSecondOffsetEnd + 1;

  static_assert(kFirstOffset == offsetof(D, first_),
                "Value of ConsString::kFirstOffset defined in Torque and offset of field ConsString::first in C++ do not match");
  static_assert(kSecondOffset == offsetof(D, second_),
                "Value of ConsString::kSecondOffset defined in Torque and offset of field ConsString::second in C++ do not match");
  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=82&c=1
template <class D, class P>
class TorqueGeneratedExternalStringAsserts {
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=86&c=3
  static constexpr int kResourceOffset = sizeof(P);
  static constexpr int kResourceOffsetEnd = kResourceOffset + kExternalPointerSlotSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=88&c=3
  static constexpr int kResourceDataOffset = kResourceOffsetEnd + 1;
  static constexpr int kResourceDataOffsetEnd = kResourceDataOffset + kExternalPointerSlotSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kResourceDataOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kResourceDataOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kResourceDataOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kResourceDataOffsetEnd + 1;
  static constexpr int kHeaderSize = kResourceDataOffsetEnd + 1;

  static_assert(kResourceOffset == offsetof(D, resource_),
                "Value of ExternalString::kResourceOffset defined in Torque and offset of field ExternalString::resource in C++ do not match");
  static_assert(kResourceDataOffset == offsetof(D, resource_data_),
                "Value of ExternalString::kResourceDataOffset defined in Torque and offset of field ExternalString::resource_data in C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=105&c=1
template <class D, class P>
class TorqueGeneratedExternalOneByteStringAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);
  static constexpr int kSize = sizeof(P);

  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=117&c=1
template <class D, class P>
class TorqueGeneratedExternalTwoByteStringAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);
  static constexpr int kSize = sizeof(P);

  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=129&c=1
template <class D, class P>
class TorqueGeneratedInternalizedStringAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);
  static constexpr int kSize = sizeof(P);

  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=133&c=1
template <class D, class P>
class TorqueGeneratedSeqStringAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);

};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=138&c=1
template <class D, class P>
class TorqueGeneratedSeqOneByteStringAsserts {
  static constexpr int kHeaderSize = sizeof(P);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=141&c=9
  static constexpr int kCharsOffset = sizeof(P);
  static constexpr int kCharsOffsetEnd = kCharsOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kCharsOffsetEnd + 1;

  static_assert(kCharsOffset == offsetof(D, chars_),
                "Value of SeqOneByteString::kCharsOffset defined in Torque and offset of field SeqOneByteString::chars in C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=144&c=1
template <class D, class P>
class TorqueGeneratedSeqTwoByteStringAsserts {
  static constexpr int kHeaderSize = sizeof(P);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=147&c=9
  static constexpr int kCharsOffset = sizeof(P);
  static constexpr int kCharsOffsetEnd = kCharsOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kCharsOffsetEnd + 1;

  static_assert(kCharsOffset == offsetof(D, chars_),
                "Value of SeqTwoByteString::kCharsOffset defined in Torque and offset of field SeqTwoByteString::chars in C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=150&c=1
template <class D, class P>
class TorqueGeneratedSlicedStringAsserts {
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=153&c=3
  static constexpr int kParentOffset = sizeof(P);
  static constexpr int kParentOffsetEnd = kParentOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=154&c=3
  static constexpr int kOffsetOffset = kParentOffsetEnd + 1;
  static constexpr int kOffsetOffsetEnd = kOffsetOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kOffsetOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kOffsetOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kOffsetOffsetEnd + 1;
  static constexpr int kHeaderSize = kOffsetOffsetEnd + 1;
  static constexpr int kSize = kOffsetOffsetEnd + 1;

  static_assert(kParentOffset == offsetof(D, parent_),
                "Value of SlicedString::kParentOffset defined in Torque and offset of field SlicedString::parent in C++ do not match");
  static_assert(kOffsetOffset == offsetof(D, offset_),
                "Value of SlicedString::kOffsetOffset defined in Torque and offset of field SlicedString::offset in C++ do not match");
  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=157&c=1
template <class D, class P>
class TorqueGeneratedThinStringAsserts {
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/string.tq?l=160&c=3
  static constexpr int kActualOffset = sizeof(P);
  static constexpr int kActualOffsetEnd = kActualOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kActualOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kActualOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kActualOffsetEnd + 1;
  static constexpr int kHeaderSize = kActualOffsetEnd + 1;
  static constexpr int kSize = kActualOffsetEnd + 1;

  static_assert(kActualOffset == offsetof(D, actual_),
                "Value of ThinString::kActualOffset defined in Torque and offset of field ThinString::actual in C++ do not match");
  static_assert(kSize == sizeof(D));
};

