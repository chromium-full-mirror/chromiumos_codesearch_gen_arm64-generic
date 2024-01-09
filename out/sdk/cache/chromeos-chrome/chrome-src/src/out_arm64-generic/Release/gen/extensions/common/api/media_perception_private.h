// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/media_perception_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_MEDIA_PERCEPTION_PRIVATE_H__
#define EXTENSIONS_COMMON_API_MEDIA_PERCEPTION_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace media_perception_private {

//
// Types
//

enum class Status {
  kNone = 0,
  kUninitialized,
  kStarted,
  kRunning,
  kSuspended,
  kRestarting,
  kStopped,
  kServiceError,
  kMaxValue = kServiceError,
};


const char* ToString(Status as_enum);
Status ParseStatus(base::StringPiece as_string);
std::u16string GetStatusParseError(base::StringPiece as_string);

enum class ServiceError {
  kNone = 0,
  kServiceUnreachable,
  kServiceNotRunning,
  kServiceBusyLaunching,
  kServiceNotInstalled,
  kMojoConnectionFailure,
  kMaxValue = kMojoConnectionFailure,
};


const char* ToString(ServiceError as_enum);
ServiceError ParseServiceError(base::StringPiece as_string);
std::u16string GetServiceErrorParseError(base::StringPiece as_string);

enum class Feature {
  kNone = 0,
  kAutozoom,
  kHotwordDetection,
  kOccupancyDetection,
  kEdgeEmbeddings,
  kSoftwareCropping,
  kMaxValue = kSoftwareCropping,
};


const char* ToString(Feature as_enum);
Feature ParseFeature(base::StringPiece as_string);
std::u16string GetFeatureParseError(base::StringPiece as_string);

struct NamedTemplateArgument {
  NamedTemplateArgument();
  ~NamedTemplateArgument();
  NamedTemplateArgument(const NamedTemplateArgument&) = delete;
  NamedTemplateArgument& operator=(const NamedTemplateArgument&) = delete;
  NamedTemplateArgument(NamedTemplateArgument&& rhs) noexcept;
  NamedTemplateArgument& operator=(NamedTemplateArgument&& rhs) noexcept;

  // Populates a NamedTemplateArgument object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NamedTemplateArgument& out);

  // Populates a NamedTemplateArgument object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NamedTemplateArgument& out);

  // Creates a deep copy of NamedTemplateArgument.
  NamedTemplateArgument Clone() const;

  // Creates a NamedTemplateArgument object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<NamedTemplateArgument> FromValue(const base::Value::Dict& value);

  // Creates a NamedTemplateArgument object from a base::Value, or nullopt on
  // failure.
  static std::optional<NamedTemplateArgument> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNamedTemplateArgument object.
  base::Value::Dict ToValue() const;

  struct Value {
    Value();
    ~Value();
    Value(const Value&) = delete;
    Value& operator=(const Value&) = delete;
    Value(Value&& rhs) noexcept;
    Value& operator=(Value&& rhs) noexcept;

    // Populates a Value object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Value& out);

    // Creates a deep copy of Value.
    Value Clone() const;

    // Creates a Value object from a base::Value, or nullopt on failure.
    static std::optional<Value> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisValue
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    std::optional<double> as_number;
  };


  std::optional<std::string> name;

  std::optional<Value> value;

};

enum class ComponentType {
  kNone = 0,
  kLight,
  kFull,
  kMaxValue = kFull,
};


const char* ToString(ComponentType as_enum);
ComponentType ParseComponentType(base::StringPiece as_string);
std::u16string GetComponentTypeParseError(base::StringPiece as_string);

// The status of the media analytics process component on the device.
enum class ComponentStatus {
  kNone = 0,
  kUnknown,
  kInstalled,
  kFailedToInstall,
  kMaxValue = kFailedToInstall,
};


const char* ToString(ComponentStatus as_enum);
ComponentStatus ParseComponentStatus(base::StringPiece as_string);
std::u16string GetComponentStatusParseError(base::StringPiece as_string);

// Error code associated with a failure to install the media analytics
// component.
enum class ComponentInstallationError {
  kNone = 0,
  kUnknownComponent,
  kInstallFailure,
  kMountFailure,
  kCompatibilityCheckFailed,
  kNotFound,
  kMaxValue = kNotFound,
};


const char* ToString(ComponentInstallationError as_enum);
ComponentInstallationError ParseComponentInstallationError(base::StringPiece as_string);
std::u16string GetComponentInstallationErrorParseError(base::StringPiece as_string);

struct Component {
  Component();
  ~Component();
  Component(const Component&) = delete;
  Component& operator=(const Component&) = delete;
  Component(Component&& rhs) noexcept;
  Component& operator=(Component&& rhs) noexcept;

  // Populates a Component object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Component& out);

  // Populates a Component object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Component& out);

  // Creates a deep copy of Component.
  Component Clone() const;

  // Creates a Component object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Component> FromValue(const base::Value::Dict& value);

