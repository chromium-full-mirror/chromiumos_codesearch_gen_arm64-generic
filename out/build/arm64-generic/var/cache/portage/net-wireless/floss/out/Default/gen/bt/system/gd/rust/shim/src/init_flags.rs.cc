#include <algorithm>
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <initializer_list>
#include <iterator>
#include <new>
#include <stdexcept>
#include <string>
#include <type_traits>
#include <utility>

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

#ifndef CXXBRIDGE1_PANIC
#define CXXBRIDGE1_PANIC
template <typename Exception>
void panic [[noreturn]] (const char *msg);
#endif // CXXBRIDGE1_PANIC

struct unsafe_bitcopy_t;

namespace {
template <typename T>
class impl;
} // namespace

class Opaque;

template <typename T>
::std::size_t size_of();
template <typename T>
::std::size_t align_of();

#ifndef CXXBRIDGE1_RUST_STRING
#define CXXBRIDGE1_RUST_STRING
class String final {
public:
  String() noexcept;
  String(const String &) noexcept;
  String(String &&) noexcept;
  ~String() noexcept;

  String(const std::string &);
  String(const char *);
  String(const char *, std::size_t);
  String(const char16_t *);
  String(const char16_t *, std::size_t);

  static String lossy(const std::string &) noexcept;
  static String lossy(const char *) noexcept;
  static String lossy(const char *, std::size_t) noexcept;
  static String lossy(const char16_t *) noexcept;
  static String lossy(const char16_t *, std::size_t) noexcept;

  String &operator=(const String &) &noexcept;
  String &operator=(String &&) &noexcept;

  explicit operator std::string() const;

  const char *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  const char *c_str() noexcept;

  std::size_t capacity() const noexcept;
  void reserve(size_t new_cap) noexcept;

  using iterator = char *;
  iterator begin() noexcept;
  iterator end() noexcept;

  using const_iterator = const char *;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  bool operator==(const String &) const noexcept;
  bool operator!=(const String &) const noexcept;
  bool operator<(const String &) const noexcept;
  bool operator<=(const String &) const noexcept;
  bool operator>(const String &) const noexcept;
  bool operator>=(const String &) const noexcept;

  void swap(String &) noexcept;

  String(unsafe_bitcopy_t, const String &) noexcept;

private:
  struct lossy_t;
  String(lossy_t, const char *, std::size_t) noexcept;
  String(lossy_t, const char16_t *, std::size_t) noexcept;
  friend void swap(String &lhs, String &rhs) noexcept { lhs.swap(rhs); }

  std::array<std::uintptr_t, 3> repr;
};
#endif // CXXBRIDGE1_RUST_STRING

#ifndef CXXBRIDGE1_RUST_STR
#define CXXBRIDGE1_RUST_STR
class Str final {
public:
  Str() noexcept;
  Str(const String &) noexcept;
  Str(const std::string &);
  Str(const char *);
  Str(const char *, std::size_t);

  Str &operator=(const Str &) &noexcept = default;

  explicit operator std::string() const;

  const char *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  Str(const Str &) noexcept = default;
  ~Str() noexcept = default;

  using iterator = const char *;
  using const_iterator = const char *;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  bool operator==(const Str &) const noexcept;
  bool operator!=(const Str &) const noexcept;
  bool operator<(const Str &) const noexcept;
  bool operator<=(const Str &) const noexcept;
  bool operator>(const Str &) const noexcept;
  bool operator>=(const Str &) const noexcept;

  void swap(Str &) noexcept;

private:
  class uninit;
  Str(uninit) noexcept;
  friend impl<Str>;

  std::array<std::uintptr_t, 2> repr;
};
#endif // CXXBRIDGE1_RUST_STR

#ifndef CXXBRIDGE1_RUST_SLICE
#define CXXBRIDGE1_RUST_SLICE
namespace detail {
template <bool>
struct copy_assignable_if {};

template <>
struct copy_assignable_if<false> {
  copy_assignable_if() noexcept = default;
  copy_assignable_if(const copy_assignable_if &) noexcept = default;
  copy_assignable_if &operator=(const copy_assignable_if &) &noexcept = delete;
  copy_assignable_if &operator=(copy_assignable_if &&) &noexcept = default;
};
} // namespace detail

