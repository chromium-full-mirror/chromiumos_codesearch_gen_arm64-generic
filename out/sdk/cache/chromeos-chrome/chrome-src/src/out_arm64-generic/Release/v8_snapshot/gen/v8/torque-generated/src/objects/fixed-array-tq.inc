class WeakArrayList;
// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=5&c=1
template <class D, class P>
class TorqueGeneratedFixedArrayBaseAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=8&c=9
  static constexpr int kLengthOffset = P::kHeaderSize;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;

  static_assert(kLengthOffset == D::kLengthOffset,
                "Values of FixedArrayBase::kLengthOffset defined in Torque and C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=11&c=1
template <class D, class P>
class TorqueGeneratedFixedArrayAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  static constexpr int kHeaderSize = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=14&c=3
  static constexpr int kObjectsOffset = P::kHeaderSize;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kObjectsOffset == D::kObjectsOffset,
                "Values of FixedArray::kObjectsOffset defined in Torque and C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=30&c=1
template <class D, class P>
class TorqueGeneratedWeakFixedArrayAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=32&c=9
  static constexpr int kLengthOffset = P::kHeaderSize;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=33&c=3
  static constexpr int kObjectsOffset = kLengthOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kLengthOffset == D::kLengthOffset,
                "Values of WeakFixedArray::kLengthOffset defined in Torque and C++ do not match");
  static_assert(kObjectsOffset == D::kObjectsOffset,
                "Values of WeakFixedArray::kObjectsOffset defined in Torque and C++ do not match");
};

// Alias for IsWeakArrayList() that avoids inlining.
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=61&c=1
V8_EXPORT_PRIVATE bool IsWeakArrayList_NonInline(Tagged<HeapObject> o);

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=61&c=1
template <class D, class P>
class TorqueGeneratedWeakArrayList : public P {
  static_assert(
      std::is_same<WeakArrayList, D>::value,
      "Use this class as direct base for WeakArrayList.");
  static_assert(
      std::is_same<HeapObject, P>::value,
      "Pass in HeapObject as second template parameter for TorqueGeneratedWeakArrayList.");

 public: 
  using Super = P;
  using TorqueGeneratedClass = TorqueGeneratedWeakArrayList<D,P>;

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=63&c=9
  inline int capacity() const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=63&c=9
  inline void set_capacity(int value);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=64&c=3
  inline int length() const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=64&c=3
  inline void set_length(int value);

  // Torque type: MaybeObject
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=65&c=19
  inline MaybeObject objects(int i, RelaxedLoadTag) const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=65&c=19
  inline MaybeObject objects(PtrComprCageBase cage_base, int i, RelaxedLoadTag) const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=65&c=19
  inline void set_objects(int i, MaybeObject value, WriteBarrierMode mode = UPDATE_WRITE_BARRIER);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=61&c=1
  V8_INLINE static Tagged<D> cast(Tagged<Object> object);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=61&c=1
  V8_INLINE static Tagged<D> unchecked_cast(Tagged<Object> object) {
    return Tagged<D>::unchecked_cast(object);
  }

  DECL_PRINTER(WeakArrayList)

#ifdef VERIFY_HEAP
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=61&c=1
  V8_EXPORT_PRIVATE void WeakArrayListVerify(Isolate* isolate);
#endif  // VERIFY_HEAP

  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=63&c=9
  static constexpr int kCapacityOffset = P::kHeaderSize;
  static constexpr int kCapacityOffsetEnd = kCapacityOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=64&c=3
  static constexpr int kLengthOffset = kCapacityOffsetEnd + 1;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=65&c=19
  static constexpr int kObjectsOffset = kLengthOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=61&c=1
  V8_INLINE static constexpr int32_t SizeFor(int capacity) {
    int32_t size = kHeaderSize;
    size += capacity * 4;
    return size;
  }

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=61&c=1
  V8_INLINE int32_t AllocatedSize() const {
    return SizeFor(this->capacity());
  }

  friend class Factory;

