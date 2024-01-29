
bool HandleAdapterRequestDeviceCallback(DeserializeBuffer* deserializeBuffer);
bool HandleBufferMapAsyncCallback(DeserializeBuffer* deserializeBuffer);
bool HandleDeviceCreateComputePipelineAsyncCallback(DeserializeBuffer* deserializeBuffer);
bool HandleDeviceCreateRenderPipelineAsyncCallback(DeserializeBuffer* deserializeBuffer);
bool HandleDeviceLoggingCallback(DeserializeBuffer* deserializeBuffer);
bool HandleDeviceLostCallback(DeserializeBuffer* deserializeBuffer);
bool HandleDevicePopErrorScopeCallback(DeserializeBuffer* deserializeBuffer);
bool HandleDeviceUncapturedErrorCallback(DeserializeBuffer* deserializeBuffer);
bool HandleInstanceRequestAdapterCallback(DeserializeBuffer* deserializeBuffer);
bool HandleQueueWorkDoneCallback(DeserializeBuffer* deserializeBuffer);
bool HandleShaderModuleGetCompilationInfoCallback(DeserializeBuffer* deserializeBuffer);

bool DoAdapterRequestDeviceCallback(ObjectHandle eventManager, WGPUFuture future, WGPURequestDeviceStatus status, char const * message, WGPUSupportedLimits const * limits, uint32_t featuresCount, WGPUFeatureName const * features);
bool DoBufferMapAsyncCallback(ObjectHandle eventManager, WGPUFuture future, WGPUBufferMapAsyncStatus status, uint64_t readDataUpdateInfoLength, uint8_t const * readDataUpdateInfo);
bool DoDeviceCreateComputePipelineAsyncCallback(ObjectHandle eventManager, WGPUFuture future, WGPUCreatePipelineAsyncStatus status, char const * message);
bool DoDeviceCreateRenderPipelineAsyncCallback(ObjectHandle eventManager, WGPUFuture future, WGPUCreatePipelineAsyncStatus status, char const * message);
bool DoDeviceLoggingCallback(Device* device, WGPULoggingType type, char const * message);
bool DoDeviceLostCallback(Device* device, WGPUDeviceLostReason reason, char const * message);
bool DoDevicePopErrorScopeCallback(Device* device, uint64_t requestSerial, WGPUErrorType type, char const * message);
bool DoDeviceUncapturedErrorCallback(Device* device, WGPUErrorType type, char const * message);
bool DoInstanceRequestAdapterCallback(ObjectHandle eventManager, WGPUFuture future, WGPURequestAdapterStatus status, char const * message, WGPUAdapterProperties const * properties, WGPUSupportedLimits const * limits, uint32_t featuresCount, WGPUFeatureName const * features);
bool DoQueueWorkDoneCallback(ObjectHandle eventManager, WGPUFuture future, WGPUQueueWorkDoneStatus status);
bool DoShaderModuleGetCompilationInfoCallback(ShaderModule* shaderModule, uint64_t requestSerial, WGPUCompilationInfoRequestStatus status, WGPUCompilationInfo const * info);
