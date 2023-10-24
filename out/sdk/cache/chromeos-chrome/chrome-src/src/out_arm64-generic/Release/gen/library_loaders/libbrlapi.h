// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#ifndef LIBRARY_LOADER_LIBBRLAPI_H
#define LIBRARY_LOADER_LIBBRLAPI_H

#include "third_party/libbrlapi/brlapi.h"
#define LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN


#include <string>

class LibBrlapiLoader {
 public:
  LibBrlapiLoader();
  ~LibBrlapiLoader();

  bool Load(const std::string& library_name)
      __attribute__((warn_unused_result));

  bool loaded() const { return loaded_; }

  decltype(&::brlapi_getHandleSize) brlapi_getHandleSize;
  decltype(&::brlapi_error_location) brlapi_error_location;
  decltype(&::brlapi_strerror) brlapi_strerror;
  decltype(&::brlapi__acceptKeys) brlapi__acceptKeys;
  decltype(&::brlapi__openConnection) brlapi__openConnection;
  decltype(&::brlapi__closeConnection) brlapi__closeConnection;
  decltype(&::brlapi__getDisplaySize) brlapi__getDisplaySize;
  decltype(&::brlapi__enterTtyModeWithPath) brlapi__enterTtyModeWithPath;
  decltype(&::brlapi__leaveTtyMode) brlapi__leaveTtyMode;
  decltype(&::brlapi__writeDots) brlapi__writeDots;
  decltype(&::brlapi__readKey) brlapi__readKey;
  decltype(&::brlapi__getParameter) brlapi__getParameter;


 private:
  void CleanUp(bool unload);

#if defined(LIBRARY_LOADER_LIBBRLAPI_H_DLOPEN)
  void* library_;
#endif

  bool loaded_;

  // Disallow copy constructor and assignment operator.
  LibBrlapiLoader(const LibBrlapiLoader&);
  void operator=(const LibBrlapiLoader&);
};

#endif  // LIBRARY_LOADER_LIBBRLAPI_H
