#ifndef COMPONENTS_POLICY_TEST_SUPPORT_REMOTE_COMMANDS_SERVICE_CASTCORE_PB_H_
#define COMPONENTS_POLICY_TEST_SUPPORT_REMOTE_COMMANDS_SERVICE_CASTCORE_PB_H_

#include "chromecast/cast_core/grpc/grpc_server_streaming_call.h"
#include "chromecast/cast_core/grpc/grpc_server_streaming_handler.h"
#include "chromecast/cast_core/grpc/grpc_stub.h"
#include "chromecast/cast_core/grpc/grpc_unary_call.h"
#include "chromecast/cast_core/grpc/grpc_unary_handler.h"
#include "components/policy/test_support/remote_commands_service.grpc.pb.h"

namespace remote_commands {

// RemoteCommandsService gRPC handler.
constexpr char kRemoteCommandsService_SendRemoteCommand_MethodName[] = "SendRemoteCommand";
constexpr char kRemoteCommandsService_WaitRemoteCommandResult_MethodName[] = "WaitRemoteCommandResult";
constexpr char kRemoteCommandsService_WaitRemoteCommandAcked_MethodName[] = "WaitRemoteCommandAcked";

class RemoteCommandsServiceHandler {
  public: 
    using SendRemoteCommand = ::cast::utils::GrpcUnaryHandler<RemoteCommandsService, ::remote_commands::SendRemoteCommandRequest, ::remote_commands::SendRemoteCommandResponse, kRemoteCommandsService_SendRemoteCommand_MethodName>;
    using WaitRemoteCommandResult = ::cast::utils::GrpcUnaryHandler<RemoteCommandsService, ::remote_commands::WaitRemoteCommandResultRequest, ::remote_commands::WaitRemoteCommandResultResponse, kRemoteCommandsService_WaitRemoteCommandResult_MethodName>;
    using WaitRemoteCommandAcked = ::cast::utils::GrpcUnaryHandler<RemoteCommandsService, ::remote_commands::WaitRemoteCommandAckedRequest, ::remote_commands::WaitRemoteCommandAckedResponse, kRemoteCommandsService_WaitRemoteCommandAcked_MethodName>;
};

// RemoteCommandsService gRPC stub.
class RemoteCommandsServiceStub :  public ::cast::utils::GrpcStub<RemoteCommandsService> {
 public:
  using GrpcStub::GrpcStub;
  using GrpcStub::operator=;
  using GrpcStub::AsyncInterface;
  using GrpcStub::CreateCall;
  using GrpcStub::SyncInterface;

  using SendRemoteCommand = ::cast::utils::GrpcUnaryCall<RemoteCommandsServiceStub, ::remote_commands::SendRemoteCommandRequest, ::remote_commands::SendRemoteCommandResponse, &AsyncInterface::SendRemoteCommand, &SyncInterface::SendRemoteCommand>;
  using WaitRemoteCommandResult = ::cast::utils::GrpcUnaryCall<RemoteCommandsServiceStub, ::remote_commands::WaitRemoteCommandResultRequest, ::remote_commands::WaitRemoteCommandResultResponse, &AsyncInterface::WaitRemoteCommandResult, &SyncInterface::WaitRemoteCommandResult>;
  using WaitRemoteCommandAcked = ::cast::utils::GrpcUnaryCall<RemoteCommandsServiceStub, ::remote_commands::WaitRemoteCommandAckedRequest, ::remote_commands::WaitRemoteCommandAckedResponse, &AsyncInterface::WaitRemoteCommandAcked, &SyncInterface::WaitRemoteCommandAcked>;
};

}  // namespace remote_commands

#endif  // COMPONENTS_POLICY_TEST_SUPPORT_REMOTE_COMMANDS_SERVICE_CASTCORE_PB_H_
