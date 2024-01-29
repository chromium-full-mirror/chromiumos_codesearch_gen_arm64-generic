
#include "dawn/common/Assert.h"
#include "dawn/wire/client/Client.h"

#include <string>

namespace dawn::wire::client {
    bool Client::HandleAdapterRequestDeviceCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnAdapterRequestDeviceCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        return DoAdapterRequestDeviceCallback(cmd.eventManager, cmd.future, cmd.status, cmd.message, cmd.limits, cmd.featuresCount, cmd.features);
    }
    bool Client::HandleBufferMapAsyncCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnBufferMapAsyncCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        return DoBufferMapAsyncCallback(cmd.eventManager, cmd.future, cmd.status, cmd.readDataUpdateInfoLength, cmd.readDataUpdateInfo);
    }
    bool Client::HandleDeviceCreateComputePipelineAsyncCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceCreateComputePipelineAsyncCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        return DoDeviceCreateComputePipelineAsyncCallback(cmd.eventManager, cmd.future, cmd.status, cmd.message);
    }
    bool Client::HandleDeviceCreateRenderPipelineAsyncCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceCreateRenderPipelineAsyncCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        return DoDeviceCreateRenderPipelineAsyncCallback(cmd.eventManager, cmd.future, cmd.status, cmd.message);
    }
    bool Client::HandleDeviceLoggingCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceLoggingCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        Device* device = Get<Device>(cmd.device.id);
        if (device != nullptr && device->GetWireGeneration() != cmd.device.generation) {
            device = nullptr;
        }

        return DoDeviceLoggingCallback(device, cmd.type, cmd.message);
    }
    bool Client::HandleDeviceLostCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceLostCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        Device* device = Get<Device>(cmd.device.id);
        if (device != nullptr && device->GetWireGeneration() != cmd.device.generation) {
            device = nullptr;
        }

        return DoDeviceLostCallback(device, cmd.reason, cmd.message);
    }
    bool Client::HandleDevicePopErrorScopeCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDevicePopErrorScopeCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        Device* device = Get<Device>(cmd.device.id);
        if (device != nullptr && device->GetWireGeneration() != cmd.device.generation) {
            device = nullptr;
        }

        return DoDevicePopErrorScopeCallback(device, cmd.requestSerial, cmd.type, cmd.message);
    }
    bool Client::HandleDeviceUncapturedErrorCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceUncapturedErrorCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        Device* device = Get<Device>(cmd.device.id);
        if (device != nullptr && device->GetWireGeneration() != cmd.device.generation) {
            device = nullptr;
        }

        return DoDeviceUncapturedErrorCallback(device, cmd.type, cmd.message);
    }
    bool Client::HandleInstanceRequestAdapterCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnInstanceRequestAdapterCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        return DoInstanceRequestAdapterCallback(cmd.eventManager, cmd.future, cmd.status, cmd.message, cmd.properties, cmd.limits, cmd.featuresCount, cmd.features);
    }
    bool Client::HandleQueueWorkDoneCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnQueueWorkDoneCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        return DoQueueWorkDoneCallback(cmd.eventManager, cmd.future, cmd.status);
    }
    bool Client::HandleShaderModuleGetCompilationInfoCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnShaderModuleGetCompilationInfoCallbackCmd cmd;
        WireResult deserializeResult = cmd.Deserialize(deserializeBuffer, &mWireCommandAllocator);

        if (deserializeResult == WireResult::FatalError) {
            return false;
        }


        ShaderModule* shaderModule = Get<ShaderModule>(cmd.shaderModule.id);
        if (shaderModule != nullptr && shaderModule->GetWireGeneration() != cmd.shaderModule.generation) {
            shaderModule = nullptr;
        }

        return DoShaderModuleGetCompilationInfoCallback(shaderModule, cmd.requestSerial, cmd.status, cmd.info);
    }

    const volatile char* Client::HandleCommandsImpl(const volatile char* commands, size_t size) {
        DeserializeBuffer deserializeBuffer(commands, size);

        while (deserializeBuffer.AvailableSize() >= sizeof(CmdHeader) + sizeof(ReturnWireCmd)) {
            // Start by chunked command handling, if it is done, then it means the whole buffer
            // was consumed by it, so we return a pointer to the end of the commands.
            switch (HandleChunkedCommands(deserializeBuffer.Buffer(), deserializeBuffer.AvailableSize())) {
                case ChunkedCommandsResult::Consumed:
                    return commands + size;
                case ChunkedCommandsResult::Error:
                    return nullptr;
                case ChunkedCommandsResult::Passthrough:
                    break;
            }

            ReturnWireCmd cmdId = *static_cast<const volatile ReturnWireCmd*>(static_cast<const volatile void*>(
                deserializeBuffer.Buffer() + sizeof(CmdHeader)));
            bool success = false;
            switch (cmdId) {
                case ReturnWireCmd::AdapterRequestDeviceCallback:
                    success = HandleAdapterRequestDeviceCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::BufferMapAsyncCallback:
                    success = HandleBufferMapAsyncCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::DeviceCreateComputePipelineAsyncCallback:
                    success = HandleDeviceCreateComputePipelineAsyncCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::DeviceCreateRenderPipelineAsyncCallback:
                    success = HandleDeviceCreateRenderPipelineAsyncCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::DeviceLoggingCallback:
                    success = HandleDeviceLoggingCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::DeviceLostCallback:
                    success = HandleDeviceLostCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::DevicePopErrorScopeCallback:
                    success = HandleDevicePopErrorScopeCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::DeviceUncapturedErrorCallback:
                    success = HandleDeviceUncapturedErrorCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::InstanceRequestAdapterCallback:
                    success = HandleInstanceRequestAdapterCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::QueueWorkDoneCallback:
                    success = HandleQueueWorkDoneCallback(&deserializeBuffer);
                    break;
                case ReturnWireCmd::ShaderModuleGetCompilationInfoCallback:
                    success = HandleShaderModuleGetCompilationInfoCallback(&deserializeBuffer);
                    break;
                default:
                    success = false;
            }

            if (!success) {
                return nullptr;
            }
            mWireCommandAllocator.Reset();
        }

        if (deserializeBuffer.AvailableSize() != 0) {
            return nullptr;
        }

        return commands;
    }
}  // namespace dawn::wire::client
