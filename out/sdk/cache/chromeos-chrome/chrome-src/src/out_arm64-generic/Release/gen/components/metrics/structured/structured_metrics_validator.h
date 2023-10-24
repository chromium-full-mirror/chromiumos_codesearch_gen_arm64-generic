// Generated from gen_validator.py. DO NOT EDIT!
// source: structured.xml

#ifndef METRICS_STRUCTURED_STRUCTURED_METRICS_VALIDATOR_H
#define METRICS_STRUCTURED_STRUCTURED_METRICS_VALIDATOR_H

#include <memory>
#include <string>
#include <unordered_map>

#include "base/strings/string_piece.h"
#include "components/metrics/structured/project_validator.h"
#include "third_party/abseil-cpp/absl/types/optional.h"

namespace metrics {
namespace structured {
namespace validator {

class Validators final {

public:
  Validators();

  Validators(const Validators&) = delete;
  Validators& operator=(const Validators&) = delete;

  void Initialize();

  absl::optional<const ProjectValidator*>
    GetProjectValidator(const std::string& project_name);

private:
  std::unordered_map<base::StringPiece, std::unique_ptr<ProjectValidator>>
      validators_;
};

}  // namespace validator
}  // namespace structured
}  // namespace metrics

#endif  // METRICS_STRUCTURED_STRUCTURED_METRICS_VALIDATOR_H