  // Creates a Component object from a base::Value, or nullopt on failure.
  static std::optional<Component> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisComponent object.
  base::Value::Dict ToValue() const;

  ComponentType type;

};

struct ComponentState {
  ComponentState();
  ~ComponentState();
  ComponentState(const ComponentState&) = delete;
  ComponentState& operator=(const ComponentState&) = delete;
  ComponentState(ComponentState&& rhs) noexcept;
  ComponentState& operator=(ComponentState&& rhs) noexcept;

  // Populates a ComponentState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ComponentState& out);

  // Populates a ComponentState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ComponentState& out);

  // Creates a deep copy of ComponentState.
  ComponentState Clone() const;

  // Creates a ComponentState object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ComponentState> FromValue(const base::Value::Dict& value);

  // Creates a ComponentState object from a base::Value, or nullopt on failure.
  static std::optional<ComponentState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisComponentState object.
  base::Value::Dict ToValue() const;

  ComponentStatus status;

  // The version string for the current component.
  std::optional<std::string> version;

  // If the component installation failed, the encountered installation error. Not
  // set if the component installation succeeded.
  ComponentInstallationError installation_error_code;

};

// ------------------- Start of process management definitions. ------------ New
// interface for managing the process state of the media perception service with
// the intention of eventually phasing out the setState() call.
enum class ProcessStatus {
  kNone = 0,
  kUnknown,
  kStarted,
  kStopped,
  kServiceError,
  kMaxValue = kServiceError,
};


const char* ToString(ProcessStatus as_enum);
ProcessStatus ParseProcessStatus(base::StringPiece as_string);
std::u16string GetProcessStatusParseError(base::StringPiece as_string);

struct ProcessState {
  ProcessState();
  ~ProcessState();
  ProcessState(const ProcessState&) = delete;
  ProcessState& operator=(const ProcessState&) = delete;
  ProcessState(ProcessState&& rhs) noexcept;
  ProcessState& operator=(ProcessState&& rhs) noexcept;

  // Populates a ProcessState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProcessState& out);

  // Populates a ProcessState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProcessState& out);

  // Creates a deep copy of ProcessState.
  ProcessState Clone() const;

  // Creates a ProcessState object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProcessState> FromValue(const base::Value::Dict& value);

  // Creates a ProcessState object from a base::Value, or nullopt on failure.
  static std::optional<ProcessState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProcessState object.
  base::Value::Dict ToValue() const;

  ProcessStatus status;

  // Return parameter for $(ref:setComponentProcessState) that specifies the error
  // type for failure cases.
  ServiceError service_error;

};

struct VideoStreamParam {
  VideoStreamParam();
  ~VideoStreamParam();
  VideoStreamParam(const VideoStreamParam&) = delete;
  VideoStreamParam& operator=(const VideoStreamParam&) = delete;
  VideoStreamParam(VideoStreamParam&& rhs) noexcept;
  VideoStreamParam& operator=(VideoStreamParam&& rhs) noexcept;

  // Populates a VideoStreamParam object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VideoStreamParam& out);

  // Populates a VideoStreamParam object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VideoStreamParam& out);

  // Creates a deep copy of VideoStreamParam.
  VideoStreamParam Clone() const;

  // Creates a VideoStreamParam object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<VideoStreamParam> FromValue(const base::Value::Dict& value);

  // Creates a VideoStreamParam object from a base::Value, or nullopt on
  // failure.
  static std::optional<VideoStreamParam> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVideoStreamParam object.
  base::Value::Dict ToValue() const;

  // Identifies the video stream described by these parameters.
  std::optional<std::string> id;

  // Frame width in pixels.
  std::optional<int> width;

  // Frame height in pixels.
  std::optional<int> height;

  // The frame rate at which this video stream would be processed.
  std::optional<int> frame_rate;

};

struct Point {
  Point();
  ~Point();
  Point(const Point&) = delete;
  Point& operator=(const Point&) = delete;
  Point(Point&& rhs) noexcept;
  Point& operator=(Point&& rhs) noexcept;

  // Populates a Point object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Point& out);

  // Populates a Point object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Point& out);

  // Creates a deep copy of Point.
  Point Clone() const;

  // Creates a Point object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Point> FromValue(const base::Value::Dict& value);

  // Creates a Point object from a base::Value, or nullopt on failure.
  static std::optional<Point> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPoint object.
  base::Value::Dict ToValue() const;

  // The horizontal distance from the top left corner of the image.
  std::optional<double> x;

  // The vertical distance from the top left corner of the image.
  std::optional<double> y;

};

struct Whiteboard {
  Whiteboard();
  ~Whiteboard();
  Whiteboard(const Whiteboard&) = delete;
  Whiteboard& operator=(const Whiteboard&) = delete;
  Whiteboard(Whiteboard&& rhs) noexcept;
  Whiteboard& operator=(Whiteboard&& rhs) noexcept;

