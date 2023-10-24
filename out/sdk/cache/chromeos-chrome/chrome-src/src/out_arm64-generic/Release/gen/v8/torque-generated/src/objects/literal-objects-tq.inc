class ArrayBoilerplateDescription;
class RegExpBoilerplateDescription;
// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=5&c=1
template <class D, class P>
class TorqueGeneratedObjectBoilerplateDescriptionAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=7&c=3
  static constexpr int kCapacityOffset = P::kHeaderSize;
  static constexpr int kCapacityOffsetEnd = kCapacityOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=8&c=3
  static constexpr int kBackingStoreSizeOffset = kCapacityOffsetEnd + 1;
  static constexpr int kBackingStoreSizeOffsetEnd = kBackingStoreSizeOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=9&c=3
  static constexpr int kFlagsOffset = kBackingStoreSizeOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kHeaderSize = kFlagsOffsetEnd + 1;
  static constexpr int kSize = kFlagsOffsetEnd + 1;

  static_assert(kCapacityOffset == D::kCapacityOffset,
                "Values of ObjectBoilerplateDescription::kCapacityOffset defined in Torque and C++ do not match");
  static_assert(kBackingStoreSizeOffset == D::kBackingStoreSizeOffset,
                "Values of ObjectBoilerplateDescription::kBackingStoreSizeOffset defined in Torque and C++ do not match");
  static_assert(kFlagsOffset == D::kFlagsOffset,
                "Values of ObjectBoilerplateDescription::kFlagsOffset defined in Torque and C++ do not match");
  static_assert(kSize == D::kSize);
};

// Alias for IsArrayBoilerplateDescription() that avoids inlining.
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=12&c=1
V8_EXPORT_PRIVATE bool IsArrayBoilerplateDescription_NonInline(Tagged<HeapObject> o);

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=12&c=1
template <class D, class P>
class TorqueGeneratedArrayBoilerplateDescription : public P {
  static_assert(
      std::is_same<ArrayBoilerplateDescription, D>::value,
      "Use this class as direct base for ArrayBoilerplateDescription.");
  static_assert(
      std::is_same<Struct, P>::value,
      "Pass in Struct as second template parameter for TorqueGeneratedArrayBoilerplateDescription.");

 public: 
  using Super = P;
  using TorqueGeneratedClass = TorqueGeneratedArrayBoilerplateDescription<D,P>;

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=13&c=3
  inline int flags() const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=13&c=3
  inline void set_flags(int value);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=14&c=3
  inline Tagged<FixedArrayBase> constant_elements() const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=14&c=3
  inline Tagged<FixedArrayBase> constant_elements(PtrComprCageBase cage_base) const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=14&c=3
  inline void set_constant_elements(Tagged<FixedArrayBase> value, WriteBarrierMode mode = UPDATE_WRITE_BARRIER);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=12&c=1
  V8_INLINE static Tagged<D> cast(Tagged<Object> object);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=12&c=1
  V8_INLINE static Tagged<D> unchecked_cast(Tagged<Object> object) {
    return Tagged<D>::unchecked_cast(object);
  }

  DECL_PRINTER(ArrayBoilerplateDescription)

#ifdef VERIFY_HEAP
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=12&c=1
  V8_EXPORT_PRIVATE void ArrayBoilerplateDescriptionVerify(Isolate* isolate);
#endif  // VERIFY_HEAP

  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=13&c=3
  static constexpr int kFlagsOffset = P::kHeaderSize;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=14&c=3
  static constexpr int kConstantElementsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kConstantElementsOffsetEnd = kConstantElementsOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kConstantElementsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kConstantElementsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kConstantElementsOffsetEnd + 1;
  static constexpr int kHeaderSize = kConstantElementsOffsetEnd + 1;
  static constexpr int kSize = kConstantElementsOffsetEnd + 1;

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=12&c=1
  V8_INLINE static constexpr int32_t SizeFor() {
    DCHECK(kHeaderSize == kSize && kHeaderSize == 12);
    int32_t size = kHeaderSize;
    return size;
  }

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=12&c=1
  V8_INLINE int32_t AllocatedSize() const {
    return SizeFor();
  }

