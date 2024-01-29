#include "gd/rust/topshim/common/type_alias.h"
#include "metrics/metrics_shim.h"
#include <cstdint>
#include <type_traits>
#include <utility>

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

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
} // namespace cxxbridge1
} // namespace rust

static_assert(
    ::rust::IsRelocatable<::bluetooth::topshim::rust::RawAddress>::value,
    "type bluetooth::topshim::rust::RawAddress should be trivially move constructible and trivially destructible in C++ to be used as an argument of `bond_create_attempt`, `bond_state_changed`, `device_info_report` in Rust");

namespace bluetooth {
namespace topshim {
namespace rust {
extern "C" {
void bluetooth$topshim$rust$cxxbridge1$adapter_state_changed(::std::uint32_t state) noexcept {
  void (*adapter_state_changed$)(::std::uint32_t) = ::bluetooth::topshim::rust::adapter_state_changed;
  adapter_state_changed$(state);
}

void bluetooth$topshim$rust$cxxbridge1$bond_create_attempt(::bluetooth::topshim::rust::RawAddress *bt_addr, ::std::uint32_t device_type) noexcept {
  void (*bond_create_attempt$)(::bluetooth::topshim::rust::RawAddress, ::std::uint32_t) = ::bluetooth::topshim::rust::bond_create_attempt;
  bond_create_attempt$(::std::move(*bt_addr), device_type);
}

void bluetooth$topshim$rust$cxxbridge1$bond_state_changed(::bluetooth::topshim::rust::RawAddress *bt_addr, ::std::uint32_t device_type, ::std::uint32_t status, ::std::uint32_t bond_state, ::std::int32_t fail_reason) noexcept {
  void (*bond_state_changed$)(::bluetooth::topshim::rust::RawAddress, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t, ::std::int32_t) = ::bluetooth::topshim::rust::bond_state_changed;
  bond_state_changed$(::std::move(*bt_addr), device_type, status, bond_state, fail_reason);
}

void bluetooth$topshim$rust$cxxbridge1$device_info_report(::bluetooth::topshim::rust::RawAddress *bt_addr, ::std::uint32_t device_type, ::std::uint32_t class_of_device, ::std::uint32_t appearance, ::std::uint32_t vendor_id, ::std::uint32_t vendor_id_src, ::std::uint32_t product_id, ::std::uint32_t version) noexcept {
  void (*device_info_report$)(::bluetooth::topshim::rust::RawAddress, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t) = ::bluetooth::topshim::rust::device_info_report;
  device_info_report$(::std::move(*bt_addr), device_type, class_of_device, appearance, vendor_id, vendor_id_src, product_id, version);
}

void bluetooth$topshim$rust$cxxbridge1$profile_connection_state_changed(::bluetooth::topshim::rust::RawAddress *bt_addr, ::std::uint32_t profile, ::std::uint32_t status, ::std::uint32_t state) noexcept {
  void (*profile_connection_state_changed$)(::bluetooth::topshim::rust::RawAddress, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t) = ::bluetooth::topshim::rust::profile_connection_state_changed;
  profile_connection_state_changed$(::std::move(*bt_addr), profile, status, state);
}

void bluetooth$topshim$rust$cxxbridge1$acl_connect_attempt(::bluetooth::topshim::rust::RawAddress *addr, ::std::uint32_t acl_state) noexcept {
  void (*acl_connect_attempt$)(::bluetooth::topshim::rust::RawAddress, ::std::uint32_t) = ::bluetooth::topshim::rust::acl_connect_attempt;
  acl_connect_attempt$(::std::move(*addr), acl_state);
}

void bluetooth$topshim$rust$cxxbridge1$acl_connection_state_changed(::bluetooth::topshim::rust::RawAddress *bt_addr, ::std::uint32_t transport, ::std::uint32_t status, ::std::uint32_t acl_state, ::std::uint32_t direction, ::std::uint32_t hci_reason) noexcept {
  void (*acl_connection_state_changed$)(::bluetooth::topshim::rust::RawAddress, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t, ::std::uint32_t) = ::bluetooth::topshim::rust::acl_connection_state_changed;
  acl_connection_state_changed$(::std::move(*bt_addr), transport, status, acl_state, direction, hci_reason);
}

void bluetooth$topshim$rust$cxxbridge1$suspend_complete_state(::std::uint32_t state) noexcept {
  void (*suspend_complete_state$)(::std::uint32_t) = ::bluetooth::topshim::rust::suspend_complete_state;
  suspend_complete_state$(state);
}
} // extern "C"
} // namespace rust
} // namespace topshim
} // namespace bluetooth