  // Populates a Whiteboard object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Whiteboard& out);

  // Populates a Whiteboard object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Whiteboard& out);

  // Creates a deep copy of Whiteboard.
  Whiteboard Clone() const;

  // Creates a Whiteboard object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Whiteboard> FromValue(const base::Value::Dict& value);

  // Creates a Whiteboard object from a base::Value, or nullopt on failure.
  static std::optional<Whiteboard> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWhiteboard object.
  base::Value::Dict ToValue() const;

  // The top left corner of the whiteboard in the image frame.
  std::optional<Point> top_left;

  // The top right corner of the whiteboard in the image frame.
  std::optional<Point> top_right;

  // The bottom left corner of the whiteboard in the image frame.
  std::optional<Point> bottom_left;

  // The bottom right corner of the whiteboard in the image frame.
  std::optional<Point> bottom_right;

  // The physical aspect ratio of the whiteboard.
  std::optional<double> aspect_ratio;

};

struct State {
  State();
  ~State();
  State(const State&) = delete;
  State& operator=(const State&) = delete;
  State(State&& rhs) noexcept;
  State& operator=(State&& rhs) noexcept;

  // Populates a State object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, State& out);

  // Populates a State object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, State& out);

  // Creates a deep copy of State.
  State Clone() const;

  // Creates a State object from a base::Value::Dict, or nullopt on failure.
  static std::optional<State> FromValue(const base::Value::Dict& value);

  // Creates a State object from a base::Value, or nullopt on failure.
  static std::optional<State> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisState object.
  base::Value::Dict ToValue() const;

  Status status;

  // Optional $(ref:setState) parameter. Specifies the video device the media
  // analytics process should open while the media processing pipeline is
  // starting. To set this parameter, status has to be <code>RUNNING</code>.
  std::optional<std::string> device_context;

  // Return parameter for $(ref:setState) or $(ref:getState) that specifies the
  // error type for failure cases.
  ServiceError service_error;

  // A list of video streams processed by the analytics process. To set this
  // parameter, status has to be <code>RUNNING</code>.
  std::optional<std::vector<VideoStreamParam>> video_stream_param;

  // Media analytics configuration. It can only be used when setting state to
  // RUNNING.
  std::optional<std::string> configuration;

  // Corners and aspect ratio of the whiteboard in the image frame. Should only be
  // set when setting state to <code>RUNNING</code> and configuration to
  // whiteboard.
  std::optional<Whiteboard> whiteboard;

  // A list of enabled media perception features.
  std::optional<std::vector<Feature>> features;

  // A list of named parameters to be substituted at start-up. Will only have
  // effect when setting state to <code>RUNNING</code>.
  std::optional<std::vector<NamedTemplateArgument>> named_template_arguments;

};

struct BoundingBox {
  BoundingBox();
  ~BoundingBox();
  BoundingBox(const BoundingBox&) = delete;
  BoundingBox& operator=(const BoundingBox&) = delete;
  BoundingBox(BoundingBox&& rhs) noexcept;
  BoundingBox& operator=(BoundingBox&& rhs) noexcept;

  // Populates a BoundingBox object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BoundingBox& out);

  // Populates a BoundingBox object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, BoundingBox& out);

  // Creates a deep copy of BoundingBox.
  BoundingBox Clone() const;

  // Creates a BoundingBox object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<BoundingBox> FromValue(const base::Value::Dict& value);

  // Creates a BoundingBox object from a base::Value, or nullopt on failure.
  static std::optional<BoundingBox> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBoundingBox object.
  base::Value::Dict ToValue() const;

  // Specifies whether the points are normalized to the size of the image.
  std::optional<bool> normalized;

  // The two points that define the corners of a bounding box.
  std::optional<Point> top_left;

  std::optional<Point> bottom_right;

};

enum class DistanceUnits {
  kNone = 0,
  kUnspecified,
  kMeters,
  kPixels,
  kMaxValue = kPixels,
};


const char* ToString(DistanceUnits as_enum);
DistanceUnits ParseDistanceUnits(base::StringPiece as_string);
std::u16string GetDistanceUnitsParseError(base::StringPiece as_string);

struct Distance {
  Distance();
  ~Distance();
  Distance(const Distance&) = delete;
  Distance& operator=(const Distance&) = delete;
  Distance(Distance&& rhs) noexcept;
  Distance& operator=(Distance&& rhs) noexcept;

  // Populates a Distance object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Distance& out);

  // Populates a Distance object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Distance& out);

  // Creates a deep copy of Distance.
  Distance Clone() const;

  // Creates a Distance object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Distance> FromValue(const base::Value::Dict& value);

  // Creates a Distance object from a base::Value, or nullopt on failure.
  static std::optional<Distance> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDistance object.
  base::Value::Dict ToValue() const;

  // This field provides flexibility to report depths or distances of different
  // entity types with different units.
  DistanceUnits units;

  std::optional<double> magnitude;

};

