// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#include "libchrometts.h"

#include <dlfcn.h>

// Put these sanity checks here so that they fire at most once
// (to avoid cluttering the build output).
#if !defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN) && !defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
#error neither LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN nor LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED defined
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN) && defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
#error both LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN and LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED defined
#endif

LibChromeTtsLoader::LibChromeTtsLoader() : loaded_(false) {
}

LibChromeTtsLoader::~LibChromeTtsLoader() {
  CleanUp(loaded_);
}

bool LibChromeTtsLoader::Load(const std::string& library_name) {
  if (loaded_)
    return false;

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  library_ = dlopen(library_name.c_str(), RTLD_LAZY);
  if (!library_)
    return false;
#endif


#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsSetLogger =
      reinterpret_cast<decltype(this->GoogleTtsSetLogger)>(
          dlsym(library_, "GoogleTtsSetLogger"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsSetLogger = &::GoogleTtsSetLogger;
#endif
  if (!GoogleTtsSetLogger) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsPreSandboxInit =
      reinterpret_cast<decltype(this->GoogleTtsPreSandboxInit)>(
          dlsym(library_, "GoogleTtsPreSandboxInit"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsPreSandboxInit = &::GoogleTtsPreSandboxInit;
#endif
  if (!GoogleTtsPreSandboxInit) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsInit =
      reinterpret_cast<decltype(this->GoogleTtsInit)>(
          dlsym(library_, "GoogleTtsInit"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsInit = &::GoogleTtsInit;
#endif
  if (!GoogleTtsInit) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsShutdown =
      reinterpret_cast<decltype(this->GoogleTtsShutdown)>(
          dlsym(library_, "GoogleTtsShutdown"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsShutdown = &::GoogleTtsShutdown;
#endif
  if (!GoogleTtsShutdown) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsInstallVoice =
      reinterpret_cast<decltype(this->GoogleTtsInstallVoice)>(
          dlsym(library_, "GoogleTtsInstallVoice"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsInstallVoice = &::GoogleTtsInstallVoice;
#endif
  if (!GoogleTtsInstallVoice) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsInitBuffered =
      reinterpret_cast<decltype(this->GoogleTtsInitBuffered)>(
          dlsym(library_, "GoogleTtsInitBuffered"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsInitBuffered = &::GoogleTtsInitBuffered;
#endif
  if (!GoogleTtsInitBuffered) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsReadBuffered =
      reinterpret_cast<decltype(this->GoogleTtsReadBuffered)>(
          dlsym(library_, "GoogleTtsReadBuffered"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsReadBuffered = &::GoogleTtsReadBuffered;
#endif
  if (!GoogleTtsReadBuffered) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsGetTimepointsCount =
      reinterpret_cast<decltype(this->GoogleTtsGetTimepointsCount)>(
          dlsym(library_, "GoogleTtsGetTimepointsCount"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsGetTimepointsCount = &::GoogleTtsGetTimepointsCount;
#endif
  if (!GoogleTtsGetTimepointsCount) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsGetTimepointsTimeInSecsAtIndex =
      reinterpret_cast<decltype(this->GoogleTtsGetTimepointsTimeInSecsAtIndex)>(
          dlsym(library_, "GoogleTtsGetTimepointsTimeInSecsAtIndex"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsGetTimepointsTimeInSecsAtIndex = &::GoogleTtsGetTimepointsTimeInSecsAtIndex;
#endif
  if (!GoogleTtsGetTimepointsTimeInSecsAtIndex) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsGetTimepointsCharIndexAtIndex =
      reinterpret_cast<decltype(this->GoogleTtsGetTimepointsCharIndexAtIndex)>(
          dlsym(library_, "GoogleTtsGetTimepointsCharIndexAtIndex"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsGetTimepointsCharIndexAtIndex = &::GoogleTtsGetTimepointsCharIndexAtIndex;
#endif
  if (!GoogleTtsGetTimepointsCharIndexAtIndex) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  GoogleTtsGetFramesInAudioBuffer =
      reinterpret_cast<decltype(this->GoogleTtsGetFramesInAudioBuffer)>(
          dlsym(library_, "GoogleTtsGetFramesInAudioBuffer"));
#endif
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DT_NEEDED)
  GoogleTtsGetFramesInAudioBuffer = &::GoogleTtsGetFramesInAudioBuffer;
#endif
  if (!GoogleTtsGetFramesInAudioBuffer) {
    CleanUp(true);
    return false;
  }


  loaded_ = true;
  return true;
}

void LibChromeTtsLoader::CleanUp(bool unload) {
#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  if (unload) {
    dlclose(library_);
    library_ = NULL;
  }
#endif
  loaded_ = false;
  GoogleTtsSetLogger = NULL;
  GoogleTtsPreSandboxInit = NULL;
  GoogleTtsInit = NULL;
  GoogleTtsShutdown = NULL;
  GoogleTtsInstallVoice = NULL;
  GoogleTtsInitBuffered = NULL;
  GoogleTtsReadBuffered = NULL;
  GoogleTtsGetTimepointsCount = NULL;
  GoogleTtsGetTimepointsTimeInSecsAtIndex = NULL;
  GoogleTtsGetTimepointsCharIndexAtIndex = NULL;
  GoogleTtsGetFramesInAudioBuffer = NULL;

}
