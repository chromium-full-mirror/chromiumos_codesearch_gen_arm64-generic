#pragma once
#include "gd/rust/topshim/common/type_alias.h"
#include "controller/controller_shim.h"
#include <memory>

namespace bluetooth {
  namespace topshim {
    namespace rust {
      using ControllerIntf = ::bluetooth::topshim::rust::ControllerIntf;
    }
  }
}