enum class EntityType {
  kNone = 0,
  kUnspecified,
  kFace,
  kPerson,
  kMotionRegion,
  kLabeledRegion,
  kMaxValue = kLabeledRegion,
};


const char* ToString(EntityType as_enum);
EntityType ParseEntityType(base::StringPiece as_string);
std::u16string GetEntityTypeParseError(base::StringPiece as_string);

enum class FramePerceptionType {
  kNone = 0,
  kUnknownType,
  kFaceDetection,
  kPersonDetection,
  kMotionDetection,
  kMaxValue = kMotionDetection,
};


const char* ToString(FramePerceptionType as_enum);
FramePerceptionType ParseFramePerceptionType(base::StringPiece as_string);
std::u16string GetFramePerceptionTypeParseError(base::StringPiece as_string);

struct Entity {
  Entity();
  ~Entity();
  Entity(const Entity&) = delete;
  Entity& operator=(const Entity&) = delete;
  Entity(Entity&& rhs) noexcept;
  Entity& operator=(Entity&& rhs) noexcept;

  // Populates a Entity object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Entity& out);

  // Populates a Entity object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Entity& out);

  // Creates a deep copy of Entity.
  Entity Clone() const;

  // Creates a Entity object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Entity> FromValue(const base::Value::Dict& value);

  // Creates a Entity object from a base::Value, or nullopt on failure.
  static std::optional<Entity> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEntity object.
  base::Value::Dict ToValue() const;

  // A unique id associated with the detected entity, which can be used to track
  // the entity over time.
  std::optional<int> id;

  EntityType type;

  // Label for this entity.
  std::optional<std::string> entity_label;

  // Minimum box which captures entire detected entity.
  std::optional<BoundingBox> bounding_box;

  // A value for the quality of this detection.
  std::optional<double> confidence;

  // The estimated depth of the entity from the camera.
  std::optional<Distance> depth;

};

struct PacketLatency {
  PacketLatency();
  ~PacketLatency();
  PacketLatency(const PacketLatency&) = delete;
  PacketLatency& operator=(const PacketLatency&) = delete;
  PacketLatency(PacketLatency&& rhs) noexcept;
  PacketLatency& operator=(PacketLatency&& rhs) noexcept;

  // Populates a PacketLatency object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PacketLatency& out);

  // Populates a PacketLatency object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PacketLatency& out);

  // Creates a deep copy of PacketLatency.
  PacketLatency Clone() const;

  // Creates a PacketLatency object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PacketLatency> FromValue(const base::Value::Dict& value);

  // Creates a PacketLatency object from a base::Value, or nullopt on failure.
  static std::optional<PacketLatency> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPacketLatency object.
  base::Value::Dict ToValue() const;

  // Label for this packet.
  std::optional<std::string> packet_label;

  // Packet processing latency in microseconds.
  std::optional<int> latency_usec;

};

// Type of lighting conditions.
enum class LightCondition {
  kNone = 0,
  kUnspecified,
  kNoChange,
  kTurnedOn,
  kTurnedOff,
  kDimmer,
  kBrighter,
  kBlackFrame,
  kMaxValue = kBlackFrame,
};


const char* ToString(LightCondition as_enum);
LightCondition ParseLightCondition(base::StringPiece as_string);
std::u16string GetLightConditionParseError(base::StringPiece as_string);

struct VideoHumanPresenceDetection {
  VideoHumanPresenceDetection();
  ~VideoHumanPresenceDetection();
  VideoHumanPresenceDetection(const VideoHumanPresenceDetection&) = delete;
  VideoHumanPresenceDetection& operator=(const VideoHumanPresenceDetection&) = delete;
  VideoHumanPresenceDetection(VideoHumanPresenceDetection&& rhs) noexcept;
  VideoHumanPresenceDetection& operator=(VideoHumanPresenceDetection&& rhs) noexcept;

  // Populates a VideoHumanPresenceDetection object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VideoHumanPresenceDetection& out);

  // Populates a VideoHumanPresenceDetection object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VideoHumanPresenceDetection& out);

  // Creates a deep copy of VideoHumanPresenceDetection.
  VideoHumanPresenceDetection Clone() const;

  // Creates a VideoHumanPresenceDetection object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<VideoHumanPresenceDetection> FromValue(const base::Value::Dict& value);

  // Creates a VideoHumanPresenceDetection object from a base::Value, or nullopt
  // on failure.
  static std::optional<VideoHumanPresenceDetection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVideoHumanPresenceDetection object.
  base::Value::Dict ToValue() const;

  // Indicates a probability in [0, 1] interval that a human is present in the
  // video frame.
  std::optional<double> human_presence_likelihood;

  // Indicates a probability in [0, 1] that motion has been detected in the video
  // frame.
  std::optional<double> motion_detected_likelihood;

  // Indicates lighting condition in the video frame.
  LightCondition light_condition;

