#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_WASM_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_WASM_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=105&c=1
TNode<NativeContext> LoadContextFromFrame_0(compiler::CodeAssemblerState* state_);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=548&c=1
TorqueStructTargetAndInstance_0 GetTargetAndInstance_0(compiler::CodeAssemblerState* state_, TNode<WasmInternalFunction> p_funcref);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=752&c=1
void ModifyThreadInWasmFlag_0(compiler::CodeAssemblerState* state_, TNode<Int32T> p_newValue);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=759&c=1
void ModifyWasmToJSCounter_0(compiler::CodeAssemblerState* state_, TNode<Int32T> p_increment);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=819&c=1
TNode<String> StringFromTwoByteSlice_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_length, TorqueStructSlice_char16_ConstReference_char16_0 p_slice);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1406&c=1
void ThrowDataViewOutOfBounds_0(compiler::CodeAssemblerState* state_);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1439&c=1
TNode<BoolT> IsWtf8CodepointStart_0(compiler::CodeAssemblerState* state_, TNode<ByteArray> p_view, TNode<Uint32T> p_pos);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1444&c=1
TNode<Uint32T> AlignWtf8PositionForward_0(compiler::CodeAssemblerState* state_, TNode<ByteArray> p_view, TNode<Uint32T> p_pos);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1461&c=1
TNode<Uint32T> AlignWtf8PositionBackward_0(compiler::CodeAssemblerState* state_, TNode<ByteArray> p_view, TNode<Uint32T> p_pos);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1594&c=1
TNode<BoolT> IsLeadSurrogate_0(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_code);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1597&c=1
TNode<BoolT> IsTrailSurrogate_0(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_code);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1600&c=1
TNode<Int32T> CombineSurrogatePair_0(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_lead, TNode<Uint16T> p_trail);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=410&c=7
TNode<IntPtrT> Convert_intptr_constexpr_int32_0(compiler::CodeAssemblerState* state_, int32_t p_i);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=477&c=20
TNode<WasmArray> UnsafeCast_WasmArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=618&c=14
TNode<BoolT> Is_WasmInternalFunction_Object_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=764&c=5
TNode<WasmSuspenderObject> Cast_WasmSuspenderObject_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=872&c=12
TNode<String> AllocateSeqTwoByteString_SliceIterator_char16_ConstReference_char16_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_length, TorqueStructSliceIterator_char16_ConstReference_char16_0 p_content);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=876&c=10
TNode<SeqOneByteString> AllocateNonEmptySeqOneByteString_TwoByteToOneByteIterator_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_length, TorqueStructTwoByteToOneByteIterator_0 p_content);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=903&c=26
TorqueStructSlice_char16_ConstReference_char16_0 NewConstSlice_char16_0(compiler::CodeAssemblerState* state_, TNode<Object> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1003&c=26
TorqueStructSlice_char16_MutableReference_char16_0 NewMutableSlice_char16_0(compiler::CodeAssemblerState* state_, TNode<Object> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1012&c=39
TNode<Uint16T> Convert_uint16_char8_0(compiler::CodeAssemblerState* state_, TNode<Uint8T> p_i);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=1575&c=14
TNode<SeqOneByteString> AllocateNonEmptySeqOneByteString_SliceIterator_char8_ConstReference_char8_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_length, TorqueStructSliceIterator_char8_ConstReference_char8_0 p_content);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=740&c=10
TorqueStructReference_int32_0 NewOffHeapReference_int32_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=740&c=10
TorqueStructReference_RawPtr_0 NewOffHeapReference_RawPtr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=740&c=10
TorqueStructReference_bool_0 NewOffHeapReference_bool_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=740&c=10
TorqueStructReference_RawPtr_intptr_0 NewOffHeapReference_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=740&c=10
TorqueStructReference_float32_0 NewOffHeapReference_float32_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=740&c=10
TorqueStructReference_float64_0 NewOffHeapReference_float64_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/wasm.tq?l=740&c=10
TorqueStructReference_uintptr_0 NewOffHeapReference_uintptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_WASM_TQ_CSA_H_
