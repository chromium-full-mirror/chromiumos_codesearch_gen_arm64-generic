// This file is generated. Do not edit
// @generated

// https://github.com/Manishearth/rust-clippy/issues/702
#![allow(unknown_lints)]
#![allow(clippy::all)]

#![cfg_attr(rustfmt, rustfmt_skip)]

#![allow(box_pointers)]
#![allow(dead_code)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(trivial_casts)]
#![allow(unsafe_code)]
#![allow(unused_imports)]
#![allow(unused_results)]

const METHOD_CONTROLLER_FACADE_GET_MAC_ADDRESS: ::grpcio::Method<super::empty::Empty, super::common::BluetoothAddress> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/GetMacAddress",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_WRITE_LOCAL_NAME: ::grpcio::Method<super::controller_facade::NameMsg, super::empty::Empty> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/WriteLocalName",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_GET_LOCAL_NAME: ::grpcio::Method<super::empty::Empty, super::controller_facade::NameMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/GetLocalName",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_IS_SUPPORTED_COMMAND: ::grpcio::Method<super::controller_facade::OpCodeMsg, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/IsSupportedCommand",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_GET_LE_NUMBER_OF_SUPPORTED_ADVERTISING_SETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SingleValueMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/GetLeNumberOfSupportedAdvertisingSets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_SIMPLE_PAIRING: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsSimplePairing",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_SECURE_CONNECTIONS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsSecureConnections",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_SIMULTANEOUS_LE_BR_EDR: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsSimultaneousLeBrEdr",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_INTERLACED_INQUIRY_SCAN: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsInterlacedInquiryScan",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_RSSI_WITH_INQUIRY_RESULTS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsRssiWithInquiryResults",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_EXTENDED_INQUIRY_RESPONSE: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsExtendedInquiryResponse",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_ROLE_SWITCH: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsRoleSwitch",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/Supports3SlotPackets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS5_SLOT_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/Supports5SlotPackets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_CLASSIC2M_PHY: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsClassic2mPhy",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_CLASSIC3M_PHY: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsClassic3mPhy",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_EDR_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/Supports3SlotEdrPackets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS5_SLOT_EDR_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/Supports5SlotEdrPackets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_SCO: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsSco",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_HV2_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsHv2Packets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_HV3_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsHv3Packets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_EV3_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsEv3Packets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_EV4_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsEv4Packets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_EV5_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsEv5Packets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_ESCO2M_PHY: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsEsco2mPhy",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_ESCO3M_PHY: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsEsco3mPhy",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_ESCO_EDR_PACKETS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/Supports3SlotEscoEdrPackets",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_HOLD_MODE: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsHoldMode",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_SNIFF_MODE: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsSniffMode",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_PARK_MODE: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsParkMode",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_NON_FLUSHABLE_PB: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsNonFlushablePb",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_SNIFF_SUBRATING: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsSniffSubrating",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_ENCRYPTION_PAUSE: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsEncryptionPause",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBle",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ENCRYPTION: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleEncryption",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_PARAMETERS_REQUEST: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleConnectionParametersRequest",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_REJECT: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleExtendedReject",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIPHERAL_INITIATED_FEATURES_EXCHANGE: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePeripheralInitiatedFeaturesExchange",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PING: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePing",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_DATA_PACKET_LENGTH_EXTENSION: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleDataPacketLengthExtension",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PRIVACY: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePrivacy",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_SCANNER_FILTER_POLICIES: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleExtendedScannerFilterPolicies",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE2M_PHY: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBle2mPhy",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_STABLE_MODULATION_INDEX_TX: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleStableModulationIndexTx",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_STABLE_MODULATION_INDEX_RX: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleStableModulationIndexRx",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CODED_PHY: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleCodedPhy",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_ADVERTISING: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleExtendedAdvertising",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePeriodicAdvertising",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CHANNEL_SELECTION_ALGORITHM2: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleChannelSelectionAlgorithm2",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CLASS1: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePowerClass1",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_MINIMUM_USED_CHANNELS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleMinimumUsedChannels",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_CTE_REQUEST: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleConnectionCteRequest",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_CTE_RESPONSE: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleConnectionCteResponse",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTIONLESS_CTE_TRANSMITTER: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleConnectionlessCteTransmitter",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTIONLESS_CTE_RECEIVER: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleConnectionlessCteReceiver",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ANTENNA_SWITCHING_DURING_CTE_TX: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleAntennaSwitchingDuringCteTx",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ANTENNA_SWITCHING_DURING_CTE_RX: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleAntennaSwitchingDuringCteRx",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_RECEIVING_CONSTANT_TONE_EXTENSIONS: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleReceivingConstantToneExtensions",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_SYNC_TRANSFER_SENDER: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePeriodicAdvertisingSyncTransferSender",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_SYNC_TRANSFER_RECIPIENT: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePeriodicAdvertisingSyncTransferRecipient",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_SLEEP_CLOCK_ACCURACY_UPDATES: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleSleepClockAccuracyUpdates",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_REMOTE_PUBLIC_KEY_VALIDATION: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleRemotePublicKeyValidation",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTED_ISOCHRONOUS_STREAM_CENTRAL: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleConnectedIsochronousStreamCentral",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTED_ISOCHRONOUS_STREAM_PERIPHERAL: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleConnectedIsochronousStreamPeripheral",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ISOCHRONOUS_BROADCASTER: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleIsochronousBroadcaster",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_SYNCHRONIZED_RECEIVER: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleSynchronizedReceiver",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ISOCHRONOUS_CHANNELS_HOST_SUPPORT: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBleIsochronousChannelsHostSupport",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CONTROL_REQUEST: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePowerControlRequest",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CHANGE_INDICATION: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePowerChangeIndication",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PATH_LOSS_MONITORING: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePathLossMonitoring",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_ADI: ::grpcio::Method<super::empty::Empty, super::controller_facade::SupportedMsg> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/blueberry.facade.hci.ControllerFacade/SupportsBlePeriodicAdvertisingAdi",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct ControllerFacadeClient {
    client: ::grpcio::Client,
}

