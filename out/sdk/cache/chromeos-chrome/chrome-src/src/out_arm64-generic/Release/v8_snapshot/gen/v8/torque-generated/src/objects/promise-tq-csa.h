#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_PROMISE_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_PROMISE_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=5&c=1
TNode<PromiseCapability> Cast_PromiseCapability_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=39&c=1
TNode<PromiseReaction> Cast_PromiseReaction_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=70&c=1
TNode<PromiseReactionJobTask> Cast_PromiseReactionJobTask_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=84&c=1
TNode<PromiseFulfillReactionJobTask> Cast_PromiseFulfillReactionJobTask_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=86&c=1
TNode<PromiseRejectReactionJobTask> Cast_PromiseRejectReactionJobTask_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=88&c=1
TNode<PromiseResolveThenableJobTask> Cast_PromiseResolveThenableJobTask_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=6&c=3
TNode<HeapObject> LoadPromiseCapabilityPromise_0(compiler::CodeAssemblerState* state_, TNode<PromiseCapability> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=6&c=3
void StorePromiseCapabilityPromise_0(compiler::CodeAssemblerState* state_, TNode<PromiseCapability> p_o, TNode<HeapObject> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=12&c=3
TNode<Object> LoadPromiseCapabilityResolve_0(compiler::CodeAssemblerState* state_, TNode<PromiseCapability> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=12&c=3
void StorePromiseCapabilityResolve_0(compiler::CodeAssemblerState* state_, TNode<PromiseCapability> p_o, TNode<Object> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=13&c=3
TNode<Object> LoadPromiseCapabilityReject_0(compiler::CodeAssemblerState* state_, TNode<PromiseCapability> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=13&c=3
void StorePromiseCapabilityReject_0(compiler::CodeAssemblerState* state_, TNode<PromiseCapability> p_o, TNode<Object> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=40&c=3
TNode<Object> LoadPromiseReactionNext_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=40&c=3
void StorePromiseReactionNext_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o, TNode<Object> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=41&c=3
TNode<HeapObject> LoadPromiseReactionRejectHandler_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=41&c=3
void StorePromiseReactionRejectHandler_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o, TNode<HeapObject> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=42&c=3
TNode<HeapObject> LoadPromiseReactionFulfillHandler_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=42&c=3
void StorePromiseReactionFulfillHandler_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o, TNode<HeapObject> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=45&c=3
TNode<HeapObject> LoadPromiseReactionPromiseOrCapability_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=45&c=3
void StorePromiseReactionPromiseOrCapability_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o, TNode<HeapObject> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=47&c=3
TNode<Object> LoadPromiseReactionIsolateContinuationPreservedEmbedderData_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=47&c=3
void StorePromiseReactionIsolateContinuationPreservedEmbedderData_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o, TNode<Object> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=49&c=3
TNode<Object> LoadPromiseReactionContextContinuationPreservedEmbedderData_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=49&c=3
void StorePromiseReactionContextContinuationPreservedEmbedderData_0(compiler::CodeAssemblerState* state_, TNode<PromiseReaction> p_o, TNode<Object> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=72&c=3
TNode<Object> LoadPromiseReactionJobTaskArgument_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=72&c=3
void StorePromiseReactionJobTaskArgument_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o, TNode<Object> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=73&c=3
TNode<Context> LoadPromiseReactionJobTaskContext_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=73&c=3
void StorePromiseReactionJobTaskContext_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o, TNode<Context> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=74&c=3
TNode<HeapObject> LoadPromiseReactionJobTaskHandler_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=74&c=3
void StorePromiseReactionJobTaskHandler_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o, TNode<HeapObject> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=77&c=3
TNode<HeapObject> LoadPromiseReactionJobTaskPromiseOrCapability_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=77&c=3
void StorePromiseReactionJobTaskPromiseOrCapability_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o, TNode<HeapObject> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=79&c=3
TNode<Object> LoadPromiseReactionJobTaskIsolateContinuationPreservedEmbedderData_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=79&c=3
void StorePromiseReactionJobTaskIsolateContinuationPreservedEmbedderData_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o, TNode<Object> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=81&c=3
TNode<Object> LoadPromiseReactionJobTaskContextContinuationPreservedEmbedderData_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=81&c=3
void StorePromiseReactionJobTaskContextContinuationPreservedEmbedderData_0(compiler::CodeAssemblerState* state_, TNode<PromiseReactionJobTask> p_o, TNode<Object> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=89&c=3
TNode<Context> LoadPromiseResolveThenableJobTaskContext_0(compiler::CodeAssemblerState* state_, TNode<PromiseResolveThenableJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=89&c=3
void StorePromiseResolveThenableJobTaskContext_0(compiler::CodeAssemblerState* state_, TNode<PromiseResolveThenableJobTask> p_o, TNode<Context> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=90&c=3
TNode<JSPromise> LoadPromiseResolveThenableJobTaskPromiseToResolve_0(compiler::CodeAssemblerState* state_, TNode<PromiseResolveThenableJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=90&c=3
void StorePromiseResolveThenableJobTaskPromiseToResolve_0(compiler::CodeAssemblerState* state_, TNode<PromiseResolveThenableJobTask> p_o, TNode<JSPromise> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=91&c=3
TNode<JSReceiver> LoadPromiseResolveThenableJobTaskThenable_0(compiler::CodeAssemblerState* state_, TNode<PromiseResolveThenableJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=91&c=3
void StorePromiseResolveThenableJobTaskThenable_0(compiler::CodeAssemblerState* state_, TNode<PromiseResolveThenableJobTask> p_o, TNode<JSReceiver> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=92&c=3
TNode<JSReceiver> LoadPromiseResolveThenableJobTaskThen_0(compiler::CodeAssemblerState* state_, TNode<PromiseResolveThenableJobTask> p_o);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=92&c=3
void StorePromiseResolveThenableJobTaskThen_0(compiler::CodeAssemblerState* state_, TNode<PromiseResolveThenableJobTask> p_o, TNode<JSReceiver> p_v);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=5&c=1
TNode<PromiseCapability> DownCastForTorqueClass_PromiseCapability_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=39&c=1
TNode<PromiseReaction> DownCastForTorqueClass_PromiseReaction_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=70&c=1
TNode<PromiseReactionJobTask> DownCastForTorqueClass_PromiseReactionJobTask_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=84&c=1
TNode<PromiseFulfillReactionJobTask> DownCastForTorqueClass_PromiseFulfillReactionJobTask_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=86&c=1
TNode<PromiseRejectReactionJobTask> DownCastForTorqueClass_PromiseRejectReactionJobTask_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=88&c=1
TNode<PromiseResolveThenableJobTask> DownCastForTorqueClass_PromiseResolveThenableJobTask_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_PROMISE_TQ_CSA_H_
