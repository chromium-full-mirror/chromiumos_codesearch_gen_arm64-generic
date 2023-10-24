#include "gd/rust/topshim/common/type_alias.h"
#include "btav/btav_shim.h"
#include "btav_sink/btav_sink_shim.h"
#include <array>
#include <cstddef>
#include <cstdint>
#include <memory>
#include <new>
#include <string>
#include <type_traits>
#include <utility>

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

struct unsafe_bitcopy_t;

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
      using AvrcpIntf = ::bluetooth::topshim::rust::AvrcpIntf;
    }
  }
}

static_assert(
    ::rust::IsRelocatable<::bluetooth::topshim::rust::RawAddress>::value,
    "type bluetooth::topshim::rust::RawAddress should be trivially move constructible and trivially destructible in C++ to be used as an argument of `connect`, `disconnect`, `avrcp_device_connected` in Rust");

namespace bluetooth {
namespace topshim {
namespace rust {
extern "C" {
::bluetooth::topshim::rust::AvrcpIntf *bluetooth$topshim$rust$cxxbridge1$GetAvrcpProfile(::std::uint8_t const *btif) noexcept {
  ::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf> (*GetAvrcpProfile$)(::std::uint8_t const *) = ::bluetooth::topshim::rust::GetAvrcpProfile;
  return GetAvrcpProfile$(btif).release();
}

void bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$init(::bluetooth::topshim::rust::AvrcpIntf &self) noexcept {
  void (::bluetooth::topshim::rust::AvrcpIntf::*init$)() = &::bluetooth::topshim::rust::AvrcpIntf::init;
  (self.*init$)();
}

void bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$cleanup(::bluetooth::topshim::rust::AvrcpIntf &self) noexcept {
  void (::bluetooth::topshim::rust::AvrcpIntf::*cleanup$)() = &::bluetooth::topshim::rust::AvrcpIntf::cleanup;
  (self.*cleanup$)();
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$connect(::bluetooth::topshim::rust::AvrcpIntf &self, ::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::AvrcpIntf::*connect$)(::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::AvrcpIntf::connect;
  return (self.*connect$)(::std::move(*bt_addr));
}

::std::uint32_t bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$disconnect(::bluetooth::topshim::rust::AvrcpIntf &self, ::bluetooth::topshim::rust::RawAddress *bt_addr) noexcept {
  ::std::uint32_t (::bluetooth::topshim::rust::AvrcpIntf::*disconnect$)(::bluetooth::topshim::rust::RawAddress) = &::bluetooth::topshim::rust::AvrcpIntf::disconnect;
  return (self.*disconnect$)(::std::move(*bt_addr));
}

void bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$set_volume(::bluetooth::topshim::rust::AvrcpIntf &self, ::std::int8_t volume) noexcept {
  void (::bluetooth::topshim::rust::AvrcpIntf::*set_volume$)(::std::int8_t) = &::bluetooth::topshim::rust::AvrcpIntf::set_volume;
  (self.*set_volume$)(volume);
}

void bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$set_playback_status(::bluetooth::topshim::rust::AvrcpIntf &self, ::rust::String const &status) noexcept {
  void (::bluetooth::topshim::rust::AvrcpIntf::*set_playback_status$)(::rust::String const &) = &::bluetooth::topshim::rust::AvrcpIntf::set_playback_status;
  (self.*set_playback_status$)(status);
}

void bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$set_position(::bluetooth::topshim::rust::AvrcpIntf &self, ::std::int64_t position_us) noexcept {
  void (::bluetooth::topshim::rust::AvrcpIntf::*set_position$)(::std::int64_t) = &::bluetooth::topshim::rust::AvrcpIntf::set_position;
  (self.*set_position$)(position_us);
}

void bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$set_metadata(::bluetooth::topshim::rust::AvrcpIntf &self, ::rust::String const &title, ::rust::String const &artist, ::rust::String const &album, ::std::int64_t length_us) noexcept {
  void (::bluetooth::topshim::rust::AvrcpIntf::*set_metadata$)(::rust::String const &, ::rust::String const &, ::rust::String const &, ::std::int64_t) = &::bluetooth::topshim::rust::AvrcpIntf::set_metadata;
  (self.*set_metadata$)(title, artist, album, length_us);
}

::std::uint16_t bluetooth$topshim$rust$cxxbridge1$AvrcpIntf$add_player(::bluetooth::topshim::rust::AvrcpIntf &self, ::rust::String const &name, bool browsing_supported) noexcept {
  ::std::uint16_t (::bluetooth::topshim::rust::AvrcpIntf::*add_player$)(::rust::String const &, bool) = &::bluetooth::topshim::rust::AvrcpIntf::add_player;
  return (self.*add_player$)(name, browsing_supported);
}

void bluetooth$topshim$rust$cxxbridge1$avrcp_device_connected(::bluetooth::topshim::rust::RawAddress *addr, bool absolute_volume_enabled) noexcept;

void bluetooth$topshim$rust$cxxbridge1$avrcp_device_disconnected(::bluetooth::topshim::rust::RawAddress *addr) noexcept;

void bluetooth$topshim$rust$cxxbridge1$avrcp_absolute_volume_update(::std::uint8_t volume) noexcept;

void bluetooth$topshim$rust$cxxbridge1$avrcp_send_key_event(::std::uint8_t key, ::std::uint8_t state) noexcept;

void bluetooth$topshim$rust$cxxbridge1$avrcp_set_active_device(::bluetooth::topshim::rust::RawAddress *addr) noexcept;
} // extern "C"

void avrcp_device_connected(::bluetooth::topshim::rust::RawAddress addr, bool absolute_volume_enabled) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$avrcp_device_connected(&addr$.value, absolute_volume_enabled);
}

void avrcp_device_disconnected(::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$avrcp_device_disconnected(&addr$.value);
}

void avrcp_absolute_volume_update(::std::uint8_t volume) noexcept {
  bluetooth$topshim$rust$cxxbridge1$avrcp_absolute_volume_update(volume);
}

void avrcp_send_key_event(::std::uint8_t key, ::std::uint8_t state) noexcept {
  bluetooth$topshim$rust$cxxbridge1$avrcp_send_key_event(key, state);
}

void avrcp_set_active_device(::bluetooth::topshim::rust::RawAddress addr) noexcept {
  ::rust::ManuallyDrop<::bluetooth::topshim::rust::RawAddress> addr$(::std::move(addr));
  bluetooth$topshim$rust$cxxbridge1$avrcp_set_active_device(&addr$.value);
}
} // namespace rust
} // namespace topshim
} // namespace bluetooth

extern "C" {
static_assert(::rust::detail::is_complete<::bluetooth::topshim::rust::AvrcpIntf>::value, "definition of AvrcpIntf is required");
static_assert(sizeof(::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf>) == alignof(void *), "");
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$AvrcpIntf$null(::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf>();
}
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$AvrcpIntf$raw(::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf> *ptr, ::bluetooth::topshim::rust::AvrcpIntf *raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf>(raw);
}
::bluetooth::topshim::rust::AvrcpIntf const *cxxbridge1$unique_ptr$bluetooth$topshim$rust$AvrcpIntf$get(::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf> const &ptr) noexcept {
  return ptr.get();
}
::bluetooth::topshim::rust::AvrcpIntf *cxxbridge1$unique_ptr$bluetooth$topshim$rust$AvrcpIntf$release(::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$AvrcpIntf$drop(::std::unique_ptr<::bluetooth::topshim::rust::AvrcpIntf> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::bluetooth::topshim::rust::AvrcpIntf>::value>{}(ptr);
}
} // extern "C"
