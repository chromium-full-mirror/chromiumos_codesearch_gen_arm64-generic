#include "gd/rust/topshim/common/type_alias.h"
#include "hfp/hfp_shim.h"
#include <algorithm>
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <initializer_list>
#include <iterator>
#include <memory>
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

#ifndef CXXBRIDGE1_RELOCATABLE
#define CXXBRIDGE1_RELOCATABLE
namespace detail {
template <typename... Ts>
struct make_void {
  using type = void;
};

template <typename... Ts>
using void_t = typename make_void<Ts...>::type;

template <typename Void, template <typename...> class, typename...>
struct detect : std::false_type {};
template <template <typename...> class T, typename... A>
struct detect<void_t<T<A...>>, T, A...> : std::true_type {};

template <template <typename...> class T, typename... A>
using is_detected = detect<void, T, A...>;

template <typename T>
using detect_IsRelocatable = typename T::IsRelocatable;

template <typename T>
struct get_IsRelocatable
    : std::is_same<typename T::IsRelocatable, std::true_type> {};
} // namespace detail

template <typename T>
struct IsRelocatable
    : std::conditional<
          detail::is_detected<detail::detect_IsRelocatable, T>::value,
          detail::get_IsRelocatable<T>,
          std::integral_constant<
              bool, std::is_trivially_move_constructible<T>::value &&
                        std::is_trivially_destructible<T>::value>>::type {};
#endif // CXXBRIDGE1_RELOCATABLE

template <typename T>
union ManuallyDrop {
  T value;
  ManuallyDrop(T &&value) : value(::std::move(value)) {}
  ~ManuallyDrop() {}
};

namespace {
template <bool> struct deleter_if {
  template <typename T> void operator()(T *) {}
};

template <> struct deleter_if<true> {
  template <typename T> void operator()(T *ptr) { ptr->~T(); }
};
} // namespace
} // namespace cxxbridge1
} // namespace rust

namespace bluetooth {
  namespace topshim {
    namespace rust {
      struct TelephonyDeviceStatus;
      enum class CallState : ::std::uint8_t;
      enum class CallSource : ::std::uint8_t;
      struct CallInfo;
      struct PhoneState;
      enum class CallHoldCommand : ::std::uint8_t;
      using HfpIntf = ::bluetooth::topshim::rust::HfpIntf;
    }
  }
}

