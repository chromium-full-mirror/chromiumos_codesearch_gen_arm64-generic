pub struct FeatureDecl {
    pub name: &'static str,
    pub default_enabled: bool,
}

pub const FEATURES: [FeatureDecl; 13] = [
    FeatureDecl { name: "CrOSLateBootUnknown", default_enabled: false},
    FeatureDecl { name: "CrOSLateBootDisabledByDefault", default_enabled: false},
    FeatureDecl { name: "CrOSLateBootEnabledByDefault", default_enabled: true},
    FeatureDecl { name: "CrOSLateBootAudioHFPOffload", default_enabled: false},
    FeatureDecl { name: "CrOSLateBootAudioHFPMicSR", default_enabled: false},
    FeatureDecl { name: "CrOSLateBootAudioFlexibleLoopback", default_enabled: true},
    FeatureDecl { name: "CrOSLateBootAudioAPNoiseCancellation", default_enabled: false},
    FeatureDecl { name: "CrOSLateBootCrasSplitAlsaUSBInternal", default_enabled: true},
    FeatureDecl { name: "CrOSLateBootAudioHFPSwb", default_enabled: false},
    FeatureDecl { name: "CrOSLateBootAudioA2DPAdvancedCodecs", default_enabled: false},
    FeatureDecl { name: "CrOSLateBootAudioEmptyAPMForCrasProcessor", default_enabled: true},
    FeatureDecl { name: "CrOSLateBootAudioSuppressSetRTCAudioActive", default_enabled: false},
    FeatureDecl { name: "CrOSLateBootAudioOffloadCrasDSPToSOF", default_enabled: false},
];
