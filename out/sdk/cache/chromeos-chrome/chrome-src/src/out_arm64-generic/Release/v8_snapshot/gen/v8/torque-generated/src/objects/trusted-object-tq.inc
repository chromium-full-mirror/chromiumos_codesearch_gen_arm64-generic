// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/trusted-object.tq?l=5&c=1
template <class D, class P>
class TorqueGeneratedTrustedObjectAsserts {
  static constexpr int kStartOfWeakFieldsOffset = P::kHeaderSize;
  static constexpr int kEndOfWeakFieldsOffset = P::kHeaderSize;
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  static constexpr int kEndOfStrongFieldsOffset = P::kHeaderSize;
  static constexpr int kHeaderSize = P::kHeaderSize;

};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/trusted-object.tq?l=9&c=1
template <class D, class P>
class TorqueGeneratedExposedTrustedObjectAsserts {
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/trusted-object.tq?l=12&c=26
  static constexpr int kSelfIndirectPointerOffset = P::kHeaderSize;
  static constexpr int kSelfIndirectPointerOffsetEnd = kSelfIndirectPointerOffset + kIndirectPointerSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kSelfIndirectPointerOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kSelfIndirectPointerOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kSelfIndirectPointerOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kSelfIndirectPointerOffsetEnd + 1;
  static constexpr int kHeaderSize = kSelfIndirectPointerOffsetEnd + 1;

  static_assert(kSelfIndirectPointerOffset == D::kSelfIndirectPointerOffset,
                "Values of ExposedTrustedObject::kSelfIndirectPointerOffset defined in Torque and C++ do not match");
};

