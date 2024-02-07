#ifndef SRC_TRACE_PROCESSOR_TABLES_WINSCOPE_TABLES_PY_H_
#define SRC_TRACE_PROCESSOR_TABLES_WINSCOPE_TABLES_PY_H_

#include "src/trace_processor/db/typed_column.h"
#include "src/trace_processor/tables/macros_internal.h"



namespace perfetto {
namespace trace_processor {
namespace tables {

class ProtoLogTable : public macros_internal::MacroTable {
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
    static constexpr uint32_t ts = 2;
    static constexpr uint32_t level = 3;
    static constexpr uint32_t tag = 4;
    static constexpr uint32_t message = 5;
  };
  struct ColumnType {
    using id = IdColumn<ProtoLogTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using ts = TypedColumn<int64_t>;
    using level = TypedColumn<StringPool::Id>;
    using tag = TypedColumn<StringPool::Id>;
    using message = TypedColumn<StringPool::Id>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        StringPool::Id in_level = {},
        StringPool::Id in_tag = {},
        StringPool::Id in_message = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(std::move(in_ts)),
          level(std::move(in_level)),
          tag(std::move(in_tag)),
          message(std::move(in_message)) {
      type_ = "protolog";
    }
    int64_t ts;
    StringPool::Id level;
    StringPool::Id tag;
    StringPool::Id message;