template <typename T>
class Slice final
    : private detail::copy_assignable_if<std::is_const<T>::value> {
public:
  using value_type = T;

  Slice() noexcept;
  Slice(T *, std::size_t count) noexcept;

  Slice &operator=(const Slice<T> &) &noexcept = default;
  Slice &operator=(Slice<T> &&) &noexcept = default;

  T *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  T &operator[](std::size_t n) const noexcept;
  T &at(std::size_t n) const;
  T &front() const noexcept;
  T &back() const noexcept;

  Slice(const Slice<T> &) noexcept = default;
  ~Slice() noexcept = default;

  class iterator;
  iterator begin() const noexcept;
  iterator end() const noexcept;

  void swap(Slice &) noexcept;

private:
  class uninit;
  Slice(uninit) noexcept;
  friend impl<Slice>;
  friend void sliceInit(void *, const void *, std::size_t) noexcept;
  friend void *slicePtr(const void *) noexcept;
  friend std::size_t sliceLen(const void *) noexcept;

  std::array<std::uintptr_t, 2> repr;
};

template <typename T>
class Slice<T>::iterator final {
public:
  using iterator_category = std::random_access_iterator_tag;
  using value_type = T;
  using difference_type = std::ptrdiff_t;
  using pointer = typename std::add_pointer<T>::type;
  using reference = typename std::add_lvalue_reference<T>::type;

  reference operator*() const noexcept;
  pointer operator->() const noexcept;
  reference operator[](difference_type) const noexcept;

  iterator &operator++() noexcept;
  iterator operator++(int) noexcept;
  iterator &operator--() noexcept;
  iterator operator--(int) noexcept;

  iterator &operator+=(difference_type) noexcept;
  iterator &operator-=(difference_type) noexcept;
  iterator operator+(difference_type) const noexcept;
  iterator operator-(difference_type) const noexcept;
  difference_type operator-(const iterator &) const noexcept;

  bool operator==(const iterator &) const noexcept;
  bool operator!=(const iterator &) const noexcept;
  bool operator<(const iterator &) const noexcept;
  bool operator<=(const iterator &) const noexcept;
  bool operator>(const iterator &) const noexcept;
  bool operator>=(const iterator &) const noexcept;

private:
  friend class Slice;
  void *pos;
  std::size_t stride;
};

template <typename T>
Slice<T>::Slice() noexcept {
  sliceInit(this, reinterpret_cast<void *>(align_of<T>()), 0);
}

template <typename T>
Slice<T>::Slice(T *s, std::size_t count) noexcept {
  assert(s != nullptr || count == 0);
  sliceInit(this,
            s == nullptr && count == 0
                ? reinterpret_cast<void *>(align_of<T>())
                : const_cast<typename std::remove_const<T>::type *>(s),
            count);
}

template <typename T>
T *Slice<T>::data() const noexcept {
  return reinterpret_cast<T *>(slicePtr(this));
}

template <typename T>
std::size_t Slice<T>::size() const noexcept {
  return sliceLen(this);
}

template <typename T>
std::size_t Slice<T>::length() const noexcept {
  return this->size();
}

template <typename T>
bool Slice<T>::empty() const noexcept {
  return this->size() == 0;
}

template <typename T>
T &Slice<T>::operator[](std::size_t n) const noexcept {
  assert(n < this->size());
  auto ptr = static_cast<char *>(slicePtr(this)) + size_of<T>() * n;
  return *reinterpret_cast<T *>(ptr);
}

template <typename T>
T &Slice<T>::at(std::size_t n) const {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Slice index out of range");
  }
  return (*this)[n];
}

template <typename T>
T &Slice<T>::front() const noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
T &Slice<T>::back() const noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
typename Slice<T>::iterator::reference
Slice<T>::iterator::operator*() const noexcept {
  return *static_cast<T *>(this->pos);
}

template <typename T>
typename Slice<T>::iterator::pointer
Slice<T>::iterator::operator->() const noexcept {
  return static_cast<T *>(this->pos);
}