  // Indicates a probablity in [0, 1] interval that <code>lightCondition</code>
  // value is correct.
  std::optional<double> light_condition_likelihood;

};

struct FramePerception {
  FramePerception();
  ~FramePerception();
  FramePerception(const FramePerception&) = delete;
  FramePerception& operator=(const FramePerception&) = delete;
  FramePerception(FramePerception&& rhs) noexcept;
  FramePerception& operator=(FramePerception&& rhs) noexcept;

  // Populates a FramePerception object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FramePerception& out);

  // Populates a FramePerception object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FramePerception& out);

  // Creates a deep copy of FramePerception.
  FramePerception Clone() const;

  // Creates a FramePerception object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FramePerception> FromValue(const base::Value::Dict& value);

  // Creates a FramePerception object from a base::Value, or nullopt on failure.
  static std::optional<FramePerception> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFramePerception object.
  base::Value::Dict ToValue() const;

  std::optional<int> frame_id;

  std::optional<int> frame_width_in_px;

  std::optional<int> frame_height_in_px;

  // The timestamp associated with the frame (when its recieved by the analytics
  // process).
  std::optional<double> timestamp;

  // The list of entities detected in this frame.
  std::optional<std::vector<Entity>> entities;

  // Processing latency for a list of packets.
  std::optional<std::vector<PacketLatency>> packet_latency;

  // Human presence detection results for a video frame.
  std::optional<VideoHumanPresenceDetection> video_human_presence_detection;

  // Indicates what types of frame perception were run.
  std::optional<std::vector<FramePerceptionType>> frame_perception_types;

};

struct AudioLocalization {
  AudioLocalization();
  ~AudioLocalization();
  AudioLocalization(const AudioLocalization&) = delete;
  AudioLocalization& operator=(const AudioLocalization&) = delete;
  AudioLocalization(AudioLocalization&& rhs) noexcept;
  AudioLocalization& operator=(AudioLocalization&& rhs) noexcept;

  // Populates a AudioLocalization object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioLocalization& out);

  // Populates a AudioLocalization object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioLocalization& out);

  // Creates a deep copy of AudioLocalization.
  AudioLocalization Clone() const;

  // Creates a AudioLocalization object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AudioLocalization> FromValue(const base::Value::Dict& value);

  // Creates a AudioLocalization object from a base::Value, or nullopt on
  // failure.
  static std::optional<AudioLocalization> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioLocalization object.
  base::Value::Dict ToValue() const;

  // An angle in radians in the horizontal plane. It roughly points to the peak in
  // the probability distribution of azimuth defined below.
  std::optional<double> azimuth_radians;

  // A probability distribution for the current snapshot in time that shows the
  // likelihood of a sound source being at a particular azimuth. For example,
  // <code>azimuthScores = [0.1, 0.2, 0.3, 0.4]</code> means that the probability
  // that the sound is coming from an azimuth of 0, pi/2, pi, 3*pi/2 is 0.1, 0.2,
  // 0.3 and 0.4, respectively.
  std::optional<std::vector<double>> azimuth_scores;

};

struct AudioSpectrogram {
  AudioSpectrogram();
  ~AudioSpectrogram();
  AudioSpectrogram(const AudioSpectrogram&) = delete;
  AudioSpectrogram& operator=(const AudioSpectrogram&) = delete;
  AudioSpectrogram(AudioSpectrogram&& rhs) noexcept;
  AudioSpectrogram& operator=(AudioSpectrogram&& rhs) noexcept;

  // Populates a AudioSpectrogram object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioSpectrogram& out);

  // Populates a AudioSpectrogram object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioSpectrogram& out);

  // Creates a deep copy of AudioSpectrogram.
  AudioSpectrogram Clone() const;

  // Creates a AudioSpectrogram object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AudioSpectrogram> FromValue(const base::Value::Dict& value);

  // Creates a AudioSpectrogram object from a base::Value, or nullopt on
  // failure.
  static std::optional<AudioSpectrogram> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioSpectrogram object.
  base::Value::Dict ToValue() const;

  std::optional<std::vector<double>> values;

};

struct AudioHumanPresenceDetection {
  AudioHumanPresenceDetection();
  ~AudioHumanPresenceDetection();
  AudioHumanPresenceDetection(const AudioHumanPresenceDetection&) = delete;
  AudioHumanPresenceDetection& operator=(const AudioHumanPresenceDetection&) = delete;
  AudioHumanPresenceDetection(AudioHumanPresenceDetection&& rhs) noexcept;
  AudioHumanPresenceDetection& operator=(AudioHumanPresenceDetection&& rhs) noexcept;

  // Populates a AudioHumanPresenceDetection object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioHumanPresenceDetection& out);

  // Populates a AudioHumanPresenceDetection object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioHumanPresenceDetection& out);

  // Creates a deep copy of AudioHumanPresenceDetection.
  AudioHumanPresenceDetection Clone() const;

