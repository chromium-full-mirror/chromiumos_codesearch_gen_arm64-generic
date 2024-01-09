pub type __rlim64_t = u64;
pub type __u8 = u8;
pub type __u16 = u16;
pub type __u32 = u32;

pub type wchar_t = ::std::os::raw::c_uint;
#[repr(C)]
#[repr(align(16))]
#[derive(Debug, Copy, Clone)]
pub struct max_align_t {
    pub __clang_max_align_nonce1: ::std::os::raw::c_longlong,
    pub __bindgen_padding_0: u64,
    pub __clang_max_align_nonce2: u128,
}
extern "C" {
    pub fn VbGetSystemPropertyInt(name: *const ::std::os::raw::c_char) -> ::std::os::raw::c_int;
}
extern "C" {
    pub fn VbGetSystemPropertyString(
        name: *const ::std::os::raw::c_char,
        dest: *mut ::std::os::raw::c_char,
        size: usize,
    ) -> ::std::os::raw::c_int;
}
extern "C" {
    pub fn VbSetSystemPropertyInt(
        name: *const ::std::os::raw::c_char,
        value: ::std::os::raw::c_int,
    ) -> ::std::os::raw::c_int;
}
extern "C" {
    pub fn VbSetSystemPropertyString(
        name: *const ::std::os::raw::c_char,
        value: *const ::std::os::raw::c_char,
    ) -> ::std::os::raw::c_int;
}