impl ControllerFacadeClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        ControllerFacadeClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn get_mac_address_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::common::BluetoothAddress> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_GET_MAC_ADDRESS, req, opt)
    }

    pub fn get_mac_address(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::common::BluetoothAddress> {
        self.get_mac_address_opt(req, ::grpcio::CallOption::default())
    }

    pub fn get_mac_address_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::common::BluetoothAddress>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_GET_MAC_ADDRESS, req, opt)
    }

    pub fn get_mac_address_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::common::BluetoothAddress>> {
        self.get_mac_address_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn write_local_name_opt(&self, req: &super::controller_facade::NameMsg, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::empty::Empty> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_WRITE_LOCAL_NAME, req, opt)
    }

    pub fn write_local_name(&self, req: &super::controller_facade::NameMsg) -> ::grpcio::Result<super::empty::Empty> {
        self.write_local_name_opt(req, ::grpcio::CallOption::default())
    }

    pub fn write_local_name_async_opt(&self, req: &super::controller_facade::NameMsg, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::empty::Empty>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_WRITE_LOCAL_NAME, req, opt)
    }

    pub fn write_local_name_async(&self, req: &super::controller_facade::NameMsg) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::empty::Empty>> {
        self.write_local_name_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn get_local_name_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::NameMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_GET_LOCAL_NAME, req, opt)
    }

    pub fn get_local_name(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::NameMsg> {
        self.get_local_name_opt(req, ::grpcio::CallOption::default())
    }

    pub fn get_local_name_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::NameMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_GET_LOCAL_NAME, req, opt)
    }

    pub fn get_local_name_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::NameMsg>> {
        self.get_local_name_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn is_supported_command_opt(&self, req: &super::controller_facade::OpCodeMsg, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_IS_SUPPORTED_COMMAND, req, opt)
    }

    pub fn is_supported_command(&self, req: &super::controller_facade::OpCodeMsg) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.is_supported_command_opt(req, ::grpcio::CallOption::default())
    }

    pub fn is_supported_command_async_opt(&self, req: &super::controller_facade::OpCodeMsg, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_IS_SUPPORTED_COMMAND, req, opt)
    }

    pub fn is_supported_command_async(&self, req: &super::controller_facade::OpCodeMsg) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.is_supported_command_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn get_le_number_of_supported_advertising_sets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SingleValueMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_GET_LE_NUMBER_OF_SUPPORTED_ADVERTISING_SETS, req, opt)
    }

    pub fn get_le_number_of_supported_advertising_sets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SingleValueMsg> {
        self.get_le_number_of_supported_advertising_sets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn get_le_number_of_supported_advertising_sets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SingleValueMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_GET_LE_NUMBER_OF_SUPPORTED_ADVERTISING_SETS, req, opt)
    }

    pub fn get_le_number_of_supported_advertising_sets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SingleValueMsg>> {
        self.get_le_number_of_supported_advertising_sets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_simple_pairing_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_SIMPLE_PAIRING, req, opt)
    }

    pub fn supports_simple_pairing(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_simple_pairing_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_simple_pairing_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_SIMPLE_PAIRING, req, opt)
    }

    pub fn supports_simple_pairing_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_simple_pairing_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_secure_connections_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_SECURE_CONNECTIONS, req, opt)
    }

    pub fn supports_secure_connections(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_secure_connections_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_secure_connections_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_SECURE_CONNECTIONS, req, opt)
    }

    pub fn supports_secure_connections_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_secure_connections_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_simultaneous_le_br_edr_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_SIMULTANEOUS_LE_BR_EDR, req, opt)
    }

    pub fn supports_simultaneous_le_br_edr(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_simultaneous_le_br_edr_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_simultaneous_le_br_edr_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_SIMULTANEOUS_LE_BR_EDR, req, opt)
    }

    pub fn supports_simultaneous_le_br_edr_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_simultaneous_le_br_edr_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_interlaced_inquiry_scan_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_INTERLACED_INQUIRY_SCAN, req, opt)
    }

    pub fn supports_interlaced_inquiry_scan(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_interlaced_inquiry_scan_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_interlaced_inquiry_scan_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_INTERLACED_INQUIRY_SCAN, req, opt)
    }

    pub fn supports_interlaced_inquiry_scan_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_interlaced_inquiry_scan_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_rssi_with_inquiry_results_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_RSSI_WITH_INQUIRY_RESULTS, req, opt)
    }

    pub fn supports_rssi_with_inquiry_results(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_rssi_with_inquiry_results_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_rssi_with_inquiry_results_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_RSSI_WITH_INQUIRY_RESULTS, req, opt)
    }

    pub fn supports_rssi_with_inquiry_results_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_rssi_with_inquiry_results_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_extended_inquiry_response_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_EXTENDED_INQUIRY_RESPONSE, req, opt)
    }

    pub fn supports_extended_inquiry_response(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_extended_inquiry_response_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_extended_inquiry_response_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_EXTENDED_INQUIRY_RESPONSE, req, opt)
    }

    pub fn supports_extended_inquiry_response_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_extended_inquiry_response_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_role_switch_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_ROLE_SWITCH, req, opt)
    }

    pub fn supports_role_switch(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_role_switch_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_role_switch_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_ROLE_SWITCH, req, opt)
    }

    pub fn supports_role_switch_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_role_switch_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports3_slot_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_PACKETS, req, opt)
    }

    pub fn supports3_slot_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports3_slot_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports3_slot_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_PACKETS, req, opt)
    }

    pub fn supports3_slot_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports3_slot_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports5_slot_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS5_SLOT_PACKETS, req, opt)
    }

    pub fn supports5_slot_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports5_slot_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports5_slot_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS5_SLOT_PACKETS, req, opt)
    }

    pub fn supports5_slot_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports5_slot_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_classic2m_phy_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_CLASSIC2M_PHY, req, opt)
    }

    pub fn supports_classic2m_phy(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_classic2m_phy_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_classic2m_phy_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_CLASSIC2M_PHY, req, opt)
    }

    pub fn supports_classic2m_phy_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_classic2m_phy_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_classic3m_phy_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_CLASSIC3M_PHY, req, opt)
    }

    pub fn supports_classic3m_phy(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_classic3m_phy_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_classic3m_phy_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_CLASSIC3M_PHY, req, opt)
    }

    pub fn supports_classic3m_phy_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_classic3m_phy_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports3_slot_edr_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_EDR_PACKETS, req, opt)
    }

    pub fn supports3_slot_edr_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports3_slot_edr_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports3_slot_edr_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_EDR_PACKETS, req, opt)
    }

    pub fn supports3_slot_edr_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports3_slot_edr_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports5_slot_edr_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS5_SLOT_EDR_PACKETS, req, opt)
    }

    pub fn supports5_slot_edr_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports5_slot_edr_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports5_slot_edr_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS5_SLOT_EDR_PACKETS, req, opt)
    }

    pub fn supports5_slot_edr_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports5_slot_edr_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_sco_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_SCO, req, opt)
    }

    pub fn supports_sco(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_sco_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_sco_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_SCO, req, opt)
    }

    pub fn supports_sco_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_sco_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_hv2_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_HV2_PACKETS, req, opt)
    }

    pub fn supports_hv2_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_hv2_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_hv2_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_HV2_PACKETS, req, opt)
    }

    pub fn supports_hv2_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_hv2_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_hv3_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_HV3_PACKETS, req, opt)
    }

    pub fn supports_hv3_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_hv3_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_hv3_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_HV3_PACKETS, req, opt)
    }

    pub fn supports_hv3_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_hv3_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ev3_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV3_PACKETS, req, opt)
    }

    pub fn supports_ev3_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ev3_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ev3_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV3_PACKETS, req, opt)
    }

    pub fn supports_ev3_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ev3_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ev4_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV4_PACKETS, req, opt)
    }

    pub fn supports_ev4_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ev4_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ev4_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV4_PACKETS, req, opt)
    }

    pub fn supports_ev4_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ev4_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ev5_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV5_PACKETS, req, opt)
    }

    pub fn supports_ev5_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ev5_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ev5_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV5_PACKETS, req, opt)
    }

    pub fn supports_ev5_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ev5_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_esco2m_phy_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_ESCO2M_PHY, req, opt)
    }

    pub fn supports_esco2m_phy(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_esco2m_phy_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_esco2m_phy_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_ESCO2M_PHY, req, opt)
    }

    pub fn supports_esco2m_phy_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_esco2m_phy_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_esco3m_phy_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_ESCO3M_PHY, req, opt)
    }

    pub fn supports_esco3m_phy(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_esco3m_phy_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_esco3m_phy_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_ESCO3M_PHY, req, opt)
    }

    pub fn supports_esco3m_phy_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_esco3m_phy_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports3_slot_esco_edr_packets_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_ESCO_EDR_PACKETS, req, opt)
    }

    pub fn supports3_slot_esco_edr_packets(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports3_slot_esco_edr_packets_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports3_slot_esco_edr_packets_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_ESCO_EDR_PACKETS, req, opt)
    }

    pub fn supports3_slot_esco_edr_packets_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports3_slot_esco_edr_packets_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_hold_mode_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_HOLD_MODE, req, opt)
    }

    pub fn supports_hold_mode(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_hold_mode_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_hold_mode_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_HOLD_MODE, req, opt)
    }

    pub fn supports_hold_mode_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_hold_mode_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_sniff_mode_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_SNIFF_MODE, req, opt)
    }

    pub fn supports_sniff_mode(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_sniff_mode_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_sniff_mode_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_SNIFF_MODE, req, opt)
    }

    pub fn supports_sniff_mode_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_sniff_mode_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_park_mode_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_PARK_MODE, req, opt)
    }

    pub fn supports_park_mode(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_park_mode_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_park_mode_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_PARK_MODE, req, opt)
    }

    pub fn supports_park_mode_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_park_mode_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_non_flushable_pb_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_NON_FLUSHABLE_PB, req, opt)
    }

    pub fn supports_non_flushable_pb(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_non_flushable_pb_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_non_flushable_pb_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_NON_FLUSHABLE_PB, req, opt)
    }

    pub fn supports_non_flushable_pb_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_non_flushable_pb_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_sniff_subrating_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_SNIFF_SUBRATING, req, opt)
    }

    pub fn supports_sniff_subrating(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_sniff_subrating_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_sniff_subrating_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_SNIFF_SUBRATING, req, opt)
    }

    pub fn supports_sniff_subrating_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_sniff_subrating_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_encryption_pause_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_ENCRYPTION_PAUSE, req, opt)
    }

    pub fn supports_encryption_pause(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_encryption_pause_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_encryption_pause_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_ENCRYPTION_PAUSE, req, opt)
    }

    pub fn supports_encryption_pause_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_encryption_pause_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE, req, opt)
    }

    pub fn supports_ble(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE, req, opt)
    }

    pub fn supports_ble_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_encryption_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ENCRYPTION, req, opt)
    }

    pub fn supports_ble_encryption(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_encryption_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_encryption_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ENCRYPTION, req, opt)
    }

    pub fn supports_ble_encryption_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_encryption_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connection_parameters_request_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_PARAMETERS_REQUEST, req, opt)
    }

    pub fn supports_ble_connection_parameters_request(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_connection_parameters_request_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connection_parameters_request_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_PARAMETERS_REQUEST, req, opt)
    }

    pub fn supports_ble_connection_parameters_request_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_connection_parameters_request_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_extended_reject_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_REJECT, req, opt)
    }

    pub fn supports_ble_extended_reject(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_extended_reject_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_extended_reject_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_REJECT, req, opt)
    }

    pub fn supports_ble_extended_reject_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_extended_reject_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_peripheral_initiated_features_exchange_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIPHERAL_INITIATED_FEATURES_EXCHANGE, req, opt)
    }

    pub fn supports_ble_peripheral_initiated_features_exchange(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_peripheral_initiated_features_exchange_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_peripheral_initiated_features_exchange_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIPHERAL_INITIATED_FEATURES_EXCHANGE, req, opt)
    }

    pub fn supports_ble_peripheral_initiated_features_exchange_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_peripheral_initiated_features_exchange_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_ping_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PING, req, opt)
    }

    pub fn supports_ble_ping(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_ping_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_ping_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PING, req, opt)
    }

    pub fn supports_ble_ping_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_ping_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_data_packet_length_extension_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_DATA_PACKET_LENGTH_EXTENSION, req, opt)
    }

    pub fn supports_ble_data_packet_length_extension(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_data_packet_length_extension_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_data_packet_length_extension_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_DATA_PACKET_LENGTH_EXTENSION, req, opt)
    }

    pub fn supports_ble_data_packet_length_extension_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_data_packet_length_extension_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_privacy_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PRIVACY, req, opt)
    }

    pub fn supports_ble_privacy(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_privacy_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_privacy_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PRIVACY, req, opt)
    }

    pub fn supports_ble_privacy_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_privacy_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_extended_scanner_filter_policies_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_SCANNER_FILTER_POLICIES, req, opt)
    }

    pub fn supports_ble_extended_scanner_filter_policies(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_extended_scanner_filter_policies_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_extended_scanner_filter_policies_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_SCANNER_FILTER_POLICIES, req, opt)
    }

    pub fn supports_ble_extended_scanner_filter_policies_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_extended_scanner_filter_policies_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble2m_phy_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE2M_PHY, req, opt)
    }

    pub fn supports_ble2m_phy(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble2m_phy_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble2m_phy_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE2M_PHY, req, opt)
    }

    pub fn supports_ble2m_phy_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble2m_phy_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_stable_modulation_index_tx_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_STABLE_MODULATION_INDEX_TX, req, opt)
    }

    pub fn supports_ble_stable_modulation_index_tx(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_stable_modulation_index_tx_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_stable_modulation_index_tx_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_STABLE_MODULATION_INDEX_TX, req, opt)
    }

    pub fn supports_ble_stable_modulation_index_tx_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_stable_modulation_index_tx_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_stable_modulation_index_rx_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_STABLE_MODULATION_INDEX_RX, req, opt)
    }

    pub fn supports_ble_stable_modulation_index_rx(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_stable_modulation_index_rx_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_stable_modulation_index_rx_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_STABLE_MODULATION_INDEX_RX, req, opt)
    }

    pub fn supports_ble_stable_modulation_index_rx_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_stable_modulation_index_rx_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_coded_phy_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CODED_PHY, req, opt)
    }

    pub fn supports_ble_coded_phy(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_coded_phy_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_coded_phy_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CODED_PHY, req, opt)
    }

    pub fn supports_ble_coded_phy_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_coded_phy_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_extended_advertising_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_ADVERTISING, req, opt)
    }

    pub fn supports_ble_extended_advertising(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_extended_advertising_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_extended_advertising_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_ADVERTISING, req, opt)
    }

    pub fn supports_ble_extended_advertising_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_extended_advertising_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_periodic_advertising_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING, req, opt)
    }

    pub fn supports_ble_periodic_advertising(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_periodic_advertising_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_periodic_advertising_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING, req, opt)
    }

    pub fn supports_ble_periodic_advertising_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_periodic_advertising_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_channel_selection_algorithm2_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CHANNEL_SELECTION_ALGORITHM2, req, opt)
    }

    pub fn supports_ble_channel_selection_algorithm2(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_channel_selection_algorithm2_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_channel_selection_algorithm2_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CHANNEL_SELECTION_ALGORITHM2, req, opt)
    }

    pub fn supports_ble_channel_selection_algorithm2_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_channel_selection_algorithm2_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_power_class1_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CLASS1, req, opt)
    }

    pub fn supports_ble_power_class1(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_power_class1_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_power_class1_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CLASS1, req, opt)
    }

    pub fn supports_ble_power_class1_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_power_class1_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_minimum_used_channels_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_MINIMUM_USED_CHANNELS, req, opt)
    }

    pub fn supports_ble_minimum_used_channels(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_minimum_used_channels_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_minimum_used_channels_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_MINIMUM_USED_CHANNELS, req, opt)
    }

    pub fn supports_ble_minimum_used_channels_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_minimum_used_channels_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connection_cte_request_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_CTE_REQUEST, req, opt)
    }

    pub fn supports_ble_connection_cte_request(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_connection_cte_request_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connection_cte_request_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_CTE_REQUEST, req, opt)
    }

    pub fn supports_ble_connection_cte_request_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_connection_cte_request_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connection_cte_response_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_CTE_RESPONSE, req, opt)
    }

    pub fn supports_ble_connection_cte_response(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_connection_cte_response_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connection_cte_response_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_CTE_RESPONSE, req, opt)
    }

    pub fn supports_ble_connection_cte_response_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_connection_cte_response_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connectionless_cte_transmitter_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTIONLESS_CTE_TRANSMITTER, req, opt)
    }

    pub fn supports_ble_connectionless_cte_transmitter(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_connectionless_cte_transmitter_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connectionless_cte_transmitter_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTIONLESS_CTE_TRANSMITTER, req, opt)
    }

    pub fn supports_ble_connectionless_cte_transmitter_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_connectionless_cte_transmitter_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connectionless_cte_receiver_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTIONLESS_CTE_RECEIVER, req, opt)
    }

    pub fn supports_ble_connectionless_cte_receiver(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_connectionless_cte_receiver_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connectionless_cte_receiver_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTIONLESS_CTE_RECEIVER, req, opt)
    }

    pub fn supports_ble_connectionless_cte_receiver_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_connectionless_cte_receiver_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_antenna_switching_during_cte_tx_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ANTENNA_SWITCHING_DURING_CTE_TX, req, opt)
    }

    pub fn supports_ble_antenna_switching_during_cte_tx(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_antenna_switching_during_cte_tx_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_antenna_switching_during_cte_tx_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ANTENNA_SWITCHING_DURING_CTE_TX, req, opt)
    }

    pub fn supports_ble_antenna_switching_during_cte_tx_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_antenna_switching_during_cte_tx_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_antenna_switching_during_cte_rx_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ANTENNA_SWITCHING_DURING_CTE_RX, req, opt)
    }

    pub fn supports_ble_antenna_switching_during_cte_rx(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_antenna_switching_during_cte_rx_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_antenna_switching_during_cte_rx_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ANTENNA_SWITCHING_DURING_CTE_RX, req, opt)
    }

    pub fn supports_ble_antenna_switching_during_cte_rx_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_antenna_switching_during_cte_rx_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_receiving_constant_tone_extensions_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_RECEIVING_CONSTANT_TONE_EXTENSIONS, req, opt)
    }

    pub fn supports_ble_receiving_constant_tone_extensions(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_receiving_constant_tone_extensions_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_receiving_constant_tone_extensions_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_RECEIVING_CONSTANT_TONE_EXTENSIONS, req, opt)
    }

    pub fn supports_ble_receiving_constant_tone_extensions_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_receiving_constant_tone_extensions_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_periodic_advertising_sync_transfer_sender_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_SYNC_TRANSFER_SENDER, req, opt)
    }

    pub fn supports_ble_periodic_advertising_sync_transfer_sender(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_periodic_advertising_sync_transfer_sender_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_periodic_advertising_sync_transfer_sender_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_SYNC_TRANSFER_SENDER, req, opt)
    }

    pub fn supports_ble_periodic_advertising_sync_transfer_sender_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_periodic_advertising_sync_transfer_sender_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_periodic_advertising_sync_transfer_recipient_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_SYNC_TRANSFER_RECIPIENT, req, opt)
    }

    pub fn supports_ble_periodic_advertising_sync_transfer_recipient(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_periodic_advertising_sync_transfer_recipient_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_periodic_advertising_sync_transfer_recipient_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_SYNC_TRANSFER_RECIPIENT, req, opt)
    }

    pub fn supports_ble_periodic_advertising_sync_transfer_recipient_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_periodic_advertising_sync_transfer_recipient_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_sleep_clock_accuracy_updates_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_SLEEP_CLOCK_ACCURACY_UPDATES, req, opt)
    }

    pub fn supports_ble_sleep_clock_accuracy_updates(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_sleep_clock_accuracy_updates_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_sleep_clock_accuracy_updates_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_SLEEP_CLOCK_ACCURACY_UPDATES, req, opt)
    }

    pub fn supports_ble_sleep_clock_accuracy_updates_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_sleep_clock_accuracy_updates_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_remote_public_key_validation_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_REMOTE_PUBLIC_KEY_VALIDATION, req, opt)
    }

    pub fn supports_ble_remote_public_key_validation(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_remote_public_key_validation_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_remote_public_key_validation_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_REMOTE_PUBLIC_KEY_VALIDATION, req, opt)
    }

    pub fn supports_ble_remote_public_key_validation_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_remote_public_key_validation_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connected_isochronous_stream_central_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTED_ISOCHRONOUS_STREAM_CENTRAL, req, opt)
    }

    pub fn supports_ble_connected_isochronous_stream_central(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_connected_isochronous_stream_central_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connected_isochronous_stream_central_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTED_ISOCHRONOUS_STREAM_CENTRAL, req, opt)
    }

    pub fn supports_ble_connected_isochronous_stream_central_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_connected_isochronous_stream_central_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connected_isochronous_stream_peripheral_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTED_ISOCHRONOUS_STREAM_PERIPHERAL, req, opt)
    }

    pub fn supports_ble_connected_isochronous_stream_peripheral(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_connected_isochronous_stream_peripheral_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_connected_isochronous_stream_peripheral_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTED_ISOCHRONOUS_STREAM_PERIPHERAL, req, opt)
    }

    pub fn supports_ble_connected_isochronous_stream_peripheral_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_connected_isochronous_stream_peripheral_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_isochronous_broadcaster_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ISOCHRONOUS_BROADCASTER, req, opt)
    }

    pub fn supports_ble_isochronous_broadcaster(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_isochronous_broadcaster_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_isochronous_broadcaster_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ISOCHRONOUS_BROADCASTER, req, opt)
    }

    pub fn supports_ble_isochronous_broadcaster_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_isochronous_broadcaster_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_synchronized_receiver_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_SYNCHRONIZED_RECEIVER, req, opt)
    }

    pub fn supports_ble_synchronized_receiver(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_synchronized_receiver_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_synchronized_receiver_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_SYNCHRONIZED_RECEIVER, req, opt)
    }

    pub fn supports_ble_synchronized_receiver_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_synchronized_receiver_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_isochronous_channels_host_support_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ISOCHRONOUS_CHANNELS_HOST_SUPPORT, req, opt)
    }

    pub fn supports_ble_isochronous_channels_host_support(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_isochronous_channels_host_support_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_isochronous_channels_host_support_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ISOCHRONOUS_CHANNELS_HOST_SUPPORT, req, opt)
    }

    pub fn supports_ble_isochronous_channels_host_support_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_isochronous_channels_host_support_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_power_control_request_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CONTROL_REQUEST, req, opt)
    }

    pub fn supports_ble_power_control_request(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_power_control_request_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_power_control_request_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CONTROL_REQUEST, req, opt)
    }

    pub fn supports_ble_power_control_request_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_power_control_request_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_power_change_indication_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CHANGE_INDICATION, req, opt)
    }

    pub fn supports_ble_power_change_indication(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_power_change_indication_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_power_change_indication_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CHANGE_INDICATION, req, opt)
    }

    pub fn supports_ble_power_change_indication_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_power_change_indication_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_path_loss_monitoring_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PATH_LOSS_MONITORING, req, opt)
    }

    pub fn supports_ble_path_loss_monitoring(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_path_loss_monitoring_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_path_loss_monitoring_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PATH_LOSS_MONITORING, req, opt)
    }

    pub fn supports_ble_path_loss_monitoring_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_path_loss_monitoring_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_periodic_advertising_adi_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.client.unary_call(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_ADI, req, opt)
    }

    pub fn supports_ble_periodic_advertising_adi(&self, req: &super::empty::Empty) -> ::grpcio::Result<super::controller_facade::SupportedMsg> {
        self.supports_ble_periodic_advertising_adi_opt(req, ::grpcio::CallOption::default())
    }

    pub fn supports_ble_periodic_advertising_adi_async_opt(&self, req: &super::empty::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.client.unary_call_async(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_ADI, req, opt)
    }

    pub fn supports_ble_periodic_advertising_adi_async(&self, req: &super::empty::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::controller_facade::SupportedMsg>> {
        self.supports_ble_periodic_advertising_adi_async_opt(req, ::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Output = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait ControllerFacade {
    fn get_mac_address(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::common::BluetoothAddress>);
    fn write_local_name(&mut self, ctx: ::grpcio::RpcContext, req: super::controller_facade::NameMsg, sink: ::grpcio::UnarySink<super::empty::Empty>);
    fn get_local_name(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::NameMsg>);
    fn is_supported_command(&mut self, ctx: ::grpcio::RpcContext, req: super::controller_facade::OpCodeMsg, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn get_le_number_of_supported_advertising_sets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SingleValueMsg>);
    fn supports_simple_pairing(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_secure_connections(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_simultaneous_le_br_edr(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_interlaced_inquiry_scan(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_rssi_with_inquiry_results(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_extended_inquiry_response(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_role_switch(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports3_slot_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports5_slot_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_classic2m_phy(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_classic3m_phy(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports3_slot_edr_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports5_slot_edr_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_sco(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_hv2_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_hv3_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ev3_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ev4_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ev5_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_esco2m_phy(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_esco3m_phy(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports3_slot_esco_edr_packets(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_hold_mode(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_sniff_mode(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_park_mode(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_non_flushable_pb(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_sniff_subrating(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_encryption_pause(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_encryption(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_connection_parameters_request(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_extended_reject(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_peripheral_initiated_features_exchange(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_ping(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_data_packet_length_extension(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_privacy(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_extended_scanner_filter_policies(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble2m_phy(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_stable_modulation_index_tx(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_stable_modulation_index_rx(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_coded_phy(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_extended_advertising(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_periodic_advertising(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_channel_selection_algorithm2(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_power_class1(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_minimum_used_channels(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_connection_cte_request(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_connection_cte_response(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_connectionless_cte_transmitter(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_connectionless_cte_receiver(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_antenna_switching_during_cte_tx(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_antenna_switching_during_cte_rx(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_receiving_constant_tone_extensions(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_periodic_advertising_sync_transfer_sender(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_periodic_advertising_sync_transfer_recipient(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_sleep_clock_accuracy_updates(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_remote_public_key_validation(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_connected_isochronous_stream_central(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_connected_isochronous_stream_peripheral(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_isochronous_broadcaster(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_synchronized_receiver(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_isochronous_channels_host_support(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_power_control_request(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_power_change_indication(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_path_loss_monitoring(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
    fn supports_ble_periodic_advertising_adi(&mut self, ctx: ::grpcio::RpcContext, req: super::empty::Empty, sink: ::grpcio::UnarySink<super::controller_facade::SupportedMsg>);
}

pub fn create_controller_facade<S: ControllerFacade + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_GET_MAC_ADDRESS, move |ctx, req, resp| {
        instance.get_mac_address(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_WRITE_LOCAL_NAME, move |ctx, req, resp| {
        instance.write_local_name(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_GET_LOCAL_NAME, move |ctx, req, resp| {
        instance.get_local_name(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_IS_SUPPORTED_COMMAND, move |ctx, req, resp| {
        instance.is_supported_command(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_GET_LE_NUMBER_OF_SUPPORTED_ADVERTISING_SETS, move |ctx, req, resp| {
        instance.get_le_number_of_supported_advertising_sets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_SIMPLE_PAIRING, move |ctx, req, resp| {
        instance.supports_simple_pairing(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_SECURE_CONNECTIONS, move |ctx, req, resp| {
        instance.supports_secure_connections(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_SIMULTANEOUS_LE_BR_EDR, move |ctx, req, resp| {
        instance.supports_simultaneous_le_br_edr(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_INTERLACED_INQUIRY_SCAN, move |ctx, req, resp| {
        instance.supports_interlaced_inquiry_scan(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_RSSI_WITH_INQUIRY_RESULTS, move |ctx, req, resp| {
        instance.supports_rssi_with_inquiry_results(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_EXTENDED_INQUIRY_RESPONSE, move |ctx, req, resp| {
        instance.supports_extended_inquiry_response(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_ROLE_SWITCH, move |ctx, req, resp| {
        instance.supports_role_switch(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_PACKETS, move |ctx, req, resp| {
        instance.supports3_slot_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS5_SLOT_PACKETS, move |ctx, req, resp| {
        instance.supports5_slot_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_CLASSIC2M_PHY, move |ctx, req, resp| {
        instance.supports_classic2m_phy(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_CLASSIC3M_PHY, move |ctx, req, resp| {
        instance.supports_classic3m_phy(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_EDR_PACKETS, move |ctx, req, resp| {
        instance.supports3_slot_edr_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS5_SLOT_EDR_PACKETS, move |ctx, req, resp| {
        instance.supports5_slot_edr_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_SCO, move |ctx, req, resp| {
        instance.supports_sco(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_HV2_PACKETS, move |ctx, req, resp| {
        instance.supports_hv2_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_HV3_PACKETS, move |ctx, req, resp| {
        instance.supports_hv3_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV3_PACKETS, move |ctx, req, resp| {
        instance.supports_ev3_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV4_PACKETS, move |ctx, req, resp| {
        instance.supports_ev4_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_EV5_PACKETS, move |ctx, req, resp| {
        instance.supports_ev5_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_ESCO2M_PHY, move |ctx, req, resp| {
        instance.supports_esco2m_phy(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_ESCO3M_PHY, move |ctx, req, resp| {
        instance.supports_esco3m_phy(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS3_SLOT_ESCO_EDR_PACKETS, move |ctx, req, resp| {
        instance.supports3_slot_esco_edr_packets(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_HOLD_MODE, move |ctx, req, resp| {
        instance.supports_hold_mode(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_SNIFF_MODE, move |ctx, req, resp| {
        instance.supports_sniff_mode(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_PARK_MODE, move |ctx, req, resp| {
        instance.supports_park_mode(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_NON_FLUSHABLE_PB, move |ctx, req, resp| {
        instance.supports_non_flushable_pb(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_SNIFF_SUBRATING, move |ctx, req, resp| {
        instance.supports_sniff_subrating(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_ENCRYPTION_PAUSE, move |ctx, req, resp| {
        instance.supports_encryption_pause(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE, move |ctx, req, resp| {
        instance.supports_ble(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ENCRYPTION, move |ctx, req, resp| {
        instance.supports_ble_encryption(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_PARAMETERS_REQUEST, move |ctx, req, resp| {
        instance.supports_ble_connection_parameters_request(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_REJECT, move |ctx, req, resp| {
        instance.supports_ble_extended_reject(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIPHERAL_INITIATED_FEATURES_EXCHANGE, move |ctx, req, resp| {
        instance.supports_ble_peripheral_initiated_features_exchange(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PING, move |ctx, req, resp| {
        instance.supports_ble_ping(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_DATA_PACKET_LENGTH_EXTENSION, move |ctx, req, resp| {
        instance.supports_ble_data_packet_length_extension(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PRIVACY, move |ctx, req, resp| {
        instance.supports_ble_privacy(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_SCANNER_FILTER_POLICIES, move |ctx, req, resp| {
        instance.supports_ble_extended_scanner_filter_policies(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE2M_PHY, move |ctx, req, resp| {
        instance.supports_ble2m_phy(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_STABLE_MODULATION_INDEX_TX, move |ctx, req, resp| {
        instance.supports_ble_stable_modulation_index_tx(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_STABLE_MODULATION_INDEX_RX, move |ctx, req, resp| {
        instance.supports_ble_stable_modulation_index_rx(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CODED_PHY, move |ctx, req, resp| {
        instance.supports_ble_coded_phy(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_EXTENDED_ADVERTISING, move |ctx, req, resp| {
        instance.supports_ble_extended_advertising(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING, move |ctx, req, resp| {
        instance.supports_ble_periodic_advertising(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CHANNEL_SELECTION_ALGORITHM2, move |ctx, req, resp| {
        instance.supports_ble_channel_selection_algorithm2(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CLASS1, move |ctx, req, resp| {
        instance.supports_ble_power_class1(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_MINIMUM_USED_CHANNELS, move |ctx, req, resp| {
        instance.supports_ble_minimum_used_channels(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_CTE_REQUEST, move |ctx, req, resp| {
        instance.supports_ble_connection_cte_request(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTION_CTE_RESPONSE, move |ctx, req, resp| {
        instance.supports_ble_connection_cte_response(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTIONLESS_CTE_TRANSMITTER, move |ctx, req, resp| {
        instance.supports_ble_connectionless_cte_transmitter(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTIONLESS_CTE_RECEIVER, move |ctx, req, resp| {
        instance.supports_ble_connectionless_cte_receiver(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ANTENNA_SWITCHING_DURING_CTE_TX, move |ctx, req, resp| {
        instance.supports_ble_antenna_switching_during_cte_tx(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ANTENNA_SWITCHING_DURING_CTE_RX, move |ctx, req, resp| {
        instance.supports_ble_antenna_switching_during_cte_rx(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_RECEIVING_CONSTANT_TONE_EXTENSIONS, move |ctx, req, resp| {
        instance.supports_ble_receiving_constant_tone_extensions(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_SYNC_TRANSFER_SENDER, move |ctx, req, resp| {
        instance.supports_ble_periodic_advertising_sync_transfer_sender(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_SYNC_TRANSFER_RECIPIENT, move |ctx, req, resp| {
        instance.supports_ble_periodic_advertising_sync_transfer_recipient(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_SLEEP_CLOCK_ACCURACY_UPDATES, move |ctx, req, resp| {
        instance.supports_ble_sleep_clock_accuracy_updates(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_REMOTE_PUBLIC_KEY_VALIDATION, move |ctx, req, resp| {
        instance.supports_ble_remote_public_key_validation(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTED_ISOCHRONOUS_STREAM_CENTRAL, move |ctx, req, resp| {
        instance.supports_ble_connected_isochronous_stream_central(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_CONNECTED_ISOCHRONOUS_STREAM_PERIPHERAL, move |ctx, req, resp| {
        instance.supports_ble_connected_isochronous_stream_peripheral(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ISOCHRONOUS_BROADCASTER, move |ctx, req, resp| {
        instance.supports_ble_isochronous_broadcaster(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_SYNCHRONIZED_RECEIVER, move |ctx, req, resp| {
        instance.supports_ble_synchronized_receiver(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_ISOCHRONOUS_CHANNELS_HOST_SUPPORT, move |ctx, req, resp| {
        instance.supports_ble_isochronous_channels_host_support(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CONTROL_REQUEST, move |ctx, req, resp| {
        instance.supports_ble_power_control_request(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_POWER_CHANGE_INDICATION, move |ctx, req, resp| {
        instance.supports_ble_power_change_indication(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PATH_LOSS_MONITORING, move |ctx, req, resp| {
        instance.supports_ble_path_loss_monitoring(ctx, req, resp)
    });
    let mut instance = s;
    builder = builder.add_unary_handler(&METHOD_CONTROLLER_FACADE_SUPPORTS_BLE_PERIODIC_ADVERTISING_ADI, move |ctx, req, resp| {
        instance.supports_ble_periodic_advertising_adi(ctx, req, resp)
    });
    builder.build()
}
