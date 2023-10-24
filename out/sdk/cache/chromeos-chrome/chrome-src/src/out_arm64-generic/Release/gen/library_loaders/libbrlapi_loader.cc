// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#include "libbrlapi.h"

#include <dlfcn.h>

// Put these sanity checks here so that they fire at most once
// (to avoid cluttering the build output).
#if !defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN) && !defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
#error neither LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN nor LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED defined
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN) && defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
#error both LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN and LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED defined
#endif

LibBrlapiLoader::LibBrlapiLoader() : loaded_(false) {
}

LibBrlapiLoader::~LibBrlapiLoader() {
  CleanUp(loaded_);
}

bool LibBrlapiLoader::Load(const std::string& library_name) {
  if (loaded_)
    return false;

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  library_ = dlopen(library_name.c_str(), RTLD_LAZY);
  if (!library_)
    return false;
#endif


#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi_getHandleSize =
      reinterpret_cast<decltype(this->brlapi_getHandleSize)>(
          dlsym(library_, "brlapi_getHandleSize"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi_getHandleSize = &::brlapi_getHandleSize;
#endif
  if (!brlapi_getHandleSize) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi_error_location =
      reinterpret_cast<decltype(this->brlapi_error_location)>(
          dlsym(library_, "brlapi_error_location"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi_error_location = &::brlapi_error_location;
#endif
  if (!brlapi_error_location) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi_strerror =
      reinterpret_cast<decltype(this->brlapi_strerror)>(
          dlsym(library_, "brlapi_strerror"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi_strerror = &::brlapi_strerror;
#endif
  if (!brlapi_strerror) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__acceptKeys =
      reinterpret_cast<decltype(this->brlapi__acceptKeys)>(
          dlsym(library_, "brlapi__acceptKeys"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__acceptKeys = &::brlapi__acceptKeys;
#endif
  if (!brlapi__acceptKeys) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__openConnection =
      reinterpret_cast<decltype(this->brlapi__openConnection)>(
          dlsym(library_, "brlapi__openConnection"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__openConnection = &::brlapi__openConnection;
#endif
  if (!brlapi__openConnection) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__closeConnection =
      reinterpret_cast<decltype(this->brlapi__closeConnection)>(
          dlsym(library_, "brlapi__closeConnection"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__closeConnection = &::brlapi__closeConnection;
#endif
  if (!brlapi__closeConnection) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__getDisplaySize =
      reinterpret_cast<decltype(this->brlapi__getDisplaySize)>(
          dlsym(library_, "brlapi__getDisplaySize"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__getDisplaySize = &::brlapi__getDisplaySize;
#endif
  if (!brlapi__getDisplaySize) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__enterTtyModeWithPath =
      reinterpret_cast<decltype(this->brlapi__enterTtyModeWithPath)>(
          dlsym(library_, "brlapi__enterTtyModeWithPath"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__enterTtyModeWithPath = &::brlapi__enterTtyModeWithPath;
#endif
  if (!brlapi__enterTtyModeWithPath) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__leaveTtyMode =
      reinterpret_cast<decltype(this->brlapi__leaveTtyMode)>(
          dlsym(library_, "brlapi__leaveTtyMode"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__leaveTtyMode = &::brlapi__leaveTtyMode;
#endif
  if (!brlapi__leaveTtyMode) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__writeDots =
      reinterpret_cast<decltype(this->brlapi__writeDots)>(
          dlsym(library_, "brlapi__writeDots"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__writeDots = &::brlapi__writeDots;
#endif
  if (!brlapi__writeDots) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__readKey =
      reinterpret_cast<decltype(this->brlapi__readKey)>(
          dlsym(library_, "brlapi__readKey"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__readKey = &::brlapi__readKey;
#endif
  if (!brlapi__readKey) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  brlapi__getParameter =
      reinterpret_cast<decltype(this->brlapi__getParameter)>(
          dlsym(library_, "brlapi__getParameter"));
#endif
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DT_NEEDED)
  brlapi__getParameter = &::brlapi__getParameter;
#endif
  if (!brlapi__getParameter) {
    CleanUp(true);
    return false;
  }


  loaded_ = true;
  return true;
}

void LibBrlapiLoader::CleanUp(bool unload) {
#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  if (unload) {
    dlclose(library_);
    library_ = NULL;
  }
#endif
  loaded_ = false;
  brlapi_getHandleSize = NULL;
  brlapi_error_location = NULL;
  brlapi_strerror = NULL;
  brlapi__acceptKeys = NULL;
  brlapi__openConnection = NULL;
  brlapi__closeConnection = NULL;
  brlapi__getDisplaySize = NULL;
  brlapi__enterTtyModeWithPath = NULL;
  brlapi__leaveTtyMode = NULL;
  brlapi__writeDots = NULL;
  brlapi__readKey = NULL;
  brlapi__getParameter = NULL;

}
