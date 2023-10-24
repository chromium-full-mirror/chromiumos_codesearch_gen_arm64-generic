#include "gd/rust/topshim/common/type_alias.h"
#include "controller/controller_shim.h"
#include <cstddef>
#include <memory>
#include <new>
#include <type_traits>
#include <utility>

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

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
      using ControllerIntf = ::bluetooth::topshim::rust::ControllerIntf;
    }
  }
}

static_assert(
    ::rust::IsRelocatable<::bluetooth::topshim::rust::RawAddress>::value,
    "type bluetooth::topshim::rust::RawAddress should be trivially move constructible and trivially destructible in C++ to be used as a return value of `read_local_addr` in Rust");

namespace bluetooth {
namespace topshim {
namespace rust {
extern "C" {
::bluetooth::topshim::rust::ControllerIntf *bluetooth$topshim$rust$cxxbridge1$GetControllerInterface() noexcept {
  ::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf> (*GetControllerInterface$)() = ::bluetooth::topshim::rust::GetControllerInterface;
  return GetControllerInterface$().release();
}

void bluetooth$topshim$rust$cxxbridge1$ControllerIntf$read_local_addr(::bluetooth::topshim::rust::ControllerIntf const &self, ::bluetooth::topshim::rust::RawAddress *return$) noexcept {
  ::bluetooth::topshim::rust::RawAddress (::bluetooth::topshim::rust::ControllerIntf::*read_local_addr$)() const = &::bluetooth::topshim::rust::ControllerIntf::read_local_addr;
  new (return$) ::bluetooth::topshim::rust::RawAddress((self.*read_local_addr$)());
}
} // extern "C"
} // namespace rust
} // namespace topshim
} // namespace bluetooth

extern "C" {
static_assert(::rust::detail::is_complete<::bluetooth::topshim::rust::ControllerIntf>::value, "definition of ControllerIntf is required");
static_assert(sizeof(::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf>) == alignof(void *), "");
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$ControllerIntf$null(::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf>();
}
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$ControllerIntf$raw(::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf> *ptr, ::bluetooth::topshim::rust::ControllerIntf *raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf>(raw);
}
::bluetooth::topshim::rust::ControllerIntf const *cxxbridge1$unique_ptr$bluetooth$topshim$rust$ControllerIntf$get(::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf> const &ptr) noexcept {
  return ptr.get();
}
::bluetooth::topshim::rust::ControllerIntf *cxxbridge1$unique_ptr$bluetooth$topshim$rust$ControllerIntf$release(::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$bluetooth$topshim$rust$ControllerIntf$drop(::std::unique_ptr<::bluetooth::topshim::rust::ControllerIntf> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::bluetooth::topshim::rust::ControllerIntf>::value>{}(ptr);
}
} // extern "C"