template <typename T>
typename Slice<T>::iterator::reference Slice<T>::iterator::operator[](
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ptr = static_cast<char *>(this->pos) + this->stride * n;
  return *reinterpret_cast<T *>(ptr);
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator++() noexcept {
  this->pos = static_cast<char *>(this->pos) + this->stride;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator++(int) noexcept {
  auto ret = iterator(*this);
  this->pos = static_cast<char *>(this->pos) + this->stride;
  return ret;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator--() noexcept {
  this->pos = static_cast<char *>(this->pos) - this->stride;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator--(int) noexcept {
  auto ret = iterator(*this);
  this->pos = static_cast<char *>(this->pos) - this->stride;
  return ret;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator+=(
    typename Slice<T>::iterator::difference_type n) noexcept {
  this->pos = static_cast<char *>(this->pos) + this->stride * n;
  return *this;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator-=(
    typename Slice<T>::iterator::difference_type n) noexcept {
  this->pos = static_cast<char *>(this->pos) - this->stride * n;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator+(
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ret = iterator(*this);
  ret.pos = static_cast<char *>(this->pos) + this->stride * n;
  return ret;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator-(
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ret = iterator(*this);
  ret.pos = static_cast<char *>(this->pos) - this->stride * n;
  return ret;
}

template <typename T>
typename Slice<T>::iterator::difference_type
Slice<T>::iterator::operator-(const iterator &other) const noexcept {
  auto diff = std::distance(static_cast<char *>(other.pos),
                            static_cast<char *>(this->pos));
  return diff / static_cast<typename Slice<T>::iterator::difference_type>(this->stride);
}

template <typename T>
bool Slice<T>::iterator::operator==(const iterator &other) const noexcept {
  return this->pos == other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator!=(const iterator &other) const noexcept {
  return this->pos != other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator<(const iterator &other) const noexcept {
  return this->pos < other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator<=(const iterator &other) const noexcept {
  return this->pos <= other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator>(const iterator &other) const noexcept {
  return this->pos > other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator>=(const iterator &other) const noexcept {
  return this->pos >= other.pos;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::begin() const noexcept {
  iterator it;
  it.pos = slicePtr(this);
  it.stride = size_of<T>();
  return it;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::end() const noexcept {
  iterator it = this->begin();
  it.pos = static_cast<char *>(it.pos) + it.stride * this->size();
  return it;
}

template <typename T>
void Slice<T>::swap(Slice &rhs) noexcept {
  std::swap(*this, rhs);
}
#endif // CXXBRIDGE1_RUST_SLICE

#ifndef CXXBRIDGE1_RUST_BITCOPY_T
#define CXXBRIDGE1_RUST_BITCOPY_T
struct unsafe_bitcopy_t final {
  explicit unsafe_bitcopy_t() = default;
};
#endif // CXXBRIDGE1_RUST_BITCOPY_T

#ifndef CXXBRIDGE1_RUST_VEC
#define CXXBRIDGE1_RUST_VEC
template <typename T>
class Vec final {
public:
  using value_type = T;

  Vec() noexcept;
  Vec(std::initializer_list<T>);
  Vec(const Vec &);
  Vec(Vec &&) noexcept;
  ~Vec() noexcept;

  Vec &operator=(Vec &&) &noexcept;
  Vec &operator=(const Vec &) &;

  std::size_t size() const noexcept;
  bool empty() const noexcept;
  const T *data() const noexcept;
  T *data() noexcept;
  std::size_t capacity() const noexcept;

  const T &operator[](std::size_t n) const noexcept;
  const T &at(std::size_t n) const;
  const T &front() const noexcept;
  const T &back() const noexcept;

  T &operator[](std::size_t n) noexcept;
  T &at(std::size_t n);
  T &front() noexcept;
  T &back() noexcept;

  void reserve(std::size_t new_cap);
  void push_back(const T &value);
  void push_back(T &&value);
  template <typename... Args>
  void emplace_back(Args &&...args);
  void truncate(std::size_t len);
  void clear();

  using iterator = typename Slice<T>::iterator;
  iterator begin() noexcept;
  iterator end() noexcept;

  using const_iterator = typename Slice<const T>::iterator;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  void swap(Vec &) noexcept;

  Vec(unsafe_bitcopy_t, const Vec &) noexcept;

private:
  void reserve_total(std::size_t new_cap) noexcept;
  void set_len(std::size_t len) noexcept;
  void drop() noexcept;

  friend void swap(Vec &lhs, Vec &rhs) noexcept { lhs.swap(rhs); }

  std::array<std::uintptr_t, 3> repr;
};

template <typename T>
Vec<T>::Vec(std::initializer_list<T> init) : Vec{} {
  this->reserve_total(init.size());
  std::move(init.begin(), init.end(), std::back_inserter(*this));
}

template <typename T>
Vec<T>::Vec(const Vec &other) : Vec() {
  this->reserve_total(other.size());
  std::copy(other.begin(), other.end(), std::back_inserter(*this));
}

template <typename T>
Vec<T>::Vec(Vec &&other) noexcept : repr(other.repr) {
  new (&other) Vec();
}

template <typename T>
Vec<T>::~Vec() noexcept {
  this->drop();
}

template <typename T>
Vec<T> &Vec<T>::operator=(Vec &&other) &noexcept {
  this->drop();
  this->repr = other.repr;
  new (&other) Vec();
  return *this;
}

template <typename T>
Vec<T> &Vec<T>::operator=(const Vec &other) & {
  if (this != &other) {
    this->drop();
    new (this) Vec(other);
  }
  return *this;
}

template <typename T>
bool Vec<T>::empty() const noexcept {
  return this->size() == 0;
}

template <typename T>
T *Vec<T>::data() noexcept {
  return const_cast<T *>(const_cast<const Vec<T> *>(this)->data());
}

template <typename T>
const T &Vec<T>::operator[](std::size_t n) const noexcept {
  assert(n < this->size());
  auto data = reinterpret_cast<const char *>(this->data());
  return *reinterpret_cast<const T *>(data + n * size_of<T>());
}

template <typename T>
const T &Vec<T>::at(std::size_t n) const {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Vec index out of range");
  }
  return (*this)[n];
}

template <typename T>
const T &Vec<T>::front() const noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
const T &Vec<T>::back() const noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
T &Vec<T>::operator[](std::size_t n) noexcept {
  assert(n < this->size());
  auto data = reinterpret_cast<char *>(this->data());
  return *reinterpret_cast<T *>(data + n * size_of<T>());
}

template <typename T>
T &Vec<T>::at(std::size_t n) {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Vec index out of range");
  }
  return (*this)[n];
}

template <typename T>
T &Vec<T>::front() noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
T &Vec<T>::back() noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
void Vec<T>::reserve(std::size_t new_cap) {
  this->reserve_total(new_cap);
}

template <typename T>
void Vec<T>::push_back(const T &value) {
  this->emplace_back(value);
}

template <typename T>
void Vec<T>::push_back(T &&value) {
  this->emplace_back(std::move(value));
}

template <typename T>
template <typename... Args>
void Vec<T>::emplace_back(Args &&...args) {
  auto size = this->size();
  this->reserve_total(size + 1);
  ::new (reinterpret_cast<T *>(reinterpret_cast<char *>(this->data()) +
                               size * size_of<T>()))
      T(std::forward<Args>(args)...);
  this->set_len(size + 1);
}

template <typename T>
void Vec<T>::clear() {
  this->truncate(0);
}

template <typename T>
typename Vec<T>::iterator Vec<T>::begin() noexcept {
  return Slice<T>(this->data(), this->size()).begin();
}

template <typename T>
typename Vec<T>::iterator Vec<T>::end() noexcept {
  return Slice<T>(this->data(), this->size()).end();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::begin() const noexcept {
  return this->cbegin();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::end() const noexcept {
  return this->cend();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::cbegin() const noexcept {
  return Slice<const T>(this->data(), this->size()).begin();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::cend() const noexcept {
  return Slice<const T>(this->data(), this->size()).end();
}

template <typename T>
void Vec<T>::swap(Vec &rhs) noexcept {
  using std::swap;
  swap(this->repr, rhs.repr);
}

template <typename T>
Vec<T>::Vec(unsafe_bitcopy_t, const Vec &bits) noexcept : repr(bits.repr) {}
#endif // CXXBRIDGE1_RUST_VEC

#ifndef CXXBRIDGE1_IS_COMPLETE
#define CXXBRIDGE1_IS_COMPLETE
namespace detail {
namespace {
template <typename T, typename = std::size_t>
struct is_complete : std::false_type {};
template <typename T>
struct is_complete<T, decltype(sizeof(T))> : std::true_type {};
} // namespace
} // namespace detail
#endif // CXXBRIDGE1_IS_COMPLETE

#ifndef CXXBRIDGE1_LAYOUT
#define CXXBRIDGE1_LAYOUT
class layout {
  template <typename T>
  friend std::size_t size_of();
  template <typename T>
  friend std::size_t align_of();
  template <typename T>
  static typename std::enable_if<std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_size_of() {
    return T::layout::size();
  }
  template <typename T>
  static typename std::enable_if<!std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_size_of() {
    return sizeof(T);
  }
  template <typename T>
  static
      typename std::enable_if<detail::is_complete<T>::value, std::size_t>::type
      size_of() {
    return do_size_of<T>();
  }
  template <typename T>
  static typename std::enable_if<std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_align_of() {
    return T::layout::align();
  }
  template <typename T>
  static typename std::enable_if<!std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_align_of() {
    return alignof(T);
  }
  template <typename T>
  static
      typename std::enable_if<detail::is_complete<T>::value, std::size_t>::type
      align_of() {
    return do_align_of<T>();
  }
};

template <typename T>
std::size_t size_of() {
  return layout::size_of<T>();
}

template <typename T>
std::size_t align_of() {
  return layout::align_of<T>();
}
#endif // CXXBRIDGE1_LAYOUT

namespace detail {
template <typename T, typename = void *>
struct operator_new {
  void *operator()(::std::size_t sz) { return ::operator new(sz); }
};

template <typename T>
struct operator_new<T, decltype(T::operator new(sizeof(T)))> {
  void *operator()(::std::size_t sz) { return T::operator new(sz); }
};
} // namespace detail

template <typename T>
union ManuallyDrop {
  T value;
  ManuallyDrop(T &&value) : value(::std::move(value)) {}
  ~ManuallyDrop() {}
};

template <typename T>
union MaybeUninit {
  T value;
  void *operator new(::std::size_t sz) { return detail::operator_new<T>{}(sz); }
  MaybeUninit() {}
  ~MaybeUninit() {}
};
} // namespace cxxbridge1
} // namespace rust

namespace bluetooth {
  namespace common {
    namespace init_flags {
      struct InitFlagWithValue;
    }
  }
}

namespace bluetooth {
namespace common {
namespace init_flags {
#ifndef CXXBRIDGE1_STRUCT_bluetooth$common$init_flags$InitFlagWithValue
#define CXXBRIDGE1_STRUCT_bluetooth$common$init_flags$InitFlagWithValue
struct InitFlagWithValue final {
  ::rust::Str flag;
  ::rust::String value;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_bluetooth$common$init_flags$InitFlagWithValue

extern "C" {
void bluetooth$common$init_flags$cxxbridge1$load(::rust::Vec<::rust::String> *flags) noexcept;

void bluetooth$common$init_flags$cxxbridge1$set_all_for_testing() noexcept;

void bluetooth$common$init_flags$cxxbridge1$dump(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> *return$) noexcept;

bool bluetooth$common$init_flags$cxxbridge1$always_send_services_if_gatt_disc_done_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$always_use_private_gatt_for_debugging_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$bta_dm_clear_conn_id_on_client_close_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$delay_hidh_cleanup_until_hidh_ready_start_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$btm_dm_flush_discovery_queue_on_search_cancel_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$bta_dm_stop_discovery_on_search_cancel_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$classic_discovery_only_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$clear_hidd_interrupt_cid_on_disconnect_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$device_iot_config_logging_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$dynamic_avrcp_version_enhancement_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$gatt_robust_caching_client_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$gatt_robust_caching_server_is_enabled() noexcept;

::std::int32_t bluetooth$common$init_flags$cxxbridge1$get_default_log_level() noexcept;

::std::int32_t bluetooth$common$init_flags$cxxbridge1$get_hci_adapter() noexcept;

::std::int32_t bluetooth$common$init_flags$cxxbridge1$get_log_level_for_tag(::rust::Str tag) noexcept;

::std::int32_t bluetooth$common$init_flags$cxxbridge1$get_asha_packet_drop_frequency_threshold() noexcept;

::std::int32_t bluetooth$common$init_flags$cxxbridge1$get_asha_phy_update_retry_limit() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$hfp_dynamic_version_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$irk_rotation_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$leaudio_targeted_announcement_reconnection_mode_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$leaudio_enable_health_based_actions_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$pass_phy_update_callback_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$pbap_pse_dynamic_version_upgrade_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$periodic_advertising_adi_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$private_gatt_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$redact_log_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$rust_event_loop_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$sco_codec_select_lc3_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$sco_codec_timeout_clear_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$sdp_serialization_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$sdp_skip_rnr_if_known_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$bluetooth_quality_report_callback_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$set_min_encryption_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$subrating_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$trigger_advertising_callbacks_on_first_resume_after_pause_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$use_unified_connection_manager_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$sdp_return_classic_services_when_le_discovery_fails_is_enabled() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$use_rsi_from_cached_inqiry_results_is_enabled() noexcept;

::std::int32_t bluetooth$common$init_flags$cxxbridge1$get_att_mtu_default() noexcept;

bool bluetooth$common$init_flags$cxxbridge1$encryption_in_busy_state_is_enabled() noexcept;
} // extern "C"

void load(::rust::Vec<::rust::String> flags) noexcept {
  ::rust::ManuallyDrop<::rust::Vec<::rust::String>> flags$(::std::move(flags));
  bluetooth$common$init_flags$cxxbridge1$load(&flags$.value);
}

void set_all_for_testing() noexcept {
  bluetooth$common$init_flags$cxxbridge1$set_all_for_testing();
}

::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> dump() noexcept {
  ::rust::MaybeUninit<::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue>> return$;
  bluetooth$common$init_flags$cxxbridge1$dump(&return$.value);
  return ::std::move(return$.value);
}

bool always_send_services_if_gatt_disc_done_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$always_send_services_if_gatt_disc_done_is_enabled();
}

bool always_use_private_gatt_for_debugging_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$always_use_private_gatt_for_debugging_is_enabled();
}

bool bta_dm_clear_conn_id_on_client_close_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$bta_dm_clear_conn_id_on_client_close_is_enabled();
}

bool delay_hidh_cleanup_until_hidh_ready_start_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$delay_hidh_cleanup_until_hidh_ready_start_is_enabled();
}

bool btm_dm_flush_discovery_queue_on_search_cancel_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$btm_dm_flush_discovery_queue_on_search_cancel_is_enabled();
}

bool bta_dm_stop_discovery_on_search_cancel_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$bta_dm_stop_discovery_on_search_cancel_is_enabled();
}

bool classic_discovery_only_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$classic_discovery_only_is_enabled();
}

bool clear_hidd_interrupt_cid_on_disconnect_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$clear_hidd_interrupt_cid_on_disconnect_is_enabled();
}

bool device_iot_config_logging_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$device_iot_config_logging_is_enabled();
}

bool dynamic_avrcp_version_enhancement_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$dynamic_avrcp_version_enhancement_is_enabled();
}

bool gatt_robust_caching_client_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$gatt_robust_caching_client_is_enabled();
}

bool gatt_robust_caching_server_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$gatt_robust_caching_server_is_enabled();
}

::std::int32_t get_default_log_level() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$get_default_log_level();
}

::std::int32_t get_hci_adapter() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$get_hci_adapter();
}

::std::int32_t get_log_level_for_tag(::rust::Str tag) noexcept {
  return bluetooth$common$init_flags$cxxbridge1$get_log_level_for_tag(tag);
}

::std::int32_t get_asha_packet_drop_frequency_threshold() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$get_asha_packet_drop_frequency_threshold();
}

::std::int32_t get_asha_phy_update_retry_limit() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$get_asha_phy_update_retry_limit();
}

bool hfp_dynamic_version_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$hfp_dynamic_version_is_enabled();
}

bool irk_rotation_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$irk_rotation_is_enabled();
}

bool leaudio_targeted_announcement_reconnection_mode_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$leaudio_targeted_announcement_reconnection_mode_is_enabled();
}

