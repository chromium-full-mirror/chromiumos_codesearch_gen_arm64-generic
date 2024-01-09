#include "src/objects/promise-inl.h"

#include "torque-generated/class-verifiers.h"
#include "src/objects/instance-type-inl.h"

namespace v8 {
namespace internal {

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=5&c=1
bool IsPromiseCapability_NonInline(Tagged<HeapObject> o) {
  return IsPromiseCapability(o);
}

#ifdef VERIFY_HEAP

template <>
void TorqueGeneratedPromiseCapability<PromiseCapability, Struct>::PromiseCapabilityVerify(Isolate* isolate) {
  TorqueGeneratedClassVerifiers::PromiseCapabilityVerify(PromiseCapability::cast(*this), isolate);
}


#endif  // VERIFY_HEAP
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=39&c=1
bool IsPromiseReaction_NonInline(Tagged<HeapObject> o) {
  return IsPromiseReaction(o);
}

#ifdef VERIFY_HEAP

template <>
void TorqueGeneratedPromiseReaction<PromiseReaction, Struct>::PromiseReactionVerify(Isolate* isolate) {
  TorqueGeneratedClassVerifiers::PromiseReactionVerify(PromiseReaction::cast(*this), isolate);
}


#endif  // VERIFY_HEAP
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=70&c=1
bool IsPromiseReactionJobTask_NonInline(Tagged<HeapObject> o) {
  return IsPromiseReactionJobTask(o);
}

#ifdef VERIFY_HEAP

template <>
void TorqueGeneratedPromiseReactionJobTask<PromiseReactionJobTask, Microtask>::PromiseReactionJobTaskVerify(Isolate* isolate) {
  TorqueGeneratedClassVerifiers::PromiseReactionJobTaskVerify(PromiseReactionJobTask::cast(*this), isolate);
}


#endif  // VERIFY_HEAP
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=84&c=1
bool IsPromiseFulfillReactionJobTask_NonInline(Tagged<HeapObject> o) {
  return IsPromiseFulfillReactionJobTask(o);
}

#ifdef VERIFY_HEAP

template <>
void TorqueGeneratedPromiseFulfillReactionJobTask<PromiseFulfillReactionJobTask, PromiseReactionJobTask>::PromiseFulfillReactionJobTaskVerify(Isolate* isolate) {
  TorqueGeneratedClassVerifiers::PromiseFulfillReactionJobTaskVerify(PromiseFulfillReactionJobTask::cast(*this), isolate);
}


#endif  // VERIFY_HEAP
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=86&c=1
bool IsPromiseRejectReactionJobTask_NonInline(Tagged<HeapObject> o) {
  return IsPromiseRejectReactionJobTask(o);
}

#ifdef VERIFY_HEAP

template <>
void TorqueGeneratedPromiseRejectReactionJobTask<PromiseRejectReactionJobTask, PromiseReactionJobTask>::PromiseRejectReactionJobTaskVerify(Isolate* isolate) {
  TorqueGeneratedClassVerifiers::PromiseRejectReactionJobTaskVerify(PromiseRejectReactionJobTask::cast(*this), isolate);
}


#endif  // VERIFY_HEAP
// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/promise.tq?l=88&c=1
bool IsPromiseResolveThenableJobTask_NonInline(Tagged<HeapObject> o) {
  return IsPromiseResolveThenableJobTask(o);
}

#ifdef VERIFY_HEAP

template <>
void TorqueGeneratedPromiseResolveThenableJobTask<PromiseResolveThenableJobTask, Microtask>::PromiseResolveThenableJobTaskVerify(Isolate* isolate) {
  TorqueGeneratedClassVerifiers::PromiseResolveThenableJobTaskVerify(PromiseResolveThenableJobTask::cast(*this), isolate);
}


#endif  // VERIFY_HEAP
} // namespace internal
} // namespace v8
