class Context;
// Alias for IsContext() that avoids inlining.
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=5&c=1
V8_EXPORT_PRIVATE bool IsContext_NonInline(Tagged<HeapObject> o);

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=5&c=1
template <class D, class P>
class TorqueGeneratedContext : public P {
  static_assert(
      std::is_same<Context, D>::value,
      "Use this class as direct base for Context.");
  static_assert(
      std::is_same<HeapObject, P>::value,
      "Pass in HeapObject as second template parameter for TorqueGeneratedContext.");

 public: 
  using Super = P;
  using TorqueGeneratedClass = TorqueGeneratedContext<D,P>;

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=13&c=9
  inline int length() const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=13&c=9
  inline void set_length(int value);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=14&c=3
  inline Tagged<Object> elements(int i) const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=14&c=3
  inline Tagged<Object> elements(PtrComprCageBase cage_base, int i) const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=14&c=3
  inline void set_elements(int i, Tagged<Object> value, WriteBarrierMode mode = UPDATE_WRITE_BARRIER);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=5&c=1
  V8_INLINE static Tagged<D> cast(Tagged<Object> object);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=5&c=1
  V8_INLINE static Tagged<D> unchecked_cast(Tagged<Object> object) {
    return Tagged<D>::unchecked_cast(object);
  }

#ifdef VERIFY_HEAP
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=5&c=1
  V8_EXPORT_PRIVATE void ContextVerify(Isolate* isolate);
#endif  // VERIFY_HEAP

  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=13&c=9
  static constexpr int kLengthOffset = P::kHeaderSize;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=14&c=3
  static constexpr int kElementsOffset = kLengthOffsetEnd + 1;
  static constexpr int kElementsOffsetEnd = kElementsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kElementsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kElementsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kElementsOffsetEnd + 1;

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=5&c=1
  V8_INLINE static constexpr int32_t SizeFor(int length) {
    int32_t size = kHeaderSize;
    size += length * 4;
    return size;
  }

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=5&c=1
  V8_INLINE int32_t AllocatedSize() const {
    return SizeFor(this->length());
  }

  friend class Factory;

  template <class DAlias = D>
  constexpr TorqueGeneratedContext() : P() {
    static_assert(
        std::is_base_of<TorqueGeneratedContext, DAlias>::value,
        "class TorqueGeneratedContext should be used as direct base for Context.");
  }

 protected:
  inline explicit constexpr TorqueGeneratedContext(Address ptr, typename P::SkipTypeCheckTag
)    : P(ptr, typename P::SkipTypeCheckTag{}) {}
  inline explicit TorqueGeneratedContext(Address ptr);
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=17&c=1
template <class D, class P>
class TorqueGeneratedScriptContextTableAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=19&c=9
  static constexpr int kCapacityOffset = P::kHeaderSize;
  static constexpr int kCapacityOffsetEnd = kCapacityOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=20&c=3
  static constexpr int kLengthOffset = kCapacityOffsetEnd + 1;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=21&c=3
  static constexpr int kNamesToContextIndexOffset = kLengthOffsetEnd + 1;
  static constexpr int kNamesToContextIndexOffsetEnd = kNamesToContextIndexOffset + kTaggedSize - 1;
  static constexpr int kHeaderSize = kNamesToContextIndexOffsetEnd + 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/contexts.tq?l=22&c=3
  static constexpr int kObjectsOffset = kNamesToContextIndexOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kCapacityOffset == D::kCapacityOffset,
                "Values of ScriptContextTable::kCapacityOffset defined in Torque and C++ do not match");
  static_assert(kLengthOffset == D::kLengthOffset,
                "Values of ScriptContextTable::kLengthOffset defined in Torque and C++ do not match");
  static_assert(kNamesToContextIndexOffset == D::kNamesToContextIndexOffset,
                "Values of ScriptContextTable::kNamesToContextIndexOffset defined in Torque and C++ do not match");
  static_assert(kObjectsOffset == D::kObjectsOffset,
                "Values of ScriptContextTable::kObjectsOffset defined in Torque and C++ do not match");
};