bool leaudio_enable_health_based_actions_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$leaudio_enable_health_based_actions_is_enabled();
}

bool pass_phy_update_callback_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$pass_phy_update_callback_is_enabled();
}

bool pbap_pse_dynamic_version_upgrade_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$pbap_pse_dynamic_version_upgrade_is_enabled();
}

bool periodic_advertising_adi_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$periodic_advertising_adi_is_enabled();
}

bool private_gatt_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$private_gatt_is_enabled();
}

bool redact_log_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$redact_log_is_enabled();
}

bool rust_event_loop_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$rust_event_loop_is_enabled();
}

bool sco_codec_select_lc3_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$sco_codec_select_lc3_is_enabled();
}

bool sco_codec_timeout_clear_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$sco_codec_timeout_clear_is_enabled();
}

bool sdp_serialization_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$sdp_serialization_is_enabled();
}

bool sdp_skip_rnr_if_known_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$sdp_skip_rnr_if_known_is_enabled();
}

bool bluetooth_quality_report_callback_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$bluetooth_quality_report_callback_is_enabled();
}

bool set_min_encryption_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$set_min_encryption_is_enabled();
}

bool subrating_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$subrating_is_enabled();
}

bool trigger_advertising_callbacks_on_first_resume_after_pause_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$trigger_advertising_callbacks_on_first_resume_after_pause_is_enabled();
}