  template <class DAlias = D>
  constexpr TorqueGeneratedWeakArrayList() : P() {
    static_assert(
        std::is_base_of<TorqueGeneratedWeakArrayList, DAlias>::value,
        "class TorqueGeneratedWeakArrayList should be used as direct base for WeakArrayList.");
  }

 protected:
  inline explicit constexpr TorqueGeneratedWeakArrayList(Address ptr, typename P::SkipTypeCheckTag
)    : P(ptr, typename P::SkipTypeCheckTag{}) {}
  inline explicit TorqueGeneratedWeakArrayList(Address ptr);
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=25&c=1
template <class D, class P>
class TorqueGeneratedFixedDoubleArrayAsserts {
  static constexpr int kHeaderSize = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=27&c=3
  static constexpr int kFloatsOffset = P::kHeaderSize;
  static constexpr int kFloatsOffsetEnd = kFloatsOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kFloatsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kFloatsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kFloatsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kFloatsOffsetEnd + 1;

  static_assert(kFloatsOffset == D::kFloatsOffset,
                "Values of FixedDoubleArray::kFloatsOffset defined in Torque and C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=19&c=1
template <class D, class P>
class TorqueGeneratedTrustedFixedArrayAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=21&c=9
  static constexpr int kLengthOffset = P::kHeaderSize;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=22&c=3
  static constexpr int kObjectsOffset = kLengthOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kLengthOffset == D::kLengthOffset,
                "Values of TrustedFixedArray::kLengthOffset defined in Torque and C++ do not match");
  static_assert(kObjectsOffset == D::kObjectsOffset,
                "Values of TrustedFixedArray::kObjectsOffset defined in Torque and C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=36&c=1
template <class D, class P>
class TorqueGeneratedByteArrayAsserts {
  static constexpr int kHeaderSize = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=38&c=3
  static constexpr int kBytesOffset = P::kHeaderSize;
  static constexpr int kBytesOffsetEnd = kBytesOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kBytesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kBytesOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kBytesOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kBytesOffsetEnd + 1;

  static_assert(kBytesOffset == D::kBytesOffset,
                "Values of ByteArray::kBytesOffset defined in Torque and C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=41&c=1
template <class D, class P>
class TorqueGeneratedTrustedByteArrayAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=43&c=9
  static constexpr int kLengthOffset = P::kHeaderSize;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=44&c=3
  static constexpr int kBytesOffset = kLengthOffsetEnd + 1;
  static constexpr int kBytesOffsetEnd = kBytesOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kBytesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kBytesOffsetEnd + 1;

  static_assert(kLengthOffset == D::kLengthOffset,
                "Values of TrustedByteArray::kLengthOffset defined in Torque and C++ do not match");
  static_assert(kBytesOffset == D::kBytesOffset,
                "Values of TrustedByteArray::kBytesOffset defined in Torque and C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=47&c=1
template <class D, class P>
class TorqueGeneratedExternalPointerArrayAsserts {
  static constexpr int kHeaderSize = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=49&c=3
  static constexpr int kPointersOffset = P::kHeaderSize;
  static constexpr int kPointersOffsetEnd = kPointersOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kPointersOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kPointersOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kPointersOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kPointersOffsetEnd + 1;

  static_assert(kPointersOffset == D::kPointersOffset,
                "Values of ExternalPointerArray::kPointersOffset defined in Torque and C++ do not match");
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=54&c=1
template <class D, class P>
class TorqueGeneratedArrayListAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=56&c=9
  static constexpr int kCapacityOffset = P::kHeaderSize;
  static constexpr int kCapacityOffsetEnd = kCapacityOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=57&c=3
  static constexpr int kLengthOffset = kCapacityOffsetEnd + 1;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/fixed-array.tq?l=58&c=3
  static constexpr int kObjectsOffset = kLengthOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kCapacityOffset == D::kCapacityOffset,
                "Values of ArrayList::kCapacityOffset defined in Torque and C++ do not match");
  static_assert(kLengthOffset == D::kLengthOffset,
                "Values of ArrayList::kLengthOffset defined in Torque and C++ do not match");
  static_assert(kObjectsOffset == D::kObjectsOffset,
                "Values of ArrayList::kObjectsOffset defined in Torque and C++ do not match");
};

