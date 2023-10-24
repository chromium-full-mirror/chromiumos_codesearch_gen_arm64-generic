// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#ifndef LIBRARY_LOADER_LIBCHROMETTS_H
#define LIBRARY_LOADER_LIBCHROMETTS_H

#include "chromeos/services/tts/chrome_tts.h"
#define LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN


#include <string>

class LibChromeTtsLoader {
 public:
  LibChromeTtsLoader();
  ~LibChromeTtsLoader();

  bool Load(const std::string& library_name)
      __attribute__((warn_unused_result));

  bool loaded() const { return loaded_; }

  decltype(&::GoogleTtsSetLogger) GoogleTtsSetLogger;
  decltype(&::GoogleTtsPreSandboxInit) GoogleTtsPreSandboxInit;
  decltype(&::GoogleTtsInit) GoogleTtsInit;
  decltype(&::GoogleTtsShutdown) GoogleTtsShutdown;
  decltype(&::GoogleTtsInstallVoice) GoogleTtsInstallVoice;
  decltype(&::GoogleTtsInitBuffered) GoogleTtsInitBuffered;
  decltype(&::GoogleTtsReadBuffered) GoogleTtsReadBuffered;
  decltype(&::GoogleTtsGetTimepointsCount) GoogleTtsGetTimepointsCount;
  decltype(&::GoogleTtsGetTimepointsTimeInSecsAtIndex) GoogleTtsGetTimepointsTimeInSecsAtIndex;
  decltype(&::GoogleTtsGetTimepointsCharIndexAtIndex) GoogleTtsGetTimepointsCharIndexAtIndex;
  decltype(&::GoogleTtsGetFramesInAudioBuffer) GoogleTtsGetFramesInAudioBuffer;


 private:
  void CleanUp(bool unload);

#if defined(LIBRARY_LOADER_LIBCHROMETTS_H_DLOPEN)
  void* library_;
#endif

  bool loaded_;

  // Disallow copy constructor and assignment operator.
  LibChromeTtsLoader(const LibChromeTtsLoader&);
  void operator=(const LibChromeTtsLoader&);
};

#endif  // LIBRARY_LOADER_LIBCHROMETTS_H
