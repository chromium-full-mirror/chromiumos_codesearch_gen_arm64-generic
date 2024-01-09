// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=7&c=1
template <class D, class P>
class TorqueGeneratedBytecodeArrayAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=9&c=9
  static constexpr int kLengthOffset = P::kHeaderSize;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=10&c=3
  static constexpr int kConstantPoolOffset = kLengthOffsetEnd + 1;
  static constexpr int kConstantPoolOffsetEnd = kConstantPoolOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=11&c=3
  static constexpr int kHandlerTableOffset = kConstantPoolOffsetEnd + 1;
  static constexpr int kHandlerTableOffsetEnd = kHandlerTableOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=12&c=3
  static constexpr int kWrapperOffset = kHandlerTableOffsetEnd + 1;
  static constexpr int kWrapperOffsetEnd = kWrapperOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=13&c=3
  static constexpr int kSourcePositionTableOffset = kWrapperOffsetEnd + 1;
  static constexpr int kSourcePositionTableOffsetEnd = kSourcePositionTableOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kSourcePositionTableOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=14&c=3
  static constexpr int kFrameSizeOffset = kSourcePositionTableOffsetEnd + 1;
  static constexpr int kFrameSizeOffsetEnd = kFrameSizeOffset + kInt32Size - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=15&c=3
  static constexpr int kParameterSizeOffset = kFrameSizeOffsetEnd + 1;
  static constexpr int kParameterSizeOffsetEnd = kParameterSizeOffset + kInt32Size - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=16&c=3
  static constexpr int kIncomingNewTargetOrGeneratorRegisterOffset = kParameterSizeOffsetEnd + 1;
  static constexpr int kIncomingNewTargetOrGeneratorRegisterOffsetEnd = kIncomingNewTargetOrGeneratorRegisterOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kIncomingNewTargetOrGeneratorRegisterOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kIncomingNewTargetOrGeneratorRegisterOffsetEnd + 1;
  static constexpr int kHeaderSize = kIncomingNewTargetOrGeneratorRegisterOffsetEnd + 1;
  static constexpr int kSize = kIncomingNewTargetOrGeneratorRegisterOffsetEnd + 1;

  static_assert(kLengthOffset == D::kLengthOffset,
                "Values of BytecodeArray::kLengthOffset defined in Torque and C++ do not match");
  static_assert(kConstantPoolOffset == D::kConstantPoolOffset,
                "Values of BytecodeArray::kConstantPoolOffset defined in Torque and C++ do not match");
  static_assert(kHandlerTableOffset == D::kHandlerTableOffset,
                "Values of BytecodeArray::kHandlerTableOffset defined in Torque and C++ do not match");
  static_assert(kWrapperOffset == D::kWrapperOffset,
                "Values of BytecodeArray::kWrapperOffset defined in Torque and C++ do not match");
  static_assert(kSourcePositionTableOffset == D::kSourcePositionTableOffset,
                "Values of BytecodeArray::kSourcePositionTableOffset defined in Torque and C++ do not match");
  static_assert(kFrameSizeOffset == D::kFrameSizeOffset,
                "Values of BytecodeArray::kFrameSizeOffset defined in Torque and C++ do not match");
  static_assert(kParameterSizeOffset == D::kParameterSizeOffset,
                "Values of BytecodeArray::kParameterSizeOffset defined in Torque and C++ do not match");
  static_assert(kIncomingNewTargetOrGeneratorRegisterOffset == D::kIncomingNewTargetOrGeneratorRegisterOffset,
                "Values of BytecodeArray::kIncomingNewTargetOrGeneratorRegisterOffset defined in Torque and C++ do not match");
  static_assert(kSize == D::kSize);
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=22&c=1
template <class D, class P>
class TorqueGeneratedBytecodeWrapperAsserts {
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=24&c=3
  static constexpr int kBytecodeOffset = P::kHeaderSize;
  static constexpr int kBytecodeOffsetEnd = kBytecodeOffset + kIndirectPointerSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=25&c=3
  static constexpr int kPadding1Offset = kBytecodeOffsetEnd + 1;
  static constexpr int kPadding1OffsetEnd = kPadding1Offset + kInt32Size - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/bytecode-array.tq?l=26&c=3
  static constexpr int kPadding2Offset = kPadding1OffsetEnd + 1;
  static constexpr int kPadding2OffsetEnd = kPadding2Offset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kPadding2OffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kPadding2OffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kPadding2OffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kPadding2OffsetEnd + 1;
  static constexpr int kHeaderSize = kPadding2OffsetEnd + 1;
  static constexpr int kSize = kPadding2OffsetEnd + 1;

  static_assert(kBytecodeOffset == D::kBytecodeOffset,
                "Values of BytecodeWrapper::kBytecodeOffset defined in Torque and C++ do not match");
  static_assert(kPadding1Offset == D::kPadding1Offset,
                "Values of BytecodeWrapper::kPadding1Offset defined in Torque and C++ do not match");
  static_assert(kPadding2Offset == D::kPadding2Offset,
                "Values of BytecodeWrapper::kPadding2Offset defined in Torque and C++ do not match");
  static_assert(kSize == D::kSize);
};