namespace bluetooth {
namespace topshim {
namespace rust {
#ifndef CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$TelephonyDeviceStatus
#define CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$TelephonyDeviceStatus
struct TelephonyDeviceStatus final {
  bool network_available;
  bool roaming;
  ::std::int32_t signal_strength;
  ::std::int32_t battery_level;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$TelephonyDeviceStatus

#ifndef CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallState
#define CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallState
enum class CallState : ::std::uint8_t {
  Idle = 0,
  Incoming = 1,
  Dialing = 2,
  Alerting = 3,
  Active = 4,
  Held = 5,
};
#endif // CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallState

#ifndef CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallSource
#define CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallSource
enum class CallSource : ::std::uint8_t {
  CRAS = 0,
  HID = 1,
};
#endif // CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallSource

#ifndef CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$CallInfo
#define CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$CallInfo
struct CallInfo final {
  ::std::int32_t index;
  bool dir_incoming;
  ::bluetooth::topshim::rust::CallSource source;
  ::bluetooth::topshim::rust::CallState state;
  ::rust::String number;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$CallInfo

#ifndef CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$PhoneState
#define CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$PhoneState
struct PhoneState final {
  ::std::int32_t num_active;
  ::std::int32_t num_held;
  ::bluetooth::topshim::rust::CallState state;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_bluetooth$topshim$rust$PhoneState

#ifndef CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallHoldCommand
#define CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallHoldCommand
enum class CallHoldCommand : ::std::uint8_t {
  ReleaseHeld = 0,
  ReleaseActiveAcceptHeld = 1,
  HoldActiveAcceptHeld = 2,
  AddHeldToConf = 3,
};
#endif // CXXBRIDGE1_ENUM_bluetooth$topshim$rust$CallHoldCommand
} // namespace rust
} // namespace topshim
} // namespace bluetooth

static_assert(
    ::rust::IsRelocatable<::bluetooth::topshim::rust::RawAddress>::value,
    "type bluetooth::topshim::rust::RawAddress should be trivially move constructible and trivially destructible in C++ to be used as an argument of `interop_insert_call_when_sco_start`, `connect`, `connect_audio` in Rust");

namespace bluetooth {
namespace topshim {
namespace rust {
extern "C" {
::bluetooth::topshim::rust::HfpIntf *bluetooth$topshim$rust$cxxbridge1$GetHfpProfile(::std::uint8_t const *btif) noexcept {
  ::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf> (*GetHfpProfile$)(::std::uint8_t const *) = ::bluetooth::topshim::rust::GetHfpProfile;
  return GetHfpProfile$(btif).release();
}

bool bluetooth$topshim$rust$cxxbridge1$interop_insert_call_when_sco_start(::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  bool (*interop_insert_call_when_sco_start$)(::bluetooth::topshim::rust::RawAddress) = ::bluetooth::topshim::rust::interop_insert_call_when_sco_start;
  return interop_insert_call_when_sco_start$(::std::move(*bt_addr));
}

::std::int32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$init(::bluetooth::topshim::rust::HfpIntf &self) noexcept {
  ::std::int32_t (::bluetooth::topshim::rust::HfpIntf::*init$)() = &::bluetooth::topshim::rust::HfpIntf::init;
  return (self.*init$)();
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$connect(::bluetooth::topshim::rust::HfpIntf &self, ::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::HfpIntf::*connect$)(::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::connect;
  return (self.*connect$)(::std::move(*bt_addr));
}

::std::int32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$connect_audio(::bluetooth::topshim::rust::HfpIntf &self, ::bluetooth::topshim::rust::RawAddress *bt_addr, bool sco_offload, ::std::int32_t disabled_codecs) noexcept {
  ::std::int32_t (::bluetooth::topshim::rust::HfpIntf::*connect_audio$)(::bluetooth::topshim::rust::RawAddress, bool, ::std::int32_t) = &::bluetooth::topshim::rust::HfpIntf::connect_audio;
  return (self.*connect_audio$)(::std::move(*bt_addr), sco_offload, disabled_codecs);
}

::std::int32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$set_active_device(::bluetooth::topshim::rust::HfpIntf &self, ::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  ::std::int32_t (::bluetooth::topshim::rust::HfpIntf::*set_active_device$)(::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::set_active_device;
  return (self.*set_active_device$)(::std::move(*bt_addr));
}

::std::int32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$set_volume(::bluetooth::topshim::rust::HfpIntf &self, ::std::int8_t volume, ::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  ::std::int32_t (::bluetooth::topshim::rust::HfpIntf::*set_volume$)(::std::int8_t, ::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::set_volume;
  return (self.*set_volume$)(volume, ::std::move(*bt_addr));
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$set_mic_volume(::bluetooth::topshim::rust::HfpIntf &self, ::std::int8_t volume, ::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::HfpIntf::*set_mic_volume$)(::std::int8_t, ::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::set_mic_volume;
  return (self.*set_mic_volume$)(volume, ::std::move(*bt_addr));
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$disconnect(::bluetooth::topshim::rust::HfpIntf &self, ::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::HfpIntf::*disconnect$)(::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::disconnect;
  return (self.*disconnect$)(::std::move(*bt_addr));
}

::std::int32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$disconnect_audio(::bluetooth::topshim::rust::HfpIntf &self, ::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  ::std::int32_t (::bluetooth::topshim::rust::HfpIntf::*disconnect_audio$)(::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::disconnect_audio;
  return (self.*disconnect_audio$)(::std::move(*bt_addr));
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$device_status_notification(::bluetooth::topshim::rust::HfpIntf &self, ::bluetooth::topshim::rust::TelephonyDeviceStatus status, ::bluetooth::topshim::rust::RawAddress *addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::HfpIntf::*device_status_notification$)(::bluetooth::topshim::rust::TelephonyDeviceStatus, ::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::device_status_notification;
  return (self.*device_status_notification$)(status, ::std::move(*addr));
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$indicator_query_response(::bluetooth::topshim::rust::HfpIntf &self, ::bluetooth::topshim::rust::TelephonyDeviceStatus device_status, ::bluetooth::topshim::rust::PhoneState phone_state, ::bluetooth::topshim::rust::RawAddress *addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::HfpIntf::*indicator_query_response$)(::bluetooth::topshim::rust::TelephonyDeviceStatus, ::bluetooth::topshim::rust::PhoneState, ::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::indicator_query_response;
  return (self.*indicator_query_response$)(device_status, phone_state, ::std::move(*addr));
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$current_calls_query_response(::bluetooth::topshim::rust::HfpIntf &self, ::rust::Vec<::bluetooth::topshim::rust::CallInfo> const &call_list, ::bluetooth::topshim::rust::RawAddress *addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::HfpIntf::*current_calls_query_response$)(::rust::Vec<::bluetooth::topshim::rust::CallInfo> const &, ::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::current_calls_query_response;
  return (self.*current_calls_query_response$)(call_list, ::std::move(*addr));
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$phone_state_change(::bluetooth::topshim::rust::HfpIntf &self, ::bluetooth::topshim::rust::PhoneState phone_state, ::rust::String const &number, ::bluetooth::topshim::rust::RawAddress *addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::HfpIntf::*phone_state_change$)(::bluetooth::topshim::rust::PhoneState, ::rust::String const &, ::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::phone_state_change;
  return (self.*phone_state_change$)(phone_state, number, ::std::move(*addr));
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$HfpIntf$simple_at_response(::bluetooth::topshim::rust::HfpIntf &self, bool ok, ::bluetooth::topshim::rust::RawAddress *addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::HfpIntf::*simple_at_response$)(bool, ::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::HfpIntf::simple_at_response;
  return (self.*simple_at_response$)(ok, ::std::move(*addr));
}

void bluetooth$topshim$rust$cxxbridge1$HfpIntf$debug_dump(::bluetooth::topshim::rust::HfpIntf &self) noexcept {
  void (::bluetooth::topshim::rust::HfpIntf::*debug_dump$)() = &::bluetooth::topshim::rust::HfpIntf::debug_dump;
  (self.*debug_dump$)();
}

void bluetooth$topshim$rust$cxxbridge1$HfpIntf$cleanup(::bluetooth::topshim::rust::HfpIntf &self) noexcept {
  void (::bluetooth::topshim::rust::HfpIntf::*cleanup$)() = &::bluetooth::topshim::rust::HfpIntf::cleanup;
  (self.*cleanup$)();
}

void bluetooth$topshim$rust$cxxbridge1$hfp_connection_state_callback(::std::uint32_t state, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_audio_state_callback(::std::uint32_t state, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_volume_update_callback(::std::uint8_t volume, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_mic_volume_update_callback(::std::uint8_t volume, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_vendor_specific_at_command_callback(::rust::String *at_string, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_battery_level_update_callback(::std::uint8_t battery_level, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_wbs_caps_update_callback(bool wbs_supported, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_swb_caps_update_callback(bool swb_supported, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_indicator_query_callback(::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_current_calls_query_callback(::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_answer_call_callback(::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_hangup_call_callback(::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_dial_call_callback(::rust::String *number, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_call_hold_callback(::bluetooth::topshim::rust::CallHoldCommand chld, ::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$hfp_debug_dump_callback(bool active, ::std::uint16_t codec_id, ::std::int32_t total_num_decoded_frames, double pkt_loss_ratio, ::std::uint64_t begin_ts, ::std::uint64_t end_ts, ::rust::String *pkt_status_in_hex, ::rust::String *pkt_status_in_binary) noexcept;
} // extern "C"

void hfp_connection_state_callback(::std::uint32_t state, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_connection_state_callback(state, &addr$.value);
}

void hfp_audio_state_callback(::std::uint32_t state, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_audio_state_callback(state, &addr$.value);
}

void hfp_volume_update_callback(::std::uint8_t volume, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_volume_update_callback(volume, &addr$.value);
}

void hfp_mic_volume_update_callback(::std::uint8_t volume, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_mic_volume_update_callback(volume, &addr$.value);
}

void hfp_vendor_specific_at_command_callback(::rust::String at_string, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_vendor_specific_at_command_callback(&at_string, &addr$.value);
}

void hfp_battery_level_update_callback(::std::uint8_t battery_level, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_battery_level_update_callback(battery_level, &addr$.value);
}

void hfp_wbs_caps_update_callback(bool wbs_supported, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_wbs_caps_update_callback(wbs_supported, &addr$.value);
}

void hfp_swb_caps_update_callback(bool swb_supported, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_swb_caps_update_callback(swb_supported, &addr$.value);
}

void hfp_indicator_query_callback(::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_indicator_query_callback(&addr$.value);
}

void hfp_current_calls_query_callback(::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_current_calls_query_callback(&addr$.value);
}

void hfp_answer_call_callback(::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_answer_call_callback(&addr$.value);
}

void hfp_hangup_call_callback(::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_hangup_call_callback(&addr$.value);
}

void hfp_dial_call_callback(::rust::String number, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_dial_call_callback(&number, &addr$.value);
}

void hfp_call_hold_callback(::bluetooth::topshim::rust::CallHoldCommand chld, ::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$hfp_call_hold_callback(chld, &addr$.value);
}

void hfp_debug_dump_callback(bool active, ::std::uint16_t codec_id, ::std::int32_t total_num_decoded_frames, double pkt_loss_ratio, ::std::uint64_t begin_ts, ::std::uint64_t end_ts, ::rust::String pkt_status_in_hex, ::rust::String pkt_status_in_binary) noexcept {
  bluetooth$topshim$rust$cxxbridge1$hfp_debug_dump_callback(active, codec_id, total_num_decoded_frames, pkt_loss_ratio, begin_ts, end_ts, &pkt_status_in_hex, &pkt_status_in_binary);
}
} // namespace rust
} // namespace topshim
} // namespace bluetooth

extern "C" {
static_assert(::rust::detail::is_complete<::bluetooth::topshim::rust::HfpIntf>::value, "definition of HfpIntf is required");
static_assert(sizeof(::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf>) == alignof(void *), "");
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$HfpIntf$null(::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf>();
}
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$HfpIntf$raw(::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf> *ptr, ::bluetooth::topshim::rust::HfpIntf *raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf>(raw);
}
::bluetooth::topshim::rust::HfpIntf const *cxxbridge1$unique_ptr$bluetooth$topshim$rust$HfpIntf$get(::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf> const &ptr) noexcept {
  return ptr.get();
}
::bluetooth::topshim::rust::HfpIntf *cxxbridge1$unique_ptr$bluetooth$topshim$rust$HfpIntf$release(::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$HfpIntf$drop(::std::unique_ptr<::bluetooth::topshim::rust::HfpIntf> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::bluetooth::topshim::rust::HfpIntf>::value>{}(ptr);
}

void cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$new(::rust::Vec<::bluetooth::topshim::rust::CallInfo> const *ptr) noexcept;
void cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$drop(::rust::Vec<::bluetooth::topshim::rust::CallInfo> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$len(::rust::Vec<::bluetooth::topshim::rust::CallInfo> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$capacity(::rust::Vec<::bluetooth::topshim::rust::CallInfo> const *ptr) noexcept;
::bluetooth::topshim::rust::CallInfo const *cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$data(::rust::Vec<::bluetooth::topshim::rust::CallInfo> const *ptr) noexcept;
void cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$reserve_total(::rust::Vec<::bluetooth::topshim::rust::CallInfo> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$set_len(::rust::Vec<::bluetooth::topshim::rust::CallInfo> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$truncate(::rust::Vec<::bluetooth::topshim::rust::CallInfo> *ptr, ::std::size_t len) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
Vec<::bluetooth::topshim::rust::CallInfo>::Vec() noexcept {
  cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$new(this);
}
template <>
void Vec<::bluetooth::topshim::rust::CallInfo>::drop() noexcept {
  return cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$drop(this);
}
template <>
::std::size_t Vec<::bluetooth::topshim::rust::CallInfo>::size() const noexcept {
  return cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$len(this);
}
template <>
::std::size_t Vec<::bluetooth::topshim::rust::CallInfo>::capacity() const noexcept {
  return cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$capacity(this);
}
template <>
::bluetooth::topshim::rust::CallInfo const *Vec<::bluetooth::topshim::rust::CallInfo>::data() const noexcept {
  return cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$data(this);
}
template <>
void Vec<::bluetooth::topshim::rust::CallInfo>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$reserve_total(this, new_cap);
}
template <>
void Vec<::bluetooth::topshim::rust::CallInfo>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$set_len(this, len);
}
template <>
void Vec<::bluetooth::topshim::rust::CallInfo>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$bluetooth$topshim$rust$CallInfo$truncate(this, len);
}
} // namespace cxxbridge1
} // namespace rust
