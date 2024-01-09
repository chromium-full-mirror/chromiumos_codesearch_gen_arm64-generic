// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=5&c=1
template <class D, class P>
class TorqueGeneratedOddballAsserts {
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=9&c=3
  static constexpr int kToNumberRawOffset = sizeof(P);
  static constexpr int kToNumberRawOffsetEnd = kToNumberRawOffset + kDoubleSize - 1;
  static constexpr int kStartOfStrongFieldsOffset = kToNumberRawOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=10&c=3
  static constexpr int kToStringOffset = kToNumberRawOffsetEnd + 1;
  static constexpr int kToStringOffsetEnd = kToStringOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=11&c=3
  static constexpr int kToNumberOffset = kToStringOffsetEnd + 1;
  static constexpr int kToNumberOffsetEnd = kToNumberOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=12&c=3
  static constexpr int kTypeOfOffset = kToNumberOffsetEnd + 1;
  static constexpr int kTypeOfOffsetEnd = kTypeOfOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=13&c=3
  static constexpr int kKindOffset = kTypeOfOffsetEnd + 1;
  static constexpr int kKindOffsetEnd = kKindOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kKindOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kKindOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kKindOffsetEnd + 1;
  static constexpr int kHeaderSize = kKindOffsetEnd + 1;
  static constexpr int kSize = kKindOffsetEnd + 1;

  static_assert(kToNumberRawOffset == offsetof(D, to_number_raw_),
                "Value of Oddball::kToNumberRawOffset defined in Torque and offset of field Oddball::to_number_raw in C++ do not match");
  static_assert(kToStringOffset == offsetof(D, to_string_),
                "Value of Oddball::kToStringOffset defined in Torque and offset of field Oddball::to_string in C++ do not match");
  static_assert(kToNumberOffset == offsetof(D, to_number_),
                "Value of Oddball::kToNumberOffset defined in Torque and offset of field Oddball::to_number in C++ do not match");
  static_assert(kTypeOfOffset == offsetof(D, type_of_),
                "Value of Oddball::kTypeOfOffset defined in Torque and offset of field Oddball::type_of in C++ do not match");
  static_assert(kKindOffset == offsetof(D, kind_),
                "Value of Oddball::kKindOffset defined in Torque and offset of field Oddball::kind in C++ do not match");
  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=26&c=1
template <class D, class P>
class TorqueGeneratedBooleanAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);
  static constexpr int kSize = sizeof(P);

  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=16&c=1
template <class D, class P>
class TorqueGeneratedNullAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);
  static constexpr int kSize = sizeof(P);

  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=21&c=1
template <class D, class P>
class TorqueGeneratedUndefinedAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);
  static constexpr int kSize = sizeof(P);

  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=31&c=1
template <class D, class P>
class TorqueGeneratedTrueAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);
  static constexpr int kSize = sizeof(P);

  static_assert(kSize == sizeof(D));
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/oddball.tq?l=36&c=1
template <class D, class P>
class TorqueGeneratedFalseAsserts {
  static constexpr int kStartOfWeakFieldsOffset = sizeof(P);
  static constexpr int kEndOfWeakFieldsOffset = sizeof(P);
  static constexpr int kStartOfStrongFieldsOffset = sizeof(P);
  static constexpr int kEndOfStrongFieldsOffset = sizeof(P);
  static constexpr int kHeaderSize = sizeof(P);
  static constexpr int kSize = sizeof(P);

  static_assert(kSize == sizeof(D));
};