  friend class Factory;

  template <class DAlias = D>
  constexpr TorqueGeneratedArrayBoilerplateDescription() : P() {
    static_assert(
        std::is_base_of<TorqueGeneratedArrayBoilerplateDescription, DAlias>::value,
        "class TorqueGeneratedArrayBoilerplateDescription should be used as direct base for ArrayBoilerplateDescription.");
  }

 protected:
  inline explicit constexpr TorqueGeneratedArrayBoilerplateDescription(Address ptr, typename P::SkipTypeCheckTag
)    : P(ptr, typename P::SkipTypeCheckTag{}) {}
  inline explicit TorqueGeneratedArrayBoilerplateDescription(Address ptr);
};

// Alias for IsRegExpBoilerplateDescription() that avoids inlining.
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=17&c=1
V8_EXPORT_PRIVATE bool IsRegExpBoilerplateDescription_NonInline(Tagged<HeapObject> o);

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=17&c=1
template <class D, class P>
class TorqueGeneratedRegExpBoilerplateDescription : public P {
  static_assert(
      std::is_same<RegExpBoilerplateDescription, D>::value,
      "Use this class as direct base for RegExpBoilerplateDescription.");
  static_assert(
      std::is_same<Struct, P>::value,
      "Pass in Struct as second template parameter for TorqueGeneratedRegExpBoilerplateDescription.");

 public: 
  using Super = P;
  using TorqueGeneratedClass = TorqueGeneratedRegExpBoilerplateDescription<D,P>;

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=18&c=3
  inline Tagged<FixedArray> data() const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=18&c=3
  inline Tagged<FixedArray> data(PtrComprCageBase cage_base) const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=18&c=3
  inline void set_data(Tagged<FixedArray> value, WriteBarrierMode mode = UPDATE_WRITE_BARRIER);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=19&c=3
  inline Tagged<String> source() const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=19&c=3
  inline Tagged<String> source(PtrComprCageBase cage_base) const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=19&c=3
  inline void set_source(Tagged<String> value, WriteBarrierMode mode = UPDATE_WRITE_BARRIER);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=20&c=3
  inline int flags() const;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=20&c=3
  inline void set_flags(int value);

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=17&c=1
  V8_INLINE static Tagged<D> cast(Tagged<Object> object);
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=17&c=1
  V8_INLINE static Tagged<D> unchecked_cast(Tagged<Object> object) {
    return Tagged<D>::unchecked_cast(object);
  }

  DECL_PRINTER(RegExpBoilerplateDescription)

#ifdef VERIFY_HEAP
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=17&c=1
  V8_EXPORT_PRIVATE void RegExpBoilerplateDescriptionVerify(Isolate* isolate);
#endif  // VERIFY_HEAP

  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=18&c=3
  static constexpr int kDataOffset = P::kHeaderSize;
  static constexpr int kDataOffsetEnd = kDataOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=19&c=3
  static constexpr int kSourceOffset = kDataOffsetEnd + 1;
  static constexpr int kSourceOffsetEnd = kSourceOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=20&c=3
  static constexpr int kFlagsOffset = kSourceOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kHeaderSize = kFlagsOffsetEnd + 1;
  static constexpr int kSize = kFlagsOffsetEnd + 1;

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=17&c=1
  V8_INLINE static constexpr int32_t SizeFor() {
    DCHECK(kHeaderSize == kSize && kHeaderSize == 16);
    int32_t size = kHeaderSize;
    return size;
  }

  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=17&c=1
  V8_INLINE int32_t AllocatedSize() const {
    return SizeFor();
  }

  friend class Factory;

  template <class DAlias = D>
  constexpr TorqueGeneratedRegExpBoilerplateDescription() : P() {
    static_assert(
        std::is_base_of<TorqueGeneratedRegExpBoilerplateDescription, DAlias>::value,
        "class TorqueGeneratedRegExpBoilerplateDescription should be used as direct base for RegExpBoilerplateDescription.");
  }

