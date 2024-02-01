
#include "dawn/dawn_proc.h"

// The sanitizer is disabled for calls to procs.* since those functions may be
// dynamically loaded.
#include "dawn/common/Compiler.h"

static DawnProcTable procs;

static DawnProcTable nullProcs;

void dawnProcSetProcs(const DawnProcTable* procs_) {
    if (procs_) {
        procs = *procs_;
    } else {
        procs = nullProcs;
    }
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuAdapterPropertiesFreeMembers(WGPUAdapterProperties value) {
    procs.adapterPropertiesFreeMembers(value);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuAdapterPropertiesMemoryHeapsFreeMembers(WGPUAdapterPropertiesMemoryHeaps value) {
    procs.adapterPropertiesMemoryHeapsFreeMembers(value);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUInstance wgpuCreateInstance(WGPUInstanceDescriptor const * descriptor) {
return     procs.createInstance(descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuGetInstanceFeatures(WGPUInstanceFeatures * features) {
return     procs.getInstanceFeatures(features);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUProc wgpuGetProcAddress(WGPUDevice device, char const * procName) {
return     procs.getProcAddress(device, procName);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSharedTextureMemoryEndAccessStateFreeMembers(WGPUSharedTextureMemoryEndAccessState value) {
    procs.sharedTextureMemoryEndAccessStateFreeMembers(value);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUDevice wgpuAdapterCreateDevice(WGPUAdapter adapter, WGPUDeviceDescriptor const * descriptor) {
return     procs.adapterCreateDevice(adapter, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
size_t wgpuAdapterEnumerateFeatures(WGPUAdapter adapter, WGPUFeatureName * features) {
return     procs.adapterEnumerateFeatures(adapter, features);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUInstance wgpuAdapterGetInstance(WGPUAdapter adapter) {
return     procs.adapterGetInstance(adapter);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuAdapterGetLimits(WGPUAdapter adapter, WGPUSupportedLimits * limits) {
return     procs.adapterGetLimits(adapter, limits);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuAdapterGetProperties(WGPUAdapter adapter, WGPUAdapterProperties * properties) {
    procs.adapterGetProperties(adapter, properties);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuAdapterHasFeature(WGPUAdapter adapter, WGPUFeatureName feature) {
return     procs.adapterHasFeature(adapter, feature);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuAdapterRequestDevice(WGPUAdapter adapter, WGPUDeviceDescriptor const * descriptor, WGPURequestDeviceCallback callback, void * userdata) {
    procs.adapterRequestDevice(adapter, descriptor, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUFuture wgpuAdapterRequestDeviceF(WGPUAdapter adapter, WGPUDeviceDescriptor const * options, WGPURequestDeviceCallbackInfo callbackInfo) {
return     procs.adapterRequestDeviceF(adapter, options, callbackInfo);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuAdapterReference(WGPUAdapter adapter) {
    procs.adapterReference(adapter);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuAdapterRelease(WGPUAdapter adapter) {
    procs.adapterRelease(adapter);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuBindGroupSetLabel(WGPUBindGroup bindGroup, char const * label) {
    procs.bindGroupSetLabel(bindGroup, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBindGroupReference(WGPUBindGroup bindGroup) {
    procs.bindGroupReference(bindGroup);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBindGroupRelease(WGPUBindGroup bindGroup) {
    procs.bindGroupRelease(bindGroup);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuBindGroupLayoutSetLabel(WGPUBindGroupLayout bindGroupLayout, char const * label) {
    procs.bindGroupLayoutSetLabel(bindGroupLayout, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBindGroupLayoutReference(WGPUBindGroupLayout bindGroupLayout) {
    procs.bindGroupLayoutReference(bindGroupLayout);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBindGroupLayoutRelease(WGPUBindGroupLayout bindGroupLayout) {
    procs.bindGroupLayoutRelease(bindGroupLayout);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuBufferDestroy(WGPUBuffer buffer) {
    procs.bufferDestroy(buffer);
}
DAWN_NO_SANITIZE("cfi-icall")
void const * wgpuBufferGetConstMappedRange(WGPUBuffer buffer, size_t offset, size_t size) {
return     procs.bufferGetConstMappedRange(buffer, offset, size);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBufferMapState wgpuBufferGetMapState(WGPUBuffer buffer) {
return     procs.bufferGetMapState(buffer);
}
DAWN_NO_SANITIZE("cfi-icall")
void * wgpuBufferGetMappedRange(WGPUBuffer buffer, size_t offset, size_t size) {
return     procs.bufferGetMappedRange(buffer, offset, size);
}
DAWN_NO_SANITIZE("cfi-icall")
uint64_t wgpuBufferGetSize(WGPUBuffer buffer) {
return     procs.bufferGetSize(buffer);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBufferUsageFlags wgpuBufferGetUsage(WGPUBuffer buffer) {
return     procs.bufferGetUsage(buffer);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBufferMapAsync(WGPUBuffer buffer, WGPUMapModeFlags mode, size_t offset, size_t size, WGPUBufferMapCallback callback, void * userdata) {
    procs.bufferMapAsync(buffer, mode, offset, size, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUFuture wgpuBufferMapAsyncF(WGPUBuffer buffer, WGPUMapModeFlags mode, size_t offset, size_t size, WGPUBufferMapCallbackInfo callbackInfo) {
return     procs.bufferMapAsyncF(buffer, mode, offset, size, callbackInfo);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBufferSetLabel(WGPUBuffer buffer, char const * label) {
    procs.bufferSetLabel(buffer, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBufferUnmap(WGPUBuffer buffer) {
    procs.bufferUnmap(buffer);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBufferReference(WGPUBuffer buffer) {
    procs.bufferReference(buffer);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuBufferRelease(WGPUBuffer buffer) {
    procs.bufferRelease(buffer);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandBufferSetLabel(WGPUCommandBuffer commandBuffer, char const * label) {
    procs.commandBufferSetLabel(commandBuffer, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandBufferReference(WGPUCommandBuffer commandBuffer) {
    procs.commandBufferReference(commandBuffer);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandBufferRelease(WGPUCommandBuffer commandBuffer) {
    procs.commandBufferRelease(commandBuffer);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUComputePassEncoder wgpuCommandEncoderBeginComputePass(WGPUCommandEncoder commandEncoder, WGPUComputePassDescriptor const * descriptor) {
return     procs.commandEncoderBeginComputePass(commandEncoder, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPURenderPassEncoder wgpuCommandEncoderBeginRenderPass(WGPUCommandEncoder commandEncoder, WGPURenderPassDescriptor const * descriptor) {
return     procs.commandEncoderBeginRenderPass(commandEncoder, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderClearBuffer(WGPUCommandEncoder commandEncoder, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
    procs.commandEncoderClearBuffer(commandEncoder, buffer, offset, size);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderCopyBufferToBuffer(WGPUCommandEncoder commandEncoder, WGPUBuffer source, uint64_t sourceOffset, WGPUBuffer destination, uint64_t destinationOffset, uint64_t size) {
    procs.commandEncoderCopyBufferToBuffer(commandEncoder, source, sourceOffset, destination, destinationOffset, size);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderCopyBufferToTexture(WGPUCommandEncoder commandEncoder, WGPUImageCopyBuffer const * source, WGPUImageCopyTexture const * destination, WGPUExtent3D const * copySize) {
    procs.commandEncoderCopyBufferToTexture(commandEncoder, source, destination, copySize);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderCopyTextureToBuffer(WGPUCommandEncoder commandEncoder, WGPUImageCopyTexture const * source, WGPUImageCopyBuffer const * destination, WGPUExtent3D const * copySize) {
    procs.commandEncoderCopyTextureToBuffer(commandEncoder, source, destination, copySize);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderCopyTextureToTexture(WGPUCommandEncoder commandEncoder, WGPUImageCopyTexture const * source, WGPUImageCopyTexture const * destination, WGPUExtent3D const * copySize) {
    procs.commandEncoderCopyTextureToTexture(commandEncoder, source, destination, copySize);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUCommandBuffer wgpuCommandEncoderFinish(WGPUCommandEncoder commandEncoder, WGPUCommandBufferDescriptor const * descriptor) {
return     procs.commandEncoderFinish(commandEncoder, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderInjectValidationError(WGPUCommandEncoder commandEncoder, char const * message) {
    procs.commandEncoderInjectValidationError(commandEncoder, message);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderInsertDebugMarker(WGPUCommandEncoder commandEncoder, char const * markerLabel) {
    procs.commandEncoderInsertDebugMarker(commandEncoder, markerLabel);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderPopDebugGroup(WGPUCommandEncoder commandEncoder) {
    procs.commandEncoderPopDebugGroup(commandEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderPushDebugGroup(WGPUCommandEncoder commandEncoder, char const * groupLabel) {
    procs.commandEncoderPushDebugGroup(commandEncoder, groupLabel);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderResolveQuerySet(WGPUCommandEncoder commandEncoder, WGPUQuerySet querySet, uint32_t firstQuery, uint32_t queryCount, WGPUBuffer destination, uint64_t destinationOffset) {
    procs.commandEncoderResolveQuerySet(commandEncoder, querySet, firstQuery, queryCount, destination, destinationOffset);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderSetLabel(WGPUCommandEncoder commandEncoder, char const * label) {
    procs.commandEncoderSetLabel(commandEncoder, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderWriteBuffer(WGPUCommandEncoder commandEncoder, WGPUBuffer buffer, uint64_t bufferOffset, uint8_t const * data, uint64_t size) {
    procs.commandEncoderWriteBuffer(commandEncoder, buffer, bufferOffset, data, size);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderWriteTimestamp(WGPUCommandEncoder commandEncoder, WGPUQuerySet querySet, uint32_t queryIndex) {
    procs.commandEncoderWriteTimestamp(commandEncoder, querySet, queryIndex);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderReference(WGPUCommandEncoder commandEncoder) {
    procs.commandEncoderReference(commandEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuCommandEncoderRelease(WGPUCommandEncoder commandEncoder) {
    procs.commandEncoderRelease(commandEncoder);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderDispatchWorkgroups(WGPUComputePassEncoder computePassEncoder, uint32_t workgroupCountX, uint32_t workgroupCountY, uint32_t workgroupCountZ) {
    procs.computePassEncoderDispatchWorkgroups(computePassEncoder, workgroupCountX, workgroupCountY, workgroupCountZ);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderDispatchWorkgroupsIndirect(WGPUComputePassEncoder computePassEncoder, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    procs.computePassEncoderDispatchWorkgroupsIndirect(computePassEncoder, indirectBuffer, indirectOffset);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderEnd(WGPUComputePassEncoder computePassEncoder) {
    procs.computePassEncoderEnd(computePassEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderInsertDebugMarker(WGPUComputePassEncoder computePassEncoder, char const * markerLabel) {
    procs.computePassEncoderInsertDebugMarker(computePassEncoder, markerLabel);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderPopDebugGroup(WGPUComputePassEncoder computePassEncoder) {
    procs.computePassEncoderPopDebugGroup(computePassEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderPushDebugGroup(WGPUComputePassEncoder computePassEncoder, char const * groupLabel) {
    procs.computePassEncoderPushDebugGroup(computePassEncoder, groupLabel);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderSetBindGroup(WGPUComputePassEncoder computePassEncoder, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
    procs.computePassEncoderSetBindGroup(computePassEncoder, groupIndex, group, dynamicOffsetCount, dynamicOffsets);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderSetLabel(WGPUComputePassEncoder computePassEncoder, char const * label) {
    procs.computePassEncoderSetLabel(computePassEncoder, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderSetPipeline(WGPUComputePassEncoder computePassEncoder, WGPUComputePipeline pipeline) {
    procs.computePassEncoderSetPipeline(computePassEncoder, pipeline);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderWriteTimestamp(WGPUComputePassEncoder computePassEncoder, WGPUQuerySet querySet, uint32_t queryIndex) {
    procs.computePassEncoderWriteTimestamp(computePassEncoder, querySet, queryIndex);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderReference(WGPUComputePassEncoder computePassEncoder) {
    procs.computePassEncoderReference(computePassEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePassEncoderRelease(WGPUComputePassEncoder computePassEncoder) {
    procs.computePassEncoderRelease(computePassEncoder);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUBindGroupLayout wgpuComputePipelineGetBindGroupLayout(WGPUComputePipeline computePipeline, uint32_t groupIndex) {
return     procs.computePipelineGetBindGroupLayout(computePipeline, groupIndex);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePipelineSetLabel(WGPUComputePipeline computePipeline, char const * label) {
    procs.computePipelineSetLabel(computePipeline, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePipelineReference(WGPUComputePipeline computePipeline) {
    procs.computePipelineReference(computePipeline);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuComputePipelineRelease(WGPUComputePipeline computePipeline) {
    procs.computePipelineRelease(computePipeline);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUBindGroup wgpuDeviceCreateBindGroup(WGPUDevice device, WGPUBindGroupDescriptor const * descriptor) {
return     procs.deviceCreateBindGroup(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBindGroupLayout wgpuDeviceCreateBindGroupLayout(WGPUDevice device, WGPUBindGroupLayoutDescriptor const * descriptor) {
return     procs.deviceCreateBindGroupLayout(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBuffer wgpuDeviceCreateBuffer(WGPUDevice device, WGPUBufferDescriptor const * descriptor) {
return     procs.deviceCreateBuffer(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUCommandEncoder wgpuDeviceCreateCommandEncoder(WGPUDevice device, WGPUCommandEncoderDescriptor const * descriptor) {
return     procs.deviceCreateCommandEncoder(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUComputePipeline wgpuDeviceCreateComputePipeline(WGPUDevice device, WGPUComputePipelineDescriptor const * descriptor) {
return     procs.deviceCreateComputePipeline(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceCreateComputePipelineAsync(WGPUDevice device, WGPUComputePipelineDescriptor const * descriptor, WGPUCreateComputePipelineAsyncCallback callback, void * userdata) {
    procs.deviceCreateComputePipelineAsync(device, descriptor, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUFuture wgpuDeviceCreateComputePipelineAsyncF(WGPUDevice device, WGPUComputePipelineDescriptor const * descriptor, WGPUCreateComputePipelineAsyncCallbackInfo callbackInfo) {
return     procs.deviceCreateComputePipelineAsyncF(device, descriptor, callbackInfo);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBuffer wgpuDeviceCreateErrorBuffer(WGPUDevice device, WGPUBufferDescriptor const * descriptor) {
return     procs.deviceCreateErrorBuffer(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUExternalTexture wgpuDeviceCreateErrorExternalTexture(WGPUDevice device) {
return     procs.deviceCreateErrorExternalTexture(device);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUShaderModule wgpuDeviceCreateErrorShaderModule(WGPUDevice device, WGPUShaderModuleDescriptor const * descriptor, char const * errorMessage) {
return     procs.deviceCreateErrorShaderModule(device, descriptor, errorMessage);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTexture wgpuDeviceCreateErrorTexture(WGPUDevice device, WGPUTextureDescriptor const * descriptor) {
return     procs.deviceCreateErrorTexture(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUExternalTexture wgpuDeviceCreateExternalTexture(WGPUDevice device, WGPUExternalTextureDescriptor const * externalTextureDescriptor) {
return     procs.deviceCreateExternalTexture(device, externalTextureDescriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUPipelineLayout wgpuDeviceCreatePipelineLayout(WGPUDevice device, WGPUPipelineLayoutDescriptor const * descriptor) {
return     procs.deviceCreatePipelineLayout(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUQuerySet wgpuDeviceCreateQuerySet(WGPUDevice device, WGPUQuerySetDescriptor const * descriptor) {
return     procs.deviceCreateQuerySet(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPURenderBundleEncoder wgpuDeviceCreateRenderBundleEncoder(WGPUDevice device, WGPURenderBundleEncoderDescriptor const * descriptor) {
return     procs.deviceCreateRenderBundleEncoder(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPURenderPipeline wgpuDeviceCreateRenderPipeline(WGPUDevice device, WGPURenderPipelineDescriptor const * descriptor) {
return     procs.deviceCreateRenderPipeline(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceCreateRenderPipelineAsync(WGPUDevice device, WGPURenderPipelineDescriptor const * descriptor, WGPUCreateRenderPipelineAsyncCallback callback, void * userdata) {
    procs.deviceCreateRenderPipelineAsync(device, descriptor, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUFuture wgpuDeviceCreateRenderPipelineAsyncF(WGPUDevice device, WGPURenderPipelineDescriptor const * descriptor, WGPUCreateRenderPipelineAsyncCallbackInfo callbackInfo) {
return     procs.deviceCreateRenderPipelineAsyncF(device, descriptor, callbackInfo);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUSampler wgpuDeviceCreateSampler(WGPUDevice device, WGPUSamplerDescriptor const * descriptor) {
return     procs.deviceCreateSampler(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUShaderModule wgpuDeviceCreateShaderModule(WGPUDevice device, WGPUShaderModuleDescriptor const * descriptor) {
return     procs.deviceCreateShaderModule(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUSwapChain wgpuDeviceCreateSwapChain(WGPUDevice device, WGPUSurface surface, WGPUSwapChainDescriptor const * descriptor) {
return     procs.deviceCreateSwapChain(device, surface, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTexture wgpuDeviceCreateTexture(WGPUDevice device, WGPUTextureDescriptor const * descriptor) {
return     procs.deviceCreateTexture(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceDestroy(WGPUDevice device) {
    procs.deviceDestroy(device);
}
DAWN_NO_SANITIZE("cfi-icall")
size_t wgpuDeviceEnumerateFeatures(WGPUDevice device, WGPUFeatureName * features) {
return     procs.deviceEnumerateFeatures(device, features);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceForceLoss(WGPUDevice device, WGPUDeviceLostReason type, char const * message) {
    procs.deviceForceLoss(device, type, message);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUAdapter wgpuDeviceGetAdapter(WGPUDevice device) {
return     procs.deviceGetAdapter(device);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuDeviceGetLimits(WGPUDevice device, WGPUSupportedLimits * limits) {
return     procs.deviceGetLimits(device, limits);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUQueue wgpuDeviceGetQueue(WGPUDevice device) {
return     procs.deviceGetQueue(device);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTextureUsageFlags wgpuDeviceGetSupportedSurfaceUsage(WGPUDevice device, WGPUSurface surface) {
return     procs.deviceGetSupportedSurfaceUsage(device, surface);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuDeviceHasFeature(WGPUDevice device, WGPUFeatureName feature) {
return     procs.deviceHasFeature(device, feature);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUSharedFence wgpuDeviceImportSharedFence(WGPUDevice device, WGPUSharedFenceDescriptor const * descriptor) {
return     procs.deviceImportSharedFence(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUSharedTextureMemory wgpuDeviceImportSharedTextureMemory(WGPUDevice device, WGPUSharedTextureMemoryDescriptor const * descriptor) {
return     procs.deviceImportSharedTextureMemory(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceInjectError(WGPUDevice device, WGPUErrorType type, char const * message) {
    procs.deviceInjectError(device, type, message);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDevicePopErrorScope(WGPUDevice device, WGPUErrorCallback callback, void * userdata) {
    procs.devicePopErrorScope(device, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDevicePushErrorScope(WGPUDevice device, WGPUErrorFilter filter) {
    procs.devicePushErrorScope(device, filter);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceSetDeviceLostCallback(WGPUDevice device, WGPUDeviceLostCallback callback, void * userdata) {
    procs.deviceSetDeviceLostCallback(device, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceSetLabel(WGPUDevice device, char const * label) {
    procs.deviceSetLabel(device, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceSetLoggingCallback(WGPUDevice device, WGPULoggingCallback callback, void * userdata) {
    procs.deviceSetLoggingCallback(device, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceSetUncapturedErrorCallback(WGPUDevice device, WGPUErrorCallback callback, void * userdata) {
    procs.deviceSetUncapturedErrorCallback(device, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceTick(WGPUDevice device) {
    procs.deviceTick(device);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceValidateTextureDescriptor(WGPUDevice device, WGPUTextureDescriptor const * descriptor) {
    procs.deviceValidateTextureDescriptor(device, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceReference(WGPUDevice device) {
    procs.deviceReference(device);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuDeviceRelease(WGPUDevice device) {
    procs.deviceRelease(device);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuExternalTextureDestroy(WGPUExternalTexture externalTexture) {
    procs.externalTextureDestroy(externalTexture);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuExternalTextureExpire(WGPUExternalTexture externalTexture) {
    procs.externalTextureExpire(externalTexture);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuExternalTextureRefresh(WGPUExternalTexture externalTexture) {
    procs.externalTextureRefresh(externalTexture);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuExternalTextureSetLabel(WGPUExternalTexture externalTexture, char const * label) {
    procs.externalTextureSetLabel(externalTexture, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuExternalTextureReference(WGPUExternalTexture externalTexture) {
    procs.externalTextureReference(externalTexture);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuExternalTextureRelease(WGPUExternalTexture externalTexture) {
    procs.externalTextureRelease(externalTexture);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUSurface wgpuInstanceCreateSurface(WGPUInstance instance, WGPUSurfaceDescriptor const * descriptor) {
return     procs.instanceCreateSurface(instance, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
size_t wgpuInstanceEnumerateWGSLLanguageFeatures(WGPUInstance instance, WGPUWGSLFeatureName * features) {
return     procs.instanceEnumerateWGSLLanguageFeatures(instance, features);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuInstanceHasWGSLLanguageFeature(WGPUInstance instance, WGPUWGSLFeatureName feature) {
return     procs.instanceHasWGSLLanguageFeature(instance, feature);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuInstanceProcessEvents(WGPUInstance instance) {
    procs.instanceProcessEvents(instance);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuInstanceRequestAdapter(WGPUInstance instance, WGPURequestAdapterOptions const * options, WGPURequestAdapterCallback callback, void * userdata) {
    procs.instanceRequestAdapter(instance, options, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUFuture wgpuInstanceRequestAdapterF(WGPUInstance instance, WGPURequestAdapterOptions const * options, WGPURequestAdapterCallbackInfo callbackInfo) {
return     procs.instanceRequestAdapterF(instance, options, callbackInfo);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUWaitStatus wgpuInstanceWaitAny(WGPUInstance instance, size_t futureCount, WGPUFutureWaitInfo * futures, uint64_t timeoutNS) {
return     procs.instanceWaitAny(instance, futureCount, futures, timeoutNS);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuInstanceReference(WGPUInstance instance) {
    procs.instanceReference(instance);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuInstanceRelease(WGPUInstance instance) {
    procs.instanceRelease(instance);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuPipelineLayoutSetLabel(WGPUPipelineLayout pipelineLayout, char const * label) {
    procs.pipelineLayoutSetLabel(pipelineLayout, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuPipelineLayoutReference(WGPUPipelineLayout pipelineLayout) {
    procs.pipelineLayoutReference(pipelineLayout);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuPipelineLayoutRelease(WGPUPipelineLayout pipelineLayout) {
    procs.pipelineLayoutRelease(pipelineLayout);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuQuerySetDestroy(WGPUQuerySet querySet) {
    procs.querySetDestroy(querySet);
}
DAWN_NO_SANITIZE("cfi-icall")
uint32_t wgpuQuerySetGetCount(WGPUQuerySet querySet) {
return     procs.querySetGetCount(querySet);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUQueryType wgpuQuerySetGetType(WGPUQuerySet querySet) {
return     procs.querySetGetType(querySet);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQuerySetSetLabel(WGPUQuerySet querySet, char const * label) {
    procs.querySetSetLabel(querySet, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQuerySetReference(WGPUQuerySet querySet) {
    procs.querySetReference(querySet);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQuerySetRelease(WGPUQuerySet querySet) {
    procs.querySetRelease(querySet);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueCopyExternalTextureForBrowser(WGPUQueue queue, WGPUImageCopyExternalTexture const * source, WGPUImageCopyTexture const * destination, WGPUExtent3D const * copySize, WGPUCopyTextureForBrowserOptions const * options) {
    procs.queueCopyExternalTextureForBrowser(queue, source, destination, copySize, options);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueCopyTextureForBrowser(WGPUQueue queue, WGPUImageCopyTexture const * source, WGPUImageCopyTexture const * destination, WGPUExtent3D const * copySize, WGPUCopyTextureForBrowserOptions const * options) {
    procs.queueCopyTextureForBrowser(queue, source, destination, copySize, options);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueOnSubmittedWorkDone(WGPUQueue queue, WGPUQueueWorkDoneCallback callback, void * userdata) {
    procs.queueOnSubmittedWorkDone(queue, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUFuture wgpuQueueOnSubmittedWorkDoneF(WGPUQueue queue, WGPUQueueWorkDoneCallbackInfo callbackInfo) {
return     procs.queueOnSubmittedWorkDoneF(queue, callbackInfo);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueSetLabel(WGPUQueue queue, char const * label) {
    procs.queueSetLabel(queue, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueSubmit(WGPUQueue queue, size_t commandCount, WGPUCommandBuffer const * commands) {
    procs.queueSubmit(queue, commandCount, commands);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueWriteBuffer(WGPUQueue queue, WGPUBuffer buffer, uint64_t bufferOffset, void const * data, size_t size) {
    procs.queueWriteBuffer(queue, buffer, bufferOffset, data, size);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueWriteTexture(WGPUQueue queue, WGPUImageCopyTexture const * destination, void const * data, size_t dataSize, WGPUTextureDataLayout const * dataLayout, WGPUExtent3D const * writeSize) {
    procs.queueWriteTexture(queue, destination, data, dataSize, dataLayout, writeSize);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueReference(WGPUQueue queue) {
    procs.queueReference(queue);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuQueueRelease(WGPUQueue queue) {
    procs.queueRelease(queue);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleSetLabel(WGPURenderBundle renderBundle, char const * label) {
    procs.renderBundleSetLabel(renderBundle, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleReference(WGPURenderBundle renderBundle) {
    procs.renderBundleReference(renderBundle);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleRelease(WGPURenderBundle renderBundle) {
    procs.renderBundleRelease(renderBundle);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderDraw(WGPURenderBundleEncoder renderBundleEncoder, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance) {
    procs.renderBundleEncoderDraw(renderBundleEncoder, vertexCount, instanceCount, firstVertex, firstInstance);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderDrawIndexed(WGPURenderBundleEncoder renderBundleEncoder, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance) {
    procs.renderBundleEncoderDrawIndexed(renderBundleEncoder, indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderDrawIndexedIndirect(WGPURenderBundleEncoder renderBundleEncoder, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    procs.renderBundleEncoderDrawIndexedIndirect(renderBundleEncoder, indirectBuffer, indirectOffset);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderDrawIndirect(WGPURenderBundleEncoder renderBundleEncoder, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    procs.renderBundleEncoderDrawIndirect(renderBundleEncoder, indirectBuffer, indirectOffset);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPURenderBundle wgpuRenderBundleEncoderFinish(WGPURenderBundleEncoder renderBundleEncoder, WGPURenderBundleDescriptor const * descriptor) {
return     procs.renderBundleEncoderFinish(renderBundleEncoder, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderInsertDebugMarker(WGPURenderBundleEncoder renderBundleEncoder, char const * markerLabel) {
    procs.renderBundleEncoderInsertDebugMarker(renderBundleEncoder, markerLabel);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderPopDebugGroup(WGPURenderBundleEncoder renderBundleEncoder) {
    procs.renderBundleEncoderPopDebugGroup(renderBundleEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderPushDebugGroup(WGPURenderBundleEncoder renderBundleEncoder, char const * groupLabel) {
    procs.renderBundleEncoderPushDebugGroup(renderBundleEncoder, groupLabel);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderSetBindGroup(WGPURenderBundleEncoder renderBundleEncoder, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
    procs.renderBundleEncoderSetBindGroup(renderBundleEncoder, groupIndex, group, dynamicOffsetCount, dynamicOffsets);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderSetIndexBuffer(WGPURenderBundleEncoder renderBundleEncoder, WGPUBuffer buffer, WGPUIndexFormat format, uint64_t offset, uint64_t size) {
    procs.renderBundleEncoderSetIndexBuffer(renderBundleEncoder, buffer, format, offset, size);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderSetLabel(WGPURenderBundleEncoder renderBundleEncoder, char const * label) {
    procs.renderBundleEncoderSetLabel(renderBundleEncoder, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderSetPipeline(WGPURenderBundleEncoder renderBundleEncoder, WGPURenderPipeline pipeline) {
    procs.renderBundleEncoderSetPipeline(renderBundleEncoder, pipeline);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderSetVertexBuffer(WGPURenderBundleEncoder renderBundleEncoder, uint32_t slot, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
    procs.renderBundleEncoderSetVertexBuffer(renderBundleEncoder, slot, buffer, offset, size);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderReference(WGPURenderBundleEncoder renderBundleEncoder) {
    procs.renderBundleEncoderReference(renderBundleEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderBundleEncoderRelease(WGPURenderBundleEncoder renderBundleEncoder) {
    procs.renderBundleEncoderRelease(renderBundleEncoder);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderBeginOcclusionQuery(WGPURenderPassEncoder renderPassEncoder, uint32_t queryIndex) {
    procs.renderPassEncoderBeginOcclusionQuery(renderPassEncoder, queryIndex);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderDraw(WGPURenderPassEncoder renderPassEncoder, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance) {
    procs.renderPassEncoderDraw(renderPassEncoder, vertexCount, instanceCount, firstVertex, firstInstance);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderDrawIndexed(WGPURenderPassEncoder renderPassEncoder, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance) {
    procs.renderPassEncoderDrawIndexed(renderPassEncoder, indexCount, instanceCount, firstIndex, baseVertex, firstInstance);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderDrawIndexedIndirect(WGPURenderPassEncoder renderPassEncoder, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    procs.renderPassEncoderDrawIndexedIndirect(renderPassEncoder, indirectBuffer, indirectOffset);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderDrawIndirect(WGPURenderPassEncoder renderPassEncoder, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    procs.renderPassEncoderDrawIndirect(renderPassEncoder, indirectBuffer, indirectOffset);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderEnd(WGPURenderPassEncoder renderPassEncoder) {
    procs.renderPassEncoderEnd(renderPassEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderEndOcclusionQuery(WGPURenderPassEncoder renderPassEncoder) {
    procs.renderPassEncoderEndOcclusionQuery(renderPassEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderExecuteBundles(WGPURenderPassEncoder renderPassEncoder, size_t bundleCount, WGPURenderBundle const * bundles) {
    procs.renderPassEncoderExecuteBundles(renderPassEncoder, bundleCount, bundles);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderInsertDebugMarker(WGPURenderPassEncoder renderPassEncoder, char const * markerLabel) {
    procs.renderPassEncoderInsertDebugMarker(renderPassEncoder, markerLabel);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderPixelLocalStorageBarrier(WGPURenderPassEncoder renderPassEncoder) {
    procs.renderPassEncoderPixelLocalStorageBarrier(renderPassEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderPopDebugGroup(WGPURenderPassEncoder renderPassEncoder) {
    procs.renderPassEncoderPopDebugGroup(renderPassEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderPushDebugGroup(WGPURenderPassEncoder renderPassEncoder, char const * groupLabel) {
    procs.renderPassEncoderPushDebugGroup(renderPassEncoder, groupLabel);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetBindGroup(WGPURenderPassEncoder renderPassEncoder, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
    procs.renderPassEncoderSetBindGroup(renderPassEncoder, groupIndex, group, dynamicOffsetCount, dynamicOffsets);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetBlendConstant(WGPURenderPassEncoder renderPassEncoder, WGPUColor const * color) {
    procs.renderPassEncoderSetBlendConstant(renderPassEncoder, color);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetIndexBuffer(WGPURenderPassEncoder renderPassEncoder, WGPUBuffer buffer, WGPUIndexFormat format, uint64_t offset, uint64_t size) {
    procs.renderPassEncoderSetIndexBuffer(renderPassEncoder, buffer, format, offset, size);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetLabel(WGPURenderPassEncoder renderPassEncoder, char const * label) {
    procs.renderPassEncoderSetLabel(renderPassEncoder, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetPipeline(WGPURenderPassEncoder renderPassEncoder, WGPURenderPipeline pipeline) {
    procs.renderPassEncoderSetPipeline(renderPassEncoder, pipeline);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetScissorRect(WGPURenderPassEncoder renderPassEncoder, uint32_t x, uint32_t y, uint32_t width, uint32_t height) {
    procs.renderPassEncoderSetScissorRect(renderPassEncoder, x, y, width, height);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetStencilReference(WGPURenderPassEncoder renderPassEncoder, uint32_t reference) {
    procs.renderPassEncoderSetStencilReference(renderPassEncoder, reference);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetVertexBuffer(WGPURenderPassEncoder renderPassEncoder, uint32_t slot, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
    procs.renderPassEncoderSetVertexBuffer(renderPassEncoder, slot, buffer, offset, size);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderSetViewport(WGPURenderPassEncoder renderPassEncoder, float x, float y, float width, float height, float minDepth, float maxDepth) {
    procs.renderPassEncoderSetViewport(renderPassEncoder, x, y, width, height, minDepth, maxDepth);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderWriteTimestamp(WGPURenderPassEncoder renderPassEncoder, WGPUQuerySet querySet, uint32_t queryIndex) {
    procs.renderPassEncoderWriteTimestamp(renderPassEncoder, querySet, queryIndex);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderReference(WGPURenderPassEncoder renderPassEncoder) {
    procs.renderPassEncoderReference(renderPassEncoder);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPassEncoderRelease(WGPURenderPassEncoder renderPassEncoder) {
    procs.renderPassEncoderRelease(renderPassEncoder);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUBindGroupLayout wgpuRenderPipelineGetBindGroupLayout(WGPURenderPipeline renderPipeline, uint32_t groupIndex) {
return     procs.renderPipelineGetBindGroupLayout(renderPipeline, groupIndex);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPipelineSetLabel(WGPURenderPipeline renderPipeline, char const * label) {
    procs.renderPipelineSetLabel(renderPipeline, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPipelineReference(WGPURenderPipeline renderPipeline) {
    procs.renderPipelineReference(renderPipeline);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuRenderPipelineRelease(WGPURenderPipeline renderPipeline) {
    procs.renderPipelineRelease(renderPipeline);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuSamplerSetLabel(WGPUSampler sampler, char const * label) {
    procs.samplerSetLabel(sampler, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSamplerReference(WGPUSampler sampler) {
    procs.samplerReference(sampler);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSamplerRelease(WGPUSampler sampler) {
    procs.samplerRelease(sampler);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuShaderModuleGetCompilationInfo(WGPUShaderModule shaderModule, WGPUCompilationInfoCallback callback, void * userdata) {
    procs.shaderModuleGetCompilationInfo(shaderModule, callback, userdata);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuShaderModuleSetLabel(WGPUShaderModule shaderModule, char const * label) {
    procs.shaderModuleSetLabel(shaderModule, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuShaderModuleReference(WGPUShaderModule shaderModule) {
    procs.shaderModuleReference(shaderModule);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuShaderModuleRelease(WGPUShaderModule shaderModule) {
    procs.shaderModuleRelease(shaderModule);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuSharedFenceExportInfo(WGPUSharedFence sharedFence, WGPUSharedFenceExportInfo * info) {
    procs.sharedFenceExportInfo(sharedFence, info);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSharedFenceReference(WGPUSharedFence sharedFence) {
    procs.sharedFenceReference(sharedFence);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSharedFenceRelease(WGPUSharedFence sharedFence) {
    procs.sharedFenceRelease(sharedFence);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuSharedTextureMemoryBeginAccess(WGPUSharedTextureMemory sharedTextureMemory, WGPUTexture texture, WGPUSharedTextureMemoryBeginAccessDescriptor const * descriptor) {
return     procs.sharedTextureMemoryBeginAccess(sharedTextureMemory, texture, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTexture wgpuSharedTextureMemoryCreateTexture(WGPUSharedTextureMemory sharedTextureMemory, WGPUTextureDescriptor const * descriptor) {
return     procs.sharedTextureMemoryCreateTexture(sharedTextureMemory, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuSharedTextureMemoryEndAccess(WGPUSharedTextureMemory sharedTextureMemory, WGPUTexture texture, WGPUSharedTextureMemoryEndAccessState * descriptor) {
return     procs.sharedTextureMemoryEndAccess(sharedTextureMemory, texture, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSharedTextureMemoryGetProperties(WGPUSharedTextureMemory sharedTextureMemory, WGPUSharedTextureMemoryProperties * properties) {
    procs.sharedTextureMemoryGetProperties(sharedTextureMemory, properties);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUBool wgpuSharedTextureMemoryIsDeviceLost(WGPUSharedTextureMemory sharedTextureMemory) {
return     procs.sharedTextureMemoryIsDeviceLost(sharedTextureMemory);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSharedTextureMemorySetLabel(WGPUSharedTextureMemory sharedTextureMemory, char const * label) {
    procs.sharedTextureMemorySetLabel(sharedTextureMemory, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSharedTextureMemoryReference(WGPUSharedTextureMemory sharedTextureMemory) {
    procs.sharedTextureMemoryReference(sharedTextureMemory);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSharedTextureMemoryRelease(WGPUSharedTextureMemory sharedTextureMemory) {
    procs.sharedTextureMemoryRelease(sharedTextureMemory);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUTextureFormat wgpuSurfaceGetPreferredFormat(WGPUSurface surface, WGPUAdapter adapter) {
return     procs.surfaceGetPreferredFormat(surface, adapter);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSurfaceReference(WGPUSurface surface) {
    procs.surfaceReference(surface);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSurfaceRelease(WGPUSurface surface) {
    procs.surfaceRelease(surface);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUTexture wgpuSwapChainGetCurrentTexture(WGPUSwapChain swapChain) {
return     procs.swapChainGetCurrentTexture(swapChain);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTextureView wgpuSwapChainGetCurrentTextureView(WGPUSwapChain swapChain) {
return     procs.swapChainGetCurrentTextureView(swapChain);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSwapChainPresent(WGPUSwapChain swapChain) {
    procs.swapChainPresent(swapChain);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSwapChainReference(WGPUSwapChain swapChain) {
    procs.swapChainReference(swapChain);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuSwapChainRelease(WGPUSwapChain swapChain) {
    procs.swapChainRelease(swapChain);
}

DAWN_NO_SANITIZE("cfi-icall")
WGPUTextureView wgpuTextureCreateErrorView(WGPUTexture texture, WGPUTextureViewDescriptor const * descriptor) {
return     procs.textureCreateErrorView(texture, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTextureView wgpuTextureCreateView(WGPUTexture texture, WGPUTextureViewDescriptor const * descriptor) {
return     procs.textureCreateView(texture, descriptor);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuTextureDestroy(WGPUTexture texture) {
    procs.textureDestroy(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
uint32_t wgpuTextureGetDepthOrArrayLayers(WGPUTexture texture) {
return     procs.textureGetDepthOrArrayLayers(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTextureDimension wgpuTextureGetDimension(WGPUTexture texture) {
return     procs.textureGetDimension(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTextureFormat wgpuTextureGetFormat(WGPUTexture texture) {
return     procs.textureGetFormat(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
uint32_t wgpuTextureGetHeight(WGPUTexture texture) {
return     procs.textureGetHeight(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
uint32_t wgpuTextureGetMipLevelCount(WGPUTexture texture) {
return     procs.textureGetMipLevelCount(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
uint32_t wgpuTextureGetSampleCount(WGPUTexture texture) {
return     procs.textureGetSampleCount(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
WGPUTextureUsageFlags wgpuTextureGetUsage(WGPUTexture texture) {
return     procs.textureGetUsage(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
uint32_t wgpuTextureGetWidth(WGPUTexture texture) {
return     procs.textureGetWidth(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuTextureSetLabel(WGPUTexture texture, char const * label) {
    procs.textureSetLabel(texture, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuTextureReference(WGPUTexture texture) {
    procs.textureReference(texture);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuTextureRelease(WGPUTexture texture) {
    procs.textureRelease(texture);
}

DAWN_NO_SANITIZE("cfi-icall")
void wgpuTextureViewSetLabel(WGPUTextureView textureView, char const * label) {
    procs.textureViewSetLabel(textureView, label);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuTextureViewReference(WGPUTextureView textureView) {
    procs.textureViewReference(textureView);
}
DAWN_NO_SANITIZE("cfi-icall")
void wgpuTextureViewRelease(WGPUTextureView textureView) {
    procs.textureViewRelease(textureView);
}

