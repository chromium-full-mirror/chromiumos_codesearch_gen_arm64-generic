#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_WASM_TO_JS_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_WASM_TO_JS_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm-to-js.tq?l=34&c=1
void HandleF32Returns_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TorqueStructLocationAllocator_0 p_locationAllocator, TorqueStructReference_intptr_0 p_toRef, TNode<Object> p_retVal);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm-to-js.tq?l=56&c=1
TorqueStructWasmToJSResult WasmToJSWrapper_0(compiler::CodeAssemblerState* state_, TNode<WasmApiFunctionRef> p_ref);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm-to-js.tq?l=62&c=4
TorqueStructReference_intptr_0 GetRefAt_intptr_RawPtr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm-to-js.tq?l=117&c=37
TorqueStructReference_int64_0 RefCast_int64_0(compiler::CodeAssemblerState* state_, TorqueStructReference_intptr_0 p_i);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm-to-js.tq?l=318&c=15
TorqueStructReference_float64_0 GetRefAt_float64_RawPtr_float64_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_WASM_TO_JS_TQ_CSA_H_