  // Creates a AudioHumanPresenceDetection object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<AudioHumanPresenceDetection> FromValue(const base::Value::Dict& value);

  // Creates a AudioHumanPresenceDetection object from a base::Value, or nullopt
  // on failure.
  static std::optional<AudioHumanPresenceDetection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioHumanPresenceDetection object.
  base::Value::Dict ToValue() const;

  // Indicates a probability in [0, 1] interval that a human has caused a sound
  // close to the microphone.
  std::optional<double> human_presence_likelihood;

  // Estimate of the noise spectrogram.
  std::optional<AudioSpectrogram> noise_spectrogram;

  // Spectrogram of an audio frame.
  std::optional<AudioSpectrogram> frame_spectrogram;

};

enum class HotwordType {
  kNone = 0,
  kUnknownType,
  kOkGoogle,
  kMaxValue = kOkGoogle,
};


const char* ToString(HotwordType as_enum);
HotwordType ParseHotwordType(base::StringPiece as_string);
std::u16string GetHotwordTypeParseError(base::StringPiece as_string);

struct Hotword {
  Hotword();
  ~Hotword();
  Hotword(const Hotword&) = delete;
  Hotword& operator=(const Hotword&) = delete;
  Hotword(Hotword&& rhs) noexcept;
  Hotword& operator=(Hotword&& rhs) noexcept;

  // Populates a Hotword object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Hotword& out);

  // Populates a Hotword object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Hotword& out);

  // Creates a deep copy of Hotword.
  Hotword Clone() const;

  // Creates a Hotword object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Hotword> FromValue(const base::Value::Dict& value);

  // Creates a Hotword object from a base::Value, or nullopt on failure.
  static std::optional<Hotword> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHotword object.
  base::Value::Dict ToValue() const;

  // Unique identifier for the hotword instance. Note that a single hotword
  // instance can span more than one audio frame. In that case a single hotword
  // instance can be reported in multiple Hotword or HotwordDetection results.
  // Hotword results associated with the same hotword instance will have the same
  // <code>id</code>.
  std::optional<int> id;

  // Indicates the type of this hotword.
  HotwordType type;

  // Id of the audio frame in which the hotword was detected.
  std::optional<int> frame_id;

  // Indicates the start time of this hotword in the audio frame.
  std::optional<int> start_timestamp_ms;

  // Indicates the end time of this hotword in the audio frame.
  std::optional<int> end_timestamp_ms;

  // Indicates a probability in [0, 1] interval that this hotword is present in
  // the audio frame.
  std::optional<double> confidence;

};

struct HotwordDetection {
  HotwordDetection();
  ~HotwordDetection();
  HotwordDetection(const HotwordDetection&) = delete;
  HotwordDetection& operator=(const HotwordDetection&) = delete;
  HotwordDetection(HotwordDetection&& rhs) noexcept;
  HotwordDetection& operator=(HotwordDetection&& rhs) noexcept;

  // Populates a HotwordDetection object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HotwordDetection& out);

  // Populates a HotwordDetection object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HotwordDetection& out);

  // Creates a deep copy of HotwordDetection.
  HotwordDetection Clone() const;

  // Creates a HotwordDetection object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HotwordDetection> FromValue(const base::Value::Dict& value);

  // Creates a HotwordDetection object from a base::Value, or nullopt on
  // failure.
  static std::optional<HotwordDetection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHotwordDetection object.
  base::Value::Dict ToValue() const;

  std::optional<std::vector<Hotword>> hotwords;

};

struct AudioPerception {
  AudioPerception();
  ~AudioPerception();
  AudioPerception(const AudioPerception&) = delete;
  AudioPerception& operator=(const AudioPerception&) = delete;
  AudioPerception(AudioPerception&& rhs) noexcept;
  AudioPerception& operator=(AudioPerception&& rhs) noexcept;

  // Populates a AudioPerception object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioPerception& out);

  // Populates a AudioPerception object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioPerception& out);

  // Creates a deep copy of AudioPerception.
  AudioPerception Clone() const;

  // Creates a AudioPerception object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AudioPerception> FromValue(const base::Value::Dict& value);

  // Creates a AudioPerception object from a base::Value, or nullopt on failure.
  static std::optional<AudioPerception> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioPerception object.
  base::Value::Dict ToValue() const;

  // A timestamp in microseconds attached when this message was generated.
  std::optional<double> timestamp_us;

  // Audio localization results for an audio frame.
  std::optional<AudioLocalization> audio_localization;

  // Audio human presence detection results for an audio frame.
  std::optional<AudioHumanPresenceDetection> audio_human_presence_detection;

  // Hotword detection results.
  std::optional<HotwordDetection> hotword_detection;

};

