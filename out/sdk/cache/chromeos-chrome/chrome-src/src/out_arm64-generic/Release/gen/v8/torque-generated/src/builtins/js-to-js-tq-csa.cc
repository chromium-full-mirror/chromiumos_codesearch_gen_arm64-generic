#include "src/ast/ast.h"
#include "src/builtins/builtins-array-gen.h"
#include "src/builtins/builtins-bigint-gen.h"
#include "src/builtins/builtins-collections-gen.h"
#include "src/builtins/builtins-constructor-gen.h"
#include "src/builtins/builtins-data-view-gen.h"
#include "src/builtins/builtins-iterator-gen.h"
#include "src/builtins/builtins-object-gen.h"
#include "src/builtins/builtins-promise-gen.h"
#include "src/builtins/builtins-promise.h"
#include "src/builtins/builtins-proxy-gen.h"
#include "src/builtins/builtins-regexp-gen.h"
#include "src/builtins/builtins-string-gen.h"
#include "src/builtins/builtins-typed-array-gen.h"
#include "src/builtins/builtins-utils-gen.h"
#include "src/builtins/builtins-wasm-gen.h"
#include "src/builtins/builtins.h"
#include "src/codegen/code-factory.h"
#include "src/debug/debug-wasm-objects.h"
#include "src/heap/factory-inl.h"
#include "src/ic/binary-op-assembler.h"
#include "src/ic/handler-configuration-inl.h"
#include "src/objects/arguments.h"
#include "src/objects/bigint.h"
#include "src/objects/call-site-info.h"
#include "src/objects/elements-kind.h"
#include "src/objects/free-space.h"
#include "src/objects/intl-objects.h"
#include "src/objects/js-atomics-synchronization.h"
#include "src/objects/js-break-iterator.h"
#include "src/objects/js-collator.h"
#include "src/objects/js-date-time-format.h"
#include "src/objects/js-display-names.h"
#include "src/objects/js-duration-format.h"
#include "src/objects/js-function.h"
#include "src/objects/js-generator.h"
#include "src/objects/js-iterator-helpers.h"
#include "src/objects/js-list-format.h"
#include "src/objects/js-locale.h"
#include "src/objects/js-number-format.h"
#include "src/objects/js-objects.h"
#include "src/objects/js-plural-rules.h"
#include "src/objects/js-promise.h"
#include "src/objects/js-raw-json.h"
#include "src/objects/js-regexp-string-iterator.h"
#include "src/objects/js-relative-time-format.h"
#include "src/objects/js-segment-iterator.h"
#include "src/objects/js-segmenter.h"
#include "src/objects/js-segments.h"
#include "src/objects/js-shadow-realm.h"
#include "src/objects/js-shared-array.h"
#include "src/objects/js-struct.h"
#include "src/objects/js-temporal-objects.h"
#include "src/objects/js-weak-refs.h"
#include "src/objects/objects.h"
#include "src/objects/ordered-hash-table.h"
#include "src/objects/property-array.h"
#include "src/objects/property-descriptor-object.h"
#include "src/objects/source-text-module.h"
#include "src/objects/swiss-hash-table-helpers.h"
#include "src/objects/swiss-name-dictionary.h"
#include "src/objects/synthetic-module.h"
#include "src/objects/template-objects.h"
#include "src/objects/torque-defined-classes.h"
#include "src/objects/turbofan-types.h"
#include "src/objects/turboshaft-types.h"
#include "src/torque/runtime-support.h"
#include "src/wasm/wasm-linkage.h"
#include "src/codegen/code-stub-assembler-inl.h"
// Required Builtins:
#include "torque-generated/src/builtins/js-to-js-tq-csa.h"
#include "torque-generated/src/builtins/array-join-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/contexts-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-tq-csa.h"
#include "torque-generated/src/builtins/js-to-js-tq-csa.h"
#include "torque-generated/src/builtins/js-to-wasm-tq-csa.h"
#include "torque-generated/src/builtins/wasm-tq-csa.h"
#include "torque-generated/src/builtins/wasm-to-js-tq-csa.h"