 protected:
  inline explicit constexpr TorqueGeneratedRegExpBoilerplateDescription(Address ptr, typename P::SkipTypeCheckTag
)    : P(ptr, typename P::SkipTypeCheckTag{}) {}
  inline explicit TorqueGeneratedRegExpBoilerplateDescription(Address ptr);
};

// Definition https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=23&c=1
template <class D, class P>
class TorqueGeneratedClassBoilerplateAsserts {
  static constexpr int kStartOfStrongFieldsOffset = P::kHeaderSize;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=25&c=3
  static constexpr int kArgumentsCountOffset = P::kHeaderSize;
  static constexpr int kArgumentsCountOffsetEnd = kArgumentsCountOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=26&c=3
  static constexpr int kStaticPropertiesTemplateOffset = kArgumentsCountOffsetEnd + 1;
  static constexpr int kStaticPropertiesTemplateOffsetEnd = kStaticPropertiesTemplateOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=27&c=3
  static constexpr int kStaticElementsTemplateOffset = kStaticPropertiesTemplateOffsetEnd + 1;
  static constexpr int kStaticElementsTemplateOffsetEnd = kStaticElementsTemplateOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=28&c=3
  static constexpr int kStaticComputedPropertiesOffset = kStaticElementsTemplateOffsetEnd + 1;
  static constexpr int kStaticComputedPropertiesOffsetEnd = kStaticComputedPropertiesOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=29&c=3
  static constexpr int kInstancePropertiesTemplateOffset = kStaticComputedPropertiesOffsetEnd + 1;
  static constexpr int kInstancePropertiesTemplateOffsetEnd = kInstancePropertiesTemplateOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=30&c=3
  static constexpr int kInstanceElementsTemplateOffset = kInstancePropertiesTemplateOffsetEnd + 1;
  static constexpr int kInstanceElementsTemplateOffsetEnd = kInstanceElementsTemplateOffset + kTaggedSize - 1;
  // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/literal-objects.tq?l=31&c=3
  static constexpr int kInstanceComputedPropertiesOffset = kInstanceElementsTemplateOffsetEnd + 1;
  static constexpr int kInstanceComputedPropertiesOffsetEnd = kInstanceComputedPropertiesOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kInstanceComputedPropertiesOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kInstanceComputedPropertiesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kInstanceComputedPropertiesOffsetEnd + 1;
  static constexpr int kHeaderSize = kInstanceComputedPropertiesOffsetEnd + 1;
  static constexpr int kSize = kInstanceComputedPropertiesOffsetEnd + 1;

  static_assert(kArgumentsCountOffset == D::kArgumentsCountOffset,
                "Values of ClassBoilerplate::kArgumentsCountOffset defined in Torque and C++ do not match");
  static_assert(kStaticPropertiesTemplateOffset == D::kStaticPropertiesTemplateOffset,
                "Values of ClassBoilerplate::kStaticPropertiesTemplateOffset defined in Torque and C++ do not match");
  static_assert(kStaticElementsTemplateOffset == D::kStaticElementsTemplateOffset,
                "Values of ClassBoilerplate::kStaticElementsTemplateOffset defined in Torque and C++ do not match");
  static_assert(kStaticComputedPropertiesOffset == D::kStaticComputedPropertiesOffset,
                "Values of ClassBoilerplate::kStaticComputedPropertiesOffset defined in Torque and C++ do not match");
  static_assert(kInstancePropertiesTemplateOffset == D::kInstancePropertiesTemplateOffset,
                "Values of ClassBoilerplate::kInstancePropertiesTemplateOffset defined in Torque and C++ do not match");
  static_assert(kInstanceElementsTemplateOffset == D::kInstanceElementsTemplateOffset,
                "Values of ClassBoilerplate::kInstanceElementsTemplateOffset defined in Torque and C++ do not match");
  static_assert(kInstanceComputedPropertiesOffset == D::kInstanceComputedPropertiesOffset,
                "Values of ClassBoilerplate::kInstanceComputedPropertiesOffset defined in Torque and C++ do not match");
  static_assert(kSize == D::kSize);
};