struct AudioVisualHumanPresenceDetection {
  AudioVisualHumanPresenceDetection();
  ~AudioVisualHumanPresenceDetection();
  AudioVisualHumanPresenceDetection(const AudioVisualHumanPresenceDetection&) = delete;
  AudioVisualHumanPresenceDetection& operator=(const AudioVisualHumanPresenceDetection&) = delete;
  AudioVisualHumanPresenceDetection(AudioVisualHumanPresenceDetection&& rhs) noexcept;
  AudioVisualHumanPresenceDetection& operator=(AudioVisualHumanPresenceDetection&& rhs) noexcept;

  // Populates a AudioVisualHumanPresenceDetection object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioVisualHumanPresenceDetection& out);

  // Populates a AudioVisualHumanPresenceDetection object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioVisualHumanPresenceDetection& out);

  // Creates a deep copy of AudioVisualHumanPresenceDetection.
  AudioVisualHumanPresenceDetection Clone() const;

  // Creates a AudioVisualHumanPresenceDetection object from a
  // base::Value::Dict, or nullopt on failure.
  static std::optional<AudioVisualHumanPresenceDetection> FromValue(const base::Value::Dict& value);

  // Creates a AudioVisualHumanPresenceDetection object from a base::Value, or
  // nullopt on failure.
  static std::optional<AudioVisualHumanPresenceDetection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioVisualHumanPresenceDetection object.
  base::Value::Dict ToValue() const;

  // Indicates a probability in [0, 1] interval that a human is present.
  std::optional<double> human_presence_likelihood;

};

struct AudioVisualPerception {
  AudioVisualPerception();
  ~AudioVisualPerception();
  AudioVisualPerception(const AudioVisualPerception&) = delete;
  AudioVisualPerception& operator=(const AudioVisualPerception&) = delete;
  AudioVisualPerception(AudioVisualPerception&& rhs) noexcept;
  AudioVisualPerception& operator=(AudioVisualPerception&& rhs) noexcept;

  // Populates a AudioVisualPerception object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioVisualPerception& out);

  // Populates a AudioVisualPerception object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioVisualPerception& out);

  // Creates a deep copy of AudioVisualPerception.
  AudioVisualPerception Clone() const;

  // Creates a AudioVisualPerception object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<AudioVisualPerception> FromValue(const base::Value::Dict& value);

  // Creates a AudioVisualPerception object from a base::Value, or nullopt on
  // failure.
  static std::optional<AudioVisualPerception> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioVisualPerception object.
  base::Value::Dict ToValue() const;

  // A timestamp in microseconds attached when this message was generated.
  std::optional<double> timestamp_us;

  // Human presence detection results.
  std::optional<AudioVisualHumanPresenceDetection> audio_visual_human_presence_detection;

};

struct Metadata {
  Metadata();
  ~Metadata();
  Metadata(const Metadata&) = delete;
  Metadata& operator=(const Metadata&) = delete;
  Metadata(Metadata&& rhs) noexcept;
  Metadata& operator=(Metadata&& rhs) noexcept;

  // Populates a Metadata object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Metadata& out);

  // Populates a Metadata object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Metadata& out);

  // Creates a deep copy of Metadata.
  Metadata Clone() const;

  // Creates a Metadata object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Metadata> FromValue(const base::Value::Dict& value);

  // Creates a Metadata object from a base::Value, or nullopt on failure.
  static std::optional<Metadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMetadata object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> visual_experience_controller_version;

};

struct MediaPerception {
  MediaPerception();
  ~MediaPerception();
  MediaPerception(const MediaPerception&) = delete;
  MediaPerception& operator=(const MediaPerception&) = delete;
  MediaPerception(MediaPerception&& rhs) noexcept;
  MediaPerception& operator=(MediaPerception&& rhs) noexcept;

  // Populates a MediaPerception object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MediaPerception& out);

  // Populates a MediaPerception object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MediaPerception& out);

  // Creates a deep copy of MediaPerception.
  MediaPerception Clone() const;

  // Creates a MediaPerception object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MediaPerception> FromValue(const base::Value::Dict& value);

  // Creates a MediaPerception object from a base::Value, or nullopt on failure.
  static std::optional<MediaPerception> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaPerception object.
  base::Value::Dict ToValue() const;

  // The time the media perception data was emitted by the media processing
  // pipeline. This value will be greater than the timestamp stored within the
  // FramePerception dictionary and the difference between them can be viewed as
  // the processing time for a single frame.
  std::optional<double> timestamp;

  // An array of framePerceptions.
  std::optional<std::vector<FramePerception>> frame_perceptions;

  // An array of audio perceptions.
  std::optional<std::vector<AudioPerception>> audio_perceptions;

  // An array of audio-visual perceptions.
  std::optional<std::vector<AudioVisualPerception>> audio_visual_perceptions;

  // Stores metadata such as version of media perception features.
  std::optional<Metadata> metadata;

};

enum class ImageFormat {
  kNone = 0,
  kRaw,
  kPng,
  kJpeg,
  kMaxValue = kJpeg,
};


const char* ToString(ImageFormat as_enum);
ImageFormat ParseImageFormat(base::StringPiece as_string);
std::u16string GetImageFormatParseError(base::StringPiece as_string);