namespace v8 {
namespace internal {

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/js-to-js.tq?l=20&c=1
TNode<Object> ConvertToAndFromWasm_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Int32T> p_wasmType, TNode<Object> p_value) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Int32T> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_int32_constexpr_int32_0(state_, wasm::kWasmI32.raw_bit_field());
    tmp1 = CodeStubAssembler(state_).Word32Equal(TNode<Int32T>{p_wasmType}, TNode<Int32T>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_Smi_0(state_, TNode<Object>{p_value}, &label3);
    ca_.Goto(&block7);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block8);
    }
  }

  TNode<Int32T> tmp4;
  TNode<Number> tmp5;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp4 = ca_.CallBuiltin<Int32T>(Builtin::kWasmTaggedNonSmiToInt32, p_context, ca_.UncheckedCast<HeapObject>(p_value));
    tmp5 = Convert_Number_int32_0(state_, TNode<Int32T>{tmp4});
    ca_.Goto(&block1, tmp5);
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block1, tmp2);
  }

  TNode<Int32T> tmp6;
  TNode<BoolT> tmp7;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp6 = FromConstexpr_int32_constexpr_int32_0(state_, wasm::kWasmI64.raw_bit_field());
    tmp7 = CodeStubAssembler(state_).Word32Equal(TNode<Int32T>{p_wasmType}, TNode<Int32T>{tmp6});
    ca_.Branch(tmp7, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    if (((CodeStubAssembler(state_).Is64()))) {
      ca_.Goto(&block12);
    } else {
      ca_.Goto(&block13);
    }
  }

  TNode<IntPtrT> tmp8;
  TNode<BigInt> tmp9;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp8 = TruncateBigIntToI64_0(state_, TNode<Context>{p_context}, TNode<Object>{p_value});
    tmp9 = ca_.CallBuiltin<BigInt>(Builtin::kI64ToBigInt, TNode<Object>(), tmp8);
    ca_.Goto(&block1, tmp9);
  }

  TNode<BigInt> tmp10;
  TNode<UintPtrT> tmp11;
  TNode<UintPtrT> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<BigInt> tmp15;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp10 = CodeStubAssembler(state_).ToBigInt(TNode<Context>{p_context}, TNode<Object>{p_value});
    std::tie(tmp11, tmp12) = CodeStubAssembler(state_).BigIntToRawBytes(TNode<BigInt>{tmp10}).Flatten();
    tmp13 = CodeStubAssembler(state_).Signed(TNode<UintPtrT>{tmp11});
    tmp14 = CodeStubAssembler(state_).Signed(TNode<UintPtrT>{tmp12});
    tmp15 = ca_.CallBuiltin<BigInt>(Builtin::kI32PairToBigInt, TNode<Object>(), tmp13, tmp14);
    ca_.Goto(&block1, tmp15);
  }

  TNode<Int32T> tmp16;
  TNode<BoolT> tmp17;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp16 = FromConstexpr_int32_constexpr_int32_0(state_, wasm::kWasmF32.raw_bit_field());
    tmp17 = CodeStubAssembler(state_).Word32Equal(TNode<Int32T>{p_wasmType}, TNode<Int32T>{tmp16});
    ca_.Branch(tmp17, &block15, std::vector<compiler::Node*>{}, &block16, std::vector<compiler::Node*>{});
  }

  TNode<Float32T> tmp18;
  TNode<Number> tmp19;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp18 = ca_.CallBuiltin<Float32T>(Builtin::kWasmTaggedToFloat32, p_context, p_value);
    tmp19 = Convert_Number_float32_0(state_, TNode<Float32T>{tmp18});
    ca_.Goto(&block1, tmp19);
  }

  TNode<Int32T> tmp20;
  TNode<BoolT> tmp21;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp20 = FromConstexpr_int32_constexpr_int32_0(state_, wasm::kWasmF64.raw_bit_field());
    tmp21 = CodeStubAssembler(state_).Word32Equal(TNode<Int32T>{p_wasmType}, TNode<Int32T>{tmp20});
    ca_.Branch(tmp21, &block18, std::vector<compiler::Node*>{}, &block19, std::vector<compiler::Node*>{});
  }

  TNode<Float64T> tmp22;
  TNode<Number> tmp23;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp22 = ca_.CallBuiltin<Float64T>(Builtin::kWasmTaggedToFloat64, p_context, p_value);
    tmp23 = Convert_Number_float64_0(state_, TNode<Float64T>{tmp22});
    ca_.Goto(&block1, tmp23);
  }

  TNode<Null> tmp24;
  TNode<BoolT> tmp25;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp24 = Null_0(state_);
    tmp25 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{p_value}, TNode<HeapObject>{tmp24});
    ca_.Branch(tmp25, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  if (block21.is_used()) {
    ca_.Bind(&block21);
    ca_.Goto(&block1, p_value);
  }

  TNode<Int32T> tmp26;
  TNode<Int32T> tmp27;
  TNode<Int32T> tmp28;
  TNode<Int32T> tmp29;
  TNode<Int32T> tmp30;
  TNode<BoolT> tmp31;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    tmp26 = FromConstexpr_int32_constexpr_int32_0(state_, wasm::ValueType::kKindBits);
    tmp27 = CodeStubAssembler(state_).Word32Sar(TNode<Int32T>{p_wasmType}, TNode<Int32T>{tmp26});
    tmp28 = FromConstexpr_int32_constexpr_int32_0(state_, wasm::kWasmHeapTypeBitsMask);
    tmp29 = CodeStubAssembler(state_).Word32And(TNode<Int32T>{tmp27}, TNode<Int32T>{tmp28});
    tmp30 = FromConstexpr_int32_constexpr_int32_0(state_, wasm::HeapType::Representation::kFunc);
    tmp31 = CodeStubAssembler(state_).Word32NotEqual(TNode<Int32T>{tmp29}, TNode<Int32T>{tmp30});
    ca_.Branch(tmp31, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{});
  }

  if (block23.is_used()) {
    ca_.Bind(&block23);
    ca_.Goto(&block1, p_value);
  }

  TNode<Smi> tmp32;
  TNode<Boolean> tmp33;
  TNode<True> tmp34;
  TNode<BoolT> tmp35;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp32 = kNoContext_0(state_);
    tmp33 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kIsWasmExternalFunction, tmp32, p_value)); 
    tmp34 = True_0(state_);
    tmp35 = CodeStubAssembler(state_).TaggedNotEqual(TNode<HeapObject>{tmp33}, TNode<HeapObject>{tmp34});
    ca_.Branch(tmp35, &block25, std::vector<compiler::Node*>{}, &block26, std::vector<compiler::Node*>{});
  }

  if (block25.is_used()) {
    ca_.Bind(&block25);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{p_context}, MessageTemplate::kWasmTrapJSTypeError);
  }

  if (block26.is_used()) {
    ca_.Bind(&block26);
    ca_.Goto(&block1, p_value);
  }

  TNode<Object> phi_bb1_3;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_3);
    ca_.Goto(&block27);
  }

    ca_.Bind(&block27);
  return TNode<Object>{phi_bb1_3};
}

