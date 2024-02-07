#ifndef SRC_TRACE_PROCESSOR_TABLES_V8_TABLES_PY_H_
#define SRC_TRACE_PROCESSOR_TABLES_V8_TABLES_PY_H_

#include "src/trace_processor/db/typed_column.h"
#include "src/trace_processor/tables/macros_internal.h"



namespace perfetto {
namespace trace_processor {
namespace tables {

class V8IsolateTable : public macros_internal::MacroTable {
 public:
  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible<Id>::value,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t type = 1;
    static constexpr uint32_t upid = 2;
    static constexpr uint32_t internal_isolate_id = 3;
    static constexpr uint32_t embedded_blob_code_start_address = 4;
    static constexpr uint32_t embedded_blob_code_size = 5;
    static constexpr uint32_t code_range_base_address = 6;
    static constexpr uint32_t code_range_size = 7;
    static constexpr uint32_t shared_code_range = 8;
    static constexpr uint32_t embedded_blob_code_copy_start_address = 9;
  };
  struct ColumnType {
    using id = IdColumn<V8IsolateTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using upid = TypedColumn<uint32_t>;
    using internal_isolate_id = TypedColumn<int32_t>;
    using embedded_blob_code_start_address = TypedColumn<int64_t>;
    using embedded_blob_code_size = TypedColumn<int64_t>;
    using code_range_base_address = TypedColumn<std::optional<int64_t>>;
    using code_range_size = TypedColumn<std::optional<int64_t>>;
    using shared_code_range = TypedColumn<std::optional<uint32_t>>;
    using embedded_blob_code_copy_start_address = TypedColumn<std::optional<int64_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(uint32_t in_upid = {},
        int32_t in_internal_isolate_id = {},
        int64_t in_embedded_blob_code_start_address = {},
        int64_t in_embedded_blob_code_size = {},
        std::optional<int64_t> in_code_range_base_address = {},
        std::optional<int64_t> in_code_range_size = {},
        std::optional<uint32_t> in_shared_code_range = {},
        std::optional<int64_t> in_embedded_blob_code_copy_start_address = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          upid(std::move(in_upid)),
          internal_isolate_id(std::move(in_internal_isolate_id)),
          embedded_blob_code_start_address(std::move(in_embedded_blob_code_start_address)),
          embedded_blob_code_size(std::move(in_embedded_blob_code_size)),
          code_range_base_address(std::move(in_code_range_base_address)),
          code_range_size(std::move(in_code_range_size)),
          shared_code_range(std::move(in_shared_code_range)),
          embedded_blob_code_copy_start_address(std::move(in_embedded_blob_code_copy_start_address)) {
      type_ = "v8_isolate";
    }
    uint32_t upid;
    int32_t internal_isolate_id;
    int64_t embedded_blob_code_start_address;
    int64_t embedded_blob_code_size;
    std::optional<int64_t> code_range_base_address;
    std::optional<int64_t> code_range_size;
    std::optional<uint32_t> shared_code_range;
    std::optional<int64_t> embedded_blob_code_copy_start_address;

    bool operator==(const V8IsolateTable::Row& other) const {
      return type() == other.type() && ColumnType::upid::Equals(upid, other.upid) &&
       ColumnType::internal_isolate_id::Equals(internal_isolate_id, other.internal_isolate_id) &&
       ColumnType::embedded_blob_code_start_address::Equals(embedded_blob_code_start_address, other.embedded_blob_code_start_address) &&
       ColumnType::embedded_blob_code_size::Equals(embedded_blob_code_size, other.embedded_blob_code_size) &&
       ColumnType::code_range_base_address::Equals(code_range_base_address, other.code_range_base_address) &&
       ColumnType::code_range_size::Equals(code_range_size, other.code_range_size) &&
       ColumnType::shared_code_range::Equals(shared_code_range, other.shared_code_range) &&
       ColumnType::embedded_blob_code_copy_start_address::Equals(embedded_blob_code_copy_start_address, other.embedded_blob_code_copy_start_address);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t upid = ColumnType::upid::default_flags();
    static constexpr uint32_t internal_isolate_id = ColumnType::internal_isolate_id::default_flags();
    static constexpr uint32_t embedded_blob_code_start_address = ColumnType::embedded_blob_code_start_address::default_flags();
    static constexpr uint32_t embedded_blob_code_size = ColumnType::embedded_blob_code_size::default_flags();
    static constexpr uint32_t code_range_base_address = ColumnType::code_range_base_address::default_flags();
    static constexpr uint32_t code_range_size = ColumnType::code_range_size::default_flags();
    static constexpr uint32_t shared_code_range = ColumnType::shared_code_range::default_flags();
    static constexpr uint32_t embedded_blob_code_copy_start_address = ColumnType::embedded_blob_code_copy_start_address::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      V8IsolateTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    V8IsolateTable, RowNumber> {
   public:
    ConstRowReference(const V8IsolateTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::upid::type upid() const {
      return table_->upid()[row_number_];
    }
    ColumnType::internal_isolate_id::type internal_isolate_id() const {
      return table_->internal_isolate_id()[row_number_];
    }
    ColumnType::embedded_blob_code_start_address::type embedded_blob_code_start_address() const {
      return table_->embedded_blob_code_start_address()[row_number_];
    }
    ColumnType::embedded_blob_code_size::type embedded_blob_code_size() const {
      return table_->embedded_blob_code_size()[row_number_];
    }
    ColumnType::code_range_base_address::type code_range_base_address() const {
      return table_->code_range_base_address()[row_number_];
    }
    ColumnType::code_range_size::type code_range_size() const {
      return table_->code_range_size()[row_number_];
    }
    ColumnType::shared_code_range::type shared_code_range() const {
      return table_->shared_code_range()[row_number_];
    }
    ColumnType::embedded_blob_code_copy_start_address::type embedded_blob_code_copy_start_address() const {
      return table_->embedded_blob_code_copy_start_address()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const V8IsolateTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_upid(
        ColumnType::upid::non_optional_type v) {
      return mutable_table()->mutable_upid()->Set(row_number_, v);
    }
    void set_internal_isolate_id(
        ColumnType::internal_isolate_id::non_optional_type v) {
      return mutable_table()->mutable_internal_isolate_id()->Set(row_number_, v);
    }
    void set_embedded_blob_code_start_address(
        ColumnType::embedded_blob_code_start_address::non_optional_type v) {
      return mutable_table()->mutable_embedded_blob_code_start_address()->Set(row_number_, v);
    }
    void set_embedded_blob_code_size(
        ColumnType::embedded_blob_code_size::non_optional_type v) {
      return mutable_table()->mutable_embedded_blob_code_size()->Set(row_number_, v);
    }
    void set_code_range_base_address(
        ColumnType::code_range_base_address::non_optional_type v) {
      return mutable_table()->mutable_code_range_base_address()->Set(row_number_, v);
    }
    void set_code_range_size(
        ColumnType::code_range_size::non_optional_type v) {
      return mutable_table()->mutable_code_range_size()->Set(row_number_, v);
    }
    void set_shared_code_range(
        ColumnType::shared_code_range::non_optional_type v) {
      return mutable_table()->mutable_shared_code_range()->Set(row_number_, v);
    }
    void set_embedded_blob_code_copy_start_address(
        ColumnType::embedded_blob_code_copy_start_address::non_optional_type v) {
      return mutable_table()->mutable_embedded_blob_code_copy_start_address()->Set(row_number_, v);
    }

   private:
    V8IsolateTable* mutable_table() const {
      return const_cast<V8IsolateTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, V8IsolateTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::upid::type upid() const {
      const auto& col = table_->upid();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::internal_isolate_id::type internal_isolate_id() const {
      const auto& col = table_->internal_isolate_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::embedded_blob_code_start_address::type embedded_blob_code_start_address() const {
      const auto& col = table_->embedded_blob_code_start_address();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::embedded_blob_code_size::type embedded_blob_code_size() const {
      const auto& col = table_->embedded_blob_code_size();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::code_range_base_address::type code_range_base_address() const {
      const auto& col = table_->code_range_base_address();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::code_range_size::type code_range_size() const {
      const auto& col = table_->code_range_size();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::shared_code_range::type shared_code_range() const {
      const auto& col = table_->shared_code_range();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::embedded_blob_code_copy_start_address::type embedded_blob_code_copy_start_address() const {
      const auto& col = table_->embedded_blob_code_copy_start_address();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const V8IsolateTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class V8IsolateTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, V8IsolateTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_upid(ColumnType::upid::non_optional_type v) {
        auto* col = mutable_table_->mutable_upid();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_internal_isolate_id(ColumnType::internal_isolate_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_internal_isolate_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_embedded_blob_code_start_address(ColumnType::embedded_blob_code_start_address::non_optional_type v) {
        auto* col = mutable_table_->mutable_embedded_blob_code_start_address();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_embedded_blob_code_size(ColumnType::embedded_blob_code_size::non_optional_type v) {
        auto* col = mutable_table_->mutable_embedded_blob_code_size();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_code_range_base_address(ColumnType::code_range_base_address::non_optional_type v) {
        auto* col = mutable_table_->mutable_code_range_base_address();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_code_range_size(ColumnType::code_range_size::non_optional_type v) {
        auto* col = mutable_table_->mutable_code_range_size();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_shared_code_range(ColumnType::shared_code_range::non_optional_type v) {
        auto* col = mutable_table_->mutable_shared_code_range();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_embedded_blob_code_copy_start_address(ColumnType::embedded_blob_code_copy_start_address::non_optional_type v) {
        auto* col = mutable_table_->mutable_embedded_blob_code_copy_start_address();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class V8IsolateTable;

    explicit Iterator(V8IsolateTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    V8IsolateTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit V8IsolateTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        upid_(ColumnStorage<ColumnType::upid::stored_type>::Create<false>()),
        internal_isolate_id_(ColumnStorage<ColumnType::internal_isolate_id::stored_type>::Create<false>()),
        embedded_blob_code_start_address_(ColumnStorage<ColumnType::embedded_blob_code_start_address::stored_type>::Create<false>()),
        embedded_blob_code_size_(ColumnStorage<ColumnType::embedded_blob_code_size::stored_type>::Create<false>()),
        code_range_base_address_(ColumnStorage<ColumnType::code_range_base_address::stored_type>::Create<false>()),
        code_range_size_(ColumnStorage<ColumnType::code_range_size::stored_type>::Create<false>()),
        shared_code_range_(ColumnStorage<ColumnType::shared_code_range::stored_type>::Create<false>()),
        embedded_blob_code_copy_start_address_(ColumnStorage<ColumnType::embedded_blob_code_copy_start_address::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::upid::stored_type>(
          ColumnFlag::upid),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::internal_isolate_id::stored_type>(
          ColumnFlag::internal_isolate_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::embedded_blob_code_start_address::stored_type>(
          ColumnFlag::embedded_blob_code_start_address),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::embedded_blob_code_size::stored_type>(
          ColumnFlag::embedded_blob_code_size),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::code_range_base_address::stored_type>(
          ColumnFlag::code_range_base_address),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::code_range_size::stored_type>(
          ColumnFlag::code_range_size),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::shared_code_range::stored_type>(
          ColumnFlag::shared_code_range),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::embedded_blob_code_copy_start_address::stored_type>(
          ColumnFlag::embedded_blob_code_copy_start_address),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("upid", &upid_, ColumnFlag::upid,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("internal_isolate_id", &internal_isolate_id_, ColumnFlag::internal_isolate_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("embedded_blob_code_start_address", &embedded_blob_code_start_address_, ColumnFlag::embedded_blob_code_start_address,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("embedded_blob_code_size", &embedded_blob_code_size_, ColumnFlag::embedded_blob_code_size,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("code_range_base_address", &code_range_base_address_, ColumnFlag::code_range_base_address,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("code_range_size", &code_range_size_, ColumnFlag::code_range_size,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("shared_code_range", &shared_code_range_, ColumnFlag::shared_code_range,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("embedded_blob_code_copy_start_address", &embedded_blob_code_copy_start_address_, ColumnFlag::embedded_blob_code_copy_start_address,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~V8IsolateTable() override;

  static const char* Name() { return "v8_isolate"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "upid", ColumnType::upid::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "internal_isolate_id", ColumnType::internal_isolate_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "embedded_blob_code_start_address", ColumnType::embedded_blob_code_start_address::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "embedded_blob_code_size", ColumnType::embedded_blob_code_size::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "code_range_base_address", ColumnType::code_range_base_address::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "code_range_size", ColumnType::code_range_size::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "shared_code_range", ColumnType::shared_code_range::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "embedded_blob_code_copy_start_address", ColumnType::embedded_blob_code_copy_start_address::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, CopyOverlays());
  }

  Iterator IterateRows() { return Iterator(this, CopyOverlays()); }

  ConstIterator FilterToIterator(
      const std::vector<Constraint>& cs,
      RowMap::OptimizeFor opt = RowMap::OptimizeFor::kMemory) const {
    return ConstIterator(this, FilterAndApplyToOverlays(cs, opt));
  }

  Iterator FilterToIterator(
      const std::vector<Constraint>& cs,
      RowMap::OptimizeFor opt = RowMap::OptimizeFor::kMemory) {
    return Iterator(this, FilterAndApplyToOverlays(cs, opt));
  }

  void ShrinkToFit() {
    type_.ShrinkToFit();
    upid_.ShrinkToFit();
    internal_isolate_id_.ShrinkToFit();
    embedded_blob_code_start_address_.ShrinkToFit();
    embedded_blob_code_size_.ShrinkToFit();
    code_range_base_address_.ShrinkToFit();
    code_range_size_.ShrinkToFit();
    shared_code_range_.ShrinkToFit();
    embedded_blob_code_copy_start_address_.ShrinkToFit();
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    type_.Append(string_pool_->InternString(row.type()));
    mutable_upid()->Append(std::move(row.upid));
    mutable_internal_isolate_id()->Append(std::move(row.internal_isolate_id));
    mutable_embedded_blob_code_start_address()->Append(std::move(row.embedded_blob_code_start_address));
    mutable_embedded_blob_code_size()->Append(std::move(row.embedded_blob_code_size));
    mutable_code_range_base_address()->Append(std::move(row.code_range_base_address));
    mutable_code_range_size()->Append(std::move(row.code_range_size));
    mutable_shared_code_range()->Append(std::move(row.shared_code_range));
    mutable_embedded_blob_code_copy_start_address()->Append(std::move(row.embedded_blob_code_copy_start_address));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<V8IsolateTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<uint32_t>& upid() const {
    return static_cast<const ColumnType::upid&>(columns_[ColumnIndex::upid]);
  }
  const TypedColumn<int32_t>& internal_isolate_id() const {
    return static_cast<const ColumnType::internal_isolate_id&>(columns_[ColumnIndex::internal_isolate_id]);
  }
  const TypedColumn<int64_t>& embedded_blob_code_start_address() const {
    return static_cast<const ColumnType::embedded_blob_code_start_address&>(columns_[ColumnIndex::embedded_blob_code_start_address]);
  }
  const TypedColumn<int64_t>& embedded_blob_code_size() const {
    return static_cast<const ColumnType::embedded_blob_code_size&>(columns_[ColumnIndex::embedded_blob_code_size]);
  }
  const TypedColumn<std::optional<int64_t>>& code_range_base_address() const {
    return static_cast<const ColumnType::code_range_base_address&>(columns_[ColumnIndex::code_range_base_address]);
  }
  const TypedColumn<std::optional<int64_t>>& code_range_size() const {
    return static_cast<const ColumnType::code_range_size&>(columns_[ColumnIndex::code_range_size]);
  }
  const TypedColumn<std::optional<uint32_t>>& shared_code_range() const {
    return static_cast<const ColumnType::shared_code_range&>(columns_[ColumnIndex::shared_code_range]);
  }
  const TypedColumn<std::optional<int64_t>>& embedded_blob_code_copy_start_address() const {
    return static_cast<const ColumnType::embedded_blob_code_copy_start_address&>(columns_[ColumnIndex::embedded_blob_code_copy_start_address]);
  }

  TypedColumn<uint32_t>* mutable_upid() {
    return static_cast<ColumnType::upid*>(
        &columns_[ColumnIndex::upid]);
  }
  TypedColumn<int32_t>* mutable_internal_isolate_id() {
    return static_cast<ColumnType::internal_isolate_id*>(
        &columns_[ColumnIndex::internal_isolate_id]);
  }
  TypedColumn<int64_t>* mutable_embedded_blob_code_start_address() {
    return static_cast<ColumnType::embedded_blob_code_start_address*>(
        &columns_[ColumnIndex::embedded_blob_code_start_address]);
  }
  TypedColumn<int64_t>* mutable_embedded_blob_code_size() {
    return static_cast<ColumnType::embedded_blob_code_size*>(
        &columns_[ColumnIndex::embedded_blob_code_size]);
  }
  TypedColumn<std::optional<int64_t>>* mutable_code_range_base_address() {
    return static_cast<ColumnType::code_range_base_address*>(
        &columns_[ColumnIndex::code_range_base_address]);
  }
  TypedColumn<std::optional<int64_t>>* mutable_code_range_size() {
    return static_cast<ColumnType::code_range_size*>(
        &columns_[ColumnIndex::code_range_size]);
  }
  TypedColumn<std::optional<uint32_t>>* mutable_shared_code_range() {
    return static_cast<ColumnType::shared_code_range*>(
        &columns_[ColumnIndex::shared_code_range]);
  }
  TypedColumn<std::optional<int64_t>>* mutable_embedded_blob_code_copy_start_address() {
    return static_cast<ColumnType::embedded_blob_code_copy_start_address*>(
        &columns_[ColumnIndex::embedded_blob_code_copy_start_address]);
  }

 private:
  
  
  ColumnStorage<ColumnType::upid::stored_type> upid_;
  ColumnStorage<ColumnType::internal_isolate_id::stored_type> internal_isolate_id_;
  ColumnStorage<ColumnType::embedded_blob_code_start_address::stored_type> embedded_blob_code_start_address_;
  ColumnStorage<ColumnType::embedded_blob_code_size::stored_type> embedded_blob_code_size_;
  ColumnStorage<ColumnType::code_range_base_address::stored_type> code_range_base_address_;
  ColumnStorage<ColumnType::code_range_size::stored_type> code_range_size_;
  ColumnStorage<ColumnType::shared_code_range::stored_type> shared_code_range_;
  ColumnStorage<ColumnType::embedded_blob_code_copy_start_address::stored_type> embedded_blob_code_copy_start_address_;
};
  

class V8JsScriptTable : public macros_internal::MacroTable {
 public:
  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible<Id>::value,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t type = 1;
    static constexpr uint32_t v8_isolate_id = 2;
    static constexpr uint32_t internal_script_id = 3;
    static constexpr uint32_t script_type = 4;
    static constexpr uint32_t name = 5;
    static constexpr uint32_t source = 6;
  };
  struct ColumnType {
    using id = IdColumn<V8JsScriptTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using v8_isolate_id = TypedColumn<V8IsolateTable::Id>;
    using internal_script_id = TypedColumn<int32_t>;
    using script_type = TypedColumn<StringPool::Id>;
    using name = TypedColumn<StringPool::Id>;
    using source = TypedColumn<std::optional<StringPool::Id>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(V8IsolateTable::Id in_v8_isolate_id = {},
        int32_t in_internal_script_id = {},
        StringPool::Id in_script_type = {},
        StringPool::Id in_name = {},
        std::optional<StringPool::Id> in_source = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          v8_isolate_id(std::move(in_v8_isolate_id)),
          internal_script_id(std::move(in_internal_script_id)),
          script_type(std::move(in_script_type)),
          name(std::move(in_name)),
          source(std::move(in_source)) {
      type_ = "v8_js_script";
    }
    V8IsolateTable::Id v8_isolate_id;
    int32_t internal_script_id;
    StringPool::Id script_type;
    StringPool::Id name;
    std::optional<StringPool::Id> source;

    bool operator==(const V8JsScriptTable::Row& other) const {
      return type() == other.type() && ColumnType::v8_isolate_id::Equals(v8_isolate_id, other.v8_isolate_id) &&
       ColumnType::internal_script_id::Equals(internal_script_id, other.internal_script_id) &&
       ColumnType::script_type::Equals(script_type, other.script_type) &&
       ColumnType::name::Equals(name, other.name) &&
       ColumnType::source::Equals(source, other.source);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t v8_isolate_id = ColumnType::v8_isolate_id::default_flags();
    static constexpr uint32_t internal_script_id = ColumnType::internal_script_id::default_flags();
    static constexpr uint32_t script_type = ColumnType::script_type::default_flags();
    static constexpr uint32_t name = ColumnType::name::default_flags();
    static constexpr uint32_t source = ColumnType::source::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      V8JsScriptTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    V8JsScriptTable, RowNumber> {
   public:
    ConstRowReference(const V8JsScriptTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::v8_isolate_id::type v8_isolate_id() const {
      return table_->v8_isolate_id()[row_number_];
    }
    ColumnType::internal_script_id::type internal_script_id() const {
      return table_->internal_script_id()[row_number_];
    }
    ColumnType::script_type::type script_type() const {
      return table_->script_type()[row_number_];
    }
    ColumnType::name::type name() const {
      return table_->name()[row_number_];
    }
    ColumnType::source::type source() const {
      return table_->source()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const V8JsScriptTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_v8_isolate_id(
        ColumnType::v8_isolate_id::non_optional_type v) {
      return mutable_table()->mutable_v8_isolate_id()->Set(row_number_, v);
    }
    void set_internal_script_id(
        ColumnType::internal_script_id::non_optional_type v) {
      return mutable_table()->mutable_internal_script_id()->Set(row_number_, v);
    }
    void set_script_type(
        ColumnType::script_type::non_optional_type v) {
      return mutable_table()->mutable_script_type()->Set(row_number_, v);
    }
    void set_name(
        ColumnType::name::non_optional_type v) {
      return mutable_table()->mutable_name()->Set(row_number_, v);
    }
    void set_source(
        ColumnType::source::non_optional_type v) {
      return mutable_table()->mutable_source()->Set(row_number_, v);
    }

   private:
    V8JsScriptTable* mutable_table() const {
      return const_cast<V8JsScriptTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, V8JsScriptTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::v8_isolate_id::type v8_isolate_id() const {
      const auto& col = table_->v8_isolate_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::internal_script_id::type internal_script_id() const {
      const auto& col = table_->internal_script_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::script_type::type script_type() const {
      const auto& col = table_->script_type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::name::type name() const {
      const auto& col = table_->name();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::source::type source() const {
      const auto& col = table_->source();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const V8JsScriptTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class V8JsScriptTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, V8JsScriptTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_v8_isolate_id(ColumnType::v8_isolate_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_v8_isolate_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_internal_script_id(ColumnType::internal_script_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_internal_script_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_script_type(ColumnType::script_type::non_optional_type v) {
        auto* col = mutable_table_->mutable_script_type();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_name(ColumnType::name::non_optional_type v) {
        auto* col = mutable_table_->mutable_name();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_source(ColumnType::source::non_optional_type v) {
        auto* col = mutable_table_->mutable_source();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class V8JsScriptTable;

    explicit Iterator(V8JsScriptTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    V8JsScriptTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit V8JsScriptTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        v8_isolate_id_(ColumnStorage<ColumnType::v8_isolate_id::stored_type>::Create<false>()),
        internal_script_id_(ColumnStorage<ColumnType::internal_script_id::stored_type>::Create<false>()),
        script_type_(ColumnStorage<ColumnType::script_type::stored_type>::Create<false>()),
        name_(ColumnStorage<ColumnType::name::stored_type>::Create<false>()),
        source_(ColumnStorage<ColumnType::source::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::v8_isolate_id::stored_type>(
          ColumnFlag::v8_isolate_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::internal_script_id::stored_type>(
          ColumnFlag::internal_script_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::script_type::stored_type>(
          ColumnFlag::script_type),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::name::stored_type>(
          ColumnFlag::name),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::source::stored_type>(
          ColumnFlag::source),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("v8_isolate_id", &v8_isolate_id_, ColumnFlag::v8_isolate_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("internal_script_id", &internal_script_id_, ColumnFlag::internal_script_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("script_type", &script_type_, ColumnFlag::script_type,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("name", &name_, ColumnFlag::name,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("source", &source_, ColumnFlag::source,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~V8JsScriptTable() override;

  static const char* Name() { return "v8_js_script"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "v8_isolate_id", ColumnType::v8_isolate_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "internal_script_id", ColumnType::internal_script_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "script_type", ColumnType::script_type::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "name", ColumnType::name::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "source", ColumnType::source::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, CopyOverlays());
  }

  Iterator IterateRows() { return Iterator(this, CopyOverlays()); }

  ConstIterator FilterToIterator(
      const std::vector<Constraint>& cs,
      RowMap::OptimizeFor opt = RowMap::OptimizeFor::kMemory) const {
    return ConstIterator(this, FilterAndApplyToOverlays(cs, opt));
  }

  Iterator FilterToIterator(
      const std::vector<Constraint>& cs,
      RowMap::OptimizeFor opt = RowMap::OptimizeFor::kMemory) {
    return Iterator(this, FilterAndApplyToOverlays(cs, opt));
  }

  void ShrinkToFit() {
    type_.ShrinkToFit();
    v8_isolate_id_.ShrinkToFit();
    internal_script_id_.ShrinkToFit();
    script_type_.ShrinkToFit();
    name_.ShrinkToFit();
    source_.ShrinkToFit();
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    type_.Append(string_pool_->InternString(row.type()));
    mutable_v8_isolate_id()->Append(std::move(row.v8_isolate_id));
    mutable_internal_script_id()->Append(std::move(row.internal_script_id));
    mutable_script_type()->Append(std::move(row.script_type));
    mutable_name()->Append(std::move(row.name));
    mutable_source()->Append(std::move(row.source));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<V8JsScriptTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<V8IsolateTable::Id>& v8_isolate_id() const {
    return static_cast<const ColumnType::v8_isolate_id&>(columns_[ColumnIndex::v8_isolate_id]);
  }
  const TypedColumn<int32_t>& internal_script_id() const {
    return static_cast<const ColumnType::internal_script_id&>(columns_[ColumnIndex::internal_script_id]);
  }
  const TypedColumn<StringPool::Id>& script_type() const {
    return static_cast<const ColumnType::script_type&>(columns_[ColumnIndex::script_type]);
  }
  const TypedColumn<StringPool::Id>& name() const {
    return static_cast<const ColumnType::name&>(columns_[ColumnIndex::name]);
  }
  const TypedColumn<std::optional<StringPool::Id>>& source() const {
    return static_cast<const ColumnType::source&>(columns_[ColumnIndex::source]);
  }

  TypedColumn<V8IsolateTable::Id>* mutable_v8_isolate_id() {
    return static_cast<ColumnType::v8_isolate_id*>(
        &columns_[ColumnIndex::v8_isolate_id]);
  }
  TypedColumn<int32_t>* mutable_internal_script_id() {
    return static_cast<ColumnType::internal_script_id*>(
        &columns_[ColumnIndex::internal_script_id]);
  }
  TypedColumn<StringPool::Id>* mutable_script_type() {
    return static_cast<ColumnType::script_type*>(
        &columns_[ColumnIndex::script_type]);
  }
  TypedColumn<StringPool::Id>* mutable_name() {
    return static_cast<ColumnType::name*>(
        &columns_[ColumnIndex::name]);
  }
  TypedColumn<std::optional<StringPool::Id>>* mutable_source() {
    return static_cast<ColumnType::source*>(
        &columns_[ColumnIndex::source]);
  }

 private:
  
  
  ColumnStorage<ColumnType::v8_isolate_id::stored_type> v8_isolate_id_;
  ColumnStorage<ColumnType::internal_script_id::stored_type> internal_script_id_;
  ColumnStorage<ColumnType::script_type::stored_type> script_type_;
  ColumnStorage<ColumnType::name::stored_type> name_;
  ColumnStorage<ColumnType::source::stored_type> source_;
};
  

class V8WasmScriptTable : public macros_internal::MacroTable {
 public:
  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible<Id>::value,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t type = 1;
    static constexpr uint32_t v8_isolate_id = 2;
    static constexpr uint32_t internal_script_id = 3;
    static constexpr uint32_t url = 4;
    static constexpr uint32_t source = 5;
  };
  struct ColumnType {
    using id = IdColumn<V8WasmScriptTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using v8_isolate_id = TypedColumn<V8IsolateTable::Id>;
    using internal_script_id = TypedColumn<int32_t>;
    using url = TypedColumn<StringPool::Id>;
    using source = TypedColumn<std::optional<StringPool::Id>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(V8IsolateTable::Id in_v8_isolate_id = {},
        int32_t in_internal_script_id = {},
        StringPool::Id in_url = {},
        std::optional<StringPool::Id> in_source = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          v8_isolate_id(std::move(in_v8_isolate_id)),
          internal_script_id(std::move(in_internal_script_id)),
          url(std::move(in_url)),
          source(std::move(in_source)) {
      type_ = "v8_wasm_script";
    }
    V8IsolateTable::Id v8_isolate_id;
    int32_t internal_script_id;
    StringPool::Id url;
    std::optional<StringPool::Id> source;

    bool operator==(const V8WasmScriptTable::Row& other) const {
      return type() == other.type() && ColumnType::v8_isolate_id::Equals(v8_isolate_id, other.v8_isolate_id) &&
       ColumnType::internal_script_id::Equals(internal_script_id, other.internal_script_id) &&
       ColumnType::url::Equals(url, other.url) &&
       ColumnType::source::Equals(source, other.source);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t v8_isolate_id = ColumnType::v8_isolate_id::default_flags();
    static constexpr uint32_t internal_script_id = ColumnType::internal_script_id::default_flags();
    static constexpr uint32_t url = ColumnType::url::default_flags();
    static constexpr uint32_t source = ColumnType::source::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      V8WasmScriptTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    V8WasmScriptTable, RowNumber> {
   public:
    ConstRowReference(const V8WasmScriptTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::v8_isolate_id::type v8_isolate_id() const {
      return table_->v8_isolate_id()[row_number_];
    }
    ColumnType::internal_script_id::type internal_script_id() const {
      return table_->internal_script_id()[row_number_];
    }
    ColumnType::url::type url() const {
      return table_->url()[row_number_];
    }
    ColumnType::source::type source() const {
      return table_->source()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const V8WasmScriptTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_v8_isolate_id(
        ColumnType::v8_isolate_id::non_optional_type v) {
      return mutable_table()->mutable_v8_isolate_id()->Set(row_number_, v);
    }
    void set_internal_script_id(
        ColumnType::internal_script_id::non_optional_type v) {
      return mutable_table()->mutable_internal_script_id()->Set(row_number_, v);
    }
    void set_url(
        ColumnType::url::non_optional_type v) {
      return mutable_table()->mutable_url()->Set(row_number_, v);
    }
    void set_source(
        ColumnType::source::non_optional_type v) {
      return mutable_table()->mutable_source()->Set(row_number_, v);
    }

   private:
    V8WasmScriptTable* mutable_table() const {
      return const_cast<V8WasmScriptTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, V8WasmScriptTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::v8_isolate_id::type v8_isolate_id() const {
      const auto& col = table_->v8_isolate_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::internal_script_id::type internal_script_id() const {
      const auto& col = table_->internal_script_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::url::type url() const {
      const auto& col = table_->url();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::source::type source() const {
      const auto& col = table_->source();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const V8WasmScriptTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class V8WasmScriptTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, V8WasmScriptTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_v8_isolate_id(ColumnType::v8_isolate_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_v8_isolate_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_internal_script_id(ColumnType::internal_script_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_internal_script_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_url(ColumnType::url::non_optional_type v) {
        auto* col = mutable_table_->mutable_url();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_source(ColumnType::source::non_optional_type v) {
        auto* col = mutable_table_->mutable_source();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class V8WasmScriptTable;

    explicit Iterator(V8WasmScriptTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    V8WasmScriptTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit V8WasmScriptTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        v8_isolate_id_(ColumnStorage<ColumnType::v8_isolate_id::stored_type>::Create<false>()),
        internal_script_id_(ColumnStorage<ColumnType::internal_script_id::stored_type>::Create<false>()),
        url_(ColumnStorage<ColumnType::url::stored_type>::Create<false>()),
        source_(ColumnStorage<ColumnType::source::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::v8_isolate_id::stored_type>(
          ColumnFlag::v8_isolate_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::internal_script_id::stored_type>(
          ColumnFlag::internal_script_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::url::stored_type>(
          ColumnFlag::url),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::source::stored_type>(
          ColumnFlag::source),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("v8_isolate_id", &v8_isolate_id_, ColumnFlag::v8_isolate_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("internal_script_id", &internal_script_id_, ColumnFlag::internal_script_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("url", &url_, ColumnFlag::url,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("source", &source_, ColumnFlag::source,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~V8WasmScriptTable() override;

  static const char* Name() { return "v8_wasm_script"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "v8_isolate_id", ColumnType::v8_isolate_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "internal_script_id", ColumnType::internal_script_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "url", ColumnType::url::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "source", ColumnType::source::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, CopyOverlays());
  }

  Iterator IterateRows() { return Iterator(this, CopyOverlays()); }

  ConstIterator FilterToIterator(
      const std::vector<Constraint>& cs,
      RowMap::OptimizeFor opt = RowMap::OptimizeFor::kMemory) const {
    return ConstIterator(this, FilterAndApplyToOverlays(cs, opt));
  }

  Iterator FilterToIterator(
      const std::vector<Constraint>& cs,
      RowMap::OptimizeFor opt = RowMap::OptimizeFor::kMemory) {
    return Iterator(this, FilterAndApplyToOverlays(cs, opt));
  }

  void ShrinkToFit() {
    type_.ShrinkToFit();
    v8_isolate_id_.ShrinkToFit();
    internal_script_id_.ShrinkToFit();
    url_.ShrinkToFit();
    source_.ShrinkToFit();
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    type_.Append(string_pool_->InternString(row.type()));
    mutable_v8_isolate_id()->Append(std::move(row.v8_isolate_id));
    mutable_internal_script_id()->Append(std::move(row.internal_script_id));
    mutable_url()->Append(std::move(row.url));
    mutable_source()->Append(std::move(row.source));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<V8WasmScriptTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<V8IsolateTable::Id>& v8_isolate_id() const {
    return static_cast<const ColumnType::v8_isolate_id&>(columns_[ColumnIndex::v8_isolate_id]);
  }
  const TypedColumn<int32_t>& internal_script_id() const {
    return static_cast<const ColumnType::internal_script_id&>(columns_[ColumnIndex::internal_script_id]);
  }
  const TypedColumn<StringPool::Id>& url() const {
    return static_cast<const ColumnType::url&>(columns_[ColumnIndex::url]);
  }
  const TypedColumn<std::optional<StringPool::Id>>& source() const {
    return static_cast<const ColumnType::source&>(columns_[ColumnIndex::source]);
  }

  TypedColumn<V8IsolateTable::Id>* mutable_v8_isolate_id() {
    return static_cast<ColumnType::v8_isolate_id*>(
        &columns_[ColumnIndex::v8_isolate_id]);
  }
  TypedColumn<int32_t>* mutable_internal_script_id() {
    return static_cast<ColumnType::internal_script_id*>(
        &columns_[ColumnIndex::internal_script_id]);
  }
  TypedColumn<StringPool::Id>* mutable_url() {
    return static_cast<ColumnType::url*>(
        &columns_[ColumnIndex::url]);
  }
  TypedColumn<std::optional<StringPool::Id>>* mutable_source() {
    return static_cast<ColumnType::source*>(
        &columns_[ColumnIndex::source]);
  }

 private:
  
  
  ColumnStorage<ColumnType::v8_isolate_id::stored_type> v8_isolate_id_;
  ColumnStorage<ColumnType::internal_script_id::stored_type> internal_script_id_;
  ColumnStorage<ColumnType::url::stored_type> url_;
  ColumnStorage<ColumnType::source::stored_type> source_;
};
  

class V8JsFunctionTable : public macros_internal::MacroTable {
 public:
  struct Id : public BaseId {
    Id() = default;
    explicit constexpr Id(uint32_t v) : BaseId(v) {}
  };
  static_assert(std::is_trivially_destructible<Id>::value,
                "Inheritance used without trivial destruction");
    
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t type = 1;
    static constexpr uint32_t name = 2;
    static constexpr uint32_t v8_js_script_id = 3;
    static constexpr uint32_t is_toplevel = 4;
    static constexpr uint32_t kind = 5;
    static constexpr uint32_t line = 6;
    static constexpr uint32_t column = 7;
  };
  struct ColumnType {
    using id = IdColumn<V8JsFunctionTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using name = TypedColumn<StringPool::Id>;
    using v8_js_script_id = TypedColumn<V8JsScriptTable::Id>;
    using is_toplevel = TypedColumn<uint32_t>;
    using kind = TypedColumn<StringPool::Id>;
    using line = TypedColumn<std::optional<uint32_t>>;
    using column = TypedColumn<std::optional<uint32_t>>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(StringPool::Id in_name = {},
        V8JsScriptTable::Id in_v8_js_script_id = {},
        uint32_t in_is_toplevel = {},
        StringPool::Id in_kind = {},
        std::optional<uint32_t> in_line = {},
        std::optional<uint32_t> in_column = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          name(std::move(in_name)),
          v8_js_script_id(std::move(in_v8_js_script_id)),
          is_toplevel(std::move(in_is_toplevel)),
          kind(std::move(in_kind)),
          line(std::move(in_line)),
          column(std::move(in_column)) {
      type_ = "v8_js_function";
    }
    StringPool::Id name;
    V8JsScriptTable::Id v8_js_script_id;
    uint32_t is_toplevel;
    StringPool::Id kind;
    std::optional<uint32_t> line;
    std::optional<uint32_t> column;

    bool operator==(const V8JsFunctionTable::Row& other) const {
      return type() == other.type() && ColumnType::name::Equals(name, other.name) &&
       ColumnType::v8_js_script_id::Equals(v8_js_script_id, other.v8_js_script_id) &&
       ColumnType::is_toplevel::Equals(is_toplevel, other.is_toplevel) &&
       ColumnType::kind::Equals(kind, other.kind) &&
       ColumnType::line::Equals(line, other.line) &&
       ColumnType::column::Equals(column, other.column);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t name = ColumnType::name::default_flags();
    static constexpr uint32_t v8_js_script_id = ColumnType::v8_js_script_id::default_flags();
    static constexpr uint32_t is_toplevel = ColumnType::is_toplevel::default_flags();
    static constexpr uint32_t kind = ColumnType::kind::default_flags();
    static constexpr uint32_t line = ColumnType::line::default_flags();
    static constexpr uint32_t column = ColumnType::column::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      V8JsFunctionTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    V8JsFunctionTable, RowNumber> {
   public:
    ConstRowReference(const V8JsFunctionTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::name::type name() const {
      return table_->name()[row_number_];
    }
    ColumnType::v8_js_script_id::type v8_js_script_id() const {
      return table_->v8_js_script_id()[row_number_];
    }
    ColumnType::is_toplevel::type is_toplevel() const {
      return table_->is_toplevel()[row_number_];
    }
    ColumnType::kind::type kind() const {
      return table_->kind()[row_number_];
    }
    ColumnType::line::type line() const {
      return table_->line()[row_number_];
    }
    ColumnType::column::type column() const {
      return table_->column()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const V8JsFunctionTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_name(
        ColumnType::name::non_optional_type v) {
      return mutable_table()->mutable_name()->Set(row_number_, v);
    }
    void set_v8_js_script_id(
        ColumnType::v8_js_script_id::non_optional_type v) {
      return mutable_table()->mutable_v8_js_script_id()->Set(row_number_, v);
    }
    void set_is_toplevel(
        ColumnType::is_toplevel::non_optional_type v) {
      return mutable_table()->mutable_is_toplevel()->Set(row_number_, v);
    }
    void set_kind(
        ColumnType::kind::non_optional_type v) {
      return mutable_table()->mutable_kind()->Set(row_number_, v);
    }
    void set_line(
        ColumnType::line::non_optional_type v) {
      return mutable_table()->mutable_line()->Set(row_number_, v);
    }
    void set_column(
        ColumnType::column::non_optional_type v) {
      return mutable_table()->mutable_column()->Set(row_number_, v);
    }

   private:
    V8JsFunctionTable* mutable_table() const {
      return const_cast<V8JsFunctionTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, V8JsFunctionTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::name::type name() const {
      const auto& col = table_->name();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::v8_js_script_id::type v8_js_script_id() const {
      const auto& col = table_->v8_js_script_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::is_toplevel::type is_toplevel() const {
      const auto& col = table_->is_toplevel();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::kind::type kind() const {
      const auto& col = table_->kind();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::line::type line() const {
      const auto& col = table_->line();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::column::type column() const {
      const auto& col = table_->column();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const V8JsFunctionTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class V8JsFunctionTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, V8JsFunctionTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_name(ColumnType::name::non_optional_type v) {
        auto* col = mutable_table_->mutable_name();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_v8_js_script_id(ColumnType::v8_js_script_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_v8_js_script_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_is_toplevel(ColumnType::is_toplevel::non_optional_type v) {
        auto* col = mutable_table_->mutable_is_toplevel();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_kind(ColumnType::kind::non_optional_type v) {
        auto* col = mutable_table_->mutable_kind();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_line(ColumnType::line::non_optional_type v) {
        auto* col = mutable_table_->mutable_line();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_column(ColumnType::column::non_optional_type v) {
        auto* col = mutable_table_->mutable_column();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class V8JsFunctionTable;

    explicit Iterator(V8JsFunctionTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    V8JsFunctionTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit V8JsFunctionTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        name_(ColumnStorage<ColumnType::name::stored_type>::Create<false>()),
        v8_js_script_id_(ColumnStorage<ColumnType::v8_js_script_id::stored_type>::Create<false>()),
        is_toplevel_(ColumnStorage<ColumnType::is_toplevel::stored_type>::Create<false>()),
        kind_(ColumnStorage<ColumnType::kind::stored_type>::Create<false>()),
        line_(ColumnStorage<ColumnType::line::stored_type>::Create<false>()),
        column_(ColumnStorage<ColumnType::column::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::name::stored_type>(
          ColumnFlag::name),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::v8_js_script_id::stored_type>(
          ColumnFlag::v8_js_script_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::is_toplevel::stored_type>(
          ColumnFlag::is_toplevel),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::kind::stored_type>(
          ColumnFlag::kind),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::line::stored_type>(
          ColumnFlag::line),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::column::stored_type>(
          ColumnFlag::column),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("name", &name_, ColumnFlag::name,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("v8_js_script_id", &v8_js_script_id_, ColumnFlag::v8_js_script_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("is_toplevel", &is_toplevel_, ColumnFlag::is_toplevel,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("kind", &kind_, ColumnFlag::kind,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("line", &line_, ColumnFlag::line,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("column", &column_, ColumnFlag::column,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~V8JsFunctionTable() override;

  static const char* Name() { return "v8_js_function"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "name", ColumnType::name::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "v8_js_script_id", ColumnType::v8_js_script_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "is_toplevel", ColumnType::is_toplevel::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "kind", ColumnType::kind::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "line", ColumnType::line::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "column", ColumnType::column::SqlValueType(), false,
        false,
        false,
        false});
    return schema;
  }

  ConstIterator IterateRows() const {
    return ConstIterator(this, CopyOverlays());
  }

  Iterator IterateRows() { return Iterator(this, CopyOverlays()); }

  ConstIterator FilterToIterator(
      const std::vector<Constraint>& cs,
      RowMap::OptimizeFor opt = RowMap::OptimizeFor::kMemory) const {
    return ConstIterator(this, FilterAndApplyToOverlays(cs, opt));
  }

  Iterator FilterToIterator(
      const std::vector<Constraint>& cs,
      RowMap::OptimizeFor opt = RowMap::OptimizeFor::kMemory) {
    return Iterator(this, FilterAndApplyToOverlays(cs, opt));
  }

  void ShrinkToFit() {
    type_.ShrinkToFit();
    name_.ShrinkToFit();
    v8_js_script_id_.ShrinkToFit();
    is_toplevel_.ShrinkToFit();
    kind_.ShrinkToFit();
    line_.ShrinkToFit();
    column_.ShrinkToFit();
  }

  std::optional<ConstRowReference> FindById(Id find_id) const {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(ConstRowReference(this, *row))
               : std::nullopt;
  }

  std::optional<RowReference> FindById(Id find_id) {
    std::optional<uint32_t> row = id().IndexOf(find_id);
    return row ? std::make_optional(RowReference(this, *row)) : std::nullopt;
  }

  IdAndRow Insert(const Row& row) {
    uint32_t row_number = row_count();
    Id id = Id{row_number};
    type_.Append(string_pool_->InternString(row.type()));
    mutable_name()->Append(std::move(row.name));
    mutable_v8_js_script_id()->Append(std::move(row.v8_js_script_id));
    mutable_is_toplevel()->Append(std::move(row.is_toplevel));
    mutable_kind()->Append(std::move(row.kind));
    mutable_line()->Append(std::move(row.line));
    mutable_column()->Append(std::move(row.column));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<V8JsFunctionTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<StringPool::Id>& name() const {
    return static_cast<const ColumnType::name&>(columns_[ColumnIndex::name]);
  }
  const TypedColumn<V8JsScriptTable::Id>& v8_js_script_id() const {
    return static_cast<const ColumnType::v8_js_script_id&>(columns_[ColumnIndex::v8_js_script_id]);
  }
  const TypedColumn<uint32_t>& is_toplevel() const {
    return static_cast<const ColumnType::is_toplevel&>(columns_[ColumnIndex::is_toplevel]);
  }
  const TypedColumn<StringPool::Id>& kind() const {
    return static_cast<const ColumnType::kind&>(columns_[ColumnIndex::kind]);
  }
  const TypedColumn<std::optional<uint32_t>>& line() const {
    return static_cast<const ColumnType::line&>(columns_[ColumnIndex::line]);
  }
  const TypedColumn<std::optional<uint32_t>>& column() const {
    return static_cast<const ColumnType::column&>(columns_[ColumnIndex::column]);
  }

  TypedColumn<StringPool::Id>* mutable_name() {
    return static_cast<ColumnType::name*>(
        &columns_[ColumnIndex::name]);
  }
  TypedColumn<V8JsScriptTable::Id>* mutable_v8_js_script_id() {
    return static_cast<ColumnType::v8_js_script_id*>(
        &columns_[ColumnIndex::v8_js_script_id]);
  }
  TypedColumn<uint32_t>* mutable_is_toplevel() {
    return static_cast<ColumnType::is_toplevel*>(
        &columns_[ColumnIndex::is_toplevel]);
  }
  TypedColumn<StringPool::Id>* mutable_kind() {
    return static_cast<ColumnType::kind*>(
        &columns_[ColumnIndex::kind]);
  }
  TypedColumn<std::optional<uint32_t>>* mutable_line() {
    return static_cast<ColumnType::line*>(
        &columns_[ColumnIndex::line]);
  }
  TypedColumn<std::optional<uint32_t>>* mutable_column() {
    return static_cast<ColumnType::column*>(
        &columns_[ColumnIndex::column]);
  }

 private:
  
  
  ColumnStorage<ColumnType::name::stored_type> name_;
  ColumnStorage<ColumnType::v8_js_script_id::stored_type> v8_js_script_id_;
  ColumnStorage<ColumnType::is_toplevel::stored_type> is_toplevel_;
  ColumnStorage<ColumnType::kind::stored_type> kind_;
  ColumnStorage<ColumnType::line::stored_type> line_;
  ColumnStorage<ColumnType::column::stored_type> column_;
};

}  // namespace tables
}  // namespace trace_processor
}  // namespace perfetto

#endif  // SRC_TRACE_PROCESSOR_TABLES_V8_TABLES_PY_H_
