
#pragma once

#include <cstdint>
#include <functional>
#include <optional>
#include <sstream>
#include <string>
#include <type_traits>

#include "packet/base_packet_builder.h"
#include "packet/bit_inserter.h"
#include "packet/custom_field_fixed_size_interface.h"
#include "packet/iterator.h"
#include "packet/packet_builder.h"
#include "packet/packet_struct.h"
#include "packet/packet_view.h"
#include "packet/checksum_type_checker.h"
#include "packet/custom_type_checker.h"
#include "os/log.h"
#include "l2cap/fcs.h"


namespace bluetooth {
namespace l2cap {


using ::bluetooth::l2cap::Fcs;

using ::bluetooth::packet::BasePacketBuilder;
using ::bluetooth::packet::BitInserter;
using ::bluetooth::packet::CustomFieldFixedSizeInterface;
using ::bluetooth::packet::CustomTypeChecker;
using ::bluetooth::packet::Iterator;
using ::bluetooth::packet::kLittleEndian;
using ::bluetooth::packet::PacketBuilder;
using ::bluetooth::packet::PacketStruct;
using ::bluetooth::packet::PacketView;
using ::bluetooth::packet::parser::ChecksumTypeChecker;
enum class Continuation : uint8_t {END = 0x0,CONTINUE = 0x1,};


enum class FrameType : uint8_t {I_FRAME = 0x0,S_FRAME = 0x1,};


enum class SupervisoryFunction : uint8_t {RECEIVER_READY = 0x0,REJECT = 0x1,RECEIVER_NOT_READY = 0x2,SELECT_REJECT = 0x3,};


enum class RetransmissionDisable : uint8_t {NORMAL = 0x0,DISABLE = 0x1,};


enum class SegmentationAndReassembly : uint8_t {UNSEGMENTED = 0x0,START = 0x1,END = 0x2,CONTINUATION = 0x3,};


enum class Poll : uint8_t {NOT_SET = 0x0,POLL = 0x1,};


enum class Final : uint8_t {NOT_SET = 0x0,POLL_RESPONSE = 0x1,};


enum class CommandCode : uint8_t {COMMAND_REJECT = 0x1,CONNECTION_REQUEST = 0x2,CONNECTION_RESPONSE = 0x3,CONFIGURATION_REQUEST = 0x4,CONFIGURATION_RESPONSE = 0x5,DISCONNECTION_REQUEST = 0x6,DISCONNECTION_RESPONSE = 0x7,ECHO_REQUEST = 0x8,ECHO_RESPONSE = 0x9,INFORMATION_REQUEST = 0xa,INFORMATION_RESPONSE = 0xb,CREATE_CHANNEL_REQUEST = 0xc,CREATE_CHANNEL_RESPONSE = 0xd,MOVE_CHANNEL_REQUEST = 0xe,MOVE_CHANNEL_RESPONSE = 0xf,MOVE_CHANNEL_CONFIRMATION_REQUEST = 0x10,MOVE_CHANNEL_CONFIRMATION_RESPONSE = 0x11,FLOW_CONTROL_CREDIT = 0x16,CREDIT_BASED_CONNECTION_REQUEST = 0x17,CREDIT_BASED_CONNECTION_RESPONSE = 0x18,CREDIT_BASED_RECONFIGURE_REQUEST = 0x19,CREDIT_BASED_RECONFIGURE_RESPONSE = 0x1a,};


enum class CommandRejectReason : uint16_t {COMMAND_NOT_UNDERSTOOD = 0x0,SIGNALING_MTU_EXCEEDED = 0x1,INVALID_CID_IN_REQUEST = 0x2,};


enum class ConnectionResponseResult : uint16_t {SUCCESS = 0x0,PENDING = 0x1,PSM_NOT_SUPPORTED = 0x2,SECURITY_BLOCK = 0x3,NO_RESOURCES_AVAILABLE = 0x4,INVALID_CID = 0x6,SOURCE_CID_ALREADY_ALLOCATED = 0x7,};


enum class ConnectionResponseStatus : uint16_t {NO_FURTHER_INFORMATION_AVAILABLE = 0x0,AUTHENTICATION_PENDING = 0x1,AUTHORIZATION_PENDING = 0x2,};


enum class ConfigurationOptionType : uint8_t {MTU = 0x1,FLUSH_TIMEOUT = 0x2,QUALITY_OF_SERVICE = 0x3,RETRANSMISSION_AND_FLOW_CONTROL = 0x4,FRAME_CHECK_SEQUENCE = 0x5,EXTENDED_FLOW_SPECIFICATION = 0x6,EXTENDED_WINDOW_SIZE = 0x7,};


enum class ConfigurationOptionIsHint : uint8_t {OPTION_MUST_BE_RECOGNIZED = 0x0,OPTION_IS_A_HINT = 0x1,};


enum class QosServiceType : uint8_t {NO_TRAFFIC = 0x0,BEST_EFFORT = 0x1,GUARANTEED = 0x2,};


enum class RetransmissionAndFlowControlModeOption : uint8_t {L2CAP_BASIC = 0x0,RETRANSMISSION = 0x1,FLOW_CONTROL = 0x2,ENHANCED_RETRANSMISSION = 0x3,STREAMING = 0x4,};


enum class FcsType : uint8_t {NO_FCS = 0x0,DEFAULT = 0x1,};


enum class ConfigurationResponseResult : uint16_t {SUCCESS = 0x0,UNACCEPTABLE_PARAMETERS = 0x1,REJECTED = 0x2,UNKNOWN_OPTIONS = 0x3,PENDING = 0x4,FLOW_SPEC_REJECTED = 0x5,};


enum class InformationRequestInfoType : uint16_t {CONNECTIONLESS_MTU = 0x1,EXTENDED_FEATURES_SUPPORTED = 0x2,FIXED_CHANNELS_SUPPORTED = 0x3,};


enum class InformationRequestResult : uint16_t {SUCCESS = 0x0,NOT_SUPPORTED = 0x1,};


enum class CreateChannelResponseResult : uint16_t {SUCCESS = 0x0,PENDING = 0x1,PSM_NOT_SUPPORTED = 0x2,SECURITY_BLOCK = 0x3,NO_RESOURCES_AVAILABLE = 0x4,CONTROLLER_ID_NOT_SUPPORTED = 0x5,INVALID_CID = 0x6,SOURCE_CID_ALREADY_ALLOCATED = 0x7,};


enum class CreateChannelResponseStatus : uint16_t {NO_FURTHER_INFORMATION_AVAILABLE = 0x0,AUTHENTICATION_PENDING = 0x1,AUTHORIZATION_PENDING = 0x2,};


enum class MoveChannelResponseResult : uint16_t {SUCCESS = 0x0,PENDING = 0x1,CONTROLLER_ID_NOT_SUPPORTED = 0x2,NEW_CONTROLLER_ID_IS_SAME = 0x3,CONFIGURATION_NOT_SUPPORTED = 0x4,CHANNEL_COLLISION = 0x5,CHANNEL_NOT_ALLOWED_TO_BE_MOVED = 0x6,};


enum class MoveChannelConfirmationResult : uint16_t {SUCCESS = 0x0,FAILURE = 0x1,};


enum class CreditBasedConnectionResponseResult : uint16_t {SUCCESS = 0x0,SPSM_NOT_SUPPORTED = 0x2,SOME_REFUSED_NO_RESOURCES_AVAILABLE = 0x4,ALL_REFUSED_INSUFFICIENT_AUTHENTICATION = 0x5,ALL_REFUSED_INSUFFICIENT_AUTHORIZATION = 0x6,ALL_REFUSED_INSUFFICIENT_ENCRYPTION_KEY_SIZE = 0x7,ALL_REFUSED_INSUFFICIENT_ENCRYPTION = 0x8,SOME_REFUSED_INVALID_SOURCE_CID = 0x9,SOME_REFUSED_SOURCE_CID_ALREADY_ALLOCATED = 0xa,ALL_REFUSED_UNACCEPTABLE_PARAMETERS = 0xb,ALL_REFUSED_INVALID_PARAMETERS = 0xc,};


enum class CreditBasedReconfigureResponseResult : uint16_t {SUCCESS = 0x0,MTU_NOT_ALLOWED = 0x1,MPS_NOT_ALLOWED = 0x2,INVALID_DESTINATION_CID = 0x3,UNACCEPTABLE_PARAMETERS = 0x4,};


enum class LeCommandCode : uint8_t {COMMAND_REJECT = 0x1,DISCONNECTION_REQUEST = 0x6,DISCONNECTION_RESPONSE = 0x7,CONNECTION_PARAMETER_UPDATE_REQUEST = 0x12,CONNECTION_PARAMETER_UPDATE_RESPONSE = 0x13,LE_CREDIT_BASED_CONNECTION_REQUEST = 0x14,LE_CREDIT_BASED_CONNECTION_RESPONSE = 0x15,LE_FLOW_CONTROL_CREDIT = 0x16,CREDIT_BASED_CONNECTION_REQUEST = 0x17,CREDIT_BASED_CONNECTION_RESPONSE = 0x18,CREDIT_BASED_RECONFIGURE_REQUEST = 0x19,CREDIT_BASED_RECONFIGURE_RESPONSE = 0x1a,};


enum class ConnectionParameterUpdateResponseResult : uint16_t {ACCEPTED = 0x0,REJECTED = 0x1,};


enum class LeCreditBasedConnectionResponseResult : uint16_t {SUCCESS = 0x0,LE_PSM_NOT_SUPPORTED = 0x2,NO_RESOURCES_AVAILABLE = 0x4,INSUFFICIENT_AUTHENTICATION = 0x5,INSUFFICIENT_AUTHORIZATION = 0x6,INSUFFICIENT_ENCRYPTION_KEY_SIZE = 0x7,INSUFFICIENT_ENCRYPTION = 0x8,INVALID_SOURCE_CID = 0x9,SOURCE_CID_ALREADY_ALLOCATED = 0xa,UNACCEPTABLE_PARAMETERS = 0xb,};


inline std::string ContinuationText(const Continuation& param) {switch (param) {case Continuation::END:  return "END";case Continuation::CONTINUE:  return "CONTINUE";default:  return std::string("Unknown Continuation: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const Continuation& param) {  return os << ContinuationText(param);}


inline std::string FrameTypeText(const FrameType& param) {switch (param) {case FrameType::I_FRAME:  return "I_FRAME";case FrameType::S_FRAME:  return "S_FRAME";default:  return std::string("Unknown FrameType: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const FrameType& param) {  return os << FrameTypeText(param);}


inline std::string SupervisoryFunctionText(const SupervisoryFunction& param) {switch (param) {case SupervisoryFunction::RECEIVER_READY:  return "RECEIVER_READY";case SupervisoryFunction::REJECT:  return "REJECT";case SupervisoryFunction::RECEIVER_NOT_READY:  return "RECEIVER_NOT_READY";case SupervisoryFunction::SELECT_REJECT:  return "SELECT_REJECT";default:  return std::string("Unknown SupervisoryFunction: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const SupervisoryFunction& param) {  return os << SupervisoryFunctionText(param);}


inline std::string RetransmissionDisableText(const RetransmissionDisable& param) {switch (param) {case RetransmissionDisable::NORMAL:  return "NORMAL";case RetransmissionDisable::DISABLE:  return "DISABLE";default:  return std::string("Unknown RetransmissionDisable: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const RetransmissionDisable& param) {  return os << RetransmissionDisableText(param);}


inline std::string SegmentationAndReassemblyText(const SegmentationAndReassembly& param) {switch (param) {case SegmentationAndReassembly::UNSEGMENTED:  return "UNSEGMENTED";case SegmentationAndReassembly::START:  return "START";case SegmentationAndReassembly::END:  return "END";case SegmentationAndReassembly::CONTINUATION:  return "CONTINUATION";default:  return std::string("Unknown SegmentationAndReassembly: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const SegmentationAndReassembly& param) {  return os << SegmentationAndReassemblyText(param);}


inline std::string PollText(const Poll& param) {switch (param) {case Poll::NOT_SET:  return "NOT_SET";case Poll::POLL:  return "POLL";default:  return std::string("Unknown Poll: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const Poll& param) {  return os << PollText(param);}


inline std::string FinalText(const Final& param) {switch (param) {case Final::NOT_SET:  return "NOT_SET";case Final::POLL_RESPONSE:  return "POLL_RESPONSE";default:  return std::string("Unknown Final: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const Final& param) {  return os << FinalText(param);}


inline std::string CommandCodeText(const CommandCode& param) {switch (param) {case CommandCode::COMMAND_REJECT:  return "COMMAND_REJECT";case CommandCode::CONNECTION_REQUEST:  return "CONNECTION_REQUEST";case CommandCode::CONNECTION_RESPONSE:  return "CONNECTION_RESPONSE";case CommandCode::CONFIGURATION_REQUEST:  return "CONFIGURATION_REQUEST";case CommandCode::CONFIGURATION_RESPONSE:  return "CONFIGURATION_RESPONSE";case CommandCode::DISCONNECTION_REQUEST:  return "DISCONNECTION_REQUEST";case CommandCode::DISCONNECTION_RESPONSE:  return "DISCONNECTION_RESPONSE";case CommandCode::ECHO_REQUEST:  return "ECHO_REQUEST";case CommandCode::ECHO_RESPONSE:  return "ECHO_RESPONSE";case CommandCode::INFORMATION_REQUEST:  return "INFORMATION_REQUEST";case CommandCode::INFORMATION_RESPONSE:  return "INFORMATION_RESPONSE";case CommandCode::CREATE_CHANNEL_REQUEST:  return "CREATE_CHANNEL_REQUEST";case CommandCode::CREATE_CHANNEL_RESPONSE:  return "CREATE_CHANNEL_RESPONSE";case CommandCode::MOVE_CHANNEL_REQUEST:  return "MOVE_CHANNEL_REQUEST";case CommandCode::MOVE_CHANNEL_RESPONSE:  return "MOVE_CHANNEL_RESPONSE";case CommandCode::MOVE_CHANNEL_CONFIRMATION_REQUEST:  return "MOVE_CHANNEL_CONFIRMATION_REQUEST";case CommandCode::MOVE_CHANNEL_CONFIRMATION_RESPONSE:  return "MOVE_CHANNEL_CONFIRMATION_RESPONSE";case CommandCode::FLOW_CONTROL_CREDIT:  return "FLOW_CONTROL_CREDIT";case CommandCode::CREDIT_BASED_CONNECTION_REQUEST:  return "CREDIT_BASED_CONNECTION_REQUEST";case CommandCode::CREDIT_BASED_CONNECTION_RESPONSE:  return "CREDIT_BASED_CONNECTION_RESPONSE";case CommandCode::CREDIT_BASED_RECONFIGURE_REQUEST:  return "CREDIT_BASED_RECONFIGURE_REQUEST";case CommandCode::CREDIT_BASED_RECONFIGURE_RESPONSE:  return "CREDIT_BASED_RECONFIGURE_RESPONSE";default:  return std::string("Unknown CommandCode: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const CommandCode& param) {  return os << CommandCodeText(param);}


inline std::string CommandRejectReasonText(const CommandRejectReason& param) {switch (param) {case CommandRejectReason::COMMAND_NOT_UNDERSTOOD:  return "COMMAND_NOT_UNDERSTOOD";case CommandRejectReason::SIGNALING_MTU_EXCEEDED:  return "SIGNALING_MTU_EXCEEDED";case CommandRejectReason::INVALID_CID_IN_REQUEST:  return "INVALID_CID_IN_REQUEST";default:  return std::string("Unknown CommandRejectReason: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const CommandRejectReason& param) {  return os << CommandRejectReasonText(param);}


inline std::string ConnectionResponseResultText(const ConnectionResponseResult& param) {switch (param) {case ConnectionResponseResult::SUCCESS:  return "SUCCESS";case ConnectionResponseResult::PENDING:  return "PENDING";case ConnectionResponseResult::PSM_NOT_SUPPORTED:  return "PSM_NOT_SUPPORTED";case ConnectionResponseResult::SECURITY_BLOCK:  return "SECURITY_BLOCK";case ConnectionResponseResult::NO_RESOURCES_AVAILABLE:  return "NO_RESOURCES_AVAILABLE";case ConnectionResponseResult::INVALID_CID:  return "INVALID_CID";case ConnectionResponseResult::SOURCE_CID_ALREADY_ALLOCATED:  return "SOURCE_CID_ALREADY_ALLOCATED";default:  return std::string("Unknown ConnectionResponseResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const ConnectionResponseResult& param) {  return os << ConnectionResponseResultText(param);}


inline std::string ConnectionResponseStatusText(const ConnectionResponseStatus& param) {switch (param) {case ConnectionResponseStatus::NO_FURTHER_INFORMATION_AVAILABLE:  return "NO_FURTHER_INFORMATION_AVAILABLE";case ConnectionResponseStatus::AUTHENTICATION_PENDING:  return "AUTHENTICATION_PENDING";case ConnectionResponseStatus::AUTHORIZATION_PENDING:  return "AUTHORIZATION_PENDING";default:  return std::string("Unknown ConnectionResponseStatus: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const ConnectionResponseStatus& param) {  return os << ConnectionResponseStatusText(param);}


inline std::string ConfigurationOptionTypeText(const ConfigurationOptionType& param) {switch (param) {case ConfigurationOptionType::MTU:  return "MTU";case ConfigurationOptionType::FLUSH_TIMEOUT:  return "FLUSH_TIMEOUT";case ConfigurationOptionType::QUALITY_OF_SERVICE:  return "QUALITY_OF_SERVICE";case ConfigurationOptionType::RETRANSMISSION_AND_FLOW_CONTROL:  return "RETRANSMISSION_AND_FLOW_CONTROL";case ConfigurationOptionType::FRAME_CHECK_SEQUENCE:  return "FRAME_CHECK_SEQUENCE";case ConfigurationOptionType::EXTENDED_FLOW_SPECIFICATION:  return "EXTENDED_FLOW_SPECIFICATION";case ConfigurationOptionType::EXTENDED_WINDOW_SIZE:  return "EXTENDED_WINDOW_SIZE";default:  return std::string("Unknown ConfigurationOptionType: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const ConfigurationOptionType& param) {  return os << ConfigurationOptionTypeText(param);}


inline std::string ConfigurationOptionIsHintText(const ConfigurationOptionIsHint& param) {switch (param) {case ConfigurationOptionIsHint::OPTION_MUST_BE_RECOGNIZED:  return "OPTION_MUST_BE_RECOGNIZED";case ConfigurationOptionIsHint::OPTION_IS_A_HINT:  return "OPTION_IS_A_HINT";default:  return std::string("Unknown ConfigurationOptionIsHint: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const ConfigurationOptionIsHint& param) {  return os << ConfigurationOptionIsHintText(param);}


inline std::string QosServiceTypeText(const QosServiceType& param) {switch (param) {case QosServiceType::NO_TRAFFIC:  return "NO_TRAFFIC";case QosServiceType::BEST_EFFORT:  return "BEST_EFFORT";case QosServiceType::GUARANTEED:  return "GUARANTEED";default:  return std::string("Unknown QosServiceType: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const QosServiceType& param) {  return os << QosServiceTypeText(param);}


inline std::string RetransmissionAndFlowControlModeOptionText(const RetransmissionAndFlowControlModeOption& param) {switch (param) {case RetransmissionAndFlowControlModeOption::L2CAP_BASIC:  return "L2CAP_BASIC";case RetransmissionAndFlowControlModeOption::RETRANSMISSION:  return "RETRANSMISSION";case RetransmissionAndFlowControlModeOption::FLOW_CONTROL:  return "FLOW_CONTROL";case RetransmissionAndFlowControlModeOption::ENHANCED_RETRANSMISSION:  return "ENHANCED_RETRANSMISSION";case RetransmissionAndFlowControlModeOption::STREAMING:  return "STREAMING";default:  return std::string("Unknown RetransmissionAndFlowControlModeOption: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const RetransmissionAndFlowControlModeOption& param) {  return os << RetransmissionAndFlowControlModeOptionText(param);}


inline std::string FcsTypeText(const FcsType& param) {switch (param) {case FcsType::NO_FCS:  return "NO_FCS";case FcsType::DEFAULT:  return "DEFAULT";default:  return std::string("Unknown FcsType: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const FcsType& param) {  return os << FcsTypeText(param);}


inline std::string ConfigurationResponseResultText(const ConfigurationResponseResult& param) {switch (param) {case ConfigurationResponseResult::SUCCESS:  return "SUCCESS";case ConfigurationResponseResult::UNACCEPTABLE_PARAMETERS:  return "UNACCEPTABLE_PARAMETERS";case ConfigurationResponseResult::REJECTED:  return "REJECTED";case ConfigurationResponseResult::UNKNOWN_OPTIONS:  return "UNKNOWN_OPTIONS";case ConfigurationResponseResult::PENDING:  return "PENDING";case ConfigurationResponseResult::FLOW_SPEC_REJECTED:  return "FLOW_SPEC_REJECTED";default:  return std::string("Unknown ConfigurationResponseResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const ConfigurationResponseResult& param) {  return os << ConfigurationResponseResultText(param);}


inline std::string InformationRequestInfoTypeText(const InformationRequestInfoType& param) {switch (param) {case InformationRequestInfoType::CONNECTIONLESS_MTU:  return "CONNECTIONLESS_MTU";case InformationRequestInfoType::EXTENDED_FEATURES_SUPPORTED:  return "EXTENDED_FEATURES_SUPPORTED";case InformationRequestInfoType::FIXED_CHANNELS_SUPPORTED:  return "FIXED_CHANNELS_SUPPORTED";default:  return std::string("Unknown InformationRequestInfoType: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const InformationRequestInfoType& param) {  return os << InformationRequestInfoTypeText(param);}


inline std::string InformationRequestResultText(const InformationRequestResult& param) {switch (param) {case InformationRequestResult::SUCCESS:  return "SUCCESS";case InformationRequestResult::NOT_SUPPORTED:  return "NOT_SUPPORTED";default:  return std::string("Unknown InformationRequestResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const InformationRequestResult& param) {  return os << InformationRequestResultText(param);}


inline std::string CreateChannelResponseResultText(const CreateChannelResponseResult& param) {switch (param) {case CreateChannelResponseResult::SUCCESS:  return "SUCCESS";case CreateChannelResponseResult::PENDING:  return "PENDING";case CreateChannelResponseResult::PSM_NOT_SUPPORTED:  return "PSM_NOT_SUPPORTED";case CreateChannelResponseResult::SECURITY_BLOCK:  return "SECURITY_BLOCK";case CreateChannelResponseResult::NO_RESOURCES_AVAILABLE:  return "NO_RESOURCES_AVAILABLE";case CreateChannelResponseResult::CONTROLLER_ID_NOT_SUPPORTED:  return "CONTROLLER_ID_NOT_SUPPORTED";case CreateChannelResponseResult::INVALID_CID:  return "INVALID_CID";case CreateChannelResponseResult::SOURCE_CID_ALREADY_ALLOCATED:  return "SOURCE_CID_ALREADY_ALLOCATED";default:  return std::string("Unknown CreateChannelResponseResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const CreateChannelResponseResult& param) {  return os << CreateChannelResponseResultText(param);}


inline std::string CreateChannelResponseStatusText(const CreateChannelResponseStatus& param) {switch (param) {case CreateChannelResponseStatus::NO_FURTHER_INFORMATION_AVAILABLE:  return "NO_FURTHER_INFORMATION_AVAILABLE";case CreateChannelResponseStatus::AUTHENTICATION_PENDING:  return "AUTHENTICATION_PENDING";case CreateChannelResponseStatus::AUTHORIZATION_PENDING:  return "AUTHORIZATION_PENDING";default:  return std::string("Unknown CreateChannelResponseStatus: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const CreateChannelResponseStatus& param) {  return os << CreateChannelResponseStatusText(param);}


inline std::string MoveChannelResponseResultText(const MoveChannelResponseResult& param) {switch (param) {case MoveChannelResponseResult::SUCCESS:  return "SUCCESS";case MoveChannelResponseResult::PENDING:  return "PENDING";case MoveChannelResponseResult::CONTROLLER_ID_NOT_SUPPORTED:  return "CONTROLLER_ID_NOT_SUPPORTED";case MoveChannelResponseResult::NEW_CONTROLLER_ID_IS_SAME:  return "NEW_CONTROLLER_ID_IS_SAME";case MoveChannelResponseResult::CONFIGURATION_NOT_SUPPORTED:  return "CONFIGURATION_NOT_SUPPORTED";case MoveChannelResponseResult::CHANNEL_COLLISION:  return "CHANNEL_COLLISION";case MoveChannelResponseResult::CHANNEL_NOT_ALLOWED_TO_BE_MOVED:  return "CHANNEL_NOT_ALLOWED_TO_BE_MOVED";default:  return std::string("Unknown MoveChannelResponseResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const MoveChannelResponseResult& param) {  return os << MoveChannelResponseResultText(param);}


inline std::string MoveChannelConfirmationResultText(const MoveChannelConfirmationResult& param) {switch (param) {case MoveChannelConfirmationResult::SUCCESS:  return "SUCCESS";case MoveChannelConfirmationResult::FAILURE:  return "FAILURE";default:  return std::string("Unknown MoveChannelConfirmationResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const MoveChannelConfirmationResult& param) {  return os << MoveChannelConfirmationResultText(param);}


inline std::string CreditBasedConnectionResponseResultText(const CreditBasedConnectionResponseResult& param) {switch (param) {case CreditBasedConnectionResponseResult::SUCCESS:  return "SUCCESS";case CreditBasedConnectionResponseResult::SPSM_NOT_SUPPORTED:  return "SPSM_NOT_SUPPORTED";case CreditBasedConnectionResponseResult::SOME_REFUSED_NO_RESOURCES_AVAILABLE:  return "SOME_REFUSED_NO_RESOURCES_AVAILABLE";case CreditBasedConnectionResponseResult::ALL_REFUSED_INSUFFICIENT_AUTHENTICATION:  return "ALL_REFUSED_INSUFFICIENT_AUTHENTICATION";case CreditBasedConnectionResponseResult::ALL_REFUSED_INSUFFICIENT_AUTHORIZATION:  return "ALL_REFUSED_INSUFFICIENT_AUTHORIZATION";case CreditBasedConnectionResponseResult::ALL_REFUSED_INSUFFICIENT_ENCRYPTION_KEY_SIZE:  return "ALL_REFUSED_INSUFFICIENT_ENCRYPTION_KEY_SIZE";case CreditBasedConnectionResponseResult::ALL_REFUSED_INSUFFICIENT_ENCRYPTION:  return "ALL_REFUSED_INSUFFICIENT_ENCRYPTION";case CreditBasedConnectionResponseResult::SOME_REFUSED_INVALID_SOURCE_CID:  return "SOME_REFUSED_INVALID_SOURCE_CID";case CreditBasedConnectionResponseResult::SOME_REFUSED_SOURCE_CID_ALREADY_ALLOCATED:  return "SOME_REFUSED_SOURCE_CID_ALREADY_ALLOCATED";case CreditBasedConnectionResponseResult::ALL_REFUSED_UNACCEPTABLE_PARAMETERS:  return "ALL_REFUSED_UNACCEPTABLE_PARAMETERS";case CreditBasedConnectionResponseResult::ALL_REFUSED_INVALID_PARAMETERS:  return "ALL_REFUSED_INVALID_PARAMETERS";default:  return std::string("Unknown CreditBasedConnectionResponseResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const CreditBasedConnectionResponseResult& param) {  return os << CreditBasedConnectionResponseResultText(param);}


inline std::string CreditBasedReconfigureResponseResultText(const CreditBasedReconfigureResponseResult& param) {switch (param) {case CreditBasedReconfigureResponseResult::SUCCESS:  return "SUCCESS";case CreditBasedReconfigureResponseResult::MTU_NOT_ALLOWED:  return "MTU_NOT_ALLOWED";case CreditBasedReconfigureResponseResult::MPS_NOT_ALLOWED:  return "MPS_NOT_ALLOWED";case CreditBasedReconfigureResponseResult::INVALID_DESTINATION_CID:  return "INVALID_DESTINATION_CID";case CreditBasedReconfigureResponseResult::UNACCEPTABLE_PARAMETERS:  return "UNACCEPTABLE_PARAMETERS";default:  return std::string("Unknown CreditBasedReconfigureResponseResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const CreditBasedReconfigureResponseResult& param) {  return os << CreditBasedReconfigureResponseResultText(param);}


inline std::string LeCommandCodeText(const LeCommandCode& param) {switch (param) {case LeCommandCode::COMMAND_REJECT:  return "COMMAND_REJECT";case LeCommandCode::DISCONNECTION_REQUEST:  return "DISCONNECTION_REQUEST";case LeCommandCode::DISCONNECTION_RESPONSE:  return "DISCONNECTION_RESPONSE";case LeCommandCode::CONNECTION_PARAMETER_UPDATE_REQUEST:  return "CONNECTION_PARAMETER_UPDATE_REQUEST";case LeCommandCode::CONNECTION_PARAMETER_UPDATE_RESPONSE:  return "CONNECTION_PARAMETER_UPDATE_RESPONSE";case LeCommandCode::LE_CREDIT_BASED_CONNECTION_REQUEST:  return "LE_CREDIT_BASED_CONNECTION_REQUEST";case LeCommandCode::LE_CREDIT_BASED_CONNECTION_RESPONSE:  return "LE_CREDIT_BASED_CONNECTION_RESPONSE";case LeCommandCode::LE_FLOW_CONTROL_CREDIT:  return "LE_FLOW_CONTROL_CREDIT";case LeCommandCode::CREDIT_BASED_CONNECTION_REQUEST:  return "CREDIT_BASED_CONNECTION_REQUEST";case LeCommandCode::CREDIT_BASED_CONNECTION_RESPONSE:  return "CREDIT_BASED_CONNECTION_RESPONSE";case LeCommandCode::CREDIT_BASED_RECONFIGURE_REQUEST:  return "CREDIT_BASED_RECONFIGURE_REQUEST";case LeCommandCode::CREDIT_BASED_RECONFIGURE_RESPONSE:  return "CREDIT_BASED_RECONFIGURE_RESPONSE";default:  return std::string("Unknown LeCommandCode: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const LeCommandCode& param) {  return os << LeCommandCodeText(param);}


inline std::string ConnectionParameterUpdateResponseResultText(const ConnectionParameterUpdateResponseResult& param) {switch (param) {case ConnectionParameterUpdateResponseResult::ACCEPTED:  return "ACCEPTED";case ConnectionParameterUpdateResponseResult::REJECTED:  return "REJECTED";default:  return std::string("Unknown ConnectionParameterUpdateResponseResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const ConnectionParameterUpdateResponseResult& param) {  return os << ConnectionParameterUpdateResponseResultText(param);}


inline std::string LeCreditBasedConnectionResponseResultText(const LeCreditBasedConnectionResponseResult& param) {switch (param) {case LeCreditBasedConnectionResponseResult::SUCCESS:  return "SUCCESS";case LeCreditBasedConnectionResponseResult::LE_PSM_NOT_SUPPORTED:  return "LE_PSM_NOT_SUPPORTED";case LeCreditBasedConnectionResponseResult::NO_RESOURCES_AVAILABLE:  return "NO_RESOURCES_AVAILABLE";case LeCreditBasedConnectionResponseResult::INSUFFICIENT_AUTHENTICATION:  return "INSUFFICIENT_AUTHENTICATION";case LeCreditBasedConnectionResponseResult::INSUFFICIENT_AUTHORIZATION:  return "INSUFFICIENT_AUTHORIZATION";case LeCreditBasedConnectionResponseResult::INSUFFICIENT_ENCRYPTION_KEY_SIZE:  return "INSUFFICIENT_ENCRYPTION_KEY_SIZE";case LeCreditBasedConnectionResponseResult::INSUFFICIENT_ENCRYPTION:  return "INSUFFICIENT_ENCRYPTION";case LeCreditBasedConnectionResponseResult::INVALID_SOURCE_CID:  return "INVALID_SOURCE_CID";case LeCreditBasedConnectionResponseResult::SOURCE_CID_ALREADY_ALLOCATED:  return "SOURCE_CID_ALREADY_ALLOCATED";case LeCreditBasedConnectionResponseResult::UNACCEPTABLE_PARAMETERS:  return "UNACCEPTABLE_PARAMETERS";default:  return std::string("Unknown LeCreditBasedConnectionResponseResult: ") + std::to_string(static_cast<int>(param));}}

inline std::ostream& operator<<(std::ostream& os, const LeCreditBasedConnectionResponseResult& param) {  return os << LeCreditBasedConnectionResponseResultText(param);}


static_assert(ChecksumTypeChecker<Fcs,uint16_t>::value, "Fcs is not a valid checksum type. Please see README for more details.");
/* Done ChecksumChecks */

class ConfigurationOption : public PacketStruct<kLittleEndian> { public:ConfigurationOption() {}
ConfigurationOption(ConfigurationOptionType type, ConfigurationOptionIsHint is_hint)
 : type_(type), is_hint_(is_hint)
{}
 public:
  virtual ~ConfigurationOption() = default;
protected:void SerializeHeader(BitInserter& i ) const {insert(static_cast<uint8_t>(type_), i, 7);insert(static_cast<uint8_t>(is_hint_), i, 1);body_size_extracted_ = 0;size_t local_size = ConfigurationOption::size();ASSERT((size() - local_size) < (static_cast<size_t>(1) << 8));insert(static_cast<uint8_t>(size() - local_size), i,8);}

void SerializeFooter(BitInserter&) const {}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

static std::optional<Iterator<kLittleEndian>> Parse(ConfigurationOption* to_fill, Iterator<kLittleEndian> struct_begin_it ) {auto to_bound = struct_begin_it;{if (to_bound.NumBytesRemaining() < 2){ return {};}}{auto type_it = to_bound + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto type_ptr = &to_fill->type_;auto extracted_value = type_it.extract<uint8_t>();extracted_value &= 0x7f;*type_ptr = static_cast<ConfigurationOptionType>(extracted_value);}{auto is_hint_it = to_bound + (/* Bits: */ 7 + /* Dynamic: */ 0) / 8;auto is_hint_ptr = &to_fill->is_hint_;auto extracted_value = is_hint_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*is_hint_ptr = static_cast<ConfigurationOptionIsHint>(extracted_value);}{auto body_size_it = to_bound + (/* Bits: */ 8 + /* Dynamic: */ 0) / 8;auto body_size_ptr = &to_fill->body_size_extracted_;auto extracted_value = body_size_it.extract<uint8_t>();*body_size_ptr = static_cast<uint8_t>(extracted_value);}return struct_begin_it + to_fill->size();}
protected:size_t BitsOfHeader() const {return 0 + /* Bits: */ 7 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ body_size_extracted_ + (BitsOfFooter() / 8);}



std::string ToString() const {std::stringstream ss;ss << std::hex << std::showbase << "ConfigurationOption { ";ss << "type = " << ConfigurationOptionTypeText(type_) << ", is_hint = " << ConfigurationOptionIsHintText(is_hint_) << ", body = " << "BODY REPRESENTATION_UNIMPLEMENTED body_ ";ss << " }";return ss.str();}

ConfigurationOptionType type_{};ConfigurationOptionIsHint is_hint_{};
 private:
 mutable uint8_t body_size_extracted_{0};};
std::unique_ptr<ConfigurationOption> ParseConfigurationOption(Iterator<kLittleEndian>it);

class MtuConfigurationOption : public ConfigurationOption { public:MtuConfigurationOption(const ConfigurationOption& parent) : ConfigurationOption(parent) {}MtuConfigurationOption() : ConfigurationOption() {ConfigurationOption::type_ = ConfigurationOptionType::MTU;}
MtuConfigurationOption(ConfigurationOptionIsHint is_hint, uint16_t mtu)
 : ConfigurationOption(/* type */ ConfigurationOptionType::MTU, is_hint), mtu_(mtu)
{}
 public:
  virtual ~MtuConfigurationOption() = default;
protected:void SerializeHeader(BitInserter& i ) const {ConfigurationOption::SerializeHeader(i);insert(mtu_, i,16);}

void SerializeFooter(BitInserter& i ) const {ConfigurationOption::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

static Iterator<kLittleEndian> Parse(MtuConfigurationOption* to_fill, Iterator<kLittleEndian> struct_begin_it , bool fill_parent = true) {auto to_bound = struct_begin_it;if (fill_parent) {auto parent_optional_it = ConfigurationOption::Parse(to_fill, to_bound);ASSERT(parent_optional_it);}size_t end_index = struct_begin_it.NumBytesRemaining();if (end_index < 4){ return struct_begin_it.Subrange(0,0);}{if (to_bound.NumBytesRemaining() < 2){ return to_bound.Subrange(to_bound.NumBytesRemaining(),0);}}{auto mtu_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto mtu_ptr = &to_fill->mtu_;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);}return struct_begin_it + to_fill->size();}
protected:size_t BitsOfHeader() const {return 0 + ConfigurationOption::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ConfigurationOption::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

static bool IsInstance(const ConfigurationOption& parent) {if (parent.type_ != ConfigurationOptionType::MTU){ return false;}return true;}
static MtuConfigurationOption* Specialize(ConfigurationOption* parent) {ASSERT(MtuConfigurationOption::IsInstance(*parent));return static_cast<MtuConfigurationOption*>(parent);}
std::string ToString() const {std::stringstream ss;ss << std::hex << std::showbase << "MtuConfigurationOption { ";ss << "mtu = " << static_cast<uint64_t>(mtu_);ss << " }";return ss.str();}

uint16_t mtu_{};};


class FlushTimeoutConfigurationOption : public ConfigurationOption { public:FlushTimeoutConfigurationOption(const ConfigurationOption& parent) : ConfigurationOption(parent) {}FlushTimeoutConfigurationOption() : ConfigurationOption() {ConfigurationOption::type_ = ConfigurationOptionType::FLUSH_TIMEOUT;}
FlushTimeoutConfigurationOption(ConfigurationOptionIsHint is_hint, uint16_t flush_timeout)
 : ConfigurationOption(/* type */ ConfigurationOptionType::FLUSH_TIMEOUT, is_hint), flush_timeout_(flush_timeout)
{}
 public:
  virtual ~FlushTimeoutConfigurationOption() = default;
protected:void SerializeHeader(BitInserter& i ) const {ConfigurationOption::SerializeHeader(i);insert(flush_timeout_, i,16);}

void SerializeFooter(BitInserter& i ) const {ConfigurationOption::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

static Iterator<kLittleEndian> Parse(FlushTimeoutConfigurationOption* to_fill, Iterator<kLittleEndian> struct_begin_it , bool fill_parent = true) {auto to_bound = struct_begin_it;if (fill_parent) {auto parent_optional_it = ConfigurationOption::Parse(to_fill, to_bound);ASSERT(parent_optional_it);}size_t end_index = struct_begin_it.NumBytesRemaining();if (end_index < 4){ return struct_begin_it.Subrange(0,0);}{if (to_bound.NumBytesRemaining() < 2){ return to_bound.Subrange(to_bound.NumBytesRemaining(),0);}}{auto flush_timeout_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto flush_timeout_ptr = &to_fill->flush_timeout_;auto extracted_value = flush_timeout_it.extract<uint16_t>();*flush_timeout_ptr = static_cast<uint16_t>(extracted_value);}return struct_begin_it + to_fill->size();}
protected:size_t BitsOfHeader() const {return 0 + ConfigurationOption::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ConfigurationOption::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

static bool IsInstance(const ConfigurationOption& parent) {if (parent.type_ != ConfigurationOptionType::FLUSH_TIMEOUT){ return false;}return true;}
static FlushTimeoutConfigurationOption* Specialize(ConfigurationOption* parent) {ASSERT(FlushTimeoutConfigurationOption::IsInstance(*parent));return static_cast<FlushTimeoutConfigurationOption*>(parent);}
std::string ToString() const {std::stringstream ss;ss << std::hex << std::showbase << "FlushTimeoutConfigurationOption { ";ss << "flush_timeout = " << static_cast<uint64_t>(flush_timeout_);ss << " }";return ss.str();}

uint16_t flush_timeout_{};};


class QualityOfServiceConfigurationOption : public ConfigurationOption { public:QualityOfServiceConfigurationOption(const ConfigurationOption& parent) : ConfigurationOption(parent) {}QualityOfServiceConfigurationOption() : ConfigurationOption() {ConfigurationOption::type_ = ConfigurationOptionType::QUALITY_OF_SERVICE;}
QualityOfServiceConfigurationOption(ConfigurationOptionIsHint is_hint, QosServiceType service_type, uint32_t token_rate, uint32_t token_bucket_size, uint32_t peak_bandwidth, uint32_t latency, uint32_t delay_variation)
 : ConfigurationOption(/* type */ ConfigurationOptionType::QUALITY_OF_SERVICE, is_hint), service_type_(service_type), token_rate_(token_rate), token_bucket_size_(token_bucket_size), peak_bandwidth_(peak_bandwidth), latency_(latency), delay_variation_(delay_variation)
{}
 public:
  virtual ~QualityOfServiceConfigurationOption() = default;
protected:void SerializeHeader(BitInserter& i ) const {ConfigurationOption::SerializeHeader(i);insert(static_cast<uint8_t>(0) /* Reserved */, i, 8 );
insert(static_cast<uint8_t>(service_type_), i, 8);insert(token_rate_, i,32);insert(token_bucket_size_, i,32);insert(peak_bandwidth_, i,32);insert(latency_, i,32);insert(delay_variation_, i,32);}

void SerializeFooter(BitInserter& i ) const {ConfigurationOption::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

static Iterator<kLittleEndian> Parse(QualityOfServiceConfigurationOption* to_fill, Iterator<kLittleEndian> struct_begin_it , bool fill_parent = true) {auto to_bound = struct_begin_it;if (fill_parent) {auto parent_optional_it = ConfigurationOption::Parse(to_fill, to_bound);ASSERT(parent_optional_it);}size_t end_index = struct_begin_it.NumBytesRemaining();if (end_index < 24){ return struct_begin_it.Subrange(0,0);}{if (to_bound.NumBytesRemaining() < 21){ return to_bound.Subrange(to_bound.NumBytesRemaining(),0);}}{auto service_type_it = to_bound + (/* Bits: */ 24 + /* Dynamic: */ 0) / 8;auto service_type_ptr = &to_fill->service_type_;auto extracted_value = service_type_it.extract<uint8_t>();*service_type_ptr = static_cast<QosServiceType>(extracted_value);}{auto token_rate_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;auto token_rate_ptr = &to_fill->token_rate_;auto extracted_value = token_rate_it.extract<uint32_t>();*token_rate_ptr = static_cast<uint32_t>(extracted_value);}{auto token_bucket_size_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;auto token_bucket_size_ptr = &to_fill->token_bucket_size_;auto extracted_value = token_bucket_size_it.extract<uint32_t>();*token_bucket_size_ptr = static_cast<uint32_t>(extracted_value);}{auto peak_bandwidth_it = to_bound + (/* Bits: */ 96 + /* Dynamic: */ 0) / 8;auto peak_bandwidth_ptr = &to_fill->peak_bandwidth_;auto extracted_value = peak_bandwidth_it.extract<uint32_t>();*peak_bandwidth_ptr = static_cast<uint32_t>(extracted_value);}{auto latency_it = to_bound + (/* Bits: */ 128 + /* Dynamic: */ 0) / 8;auto latency_ptr = &to_fill->latency_;auto extracted_value = latency_it.extract<uint32_t>();*latency_ptr = static_cast<uint32_t>(extracted_value);}{auto delay_variation_it = to_bound + (/* Bits: */ 160 + /* Dynamic: */ 0) / 8;auto delay_variation_ptr = &to_fill->delay_variation_;auto extracted_value = delay_variation_it.extract<uint32_t>();*delay_variation_ptr = static_cast<uint32_t>(extracted_value);}return struct_begin_it + to_fill->size();}
protected:size_t BitsOfHeader() const {return 0 + ConfigurationOption::BitsOfHeader()  + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 32 + /* Dynamic: */ 0 + /* Bits: */ 32 + /* Dynamic: */ 0 + /* Bits: */ 32 + /* Dynamic: */ 0 + /* Bits: */ 32 + /* Dynamic: */ 0 + /* Bits: */ 32 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ConfigurationOption::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

static bool IsInstance(const ConfigurationOption& parent) {if (parent.type_ != ConfigurationOptionType::QUALITY_OF_SERVICE){ return false;}return true;}
static QualityOfServiceConfigurationOption* Specialize(ConfigurationOption* parent) {ASSERT(QualityOfServiceConfigurationOption::IsInstance(*parent));return static_cast<QualityOfServiceConfigurationOption*>(parent);}
std::string ToString() const {std::stringstream ss;ss << std::hex << std::showbase << "QualityOfServiceConfigurationOption { ";ss << "service_type = " << QosServiceTypeText(service_type_) << ", token_rate = " << static_cast<uint64_t>(token_rate_) << ", token_bucket_size = " << static_cast<uint64_t>(token_bucket_size_) << ", peak_bandwidth = " << static_cast<uint64_t>(peak_bandwidth_) << ", latency = " << static_cast<uint64_t>(latency_) << ", delay_variation = " << static_cast<uint64_t>(delay_variation_);ss << " }";return ss.str();}

QosServiceType service_type_{};uint32_t token_rate_{};uint32_t token_bucket_size_{};uint32_t peak_bandwidth_{};uint32_t latency_{};uint32_t delay_variation_{};};


class RetransmissionAndFlowControlConfigurationOption : public ConfigurationOption { public:RetransmissionAndFlowControlConfigurationOption(const ConfigurationOption& parent) : ConfigurationOption(parent) {}RetransmissionAndFlowControlConfigurationOption() : ConfigurationOption() {ConfigurationOption::type_ = ConfigurationOptionType::RETRANSMISSION_AND_FLOW_CONTROL;}
RetransmissionAndFlowControlConfigurationOption(ConfigurationOptionIsHint is_hint, RetransmissionAndFlowControlModeOption mode, uint8_t tx_window_size, uint8_t max_transmit, uint16_t retransmission_time_out, uint16_t monitor_time_out, uint16_t maximum_pdu_size)
 : ConfigurationOption(/* type */ ConfigurationOptionType::RETRANSMISSION_AND_FLOW_CONTROL, is_hint), mode_(mode), tx_window_size_(tx_window_size), max_transmit_(max_transmit), retransmission_time_out_(retransmission_time_out), monitor_time_out_(monitor_time_out), maximum_pdu_size_(maximum_pdu_size)
{}
 public:
  virtual ~RetransmissionAndFlowControlConfigurationOption() = default;
protected:void SerializeHeader(BitInserter& i ) const {ConfigurationOption::SerializeHeader(i);insert(static_cast<uint8_t>(mode_), i, 8);i.insert_byte(tx_window_size_);i.insert_byte(max_transmit_);insert(retransmission_time_out_, i,16);insert(monitor_time_out_, i,16);insert(maximum_pdu_size_, i,16);}

void SerializeFooter(BitInserter& i ) const {ConfigurationOption::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

static Iterator<kLittleEndian> Parse(RetransmissionAndFlowControlConfigurationOption* to_fill, Iterator<kLittleEndian> struct_begin_it , bool fill_parent = true) {auto to_bound = struct_begin_it;if (fill_parent) {auto parent_optional_it = ConfigurationOption::Parse(to_fill, to_bound);ASSERT(parent_optional_it);}size_t end_index = struct_begin_it.NumBytesRemaining();if (end_index < 11){ return struct_begin_it.Subrange(0,0);}{if (to_bound.NumBytesRemaining() < 9){ return to_bound.Subrange(to_bound.NumBytesRemaining(),0);}}{auto mode_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto mode_ptr = &to_fill->mode_;auto extracted_value = mode_it.extract<uint8_t>();*mode_ptr = static_cast<RetransmissionAndFlowControlModeOption>(extracted_value);}{auto tx_window_size_it = to_bound + (/* Bits: */ 24 + /* Dynamic: */ 0) / 8;auto tx_window_size_ptr = &to_fill->tx_window_size_;auto extracted_value = tx_window_size_it.extract<uint8_t>();*tx_window_size_ptr = static_cast<uint8_t>(extracted_value);}{auto max_transmit_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;auto max_transmit_ptr = &to_fill->max_transmit_;auto extracted_value = max_transmit_it.extract<uint8_t>();*max_transmit_ptr = static_cast<uint8_t>(extracted_value);}{auto retransmission_time_out_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;auto retransmission_time_out_ptr = &to_fill->retransmission_time_out_;auto extracted_value = retransmission_time_out_it.extract<uint16_t>();*retransmission_time_out_ptr = static_cast<uint16_t>(extracted_value);}{auto monitor_time_out_it = to_bound + (/* Bits: */ 56 + /* Dynamic: */ 0) / 8;auto monitor_time_out_ptr = &to_fill->monitor_time_out_;auto extracted_value = monitor_time_out_it.extract<uint16_t>();*monitor_time_out_ptr = static_cast<uint16_t>(extracted_value);}{auto maximum_pdu_size_it = to_bound + (/* Bits: */ 72 + /* Dynamic: */ 0) / 8;auto maximum_pdu_size_ptr = &to_fill->maximum_pdu_size_;auto extracted_value = maximum_pdu_size_it.extract<uint16_t>();*maximum_pdu_size_ptr = static_cast<uint16_t>(extracted_value);}return struct_begin_it + to_fill->size();}
protected:size_t BitsOfHeader() const {return 0 + ConfigurationOption::BitsOfHeader()  + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ConfigurationOption::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

static bool IsInstance(const ConfigurationOption& parent) {if (parent.type_ != ConfigurationOptionType::RETRANSMISSION_AND_FLOW_CONTROL){ return false;}return true;}
static RetransmissionAndFlowControlConfigurationOption* Specialize(ConfigurationOption* parent) {ASSERT(RetransmissionAndFlowControlConfigurationOption::IsInstance(*parent));return static_cast<RetransmissionAndFlowControlConfigurationOption*>(parent);}
std::string ToString() const {std::stringstream ss;ss << std::hex << std::showbase << "RetransmissionAndFlowControlConfigurationOption { ";ss << "mode = " << RetransmissionAndFlowControlModeOptionText(mode_) << ", tx_window_size = " << static_cast<uint64_t>(tx_window_size_) << ", max_transmit = " << static_cast<uint64_t>(max_transmit_) << ", retransmission_time_out = " << static_cast<uint64_t>(retransmission_time_out_) << ", monitor_time_out = " << static_cast<uint64_t>(monitor_time_out_) << ", maximum_pdu_size = " << static_cast<uint64_t>(maximum_pdu_size_);ss << " }";return ss.str();}

RetransmissionAndFlowControlModeOption mode_{};uint8_t tx_window_size_{};uint8_t max_transmit_{};uint16_t retransmission_time_out_{};uint16_t monitor_time_out_{};uint16_t maximum_pdu_size_{};};


class FrameCheckSequenceOption : public ConfigurationOption { public:FrameCheckSequenceOption(const ConfigurationOption& parent) : ConfigurationOption(parent) {}FrameCheckSequenceOption() : ConfigurationOption() {ConfigurationOption::type_ = ConfigurationOptionType::FRAME_CHECK_SEQUENCE;}
FrameCheckSequenceOption(ConfigurationOptionIsHint is_hint, FcsType fcs_type)
 : ConfigurationOption(/* type */ ConfigurationOptionType::FRAME_CHECK_SEQUENCE, is_hint), fcs_type_(fcs_type)
{}
 public:
  virtual ~FrameCheckSequenceOption() = default;
protected:void SerializeHeader(BitInserter& i ) const {ConfigurationOption::SerializeHeader(i);insert(static_cast<uint8_t>(fcs_type_), i, 8);}

void SerializeFooter(BitInserter& i ) const {ConfigurationOption::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

static Iterator<kLittleEndian> Parse(FrameCheckSequenceOption* to_fill, Iterator<kLittleEndian> struct_begin_it , bool fill_parent = true) {auto to_bound = struct_begin_it;if (fill_parent) {auto parent_optional_it = ConfigurationOption::Parse(to_fill, to_bound);ASSERT(parent_optional_it);}size_t end_index = struct_begin_it.NumBytesRemaining();if (end_index < 3){ return struct_begin_it.Subrange(0,0);}{if (to_bound.NumBytesRemaining() < 1){ return to_bound.Subrange(to_bound.NumBytesRemaining(),0);}}{auto fcs_type_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto fcs_type_ptr = &to_fill->fcs_type_;auto extracted_value = fcs_type_it.extract<uint8_t>();*fcs_type_ptr = static_cast<FcsType>(extracted_value);}return struct_begin_it + to_fill->size();}
protected:size_t BitsOfHeader() const {return 0 + ConfigurationOption::BitsOfHeader()  + /* Bits: */ 8 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ConfigurationOption::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

static bool IsInstance(const ConfigurationOption& parent) {if (parent.type_ != ConfigurationOptionType::FRAME_CHECK_SEQUENCE){ return false;}return true;}
static FrameCheckSequenceOption* Specialize(ConfigurationOption* parent) {ASSERT(FrameCheckSequenceOption::IsInstance(*parent));return static_cast<FrameCheckSequenceOption*>(parent);}
std::string ToString() const {std::stringstream ss;ss << std::hex << std::showbase << "FrameCheckSequenceOption { ";ss << "fcs_type = " << FcsTypeText(fcs_type_);ss << " }";return ss.str();}

FcsType fcs_type_{};};


class ExtendedFlowSpecificationOption : public ConfigurationOption { public:ExtendedFlowSpecificationOption(const ConfigurationOption& parent) : ConfigurationOption(parent) {}ExtendedFlowSpecificationOption() : ConfigurationOption() {ConfigurationOption::type_ = ConfigurationOptionType::EXTENDED_FLOW_SPECIFICATION;}
ExtendedFlowSpecificationOption(ConfigurationOptionIsHint is_hint, uint8_t identifier, QosServiceType service_type, uint16_t maximum_sdu_size, uint32_t sdu_interarrival_time, uint32_t access_latency, uint32_t flush_timeout)
 : ConfigurationOption(/* type */ ConfigurationOptionType::EXTENDED_FLOW_SPECIFICATION, is_hint), identifier_(identifier), service_type_(service_type), maximum_sdu_size_(maximum_sdu_size), sdu_interarrival_time_(sdu_interarrival_time), access_latency_(access_latency), flush_timeout_(flush_timeout)
{}
 public:
  virtual ~ExtendedFlowSpecificationOption() = default;
protected:void SerializeHeader(BitInserter& i ) const {ConfigurationOption::SerializeHeader(i);i.insert_byte(identifier_);insert(static_cast<uint8_t>(service_type_), i, 8);insert(maximum_sdu_size_, i,16);insert(sdu_interarrival_time_, i,32);insert(access_latency_, i,32);insert(flush_timeout_, i,32);}

void SerializeFooter(BitInserter& i ) const {ConfigurationOption::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

static Iterator<kLittleEndian> Parse(ExtendedFlowSpecificationOption* to_fill, Iterator<kLittleEndian> struct_begin_it , bool fill_parent = true) {auto to_bound = struct_begin_it;if (fill_parent) {auto parent_optional_it = ConfigurationOption::Parse(to_fill, to_bound);ASSERT(parent_optional_it);}size_t end_index = struct_begin_it.NumBytesRemaining();if (end_index < 18){ return struct_begin_it.Subrange(0,0);}{if (to_bound.NumBytesRemaining() < 16){ return to_bound.Subrange(to_bound.NumBytesRemaining(),0);}}{auto identifier_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto identifier_ptr = &to_fill->identifier_;auto extracted_value = identifier_it.extract<uint8_t>();*identifier_ptr = static_cast<uint8_t>(extracted_value);}{auto service_type_it = to_bound + (/* Bits: */ 24 + /* Dynamic: */ 0) / 8;auto service_type_ptr = &to_fill->service_type_;auto extracted_value = service_type_it.extract<uint8_t>();*service_type_ptr = static_cast<QosServiceType>(extracted_value);}{auto maximum_sdu_size_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;auto maximum_sdu_size_ptr = &to_fill->maximum_sdu_size_;auto extracted_value = maximum_sdu_size_it.extract<uint16_t>();*maximum_sdu_size_ptr = static_cast<uint16_t>(extracted_value);}{auto sdu_interarrival_time_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;auto sdu_interarrival_time_ptr = &to_fill->sdu_interarrival_time_;auto extracted_value = sdu_interarrival_time_it.extract<uint32_t>();*sdu_interarrival_time_ptr = static_cast<uint32_t>(extracted_value);}{auto access_latency_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;auto access_latency_ptr = &to_fill->access_latency_;auto extracted_value = access_latency_it.extract<uint32_t>();*access_latency_ptr = static_cast<uint32_t>(extracted_value);}{auto flush_timeout_it = to_bound + (/* Bits: */ 112 + /* Dynamic: */ 0) / 8;auto flush_timeout_ptr = &to_fill->flush_timeout_;auto extracted_value = flush_timeout_it.extract<uint32_t>();*flush_timeout_ptr = static_cast<uint32_t>(extracted_value);}return struct_begin_it + to_fill->size();}
protected:size_t BitsOfHeader() const {return 0 + ConfigurationOption::BitsOfHeader()  + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 32 + /* Dynamic: */ 0 + /* Bits: */ 32 + /* Dynamic: */ 0 + /* Bits: */ 32 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ConfigurationOption::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

static bool IsInstance(const ConfigurationOption& parent) {if (parent.type_ != ConfigurationOptionType::EXTENDED_FLOW_SPECIFICATION){ return false;}return true;}
static ExtendedFlowSpecificationOption* Specialize(ConfigurationOption* parent) {ASSERT(ExtendedFlowSpecificationOption::IsInstance(*parent));return static_cast<ExtendedFlowSpecificationOption*>(parent);}
std::string ToString() const {std::stringstream ss;ss << std::hex << std::showbase << "ExtendedFlowSpecificationOption { ";ss << "identifier = " << static_cast<uint64_t>(identifier_) << ", service_type = " << QosServiceTypeText(service_type_) << ", maximum_sdu_size = " << static_cast<uint64_t>(maximum_sdu_size_) << ", sdu_interarrival_time = " << static_cast<uint64_t>(sdu_interarrival_time_) << ", access_latency = " << static_cast<uint64_t>(access_latency_) << ", flush_timeout = " << static_cast<uint64_t>(flush_timeout_);ss << " }";return ss.str();}

uint8_t identifier_{};QosServiceType service_type_{};uint16_t maximum_sdu_size_{};uint32_t sdu_interarrival_time_{};uint32_t access_latency_{};uint32_t flush_timeout_{};};


class ExtendedWindowSizeOption : public ConfigurationOption { public:ExtendedWindowSizeOption(const ConfigurationOption& parent) : ConfigurationOption(parent) {}ExtendedWindowSizeOption() : ConfigurationOption() {ConfigurationOption::type_ = ConfigurationOptionType::EXTENDED_WINDOW_SIZE;}
ExtendedWindowSizeOption(ConfigurationOptionIsHint is_hint, uint16_t max_window_size)
 : ConfigurationOption(/* type */ ConfigurationOptionType::EXTENDED_WINDOW_SIZE, is_hint), max_window_size_(max_window_size)
{}
 public:
  virtual ~ExtendedWindowSizeOption() = default;
protected:void SerializeHeader(BitInserter& i ) const {ConfigurationOption::SerializeHeader(i);insert(max_window_size_, i,16);}

void SerializeFooter(BitInserter& i ) const {ConfigurationOption::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

static Iterator<kLittleEndian> Parse(ExtendedWindowSizeOption* to_fill, Iterator<kLittleEndian> struct_begin_it , bool fill_parent = true) {auto to_bound = struct_begin_it;if (fill_parent) {auto parent_optional_it = ConfigurationOption::Parse(to_fill, to_bound);ASSERT(parent_optional_it);}size_t end_index = struct_begin_it.NumBytesRemaining();if (end_index < 4){ return struct_begin_it.Subrange(0,0);}{if (to_bound.NumBytesRemaining() < 2){ return to_bound.Subrange(to_bound.NumBytesRemaining(),0);}}{auto max_window_size_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto max_window_size_ptr = &to_fill->max_window_size_;auto extracted_value = max_window_size_it.extract<uint16_t>();*max_window_size_ptr = static_cast<uint16_t>(extracted_value);}return struct_begin_it + to_fill->size();}
protected:size_t BitsOfHeader() const {return 0 + ConfigurationOption::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ConfigurationOption::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

static bool IsInstance(const ConfigurationOption& parent) {if (parent.type_ != ConfigurationOptionType::EXTENDED_WINDOW_SIZE){ return false;}return true;}
static ExtendedWindowSizeOption* Specialize(ConfigurationOption* parent) {ASSERT(ExtendedWindowSizeOption::IsInstance(*parent));return static_cast<ExtendedWindowSizeOption*>(parent);}
std::string ToString() const {std::stringstream ss;ss << std::hex << std::showbase << "ExtendedWindowSizeOption { ";ss << "max_window_size = " << static_cast<uint64_t>(max_window_size_);ss << " }";return ss.str();}

uint16_t max_window_size_{};};


inline std::unique_ptr<ConfigurationOption> ParseConfigurationOption(Iterator<kLittleEndian> to_bound) {std::unique_ptr<ConfigurationOption> ConfigurationOption_parse_value = std::make_unique<ConfigurationOption>();auto ConfigurationOption_parse_it = to_bound;auto parent_optional_it = ConfigurationOption::Parse( ConfigurationOption_parse_value.get(), ConfigurationOption_parse_it);if (parent_optional_it) {ConfigurationOption_parse_it = *parent_optional_it;} else { return nullptr; }bool ConfigurationOption_parse_child_found = false; /* Greedy match */if (!ConfigurationOption_parse_child_found && MtuConfigurationOption::IsInstance(*ConfigurationOption_parse_value.get())) {ConfigurationOption_parse_child_found = true;std::unique_ptr<MtuConfigurationOption> MtuConfigurationOption_parse_value;MtuConfigurationOption_parse_value.reset(new MtuConfigurationOption(*ConfigurationOption_parse_value));MtuConfigurationOption::Parse( MtuConfigurationOption_parse_value.get(), to_bound, false);ConfigurationOption_parse_value = std::move(MtuConfigurationOption_parse_value); }if (!ConfigurationOption_parse_child_found && FlushTimeoutConfigurationOption::IsInstance(*ConfigurationOption_parse_value.get())) {ConfigurationOption_parse_child_found = true;std::unique_ptr<FlushTimeoutConfigurationOption> FlushTimeoutConfigurationOption_parse_value;FlushTimeoutConfigurationOption_parse_value.reset(new FlushTimeoutConfigurationOption(*ConfigurationOption_parse_value));FlushTimeoutConfigurationOption::Parse( FlushTimeoutConfigurationOption_parse_value.get(), to_bound, false);ConfigurationOption_parse_value = std::move(FlushTimeoutConfigurationOption_parse_value); }if (!ConfigurationOption_parse_child_found && QualityOfServiceConfigurationOption::IsInstance(*ConfigurationOption_parse_value.get())) {ConfigurationOption_parse_child_found = true;std::unique_ptr<QualityOfServiceConfigurationOption> QualityOfServiceConfigurationOption_parse_value;QualityOfServiceConfigurationOption_parse_value.reset(new QualityOfServiceConfigurationOption(*ConfigurationOption_parse_value));QualityOfServiceConfigurationOption::Parse( QualityOfServiceConfigurationOption_parse_value.get(), to_bound, false);ConfigurationOption_parse_value = std::move(QualityOfServiceConfigurationOption_parse_value); }if (!ConfigurationOption_parse_child_found && RetransmissionAndFlowControlConfigurationOption::IsInstance(*ConfigurationOption_parse_value.get())) {ConfigurationOption_parse_child_found = true;std::unique_ptr<RetransmissionAndFlowControlConfigurationOption> RetransmissionAndFlowControlConfigurationOption_parse_value;RetransmissionAndFlowControlConfigurationOption_parse_value.reset(new RetransmissionAndFlowControlConfigurationOption(*ConfigurationOption_parse_value));RetransmissionAndFlowControlConfigurationOption::Parse( RetransmissionAndFlowControlConfigurationOption_parse_value.get(), to_bound, false);ConfigurationOption_parse_value = std::move(RetransmissionAndFlowControlConfigurationOption_parse_value); }if (!ConfigurationOption_parse_child_found && FrameCheckSequenceOption::IsInstance(*ConfigurationOption_parse_value.get())) {ConfigurationOption_parse_child_found = true;std::unique_ptr<FrameCheckSequenceOption> FrameCheckSequenceOption_parse_value;FrameCheckSequenceOption_parse_value.reset(new FrameCheckSequenceOption(*ConfigurationOption_parse_value));FrameCheckSequenceOption::Parse( FrameCheckSequenceOption_parse_value.get(), to_bound, false);ConfigurationOption_parse_value = std::move(FrameCheckSequenceOption_parse_value); }if (!ConfigurationOption_parse_child_found && ExtendedFlowSpecificationOption::IsInstance(*ConfigurationOption_parse_value.get())) {ConfigurationOption_parse_child_found = true;std::unique_ptr<ExtendedFlowSpecificationOption> ExtendedFlowSpecificationOption_parse_value;ExtendedFlowSpecificationOption_parse_value.reset(new ExtendedFlowSpecificationOption(*ConfigurationOption_parse_value));ExtendedFlowSpecificationOption::Parse( ExtendedFlowSpecificationOption_parse_value.get(), to_bound, false);ConfigurationOption_parse_value = std::move(ExtendedFlowSpecificationOption_parse_value); }if (!ConfigurationOption_parse_child_found && ExtendedWindowSizeOption::IsInstance(*ConfigurationOption_parse_value.get())) {ConfigurationOption_parse_child_found = true;std::unique_ptr<ExtendedWindowSizeOption> ExtendedWindowSizeOption_parse_value;ExtendedWindowSizeOption_parse_value.reset(new ExtendedWindowSizeOption(*ConfigurationOption_parse_value));ExtendedWindowSizeOption::Parse( ExtendedWindowSizeOption_parse_value.get(), to_bound, false);ConfigurationOption_parse_value = std::move(ExtendedWindowSizeOption_parse_value); }return ConfigurationOption_parse_value; }

class BasicFrameView : public PacketView<kLittleEndian> { public:static BasicFrameView Create(PacketView<kLittleEndian> packet){ return BasicFrameView(std::move(packet)); }static std::optional<BasicFrameView> CreateOptional(PacketView<kLittleEndian> packet){ auto to_validate = BasicFrameView::Create(std::move(packet));if (to_validate.IsValid()) { return to_validate; }else {return {};}}protected:uint16_t GetPayloadSize() const {ASSERT(was_validated_);auto to_bound = begin();auto payload_size_it = to_bound + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;uint16_t payload_size_value{};uint16_t* payload_size_ptr = &payload_size_value;auto extracted_value = payload_size_it.extract<uint16_t>();*payload_size_ptr = static_cast<uint16_t>(extracted_value);return payload_size_value;}public:

uint16_t GetChannelId() const {ASSERT(was_validated_);auto to_bound = begin();auto channel_id_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;uint16_t channel_id_value{};uint16_t* channel_id_ptr = &channel_id_value;auto extracted_value = channel_id_it.extract<uint16_t>();*channel_id_ptr = static_cast<uint16_t>(extracted_value);return channel_id_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;size_t field_sized_end = field_begin + (/* Bits: */ 0 + /* Dynamic: */ (GetPayloadSize() * 8)) / 8;if (field_sized_end < field_end) { field_end = field_sized_end; }auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


bool IsValid() {
  if (was_validated_) {
    return true;
  } else {
    was_validated_ = true;
    return (was_validated_ = Validate());
  }
}
protected:
virtual bool Validate() const {
auto it = begin() + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;it += ((GetPayloadSize() * 8)) / 8;if (it > end()) return false;


return true;}
bool was_validated_{false};

 public:virtual std::string ToString() const  {std::stringstream ss;ss << std::showbase << std::hex << "BasicFrame { ";ss << ""  << "payload_size = " << GetPayloadSize() << ", channel_id = " << static_cast<uint64_t>(GetChannelId()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit BasicFrameView(PacketView<kLittleEndian> packet)  : PacketView<kLittleEndian>(packet) { was_validated_ = false;}};


class BasicFrameWithFcsView : public PacketView<kLittleEndian> { public:static BasicFrameWithFcsView Create(PacketView<kLittleEndian> packet){ return BasicFrameWithFcsView(std::move(packet)); }static std::optional<BasicFrameWithFcsView> CreateOptional(PacketView<kLittleEndian> packet){ auto to_validate = BasicFrameWithFcsView::Create(std::move(packet));if (to_validate.IsValid()) { return to_validate; }else {return {};}}
protected:uint16_t GetPayloadSize() const {ASSERT(was_validated_);auto to_bound = begin();auto payload_size_it = to_bound + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;uint16_t payload_size_value{};uint16_t* payload_size_ptr = &payload_size_value;auto extracted_value = payload_size_it.extract<uint16_t>();*payload_size_ptr = static_cast<uint16_t>(extracted_value);return payload_size_value;}public:

uint16_t GetChannelId() const {ASSERT(was_validated_);auto to_bound = begin();auto channel_id_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;uint16_t channel_id_value{};uint16_t* channel_id_ptr = &channel_id_value;auto extracted_value = channel_id_it.extract<uint16_t>();*channel_id_ptr = static_cast<uint16_t>(extracted_value);return channel_id_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;size_t field_sized_end = field_begin + (/* Bits: */ 0 + /* Dynamic: */ (GetPayloadSize() * 8)- (2 * 8)) / 8;if (field_sized_end < field_end) { field_end = field_sized_end; }auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}



bool IsValid() {
  if (was_validated_) {
    return true;
  } else {
    was_validated_ = true;
    return (was_validated_ = Validate());
  }
}
protected:
virtual bool Validate() const {
auto it = begin() + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;it += 6 /* Total size of the fixed fields */;if (it > end()) return false;size_t sum_index = (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;size_t end_sum_index = (/* Bits: */ 32 + /* Dynamic: */ (GetPayloadSize() * 8)- (2 * 8)) / 8;if (end_sum_index >= size()) { return false; }auto checksum_view = GetLittleEndianSubview(sum_index, end_sum_index);Fcs checksum;checksum.Initialize();for (uint8_t byte : checksum_view) { checksum.AddByte(byte);}if (checksum.GetChecksum() != (begin() + end_sum_index).extract<uint16_t>()) { return false; }it += ((GetPayloadSize() * 8)- (2 * 8)) / 8;if (it > end()) return false;




return true;}
bool was_validated_{false};

 public:virtual std::string ToString() const  {std::stringstream ss;ss << std::showbase << std::hex << "BasicFrameWithFcs { ";ss << ""  << "payload_size = " << GetPayloadSize() << ", channel_id = " << static_cast<uint64_t>(GetChannelId()) << ", payload = " << "PAYLOAD[]" << ", fcs = " << "CHECKSUM";ss << " }";return ss.str();}

 protected:
explicit BasicFrameWithFcsView(PacketView<kLittleEndian> packet)  : PacketView<kLittleEndian>(packet) { was_validated_ = false;}};


class GroupFrameView : public BasicFrameView { public:static GroupFrameView Create(BasicFrameView parent){ return GroupFrameView(std::move(parent)); }static std::optional<GroupFrameView> CreateOptional(BasicFrameView parent){ auto to_validate = GroupFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetPsm() const {ASSERT(was_validated_);auto to_bound = begin();auto psm_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t psm_value{};uint16_t* psm_ptr = &psm_value;auto extracted_value = psm_it.extract<uint16_t>();*psm_ptr = static_cast<uint16_t>(extracted_value);return psm_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!BasicFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetChannelId() != 2) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "GroupFrame { ";ss << ""  << "psm = " << static_cast<uint64_t>(GetPsm()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit GroupFrameView(BasicFrameView parent) : BasicFrameView(std::move(parent)) { was_validated_ = false; }};


class StandardFrameView : public BasicFrameView { public:static StandardFrameView Create(BasicFrameView parent){ return StandardFrameView(std::move(parent)); }static std::optional<StandardFrameView> CreateOptional(BasicFrameView parent){ auto to_validate = StandardFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}FrameType GetFrameType() const {ASSERT(was_validated_);auto to_bound = begin();auto frame_type_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;FrameType frame_type_value{};FrameType* frame_type_ptr = &frame_type_value;auto extracted_value = frame_type_it.extract<uint8_t>();extracted_value &= 0x1;*frame_type_ptr = static_cast<FrameType>(extracted_value);return frame_type_value;}

protected:
bool Validate() const override {
  if (!BasicFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 1 /* Total size of the fixed fields */;if (it > end()) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "StandardFrame { ";ss << ""  << "frame_type = " << FrameTypeText(GetFrameType()) << ", body = " << "BODY REPRESENTATION_UNIMPLEMENTED () ";ss << " }";return ss.str();}

 protected:
explicit StandardFrameView(BasicFrameView parent) : BasicFrameView(std::move(parent)) { was_validated_ = false; }};


class StandardFrameWithFcsView : public BasicFrameWithFcsView { public:static StandardFrameWithFcsView Create(BasicFrameWithFcsView parent){ return StandardFrameWithFcsView(std::move(parent)); }static std::optional<StandardFrameWithFcsView> CreateOptional(BasicFrameWithFcsView parent){ auto to_validate = StandardFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}FrameType GetFrameType() const {ASSERT(was_validated_);auto to_bound = begin();auto frame_type_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;FrameType frame_type_value{};FrameType* frame_type_ptr = &frame_type_value;auto extracted_value = frame_type_it.extract<uint8_t>();extracted_value &= 0x1;*frame_type_ptr = static_cast<FrameType>(extracted_value);return frame_type_value;}

protected:
bool Validate() const override {
  if (!BasicFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 1 /* Total size of the fixed fields */;if (it > end()) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "StandardFrameWithFcs { ";ss << ""  << "frame_type = " << FrameTypeText(GetFrameType()) << ", body = " << "BODY REPRESENTATION_UNIMPLEMENTED () ";ss << " }";return ss.str();}

 protected:
explicit StandardFrameWithFcsView(BasicFrameWithFcsView parent) : BasicFrameWithFcsView(std::move(parent)) { was_validated_ = false; }};


class StandardSupervisoryFrameView : public StandardFrameView { public:static StandardSupervisoryFrameView Create(StandardFrameView parent){ return StandardSupervisoryFrameView(std::move(parent)); }static std::optional<StandardSupervisoryFrameView> CreateOptional(StandardFrameView parent){ auto to_validate = StandardSupervisoryFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}SupervisoryFunction GetS() const {ASSERT(was_validated_);auto to_bound = begin();auto s_it = to_bound + (/* Bits: */ 34 + /* Dynamic: */ 0) / 8;SupervisoryFunction s_value{};SupervisoryFunction* s_ptr = &s_value;auto extracted_value = s_it.extract<uint8_t>();extracted_value >>= 2;extracted_value &= 0x3;*s_ptr = static_cast<SupervisoryFunction>(extracted_value);return s_value;}

RetransmissionDisable GetR() const {ASSERT(was_validated_);auto to_bound = begin();auto r_it = to_bound + (/* Bits: */ 39 + /* Dynamic: */ 0) / 8;RetransmissionDisable r_value{};RetransmissionDisable* r_ptr = &r_value;auto extracted_value = r_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*r_ptr = static_cast<RetransmissionDisable>(extracted_value);return r_value;}
uint8_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;uint8_t req_seq_value{};uint8_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint8_t>();extracted_value &= 0x3f;*req_seq_ptr = static_cast<uint8_t>(extracted_value);return req_seq_value;}

protected:
bool Validate() const override {
  if (!StandardFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::S_FRAME) return false;if (GetFixedScalar14() != 0) return false;





return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "StandardSupervisoryFrame { ";ss << ""  << "s = " << SupervisoryFunctionText(GetS()) << ", r = " << RetransmissionDisableText(GetR()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq());ss << " }";return ss.str();}

 protected:
explicit StandardSupervisoryFrameView(StandardFrameView parent) : StandardFrameView(std::move(parent)) { was_validated_ = false; } private:
protected:uint8_t GetFixedScalar14() const {ASSERT(was_validated_);auto to_bound = begin();auto fixed_scalar14_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;uint8_t fixed_scalar14_value{};uint8_t* fixed_scalar14_ptr = &fixed_scalar14_value;auto extracted_value = fixed_scalar14_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*fixed_scalar14_ptr = static_cast<uint8_t>(extracted_value);return fixed_scalar14_value;}public:

};


class StandardSupervisoryFrameWithFcsView : public StandardFrameWithFcsView { public:static StandardSupervisoryFrameWithFcsView Create(StandardFrameWithFcsView parent){ return StandardSupervisoryFrameWithFcsView(std::move(parent)); }static std::optional<StandardSupervisoryFrameWithFcsView> CreateOptional(StandardFrameWithFcsView parent){ auto to_validate = StandardSupervisoryFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}SupervisoryFunction GetS() const {ASSERT(was_validated_);auto to_bound = begin();auto s_it = to_bound + (/* Bits: */ 34 + /* Dynamic: */ 0) / 8;SupervisoryFunction s_value{};SupervisoryFunction* s_ptr = &s_value;auto extracted_value = s_it.extract<uint8_t>();extracted_value >>= 2;extracted_value &= 0x3;*s_ptr = static_cast<SupervisoryFunction>(extracted_value);return s_value;}

RetransmissionDisable GetR() const {ASSERT(was_validated_);auto to_bound = begin();auto r_it = to_bound + (/* Bits: */ 39 + /* Dynamic: */ 0) / 8;RetransmissionDisable r_value{};RetransmissionDisable* r_ptr = &r_value;auto extracted_value = r_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*r_ptr = static_cast<RetransmissionDisable>(extracted_value);return r_value;}
uint8_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;uint8_t req_seq_value{};uint8_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint8_t>();extracted_value &= 0x3f;*req_seq_ptr = static_cast<uint8_t>(extracted_value);return req_seq_value;}

protected:
bool Validate() const override {
  if (!StandardFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 49 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::S_FRAME) return false;if (GetFixedScalar14() != 0) return false;





return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "StandardSupervisoryFrameWithFcs { ";ss << ""  << "s = " << SupervisoryFunctionText(GetS()) << ", r = " << RetransmissionDisableText(GetR()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq());ss << " }";return ss.str();}

 protected:
explicit StandardSupervisoryFrameWithFcsView(StandardFrameWithFcsView parent) : StandardFrameWithFcsView(std::move(parent)) { was_validated_ = false; } private:
protected:uint8_t GetFixedScalar14() const {ASSERT(was_validated_);auto to_bound = begin();auto fixed_scalar14_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;uint8_t fixed_scalar14_value{};uint8_t* fixed_scalar14_ptr = &fixed_scalar14_value;auto extracted_value = fixed_scalar14_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*fixed_scalar14_ptr = static_cast<uint8_t>(extracted_value);return fixed_scalar14_value;}public:

};


class StandardInformationFrameView : public StandardFrameView { public:static StandardInformationFrameView Create(StandardFrameView parent){ return StandardInformationFrameView(std::move(parent)); }static std::optional<StandardInformationFrameView> CreateOptional(StandardFrameView parent){ auto to_validate = StandardInformationFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint8_t GetTxSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto tx_seq_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;uint8_t tx_seq_value{};uint8_t* tx_seq_ptr = &tx_seq_value;auto extracted_value = tx_seq_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x3f;*tx_seq_ptr = static_cast<uint8_t>(extracted_value);return tx_seq_value;}
RetransmissionDisable GetR() const {ASSERT(was_validated_);auto to_bound = begin();auto r_it = to_bound + (/* Bits: */ 39 + /* Dynamic: */ 0) / 8;RetransmissionDisable r_value{};RetransmissionDisable* r_ptr = &r_value;auto extracted_value = r_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*r_ptr = static_cast<RetransmissionDisable>(extracted_value);return r_value;}
uint8_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;uint8_t req_seq_value{};uint8_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint8_t>();extracted_value &= 0x3f;*req_seq_ptr = static_cast<uint8_t>(extracted_value);return req_seq_value;}
SegmentationAndReassembly GetSar() const {ASSERT(was_validated_);auto to_bound = begin();auto sar_it = to_bound + (/* Bits: */ 46 + /* Dynamic: */ 0) / 8;SegmentationAndReassembly sar_value{};SegmentationAndReassembly* sar_ptr = &sar_value;auto extracted_value = sar_it.extract<uint8_t>();extracted_value >>= 6;extracted_value &= 0x3;*sar_ptr = static_cast<SegmentationAndReassembly>(extracted_value);return sar_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!StandardFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::I_FRAME) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "StandardInformationFrame { ";ss << ""  << "tx_seq = " << static_cast<uint64_t>(GetTxSeq()) << ", r = " << RetransmissionDisableText(GetR()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq()) << ", sar = " << SegmentationAndReassemblyText(GetSar()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit StandardInformationFrameView(StandardFrameView parent) : StandardFrameView(std::move(parent)) { was_validated_ = false; }};


class StandardInformationFrameWithFcsView : public StandardFrameWithFcsView { public:static StandardInformationFrameWithFcsView Create(StandardFrameWithFcsView parent){ return StandardInformationFrameWithFcsView(std::move(parent)); }static std::optional<StandardInformationFrameWithFcsView> CreateOptional(StandardFrameWithFcsView parent){ auto to_validate = StandardInformationFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint8_t GetTxSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto tx_seq_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;uint8_t tx_seq_value{};uint8_t* tx_seq_ptr = &tx_seq_value;auto extracted_value = tx_seq_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x3f;*tx_seq_ptr = static_cast<uint8_t>(extracted_value);return tx_seq_value;}
RetransmissionDisable GetR() const {ASSERT(was_validated_);auto to_bound = begin();auto r_it = to_bound + (/* Bits: */ 39 + /* Dynamic: */ 0) / 8;RetransmissionDisable r_value{};RetransmissionDisable* r_ptr = &r_value;auto extracted_value = r_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*r_ptr = static_cast<RetransmissionDisable>(extracted_value);return r_value;}
uint8_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;uint8_t req_seq_value{};uint8_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint8_t>();extracted_value &= 0x3f;*req_seq_ptr = static_cast<uint8_t>(extracted_value);return req_seq_value;}
SegmentationAndReassembly GetSar() const {ASSERT(was_validated_);auto to_bound = begin();auto sar_it = to_bound + (/* Bits: */ 46 + /* Dynamic: */ 0) / 8;SegmentationAndReassembly sar_value{};SegmentationAndReassembly* sar_ptr = &sar_value;auto extracted_value = sar_it.extract<uint8_t>();extracted_value >>= 6;extracted_value &= 0x3;*sar_ptr = static_cast<SegmentationAndReassembly>(extracted_value);return sar_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!StandardFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 49 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::I_FRAME) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "StandardInformationFrameWithFcs { ";ss << ""  << "tx_seq = " << static_cast<uint64_t>(GetTxSeq()) << ", r = " << RetransmissionDisableText(GetR()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq()) << ", sar = " << SegmentationAndReassemblyText(GetSar()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit StandardInformationFrameWithFcsView(StandardFrameWithFcsView parent) : StandardFrameWithFcsView(std::move(parent)) { was_validated_ = false; }};


class StandardInformationStartFrameView : public StandardInformationFrameView { public:static StandardInformationStartFrameView Create(StandardInformationFrameView parent){ return StandardInformationStartFrameView(std::move(parent)); }static std::optional<StandardInformationStartFrameView> CreateOptional(StandardInformationFrameView parent){ auto to_validate = StandardInformationStartFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetL2capSduLength() const {ASSERT(was_validated_);auto to_bound = begin();auto l2cap_sdu_length_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t l2cap_sdu_length_value{};uint16_t* l2cap_sdu_length_ptr = &l2cap_sdu_length_value;auto extracted_value = l2cap_sdu_length_it.extract<uint16_t>();*l2cap_sdu_length_ptr = static_cast<uint16_t>(extracted_value);return l2cap_sdu_length_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!StandardInformationFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetSar() != SegmentationAndReassembly::START) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "StandardInformationStartFrame { ";ss << ""  << "l2cap_sdu_length = " << static_cast<uint64_t>(GetL2capSduLength()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit StandardInformationStartFrameView(StandardInformationFrameView parent) : StandardInformationFrameView(std::move(parent)) { was_validated_ = false; }};


class StandardInformationStartFrameWithFcsView : public StandardInformationFrameWithFcsView { public:static StandardInformationStartFrameWithFcsView Create(StandardInformationFrameWithFcsView parent){ return StandardInformationStartFrameWithFcsView(std::move(parent)); }static std::optional<StandardInformationStartFrameWithFcsView> CreateOptional(StandardInformationFrameWithFcsView parent){ auto to_validate = StandardInformationStartFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetL2capSduLength() const {ASSERT(was_validated_);auto to_bound = begin();auto l2cap_sdu_length_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t l2cap_sdu_length_value{};uint16_t* l2cap_sdu_length_ptr = &l2cap_sdu_length_value;auto extracted_value = l2cap_sdu_length_it.extract<uint16_t>();*l2cap_sdu_length_ptr = static_cast<uint16_t>(extracted_value);return l2cap_sdu_length_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!StandardInformationFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetSar() != SegmentationAndReassembly::START) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "StandardInformationStartFrameWithFcs { ";ss << ""  << "l2cap_sdu_length = " << static_cast<uint64_t>(GetL2capSduLength()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit StandardInformationStartFrameWithFcsView(StandardInformationFrameWithFcsView parent) : StandardInformationFrameWithFcsView(std::move(parent)) { was_validated_ = false; }};


class EnhancedSupervisoryFrameView : public StandardFrameView { public:static EnhancedSupervisoryFrameView Create(StandardFrameView parent){ return EnhancedSupervisoryFrameView(std::move(parent)); }static std::optional<EnhancedSupervisoryFrameView> CreateOptional(StandardFrameView parent){ auto to_validate = EnhancedSupervisoryFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}SupervisoryFunction GetS() const {ASSERT(was_validated_);auto to_bound = begin();auto s_it = to_bound + (/* Bits: */ 34 + /* Dynamic: */ 0) / 8;SupervisoryFunction s_value{};SupervisoryFunction* s_ptr = &s_value;auto extracted_value = s_it.extract<uint8_t>();extracted_value >>= 2;extracted_value &= 0x3;*s_ptr = static_cast<SupervisoryFunction>(extracted_value);return s_value;}
Poll GetP() const {ASSERT(was_validated_);auto to_bound = begin();auto p_it = to_bound + (/* Bits: */ 36 + /* Dynamic: */ 0) / 8;Poll p_value{};Poll* p_ptr = &p_value;auto extracted_value = p_it.extract<uint8_t>();extracted_value >>= 4;extracted_value &= 0x1;*p_ptr = static_cast<Poll>(extracted_value);return p_value;}

Final GetF() const {ASSERT(was_validated_);auto to_bound = begin();auto f_it = to_bound + (/* Bits: */ 39 + /* Dynamic: */ 0) / 8;Final f_value{};Final* f_ptr = &f_value;auto extracted_value = f_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*f_ptr = static_cast<Final>(extracted_value);return f_value;}
uint8_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;uint8_t req_seq_value{};uint8_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint8_t>();extracted_value &= 0x3f;*req_seq_ptr = static_cast<uint8_t>(extracted_value);return req_seq_value;}

protected:
bool Validate() const override {
  if (!StandardFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::S_FRAME) return false;if (GetFixedScalar15() != 0) return false;






return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "EnhancedSupervisoryFrame { ";ss << ""  << "s = " << SupervisoryFunctionText(GetS()) << ", p = " << PollText(GetP()) << ", f = " << FinalText(GetF()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq());ss << " }";return ss.str();}

 protected:
explicit EnhancedSupervisoryFrameView(StandardFrameView parent) : StandardFrameView(std::move(parent)) { was_validated_ = false; } private:
protected:uint8_t GetFixedScalar15() const {ASSERT(was_validated_);auto to_bound = begin();auto fixed_scalar15_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;uint8_t fixed_scalar15_value{};uint8_t* fixed_scalar15_ptr = &fixed_scalar15_value;auto extracted_value = fixed_scalar15_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*fixed_scalar15_ptr = static_cast<uint8_t>(extracted_value);return fixed_scalar15_value;}public:

};


class EnhancedSupervisoryFrameWithFcsView : public StandardFrameWithFcsView { public:static EnhancedSupervisoryFrameWithFcsView Create(StandardFrameWithFcsView parent){ return EnhancedSupervisoryFrameWithFcsView(std::move(parent)); }static std::optional<EnhancedSupervisoryFrameWithFcsView> CreateOptional(StandardFrameWithFcsView parent){ auto to_validate = EnhancedSupervisoryFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}SupervisoryFunction GetS() const {ASSERT(was_validated_);auto to_bound = begin();auto s_it = to_bound + (/* Bits: */ 34 + /* Dynamic: */ 0) / 8;SupervisoryFunction s_value{};SupervisoryFunction* s_ptr = &s_value;auto extracted_value = s_it.extract<uint8_t>();extracted_value >>= 2;extracted_value &= 0x3;*s_ptr = static_cast<SupervisoryFunction>(extracted_value);return s_value;}
Poll GetP() const {ASSERT(was_validated_);auto to_bound = begin();auto p_it = to_bound + (/* Bits: */ 36 + /* Dynamic: */ 0) / 8;Poll p_value{};Poll* p_ptr = &p_value;auto extracted_value = p_it.extract<uint8_t>();extracted_value >>= 4;extracted_value &= 0x1;*p_ptr = static_cast<Poll>(extracted_value);return p_value;}

Final GetF() const {ASSERT(was_validated_);auto to_bound = begin();auto f_it = to_bound + (/* Bits: */ 39 + /* Dynamic: */ 0) / 8;Final f_value{};Final* f_ptr = &f_value;auto extracted_value = f_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*f_ptr = static_cast<Final>(extracted_value);return f_value;}
uint8_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;uint8_t req_seq_value{};uint8_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint8_t>();extracted_value &= 0x3f;*req_seq_ptr = static_cast<uint8_t>(extracted_value);return req_seq_value;}

protected:
bool Validate() const override {
  if (!StandardFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 49 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::S_FRAME) return false;if (GetFixedScalar15() != 0) return false;






return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "EnhancedSupervisoryFrameWithFcs { ";ss << ""  << "s = " << SupervisoryFunctionText(GetS()) << ", p = " << PollText(GetP()) << ", f = " << FinalText(GetF()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq());ss << " }";return ss.str();}

 protected:
explicit EnhancedSupervisoryFrameWithFcsView(StandardFrameWithFcsView parent) : StandardFrameWithFcsView(std::move(parent)) { was_validated_ = false; } private:
protected:uint8_t GetFixedScalar15() const {ASSERT(was_validated_);auto to_bound = begin();auto fixed_scalar15_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;uint8_t fixed_scalar15_value{};uint8_t* fixed_scalar15_ptr = &fixed_scalar15_value;auto extracted_value = fixed_scalar15_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*fixed_scalar15_ptr = static_cast<uint8_t>(extracted_value);return fixed_scalar15_value;}public:

};


class EnhancedInformationFrameView : public StandardFrameView { public:static EnhancedInformationFrameView Create(StandardFrameView parent){ return EnhancedInformationFrameView(std::move(parent)); }static std::optional<EnhancedInformationFrameView> CreateOptional(StandardFrameView parent){ auto to_validate = EnhancedInformationFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint8_t GetTxSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto tx_seq_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;uint8_t tx_seq_value{};uint8_t* tx_seq_ptr = &tx_seq_value;auto extracted_value = tx_seq_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x3f;*tx_seq_ptr = static_cast<uint8_t>(extracted_value);return tx_seq_value;}
Final GetF() const {ASSERT(was_validated_);auto to_bound = begin();auto f_it = to_bound + (/* Bits: */ 39 + /* Dynamic: */ 0) / 8;Final f_value{};Final* f_ptr = &f_value;auto extracted_value = f_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*f_ptr = static_cast<Final>(extracted_value);return f_value;}
uint8_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;uint8_t req_seq_value{};uint8_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint8_t>();extracted_value &= 0x3f;*req_seq_ptr = static_cast<uint8_t>(extracted_value);return req_seq_value;}
SegmentationAndReassembly GetSar() const {ASSERT(was_validated_);auto to_bound = begin();auto sar_it = to_bound + (/* Bits: */ 46 + /* Dynamic: */ 0) / 8;SegmentationAndReassembly sar_value{};SegmentationAndReassembly* sar_ptr = &sar_value;auto extracted_value = sar_it.extract<uint8_t>();extracted_value >>= 6;extracted_value &= 0x3;*sar_ptr = static_cast<SegmentationAndReassembly>(extracted_value);return sar_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!StandardFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::I_FRAME) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "EnhancedInformationFrame { ";ss << ""  << "tx_seq = " << static_cast<uint64_t>(GetTxSeq()) << ", f = " << FinalText(GetF()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq()) << ", sar = " << SegmentationAndReassemblyText(GetSar()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit EnhancedInformationFrameView(StandardFrameView parent) : StandardFrameView(std::move(parent)) { was_validated_ = false; }};


class EnhancedInformationFrameWithFcsView : public StandardFrameWithFcsView { public:static EnhancedInformationFrameWithFcsView Create(StandardFrameWithFcsView parent){ return EnhancedInformationFrameWithFcsView(std::move(parent)); }static std::optional<EnhancedInformationFrameWithFcsView> CreateOptional(StandardFrameWithFcsView parent){ auto to_validate = EnhancedInformationFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint8_t GetTxSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto tx_seq_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;uint8_t tx_seq_value{};uint8_t* tx_seq_ptr = &tx_seq_value;auto extracted_value = tx_seq_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x3f;*tx_seq_ptr = static_cast<uint8_t>(extracted_value);return tx_seq_value;}
Final GetF() const {ASSERT(was_validated_);auto to_bound = begin();auto f_it = to_bound + (/* Bits: */ 39 + /* Dynamic: */ 0) / 8;Final f_value{};Final* f_ptr = &f_value;auto extracted_value = f_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*f_ptr = static_cast<Final>(extracted_value);return f_value;}
uint8_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 40 + /* Dynamic: */ 0) / 8;uint8_t req_seq_value{};uint8_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint8_t>();extracted_value &= 0x3f;*req_seq_ptr = static_cast<uint8_t>(extracted_value);return req_seq_value;}
SegmentationAndReassembly GetSar() const {ASSERT(was_validated_);auto to_bound = begin();auto sar_it = to_bound + (/* Bits: */ 46 + /* Dynamic: */ 0) / 8;SegmentationAndReassembly sar_value{};SegmentationAndReassembly* sar_ptr = &sar_value;auto extracted_value = sar_it.extract<uint8_t>();extracted_value >>= 6;extracted_value &= 0x3;*sar_ptr = static_cast<SegmentationAndReassembly>(extracted_value);return sar_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!StandardFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 49 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::I_FRAME) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "EnhancedInformationFrameWithFcs { ";ss << ""  << "tx_seq = " << static_cast<uint64_t>(GetTxSeq()) << ", f = " << FinalText(GetF()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq()) << ", sar = " << SegmentationAndReassemblyText(GetSar()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit EnhancedInformationFrameWithFcsView(StandardFrameWithFcsView parent) : StandardFrameWithFcsView(std::move(parent)) { was_validated_ = false; }};


class EnhancedInformationStartFrameView : public EnhancedInformationFrameView { public:static EnhancedInformationStartFrameView Create(EnhancedInformationFrameView parent){ return EnhancedInformationStartFrameView(std::move(parent)); }static std::optional<EnhancedInformationStartFrameView> CreateOptional(EnhancedInformationFrameView parent){ auto to_validate = EnhancedInformationStartFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetL2capSduLength() const {ASSERT(was_validated_);auto to_bound = begin();auto l2cap_sdu_length_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t l2cap_sdu_length_value{};uint16_t* l2cap_sdu_length_ptr = &l2cap_sdu_length_value;auto extracted_value = l2cap_sdu_length_it.extract<uint16_t>();*l2cap_sdu_length_ptr = static_cast<uint16_t>(extracted_value);return l2cap_sdu_length_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!EnhancedInformationFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetSar() != SegmentationAndReassembly::START) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "EnhancedInformationStartFrame { ";ss << ""  << "l2cap_sdu_length = " << static_cast<uint64_t>(GetL2capSduLength()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit EnhancedInformationStartFrameView(EnhancedInformationFrameView parent) : EnhancedInformationFrameView(std::move(parent)) { was_validated_ = false; }};


class EnhancedInformationStartFrameWithFcsView : public EnhancedInformationFrameWithFcsView { public:static EnhancedInformationStartFrameWithFcsView Create(EnhancedInformationFrameWithFcsView parent){ return EnhancedInformationStartFrameWithFcsView(std::move(parent)); }static std::optional<EnhancedInformationStartFrameWithFcsView> CreateOptional(EnhancedInformationFrameWithFcsView parent){ auto to_validate = EnhancedInformationStartFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetL2capSduLength() const {ASSERT(was_validated_);auto to_bound = begin();auto l2cap_sdu_length_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t l2cap_sdu_length_value{};uint16_t* l2cap_sdu_length_ptr = &l2cap_sdu_length_value;auto extracted_value = l2cap_sdu_length_it.extract<uint16_t>();*l2cap_sdu_length_ptr = static_cast<uint16_t>(extracted_value);return l2cap_sdu_length_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!EnhancedInformationFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetSar() != SegmentationAndReassembly::START) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "EnhancedInformationStartFrameWithFcs { ";ss << ""  << "l2cap_sdu_length = " << static_cast<uint64_t>(GetL2capSduLength()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit EnhancedInformationStartFrameWithFcsView(EnhancedInformationFrameWithFcsView parent) : EnhancedInformationFrameWithFcsView(std::move(parent)) { was_validated_ = false; }};


class ExtendedSupervisoryFrameView : public StandardFrameView { public:static ExtendedSupervisoryFrameView Create(StandardFrameView parent){ return ExtendedSupervisoryFrameView(std::move(parent)); }static std::optional<ExtendedSupervisoryFrameView> CreateOptional(StandardFrameView parent){ auto to_validate = ExtendedSupervisoryFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}Final GetF() const {ASSERT(was_validated_);auto to_bound = begin();auto f_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;Final f_value{};Final* f_ptr = &f_value;auto extracted_value = f_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*f_ptr = static_cast<Final>(extracted_value);return f_value;}
uint16_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 34 + /* Dynamic: */ 0) / 8;uint16_t req_seq_value{};uint16_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint16_t>();extracted_value >>= 2;extracted_value &= 0x3fff;*req_seq_ptr = static_cast<uint16_t>(extracted_value);return req_seq_value;}
SupervisoryFunction GetS() const {ASSERT(was_validated_);auto to_bound = begin();auto s_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;SupervisoryFunction s_value{};SupervisoryFunction* s_ptr = &s_value;auto extracted_value = s_it.extract<uint8_t>();extracted_value &= 0x3;*s_ptr = static_cast<SupervisoryFunction>(extracted_value);return s_value;}
Poll GetP() const {ASSERT(was_validated_);auto to_bound = begin();auto p_it = to_bound + (/* Bits: */ 50 + /* Dynamic: */ 0) / 8;Poll p_value{};Poll* p_ptr = &p_value;auto extracted_value = p_it.extract<uint8_t>();extracted_value >>= 2;extracted_value &= 0x1;*p_ptr = static_cast<Poll>(extracted_value);return p_value;}


protected:
bool Validate() const override {
  if (!StandardFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::S_FRAME) return false;





return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ExtendedSupervisoryFrame { ";ss << ""  << "f = " << FinalText(GetF()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq()) << ", s = " << SupervisoryFunctionText(GetS()) << ", p = " << PollText(GetP());ss << " }";return ss.str();}

 protected:
explicit ExtendedSupervisoryFrameView(StandardFrameView parent) : StandardFrameView(std::move(parent)) { was_validated_ = false; }};


class ExtendedSupervisoryFrameWithFcsView : public StandardFrameWithFcsView { public:static ExtendedSupervisoryFrameWithFcsView Create(StandardFrameWithFcsView parent){ return ExtendedSupervisoryFrameWithFcsView(std::move(parent)); }static std::optional<ExtendedSupervisoryFrameWithFcsView> CreateOptional(StandardFrameWithFcsView parent){ auto to_validate = ExtendedSupervisoryFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}Final GetF() const {ASSERT(was_validated_);auto to_bound = begin();auto f_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;Final f_value{};Final* f_ptr = &f_value;auto extracted_value = f_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*f_ptr = static_cast<Final>(extracted_value);return f_value;}
uint16_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 34 + /* Dynamic: */ 0) / 8;uint16_t req_seq_value{};uint16_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint16_t>();extracted_value >>= 2;extracted_value &= 0x3fff;*req_seq_ptr = static_cast<uint16_t>(extracted_value);return req_seq_value;}
SupervisoryFunction GetS() const {ASSERT(was_validated_);auto to_bound = begin();auto s_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;SupervisoryFunction s_value{};SupervisoryFunction* s_ptr = &s_value;auto extracted_value = s_it.extract<uint8_t>();extracted_value &= 0x3;*s_ptr = static_cast<SupervisoryFunction>(extracted_value);return s_value;}
Poll GetP() const {ASSERT(was_validated_);auto to_bound = begin();auto p_it = to_bound + (/* Bits: */ 50 + /* Dynamic: */ 0) / 8;Poll p_value{};Poll* p_ptr = &p_value;auto extracted_value = p_it.extract<uint8_t>();extracted_value >>= 2;extracted_value &= 0x1;*p_ptr = static_cast<Poll>(extracted_value);return p_value;}


protected:
bool Validate() const override {
  if (!StandardFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 49 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::S_FRAME) return false;





return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ExtendedSupervisoryFrameWithFcs { ";ss << ""  << "f = " << FinalText(GetF()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq()) << ", s = " << SupervisoryFunctionText(GetS()) << ", p = " << PollText(GetP());ss << " }";return ss.str();}

 protected:
explicit ExtendedSupervisoryFrameWithFcsView(StandardFrameWithFcsView parent) : StandardFrameWithFcsView(std::move(parent)) { was_validated_ = false; }};


class ExtendedInformationFrameView : public StandardFrameView { public:static ExtendedInformationFrameView Create(StandardFrameView parent){ return ExtendedInformationFrameView(std::move(parent)); }static std::optional<ExtendedInformationFrameView> CreateOptional(StandardFrameView parent){ auto to_validate = ExtendedInformationFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}Final GetF() const {ASSERT(was_validated_);auto to_bound = begin();auto f_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;Final f_value{};Final* f_ptr = &f_value;auto extracted_value = f_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*f_ptr = static_cast<Final>(extracted_value);return f_value;}
uint16_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 34 + /* Dynamic: */ 0) / 8;uint16_t req_seq_value{};uint16_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint16_t>();extracted_value >>= 2;extracted_value &= 0x3fff;*req_seq_ptr = static_cast<uint16_t>(extracted_value);return req_seq_value;}
SegmentationAndReassembly GetSar() const {ASSERT(was_validated_);auto to_bound = begin();auto sar_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;SegmentationAndReassembly sar_value{};SegmentationAndReassembly* sar_ptr = &sar_value;auto extracted_value = sar_it.extract<uint8_t>();extracted_value &= 0x3;*sar_ptr = static_cast<SegmentationAndReassembly>(extracted_value);return sar_value;}
uint16_t GetTxSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto tx_seq_it = to_bound + (/* Bits: */ 50 + /* Dynamic: */ 0) / 8;uint16_t tx_seq_value{};uint16_t* tx_seq_ptr = &tx_seq_value;auto extracted_value = tx_seq_it.extract<uint16_t>();extracted_value >>= 2;extracted_value &= 0x3fff;*tx_seq_ptr = static_cast<uint16_t>(extracted_value);return tx_seq_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!StandardFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::I_FRAME) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ExtendedInformationFrame { ";ss << ""  << "f = " << FinalText(GetF()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq()) << ", sar = " << SegmentationAndReassemblyText(GetSar()) << ", tx_seq = " << static_cast<uint64_t>(GetTxSeq()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit ExtendedInformationFrameView(StandardFrameView parent) : StandardFrameView(std::move(parent)) { was_validated_ = false; }};


class ExtendedInformationFrameWithFcsView : public StandardFrameWithFcsView { public:static ExtendedInformationFrameWithFcsView Create(StandardFrameWithFcsView parent){ return ExtendedInformationFrameWithFcsView(std::move(parent)); }static std::optional<ExtendedInformationFrameWithFcsView> CreateOptional(StandardFrameWithFcsView parent){ auto to_validate = ExtendedInformationFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}Final GetF() const {ASSERT(was_validated_);auto to_bound = begin();auto f_it = to_bound + (/* Bits: */ 33 + /* Dynamic: */ 0) / 8;Final f_value{};Final* f_ptr = &f_value;auto extracted_value = f_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*f_ptr = static_cast<Final>(extracted_value);return f_value;}
uint16_t GetReqSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto req_seq_it = to_bound + (/* Bits: */ 34 + /* Dynamic: */ 0) / 8;uint16_t req_seq_value{};uint16_t* req_seq_ptr = &req_seq_value;auto extracted_value = req_seq_it.extract<uint16_t>();extracted_value >>= 2;extracted_value &= 0x3fff;*req_seq_ptr = static_cast<uint16_t>(extracted_value);return req_seq_value;}
SegmentationAndReassembly GetSar() const {ASSERT(was_validated_);auto to_bound = begin();auto sar_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;SegmentationAndReassembly sar_value{};SegmentationAndReassembly* sar_ptr = &sar_value;auto extracted_value = sar_it.extract<uint8_t>();extracted_value &= 0x3;*sar_ptr = static_cast<SegmentationAndReassembly>(extracted_value);return sar_value;}
uint16_t GetTxSeq() const {ASSERT(was_validated_);auto to_bound = begin();auto tx_seq_it = to_bound + (/* Bits: */ 50 + /* Dynamic: */ 0) / 8;uint16_t tx_seq_value{};uint16_t* tx_seq_ptr = &tx_seq_value;auto extracted_value = tx_seq_it.extract<uint16_t>();extracted_value >>= 2;extracted_value &= 0x3fff;*tx_seq_ptr = static_cast<uint16_t>(extracted_value);return tx_seq_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!StandardFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 49 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetFrameType() != FrameType::I_FRAME) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ExtendedInformationFrameWithFcs { ";ss << ""  << "f = " << FinalText(GetF()) << ", req_seq = " << static_cast<uint64_t>(GetReqSeq()) << ", sar = " << SegmentationAndReassemblyText(GetSar()) << ", tx_seq = " << static_cast<uint64_t>(GetTxSeq()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit ExtendedInformationFrameWithFcsView(StandardFrameWithFcsView parent) : StandardFrameWithFcsView(std::move(parent)) { was_validated_ = false; }};


class ExtendedInformationStartFrameView : public ExtendedInformationFrameView { public:static ExtendedInformationStartFrameView Create(ExtendedInformationFrameView parent){ return ExtendedInformationStartFrameView(std::move(parent)); }static std::optional<ExtendedInformationStartFrameView> CreateOptional(ExtendedInformationFrameView parent){ auto to_validate = ExtendedInformationStartFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetL2capSduLength() const {ASSERT(was_validated_);auto to_bound = begin();auto l2cap_sdu_length_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t l2cap_sdu_length_value{};uint16_t* l2cap_sdu_length_ptr = &l2cap_sdu_length_value;auto extracted_value = l2cap_sdu_length_it.extract<uint16_t>();*l2cap_sdu_length_ptr = static_cast<uint16_t>(extracted_value);return l2cap_sdu_length_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!ExtendedInformationFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetSar() != SegmentationAndReassembly::START) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ExtendedInformationStartFrame { ";ss << ""  << "l2cap_sdu_length = " << static_cast<uint64_t>(GetL2capSduLength()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit ExtendedInformationStartFrameView(ExtendedInformationFrameView parent) : ExtendedInformationFrameView(std::move(parent)) { was_validated_ = false; }};


class ExtendedInformationStartFrameWithFcsView : public ExtendedInformationFrameWithFcsView { public:static ExtendedInformationStartFrameWithFcsView Create(ExtendedInformationFrameWithFcsView parent){ return ExtendedInformationStartFrameWithFcsView(std::move(parent)); }static std::optional<ExtendedInformationStartFrameWithFcsView> CreateOptional(ExtendedInformationFrameWithFcsView parent){ auto to_validate = ExtendedInformationStartFrameWithFcsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetL2capSduLength() const {ASSERT(was_validated_);auto to_bound = begin();auto l2cap_sdu_length_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t l2cap_sdu_length_value{};uint16_t* l2cap_sdu_length_ptr = &l2cap_sdu_length_value;auto extracted_value = l2cap_sdu_length_it.extract<uint16_t>();*l2cap_sdu_length_ptr = static_cast<uint16_t>(extracted_value);return l2cap_sdu_length_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!ExtendedInformationFrameWithFcsView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetSar() != SegmentationAndReassembly::START) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ExtendedInformationStartFrameWithFcs { ";ss << ""  << "l2cap_sdu_length = " << static_cast<uint64_t>(GetL2capSduLength()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit ExtendedInformationStartFrameWithFcsView(ExtendedInformationFrameWithFcsView parent) : ExtendedInformationFrameWithFcsView(std::move(parent)) { was_validated_ = false; }};


class FirstLeInformationFrameView : public BasicFrameView { public:static FirstLeInformationFrameView Create(BasicFrameView parent){ return FirstLeInformationFrameView(std::move(parent)); }static std::optional<FirstLeInformationFrameView> CreateOptional(BasicFrameView parent){ auto to_validate = FirstLeInformationFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetL2capSduLength() const {ASSERT(was_validated_);auto to_bound = begin();auto l2cap_sdu_length_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t l2cap_sdu_length_value{};uint16_t* l2cap_sdu_length_ptr = &l2cap_sdu_length_value;auto extracted_value = l2cap_sdu_length_it.extract<uint16_t>();*l2cap_sdu_length_ptr = static_cast<uint16_t>(extracted_value);return l2cap_sdu_length_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!BasicFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "FirstLeInformationFrame { ";ss << ""  << "l2cap_sdu_length = " << static_cast<uint64_t>(GetL2capSduLength()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit FirstLeInformationFrameView(BasicFrameView parent) : BasicFrameView(std::move(parent)) { was_validated_ = false; }};


class ControlFrameView : public BasicFrameView { public:static ControlFrameView Create(BasicFrameView parent){ return ControlFrameView(std::move(parent)); }static std::optional<ControlFrameView> CreateOptional(BasicFrameView parent){ auto to_validate = ControlFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!BasicFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 0 /* Total size of the fixed fields */;if (it > end()) return false;if (GetChannelId() != 1) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ControlFrame { ";ss << ""  << "payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit ControlFrameView(BasicFrameView parent) : BasicFrameView(std::move(parent)) { was_validated_ = false; }};


class ControlView : public PacketView<kLittleEndian> { public:static ControlView Create(PacketView<kLittleEndian> packet){ return ControlView(std::move(packet)); }static std::optional<ControlView> CreateOptional(PacketView<kLittleEndian> packet){ auto to_validate = ControlView::Create(std::move(packet));if (to_validate.IsValid()) { return to_validate; }else {return {};}}CommandCode GetCode() const {ASSERT(was_validated_);auto to_bound = begin();auto code_it = to_bound + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;CommandCode code_value{};CommandCode* code_ptr = &code_value;auto extracted_value = code_it.extract<uint8_t>();*code_ptr = static_cast<CommandCode>(extracted_value);return code_value;}
uint8_t GetIdentifier() const {ASSERT(was_validated_);auto to_bound = begin();auto identifier_it = to_bound + (/* Bits: */ 8 + /* Dynamic: */ 0) / 8;uint8_t identifier_value{};uint8_t* identifier_ptr = &identifier_value;auto extracted_value = identifier_it.extract<uint8_t>();*identifier_ptr = static_cast<uint8_t>(extracted_value);return identifier_value;}
protected:uint16_t GetPayloadSize() const {ASSERT(was_validated_);auto to_bound = begin();auto payload_size_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;uint16_t payload_size_value{};uint16_t* payload_size_ptr = &payload_size_value;auto extracted_value = payload_size_it.extract<uint16_t>();*payload_size_ptr = static_cast<uint16_t>(extracted_value);return payload_size_value;}public:

PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;size_t field_sized_end = field_begin + (/* Bits: */ 0 + /* Dynamic: */ (GetPayloadSize() * 8)) / 8;if (field_sized_end < field_end) { field_end = field_sized_end; }auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


bool IsValid() {
  if (was_validated_) {
    return true;
  } else {
    was_validated_ = true;
    return (was_validated_ = Validate());
  }
}
protected:
virtual bool Validate() const {
auto it = begin() + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;it += ((GetPayloadSize() * 8)) / 8;if (it > end()) return false;



return true;}
bool was_validated_{false};

 public:virtual std::string ToString() const  {std::stringstream ss;ss << std::showbase << std::hex << "Control { ";ss << ""  << "code = " << CommandCodeText(GetCode()) << ", identifier = " << static_cast<uint64_t>(GetIdentifier()) << ", payload_size = " << GetPayloadSize() << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit ControlView(PacketView<kLittleEndian> packet)  : PacketView<kLittleEndian>(packet) { was_validated_ = false;}};


class CommandRejectView : public ControlView { public:static CommandRejectView Create(ControlView parent){ return CommandRejectView(std::move(parent)); }static std::optional<CommandRejectView> CreateOptional(ControlView parent){ auto to_validate = CommandRejectView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}CommandRejectReason GetReason() const {ASSERT(was_validated_);auto to_bound = begin();auto reason_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;CommandRejectReason reason_value{};CommandRejectReason* reason_ptr = &reason_value;auto extracted_value = reason_it.extract<uint16_t>();*reason_ptr = static_cast<CommandRejectReason>(extracted_value);return reason_value;}

protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::COMMAND_REJECT) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CommandReject { ";ss << ""  << "reason = " << CommandRejectReasonText(GetReason()) << ", body = " << "BODY REPRESENTATION_UNIMPLEMENTED () ";ss << " }";return ss.str();}

 protected:
explicit CommandRejectView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class CommandRejectNotUnderstoodView : public CommandRejectView { public:static CommandRejectNotUnderstoodView Create(CommandRejectView parent){ return CommandRejectNotUnderstoodView(std::move(parent)); }static std::optional<CommandRejectNotUnderstoodView> CreateOptional(CommandRejectView parent){ auto to_validate = CommandRejectNotUnderstoodView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}protected:
bool Validate() const override {
  if (!CommandRejectView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 0 /* Total size of the fixed fields */;if (it > end()) return false;if (GetReason() != CommandRejectReason::COMMAND_NOT_UNDERSTOOD) return false;return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CommandRejectNotUnderstood { ";ss << " }";return ss.str();}

 protected:
explicit CommandRejectNotUnderstoodView(CommandRejectView parent) : CommandRejectView(std::move(parent)) { was_validated_ = false; }};


class CommandRejectMtuExceededView : public CommandRejectView { public:static CommandRejectMtuExceededView Create(CommandRejectView parent){ return CommandRejectMtuExceededView(std::move(parent)); }static std::optional<CommandRejectMtuExceededView> CreateOptional(CommandRejectView parent){ auto to_validate = CommandRejectMtuExceededView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetActualMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto actual_mtu_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t actual_mtu_value{};uint16_t* actual_mtu_ptr = &actual_mtu_value;auto extracted_value = actual_mtu_it.extract<uint16_t>();*actual_mtu_ptr = static_cast<uint16_t>(extracted_value);return actual_mtu_value;}
protected:
bool Validate() const override {
  if (!CommandRejectView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetReason() != CommandRejectReason::SIGNALING_MTU_EXCEEDED) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CommandRejectMtuExceeded { ";ss << ""  << "actual_mtu = " << static_cast<uint64_t>(GetActualMtu());ss << " }";return ss.str();}

 protected:
explicit CommandRejectMtuExceededView(CommandRejectView parent) : CommandRejectView(std::move(parent)) { was_validated_ = false; }};


class CommandRejectInvalidCidView : public CommandRejectView { public:static CommandRejectInvalidCidView Create(CommandRejectView parent){ return CommandRejectInvalidCidView(std::move(parent)); }static std::optional<CommandRejectInvalidCidView> CreateOptional(CommandRejectView parent){ auto to_validate = CommandRejectInvalidCidView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetLocalChannel() const {ASSERT(was_validated_);auto to_bound = begin();auto local_channel_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t local_channel_value{};uint16_t* local_channel_ptr = &local_channel_value;auto extracted_value = local_channel_it.extract<uint16_t>();*local_channel_ptr = static_cast<uint16_t>(extracted_value);return local_channel_value;}
uint16_t GetRemoteChannel() const {ASSERT(was_validated_);auto to_bound = begin();auto remote_channel_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t remote_channel_value{};uint16_t* remote_channel_ptr = &remote_channel_value;auto extracted_value = remote_channel_it.extract<uint16_t>();*remote_channel_ptr = static_cast<uint16_t>(extracted_value);return remote_channel_value;}
protected:
bool Validate() const override {
  if (!CommandRejectView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetReason() != CommandRejectReason::INVALID_CID_IN_REQUEST) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CommandRejectInvalidCid { ";ss << ""  << "local_channel = " << static_cast<uint64_t>(GetLocalChannel()) << ", remote_channel = " << static_cast<uint64_t>(GetRemoteChannel());ss << " }";return ss.str();}

 protected:
explicit CommandRejectInvalidCidView(CommandRejectView parent) : CommandRejectView(std::move(parent)) { was_validated_ = false; }};


class ConnectionRequestView : public ControlView { public:static ConnectionRequestView Create(ControlView parent){ return ConnectionRequestView(std::move(parent)); }static std::optional<ConnectionRequestView> CreateOptional(ControlView parent){ auto to_validate = ConnectionRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetPsm() const {ASSERT(was_validated_);auto to_bound = begin();auto psm_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t psm_value{};uint16_t* psm_ptr = &psm_value;auto extracted_value = psm_it.extract<uint16_t>();*psm_ptr = static_cast<uint16_t>(extracted_value);return psm_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CONNECTION_REQUEST) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ConnectionRequest { ";ss << ""  << "psm = " << static_cast<uint64_t>(GetPsm()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid());ss << " }";return ss.str();}

 protected:
explicit ConnectionRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class ConnectionResponseView : public ControlView { public:static ConnectionResponseView Create(ControlView parent){ return ConnectionResponseView(std::move(parent)); }static std::optional<ConnectionResponseView> CreateOptional(ControlView parent){ auto to_validate = ConnectionResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetDestinationCid() const {ASSERT(was_validated_);auto to_bound = begin();auto destination_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t destination_cid_value{};uint16_t* destination_cid_ptr = &destination_cid_value;auto extracted_value = destination_cid_it.extract<uint16_t>();*destination_cid_ptr = static_cast<uint16_t>(extracted_value);return destination_cid_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
ConnectionResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;ConnectionResponseResult result_value{};ConnectionResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<ConnectionResponseResult>(extracted_value);return result_value;}
ConnectionResponseStatus GetStatus() const {ASSERT(was_validated_);auto to_bound = begin();auto status_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;ConnectionResponseStatus status_value{};ConnectionResponseStatus* status_ptr = &status_value;auto extracted_value = status_it.extract<uint16_t>();*status_ptr = static_cast<ConnectionResponseStatus>(extracted_value);return status_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 8 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CONNECTION_RESPONSE) return false;



return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ConnectionResponse { ";ss << ""  << "destination_cid = " << static_cast<uint64_t>(GetDestinationCid()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid()) << ", result = " << ConnectionResponseResultText(GetResult()) << ", status = " << ConnectionResponseStatusText(GetStatus());ss << " }";return ss.str();}

 protected:
explicit ConnectionResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class ConfigurationRequestView : public ControlView { public:static ConfigurationRequestView Create(ControlView parent){ return ConfigurationRequestView(std::move(parent)); }static std::optional<ConfigurationRequestView> CreateOptional(ControlView parent){ auto to_validate = ConfigurationRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetDestinationCid() const {ASSERT(was_validated_);auto to_bound = begin();auto destination_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t destination_cid_value{};uint16_t* destination_cid_ptr = &destination_cid_value;auto extracted_value = destination_cid_it.extract<uint16_t>();*destination_cid_ptr = static_cast<uint16_t>(extracted_value);return destination_cid_value;}
Continuation GetContinuation() const {ASSERT(was_validated_);auto to_bound = begin();auto continuation_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;Continuation continuation_value{};Continuation* continuation_ptr = &continuation_value;auto extracted_value = continuation_it.extract<uint8_t>();extracted_value &= 0x1;*continuation_ptr = static_cast<Continuation>(extracted_value);return continuation_value;}

std::vector<std::unique_ptr<ConfigurationOption>> GetConfig() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto config_it = to_bound.Subrange(field_begin, field_end - field_begin); std::vector<std::unique_ptr<ConfigurationOption>> config_value{};std::vector<std::unique_ptr<ConfigurationOption>>* config_ptr = &config_value;auto val_it = config_it;while (val_it.NumBytesRemaining() > 0) {std::unique_ptr<ConfigurationOption> val_ptr;val_ptr = ParseConfigurationOption(val_it);if (val_ptr != nullptr) {val_it = val_it + val_ptr->size();} else {val_it = val_it + val_it.NumBytesRemaining();}if (val_ptr != nullptr) { config_ptr->push_back(std::move(val_ptr));}}return config_value;}

protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CONFIGURATION_REQUEST) return false;



return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ConfigurationRequest { ";ss << ""  << "destination_cid = " << static_cast<uint64_t>(GetDestinationCid()) << ", continuation = " << ContinuationText(GetContinuation()) << ", config = " << "VECTOR[";for (size_t index = 0; index < GetConfig().size(); index++) {ss << ((index == 0) ? "" : ", ") << "REPRESENTATION_UNIMPLEMENTED VariableLengthStructField (GetConfig()[index])";}ss << "]";ss << " }";return ss.str();}

 protected:
explicit ConfigurationRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class ConfigurationResponseView : public ControlView { public:static ConfigurationResponseView Create(ControlView parent){ return ConfigurationResponseView(std::move(parent)); }static std::optional<ConfigurationResponseView> CreateOptional(ControlView parent){ auto to_validate = ConfigurationResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
Continuation GetContinuation() const {ASSERT(was_validated_);auto to_bound = begin();auto continuation_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;Continuation continuation_value{};Continuation* continuation_ptr = &continuation_value;auto extracted_value = continuation_it.extract<uint8_t>();extracted_value &= 0x1;*continuation_ptr = static_cast<Continuation>(extracted_value);return continuation_value;}

ConfigurationResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;ConfigurationResponseResult result_value{};ConfigurationResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<ConfigurationResponseResult>(extracted_value);return result_value;}
std::vector<std::unique_ptr<ConfigurationOption>> GetConfig() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto config_it = to_bound.Subrange(field_begin, field_end - field_begin); std::vector<std::unique_ptr<ConfigurationOption>> config_value{};std::vector<std::unique_ptr<ConfigurationOption>>* config_ptr = &config_value;auto val_it = config_it;while (val_it.NumBytesRemaining() > 0) {std::unique_ptr<ConfigurationOption> val_ptr;val_ptr = ParseConfigurationOption(val_it);if (val_ptr != nullptr) {val_it = val_it + val_ptr->size();} else {val_it = val_it + val_it.NumBytesRemaining();}if (val_ptr != nullptr) { config_ptr->push_back(std::move(val_ptr));}}return config_value;}

protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 6 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CONFIGURATION_RESPONSE) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ConfigurationResponse { ";ss << ""  << "source_cid = " << static_cast<uint64_t>(GetSourceCid()) << ", continuation = " << ContinuationText(GetContinuation()) << ", result = " << ConfigurationResponseResultText(GetResult()) << ", config = " << "VECTOR[";for (size_t index = 0; index < GetConfig().size(); index++) {ss << ((index == 0) ? "" : ", ") << "REPRESENTATION_UNIMPLEMENTED VariableLengthStructField (GetConfig()[index])";}ss << "]";ss << " }";return ss.str();}

 protected:
explicit ConfigurationResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class DisconnectionRequestView : public ControlView { public:static DisconnectionRequestView Create(ControlView parent){ return DisconnectionRequestView(std::move(parent)); }static std::optional<DisconnectionRequestView> CreateOptional(ControlView parent){ auto to_validate = DisconnectionRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetDestinationCid() const {ASSERT(was_validated_);auto to_bound = begin();auto destination_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t destination_cid_value{};uint16_t* destination_cid_ptr = &destination_cid_value;auto extracted_value = destination_cid_it.extract<uint16_t>();*destination_cid_ptr = static_cast<uint16_t>(extracted_value);return destination_cid_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::DISCONNECTION_REQUEST) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "DisconnectionRequest { ";ss << ""  << "destination_cid = " << static_cast<uint64_t>(GetDestinationCid()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid());ss << " }";return ss.str();}

 protected:
explicit DisconnectionRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class DisconnectionResponseView : public ControlView { public:static DisconnectionResponseView Create(ControlView parent){ return DisconnectionResponseView(std::move(parent)); }static std::optional<DisconnectionResponseView> CreateOptional(ControlView parent){ auto to_validate = DisconnectionResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetDestinationCid() const {ASSERT(was_validated_);auto to_bound = begin();auto destination_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t destination_cid_value{};uint16_t* destination_cid_ptr = &destination_cid_value;auto extracted_value = destination_cid_it.extract<uint16_t>();*destination_cid_ptr = static_cast<uint16_t>(extracted_value);return destination_cid_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::DISCONNECTION_RESPONSE) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "DisconnectionResponse { ";ss << ""  << "destination_cid = " << static_cast<uint64_t>(GetDestinationCid()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid());ss << " }";return ss.str();}

 protected:
explicit DisconnectionResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class EchoRequestView : public ControlView { public:static EchoRequestView Create(ControlView parent){ return EchoRequestView(std::move(parent)); }static std::optional<EchoRequestView> CreateOptional(ControlView parent){ auto to_validate = EchoRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 0 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::ECHO_REQUEST) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "EchoRequest { ";ss << ""  << "payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit EchoRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class EchoResponseView : public ControlView { public:static EchoResponseView Create(ControlView parent){ return EchoResponseView(std::move(parent)); }static std::optional<EchoResponseView> CreateOptional(ControlView parent){ auto to_validate = EchoResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 0 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::ECHO_RESPONSE) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "EchoResponse { ";ss << ""  << "payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit EchoResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class InformationRequestView : public ControlView { public:static InformationRequestView Create(ControlView parent){ return InformationRequestView(std::move(parent)); }static std::optional<InformationRequestView> CreateOptional(ControlView parent){ auto to_validate = InformationRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}InformationRequestInfoType GetInfoType() const {ASSERT(was_validated_);auto to_bound = begin();auto info_type_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;InformationRequestInfoType info_type_value{};InformationRequestInfoType* info_type_ptr = &info_type_value;auto extracted_value = info_type_it.extract<uint16_t>();*info_type_ptr = static_cast<InformationRequestInfoType>(extracted_value);return info_type_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::INFORMATION_REQUEST) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "InformationRequest { ";ss << ""  << "info_type = " << InformationRequestInfoTypeText(GetInfoType());ss << " }";return ss.str();}

 protected:
explicit InformationRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class InformationResponseView : public ControlView { public:static InformationResponseView Create(ControlView parent){ return InformationResponseView(std::move(parent)); }static std::optional<InformationResponseView> CreateOptional(ControlView parent){ auto to_validate = InformationResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}InformationRequestInfoType GetInfoType() const {ASSERT(was_validated_);auto to_bound = begin();auto info_type_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;InformationRequestInfoType info_type_value{};InformationRequestInfoType* info_type_ptr = &info_type_value;auto extracted_value = info_type_it.extract<uint16_t>();*info_type_ptr = static_cast<InformationRequestInfoType>(extracted_value);return info_type_value;}
InformationRequestResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;InformationRequestResult result_value{};InformationRequestResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<InformationRequestResult>(extracted_value);return result_value;}

protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::INFORMATION_RESPONSE) return false;


return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "InformationResponse { ";ss << ""  << "info_type = " << InformationRequestInfoTypeText(GetInfoType()) << ", result = " << InformationRequestResultText(GetResult()) << ", body = " << "BODY REPRESENTATION_UNIMPLEMENTED () ";ss << " }";return ss.str();}

 protected:
explicit InformationResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class InformationResponseConnectionlessMtuView : public InformationResponseView { public:static InformationResponseConnectionlessMtuView Create(InformationResponseView parent){ return InformationResponseConnectionlessMtuView(std::move(parent)); }static std::optional<InformationResponseConnectionlessMtuView> CreateOptional(InformationResponseView parent){ auto to_validate = InformationResponseConnectionlessMtuView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetConnectionlessMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto connectionless_mtu_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t connectionless_mtu_value{};uint16_t* connectionless_mtu_ptr = &connectionless_mtu_value;auto extracted_value = connectionless_mtu_it.extract<uint16_t>();*connectionless_mtu_ptr = static_cast<uint16_t>(extracted_value);return connectionless_mtu_value;}
protected:
bool Validate() const override {
  if (!InformationResponseView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetInfoType() != InformationRequestInfoType::CONNECTIONLESS_MTU) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "InformationResponseConnectionlessMtu { ";ss << ""  << "connectionless_mtu = " << static_cast<uint64_t>(GetConnectionlessMtu());ss << " }";return ss.str();}

 protected:
explicit InformationResponseConnectionlessMtuView(InformationResponseView parent) : InformationResponseView(std::move(parent)) { was_validated_ = false; }};


class InformationResponseExtendedFeaturesView : public InformationResponseView { public:static InformationResponseExtendedFeaturesView Create(InformationResponseView parent){ return InformationResponseExtendedFeaturesView(std::move(parent)); }static std::optional<InformationResponseExtendedFeaturesView> CreateOptional(InformationResponseView parent){ auto to_validate = InformationResponseExtendedFeaturesView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint8_t GetFlowControlMode() const {ASSERT(was_validated_);auto to_bound = begin();auto flow_control_mode_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint8_t flow_control_mode_value{};uint8_t* flow_control_mode_ptr = &flow_control_mode_value;auto extracted_value = flow_control_mode_it.extract<uint8_t>();extracted_value &= 0x1;*flow_control_mode_ptr = static_cast<uint8_t>(extracted_value);return flow_control_mode_value;}
uint8_t GetRetransmissionMode() const {ASSERT(was_validated_);auto to_bound = begin();auto retransmission_mode_it = to_bound + (/* Bits: */ 65 + /* Dynamic: */ 0) / 8;uint8_t retransmission_mode_value{};uint8_t* retransmission_mode_ptr = &retransmission_mode_value;auto extracted_value = retransmission_mode_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*retransmission_mode_ptr = static_cast<uint8_t>(extracted_value);return retransmission_mode_value;}
uint8_t GetBiDirectionalQoS() const {ASSERT(was_validated_);auto to_bound = begin();auto bi_directional_qoS_it = to_bound + (/* Bits: */ 66 + /* Dynamic: */ 0) / 8;uint8_t bi_directional_qoS_value{};uint8_t* bi_directional_qoS_ptr = &bi_directional_qoS_value;auto extracted_value = bi_directional_qoS_it.extract<uint8_t>();extracted_value >>= 2;extracted_value &= 0x1;*bi_directional_qoS_ptr = static_cast<uint8_t>(extracted_value);return bi_directional_qoS_value;}
uint8_t GetEnhancedRetransmissionMode() const {ASSERT(was_validated_);auto to_bound = begin();auto enhanced_retransmission_mode_it = to_bound + (/* Bits: */ 67 + /* Dynamic: */ 0) / 8;uint8_t enhanced_retransmission_mode_value{};uint8_t* enhanced_retransmission_mode_ptr = &enhanced_retransmission_mode_value;auto extracted_value = enhanced_retransmission_mode_it.extract<uint8_t>();extracted_value >>= 3;extracted_value &= 0x1;*enhanced_retransmission_mode_ptr = static_cast<uint8_t>(extracted_value);return enhanced_retransmission_mode_value;}
uint8_t GetStreamingMode() const {ASSERT(was_validated_);auto to_bound = begin();auto streaming_mode_it = to_bound + (/* Bits: */ 68 + /* Dynamic: */ 0) / 8;uint8_t streaming_mode_value{};uint8_t* streaming_mode_ptr = &streaming_mode_value;auto extracted_value = streaming_mode_it.extract<uint8_t>();extracted_value >>= 4;extracted_value &= 0x1;*streaming_mode_ptr = static_cast<uint8_t>(extracted_value);return streaming_mode_value;}
uint8_t GetFcsOption() const {ASSERT(was_validated_);auto to_bound = begin();auto fcs_option_it = to_bound + (/* Bits: */ 69 + /* Dynamic: */ 0) / 8;uint8_t fcs_option_value{};uint8_t* fcs_option_ptr = &fcs_option_value;auto extracted_value = fcs_option_it.extract<uint8_t>();extracted_value >>= 5;extracted_value &= 0x1;*fcs_option_ptr = static_cast<uint8_t>(extracted_value);return fcs_option_value;}
uint8_t GetExtendedFlowSpecificationForBrEdr() const {ASSERT(was_validated_);auto to_bound = begin();auto extended_flow_specification_for_br_edr_it = to_bound + (/* Bits: */ 70 + /* Dynamic: */ 0) / 8;uint8_t extended_flow_specification_for_br_edr_value{};uint8_t* extended_flow_specification_for_br_edr_ptr = &extended_flow_specification_for_br_edr_value;auto extracted_value = extended_flow_specification_for_br_edr_it.extract<uint8_t>();extracted_value >>= 6;extracted_value &= 0x1;*extended_flow_specification_for_br_edr_ptr = static_cast<uint8_t>(extracted_value);return extended_flow_specification_for_br_edr_value;}
uint8_t GetFixedChannels() const {ASSERT(was_validated_);auto to_bound = begin();auto fixed_channels_it = to_bound + (/* Bits: */ 71 + /* Dynamic: */ 0) / 8;uint8_t fixed_channels_value{};uint8_t* fixed_channels_ptr = &fixed_channels_value;auto extracted_value = fixed_channels_it.extract<uint8_t>();extracted_value >>= 7;extracted_value &= 0x1;*fixed_channels_ptr = static_cast<uint8_t>(extracted_value);return fixed_channels_value;}
uint8_t GetExtendedWindowSize() const {ASSERT(was_validated_);auto to_bound = begin();auto extended_window_size_it = to_bound + (/* Bits: */ 72 + /* Dynamic: */ 0) / 8;uint8_t extended_window_size_value{};uint8_t* extended_window_size_ptr = &extended_window_size_value;auto extracted_value = extended_window_size_it.extract<uint8_t>();extracted_value &= 0x1;*extended_window_size_ptr = static_cast<uint8_t>(extracted_value);return extended_window_size_value;}
uint8_t GetUnicastConnectionlessDataReception() const {ASSERT(was_validated_);auto to_bound = begin();auto unicast_connectionless_data_reception_it = to_bound + (/* Bits: */ 73 + /* Dynamic: */ 0) / 8;uint8_t unicast_connectionless_data_reception_value{};uint8_t* unicast_connectionless_data_reception_ptr = &unicast_connectionless_data_reception_value;auto extracted_value = unicast_connectionless_data_reception_it.extract<uint8_t>();extracted_value >>= 1;extracted_value &= 0x1;*unicast_connectionless_data_reception_ptr = static_cast<uint8_t>(extracted_value);return unicast_connectionless_data_reception_value;}
uint8_t GetEnhancedCreditBasedFlowControlMode() const {ASSERT(was_validated_);auto to_bound = begin();auto enhanced_credit_based_flow_control_mode_it = to_bound + (/* Bits: */ 74 + /* Dynamic: */ 0) / 8;uint8_t enhanced_credit_based_flow_control_mode_value{};uint8_t* enhanced_credit_based_flow_control_mode_ptr = &enhanced_credit_based_flow_control_mode_value;auto extracted_value = enhanced_credit_based_flow_control_mode_it.extract<uint8_t>();extracted_value >>= 2;extracted_value &= 0x1;*enhanced_credit_based_flow_control_mode_ptr = static_cast<uint8_t>(extracted_value);return enhanced_credit_based_flow_control_mode_value;}

protected:
bool Validate() const override {
  if (!InformationResponseView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetInfoType() != InformationRequestInfoType::EXTENDED_FEATURES_SUPPORTED) return false;











return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "InformationResponseExtendedFeatures { ";ss << ""  << "flow_control_mode = " << static_cast<uint64_t>(GetFlowControlMode()) << ", retransmission_mode = " << static_cast<uint64_t>(GetRetransmissionMode()) << ", bi_directional_qoS = " << static_cast<uint64_t>(GetBiDirectionalQoS()) << ", enhanced_retransmission_mode = " << static_cast<uint64_t>(GetEnhancedRetransmissionMode()) << ", streaming_mode = " << static_cast<uint64_t>(GetStreamingMode()) << ", fcs_option = " << static_cast<uint64_t>(GetFcsOption()) << ", extended_flow_specification_for_br_edr = " << static_cast<uint64_t>(GetExtendedFlowSpecificationForBrEdr()) << ", fixed_channels = " << static_cast<uint64_t>(GetFixedChannels()) << ", extended_window_size = " << static_cast<uint64_t>(GetExtendedWindowSize()) << ", unicast_connectionless_data_reception = " << static_cast<uint64_t>(GetUnicastConnectionlessDataReception()) << ", enhanced_credit_based_flow_control_mode = " << static_cast<uint64_t>(GetEnhancedCreditBasedFlowControlMode());ss << " }";return ss.str();}

 protected:
explicit InformationResponseExtendedFeaturesView(InformationResponseView parent) : InformationResponseView(std::move(parent)) { was_validated_ = false; }};


class InformationResponseFixedChannelsView : public InformationResponseView { public:static InformationResponseFixedChannelsView Create(InformationResponseView parent){ return InformationResponseFixedChannelsView(std::move(parent)); }static std::optional<InformationResponseFixedChannelsView> CreateOptional(InformationResponseView parent){ auto to_validate = InformationResponseFixedChannelsView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint64_t GetFixedChannels() const {ASSERT(was_validated_);auto to_bound = begin();auto fixed_channels_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint64_t fixed_channels_value{};uint64_t* fixed_channels_ptr = &fixed_channels_value;auto extracted_value = fixed_channels_it.extract<uint64_t>();*fixed_channels_ptr = static_cast<uint64_t>(extracted_value);return fixed_channels_value;}
protected:
bool Validate() const override {
  if (!InformationResponseView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;it += 8 /* Total size of the fixed fields */;if (it > end()) return false;if (GetInfoType() != InformationRequestInfoType::FIXED_CHANNELS_SUPPORTED) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "InformationResponseFixedChannels { ";ss << ""  << "fixed_channels = " << static_cast<uint64_t>(GetFixedChannels());ss << " }";return ss.str();}

 protected:
explicit InformationResponseFixedChannelsView(InformationResponseView parent) : InformationResponseView(std::move(parent)) { was_validated_ = false; }};


class CreateChannelRequestView : public ControlView { public:static CreateChannelRequestView Create(ControlView parent){ return CreateChannelRequestView(std::move(parent)); }static std::optional<CreateChannelRequestView> CreateOptional(ControlView parent){ auto to_validate = CreateChannelRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetPsm() const {ASSERT(was_validated_);auto to_bound = begin();auto psm_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t psm_value{};uint16_t* psm_ptr = &psm_value;auto extracted_value = psm_it.extract<uint16_t>();*psm_ptr = static_cast<uint16_t>(extracted_value);return psm_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
uint8_t GetControllerId() const {ASSERT(was_validated_);auto to_bound = begin();auto controller_id_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint8_t controller_id_value{};uint8_t* controller_id_ptr = &controller_id_value;auto extracted_value = controller_id_it.extract<uint8_t>();*controller_id_ptr = static_cast<uint8_t>(extracted_value);return controller_id_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 5 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CREATE_CHANNEL_REQUEST) return false;


return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CreateChannelRequest { ";ss << ""  << "psm = " << static_cast<uint64_t>(GetPsm()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid()) << ", controller_id = " << static_cast<uint64_t>(GetControllerId());ss << " }";return ss.str();}

 protected:
explicit CreateChannelRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class CreateChannelResponseView : public ControlView { public:static CreateChannelResponseView Create(ControlView parent){ return CreateChannelResponseView(std::move(parent)); }static std::optional<CreateChannelResponseView> CreateOptional(ControlView parent){ auto to_validate = CreateChannelResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetDestinationCid() const {ASSERT(was_validated_);auto to_bound = begin();auto destination_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t destination_cid_value{};uint16_t* destination_cid_ptr = &destination_cid_value;auto extracted_value = destination_cid_it.extract<uint16_t>();*destination_cid_ptr = static_cast<uint16_t>(extracted_value);return destination_cid_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
CreateChannelResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;CreateChannelResponseResult result_value{};CreateChannelResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<CreateChannelResponseResult>(extracted_value);return result_value;}
CreateChannelResponseStatus GetStatus() const {ASSERT(was_validated_);auto to_bound = begin();auto status_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;CreateChannelResponseStatus status_value{};CreateChannelResponseStatus* status_ptr = &status_value;auto extracted_value = status_it.extract<uint16_t>();*status_ptr = static_cast<CreateChannelResponseStatus>(extracted_value);return status_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 8 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CREATE_CHANNEL_RESPONSE) return false;



return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CreateChannelResponse { ";ss << ""  << "destination_cid = " << static_cast<uint64_t>(GetDestinationCid()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid()) << ", result = " << CreateChannelResponseResultText(GetResult()) << ", status = " << CreateChannelResponseStatusText(GetStatus());ss << " }";return ss.str();}

 protected:
explicit CreateChannelResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class MoveChannelRequestView : public ControlView { public:static MoveChannelRequestView Create(ControlView parent){ return MoveChannelRequestView(std::move(parent)); }static std::optional<MoveChannelRequestView> CreateOptional(ControlView parent){ auto to_validate = MoveChannelRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetInitiatorCid() const {ASSERT(was_validated_);auto to_bound = begin();auto initiator_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t initiator_cid_value{};uint16_t* initiator_cid_ptr = &initiator_cid_value;auto extracted_value = initiator_cid_it.extract<uint16_t>();*initiator_cid_ptr = static_cast<uint16_t>(extracted_value);return initiator_cid_value;}
uint8_t GetDestControllerId() const {ASSERT(was_validated_);auto to_bound = begin();auto dest_controller_id_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint8_t dest_controller_id_value{};uint8_t* dest_controller_id_ptr = &dest_controller_id_value;auto extracted_value = dest_controller_id_it.extract<uint8_t>();*dest_controller_id_ptr = static_cast<uint8_t>(extracted_value);return dest_controller_id_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 3 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::MOVE_CHANNEL_REQUEST) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "MoveChannelRequest { ";ss << ""  << "initiator_cid = " << static_cast<uint64_t>(GetInitiatorCid()) << ", dest_controller_id = " << static_cast<uint64_t>(GetDestControllerId());ss << " }";return ss.str();}

 protected:
explicit MoveChannelRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class MoveChannelResponseView : public ControlView { public:static MoveChannelResponseView Create(ControlView parent){ return MoveChannelResponseView(std::move(parent)); }static std::optional<MoveChannelResponseView> CreateOptional(ControlView parent){ auto to_validate = MoveChannelResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetInitiatorCid() const {ASSERT(was_validated_);auto to_bound = begin();auto initiator_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t initiator_cid_value{};uint16_t* initiator_cid_ptr = &initiator_cid_value;auto extracted_value = initiator_cid_it.extract<uint16_t>();*initiator_cid_ptr = static_cast<uint16_t>(extracted_value);return initiator_cid_value;}
MoveChannelResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;MoveChannelResponseResult result_value{};MoveChannelResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<MoveChannelResponseResult>(extracted_value);return result_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::MOVE_CHANNEL_RESPONSE) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "MoveChannelResponse { ";ss << ""  << "initiator_cid = " << static_cast<uint64_t>(GetInitiatorCid()) << ", result = " << MoveChannelResponseResultText(GetResult());ss << " }";return ss.str();}

 protected:
explicit MoveChannelResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class MoveChannelConfirmationRequestView : public ControlView { public:static MoveChannelConfirmationRequestView Create(ControlView parent){ return MoveChannelConfirmationRequestView(std::move(parent)); }static std::optional<MoveChannelConfirmationRequestView> CreateOptional(ControlView parent){ auto to_validate = MoveChannelConfirmationRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetInitiatorCid() const {ASSERT(was_validated_);auto to_bound = begin();auto initiator_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t initiator_cid_value{};uint16_t* initiator_cid_ptr = &initiator_cid_value;auto extracted_value = initiator_cid_it.extract<uint16_t>();*initiator_cid_ptr = static_cast<uint16_t>(extracted_value);return initiator_cid_value;}
MoveChannelConfirmationResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;MoveChannelConfirmationResult result_value{};MoveChannelConfirmationResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<MoveChannelConfirmationResult>(extracted_value);return result_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::MOVE_CHANNEL_CONFIRMATION_REQUEST) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "MoveChannelConfirmationRequest { ";ss << ""  << "initiator_cid = " << static_cast<uint64_t>(GetInitiatorCid()) << ", result = " << MoveChannelConfirmationResultText(GetResult());ss << " }";return ss.str();}

 protected:
explicit MoveChannelConfirmationRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class MoveChannelConfirmationResponseView : public ControlView { public:static MoveChannelConfirmationResponseView Create(ControlView parent){ return MoveChannelConfirmationResponseView(std::move(parent)); }static std::optional<MoveChannelConfirmationResponseView> CreateOptional(ControlView parent){ auto to_validate = MoveChannelConfirmationResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetInitiatorCid() const {ASSERT(was_validated_);auto to_bound = begin();auto initiator_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t initiator_cid_value{};uint16_t* initiator_cid_ptr = &initiator_cid_value;auto extracted_value = initiator_cid_it.extract<uint16_t>();*initiator_cid_ptr = static_cast<uint16_t>(extracted_value);return initiator_cid_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::MOVE_CHANNEL_CONFIRMATION_RESPONSE) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "MoveChannelConfirmationResponse { ";ss << ""  << "initiator_cid = " << static_cast<uint64_t>(GetInitiatorCid());ss << " }";return ss.str();}

 protected:
explicit MoveChannelConfirmationResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class FlowControlCreditView : public ControlView { public:static FlowControlCreditView Create(ControlView parent){ return FlowControlCreditView(std::move(parent)); }static std::optional<FlowControlCreditView> CreateOptional(ControlView parent){ auto to_validate = FlowControlCreditView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetCid() const {ASSERT(was_validated_);auto to_bound = begin();auto cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t cid_value{};uint16_t* cid_ptr = &cid_value;auto extracted_value = cid_it.extract<uint16_t>();*cid_ptr = static_cast<uint16_t>(extracted_value);return cid_value;}
uint16_t GetCredits() const {ASSERT(was_validated_);auto to_bound = begin();auto credits_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t credits_value{};uint16_t* credits_ptr = &credits_value;auto extracted_value = credits_it.extract<uint16_t>();*credits_ptr = static_cast<uint16_t>(extracted_value);return credits_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::FLOW_CONTROL_CREDIT) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "FlowControlCredit { ";ss << ""  << "cid = " << static_cast<uint64_t>(GetCid()) << ", credits = " << static_cast<uint64_t>(GetCredits());ss << " }";return ss.str();}

 protected:
explicit FlowControlCreditView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class CreditBasedConnectionRequestView : public ControlView { public:static CreditBasedConnectionRequestView Create(ControlView parent){ return CreditBasedConnectionRequestView(std::move(parent)); }static std::optional<CreditBasedConnectionRequestView> CreateOptional(ControlView parent){ auto to_validate = CreditBasedConnectionRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetSpsm() const {ASSERT(was_validated_);auto to_bound = begin();auto spsm_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t spsm_value{};uint16_t* spsm_ptr = &spsm_value;auto extracted_value = spsm_it.extract<uint16_t>();*spsm_ptr = static_cast<uint16_t>(extracted_value);return spsm_value;}
uint16_t GetMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto mtu_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t mtu_value{};uint16_t* mtu_ptr = &mtu_value;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);return mtu_value;}
uint16_t GetMps() const {ASSERT(was_validated_);auto to_bound = begin();auto mps_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t mps_value{};uint16_t* mps_ptr = &mps_value;auto extracted_value = mps_it.extract<uint16_t>();*mps_ptr = static_cast<uint16_t>(extracted_value);return mps_value;}
uint16_t GetInitialCredits() const {ASSERT(was_validated_);auto to_bound = begin();auto initial_credits_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;uint16_t initial_credits_value{};uint16_t* initial_credits_ptr = &initial_credits_value;auto extracted_value = initial_credits_it.extract<uint16_t>();*initial_credits_ptr = static_cast<uint16_t>(extracted_value);return initial_credits_value;}
std::vector<uint16_t> GetSourceCid() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 96 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto source_cid_it = to_bound.Subrange(field_begin, field_end - field_begin); std::vector<uint16_t> source_cid_value{};std::vector<uint16_t>* source_cid_ptr = &source_cid_value;auto val_it = source_cid_it;while (val_it.NumBytesRemaining() >= 2) {uint16_t val_value;uint16_t* val_ptr = &val_value;auto extracted_value = val_it.extract<uint16_t>();*val_ptr = static_cast<uint16_t>(extracted_value);if (val_ptr != nullptr) { source_cid_ptr->push_back(val_value);}}return source_cid_value;}

protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 8 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CREDIT_BASED_CONNECTION_REQUEST) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CreditBasedConnectionRequest { ";ss << ""  << "spsm = " << static_cast<uint64_t>(GetSpsm()) << ", mtu = " << static_cast<uint64_t>(GetMtu()) << ", mps = " << static_cast<uint64_t>(GetMps()) << ", initial_credits = " << static_cast<uint64_t>(GetInitialCredits()) << ", source_cid = " << "VECTOR[";for (size_t index = 0; index < GetSourceCid().size(); index++) {ss << ((index == 0) ? "" : ", ") << static_cast<uint64_t>((GetSourceCid()[index]));}ss << "]";ss << " }";return ss.str();}

 protected:
explicit CreditBasedConnectionRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class CreditBasedConnectionResponseView : public ControlView { public:static CreditBasedConnectionResponseView Create(ControlView parent){ return CreditBasedConnectionResponseView(std::move(parent)); }static std::optional<CreditBasedConnectionResponseView> CreateOptional(ControlView parent){ auto to_validate = CreditBasedConnectionResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto mtu_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t mtu_value{};uint16_t* mtu_ptr = &mtu_value;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);return mtu_value;}
uint16_t GetMps() const {ASSERT(was_validated_);auto to_bound = begin();auto mps_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t mps_value{};uint16_t* mps_ptr = &mps_value;auto extracted_value = mps_it.extract<uint16_t>();*mps_ptr = static_cast<uint16_t>(extracted_value);return mps_value;}
uint16_t GetInitialCredits() const {ASSERT(was_validated_);auto to_bound = begin();auto initial_credits_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t initial_credits_value{};uint16_t* initial_credits_ptr = &initial_credits_value;auto extracted_value = initial_credits_it.extract<uint16_t>();*initial_credits_ptr = static_cast<uint16_t>(extracted_value);return initial_credits_value;}
CreditBasedConnectionResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;CreditBasedConnectionResponseResult result_value{};CreditBasedConnectionResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<CreditBasedConnectionResponseResult>(extracted_value);return result_value;}
std::vector<uint16_t> GetDestinationCid() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 96 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto destination_cid_it = to_bound.Subrange(field_begin, field_end - field_begin); std::vector<uint16_t> destination_cid_value{};std::vector<uint16_t>* destination_cid_ptr = &destination_cid_value;auto val_it = destination_cid_it;while (val_it.NumBytesRemaining() >= 2) {uint16_t val_value;uint16_t* val_ptr = &val_value;auto extracted_value = val_it.extract<uint16_t>();*val_ptr = static_cast<uint16_t>(extracted_value);if (val_ptr != nullptr) { destination_cid_ptr->push_back(val_value);}}return destination_cid_value;}

protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 8 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CREDIT_BASED_CONNECTION_RESPONSE) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CreditBasedConnectionResponse { ";ss << ""  << "mtu = " << static_cast<uint64_t>(GetMtu()) << ", mps = " << static_cast<uint64_t>(GetMps()) << ", initial_credits = " << static_cast<uint64_t>(GetInitialCredits()) << ", result = " << CreditBasedConnectionResponseResultText(GetResult()) << ", destination_cid = " << "VECTOR[";for (size_t index = 0; index < GetDestinationCid().size(); index++) {ss << ((index == 0) ? "" : ", ") << static_cast<uint64_t>((GetDestinationCid()[index]));}ss << "]";ss << " }";return ss.str();}

 protected:
explicit CreditBasedConnectionResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class CreditBasedReconfigureRequestView : public ControlView { public:static CreditBasedReconfigureRequestView Create(ControlView parent){ return CreditBasedReconfigureRequestView(std::move(parent)); }static std::optional<CreditBasedReconfigureRequestView> CreateOptional(ControlView parent){ auto to_validate = CreditBasedReconfigureRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto mtu_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t mtu_value{};uint16_t* mtu_ptr = &mtu_value;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);return mtu_value;}
uint16_t GetMps() const {ASSERT(was_validated_);auto to_bound = begin();auto mps_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t mps_value{};uint16_t* mps_ptr = &mps_value;auto extracted_value = mps_it.extract<uint16_t>();*mps_ptr = static_cast<uint16_t>(extracted_value);return mps_value;}
std::vector<uint16_t> GetDestinationCid() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto destination_cid_it = to_bound.Subrange(field_begin, field_end - field_begin); std::vector<uint16_t> destination_cid_value{};std::vector<uint16_t>* destination_cid_ptr = &destination_cid_value;auto val_it = destination_cid_it;while (val_it.NumBytesRemaining() >= 2) {uint16_t val_value;uint16_t* val_ptr = &val_value;auto extracted_value = val_it.extract<uint16_t>();*val_ptr = static_cast<uint16_t>(extracted_value);if (val_ptr != nullptr) { destination_cid_ptr->push_back(val_value);}}return destination_cid_value;}

protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CREDIT_BASED_RECONFIGURE_REQUEST) return false;


return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CreditBasedReconfigureRequest { ";ss << ""  << "mtu = " << static_cast<uint64_t>(GetMtu()) << ", mps = " << static_cast<uint64_t>(GetMps()) << ", destination_cid = " << "VECTOR[";for (size_t index = 0; index < GetDestinationCid().size(); index++) {ss << ((index == 0) ? "" : ", ") << static_cast<uint64_t>((GetDestinationCid()[index]));}ss << "]";ss << " }";return ss.str();}

 protected:
explicit CreditBasedReconfigureRequestView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class CreditBasedReconfigureResponseView : public ControlView { public:static CreditBasedReconfigureResponseView Create(ControlView parent){ return CreditBasedReconfigureResponseView(std::move(parent)); }static std::optional<CreditBasedReconfigureResponseView> CreateOptional(ControlView parent){ auto to_validate = CreditBasedReconfigureResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}CreditBasedReconfigureResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;CreditBasedReconfigureResponseResult result_value{};CreditBasedReconfigureResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<CreditBasedReconfigureResponseResult>(extracted_value);return result_value;}
protected:
bool Validate() const override {
  if (!ControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != CommandCode::CREDIT_BASED_RECONFIGURE_RESPONSE) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "CreditBasedReconfigureResponse { ";ss << ""  << "result = " << CreditBasedReconfigureResponseResultText(GetResult());ss << " }";return ss.str();}

 protected:
explicit CreditBasedReconfigureResponseView(ControlView parent) : ControlView(std::move(parent)) { was_validated_ = false; }};


class LeControlFrameView : public BasicFrameView { public:static LeControlFrameView Create(BasicFrameView parent){ return LeControlFrameView(std::move(parent)); }static std::optional<LeControlFrameView> CreateOptional(BasicFrameView parent){ auto to_validate = LeControlFrameView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!BasicFrameView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 0 /* Total size of the fixed fields */;if (it > end()) return false;if (GetChannelId() != 5) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeControlFrame { ";ss << ""  << "payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit LeControlFrameView(BasicFrameView parent) : BasicFrameView(std::move(parent)) { was_validated_ = false; }};


class LeControlView : public PacketView<kLittleEndian> { public:static LeControlView Create(PacketView<kLittleEndian> packet){ return LeControlView(std::move(packet)); }static std::optional<LeControlView> CreateOptional(PacketView<kLittleEndian> packet){ auto to_validate = LeControlView::Create(std::move(packet));if (to_validate.IsValid()) { return to_validate; }else {return {};}}LeCommandCode GetCode() const {ASSERT(was_validated_);auto to_bound = begin();auto code_it = to_bound + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;LeCommandCode code_value{};LeCommandCode* code_ptr = &code_value;auto extracted_value = code_it.extract<uint8_t>();*code_ptr = static_cast<LeCommandCode>(extracted_value);return code_value;}
uint8_t GetIdentifier() const {ASSERT(was_validated_);auto to_bound = begin();auto identifier_it = to_bound + (/* Bits: */ 8 + /* Dynamic: */ 0) / 8;uint8_t identifier_value{};uint8_t* identifier_ptr = &identifier_value;auto extracted_value = identifier_it.extract<uint8_t>();*identifier_ptr = static_cast<uint8_t>(extracted_value);return identifier_value;}
protected:uint16_t GetPayloadSize() const {ASSERT(was_validated_);auto to_bound = begin();auto payload_size_it = to_bound + (/* Bits: */ 16 + /* Dynamic: */ 0) / 8;uint16_t payload_size_value{};uint16_t* payload_size_ptr = &payload_size_value;auto extracted_value = payload_size_it.extract<uint16_t>();*payload_size_ptr = static_cast<uint16_t>(extracted_value);return payload_size_value;}public:

PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;size_t field_sized_end = field_begin + (/* Bits: */ 0 + /* Dynamic: */ (GetPayloadSize() * 8)) / 8;if (field_sized_end < field_end) { field_end = field_sized_end; }auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


bool IsValid() {
  if (was_validated_) {
    return true;
  } else {
    was_validated_ = true;
    return (was_validated_ = Validate());
  }
}
protected:
virtual bool Validate() const {
auto it = begin() + (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;it += ((GetPayloadSize() * 8)) / 8;if (it > end()) return false;



return true;}
bool was_validated_{false};

 public:virtual std::string ToString() const  {std::stringstream ss;ss << std::showbase << std::hex << "LeControl { ";ss << ""  << "code = " << LeCommandCodeText(GetCode()) << ", identifier = " << static_cast<uint64_t>(GetIdentifier()) << ", payload_size = " << GetPayloadSize() << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit LeControlView(PacketView<kLittleEndian> packet)  : PacketView<kLittleEndian>(packet) { was_validated_ = false;}};


class LeCommandRejectView : public LeControlView { public:static LeCommandRejectView Create(LeControlView parent){ return LeCommandRejectView(std::move(parent)); }static std::optional<LeCommandRejectView> CreateOptional(LeControlView parent){ auto to_validate = LeCommandRejectView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}CommandRejectReason GetReason() const {ASSERT(was_validated_);auto to_bound = begin();auto reason_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;CommandRejectReason reason_value{};CommandRejectReason* reason_ptr = &reason_value;auto extracted_value = reason_it.extract<uint16_t>();*reason_ptr = static_cast<CommandRejectReason>(extracted_value);return reason_value;}
PacketView<kLittleEndian> GetPayload() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto payload_it = to_bound.Subrange(field_begin, field_end - field_begin); return GetLittleEndianSubview(field_begin, field_end);}


protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::COMMAND_REJECT) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeCommandReject { ";ss << ""  << "reason = " << CommandRejectReasonText(GetReason()) << ", payload = " << "PAYLOAD[]";ss << " }";return ss.str();}

 protected:
explicit LeCommandRejectView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeCommandRejectNotUnderstoodView : public LeCommandRejectView { public:static LeCommandRejectNotUnderstoodView Create(LeCommandRejectView parent){ return LeCommandRejectNotUnderstoodView(std::move(parent)); }static std::optional<LeCommandRejectNotUnderstoodView> CreateOptional(LeCommandRejectView parent){ auto to_validate = LeCommandRejectNotUnderstoodView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}protected:
bool Validate() const override {
  if (!LeCommandRejectView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 0 /* Total size of the fixed fields */;if (it > end()) return false;if (GetReason() != CommandRejectReason::COMMAND_NOT_UNDERSTOOD) return false;return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeCommandRejectNotUnderstood { ";ss << " }";return ss.str();}

 protected:
explicit LeCommandRejectNotUnderstoodView(LeCommandRejectView parent) : LeCommandRejectView(std::move(parent)) { was_validated_ = false; }};


class LeCommandRejectMtuExceededView : public LeCommandRejectView { public:static LeCommandRejectMtuExceededView Create(LeCommandRejectView parent){ return LeCommandRejectMtuExceededView(std::move(parent)); }static std::optional<LeCommandRejectMtuExceededView> CreateOptional(LeCommandRejectView parent){ auto to_validate = LeCommandRejectMtuExceededView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetActualMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto actual_mtu_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t actual_mtu_value{};uint16_t* actual_mtu_ptr = &actual_mtu_value;auto extracted_value = actual_mtu_it.extract<uint16_t>();*actual_mtu_ptr = static_cast<uint16_t>(extracted_value);return actual_mtu_value;}
protected:
bool Validate() const override {
  if (!LeCommandRejectView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetReason() != CommandRejectReason::SIGNALING_MTU_EXCEEDED) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeCommandRejectMtuExceeded { ";ss << ""  << "actual_mtu = " << static_cast<uint64_t>(GetActualMtu());ss << " }";return ss.str();}

 protected:
explicit LeCommandRejectMtuExceededView(LeCommandRejectView parent) : LeCommandRejectView(std::move(parent)) { was_validated_ = false; }};


class LeCommandRejectInvalidCidView : public LeCommandRejectView { public:static LeCommandRejectInvalidCidView Create(LeCommandRejectView parent){ return LeCommandRejectInvalidCidView(std::move(parent)); }static std::optional<LeCommandRejectInvalidCidView> CreateOptional(LeCommandRejectView parent){ auto to_validate = LeCommandRejectInvalidCidView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetLocalChannel() const {ASSERT(was_validated_);auto to_bound = begin();auto local_channel_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t local_channel_value{};uint16_t* local_channel_ptr = &local_channel_value;auto extracted_value = local_channel_it.extract<uint16_t>();*local_channel_ptr = static_cast<uint16_t>(extracted_value);return local_channel_value;}
uint16_t GetRemoteChannel() const {ASSERT(was_validated_);auto to_bound = begin();auto remote_channel_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t remote_channel_value{};uint16_t* remote_channel_ptr = &remote_channel_value;auto extracted_value = remote_channel_it.extract<uint16_t>();*remote_channel_ptr = static_cast<uint16_t>(extracted_value);return remote_channel_value;}
protected:
bool Validate() const override {
  if (!LeCommandRejectView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetReason() != CommandRejectReason::INVALID_CID_IN_REQUEST) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeCommandRejectInvalidCid { ";ss << ""  << "local_channel = " << static_cast<uint64_t>(GetLocalChannel()) << ", remote_channel = " << static_cast<uint64_t>(GetRemoteChannel());ss << " }";return ss.str();}

 protected:
explicit LeCommandRejectInvalidCidView(LeCommandRejectView parent) : LeCommandRejectView(std::move(parent)) { was_validated_ = false; }};


class LeDisconnectionRequestView : public LeControlView { public:static LeDisconnectionRequestView Create(LeControlView parent){ return LeDisconnectionRequestView(std::move(parent)); }static std::optional<LeDisconnectionRequestView> CreateOptional(LeControlView parent){ auto to_validate = LeDisconnectionRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetDestinationCid() const {ASSERT(was_validated_);auto to_bound = begin();auto destination_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t destination_cid_value{};uint16_t* destination_cid_ptr = &destination_cid_value;auto extracted_value = destination_cid_it.extract<uint16_t>();*destination_cid_ptr = static_cast<uint16_t>(extracted_value);return destination_cid_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::DISCONNECTION_REQUEST) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeDisconnectionRequest { ";ss << ""  << "destination_cid = " << static_cast<uint64_t>(GetDestinationCid()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid());ss << " }";return ss.str();}

 protected:
explicit LeDisconnectionRequestView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeDisconnectionResponseView : public LeControlView { public:static LeDisconnectionResponseView Create(LeControlView parent){ return LeDisconnectionResponseView(std::move(parent)); }static std::optional<LeDisconnectionResponseView> CreateOptional(LeControlView parent){ auto to_validate = LeDisconnectionResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetDestinationCid() const {ASSERT(was_validated_);auto to_bound = begin();auto destination_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t destination_cid_value{};uint16_t* destination_cid_ptr = &destination_cid_value;auto extracted_value = destination_cid_it.extract<uint16_t>();*destination_cid_ptr = static_cast<uint16_t>(extracted_value);return destination_cid_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::DISCONNECTION_RESPONSE) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeDisconnectionResponse { ";ss << ""  << "destination_cid = " << static_cast<uint64_t>(GetDestinationCid()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid());ss << " }";return ss.str();}

 protected:
explicit LeDisconnectionResponseView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class ConnectionParameterUpdateRequestView : public LeControlView { public:static ConnectionParameterUpdateRequestView Create(LeControlView parent){ return ConnectionParameterUpdateRequestView(std::move(parent)); }static std::optional<ConnectionParameterUpdateRequestView> CreateOptional(LeControlView parent){ auto to_validate = ConnectionParameterUpdateRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetIntervalMin() const {ASSERT(was_validated_);auto to_bound = begin();auto interval_min_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t interval_min_value{};uint16_t* interval_min_ptr = &interval_min_value;auto extracted_value = interval_min_it.extract<uint16_t>();*interval_min_ptr = static_cast<uint16_t>(extracted_value);return interval_min_value;}
uint16_t GetIntervalMax() const {ASSERT(was_validated_);auto to_bound = begin();auto interval_max_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t interval_max_value{};uint16_t* interval_max_ptr = &interval_max_value;auto extracted_value = interval_max_it.extract<uint16_t>();*interval_max_ptr = static_cast<uint16_t>(extracted_value);return interval_max_value;}
uint16_t GetPeripheralLatency() const {ASSERT(was_validated_);auto to_bound = begin();auto peripheral_latency_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t peripheral_latency_value{};uint16_t* peripheral_latency_ptr = &peripheral_latency_value;auto extracted_value = peripheral_latency_it.extract<uint16_t>();*peripheral_latency_ptr = static_cast<uint16_t>(extracted_value);return peripheral_latency_value;}
uint16_t GetTimeoutMultiplier() const {ASSERT(was_validated_);auto to_bound = begin();auto timeout_multiplier_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;uint16_t timeout_multiplier_value{};uint16_t* timeout_multiplier_ptr = &timeout_multiplier_value;auto extracted_value = timeout_multiplier_it.extract<uint16_t>();*timeout_multiplier_ptr = static_cast<uint16_t>(extracted_value);return timeout_multiplier_value;}
protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 8 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::CONNECTION_PARAMETER_UPDATE_REQUEST) return false;



return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ConnectionParameterUpdateRequest { ";ss << ""  << "interval_min = " << static_cast<uint64_t>(GetIntervalMin()) << ", interval_max = " << static_cast<uint64_t>(GetIntervalMax()) << ", peripheral_latency = " << static_cast<uint64_t>(GetPeripheralLatency()) << ", timeout_multiplier = " << static_cast<uint64_t>(GetTimeoutMultiplier());ss << " }";return ss.str();}

 protected:
explicit ConnectionParameterUpdateRequestView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class ConnectionParameterUpdateResponseView : public LeControlView { public:static ConnectionParameterUpdateResponseView Create(LeControlView parent){ return ConnectionParameterUpdateResponseView(std::move(parent)); }static std::optional<ConnectionParameterUpdateResponseView> CreateOptional(LeControlView parent){ auto to_validate = ConnectionParameterUpdateResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}ConnectionParameterUpdateResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;ConnectionParameterUpdateResponseResult result_value{};ConnectionParameterUpdateResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<ConnectionParameterUpdateResponseResult>(extracted_value);return result_value;}
protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::CONNECTION_PARAMETER_UPDATE_RESPONSE) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "ConnectionParameterUpdateResponse { ";ss << ""  << "result = " << ConnectionParameterUpdateResponseResultText(GetResult());ss << " }";return ss.str();}

 protected:
explicit ConnectionParameterUpdateResponseView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeCreditBasedConnectionRequestView : public LeControlView { public:static LeCreditBasedConnectionRequestView Create(LeControlView parent){ return LeCreditBasedConnectionRequestView(std::move(parent)); }static std::optional<LeCreditBasedConnectionRequestView> CreateOptional(LeControlView parent){ auto to_validate = LeCreditBasedConnectionRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetLePsm() const {ASSERT(was_validated_);auto to_bound = begin();auto le_psm_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t le_psm_value{};uint16_t* le_psm_ptr = &le_psm_value;auto extracted_value = le_psm_it.extract<uint16_t>();*le_psm_ptr = static_cast<uint16_t>(extracted_value);return le_psm_value;}
uint16_t GetSourceCid() const {ASSERT(was_validated_);auto to_bound = begin();auto source_cid_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t source_cid_value{};uint16_t* source_cid_ptr = &source_cid_value;auto extracted_value = source_cid_it.extract<uint16_t>();*source_cid_ptr = static_cast<uint16_t>(extracted_value);return source_cid_value;}
uint16_t GetMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto mtu_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t mtu_value{};uint16_t* mtu_ptr = &mtu_value;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);return mtu_value;}
uint16_t GetMps() const {ASSERT(was_validated_);auto to_bound = begin();auto mps_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;uint16_t mps_value{};uint16_t* mps_ptr = &mps_value;auto extracted_value = mps_it.extract<uint16_t>();*mps_ptr = static_cast<uint16_t>(extracted_value);return mps_value;}
uint16_t GetInitialCredits() const {ASSERT(was_validated_);auto to_bound = begin();auto initial_credits_it = to_bound + (/* Bits: */ 96 + /* Dynamic: */ 0) / 8;uint16_t initial_credits_value{};uint16_t* initial_credits_ptr = &initial_credits_value;auto extracted_value = initial_credits_it.extract<uint16_t>();*initial_credits_ptr = static_cast<uint16_t>(extracted_value);return initial_credits_value;}
protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 10 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::LE_CREDIT_BASED_CONNECTION_REQUEST) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeCreditBasedConnectionRequest { ";ss << ""  << "le_psm = " << static_cast<uint64_t>(GetLePsm()) << ", source_cid = " << static_cast<uint64_t>(GetSourceCid()) << ", mtu = " << static_cast<uint64_t>(GetMtu()) << ", mps = " << static_cast<uint64_t>(GetMps()) << ", initial_credits = " << static_cast<uint64_t>(GetInitialCredits());ss << " }";return ss.str();}

 protected:
explicit LeCreditBasedConnectionRequestView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeCreditBasedConnectionResponseView : public LeControlView { public:static LeCreditBasedConnectionResponseView Create(LeControlView parent){ return LeCreditBasedConnectionResponseView(std::move(parent)); }static std::optional<LeCreditBasedConnectionResponseView> CreateOptional(LeControlView parent){ auto to_validate = LeCreditBasedConnectionResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetDestinationCid() const {ASSERT(was_validated_);auto to_bound = begin();auto destination_cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t destination_cid_value{};uint16_t* destination_cid_ptr = &destination_cid_value;auto extracted_value = destination_cid_it.extract<uint16_t>();*destination_cid_ptr = static_cast<uint16_t>(extracted_value);return destination_cid_value;}
uint16_t GetMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto mtu_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t mtu_value{};uint16_t* mtu_ptr = &mtu_value;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);return mtu_value;}
uint16_t GetMps() const {ASSERT(was_validated_);auto to_bound = begin();auto mps_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t mps_value{};uint16_t* mps_ptr = &mps_value;auto extracted_value = mps_it.extract<uint16_t>();*mps_ptr = static_cast<uint16_t>(extracted_value);return mps_value;}
uint16_t GetInitialCredits() const {ASSERT(was_validated_);auto to_bound = begin();auto initial_credits_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;uint16_t initial_credits_value{};uint16_t* initial_credits_ptr = &initial_credits_value;auto extracted_value = initial_credits_it.extract<uint16_t>();*initial_credits_ptr = static_cast<uint16_t>(extracted_value);return initial_credits_value;}
LeCreditBasedConnectionResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 96 + /* Dynamic: */ 0) / 8;LeCreditBasedConnectionResponseResult result_value{};LeCreditBasedConnectionResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<LeCreditBasedConnectionResponseResult>(extracted_value);return result_value;}
protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 10 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::LE_CREDIT_BASED_CONNECTION_RESPONSE) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeCreditBasedConnectionResponse { ";ss << ""  << "destination_cid = " << static_cast<uint64_t>(GetDestinationCid()) << ", mtu = " << static_cast<uint64_t>(GetMtu()) << ", mps = " << static_cast<uint64_t>(GetMps()) << ", initial_credits = " << static_cast<uint64_t>(GetInitialCredits()) << ", result = " << LeCreditBasedConnectionResponseResultText(GetResult());ss << " }";return ss.str();}

 protected:
explicit LeCreditBasedConnectionResponseView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeFlowControlCreditView : public LeControlView { public:static LeFlowControlCreditView Create(LeControlView parent){ return LeFlowControlCreditView(std::move(parent)); }static std::optional<LeFlowControlCreditView> CreateOptional(LeControlView parent){ auto to_validate = LeFlowControlCreditView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetCid() const {ASSERT(was_validated_);auto to_bound = begin();auto cid_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t cid_value{};uint16_t* cid_ptr = &cid_value;auto extracted_value = cid_it.extract<uint16_t>();*cid_ptr = static_cast<uint16_t>(extracted_value);return cid_value;}
uint16_t GetCredits() const {ASSERT(was_validated_);auto to_bound = begin();auto credits_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t credits_value{};uint16_t* credits_ptr = &credits_value;auto extracted_value = credits_it.extract<uint16_t>();*credits_ptr = static_cast<uint16_t>(extracted_value);return credits_value;}
protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::LE_FLOW_CONTROL_CREDIT) return false;

return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeFlowControlCredit { ";ss << ""  << "cid = " << static_cast<uint64_t>(GetCid()) << ", credits = " << static_cast<uint64_t>(GetCredits());ss << " }";return ss.str();}

 protected:
explicit LeFlowControlCreditView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeEnhancedCreditBasedConnectionRequestView : public LeControlView { public:static LeEnhancedCreditBasedConnectionRequestView Create(LeControlView parent){ return LeEnhancedCreditBasedConnectionRequestView(std::move(parent)); }static std::optional<LeEnhancedCreditBasedConnectionRequestView> CreateOptional(LeControlView parent){ auto to_validate = LeEnhancedCreditBasedConnectionRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetSpsm() const {ASSERT(was_validated_);auto to_bound = begin();auto spsm_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t spsm_value{};uint16_t* spsm_ptr = &spsm_value;auto extracted_value = spsm_it.extract<uint16_t>();*spsm_ptr = static_cast<uint16_t>(extracted_value);return spsm_value;}
uint16_t GetMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto mtu_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t mtu_value{};uint16_t* mtu_ptr = &mtu_value;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);return mtu_value;}
uint16_t GetMps() const {ASSERT(was_validated_);auto to_bound = begin();auto mps_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t mps_value{};uint16_t* mps_ptr = &mps_value;auto extracted_value = mps_it.extract<uint16_t>();*mps_ptr = static_cast<uint16_t>(extracted_value);return mps_value;}
uint16_t GetInitialCredits() const {ASSERT(was_validated_);auto to_bound = begin();auto initial_credits_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;uint16_t initial_credits_value{};uint16_t* initial_credits_ptr = &initial_credits_value;auto extracted_value = initial_credits_it.extract<uint16_t>();*initial_credits_ptr = static_cast<uint16_t>(extracted_value);return initial_credits_value;}
std::vector<uint16_t> GetSourceCid() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 96 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto source_cid_it = to_bound.Subrange(field_begin, field_end - field_begin); std::vector<uint16_t> source_cid_value{};std::vector<uint16_t>* source_cid_ptr = &source_cid_value;auto val_it = source_cid_it;while (val_it.NumBytesRemaining() >= 2) {uint16_t val_value;uint16_t* val_ptr = &val_value;auto extracted_value = val_it.extract<uint16_t>();*val_ptr = static_cast<uint16_t>(extracted_value);if (val_ptr != nullptr) { source_cid_ptr->push_back(val_value);}}return source_cid_value;}

protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 8 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::CREDIT_BASED_CONNECTION_REQUEST) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeEnhancedCreditBasedConnectionRequest { ";ss << ""  << "spsm = " << static_cast<uint64_t>(GetSpsm()) << ", mtu = " << static_cast<uint64_t>(GetMtu()) << ", mps = " << static_cast<uint64_t>(GetMps()) << ", initial_credits = " << static_cast<uint64_t>(GetInitialCredits()) << ", source_cid = " << "VECTOR[";for (size_t index = 0; index < GetSourceCid().size(); index++) {ss << ((index == 0) ? "" : ", ") << static_cast<uint64_t>((GetSourceCid()[index]));}ss << "]";ss << " }";return ss.str();}

 protected:
explicit LeEnhancedCreditBasedConnectionRequestView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeEnhancedCreditBasedConnectionResponseView : public LeControlView { public:static LeEnhancedCreditBasedConnectionResponseView Create(LeControlView parent){ return LeEnhancedCreditBasedConnectionResponseView(std::move(parent)); }static std::optional<LeEnhancedCreditBasedConnectionResponseView> CreateOptional(LeControlView parent){ auto to_validate = LeEnhancedCreditBasedConnectionResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto mtu_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t mtu_value{};uint16_t* mtu_ptr = &mtu_value;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);return mtu_value;}
uint16_t GetMps() const {ASSERT(was_validated_);auto to_bound = begin();auto mps_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t mps_value{};uint16_t* mps_ptr = &mps_value;auto extracted_value = mps_it.extract<uint16_t>();*mps_ptr = static_cast<uint16_t>(extracted_value);return mps_value;}
uint16_t GetInitialCredits() const {ASSERT(was_validated_);auto to_bound = begin();auto initial_credits_it = to_bound + (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;uint16_t initial_credits_value{};uint16_t* initial_credits_ptr = &initial_credits_value;auto extracted_value = initial_credits_it.extract<uint16_t>();*initial_credits_ptr = static_cast<uint16_t>(extracted_value);return initial_credits_value;}
CreditBasedConnectionResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 80 + /* Dynamic: */ 0) / 8;CreditBasedConnectionResponseResult result_value{};CreditBasedConnectionResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<CreditBasedConnectionResponseResult>(extracted_value);return result_value;}
std::vector<uint16_t> GetDestinationCid() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 96 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto destination_cid_it = to_bound.Subrange(field_begin, field_end - field_begin); std::vector<uint16_t> destination_cid_value{};std::vector<uint16_t>* destination_cid_ptr = &destination_cid_value;auto val_it = destination_cid_it;while (val_it.NumBytesRemaining() >= 2) {uint16_t val_value;uint16_t* val_ptr = &val_value;auto extracted_value = val_it.extract<uint16_t>();*val_ptr = static_cast<uint16_t>(extracted_value);if (val_ptr != nullptr) { destination_cid_ptr->push_back(val_value);}}return destination_cid_value;}

protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 8 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::CREDIT_BASED_CONNECTION_RESPONSE) return false;




return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeEnhancedCreditBasedConnectionResponse { ";ss << ""  << "mtu = " << static_cast<uint64_t>(GetMtu()) << ", mps = " << static_cast<uint64_t>(GetMps()) << ", initial_credits = " << static_cast<uint64_t>(GetInitialCredits()) << ", result = " << CreditBasedConnectionResponseResultText(GetResult()) << ", destination_cid = " << "VECTOR[";for (size_t index = 0; index < GetDestinationCid().size(); index++) {ss << ((index == 0) ? "" : ", ") << static_cast<uint64_t>((GetDestinationCid()[index]));}ss << "]";ss << " }";return ss.str();}

 protected:
explicit LeEnhancedCreditBasedConnectionResponseView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeEnhancedCreditBasedReconfigureRequestView : public LeControlView { public:static LeEnhancedCreditBasedReconfigureRequestView Create(LeControlView parent){ return LeEnhancedCreditBasedReconfigureRequestView(std::move(parent)); }static std::optional<LeEnhancedCreditBasedReconfigureRequestView> CreateOptional(LeControlView parent){ auto to_validate = LeEnhancedCreditBasedReconfigureRequestView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}uint16_t GetMtu() const {ASSERT(was_validated_);auto to_bound = begin();auto mtu_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;uint16_t mtu_value{};uint16_t* mtu_ptr = &mtu_value;auto extracted_value = mtu_it.extract<uint16_t>();*mtu_ptr = static_cast<uint16_t>(extracted_value);return mtu_value;}
uint16_t GetMps() const {ASSERT(was_validated_);auto to_bound = begin();auto mps_it = to_bound + (/* Bits: */ 48 + /* Dynamic: */ 0) / 8;uint16_t mps_value{};uint16_t* mps_ptr = &mps_value;auto extracted_value = mps_it.extract<uint16_t>();*mps_ptr = static_cast<uint16_t>(extracted_value);return mps_value;}
std::vector<uint16_t> GetDestinationCid() const {ASSERT(was_validated_);size_t end_index = size();auto to_bound = begin();size_t field_begin = (/* Bits: */ 64 + /* Dynamic: */ 0) / 8;size_t field_end = end_index - (/* Bits: */ 0 + /* Dynamic: */ 0) / 8;auto destination_cid_it = to_bound.Subrange(field_begin, field_end - field_begin); std::vector<uint16_t> destination_cid_value{};std::vector<uint16_t>* destination_cid_ptr = &destination_cid_value;auto val_it = destination_cid_it;while (val_it.NumBytesRemaining() >= 2) {uint16_t val_value;uint16_t* val_ptr = &val_value;auto extracted_value = val_it.extract<uint16_t>();*val_ptr = static_cast<uint16_t>(extracted_value);if (val_ptr != nullptr) { destination_cid_ptr->push_back(val_value);}}return destination_cid_value;}

protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 4 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::CREDIT_BASED_RECONFIGURE_REQUEST) return false;


return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeEnhancedCreditBasedReconfigureRequest { ";ss << ""  << "mtu = " << static_cast<uint64_t>(GetMtu()) << ", mps = " << static_cast<uint64_t>(GetMps()) << ", destination_cid = " << "VECTOR[";for (size_t index = 0; index < GetDestinationCid().size(); index++) {ss << ((index == 0) ? "" : ", ") << static_cast<uint64_t>((GetDestinationCid()[index]));}ss << "]";ss << " }";return ss.str();}

 protected:
explicit LeEnhancedCreditBasedReconfigureRequestView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class LeEnhancedCreditBasedReconfigureResponseView : public LeControlView { public:static LeEnhancedCreditBasedReconfigureResponseView Create(LeControlView parent){ return LeEnhancedCreditBasedReconfigureResponseView(std::move(parent)); }static std::optional<LeEnhancedCreditBasedReconfigureResponseView> CreateOptional(LeControlView parent){ auto to_validate = LeEnhancedCreditBasedReconfigureResponseView::Create(std::move(parent));if (to_validate.IsValid()) { return to_validate; }else {return {};}}CreditBasedReconfigureResponseResult GetResult() const {ASSERT(was_validated_);auto to_bound = begin();auto result_it = to_bound + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;CreditBasedReconfigureResponseResult result_value{};CreditBasedReconfigureResponseResult* result_ptr = &result_value;auto extracted_value = result_it.extract<uint16_t>();*result_ptr = static_cast<CreditBasedReconfigureResponseResult>(extracted_value);return result_value;}
protected:
bool Validate() const override {
  if (!LeControlView::Validate()) {
    return false;
  }
auto it = begin() + (/* Bits: */ 32 + /* Dynamic: */ 0) / 8;it += 2 /* Total size of the fixed fields */;if (it > end()) return false;if (GetCode() != LeCommandCode::CREDIT_BASED_RECONFIGURE_RESPONSE) return false;
return true;}

 public:virtual std::string ToString() const  override {std::stringstream ss;ss << std::showbase << std::hex << "LeEnhancedCreditBasedReconfigureResponse { ";ss << ""  << "result = " << CreditBasedReconfigureResponseResultText(GetResult());ss << " }";return ss.str();}

 protected:
explicit LeEnhancedCreditBasedReconfigureResponseView(LeControlView parent) : LeControlView(std::move(parent)) { was_validated_ = false; }};


class BasicFrameBuilder : public PacketBuilder<kLittleEndian> { public:  virtual ~BasicFrameBuilder() = default;static std::unique_ptr<BasicFrameBuilder> Create(uint16_t channel_id, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<BasicFrameBuilder>(new BasicFrameBuilder(channel_id));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {size_t payload_bytes = GetPayloadSize();ASSERT(payload_bytes < (static_cast<size_t>(1) << 16));insert(static_cast<uint16_t>(payload_bytes), i,16);insert(channel_id_, i,16);}

void SerializeFooter(BitInserter&) const {}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit BasicFrameBuilder(uint16_t channel_id) :channel_id_(channel_id) {}


uint16_t channel_id_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class BasicFrameWithFcsBuilder : public PacketBuilder<kLittleEndian> { public:  virtual ~BasicFrameWithFcsBuilder() = default;static std::unique_ptr<BasicFrameWithFcsBuilder> Create(uint16_t channel_id, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<BasicFrameWithFcsBuilder>(new BasicFrameWithFcsBuilder(channel_id));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {auto shared_checksum_ptr = std::make_shared<Fcs>();shared_checksum_ptr->Initialize();i.RegisterObserver(packet::ByteObserver([shared_checksum_ptr](uint8_t byte){ shared_checksum_ptr->AddByte(byte);},[shared_checksum_ptr](){ return static_cast<uint64_t>(shared_checksum_ptr->GetChecksum());}));size_t payload_bytes = GetPayloadSize();payload_bytes = payload_bytes + 2;ASSERT(payload_bytes < (static_cast<size_t>(1) << 16));insert(static_cast<uint16_t>(payload_bytes), i,16);insert(channel_id_, i,16);}

void SerializeFooter(BitInserter& i ) const {packet::ByteObserver observer = i.UnregisterObserver();insert(static_cast<uint16_t>(observer.GetValue()), i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + /* Bits: */ 0 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit BasicFrameWithFcsBuilder(uint16_t channel_id) :channel_id_(channel_id) {}


uint16_t channel_id_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class GroupFrameBuilder : public BasicFrameBuilder { public:  virtual ~GroupFrameBuilder() = default;static std::unique_ptr<GroupFrameBuilder> Create(uint16_t psm, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<GroupFrameBuilder>(new GroupFrameBuilder(psm));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {BasicFrameBuilder::SerializeHeader(i);insert(psm_, i,16);}

void SerializeFooter(BitInserter& i ) const {BasicFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + BasicFrameBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + BasicFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit GroupFrameBuilder(uint16_t psm) :BasicFrameBuilder(2/* channel_id_ */) ,psm_(psm) {}


uint16_t psm_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class StandardFrameBuilder : public BasicFrameBuilder { public:  virtual ~StandardFrameBuilder() = default;protected:void SerializeHeader(BitInserter& i ) const {BasicFrameBuilder::SerializeHeader(i);insert(static_cast<uint8_t>(frame_type_), i, 1);}

void SerializeFooter(BitInserter& i ) const {BasicFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + BasicFrameBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + BasicFrameBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit StandardFrameBuilder(uint16_t channel_id, FrameType frame_type) :BasicFrameBuilder(channel_id) ,frame_type_(frame_type) {}


FrameType frame_type_{};};


class StandardFrameWithFcsBuilder : public BasicFrameWithFcsBuilder { public:  virtual ~StandardFrameWithFcsBuilder() = default;protected:void SerializeHeader(BitInserter& i ) const {BasicFrameWithFcsBuilder::SerializeHeader(i);insert(static_cast<uint8_t>(frame_type_), i, 1);}

void SerializeFooter(BitInserter& i ) const {BasicFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + BasicFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + BasicFrameWithFcsBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit StandardFrameWithFcsBuilder(uint16_t channel_id, FrameType frame_type) :BasicFrameWithFcsBuilder(channel_id) ,frame_type_(frame_type) {}


FrameType frame_type_{};};


class StandardSupervisoryFrameBuilder : public StandardFrameBuilder { public:  virtual ~StandardSupervisoryFrameBuilder() = default;static std::unique_ptr<StandardSupervisoryFrameBuilder> Create(uint16_t channel_id, SupervisoryFunction s, RetransmissionDisable r, uint8_t req_seq) {auto builder = std::unique_ptr<StandardSupervisoryFrameBuilder>(new StandardSupervisoryFrameBuilder(channel_id, s, r, req_seq));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameBuilder::SerializeHeader(i);insert(0, i , 1);insert(static_cast<uint8_t>(s_), i, 2);insert(static_cast<uint8_t>(0) /* Reserved */, i, 3 );
insert(static_cast<uint8_t>(r_), i, 1);insert(req_seq_, i,6);insert(static_cast<uint8_t>(0) /* Reserved */, i, 2 );
}

void SerializeFooter(BitInserter& i ) const {StandardFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 3 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit StandardSupervisoryFrameBuilder(uint16_t channel_id, SupervisoryFunction s, RetransmissionDisable r, uint8_t req_seq) :StandardFrameBuilder(channel_id, FrameType::S_FRAME/* frame_type_ */) ,s_(s),r_(r),req_seq_(req_seq) {CheckParameterValues(req_seq_);}

void CheckParameterValues(uint8_t req_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

SupervisoryFunction s_{};RetransmissionDisable r_{};uint8_t req_seq_{};};


class StandardSupervisoryFrameWithFcsBuilder : public StandardFrameWithFcsBuilder { public:  virtual ~StandardSupervisoryFrameWithFcsBuilder() = default;static std::unique_ptr<StandardSupervisoryFrameWithFcsBuilder> Create(uint16_t channel_id, SupervisoryFunction s, RetransmissionDisable r, uint8_t req_seq) {auto builder = std::unique_ptr<StandardSupervisoryFrameWithFcsBuilder>(new StandardSupervisoryFrameWithFcsBuilder(channel_id, s, r, req_seq));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeHeader(i);insert(0, i , 1);insert(static_cast<uint8_t>(s_), i, 2);insert(static_cast<uint8_t>(0) /* Reserved */, i, 3 );
insert(static_cast<uint8_t>(r_), i, 1);insert(req_seq_, i,6);insert(static_cast<uint8_t>(0) /* Reserved */, i, 2 );
}

void SerializeFooter(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 3 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameWithFcsBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit StandardSupervisoryFrameWithFcsBuilder(uint16_t channel_id, SupervisoryFunction s, RetransmissionDisable r, uint8_t req_seq) :StandardFrameWithFcsBuilder(channel_id, FrameType::S_FRAME/* frame_type_ */) ,s_(s),r_(r),req_seq_(req_seq) {CheckParameterValues(req_seq_);}

void CheckParameterValues(uint8_t req_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

SupervisoryFunction s_{};RetransmissionDisable r_{};uint8_t req_seq_{};};


class StandardInformationFrameBuilder : public StandardFrameBuilder { public:  virtual ~StandardInformationFrameBuilder() = default;static std::unique_ptr<StandardInformationFrameBuilder> Create(uint16_t channel_id, uint8_t tx_seq, RetransmissionDisable r, uint8_t req_seq, SegmentationAndReassembly sar, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<StandardInformationFrameBuilder>(new StandardInformationFrameBuilder(channel_id, tx_seq, r, req_seq, sar));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameBuilder::SerializeHeader(i);insert(tx_seq_, i,6);insert(static_cast<uint8_t>(r_), i, 1);insert(req_seq_, i,6);insert(static_cast<uint8_t>(sar_), i, 2);}

void SerializeFooter(BitInserter& i ) const {StandardFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameBuilder::BitsOfHeader()  + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit StandardInformationFrameBuilder(uint16_t channel_id, uint8_t tx_seq, RetransmissionDisable r, uint8_t req_seq, SegmentationAndReassembly sar) :StandardFrameBuilder(channel_id, FrameType::I_FRAME/* frame_type_ */) ,tx_seq_(tx_seq),r_(r),req_seq_(req_seq),sar_(sar) {CheckParameterValues(tx_seq_, req_seq_);}

void CheckParameterValues(uint8_t tx_seq, uint8_t req_seq) {ASSERT(tx_seq < (static_cast<uint64_t>(1) << 6));ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

uint8_t tx_seq_{};RetransmissionDisable r_{};uint8_t req_seq_{};SegmentationAndReassembly sar_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class StandardInformationFrameWithFcsBuilder : public StandardFrameWithFcsBuilder { public:  virtual ~StandardInformationFrameWithFcsBuilder() = default;static std::unique_ptr<StandardInformationFrameWithFcsBuilder> Create(uint16_t channel_id, uint8_t tx_seq, RetransmissionDisable r, uint8_t req_seq, SegmentationAndReassembly sar, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<StandardInformationFrameWithFcsBuilder>(new StandardInformationFrameWithFcsBuilder(channel_id, tx_seq, r, req_seq, sar));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeHeader(i);insert(tx_seq_, i,6);insert(static_cast<uint8_t>(r_), i, 1);insert(req_seq_, i,6);insert(static_cast<uint8_t>(sar_), i, 2);}

void SerializeFooter(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameWithFcsBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit StandardInformationFrameWithFcsBuilder(uint16_t channel_id, uint8_t tx_seq, RetransmissionDisable r, uint8_t req_seq, SegmentationAndReassembly sar) :StandardFrameWithFcsBuilder(channel_id, FrameType::I_FRAME/* frame_type_ */) ,tx_seq_(tx_seq),r_(r),req_seq_(req_seq),sar_(sar) {CheckParameterValues(tx_seq_, req_seq_);}

void CheckParameterValues(uint8_t tx_seq, uint8_t req_seq) {ASSERT(tx_seq < (static_cast<uint64_t>(1) << 6));ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

uint8_t tx_seq_{};RetransmissionDisable r_{};uint8_t req_seq_{};SegmentationAndReassembly sar_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class StandardInformationStartFrameBuilder : public StandardInformationFrameBuilder { public:  virtual ~StandardInformationStartFrameBuilder() = default;static std::unique_ptr<StandardInformationStartFrameBuilder> Create(uint16_t channel_id, uint8_t tx_seq, RetransmissionDisable r, uint8_t req_seq, uint16_t l2cap_sdu_length, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<StandardInformationStartFrameBuilder>(new StandardInformationStartFrameBuilder(channel_id, tx_seq, r, req_seq, l2cap_sdu_length));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardInformationFrameBuilder::SerializeHeader(i);insert(l2cap_sdu_length_, i,16);}

void SerializeFooter(BitInserter& i ) const {StandardInformationFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardInformationFrameBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardInformationFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit StandardInformationStartFrameBuilder(uint16_t channel_id, uint8_t tx_seq, RetransmissionDisable r, uint8_t req_seq, uint16_t l2cap_sdu_length) :StandardInformationFrameBuilder(channel_id, tx_seq, r, req_seq, SegmentationAndReassembly::START/* sar_ */) ,l2cap_sdu_length_(l2cap_sdu_length) {CheckParameterValues(tx_seq_, req_seq_);}

void CheckParameterValues(uint8_t tx_seq, uint8_t req_seq) {ASSERT(tx_seq < (static_cast<uint64_t>(1) << 6));ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

uint16_t l2cap_sdu_length_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class StandardInformationStartFrameWithFcsBuilder : public StandardInformationFrameWithFcsBuilder { public:  virtual ~StandardInformationStartFrameWithFcsBuilder() = default;static std::unique_ptr<StandardInformationStartFrameWithFcsBuilder> Create(uint16_t channel_id, uint8_t tx_seq, RetransmissionDisable r, uint8_t req_seq, uint16_t l2cap_sdu_length, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<StandardInformationStartFrameWithFcsBuilder>(new StandardInformationStartFrameWithFcsBuilder(channel_id, tx_seq, r, req_seq, l2cap_sdu_length));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardInformationFrameWithFcsBuilder::SerializeHeader(i);insert(l2cap_sdu_length_, i,16);}

void SerializeFooter(BitInserter& i ) const {StandardInformationFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardInformationFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardInformationFrameWithFcsBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit StandardInformationStartFrameWithFcsBuilder(uint16_t channel_id, uint8_t tx_seq, RetransmissionDisable r, uint8_t req_seq, uint16_t l2cap_sdu_length) :StandardInformationFrameWithFcsBuilder(channel_id, tx_seq, r, req_seq, SegmentationAndReassembly::START/* sar_ */) ,l2cap_sdu_length_(l2cap_sdu_length) {CheckParameterValues(tx_seq_, req_seq_);}

void CheckParameterValues(uint8_t tx_seq, uint8_t req_seq) {ASSERT(tx_seq < (static_cast<uint64_t>(1) << 6));ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

uint16_t l2cap_sdu_length_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class EnhancedSupervisoryFrameBuilder : public StandardFrameBuilder { public:  virtual ~EnhancedSupervisoryFrameBuilder() = default;static std::unique_ptr<EnhancedSupervisoryFrameBuilder> Create(uint16_t channel_id, SupervisoryFunction s, Poll p, Final f, uint8_t req_seq) {auto builder = std::unique_ptr<EnhancedSupervisoryFrameBuilder>(new EnhancedSupervisoryFrameBuilder(channel_id, s, p, f, req_seq));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameBuilder::SerializeHeader(i);insert(0, i , 1);insert(static_cast<uint8_t>(s_), i, 2);insert(static_cast<uint8_t>(p_), i, 1);insert(static_cast<uint8_t>(0) /* Reserved */, i, 2 );
insert(static_cast<uint8_t>(f_), i, 1);insert(req_seq_, i,6);insert(static_cast<uint8_t>(0) /* Reserved */, i, 2 );
}

void SerializeFooter(BitInserter& i ) const {StandardFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit EnhancedSupervisoryFrameBuilder(uint16_t channel_id, SupervisoryFunction s, Poll p, Final f, uint8_t req_seq) :StandardFrameBuilder(channel_id, FrameType::S_FRAME/* frame_type_ */) ,s_(s),p_(p),f_(f),req_seq_(req_seq) {CheckParameterValues(req_seq_);}

void CheckParameterValues(uint8_t req_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

SupervisoryFunction s_{};Poll p_{};Final f_{};uint8_t req_seq_{};};


class EnhancedSupervisoryFrameWithFcsBuilder : public StandardFrameWithFcsBuilder { public:  virtual ~EnhancedSupervisoryFrameWithFcsBuilder() = default;static std::unique_ptr<EnhancedSupervisoryFrameWithFcsBuilder> Create(uint16_t channel_id, SupervisoryFunction s, Poll p, Final f, uint8_t req_seq) {auto builder = std::unique_ptr<EnhancedSupervisoryFrameWithFcsBuilder>(new EnhancedSupervisoryFrameWithFcsBuilder(channel_id, s, p, f, req_seq));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeHeader(i);insert(0, i , 1);insert(static_cast<uint8_t>(s_), i, 2);insert(static_cast<uint8_t>(p_), i, 1);insert(static_cast<uint8_t>(0) /* Reserved */, i, 2 );
insert(static_cast<uint8_t>(f_), i, 1);insert(req_seq_, i,6);insert(static_cast<uint8_t>(0) /* Reserved */, i, 2 );
}

void SerializeFooter(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameWithFcsBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit EnhancedSupervisoryFrameWithFcsBuilder(uint16_t channel_id, SupervisoryFunction s, Poll p, Final f, uint8_t req_seq) :StandardFrameWithFcsBuilder(channel_id, FrameType::S_FRAME/* frame_type_ */) ,s_(s),p_(p),f_(f),req_seq_(req_seq) {CheckParameterValues(req_seq_);}

void CheckParameterValues(uint8_t req_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

SupervisoryFunction s_{};Poll p_{};Final f_{};uint8_t req_seq_{};};


class EnhancedInformationFrameBuilder : public StandardFrameBuilder { public:  virtual ~EnhancedInformationFrameBuilder() = default;static std::unique_ptr<EnhancedInformationFrameBuilder> Create(uint16_t channel_id, uint8_t tx_seq, Final f, uint8_t req_seq, SegmentationAndReassembly sar, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<EnhancedInformationFrameBuilder>(new EnhancedInformationFrameBuilder(channel_id, tx_seq, f, req_seq, sar));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameBuilder::SerializeHeader(i);insert(tx_seq_, i,6);insert(static_cast<uint8_t>(f_), i, 1);insert(req_seq_, i,6);insert(static_cast<uint8_t>(sar_), i, 2);}

void SerializeFooter(BitInserter& i ) const {StandardFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameBuilder::BitsOfHeader()  + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit EnhancedInformationFrameBuilder(uint16_t channel_id, uint8_t tx_seq, Final f, uint8_t req_seq, SegmentationAndReassembly sar) :StandardFrameBuilder(channel_id, FrameType::I_FRAME/* frame_type_ */) ,tx_seq_(tx_seq),f_(f),req_seq_(req_seq),sar_(sar) {CheckParameterValues(tx_seq_, req_seq_);}

void CheckParameterValues(uint8_t tx_seq, uint8_t req_seq) {ASSERT(tx_seq < (static_cast<uint64_t>(1) << 6));ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

uint8_t tx_seq_{};Final f_{};uint8_t req_seq_{};SegmentationAndReassembly sar_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class EnhancedInformationFrameWithFcsBuilder : public StandardFrameWithFcsBuilder { public:  virtual ~EnhancedInformationFrameWithFcsBuilder() = default;static std::unique_ptr<EnhancedInformationFrameWithFcsBuilder> Create(uint16_t channel_id, uint8_t tx_seq, Final f, uint8_t req_seq, SegmentationAndReassembly sar, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<EnhancedInformationFrameWithFcsBuilder>(new EnhancedInformationFrameWithFcsBuilder(channel_id, tx_seq, f, req_seq, sar));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeHeader(i);insert(tx_seq_, i,6);insert(static_cast<uint8_t>(f_), i, 1);insert(req_seq_, i,6);insert(static_cast<uint8_t>(sar_), i, 2);}

void SerializeFooter(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 6 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameWithFcsBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit EnhancedInformationFrameWithFcsBuilder(uint16_t channel_id, uint8_t tx_seq, Final f, uint8_t req_seq, SegmentationAndReassembly sar) :StandardFrameWithFcsBuilder(channel_id, FrameType::I_FRAME/* frame_type_ */) ,tx_seq_(tx_seq),f_(f),req_seq_(req_seq),sar_(sar) {CheckParameterValues(tx_seq_, req_seq_);}

void CheckParameterValues(uint8_t tx_seq, uint8_t req_seq) {ASSERT(tx_seq < (static_cast<uint64_t>(1) << 6));ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

uint8_t tx_seq_{};Final f_{};uint8_t req_seq_{};SegmentationAndReassembly sar_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class EnhancedInformationStartFrameBuilder : public EnhancedInformationFrameBuilder { public:  virtual ~EnhancedInformationStartFrameBuilder() = default;static std::unique_ptr<EnhancedInformationStartFrameBuilder> Create(uint16_t channel_id, uint8_t tx_seq, Final f, uint8_t req_seq, uint16_t l2cap_sdu_length, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<EnhancedInformationStartFrameBuilder>(new EnhancedInformationStartFrameBuilder(channel_id, tx_seq, f, req_seq, l2cap_sdu_length));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {EnhancedInformationFrameBuilder::SerializeHeader(i);insert(l2cap_sdu_length_, i,16);}

void SerializeFooter(BitInserter& i ) const {EnhancedInformationFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + EnhancedInformationFrameBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + EnhancedInformationFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit EnhancedInformationStartFrameBuilder(uint16_t channel_id, uint8_t tx_seq, Final f, uint8_t req_seq, uint16_t l2cap_sdu_length) :EnhancedInformationFrameBuilder(channel_id, tx_seq, f, req_seq, SegmentationAndReassembly::START/* sar_ */) ,l2cap_sdu_length_(l2cap_sdu_length) {CheckParameterValues(tx_seq_, req_seq_);}

void CheckParameterValues(uint8_t tx_seq, uint8_t req_seq) {ASSERT(tx_seq < (static_cast<uint64_t>(1) << 6));ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

uint16_t l2cap_sdu_length_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class EnhancedInformationStartFrameWithFcsBuilder : public EnhancedInformationFrameWithFcsBuilder { public:  virtual ~EnhancedInformationStartFrameWithFcsBuilder() = default;static std::unique_ptr<EnhancedInformationStartFrameWithFcsBuilder> Create(uint16_t channel_id, uint8_t tx_seq, Final f, uint8_t req_seq, uint16_t l2cap_sdu_length, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<EnhancedInformationStartFrameWithFcsBuilder>(new EnhancedInformationStartFrameWithFcsBuilder(channel_id, tx_seq, f, req_seq, l2cap_sdu_length));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {EnhancedInformationFrameWithFcsBuilder::SerializeHeader(i);insert(l2cap_sdu_length_, i,16);}

void SerializeFooter(BitInserter& i ) const {EnhancedInformationFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + EnhancedInformationFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + EnhancedInformationFrameWithFcsBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit EnhancedInformationStartFrameWithFcsBuilder(uint16_t channel_id, uint8_t tx_seq, Final f, uint8_t req_seq, uint16_t l2cap_sdu_length) :EnhancedInformationFrameWithFcsBuilder(channel_id, tx_seq, f, req_seq, SegmentationAndReassembly::START/* sar_ */) ,l2cap_sdu_length_(l2cap_sdu_length) {CheckParameterValues(tx_seq_, req_seq_);}

void CheckParameterValues(uint8_t tx_seq, uint8_t req_seq) {ASSERT(tx_seq < (static_cast<uint64_t>(1) << 6));ASSERT(req_seq < (static_cast<uint64_t>(1) << 6));}

uint16_t l2cap_sdu_length_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class ExtendedSupervisoryFrameBuilder : public StandardFrameBuilder { public:  virtual ~ExtendedSupervisoryFrameBuilder() = default;static std::unique_ptr<ExtendedSupervisoryFrameBuilder> Create(uint16_t channel_id, Final f, uint16_t req_seq, SupervisoryFunction s, Poll p) {auto builder = std::unique_ptr<ExtendedSupervisoryFrameBuilder>(new ExtendedSupervisoryFrameBuilder(channel_id, f, req_seq, s, p));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameBuilder::SerializeHeader(i);insert(static_cast<uint8_t>(f_), i, 1);insert(req_seq_, i,14);insert(static_cast<uint8_t>(s_), i, 2);insert(static_cast<uint8_t>(p_), i, 1);insert(static_cast<uint8_t>(0) /* Reserved */, i, 5 );
insert(static_cast<uint8_t>(0) /* Reserved */, i, 8 );
}

void SerializeFooter(BitInserter& i ) const {StandardFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 14 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 5 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit ExtendedSupervisoryFrameBuilder(uint16_t channel_id, Final f, uint16_t req_seq, SupervisoryFunction s, Poll p) :StandardFrameBuilder(channel_id, FrameType::S_FRAME/* frame_type_ */) ,f_(f),req_seq_(req_seq),s_(s),p_(p) {CheckParameterValues(req_seq_);}

void CheckParameterValues(uint16_t req_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 14));}

Final f_{};uint16_t req_seq_{};SupervisoryFunction s_{};Poll p_{};};


class ExtendedSupervisoryFrameWithFcsBuilder : public StandardFrameWithFcsBuilder { public:  virtual ~ExtendedSupervisoryFrameWithFcsBuilder() = default;static std::unique_ptr<ExtendedSupervisoryFrameWithFcsBuilder> Create(uint16_t channel_id, Final f, uint16_t req_seq, SupervisoryFunction s, Poll p) {auto builder = std::unique_ptr<ExtendedSupervisoryFrameWithFcsBuilder>(new ExtendedSupervisoryFrameWithFcsBuilder(channel_id, f, req_seq, s, p));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeHeader(i);insert(static_cast<uint8_t>(f_), i, 1);insert(req_seq_, i,14);insert(static_cast<uint8_t>(s_), i, 2);insert(static_cast<uint8_t>(p_), i, 1);insert(static_cast<uint8_t>(0) /* Reserved */, i, 5 );
insert(static_cast<uint8_t>(0) /* Reserved */, i, 8 );
}

void SerializeFooter(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 14 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 5 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameWithFcsBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit ExtendedSupervisoryFrameWithFcsBuilder(uint16_t channel_id, Final f, uint16_t req_seq, SupervisoryFunction s, Poll p) :StandardFrameWithFcsBuilder(channel_id, FrameType::S_FRAME/* frame_type_ */) ,f_(f),req_seq_(req_seq),s_(s),p_(p) {CheckParameterValues(req_seq_);}

void CheckParameterValues(uint16_t req_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 14));}

Final f_{};uint16_t req_seq_{};SupervisoryFunction s_{};Poll p_{};};


class ExtendedInformationFrameBuilder : public StandardFrameBuilder { public:  virtual ~ExtendedInformationFrameBuilder() = default;static std::unique_ptr<ExtendedInformationFrameBuilder> Create(uint16_t channel_id, Final f, uint16_t req_seq, SegmentationAndReassembly sar, uint16_t tx_seq, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<ExtendedInformationFrameBuilder>(new ExtendedInformationFrameBuilder(channel_id, f, req_seq, sar, tx_seq));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameBuilder::SerializeHeader(i);insert(static_cast<uint8_t>(f_), i, 1);insert(req_seq_, i,14);insert(static_cast<uint8_t>(sar_), i, 2);insert(tx_seq_, i,14);}

void SerializeFooter(BitInserter& i ) const {StandardFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 14 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 14 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit ExtendedInformationFrameBuilder(uint16_t channel_id, Final f, uint16_t req_seq, SegmentationAndReassembly sar, uint16_t tx_seq) :StandardFrameBuilder(channel_id, FrameType::I_FRAME/* frame_type_ */) ,f_(f),req_seq_(req_seq),sar_(sar),tx_seq_(tx_seq) {CheckParameterValues(req_seq_, tx_seq_);}

void CheckParameterValues(uint16_t req_seq, uint16_t tx_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 14));ASSERT(tx_seq < (static_cast<uint64_t>(1) << 14));}

Final f_{};uint16_t req_seq_{};SegmentationAndReassembly sar_{};uint16_t tx_seq_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class ExtendedInformationFrameWithFcsBuilder : public StandardFrameWithFcsBuilder { public:  virtual ~ExtendedInformationFrameWithFcsBuilder() = default;static std::unique_ptr<ExtendedInformationFrameWithFcsBuilder> Create(uint16_t channel_id, Final f, uint16_t req_seq, SegmentationAndReassembly sar, uint16_t tx_seq, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<ExtendedInformationFrameWithFcsBuilder>(new ExtendedInformationFrameWithFcsBuilder(channel_id, f, req_seq, sar, tx_seq));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeHeader(i);insert(static_cast<uint8_t>(f_), i, 1);insert(req_seq_, i,14);insert(static_cast<uint8_t>(sar_), i, 2);insert(tx_seq_, i,14);}

void SerializeFooter(BitInserter& i ) const {StandardFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + StandardFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 14 + /* Dynamic: */ 0 + /* Bits: */ 2 + /* Dynamic: */ 0 + /* Bits: */ 14 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + StandardFrameWithFcsBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit ExtendedInformationFrameWithFcsBuilder(uint16_t channel_id, Final f, uint16_t req_seq, SegmentationAndReassembly sar, uint16_t tx_seq) :StandardFrameWithFcsBuilder(channel_id, FrameType::I_FRAME/* frame_type_ */) ,f_(f),req_seq_(req_seq),sar_(sar),tx_seq_(tx_seq) {CheckParameterValues(req_seq_, tx_seq_);}

void CheckParameterValues(uint16_t req_seq, uint16_t tx_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 14));ASSERT(tx_seq < (static_cast<uint64_t>(1) << 14));}

Final f_{};uint16_t req_seq_{};SegmentationAndReassembly sar_{};uint16_t tx_seq_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class ExtendedInformationStartFrameBuilder : public ExtendedInformationFrameBuilder { public:  virtual ~ExtendedInformationStartFrameBuilder() = default;static std::unique_ptr<ExtendedInformationStartFrameBuilder> Create(uint16_t channel_id, Final f, uint16_t req_seq, uint16_t tx_seq, uint16_t l2cap_sdu_length, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<ExtendedInformationStartFrameBuilder>(new ExtendedInformationStartFrameBuilder(channel_id, f, req_seq, tx_seq, l2cap_sdu_length));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ExtendedInformationFrameBuilder::SerializeHeader(i);insert(l2cap_sdu_length_, i,16);}

void SerializeFooter(BitInserter& i ) const {ExtendedInformationFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ExtendedInformationFrameBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ExtendedInformationFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit ExtendedInformationStartFrameBuilder(uint16_t channel_id, Final f, uint16_t req_seq, uint16_t tx_seq, uint16_t l2cap_sdu_length) :ExtendedInformationFrameBuilder(channel_id, f, req_seq, SegmentationAndReassembly::START/* sar_ */, tx_seq) ,l2cap_sdu_length_(l2cap_sdu_length) {CheckParameterValues(req_seq_, tx_seq_);}

void CheckParameterValues(uint16_t req_seq, uint16_t tx_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 14));ASSERT(tx_seq < (static_cast<uint64_t>(1) << 14));}

uint16_t l2cap_sdu_length_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class ExtendedInformationStartFrameWithFcsBuilder : public ExtendedInformationFrameWithFcsBuilder { public:  virtual ~ExtendedInformationStartFrameWithFcsBuilder() = default;static std::unique_ptr<ExtendedInformationStartFrameWithFcsBuilder> Create(uint16_t channel_id, Final f, uint16_t req_seq, uint16_t tx_seq, uint16_t l2cap_sdu_length, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<ExtendedInformationStartFrameWithFcsBuilder>(new ExtendedInformationStartFrameWithFcsBuilder(channel_id, f, req_seq, tx_seq, l2cap_sdu_length));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ExtendedInformationFrameWithFcsBuilder::SerializeHeader(i);insert(l2cap_sdu_length_, i,16);}

void SerializeFooter(BitInserter& i ) const {ExtendedInformationFrameWithFcsBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ExtendedInformationFrameWithFcsBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ExtendedInformationFrameWithFcsBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit ExtendedInformationStartFrameWithFcsBuilder(uint16_t channel_id, Final f, uint16_t req_seq, uint16_t tx_seq, uint16_t l2cap_sdu_length) :ExtendedInformationFrameWithFcsBuilder(channel_id, f, req_seq, SegmentationAndReassembly::START/* sar_ */, tx_seq) ,l2cap_sdu_length_(l2cap_sdu_length) {CheckParameterValues(req_seq_, tx_seq_);}

void CheckParameterValues(uint16_t req_seq, uint16_t tx_seq) {ASSERT(req_seq < (static_cast<uint64_t>(1) << 14));ASSERT(tx_seq < (static_cast<uint64_t>(1) << 14));}

uint16_t l2cap_sdu_length_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class FirstLeInformationFrameBuilder : public BasicFrameBuilder { public:  virtual ~FirstLeInformationFrameBuilder() = default;static std::unique_ptr<FirstLeInformationFrameBuilder> Create(uint16_t channel_id, uint16_t l2cap_sdu_length, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<FirstLeInformationFrameBuilder>(new FirstLeInformationFrameBuilder(channel_id, l2cap_sdu_length));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {BasicFrameBuilder::SerializeHeader(i);insert(l2cap_sdu_length_, i,16);}

void SerializeFooter(BitInserter& i ) const {BasicFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + BasicFrameBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + BasicFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit FirstLeInformationFrameBuilder(uint16_t channel_id, uint16_t l2cap_sdu_length) :BasicFrameBuilder(channel_id) ,l2cap_sdu_length_(l2cap_sdu_length) {}


uint16_t l2cap_sdu_length_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class ControlFrameBuilder : public BasicFrameBuilder { public:  virtual ~ControlFrameBuilder() = default;static std::unique_ptr<ControlFrameBuilder> Create(std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<ControlFrameBuilder>(new ControlFrameBuilder());builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {BasicFrameBuilder::SerializeHeader(i);}

void SerializeFooter(BitInserter& i ) const {BasicFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + BasicFrameBuilder::BitsOfHeader() ;}

size_t BitsOfFooter() const {return 0 + BasicFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit ControlFrameBuilder() :BasicFrameBuilder(1/* channel_id_ */)  {}


std::unique_ptr<BasePacketBuilder> payload_{};};


class ControlBuilder : public PacketBuilder<kLittleEndian> { public:  virtual ~ControlBuilder() = default;static std::unique_ptr<ControlBuilder> Create(CommandCode code, uint8_t identifier, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<ControlBuilder>(new ControlBuilder(code, identifier));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {insert(static_cast<uint8_t>(code_), i, 8);i.insert_byte(identifier_);size_t payload_bytes = GetPayloadSize();ASSERT(payload_bytes < (static_cast<size_t>(1) << 16));insert(static_cast<uint16_t>(payload_bytes), i,16);}

void SerializeFooter(BitInserter&) const {}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit ControlBuilder(CommandCode code, uint8_t identifier) :code_(code),identifier_(identifier) {}


CommandCode code_{};uint8_t identifier_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class CommandRejectBuilder : public ControlBuilder { public:  virtual ~CommandRejectBuilder() = default;protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(static_cast<uint16_t>(reason_), i, 16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CommandRejectBuilder(uint8_t identifier, CommandRejectReason reason) :ControlBuilder(CommandCode::COMMAND_REJECT/* code_ */, identifier) ,reason_(reason) {}


CommandRejectReason reason_{};};


class CommandRejectNotUnderstoodBuilder : public CommandRejectBuilder { public:  virtual ~CommandRejectNotUnderstoodBuilder() = default;static std::unique_ptr<CommandRejectNotUnderstoodBuilder> Create(uint8_t identifier) {auto builder = std::unique_ptr<CommandRejectNotUnderstoodBuilder>(new CommandRejectNotUnderstoodBuilder(identifier));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {CommandRejectBuilder::SerializeHeader(i);}

void SerializeFooter(BitInserter& i ) const {CommandRejectBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + CommandRejectBuilder::BitsOfHeader() ;}

size_t BitsOfFooter() const {return 0 + CommandRejectBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CommandRejectNotUnderstoodBuilder(uint8_t identifier) :CommandRejectBuilder(identifier, CommandRejectReason::COMMAND_NOT_UNDERSTOOD/* reason_ */)  {}


};


class CommandRejectMtuExceededBuilder : public CommandRejectBuilder { public:  virtual ~CommandRejectMtuExceededBuilder() = default;static std::unique_ptr<CommandRejectMtuExceededBuilder> Create(uint8_t identifier, uint16_t actual_mtu) {auto builder = std::unique_ptr<CommandRejectMtuExceededBuilder>(new CommandRejectMtuExceededBuilder(identifier, actual_mtu));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {CommandRejectBuilder::SerializeHeader(i);insert(actual_mtu_, i,16);}

void SerializeFooter(BitInserter& i ) const {CommandRejectBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + CommandRejectBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + CommandRejectBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CommandRejectMtuExceededBuilder(uint8_t identifier, uint16_t actual_mtu) :CommandRejectBuilder(identifier, CommandRejectReason::SIGNALING_MTU_EXCEEDED/* reason_ */) ,actual_mtu_(actual_mtu) {}


uint16_t actual_mtu_{};};


class CommandRejectInvalidCidBuilder : public CommandRejectBuilder { public:  virtual ~CommandRejectInvalidCidBuilder() = default;static std::unique_ptr<CommandRejectInvalidCidBuilder> Create(uint8_t identifier, uint16_t local_channel, uint16_t remote_channel) {auto builder = std::unique_ptr<CommandRejectInvalidCidBuilder>(new CommandRejectInvalidCidBuilder(identifier, local_channel, remote_channel));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {CommandRejectBuilder::SerializeHeader(i);insert(local_channel_, i,16);insert(remote_channel_, i,16);}

void SerializeFooter(BitInserter& i ) const {CommandRejectBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + CommandRejectBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + CommandRejectBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CommandRejectInvalidCidBuilder(uint8_t identifier, uint16_t local_channel, uint16_t remote_channel) :CommandRejectBuilder(identifier, CommandRejectReason::INVALID_CID_IN_REQUEST/* reason_ */) ,local_channel_(local_channel),remote_channel_(remote_channel) {}


uint16_t local_channel_{};uint16_t remote_channel_{};};


class ConnectionRequestBuilder : public ControlBuilder { public:  virtual ~ConnectionRequestBuilder() = default;static std::unique_ptr<ConnectionRequestBuilder> Create(uint8_t identifier, uint16_t psm, uint16_t source_cid) {auto builder = std::unique_ptr<ConnectionRequestBuilder>(new ConnectionRequestBuilder(identifier, psm, source_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(psm_, i,16);insert(source_cid_, i,16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit ConnectionRequestBuilder(uint8_t identifier, uint16_t psm, uint16_t source_cid) :ControlBuilder(CommandCode::CONNECTION_REQUEST/* code_ */, identifier) ,psm_(psm),source_cid_(source_cid) {}


uint16_t psm_{};uint16_t source_cid_{};};


class ConnectionResponseBuilder : public ControlBuilder { public:  virtual ~ConnectionResponseBuilder() = default;static std::unique_ptr<ConnectionResponseBuilder> Create(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid, ConnectionResponseResult result, ConnectionResponseStatus status) {auto builder = std::unique_ptr<ConnectionResponseBuilder>(new ConnectionResponseBuilder(identifier, destination_cid, source_cid, result, status));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(destination_cid_, i,16);insert(source_cid_, i,16);insert(static_cast<uint16_t>(result_), i, 16);insert(static_cast<uint16_t>(status_), i, 16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit ConnectionResponseBuilder(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid, ConnectionResponseResult result, ConnectionResponseStatus status) :ControlBuilder(CommandCode::CONNECTION_RESPONSE/* code_ */, identifier) ,destination_cid_(destination_cid),source_cid_(source_cid),result_(result),status_(status) {}


uint16_t destination_cid_{};uint16_t source_cid_{};ConnectionResponseResult result_{};ConnectionResponseStatus status_{};};


class ConfigurationRequestBuilder : public ControlBuilder { public:  virtual ~ConfigurationRequestBuilder() = default;static std::unique_ptr<ConfigurationRequestBuilder> Create(uint8_t identifier, uint16_t destination_cid, Continuation continuation, std::vector<std::unique_ptr<ConfigurationOption>> config) {auto builder = std::unique_ptr<ConfigurationRequestBuilder>(new ConfigurationRequestBuilder(identifier, destination_cid, continuation, std::move(config)));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(destination_cid_, i,16);insert(static_cast<uint8_t>(continuation_), i, 1);insert(static_cast<uint16_t>(0) /* Reserved */, i, 15 );
for (const auto& val_ : config_) {val_->Serialize(i);}
}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 15 + /* Dynamic: */ 0 + /* Bits: */ 0 + /* Dynamic: */ [this](){ size_t length = 0; for (const auto& elem : config_) { length += elem->size() * 8; } return length; }();}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit ConfigurationRequestBuilder(uint8_t identifier, uint16_t destination_cid, Continuation continuation, std::vector<std::unique_ptr<ConfigurationOption>> config) :ControlBuilder(CommandCode::CONFIGURATION_REQUEST/* code_ */, identifier) ,destination_cid_(destination_cid),continuation_(continuation),config_(std::move(config)) {}


uint16_t destination_cid_{};Continuation continuation_{};std::vector<std::unique_ptr<ConfigurationOption>> config_{};};


class ConfigurationResponseBuilder : public ControlBuilder { public:  virtual ~ConfigurationResponseBuilder() = default;static std::unique_ptr<ConfigurationResponseBuilder> Create(uint8_t identifier, uint16_t source_cid, Continuation continuation, ConfigurationResponseResult result, std::vector<std::unique_ptr<ConfigurationOption>> config) {auto builder = std::unique_ptr<ConfigurationResponseBuilder>(new ConfigurationResponseBuilder(identifier, source_cid, continuation, result, std::move(config)));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(source_cid_, i,16);insert(static_cast<uint8_t>(continuation_), i, 1);insert(static_cast<uint16_t>(0) /* Reserved */, i, 15 );
insert(static_cast<uint16_t>(result_), i, 16);for (const auto& val_ : config_) {val_->Serialize(i);}
}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 15 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 0 + /* Dynamic: */ [this](){ size_t length = 0; for (const auto& elem : config_) { length += elem->size() * 8; } return length; }();}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit ConfigurationResponseBuilder(uint8_t identifier, uint16_t source_cid, Continuation continuation, ConfigurationResponseResult result, std::vector<std::unique_ptr<ConfigurationOption>> config) :ControlBuilder(CommandCode::CONFIGURATION_RESPONSE/* code_ */, identifier) ,source_cid_(source_cid),continuation_(continuation),result_(result),config_(std::move(config)) {}


uint16_t source_cid_{};Continuation continuation_{};ConfigurationResponseResult result_{};std::vector<std::unique_ptr<ConfigurationOption>> config_{};};


class DisconnectionRequestBuilder : public ControlBuilder { public:  virtual ~DisconnectionRequestBuilder() = default;static std::unique_ptr<DisconnectionRequestBuilder> Create(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid) {auto builder = std::unique_ptr<DisconnectionRequestBuilder>(new DisconnectionRequestBuilder(identifier, destination_cid, source_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(destination_cid_, i,16);insert(source_cid_, i,16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit DisconnectionRequestBuilder(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid) :ControlBuilder(CommandCode::DISCONNECTION_REQUEST/* code_ */, identifier) ,destination_cid_(destination_cid),source_cid_(source_cid) {}


uint16_t destination_cid_{};uint16_t source_cid_{};};


class DisconnectionResponseBuilder : public ControlBuilder { public:  virtual ~DisconnectionResponseBuilder() = default;static std::unique_ptr<DisconnectionResponseBuilder> Create(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid) {auto builder = std::unique_ptr<DisconnectionResponseBuilder>(new DisconnectionResponseBuilder(identifier, destination_cid, source_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(destination_cid_, i,16);insert(source_cid_, i,16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit DisconnectionResponseBuilder(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid) :ControlBuilder(CommandCode::DISCONNECTION_RESPONSE/* code_ */, identifier) ,destination_cid_(destination_cid),source_cid_(source_cid) {}


uint16_t destination_cid_{};uint16_t source_cid_{};};


class EchoRequestBuilder : public ControlBuilder { public:  virtual ~EchoRequestBuilder() = default;static std::unique_ptr<EchoRequestBuilder> Create(uint8_t identifier, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<EchoRequestBuilder>(new EchoRequestBuilder(identifier));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader() ;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit EchoRequestBuilder(uint8_t identifier) :ControlBuilder(CommandCode::ECHO_REQUEST/* code_ */, identifier)  {}


std::unique_ptr<BasePacketBuilder> payload_{};};


class EchoResponseBuilder : public ControlBuilder { public:  virtual ~EchoResponseBuilder() = default;static std::unique_ptr<EchoResponseBuilder> Create(uint8_t identifier, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<EchoResponseBuilder>(new EchoResponseBuilder(identifier));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader() ;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit EchoResponseBuilder(uint8_t identifier) :ControlBuilder(CommandCode::ECHO_RESPONSE/* code_ */, identifier)  {}


std::unique_ptr<BasePacketBuilder> payload_{};};


class InformationRequestBuilder : public ControlBuilder { public:  virtual ~InformationRequestBuilder() = default;static std::unique_ptr<InformationRequestBuilder> Create(uint8_t identifier, InformationRequestInfoType info_type) {auto builder = std::unique_ptr<InformationRequestBuilder>(new InformationRequestBuilder(identifier, info_type));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(static_cast<uint16_t>(info_type_), i, 16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit InformationRequestBuilder(uint8_t identifier, InformationRequestInfoType info_type) :ControlBuilder(CommandCode::INFORMATION_REQUEST/* code_ */, identifier) ,info_type_(info_type) {}


InformationRequestInfoType info_type_{};};


class InformationResponseBuilder : public ControlBuilder { public:  virtual ~InformationResponseBuilder() = default;protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(static_cast<uint16_t>(info_type_), i, 16);insert(static_cast<uint16_t>(result_), i, 16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit InformationResponseBuilder(uint8_t identifier, InformationRequestInfoType info_type, InformationRequestResult result) :ControlBuilder(CommandCode::INFORMATION_RESPONSE/* code_ */, identifier) ,info_type_(info_type),result_(result) {}


InformationRequestInfoType info_type_{};InformationRequestResult result_{};};


class InformationResponseConnectionlessMtuBuilder : public InformationResponseBuilder { public:  virtual ~InformationResponseConnectionlessMtuBuilder() = default;static std::unique_ptr<InformationResponseConnectionlessMtuBuilder> Create(uint8_t identifier, InformationRequestResult result, uint16_t connectionless_mtu) {auto builder = std::unique_ptr<InformationResponseConnectionlessMtuBuilder>(new InformationResponseConnectionlessMtuBuilder(identifier, result, connectionless_mtu));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {InformationResponseBuilder::SerializeHeader(i);insert(connectionless_mtu_, i,16);}

void SerializeFooter(BitInserter& i ) const {InformationResponseBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + InformationResponseBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + InformationResponseBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit InformationResponseConnectionlessMtuBuilder(uint8_t identifier, InformationRequestResult result, uint16_t connectionless_mtu) :InformationResponseBuilder(identifier, InformationRequestInfoType::CONNECTIONLESS_MTU/* info_type_ */, result) ,connectionless_mtu_(connectionless_mtu) {}


uint16_t connectionless_mtu_{};};


class InformationResponseExtendedFeaturesBuilder : public InformationResponseBuilder { public:  virtual ~InformationResponseExtendedFeaturesBuilder() = default;static std::unique_ptr<InformationResponseExtendedFeaturesBuilder> Create(uint8_t identifier, InformationRequestResult result, uint8_t flow_control_mode, uint8_t retransmission_mode, uint8_t bi_directional_qoS, uint8_t enhanced_retransmission_mode, uint8_t streaming_mode, uint8_t fcs_option, uint8_t extended_flow_specification_for_br_edr, uint8_t fixed_channels, uint8_t extended_window_size, uint8_t unicast_connectionless_data_reception, uint8_t enhanced_credit_based_flow_control_mode) {auto builder = std::unique_ptr<InformationResponseExtendedFeaturesBuilder>(new InformationResponseExtendedFeaturesBuilder(identifier, result, flow_control_mode, retransmission_mode, bi_directional_qoS, enhanced_retransmission_mode, streaming_mode, fcs_option, extended_flow_specification_for_br_edr, fixed_channels, extended_window_size, unicast_connectionless_data_reception, enhanced_credit_based_flow_control_mode));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {InformationResponseBuilder::SerializeHeader(i);insert(flow_control_mode_, i,1);insert(retransmission_mode_, i,1);insert(bi_directional_qoS_, i,1);insert(enhanced_retransmission_mode_, i,1);insert(streaming_mode_, i,1);insert(fcs_option_, i,1);insert(extended_flow_specification_for_br_edr_, i,1);insert(fixed_channels_, i,1);insert(extended_window_size_, i,1);insert(unicast_connectionless_data_reception_, i,1);insert(enhanced_credit_based_flow_control_mode_, i,1);insert(static_cast<uint32_t>(0) /* Reserved */, i, 21 );
}

void SerializeFooter(BitInserter& i ) const {InformationResponseBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + InformationResponseBuilder::BitsOfHeader()  + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 1 + /* Dynamic: */ 0 + /* Bits: */ 21 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + InformationResponseBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit InformationResponseExtendedFeaturesBuilder(uint8_t identifier, InformationRequestResult result, uint8_t flow_control_mode, uint8_t retransmission_mode, uint8_t bi_directional_qoS, uint8_t enhanced_retransmission_mode, uint8_t streaming_mode, uint8_t fcs_option, uint8_t extended_flow_specification_for_br_edr, uint8_t fixed_channels, uint8_t extended_window_size, uint8_t unicast_connectionless_data_reception, uint8_t enhanced_credit_based_flow_control_mode) :InformationResponseBuilder(identifier, InformationRequestInfoType::EXTENDED_FEATURES_SUPPORTED/* info_type_ */, result) ,flow_control_mode_(flow_control_mode),retransmission_mode_(retransmission_mode),bi_directional_qoS_(bi_directional_qoS),enhanced_retransmission_mode_(enhanced_retransmission_mode),streaming_mode_(streaming_mode),fcs_option_(fcs_option),extended_flow_specification_for_br_edr_(extended_flow_specification_for_br_edr),fixed_channels_(fixed_channels),extended_window_size_(extended_window_size),unicast_connectionless_data_reception_(unicast_connectionless_data_reception),enhanced_credit_based_flow_control_mode_(enhanced_credit_based_flow_control_mode) {CheckParameterValues(flow_control_mode_, retransmission_mode_, bi_directional_qoS_, enhanced_retransmission_mode_, streaming_mode_, fcs_option_, extended_flow_specification_for_br_edr_, fixed_channels_, extended_window_size_, unicast_connectionless_data_reception_, enhanced_credit_based_flow_control_mode_);}

void CheckParameterValues(uint8_t flow_control_mode, uint8_t retransmission_mode, uint8_t bi_directional_qoS, uint8_t enhanced_retransmission_mode, uint8_t streaming_mode, uint8_t fcs_option, uint8_t extended_flow_specification_for_br_edr, uint8_t fixed_channels, uint8_t extended_window_size, uint8_t unicast_connectionless_data_reception, uint8_t enhanced_credit_based_flow_control_mode) {ASSERT(flow_control_mode < (static_cast<uint64_t>(1) << 1));ASSERT(retransmission_mode < (static_cast<uint64_t>(1) << 1));ASSERT(bi_directional_qoS < (static_cast<uint64_t>(1) << 1));ASSERT(enhanced_retransmission_mode < (static_cast<uint64_t>(1) << 1));ASSERT(streaming_mode < (static_cast<uint64_t>(1) << 1));ASSERT(fcs_option < (static_cast<uint64_t>(1) << 1));ASSERT(extended_flow_specification_for_br_edr < (static_cast<uint64_t>(1) << 1));ASSERT(fixed_channels < (static_cast<uint64_t>(1) << 1));ASSERT(extended_window_size < (static_cast<uint64_t>(1) << 1));ASSERT(unicast_connectionless_data_reception < (static_cast<uint64_t>(1) << 1));ASSERT(enhanced_credit_based_flow_control_mode < (static_cast<uint64_t>(1) << 1));}

uint8_t flow_control_mode_{};uint8_t retransmission_mode_{};uint8_t bi_directional_qoS_{};uint8_t enhanced_retransmission_mode_{};uint8_t streaming_mode_{};uint8_t fcs_option_{};uint8_t extended_flow_specification_for_br_edr_{};uint8_t fixed_channels_{};uint8_t extended_window_size_{};uint8_t unicast_connectionless_data_reception_{};uint8_t enhanced_credit_based_flow_control_mode_{};};


class InformationResponseFixedChannelsBuilder : public InformationResponseBuilder { public:  virtual ~InformationResponseFixedChannelsBuilder() = default;static std::unique_ptr<InformationResponseFixedChannelsBuilder> Create(uint8_t identifier, InformationRequestResult result, uint64_t fixed_channels) {auto builder = std::unique_ptr<InformationResponseFixedChannelsBuilder>(new InformationResponseFixedChannelsBuilder(identifier, result, fixed_channels));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {InformationResponseBuilder::SerializeHeader(i);insert(fixed_channels_, i,64);}

void SerializeFooter(BitInserter& i ) const {InformationResponseBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + InformationResponseBuilder::BitsOfHeader()  + /* Bits: */ 64 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + InformationResponseBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit InformationResponseFixedChannelsBuilder(uint8_t identifier, InformationRequestResult result, uint64_t fixed_channels) :InformationResponseBuilder(identifier, InformationRequestInfoType::FIXED_CHANNELS_SUPPORTED/* info_type_ */, result) ,fixed_channels_(fixed_channels) {}


uint64_t fixed_channels_{};};


class CreateChannelRequestBuilder : public ControlBuilder { public:  virtual ~CreateChannelRequestBuilder() = default;static std::unique_ptr<CreateChannelRequestBuilder> Create(uint8_t identifier, uint16_t psm, uint16_t source_cid, uint8_t controller_id) {auto builder = std::unique_ptr<CreateChannelRequestBuilder>(new CreateChannelRequestBuilder(identifier, psm, source_cid, controller_id));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(psm_, i,16);insert(source_cid_, i,16);i.insert_byte(controller_id_);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CreateChannelRequestBuilder(uint8_t identifier, uint16_t psm, uint16_t source_cid, uint8_t controller_id) :ControlBuilder(CommandCode::CREATE_CHANNEL_REQUEST/* code_ */, identifier) ,psm_(psm),source_cid_(source_cid),controller_id_(controller_id) {}


uint16_t psm_{};uint16_t source_cid_{};uint8_t controller_id_{};};


class CreateChannelResponseBuilder : public ControlBuilder { public:  virtual ~CreateChannelResponseBuilder() = default;static std::unique_ptr<CreateChannelResponseBuilder> Create(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid, CreateChannelResponseResult result, CreateChannelResponseStatus status) {auto builder = std::unique_ptr<CreateChannelResponseBuilder>(new CreateChannelResponseBuilder(identifier, destination_cid, source_cid, result, status));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(destination_cid_, i,16);insert(source_cid_, i,16);insert(static_cast<uint16_t>(result_), i, 16);insert(static_cast<uint16_t>(status_), i, 16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CreateChannelResponseBuilder(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid, CreateChannelResponseResult result, CreateChannelResponseStatus status) :ControlBuilder(CommandCode::CREATE_CHANNEL_RESPONSE/* code_ */, identifier) ,destination_cid_(destination_cid),source_cid_(source_cid),result_(result),status_(status) {}


uint16_t destination_cid_{};uint16_t source_cid_{};CreateChannelResponseResult result_{};CreateChannelResponseStatus status_{};};


class MoveChannelRequestBuilder : public ControlBuilder { public:  virtual ~MoveChannelRequestBuilder() = default;static std::unique_ptr<MoveChannelRequestBuilder> Create(uint8_t identifier, uint16_t initiator_cid, uint8_t dest_controller_id) {auto builder = std::unique_ptr<MoveChannelRequestBuilder>(new MoveChannelRequestBuilder(identifier, initiator_cid, dest_controller_id));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(initiator_cid_, i,16);i.insert_byte(dest_controller_id_);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit MoveChannelRequestBuilder(uint8_t identifier, uint16_t initiator_cid, uint8_t dest_controller_id) :ControlBuilder(CommandCode::MOVE_CHANNEL_REQUEST/* code_ */, identifier) ,initiator_cid_(initiator_cid),dest_controller_id_(dest_controller_id) {}


uint16_t initiator_cid_{};uint8_t dest_controller_id_{};};


class MoveChannelResponseBuilder : public ControlBuilder { public:  virtual ~MoveChannelResponseBuilder() = default;static std::unique_ptr<MoveChannelResponseBuilder> Create(uint8_t identifier, uint16_t initiator_cid, MoveChannelResponseResult result) {auto builder = std::unique_ptr<MoveChannelResponseBuilder>(new MoveChannelResponseBuilder(identifier, initiator_cid, result));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(initiator_cid_, i,16);insert(static_cast<uint16_t>(result_), i, 16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit MoveChannelResponseBuilder(uint8_t identifier, uint16_t initiator_cid, MoveChannelResponseResult result) :ControlBuilder(CommandCode::MOVE_CHANNEL_RESPONSE/* code_ */, identifier) ,initiator_cid_(initiator_cid),result_(result) {}


uint16_t initiator_cid_{};MoveChannelResponseResult result_{};};


class MoveChannelConfirmationRequestBuilder : public ControlBuilder { public:  virtual ~MoveChannelConfirmationRequestBuilder() = default;static std::unique_ptr<MoveChannelConfirmationRequestBuilder> Create(uint8_t identifier, uint16_t initiator_cid, MoveChannelConfirmationResult result) {auto builder = std::unique_ptr<MoveChannelConfirmationRequestBuilder>(new MoveChannelConfirmationRequestBuilder(identifier, initiator_cid, result));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(initiator_cid_, i,16);insert(static_cast<uint16_t>(result_), i, 16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit MoveChannelConfirmationRequestBuilder(uint8_t identifier, uint16_t initiator_cid, MoveChannelConfirmationResult result) :ControlBuilder(CommandCode::MOVE_CHANNEL_CONFIRMATION_REQUEST/* code_ */, identifier) ,initiator_cid_(initiator_cid),result_(result) {}


uint16_t initiator_cid_{};MoveChannelConfirmationResult result_{};};


class MoveChannelConfirmationResponseBuilder : public ControlBuilder { public:  virtual ~MoveChannelConfirmationResponseBuilder() = default;static std::unique_ptr<MoveChannelConfirmationResponseBuilder> Create(uint8_t identifier, uint16_t initiator_cid) {auto builder = std::unique_ptr<MoveChannelConfirmationResponseBuilder>(new MoveChannelConfirmationResponseBuilder(identifier, initiator_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(initiator_cid_, i,16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit MoveChannelConfirmationResponseBuilder(uint8_t identifier, uint16_t initiator_cid) :ControlBuilder(CommandCode::MOVE_CHANNEL_CONFIRMATION_RESPONSE/* code_ */, identifier) ,initiator_cid_(initiator_cid) {}


uint16_t initiator_cid_{};};


class FlowControlCreditBuilder : public ControlBuilder { public:  virtual ~FlowControlCreditBuilder() = default;static std::unique_ptr<FlowControlCreditBuilder> Create(uint8_t identifier, uint16_t cid, uint16_t credits) {auto builder = std::unique_ptr<FlowControlCreditBuilder>(new FlowControlCreditBuilder(identifier, cid, credits));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(cid_, i,16);insert(credits_, i,16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit FlowControlCreditBuilder(uint8_t identifier, uint16_t cid, uint16_t credits) :ControlBuilder(CommandCode::FLOW_CONTROL_CREDIT/* code_ */, identifier) ,cid_(cid),credits_(credits) {}


uint16_t cid_{};uint16_t credits_{};};


class CreditBasedConnectionRequestBuilder : public ControlBuilder { public:  virtual ~CreditBasedConnectionRequestBuilder() = default;static std::unique_ptr<CreditBasedConnectionRequestBuilder> Create(uint8_t identifier, uint16_t spsm, uint16_t mtu, uint16_t mps, uint16_t initial_credits, const std::vector<uint16_t>& source_cid) {auto builder = std::unique_ptr<CreditBasedConnectionRequestBuilder>(new CreditBasedConnectionRequestBuilder(identifier, spsm, mtu, mps, initial_credits, source_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(spsm_, i,16);insert(mtu_, i,16);insert(mps_, i,16);insert(initial_credits_, i,16);for (const auto& val_ : source_cid_) {insert(val_, i,16);}
}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 0 + /* Dynamic: */ (static_cast<size_t>(source_cid_.size()) * 16);}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CreditBasedConnectionRequestBuilder(uint8_t identifier, uint16_t spsm, uint16_t mtu, uint16_t mps, uint16_t initial_credits, const std::vector<uint16_t>& source_cid) :ControlBuilder(CommandCode::CREDIT_BASED_CONNECTION_REQUEST/* code_ */, identifier) ,spsm_(spsm),mtu_(mtu),mps_(mps),initial_credits_(initial_credits),source_cid_(source_cid) {}


uint16_t spsm_{};uint16_t mtu_{};uint16_t mps_{};uint16_t initial_credits_{};std::vector<uint16_t> source_cid_{};};


class CreditBasedConnectionResponseBuilder : public ControlBuilder { public:  virtual ~CreditBasedConnectionResponseBuilder() = default;static std::unique_ptr<CreditBasedConnectionResponseBuilder> Create(uint8_t identifier, uint16_t mtu, uint16_t mps, uint16_t initial_credits, CreditBasedConnectionResponseResult result, const std::vector<uint16_t>& destination_cid) {auto builder = std::unique_ptr<CreditBasedConnectionResponseBuilder>(new CreditBasedConnectionResponseBuilder(identifier, mtu, mps, initial_credits, result, destination_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(mtu_, i,16);insert(mps_, i,16);insert(initial_credits_, i,16);insert(static_cast<uint16_t>(result_), i, 16);for (const auto& val_ : destination_cid_) {insert(val_, i,16);}
}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 0 + /* Dynamic: */ (static_cast<size_t>(destination_cid_.size()) * 16);}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CreditBasedConnectionResponseBuilder(uint8_t identifier, uint16_t mtu, uint16_t mps, uint16_t initial_credits, CreditBasedConnectionResponseResult result, const std::vector<uint16_t>& destination_cid) :ControlBuilder(CommandCode::CREDIT_BASED_CONNECTION_RESPONSE/* code_ */, identifier) ,mtu_(mtu),mps_(mps),initial_credits_(initial_credits),result_(result),destination_cid_(destination_cid) {}


uint16_t mtu_{};uint16_t mps_{};uint16_t initial_credits_{};CreditBasedConnectionResponseResult result_{};std::vector<uint16_t> destination_cid_{};};


class CreditBasedReconfigureRequestBuilder : public ControlBuilder { public:  virtual ~CreditBasedReconfigureRequestBuilder() = default;static std::unique_ptr<CreditBasedReconfigureRequestBuilder> Create(uint8_t identifier, uint16_t mtu, uint16_t mps, const std::vector<uint16_t>& destination_cid) {auto builder = std::unique_ptr<CreditBasedReconfigureRequestBuilder>(new CreditBasedReconfigureRequestBuilder(identifier, mtu, mps, destination_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(mtu_, i,16);insert(mps_, i,16);for (const auto& val_ : destination_cid_) {insert(val_, i,16);}
}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 0 + /* Dynamic: */ (static_cast<size_t>(destination_cid_.size()) * 16);}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CreditBasedReconfigureRequestBuilder(uint8_t identifier, uint16_t mtu, uint16_t mps, const std::vector<uint16_t>& destination_cid) :ControlBuilder(CommandCode::CREDIT_BASED_RECONFIGURE_REQUEST/* code_ */, identifier) ,mtu_(mtu),mps_(mps),destination_cid_(destination_cid) {}


uint16_t mtu_{};uint16_t mps_{};std::vector<uint16_t> destination_cid_{};};


class CreditBasedReconfigureResponseBuilder : public ControlBuilder { public:  virtual ~CreditBasedReconfigureResponseBuilder() = default;static std::unique_ptr<CreditBasedReconfigureResponseBuilder> Create(uint8_t identifier, CreditBasedReconfigureResponseResult result) {auto builder = std::unique_ptr<CreditBasedReconfigureResponseBuilder>(new CreditBasedReconfigureResponseBuilder(identifier, result));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {ControlBuilder::SerializeHeader(i);insert(static_cast<uint16_t>(result_), i, 16);}

void SerializeFooter(BitInserter& i ) const {ControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + ControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + ControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit CreditBasedReconfigureResponseBuilder(uint8_t identifier, CreditBasedReconfigureResponseResult result) :ControlBuilder(CommandCode::CREDIT_BASED_RECONFIGURE_RESPONSE/* code_ */, identifier) ,result_(result) {}


CreditBasedReconfigureResponseResult result_{};};


class LeControlFrameBuilder : public BasicFrameBuilder { public:  virtual ~LeControlFrameBuilder() = default;static std::unique_ptr<LeControlFrameBuilder> Create(std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<LeControlFrameBuilder>(new LeControlFrameBuilder());builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {BasicFrameBuilder::SerializeHeader(i);}

void SerializeFooter(BitInserter& i ) const {BasicFrameBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + BasicFrameBuilder::BitsOfHeader() ;}

size_t BitsOfFooter() const {return 0 + BasicFrameBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit LeControlFrameBuilder() :BasicFrameBuilder(5/* channel_id_ */)  {}


std::unique_ptr<BasePacketBuilder> payload_{};};


class LeControlBuilder : public PacketBuilder<kLittleEndian> { public:  virtual ~LeControlBuilder() = default;static std::unique_ptr<LeControlBuilder> Create(LeCommandCode code, uint8_t identifier, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<LeControlBuilder>(new LeControlBuilder(code, identifier));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {insert(static_cast<uint8_t>(code_), i, 8);i.insert_byte(identifier_);size_t payload_bytes = GetPayloadSize();ASSERT(payload_bytes < (static_cast<size_t>(1) << 16));insert(static_cast<uint16_t>(payload_bytes), i,16);}

void SerializeFooter(BitInserter&) const {}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 8 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit LeControlBuilder(LeCommandCode code, uint8_t identifier) :code_(code),identifier_(identifier) {}


LeCommandCode code_{};uint8_t identifier_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class LeCommandRejectBuilder : public LeControlBuilder { public:  virtual ~LeCommandRejectBuilder() = default;static std::unique_ptr<LeCommandRejectBuilder> Create(uint8_t identifier, CommandRejectReason reason, std::unique_ptr<BasePacketBuilder> payload) {auto builder = std::unique_ptr<LeCommandRejectBuilder>(new LeCommandRejectBuilder(identifier, reason));builder->payload_ = std::move(payload);return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(static_cast<uint16_t>(reason_), i, 16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);payload_->Serialize(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

size_t GetPayloadSize() const {if (payload_ != nullptr) {return payload_->size();}else { return size() - (BitsOfHeader() + BitsOfFooter()) / 8;};}

public:virtual size_t size() const override {return (BitsOfHeader() / 8)+ payload_->size() + (BitsOfFooter() / 8);}

 protected:
explicit LeCommandRejectBuilder(uint8_t identifier, CommandRejectReason reason) :LeControlBuilder(LeCommandCode::COMMAND_REJECT/* code_ */, identifier) ,reason_(reason) {}


CommandRejectReason reason_{};std::unique_ptr<BasePacketBuilder> payload_{};};


class LeCommandRejectNotUnderstoodBuilder : public LeCommandRejectBuilder { public:  virtual ~LeCommandRejectNotUnderstoodBuilder() = default;static std::unique_ptr<LeCommandRejectNotUnderstoodBuilder> Create(uint8_t identifier) {auto builder = std::unique_ptr<LeCommandRejectNotUnderstoodBuilder>(new LeCommandRejectNotUnderstoodBuilder(identifier));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeCommandRejectBuilder::SerializeHeader(i);}

void SerializeFooter(BitInserter& i ) const {LeCommandRejectBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeCommandRejectBuilder::BitsOfHeader() ;}

size_t BitsOfFooter() const {return 0 + LeCommandRejectBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeCommandRejectNotUnderstoodBuilder(uint8_t identifier) :LeCommandRejectBuilder(identifier, CommandRejectReason::COMMAND_NOT_UNDERSTOOD/* reason_ */)  {}


};


class LeCommandRejectMtuExceededBuilder : public LeCommandRejectBuilder { public:  virtual ~LeCommandRejectMtuExceededBuilder() = default;static std::unique_ptr<LeCommandRejectMtuExceededBuilder> Create(uint8_t identifier, uint16_t actual_mtu) {auto builder = std::unique_ptr<LeCommandRejectMtuExceededBuilder>(new LeCommandRejectMtuExceededBuilder(identifier, actual_mtu));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeCommandRejectBuilder::SerializeHeader(i);insert(actual_mtu_, i,16);}

void SerializeFooter(BitInserter& i ) const {LeCommandRejectBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeCommandRejectBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeCommandRejectBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeCommandRejectMtuExceededBuilder(uint8_t identifier, uint16_t actual_mtu) :LeCommandRejectBuilder(identifier, CommandRejectReason::SIGNALING_MTU_EXCEEDED/* reason_ */) ,actual_mtu_(actual_mtu) {}


uint16_t actual_mtu_{};};


class LeCommandRejectInvalidCidBuilder : public LeCommandRejectBuilder { public:  virtual ~LeCommandRejectInvalidCidBuilder() = default;static std::unique_ptr<LeCommandRejectInvalidCidBuilder> Create(uint8_t identifier, uint16_t local_channel, uint16_t remote_channel) {auto builder = std::unique_ptr<LeCommandRejectInvalidCidBuilder>(new LeCommandRejectInvalidCidBuilder(identifier, local_channel, remote_channel));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeCommandRejectBuilder::SerializeHeader(i);insert(local_channel_, i,16);insert(remote_channel_, i,16);}

void SerializeFooter(BitInserter& i ) const {LeCommandRejectBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeCommandRejectBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeCommandRejectBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeCommandRejectInvalidCidBuilder(uint8_t identifier, uint16_t local_channel, uint16_t remote_channel) :LeCommandRejectBuilder(identifier, CommandRejectReason::INVALID_CID_IN_REQUEST/* reason_ */) ,local_channel_(local_channel),remote_channel_(remote_channel) {}


uint16_t local_channel_{};uint16_t remote_channel_{};};


class LeDisconnectionRequestBuilder : public LeControlBuilder { public:  virtual ~LeDisconnectionRequestBuilder() = default;static std::unique_ptr<LeDisconnectionRequestBuilder> Create(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid) {auto builder = std::unique_ptr<LeDisconnectionRequestBuilder>(new LeDisconnectionRequestBuilder(identifier, destination_cid, source_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(destination_cid_, i,16);insert(source_cid_, i,16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeDisconnectionRequestBuilder(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid) :LeControlBuilder(LeCommandCode::DISCONNECTION_REQUEST/* code_ */, identifier) ,destination_cid_(destination_cid),source_cid_(source_cid) {}


uint16_t destination_cid_{};uint16_t source_cid_{};};


class LeDisconnectionResponseBuilder : public LeControlBuilder { public:  virtual ~LeDisconnectionResponseBuilder() = default;static std::unique_ptr<LeDisconnectionResponseBuilder> Create(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid) {auto builder = std::unique_ptr<LeDisconnectionResponseBuilder>(new LeDisconnectionResponseBuilder(identifier, destination_cid, source_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(destination_cid_, i,16);insert(source_cid_, i,16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeDisconnectionResponseBuilder(uint8_t identifier, uint16_t destination_cid, uint16_t source_cid) :LeControlBuilder(LeCommandCode::DISCONNECTION_RESPONSE/* code_ */, identifier) ,destination_cid_(destination_cid),source_cid_(source_cid) {}


uint16_t destination_cid_{};uint16_t source_cid_{};};


class ConnectionParameterUpdateRequestBuilder : public LeControlBuilder { public:  virtual ~ConnectionParameterUpdateRequestBuilder() = default;static std::unique_ptr<ConnectionParameterUpdateRequestBuilder> Create(uint8_t identifier, uint16_t interval_min, uint16_t interval_max, uint16_t peripheral_latency, uint16_t timeout_multiplier) {auto builder = std::unique_ptr<ConnectionParameterUpdateRequestBuilder>(new ConnectionParameterUpdateRequestBuilder(identifier, interval_min, interval_max, peripheral_latency, timeout_multiplier));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(interval_min_, i,16);insert(interval_max_, i,16);insert(peripheral_latency_, i,16);insert(timeout_multiplier_, i,16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit ConnectionParameterUpdateRequestBuilder(uint8_t identifier, uint16_t interval_min, uint16_t interval_max, uint16_t peripheral_latency, uint16_t timeout_multiplier) :LeControlBuilder(LeCommandCode::CONNECTION_PARAMETER_UPDATE_REQUEST/* code_ */, identifier) ,interval_min_(interval_min),interval_max_(interval_max),peripheral_latency_(peripheral_latency),timeout_multiplier_(timeout_multiplier) {}


uint16_t interval_min_{};uint16_t interval_max_{};uint16_t peripheral_latency_{};uint16_t timeout_multiplier_{};};


class ConnectionParameterUpdateResponseBuilder : public LeControlBuilder { public:  virtual ~ConnectionParameterUpdateResponseBuilder() = default;static std::unique_ptr<ConnectionParameterUpdateResponseBuilder> Create(uint8_t identifier, ConnectionParameterUpdateResponseResult result) {auto builder = std::unique_ptr<ConnectionParameterUpdateResponseBuilder>(new ConnectionParameterUpdateResponseBuilder(identifier, result));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(static_cast<uint16_t>(result_), i, 16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit ConnectionParameterUpdateResponseBuilder(uint8_t identifier, ConnectionParameterUpdateResponseResult result) :LeControlBuilder(LeCommandCode::CONNECTION_PARAMETER_UPDATE_RESPONSE/* code_ */, identifier) ,result_(result) {}


ConnectionParameterUpdateResponseResult result_{};};


class LeCreditBasedConnectionRequestBuilder : public LeControlBuilder { public:  virtual ~LeCreditBasedConnectionRequestBuilder() = default;static std::unique_ptr<LeCreditBasedConnectionRequestBuilder> Create(uint8_t identifier, uint16_t le_psm, uint16_t source_cid, uint16_t mtu, uint16_t mps, uint16_t initial_credits) {auto builder = std::unique_ptr<LeCreditBasedConnectionRequestBuilder>(new LeCreditBasedConnectionRequestBuilder(identifier, le_psm, source_cid, mtu, mps, initial_credits));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(le_psm_, i,16);insert(source_cid_, i,16);insert(mtu_, i,16);insert(mps_, i,16);insert(initial_credits_, i,16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeCreditBasedConnectionRequestBuilder(uint8_t identifier, uint16_t le_psm, uint16_t source_cid, uint16_t mtu, uint16_t mps, uint16_t initial_credits) :LeControlBuilder(LeCommandCode::LE_CREDIT_BASED_CONNECTION_REQUEST/* code_ */, identifier) ,le_psm_(le_psm),source_cid_(source_cid),mtu_(mtu),mps_(mps),initial_credits_(initial_credits) {}


uint16_t le_psm_{};uint16_t source_cid_{};uint16_t mtu_{};uint16_t mps_{};uint16_t initial_credits_{};};


class LeCreditBasedConnectionResponseBuilder : public LeControlBuilder { public:  virtual ~LeCreditBasedConnectionResponseBuilder() = default;static std::unique_ptr<LeCreditBasedConnectionResponseBuilder> Create(uint8_t identifier, uint16_t destination_cid, uint16_t mtu, uint16_t mps, uint16_t initial_credits, LeCreditBasedConnectionResponseResult result) {auto builder = std::unique_ptr<LeCreditBasedConnectionResponseBuilder>(new LeCreditBasedConnectionResponseBuilder(identifier, destination_cid, mtu, mps, initial_credits, result));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(destination_cid_, i,16);insert(mtu_, i,16);insert(mps_, i,16);insert(initial_credits_, i,16);insert(static_cast<uint16_t>(result_), i, 16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeCreditBasedConnectionResponseBuilder(uint8_t identifier, uint16_t destination_cid, uint16_t mtu, uint16_t mps, uint16_t initial_credits, LeCreditBasedConnectionResponseResult result) :LeControlBuilder(LeCommandCode::LE_CREDIT_BASED_CONNECTION_RESPONSE/* code_ */, identifier) ,destination_cid_(destination_cid),mtu_(mtu),mps_(mps),initial_credits_(initial_credits),result_(result) {}


uint16_t destination_cid_{};uint16_t mtu_{};uint16_t mps_{};uint16_t initial_credits_{};LeCreditBasedConnectionResponseResult result_{};};


class LeFlowControlCreditBuilder : public LeControlBuilder { public:  virtual ~LeFlowControlCreditBuilder() = default;static std::unique_ptr<LeFlowControlCreditBuilder> Create(uint8_t identifier, uint16_t cid, uint16_t credits) {auto builder = std::unique_ptr<LeFlowControlCreditBuilder>(new LeFlowControlCreditBuilder(identifier, cid, credits));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(cid_, i,16);insert(credits_, i,16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeFlowControlCreditBuilder(uint8_t identifier, uint16_t cid, uint16_t credits) :LeControlBuilder(LeCommandCode::LE_FLOW_CONTROL_CREDIT/* code_ */, identifier) ,cid_(cid),credits_(credits) {}


uint16_t cid_{};uint16_t credits_{};};


class LeEnhancedCreditBasedConnectionRequestBuilder : public LeControlBuilder { public:  virtual ~LeEnhancedCreditBasedConnectionRequestBuilder() = default;static std::unique_ptr<LeEnhancedCreditBasedConnectionRequestBuilder> Create(uint8_t identifier, uint16_t spsm, uint16_t mtu, uint16_t mps, uint16_t initial_credits, const std::vector<uint16_t>& source_cid) {auto builder = std::unique_ptr<LeEnhancedCreditBasedConnectionRequestBuilder>(new LeEnhancedCreditBasedConnectionRequestBuilder(identifier, spsm, mtu, mps, initial_credits, source_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(spsm_, i,16);insert(mtu_, i,16);insert(mps_, i,16);insert(initial_credits_, i,16);for (const auto& val_ : source_cid_) {insert(val_, i,16);}
}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 0 + /* Dynamic: */ (static_cast<size_t>(source_cid_.size()) * 16);}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeEnhancedCreditBasedConnectionRequestBuilder(uint8_t identifier, uint16_t spsm, uint16_t mtu, uint16_t mps, uint16_t initial_credits, const std::vector<uint16_t>& source_cid) :LeControlBuilder(LeCommandCode::CREDIT_BASED_CONNECTION_REQUEST/* code_ */, identifier) ,spsm_(spsm),mtu_(mtu),mps_(mps),initial_credits_(initial_credits),source_cid_(source_cid) {}


uint16_t spsm_{};uint16_t mtu_{};uint16_t mps_{};uint16_t initial_credits_{};std::vector<uint16_t> source_cid_{};};


class LeEnhancedCreditBasedConnectionResponseBuilder : public LeControlBuilder { public:  virtual ~LeEnhancedCreditBasedConnectionResponseBuilder() = default;static std::unique_ptr<LeEnhancedCreditBasedConnectionResponseBuilder> Create(uint8_t identifier, uint16_t mtu, uint16_t mps, uint16_t initial_credits, CreditBasedConnectionResponseResult result, const std::vector<uint16_t>& destination_cid) {auto builder = std::unique_ptr<LeEnhancedCreditBasedConnectionResponseBuilder>(new LeEnhancedCreditBasedConnectionResponseBuilder(identifier, mtu, mps, initial_credits, result, destination_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(mtu_, i,16);insert(mps_, i,16);insert(initial_credits_, i,16);insert(static_cast<uint16_t>(result_), i, 16);for (const auto& val_ : destination_cid_) {insert(val_, i,16);}
}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 0 + /* Dynamic: */ (static_cast<size_t>(destination_cid_.size()) * 16);}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeEnhancedCreditBasedConnectionResponseBuilder(uint8_t identifier, uint16_t mtu, uint16_t mps, uint16_t initial_credits, CreditBasedConnectionResponseResult result, const std::vector<uint16_t>& destination_cid) :LeControlBuilder(LeCommandCode::CREDIT_BASED_CONNECTION_RESPONSE/* code_ */, identifier) ,mtu_(mtu),mps_(mps),initial_credits_(initial_credits),result_(result),destination_cid_(destination_cid) {}


uint16_t mtu_{};uint16_t mps_{};uint16_t initial_credits_{};CreditBasedConnectionResponseResult result_{};std::vector<uint16_t> destination_cid_{};};


class LeEnhancedCreditBasedReconfigureRequestBuilder : public LeControlBuilder { public:  virtual ~LeEnhancedCreditBasedReconfigureRequestBuilder() = default;static std::unique_ptr<LeEnhancedCreditBasedReconfigureRequestBuilder> Create(uint8_t identifier, uint16_t mtu, uint16_t mps, const std::vector<uint16_t>& destination_cid) {auto builder = std::unique_ptr<LeEnhancedCreditBasedReconfigureRequestBuilder>(new LeEnhancedCreditBasedReconfigureRequestBuilder(identifier, mtu, mps, destination_cid));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(mtu_, i,16);insert(mps_, i,16);for (const auto& val_ : destination_cid_) {insert(val_, i,16);}
}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 16 + /* Dynamic: */ 0 + /* Bits: */ 0 + /* Dynamic: */ (static_cast<size_t>(destination_cid_.size()) * 16);}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeEnhancedCreditBasedReconfigureRequestBuilder(uint8_t identifier, uint16_t mtu, uint16_t mps, const std::vector<uint16_t>& destination_cid) :LeControlBuilder(LeCommandCode::CREDIT_BASED_RECONFIGURE_REQUEST/* code_ */, identifier) ,mtu_(mtu),mps_(mps),destination_cid_(destination_cid) {}


uint16_t mtu_{};uint16_t mps_{};std::vector<uint16_t> destination_cid_{};};


class LeEnhancedCreditBasedReconfigureResponseBuilder : public LeControlBuilder { public:  virtual ~LeEnhancedCreditBasedReconfigureResponseBuilder() = default;static std::unique_ptr<LeEnhancedCreditBasedReconfigureResponseBuilder> Create(uint8_t identifier, CreditBasedReconfigureResponseResult result) {auto builder = std::unique_ptr<LeEnhancedCreditBasedReconfigureResponseBuilder>(new LeEnhancedCreditBasedReconfigureResponseBuilder(identifier, result));return builder;}

protected:void SerializeHeader(BitInserter& i ) const {LeControlBuilder::SerializeHeader(i);insert(static_cast<uint16_t>(result_), i, 16);}

void SerializeFooter(BitInserter& i ) const {LeControlBuilder::SerializeFooter(i);}

public:virtual void Serialize(BitInserter& i) const override {SerializeHeader(i);SerializeFooter(i);}

protected:size_t BitsOfHeader() const {return 0 + LeControlBuilder::BitsOfHeader()  + /* Bits: */ 16 + /* Dynamic: */ 0;}

size_t BitsOfFooter() const {return 0 + LeControlBuilder::BitsOfFooter() ;}

public:virtual size_t size() const override {return (BitsOfHeader() / 8) + (BitsOfFooter() / 8);}

 protected:
explicit LeEnhancedCreditBasedReconfigureResponseBuilder(uint8_t identifier, CreditBasedReconfigureResponseResult result) :LeControlBuilder(LeCommandCode::CREDIT_BASED_RECONFIGURE_RESPONSE/* code_ */, identifier) ,result_(result) {}


CreditBasedReconfigureResponseResult result_{};};


}  //namespace l2cap
}  //namespace bluetooth