bool use_unified_connection_manager_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$use_unified_connection_manager_is_enabled();
}

bool sdp_return_classic_services_when_le_discovery_fails_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$sdp_return_classic_services_when_le_discovery_fails_is_enabled();
}

bool use_rsi_from_cached_inqiry_results_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$use_rsi_from_cached_inqiry_results_is_enabled();
}

::std::int32_t get_att_mtu_default() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$get_att_mtu_default();
}

bool encryption_in_busy_state_is_enabled() noexcept {
  return bluetooth$common$init_flags$cxxbridge1$encryption_in_busy_state_is_enabled();
}
} // namespace init_flags
} // namespace common
} // namespace bluetooth

extern "C" {
void cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$new(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> const *ptr) noexcept;
void cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$drop(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$len(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$capacity(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> const *ptr) noexcept;
::bluetooth::common::init_flags::InitFlagWithValue const *cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$data(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> const *ptr) noexcept;
void cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$reserve_total(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$set_len(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$truncate(::rust::Vec<::bluetooth::common::init_flags::InitFlagWithValue> *ptr, ::std::size_t len) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
Vec<::bluetooth::common::init_flags::InitFlagWithValue>::Vec() noexcept {
  cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$new(this);
}
template <>
void Vec<::bluetooth::common::init_flags::InitFlagWithValue>::drop() noexcept {
  return cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$drop(this);
}
template <>
::std::size_t Vec<::bluetooth::common::init_flags::InitFlagWithValue>::size() const noexcept {
  return cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$len(this);
}
template <>
::std::size_t Vec<::bluetooth::common::init_flags::InitFlagWithValue>::capacity() const noexcept {
  return cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$capacity(this);
}
template <>
::bluetooth::common::init_flags::InitFlagWithValue const *Vec<::bluetooth::common::init_flags::InitFlagWithValue>::data() const noexcept {
  return cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$data(this);
}
template <>
void Vec<::bluetooth::common::init_flags::InitFlagWithValue>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$reserve_total(this, new_cap);
}
template <>
void Vec<::bluetooth::common::init_flags::InitFlagWithValue>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$set_len(this, len);
}
template <>
void Vec<::bluetooth::common::init_flags::InitFlagWithValue>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$bluetooth$common$init_flags$InitFlagWithValue$truncate(this, len);
}
} // namespace cxxbridge1
} // namespace rust