    bool operator==(const ProtoLogTable::Row& other) const {
      return type() == other.type() && ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::level::Equals(level, other.level) &&
       ColumnType::tag::Equals(tag, other.tag) &&
       ColumnType::message::Equals(message, other.message);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = ColumnType::ts::default_flags();
    static constexpr uint32_t level = ColumnType::level::default_flags();
    static constexpr uint32_t tag = ColumnType::tag::default_flags();
    static constexpr uint32_t message = ColumnType::message::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      ProtoLogTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    ProtoLogTable, RowNumber> {
   public:
    ConstRowReference(const ProtoLogTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table_->ts()[row_number_];
    }
    ColumnType::level::type level() const {
      return table_->level()[row_number_];
    }
    ColumnType::tag::type tag() const {
      return table_->tag()[row_number_];
    }
    ColumnType::message::type message() const {
      return table_->message()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const ProtoLogTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_level(
        ColumnType::level::non_optional_type v) {
      return mutable_table()->mutable_level()->Set(row_number_, v);
    }
    void set_tag(
        ColumnType::tag::non_optional_type v) {
      return mutable_table()->mutable_tag()->Set(row_number_, v);
    }
    void set_message(
        ColumnType::message::non_optional_type v) {
      return mutable_table()->mutable_message()->Set(row_number_, v);
    }

   private:
    ProtoLogTable* mutable_table() const {
      return const_cast<ProtoLogTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, ProtoLogTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::ts::type ts() const {
      const auto& col = table_->ts();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::level::type level() const {
      const auto& col = table_->level();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::tag::type tag() const {
      const auto& col = table_->tag();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::message::type message() const {
      const auto& col = table_->message();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const ProtoLogTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class ProtoLogTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, ProtoLogTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_ts(ColumnType::ts::non_optional_type v) {
        auto* col = mutable_table_->mutable_ts();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_level(ColumnType::level::non_optional_type v) {
        auto* col = mutable_table_->mutable_level();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_tag(ColumnType::tag::non_optional_type v) {
        auto* col = mutable_table_->mutable_tag();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_message(ColumnType::message::non_optional_type v) {
        auto* col = mutable_table_->mutable_message();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class ProtoLogTable;

    explicit Iterator(ProtoLogTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    ProtoLogTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit ProtoLogTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        level_(ColumnStorage<ColumnType::level::stored_type>::Create<false>()),
        tag_(ColumnStorage<ColumnType::tag::stored_type>::Create<false>()),
        message_(ColumnStorage<ColumnType::message::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::level::stored_type>(
          ColumnFlag::level),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::tag::stored_type>(
          ColumnFlag::tag),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::message::stored_type>(
          ColumnFlag::message),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("ts", &ts_, ColumnFlag::ts,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("level", &level_, ColumnFlag::level,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("tag", &tag_, ColumnFlag::tag,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("message", &message_, ColumnFlag::message,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~ProtoLogTable() override;

  static const char* Name() { return "protolog"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "level", ColumnType::level::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "tag", ColumnType::tag::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "message", ColumnType::message::SqlValueType(), false,
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
    ts_.ShrinkToFit();
    level_.ShrinkToFit();
    tag_.ShrinkToFit();
    message_.ShrinkToFit();
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
    mutable_ts()->Append(std::move(row.ts));
    mutable_level()->Append(std::move(row.level));
    mutable_tag()->Append(std::move(row.tag));
    mutable_message()->Append(std::move(row.message));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<ProtoLogTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns_[ColumnIndex::ts]);
  }
  const TypedColumn<StringPool::Id>& level() const {
    return static_cast<const ColumnType::level&>(columns_[ColumnIndex::level]);
  }
  const TypedColumn<StringPool::Id>& tag() const {
    return static_cast<const ColumnType::tag&>(columns_[ColumnIndex::tag]);
  }
  const TypedColumn<StringPool::Id>& message() const {
    return static_cast<const ColumnType::message&>(columns_[ColumnIndex::message]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        &columns_[ColumnIndex::ts]);
  }
  TypedColumn<StringPool::Id>* mutable_level() {
    return static_cast<ColumnType::level*>(
        &columns_[ColumnIndex::level]);
  }
  TypedColumn<StringPool::Id>* mutable_tag() {
    return static_cast<ColumnType::tag*>(
        &columns_[ColumnIndex::tag]);
  }
  TypedColumn<StringPool::Id>* mutable_message() {
    return static_cast<ColumnType::message*>(
        &columns_[ColumnIndex::message]);
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::level::stored_type> level_;
  ColumnStorage<ColumnType::tag::stored_type> tag_;
  ColumnStorage<ColumnType::message::stored_type> message_;
};
  

class SurfaceFlingerLayersSnapshotTable : public macros_internal::MacroTable {
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
    static constexpr uint32_t ts = 2;
    static constexpr uint32_t arg_set_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<SurfaceFlingerLayersSnapshotTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<uint32_t>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        uint32_t in_arg_set_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(std::move(in_ts)),
          arg_set_id(std::move(in_arg_set_id)) {
      type_ = "surfaceflinger_layers_snapshot";
    }
    int64_t ts;
    uint32_t arg_set_id;

    bool operator==(const SurfaceFlingerLayersSnapshotTable::Row& other) const {
      return type() == other.type() && ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      SurfaceFlingerLayersSnapshotTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    SurfaceFlingerLayersSnapshotTable, RowNumber> {
   public:
    ConstRowReference(const SurfaceFlingerLayersSnapshotTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table_->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table_->arg_set_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const SurfaceFlingerLayersSnapshotTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }

   private:
    SurfaceFlingerLayersSnapshotTable* mutable_table() const {
      return const_cast<SurfaceFlingerLayersSnapshotTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, SurfaceFlingerLayersSnapshotTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::ts::type ts() const {
      const auto& col = table_->ts();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table_->arg_set_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const SurfaceFlingerLayersSnapshotTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class SurfaceFlingerLayersSnapshotTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, SurfaceFlingerLayersSnapshotTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_ts(ColumnType::ts::non_optional_type v) {
        auto* col = mutable_table_->mutable_ts();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_arg_set_id(ColumnType::arg_set_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_arg_set_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class SurfaceFlingerLayersSnapshotTable;

    explicit Iterator(SurfaceFlingerLayersSnapshotTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    SurfaceFlingerLayersSnapshotTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit SurfaceFlingerLayersSnapshotTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("ts", &ts_, ColumnFlag::ts,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("arg_set_id", &arg_set_id_, ColumnFlag::arg_set_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~SurfaceFlingerLayersSnapshotTable() override;

  static const char* Name() { return "surfaceflinger_layers_snapshot"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
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
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
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
    mutable_ts()->Append(std::move(row.ts));
    mutable_arg_set_id()->Append(std::move(row.arg_set_id));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<SurfaceFlingerLayersSnapshotTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns_[ColumnIndex::ts]);
  }
  const TypedColumn<uint32_t>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns_[ColumnIndex::arg_set_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        &columns_[ColumnIndex::ts]);
  }
  TypedColumn<uint32_t>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        &columns_[ColumnIndex::arg_set_id]);
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
};
  

class SurfaceFlingerLayerTable : public macros_internal::MacroTable {
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
    static constexpr uint32_t snapshot_id = 2;
    static constexpr uint32_t arg_set_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<SurfaceFlingerLayerTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using snapshot_id = TypedColumn<SurfaceFlingerLayersSnapshotTable::Id>;
    using arg_set_id = TypedColumn<uint32_t>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(SurfaceFlingerLayersSnapshotTable::Id in_snapshot_id = {},
        uint32_t in_arg_set_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          snapshot_id(std::move(in_snapshot_id)),
          arg_set_id(std::move(in_arg_set_id)) {
      type_ = "surfaceflinger_layer";
    }
    SurfaceFlingerLayersSnapshotTable::Id snapshot_id;
    uint32_t arg_set_id;

    bool operator==(const SurfaceFlingerLayerTable::Row& other) const {
      return type() == other.type() && ColumnType::snapshot_id::Equals(snapshot_id, other.snapshot_id) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t snapshot_id = ColumnType::snapshot_id::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      SurfaceFlingerLayerTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    SurfaceFlingerLayerTable, RowNumber> {
   public:
    ConstRowReference(const SurfaceFlingerLayerTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::snapshot_id::type snapshot_id() const {
      return table_->snapshot_id()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table_->arg_set_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const SurfaceFlingerLayerTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_snapshot_id(
        ColumnType::snapshot_id::non_optional_type v) {
      return mutable_table()->mutable_snapshot_id()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }

   private:
    SurfaceFlingerLayerTable* mutable_table() const {
      return const_cast<SurfaceFlingerLayerTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, SurfaceFlingerLayerTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::snapshot_id::type snapshot_id() const {
      const auto& col = table_->snapshot_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table_->arg_set_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const SurfaceFlingerLayerTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class SurfaceFlingerLayerTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, SurfaceFlingerLayerTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_snapshot_id(ColumnType::snapshot_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_snapshot_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_arg_set_id(ColumnType::arg_set_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_arg_set_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class SurfaceFlingerLayerTable;

    explicit Iterator(SurfaceFlingerLayerTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    SurfaceFlingerLayerTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit SurfaceFlingerLayerTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        snapshot_id_(ColumnStorage<ColumnType::snapshot_id::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::snapshot_id::stored_type>(
          ColumnFlag::snapshot_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("snapshot_id", &snapshot_id_, ColumnFlag::snapshot_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("arg_set_id", &arg_set_id_, ColumnFlag::arg_set_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~SurfaceFlingerLayerTable() override;

  static const char* Name() { return "surfaceflinger_layer"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "snapshot_id", ColumnType::snapshot_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
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
    snapshot_id_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
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
    mutable_snapshot_id()->Append(std::move(row.snapshot_id));
    mutable_arg_set_id()->Append(std::move(row.arg_set_id));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<SurfaceFlingerLayerTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<SurfaceFlingerLayersSnapshotTable::Id>& snapshot_id() const {
    return static_cast<const ColumnType::snapshot_id&>(columns_[ColumnIndex::snapshot_id]);
  }
  const TypedColumn<uint32_t>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns_[ColumnIndex::arg_set_id]);
  }

  TypedColumn<SurfaceFlingerLayersSnapshotTable::Id>* mutable_snapshot_id() {
    return static_cast<ColumnType::snapshot_id*>(
        &columns_[ColumnIndex::snapshot_id]);
  }
  TypedColumn<uint32_t>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        &columns_[ColumnIndex::arg_set_id]);
  }

 private:
  
  
  ColumnStorage<ColumnType::snapshot_id::stored_type> snapshot_id_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
};
  

class SurfaceFlingerTransactionsTable : public macros_internal::MacroTable {
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
    static constexpr uint32_t ts = 2;
    static constexpr uint32_t arg_set_id = 3;
  };
  struct ColumnType {
    using id = IdColumn<SurfaceFlingerTransactionsTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using ts = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<uint32_t>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        uint32_t in_arg_set_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(std::move(in_ts)),
          arg_set_id(std::move(in_arg_set_id)) {
      type_ = "surfaceflinger_transactions";
    }
    int64_t ts;
    uint32_t arg_set_id;

    bool operator==(const SurfaceFlingerTransactionsTable::Row& other) const {
      return type() == other.type() && ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = ColumnType::ts::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      SurfaceFlingerTransactionsTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    SurfaceFlingerTransactionsTable, RowNumber> {
   public:
    ConstRowReference(const SurfaceFlingerTransactionsTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table_->ts()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table_->arg_set_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const SurfaceFlingerTransactionsTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }

   private:
    SurfaceFlingerTransactionsTable* mutable_table() const {
      return const_cast<SurfaceFlingerTransactionsTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, SurfaceFlingerTransactionsTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::ts::type ts() const {
      const auto& col = table_->ts();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table_->arg_set_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const SurfaceFlingerTransactionsTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class SurfaceFlingerTransactionsTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, SurfaceFlingerTransactionsTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_ts(ColumnType::ts::non_optional_type v) {
        auto* col = mutable_table_->mutable_ts();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_arg_set_id(ColumnType::arg_set_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_arg_set_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class SurfaceFlingerTransactionsTable;

    explicit Iterator(SurfaceFlingerTransactionsTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    SurfaceFlingerTransactionsTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit SurfaceFlingerTransactionsTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("ts", &ts_, ColumnFlag::ts,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("arg_set_id", &arg_set_id_, ColumnFlag::arg_set_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~SurfaceFlingerTransactionsTable() override;

  static const char* Name() { return "surfaceflinger_transactions"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
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
    ts_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
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
    mutable_ts()->Append(std::move(row.ts));
    mutable_arg_set_id()->Append(std::move(row.arg_set_id));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<SurfaceFlingerTransactionsTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns_[ColumnIndex::ts]);
  }
  const TypedColumn<uint32_t>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns_[ColumnIndex::arg_set_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        &columns_[ColumnIndex::ts]);
  }
  TypedColumn<uint32_t>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        &columns_[ColumnIndex::arg_set_id]);
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
};
  

class WindowManagerShellTransitionsTable : public macros_internal::MacroTable {
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
    static constexpr uint32_t ts = 2;
    static constexpr uint32_t transition_id = 3;
    static constexpr uint32_t arg_set_id = 4;
  };
  struct ColumnType {
    using id = IdColumn<WindowManagerShellTransitionsTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using ts = TypedColumn<int64_t>;
    using transition_id = TypedColumn<int64_t>;
    using arg_set_id = TypedColumn<uint32_t>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_ts = {},
        int64_t in_transition_id = {},
        uint32_t in_arg_set_id = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          ts(std::move(in_ts)),
          transition_id(std::move(in_transition_id)),
          arg_set_id(std::move(in_arg_set_id)) {
      type_ = "window_manager_shell_transitions";
    }
    int64_t ts;
    int64_t transition_id;
    uint32_t arg_set_id;

    bool operator==(const WindowManagerShellTransitionsTable::Row& other) const {
      return type() == other.type() && ColumnType::ts::Equals(ts, other.ts) &&
       ColumnType::transition_id::Equals(transition_id, other.transition_id) &&
       ColumnType::arg_set_id::Equals(arg_set_id, other.arg_set_id);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t ts = ColumnType::ts::default_flags();
    static constexpr uint32_t transition_id = ColumnType::transition_id::default_flags();
    static constexpr uint32_t arg_set_id = ColumnType::arg_set_id::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      WindowManagerShellTransitionsTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    WindowManagerShellTransitionsTable, RowNumber> {
   public:
    ConstRowReference(const WindowManagerShellTransitionsTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::ts::type ts() const {
      return table_->ts()[row_number_];
    }
    ColumnType::transition_id::type transition_id() const {
      return table_->transition_id()[row_number_];
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      return table_->arg_set_id()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const WindowManagerShellTransitionsTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_ts(
        ColumnType::ts::non_optional_type v) {
      return mutable_table()->mutable_ts()->Set(row_number_, v);
    }
    void set_transition_id(
        ColumnType::transition_id::non_optional_type v) {
      return mutable_table()->mutable_transition_id()->Set(row_number_, v);
    }
    void set_arg_set_id(
        ColumnType::arg_set_id::non_optional_type v) {
      return mutable_table()->mutable_arg_set_id()->Set(row_number_, v);
    }

   private:
    WindowManagerShellTransitionsTable* mutable_table() const {
      return const_cast<WindowManagerShellTransitionsTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, WindowManagerShellTransitionsTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::ts::type ts() const {
      const auto& col = table_->ts();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::transition_id::type transition_id() const {
      const auto& col = table_->transition_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::arg_set_id::type arg_set_id() const {
      const auto& col = table_->arg_set_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const WindowManagerShellTransitionsTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class WindowManagerShellTransitionsTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, WindowManagerShellTransitionsTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_ts(ColumnType::ts::non_optional_type v) {
        auto* col = mutable_table_->mutable_ts();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_transition_id(ColumnType::transition_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_transition_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_arg_set_id(ColumnType::arg_set_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_arg_set_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class WindowManagerShellTransitionsTable;

    explicit Iterator(WindowManagerShellTransitionsTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    WindowManagerShellTransitionsTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit WindowManagerShellTransitionsTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        ts_(ColumnStorage<ColumnType::ts::stored_type>::Create<false>()),
        transition_id_(ColumnStorage<ColumnType::transition_id::stored_type>::Create<false>()),
        arg_set_id_(ColumnStorage<ColumnType::arg_set_id::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::ts::stored_type>(
          ColumnFlag::ts),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::transition_id::stored_type>(
          ColumnFlag::transition_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::arg_set_id::stored_type>(
          ColumnFlag::arg_set_id),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("ts", &ts_, ColumnFlag::ts,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("transition_id", &transition_id_, ColumnFlag::transition_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("arg_set_id", &arg_set_id_, ColumnFlag::arg_set_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~WindowManagerShellTransitionsTable() override;

  static const char* Name() { return "window_manager_shell_transitions"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "ts", ColumnType::ts::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "transition_id", ColumnType::transition_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "arg_set_id", ColumnType::arg_set_id::SqlValueType(), false,
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
    ts_.ShrinkToFit();
    transition_id_.ShrinkToFit();
    arg_set_id_.ShrinkToFit();
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
    mutable_ts()->Append(std::move(row.ts));
    mutable_transition_id()->Append(std::move(row.transition_id));
    mutable_arg_set_id()->Append(std::move(row.arg_set_id));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<WindowManagerShellTransitionsTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<int64_t>& ts() const {
    return static_cast<const ColumnType::ts&>(columns_[ColumnIndex::ts]);
  }
  const TypedColumn<int64_t>& transition_id() const {
    return static_cast<const ColumnType::transition_id&>(columns_[ColumnIndex::transition_id]);
  }
  const TypedColumn<uint32_t>& arg_set_id() const {
    return static_cast<const ColumnType::arg_set_id&>(columns_[ColumnIndex::arg_set_id]);
  }

  TypedColumn<int64_t>* mutable_ts() {
    return static_cast<ColumnType::ts*>(
        &columns_[ColumnIndex::ts]);
  }
  TypedColumn<int64_t>* mutable_transition_id() {
    return static_cast<ColumnType::transition_id*>(
        &columns_[ColumnIndex::transition_id]);
  }
  TypedColumn<uint32_t>* mutable_arg_set_id() {
    return static_cast<ColumnType::arg_set_id*>(
        &columns_[ColumnIndex::arg_set_id]);
  }

 private:
  
  
  ColumnStorage<ColumnType::ts::stored_type> ts_;
  ColumnStorage<ColumnType::transition_id::stored_type> transition_id_;
  ColumnStorage<ColumnType::arg_set_id::stored_type> arg_set_id_;
};
  

class WindowManagerShellTransitionHandlersTable : public macros_internal::MacroTable {
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
    static constexpr uint32_t handler_id = 2;
    static constexpr uint32_t handler_name = 3;
  };
  struct ColumnType {
    using id = IdColumn<WindowManagerShellTransitionHandlersTable::Id>;
    using type = TypedColumn<StringPool::Id>;
    using handler_id = TypedColumn<int64_t>;
    using handler_name = TypedColumn<StringPool::Id>;
  };
  struct Row : public macros_internal::RootParentTable::Row {
    Row(int64_t in_handler_id = {},
        StringPool::Id in_handler_name = {},
        std::nullptr_t = nullptr)
        : macros_internal::RootParentTable::Row(),
          handler_id(std::move(in_handler_id)),
          handler_name(std::move(in_handler_name)) {
      type_ = "window_manager_shell_transition_handlers";
    }
    int64_t handler_id;
    StringPool::Id handler_name;

    bool operator==(const WindowManagerShellTransitionHandlersTable::Row& other) const {
      return type() == other.type() && ColumnType::handler_id::Equals(handler_id, other.handler_id) &&
       ColumnType::handler_name::Equals(handler_name, other.handler_name);
    }
  };
  struct ColumnFlag {
    static constexpr uint32_t handler_id = ColumnType::handler_id::default_flags();
    static constexpr uint32_t handler_name = ColumnType::handler_name::default_flags();
  };

  class RowNumber;
  class ConstRowReference;
  class RowReference;

  class RowNumber : public macros_internal::AbstractRowNumber<
      WindowManagerShellTransitionHandlersTable, ConstRowReference, RowReference> {
   public:
    explicit RowNumber(uint32_t row_number)
        : AbstractRowNumber(row_number) {}
  };
  static_assert(std::is_trivially_destructible<RowNumber>::value,
                "Inheritance used without trivial destruction");

  class ConstRowReference : public macros_internal::AbstractConstRowReference<
    WindowManagerShellTransitionHandlersTable, RowNumber> {
   public:
    ConstRowReference(const WindowManagerShellTransitionHandlersTable* table, uint32_t row_number)
        : AbstractConstRowReference(table, row_number) {}

    ColumnType::id::type id() const {
      return table_->id()[row_number_];
    }
    ColumnType::type::type type() const {
      return table_->type()[row_number_];
    }
    ColumnType::handler_id::type handler_id() const {
      return table_->handler_id()[row_number_];
    }
    ColumnType::handler_name::type handler_name() const {
      return table_->handler_name()[row_number_];
    }
  };
  static_assert(std::is_trivially_destructible<ConstRowReference>::value,
                "Inheritance used without trivial destruction");
  class RowReference : public ConstRowReference {
   public:
    RowReference(const WindowManagerShellTransitionHandlersTable* table, uint32_t row_number)
        : ConstRowReference(table, row_number) {}

    void set_handler_id(
        ColumnType::handler_id::non_optional_type v) {
      return mutable_table()->mutable_handler_id()->Set(row_number_, v);
    }
    void set_handler_name(
        ColumnType::handler_name::non_optional_type v) {
      return mutable_table()->mutable_handler_name()->Set(row_number_, v);
    }

   private:
    WindowManagerShellTransitionHandlersTable* mutable_table() const {
      return const_cast<WindowManagerShellTransitionHandlersTable*>(table_);
    }
  };
  static_assert(std::is_trivially_destructible<RowReference>::value,
                "Inheritance used without trivial destruction");

  class ConstIterator;
  class ConstIterator : public macros_internal::AbstractConstIterator<
    ConstIterator, WindowManagerShellTransitionHandlersTable, RowNumber, ConstRowReference> {
   public:
    ColumnType::id::type id() const {
      const auto& col = table_->id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::type::type type() const {
      const auto& col = table_->type();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::handler_id::type handler_id() const {
      const auto& col = table_->handler_id();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }
    ColumnType::handler_name::type handler_name() const {
      const auto& col = table_->handler_name();
      return col.GetAtIdx(its_[col.overlay_index()].index());
    }

   protected:
    explicit ConstIterator(const WindowManagerShellTransitionHandlersTable* table,
                           std::vector<ColumnStorageOverlay> overlays)
        : AbstractConstIterator(table, std::move(overlays)) {}

    uint32_t CurrentRowNumber() const {
      return its_.back().index();
    }

   private:
    friend class WindowManagerShellTransitionHandlersTable;
    friend class macros_internal::AbstractConstIterator<
      ConstIterator, WindowManagerShellTransitionHandlersTable, RowNumber, ConstRowReference>;
  };
  class Iterator : public ConstIterator {
    public:
    void set_handler_id(ColumnType::handler_id::non_optional_type v) {
        auto* col = mutable_table_->mutable_handler_id();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }
      void set_handler_name(ColumnType::handler_name::non_optional_type v) {
        auto* col = mutable_table_->mutable_handler_name();
        col->SetAtIdx(its_[col->overlay_index()].index(), v);
      }

    RowReference row_reference() const {
      return RowReference(mutable_table_, CurrentRowNumber());
    }

    private:
    friend class WindowManagerShellTransitionHandlersTable;

    explicit Iterator(WindowManagerShellTransitionHandlersTable* table,
                      std::vector<ColumnStorageOverlay> overlays)
        : ConstIterator(table, std::move(overlays)),
          mutable_table_(table) {}

    WindowManagerShellTransitionHandlersTable* mutable_table_ = nullptr;
  };

  struct IdAndRow {
    Id id;
    uint32_t row;
    RowReference row_reference;
    RowNumber row_number;
  };

  explicit WindowManagerShellTransitionHandlersTable(StringPool* pool)
      : macros_internal::MacroTable(pool, nullptr),
        handler_id_(ColumnStorage<ColumnType::handler_id::stored_type>::Create<false>()),
        handler_name_(ColumnStorage<ColumnType::handler_name::stored_type>::Create<false>()) {
    static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::handler_id::stored_type>(
          ColumnFlag::handler_id),
        "Column type and flag combination is not valid");
      static_assert(
        ColumnLegacy::IsFlagsAndTypeValid<ColumnType::handler_name::stored_type>(
          ColumnFlag::handler_name),
        "Column type and flag combination is not valid");
    uint32_t olay_idx = static_cast<uint32_t>(overlays_.size()) - 1;
    columns_.emplace_back("handler_id", &handler_id_, ColumnFlag::handler_id,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
    columns_.emplace_back("handler_name", &handler_name_, ColumnFlag::handler_name,
                          this, static_cast<uint32_t>(columns_.size()),
                          olay_idx);
  }
  ~WindowManagerShellTransitionHandlersTable() override;

  static const char* Name() { return "window_manager_shell_transition_handlers"; }

  static Table::Schema ComputeStaticSchema() {
    Table::Schema schema;
    schema.columns.emplace_back(Table::Schema::Column{
        "id", SqlValue::Type::kLong, true, true, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "type", SqlValue::Type::kString, false, false, false, false});
    schema.columns.emplace_back(Table::Schema::Column{
        "handler_id", ColumnType::handler_id::SqlValueType(), false,
        false,
        false,
        false});
    schema.columns.emplace_back(Table::Schema::Column{
        "handler_name", ColumnType::handler_name::SqlValueType(), false,
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
    handler_id_.ShrinkToFit();
    handler_name_.ShrinkToFit();
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
    mutable_handler_id()->Append(std::move(row.handler_id));
    mutable_handler_name()->Append(std::move(row.handler_name));
    UpdateSelfOverlayAfterInsert();
    return IdAndRow{std::move(id), row_number, RowReference(this, row_number),
                     RowNumber(row_number)};
  }

  

  const IdColumn<WindowManagerShellTransitionHandlersTable::Id>& id() const {
    return static_cast<const ColumnType::id&>(columns_[ColumnIndex::id]);
  }
  const TypedColumn<StringPool::Id>& type() const {
    return static_cast<const ColumnType::type&>(columns_[ColumnIndex::type]);
  }
  const TypedColumn<int64_t>& handler_id() const {
    return static_cast<const ColumnType::handler_id&>(columns_[ColumnIndex::handler_id]);
  }
  const TypedColumn<StringPool::Id>& handler_name() const {
    return static_cast<const ColumnType::handler_name&>(columns_[ColumnIndex::handler_name]);
  }

  TypedColumn<int64_t>* mutable_handler_id() {
    return static_cast<ColumnType::handler_id*>(
        &columns_[ColumnIndex::handler_id]);
  }
  TypedColumn<StringPool::Id>* mutable_handler_name() {
    return static_cast<ColumnType::handler_name*>(
        &columns_[ColumnIndex::handler_name]);
  }

 private:
  
  
  ColumnStorage<ColumnType::handler_id::stored_type> handler_id_;
  ColumnStorage<ColumnType::handler_name::stored_type> handler_name_;
};

}  // namespace tables
}  // namespace trace_processor
}  // namespace perfetto

#endif  // SRC_TRACE_PROCESSOR_TABLES_WINSCOPE_TABLES_PY_H_