TF_BUILTIN(JSToJSWrapper, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Word32T> argc = UncheckedParameter<Word32T>(Descriptor::kJSActualArgumentsCount);
  TNode<IntPtrT> arguments_length(ChangeInt32ToIntPtr(UncheckedCast<Int32T>(argc)));
  TNode<RawPtrT> arguments_frame = UncheckedCast<RawPtrT>(LoadFramePointer());
  TorqueStructArguments torque_arguments(GetFrameArguments(arguments_frame, arguments_length, FrameArgumentsArgcType::kCountIncludesReceiver));
  CodeStubArguments arguments(this, torque_arguments);
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<Object> parameter1 = arguments.GetReceiver();
  USE(parameter1);
  TNode<JSFunction> parameter2 = UncheckedParameter<JSFunction>(Descriptor::kJSTarget);
USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block65(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Object> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Object> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Object> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Object, IntPtrT> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<SharedFunctionInfo> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Object> tmp3;
  TNode<WasmFunctionData> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<WasmInternalFunction> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<HeapObject> tmp8;
  TNode<WasmApiFunctionRef> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<Smi> tmp12;
  TNode<Smi> tmp13;
  TNode<Smi> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<Smi> tmp16;
  TNode<Smi> tmp17;
  TNode<BoolT> tmp18;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp1 = CodeStubAssembler(state_).LoadReference<SharedFunctionInfo>(CodeStubAssembler::Reference{parameter2, tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp3 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp1, tmp2});
    tmp4 = UnsafeCast_WasmFunctionData_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp3});
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp6 = CodeStubAssembler(state_).LoadReference<WasmInternalFunction>(CodeStubAssembler::Reference{tmp4, tmp5});
    tmp7 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp8 = CodeStubAssembler(state_).LoadReference<HeapObject>(CodeStubAssembler::Reference{tmp6, tmp7});
    tmp9 = UnsafeCast_WasmApiFunctionRef_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp8});
    tmp10 = FromConstexpr_intptr_constexpr_int31_0(state_, 20);
    tmp11 = FromConstexpr_intptr_constexpr_int31_0(state_, 20);
    tmp12 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp9, tmp11});
    tmp13 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp14 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{tmp12}, TNode<Smi>{tmp13});
    CodeStubAssembler(state_).StoreReference<Smi>(CodeStubAssembler::Reference{tmp9, tmp10}, tmp14);
    tmp15 = FromConstexpr_intptr_constexpr_int31_0(state_, 20);
    tmp16 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp9, tmp15});
    tmp17 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp18 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{tmp16}, TNode<Smi>{tmp17});
    ca_.Branch(tmp18, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp19;
  TNode<Object> tmp20;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp19 = kNoContext_0(state_);
    tmp20 = CodeStubAssembler(state_).CallRuntime(Runtime::kTierUpJSToJSWrapper, tmp19, tmp9, tmp4); 
    ca_.Goto(&block6);
  }

  TNode<IntPtrT> tmp21;
  TNode<ByteArray> tmp22;
  TNode<Object> tmp23;
  TNode<IntPtrT> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<IntPtrT> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<Object> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<Object> tmp31;
  TNode<IntPtrT> tmp32;
  TNode<Int32T> tmp33;
  TNode<IntPtrT> tmp34;
  TNode<IntPtrT> tmp35;
  TNode<IntPtrT> tmp36;
  TNode<IntPtrT> tmp37;
  TNode<IntPtrT> tmp38;
  TNode<Object> tmp39;
  TNode<IntPtrT> tmp40;
  TNode<IntPtrT> tmp41;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp21 = FromConstexpr_intptr_constexpr_int31_0(state_, 28);
    tmp22 = CodeStubAssembler(state_).LoadReference<ByteArray>(CodeStubAssembler::Reference{tmp9, tmp21});
    std::tie(tmp23, tmp24, tmp25) = FieldSliceByteArrayBytes_0(state_, TNode<ByteArray>{tmp22}).Flatten();
    tmp26 = FromConstexpr_intptr_constexpr_int31_0(state_, (SizeOf_int32_0(state_)));
    tmp27 = CodeStubAssembler(state_).IntPtrDiv(TNode<IntPtrT>{tmp25}, TNode<IntPtrT>{tmp26});
    std::tie(tmp28, tmp29, tmp30) = NewConstSlice_int32_0(state_, TNode<Object>{tmp23}, TNode<IntPtrT>{tmp24}, TNode<IntPtrT>{tmp27}).Flatten();
    std::tie(tmp31, tmp32) = NewReference_int32_0(state_, TNode<Object>{tmp28}, TNode<IntPtrT>{tmp29}).Flatten();
    tmp33 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp31, tmp32});
    tmp34 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp33});
    tmp35 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{tmp30}, TNode<IntPtrT>{tmp34});
    tmp36 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp37 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{tmp35}, TNode<IntPtrT>{tmp36});
    tmp38 = Convert_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    compiler::CodeAssemblerLabel label42(&ca_);
    std::tie(tmp39, tmp40, tmp41) = Subslice_int32_0(state_, TorqueStructSlice_int32_ConstReference_int32_0{TNode<Object>{tmp28}, TNode<IntPtrT>{tmp29}, TNode<IntPtrT>{tmp30}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{tmp38}, TNode<IntPtrT>{tmp34}, &label42).Flatten();
    ca_.Goto(&block9);
    if (label42.is_used()) {
      ca_.Bind(&label42);
      ca_.Goto(&block10);
    }
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<Object> tmp45;
  TNode<IntPtrT> tmp46;
  TNode<IntPtrT> tmp47;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp43 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp44 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp34}, TNode<IntPtrT>{tmp43});
    compiler::CodeAssemblerLabel label48(&ca_);
    std::tie(tmp45, tmp46, tmp47) = Subslice_int32_0(state_, TorqueStructSlice_int32_ConstReference_int32_0{TNode<Object>{tmp28}, TNode<IntPtrT>{tmp29}, TNode<IntPtrT>{tmp30}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{tmp44}, TNode<IntPtrT>{tmp37}, &label48).Flatten();
    ca_.Goto(&block13);
    if (label48.is_used()) {
      ca_.Bind(&label48);
      ca_.Goto(&block14);
    }
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp49;
  TNode<IntPtrT> tmp50;
  TNode<FixedArray> tmp51;
  TNode<IntPtrT> tmp52;
  TNode<Object> tmp53;
  TNode<IntPtrT> tmp54;
  TNode<IntPtrT> tmp55;
  TNode<IntPtrT> tmp56;
  TNode<IntPtrT> tmp57;
  TNode<UintPtrT> tmp58;
  TNode<UintPtrT> tmp59;
  TNode<BoolT> tmp60;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp49 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp50 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp37}, TNode<IntPtrT>{tmp49});
    tmp51 = ca_.CallBuiltin<FixedArray>(Builtin::kWasmAllocateZeroedFixedArray, TNode<Object>(), tmp50);
    tmp52 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    std::tie(tmp53, tmp54, tmp55) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp51}).Flatten();
    tmp56 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp57 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp52}, TNode<IntPtrT>{tmp56});
    tmp58 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp52});
    tmp59 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp55});
    tmp60 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp58}, TNode<UintPtrT>{tmp59});
    ca_.Branch(tmp60, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp61;
  TNode<IntPtrT> tmp62;
  TNode<Object> tmp63;
  TNode<IntPtrT> tmp64;
  TNode<Undefined> tmp65;
  TNode<IntPtrT> tmp66;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp61 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp52});
    tmp62 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp54}, TNode<IntPtrT>{tmp61});
    std::tie(tmp63, tmp64) = NewReference_Object_0(state_, TNode<Object>{tmp53}, TNode<IntPtrT>{tmp62}).Flatten();
    tmp65 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp63, tmp64}, tmp65);
    tmp66 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block25, tmp57, tmp66);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb25_25;
  TNode<IntPtrT> phi_bb25_26;
  TNode<BoolT> tmp67;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_25, &phi_bb25_26);
    tmp67 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb25_26}, TNode<IntPtrT>{tmp37});
    ca_.Branch(tmp67, &block23, std::vector<compiler::Node*>{phi_bb25_25, phi_bb25_26}, &block24, std::vector<compiler::Node*>{phi_bb25_25, phi_bb25_26});
  }

  TNode<IntPtrT> phi_bb23_25;
  TNode<IntPtrT> phi_bb23_26;
  TNode<Object> tmp68;
  TNode<IntPtrT> tmp69;
  TNode<IntPtrT> tmp70;
  TNode<Object> tmp71;
  TNode<IntPtrT> tmp72;
  TNode<Int32T> tmp73;
  TNode<Object> tmp74;
  TNode<IntPtrT> tmp75;
  TNode<IntPtrT> tmp76;
  TNode<IntPtrT> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<UintPtrT> tmp79;
  TNode<UintPtrT> tmp80;
  TNode<BoolT> tmp81;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_25, &phi_bb23_26);
    tmp68 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{phi_bb23_26});
    tmp69 = TimesSizeOf_int32_0(state_, TNode<IntPtrT>{phi_bb23_26});
    tmp70 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp46}, TNode<IntPtrT>{tmp69});
    std::tie(tmp71, tmp72) = NewReference_int32_0(state_, TNode<Object>{tmp45}, TNode<IntPtrT>{tmp70}).Flatten();
    tmp73 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp71, tmp72});
    std::tie(tmp74, tmp75, tmp76) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp51}).Flatten();
    tmp77 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp78 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb23_25}, TNode<IntPtrT>{tmp77});
    tmp79 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb23_25});
    tmp80 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp76});
    tmp81 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp79}, TNode<UintPtrT>{tmp80});
    ca_.Branch(tmp81, &block32, std::vector<compiler::Node*>{phi_bb23_26, phi_bb23_25, phi_bb23_25, phi_bb23_25, phi_bb23_25}, &block33, std::vector<compiler::Node*>{phi_bb23_26, phi_bb23_25, phi_bb23_25, phi_bb23_25, phi_bb23_25});
  }

  TNode<IntPtrT> phi_bb32_26;
  TNode<IntPtrT> phi_bb32_33;
  TNode<IntPtrT> phi_bb32_34;
  TNode<IntPtrT> phi_bb32_38;
  TNode<IntPtrT> phi_bb32_39;
  TNode<IntPtrT> tmp82;
  TNode<IntPtrT> tmp83;
  TNode<Object> tmp84;
  TNode<IntPtrT> tmp85;
  TNode<Object> tmp86;
  TNode<IntPtrT> tmp87;
  TNode<IntPtrT> tmp88;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_26, &phi_bb32_33, &phi_bb32_34, &phi_bb32_38, &phi_bb32_39);
    tmp82 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb32_39});
    tmp83 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp75}, TNode<IntPtrT>{tmp82});
    std::tie(tmp84, tmp85) = NewReference_Object_0(state_, TNode<Object>{tmp74}, TNode<IntPtrT>{tmp83}).Flatten();
    tmp86 = ConvertToAndFromWasm_0(state_, TNode<Context>{parameter0}, TNode<Int32T>{tmp73}, TNode<Object>{tmp68});
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp84, tmp85}, tmp86);
    tmp87 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp88 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb32_26}, TNode<IntPtrT>{tmp87});
    ca_.Goto(&block25, tmp78, tmp88);
  }

  TNode<IntPtrT> phi_bb33_26;
  TNode<IntPtrT> phi_bb33_33;
  TNode<IntPtrT> phi_bb33_34;
  TNode<IntPtrT> phi_bb33_38;
  TNode<IntPtrT> phi_bb33_39;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_26, &phi_bb33_33, &phi_bb33_34, &phi_bb33_38, &phi_bb33_39);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb24_25;
  TNode<IntPtrT> phi_bb24_26;
  TNode<IntPtrT> tmp89;
  TNode<HeapObject> tmp90;
  TNode<Int32T> tmp91;
  TNode<Int32T> tmp92;
  TNode<Object> tmp93;
  TNode<IntPtrT> tmp94;
  TNode<BoolT> tmp95;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_25, &phi_bb24_26);
    tmp89 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp90 = CodeStubAssembler(state_).LoadReference<HeapObject>(CodeStubAssembler::Reference{tmp9, tmp89});
    tmp91 = Convert_int32_intptr_0(state_, TNode<IntPtrT>{tmp50});
    tmp92 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp93 = ca_.CallBuiltin<Object>(Builtin::kCallVarargs, parameter0, tmp90, tmp92, tmp91, tmp51);
    tmp94 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp95 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp34}, TNode<IntPtrT>{tmp94});
    ca_.Branch(tmp95, &block40, std::vector<compiler::Node*>{phi_bb24_25}, &block41, std::vector<compiler::Node*>{phi_bb24_25});
  }

  TNode<IntPtrT> phi_bb40_25;
  TNode<Undefined> tmp96;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_25);
    tmp96 = Undefined_0(state_);
    ca_.Goto(&block42, phi_bb40_25, tmp96);
  }

  TNode<IntPtrT> phi_bb41_25;
  TNode<IntPtrT> tmp97;
  TNode<BoolT> tmp98;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_25);
    tmp97 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp98 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp34}, TNode<IntPtrT>{tmp97});
    ca_.Branch(tmp98, &block43, std::vector<compiler::Node*>{phi_bb41_25}, &block44, std::vector<compiler::Node*>{phi_bb41_25});
  }

  TNode<IntPtrT> phi_bb43_25;
  TNode<IntPtrT> tmp99;
  TNode<IntPtrT> tmp100;
  TNode<IntPtrT> tmp101;
  TNode<Object> tmp102;
  TNode<IntPtrT> tmp103;
  TNode<Int32T> tmp104;
  TNode<Object> tmp105;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_25);
    tmp99 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp100 = TimesSizeOf_int32_0(state_, TNode<IntPtrT>{tmp99});
    tmp101 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp40}, TNode<IntPtrT>{tmp100});
    std::tie(tmp102, tmp103) = NewReference_int32_0(state_, TNode<Object>{tmp39}, TNode<IntPtrT>{tmp101}).Flatten();
    tmp104 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp102, tmp103});
    tmp105 = ConvertToAndFromWasm_0(state_, TNode<Context>{parameter0}, TNode<Int32T>{tmp104}, TNode<Object>{tmp93});
    ca_.Goto(&block45, phi_bb43_25, tmp105);
  }

  TNode<IntPtrT> phi_bb44_25;
  TNode<Smi> tmp106;
  TNode<FixedArray> tmp107;
  TNode<Smi> tmp108;
  TNode<JSArray> tmp109;
  TNode<IntPtrT> tmp110;
  TNode<FixedArrayBase> tmp111;
  TNode<FixedArray> tmp112;
  TNode<IntPtrT> tmp113;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_25);
    tmp106 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{tmp34});
    tmp107 = ca_.CallBuiltin<FixedArray>(Builtin::kIterableToFixedArrayForWasm, parameter0, tmp93, tmp106);
    tmp108 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{tmp34});
    tmp109 = ca_.CallBuiltin<JSArray>(Builtin::kWasmAllocateJSArray, parameter0, tmp108);
    tmp110 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp111 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp109, tmp110});
    tmp112 = UnsafeCast_FixedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp111});
    tmp113 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block49, phi_bb44_25, tmp113);
  }

  TNode<IntPtrT> phi_bb49_25;
  TNode<IntPtrT> phi_bb49_31;
  TNode<BoolT> tmp114;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_25, &phi_bb49_31);
    tmp114 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb49_31}, TNode<IntPtrT>{tmp34});
    ca_.Branch(tmp114, &block47, std::vector<compiler::Node*>{phi_bb49_25, phi_bb49_31}, &block48, std::vector<compiler::Node*>{phi_bb49_25, phi_bb49_31});
  }

  TNode<IntPtrT> phi_bb47_25;
  TNode<IntPtrT> phi_bb47_31;
  TNode<Object> tmp115;
  TNode<IntPtrT> tmp116;
  TNode<IntPtrT> tmp117;
  TNode<UintPtrT> tmp118;
  TNode<UintPtrT> tmp119;
  TNode<BoolT> tmp120;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_25, &phi_bb47_31);
    std::tie(tmp115, tmp116, tmp117) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp107}).Flatten();
    tmp118 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb47_31});
    tmp119 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp117});
    tmp120 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp118}, TNode<UintPtrT>{tmp119});
    ca_.Branch(tmp120, &block55, std::vector<compiler::Node*>{phi_bb47_25, phi_bb47_31, phi_bb47_31, phi_bb47_31, phi_bb47_31, phi_bb47_31}, &block56, std::vector<compiler::Node*>{phi_bb47_25, phi_bb47_31, phi_bb47_31, phi_bb47_31, phi_bb47_31, phi_bb47_31});
  }

  TNode<IntPtrT> phi_bb55_25;
  TNode<IntPtrT> phi_bb55_31;
  TNode<IntPtrT> phi_bb55_36;
  TNode<IntPtrT> phi_bb55_37;
  TNode<IntPtrT> phi_bb55_41;
  TNode<IntPtrT> phi_bb55_42;
  TNode<IntPtrT> tmp121;
  TNode<IntPtrT> tmp122;
  TNode<Object> tmp123;
  TNode<IntPtrT> tmp124;
  TNode<Object> tmp125;
  TNode<Object> tmp126;
  TNode<IntPtrT> tmp127;
  TNode<IntPtrT> tmp128;
  TNode<Object> tmp129;
  TNode<IntPtrT> tmp130;
  TNode<Int32T> tmp131;
  TNode<Object> tmp132;
  TNode<IntPtrT> tmp133;
  TNode<IntPtrT> tmp134;
  TNode<UintPtrT> tmp135;
  TNode<UintPtrT> tmp136;
  TNode<BoolT> tmp137;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_25, &phi_bb55_31, &phi_bb55_36, &phi_bb55_37, &phi_bb55_41, &phi_bb55_42);
    tmp121 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb55_42});
    tmp122 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp116}, TNode<IntPtrT>{tmp121});
    std::tie(tmp123, tmp124) = NewReference_Object_0(state_, TNode<Object>{tmp115}, TNode<IntPtrT>{tmp122}).Flatten();
    tmp125 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp123, tmp124});
    tmp126 = UnsafeCast_JSAny_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp125});
    tmp127 = TimesSizeOf_int32_0(state_, TNode<IntPtrT>{phi_bb55_31});
    tmp128 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp40}, TNode<IntPtrT>{tmp127});
    std::tie(tmp129, tmp130) = NewReference_int32_0(state_, TNode<Object>{tmp39}, TNode<IntPtrT>{tmp128}).Flatten();
    tmp131 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp129, tmp130});
    std::tie(tmp132, tmp133, tmp134) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp112}).Flatten();
    tmp135 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb55_31});
    tmp136 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp134});
    tmp137 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp135}, TNode<UintPtrT>{tmp136});
    ca_.Branch(tmp137, &block64, std::vector<compiler::Node*>{phi_bb55_25, phi_bb55_31, phi_bb55_31, phi_bb55_31, phi_bb55_31, phi_bb55_31}, &block65, std::vector<compiler::Node*>{phi_bb55_25, phi_bb55_31, phi_bb55_31, phi_bb55_31, phi_bb55_31, phi_bb55_31});
  }

  TNode<IntPtrT> phi_bb56_25;
  TNode<IntPtrT> phi_bb56_31;
  TNode<IntPtrT> phi_bb56_36;
  TNode<IntPtrT> phi_bb56_37;
  TNode<IntPtrT> phi_bb56_41;
  TNode<IntPtrT> phi_bb56_42;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_25, &phi_bb56_31, &phi_bb56_36, &phi_bb56_37, &phi_bb56_41, &phi_bb56_42);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb64_25;
  TNode<IntPtrT> phi_bb64_31;
  TNode<IntPtrT> phi_bb64_38;
  TNode<IntPtrT> phi_bb64_39;
  TNode<IntPtrT> phi_bb64_43;
  TNode<IntPtrT> phi_bb64_44;
  TNode<IntPtrT> tmp138;
  TNode<IntPtrT> tmp139;
  TNode<Object> tmp140;
  TNode<IntPtrT> tmp141;
  TNode<Object> tmp142;
  TNode<IntPtrT> tmp143;
  TNode<IntPtrT> tmp144;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_25, &phi_bb64_31, &phi_bb64_38, &phi_bb64_39, &phi_bb64_43, &phi_bb64_44);
    tmp138 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb64_44});
    tmp139 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp133}, TNode<IntPtrT>{tmp138});
    std::tie(tmp140, tmp141) = NewReference_Object_0(state_, TNode<Object>{tmp132}, TNode<IntPtrT>{tmp139}).Flatten();
    tmp142 = ConvertToAndFromWasm_0(state_, TNode<Context>{parameter0}, TNode<Int32T>{tmp131}, TNode<Object>{tmp126});
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp140, tmp141}, tmp142);
    tmp143 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp144 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb64_31}, TNode<IntPtrT>{tmp143});
    ca_.Goto(&block49, phi_bb64_25, tmp144);
  }

  TNode<IntPtrT> phi_bb65_25;
  TNode<IntPtrT> phi_bb65_31;
  TNode<IntPtrT> phi_bb65_38;
  TNode<IntPtrT> phi_bb65_39;
  TNode<IntPtrT> phi_bb65_43;
  TNode<IntPtrT> phi_bb65_44;
  if (block65.is_used()) {
    ca_.Bind(&block65, &phi_bb65_25, &phi_bb65_31, &phi_bb65_38, &phi_bb65_39, &phi_bb65_43, &phi_bb65_44);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb48_25;
  TNode<IntPtrT> phi_bb48_31;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_25, &phi_bb48_31);
    ca_.Goto(&block45, phi_bb48_25, tmp109);
  }

  TNode<IntPtrT> phi_bb45_25;
  TNode<Object> phi_bb45_27;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_25, &phi_bb45_27);
    ca_.Goto(&block42, phi_bb45_25, phi_bb45_27);
  }

  TNode<IntPtrT> phi_bb42_25;
  TNode<Object> phi_bb42_27;
  TNode<BoolT> tmp145;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_25, &phi_bb42_27);
    tmp145 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp37}, TNode<IntPtrT>{torque_arguments.length});
    ca_.Branch(tmp145, &block68, std::vector<compiler::Node*>{phi_bb42_25, phi_bb42_27}, &block69, std::vector<compiler::Node*>{phi_bb42_25, phi_bb42_27, torque_arguments.length});
  }

  TNode<IntPtrT> phi_bb68_25;
  TNode<Object> phi_bb68_27;
  if (block68.is_used()) {
    ca_.Bind(&block68, &phi_bb68_25, &phi_bb68_27);
    ca_.Goto(&block69, phi_bb68_25, phi_bb68_27, tmp37);
  }

  TNode<IntPtrT> phi_bb69_25;
  TNode<Object> phi_bb69_27;
  TNode<IntPtrT> phi_bb69_28;
  TNode<IntPtrT> tmp146;
  TNode<IntPtrT> tmp147;
  if (block69.is_used()) {
    ca_.Bind(&block69, &phi_bb69_25, &phi_bb69_27, &phi_bb69_28);
    tmp146 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp147 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb69_28}, TNode<IntPtrT>{tmp146});
    CodeStubAssembler(state_).PopAndReturn(TNode<IntPtrT>{tmp147}, TNode<Object>{phi_bb69_27});
  }
}

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/js-to-js.tq?l=68&c=7
TNode<WasmFunctionData> UnsafeCast_WasmFunctionData_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmFunctionData> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block6);
  }

    ca_.Bind(&block6);
  return TNode<WasmFunctionData>{tmp0};
}

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/js-to-js.tq?l=69&c=15
TNode<WasmApiFunctionRef> UnsafeCast_WasmApiFunctionRef_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmApiFunctionRef> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block6);
  }

    ca_.Bind(&block6);
  return TNode<WasmApiFunctionRef>{tmp0};
}

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/js-to-js.tq?l=80&c=29
int31_t SizeOf_int32_0(compiler::CodeAssemblerState* state_) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return kInt32Size;
}

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/js-to-js.tq?l=78&c=25
TorqueStructSlice_int32_ConstReference_int32_0 NewConstSlice_int32_0(compiler::CodeAssemblerState* state_, TNode<Object> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Object> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    std::tie(tmp0, tmp1, tmp2) = (TorqueStructSlice_int32_ConstReference_int32_0{TNode<Object>{p_object}, TNode<IntPtrT>{p_offset}, TNode<IntPtrT>{p_length}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructSlice_int32_ConstReference_int32_0{TNode<Object>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp2}, TorqueStructUnsafe_0{}};
}

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/js-to-js.tq?l=82&c=24
TorqueStructReference_int32_0 NewReference_int32_0(compiler::CodeAssemblerState* state_, TNode<Object> p_object, TNode<IntPtrT> p_offset) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Object> tmp0;
  TNode<IntPtrT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    std::tie(tmp0, tmp1) = (TorqueStructReference_int32_0{TNode<Object>{p_object}, TNode<IntPtrT>{p_offset}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_int32_0{TNode<Object>{tmp0}, TNode<IntPtrT>{tmp1}, TorqueStructUnsafe_0{}};
}

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/builtins/js-to-js.tq?l=85&c=23
TorqueStructSlice_int32_ConstReference_int32_0 Subslice_int32_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_int32_ConstReference_int32_0 p_slice, TNode<IntPtrT> p_start, TNode<IntPtrT> p_length, compiler::CodeAssemblerLabel* label_OutOfBounds) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<UintPtrT> tmp0;
  TNode<UintPtrT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{p_length});
    tmp1 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{p_slice.length});
    tmp2 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{tmp0}, TNode<UintPtrT>{tmp1});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block1);
  }

  TNode<UintPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<UintPtrT> tmp5;
  TNode<BoolT> tmp6;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp3 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{p_start});
    tmp4 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{p_slice.length}, TNode<IntPtrT>{p_length});
    tmp5 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp4});
    tmp6 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{tmp3}, TNode<UintPtrT>{tmp5});
    ca_.Branch(tmp6, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<Object> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<IntPtrT> tmp11;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp7 = TimesSizeOf_int32_0(state_, TNode<IntPtrT>{p_start});
    tmp8 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp7});
    std::tie(tmp9, tmp10, tmp11) = NewConstSlice_int32_0(state_, TNode<Object>{p_slice.object}, TNode<IntPtrT>{tmp8}, TNode<IntPtrT>{p_length}).Flatten();
    ca_.Goto(&block7);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_OutOfBounds);
  }

    ca_.Bind(&block7);
  return TorqueStructSlice_int32_ConstReference_int32_0{TNode<Object>{tmp9}, TNode<IntPtrT>{tmp10}, TNode<IntPtrT>{tmp11}, TorqueStructUnsafe_0{}};
}

} // namespace internal
} // namespace v8