struct ImageFrame {
  ImageFrame();
  ~ImageFrame();
  ImageFrame(const ImageFrame&) = delete;
  ImageFrame& operator=(const ImageFrame&) = delete;
  ImageFrame(ImageFrame&& rhs) noexcept;
  ImageFrame& operator=(ImageFrame&& rhs) noexcept;

  // Populates a ImageFrame object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ImageFrame& out);

  // Populates a ImageFrame object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ImageFrame& out);

  // Creates a deep copy of ImageFrame.
  ImageFrame Clone() const;

  // Creates a ImageFrame object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ImageFrame> FromValue(const base::Value::Dict& value);

  // Creates a ImageFrame object from a base::Value, or nullopt on failure.
  static std::optional<ImageFrame> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisImageFrame object.
  base::Value::Dict ToValue() const;

  std::optional<int> width;

  std::optional<int> height;

  ImageFormat format;

  std::optional<int> data_length;

  // The bytes of the image frame.
  std::optional<std::vector<uint8_t>> frame;

};

struct PerceptionSample {
  PerceptionSample();
  ~PerceptionSample();
  PerceptionSample(const PerceptionSample&) = delete;
  PerceptionSample& operator=(const PerceptionSample&) = delete;
  PerceptionSample(PerceptionSample&& rhs) noexcept;
  PerceptionSample& operator=(PerceptionSample&& rhs) noexcept;

  // Populates a PerceptionSample object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PerceptionSample& out);

  // Populates a PerceptionSample object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PerceptionSample& out);

  // Creates a deep copy of PerceptionSample.
  PerceptionSample Clone() const;

  // Creates a PerceptionSample object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PerceptionSample> FromValue(const base::Value::Dict& value);

  // Creates a PerceptionSample object from a base::Value, or nullopt on
  // failure.
  static std::optional<PerceptionSample> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPerceptionSample object.
  base::Value::Dict ToValue() const;

  // The video analytics FramePerception for the associated image frame data.
  std::optional<FramePerception> frame_perception;

  // The image frame data for the associated FramePerception object.
  std::optional<ImageFrame> image_frame;

  // The audio perception results for an audio frame.
  std::optional<AudioPerception> audio_perception;

  // Perception results based on both audio and video inputs.
  std::optional<AudioVisualPerception> audio_visual_perception;

  // Stores metadata such as version of media perception features.
  std::optional<Metadata> metadata;

};

struct Diagnostics {
  Diagnostics();
  ~Diagnostics();
  Diagnostics(const Diagnostics&) = delete;
  Diagnostics& operator=(const Diagnostics&) = delete;
  Diagnostics(Diagnostics&& rhs) noexcept;
  Diagnostics& operator=(Diagnostics&& rhs) noexcept;

  // Populates a Diagnostics object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Diagnostics& out);

  // Populates a Diagnostics object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Diagnostics& out);

  // Creates a deep copy of Diagnostics.
  Diagnostics Clone() const;

  // Creates a Diagnostics object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Diagnostics> FromValue(const base::Value::Dict& value);

  // Creates a Diagnostics object from a base::Value, or nullopt on failure.
  static std::optional<Diagnostics> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDiagnostics object.
  base::Value::Dict ToValue() const;

  // Return parameter for $(ref:getDiagnostics) that specifies the error type for
  // failure cases.
  ServiceError service_error;

  // A buffer of image frames and the associated video analytics information that
  // can be used to diagnose a malfunction.
  std::optional<std::vector<PerceptionSample>> perception_samples;

};


//
// Functions
//

namespace GetState {

namespace Results {

base::Value::List Create(const State& state);
}  // namespace Results

}  // namespace GetState

namespace SetState {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A dictionary with the desired new state. The only settable states are
  // <code>RUNNING</code>, <code>SUSPENDED</code>, and <code>RESTARTING</code>.
  State state;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const State& state);
}  // namespace Results

}  // namespace SetState

namespace GetDiagnostics {

namespace Results {

base::Value::List Create(const Diagnostics& diagnostics);
}  // namespace Results

}  // namespace GetDiagnostics

namespace SetAnalyticsComponent {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The desired component to install and load.
  Component component;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ComponentState& component_state);
}  // namespace Results

}  // namespace SetAnalyticsComponent

namespace SetComponentProcessState {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The desired state for the component process.
  ProcessState process_state;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ProcessState& process_state);
}  // namespace Results

}  // namespace SetComponentProcessState

//
// Events
//

namespace OnMediaPerception {

extern const char kEventName[];  // "mediaPerceptionPrivate.onMediaPerception"

// The dictionary which contains a dump of everything the analytics process has
// detected or determined from the incoming media streams.
base::Value::List Create(const MediaPerception& media_perception);
}  // namespace OnMediaPerception

}  // namespace media_perception_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_MEDIA_PERCEPTION_PRIVATE_H__
