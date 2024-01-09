// Generated from gen_validator.py. DO NOT EDIT!
// source: structured.xml

#ifndef METRICS_STRUCTURED_STRUCTURED_METRICS_VALIDATOR_H
#define METRICS_STRUCTURED_STRUCTURED_METRICS_VALIDATOR_H

#include <memory>
#include <string>
#include <unordered_map>

#include "base/no_destructor.h"
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
    GetProjectValidator(base::StringPiece project_name) const;

  absl::optional<base::StringPiece>
    GetProjectName(uint64_t project_name_hash) const;

  static Validators* Get();

private:
  friend class base::NoDestructor<Validators>;

  std::unordered_map<base::StringPiece, std::unique_ptr<ProjectValidator>>
      validators_;
  std::unordered_map<uint64_t, base::StringPiece> project_name_map_;
};

}  // namespace validator
}  // namespace structured
}  // namespace metrics

#endif  // METRICS_STRUCTURED_STRUCTURED_METRICS_VALIDATOR_H