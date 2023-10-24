import{LitElement,isServer,property,css,customElement,state,query,html,classMap,svg,styleMap,queryAssignedElements,literal,staticHtml,nothing}from"chrome://resources/mwc/lit/index.js";import{html as html$1,Polymer,dom,mixinBehaviors,PolymerElement,Base,dedupingMixin}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{loadTimeData}from"chrome://resources/ash/common/load_time_data.m.js";
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const intervals={};function startInterval(name){intervals[name]=Date.now()}function convertName(name){return"FileBrowser."+name}function callAPI(name,args){try{const method=chrome.metricsPrivate[name];method.apply(chrome.metricsPrivate,args)}catch(e){console.error(e.stack)}}function recordMediumCount(name,value){callAPI("recordMediumCount",[convertName(name),value])}function recordSmallCount(name,value){callAPI("recordSmallCount",[convertName(name),value])}function recordTime(name,time){callAPI("recordTime",[convertName(name),time])}function recordBoolean(name,value){callAPI("recordBoolean",[convertName(name),value])}function recordUserAction(name){callAPI("recordUserAction",[convertName(name)])}function recordValue(name,type,min,max,buckets,value){callAPI("recordValue",[{metricName:convertName(name),type:type,min:min,max:max,buckets:buckets},value])}function recordInterval(name){const start=intervals[name];if(start!==undefined){recordTime(name,Date.now()-start)}else{console.error("Unknown interval: "+name)}}function recordDirectoryListLoadWithTolerance(name,numFiles,buckets,tolerance){const start=intervals[name];if(start!==undefined){for(const bucketValue of buckets){const toleranceMargin=bucketValue*tolerance;if(numFiles>=bucketValue-toleranceMargin&&numFiles<=bucketValue+toleranceMargin){recordTime(`${name}.${bucketValue}`,Date.now()-start);return}}}else{console.error("Interval not started:",name)}}function recordEnum(name,value,validValues){console.assert(validValues!==undefined);let index=validValues.indexOf(value);const boundaryValue=validValues.length;if(index<0||index>=boundaryValue){index=boundaryValue-1}const metricDescr={metricName:convertName(name),type:chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,min:1,max:boundaryValue-1,buckets:boundaryValue};callAPI("recordValue",[metricDescr,index])}
// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert$1(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached$1(message){assert$1(false,message||"Unreachable code hit")}function assertInstanceof$1(value,type,message){if(!(value instanceof type)){assertNotReached$1(message||"Value "+value+" is not a[n] "+(type.name||typeof type))}return value}
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const VolumeManagerCommon={};const AllowedPaths={NATIVE_PATH:"nativePath",ANY_PATH:"anyPath",ANY_PATH_OR_URL:"anyPathOrUrl"};VolumeManagerCommon.FileSystemType={UNKNOWN:"",VFAT:"vfat",EXFAT:"exfat",NTFS:"ntfs",HFSPLUS:"hfsplus",EXT2:"ext2",EXT3:"ext3",EXT4:"ext4",ISO9660:"iso9660",UDF:"udf"};VolumeManagerCommon.FileSystemTypeVolumeNameLengthLimit={vfat:11,exfat:15,ntfs:32};VolumeManagerCommon.RootType={DOWNLOADS:"downloads",ARCHIVE:"archive",REMOVABLE:"removable",DRIVE:"drive",SHARED_DRIVES_GRAND_ROOT:"shared_drives_grand_root",SHARED_DRIVE:"team_drive",MTP:"mtp",PROVIDED:"provided",DRIVE_OFFLINE:"drive_offline",DRIVE_SHARED_WITH_ME:"drive_shared_with_me",DRIVE_RECENT:"drive_recent",MEDIA_VIEW:"media_view",DOCUMENTS_PROVIDER:"documents_provider",RECENT:"recent",DRIVE_FAKE_ROOT:"drive_fake_root",CROSTINI:"crostini",GUEST_OS:"guest_os",ANDROID_FILES:"android_files",MY_FILES:"my_files",COMPUTERS_GRAND_ROOT:"computers_grand_root",COMPUTER:"computer",EXTERNAL_MEDIA:"external_media",SMB:"smb",TRASH:"trash"};Object.freeze(VolumeManagerCommon.RootType);VolumeManagerCommon.RootTypesForUMA=[VolumeManagerCommon.RootType.DOWNLOADS,VolumeManagerCommon.RootType.ARCHIVE,VolumeManagerCommon.RootType.REMOVABLE,VolumeManagerCommon.RootType.DRIVE,VolumeManagerCommon.RootType.SHARED_DRIVES_GRAND_ROOT,VolumeManagerCommon.RootType.SHARED_DRIVE,VolumeManagerCommon.RootType.MTP,VolumeManagerCommon.RootType.PROVIDED,"DEPRECATED_DRIVE_OTHER",VolumeManagerCommon.RootType.DRIVE_OFFLINE,VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME,VolumeManagerCommon.RootType.DRIVE_RECENT,VolumeManagerCommon.RootType.MEDIA_VIEW,VolumeManagerCommon.RootType.RECENT,VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT,"DEPRECATED_ADD_NEW_SERVICES_MENU",VolumeManagerCommon.RootType.CROSTINI,VolumeManagerCommon.RootType.ANDROID_FILES,VolumeManagerCommon.RootType.MY_FILES,VolumeManagerCommon.RootType.COMPUTERS_GRAND_ROOT,VolumeManagerCommon.RootType.COMPUTER,VolumeManagerCommon.RootType.EXTERNAL_MEDIA,VolumeManagerCommon.RootType.DOCUMENTS_PROVIDER,VolumeManagerCommon.RootType.SMB,"DEPRECATED_RECENT_AUDIO","DEPRECATED_RECENT_IMAGES","DEPRECATED_RECENT_VIDEOS",VolumeManagerCommon.RootType.TRASH,VolumeManagerCommon.RootType.GUEST_OS];VolumeManagerCommon.VolumeError={TIMEOUT:"timeout",UNKNOWN_ERROR:chrome.fileManagerPrivate.MountError.UNKNOWN_ERROR,INTERNAL_ERROR:chrome.fileManagerPrivate.MountError.INTERNAL_ERROR,INVALID_ARGUMENT:chrome.fileManagerPrivate.MountError.INVALID_ARGUMENT,INVALID_PATH:chrome.fileManagerPrivate.MountError.INVALID_PATH,PATH_ALREADY_MOUNTED:chrome.fileManagerPrivate.MountError.PATH_ALREADY_MOUNTED,PATH_NOT_MOUNTED:chrome.fileManagerPrivate.MountError.PATH_NOT_MOUNTED,DIRECTORY_CREATION_FAILED:chrome.fileManagerPrivate.MountError.DIRECTORY_CREATION_FAILED,INVALID_MOUNT_OPTIONS:chrome.fileManagerPrivate.MountError.INVALID_MOUNT_OPTIONS,INSUFFICIENT_PERMISSIONS:chrome.fileManagerPrivate.MountError.INSUFFICIENT_PERMISSIONS,MOUNT_PROGRAM_NOT_FOUND:chrome.fileManagerPrivate.MountError.MOUNT_PROGRAM_NOT_FOUND,MOUNT_PROGRAM_FAILED:chrome.fileManagerPrivate.MountError.MOUNT_PROGRAM_FAILED,INVALID_DEVICE_PATH:chrome.fileManagerPrivate.MountError.INVALID_DEVICE_PATH,UNKNOWN_FILESYSTEM:chrome.fileManagerPrivate.MountError.UNKNOWN_FILESYSTEM,UNSUPPORTED_FILESYSTEM:chrome.fileManagerPrivate.MountError.UNSUPPORTED_FILESYSTEM,NEED_PASSWORD:chrome.fileManagerPrivate.MountError.NEED_PASSWORD,CANCELLED:chrome.fileManagerPrivate.MountError.CANCELLED,BUSY:chrome.fileManagerPrivate.MountError.BUSY};Object.freeze(VolumeManagerCommon.VolumeError);VolumeManagerCommon.VolumeType={DRIVE:"drive",DOWNLOADS:"downloads",REMOVABLE:"removable",ARCHIVE:"archive",MTP:"mtp",PROVIDED:"provided",MEDIA_VIEW:"media_view",DOCUMENTS_PROVIDER:"documents_provider",CROSTINI:"crostini",GUEST_OS:"guest_os",ANDROID_FILES:"android_files",MY_FILES:"my_files",SMB:"smb",SYSTEM_INTERNAL:"system_internal",TRASH:"trash"};VolumeManagerCommon.Source={FILE:"file",DEVICE:"device",NETWORK:"network",SYSTEM:"system"};function isNative(type){return type===VolumeManagerCommon.VolumeType.DOWNLOADS||type===VolumeManagerCommon.VolumeType.DRIVE||type===VolumeManagerCommon.VolumeType.ANDROID_FILES||type===VolumeManagerCommon.VolumeType.CROSTINI||type===VolumeManagerCommon.VolumeType.GUEST_OS||type===VolumeManagerCommon.VolumeType.REMOVABLE||type===VolumeManagerCommon.VolumeType.ARCHIVE||type===VolumeManagerCommon.VolumeType.SMB}Object.freeze(VolumeManagerCommon.VolumeType);VolumeManagerCommon.getVolumeTypeFromRootType=rootType=>{switch(rootType){case VolumeManagerCommon.RootType.DOWNLOADS:return VolumeManagerCommon.VolumeType.DOWNLOADS;case VolumeManagerCommon.RootType.ARCHIVE:return VolumeManagerCommon.VolumeType.ARCHIVE;case VolumeManagerCommon.RootType.REMOVABLE:return VolumeManagerCommon.VolumeType.REMOVABLE;case VolumeManagerCommon.RootType.DRIVE:case VolumeManagerCommon.RootType.SHARED_DRIVES_GRAND_ROOT:case VolumeManagerCommon.RootType.SHARED_DRIVE:case VolumeManagerCommon.RootType.DRIVE_OFFLINE:case VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME:case VolumeManagerCommon.RootType.DRIVE_RECENT:case VolumeManagerCommon.RootType.COMPUTERS_GRAND_ROOT:case VolumeManagerCommon.RootType.COMPUTER:case VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT:case VolumeManagerCommon.RootType.EXTERNAL_MEDIA:return VolumeManagerCommon.VolumeType.DRIVE;case VolumeManagerCommon.RootType.MTP:return VolumeManagerCommon.VolumeType.MTP;case VolumeManagerCommon.RootType.PROVIDED:return VolumeManagerCommon.VolumeType.PROVIDED;case VolumeManagerCommon.RootType.MEDIA_VIEW:return VolumeManagerCommon.VolumeType.MEDIA_VIEW;case VolumeManagerCommon.RootType.DOCUMENTS_PROVIDER:return VolumeManagerCommon.VolumeType.DOCUMENTS_PROVIDER;case VolumeManagerCommon.RootType.CROSTINI:return VolumeManagerCommon.VolumeType.CROSTINI;case VolumeManagerCommon.RootType.GUEST_OS:return VolumeManagerCommon.VolumeType.GUEST_OS;case VolumeManagerCommon.RootType.ANDROID_FILES:return VolumeManagerCommon.VolumeType.ANDROID_FILES;case VolumeManagerCommon.RootType.MY_FILES:return VolumeManagerCommon.VolumeType.MY_FILES;case VolumeManagerCommon.RootType.SMB:return VolumeManagerCommon.VolumeType.SMB;case VolumeManagerCommon.RootType.TRASH:return VolumeManagerCommon.VolumeType.TRASH}assertNotReached$1("Unknown root type: "+rootType);return VolumeManagerCommon.VolumeType.DOWNLOADS};VolumeManagerCommon.getRootTypeFromVolumeType=volumeType=>{switch(volumeType){case VolumeManagerCommon.VolumeType.ANDROID_FILES:return VolumeManagerCommon.RootType.ANDROID_FILES;case VolumeManagerCommon.VolumeType.ARCHIVE:return VolumeManagerCommon.RootType.ARCHIVE;case VolumeManagerCommon.VolumeType.CROSTINI:return VolumeManagerCommon.RootType.CROSTINI;case VolumeManagerCommon.VolumeType.GUEST_OS:return VolumeManagerCommon.RootType.GUEST_OS;case VolumeManagerCommon.VolumeType.DOWNLOADS:return VolumeManagerCommon.RootType.DOWNLOADS;case VolumeManagerCommon.VolumeType.DRIVE:return VolumeManagerCommon.RootType.DRIVE;case VolumeManagerCommon.VolumeType.MEDIA_VIEW:return VolumeManagerCommon.RootType.MEDIA_VIEW;case VolumeManagerCommon.VolumeType.DOCUMENTS_PROVIDER:return VolumeManagerCommon.RootType.DOCUMENTS_PROVIDER;case VolumeManagerCommon.VolumeType.MTP:return VolumeManagerCommon.RootType.MTP;case VolumeManagerCommon.VolumeType.MY_FILES:return VolumeManagerCommon.RootType.MY_FILES;case VolumeManagerCommon.VolumeType.PROVIDED:return VolumeManagerCommon.RootType.PROVIDED;case VolumeManagerCommon.VolumeType.REMOVABLE:return VolumeManagerCommon.RootType.REMOVABLE;case VolumeManagerCommon.VolumeType.SMB:return VolumeManagerCommon.RootType.SMB;case VolumeManagerCommon.VolumeType.TRASH:return VolumeManagerCommon.RootType.TRASH}assertNotReached$1("Unknown volume type: "+volumeType);return VolumeManagerCommon.VolumeType.DOWNLOADS};VolumeManagerCommon.shouldProvideIcons=volumeType=>{switch(volumeType){case VolumeManagerCommon.VolumeType.ANDROID_FILES:return true;case VolumeManagerCommon.VolumeType.DOCUMENTS_PROVIDER:return true;case VolumeManagerCommon.VolumeType.PROVIDED:return true}if(!volumeType){assertNotReached$1("Invalid volume type: "+volumeType)}return false};VolumeManagerCommon.MediaViewRootType={IMAGES:"images_root",VIDEOS:"videos_root",AUDIO:"audio_root",DOCUMENTS:"documents_root"};Object.freeze(VolumeManagerCommon.MediaViewRootType);VolumeManagerCommon.getMediaViewRootTypeFromVolumeId=volumeId=>volumeId.split(":",2)[1];VolumeManagerCommon.VOLUME_ALREADY_MOUNTED="volume_already_mounted";VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_NAME="team_drives";VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH="/"+VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_NAME;VolumeManagerCommon.COMPUTERS_DIRECTORY_NAME="Computers";VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH="/"+VolumeManagerCommon.COMPUTERS_DIRECTORY_NAME;VolumeManagerCommon.ARCHIVE_OPENED_EVENT_TYPE="archive_opened";VolumeManagerCommon.PHOTOS_DOCUMENTS_PROVIDER_VOLUME_ID="documents_provider:com.google.android.apps.photos.photoprovider/com.google.android.apps.photos";VolumeManagerCommon.MEDIA_DOCUMENTS_PROVIDER_ID="com.android.providers.media.documents";VolumeManagerCommon.createArchiveOpenedEvent=mountPoint=>new CustomEvent(VolumeManagerCommon.ARCHIVE_OPENED_EVENT_TYPE,{detail:{mountPoint:mountPoint}});VolumeManagerCommon.isRecentArcEntry=entry=>{if(!entry){return false}return entry.filesystem.name.startsWith(VolumeManagerCommon.MEDIA_DOCUMENTS_PROVIDER_ID)};
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EntryType={FS_API:"FS_API",VOLUME_ROOT:"VOLUME_ROOT",ENTRY_LIST:"ENTRY_LIST",PLACEHOLDER:"PLACEHOLDER",TRASH:"TRASH",RECENT:"RECENT"};const PropStatus={STARTED:"STARTED",SUCCESS:"SUCCESS",ERROR:"ERROR"};const SearchLocation={EVERYWHERE:"everywhere",ROOT_FOLDER:"root_folder",THIS_FOLDER:"this_folder"};const SearchRecency={ANYTIME:"anytime",TODAY:"today",YESTERDAY:"yesterday",LAST_WEEK:"last_week",LAST_MONTH:"last_month",LAST_YEAR:"last_year"};const NavigationSection={TOP:"top",MY_FILES:"my_files",GOOGLE_DRIVE:"google_drive",ODFS:"odfs",CLOUD:"cloud",TRASH:"trash",ANDROID_APPS:"android_apps",REMOVABLE:"removable"};const NavigationType={SHORTCUT:"shortcut",VOLUME:"volume",RECENT:"recent",CROSTINI:"crostini",GUEST_OS:"guest_os",ENTRY_LIST:"entry_list",DRIVE:"drive",ANDROID_APPS:"android_apps",TRASH:"trash",MATERIALIZED_VIEW:"materialized_view"};
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const constants={};constants.ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES=["canPin","hosted","pinned"];constants.EXECUTABLE_EXTENSIONS=Object.freeze([".exe",".lnk",".deb",".dmg",".jar",".msi"]);constants.FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES=["availableOffline","contentMimeType","hosted","canPin"];constants.LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES=["availableOffline","contentMimeType","customIconUrl","hosted","modificationTime","modificationByMeTime","pinned","shared","size","canCopy","canDelete","canRename","canAddChildren","canShare","canPin","isMachineRoot","isExternalMedia","isArbitrarySyncFolder"];constants.DLP_METADATA_PREFETCH_PROPERTY_NAMES=["isDlpRestricted","sourceUrl","isRestrictedForDestination"];constants.DEFAULT_CROSTINI_VM="termina";constants.PLUGIN_VM="PvmDefault";constants.DEFAULT_BRUSCHETTA_VM="bru";constants.CROSTINI_CONNECT_ERR="CrostiniConnectErr";constants.FSP_ACTION_HIDDEN_ONEDRIVE_URL="HIDDEN_ONEDRIVE_URL";constants.FSP_ACTION_HIDDEN_ONEDRIVE_USER_EMAIL="HIDDEN_ONEDRIVE_USER_EMAIL";constants.FSP_ACTION_HIDDEN_ONEDRIVE_REAUTHENTICATION_REQUIRED="HIDDEN_ONEDRIVE_REAUTHENTICATION_REQUIRED";constants.ICON_TYPES={ANDROID_FILES:"android_files",ARCHIVE:"archive",AUDIO:"audio",BLANK:"blank",BRUSCHETTA:"bruschetta",BULK_PINNING_BATTERY_SAVER:"bulk_pinning_battery_saver",BULK_PINNING_DONE:"bulk_pinning_done",BULK_PINNING_OFFLINE:"bulk_pinning_offline",CAMERA_FOLDER:"camera-folder",CANT_PIN:"cant-pin",CHECK:"check",CLOUD_DONE:"cloud_done",CLOUD_ERROR:"cloud_error",CLOUD_OFFLINE:"cloud_offline",CLOUD_PAUSED:"cloud_paused",CLOUD_SYNC:"cloud_sync",CLOUD:"cloud",COMPUTER:"computer",COMPUTERS_GRAND_ROOT:"computers_grand_root",CROSTINI:"crostini",DOWNLOADS:"downloads",DRIVE_BULK_PINNING:"drive_bulk_pinning",DRIVE_LOGO:"drive_logo",DRIVE_OFFLINE:"drive_offline",DRIVE_RECENT:"drive_recent",DRIVE_SHARED_WITH_ME:"drive_shared_with_me",DRIVE:"drive",ERROR:"error",ERROR_BANNER:"error_banner",EXCEL:"excel",EXTERNAL_MEDIA:"external_media",FOLDER:"folder",GENERIC:"generic",GOOGLE_DOC:"gdoc",GOOGLE_DRAW:"gdraw",GOOGLE_FORM:"gform",GOOGLE_LINK:"glink",GOOGLE_MAP:"gmap",GOOGLE_SHEET:"gsheet",GOOGLE_SITE:"gsite",GOOGLE_SLIDES:"gslides",GOOGLE_TABLE:"gtable",IMAGE:"image",MTP:"mtp",MY_FILES:"my_files",OFFLINE:"offline",OPTICAL:"optical",PDF:"pdf",PLUGIN_VM:"plugin_vm",POWERPOINT:"ppt",RAW:"raw",RECENT:"recent",REMOVABLE:"removable",SCRIPT:"script",SD_CARD:"sd",SERVICE_DRIVE:"service_drive",SHARED_DRIVE:"shared_drive",SHARED_DRIVES_GRAND_ROOT:"shared_drives_grand_root",SHARED_FOLDER:"shared_folder",SHORTCUT:"shortcut",SITES:"sites",SMB:"smb",TEAM_DRIVE:"team_drive",THUMBNAIL_GENERIC:"thumbnail_generic",TINI:"tini",TRASH:"trash",UNKNOWN_REMOVABLE:"unknown_removable",USB:"usb",VIDEO:"video",WORD:"word"};constants.ODFS_EXTENSION_ID="gnnndjlaomemikopnjhhnoombakkkkdg";
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ConcurrentActionInvalidatedError extends Error{}function isActionsProducer(value){return value.next!==undefined&&value.throw!==undefined}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SelectorController{constructor(host,value,subscribe){this.host=host;this.value=value;this.subscribe=subscribe;this.host.addController(this)}hostConnected(){this.unsubscribe=this.subscribe((value=>{this.value=value;this.host.requestUpdate()}))}hostDisconnected(){this.unsubscribe()}}class SelectorNode{constructor(parents,select,name){this.select=select;this.name=name;this.value_=undefined;this.subscribers_=[];this.parents_=[];this.depth=0;this.children=[];this.parents=parents}static createSourceNode(select){return new SelectorNode([],select)}static createDisconnectedNode(name){return new SelectorNode([],(()=>undefined),name)}get parents(){return this.parents_}set parents(parents){this.disconnect_();this.parents_=parents;for(const parent of parents){parent.children.push(this);this.depth=Math.max(this.depth,parent.depth+1)}this.emit()}disconnect_(){this.parents.forEach((p=>p.disconnectChild_(this)));this.parents_=[]}disconnectChild_(node){this.children.splice(this.children.indexOf(node),1)}emit(){const parentValues=this.parents.map((p=>p.get()));const newValue=this.select(...parentValues);if(newValue===this.value_){return false}if(window.DEBUG_STORE&&this.name){console.log(`Selector '${this.name}' emitted a new value:`);console.log(newValue)}this.value_=newValue;for(const subscriber of this.subscribers_){try{subscriber(newValue)}catch(e){console.error(e)}}return true}get(){return this.value_}subscribe(cb){this.subscribers_.push(cb);return()=>this.subscribers_.splice(this.subscribers_.indexOf(cb),1)}createController(host){return new SelectorController(host,this.get(),this.subscribe.bind(this))}delete(){if(this.children.length>0){throw new Error("Attempting to delete node that still has children.")}this.disconnect_();this.subscribers_=[]}}class SelectorEmitter{constructor(){this.sourceNodes_=[]}addSource(node){this.sourceNodes_.push(node)}processChange(){const toExplore=[...this.sourceNodes_];while(toExplore.length>0){const node=toExplore.pop();if(node.emit()){toExplore.push(...node.children);toExplore.sort(((a,b)=>b.depth-a.depth))}}}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Slice{constructor(name){this.name=name;this.reducers=new Map;this.selector=SelectorNode.createDisconnectedNode(this.name)}prependSliceName_(type){const isFullName=type[0]==="[";return isFullName?type:`[${this.name}] ${type}`}addReducer(localType,reducer){const type=this.prependSliceName_(localType);if(this.reducers.get(type)){throw new Error("Attempting to register multiple reducers "+`within slice for the same action type: ${type}`)}this.reducers.set(type,reducer);const actionFactory=payload=>({type:type,payload:payload});actionFactory.type=type;actionFactory.PAYLOAD=null;return actionFactory}}class BaseStore{constructor(state,slices){this.reducers_=new Map;this.initialized_=false;this.batchMode_=false;this.selectorEmitter_=new SelectorEmitter;this.state_=state;this.queuedActions_=[];this.observers_=[];this.initialized_=false;this.batchMode_=false;const sliceNames=new Set(slices.map((slice=>slice.name)));if(sliceNames.size!==slices.length){throw new Error("One or more given slices have the same name. "+"Please ensure slices are uniquely named: "+[...sliceNames].join(", "))}const rootSelector=SelectorNode.createSourceNode((()=>this.state_));this.selectorEmitter_.addSource(rootSelector);this.selector=rootSelector;for(const slice of slices){slice.selector.select=state=>state[slice.name];slice.selector.parents=[rootSelector];for(const[type,reducer]of slice.reducers.entries()){const reducerList=this.reducers_.get(type);if(!reducerList){this.reducers_.set(type,[reducer])}else{reducerList.push(reducer)}}}}init(initialState){this.state_=initialState;this.queuedActions_.forEach((action=>{this.dispatchInternal_(action)}));this.initialized_=true;this.selectorEmitter_.processChange();this.notifyObservers_(this.state_)}isInitialized(){return this.initialized_}subscribe(observer){this.observers_.push(observer);return this.unsubscribe.bind(this,observer)}unsubscribe(observer){this.observers_=this.observers_.filter((o=>o!==observer))}beginBatchUpdate(){this.batchMode_=true}endBatchUpdate(){this.batchMode_=false;this.notifyObservers_(this.state_)}getState(){return this.state_}dispatch(action){if(isActionsProducer(action)){this.consumeProducedActions_(action);return}if(!this.initialized_){this.queuedActions_.push(action);return}this.dispatchInternal_(action)}dispatchInternal_(action){this.reduce(action)}async consumeProducedActions_(actionsProducer){while(true){try{const{done:done,value:value}=await actionsProducer.next();if(value!==undefined){this.dispatch(value)}if(done){return}}catch(error){if(isInvalidationError(error)){return}console.warn("Failure executing actions producer",error)}}}reduce(action){if(window.DEBUG_STORE){console.groupCollapsed(`Action: ${action.type}`);console.dir(action.payload)}const reducers=this.reducers_.get(action.type);if(!reducers||reducers.length===0){console.error(`No registered reducers for action: ${action.type}`);return}this.state_=reducers.reduce(((state,reducer)=>reducer(state,action.payload)),this.state_);if(this.initialized_&&!this.batchMode_){this.notifyObservers_(this.state_)}if(this.selector.get()!==this.state_){this.selectorEmitter_.processChange()}if(window.DEBUG_STORE){console.groupEnd()}}notifyObservers_(state){this.observers_.forEach((o=>{try{o.onStateChanged(state)}catch(error){console.error(error)}}))}}function isInvalidationError(error){if(!error){return false}if(error instanceof ConcurrentActionInvalidatedError){return true}if(error.constructor?.name==="ConcurrentActionInvalidatedError"){return true}return false}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
async function promisify(fn,...args){return new Promise(((resolve,reject)=>{const callback=result=>{if(chrome.runtime.lastError){reject(chrome.runtime.lastError.message)}else{resolve(result)}};fn(...args,callback)}))}async function openWindow(params){return promisify(chrome.fileManagerPrivate.openWindow,params)}async function getPreferences(){return promisify(chrome.fileManagerPrivate.getPreferences)}async function validatePathNameLength(parentEntry,name){return promisify(chrome.fileManagerPrivate.validatePathNameLength,util.unwrapEntry(parentEntry),name)}async function getSizeStats(volumeId){return promisify(chrome.fileManagerPrivate.getSizeStats,volumeId)}async function getDriveQuotaMetadata(entry){return promisify(chrome.fileManagerPrivate.getDriveQuotaMetadata,util.unwrapEntry(entry))}async function getHoldingSpaceState(){return promisify(chrome.fileManagerPrivate.getHoldingSpaceState)}async function getDisallowedTransfers(entries,destinationEntry,isMove){return promisify(chrome.fileManagerPrivate.getDisallowedTransfers,entries.map((e=>util.unwrapEntry(e))),util.unwrapEntry(destinationEntry),isMove)}async function getDlpMetadata(entries){return promisify(chrome.fileManagerPrivate.getDlpMetadata,entries.map((e=>util.unwrapEntry(e))))}async function getDlpBlockedComponents(sourceUrl){return promisify(chrome.fileManagerPrivate.getDlpBlockedComponents,sourceUrl)}async function getDlpRestrictionDetails(sourceUrl){return promisify(chrome.fileManagerPrivate.getDlpRestrictionDetails,sourceUrl)}async function getDialogCaller(){return promisify(chrome.fileManagerPrivate.getDialogCaller)}async function listMountableGuests(){return promisify(chrome.fileManagerPrivate.listMountableGuests)}async function mountGuest(id){return promisify(chrome.fileManagerPrivate.mountGuest,id)}async function getParentEntry(entry){return new Promise(((resolve,reject)=>{entry.getParent(resolve,reject)}))}async function moveEntryTo(entry,parent,newName){return new Promise(((resolve,reject)=>{entry.moveTo(parent,newName,resolve,reject)}))}async function getFile(directory,filename,options){return new Promise(((resolve,reject)=>{directory.getFile(filename,options,resolve,reject)}))}async function getDirectory(directory,filename,options){return new Promise(((resolve,reject)=>{directory.getDirectory(filename,options,resolve,reject)}))}async function getEntry$1(directory,filename,isFile,options){const getEntry=isFile?getFile:getDirectory;return getEntry(directory,filename,options)}async function startIOTask(type,entries,params){if(params.destinationFolder){params.destinationFolder=util.unwrapEntry(params.destinationFolder)}return promisify(chrome.fileManagerPrivate.startIOTask,type,entries.map((e=>util.unwrapEntry(e))),params)}async function parseTrashInfoFiles(entries){return promisify(chrome.fileManagerPrivate.parseTrashInfoFiles,entries.map((e=>util.unwrapEntry(e))))}async function getMimeType(entry){return promisify(chrome.fileManagerPrivate.getMimeType,util.unwrapEntry(entry))}async function getFileTasks(entries,dlpSourceUrls){return promisify(chrome.fileManagerPrivate.getFileTasks,entries.map((e=>util.unwrapEntry(e))),dlpSourceUrls)}async function executeTask(taskDescriptor,entries){return promisify(chrome.fileManagerPrivate.executeTask,taskDescriptor,entries.map((e=>util.unwrapEntry(e))))}async function getBulkPinProgress(){return promisify(chrome.fileManagerPrivate.getBulkPinProgress)}async function calculateBulkPinRequiredSpace(){return promisify(chrome.fileManagerPrivate.calculateBulkPinRequiredSpace)}async function getDriveConnectionState(){return promisify(chrome.fileManagerPrivate.getDriveConnectionState)}async function grantAccess(entries){return promisify(chrome.fileManagerPrivate.grantAccess,entries)}
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DialogType;(function(DialogType){DialogType["SELECT_FOLDER"]="folder";DialogType["SELECT_UPLOAD_FOLDER"]="upload-folder";DialogType["SELECT_SAVEAS_FILE"]="saveas-file";DialogType["SELECT_OPEN_FILE"]="open-file";DialogType["SELECT_OPEN_MULTI_FILE"]="open-multi-file";DialogType["FULL_PAGE"]="full-page"})(DialogType||(DialogType={}));function isModal(type){return type==DialogType.SELECT_FOLDER||type==DialogType.SELECT_UPLOAD_FOLDER||type==DialogType.SELECT_SAVEAS_FILE||type==DialogType.SELECT_OPEN_FILE||type==DialogType.SELECT_OPEN_MULTI_FILE}function isFolderDialogType(type){return type==DialogType.SELECT_FOLDER||type==DialogType.SELECT_UPLOAD_FOLDER}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function vmTypeToIconName(vmType){if(vmType===undefined){console.error("vmType: is undefined");return""}switch(vmType){case chrome.fileManagerPrivate.VmType.BRUSCHETTA:return constants.ICON_TYPES.BRUSCHETTA;case chrome.fileManagerPrivate.VmType.ARCVM:return constants.ICON_TYPES.ANDROID_FILES;case chrome.fileManagerPrivate.VmType.TERMINA:return constants.ICON_TYPES.CROSTINI;default:console.error("Unable to determine icon for vmType: "+vmType);return""}}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class StaticReader{constructor(entries){this.entries_=entries}readEntries(success,_error){const entries=this.entries_;this.entries_=[];setTimeout(success,0,entries)}}class CombinedReaders{constructor(readers){this.readers_=readers.reverse();this.currentReader_=readers.pop()}readEntries(success,error){if(!this.currentReader_){success([]);return}this.currentReader_.readEntries((results=>{if(results.length){success(results)}else{if(!this.readers_.length){success([]);return}this.currentReader_=this.readers_.pop();this.readEntries(success,error)}}),error)}}class EntryList{constructor(label,rootType,devicePath=""){this.label_=label;this.rootType_=rootType;this.devicePath_=devicePath;this.children_=[];this.isDirectory=true;this.isFile=false;this.type_name="EntryList";this.fullPath="/";this.filesystem=null;this.disabled=false}getUIChildren(){return this.children_}get label(){return this.label_}get rootType(){return this.rootType_}get name(){return this.label_}get devicePath(){return this.devicePath_}get isNativeType(){return false}getMetadata(success,_error){setTimeout((()=>success({modificationTime:new Date,size:0})))}toURL(){if(this.devicePath_){return"entry-list://"+this.rootType+"/"+this.devicePath_}return"entry-list://"+this.rootType}getParent(success,_error){const self=this;setTimeout((()=>success&&success(self)),0,this)}addEntry(entry){this.children_.push(entry);if(entry.type_name=="VolumeEntry"){const volumeEntry=entry;volumeEntry.setPrefix(this)}}createReader(){return new StaticReader(this.children_)}findIndexByVolumeInfo(volumeInfo){return this.children_.findIndex((childEntry=>childEntry.volumeInfo?childEntry.volumeInfo.volumeId===volumeInfo.volumeId:false))}removeByVolumeType(volumeType){const childIndex=this.children_.findIndex((childEntry=>{const volumeInfo=childEntry.volumeInfo;return volumeInfo&&volumeInfo.volumeType===volumeType}));if(childIndex!==-1){this.children_.splice(childIndex,1);return true}return false}removeAllByRootType(rootType){this.children_=this.children_.filter((entry=>entry.rootType!==rootType))}removeAllByVolumeType(volumeType){this.children_=this.children_.filter((entry=>entry.volumeType!==volumeType))}removeChildEntry(entry){const childIndex=this.children_.findIndex((childEntry=>childEntry===entry));if(childIndex!==-1){this.children_.splice(childIndex,1);return true}return false}getNativeEntry(){return null}get volumeType(){switch(this.rootType){case VolumeManagerCommon.RootType.MY_FILES:return VolumeManagerCommon.VolumeType.DOWNLOADS;case VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT:return VolumeManagerCommon.VolumeType.DRIVE;default:return null}}copyTo(newParent,newName,success,error){}moveTo(newParent,newName,success,error){}remove(success,error){}getFile(path,options,success,error){}getDirectory(path,options,success,error){}removeRecursively(success,error){}}class VolumeEntry{constructor(volumeInfo){this.volumeInfo_=volumeInfo;this.children_=[];this.rootEntry_=volumeInfo.displayRoot;if(!volumeInfo.displayRoot){volumeInfo.resolveDisplayRoot((displayRoot=>{this.rootEntry_=displayRoot}))}this.type_name="VolumeEntry";this.rootType=null;this.disabled_=false}get volumeInfo(){return this.volumeInfo_}get volumeType(){return this.volumeInfo_.volumeType}get filesystem(){return this.rootEntry_?this.rootEntry_.filesystem:null}getUIChildren(){return this.children_}get fullPath(){return this.rootEntry_?this.rootEntry_.fullPath:""}get isDirectory(){return this.rootEntry_?this.rootEntry_.isDirectory:true}get isFile(){return this.rootEntry_?this.rootEntry_.isFile:false}get disabled(){return this.disabled_}set disabled(disabled){this.disabled_=disabled}getDirectory(path,options,success,error){if(!this.rootEntry_){error&&setTimeout(error,0,new Error("root entry not resolved yet."));return}this.rootEntry_.getDirectory(path,options,success,error)}getFile(path,options,success,error){if(!this.rootEntry_){error&&setTimeout(error,0,new Error("root entry not resolved yet."));return}this.rootEntry_.getFile(path,options,success,error)}get name(){return this.volumeInfo_.label}toURL(){return this.rootEntry_?this.rootEntry_.toURL():""}get iconName(){if(this.volumeInfo_.volumeType==VolumeManagerCommon.VolumeType.GUEST_OS){return vmTypeToIconName(this.volumeInfo_.vmType)}if(this.volumeInfo_.volumeType==VolumeManagerCommon.VolumeType.DOWNLOADS){return VolumeManagerCommon.VolumeType.MY_FILES}return this.volumeInfo_.volumeType}getParent(success,_error){const self=this;setTimeout((()=>success&&success(self)),0,this)}getMetadata(success,error){this.rootEntry_.getMetadata(success,error)}get isNativeType(){return true}getNativeEntry(){return this.rootEntry_}createReader(){const readers=[];if(this.rootEntry_){readers.push(this.rootEntry_.createReader())}if(this.children_.length){readers.push(new StaticReader(this.children_))}return new CombinedReaders(readers)}setPrefix(entry){this.volumeInfo_.prefixEntry=entry}addEntry(entry){this.children_.push(entry);if(entry.type_name=="VolumeEntry"){const volumeEntry=entry;volumeEntry.setPrefix(this)}}findIndexByVolumeInfo(volumeInfo){return this.children_.findIndex((childEntry=>childEntry.volumeInfo?childEntry.volumeInfo.volumeId===volumeInfo.volumeId:false))}removeByVolumeType(volumeType){const childIndex=this.children_.findIndex((childEntry=>{const entry=childEntry;return entry.volumeInfo&&entry.volumeInfo.volumeType===volumeType}));if(childIndex!==-1){this.children_.splice(childIndex,1);return true}return false}removeAllByRootType(rootType){this.children_=this.children_.filter((entry=>entry.rootType!==rootType))}removeAllByVolumeType(volumeType){this.children_=this.children_.filter((entry=>entry.volumeType!==volumeType))}removeChildEntry(entry){const childIndex=this.children_.findIndex((childEntry=>childEntry===entry));if(childIndex!==-1){this.children_.splice(childIndex,1);return true}return false}copyTo(newParent,newName,success,error){}moveTo(newParent,newName,success,error){}remove(success,error){}removeRecursively(success,error){}}class FakeEntryImpl{constructor(label,rootType,opt_sourceRestriction,opt_fileCategory){this.label=label;this.name=label;this.rootType=rootType;this.isDirectory=true;this.isFile=false;this.disabled=false;this.sourceRestriction=opt_sourceRestriction;this.fileCategory=opt_fileCategory;this.type_name="FakeEntry";this.fullPath="/";this.filesystem=null}getParent(success,_error){const self=this;setTimeout((()=>success&&success(self)),0,this)}toURL(){let url="fake-entry://"+this.rootType;if(this.fileCategory){url+="/"+this.fileCategory}return url}getUIChildren(){return[]}get iconName(){if(this.rootType===VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT){return VolumeManagerCommon.RootType.DRIVE}return this.rootType}getMetadata(success,_error){setTimeout((()=>success({modificationTime:new Date,size:0})))}get isNativeType(){return false}getNativeEntry(){return null}createReader(){return new StaticReader([])}get volumeType(){if(this.rootType===VolumeManagerCommon.RootType.RECENT){return null}return VolumeManagerCommon.getVolumeTypeFromRootType(this.rootType)}copyTo(newParent,newName,success,error){}moveTo(newParent,newName,success,error){}remove(success,error){}getFile(path,options,success,error){}getDirectory(path,options,success,error){}removeRecursively(success,error){}}class GuestOsPlaceholder extends FakeEntryImpl{constructor(label,guest_id,vm_type){super(label,VolumeManagerCommon.RootType.GUEST_OS,undefined,undefined);this.guest_id=guest_id;this.type_name="GuestOsPlaceholder";this.vm_type=vm_type}get iconName(){return vmTypeToIconName(this.vm_type)}toURL(){return`fake-entry://guest-os/${this.guest_id}`}get volumeType(){if(this.vm_type===chrome.fileManagerPrivate.VmType.ARCVM){return VolumeManagerCommon.VolumeType.ANDROID_FILES}return VolumeManagerCommon.VolumeType.GUEST_OS}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$b=new Slice("device");const updateDeviceConnectionState=slice$b.addReducer("set-connection-state",updateDeviceConnectionStateReducer$1);function updateDeviceConnectionStateReducer$1(currentState,payload){let device;if(payload.connection!==currentState.device.connection){device={...currentState.device,connection:payload.connection}}return device?{...currentState,device:device}:currentState}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$a=new Slice("volumes");const VolumeType$1=VolumeManagerCommon.VolumeType;const myFilesEntryListKey=`entry-list://${VolumeManagerCommon.RootType.MY_FILES}`;const crostiniPlaceHolderKey=`fake-entry://${VolumeManagerCommon.RootType.CROSTINI}`;`fake-entry://${VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT}`;const recentRootKey=`fake-entry://${VolumeManagerCommon.RootType.RECENT}/all`;const trashRootKey=`fake-entry://${VolumeManagerCommon.RootType.TRASH}`;const driveRootEntryListKey=`entry-list://${VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT}`;const makeRemovableParentKey=volume=>`entry-list://${VolumeManagerCommon.RootType.REMOVABLE}/${volume.devicePath}`;const removableGroupKey=volume=>`${volume.devicePath}/${volume.driveLabel}`;function getVolumeTypesNestedInMyFiles(){const myFilesNestedVolumeTypes=new Set([VolumeType$1.ANDROID_FILES,VolumeType$1.CROSTINI]);if(util.isGuestOsEnabled()){myFilesNestedVolumeTypes.add(VolumeType$1.GUEST_OS)}return myFilesNestedVolumeTypes}function convertVolumeInfoAndMetadataToVolume(volumeInfo,volumeMetadata){const volumeRootKey=volumeInfo.displayRoot.toURL();return{volumeId:volumeMetadata.volumeId,volumeType:volumeMetadata.volumeType,rootKey:volumeRootKey,status:PropStatus.SUCCESS,label:volumeInfo.label,error:volumeMetadata.mountCondition,deviceType:volumeMetadata.deviceType,devicePath:volumeMetadata.devicePath,isReadOnly:volumeMetadata.isReadOnly,isReadOnlyRemovableDevice:volumeMetadata.isReadOnlyRemovableDevice,providerId:volumeMetadata.providerId,configurable:volumeMetadata.configurable,watchable:volumeMetadata.watchable,source:volumeMetadata.source,diskFileSystemType:volumeMetadata.diskFileSystemType,iconSet:volumeMetadata.iconSet,driveLabel:volumeMetadata.driveLabel,vmType:volumeMetadata.vmType,isDisabled:false,prefixKey:undefined,isInteractive:true}}function updateVolume(state,volumeId,changes){if(!state.volumes[volumeId]){console.warn(`Volume not found in the store: ${volumeId}`);return}return{...state.volumes[volumeId],...changes}}const addVolume=slice$a.addReducer("add",addVolumeReducer);function addVolumeReducer(currentState,payload){cacheEntries(currentState,[new VolumeEntry(payload.volumeInfo)]);volumeNestingEntries(currentState,payload.volumeInfo,payload.volumeMetadata);const volumeMetadata=payload.volumeMetadata;const volumeInfo=payload.volumeInfo;if(!volumeInfo.fileSystem){console.error("Only add to the store volumes that have successfully resolved.");return currentState}const volumes={...currentState.volumes};const volume=convertVolumeInfoAndMetadataToVolume(volumeInfo,volumeMetadata);const volumeEntry=getEntry(currentState,volume.rootKey);if(volumeEntry){volume.isDisabled=!!volumeEntry.disabled}const myFilesNestedVolumeTypes=getVolumeTypesNestedInMyFiles();if(volume.volumeType===VolumeType$1.DOWNLOADS){for(const v of Object.values(volumes)){if(myFilesNestedVolumeTypes.has(v.volumeType)){v.prefixKey=volume.rootKey}}}if(myFilesNestedVolumeTypes.has(volume.volumeType)){const{myFilesEntry:myFilesEntry}=getMyFiles(currentState);volume.prefixKey=myFilesEntry.toURL()}if(volume.volumeType===VolumeType$1.DRIVE){const drive=getEntry(currentState,driveRootEntryListKey);assert$1(drive);volume.prefixKey=drive.toURL()}if(volume.volumeType===VolumeType$1.REMOVABLE){const groupingKey=removableGroupKey(volume);const parentKey=makeRemovableParentKey(volume);const groupParentEntry=getEntry(currentState,parentKey);if(groupParentEntry){const volumesInSameGroup=Object.values(volumes).filter((v=>{if(v.volumeType===VolumeType$1.REMOVABLE&&removableGroupKey(v)===groupingKey){v.prefixKey=parentKey;return true}return false}));volume.prefixKey=volumesInSameGroup.length>0?groupParentEntry?.toURL():undefined}}return{...currentState,volumes:{...volumes,[volume.volumeId]:volume}}}const removeVolume=slice$a.addReducer("remove",removeVolumeReducer);function removeVolumeReducer(currentState,payload){const volumeToRemove=currentState.volumes[payload.volumeId];const volumeEntry=getEntry(currentState,volumeToRemove.rootKey);delete currentState.volumes[payload.volumeId];currentState.volumes={...currentState.volumes};const volumeTypesNestedInMyFiles=getVolumeTypesNestedInMyFiles();if(volumeTypesNestedInMyFiles.has(volumeToRemove.volumeType)){const{myFilesEntry:myFilesEntry}=getMyFiles(currentState);const children=myFilesEntry.getUIChildren();const volumeEntryExistsInMyFiles=!!children.find((childEntry=>isVolumeEntry(childEntry)&&util.isSameEntry(childEntry,volumeEntry)));if(volumeEntryExistsInMyFiles){myFilesEntry.removeChildEntry(volumeEntry);const uiEntryKey=currentState.uiEntries.find((entryKey=>{const uiEntry=getEntry(currentState,entryKey);return uiEntry.name===volumeEntry.name}));if(uiEntryKey){const uiEntry=getEntry(currentState,uiEntryKey);myFilesEntry.addEntry(uiEntry)}const fileData=getFileData(currentState,myFilesEntry.toURL());if(fileData){let newChildren=fileData.children.filter((child=>child!==volumeEntry.toURL()));if(uiEntryKey){newChildren=newChildren.concat(uiEntryKey);const childEntries=newChildren.map((childKey=>getEntry(currentState,childKey)));newChildren=sortEntries(myFilesEntry,childEntries).map((entry=>entry.toURL()))}currentState.allEntries[myFilesEntry.toURL()]={...fileData,children:newChildren}}}}return{...currentState}}const updateIsInteractiveVolume=slice$a.addReducer("set-is-interactive",updateIsInteractiveVolumeReducer);function updateIsInteractiveVolumeReducer(currentState,payload){const volumes={...currentState.volumes};const updatedVolume={...volumes[payload.volumeId],isInteractive:payload.isInteractive};return{...currentState,volumes:{...volumes,[payload.volumeId]:updatedVolume}}}slice$a.addReducer(updateDeviceConnectionState.type,updateDeviceConnectionStateReducer);function updateDeviceConnectionStateReducer(currentState,payload){let volumes;const disableODFS=payload.connection===chrome.fileManagerPrivate.DeviceConnectionState.OFFLINE;for(const volume of Object.values(currentState.volumes)){if(!util.isOneDriveId(volume.providerId)||volume.isDisabled===disableODFS){continue}const updatedVolume=updateVolume(currentState,volume.volumeId,{isDisabled:disableODFS});if(updatedVolume){if(!volumes){volumes={...currentState.volumes,[volume.volumeId]:updatedVolume}}else{volumes[volume.volumeId]=updatedVolume}}updateFileData(currentState,volume.rootKey,{disabled:disableODFS});const odfsVolumeEntry=getEntry(currentState,volume.rootKey);if(odfsVolumeEntry){odfsVolumeEntry.disabled=disableODFS}}return volumes?{...currentState,volumes:volumes}:currentState}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isFileSystemDirectoryEntry(entry){return entry.isDirectory}function isFileSystemFileEntry(entry){return entry.isFile}function getNativeEntry(fileData){if(fileData.type===EntryType.FS_API){return fileData.entry}if(fileData.type===EntryType.VOLUME_ROOT){return fileData.entry.getNativeEntry()}return null}function isVolumeEntry(entry){return"volumeInfo"in entry}function isTrashEntry(entry){return entry.toURL()===trashRootKey}function isMyFilesEntry(entry){if(!entry){return false}if(entry instanceof EntryList&&entry.toURL()===myFilesEntryListKey){return true}if(isVolumeEntry(entry)&&entry.volumeType===VolumeManagerCommon.VolumeType.DOWNLOADS){return true}return false}function isDriveRootEntryList(entry){if(!entry){return false}return entry.toURL()===driveRootEntryListKey}function isGrandRootEntryInDrives(entry){const{fullPath:fullPath}=entry;return fullPath===VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH||fullPath===VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH}function isFakeEntryInDrives(entry){if(!(entry instanceof FakeEntryImpl)){return false}const{rootType:rootType}=entry;return rootType===VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME||rootType===VolumeManagerCommon.RootType.DRIVE_OFFLINE}function isEntryInsideMyDrive(fileData){const{rootType:rootType}=fileData;return!!rootType&&rootType===VolumeManagerCommon.RootType.DRIVE}function isEntryInsideComputers(fileData){const{rootType:rootType}=fileData;return!!rootType&&(rootType===VolumeManagerCommon.RootType.COMPUTERS_GRAND_ROOT||rootType===VolumeManagerCommon.RootType.COMPUTER)}function isEntryInsideDrive(fileData){const{rootType:rootType}=fileData;return!!rootType&&(rootType===VolumeManagerCommon.RootType.DRIVE||rootType===VolumeManagerCommon.RootType.SHARED_DRIVES_GRAND_ROOT||rootType===VolumeManagerCommon.RootType.SHARED_DRIVE||rootType===VolumeManagerCommon.RootType.COMPUTERS_GRAND_ROOT||rootType===VolumeManagerCommon.RootType.COMPUTER||rootType===VolumeManagerCommon.RootType.DRIVE_OFFLINE||rootType===VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME||rootType===VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT)}function sortEntries(parentEntry,entries){if(entries.length===0){return[]}const{directoryModel:directoryModel,volumeManager:volumeManager}=window.fileManager;const fileFilter=directoryModel.getFileFilter();if(isMyFilesEntry(parentEntry)){const locationInfo=volumeManager.getLocationInfo(entries[0]);if(locationInfo){const compareFunction=util.compareLabelAndGroupBottomEntries(locationInfo,parentEntry.getUIChildren());return entries.filter((entry=>fileFilter.filter(entry))).sort(compareFunction)}}return entries.filter((entry=>fileFilter.filter(entry))).sort(util.compareName)}function getRootType(entry){return"rootType"in entry?entry.rootType:null}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EXTENSION_TO_TYPE=new Map([[".jpeg",{extensions:[".jpeg",".jpg",".jfif",".pjpeg",".pjp"],mime:"image/jpeg",subtype:"JPEG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".jpg",{extensions:[".jpeg",".jpg",".jfif",".pjpeg",".pjp"],mime:"image/jpeg",subtype:"JPEG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".jfif",{extensions:[".jpeg",".jpg",".jfif",".pjpeg",".pjp"],mime:"image/jpeg",subtype:"JPEG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".pjpeg",{extensions:[".jpeg",".jpg",".jfif",".pjpeg",".pjp"],mime:"image/jpeg",subtype:"JPEG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".pjp",{extensions:[".jpeg",".jpg",".jfif",".pjpeg",".pjp"],mime:"image/jpeg",subtype:"JPEG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".bmp",{extensions:[".bmp"],mime:"image/bmp",subtype:"BMP",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".gif",{extensions:[".gif"],mime:"image/gif",subtype:"GIF",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".ico",{extensions:[".ico"],mime:"image/x-icon",subtype:"ICO",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".png",{extensions:[".png"],mime:"image/png",subtype:"PNG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".webp",{extensions:[".webp"],mime:"image/webp",subtype:"WebP",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".tif",{extensions:[".tif",".tiff"],mime:"image/tiff",subtype:"TIFF",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".tiff",{extensions:[".tif",".tiff"],mime:"image/tiff",subtype:"TIFF",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".svg",{extensions:[".svg",".svgz"],mime:"image/svg+xml",subtype:"SVG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".svgz",{extensions:[".svg",".svgz"],mime:"image/svg+xml",subtype:"SVG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".avif",{extensions:[".avif"],mime:"image/avif",subtype:"AVIF",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".jxl",{extensions:[".jxl"],mime:"image/jxl",subtype:"JXL",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".xbm",{extensions:[".xbm"],mime:"image/x-xbitmap",subtype:"XBM",translationKey:"IMAGE_FILE_TYPE",type:"image"}],[".arw",{extensions:[".arw"],icon:"image",mime:"image/x-sony-arw",subtype:"ARW",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],[".cr2",{extensions:[".cr2"],icon:"image",mime:"image/x-canon-cr2",subtype:"CR2",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],[".dng",{extensions:[".dng"],icon:"image",mime:"image/x-adobe-dng",subtype:"DNG",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],[".nef",{extensions:[".nef"],icon:"image",mime:"image/x-nikon-nef",subtype:"NEF",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],[".nrw",{extensions:[".nrw"],icon:"image",mime:"image/x-nikon-nrw",subtype:"NRW",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],[".orf",{extensions:[".orf"],icon:"image",mime:"image/x-olympus-orf",subtype:"ORF",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],[".raf",{extensions:[".raf"],icon:"image",mime:"image/x-fuji-raf",subtype:"RAF",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],[".rw2",{extensions:[".rw2"],icon:"image",mime:"image/x-panasonic-rw2",subtype:"RW2",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],[".3gp",{extensions:[".3gp",".3gpp"],mime:"video/3gpp",subtype:"3GP",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".3gpp",{extensions:[".3gp",".3gpp"],mime:"video/3gpp",subtype:"3GP",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".avi",{extensions:[".avi"],mime:"video/x-msvideo",subtype:"AVI",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".mov",{extensions:[".mov"],mime:"video/quicktime",subtype:"QuickTime",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".mkv",{extensions:[".mkv"],mime:"video/x-matroska",subtype:"MKV",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".mp4",{extensions:[".mp4",".m4v",".mpg4",".mpeg4"],mime:"video/mp4",subtype:"MPEG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".m4v",{extensions:[".mp4",".m4v",".mpg4",".mpeg4"],mime:"video/mp4",subtype:"MPEG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".mpg4",{extensions:[".mp4",".m4v",".mpg4",".mpeg4"],mime:"video/mp4",subtype:"MPEG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".mpeg4",{extensions:[".mp4",".m4v",".mpg4",".mpeg4"],mime:"video/mp4",subtype:"MPEG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".mpg",{extensions:[".mpg",".mpeg"],mime:"video/mpeg",subtype:"MPEG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".mpeg",{extensions:[".mpg",".mpeg"],mime:"video/mpeg",subtype:"MPEG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".ogm",{extensions:[".ogm",".ogv",".ogx"],mime:"video/ogg",subtype:"OGG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".ogv",{extensions:[".ogm",".ogv",".ogx"],mime:"video/ogg",subtype:"OGG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".ogx",{extensions:[".ogm",".ogv",".ogx"],mime:"video/ogg",subtype:"OGG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".webm",{extensions:[".webm"],mime:"video/webm",subtype:"WebM",translationKey:"VIDEO_FILE_TYPE",type:"video"}],[".amr",{extensions:[".amr"],mime:"audio/amr",subtype:"AMR",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".flac",{extensions:[".flac"],mime:"audio/flac",subtype:"FLAC",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".mp3",{extensions:[".mp3"],mime:"audio/mpeg",subtype:"MP3",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".m4a",{extensions:[".m4a"],mime:"audio/mp4a-latm",subtype:"MPEG",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".oga",{extensions:[".oga",".ogg",".opus"],mime:"audio/ogg",subtype:"OGG",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".ogg",{extensions:[".oga",".ogg",".opus"],mime:"audio/ogg",subtype:"OGG",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".opus",{extensions:[".oga",".ogg",".opus"],mime:"audio/ogg",subtype:"OGG",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".wav",{extensions:[".wav"],mime:"audio/x-wav",subtype:"WAV",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".weba",{extensions:[".weba"],mime:"audio/webm",subtype:"WEBA",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],[".txt",{extensions:[".txt",".text"],mime:"text/plain",subtype:"TXT",translationKey:"PLAIN_TEXT_FILE_TYPE",type:"text"}],[".text",{extensions:[".txt",".text"],mime:"text/plain",subtype:"TXT",translationKey:"PLAIN_TEXT_FILE_TYPE",type:"text"}],[".csv",{extensions:[".csv"],mime:"text/csv",subtype:"CSV",translationKey:"CSV_TEXT_FILE_TYPE",type:"text"}],[".zip",{extensions:[".zip"],mime:"application/zip",subtype:"ZIP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".rar",{extensions:[".rar"],mime:"application/x-rar-compressed",subtype:"RAR",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".iso",{extensions:[".iso"],mime:"application/x-iso9660-image",subtype:"ISO",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".7z",{extensions:[".7z"],mime:"application/x-7z-compressed",subtype:"7-Zip",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".crx",{extensions:[".crx"],mime:"application/x-chrome-extension",subtype:"CRX",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tar",{extensions:[".tar"],mime:"application/x-tar",subtype:"TAR",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".bz2",{extensions:[".bz2",".bz",".tbz",".tbz2",".tz2",".tb2"],mime:"application/x-bzip2",subtype:"BZIP2",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".bz",{extensions:[".bz2",".bz",".tbz",".tbz2",".tz2",".tb2"],mime:"application/x-bzip2",subtype:"BZIP2",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tbz",{extensions:[".bz2",".bz",".tbz",".tbz2",".tz2",".tb2"],mime:"application/x-bzip2",subtype:"BZIP2",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tbz2",{extensions:[".bz2",".bz",".tbz",".tbz2",".tz2",".tb2"],mime:"application/x-bzip2",subtype:"BZIP2",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tz2",{extensions:[".bz2",".bz",".tbz",".tbz2",".tz2",".tb2"],mime:"application/x-bzip2",subtype:"BZIP2",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tb2",{extensions:[".bz2",".bz",".tbz",".tbz2",".tz2",".tb2"],mime:"application/x-bzip2",subtype:"BZIP2",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".gz",{extensions:[".gz",".tgz"],mime:"application/x-gzip",subtype:"GZIP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tgz",{extensions:[".gz",".tgz"],mime:"application/x-gzip",subtype:"GZIP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".lz",{extensions:[".lz"],mime:"application/x-lzip",subtype:"LZIP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".lzo",{extensions:[".lzo"],mime:"application/x-lzop",subtype:"LZOP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".lzma",{extensions:[".lzma",".tlzma",".tlz"],mime:"application/x-lzma",subtype:"LZMA",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tlzma",{extensions:[".lzma",".tlzma",".tlz"],mime:"application/x-lzma",subtype:"LZMA",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tlz",{extensions:[".lzma",".tlzma",".tlz"],mime:"application/x-lzma",subtype:"LZMA",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".xz",{extensions:[".xz",".txz"],mime:"application/x-xz",subtype:"XZ",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".txz",{extensions:[".xz",".txz"],mime:"application/x-xz",subtype:"XZ",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".z",{extensions:[".z",".taz",".tz"],mime:"application/x-compress",subtype:"Z",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".taz",{extensions:[".z",".taz",".tz"],mime:"application/x-compress",subtype:"Z",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tz",{extensions:[".z",".taz",".tz"],mime:"application/x-compress",subtype:"Z",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".zst",{extensions:[".zst",".tzst"],mime:"application/zstd",subtype:"Zstandard",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".tzst",{extensions:[".zst",".tzst"],mime:"application/zstd",subtype:"Zstandard",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],[".gdoc",{extensions:[".gdoc"],icon:"gdoc",mime:"application/vnd.google-apps.document",subtype:"doc",translationKey:"GDOC_DOCUMENT_FILE_TYPE",type:"hosted"}],[".gsheet",{extensions:[".gsheet"],icon:"gsheet",mime:"application/vnd.google-apps.spreadsheet",subtype:"sheet",translationKey:"GSHEET_DOCUMENT_FILE_TYPE",type:"hosted"}],[".gslides",{extensions:[".gslides"],icon:"gslides",mime:"application/vnd.google-apps.presentation",subtype:"slides",translationKey:"GSLIDES_DOCUMENT_FILE_TYPE",type:"hosted"}],[".gdraw",{extensions:[".gdraw"],icon:"gdraw",mime:"application/vnd.google-apps.drawing",subtype:"draw",translationKey:"GDRAW_DOCUMENT_FILE_TYPE",type:"hosted"}],[".gtable",{extensions:[".gtable"],icon:"gtable",mime:"application/vnd.google-apps.fusiontable",subtype:"table",translationKey:"GTABLE_DOCUMENT_FILE_TYPE",type:"hosted"}],[".glink",{extensions:[".glink"],icon:"glink",mime:"application/vnd.google-apps.shortcut",subtype:"glink",translationKey:"GLINK_DOCUMENT_FILE_TYPE",type:"hosted"}],[".gform",{extensions:[".gform"],icon:"gform",mime:"application/vnd.google-apps.form",subtype:"form",translationKey:"GFORM_DOCUMENT_FILE_TYPE",type:"hosted"}],[".gmap",{extensions:[".gmap"],icon:"gmap",mime:"application/vnd.google-apps.map",subtype:"map",translationKey:"GMAP_DOCUMENT_FILE_TYPE",type:"hosted"}],[".gsite",{extensions:[".gsite"],icon:"gsite",mime:"application/vnd.google-apps.site",subtype:"site",translationKey:"GSITE_DOCUMENT_FILE_TYPE",type:"hosted"}],[".pdf",{extensions:[".pdf"],icon:"pdf",mime:"application/pdf",subtype:"PDF",translationKey:"PDF_DOCUMENT_FILE_TYPE",type:"document"}],[".htm",{extensions:[".htm",".html",".mht",".mhtml",".shtml",".xht",".xhtml"],mime:"text/html",subtype:"HTML",translationKey:"HTML_DOCUMENT_FILE_TYPE",type:"document"}],[".html",{extensions:[".htm",".html",".mht",".mhtml",".shtml",".xht",".xhtml"],mime:"text/html",subtype:"HTML",translationKey:"HTML_DOCUMENT_FILE_TYPE",type:"document"}],[".mht",{extensions:[".htm",".html",".mht",".mhtml",".shtml",".xht",".xhtml"],mime:"text/html",subtype:"HTML",translationKey:"HTML_DOCUMENT_FILE_TYPE",type:"document"}],[".mhtml",{extensions:[".htm",".html",".mht",".mhtml",".shtml",".xht",".xhtml"],mime:"text/html",subtype:"HTML",translationKey:"HTML_DOCUMENT_FILE_TYPE",type:"document"}],[".shtml",{extensions:[".htm",".html",".mht",".mhtml",".shtml",".xht",".xhtml"],mime:"text/html",subtype:"HTML",translationKey:"HTML_DOCUMENT_FILE_TYPE",type:"document"}],[".xht",{extensions:[".htm",".html",".mht",".mhtml",".shtml",".xht",".xhtml"],mime:"text/html",subtype:"HTML",translationKey:"HTML_DOCUMENT_FILE_TYPE",type:"document"}],[".xhtml",{extensions:[".htm",".html",".mht",".mhtml",".shtml",".xht",".xhtml"],mime:"text/html",subtype:"HTML",translationKey:"HTML_DOCUMENT_FILE_TYPE",type:"document"}],[".doc",{extensions:[".doc"],icon:"word",mime:"application/msword",subtype:"Word",translationKey:"WORD_DOCUMENT_FILE_TYPE",type:"document"}],[".docx",{extensions:[".docx"],icon:"word",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",subtype:"Word",translationKey:"WORD_DOCUMENT_FILE_TYPE",type:"document"}],[".ppt",{extensions:[".ppt"],icon:"ppt",mime:"application/vnd.ms-powerpoint",subtype:"PPT",translationKey:"POWERPOINT_PRESENTATION_FILE_TYPE",type:"document"}],[".pptx",{extensions:[".pptx"],icon:"ppt",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation",subtype:"PPT",translationKey:"POWERPOINT_PRESENTATION_FILE_TYPE",type:"document"}],[".xls",{extensions:[".xls"],icon:"excel",mime:"application/vnd.ms-excel",subtype:"Excel",translationKey:"EXCEL_FILE_TYPE",type:"document"}],[".xlsx",{extensions:[".xlsx"],icon:"excel",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",subtype:"Excel",translationKey:"EXCEL_FILE_TYPE",type:"document"}],[".xlsm",{extensions:[".xlsm"],icon:"excel",mime:"application/vnd.ms-excel.sheet.macroEnabled.12",subtype:"Excel",translationKey:"EXCEL_FILE_TYPE",type:"document"}],[".tini",{extensions:[".tini"],icon:"tini",subtype:"TGZ",translationKey:"TINI_FILE_TYPE",type:"archive"}]]);const MIME_TO_TYPE=new Map([["image/jpeg",{extensions:[".jpeg",".jpg",".jfif",".pjpeg",".pjp"],mime:"image/jpeg",subtype:"JPEG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/bmp",{extensions:[".bmp"],mime:"image/bmp",subtype:"BMP",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/gif",{extensions:[".gif"],mime:"image/gif",subtype:"GIF",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/x-icon",{extensions:[".ico"],mime:"image/x-icon",subtype:"ICO",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/png",{extensions:[".png"],mime:"image/png",subtype:"PNG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/webp",{extensions:[".webp"],mime:"image/webp",subtype:"WebP",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/tiff",{extensions:[".tif",".tiff"],mime:"image/tiff",subtype:"TIFF",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/svg+xml",{extensions:[".svg",".svgz"],mime:"image/svg+xml",subtype:"SVG",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/avif",{extensions:[".avif"],mime:"image/avif",subtype:"AVIF",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/jxl",{extensions:[".jxl"],mime:"image/jxl",subtype:"JXL",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/x-xbitmap",{extensions:[".xbm"],mime:"image/x-xbitmap",subtype:"XBM",translationKey:"IMAGE_FILE_TYPE",type:"image"}],["image/x-sony-arw",{extensions:[".arw"],icon:"image",mime:"image/x-sony-arw",subtype:"ARW",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],["image/x-canon-cr2",{extensions:[".cr2"],icon:"image",mime:"image/x-canon-cr2",subtype:"CR2",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],["image/x-adobe-dng",{extensions:[".dng"],icon:"image",mime:"image/x-adobe-dng",subtype:"DNG",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],["image/x-nikon-nef",{extensions:[".nef"],icon:"image",mime:"image/x-nikon-nef",subtype:"NEF",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],["image/x-nikon-nrw",{extensions:[".nrw"],icon:"image",mime:"image/x-nikon-nrw",subtype:"NRW",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],["image/x-olympus-orf",{extensions:[".orf"],icon:"image",mime:"image/x-olympus-orf",subtype:"ORF",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],["image/x-fuji-raf",{extensions:[".raf"],icon:"image",mime:"image/x-fuji-raf",subtype:"RAF",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],["image/x-panasonic-rw2",{extensions:[".rw2"],icon:"image",mime:"image/x-panasonic-rw2",subtype:"RW2",translationKey:"IMAGE_FILE_TYPE",type:"raw"}],["video/3gpp",{extensions:[".3gp",".3gpp"],mime:"video/3gpp",subtype:"3GP",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["video/x-msvideo",{extensions:[".avi"],mime:"video/x-msvideo",subtype:"AVI",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["video/quicktime",{extensions:[".mov"],mime:"video/quicktime",subtype:"QuickTime",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["video/x-matroska",{extensions:[".mkv"],mime:"video/x-matroska",subtype:"MKV",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["video/mp4",{extensions:[".mp4",".m4v",".mpg4",".mpeg4"],mime:"video/mp4",subtype:"MPEG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["video/mpeg",{extensions:[".mpg",".mpeg"],mime:"video/mpeg",subtype:"MPEG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["video/ogg",{extensions:[".ogm",".ogv",".ogx"],mime:"video/ogg",subtype:"OGG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["application/ogg",{extensions:[".ogm",".ogv",".ogx"],mime:"application/ogg",subtype:"OGG",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["video/webm",{extensions:[".webm"],mime:"video/webm",subtype:"WebM",translationKey:"VIDEO_FILE_TYPE",type:"video"}],["audio/amr",{extensions:[".amr"],mime:"audio/amr",subtype:"AMR",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],["audio/flac",{extensions:[".flac"],mime:"audio/flac",subtype:"FLAC",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],["audio/mpeg",{extensions:[".mp3"],mime:"audio/mpeg",subtype:"MP3",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],["audio/mp4a-latm",{extensions:[".m4a"],mime:"audio/mp4a-latm",subtype:"MPEG",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],["audio/ogg",{extensions:[".oga",".ogg",".opus"],mime:"audio/ogg",subtype:"OGG",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],["audio/x-wav",{extensions:[".wav"],mime:"audio/x-wav",subtype:"WAV",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],["audio/webm",{extensions:[".weba"],mime:"audio/webm",subtype:"WEBA",translationKey:"AUDIO_FILE_TYPE",type:"audio"}],["text/plain",{extensions:[".txt",".text"],mime:"text/plain",subtype:"TXT",translationKey:"PLAIN_TEXT_FILE_TYPE",type:"text"}],["text/csv",{extensions:[".csv"],mime:"text/csv",subtype:"CSV",translationKey:"CSV_TEXT_FILE_TYPE",type:"text"}],["application/zip",{extensions:[".zip"],mime:"application/zip",subtype:"ZIP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-rar-compressed",{extensions:[".rar"],mime:"application/x-rar-compressed",subtype:"RAR",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-iso9660-image",{extensions:[".iso"],mime:"application/x-iso9660-image",subtype:"ISO",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-7z-compressed",{extensions:[".7z"],mime:"application/x-7z-compressed",subtype:"7-Zip",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-chrome-extension",{extensions:[".crx"],mime:"application/x-chrome-extension",subtype:"CRX",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-tar",{extensions:[".tar"],mime:"application/x-tar",subtype:"TAR",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-bzip2",{extensions:[".bz2",".bz",".tbz",".tbz2",".tz2",".tb2"],mime:"application/x-bzip2",subtype:"BZIP2",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-gzip",{extensions:[".gz",".tgz"],mime:"application/x-gzip",subtype:"GZIP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-lzip",{extensions:[".lz"],mime:"application/x-lzip",subtype:"LZIP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-lzop",{extensions:[".lzo"],mime:"application/x-lzop",subtype:"LZOP",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-lzma",{extensions:[".lzma",".tlzma",".tlz"],mime:"application/x-lzma",subtype:"LZMA",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-xz",{extensions:[".xz",".txz"],mime:"application/x-xz",subtype:"XZ",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/x-compress",{extensions:[".z",".taz",".tz"],mime:"application/x-compress",subtype:"Z",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/zstd",{extensions:[".zst",".tzst"],mime:"application/zstd",subtype:"Zstandard",translationKey:"ARCHIVE_FILE_TYPE",type:"archive"}],["application/vnd.google-apps.document",{extensions:[".gdoc"],icon:"gdoc",mime:"application/vnd.google-apps.document",subtype:"doc",translationKey:"GDOC_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/vnd.google-apps.spreadsheet",{extensions:[".gsheet"],icon:"gsheet",mime:"application/vnd.google-apps.spreadsheet",subtype:"sheet",translationKey:"GSHEET_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/vnd.google-apps.presentation",{extensions:[".gslides"],icon:"gslides",mime:"application/vnd.google-apps.presentation",subtype:"slides",translationKey:"GSLIDES_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/vnd.google-apps.drawing",{extensions:[".gdraw"],icon:"gdraw",mime:"application/vnd.google-apps.drawing",subtype:"draw",translationKey:"GDRAW_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/vnd.google-apps.fusiontable",{extensions:[".gtable"],icon:"gtable",mime:"application/vnd.google-apps.fusiontable",subtype:"table",translationKey:"GTABLE_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/vnd.google-apps.shortcut",{extensions:[".glink"],icon:"glink",mime:"application/vnd.google-apps.shortcut",subtype:"glink",translationKey:"GLINK_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/vnd.google-apps.form",{extensions:[".gform"],icon:"gform",mime:"application/vnd.google-apps.form",subtype:"form",translationKey:"GFORM_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/vnd.google-apps.map",{extensions:[".gmap"],icon:"gmap",mime:"application/vnd.google-apps.map",subtype:"map",translationKey:"GMAP_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/vnd.google-apps.site",{extensions:[".gsite"],icon:"gsite",mime:"application/vnd.google-apps.site",subtype:"site",translationKey:"GSITE_DOCUMENT_FILE_TYPE",type:"hosted"}],["application/pdf",{extensions:[".pdf"],icon:"pdf",mime:"application/pdf",subtype:"PDF",translationKey:"PDF_DOCUMENT_FILE_TYPE",type:"document"}],["text/html",{extensions:[".htm",".html",".mht",".mhtml",".shtml",".xht",".xhtml"],mime:"text/html",subtype:"HTML",translationKey:"HTML_DOCUMENT_FILE_TYPE",type:"document"}],["application/msword",{extensions:[".doc"],icon:"word",mime:"application/msword",subtype:"Word",translationKey:"WORD_DOCUMENT_FILE_TYPE",type:"document"}],["application/vnd.openxmlformats-officedocument.wordprocessingml.document",{extensions:[".docx"],icon:"word",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",subtype:"Word",translationKey:"WORD_DOCUMENT_FILE_TYPE",type:"document"}],["application/vnd.ms-powerpoint",{extensions:[".ppt"],icon:"ppt",mime:"application/vnd.ms-powerpoint",subtype:"PPT",translationKey:"POWERPOINT_PRESENTATION_FILE_TYPE",type:"document"}],["application/vnd.openxmlformats-officedocument.presentationml.presentation",{extensions:[".pptx"],icon:"ppt",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation",subtype:"PPT",translationKey:"POWERPOINT_PRESENTATION_FILE_TYPE",type:"document"}],["application/vnd.ms-excel",{extensions:[".xls"],icon:"excel",mime:"application/vnd.ms-excel",subtype:"Excel",translationKey:"EXCEL_FILE_TYPE",type:"document"}],["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",{extensions:[".xlsx"],icon:"excel",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",subtype:"Excel",translationKey:"EXCEL_FILE_TYPE",type:"document"}],["application/vnd.ms-excel.sheet.macroEnabled.12",{extensions:[".xlsm"],icon:"excel",mime:"application/vnd.ms-excel.sheet.macroEnabled.12",subtype:"Excel",translationKey:"EXCEL_FILE_TYPE",type:"document"}]]);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PLACEHOLDER={translationKey:"NO_EXTENSION_FILE_TYPE",type:"UNKNOWN",icon:"",subtype:"",extensions:undefined,mime:undefined,encrypted:undefined,originalMimeType:undefined};function getFinalExtension(fileName){if(!fileName){return""}const lowerCaseFileName=fileName.toLowerCase();const parts=lowerCaseFileName.split(".");if(parts.length===1){return""}if(parts.length===2){return`.${parts.pop()}`}const last=`.${parts.pop()}`;const secondLast=`.${parts.pop()}`;const doubleExtension=`${secondLast}${last}`;if(EXTENSION_TO_TYPE.has(doubleExtension)){return doubleExtension}return last}function getFileTypeForName(name){const extension=getFinalExtension(name);if(EXTENSION_TO_TYPE.has(extension)){return EXTENSION_TO_TYPE.get(extension)}if(extension===""){return PLACEHOLDER}return{translationKey:"GENERIC_FILE_TYPE",type:"UNKNOWN",subtype:extension.substr(1).toUpperCase(),icon:"",extensions:undefined,mime:undefined,encrypted:undefined,originalMimeType:undefined}}
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function FileType(){}FileType.DIRECTORY={translationKey:"FOLDER",type:".folder",icon:"folder",subtype:""};FileType.getExtension=entry=>{if(entry.isDirectory){return""}return getFinalExtension(entry.name)};FileType.getType=(entry,opt_mimeType)=>{if(entry.isDirectory){if(entry.volumeInfo&&entry.volumeInfo.diskFileSystemType){return{translationKey:"",type:"partition",subtype:assert$1(entry.volumeInfo.diskFileSystemType),icon:""}}return FileType.DIRECTORY}if(opt_mimeType){const cseMatch=opt_mimeType.match(/^application\/vnd.google-gsuite.encrypted; content="([a-z\/.-]+)"$/);if(cseMatch){const type={...FileType.getType(entry,cseMatch[1])};type.encrypted=true;type.originalMimeType=cseMatch[1];return type}}if(opt_mimeType&&MIME_TO_TYPE.has(opt_mimeType)){return MIME_TO_TYPE.get(opt_mimeType)}return getFileTypeForName(entry.name)};FileType.getMediaType=(entry,opt_mimeType)=>FileType.getType(entry,opt_mimeType).type;FileType.isAudio=(entry,opt_mimeType)=>FileType.getMediaType(entry,opt_mimeType)==="audio";FileType.isImage=(entry,opt_mimeType)=>FileType.getMediaType(entry,opt_mimeType)==="image";FileType.isVideo=(entry,opt_mimeType)=>FileType.getMediaType(entry,opt_mimeType)==="video";FileType.isDocument=(entry,opt_mimeType)=>{const type=FileType.getMediaType(entry,opt_mimeType);return type==="document"||type==="hosted"||type==="text"};FileType.isRaw=(entry,opt_mimeType)=>FileType.getMediaType(entry,opt_mimeType)==="raw";FileType.isPDF=(entry,opt_mimeType)=>FileType.getType(entry,opt_mimeType).subtype==="PDF";FileType.isType=(types,entry,opt_mimeType)=>{const type=FileType.getMediaType(entry,opt_mimeType);return!!type&&types.indexOf(type)!==-1};FileType.isHosted=(entry,opt_mimeType)=>FileType.getType(entry,opt_mimeType).type==="hosted";FileType.isEncrypted=(entry,opt_mimeType)=>{const type=FileType.getType(entry,opt_mimeType);return type.encrypted!==undefined&&type.encrypted};FileType.getIcon=(entry,opt_mimeType,opt_rootType)=>{let icon;if(entry&&entry.iconName){return entry.iconName}if(entry){entry=entry;const fileType=FileType.getType(entry,opt_mimeType);const overridenIcon=FileType.getIconOverrides(entry,opt_rootType);icon=overridenIcon||fileType.icon||fileType.type}return icon||"unknown"};FileType.getIconOverrides=(entry,opt_rootType)=>{const overrides={[VolumeManagerCommon.RootType.DOWNLOADS]:{"/Camera":"camera-folder","/Downloads":VolumeManagerCommon.VolumeType.DOWNLOADS,"/PvmDefault":"plugin_vm"}};const root=overrides[opt_rootType];return root?root[entry.fullPath]:""};
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function dispatchSimpleEvent(target,type,bubbles,cancelable){const e=new Event(type,{bubbles:bubbles,cancelable:cancelable===undefined||cancelable});return target.dispatchEvent(e)}function dispatchPropertyChange(target,propertyName,newValue,oldValue){const e=new Event(propertyName+"Change");e.propertyName=propertyName;e.newValue=newValue;e.oldValue=oldValue;target.dispatchEvent(e)}function getAttributeName(jsName){return jsName.replace(/([A-Z])/g,"-$1").toLowerCase()}const PropertyKind={JS:"js",ATTR:"attr",BOOL_ATTR:"boolAttr"};function getGetter(name,kind){let attributeName;switch(kind){case PropertyKind.JS:const privateName=name+"_";return function(){return this[privateName]};case PropertyKind.ATTR:attributeName=getAttributeName(name);return function(){return this.getAttribute(attributeName)};case PropertyKind.BOOL_ATTR:attributeName=getAttributeName(name);return function(){return this.hasAttribute(attributeName)}}assertNotReached$1()}function getSetter(name,kind,setHook){let attributeName;switch(kind){case PropertyKind.JS:const privateName=name+"_";return function(value){const oldValue=this[name];if(value!==oldValue){this[privateName]=value;if(setHook){setHook.call(this,value,oldValue)}dispatchPropertyChange(this,name,value,oldValue)}};case PropertyKind.ATTR:attributeName=getAttributeName(name);return function(value){const oldValue=this[name];if(value!==oldValue){if(value===undefined){this.removeAttribute(attributeName)}else{this.setAttribute(attributeName,value)}if(setHook){setHook.call(this,value,oldValue)}dispatchPropertyChange(this,name,value,oldValue)}};case PropertyKind.BOOL_ATTR:attributeName=getAttributeName(name);return function(value){const oldValue=this[name];if(value!==oldValue){if(value){this.setAttribute(attributeName,name)}else{this.removeAttribute(attributeName)}if(setHook){setHook.call(this,value,oldValue)}dispatchPropertyChange(this,name,value,oldValue)}}}assertNotReached$1()}function getPropertyDescriptor(name,kind=PropertyKind.JS,setHook){return{get:getGetter(name,kind),set:getSetter(name,kind,setHook)}}
// Copyright 2010 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NativeEventTarget=self["EventTarget"];
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const storage={};class StorageChangeTracker{constructor(storageNamespace){this.listeners_=[];this.storageNamespace_=storageNamespace;window.addEventListener("storage",this.onStorageEvent_.bind(this))}resetForTesting(){this.listeners_=[]}addListener(callback){this.listeners_.push(callback)}keysChanged(changedValues){const changedKeys={};for(const[k,v]of Object.entries(changedValues)){const key=k;changedKeys[key]={newValue:v}}this.notifyLocally_(changedKeys)}onStorageEvent_(event){if(!event.key){return}const key=event.key;const newValue=event.newValue;const changedKeys={};try{changedKeys[key]={newValue:JSON.parse(newValue)}}catch(error){console.warn(`Failed to JSON parse localStorage value from key: "${key}" `+`returning the raw value.`,error);changedKeys[key]={newValue:newValue}}this.notifyLocally_(changedKeys)}notifyLocally_(keys){for(const listener of this.listeners_){try{listener(keys,this.storageNamespace_)}catch(error){console.error(`Error calling storage.onChanged listener: ${error}`)}}}}class StorageAreaImpl{constructor(type){this.storageChangeTracker_=new StorageChangeTracker(type)}get(keys,callback){const keyList=Array.isArray(keys)?keys:[keys];const result={};for(const key of keyList){result[key]=this.getValue_(key)}callback(result)}getValue_(key){const value=window.localStorage.getItem(key);try{return JSON.parse(value)}catch(error){console.warn(`Failed to JSON parse localStorage value from key: "${key}" `+`returning the raw value.`,error);return value}}async getAsync(keys){return new Promise(((resolve,reject)=>{this.get(keys,(values=>{resolve(values)}))}))}set(items,opt_callback){for(const key in items){const value=JSON.stringify(items[key]);window.localStorage.setItem(key,value)}this.notifyChange_(Object.keys(items));if(opt_callback){opt_callback()}}async setAsync(items){return new Promise(((resolve,reject)=>{this.set(items,(()=>{resolve()}))}))}remove(keys){const keyList=Array.isArray(keys)?keys:[keys];for(const key of keyList){window.localStorage.removeItem(key)}this.notifyChange_(keyList)}clear(){window.localStorage.clear();this.notifyChange_([])}notifyChange_(keys){const values={};for(const k of keys){values[k]=this.getValue_(k)}this.getStorageChangeTracker_().keysChanged(values)}getStorageChangeTracker_(){return this.storageChangeTracker_}}storage.local=new StorageAreaImpl("local");storage.onChanged=storage.local.getStorageChangeTracker_();
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class TaskHistory extends NativeEventTarget{constructor(){super();this.lastExecutedTime_={};storage.onChanged.addListener(this.onLocalStorageChanged_.bind(this));this.load_()}recordTaskExecuted(descriptor){const taskId=util.makeTaskID(descriptor);this.lastExecutedTime_[taskId]=Date.now();this.truncate_();this.save_()}getLastExecutedTime(descriptor){const taskId=util.makeTaskID(descriptor);return this.lastExecutedTime_[taskId]?this.lastExecutedTime_[taskId]:0}load_(){storage.local.get(TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME,(value=>{this.lastExecutedTime_=value[TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME]||{}}))}save_(){const objectToSave={};objectToSave[TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME]=this.lastExecutedTime_;storage.local.set(objectToSave)}onLocalStorageChanged_(changes,areaName){if(areaName!=="local"){return}for(const key in changes){if(key==TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME){this.lastExecutedTime_=changes[key]?.newValue;dispatchSimpleEvent(this,TaskHistory.EventType.UPDATE)}}}truncate_(){const keys=Object.keys(this.lastExecutedTime_);if(keys.length<=TaskHistory.LAST_EXECUTED_TIME_HISTORY_MAX){return}let items=[];for(let i=0;i<keys.length;i++){items.push({id:keys[i],timestamp:this.lastExecutedTime_[keys[i]]})}items.sort(((a,b)=>b.timestamp-a.timestamp));items=items.slice(0,TaskHistory.LAST_EXECUTED_TIME_HISTORY_MAX);const newObject={};for(let i=0;i<items.length;i++){newObject[items[i].id]=items[i].timestamp}this.lastExecutedTime_=newObject}}TaskHistory.EventType={UPDATE:"update"};TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME="task-last-executed-time";TaskHistory.LAST_EXECUTED_TIME_HISTORY_MAX=100;
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const LEGACY_FILES_EXTENSION_ID="hhaomjibdihmijegdhdafkllkbggdgoj";const SWA_APP_ID="fkiggjmkendpmbegkagpmagjepfkpmeb";const SWA_FILES_APP_HOST="file-manager";const SEARCH_RESULTS_KEY="fake-entry://search/";new URL(`chrome-extension://${LEGACY_FILES_EXTENSION_ID}`);const SWA_FILES_APP_URL=new URL(`chrome://${SWA_FILES_APP_HOST}`);const FILES_APP_ICON_PATH="common/images/icon96.png";function toFilesAppURL(path=""){return new URL(path,SWA_FILES_APP_URL)}function toSandboxedURL(path=""){const SANDBOXED_URL=new URL(`chrome-untrusted://${SWA_FILES_APP_HOST}`);return new URL(path,SANDBOXED_URL)}function getFilesAppIconURL(){return toFilesAppURL(FILES_APP_ICON_PATH)}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function parseActionId(actionId){const swaUrl=SWA_FILES_APP_URL.toString()+"?";return actionId.replace(swaUrl,"")}function isFilesAppId(appId){return appId===LEGACY_FILES_EXTENSION_ID||appId===SWA_APP_ID}const INSTALL_LINUX_PACKAGE_TASK_DESCRIPTOR={appId:LEGACY_FILES_EXTENSION_ID,taskType:"app",actionId:"install-linux-package"};function getDefaultTask(tasks,policyDefaultHandlerStatus,taskHistory){const INCORRECT_ASSIGNMENT=chrome.fileManagerPrivate.PolicyDefaultHandlerStatus.INCORRECT_ASSIGNMENT;const DEFAULT_HANDLER_ASSIGNED_BY_POLICY=chrome.fileManagerPrivate.PolicyDefaultHandlerStatus.DEFAULT_HANDLER_ASSIGNED_BY_POLICY;if(policyDefaultHandlerStatus&&policyDefaultHandlerStatus===INCORRECT_ASSIGNMENT){return null}for(const task of tasks){if(task.isDefault){return task}}console.assert(!(policyDefaultHandlerStatus&&policyDefaultHandlerStatus===DEFAULT_HANDLER_ASSIGNED_BY_POLICY));const nonGenericTasks=tasks.filter((t=>!t.isGenericFileHandler));if(nonGenericTasks.length===0){return null}const latest=nonGenericTasks[0];if(nonGenericTasks.length==1||taskHistory.getLastExecutedTime(latest.descriptor)){return latest}return null}function annotateTasks(tasks,entries){const result=[];for(const task of tasks){const{appId:appId,taskType:taskType,actionId:actionId}=task.descriptor;const parsedActionId=parseActionId(actionId);if(isFilesAppId(appId)&&(parsedActionId==="select"||parsedActionId==="open")){continue}const annotateTask={...task,iconType:""};if(isFilesAppId(appId)&&(taskType==="app"||taskType==="web")){if(parsedActionId==="mount-archive"){annotateTask.iconType="archive";annotateTask.title=str("MOUNT_ARCHIVE")}else if(parsedActionId==="open-hosted-generic"){if(entries.length>1){annotateTask.iconType="generic"}else{annotateTask.iconType=FileType.getIcon(entries[0])}annotateTask.title=str("TASK_OPEN")}else if(parsedActionId==="open-hosted-gdoc"){annotateTask.iconType="gdoc";annotateTask.title=str("TASK_OPEN_GDOC")}else if(parsedActionId==="open-hosted-gsheet"){annotateTask.iconType="gsheet";annotateTask.title=str("TASK_OPEN_GSHEET")}else if(parsedActionId==="open-hosted-gslides"){annotateTask.iconType="gslides";annotateTask.title=str("TASK_OPEN_GSLIDES")}else if(parsedActionId==="open-web-drive-office-word"){annotateTask.iconType="gdoc";annotateTask.title=str("TASK_OPEN_GDOC")}else if(parsedActionId==="open-web-drive-office-excel"){annotateTask.iconType="gsheet";annotateTask.title=str("TASK_OPEN_GSHEET")}else if(parsedActionId==="upload-office-to-drive"){annotateTask.iconType="generic";annotateTask.title="Upload to Drive"}else if(parsedActionId==="open-web-drive-office-powerpoint"){annotateTask.iconType="gslides";annotateTask.title=str("TASK_OPEN_GSLIDES")}else if(parsedActionId==="open-in-office"){annotateTask.iconUrl=toFilesAppURL("foreground/images/files/ui/ms365.svg").toString();annotateTask.title=str("TASK_OPEN_MICROSOFT_365")}else if(parsedActionId==="install-linux-package"){annotateTask.iconType="crostini";annotateTask.title=str("TASK_INSTALL_LINUX_PACKAGE")}else if(parsedActionId==="import-crostini-image"){annotateTask.iconType="tini";annotateTask.title=str("TASK_IMPORT_CROSTINI_IMAGE")}else if(parsedActionId==="view-pdf"){annotateTask.iconType="pdf";annotateTask.title=str("TASK_VIEW")}else if(parsedActionId==="view-in-browser"){annotateTask.iconType="generic";annotateTask.title=str("TASK_VIEW")}else if(parsedActionId==="open-encrypted"){annotateTask.iconType="generic";annotateTask.title=str("TASK_OPEN_GDRIVE")}else if(parsedActionId==="install-isolated-web-app"){annotateTask.iconType="removable"}}if(!annotateTask.iconType&&taskType==="web-intent"){annotateTask.iconType="generic"}result.push(annotateTask)}return result}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PathComponent{constructor(name,url,opt_fakeEntry){this.name=name;this.url_=url;this.fakeEntry_=opt_fakeEntry||null}resolveEntry(){if(this.fakeEntry_){return Promise.resolve(this.fakeEntry_)}else{return new Promise(window.webkitResolveLocalFileSystemURL.bind(null,this.url_))}}getKey(){return this.url_}static computeComponentsFromEntry(entry,volumeManager){const replaceRootName=(url,newRoot)=>url.slice(0,url.length-"/root".length)+newRoot;const components=[];const locationInfo=volumeManager.getLocationInfo(entry);if(!locationInfo){return components}if(util.isFakeEntry(entry)){components.push(new PathComponent(util.getEntryLabel(locationInfo,entry),entry.toURL(),entry));return components}let displayRootUrl=locationInfo.volumeInfo.displayRoot.toURL();let displayRootFullPath=locationInfo.volumeInfo.displayRoot.fullPath;const prefixEntry=locationInfo.volumeInfo.prefixEntry;if(prefixEntry&&prefixEntry.rootType!==VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT){components.push(new PathComponent(prefixEntry.name,prefixEntry.toURL(),prefixEntry))}if(locationInfo.rootType===VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME){const match=entry.fullPath.match(/^\/\.(files|shortcut-targets)-by-id\/.+?\//);if(match){displayRootFullPath=match[0]}else{console.warn("Unexpected shared DriveFS path: ",entry.fullPath)}displayRootUrl=replaceRootName(displayRootUrl,displayRootFullPath);const sharedWithMeFakeEntry=locationInfo.volumeInfo.fakeEntries[VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME];components.push(new PathComponent(str("DRIVE_SHARED_WITH_ME_COLLECTION_LABEL"),sharedWithMeFakeEntry.toURL(),sharedWithMeFakeEntry))}else if(locationInfo.rootType===VolumeManagerCommon.RootType.SHARED_DRIVE){displayRootUrl=replaceRootName(displayRootUrl,VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH);components.push(new PathComponent(util.getRootTypeLabel(locationInfo),displayRootUrl))}else if(locationInfo.rootType===VolumeManagerCommon.RootType.COMPUTER){displayRootUrl=replaceRootName(displayRootUrl,VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH);components.push(new PathComponent(util.getRootTypeLabel(locationInfo),displayRootUrl))}else{components.push(new PathComponent(util.getRootTypeLabel(locationInfo),displayRootUrl))}let relativePath=entry.fullPath.slice(displayRootFullPath.length);if(entry.fullPath.startsWith(VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH)){relativePath=entry.fullPath.slice(VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH.length)}else if(entry.fullPath.startsWith(VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH)){relativePath=entry.fullPath.slice(VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH.length)}if(relativePath.indexOf("/")===0){relativePath=relativePath.slice(1)}if(relativePath.length===0){return components}let currentUrl=/^.+\/$/.test(displayRootUrl)?displayRootUrl.slice(0,displayRootUrl.length-1):displayRootUrl;const paths=relativePath.split("/");for(let i=0;i<paths.length;i++){currentUrl+="/"+encodeURIComponent(paths[i]);let path=paths[i];if(i===0&&locationInfo.rootType===VolumeManagerCommon.RootType.DOWNLOADS){if(path==="Downloads"){path=str("DOWNLOADS_DIRECTORY_LABEL")}if(path==="PvmDefault"){path=str("PLUGIN_VM_DIRECTORY_LABEL")}if(path==="Camera"){path=str("CAMERA_DIRECTORY_LABEL")}}components.push(new PathComponent(path,currentUrl))}return components}}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function keyedKeepFirst(actionsProducer,generateKey){let inFlightKey=null;async function*wrap(...args){const key=generateKey(...args);if(inFlightKey&&inFlightKey===key){return}inFlightKey=key;const generator=actionsProducer(...args);try{for await(const producedAction of generator){if(inFlightKey&&inFlightKey!==key){const error=new ConcurrentActionInvalidatedError(`ActionsProducer invalidated running key: ${key} current: ${inFlightKey}:`);await generator.throw(error);throw error}yield producedAction}}catch(error){if(!(error instanceof ConcurrentActionInvalidatedError)){inFlightKey=null}throw error}inFlightKey=null}return wrap}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$9=new Slice("currentDirectory");function getEmptySelection(keys=[]){return{keys:keys,dirCount:0,fileCount:0,hostedCount:0,offlineCachedCount:0,fileTasks:{tasks:[],defaultTask:undefined,policyDefaultHandlerStatus:undefined,status:PropStatus.STARTED}}}function hasDlpDisabledFiles(currentState){const content=currentState.currentDirectory?.content;if(!content){return false}for(const key of content.keys){const fileData=currentState.allEntries[key];if(!fileData){console.warn(`Missing entry: ${key}`);continue}if(fileData.metadata.isRestrictedForDestination){return true}}return false}const changeDirectory=slice$9.addReducer("set",changeDirectoryReducer);function changeDirectoryReducer(currentState,payload){if(payload.to){cacheEntries(currentState,[payload.to])}const{to:to,toKey:toKey}=payload;const key=toKey||to.toURL();const status=payload.status||PropStatus.STARTED;const fileData=currentState.allEntries[key];let selection=currentState.currentDirectory?.selection;if(!selection||currentState.currentDirectory?.key!==key){selection={keys:[],dirCount:0,fileCount:0,hostedCount:undefined,offlineCachedCount:undefined,fileTasks:{tasks:[],policyDefaultHandlerStatus:undefined,defaultTask:undefined,status:PropStatus.SUCCESS}}}let content=currentState.currentDirectory?.content;let hasDlpDisabledFiles=currentState.currentDirectory?.hasDlpDisabledFiles||false;if(!content||currentState.currentDirectory?.key!==key){content={keys:[]};hasDlpDisabledFiles=false}let currentDirectory={key:key,status:status,pathComponents:[],content:content,rootType:undefined,selection:selection,hasDlpDisabledFiles:hasDlpDisabledFiles};if(fileData){const{volumeManager:volumeManager}=window.fileManager;if(!volumeManager){console.debug(`VolumeManager not available yet.`);currentDirectory=currentState.currentDirectory||currentDirectory}else{const components=PathComponent.computeComponentsFromEntry(fileData.entry,volumeManager);currentDirectory.pathComponents=components.map((c=>({name:c.name,label:c.name,key:c.url_})));const locationInfo=volumeManager.getLocationInfo(fileData.entry);currentDirectory.rootType=locationInfo?.rootType}}return{...currentState,currentDirectory:currentDirectory}}const updateSelection=slice$9.addReducer("set-selection",updateSelectionReducer);function updateSelectionReducer(currentState,payload){cacheEntries(currentState,payload.entries);const updatingToEmpty=payload.entries.length===0&&payload.selectedKeys.length===0;if(!currentState.currentDirectory){if(!updatingToEmpty){console.warn("Missing `currentDirectory`");console.debug("Dropping action:",payload)}return currentState}if(!currentState.currentDirectory.content){if(!updatingToEmpty){console.warn("Missing `currentDirectory.content`");console.debug("Dropping action:",payload)}return currentState}const selectedKeys=payload.selectedKeys;const contentKeys=new Set(currentState.currentDirectory.content.keys);const missingKeys=selectedKeys.filter((k=>!contentKeys.has(k)));if(missingKeys.length>0){console.warn("Got selected keys that are not in current directory, "+"continuing anyway");console.debug(`Missing keys: ${missingKeys.join("\n")} \nexisting keys:\n ${(currentState.currentDirectory?.content?.keys??[]).join("\n")}`)}const selection=getEmptySelection(selectedKeys);for(const key of selectedKeys){const fileData=currentState.allEntries[key];if(!fileData){console.warn(`Missing entry: ${key}`);continue}if(fileData.isDirectory){selection.dirCount++}else{selection.fileCount++}const isHosted=fileData.metadata?.hosted;if(isHosted===undefined){selection.hostedCount=undefined}else{if(selection.hostedCount!==undefined&&isHosted){selection.hostedCount++}}const isOfflineCached=fileData.metadata?.offlineCached;if(isOfflineCached===undefined){selection.offlineCachedCount=undefined}else{if(selection.offlineCachedCount!==undefined&&isOfflineCached){selection.offlineCachedCount++}}}const currentDirectory={...currentState.currentDirectory,selection:selection};return{...currentState,currentDirectory:currentDirectory}}const updateFileTasks=slice$9.addReducer("set-file-tasks",updateFileTasksReducer);function updateFileTasksReducer(currentState,payload){const initialSelection=currentState.currentDirectory?.selection??getEmptySelection();const fileTasks={...initialSelection.fileTasks,...payload};const selection={...initialSelection,fileTasks:fileTasks};const currentDirectory={...currentState.currentDirectory,selection:selection};return{...currentState,currentDirectory:currentDirectory}}const updateDirectoryContent=slice$9.addReducer("update-content",updateDirectoryContentReducer);function updateDirectoryContentReducer(currentState,payload){cacheEntries(currentState,payload.entries);if(!currentState.currentDirectory){console.warn("Missing `currentDirectory`");return currentState}const initialContent=currentState.currentDirectory?.content??{keys:[]};const keys=payload.entries.map((e=>e.toURL()));const content={...initialContent,keys:keys};let currentDirectory={...currentState.currentDirectory,content:content};const newState={...currentState,currentDirectory:currentDirectory};currentDirectory={...currentDirectory,hasDlpDisabledFiles:hasDlpDisabledFiles(newState)};return{...newState,currentDirectory:currentDirectory}}function allowCrostiniTask(filesData){if(filesData.length!==1){return false}const fileData=filesData[0];const rootType=fileData.entry.rootType;if(rootType!==VolumeManagerCommon.RootType.CROSTINI){return false}const crostini=window.fileManager.crostini;return crostini.canSharePath(constants.DEFAULT_CROSTINI_VM,fileData.entry,false)}const emptyAction=status=>updateFileTasks({tasks:[],policyDefaultHandlerStatus:undefined,defaultTask:undefined,status:status});async function*fetchFileTasksInternal(filesData){filesData=filesData.filter(getNativeEntry);const state=getStore().getState();const currentRootType=state.currentDirectory?.rootType;const dialogType=window.fileManager.dialogType;const shouldDisableTasks=dialogType!==DialogType.FULL_PAGE||currentRootType===VolumeManagerCommon.RootType.TRASH||filesData.length===0;if(shouldDisableTasks){yield emptyAction(PropStatus.SUCCESS);return}const selectionHandler=window.fileManager.selectionHandler;const selection=selectionHandler.selection;await selection.computeAdditional(window.fileManager.metadataModel);yield;try{const resultingTasks=await getFileTasks(filesData.map((fd=>fd.entry)),filesData.map((fd=>fd.metadata.sourceUrl||"")));if(!resultingTasks||!resultingTasks.tasks){return}yield;if(filesData.length===0||resultingTasks.tasks.length===0){yield emptyAction(PropStatus.SUCCESS);return}if(!allowCrostiniTask(filesData)){resultingTasks.tasks=resultingTasks.tasks.filter((task=>!util.descriptorEqual(task.descriptor,INSTALL_LINUX_PACKAGE_TASK_DESCRIPTOR)))}const tasks=annotateTasks(resultingTasks.tasks,filesData);resultingTasks.tasks=tasks;const taskHistory=window.fileManager.taskController.taskHistory;const defaultTask=getDefaultTask(tasks,resultingTasks.policyDefaultHandlerStatus,taskHistory)??undefined;yield updateFileTasks({tasks:tasks,policyDefaultHandlerStatus:resultingTasks.policyDefaultHandlerStatus,defaultTask:defaultTask,status:PropStatus.SUCCESS})}catch(error){yield emptyAction(PropStatus.ERROR)}}function getSelectionKey(filesData){return filesData.map((f=>f?.entry.toURL())).join("|")}const fetchFileTasks=keyedKeepFirst(fetchFileTasksInternal,getSelectionKey);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$8=new Slice("allEntries");const clearCachedEntries=slice$8.addReducer("clear-stale-cache",clearCachedEntriesReducer);function clearCachedEntriesReducer(state){const entries=state.allEntries;const currentDirectoryKey=state.currentDirectory?.key;const entriesToKeep=new Set;if(currentDirectoryKey){entriesToKeep.add(currentDirectoryKey);for(const component of state.currentDirectory.pathComponents){entriesToKeep.add(component.key)}for(const key of state.currentDirectory.content.keys){entriesToKeep.add(key)}}const selectionKeys=state.currentDirectory?.selection.keys??[];if(selectionKeys){for(const key of selectionKeys){entriesToKeep.add(key)}}for(const volume of Object.values(state.volumes)){if(!volume.rootKey){continue}entriesToKeep.add(volume.rootKey);if(volume.prefixKey){entriesToKeep.add(volume.prefixKey)}}for(const key of state.uiEntries){entriesToKeep.add(key)}for(const key of state.folderShortcuts){entriesToKeep.add(key)}for(const root of state.navigation.roots){entriesToKeep.add(root.key)}for(const key of Object.keys(entries)){const fileData=entries[key];if(fileData.expanded){entriesToKeep.add(key);if(fileData.children){for(const child of fileData.children){entriesToKeep.add(child)}}}}for(const key of entriesToKeep){const fileData=entries[key];if(fileData?.children){for(const child of fileData.children){entriesToKeep.add(child)}}}for(const key of Object.keys(entries)){if(entriesToKeep.has(key)){continue}delete entries[key]}return state}function scheduleClearCachedEntries(){if(clearCachedEntriesRequestId===0){clearCachedEntriesRequestId=requestIdleCallback(startClearCache)}}let clearCachedEntriesRequestId=0;function startClearCache(){const store=getStore();store.dispatch(clearCachedEntries());clearCachedEntriesRequestId=0}const prefetchPropertyNames=Array.from(new Set([...constants.LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES,...constants.ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES,...constants.FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES,...constants.DLP_METADATA_PREFETCH_PROPERTY_NAMES]));function getEntryIcon(entry,locationInfo,volumeType){const url=entry.toURL();const urlToIconPath={[recentRootKey]:constants.ICON_TYPES.RECENT,[myFilesEntryListKey]:constants.ICON_TYPES.MY_FILES,[driveRootEntryListKey]:constants.ICON_TYPES.SERVICE_DRIVE};if(urlToIconPath[url]){return urlToIconPath[url]}const grandRootPathToIconMap={[VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH]:constants.ICON_TYPES.COMPUTERS_GRAND_ROOT,[VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH]:constants.ICON_TYPES.SHARED_DRIVES_GRAND_ROOT};if(volumeType===VolumeManagerCommon.VolumeType.DRIVE&&grandRootPathToIconMap[entry.fullPath]){return grandRootPathToIconMap[entry.fullPath]}if("rootType"in entry&&entry.rootType===VolumeManagerCommon.VolumeType.REMOVABLE){return constants.ICON_TYPES.USB}if(isVolumeEntry(entry)&&entry.volumeInfo){switch(entry.volumeInfo.volumeType){case VolumeManagerCommon.VolumeType.DOWNLOADS:return constants.ICON_TYPES.MY_FILES;case VolumeManagerCommon.VolumeType.SMB:return constants.ICON_TYPES.SMB;case VolumeManagerCommon.VolumeType.PROVIDED:case VolumeManagerCommon.VolumeType.DOCUMENTS_PROVIDER:{const iconSet=entry.volumeInfo.iconSet;if(iconSet){const backgroundImage=util.iconSetToCSSBackgroundImageValue(entry.volumeInfo.iconSet);if(backgroundImage!=="none"){return iconSet}}if(volumeType&&VolumeManagerCommon.shouldProvideIcons(volumeType)){return constants.ICON_TYPES.GENERIC}return""}case VolumeManagerCommon.VolumeType.MTP:return constants.ICON_TYPES.MTP;case VolumeManagerCommon.VolumeType.ARCHIVE:return constants.ICON_TYPES.ARCHIVE;case VolumeManagerCommon.VolumeType.REMOVABLE:return entry.volumeInfo.prefixEntry?constants.ICON_TYPES.UNKNOWN_REMOVABLE:constants.ICON_TYPES.USB;case VolumeManagerCommon.VolumeType.DRIVE:return constants.ICON_TYPES.DRIVE}}return FileType.getIcon(entry,undefined,locationInfo?.rootType)}function appendChildIfNotExisted(parentEntry,childEntry){if(!parentEntry.getUIChildren().find((entry=>util.isSameEntry(entry,childEntry)))){parentEntry.addEntry(childEntry);return true}return false}function convertEntryToFileData(entry){const{volumeManager:volumeManager,metadataModel:metadataModel}=window.fileManager;const volumeInfo="volumeInfo"in entry?entry.volumeInfo:volumeManager.getVolumeInfo(entry);const locationInfo=volumeManager.getLocationInfo(entry);const label=util.getEntryLabel(locationInfo,entry);const volumeType="volumeType"in entry&&entry.volumeType?entry.volumeType:volumeInfo?.volumeType||null;const volumeId=volumeInfo?.volumeId||null;const icon=getEntryIcon(entry,locationInfo,volumeType);if("disabled"in entry&&volumeType){entry.disabled=volumeManager.isDisabled(volumeType)}const metadata=metadataModel?metadataModel.getCache([entry],prefetchPropertyNames)[0]:{};return{entry:entry,icon:icon,type:getEntryType(entry),isDirectory:entry.isDirectory,label:label,volumeId:volumeId,rootType:locationInfo?.rootType??null,metadata:metadata,expanded:false,disabled:"disabled"in entry?entry.disabled:false,isRootEntry:!!locationInfo?.isRootEntry,isEjectable:false,shouldDelayLoadingChildren:false,children:[]}}function appendEntry(state,entry){const allEntries=state.allEntries||{};const key=entry.toURL();const existingFileData=allEntries[key]||{};if(existingFileData.type===EntryType.VOLUME_ROOT&&getEntryType(entry)!==EntryType.VOLUME_ROOT){return}const fileData=convertEntryToFileData(entry);allEntries[key]={...fileData,expanded:existingFileData.expanded||fileData.expanded,isEjectable:existingFileData.isEjectable||fileData.isEjectable,shouldDelayLoadingChildren:existingFileData.shouldDelayLoadingChildren||fileData.shouldDelayLoadingChildren,children:existingFileData.children||fileData.children};state.allEntries=allEntries}function updateFileData(state,key,changes){if(!state.allEntries[key]){console.warn(`Entry FileData not found in the store: ${key}`);return}const newFileData={...state.allEntries[key],...changes};state.allEntries[key]=newFileData;return newFileData}function cacheEntries(currentState,entries){scheduleClearCachedEntries();for(const entry of entries){appendEntry(currentState,entry)}}function getEntryType(entry){if(!("type_name"in entry)){return EntryType.FS_API}switch(entry.type_name){case"EntryList":return EntryType.ENTRY_LIST;case"VolumeEntry":return EntryType.VOLUME_ROOT;case"FakeEntry":switch(entry.rootType){case VolumeManagerCommon.RootType.RECENT:return EntryType.RECENT;case VolumeManagerCommon.RootType.TRASH:return EntryType.TRASH;case VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT:return EntryType.ENTRY_LIST;case VolumeManagerCommon.RootType.CROSTINI:case VolumeManagerCommon.RootType.ANDROID_FILES:return EntryType.PLACEHOLDER;case VolumeManagerCommon.RootType.DRIVE_OFFLINE:case VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME:return EntryType.RECENT}console.warn(`Invalid fakeEntry.rootType='${entry.rootType} rootType`);return EntryType.PLACEHOLDER;case"GuestOsPlaceholder":return EntryType.PLACEHOLDER;case"TrashEntry":return EntryType.TRASH;default:console.warn(`Invalid entry.type_name='${entry.type_name}`);return EntryType.FS_API}}const updateMetadata=slice$8.addReducer("update-metadata",updateMetadataReducer);function updateMetadataReducer(currentState,payload){cacheEntries(currentState,payload.metadata.map((m=>m.entry)));for(const entryMetadata of payload.metadata){const key=entryMetadata.entry.toURL();const fileData=currentState.allEntries[key];const metadata={...fileData.metadata,...entryMetadata.metadata};currentState.allEntries[key]={...fileData,metadata:metadata}}if(!currentState.currentDirectory){console.warn("Missing `currentDirectory`");return currentState}const currentDirectory={...currentState.currentDirectory,hasDlpDisabledFiles:hasDlpDisabledFiles(currentState)};return{...currentState,currentDirectory:currentDirectory}}function findVolumeByType(volumes,volumeType){return Object.values(volumes).find((v=>v.rootKey&&v.volumeType===volumeType))??null}function getMyFiles(state){const{volumes:volumes}=state;const myFilesVolume=findVolumeByType(volumes,VolumeManagerCommon.VolumeType.DOWNLOADS);const myFilesVolumeEntry=myFilesVolume?getEntry(state,myFilesVolume.rootKey):null;let myFilesEntryList=getEntry(state,myFilesEntryListKey);if(!myFilesVolumeEntry&&!myFilesEntryList){myFilesEntryList=new EntryList(str("MY_FILES_ROOT_LABEL"),VolumeManagerCommon.RootType.MY_FILES);appendEntry(state,myFilesEntryList);state.uiEntries=[...state.uiEntries,myFilesEntryList.toURL()]}return{myFilesEntry:myFilesVolumeEntry||myFilesEntryList,myFilesVolume:myFilesVolume}}function volumeNestingEntries(state,volumeInfo,volumeMetadata){const VolumeType=VolumeManagerCommon.VolumeType;const myFilesNestedVolumeTypes=getVolumeTypesNestedInMyFiles();const volumeRootKey=volumeInfo.displayRoot?.toURL();const newVolumeEntry=getEntry(state,volumeRootKey);if(!volumeInfo||!newVolumeEntry){return}const{myFilesEntry:myFilesEntry}=getMyFiles(state);if(myFilesNestedVolumeTypes.has(volumeInfo.volumeType)){const myFilesEntryKey=myFilesEntry.toURL();const myFilesFileData={...getFileData(state,myFilesEntryKey)};const uiEntryPlaceholder=myFilesEntry.getUIChildren().find((childEntry=>childEntry.name===newVolumeEntry.name));if(uiEntryPlaceholder){myFilesEntry.removeChildEntry(uiEntryPlaceholder);myFilesFileData.children=myFilesFileData.children.filter((childKey=>childKey!==uiEntryPlaceholder.toURL()))}appendChildIfNotExisted(myFilesEntry,newVolumeEntry);if(!myFilesFileData.children.find((childKey=>childKey===volumeRootKey))){const newChildren=[...myFilesFileData.children,volumeRootKey];const childEntries=newChildren.map((childKey=>getEntry(state,childKey)));myFilesFileData.children=sortEntries(myFilesEntry,childEntries).map((entry=>entry.toURL()))}state.allEntries[myFilesEntryKey]=myFilesFileData}if(volumeInfo.volumeType===VolumeType.DOWNLOADS){const myFilesEntryList=getEntry(state,myFilesEntryListKey);const myFilesVolumeEntry=newVolumeEntry;if(myFilesEntryList){const uiChildren=[...myFilesEntryList.getUIChildren()];for(const childEntry of uiChildren){appendChildIfNotExisted(myFilesVolumeEntry,childEntry);myFilesEntryList.removeChildEntry(childEntry)}state.uiEntries=state.uiEntries.filter((uiEntryKey=>uiEntryKey!==myFilesEntryListKey))}}if(volumeInfo.volumeType===VolumeType.DRIVE){const myDrive=newVolumeEntry;let googleDrive=getEntry(state,driveRootEntryListKey);if(!googleDrive){googleDrive=new EntryList(str("DRIVE_DIRECTORY_LABEL"),VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT);appendEntry(state,googleDrive);state.uiEntries=[...state.uiEntries,googleDrive.toURL()]}appendChildIfNotExisted(googleDrive,myDrive);const{sharedDriveDisplayRoot:sharedDriveDisplayRoot,computersDisplayRoot:computersDisplayRoot,fakeEntries:fakeEntries}=volumeInfo;if(sharedDriveDisplayRoot){appendEntry(state,sharedDriveDisplayRoot);appendChildIfNotExisted(googleDrive,sharedDriveDisplayRoot)}if(computersDisplayRoot){appendEntry(state,computersDisplayRoot);appendChildIfNotExisted(googleDrive,computersDisplayRoot)}const fakeSharedWithMe=fakeEntries[VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME];if(fakeSharedWithMe){appendEntry(state,fakeSharedWithMe);state.uiEntries=[...state.uiEntries,fakeSharedWithMe.toURL()];appendChildIfNotExisted(googleDrive,fakeSharedWithMe)}const fakeOffline=fakeEntries[VolumeManagerCommon.RootType.DRIVE_OFFLINE];if(fakeOffline){appendEntry(state,fakeOffline);state.uiEntries=[...state.uiEntries,fakeOffline.toURL()];appendChildIfNotExisted(googleDrive,fakeOffline)}}state.allEntries[volumeRootKey].isEjectable=volumeInfo.source===VolumeManagerCommon.Source.DEVICE&&volumeInfo.volumeType!==VolumeManagerCommon.VolumeType.MTP||volumeInfo.source===VolumeManagerCommon.Source.FILE;if(volumeInfo.volumeType===VolumeType.REMOVABLE){const groupingKey=removableGroupKey(volumeMetadata);const shouldGroup=Object.values(state.volumes).some((v=>v.volumeType===VolumeType.REMOVABLE&&removableGroupKey(v)===groupingKey&&v.volumeId!=volumeInfo.volumeId));if(shouldGroup){const parentKey=makeRemovableParentKey(volumeMetadata);let parentEntry=getEntry(state,parentKey);if(!parentEntry){parentEntry=new EntryList(volumeMetadata.driveLabel||"",VolumeManagerCommon.RootType.REMOVABLE,volumeMetadata.devicePath);appendEntry(state,parentEntry);state.uiEntries=[...state.uiEntries,parentEntry.toURL()];state.allEntries[parentKey].isEjectable=true}for(const v of Object.values(state.volumes)){if(v.volumeType===VolumeType.REMOVABLE&&removableGroupKey(v)===groupingKey&&!v.prefixKey){const fileData=getFileData(state,v.rootKey);if(fileData?.entry){appendChildIfNotExisted(parentEntry,fileData.entry);state.allEntries[v.rootKey]={...fileData,icon:constants.ICON_TYPES.UNKNOWN_REMOVABLE,isEjectable:false}}}}appendChildIfNotExisted(parentEntry,newVolumeEntry);const fileData=getFileData(state,volumeRootKey);state.allEntries[volumeRootKey]={...fileData,icon:constants.ICON_TYPES.UNKNOWN_REMOVABLE,isEjectable:false}}}state.allEntries[volumeRootKey].shouldDelayLoadingChildren=volumeInfo.source===VolumeManagerCommon.Source.NETWORK&&(volumeInfo.volumeType===VolumeManagerCommon.VolumeType.PROVIDED||volumeInfo.volumeType===VolumeManagerCommon.VolumeType.SMB)}const addChildEntries=slice$8.addReducer("add-children",addChildEntriesReducer);function addChildEntriesReducer(currentState,payload){cacheEntries(currentState,payload.entries);const{parentKey:parentKey,entries:entries}=payload;const{allEntries:allEntries}=currentState;if(!allEntries[parentKey]){return currentState}const newEntryKeys=entries.map((entry=>entry.toURL()));const parentFileData={...allEntries[parentKey],children:newEntryKeys};if(parentFileData.shouldDelayLoadingChildren){for(const entryKey of newEntryKeys){allEntries[entryKey]={...allEntries[entryKey],shouldDelayLoadingChildren:true}}}return{...currentState,allEntries:{...allEntries,[parentKey]:parentFileData}}}async function*readSubDirectories(entry,recursive=false,metricNameForTracking=""){if(!entry||!entry.isDirectory||"disabled"in entry&&entry.disabled){return}if(metricNameForTracking){startInterval(metricNameForTracking)}const validEntry=entry;const childEntriesToReadDeeper=[];if(isDriveRootEntryList(validEntry)){for await(const action of readSubDirectoriesForDriveRootEntryList(validEntry)){yield action;if(action){childEntriesToReadDeeper.push(...action.payload.entries)}}}else{const childEntries=await readChildEntriesForDirectoryEntry(validEntry);const subDirectories=childEntries.filter((childEntry=>childEntry.isDirectory));yield addChildEntries({parentKey:entry.toURL(),entries:subDirectories});childEntriesToReadDeeper.push(...subDirectories)}if(metricNameForTracking){recordInterval(metricNameForTracking)}if(recursive){const fileData=getFileData(getStore().getState(),entry.toURL());if(fileData?.expanded){for(const childEntry of childEntriesToReadDeeper){for await(const action of readSubDirectories(childEntry,true)){yield action}}}}}async function*readSubDirectoriesForDriveRootEntryList(entry){const metricNameMap={[VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH]:"TeamDrivesCount",[VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH]:"ComputerCount"};const driveChildren=entry.getUIChildren();const filteredChildren=[];const isFakeEntryVisible=window.fileManager.dialogType!==DialogType.SELECT_SAVEAS_FILE;for(const childEntry of driveChildren){if(isFakeEntryInDrives(childEntry)){if(isFakeEntryVisible){filteredChildren.push(childEntry)}continue}if(!isGrandRootEntryInDrives(childEntry)){filteredChildren.push(childEntry);continue}const grandChildEntries=await readChildEntriesForDirectoryEntry(childEntry);recordSmallCount(metricNameMap[childEntry.fullPath],grandChildEntries.length);if(grandChildEntries.length>0){filteredChildren.push(childEntry)}}yield addChildEntries({parentKey:entry.toURL(),entries:filteredChildren})}async function readChildEntriesForDirectoryEntry(entry){return new Promise((resolve=>{const reader=entry.createReader();const subEntries=[];const readEntry=()=>{reader.readEntries((entries=>{if(entries.length===0){resolve(sortEntries(entry,subEntries));return}for(const subEntry of entries){subEntries.push(subEntry)}readEntry()}))};readEntry()}))}async function*readSubDirectoriesForRenamedEntry(newEntry){const parentDirectory=await getParentEntry(newEntry);for await(const action of readSubDirectories(parentDirectory)){yield action}for await(const action of readSubDirectories(newEntry,true)){yield action}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$7=new Slice("androidApps");const addAndroidApps=slice$7.addReducer("add",addAndroidAppsReducer);function addAndroidAppsReducer(currentState,payload){const androidApps={};for(const app of payload.apps){let icon=constants.ICON_TYPES.GENERIC;if(app.iconSet){const backgroundImage=util.iconSetToCSSBackgroundImageValue(app.iconSet);if(backgroundImage!=="none"){icon=app.iconSet}}androidApps[app.packageName]={...app,icon:icon}}return{...currentState,androidApps:androidApps}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$6=new Slice("bulkPinning");const updateBulkPinProgress=slice$6.addReducer("set-progress",((state,bulkPinning)=>({...state,bulkPinning:bulkPinning})));
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$5=new Slice("drive");const updateDriveConnectionStatus=slice$5.addReducer("set-drive-connection-status",updateDriveConnectionStatusReducer);function updateDriveConnectionStatusReducer(currentState,payload){const drive={...currentState.drive};if(payload.type!==currentState.drive.connectionType){drive.connectionType=payload.type}if(payload.type===chrome.fileManagerPrivate.DriveConnectionStateType.OFFLINE&&payload.reason!==currentState.drive.offlineReason){drive.offlineReason=payload.reason}else{drive.offlineReason=undefined}return{...currentState,drive:drive}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$4=new Slice("folderShortcuts");const refreshFolderShortcut=slice$4.addReducer("refresh",refreshFolderShortcutReducer);function refreshFolderShortcutReducer(currentState,payload){cacheEntries(currentState,payload.entries);return{...currentState,folderShortcuts:payload.entries.map((entry=>entry.toURL()))}}const addFolderShortcut=slice$4.addReducer("add",addFolderShortcutReducer);function addFolderShortcutReducer(currentState,payload){cacheEntries(currentState,[payload.entry]);const{entry:entry}=payload;const key=entry.toURL();const{folderShortcuts:folderShortcuts}=currentState;for(let i=0;i<folderShortcuts.length;i++){if(key===folderShortcuts[i]){return currentState}const shortcutEntry=getEntry(currentState,folderShortcuts[i]);if(util.comparePath(shortcutEntry,entry)>0){return{...currentState,folderShortcuts:[...folderShortcuts.slice(0,i),key,...folderShortcuts.slice(i)]}}}return{...currentState,folderShortcuts:folderShortcuts.concat(key)}}const removeFolderShortcut=slice$4.addReducer("remove",removeFolderShortcutReducer);function removeFolderShortcutReducer(currentState,payload){const{key:key}=payload;const{folderShortcuts:folderShortcuts}=currentState;const isExisted=folderShortcuts.find((k=>k===key));if(!isExisted){return currentState}return{...currentState,folderShortcuts:folderShortcuts.filter((k=>k!==key))}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$3=new Slice("navigation");const VolumeType=VolumeManagerCommon.VolumeType;const sections=new Map;sections.set(VolumeType.DOWNLOADS,NavigationSection.MY_FILES);sections.set(VolumeType.DRIVE,NavigationSection.CLOUD);sections.set(VolumeType.SMB,NavigationSection.CLOUD);sections.set(VolumeType.PROVIDED,NavigationSection.CLOUD);sections.set(VolumeType.DOCUMENTS_PROVIDER,NavigationSection.CLOUD);sections.set(VolumeType.REMOVABLE,NavigationSection.REMOVABLE);sections.set(VolumeType.MTP,NavigationSection.REMOVABLE);sections.set(VolumeType.ARCHIVE,NavigationSection.REMOVABLE);function getPrefixEntryOrEntry(state,volume){if(volume.prefixKey){const entry=getEntry(state,volume.prefixKey);return entry}if(volume.volumeType===VolumeType.DOWNLOADS){return getMyFiles(state).myFilesEntry}const entry=getEntry(state,volume.rootKey);return entry}const refreshNavigationRoots=slice$3.addReducer("refresh-roots",refreshNavigationRootsReducer);function refreshNavigationRootsReducer(currentState){const{navigation:{roots:previousRoots},folderShortcuts:folderShortcuts,androidApps:androidApps}=currentState;const roots=[];const processedEntryKeys=new Set;const recentRoot=previousRoots.find((root=>root.key===recentRootKey));if(recentRoot){roots.push(recentRoot);processedEntryKeys.add(recentRootKey)}else{const recentEntry=getEntry(currentState,recentRootKey);if(recentEntry){roots.push({key:recentRootKey,section:NavigationSection.TOP,separator:false,type:NavigationType.RECENT});processedEntryKeys.add(recentRootKey)}}folderShortcuts.forEach((shortcutKey=>{const shortcutEntry=getEntry(currentState,shortcutKey);if(shortcutEntry){roots.push({key:shortcutKey,section:NavigationSection.TOP,separator:false,type:NavigationType.SHORTCUT});processedEntryKeys.add(shortcutKey)}}));const{myFilesEntry:myFilesEntry,myFilesVolume:myFilesVolume}=getMyFiles(currentState);roots.push({key:myFilesEntry.toURL(),section:NavigationSection.MY_FILES,separator:processedEntryKeys.size>0,type:myFilesVolume?NavigationType.VOLUME:NavigationType.ENTRY_LIST});processedEntryKeys.add(myFilesEntry.toURL());const driveEntry=getEntry(currentState,driveRootEntryListKey);if(driveEntry){roots.push({key:driveEntry.toURL(),section:NavigationSection.GOOGLE_DRIVE,separator:true,type:NavigationType.DRIVE});processedEntryKeys.add(driveEntry.toURL())}const volumesOrder={[VolumeType.SMB]:1,[VolumeType.PROVIDED]:2,[VolumeType.DOCUMENTS_PROVIDER]:3,[VolumeType.REMOVABLE]:4,[VolumeType.ARCHIVE]:5,[VolumeType.MTP]:6};const{volumeManager:volumeManager}=window.fileManager;const filteredVolumes=Object.values(currentState.volumes).filter((volume=>{const volumeEntry=getEntry(currentState,volume.rootKey);return volumeManager.isAllowedVolume(volumeEntry.volumeInfo)}));function getVolumeOrder(volume){if(util.isOneDriveId(volume.providerId)){return 0}return volumesOrder[volume.volumeType]??999}const volumes=filteredVolumes.filter((v=>v.rootKey&&!(v.volumeType===VolumeType.DOWNLOADS||v.volumeType===VolumeType.DRIVE||v.volumeType===VolumeType.MEDIA_VIEW))).sort(((v1,v2)=>{const v1Order=getVolumeOrder(v1);const v2Order=getVolumeOrder(v2);return v1Order-v2Order}));let lastSection=null;for(const volume of volumes){const volumeEntry=getPrefixEntryOrEntry(currentState,volume);if(volumeEntry&&!processedEntryKeys.has(volumeEntry.toURL())){let section=sections.get(volume.volumeType)??NavigationSection.REMOVABLE;if(util.isOneDriveId(volume.providerId)){section=NavigationSection.ODFS}const isSectionStart=section!==lastSection;roots.push({key:volumeEntry.toURL(),section:section,separator:isSectionStart,type:NavigationType.VOLUME});processedEntryKeys.add(volumeEntry.toURL());lastSection=section}}Object.values(androidApps).forEach(((app,index)=>{roots.push({key:app.packageName,section:NavigationSection.ANDROID_APPS,separator:index===0,type:NavigationType.ANDROID_APPS});processedEntryKeys.add(app.packageName)}));const trashEntry=getEntry(currentState,trashRootKey);if(trashEntry){roots.push({key:trashRootKey,section:NavigationSection.TRASH,separator:true,type:NavigationType.TRASH});processedEntryKeys.add(trashRootKey)}return{...currentState,navigation:{roots:roots}}}const updateNavigationEntry=slice$3.addReducer("update-entry",updateNavigationEntryReducer);function updateNavigationEntryReducer(currentState,payload){const{key:key,expanded:expanded}=payload;const fileData=getFileData(currentState,key);if(!fileData){return currentState}currentState.allEntries[key]={...fileData,expanded:expanded};return{...currentState}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$2=new Slice("preferences");function isPreferencesChange(payload){if(payload.driveEnabled!==undefined){return false}return true}function updateIfDefined(updatedPreferences,newPreferences,key){if(!(key in newPreferences)||newPreferences[key]===undefined){return false}if(updatedPreferences[key]===newPreferences[key]){return false}updatedPreferences[key]=newPreferences[key];return true}const updatePreferences=slice$2.addReducer("set",updatePreferencesReducer);function updatePreferencesReducer(currentState,payload){const preferences=payload;if(!isPreferencesChange(preferences)){return{...currentState,preferences:preferences}}const updatedPreferences={...currentState.preferences};const keysToCheck=["driveSyncEnabledOnMeteredNetwork","arcEnabled","arcRemovableMediaAccessEnabled","folderShortcuts","driveFsBulkPinningEnabled"];let updated=false;for(const key of keysToCheck){updated=updateIfDefined(updatedPreferences,preferences,key)||updated}if(!updated){return currentState}return{...currentState,preferences:updatedPreferences}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$1=new Slice("search");function isSearchEmpty(search){return Object.values(search).every((f=>f===undefined))}function optionsChanged(stored,fresh){if(fresh===undefined){return false}if(stored===undefined){return true}return fresh.location!==stored.location||fresh.recency!==stored.recency||fresh.fileCategory!==stored.fileCategory}const setSearchParameters=slice$1.addReducer("set",searchReducer);function searchReducer(state,payload){const blankSearch={query:undefined,status:undefined,options:undefined};if(isSearchEmpty(payload)){if(state.search&&!isSearchEmpty(state.search)){return{...state,search:blankSearch}}return state}const currentSearch=state.search||blankSearch;const search={...currentSearch};let changed=false;if(payload.query!==undefined&&payload.query!==currentSearch.query){search.query=payload.query;changed=true}if(payload.status!==undefined&&payload.status!==currentSearch.status){search.status=payload.status;changed=true}if(optionsChanged(currentSearch.options,payload.options)){search.options={...payload.options};changed=true}return changed?{...state,search:search}:state}const updateSearch=data=>setSearchParameters({query:data.query,status:data.status,options:data.options});const clearSearch=()=>setSearchParameters({query:undefined,status:undefined,options:undefined});function getDefaultSearchOptions(){return{location:SearchLocation.THIS_FOLDER,recency:SearchRecency.ANYTIME,fileCategory:chrome.fileManagerPrivate.FileCategory.ALL}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice=new Slice("uiEntries");const uiEntryRootTypesInMyFiles=new Set([VolumeManagerCommon.RootType.ANDROID_FILES,VolumeManagerCommon.RootType.CROSTINI,VolumeManagerCommon.RootType.GUEST_OS]);const addUiEntry=slice.addReducer("add",addUiEntryReducer);function addUiEntryReducer(currentState,payload){cacheEntries(currentState,[payload.entry]);const{entry:entry}=payload;const key=entry.toURL();let isVolumeEntryExistedInMyFiles=false;if(uiEntryRootTypesInMyFiles.has(entry.rootType)){const{myFilesEntry:myFilesEntry}=getMyFiles(currentState);const children=myFilesEntry.getUIChildren();isVolumeEntryExistedInMyFiles=!!children.find((childEntry=>isVolumeEntry(childEntry)&&childEntry.name===entry.name));const isUiEntryExistedInMyFiles=!!children.find((childEntry=>util.isSameEntry(childEntry,entry)));const shouldAddUiEntry=!isUiEntryExistedInMyFiles&&!isVolumeEntryExistedInMyFiles;if(shouldAddUiEntry){myFilesEntry.addEntry(entry);const fileData=getFileData(currentState,myFilesEntry.toURL());if(fileData){const newChildren=fileData.children.concat(entry.toURL());const childEntries=newChildren.map((childKey=>getEntry(currentState,childKey)));const sortedChildren=sortEntries(myFilesEntry,childEntries).map((entry=>entry.toURL()));currentState.allEntries[myFilesEntry.toURL()]={...fileData,children:sortedChildren}}}}if(!currentState.uiEntries.find((k=>k===key))&&!isVolumeEntryExistedInMyFiles){currentState.uiEntries=currentState.uiEntries.slice();currentState.uiEntries.push(key)}return{...currentState}}const removeUiEntry=slice.addReducer("remove",removeUiEntryReducer);function removeUiEntryReducer(currentState,payload){const{key:key}=payload;const entry=getEntry(currentState,key);if(currentState.uiEntries.find((k=>k===key))){currentState.uiEntries=currentState.uiEntries.filter((k=>k!==key))}if(entry&&uiEntryRootTypesInMyFiles.has(entry.rootType)){const{myFilesEntry:myFilesEntry}=getMyFiles(currentState);const children=myFilesEntry.getUIChildren();const isUiEntryExistedInMyFiles=!!children.find((childEntry=>util.isSameEntry(childEntry,entry)));if(isUiEntryExistedInMyFiles){myFilesEntry.removeChildEntry(entry);const fileData=getFileData(currentState,myFilesEntry.toURL());if(fileData){currentState.allEntries[myFilesEntry.toURL()]={...fileData,children:fileData.children.filter((child=>child!==key))}}}}return{...currentState}}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getStore(){if(!window.store){window.store=new BaseStore(getEmptyState(),[slice$1,slice$a,slice$6,slice,slice$7,slice$4,slice$3,slice$2,slice$b,slice$5,slice$9,slice$8])}return window.store}function getEmptyState(){return{allEntries:{},currentDirectory:undefined,device:{connection:chrome.fileManagerPrivate.DeviceConnectionState.ONLINE},drive:{connectionType:chrome.fileManagerPrivate.DriveConnectionStateType.ONLINE,offlineReason:undefined},search:{query:undefined,status:undefined,options:undefined},navigation:{roots:[]},volumes:{},uiEntries:[],folderShortcuts:[],androidApps:[],bulkPinning:undefined,preferences:undefined}}async function waitForState(store,checker){if(checker(store.getState())){return store.getState()}return new Promise((resolve=>{const observer={onStateChanged(newState){if(checker(newState)){resolve(newState);store.unsubscribe(this)}}};store.subscribe(observer)}))}function getFileData(state,key){const fileData=state.allEntries[key];if(fileData){return fileData}return null}function getFilesData(state,keys){const filesData=[];for(const key of keys){const fileData=getFileData(state,key);if(fileData){filesData.push(fileData)}}return filesData}function getEntry(state,key){const fileData=state.allEntries[key];return fileData?.entry??null}function getVolume(state,fileData){const volumeId=fileData?.volumeId;return volumeId&&state.volumes[volumeId]||null}function getVolumeType(state,fileData){return getVolume(state,fileData)?.volumeType??null}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}function assertInstanceof(value,type,message){if(value instanceof type){return}throw new Error(message||`Value ${value} is not of type ${type.name||typeof type}`)}function assertNotReached(message="Unreachable code hit"){assert(false,message)}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isTree(element){return element.tagName==="XF-TREE"}function isTreeItem(element){return element.tagName==="XF-TREE-ITEM"}function handleTreeSlotChange(tree,oldItems,newItems){if(tree.selectedItem){if(oldItems.has(tree.selectedItem)&&!newItems.has(tree.selectedItem)){tree.selectedItem=null}}if(tree.focusedItem){if(oldItems.has(tree.focusedItem)&&!newItems.has(tree.focusedItem)){tree.focusedItem=tree.selectedItem}}}
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function decorate(source,constr){let elements;if(typeof source==="string"){elements=document.querySelectorAll(source)}else{elements=[source]}for(let i=0,el;el=elements[i];i++){if(!(el instanceof constr)){constr.decorate(el)}}}function createElementHelper(tagName,opt_bag){let doc;if(opt_bag&&opt_bag.ownerDocument){doc=opt_bag.ownerDocument}else{doc=document}return doc.createElement(tagName)}function define(tagNameOrFunction){let createFunction;let tagName;if(typeof tagNameOrFunction==="function"){createFunction=tagNameOrFunction;tagName=""}else{createFunction=createElementHelper;tagName=tagNameOrFunction}function f(opt_propertyBag){const el=createFunction(tagName,opt_propertyBag);f.decorate(el);for(const propertyName in opt_propertyBag){el[propertyName]=opt_propertyBag[propertyName]}return el}f.decorate=function(el){el.__proto__=f.prototype;if(el.decorate){el.decorate()}};return f}function limitInputWidth(el,parentEl,min,opt_scale){el.style.width="10px";const doc=el.ownerDocument;const win=doc.defaultView;const computedStyle=win.getComputedStyle(el);const parentComputedStyle=win.getComputedStyle(parentEl);const rtl=computedStyle.direction==="rtl";const inputRect=el.getBoundingClientRect();const parentRect=parentEl.getBoundingClientRect();const startPos=rtl?parentRect.right-inputRect.right:inputRect.left-parentRect.left;const inner=parseInt(computedStyle.borderLeftWidth,10)+parseInt(computedStyle.paddingLeft,10)+parseInt(computedStyle.paddingRight,10)+parseInt(computedStyle.borderRightWidth,10);const parentPadding=rtl?parseInt(parentComputedStyle.paddingLeft,10):parseInt(parentComputedStyle.paddingRight,10);let max=parentEl.clientWidth-startPos-inner-parentPadding;if(opt_scale){max*=opt_scale}function limit(){if(el.scrollWidth>max){el.style.width=max+"px"}else{el.style.width=0;const sw=el.scrollWidth;if(sw<min){el.style.width=min+"px"}else{el.style.width=sw+"px"}}}el.addEventListener("input",limit);limit()}function swallowDoubleClick(e){const doc=e.target.ownerDocument;let counter=Math.min(1,e.detail);function swallow(e){e.stopPropagation();e.preventDefault()}function onclick(e){if(e.detail>counter){counter=e.detail;swallow(e)}else{doc.removeEventListener("dblclick",swallow,true);doc.removeEventListener("click",onclick,true)}}setTimeout((function(){doc.addEventListener("click",onclick,true);doc.addEventListener("dblclick",swallow,true)}),0)}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function mouseEnterMaybeShowTooltip(event){const target=event.composedPath()[0];if(!target){return}maybeShowTooltip(target,target.innerText)}function maybeShowTooltip(target,title){if(hasOverflowEllipsis(target)){target.setAttribute("title",title)}else{target.removeAttribute("title")}}function hasOverflowEllipsis(element){return element.offsetWidth<element.scrollWidth||element.offsetHeight<element.scrollHeight}function htmlEscape(str){return str.replace(/[<>&]/g,(entity=>{switch(entity){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;"}return entity}))}function getKeyModifiers(event){return(event.ctrlKey?"Ctrl-":"")+(event.altKey?"Alt-":"")+(event.shiftKey?"Shift-":"")+(event.metaKey?"Meta-":"")}function createChild(parent,className,tag){const child=parent.ownerDocument.createElement(tag||"div");if(className){child.className=className}parent.appendChild(child);return child}function queryRequiredElement(selectors,context){const element=(context||document).querySelector(selectors);assertInstanceof(element,HTMLElement,"Missing required element: "+selectors);return element}function queryDecoratedElement(query,type){const element=queryRequiredElement(query);decorate(element,type);return element}function queryRequiredExactlyOne(selectors,context=document){const elements=selectors.map((selector=>context.querySelector(selector)));assert(elements.filter((el=>!!el)).length===1,"Exactly one of the elements should exist.");return elements}function createDOMError(name,message){return new UserDomError(name,message)}class UserDomError extends DOMError{constructor(name,message){super(name);this.name_=name;this.message_=message||"";Object.freeze(this)}get name(){return this.name_}get message(){return this.message_}}function getCrActionMenuTop(triggerElement,marginTop){let top=triggerElement.offsetHeight;let offsetElement=triggerElement;while(offsetElement instanceof HTMLElement){top+=offsetElement.offsetTop;offsetElement=offsetElement.offsetParent}top+=marginTop;return top}function isDirectoryTree(element){return element.typeName==="directory_tree"||isTree(element)}function isDirectoryTreeItem(element){return element.typeName==="directory_item"||isTreeItem(element)}function getFocusedTreeItem(tree){if(tree.typeName==="directory_tree"){return tree.selectedItem}if(isTree(tree)){return tree.focusedItem}return null}
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const util={};util.iconSetToCSSBackgroundImageValue=iconSet=>{let lowDpiPart=null;let highDpiPart=null;if(iconSet.icon16x16Url){lowDpiPart="url("+iconSet.icon16x16Url+") 1x"}if(iconSet.icon32x32Url){highDpiPart="url("+iconSet.icon32x32Url+") 2x"}if(lowDpiPart&&highDpiPart){return"-webkit-image-set("+lowDpiPart+", "+highDpiPart+")"}else if(lowDpiPart){return"-webkit-image-set("+lowDpiPart+")"}else if(highDpiPart){return"-webkit-image-set("+highDpiPart+")"}return"none"};util.FileErrorLocalizedName={InvalidModificationError:"FILE_ERROR_INVALID_MODIFICATION",InvalidStateError:"FILE_ERROR_INVALID_STATE",NoModificationAllowedError:"FILE_ERROR_NO_MODIFICATION_ALLOWED",NotFoundError:"FILE_ERROR_NOT_FOUND",NotReadableError:"FILE_ERROR_NOT_READABLE",PathExistsError:"FILE_ERROR_PATH_EXISTS",QuotaExceededError:"FILE_ERROR_QUOTA_EXCEEDED",SecurityError:"FILE_ERROR_SECURITY"};Object.freeze(util.FileErrorLocalizedName);util.getFileErrorString=name=>{const error=util.FileErrorLocalizedName[name]||"FILE_ERROR_GENERIC";return loadTimeData.getString(error)};util.FileError={ABORT_ERR:"AbortError",INVALID_MODIFICATION_ERR:"InvalidModificationError",INVALID_STATE_ERR:"InvalidStateError",NO_MODIFICATION_ALLOWED_ERR:"NoModificationAllowedError",NOT_FOUND_ERR:"NotFoundError",NOT_READABLE_ERR:"NotReadable",PATH_EXISTS_ERR:"PathExistsError",QUOTA_EXCEEDED_ERR:"QuotaExceededError",TYPE_MISMATCH_ERR:"TypeMismatchError",ENCODING_ERR:"EncodingError"};Object.freeze(util.FileError);util.removeFileOrDirectory=(entry,onSuccess,onError)=>{if(entry.isDirectory){entry.removeRecursively(onSuccess,onError)}else{entry.remove(onSuccess,onError)}};util.bytesToString=(bytes,addedPrecision=0)=>{const UNITS=["SIZE_BYTES","SIZE_KB","SIZE_MB","SIZE_GB","SIZE_TB","SIZE_PB"];const STEPS=[0,Math.pow(2,10),Math.pow(2,20),Math.pow(2,30),Math.pow(2,40),Math.pow(2,50)];const round=(value,decimals)=>{const scale=Math.pow(10,decimals);return Math.round(value*scale)/scale};const str=(n,u)=>strf(u,n.toLocaleString());const fmt=(s,u)=>{const rounded=round(bytes/s,1+addedPrecision);return str(rounded,u)};if(bytes<STEPS[1]){return str(bytes,UNITS[0])}if(bytes<STEPS[2]){const rounded=addedPrecision?round(bytes/STEPS[1],addedPrecision):Math.ceil(bytes/STEPS[1]);return str(rounded,UNITS[1])}let i;for(i=2;i<UNITS.length-1;i++){if(bytes<STEPS[i+1]){return fmt(STEPS[i],UNITS[i])}}return fmt(STEPS[i],UNITS[i])};util.extractFilePath=url=>{const match=/^filesystem:[\w-]*:\/\/[\w-]*\/(external|persistent|temporary)(\/.*)$/.exec(url||"");const path=match&&match[2];if(!path){return null}return decodeURIComponent(path)};function str(id){try{return loadTimeData.getString(id)}catch(e){console.warn("Failed to get string for",id);return id}}function strf(id,var_args){return loadTimeData.getStringF.apply(loadTimeData,arguments)}util.strf=strf;util.runningInBrowser=()=>!window.appID;util.FileOperationType={COPY:"COPY",DELETE:"DELETE",MOVE:"MOVE",RESTORE:"RESTORE",RESTORE_TO_DESTINATION:"RESTORE_TO_DESTINATION",ZIP:"ZIP"};Object.freeze(util.FileOperationType);util.FileOperationErrorType={UNEXPECTED_SOURCE_FILE:0,TARGET_EXISTS:1,FILESYSTEM_ERROR:2};Object.freeze(util.FileOperationErrorType);util.EntryChangedKind={CREATED:0,DELETED:1};Object.freeze(util.EntryChangedKind);util.isFakeEntry=entry=>entry.getParent===undefined||entry.isNativeType!==undefined&&!entry.isNativeType;util.isTeamDriveRoot=entry=>{if(entry===null){return false}if(!entry.fullPath){return false}const tree=entry.fullPath.split("/");return tree.length==3&&util.isSharedDriveEntry(entry)};util.isTeamDrivesGrandRoot=entry=>{if(!entry.fullPath){return false}const tree=entry.fullPath.split("/");return tree.length==2&&util.isSharedDriveEntry(entry)};util.isSharedDriveEntry=entry=>{if(!entry.fullPath){return false}const tree=entry.fullPath.split("/");return tree[0]==""&&tree[1]==VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_NAME};util.getTeamDriveName=entry=>{if(!entry.fullPath||!util.isSharedDriveEntry(entry)){return""}const tree=entry.fullPath.split("/");if(tree.length<3){return""}return tree[2]||""};util.isRecentRootType=rootType=>rootType==VolumeManagerCommon.RootType.RECENT;util.isRecentRoot=entry=>util.isFakeEntry(entry)&&util.isRecentRootType(entry.rootType);util.isComputersRoot=entry=>{if(entry===null){return false}if(!entry.fullPath){return false}const tree=entry.fullPath.split("/");return tree.length==3&&util.isComputersEntry(entry)};util.isComputersEntry=entry=>{if(!entry.fullPath){return false}const tree=entry.fullPath.split("/");return tree[0]==""&&tree[1]==VolumeManagerCommon.COMPUTERS_DIRECTORY_NAME};util.isTrashRootType=rootType=>rootType==VolumeManagerCommon.RootType.TRASH;util.isTrashRoot=entry=>entry.fullPath==="/"&&util.isTrashRootType(entry.rootType);util.isTrashEntry=entry=>entry.fullPath!=="/"&&util.isTrashRootType(entry.rootType);util.isSameEntry=(entry1,entry2)=>{if(!entry1&&!entry2){return true}if(!entry1||!entry2){return false}return entry1.toURL()===entry2.toURL()};util.isSameEntries=(entries1,entries2)=>{if(!entries1&&!entries2){return true}if(!entries1||!entries2){return false}if(entries1.length!==entries2.length){return false}for(let i=0;i<entries1.length;i++){if(!util.isSameEntry(entries1[i],entries2[i])){return false}}return true};util.isSameFileSystem=(fileSystem1,fileSystem2)=>{if(!fileSystem1&&!fileSystem2){return true}if(!fileSystem1||!fileSystem2){return false}return util.isSameEntry(fileSystem1.root,fileSystem2.root)};util.isSiblingEntry=(entry1,entry2)=>{const path1=entry1.fullPath.split("/");const path2=entry2.fullPath.split("/");if(path1.length!=path2.length){return false}for(let i=0;i<path1.length-1;i++){if(path1[i]!=path2[i]){return false}}return true};util.collator=new Intl.Collator([],{usage:"sort",numeric:true,sensitivity:"base"});util.compareName=(entry1,entry2)=>util.collator.compare(entry1.name,entry2.name);util.compareLabel=(locationInfo,entry1,entry2)=>util.collator.compare(util.getEntryLabel(locationInfo,entry1),util.getEntryLabel(locationInfo,entry2));util.comparePath=(entry1,entry2)=>util.collator.compare(entry1.fullPath,entry2.fullPath);util.compareLabelAndGroupBottomEntries=(locationInfo,bottomEntries)=>{const childrenMap=new Map;bottomEntries.forEach((entry=>{childrenMap.set(entry.toURL(),entry)}));function compare_(entry1,entry2){const isBottomlEntry1=childrenMap.has(entry1.toURL())?1:0;const isBottomlEntry2=childrenMap.has(entry2.toURL())?1:0;if(isBottomlEntry1===isBottomlEntry2){return util.compareLabel(locationInfo,entry1,entry2)}return isBottomlEntry1-isBottomlEntry2}return compare_};util.isChildEntry=(entry,directory)=>new Promise(((resolve,reject)=>{if(!entry||!directory){resolve(false)}entry.getParent((parent=>{resolve(util.isSameEntry(parent,directory))}),reject)}));util.isDescendantEntry=(ancestorEntry,childEntry)=>{if(!ancestorEntry.isDirectory){return false}const entryList=util.toEntryList(ancestorEntry);if(entryList.getUIChildren){const nativeEntry=entryList.getNativeEntry();if(nativeEntry&&util.isSameFileSystem(nativeEntry.filesystem,childEntry.filesystem)){return util.isDescendantEntry(nativeEntry,childEntry)}return entryList.getUIChildren().some((ancestorChild=>{if(util.isSameEntry(ancestorChild,childEntry)){return true}const volumeEntry=ancestorChild.getNativeEntry();return volumeEntry&&(util.isSameEntry(volumeEntry,childEntry)||util.isDescendantEntry(volumeEntry,childEntry))}))}if(!util.isSameFileSystem(ancestorEntry.filesystem,childEntry.filesystem)){return false}if(util.isSameEntry(ancestorEntry,childEntry)){return false}if(util.isFakeEntry(ancestorEntry)||util.isFakeEntry(childEntry)){return false}let ancestorPath=ancestorEntry.fullPath;if(ancestorPath.slice(-1)!=="/"){ancestorPath+="/"}return childEntry.fullPath.indexOf(ancestorPath)===0};let lastVisitedURL;util.visitURL=url=>{lastVisitedURL=url;chrome.fileManagerPrivate.openURL(url)};util.getLastVisitedURL=()=>lastVisitedURL;util.getCurrentLocaleOrDefault=()=>{const locale=str("UI_LOCALE")||"en";return locale.replace(/_/g,"-")};util.entriesToURLs=entries=>entries.map((entry=>entry["cachedUrl"]||entry.toURL()));util.URLsToEntries=(urls,opt_callback)=>{const promises=urls.map((url=>new Promise(window.webkitResolveLocalFileSystemURL.bind(null,url)).then((entry=>({entry:entry})),(failureUrl=>{console.warn("Failed to resolve the file with url: "+url+".");return{failureUrl:url}}))));const resultPromise=Promise.all(promises).then((results=>{const entries=[];const failureUrls=[];for(let i=0;i<results.length;i++){if("entry"in results[i]){entries.push(results[i].entry)}if("failureUrl"in results[i]){failureUrls.push(results[i].failureUrl)}}return{entries:entries,failureUrls:failureUrls}}));if(opt_callback){resultPromise.then((result=>{opt_callback(result.entries,result.failureUrls)})).catch((error=>{console.warn("util.URLsToEntries is failed.",error.stack?error.stack:error)}))}return resultPromise};util.urlToEntry=url=>new Promise(window.webkitResolveLocalFileSystemURL.bind(null,url));util.isTeleported=window=>new Promise((onFulfilled=>{window.chrome.fileManagerPrivate.getProfiles(((profiles,currentId,displayedId)=>{onFulfilled(currentId!==displayedId)}))}));util.testSendMessage=message=>{const test=chrome.test||window.top.chrome.test;if(test){test.sendMessage(message)}};util.splitExtension=path=>{let dotPosition=path.lastIndexOf(".");if(dotPosition<=path.lastIndexOf("/")){dotPosition=-1}const filename=dotPosition!=-1?path.substr(0,dotPosition):path;const extension=dotPosition!=-1?path.substr(dotPosition):"";return[filename,extension]};util.getRootTypeLabel=locationInfo=>{switch(locationInfo.rootType){case VolumeManagerCommon.RootType.DOWNLOADS:return locationInfo.volumeInfo.label;case VolumeManagerCommon.RootType.DRIVE:return str("DRIVE_MY_DRIVE_LABEL");case VolumeManagerCommon.RootType.SHARED_DRIVE:case VolumeManagerCommon.RootType.SHARED_DRIVES_GRAND_ROOT:return str("DRIVE_SHARED_DRIVES_LABEL");case VolumeManagerCommon.RootType.COMPUTER:case VolumeManagerCommon.RootType.COMPUTERS_GRAND_ROOT:return str("DRIVE_COMPUTERS_LABEL");case VolumeManagerCommon.RootType.DRIVE_OFFLINE:return str("DRIVE_OFFLINE_COLLECTION_LABEL");case VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME:return str("DRIVE_SHARED_WITH_ME_COLLECTION_LABEL");case VolumeManagerCommon.RootType.DRIVE_RECENT:return str("DRIVE_RECENT_COLLECTION_LABEL");case VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT:return str("DRIVE_DIRECTORY_LABEL");case VolumeManagerCommon.RootType.RECENT:return str("RECENT_ROOT_LABEL");case VolumeManagerCommon.RootType.CROSTINI:return str("LINUX_FILES_ROOT_LABEL");case VolumeManagerCommon.RootType.MY_FILES:return str("MY_FILES_ROOT_LABEL");case VolumeManagerCommon.RootType.TRASH:return str("TRASH_ROOT_LABEL");case VolumeManagerCommon.RootType.MEDIA_VIEW:const mediaViewRootType=VolumeManagerCommon.getMediaViewRootTypeFromVolumeId(locationInfo.volumeInfo.volumeId);switch(mediaViewRootType){case VolumeManagerCommon.MediaViewRootType.IMAGES:return str("MEDIA_VIEW_IMAGES_ROOT_LABEL");case VolumeManagerCommon.MediaViewRootType.VIDEOS:return str("MEDIA_VIEW_VIDEOS_ROOT_LABEL");case VolumeManagerCommon.MediaViewRootType.AUDIO:return str("MEDIA_VIEW_AUDIO_ROOT_LABEL");case VolumeManagerCommon.MediaViewRootType.DOCUMENTS:return str("MEDIA_VIEW_DOCUMENTS_ROOT_LABEL")}console.error("Unsupported media view root type: "+mediaViewRootType);return locationInfo.volumeInfo.label;case VolumeManagerCommon.RootType.ARCHIVE:case VolumeManagerCommon.RootType.REMOVABLE:case VolumeManagerCommon.RootType.MTP:case VolumeManagerCommon.RootType.PROVIDED:case VolumeManagerCommon.RootType.ANDROID_FILES:case VolumeManagerCommon.RootType.DOCUMENTS_PROVIDER:case VolumeManagerCommon.RootType.SMB:case VolumeManagerCommon.RootType.GUEST_OS:return locationInfo.volumeInfo.label;default:console.error("Unsupported root type: "+locationInfo.rootType);return locationInfo.volumeInfo.label}};util.getEntryLabel=(locationInfo,entry)=>{if(locationInfo){if(locationInfo.hasFixedLabel){return util.getRootTypeLabel(locationInfo)}if(entry.filesystem&&entry.filesystem.root===entry){return util.getRootTypeLabel(locationInfo)}}if(locationInfo&&locationInfo.rootType==VolumeManagerCommon.RootType.DOWNLOADS){if(entry.fullPath=="/Downloads"){return str("DOWNLOADS_DIRECTORY_LABEL")}if(entry.fullPath=="/PvmDefault"){return str("PLUGIN_VM_DIRECTORY_LABEL")}if(entry.fullPath=="/Camera"){return str("CAMERA_DIRECTORY_LABEL")}}return entry.name};util.isNonModifiable=(volumeManager,entry)=>{if(!entry){return false}if(util.isFakeEntry(entry)){return true}if(!volumeManager){return false}const volumeInfo=volumeManager.getVolumeInfo(entry);if(!volumeInfo){return false}const volumeType=volumeInfo.volumeType;if(volumeType===VolumeManagerCommon.RootType.DOWNLOADS){if(!entry.isDirectory){return false}const fullPath=entry.fullPath;if(fullPath==="/Downloads"){return true}if(fullPath==="/PvmDefault"&&util.isPluginVmEnabled()){return true}if(fullPath==="/Camera"){return true}return false}if(volumeType===VolumeManagerCommon.RootType.ANDROID_FILES){if(!entry.isDirectory){return false}const fullPath=entry.fullPath;if(fullPath==="/"){return true}const isRootDirectory=fullPath==="/"+entry.name;if(isRootDirectory){return true}if(fullPath==="/DCIM/Camera"){return true}return false}if(volumeType===VolumeManagerCommon.RootType.CROSTINI){return entry.fullPath==="/"}if(volumeType===VolumeManagerCommon.RootType.GUEST_OS){return entry.fullPath==="/"}return false};util.checkAPIError=()=>{if(chrome.runtime.lastError){console.warn(chrome.runtime.lastError.message)}};util.delay=ms=>new Promise((resolve=>{setTimeout(resolve,ms)}));util.timeoutPromise=(promise,ms,opt_message)=>Promise.race([promise,util.delay(ms).then((()=>{throw new Error(opt_message||"Operation timed out.")}))]);util.isCopyImageEnabled=()=>loadTimeData.getBoolean("COPY_IMAGE_ENABLED");util.isDlpEnabled=()=>loadTimeData.valueExists("DLP_ENABLED")&&loadTimeData.getBoolean("DLP_ENABLED");util.isFilesAppExperimental=()=>loadTimeData.valueExists("FILES_APP_EXPERIMENTAL")&&loadTimeData.getBoolean("FILES_APP_EXPERIMENTAL");util.isFilesConflictDialogEnabled=()=>loadTimeData.getBoolean("FILES_CONFLICT_DIALOG");util.isFuseBoxDebugEnabled=()=>loadTimeData.isInitialized()&&loadTimeData.valueExists("FUSEBOX_DEBUG")&&loadTimeData.getBoolean("FUSEBOX_DEBUG");util.isGuestOsEnabled=()=>loadTimeData.getBoolean("GUEST_OS");util.isJellyEnabled=()=>loadTimeData.getBoolean("JELLY");util.isCrosComponentsEnabled=()=>loadTimeData.getBoolean("CROS_COMPONENTS");util.isMirrorSyncEnabled=()=>loadTimeData.isInitialized()&&loadTimeData.valueExists("DRIVEFS_MIRRORING")&&loadTimeData.getBoolean("DRIVEFS_MIRRORING");util.isGoogleOneOfferFilesBannerEligibleAndEnabled=()=>loadTimeData.getBoolean("ELIGIBLE_AND_ENABLED_GOOGLE_ONE_OFFER_FILES_BANNER");util.isSinglePartitionFormatEnabled=()=>loadTimeData.getBoolean("FILES_SINGLE_PARTITION_FORMAT_ENABLED");util.isInlineSyncStatusEnabled=()=>loadTimeData.valueExists("INLINE_SYNC_STATUS")&&loadTimeData.getBoolean("INLINE_SYNC_STATUS");util.isDriveShortcutsEnabled=()=>loadTimeData.isInitialized()&&loadTimeData.valueExists("DRIVE_SHORTCUTS")&&loadTimeData.getBoolean("DRIVE_SHORTCUTS");util.isDriveFsBulkPinningEnabled=()=>loadTimeData.getBoolean("DRIVE_FS_BULK_PINNING");util.isNewDirectoryTreeEnabled=()=>loadTimeData.valueExists("NEW_DIRECTORY_TREE")&&loadTimeData.getBoolean("NEW_DIRECTORY_TREE");util.readEntriesRecursively=(rootEntry,entriesCallback,successCallback,errorCallback,shouldStop,opt_maxDepth)=>{let numRunningTasks=0;let error=null;const maxDepth=opt_maxDepth===undefined?-1:opt_maxDepth;const maybeRunCallback=()=>{if(numRunningTasks===0){if(shouldStop()){errorCallback(createDOMError(util.FileError.ABORT_ERR))}else if(error){errorCallback(error)}else{successCallback()}}};const processEntry=(entry,depth)=>{const onError=fileError=>{if(!error){error=fileError}numRunningTasks--;maybeRunCallback()};const onSuccess=entries=>{if(shouldStop()||error||entries.length===0){numRunningTasks--;maybeRunCallback();return}entriesCallback(entries);for(let i=0;i<entries.length;i++){if(entries[i].isDirectory&&(maxDepth===-1||depth<maxDepth)){processEntry(entries[i],depth+1)}}reader.readEntries(onSuccess,onError)};numRunningTasks++;const reader=entry.createReader();reader.readEntries(onSuccess,onError)};processEntry(rootEntry,0)};util.getEntries=volumeInfo=>{const root=volumeInfo.fileSystem.root;return new Promise(((resolve,reject)=>{const allEntries={"/":root};function entriesCallback(someEntries){someEntries.forEach((entry=>{allEntries[entry.fullPath]=entry}))}function successCallback(){resolve(allEntries)}util.readEntriesRecursively(root,entriesCallback,successCallback,reject,(()=>false))}))};util.doIfPrimaryContext=async callback=>{const guestMode=await util.isInGuestMode();if(guestMode){callback();return true}return false};util.toFilesAppEntry=entry=>entry;util.toEntryList=entry=>entry;util.isNativeEntry=entry=>{entry=util.toFilesAppEntry(entry);return entry.type_name===undefined};util.unwrapEntry=entry=>{if(!entry){return entry}const nativeEntry=entry.getNativeEntry&&entry.getNativeEntry();if(nativeEntry){return nativeEntry}return entry};util.isArcUsbStorageUIEnabled=()=>loadTimeData.valueExists("ARC_USB_STORAGE_UI_ENABLED")&&loadTimeData.getBoolean("ARC_USB_STORAGE_UI_ENABLED");util.isArcVmEnabled=()=>loadTimeData.valueExists("ARC_VM_ENABLED")&&loadTimeData.getBoolean("ARC_VM_ENABLED");util.isPluginVmEnabled=()=>loadTimeData.valueExists("PLUGIN_VM_ENABLED")&&loadTimeData.getBoolean("PLUGIN_VM_ENABLED");util.entryDebugString=entry=>{if(entry===null){return"entry is null"}if(entry===undefined){return"entry is undefined"}let typeName="";if(entry.constructor&&entry.constructor.name){typeName=entry.constructor.name}else{typeName=Object.prototype.toString.call(entry)}let entryDescription="("+typeName+") ";if(entry.fullPath){entryDescription=entryDescription+entry.fullPath+" "}if(entry.toURL){entryDescription=entryDescription+entry.toURL()}return entryDescription};util.isSameVolume=(entries,volumeManager)=>{if(!entries.length){return false}const firstEntry=entries[0];if(!firstEntry){return false}const volumeInfo=volumeManager.getVolumeInfo(firstEntry);for(let i=1;i<entries.length;i++){if(!entries[i]){return false}const volumeInfoToCompare=volumeManager.getVolumeInfo(assert$1(entries[i]));if(!volumeInfoToCompare||volumeInfoToCompare.volumeId!==volumeInfo.volumeId){return false}}return true};util.getFilesAppModalDialogInstance=()=>{let dialogElement=document.querySelector("#files-app-modal-dialog");if(!dialogElement){dialogElement=document.createElement("dialog");dialogElement.id="files-app-modal-dialog";document.body.appendChild(dialogElement)}return dialogElement};util.descriptorEqual=function(left,right){return left.appId===right.appId&&left.taskType===right.taskType&&left.actionId===right.actionId};util.makeTaskID=function({appId:appId,taskType:taskType,actionId:actionId}){return`${appId}|${taskType}|${actionId}`};util.isInGuestMode=async()=>{const profiles=await promisify(chrome.fileManagerPrivate.getProfiles);return profiles.length>0&&profiles[0].profileId==="$guest"};util.getLocaleBasedWeekStart=()=>loadTimeData.valueExists("WEEK_START_FROM")?loadTimeData.getInteger("WEEK_START_FROM"):0;util.isGuestOs=type=>type===VolumeManagerCommon.VolumeType.GUEST_OS||type===VolumeManagerCommon.VolumeType.ANDROID_FILES&&util.isArcVmEnabled();class UserCanceledError extends Error{}util.isNullOrUndefined=value=>value===null||value===undefined;util.isOneDriveId=providerId=>providerId===constants.ODFS_EXTENSION_ID;util.isOneDrive=volumeInfo=>util.isOneDriveId(volumeInfo?.providerId);util.getODFSMetadataQueryEntry=odfsVolumeInfo=>util.unwrapEntry(odfsVolumeInfo.displayRoot);util.isInteractiveVolume=volumeInfo=>{const state=getStore().getState();const volumes=state.volumes;if(!volumes){console.error("Expected volumes to exist in the store.");return true}const volume=volumes[volumeInfo.volumeId];if(!volume){console.error("Expected volume to be in the store.");return true}return volume.isInteractive};util.canBulkPinningCloudPanelShow=(stage,pref)=>{if(!util.isDriveFsBulkPinningEnabled()){return false}const BulkPinStage=chrome.fileManagerPrivate.BulkPinStage;if(pref&&(stage===BulkPinStage.GETTING_FREE_SPACE||stage===BulkPinStage.LISTING_FILES||stage===BulkPinStage.SYNCING)){return true}if(stage===BulkPinStage.PAUSED_OFFLINE&&pref||stage===BulkPinStage.PAUSED_BATTERY_SAVER&&pref||stage===BulkPinStage.NOT_ENOUGH_SPACE){return true}return false};util.secondsToRemainingTimeString=seconds=>{const locale=util.getCurrentLocaleOrDefault();let minutes=Math.ceil(seconds/60);if(minutes<=1){const formatter=new Intl.NumberFormat(locale,{style:"unit",unit:"second",unitDisplay:"long"});return strf("TIME_REMAINING_ESTIMATE",formatter.format(Math.ceil(seconds)))}const minuteFormatter=new Intl.NumberFormat(locale,{style:"unit",unit:"minute",unitDisplay:"long"});const hours=Math.floor(minutes/60);if(hours==0){return strf("TIME_REMAINING_ESTIMATE",minuteFormatter.format(minutes))}minutes-=hours*60;const hourFormatter=new Intl.NumberFormat(locale,{style:"unit",unit:"hour",unitDisplay:"long"});if(minutes==0){return strf("TIME_REMAINING_ESTIMATE",hourFormatter.format(hours))}return strf("TIME_REMAINING_ESTIMATE_2",hourFormatter.format(hours),minuteFormatter.format(minutes))};
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function __decorate$1(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
globalThis.__decorate=__decorate$1;
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class XfBase extends LitElement{}XfBase.shadowRootOptions=LitElement.shadowRootOptions;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ATTACHABLE_CONTROLLER=Symbol("attachableController");let FOR_ATTRIBUTE_OBSERVER;if(!isServer){FOR_ATTRIBUTE_OBSERVER=new MutationObserver((records=>{for(const record of records){record.target[ATTACHABLE_CONTROLLER]?.hostConnected()}}))}class AttachableController{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(htmlFor){if(htmlFor===null){this.host.removeAttribute("for")}else{this.host.setAttribute("for",htmlFor)}}get control(){if(this.host.hasAttribute("for")){if(!this.htmlFor||!this.host.isConnected){return null}return this.host.getRootNode().querySelector(`#${this.htmlFor}`)}return this.currentControl||this.host.parentElement}set control(control){if(control){this.attach(control)}else{this.detach()}}constructor(host,onControlChange){this.host=host;this.onControlChange=onControlChange;this.currentControl=null;host.addController(this);host[ATTACHABLE_CONTROLLER]=this;FOR_ATTRIBUTE_OBSERVER?.observe(host,{attributeFilter:["for"]})}attach(control){if(control===this.currentControl){return}this.setCurrentControl(control);this.host.removeAttribute("for")}detach(){this.setCurrentControl(null);this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(control){this.onControlChange(this.currentControl,control);this.currentControl=control}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const EVENTS$1=["focusin","focusout","pointerdown"];class FocusRing extends LitElement{constructor(){super(...arguments);this.visible=false;this.inward=false;this.attachableController=new AttachableController(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(htmlFor){this.attachableController.htmlFor=htmlFor}get control(){return this.attachableController.control}set control(control){this.attachableController.control=control}attach(control){this.attachableController.attach(control)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback();this.setAttribute("aria-hidden","true")}handleEvent(event){if(event[HANDLED_BY_FOCUS_RING]){return}switch(event.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??false;break;case"focusout":case"pointerdown":this.visible=false;break}event[HANDLED_BY_FOCUS_RING]=true}onControlChange(prev,next){if(isServer)return;for(const event of EVENTS$1){prev?.removeEventListener(event,this);next?.addEventListener(event,this)}}update(changed){if(changed.has("visible")){this.dispatchEvent(new Event("visibility-changed"))}super.update(changed)}}__decorate$1([property({type:Boolean,reflect:true})],FocusRing.prototype,"visible",void 0);__decorate$1([property({type:Boolean,reflect:true})],FocusRing.prototype,"inward",void 0);const HANDLED_BY_FOCUS_RING=Symbol("handledByFocusRing");
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const styles$6=css`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let MdFocusRing=class MdFocusRing extends FocusRing{};MdFocusRing.styles=[styles$6];MdFocusRing=__decorate$1([customElement("md-focus-ring")],MdFocusRing);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const EASING={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const PRESS_GROW_MS=450;const MINIMUM_PRESS_MS=225;const INITIAL_ORIGIN_SCALE=.2;const PADDING=10;const SOFT_EDGE_MINIMUM_SIZE=75;const SOFT_EDGE_CONTAINER_RATIO=.35;const PRESS_PSEUDO="::after";const ANIMATION_FILL="forwards";var State;(function(State){State[State["INACTIVE"]=0]="INACTIVE";State[State["TOUCH_DELAY"]=1]="TOUCH_DELAY";State[State["HOLDING"]=2]="HOLDING";State[State["WAITING_FOR_CLICK"]=3]="WAITING_FOR_CLICK"})(State||(State={}));const EVENTS=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"];const TOUCH_DELAY_MS=150;class Ripple extends LitElement{constructor(){super(...arguments);this.disabled=false;this.hovered=false;this.pressed=false;this.rippleSize="";this.rippleScale="";this.initialSize=0;this.state=State.INACTIVE;this.checkBoundsAfterContextMenu=false;this.attachableController=new AttachableController(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(htmlFor){this.attachableController.htmlFor=htmlFor}get control(){return this.attachableController.control}set control(control){this.attachableController.control=control}attach(control){this.attachableController.attach(control)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback();this.setAttribute("aria-hidden","true")}render(){const classes={hovered:this.hovered,pressed:this.pressed};return html`<div class="surface ${classMap(classes)}"></div>`}update(changedProps){if(changedProps.has("disabled")&&this.disabled){this.hovered=false;this.pressed=false}super.update(changedProps)}handlePointerenter(event){if(!this.shouldReactToEvent(event)){return}this.hovered=true}handlePointerleave(event){if(!this.shouldReactToEvent(event)){return}this.hovered=false;if(this.state!==State.INACTIVE){this.endPressAnimation()}}handlePointerup(event){if(!this.shouldReactToEvent(event)){return}if(this.state===State.HOLDING){this.state=State.WAITING_FOR_CLICK;return}if(this.state===State.TOUCH_DELAY){this.state=State.WAITING_FOR_CLICK;this.startPressAnimation(this.rippleStartEvent);return}}async handlePointerdown(event){if(!this.shouldReactToEvent(event)){return}this.rippleStartEvent=event;if(!this.isTouch(event)){this.state=State.WAITING_FOR_CLICK;this.startPressAnimation(event);return}if(this.checkBoundsAfterContextMenu&&!this.inBounds(event)){return}this.checkBoundsAfterContextMenu=false;this.state=State.TOUCH_DELAY;await new Promise((resolve=>{setTimeout(resolve,TOUCH_DELAY_MS)}));if(this.state!==State.TOUCH_DELAY){return}this.state=State.HOLDING;this.startPressAnimation(event)}handleClick(){if(this.disabled){return}if(this.state===State.WAITING_FOR_CLICK){this.endPressAnimation();return}if(this.state===State.INACTIVE){this.startPressAnimation();this.endPressAnimation()}}handlePointercancel(event){if(!this.shouldReactToEvent(event)){return}this.endPressAnimation()}handleContextmenu(){if(this.disabled){return}this.checkBoundsAfterContextMenu=true;this.endPressAnimation()}determineRippleSize(){const{height:height,width:width}=this.getBoundingClientRect();const maxDim=Math.max(height,width);const softEdgeSize=Math.max(SOFT_EDGE_CONTAINER_RATIO*maxDim,SOFT_EDGE_MINIMUM_SIZE);const initialSize=Math.floor(maxDim*INITIAL_ORIGIN_SCALE);const hypotenuse=Math.sqrt(width**2+height**2);const maxRadius=hypotenuse+PADDING;this.initialSize=initialSize;this.rippleScale=`${(maxRadius+softEdgeSize)/initialSize}`;this.rippleSize=`${initialSize}px`}getNormalizedPointerEventCoords(pointerEvent){const{scrollX:scrollX,scrollY:scrollY}=window;const{left:left,top:top}=this.getBoundingClientRect();const documentX=scrollX+left;const documentY=scrollY+top;const{pageX:pageX,pageY:pageY}=pointerEvent;return{x:pageX-documentX,y:pageY-documentY}}getTranslationCoordinates(positionEvent){const{height:height,width:width}=this.getBoundingClientRect();const endPoint={x:(width-this.initialSize)/2,y:(height-this.initialSize)/2};let startPoint;if(positionEvent instanceof PointerEvent){startPoint=this.getNormalizedPointerEventCoords(positionEvent)}else{startPoint={x:width/2,y:height/2}}startPoint={x:startPoint.x-this.initialSize/2,y:startPoint.y-this.initialSize/2};return{startPoint:startPoint,endPoint:endPoint}}startPressAnimation(positionEvent){if(!this.mdRoot){return}this.pressed=true;this.growAnimation?.cancel();this.determineRippleSize();const{startPoint:startPoint,endPoint:endPoint}=this.getTranslationCoordinates(positionEvent);const translateStart=`${startPoint.x}px, ${startPoint.y}px`;const translateEnd=`${endPoint.x}px, ${endPoint.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${translateStart}) scale(1)`,`translate(${translateEnd}) scale(${this.rippleScale})`]},{pseudoElement:PRESS_PSEUDO,duration:PRESS_GROW_MS,easing:EASING.STANDARD,fill:ANIMATION_FILL})}async endPressAnimation(){this.state=State.INACTIVE;const animation=this.growAnimation;const pressAnimationPlayState=animation?.currentTime??Infinity;if(pressAnimationPlayState>=MINIMUM_PRESS_MS){this.pressed=false;return}await new Promise((resolve=>{setTimeout(resolve,MINIMUM_PRESS_MS-pressAnimationPlayState)}));if(this.growAnimation!==animation){return}this.pressed=false}shouldReactToEvent(event){if(this.disabled||!event.isPrimary){return false}if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==event.pointerId){return false}if(event.type==="pointerenter"||event.type==="pointerleave"){return!this.isTouch(event)}const isPrimaryButton=event.buttons===1;return this.isTouch(event)||isPrimaryButton}inBounds({x:x,y:y}){const{top:top,left:left,bottom:bottom,right:right}=this.getBoundingClientRect();return x>=left&&x<=right&&y>=top&&y<=bottom}isTouch({pointerType:pointerType}){return pointerType==="touch"}async handleEvent(event){switch(event.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(event);break;case"pointerdown":await this.handlePointerdown(event);break;case"pointerenter":this.handlePointerenter(event);break;case"pointerleave":this.handlePointerleave(event);break;case"pointerup":this.handlePointerup(event);break}}onControlChange(prev,next){if(isServer)return;for(const event of EVENTS){prev?.removeEventListener(event,this);next?.addEventListener(event,this)}}}__decorate$1([property({type:Boolean,reflect:true})],Ripple.prototype,"disabled",void 0);__decorate$1([state()],Ripple.prototype,"hovered",void 0);__decorate$1([state()],Ripple.prototype,"pressed",void 0);__decorate$1([query(".surface")],Ripple.prototype,"mdRoot",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const styles$5=css`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let MdRipple=class MdRipple extends Ripple{};MdRipple.styles=[styles$5];MdRipple=__decorate$1([customElement("md-ripple")],MdRipple);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ARIA_PROPERTIES=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];ARIA_PROPERTIES.map(ariaPropertyToAttribute);function ariaPropertyToAttribute(property){return property.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function requestUpdateOnAriaChange(ctor){for(const ariaProperty of ARIA_PROPERTIES){ctor.createProperty(ariaProperty,{attribute:ariaPropertyToAttribute(ariaProperty),reflect:true})}ctor.addInitializer((element=>{const controller={hostConnected(){element.setAttribute("role","presentation")}};element.addController(controller)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function redispatchEvent(element,event){if(event.bubbles&&(!element.shadowRoot||event.composed)){event.stopPropagation()}const copy=Reflect.construct(event.constructor,[event.type,event]);const dispatched=element.dispatchEvent(copy);if(!dispatched){event.preventDefault()}return dispatched}function dispatchActivationClick(element){const event=new MouseEvent("click",{bubbles:true});element.dispatchEvent(event);return event}function isActivationClick(event){if(event.currentTarget!==event.target){return false}if(event.composedPath()[0]!==event.target){return false}if(event.target.disabled){return false}return!squelchEvent(event)}function squelchEvent(event){const squelched=isSquelchingEvents;if(squelched){event.preventDefault();event.stopImmediatePropagation()}squelchEventsForMicrotask();return squelched}let isSquelchingEvents=false;async function squelchEventsForMicrotask(){isSquelchingEvents=true;await null;isSquelchingEvents=false}
// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ConcurrentQueue{constructor(limit){console.assert(limit>0,"|limit| must be larger than 0");this.limit_=limit;this.added_=[];this.running_=[];this.cancelled_=false}isRunning(){return this.running_.length!==0}getWaitingTasksCount(){return this.added_.length}getRunningTasksCount(){return this.running_.length}run(task){if(this.cancelled_){console.warn("Queue is cancelled. Cannot add a new task.")}else{this.added_.push(task);this.scheduleNext_()}}cancel(){this.cancelled_=true;this.added_=[]}isCancelled(){return this.cancelled_}maybeExecute_(){if(this.added_.length>0){if(this.running_.length<this.limit_){this.execute_(this.added_.shift())}}}execute_(task){this.running_.push(task);try{task(this.onTaskFinished_.bind(this,task))}catch(e){console.warn("Failed to execute a task",e);this.onTaskFinished_(task)}}onTaskFinished_(task){this.removeTask_(task);this.scheduleNext_()}removeTask_(task){const index=this.running_.indexOf(task);if(index>=0){this.running_.splice(index,1)}else{console.warn("Failed to find a finished task among running")}}scheduleNext_(){this.maybeExecute_()}toString(){return"ConcurrentQueue\n"+"- WaitingTasksCount: "+this.getWaitingTasksCount()+"\n"+"- RunningTasksCount: "+this.getRunningTasksCount()+"\n"+"- isCancelled: "+this.isCancelled()}}class AsyncQueue extends ConcurrentQueue{constructor(){super(1)}async lock(){return new Promise((resolve=>this.run((unlock=>resolve(unlock)))))}}class GroupTask{constructor(closure,dependencies,name){this.closure=closure;this.dependencies=dependencies;this.name=name}toString(){return"GroupTask\n"+"- name: "+this.name+"\n"+"- dependencies: "+this.dependencies.join()}}class Group{constructor(){this.addedTasks_={};this.pendingTasks_={};this.finishedTasks_={};this.completionCallbacks_=[]}get pendingTasks(){return this.pendingTasks_}add(closure,opt_dependencies,opt_name){const length=Object.keys(this.addedTasks_).length;const name=opt_name||"(unnamed#"+(length+1)+")";const task=new GroupTask(closure,opt_dependencies||[],name);this.addedTasks_[name]=task;this.pendingTasks_[name]=task}run(opt_onCompletion){if(opt_onCompletion){this.completionCallbacks_.push(opt_onCompletion)}this.continue_()}continue_(){if(Object.keys(this.addedTasks_).length==Object.keys(this.finishedTasks_).length){for(let index=0;index<this.completionCallbacks_.length;index++){const callback=this.completionCallbacks_[index];callback()}this.completionCallbacks_=[];return}for(const name in this.pendingTasks_){const task=this.pendingTasks_[name];let dependencyMissing=false;for(let index=0;index<task.dependencies.length;index++){const dependency=task.dependencies[index];if(!this.finishedTasks_[dependency]){dependencyMissing=true}}if(!dependencyMissing){delete this.pendingTasks_[task.name];task.closure(this.finish_.bind(this,task))}}}finish_(task){this.finishedTasks_[task.name]=task;this.continue_()}}class Aggregator{constructor(closure,opt_delay){this.delay_=opt_delay||50;this.closure_=closure;this.scheduledRunsTimer_=null;this.lastRunTime_=0}run(){if(Date.now()-this.lastRunTime_<this.delay_){this.cancelScheduledRuns_();this.scheduledRunsTimer_=setTimeout(this.runImmediately_.bind(this),this.delay_+1);this.lastRunTime_=Date.now();return}this.runImmediately_()}runImmediately_(){this.cancelScheduledRuns_();this.closure_();this.lastRunTime_=Date.now()}cancelScheduledRuns_(){if(this.scheduledRunsTimer_){clearTimeout(this.scheduledRunsTimer_);this.scheduledRunsTimer_=null}}}class RateLimiter{constructor(closure,opt_minInterval){this.closure_=closure;this.minInterval_=opt_minInterval||200;this.scheduledRunsTimer_=0;this.lastRunTime_=0}run(){const now=Date.now();if(now-this.lastRunTime_<this.minInterval_){if(!this.scheduledRunsTimer_){this.scheduledRunsTimer_=setTimeout(this.runImmediately.bind(this),this.lastRunTime_+this.minInterval_-now)}return}this.runImmediately()}runImmediately(){this.cancelScheduledRuns_();this.lastRunTime_=Date.now();this.closure_()}cancelScheduledRuns_(){if(this.scheduledRunsTimer_){clearTimeout(this.scheduledRunsTimer_);this.scheduledRunsTimer_=0}}}const styleMod$3=document.createElement("dom-module");styleMod$3.appendChild(html$1`
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);styleMod$3.register("cr-hidden-style");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$1=html$1`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100-rgb: 244, 199, 195;  /* #f4c7c3 */
      --google-red-100: rgb(var(--google-red-100-rgb));
      --google-red-300-rgb: 230, 124, 115;  /* #e67c73 */
      --google-red-300: rgb(var(--google-red-300-rgb));
      --google-red-500-rgb: 219, 68, 55;  /* #db4437 */
      --google-red-500: rgb(var(--google-red-500-rgb));
      --google-red-700-rgb: 197, 57, 41;  /* #c53929 */
      --google-red-700: rgb(var(--google-red-700-rgb));

      --google-blue-100-rgb: 198, 218, 252;  /* #c6dafc */
      --google-blue-100: rgb(var(--google-blue-100-rgb));
      --google-blue-300-rgb: 123, 170, 247;  /* #7baaf7 */
      --google-blue-300: rgb(var(--google-blue-300-rgb));
      --google-blue-500-rgb: 66, 133, 244;  /* #4285f4 */
      --google-blue-500: rgb(var(--google-blue-500-rgb));
      --google-blue-700-rgb: 51, 103, 214;  /* #3367d6 */
      --google-blue-700: rgb(var(--google-blue-700-rgb));

      --google-green-100-rgb: 183, 225, 205;  /* #b7e1cd */
      --google-green-100: rgb(var(--google-green-100-rgb));
      --google-green-300-rgb: 87, 187, 138;  /* #57bb8a */
      --google-green-300: rgb(var(--google-green-300-rgb));
      --google-green-500-rgb: 15, 157, 88;  /* #0f9d58 */
      --google-green-500: rgb(var(--google-green-500-rgb));
      --google-green-700-rgb: 11, 128, 67;  /* #0b8043 */
      --google-green-700: rgb(var(--google-green-700-rgb));

      --google-yellow-100-rgb: 252, 232, 178;  /* #fce8b2 */
      --google-yellow-100: rgb(var(--google-yellow-100-rgb));
      --google-yellow-300-rgb: 247, 203, 77;  /* #f7cb4d */
      --google-yellow-300: rgb(var(--google-yellow-300-rgb));
      --google-yellow-500-rgb: 244, 180, 0;  /* #f4b400 */
      --google-yellow-500: rgb(var(--google-yellow-500-rgb));
      --google-yellow-700-rgb: 240, 147, 0;  /* #f09300 */
      --google-yellow-700: rgb(var(--google-yellow-700-rgb));

      --google-grey-100-rgb: 245, 245, 245;  /* #f5f5f5 */
      --google-grey-100: rgb(var(--google-grey-100-rgb));
      --google-grey-300-rgb: 224, 224, 224;  /* #e0e0e0 */
      --google-grey-300: rgb(var(--google-grey-300-rgb));
      --google-grey-500-rgb: 158, 158, 158;  /* #9e9e9e */
      --google-grey-500: rgb(var(--google-grey-500-rgb));
      --google-grey-700-rgb: 97, 97, 97;  /* #616161 */
      --google-grey-700: rgb(var(--google-grey-700-rgb));

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);const template=html$1`
<custom-style>
  <style>
html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--cr-primary-text-color:var(--google-grey-900);--cr-secondary-text-color:var(--google-grey-700);--cr-card-background-color:white;--cr-shadow-color:var(--google-grey-800);--cr-shadow-key-color_:color-mix(in srgb, var(--cr-shadow-color) 30%, transparent);--cr-shadow-ambient-color_:color-mix(in srgb, var(--cr-shadow-color) 15%, transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-checked-color:var(--google-blue-600);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb), 0.1);--cr-link-color:var(--google-blue-700);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:0 2px 6px var(--paper-grey-500);--cr-separator-color:rgba(0, 0, 0, .06);--cr-title-text-color:rgb(90, 90, 90);--cr-toolbar-background-color:white;--cr-hover-background-color:rgba(var(--google-grey-900-rgb), .1);--cr-active-background-color:rgba(var(--google-grey-900-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-600-rgb), .4)}@media (prefers-color-scheme:dark){html{--cr-primary-text-color:var(--google-grey-200);--cr-secondary-text-color:var(--google-grey-500);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-card-shadow-color-rgb:0,0,0;--cr-checked-color:var(--google-blue-300);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb), 0.1);--cr-link-color:var(--google-blue-300);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255, 255, 255, .06);--cr-menu-shadow:rgba(0, 0, 0, .3) 0 1px 2px 0,rgba(0, 0, 0, .15) 0 3px 6px 2px;--cr-separator-color:rgba(255, 255, 255, .1);--cr-title-text-color:var(--cr-primary-text-color);--cr-toolbar-background-color:var(--google-grey-900-white-4-percent);--cr-hover-background-color:rgba(255, 255, 255, .1);--cr-active-background-color:rgba(var(--google-grey-200-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-300-rgb), .4)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent}}html{--cr-button-edge-spacing:12px;--cr-button-height:32px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(
      var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb), .14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-container-shadow-height:6px;--cr-container-shadow-margin:calc(-1 * var(--cr-container-shadow-height));--cr-container-shadow-max-opacity:1;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1}html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(116, 119, 117);--cr-fallback-color-primary:rgb(11, 87, 208);--cr-fallback-color-on-primary:rgb(255, 255, 255);--cr-fallback-color-primary-container:rgb(211, 227, 253);--cr-fallback-color-on-primary-container:rgb(4, 30, 73);--cr-fallback-color-secondary-container:rgb(194, 231, 255);--cr-fallback-color-on-secondary-container:rgb(0, 29, 53);--cr-fallback-color-neutral-container:rgb(242, 242, 242);--cr-fallback-color-neutral-outline:rgb(199, 199, 199);--cr-fallback-color-surface:rgb(255, 255, 255);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225, 227, 225);--cr-fallback-color-on-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-subtle:rgb(71, 71, 71);--cr-fallback-color-inverse-primary:rgb(168, 199, 250);--cr-fallback-color-inverse-surface:rgb(48, 48, 48);--cr-fallback-color-inverse-on-surface:rgb(242, 242, 242);--cr-fallback-color-tonal-container:rgb(211, 227, 253);--cr-fallback-color-on-tonal-container:rgb(4, 30, 73);--cr-fallback-color-tonal-outline:rgb(168, 199, 250);--cr-fallback-color-error:rgb(179, 38, 30);--cr-fallback-color-divider:rgb(211, 227, 253);--cr-fallback-color-state-hover-on-prominent_:rgba(253, 252, 251, .1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(
      var(--cr-fallback-color-state-ripple-primary-rgb_), 0.32);--cr-fallback-color-base-container:rgba(105, 145, 214, .12);--cr-fallback-color-disabled-background:rgba(
      var(--cr-fallback-color-on-surface-rgb), .12);--cr-fallback-color-disabled-foreground:rgba(
      var(--cr-fallback-color-on-surface-rgb), var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,
      rgba(var(--cr-fallback-color-on-surface-rgb), .08));--cr-hover-on-prominent-background-color:var(
      --color-sys-state-hover-on-prominent,
      var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(
      --color-sys-state-hover-on-subtle,
      var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,
      rgba(var(--cr-fallback-color-on-surface-rgb), .12));--cr-active-on-primary-background-color:var(
      --color-sys-state-ripple-primary,
      var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(
      --color-sys-state-ripple-neutral-on-subtle,
      var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,
      var(--cr-fallback-color-primary));--cr-primary-text-color:var(--color-primary-foreground,
      var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,
      var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,
      var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow, rgb(0, 0, 0))}@media (prefers-color-scheme:dark){html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(142, 145, 143);--cr-fallback-color-primary:rgb(168, 199, 250);--cr-fallback-color-on-primary:rgb(6, 46, 111);--cr-fallback-color-primary-container:rgb(8, 66, 160);--cr-fallback-color-on-primary-container:rgb(211, 227, 253);--cr-fallback-color-secondary-container:rgb(0, 74, 119);--cr-fallback-color-on-secondary-container:rgb(194, 231, 255);--cr-fallback-color-neutral-container:rgb(42, 42, 42);--cr-fallback-color-neutral-outline:rgb(117, 117, 117);--cr-fallback-color-surface:rgb(26, 27, 30);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-variant:rgb(196, 199, 197);--cr-fallback-color-on-surface-subtle:rgb(199, 199, 199);--cr-fallback-color-inverse-primary:rgb(11, 87, 208);--cr-fallback-color-inverse-surface:rgb(227, 227, 227);--cr-fallback-color-inverse-on-surface:rgb(31, 31, 31);--cr-fallback-color-tonal-container:rgb(0, 74, 119);--cr-fallback-color-on-tonal-container:rgb(194, 231, 255);--cr-fallback-color-tonal-outline:rgb(0, 99, 155);--cr-fallback-color-error:rgb(242, 184, 181);--cr-fallback-color-divider:rgb(71, 71, 71);--cr-fallback-color-state-hover-on-prominent_:rgba(31, 31, 31, .06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40, 40, 40, 1)}}@media (forced-colors:active){html[chrome-refresh-2023]{--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}
  </style>
</custom-style>
`;document.head.appendChild(template.content);
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{constructor(doc){this.focusByKeyboard_=true;this.classList_=doc.documentElement.classList;doc.addEventListener("keydown",(()=>this.onEvent_(true)),true);doc.addEventListener("mousedown",(()=>this.onEvent_(false)),true);this.updateVisibility()}onEvent_(focusByKeyboard){if(this.focusByKeyboard_===focusByKeyboard){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"};var KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"};var MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"};var KEY_CHAR=/[a-z0-9*]/;var IDENT_CHAR=/U\+/;var ARROW_KEY=/^arrow/;var SPACE_KEY=/^space(bar)?/;var ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(lKey===" "||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if(lKey=="multiply"){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){validKey=String.fromCharCode(32+keyCode)}else if(keyCode>=112&&keyCode<=123){validKey="f"+(keyCode-112+1)}else if(keyCode>=48&&keyCode<=57){validKey=String(keyCode-48)}else if(keyCode>=96&&keyCode<=105){validKey=String(keyCode-96)}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce((function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":");var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo}),{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map((function(keyComboString){return parseKeyComboString(keyComboString)}))}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true}}return false},_collectKeyBindings:function(){var keyBindings=this.behaviors.map((function(behavior){return behavior.keyBindings}));if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach((function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}}),this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort((function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1}))}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach((function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach((function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)}),this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};var MAX_RADIUS_PX=300;var MIN_DURATION_MS=800;var distance=function(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)};Polymer({_template:html$1`
    <style>
      :host {
        bottom: 0;
        display: block;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        /* For rounded corners: http://jsbin.com/temexa/4. */
        transform: translate3d(0, 0, 0);
      }

      .ripple {
        background-color: currentcolor;
        left: 0;
        opacity: var(--paper-ripple-opacity, 0.25);
        pointer-events: none;
        position: absolute;
        will-change: height, transform, width;
      }

      .ripple,
      :host(.circle) {
        border-radius: 50%;
      }
    </style>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{center:{type:Boolean,value:false},holdDown:{type:Boolean,value:false,observer:"_holdDownChanged"},recenters:{type:Boolean,value:false},noink:{type:Boolean,value:false}},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},created:function(){this.ripples=[]},attached:function(){this.keyEventTarget=this.parentNode.nodeType==11?dom(this).getOwnerRoot().host:this.parentNode;this.keyEventTarget=this.keyEventTarget;this.listen(this.keyEventTarget,"up","uiUpAction");this.listen(this.keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},simulatedRipple:function(){this.downAction();this.async(function(){this.upAction()}.bind(this),1)},uiDownAction:function(e){if(!this.noink)this.downAction(e)},downAction:function(e){if(this.ripples.length&&this.holdDown)return;this.debounce("show ripple",(function(){this.__showRipple(e)}),1)},clear:function(){this.__hideRipple();this.holdDown=false},showAndHoldDown:function(){this.ripples.forEach((ripple=>{ripple.remove()}));this.ripples=[];this.holdDown=true},__showRipple:function(e){var rect=this.getBoundingClientRect();var roundedCenterX=function(){return Math.round(rect.width/2)};var roundedCenterY=function(){return Math.round(rect.height/2)};var centered=!e||this.center;if(centered){var x=roundedCenterX();var y=roundedCenterY()}else{var sourceEvent=e.detail.sourceEvent;var x=Math.round(sourceEvent.clientX-rect.left);var y=Math.round(sourceEvent.clientY-rect.top)}var corners=[{x:0,y:0},{x:rect.width,y:0},{x:0,y:rect.height},{x:rect.width,y:rect.height}];var cornerDistances=corners.map((function(corner){return Math.round(distance(x,y,corner.x,corner.y))}));var radius=Math.min(MAX_RADIUS_PX,Math.max.apply(Math,cornerDistances));var startTranslate=x-radius+"px, "+(y-radius)+"px";if(this.recenters&&!centered){var endTranslate=roundedCenterX()-radius+"px, "+(roundedCenterY()-radius)+"px"}else{var endTranslate=startTranslate}var ripple=document.createElement("div");ripple.classList.add("ripple");ripple.style.height=ripple.style.width=2*radius+"px";this.ripples.push(ripple);this.shadowRoot.appendChild(ripple);ripple.animate({transform:["translate("+startTranslate+") scale(0)","translate("+endTranslate+") scale(1)"]},{duration:Math.max(MIN_DURATION_MS,Math.log(radius)*radius)||0,easing:"cubic-bezier(.2, .9, .1, .9)",fill:"forwards"})},uiUpAction:function(e){if(!this.noink)this.upAction()},upAction:function(e){if(!this.holdDown)this.debounce("hide ripple",(function(){this.__hideRipple()}),1)},__hideRipple:function(){Promise.all(this.ripples.map((function(ripple){return new Promise((function(resolve){var removeRipple=function(){ripple.remove();resolve()};var opacity=getComputedStyle(ripple).opacity;if(!opacity.length){removeRipple()}else{var animation=ripple.animate({opacity:[opacity,0]},{duration:150,fill:"forwards"});animation.addEventListener("finish",removeRipple);animation.addEventListener("cancel",removeRipple)}}))}))).then(function(){this.fire("transitionend")}.bind(this));this.ripples=[]},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newHoldDown,oldHoldDown){if(oldHoldDown===undefined)return;if(newHoldDown)this.downAction();else this.upAction()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:"_pressedChanged"},toggles:{type:Boolean,value:false,reflectToAttribute:true},active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},pointerDown:{type:Boolean,readOnly:true,value:false},receivedFocusFromKeyboard:{type:Boolean,readOnly:true},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=false}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false)},_upHandler:function(){this._setPointerDown(false);this._setPressed(false)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(false)},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(false)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};function getTemplate$8(){return html$1`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
                                             rgba(255, 255, 255, .06));--active-shadow-rgb:0,0,0;--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-300);--border-color:var(--google-grey-700);--disabled-bg-action:var(--google-grey-800);--disabled-bg:transparent;--disabled-border-color:var(--google-grey-800);--disabled-text-color:var(--google-grey-500);--focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--hover-bg-action:var(--bg-action) linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08));--hover-bg-color:rgba(var(--google-blue-300-rgb), .08);--ink-color-action:black;--ink-color:var(--google-blue-300);--ripple-opacity-action:.16;--ripple-opacity:.16;--text-color-action:var(--google-grey-900);--text-color:var(--google-blue-300)}}:host{--paper-ripple-opacity:var(--ripple-opacity);-webkit-tap-highlight-color:transparent;align-items:center;border:1px solid var(--border-color);border-radius:4px;box-sizing:border-box;color:var(--text-color);cursor:pointer;display:inline-flex;flex-shrink:0;font-weight:500;height:var(--cr-button-height);justify-content:center;min-width:5.14em;outline-width:0;overflow:hidden;padding:8px 16px;position:relative;user-select:none}:host-context([chrome-refresh-2023]):host{--border-color:var(--color-button-border,
            var(--cr-fallback-color-tonal-outline));--text-color:var(--color-button-foreground,
            var(--cr-fallback-color-primary));--hover-bg-color:transparent;--hover-border-color:var(--border-color);--active-bg:transparent;--active-shadow:none;--ink-color:var(--cr-active-background-color);--ripple-opacity:1;--disabled-bg:transparent;--disabled-border-color:var(--color-button-border-disabled,
            var(--cr-fallback-color-disabled-background));--disabled-text-color:var(--color-button-foreground-disabled,
            var(--cr-fallback-color-disabled-foreground));--bg-action:var(--color-button-background-prominent,
            var(--cr-fallback-color-primary));--text-color-action:var(--color-button-foreground-prominent,
            var(--cr-fallback-color-on-primary));--hover-bg-action:var(--bg-action);--active-shadow-action:none;--ink-color-action:var(--cr-active-background-color);--ripple-opacity-action:1;--disabled-bg-action:var(--color-button-background-prominent-disabled,
            var(--cr-fallback-color-disabled-background));background:0 0;border-radius:100px;isolation:isolate;line-height:20px}:host([has-prefix-icon_]),:host([has-suffix-icon_]){--iron-icon-height:16px;--iron-icon-width:16px;gap:8px;padding:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]),:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){--iron-icon-height:20px;--iron-icon-width:20px;--icon-block-padding-large:16px;--icon-block-padding-small:12px;padding-block-end:8px;padding-block-start:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]){padding-inline-end:var(--icon-block-padding-large);padding-inline-start:var(--icon-block-padding-small)}:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){padding-inline-end:var(--icon-block-padding-small);padding-inline-start:var(--icon-block-padding-large)}:host-context(.focus-outline-visible):host(:focus){box-shadow:0 0 0 2px var(--focus-shadow-color)}@media (forced-colors:active){:host-context(.focus-outline-visible):host(:focus){outline:var(--cr-focus-outline-hcm)}:host-context([chrome-refresh-2023]):host{forced-color-adjust:none}}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus){box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:active){background:var(--active-bg);box-shadow:var(--active-shadow,0 1px 2px 0 rgba(var(--active-shadow-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-rgb),.15))}:host(:hover){background-color:var(--hover-bg-color)}@media (prefers-color-scheme:light){:host(:hover){border-color:var(--hover-border-color)}}#background{border-radius:inherit;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:hover) #background{background-color:var(--hover-bg-color)}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus) #background{background-clip:padding-box}:host-context([chrome-refresh-2023]):host(.action-button) #background{background-color:var(--bg-action)}:host-context([chrome-refresh-2023]):host([disabled]) #background{background-color:var(--disabled-bg)}:host-context([chrome-refresh-2023]):host(.action-button[disabled]) #background{background-color:var(--disabled-bg-action)}:host-context([chrome-refresh-2023]):host(.floating-button) #background,:host-context([chrome-refresh-2023]):host(.tonal-button) #background{background-color:var(--color-button-background-tonal,var(--cr-fallback-color-secondary-container))}:host-context([chrome-refresh-2023]):host([disabled].floating-button) #background,:host-context([chrome-refresh-2023]):host([disabled].tonal-button) #background{background-color:var(--color-button-background-tonal-disabled,var(--cr-fallback-color-disabled-background))}#content{display:contents}:host-context([chrome-refresh-2023]) #content{display:inline;z-index:2}:host-context([chrome-refresh-2023]) ::slotted(*){z-index:2}#hoverBackground{content:'';display:none;inset:0;pointer-events:none;position:absolute;z-index:1}:host-context([chrome-refresh-2023]):host(:hover) #hoverBackground{background:var(--cr-hover-background-color);display:block}:host-context([chrome-refresh-2023]):host(.action-button:hover) #hoverBackground{background:var(--cr-hover-on-prominent-background-color)}:host(.action-button){--ink-color:var(--ink-color-action);--paper-ripple-opacity:var(--ripple-opacity-action);background-color:var(--bg-action);border:none;color:var(--text-color-action)}:host-context([chrome-refresh-2023]):host(.action-button){--ink-color:var(--cr-active-on-primary-background-color);background-color:transparent}:host(.action-button:active){box-shadow:var(--active-shadow-action,0 1px 2px 0 rgba(var(--active-shadow-action-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-action-rgb),.15))}:host(.action-button:hover){background:var(--hover-bg-action)}@media (prefers-color-scheme:light){:host(.action-button:not(:active):hover){box-shadow:0 1px 2px 0 rgba(var(--hover-shadow-action-rgb),.3),0 1px 3px 1px rgba(var(--hover-shadow-action-rgb),.15)}:host-context([chrome-refresh-2023]):host(.action-button:not(:active):hover){box-shadow:none}}:host([disabled]){background-color:var(--disabled-bg);border-color:var(--disabled-border-color);color:var(--disabled-text-color);cursor:auto;pointer-events:none}:host(.action-button[disabled]){background-color:var(--disabled-bg-action);border-color:transparent}:host(.cancel-button){margin-inline-end:8px}:host(.action-button),:host(.cancel-button){line-height:154%}:host-context([chrome-refresh-2023]):host(.floating-button),:host-context([chrome-refresh-2023]):host(.tonal-button){border:none;color:var(--color-button-foreground-tonal,var(--cr-fallback-color-on-tonal-container))}:host-context([chrome-refresh-2023]):host(.floating-button[disabled]),:host-context([chrome-refresh-2023]):host(.tonal-button[disabled]){border:none;color:var(--disabled-text-color)}:host-context([chrome-refresh-2023]):host(.floating-button){border-radius:8px;height:40px;transition:box-shadow 80ms linear}:host-context([chrome-refresh-2023]):host(.floating-button:hover){box-shadow:var(--cr-elevation-3)}paper-ripple{color:var(--ink-color);height:var(--paper-ripple-height);left:var(--paper-ripple-left,0);top:var(--paper-ripple-top,0);width:var(--paper-ripple-width)}:host-context([chrome-refresh-2023]) paper-ripple{z-index:1}</style>

    <div id="background"></div>
    <slot id="prefixIcon" name="prefix-icon" on-slotchange="onPrefixIconSlotChanged_">
    </slot>
    <span id="content"><slot></slot></span>
    <slot id="suffixIcon" name="suffix-icon" on-slotchange="onSuffixIconSlotChanged_">
    </slot>
    <div id="hoverBackground" part="hoverBackground"></div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrButtonElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrButtonElement extends CrButtonElementBase{static get is(){return"cr-button"}static get template(){return getTemplate$8()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},circleRipple:{type:Boolean,value:false},hasPrefixIcon_:{type:Boolean,reflectToAttribute:true,value:false},hasSuffixIcon_:{type:Boolean,reflectToAttribute:true,value:false}}}constructor(){super();this.spaceKeyDown_=false;this.timeoutIds_=new Set;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}if(!this.hasAttribute("aria-disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false")}FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()}setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout((()=>{this.timeoutIds_.delete(id);fn()}),delay);this.timeoutIds_.add(id)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false;this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onPrefixIconSlotChanged_(){this.hasPrefixIcon_=this.$.prefixIcon.assignedElements().length>0}onSuffixIconSlotChanged_(){this.hasSuffixIcon_=this.$.suffixIcon.assignedElements().length>0}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}}onPointerDown_(){this.ensureRipple()}_createRipple(){const ripple=super._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}}customElements.define(CrButtonElement.is,CrButtonElement);
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var XfIcon_1;let XfIcon=XfIcon_1=class XfIcon extends XfBase{constructor(){super(...arguments);this.size=XfIcon_1.sizes.SMALL;this.type="";this.iconSet=null}static get sizes(){return{EXTRA_SMALL:"extra_small",SMALL:"small",MEDIUM:"medium",LARGE:"large"}}static get multiColor(){return{[constants.ICON_TYPES.CANT_PIN]:svg`<use xlink:href="foreground/images/files/ui/cant_pin.svg#cant_pin"></use>`,[constants.ICON_TYPES.CLOUD_DONE]:svg`<use xlink:href="foreground/images/files/ui/cloud_done.svg#cloud_done"></use>`,[constants.ICON_TYPES.CLOUD_ERROR]:svg`<use xlink:href="foreground/images/files/ui/cloud_error.svg#cloud_error"></use>`,[constants.ICON_TYPES.CLOUD_OFFLINE]:svg`<use xlink:href="foreground/images/files/ui/cloud_offline.svg#cloud_offline"></use>`,[constants.ICON_TYPES.CLOUD_PAUSED]:svg`<use xlink:href="foreground/images/files/ui/cloud_paused.svg#cloud_paused"></use>`,[constants.ICON_TYPES.CLOUD_SYNC]:svg`<use xlink:href="foreground/images/files/ui/cloud_sync.svg#cloud_sync"></use>`,[constants.ICON_TYPES.ERROR]:svg`<use xlink:href="foreground/images/files/ui/error.svg#error"></use>`,[constants.ICON_TYPES.OFFLINE]:svg`<use xlink:href="foreground/images/files/ui/offline.svg#offline"></use>`}}static get styles(){return getCSS$1()}render(){if(this.type===constants.ICON_TYPES.BLANK){return html``}if(Object.keys(XfIcon_1.multiColor).includes(this.type)){return html`
        <span class="multi-color keep-color">
          <svg>
            ${XfIcon_1.multiColor[this.type]}
          </svg>
        </span>`}if(this.iconSet){const backgroundImageStyle={"background-image":util.iconSetToCSSBackgroundImageValue(this.iconSet)};return html`<span class="keep-color" style=${styleMap(backgroundImageStyle)}></span>`}return html`
      <span></span>
    `}updated(changedProperties){if(changedProperties.has("type")){this.validateTypeProperty_(this.type)}}validateTypeProperty_(type){if(this.iconSet){return}if(!type){console.warn("Empty type will result in an square being rendered.");return}const validTypes=Object.values(constants.ICON_TYPES);if(!validTypes.find((t=>t===type))){console.warn(`Type ${type} is not a valid icon type, please check constants.ICON_TYPES.`)}}};__decorate([property({type:String,reflect:true})],XfIcon.prototype,"size",void 0);__decorate([property({type:String,reflect:true})],XfIcon.prototype,"type",void 0);__decorate([property({attribute:false})],XfIcon.prototype,"iconSet",void 0);XfIcon=XfIcon_1=__decorate([customElement("xf-icon")],XfIcon);function getCSS$1(){return css`
    :host {
      --xf-icon-color: var(--cros-sys-on_surface);
      --xf-icon-base-color: var(--cros-sys-app_base);
      --xf-icon-positive-color: var(--cros-sys-positive);
      --xf-icon-error-color: var(--cros-sys-error);
      --xf-icon-progress-color: var(--cros-sys-progress);
      --xf-secondary-color: var(--cros-sys-secondary);
      display: inline-block;
    }

    span {
      display: block;
    }

    span:not(.keep-color) {
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      background-color: var(--xf-icon-color);
    }

    span.keep-color {
      background-position: center center;
      background-repeat: no-repeat;
    }

    :host-context([disabled]) span.keep-color {
      opacity: 0.38;
    }

    span.multi-color {
      display: flex;
      align-items: stretch;
      justify-content: stretch;
    }

    :host([size="extra_small"]) span {
      height: 16px;
      width: 16px;
    }

    :host([size="extra_small"]) span.keep-color {
      background-size: 16px 16px;
    }

    :host([size="extra_small"]) span:not(.keep-color) {
      -webkit-mask-size: 16px;
    }

    :host([size="small"]) span {
      height: 20px;
      width: 20px;
    }

    :host([size="small"]) span.keep-color {
      background-size: 20px 20px;
    }

    :host([size="small"]) span:not(.keep-color) {
      -webkit-mask-size: 20px;
    }

    :host([size="medium"]) span {
      height: 32px;
      width: 32px;
    }

    :host([size="medium"]) span.keep-color {
      background-size: 32px 32px;
    }

    :host([size="medium"]) span:not(.keep-color) {
      -webkit-mask-size: 32px;
    }

    :host([size="large"]) span {
      height: 48px;
      width: 48px;
    }

    :host([size="large"]) span.keep-color {
      background-size: 48px 48px;
    }

    :host([size="large"]) span:not(.keep-color) {
      -webkit-mask-size: 48px;
    }

    :host([type="android_files"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/android.svg);
    }

    :host([type="archive"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_archive.svg);
    }

    :host([type="audio"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_audio.svg);
    }

    :host([type="bruschetta"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/bruschetta.svg);
    }

    :host([type="crostini"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/linux_files.svg);
    }

    :host([type="camera-folder"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/camera.svg);
    }

    :host([type="computer"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/computer.svg);
    }

    :host([type="computers_grand_root"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/devices.svg);
    }

    :host([type="downloads"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/downloads.svg);
    }

    :host([type="drive"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/drive.svg);
    }

    :host([type="drive_offline"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/offline.svg);
    }

    :host([type="drive_shared_with_me"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/shared.svg);
    }

    :host([type="drive_logo"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/drive_logo.svg);
    }

    :host([type="drive_bulk_pinning"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/drive_bulk_pinning.svg);
    }

    :host([type="excel"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_excel.svg);
    }

    :host([type="external_media"]) span,
    :host([type="removable"]) span,
    :host([type="usb"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/usb.svg);
    }

    :host([type="drive_recent"]) span, :host([type="recent"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/recent.svg);
    }

    :host([type="folder"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_folder.svg);
    }

    :host([type="generic"]) span, :host([type="glink"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_generic.svg);
    }

    :host([type="gdoc"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gdoc.svg);
    }

    :host([type="gdraw"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gdraw.svg);
    }

    :host([type="gform"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gform.svg);
    }

    :host([type="gmap"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gmap.svg);
    }

    :host([type="gsheet"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gsheet.svg);
    }

    :host([type="gsite"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gsite.svg);
    }

    :host([type="gslides"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gslides.svg);
    }

    :host([type="gtable"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gtable.svg);
    }

    :host([type="image"]) span, :host([type="raw"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_image.svg);
    }

    :host([type="mtp"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/phone.svg);
    }

    :host([type="my_files"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/my_files.svg);
    }

    :host([type="optical"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/cd.svg);
    }

    :host([type="pdf"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_pdf.svg);
    }

    :host([type="plugin_vm"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/plugin_vm_ng.svg);
    }

    :host([type="ppt"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_ppt.svg);
    }

    :host([type="script"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_script.svg);
    }

    :host([type="sd"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/sd.svg);
    }

    :host([type="service_drive"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/service_drive.svg);
    }

    :host([type="shared_drive"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_team_drive.svg);
    }

    :host([type="shared_drives_grand_root"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/team_drive.svg);
    }

    :host([type="shared_folder"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_folder_shared.svg);
    }

    :host([type="shortcut"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/shortcut.svg);
    }

    :host([type="sites"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_sites.svg);
    }

    :host([type="smb"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/smb.svg);
    }

    :host([type="team_drive"]) span, :host([type="unknown_removable"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/hard_drive.svg);
    }

    :host([type="thumbnail_generic"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/filetype_placeholder_generic.svg);
    }

    :host([type="tini"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_tini.svg);
    }

    :host([type="trash"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/delete_ng.svg);
    }

    :host([type="video"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_video.svg);
    }

    :host([type="word"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_word.svg);
    }

    :host([type="check"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/check.svg);
    }

    :host([type="bulk_pinning_battery_saver"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/bulk_pinning_battery_saver.svg);
    }

    :host([type="bulk_pinning_done"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/bulk_pinning_done.svg);
    }

    :host([type="bulk_pinning_offline"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/bulk_pinning_offline.svg);
    }

    :host([type="cloud"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/cloud.svg);
    }

    :host([type="error_banner"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/error_banner_icon.svg);
    }

    :host([type='gdoc']) span,
    :host([type='script']) span,
    :host([type='tini']) span {
      background-color: var(--cros-sys-progress);
    }

    :host([type='audio']) span,
    :host([type='gdraw']) span,
    :host([type='image']) span,
    :host([type='gmap']) span,
    :host([type='pdf']) span,
    :host([type='video']) span {
      background-color: var(--cros-sys-error);
    }

    :host([type='gsheet']) span,
    :host([type='gtable']) span {
      background-color: var(--cros-sys-positive);
    }

    :host([type='gslides']) span {
      background-color: var(--cros-sys-warning);
    }

    :host([type='gform']) span {
      background-color: var(--cros-sys-file_form);
    }

    :host([type='gsite']) span,
    :host([type='sites']) span {
      background-color: var(--cros-sys-file_site);
    }

    :host([type='excel']) span {
      background-color: var(--cros-sys-file_ms_excel);
    }

    :host([type='ppt']) span {
      background-color: var(--cros-sys-file_ms_ppt);
    }

    :host([type='word']) span {
      background-color: var(--cros-sys-file_ms_word);
    }

    /**
     * These icons are never shown on their own but are shown as suffix icons,
     * hence why they are smaller with offset margins. At the moment these are
     * only supported with "small" size prefix icons.
     */
    :host([type='cloud_done']) span,
    :host([type='cloud_error']) span,
    :host([type='cloud_offline']) span,
    :host([type='cloud_paused']) span,
    :host([type='cloud_sync']) span {
      margin-inline-start: 10px;
      margin-top: 8px;
      height: 12px;
      width: 12px;
    }
  `}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isValidArray(arr){if(arr instanceof Array&&Object.isFrozen(arr)){return true}return false}function getStaticString(literal){const isStaticString=isValidArray(literal)&&!!literal.raw&&isValidArray(literal.raw)&&literal.length===literal.raw.length&&literal.length===1;assert(isStaticString,"static_types.js only allows static strings");return literal.join("")}function createTypes(_ignore,literal){return getStaticString(literal)}const rules={createHTML:createTypes,createScript:createTypes,createScriptURL:createTypes};let staticPolicy;if(window.trustedTypes){staticPolicy=window.trustedTypes.createPolicy("static-types",rules)}else{staticPolicy=rules}function getTrustedHTML(literal){return staticPolicy.createHTML("",literal)}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var XfCloudPanel_1;var CloudPanelType;(function(CloudPanelType){CloudPanelType["OFFLINE"]="offline";CloudPanelType["BATTERY_SAVER"]="battery_saver";CloudPanelType["NOT_ENOUGH_SPACE"]="not_enough_space";CloudPanelType["METERED_NETWORK"]="metered_network"})(CloudPanelType||(CloudPanelType={}));let XfCloudPanel=XfCloudPanel_1=class XfCloudPanel extends XfBase{constructor(){super(...arguments);this.numberFormatter_=new Intl.NumberFormat(util.getCurrentLocaleOrDefault())}static get events(){return{DRIVE_SETTINGS_CLICKED:"drive_settings_clicked",PANEL_CLOSED:"panel_closed"}}static get styles(){return getCSS()}get open(){return this.$panel_?.open||false}showAt(el){this.$panel_.showAt(el,{top:el.offsetTop+el.offsetHeight+20})}close(){if(this.open){this.$panel_.close()}}async connectedCallback(){super.connectedCallback();await this.updateComplete;this.$panel_.addEventListener("close",(()=>{this.dispatchEvent(new CustomEvent(XfCloudPanel_1.events.PANEL_CLOSED,{bubbles:true,composed:true}))}))}onSettingsClicked_(event){event.stopImmediatePropagation();event.preventDefault();if(event.repeat){return}this.dispatchEvent(new CustomEvent(XfCloudPanel_1.events.DRIVE_SETTINGS_CLICKED,{bubbles:true,composed:true}))}render(){return html`<cr-action-menu>
      <div class="body">
        <div class="static progress" id="progress-preparing">
          <files-spinner></files-spinner>
          ${str("DRIVE_PREPARING_TO_SYNC")}
        </div>
        <div id="progress-state">
          <div class="progress">${this.items&&this.items>1?strf("DRIVE_MULTIPLE_FILES_SYNCING",this.numberFormatter_.format(this.items)):str("DRIVE_SINGLE_FILE_SYNCING")}</div>
          <progress
              class="progress-bar"
              max="100"
              value="${this.percentage}">
            ${this.percentage}%
          </progress>
          <div class="progress-description">
          ${this.seconds&&this.seconds>0?util.secondsToRemainingTimeString(this.seconds):str("DRIVE_BULK_PINNING_CALCULATING")}
          </div>
        </div>
        <div class="static" id="progress-finished">
          <xf-icon type="${constants.ICON_TYPES.CLOUD}" size="large"></xf-icon>
          <div class="status-description">
            ${str("BULK_PINNING_FILE_SYNC_ON")}
          </div>
        </div>
        <div class="static" id="progress-offline">
        <xf-icon type="${constants.ICON_TYPES.BULK_PINNING_OFFLINE}" size="large"></xf-icon>
          <div class="status-description">
            ${str("DRIVE_BULK_PINNING_OFFLINE")}
          </div>
        </div>
        <div class="static" id="progress-battery-saver">
        <xf-icon type="${constants.ICON_TYPES.BULK_PINNING_BATTERY_SAVER}" size="large"></xf-icon>
          <div class="status-description">
            ${str("DRIVE_BULK_PINNING_BATTERY_SAVER")}
          </div>
        </div>
        <div class="static" id="progress-not-enough-space">
        <xf-icon type="${constants.ICON_TYPES.ERROR_BANNER}" size="large"></xf-icon>
          <div class="status-description">
            ${str("DRIVE_BULK_PINNING_NOT_ENOUGH_SPACE")}
          </div>
        </div>
        <div class="static" id="progress-metered-network">
          <xf-icon type="${constants.ICON_TYPES.CLOUD}" size="large"></xf-icon>
          <div class="status-description">
            ${str("DRIVE_BULK_PINNING_METERED_NETWORK")}
          </div>
        </div>
        <div class="divider"></div>
        <button class="action" @click=${this.onSettingsClicked_}>${str("GOOGLE_DRIVE_SETTINGS_LINK")}</button>
      </div>
    </cr-action-menu>`}};__decorate([property({type:Number,reflect:true,attribute:true})],XfCloudPanel.prototype,"items",void 0);__decorate([property({type:Number,reflect:true,converter:{fromAttribute:value=>{const percentage=parseInt(value,10);return percentage>=0&&percentage<=100?percentage:null},toAttribute:value=>String(value)}})],XfCloudPanel.prototype,"percentage",void 0);__decorate([property({type:CloudPanelType,reflect:true,converter:{fromAttribute:value=>{if(!value){return null}if(value.toUpperCase()in CloudPanelType){return value}console.warn(`Failed to convert ${value} to CloudPanelType`);return null},toAttribute:key=>key}})],XfCloudPanel.prototype,"type",void 0);__decorate([property({type:Number,reflect:true,converter:{fromAttribute:value=>{const seconds=parseInt(value,10);return seconds>=0?seconds:null},toAttribute:value=>String(value)}})],XfCloudPanel.prototype,"seconds",void 0);__decorate([query("cr-action-menu")],XfCloudPanel.prototype,"$panel_",void 0);XfCloudPanel=XfCloudPanel_1=__decorate([customElement("xf-cloud-panel")],XfCloudPanel);function getCSS(){return css`
    cr-action-menu {
      --cr-menu-border-radius: 20px;
    }

    :host {
      position: absolute;
      right: 0px;
      top: 50px;
      z-index: 600;
    }

    :host(:not([items][percentage])) #progress-state,
    :host([percentage="100"]) #progress-state,
    :host([type]) #progress-state {
      display: none;
    }

    :host(:not([items][percentage="100"])) #progress-finished,
    :host([type]) #progress-finished {
      display: none;
    }

    :host([percentage][items]) #progress-preparing,
    :host([type]) #progress-preparing {
      display: none;
    }

    :host(:not([type="offline"])) #progress-offline {
      display: none;
    }

    :host(:not([type="battery_saver"])) #progress-battery-saver {
      display: none;
    }

    :host(:not([type="not_enough_space"])) #progress-not-enough-space {
      display: none;
    }

    :host(:not([type="metered_network"])) #progress-metered-network {
      display: none;
    }

    .body {
      background-color: var(--cros-sys-base_elevated);
      display: flex;
      flex-direction: column;
      margin: -8px 0;
      width: 320px;
    }

    .static {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    xf-icon {
      padding: 27px 0px 8px;
    }

    xf-icon[type="bulk_pinning_done"] {
      --xf-icon-color: var(--cros-sys-positive);
    }

    xf-icon[type="bulk_pinning_offline"] {
      --xf-icon-color: var(--cros-sys-secondary);
    }

    xf-icon[type="bulk_pinning_battery_saver"] {
      --xf-icon-color: var(--cros-sys-secondary);
    }

    xf-icon[type="error_banner"] {
      --xf-icon-color: var(--cros-sys-error);
    }

    .status-description {
      color: var(--cros-sys-on_surface_variant);
      font: var(--cros-annotation-1-font);
      line-height: 20px;
      padding: 0px 16px 20px;
      text-align: center;
    }

    .progress {
      color: var(--cros-sys-on_surface);
      font: var(--cros-button-2-font);
      line-height: 20px;
      margin-inline: 16px;
      padding-top: 20px;
    }

    .progress-description {
      color: var(--cros-sys-on_surface_variant);
      font: var(--cros-annotation-1-font);
      padding-bottom: 20px;
      padding-inline: 16px;
    }

    .progress-bar {
      border-radius: 10px;
      height: 4px;
      margin: 8px 0 8px;
      margin-inline: 16px;
      width: calc(100% - 32px);
    }

    #progress-preparing {
      flex-direction: row;
      padding-bottom: 20px;
    }

    #progress-preparing files-spinner {
      height: 20px;
      margin: 0;
      margin-inline-end: 8px;
      width: 20px;
    }

    progress::-webkit-progress-bar {
      background-color: var(--cros-sys-highlight_shape);
      border-radius: 10px;
    }

    progress.progress-bar::-webkit-progress-value {
      background-color: var(--cros-sys-primary);
      border-radius: 10px;
    }

    .divider {
      background: var(--cros-sys-separator);
      height: 1px;
      width: 100%;
    }

    button.action {
      background-color: var(--cros-sys-base_elevated);
      border: 0;
      font: var(--cros-button-2-font);
      height: 36px;
      margin-bottom: 8px;
      margin-top: 8px;
      padding-inline: 16px;
      text-align: left;
    }

    :host-context([dir='rtl']) button.action {
      text-align: right;
    }

    .action {
      width: 100%;
    }

    .action:hover {
      background: var(--cros-sys-hover_on_subtle);
    }
  `}const styleMod$2=document.createElement("dom-module");styleMod$2.appendChild(html$1`
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);styleMod$2.register("cr-icons");const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html$1`
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);styleMod$1.register("cr-shared-style");const styleMod=document.createElement("dom-module");styleMod.appendChild(html$1`
  <template>
    <style>
:host{--cr-input-background-color:var(--google-grey-100);--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--google-red-600);--cr-input-focus-color:var(--google-blue-600);display:block;outline:0}:host-context([chrome-refresh-2023]):host{--cr-input-background-color:var(--color-textfield-filled-background,
            var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,
                var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-error-color:var(--color-textfield-filled-error,
            var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,
            var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,
                var(--cr-fallback-on-surface-subtle));isolation:isolate}:host-context([chrome-refresh-2023]):host([readonly]){--cr-input-border-radius:8px 8px}@media (prefers-color-scheme:dark){:host{--cr-input-background-color:rgba(0, 0, 0, .3);--cr-input-error-color:var(--google-red-300);--cr-input-focus-color:var(--google-blue-300)}}:host-context(html:not([chrome-refresh-2023])):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-color)}:host-context([chrome-refresh-2023]) #label{color:var(--color-textfield-foreground-label,var(--cr-fallback-color-on-surface-subtle));font-size:11px;line-height:16px}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle))}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-prefix]){--cr-icon-button-margin-start:-8px}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-suffix]){--cr-icon-button-margin-end:-4px}:host-context([chrome-refresh-2023]):host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{display:none}:host-context([chrome-refresh-2023]) #hover-layer{background-color:var(--cr-input-hover-background-color);inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;min-height:var(--cr-input-min-height,auto);outline:0;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px);text-align:inherit;text-overflow:ellipsis;width:100%}:host-context([chrome-refresh-2023]) #input{font-size:12px;line-height:16px;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([focused_]) #underline,:host([force-underline]) #underline,:host([invalid]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host-context([chrome-refresh-2023]):host([readonly]) #underline{display:none}:host-context([chrome-refresh-2023]):host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host-context([chrome-refresh-2023]):host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,
            var(--cr-fallback-color-disabled-background))}:host-context([chrome-refresh-2023]):host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}
    </style>
  </template>
`.content);styleMod.register("cr-input-style");function getTemplate$7(){return html$1`<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
    <div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
      [[label]]
    </div>
    <div id="row-container" part="row-container">
      <div id="input-container">
        <div id="inner-input-container">
          <div id="hover-layer"></div>
          <div id="inner-input-content">
            <slot name="inline-prefix"></slot>
            
            <input id="input" disabled="[[disabled]]" autofocus="[[autofocus]]" value="{{value::input}}" tabindex$="[[inputTabindex]]" type="[[type]]" readonly$="[[readonly]]" maxlength$="[[maxlength]]" pattern$="[[pattern]]" required="[[required]]" minlength$="[[minlength]]" inputmode$="[[inputmode]]" aria-description$="[[ariaDescription]]" aria-label$="[[getAriaLabel_(ariaLabel, label, placeholder)]]" aria-invalid$="[[getAriaInvalid_(invalid)]]" max="[[max]]" min="[[min]]" on-focus="onInputFocus_" on-blur="onInputBlur_" on-change="onInputChange_" part="input" autocomplete="off">
            <slot name="inline-suffix"></slot>
          </div>
        </div>
        <div id="underline-base"></div>
        <div id="underline"></div>
      </div>
      <slot name="suffix"></slot>
    </div>
    <div id="error" aria-live="assertive">[[displayErrorMessage_]]</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);class CrInputElement extends PolymerElement{static get is(){return"cr-input"}static get template(){return getTemplate$7()}static get properties(){return{ariaDescription:{type:String},ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true},errorMessage:{type:String,value:"",observer:"onInvalidOrErrorMessageChanged_"},displayErrorMessage_:{type:String,value:""},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true,observer:"onInvalidOrErrorMessageChanged_"},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},inputmode:String,label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},inputTabindex:{type:Number,value:0,observer:"onInputTabindexChanged_"},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}}}ready(){super.ready();assert(!this.hasAttribute("tabindex"))}onInputTabindexChanged_(){assert(this.inputTabindex===0||this.inputTabindex===-1)}onTypeChanged_(){assert(SUPPORTED_INPUT_TYPES.has(this.type))}get inputElement(){return this.$.input}getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder}getAriaInvalid_(invalid){return invalid?"true":"false"}onInvalidOrErrorMessageChanged_(){this.displayErrorMessage_=this.invalid?this.errorMessage:"";const ERROR_ID="error";const errorElement=this.shadowRoot.querySelector(`#${ERROR_ID}`);assert(errorElement);if(this.invalid){errorElement.setAttribute("role","alert");this.inputElement.setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.inputElement.removeAttribute("aria-errormessage")}}placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}}focus(){this.focusInput()}focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true}onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}}onInputChange_(e){this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:{sourceEvent:e}}))}onInputFocus_(){this.focused_=true}onInputBlur_(){this.focused_=false}select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert(start===undefined&&end===undefined);this.inputElement.select()}}validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}}customElements.define(CrInputElement.is,CrInputElement);function getTemplate$6(){return html$1`<!--_html_template_start_-->    <style>:host{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;outline:0;user-select:none;--cr-checkbox-border-size:2px;--cr-checkbox-size:16px;--cr-checkbox-ripple-size:40px;--cr-checkbox-ripple-offset:calc(var(--cr-checkbox-size)/2 -
            var(--cr-checkbox-ripple-size)/2 - var(--cr-checkbox-border-size));--cr-checkbox-checked-box-color:var(--cr-checked-color);--cr-checkbox-ripple-checked-color:var(--cr-checked-color);--cr-checkbox-checked-ripple-opacity:.2;--cr-checkbox-mark-color:white;--cr-checkbox-ripple-unchecked-color:var(--google-grey-900);--cr-checkbox-unchecked-box-color:var(--google-grey-700);--cr-checkbox-unchecked-ripple-opacity:.15}@media (prefers-color-scheme:dark){:host{--cr-checkbox-checked-ripple-opacity:.4;--cr-checkbox-mark-color:var(--google-grey-900);--cr-checkbox-ripple-unchecked-color:var(--google-grey-500);--cr-checkbox-unchecked-box-color:var(--google-grey-500);--cr-checkbox-unchecked-ripple-opacity:.4}}:host-context([chrome-refresh-2023]):host{--cr-checkbox-ripple-size:32px;--cr-checkbox-mark-color:var(--color-checkbox-check,
            var(--cr-fallback-color-on-primary));--cr-checkbox-checked-box-color:var(--color-checkbox-foreground-checked,
            var(--cr-fallback-color-primary));--cr-checkbox-unchecked-box-color:var(--color-checkbox-foreground-unchecked,
            var(--cr-fallback-color-outline));--cr-checkbox-ripple-checked-color:var(--cr-active-background-color);--cr-checkbox-ripple-unchecked-color:var(--cr-active-background-color);--cr-checkbox-ripple-offset:50%;--cr-checkbox-ripple-opacity:1}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-checkbox-checked-box-color:var(
            --color-checkbox-container-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-unchecked-box-color:var(
            --color-checkbox-outline-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-mark-color:var(--color-checkbox-check-disabled,
            var(--cr-fallback-color-disabled-foreground))}#checkbox{background:0 0;border:var(--cr-checkbox-border-size) solid var(--cr-checkbox-unchecked-box-color);border-radius:2px;box-sizing:border-box;cursor:pointer;display:block;flex-shrink:0;height:var(--cr-checkbox-size);isolation:isolate;margin:0;outline:0;padding:0;position:relative;transform:none;width:var(--cr-checkbox-size)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #checkbox{border-color:transparent}:host-context([chrome-refresh-2023]) #hover-layer{display:none}:host-context([chrome-refresh-2023]) #checkbox:hover #hover-layer{background-color:var(--cr-hover-background-color);border-radius:50%;display:block;height:32px;left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:32px}@media (forced-colors:active){:host(:focus) #checkbox{outline:var(--cr-focus-outline-hcm)}}:host-context([chrome-refresh-2023]) #checkbox:focus-visible{outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}#checkmark{display:block;forced-color-adjust:auto;position:relative;transform:scale(0);z-index:1}#checkmark path{fill:var(--cr-checkbox-mark-color)}:host([checked]) #checkmark{transform:scale(1);transition:transform 140ms ease-out}:host([checked]) #checkbox{background:var(--cr-checkbox-checked-box-background-color,var(--cr-checkbox-checked-box-color));border-color:var(--cr-checkbox-checked-box-color)}paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-unchecked-ripple-opacity));color:var(--cr-checkbox-ripple-unchecked-color);height:var(--cr-checkbox-ripple-size);left:var(--cr-checkbox-ripple-offset);outline:var(--cr-checkbox-ripple-ring,none);pointer-events:none;top:var(--cr-checkbox-ripple-offset);transition:color linear 80ms;width:var(--cr-checkbox-ripple-size)}:host([checked]) paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-checked-ripple-opacity));color:var(--cr-checkbox-ripple-checked-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:var(--cr-checkbox-ripple-offset)}:host-context([chrome-refresh-2023]) paper-ripple{transform:translate(-50%,-50%)}:host-context([dir=rtl][chrome-refresh-2023]) paper-ripple{transform:translate(50%,-50%)}#label-container{color:var(--cr-checkbox-label-color,var(--cr-primary-text-color));padding-inline-start:var(--cr-checkbox-label-padding-start,20px);white-space:normal}:host(.label-first) #label-container{order:-1;padding-inline-end:var(--cr-checkbox-label-padding-end,20px);padding-inline-start:0}:host(.no-label) #label-container{display:none}#ariaDescription{height:0;overflow:hidden;width:0}</style>
    <div id="checkbox" tabindex$="[[tabIndex]]" role="checkbox" on-keydown="onKeyDown_" on-keyup="onKeyUp_" aria-disabled="false" aria-checked="false" aria-labelledby="label-container" aria-describedby="ariaDescription">
      
      <svg id="checkmark" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="m10.192 2.121-6.01 6.01-2.121-2.12L1 7.07l2.121 2.121.707.707.354.354 7.071-7.071-1.06-1.06Z">
      </path></svg>
      <div id="hover-layer"></div>
    </div>
    <div id="label-container" aria-hidden="true" part="label-container">
      <slot></slot>
    </div>
    <div id="ariaDescription" aria-hidden="true">[[ariaDescription]]</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrCheckboxElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrCheckboxElement extends CrCheckboxElementBase{static get is(){return"cr-checkbox"}static get template(){return getTemplate$6()}static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true,observer:"checkedChanged_",notify:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},ariaDescription:String,tabIndex:{type:Number,value:0,observer:"onTabIndexChanged_"}}}ready(){super.ready();this.removeAttribute("unresolved");this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("pointerup",this.hideRipple_.bind(this));if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.showRipple_.bind(this));this.addEventListener("pointerleave",this.hideRipple_.bind(this))}else{this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("focus",this.showRipple_.bind(this))}}focus(){this.$.checkbox.focus()}getFocusableElement(){return this.$.checkbox}checkedChanged_(){this.$.checkbox.setAttribute("aria-checked",this.checked?"true":"false")}disabledChanged_(_current,previous){if(previous===undefined&&!this.disabled){return}this.tabIndex=this.disabled?-1:0;this.$.checkbox.setAttribute("aria-disabled",this.disabled?"true":"false")}showRipple_(){if(this.noink){return}this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}onClick_(e){if(this.disabled||e.target.tagName==="A"){return}e.stopPropagation();e.preventDefault();this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:this.checked}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(e.key===" "){this.click()}}onTabIndexChanged_(){this.removeAttribute("tabindex")}_createRipple(){this._rippleContainer=this.$.checkbox;const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrCheckboxElement.is,CrCheckboxElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map((function(key){return metaDatas[this.type][key]}),this)}}byKey(key){this.key=key;return this.value}}IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:true},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:true},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html$1`
    <style>
      :host {
        align-items: center;
        display: inline-flex;
        justify-content: center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(this._iconName===""){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=false}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});function getTemplate$5(){return html$1`<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrIconbuttonElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrIconButtonElement extends CrIconbuttonElementBase{static get is(){return"cr-icon-button"}static get template(){return getTemplate$5()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},ironIcon:{type:String,observer:"onIronIconChanged_",reflectToAttribute:true},multipleIcons_:{type:Boolean,reflectToAttribute:true}}}constructor(){super();this.spaceKeyDown_=false;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}}ready(){super.ready();this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}}toggleClass(className){this.classList.toggle(className)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onIronIconChanged_(){this.shadowRoot.querySelectorAll("iron-icon").forEach((el=>el.remove()));if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");this.multipleIcons_=icons.length>1;icons.forEach((icon=>{const ironIcon=document.createElement("iron-icon");ironIcon.icon=icon;this.$.icon.appendChild(ironIcon);if(ironIcon.shadowRoot){ironIcon.shadowRoot.querySelectorAll("svg, img").forEach((child=>child.setAttribute("role","none")))}}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}}onPointerDown_(){this.ensureRipple()}}customElements.define(CrIconButtonElement.is,CrIconButtonElement);
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrContainerShadowSide;(function(CrContainerShadowSide){CrContainerShadowSide["TOP"]="top";CrContainerShadowSide["BOTTOM"]="bottom"})(CrContainerShadowSide||(CrContainerShadowSide={}));const CrContainerShadowMixin=dedupingMixin((superClass=>{class CrContainerShadowMixin extends superClass{constructor(){super(...arguments);this.intersectionObserver_=null;this.dropShadows_=new Map;this.intersectionProbes_=new Map;this.sides_=null}connectedCallback(){super.connectedCallback();const hasBottomShadow=this.getContainer_().hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach((side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow);this.intersectionProbes_.set(side,document.createElement("div"))}));this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),this.getContainer_());this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));if(hasBottomShadow){this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),this.getContainer_().nextSibling);this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM))}this.enableShadowBehavior(true)}disconnectedCallback(){super.disconnectedCallback();this.enableShadowBehavior(false)}getContainer_(){return this.shadowRoot.querySelector("#container")}getIntersectionObserver_(){const callback=entries=>{for(const entry of entries){const target=entry.target;this.sides_.forEach((side=>{if(target===this.intersectionProbes_.get(side)){this.dropShadows_.get(side).classList.toggle("has-shadow",entry.intersectionRatio===0)}}))}};return new IntersectionObserver(callback,{root:this.getContainer_(),threshold:0})}enableShadowBehavior(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout((()=>{if(this.intersectionObserver_){this.intersectionProbes_.forEach((probe=>{this.intersectionObserver_.observe(probe)}))}}))}showDropShadows(){assert(!this.intersectionObserver_);assert(this.sides_);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("has-shadow",true)}}}return CrContainerShadowMixin}));function getTemplate$4(){return html$1`<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons">dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title" aria-describedby="container">
    
      <div id="content-wrapper" part="wrapper">
        <div class="top-container">
          <h2 id="title" class="title-container" tabindex="-1">
            <slot name="title"></slot>
          </h2>
          <cr-icon-button id="close" class="icon-clear" hidden$="[[!showCloseButton]]" aria-label$="[[closeText]]" on-click="cancel" on-keypress="onCloseKeypress_">
          </cr-icon-button>
        </div>
        <slot name="header"></slot>
        <div class="body-container" id="container" show-bottom-shadow part="body-container">
          <slot name="body"></slot>
        </div>
        <slot name="button-container"></slot>
        <slot name="footer"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrDialogElementBase=CrContainerShadowMixin(PolymerElement);class CrDialogElement extends CrDialogElementBase{constructor(){super(...arguments);this.intersectionObserver_=null;this.mutationObserver_=null;this.boundKeydown_=null}static get is(){return"cr-dialog"}static get template(){return getTemplate$4()}static get properties(){return{open:{type:Boolean,value:false,reflectToAttribute:true},closeText:String,ignorePopstate:{type:Boolean,value:false},ignoreEnterKey:{type:Boolean,value:false},consumeKeydownEvent:{type:Boolean,value:false},noCancel:{type:Boolean,value:false},showCloseButton:{type:Boolean,value:false},showOnAttach:{type:Boolean,value:false}}}ready(){super.ready();window.addEventListener("popstate",(()=>{if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}this.addEventListener("pointerdown",(e=>this.onPointerdown_(e)))}connectedCallback(){super.connectedCallback();const mutationObserverCallback=()=>{if(this.$.dialog.open){this.enableShadowBehavior(true);this.addKeydownListener_()}else{this.enableShadowBehavior(false);this.removeKeydownListener_()}};this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}}disconnectedCallback(){super.disconnectedCallback();this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}}addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)}removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null}showModal(){this.$.dialog.showModal();assert(this.$.dialog.open);this.open=true;this.dispatchEvent(new CustomEvent("cr-dialog-open",{bubbles:true,composed:true}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}));this.$.dialog.close();assert(!this.$.dialog.open);this.open=false}close(){this.$.dialog.close("success");assert(!this.$.dialog.open);this.open=false}setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)}onCloseKeypress_(e){e.stopPropagation()}onNativeDialogClose_(e){if(e.target!==this.getNative()){return}this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}))}getNative(){return this.$.dialog}onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some((el=>el.tagName==="CR-INPUT"&&el.type!=="search"));if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}}onKeydown_(e){assert(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()}onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()}focus(){const titleContainer=this.shadowRoot.querySelector(".title-container");assert(titleContainer);titleContainer.focus()}}customElements.define(CrDialogElement.is,CrDialogElement);function getTemplate$3(){return getTrustedHTML`<!--_html_template_start_--><!--
Copyright 2022 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style>
  [hidden] {
    display: none !important;
  }

  cr-dialog::part(dialog) {
    --cr-dialog-top-container-min-height: 0px;
    background-color: var(--cros-bg-color-elevation-3);
    border-radius: 12px;
    box-shadow: var(--cros-elevation-3-shadow);
    user-select: none;
    width: 448px;
  }

  cr-dialog::part(dialog)::backdrop {
    background-color: var(--cros-app-shield-60);
  }

  cr-dialog::part(wrapper) {
    /* subtract the internal padding in <cr-dialog> */
    padding: calc(24px - 20px);
  }

  cr-dialog #message {
    color: var(--cros-text-color-primary);
    outline: none;
    padding: 20px 0;
  }

  cr-checkbox {
    margin-bottom: 16px;
    margin-inline-start: 4px;
  }

  cr-dialog [slot=button-container] {
    padding-top: 0;
  }

  cr-button {
    --active-bg: transparent;
    --active-shadow:
      0 1px 2px var(--cros-button-active-shadow-color-key-secondary),
      0 1px 3px var(--cros-button-active-shadow-color-ambient-secondary);
    --active-shadow-action:
      0 1px 2px var(--cros-button-active-shadow-color-key-primary),
      0 1px 3px var(--cros-button-active-shadow-color-ambient-primary);
    --bg-action: var(--cros-button-background-color-primary);
    --border-color: var(--cros-button-stroke-color-secondary);
    --disabled-bg-action:
      var(--cros-button-background-color-primary-disabled);
    --disabled-bg: var(--cros-button-background-color-primary-disabled);
    --disabled-border-color:
      var(--cros-button-stroke-color-secondary-disabled);
    --disabled-text-color: var(--cros-button-label-color-secondary-disabled);
    --hover-bg-action: var(--cros-button-background-color-primary-hover-preblended);
    --hover-bg-color: var(--cros-button-background-color-secondary-hover);
    --hover-border-color: var(--cros-button-stroke-color-secondary-hover);
    --ink-color: var(--cros-button-ripple-color-secondary);
    --ripple-opacity-action: var(--cros-button-primary-ripple-opacity);
    --ripple-opacity: var(--cros-button-secondary-ripple-opacity);
    --text-color-action: var(--cros-button-label-color-primary);
    --text-color: var(--cros-button-label-color-secondary);
  }

  #keepboth {
    margin-inline-start: auto;
  }

  #replace {
    margin-inline-end: 0;
  }

  :host-context(.pointer-active) cr-button:not(:active):hover {
    background: transparent;
    cursor: unset;
  }

  :host-context(.pointer-active) cr-button:focus {
    box-shadow: none;
  }

  :host-context(.focus-outline-visible) cr-button:focus {
    box-shadow: none;
    outline: 2px solid var(--cros-focus-ring-color);
    outline-offset: 2px;
  }
</style>

<cr-dialog id="conflict-dialog" consume-keydown-event>
  <div slot="body">
    <div id="message" tabindex="0">
    </div>
    <cr-checkbox id="checkbox">
      $i18n{CONFLICT_DIALOG_APPLY_TO_ALL}
    </cr-checkbox>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" id="cancel">
      $i18n{CANCEL_LABEL}
    </cr-button>
    <cr-button class="cancel-button" id="keepboth">
      $i18n{CONFLICT_DIALOG_KEEP_BOTH}
    </cr-button>
    <cr-button class="cancel-button" id="replace">
      $i18n{CONFLICT_DIALOG_REPLACE}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class XfConflictDialog extends HTMLElement{constructor(){super();this.mutex_=new AsyncQueue;this.action_="";const template=document.createElement("template");template.innerHTML=getTemplate$3();const fragment=template.content.cloneNode(true);this.attachShadow({mode:"open"}).appendChild(fragment);this.dialog_=this.getDialogElement();this.resolve_=console.log;this.reject_=console.log}connectedCallback(){this.dialog_.addEventListener("close",this.closed_.bind(this));this.getCheckboxElement().onchange=this.checked_.bind(this);this.getCancelButton().onclick=this.cancel_.bind(this);this.getKeepbothButton().onclick=this.keepboth_.bind(this);this.getReplaceButton().onclick=this.replace_.bind(this)}async show(filename,checkbox=false,directory=false){const unlock=await this.mutex_.lock();try{return await new Promise(((resolve,reject)=>{this.resolve_=resolve;this.reject_=reject;this.showModal_(filename,checkbox,directory)}))}finally{unlock()}}showModal_(filename,checkbox,folder){const message=folder?"CONFLICT_DIALOG_FOLDER_MESSAGE":"CONFLICT_DIALOG_MESSAGE";this.getMessageElement().innerText=strf(message,filename);const applyToAll=this.getCheckboxElement();applyToAll.hidden=!checkbox;applyToAll.checked=false;this.action_="";this.checked_();this.dialog_.showModal();this.setFocus_()}setFocus_(){this.dialog_.shadowRoot.querySelector("#title")?.remove();const element=this.getHtmlDialogElement();element.setAttribute("aria-modal","true");element.removeAttribute("aria-labelledby");element.removeAttribute("aria-describedby");this.getMessageElement().focus()}getDialogElement(){return this.shadowRoot.querySelector("#conflict-dialog")}getHtmlDialogElement(){return this.dialog_.getNative()}getMessageElement(){return this.dialog_.querySelector("#message")}getCheckboxElement(){return this.shadowRoot.querySelector("#checkbox")}checked_(){const checked=this.getCheckboxElement().checked;if(checked){this.getKeepbothButton().innerText=str("CONFLICT_DIALOG_KEEP_ALL");this.getReplaceButton().innerText=str("CONFLICT_DIALOG_REPLACE_ALL")}else{this.getKeepbothButton().innerText=str("CONFLICT_DIALOG_KEEP_BOTH");this.getReplaceButton().innerText=str("CONFLICT_DIALOG_REPLACE")}this.getCheckboxElement().focus();this.toggleAttribute("checked",checked)}getCancelButton(){return this.shadowRoot.querySelector("#cancel")}cancel_(){this.action_="";this.dialog_.close()}getKeepbothButton(){return this.shadowRoot.querySelector("#keepboth")}keepboth_(){this.action_="keepboth";this.dialog_.close()}getReplaceButton(){return this.shadowRoot.querySelector("#replace")}replace_(){this.action_="replace";this.dialog_.close()}closed_(){if(!this.action_){this.reject_(new Error("dialog cancelled"));return}const applyToAll=this.getCheckboxElement().checked;this.resolve_({resolve:this.action_,checked:applyToAll})}}customElements.define("xf-conflict-dialog",XfConflictDialog);function getTemplate$2(){return getTrustedHTML`<!--_html_template_start_--><style>
  [slot='title'] {
    --cr-dialog-title-slot-padding-bottom: 16px;
    --cr-dialog-title-slot-padding-end: 0;
    --cr-dialog-title-slot-padding-start: 0;
    --cr-dialog-title-slot-padding-top: 0;
    --cr-primary-text-color: var(--cros-sys-on_surface);
    font: var(--cros-display-7-font);
  }

  [slot='body'] {
    --cr-dialog-body-padding-horizontal: 0;
    --cr-secondary-text-color: var(--cros-sys-on_surface_variant);
  }

  [slot='body'] > div {
    font: var(--cros-body-1-font);
    margin-bottom: 32px;
  }

  [slot='button-container'] {
    --cr-dialog-button-container-padding-bottom: 0;
    --cr-dialog-button-container-padding-horizontal: 0;
    padding-top: 32px;
  }

  [slot='body'] > #input {
    margin-bottom: 0;
    padding-bottom: 2px;
  }

  cr-dialog::part(dialog) {
    --cr-dialog-background-color: var(--cros-sys-dialog_container);
    border-radius: 20px;
    box-shadow: var(--cros-elevation-3-shadow);
    width: 384px;
  }

  cr-dialog::part(dialog)::backdrop {
    background-color: var(--cros-sys-scrim);
  }

  cr-dialog::part(wrapper) {
    padding: 32px;
    padding-bottom: 28px;
  }

  cr-input {
    --cr-form-field-label-color: var(--cros-sys-on_surface);
    --cr-input-background-color: var(--cros-sys-input_field_on_base);
    --cr-input-border-radius: 8px;
    --cr-input-color: var(--cros-sys-on_surface);
    --cr-input-error-color: var(--cros-sys-error);
    --cr-input-focus-color: var(--cros-sys-primary);
    --cr-input-min-height: 36px;
    --cr-input-padding-end: 16px;
    --cr-input-padding-start: 16px;
    --cr-input-placeholder-color: var(--cros-sys-secondary);
    font: var(--cros-body-2-font);
  }

  cr-button {
    --active-bg: transparent;
    --active-shadow: none;
    --active-shadow-action: none;
    --bg-action: var(--cros-sys-primary);
    --cr-button-height: 36px;
    --disabled-bg-action:
        var(--cros-sys-disabled_container);
    --disabled-bg: var(--cros-sys-disabled_container);;
    --disabled-text-color: var(--cros-sys-disabled);
    /* Use the default bg color as hover color because we
        rely on hoverBackground layer below.  */
    --hover-bg-action: var(--cros-sys-primary);
    --hover-bg-color: var(--cros-sys-primary_container);
    --ink-color: var(--cros-sys-ripple_primary);
    --ripple-opacity-action: 1;
    --ripple-opacity: 1;
    --text-color-action: var(--cros-sys-on_primary);
    --text-color: var(--cros-sys-on_primary_container);
    border: none;
    border-radius: 18px;
    box-shadow: none;
    font: var(--cros-button-2-font);
    position: relative;
  }

  cr-button.cancel-button {
    background-color: var(--cros-sys-primary_container);
  }

  cr-button.cancel-button:hover::part(hoverBackground) {
    background-color: var(--cros-sys-hover_on_subtle);
    display: block;
  }

  cr-button.action-button:hover::part(hoverBackground) {
    background-color: var(--cros-sys-hover_on_prominent);
    display: block;
  }

  :host-context(.focus-outline-visible) cr-button:focus {
    outline: 2px solid var(--cros-sys-focus_ring);
    outline-offset: 2px;
  }
</style>

<cr-dialog id="password-dialog">
  <div slot="title">
    $i18n{PASSWORD_DIALOG_TITLE}
  </div>
  <div slot="body">
    <div id="name" ></div>
    <cr-input id="input" type="password" auto-validate="true">
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" id="cancel">
    $i18n{CANCEL_LABEL}
    </cr-button>
    <cr-button class="action-button" id="unlock">
        $i18n{PASSWORD_DIALOG_CONFIRM_LABEL}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TAG_NAME="xf-password-dialog";const USER_CANCELLED=new Error("Cancelled by user");class XfPasswordDialog extends HTMLElement{constructor(){super();this.mutex_=new AsyncQueue;this.success_=false;this.resolve_=null;this.reject_=null;const template=document.createElement("template");template.innerHTML=getTemplate$2();const fragment=template.content.cloneNode(true);this.attachShadow({mode:"open"}).appendChild(fragment);this.dialog_=this.shadowRoot.querySelector("#password-dialog");this.dialog_.consumeKeydownEvent=true;this.input_=this.shadowRoot.querySelector("#input");this.input_.errorMessage=loadTimeData.getString("PASSWORD_DIALOG_INVALID")}connectedCallback(){const cancelButton=this.shadowRoot.querySelector("#cancel");cancelButton.onclick=()=>this.cancel_();const unlockButton=this.shadowRoot.querySelector("#unlock");unlockButton.onclick=()=>this.unlock_();this.dialog_.addEventListener("close",(()=>this.onClose_()))}async askForPassword(filename,password=null){const mutexUnlock=await this.mutex_.lock();try{return await new Promise(((resolve,reject)=>{this.success_=false;this.resolve_=resolve;this.reject_=reject;if(password!=null){this.input_.value=password;this.input_.invalid=true}else{this.input_.invalid=false}this.showModal_(filename);this.input_.inputElement.select()}))}finally{mutexUnlock()}}showModal_(filename){this.dialog_.querySelector("#name").innerText=filename;this.dialog_.showModal()}cancel_(){this.dialog_.close()}unlock_(){this.dialog_.close();this.success_=true}onClose_(){if(this.success_){this.resolve_(this.input_.value)}else{this.reject_(USER_CANCELLED)}this.input_.value=""}}customElements.define(TAG_NAME,XfPasswordDialog);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BulkPinStage=chrome.fileManagerPrivate.BulkPinStage;let XfBulkPinningDialog=class XfBulkPinningDialog extends XfBase{constructor(){super(...arguments);this.store_=getStore();this.stage_="";this.requiredBytes_=0;this.freeBytes_=0;this.listedFiles_=0;this.updateListedFilesDebounced_=new RateLimiter((()=>this.updateListedFiles_()),5e3)}updateListedFiles_(){if(this.listedFiles_===0){this.$listingFilesText_.innerText=str("BULK_PINNING_LISTING")}else if(this.listedFiles_===1){this.$listingFilesText_.innerText=str("BULK_PINNING_LISTING_WITH_SINGLE_ITEM")}else{this.$listingFilesText_.innerText=strf("BULK_PINNING_LISTING_WITH_MULTIPLE_ITEMS",this.listedFiles_.toLocaleString(util.getCurrentLocaleOrDefault()))}}onStateChanged(state){if(state.preferences?.driveFsBulkPinningEnabled){this.onCancel();return}const bpp=state.bulkPinning;if(!bpp){return}if(this.freeBytes_!==bpp.freeSpaceBytes||this.requiredBytes_!==bpp.requiredSpaceBytes){this.freeBytes_=bpp.freeSpaceBytes;this.requiredBytes_=bpp.requiredSpaceBytes;this.$readyFooter_.innerText=strf("BULK_PINNING_SPACE",util.bytesToString(this.requiredBytes_),util.bytesToString(this.freeBytes_))}if(bpp.stage===BulkPinStage.LISTING_FILES&&bpp.listedFiles>0&&bpp.listedFiles!==this.listedFiles_){this.listedFiles_=bpp.listedFiles;this.updateListedFilesDebounced_.run()}if(bpp.stage===this.stage_){return}this.stage_=bpp.stage;switch(bpp.stage){case BulkPinStage.PAUSED_OFFLINE:this.state=1;break;case BulkPinStage.PAUSED_BATTERY_SAVER:this.state=2;break;case BulkPinStage.GETTING_FREE_SPACE:case BulkPinStage.LISTING_FILES:this.state=3;break;case BulkPinStage.SUCCESS:this.state=6;break;case BulkPinStage.SYNCING:this.$dialog_.close();break;case BulkPinStage.NOT_ENOUGH_SPACE:this.state=5;break;default:console.warn(`Cannot calculate bulk-pinning space requirements: ${this.stage_}`);this.state=4;break}}set state(s){this.$offlineFooter_.style.display=s===1?"initial":"none";this.$batterySaverFooter_.style.display=s===2?"initial":"none";this.$listingFooter_.style.display=s===3?"flex":"none";this.$errorFooter_.style.display=s===4?"initial":"none";this.$notEnoughSpaceFooter_.style.display=s===5?"initial":"none";this.$readyFooter_.style.display=s===6?"initial":"none";this.$button_.disabled=s!==6}get is_open(){return this.$dialog_.open}async show(){this.stage_=BulkPinStage.LISTING_FILES;this.state=3;this.$dialog_.showModal();this.store_.subscribe(this);try{await calculateBulkPinRequiredSpace()}catch(e){console.error("Cannot calculate required space for bulk-pinning:",e);this.state=4}}onClose(_){this.state=0;this.listedFiles_=0;this.updateListedFilesDebounced_.runImmediately();this.store_.unsubscribe(this)}onContinue(){this.$dialog_.close();chrome.fileManagerPrivate.setPreferences({driveFsBulkPinningEnabled:true})}onCancel(){this.$dialog_.cancel()}onLearnMore(e){e.preventDefault();util.visitURL("https://support.google.com/chromebook?p=my_drive_cbx")}onViewStorage(e){e.preventDefault();chrome.fileManagerPrivate.openSettingsSubpage("storage")}render(){return html`
      <cr-dialog @close="${this.onClose}">
        <div slot="title">
          <xf-icon type="drive_bulk_pinning" size="medium"></xf-icon>
          <div class="title" style="flex: 1 0 0">
            ${str("BULK_PINNING_TITLE")}
          </div>
        </div>
        <div slot="body">
          <div class="description">
            ${str("BULK_PINNING_EXPLANATION")}
            <a id="learn-more-link" href="_blank" @click="${this.onLearnMore}">
              ${str("LEARN_MORE_LABEL")}
            </a>
          </div>
          <ul>
            <li>
              <xf-icon type="my_files"></xf-icon>
              ${str("BULK_PINNING_POINT_1")}
            </li>
          </ul>
          <div id="offline-footer" class="offline-footer">
            ${str("BULK_PINNING_OFFLINE")}
          </div>
          <div id="battery-saver-footer" class="battery-saver-footer">
            ${str("BULK_PINNING_BATTERY_SAVER")}
          </div>
          <div id="listing-footer" class="normal-footer">
            <files-spinner></files-spinner>
            <span id="listing-files-text">
              ${str("BULK_PINNING_LISTING")}
            </span>
          </div>
          <div id="error-footer" class="error-footer">
            ${str("BULK_PINNING_ERROR")}
          </div>
          <div id="not-enough-space-footer" class="error-footer">
            ${str("BULK_PINNING_NOT_ENOUGH_SPACE")}
            <a id="view-storage-link" href="_blank"
              @click="${this.onViewStorage}">
              ${str("BULK_PINNING_VIEW_STORAGE")}
            </a>
          </div>
          <div id="ready-footer" class="normal-footer"></div>
        </div>
        <div slot="button-container">
          <cr-button id="cancel-button" class="cancel-button"
            @click="${this.onCancel}">
            ${str("CANCEL_LABEL")}
          </cr-button>
          <cr-button id="continue-button" class="continue-button action-button"
            @click="${this.onContinue}">
            ${str("BULK_PINNING_TURN_ON")}
          </cr-button>
        </div>
      </cr-dialog>
    `}static get styles(){return css`
      cr-dialog {
        --cr-dialog-background-color: var(--cros-sys-dialog_container);
        --cr-dialog-body-padding-horizontal: 0;
        --cr-dialog-button-container-padding-bottom: 0;
        --cr-dialog-button-container-padding-horizontal: 0;
        --cr-dialog-title-slot-padding-bottom: 16px;
        --cr-dialog-title-slot-padding-end: 0;
        --cr-dialog-title-slot-padding-start: 0;
        --cr-dialog-title-slot-padding-top: 0;
        --cr-primary-text-color: var(--cros-sys-on_surface);
        --cr-secondary-text-color: var(--cros-sys-on_surface_variant);
      }

      cr-dialog::part(dialog) {
        border-radius: 20px;
      }

      cr-dialog::part(dialog)::backdrop {
        background-color: var(--cros-sys-scrim);
      }

      cr-dialog::part(wrapper) {
        padding: 32px;
        padding-bottom: 28px;
      }

      cr-dialog [slot="body"] {
        display: flex;
        flex-direction: column;
        font: var(--cros-body-1-font);
      }

      cr-dialog [slot="button-container"] {
        padding-top: 32px;
      }

      cr-dialog [slot="title"] {
        align-items: center;
        display: flex;
        font: var(--cros-display-7-font);
      }

      cr-dialog [slot="title"] xf-icon {
        --xf-icon-color: var(--cros-sys-primary);
        margin-inline-end: 16px;
      }

      .description {
        margin-bottom: 24px;
      }

      ul {
        border-radius: 12px 12px 0 0;
        border: 1px solid var(--cros-separator-color);
        border-bottom-style: none;
        margin: 0;
        padding: 20px 18px;
      }

      .normal-footer {
        align-items: center;
        background-color: var(--cros-sys-app_base_shaded);
        border: 1px solid var(--cros-separator-color);
        border-radius: 0 0 12px 12px;
        border-top-style: none;
        color: var(--cros-sys-on_surface);
        padding: 16px;
      }

      .error-footer {
        background-color: var(--cros-sys-error_container);
        border: 1px solid var(--cros-separator-color);
        border-radius: 0 0 12px 12px;
        border-top-style: none;
        color: var(--cros-sys-on_error_container);
        padding: 16px;
      }

      .offline-footer, .battery-saver-footer {
        background-color: var(--cros-sys-surface_variant);
        border: 1px solid var(--cros-separator-color);
        border-radius: 0 0 12px 12px;
        border-top-style: none;
        color: var(--cros-sys-on_surface_variant);
        padding: 16px;
      }

      a {
        color: var(--cros-sys-primary);
      }

      .error-footer > a {
        color: inherit;
      }

      files-spinner {
        transform: scale(0.666);
        margin: 0;
        margin-inline-end: 10px;
      }

      li {
        color: var(--cros-sys-on_surface);
        display: flex;
      }

      li + li {
        margin-top: 16px;
      }

      li > xf-icon {
        --xf-icon-color: var(--cros-sys-secondary);
        margin-inline-end: 10px;
      }

      cr-button {
        --active-bg: transparent;
        --active-shadow: none;
        --active-shadow-action: none;
        --bg-action: var(--cros-sys-primary);
        --cr-button-height: 36px;
        --disabled-bg-action: var(--cros-sys-disabled_container);
        --disabled-bg: var(--cros-sys-disabled_container);
        --disabled-text-color: var(--cros-sys-disabled);
        --hover-bg-action: var(--cros-sys-primary);
        --hover-bg-color: var(--cros-sys-primary_container);
        --ink-color: var(--cros-sys-ripple_primary);
        --ripple-opacity-action: 1;
        --ripple-opacity: 1;
        --text-color-action: var(--cros-sys-on_primary);
        --text-color: var(--cros-sys-on_primary_container);
        border: none;
        border-radius: 18px;
        box-shadow: none;
        font: var(--cros-button-2-font);
        position: relative;
      }

      cr-button.cancel-button {
        background-color: var(--cros-sys-primary_container);
      }

      cr-button.cancel-button:hover::part(hoverBackground) {
        background-color: var(--cros-sys-hover_on_subtle);
        display: block;
      }

      cr-button.action-button:hover::part(hoverBackground) {
        background-color: var(--cros-sys-hover_on_prominent);
        display: block;
      }

      :host-context(.focus-outline-visible) cr-button:focus {
        outline: 2px solid var(--cros-sys-focus_ring);
        outline-offset: 2px;
      }
    `}};__decorate([query("cr-dialog")],XfBulkPinningDialog.prototype,"$dialog_",void 0);__decorate([query("#continue-button")],XfBulkPinningDialog.prototype,"$button_",void 0);__decorate([query("#offline-footer")],XfBulkPinningDialog.prototype,"$offlineFooter_",void 0);__decorate([query("#battery-saver-footer")],XfBulkPinningDialog.prototype,"$batterySaverFooter_",void 0);__decorate([query("#listing-footer")],XfBulkPinningDialog.prototype,"$listingFooter_",void 0);__decorate([query("#error-footer")],XfBulkPinningDialog.prototype,"$errorFooter_",void 0);__decorate([query("#not-enough-space-footer")],XfBulkPinningDialog.prototype,"$notEnoughSpaceFooter_",void 0);__decorate([query("#ready-footer")],XfBulkPinningDialog.prototype,"$readyFooter_",void 0);__decorate([query("#listing-files-text")],XfBulkPinningDialog.prototype,"$listingFilesText_",void 0);XfBulkPinningDialog=__decorate([customElement("xf-bulk-pinning-dialog")],XfBulkPinningDialog);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Elevation extends LitElement{connectedCallback(){super.connectedCallback();this.setAttribute("aria-hidden","true")}render(){return html`<span class="shadow"></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const styles$4=css`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let MdElevation=class MdElevation extends Elevation{};MdElevation.styles=[styles$4];MdElevation=__decorate$1([customElement("md-elevation")],MdElevation);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const internals=Symbol("internals");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function setupFormSubmitter(ctor){if(isServer){return}ctor.addInitializer((instance=>{const submitter=instance;submitter.addEventListener("click",(async event=>{const{type:type,[internals]:elementInternals}=submitter;const{form:form}=elementInternals;if(!form||type==="button"){return}await new Promise((resolve=>{resolve()}));if(event.defaultPrevented){return}if(type==="reset"){form.reset();return}form.addEventListener("submit",(submitEvent=>{Object.defineProperty(submitEvent,"submitter",{configurable:true,enumerable:true,get:()=>submitter})}),{capture:true,once:true});elementInternals.setFormValue(submitter.value);form.requestSubmit()}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var _a;let Button$1=class Button extends LitElement{get name(){return this.getAttribute("name")??""}set name(name){this.setAttribute("name",name)}get form(){return this[internals].form}constructor(){super();this.disabled=false;this.href="";this.target="";this.trailingIcon=false;this.hasIcon=false;this.type="submit";this.value="";this[_a]=this.attachInternals();this.handleActivationClick=event=>{if(!isActivationClick(event)||!this.buttonElement){return}this.focus();dispatchActivationClick(this.buttonElement)};if(!isServer){this.addEventListener("click",this.handleActivationClick)}}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const isDisabled=this.disabled&&!this.href;const button=this.href?literal`a`:literal`button`;const{ariaLabel:ariaLabel,ariaHasPopup:ariaHasPopup,ariaExpanded:ariaExpanded}=this;return staticHtml`
      <${button}
        class="button ${classMap(this.getRenderClasses())}"
        ?disabled=${isDisabled}
        aria-label="${ariaLabel||nothing}"
        aria-haspopup="${ariaHasPopup||nothing}"
        aria-expanded="${ariaExpanded||nothing}"
        href=${this.href||nothing}
        target=${this.target||nothing}
      >${this.renderContent()}</${button}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){const isDisabled=this.disabled&&!this.href;const icon=html`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return html`
      ${this.renderElevation?.()}
      ${this.renderOutline?.()}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${isDisabled}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?nothing:icon}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?icon:nothing}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};_a=internals;(()=>{requestUpdateOnAriaChange(Button$1);setupFormSubmitter(Button$1)})();Button$1.formAssociated=true;Button$1.shadowRootOptions={mode:"open",delegatesFocus:true};__decorate$1([property({type:Boolean,reflect:true})],Button$1.prototype,"disabled",void 0);__decorate$1([property()],Button$1.prototype,"href",void 0);__decorate$1([property()],Button$1.prototype,"target",void 0);__decorate$1([property({type:Boolean,attribute:"trailing-icon"})],Button$1.prototype,"trailingIcon",void 0);__decorate$1([property({type:Boolean,attribute:"has-icon"})],Button$1.prototype,"hasIcon",void 0);__decorate$1([property()],Button$1.prototype,"type",void 0);__decorate$1([property()],Button$1.prototype,"value",void 0);__decorate$1([query(".button")],Button$1.prototype,"buttonElement",void 0);__decorate$1([queryAssignedElements({slot:"icon",flatten:true})],Button$1.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class FilledButton extends Button$1{renderElevation(){return html`<md-elevation></md-elevation>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const styles$3=css`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */;const styles$2=css`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */;const styles$1=css`:host{display:inline-flex;height:var(--_container-height);outline:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let MdFilledButton=class MdFilledButton extends FilledButton{};MdFilledButton.styles=[styles$1,styles$2,styles$3];MdFilledButton=__decorate$1([customElement("md-filled-button")],MdFilledButton);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class TextButton extends Button$1{}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const styles=css`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let MdTextButton=class MdTextButton extends TextButton{};MdTextButton.styles=[styles$1,styles];MdTextButton=__decorate$1([customElement("md-text-button")],MdTextButton);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const LABEL_PADDING_START_END=css`16px`;const ICON_PADDING_START_END=css`12px`;const ICON_GAP=css`8px`;const CONTAINER_HEIGHT=css`36px`;const ICON_SIZE=css`20px`;const MIN_WIDTH=css`64px`;class Button extends LitElement{static{this.shadowRootOptions={mode:"open",delegatesFocus:true}}static{this.styles=css`
    :host {
      display: inline-block;
      --cros-button-max-width_ : var(--cros-button-max-width,200px);
      width: fit-content;
    }

    ::slotted(*) {
      display: inline-flex;
      block-size: ${ICON_SIZE};
      inline-size: ${ICON_SIZE};
    }

    .content-container {
      align-items: center;
      display: flex;
      gap: ${ICON_GAP};
    }

    md-filled-button:has(.content-container.has-leading-icon)  {
      --md-filled-button-leading-space: ${ICON_PADDING_START_END};
    }

    md-filled-button:has(.content-container.has-trailing-icon)  {
      --md-filled-button-trailing-space: ${ICON_PADDING_START_END};
    }

    md-text-button:has(.content-container.has-leading-icon)  {
      --md-text-button-leading-space: ${ICON_PADDING_START_END};
    }

    md-text-button:has(.content-container.has-trailing-icon)  {
      --md-text-button-trailing-space: ${ICON_PADDING_START_END};
    }

    md-filled-button {
      max-width: var(--cros-button-max-width_);
      min-width: ${MIN_WIDTH};
      --md-filled-button-container-height: ${CONTAINER_HEIGHT};
      --md-filled-button-disabled-container-color: var(--cros-sys-disabled_container);
      --md-filled-button-disabled-container-opacity: 100%;
      --md-filled-button-disabled-label-text-color: var(--cros-sys-disabled);
      --md-filled-button-disabled-label-text-opacity: 100%;
      --md-filled-button-focus-state-layer-opacity: 100%;
      --md-filled-button-hover-container-elevation: 0;
      --md-filled-button-hover-state-layer-opacity: 100%;
      --md-filled-button-label-text-font: var(--cros-button-2-font-family);
      --md-filled-button-label-text-size: var(--cros-button-2-font-size);
      --md-filled-button-label-text-line-height: var(--cros-button-2-line-height);
      --md-filled-button-label-text-weight: var(--cros-button-2-font-weight);
      --md-filled-button-leading-space: ${LABEL_PADDING_START_END};
      --md-filled-button-pressed-state-layer-opacity: 100%;
      --md-filled-button-trailing-space: ${LABEL_PADDING_START_END};
      --md-focus-ring-duration: 0s;
      --md-focus-ring-width: 2px;
      --md-sys-color-secondary: var(--cros-sys-focus_ring);
      width: 100%;
    }

    :host([button-style="primary"]) md-filled-button {
      --md-sys-color-primary: var(--cros-sys-primary);
      --md-sys-color-on-primary: var(--cros-sys-on_primary);
      --md-filled-button-hover-state-layer-color: var(--cros-sys-hover_on_prominent);
      --md-filled-button-pressed-state-layer-color: var(--cros-sys-ripple_primary);
    }

    :host([button-style="secondary"]) md-filled-button {
      --md-filled-button-hover-state-layer-color: var(--cros-sys-hover_on_subtle);
      --md-filled-button-pressed-state-layer-color: var(--cros-sys-ripple_primary);
      --md-sys-color-primary: var(--cros-sys-primary_container);
      --md-sys-color-on-primary: var(--cros-sys-on_primary_container);
    }

    md-text-button {
      max-width: var(--cros-button-max-width_);
      min-width: ${MIN_WIDTH};
      --md-sys-color-primary: var(--cros-sys-primary);
      --md-sys-color-secondary: var(--cros-sys-focus_ring);
      --md-focus-ring-duration: 0s;
      --md-focus-ring-width: 2px;
      --md-text-button-container-height: ${CONTAINER_HEIGHT};
      --md-text-button-disabled-label-text-color: var(--cros-sys-disabled);
      --md-text-button-disabled-label-text-opacity: 100%;
      --md-text-button-focus-state-layer-opacity: 100%;
      --md-text-button-hover-state-layer-color: var(--cros-sys-hover_on_subtle);
      --md-text-button-hover-state-layer-opacity: 100%;
      --md-text-button-label-text-font: var(--cros-button-2-font-family);
      --md-text-button-label-text-size: var(--cros-button-2-font-size);
      --md-text-button-label-text-line-height: var(--cros-button-2-line-height);
      --md-text-button-label-text-weight: var(--cros-button-2-font-weight);
      --md-text-button-leading-space: ${LABEL_PADDING_START_END};
      --md-text-button-pressed-state-layer-color: var(--cros-sys-ripple_neutral_on_subtle);
      --md-text-button-pressed-state-layer-opacity: 100%;
      --md-text-button-trailing-space: ${LABEL_PADDING_START_END};
      width: 100%;
    }

    ::slotted(ea-icon) {
      --ea-icon-size: 20px;
    }
  `}static{this.properties={ariaLabel:{type:String,reflect:true,attribute:"aria-label"},label:{type:String,reflect:true},disabled:{type:Boolean,reflect:true},buttonStyle:{type:String,reflect:true,attribute:"button-style"}}}constructor(){super();this.buttonStyle="primary";this.ariaLabel="";this.ariaHasPopup="false";this.label="";this.disabled=false}render(){const ariaHasPopup=this.ariaHasPopup??"false";if(this.buttonStyle==="floating"){return html`
        <md-text-button
            aria-label=${this.ariaLabel||""}
            aria-haspopup=${ariaHasPopup}
            ?disabled=${this.disabled}>
          ${this.renderButtonContent()}
        </md-text-button>
        `}return html`
        <md-filled-button
            aria-label=${this.ariaLabel||""}
            aria-haspopup=${ariaHasPopup}
            ?disabled=${this.disabled}>
          ${this.renderButtonContent()}
        </md-filled-button>
        `}renderButtonContent(){return html`
      <div class="content-container">
        <slot name="leading-icon" @slotchange=${this.onSlotChange}></slot>
        ${this.label}
        <slot name="trailing-icon" @slotchange=${this.onSlotChange}></slot>
      </div>
    `}hasSlottedIcon(icon){return!!this.querySelector(`*[slot='${icon}-icon']`)}onSlotChange(){const container=this.shadowRoot.querySelector(".content-container");container.classList.toggle("has-leading-icon",this.hasSlottedIcon("leading"));container.classList.toggle("has-trailing-icon",this.hasSlottedIcon("trailing"))}}customElements.define("cros-button",Button);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const htmlTemplate$3=html$1`<!--_html_template_start_-->

<style>
  cr-icon-button,
  cr-button {
    margin-inline: 0;
  }

  cr-button {
    --active-bg: none;
    --hover-bg-color: var(--cros-sys-hover_on_subtle);
    --ink-color: var(--cros-sys-ripple_neutral_on_subtle);
    --paper-ripple-opacity: 100%;
    --text-color: var(--cros-sys-primary);
    border: none;
    border-radius: 18px;
    box-shadow: none;
    font: var(--cros-button-2-font);
    height: 36px;
    padding-inline: 16px;
  }

  :host-context(.focus-outline-visible) cr-button:focus {
    outline: 2px solid var(--cros-sys-focus_ring);
    outline-offset: 2px;
  }

  cr-icon-button {
    --cr-active-bg-color: var(--cros-sys-pressed_on_subtle);
    --cr-focus-outline-color: var(--cros-sys-focus_ring);
    --cr-hover-background-color: var(--cros-sys-hover_on_subtle);
    --cr-icon-button-fill-color: var(--cros-sys-on_surface);
    border-radius: 12px;
  }

  @keyframes setcollapse {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes setexpand {
    from {
      transform: rotate(-180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  :host([data-category='expand']) {
      animation: setexpand 200ms forwards;
  }

  :host([data-category='collapse']) {
      animation: setcollapse 200ms forwards;
  }

  :host {
    flex-shrink: 0;
    position: relative;
  }

  :host(:not([data-category='dismiss']):not([data-category='extra-button']):not([data-category='cancel'])) {
    width: 36px;
  }

  #dismiss,
  #extra-button,
  #cancel,
  #dismiss-jelly,
  #extra-button-jelly,
  #cancel-jelly,
  #icon {
    display: none;
  }

  :host([data-category='dismiss']) #dismiss,
  :host([data-category='dismiss']) #dismiss-jelly,
  :host([data-category='extra-button']) #extra-button,
  :host([data-category='extra-button']) #extra-button-jelly,
  :host([data-category='cancel']) #cancel,
  :host([data-category='cancel']) #cancel-jelly,
  :host([data-category='collapse']) #icon,
  :host([data-category='expand']) #icon {
    display: inline-block;
  }
</style>
<xf-jellybean>
  <cr-button slot="old" id='dismiss'>$i18n{DRIVE_WELCOME_DISMISS}</cr-button>
  <cr-button slot="old" id='extra-button'></cr-button>
  <cr-button slot="old" id='cancel'>$i18n{CANCEL_LABEL}</cr-button>

  <cros-button slot="jelly" id='dismiss-jelly' button-style="floating" label="$i18n{DRIVE_WELCOME_DISMISS}"></cros-button>
  <cros-button slot="jelly" id='extra-button-jelly' button-style="floating"></cros-button>
  <cros-button slot="jelly" id='cancel-jelly' button-style="floating" label="$i18n{CANCEL_LABEL}"></cros-button>
</xf-jellybean>
<cr-icon-button id='icon'></cr-icon-button>
<!--_html_template_end_-->`;class PanelButton extends HTMLElement{constructor(){super();this.createElement_()}createElement_(){const fragment=htmlTemplate$3.content.cloneNode(true);this.attachShadow({mode:"open"}).appendChild(fragment)}static get observedAttributes(){return["data-category"]}attributeChangedCallback(name,oldValue,newValue){if(oldValue===newValue){return}const iconButton=this.shadowRoot?.querySelector("cr-icon-button")??null;if(name==="data-category"){switch(newValue){case"collapse":case"expand":iconButton?.setAttribute("iron-icon","cr:expand-less");break}}}setExtraButtonText(text){if(!this.shadowRoot){return}if(util.isCrosComponentsEnabled()){const extraButton=queryRequiredElement("#extra-button-jelly",this.shadowRoot);extraButton.label=text}else{const extraButton=queryRequiredElement("#extra-button",this.shadowRoot);extraButton.innerText=text}}}window.customElements.define("xf-button",PanelButton);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const htmlTemplate$2=html$1`<!--_html_template_start_-->
<style>
  .progress {
    height: 36px;
    width: 36px;
  }

  :host-context([detailed-panel][data-category='expanded'])
  .progress {
    height: 32px;
    width: 32px;
   }

  :host-context([detailed-panel][data-category='collapsed'])
  .progress {
    height: 28px;
    width: 28px;
  }

  .bottom {
    fill: none;
    stroke: var(--cros-sys-highlight_shape);
  }
  .top {
    fill: none;
    stroke: var(--cros-sys-primary);
    stroke-linecap: round;
  }
  text {
    fill: var(--cros-sys-primary);
    font: var(--cros-button-1-font);
  }
  .errormark {
    fill: var(--cros-sys-error);
  }
</style>
<div class='progress'>
  <svg xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 36 36'>
    <g id='circles' stroke-width='3'>
      <circle class='bottom' cx='18' cy='18' r='10'></circle>
      <circle class='top' transform='rotate(-90 18 18)'
      cx='18' cy='18' r='10' stroke-dasharray='0 1'></circle>
    </g>
    <text class='label' x='18' y='18' text-anchor='middle'
      alignment-baseline='central'></text>
    <circle class='errormark' visibility='hidden'
      cx='25.5' cy='10.5' r='4' stroke='none'></circle>
  </svg>
</div>
<!--_html_template_end_-->`;class CircularProgress extends HTMLElement{constructor(){super();const fragment=htmlTemplate$2.content.cloneNode(true);this.attachShadow({mode:"open"}).appendChild(fragment);this.progress_=0;if(!this.shadowRoot){return}this.indicator_=this.shadowRoot.querySelector(".top");this.errormark_=this.shadowRoot.querySelector(".errormark");this.label_=this.shadowRoot.querySelector(".label");this.maxProgress_=100;this.fullCircle_=63}static get observedAttributes(){return["errormark","label","progress","radius"]}setProgress(progress){progress=Math.min(Math.max(progress,0),this.maxProgress_);const value=progress/this.maxProgress_*this.fullCircle_;this.indicator_?.setAttribute("stroke-dasharray",value+" "+this.fullCircle_);return progress}setErrorPosition_(radius,strokeWidth){const center=18;const x=center+radius+strokeWidth/2-4;const y=center-radius-strokeWidth/2+4;this.errormark_.setAttribute("cx",x.toString());this.errormark_.setAttribute("cy",y.toString())}attributeChangedCallback(name,oldValue,newValue){if(oldValue===newValue){return}switch(name){case"errormark":this.errormark_.setAttribute("visibility",newValue||"");break;case"label":this.label_.textContent=newValue;break;case"radius":if(!newValue){break}const radius=Number(newValue);if(radius<0||radius>16.5){return}let strokeWidth=3;if(radius>10){const circles=this.shadowRoot?.querySelector("#circles");circles?.setAttribute("stroke-width","4");strokeWidth=4}this.setErrorPosition_(radius,strokeWidth);this.fullCircle_=Math.PI*2*radius;const bottom=this.shadowRoot?.querySelector(".bottom");bottom?.setAttribute("r",radius.toString());this.indicator_.setAttribute("r",radius.toString());this.setProgress(this.progress_);break;case"progress":const progress=Number(newValue);this.progress_=this.setProgress(progress);break}}get errorMarkerVisibility(){return this.errormark_.getAttribute("visibility")||""}set errorMarkerVisibility(visibility){this.setAttribute("errormark",visibility)}get progress(){return this.progress_.toString()}set progress(progress){this.setAttribute("progress",progress)}set label(label){this.setAttribute("label",label)}}window.customElements.define("xf-circular-progress",CircularProgress);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const htmlTemplate$1=html$1`<!--_html_template_start_-->
<style>
  .xf-panel-item {
      align-items: center;
      background-color: var(--cros-sys-base_elevated);
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      height: auto;
      padding: 14px 0px;
      width: 504px;
  }

  xf-button {
    height: 36px;
  }

  .xf-panel-text {
      color: var(--cros-sys-on_surface);
      flex: 1;
      font: var(--cros-body-2-font);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .xf-panel-label-text {
      outline: none;
  }

  :host([panel-type='3']) .xf-panel-label-text {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal;
  }

  .xf-panel-secondary-text {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal;
  }

  :host([panel-type='3']) .xf-linebreaker {
      display: none;
  }

  .xf-panel-label-text {
      color: var(--cros-sys-on_surface);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .xf-panel-secondary-text {
    color: var(--cros-sys-on_surface_variant);
  }

  :host(:not([detailed-panel])) .xf-padder-4 {
      width: 4px;
  }

  :host(:not([detailed-panel])) .xf-padder-16 {
      width: 16px;
  }

  :host(:not([detailed-panel])) .xf-grow-padder {
      width: 24px;
  }

  xf-circular-progress {
      padding: 16px;
  }

  :host(:not([detailed-summary])) iron-icon {
      height: 36px;
      padding: 16px;
      width: 36px;
  }

  :host([panel-type='0']) .xf-panel-item {
      height: var(--progress-height);
      padding-bottom: var(--progress-padding-bottom);
      padding-top: var(--progress-padding-top);
  }

  :host([detailed-panel]:not([detailed-summary])) .xf-panel-text {
      margin-inline-end: 24px;
      margin-inline-start: 24px;
  }

  :host([detailed-panel][panel-type='2']) .xf-panel-secondary-text {
    color: var(--cros-sys-positive);
  }

  :host([detailed-panel][panel-type='2'][fade-secondary-text])
      .xf-panel-secondary-text {
    color: var(--cros-sys-on_surface_variant);
  }


  :host([detailed-panel]:not([detailed-summary])) xf-button {
    margin-inline-end: 8px;
  }

  :host([detailed-panel]:not([detailed-summary])) xf-button:last-of-type {
    margin-inline-end: 12px;
  }

  :host([detailed-panel]:not([detailed-summary])) xf-button[data-category='cancel'] {
    /* This is to make sure the cancel icon button is aligned with the collapse button. */
    margin-inline-end: 16px;
  }

  :host([detailed-panel]:not([detailed-summary])) #indicator {
      display: none;
  }

  :host([detailed-summary][data-category='collapsed'])
  .xf-panel-item {
      width: 236px;
  }

  :host([detailed-summary]) .xf-panel-text {
      align-items: center;
      display: flex;
      font: var(--cros-button-2-font);
      height: 48px;
      max-width: unset;
      width: 100%;
  }

  :host([detailed-summary]) #indicator {
      margin-inline-start: 22px;
      padding: 0;
  }

  :host([detailed-summary]) #indicator[icon='files36:success'] {
    --iron-icon-fill-color: var(--cros-sys-positive);
  }

  :host([detailed-summary]) #indicator[icon='files36:failure'] {
    --iron-icon-stroke-color: var(--cros-sys-error);
  }

  :host([detailed-summary]) #indicator[icon='files36:warning'] {
    --iron-icon-fill-color: var(--cros-sys-warning);
  }

  #indicator {
    height: 32px;
    margin-inline-end: 18px;
    width: 32px;
  }

  :host([detailed-summary]) #primary-action {
      align-items: center;
      display: flex;
      height: 48px;
      justify-content: center;
      margin-inline-end: 10px;
      margin-inline-start: auto;
      width: 48px;
  }

  :host([detailed-panel]) .xf-padder-4 {
      display: none;
  }

  :host([detailed-panel]) .xf-padder-16 {
      display: none;
  }

  :host([detailed-panel]) .xf-grow-padder {
      display: none;
  }
</style>
<div class='xf-panel-item'>
    <xf-circular-progress id='indicator'>
    </xf-circular-progress>
    <div class='xf-panel-text' role='alert' tabindex='0'>
        <span class='xf-panel-label-text'>
        </span>
        <br class='xf-linebreaker'>
    </div>
    <div class='xf-grow-padder'></div>
    <xf-button id='secondary-action' tabindex='-1'>
    </xf-button>
    <div id='button-gap' class='xf-padder-4'></div>
    <xf-button id='primary-action' tabindex='-1'>
    </xf-button>
    <div class='xf-padder-16'></div>
</div>
<!--_html_template_end_-->`;class PanelItem extends HTMLElement{constructor(){super();const fragment=htmlTemplate$1.content.cloneNode(true);this.attachShadow({mode:"open"}).appendChild(fragment);this.indicator_=this.shadowRoot.querySelector("#indicator");this.panelTypeDefault=-1;this.panelTypeProgress=0;this.panelTypeSummary=1;this.panelTypeDone=2;this.panelTypeError=3;this.panelTypeInfo=4;this.panelTypeFormatProgress=5;this.panelTypeSyncProgress=6;this.panelType_=this.panelTypeDefault;this.onclick=this.onClicked_.bind(this);this.parent=null;this.signal_=console.log;this.userData=null}removePanelElementById_(id){const element=this.shadowRoot.querySelector(id);if(element){element.remove()}return element}setPanelType(type){this.setAttribute("detailed-panel","detailed-panel");if(this.panelType_===type){return}this.removePanelElementById_("#indicator");let element=this.removePanelElementById_("#primary-action");if(element){element.onclick=null}element=this.removePanelElementById_("#secondary-action");if(element){element.onclick=null}this.setAttribute("indicator","empty");const buttonSpacer=this.shadowRoot.querySelector("#button-gap");const textHost=assert$1(this.shadowRoot.querySelector(".xf-panel-text"));textHost.setAttribute("role","alert");const hasExtraButton=!!this.dataset["extraButtonText"];let primaryButton=null;let secondaryButton=null;switch(type){case this.panelTypeProgress:this.setAttribute("indicator","progress");secondaryButton=document.createElement("xf-button");secondaryButton.id="secondary-action";secondaryButton.onclick=assert$1(this.onclick);secondaryButton.dataset.category="cancel";secondaryButton.setAttribute("aria-label",str("CANCEL_LABEL"));buttonSpacer.insertAdjacentElement("afterend",secondaryButton);break;case this.panelTypeSummary:this.setAttribute("indicator","largeprogress");primaryButton=document.createElement("xf-button");primaryButton.id="primary-action";primaryButton.dataset.category="expand";primaryButton.setAttribute("aria-label",str("FEEDBACK_EXPAND_LABEL"));textHost.setAttribute("role","");buttonSpacer.insertAdjacentElement("afterend",primaryButton);break;case this.panelTypeDone:this.setAttribute("indicator","status");this.setAttribute("status","success");secondaryButton=document.createElement("xf-button");secondaryButton.id=hasExtraButton?"secondary-action":"primary-action";secondaryButton.onclick=assert$1(this.onclick);secondaryButton.dataset.category="dismiss";buttonSpacer.insertAdjacentElement("afterend",secondaryButton);if(hasExtraButton){primaryButton=document.createElement("xf-button");primaryButton.id="primary-action";primaryButton.dataset["category"]="extra-button";primaryButton.onclick=assert$1(this.onclick);primaryButton.setExtraButtonText(this.dataset["extraButtonText"]);buttonSpacer.insertAdjacentElement("afterend",primaryButton)}break;case this.panelTypeError:this.setAttribute("indicator","status");this.setAttribute("status","failure");secondaryButton=document.createElement("xf-button");secondaryButton.id=hasExtraButton?"secondary-action":"primary-action";secondaryButton.onclick=assert$1(this.onclick);secondaryButton.dataset.category="dismiss";buttonSpacer.insertAdjacentElement("afterend",secondaryButton);if(hasExtraButton){primaryButton=document.createElement("xf-button");primaryButton.id="primary-action";primaryButton.dataset.category="extra-button";primaryButton.onclick=assert$1(this.onclick);primaryButton.setExtraButtonText(this.dataset["extraButtonText"]);buttonSpacer.insertAdjacentElement("afterend",primaryButton)}break;case this.panelTypeInfo:this.setAttribute("indicator","status");this.setAttribute("status","warning");secondaryButton=document.createElement("xf-button");secondaryButton.id=hasExtraButton?"secondary-action":"primary-action";secondaryButton.onclick=assert$1(this.onclick);secondaryButton.dataset.category="cancel";buttonSpacer.insertAdjacentElement("afterend",secondaryButton);if(hasExtraButton){primaryButton=document.createElement("xf-button");primaryButton.id="primary-action";primaryButton.dataset["category"]="extra-button";primaryButton.onclick=assert$1(this.onclick);primaryButton.setExtraButtonText(this.dataset["extraButtonText"]);buttonSpacer.insertAdjacentElement("afterend",primaryButton)}break;case this.panelTypeFormatProgress:this.setAttribute("indicator","status");this.setAttribute("status","hard-drive");break;case this.panelTypeSyncProgress:this.setAttribute("indicator","progress");break}this.panelType_=type}static get observedAttributes(){return["count","errormark","indicator","panel-type","primary-text","progress","secondary-text","status"]}attributeChangedCallback(name,oldValue,newValue){let indicator=null;let textNode;switch(name){case"count":if(this.indicator_){this.indicator_.setAttribute("label",newValue||"")}break;case"errormark":if(this.indicator_){this.indicator_.setAttribute("errormark",newValue||"")}break;case"indicator":const oldIndicator=this.shadowRoot.querySelector("#indicator");if(oldIndicator){oldIndicator.remove()}switch(newValue){case"progress":case"largeprogress":indicator=document.createElement("xf-circular-progress");if(newValue==="largeprogress"){indicator.setAttribute("radius","14")}else{indicator.setAttribute("radius","10")}break;case"status":indicator=document.createElement("iron-icon");const status=this.getAttribute("status");if(status){indicator.setAttribute("icon",`files36:${status}`)}break}this.indicator_=indicator;if(indicator){const itemRoot=this.shadowRoot.querySelector(".xf-panel-item");indicator.setAttribute("id","indicator");itemRoot.prepend(indicator)}break;case"panel-type":this.setPanelType(Number(newValue));if(this.parent&&this.parent.updateSummaryPanel){this.parent.updateSummaryPanel()}break;case"progress":if(this.indicator_){this.indicator_.progress=Number(newValue);if(this.parent&&this.parent.updateProgress){this.parent.updateProgress()}}break;case"status":if(this.indicator_){this.indicator_.setAttribute("icon",`files36:${newValue}`)}break;case"primary-text":textNode=this.shadowRoot.querySelector(".xf-panel-label-text");if(textNode){textNode.textContent=newValue;this.setAttribute("aria-label",newValue)}break;case"secondary-text":textNode=this.shadowRoot.querySelector(".xf-panel-secondary-text");if(!textNode){const parent=this.shadowRoot.querySelector(".xf-panel-text");if(!parent){return}textNode=document.createElement("span");textNode.setAttribute("class","xf-panel-secondary-text");parent.appendChild(textNode)}if(newValue==""){textNode.remove()}else{textNode.textContent=newValue}break}}connectedCallback(){this.onclick=this.onClicked_.bind(this);let button=this.shadowRoot.querySelector("#primary-action");if(button){button.onclick=this.onclick}button=this.shadowRoot.querySelector("#secondary-action");if(button){button.onclick=this.onclick}}disconnectedCallback(){this.signal_=console.log;let button=this.shadowRoot.querySelector("#primary-action");if(button){button.onclick=null}button=this.shadowRoot.querySelector("#secondary-action");if(button){button.onclick=null}this.onclick=null}onClicked_(event){event.stopImmediatePropagation();event.preventDefault();if(event.target===this){return}const id=assert$1(event.target.dataset.category);this.signal_(id)}set signalCallback(signal){this.signal_=signal||console.log}set errorMarkerVisibility(visibility){this.setAttribute("errormark",visibility)}get errorMarkerVisibility(){if(this.indicator_){return this.indicator_.errorMarkerVisibility}return this.getAttribute("errormark")}set indicator(indicator){this.setAttribute("indicator",indicator)}get indicator(){return this.getAttribute("indicator")}set status(status){this.setAttribute("status",status)}get status(){return this.getAttribute("status")}set progress(progress){this.setAttribute("progress",progress)}get progress(){return this.indicator_.progress||0}set primaryText(text){this.setAttribute("primary-text",text)}get primaryText(){return this.getAttribute("primary-text")}set secondaryText(text){this.setAttribute("secondary-text",text)}get secondaryText(){return this.getAttribute("secondary-text")}set fadeSecondaryText(shouldFade){this.toggleAttribute("fade-secondary-text",shouldFade)}get fadeSecondaryText(){return!!this.getAttribute("fade-secondary-text")}set panelType(type){this.setAttribute("panel-type",type)}get panelType(){return this.panelType_}get primaryButton(){return this.shadowRoot.querySelector("#primary-action")}get secondaryButton(){return this.shadowRoot.querySelector("#secondary-action")}get textDiv(){return this.shadowRoot.querySelector(".xf-panel-text")}set closeButtonAriaLabel(text){const action=this.shadowRoot.querySelector("#secondary-action");if(action&&action.dataset.category==="cancel"){action.setAttribute("aria-label",text)}}}window.customElements.define("xf-panel-item",PanelItem);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const htmlTemplate=html$1`<!--_html_template_start_-->
<style>
  :host {
    max-width: 504px;
    outline: none;
  }
  #container {
    align-items: stretch;
    background-color: var(--cros-sys-base_elevated);
    border-radius: 8px;
    box-shadow: var(--cros-elevation-2-shadow);
    display: flex;
    flex-direction: column;
    max-width: min-content;
    z-index: 100;
  }
  #separator {
    background-color: var(--cros-sys-separator);
    height: 1px;
  }
  /* Limit to 3 visible progress panels before scroll. */
  #panels {
    max-height: calc(192px + 28px);
    overflow-y: auto;
  }
  xf-panel-item:not(:only-child) {
    --progress-height: 64px;
  }
  xf-panel-item:not(:only-child):first-child {
    --progress-padding-top: 14px;
  }
  xf-panel-item:not(:only-child):last-child {
    --progress-padding-bottom: 14px;
  }
  xf-panel-item:only-child {
    --progress-height: 68px;
  }
  @keyframes setcollapse {
    0% {
      max-height: 0;
      max-width: 0;
      opacity: 0;
    }
    75% {
      max-height: calc(192px + 28px);
      opacity: 0;
      width: 504px;
    }
    100% {
      max-height: calc(192px + 28px);
      opacity: 1;
      width: 504px;
    }
  }

  @keyframes setexpand {
    0% {
      max-height: calc(192px + 28px);
      max-width: 504px;
      opacity: 1;
    }
    25% {
      max-height: calc(192px + 28px);
      max-width: 504px;
      opacity: 0;
    }
    100% {
      max-height: 0;
      max-width: 0;
      opacity: 0;
    }
  }
  .expanded {
    animation: setcollapse 200ms forwards;
    width: 504px;
  }
  .collapsed {
    animation: setexpand 200ms forwards;
  }
  .expanding {
    overflow: hidden;
  }
  .expandfinished {
    max-height: calc(192px + 28px);
    opacity: 1;
    overflow-y: auto;
    width: 504px;
  }
  xf-panel-item:not(:only-child) {
    --multi-progress-height: 92px;
  }
</style>
<div id="container">
  <div id="summary"></div>
  <div id="separator" hidden></div>
  <div id="panels"></div>
</div>
<!--_html_template_end_-->`;class DisplayPanel extends HTMLElement{constructor(){super();this.createElement_();this.summary_=this.shadowRoot.querySelector("#summary");this.separator_=this.shadowRoot.querySelector("#separator");this.panels_=this.shadowRoot.querySelector("#panels");this.listener_;this.collapsed_=true;this.items_=[]}createElement_(){const fragment=htmlTemplate.content.cloneNode(true);this.attachShadow({mode:"open"}).appendChild(fragment)}connectedCallback(){this.setAriaHidden_()}static html_(){return`\x3c!--_html_template_start_--\x3e\n    \x3c!--_html_template_end_--\x3e`}panelExpandFinished(event){this.classList.remove("expanding");this.classList.add("expandfinished");this.removeEventListener("animationend",this.listener_)}panelCollapseFinished(event){this.hidden=true;this.setAttribute("aria-hidden","true");this.classList.remove("expanding");this.classList.add("expandfinished");this.removeEventListener("animationend",this.listener_)}setSummaryExpandedState(expandButton){expandButton.setAttribute("data-category","collapse");expandButton.setAttribute("aria-label",str("FEEDBACK_COLLAPSE_LABEL"));expandButton.setAttribute("aria-expanded","true");this.panels_.hidden=false;this.separator_.hidden=false}toggleSummary(event){const panel=event.currentTarget.parent;const summaryPanel=panel.summary_.querySelector("xf-panel-item");const expandButton=summaryPanel.shadowRoot.querySelector("#primary-action");if(panel.collapsed_){panel.collapsed_=false;panel.setSummaryExpandedState(expandButton);panel.panels_.listener_=panel.panelExpandFinished;panel.panels_.addEventListener("animationend",panel.panelExpandFinished);panel.panels_.setAttribute("class","expanded expanding");summaryPanel.setAttribute("data-category","expanded")}else{panel.collapsed_=true;expandButton.setAttribute("data-category","expand");expandButton.setAttribute("aria-label",str("FEEDBACK_EXPAND_LABEL"));expandButton.setAttribute("aria-expanded","false");panel.separator_.hidden=true;panel.panels_.listener_=panel.panelCollapseFinished;panel.panels_.addEventListener("animationend",panel.panelCollapseFinished);panel.panels_.setAttribute("class","collapsed expanding");summaryPanel.setAttribute("data-category","collapsed")}}connectedPanelItems_(){return this.items_.filter((item=>item.isConnected))}updateProgress(){let total=0;if(this.items_.length==0){return}let errors=0;let warnings=0;let progressCount=0;const connectedPanels=this.connectedPanelItems_();for(const panel of connectedPanels){if(panel.panelType===panel.panelTypeProgress||panel.panelType===panel.panelTypeFormatProgress||panel.panelType===panel.panelTypeSyncProgress){total+=Number(panel.progress);progressCount++}else if(panel.panelType===panel.panelTypeError){errors++}else if(panel.panelType===panel.panelTypeInfo){warnings++}}if(progressCount>0){total/=progressCount}const summaryPanel=this.summary_.querySelector("xf-panel-item");if(!summaryPanel){return}if(progressCount>0){if(summaryPanel.indicator!="largeprogress"){summaryPanel.indicator="largeprogress"}summaryPanel.primaryText=util.strf("PERCENT_COMPLETE",total.toFixed(0));summaryPanel.progress=total;summaryPanel.setAttribute("count",progressCount);summaryPanel.errorMarkerVisibility=errors>0?"visible":"hidden";return}if(summaryPanel.indicator!="status"){summaryPanel.indicator="status"}if(errors>0&&warnings>0){summaryPanel.status="failure";summaryPanel.primaryText=util.strf("ERROR_PROGRESS_SUMMARY_PLURAL",errors)+" "+this.generateWarningMessage_(warnings);return}if(errors>0){summaryPanel.status="failure";summaryPanel.primaryText=util.strf("ERROR_PROGRESS_SUMMARY_PLURAL",errors);if(warnings>0){summaryPanel.primaryText+=" "+this.generateWarningMessage_(warnings)}return}if(warnings>0){summaryPanel.status="warning";summaryPanel.primaryText=this.generateWarningMessage_(warnings);return}summaryPanel.status="success";summaryPanel.primaryText=util.strf("PERCENT_COMPLETE",100)}updateSummaryPanel(){const summaryHost=this.shadowRoot.querySelector("#summary");let summaryPanel=summaryHost.querySelector("#summary-panel");if(this.hasAttribute("aria-label")){this.tabIndex=this.items_.length?0:-1}const count=this.connectedPanelItems_().length;if(count<=1&&summaryPanel){const button=summaryPanel.primaryButton;if(button){button.removeEventListener("click",this.toggleSummary)}const textDiv=summaryPanel.textDiv;if(textDiv){textDiv.removeEventListener("click",this.toggleSummary)}summaryPanel.remove();this.panels_.hidden=false;this.separator_.hidden=true;this.panels_.classList.remove("collapsed");return}if(count>1&&!summaryPanel){summaryPanel=document.createElement("xf-panel-item");summaryPanel.setAttribute("panel-type",1);summaryPanel.id="summary-panel";summaryPanel.setAttribute("detailed-summary","");const button=summaryPanel.primaryButton;if(button){button.parent=this;button.addEventListener("click",this.toggleSummary)}const textDiv=summaryPanel.textDiv;if(textDiv){textDiv.parent=this;textDiv.addEventListener("click",this.toggleSummary)}summaryHost.appendChild(summaryPanel);if(this.collapsed_){this.panels_.hidden=true;summaryPanel.setAttribute("data-category","collapsed")}else{this.setSummaryExpandedState(button);this.panels_.classList.add("expandfinished");summaryPanel.setAttribute("data-category","expanded")}}if(summaryPanel){this.updateProgress()}}createPanelItem(id){const panel=document.createElement("xf-panel-item");panel.id=id;panel.parent=this;panel.setAttribute("indicator","progress");this.items_.push(panel);this.setAriaHidden_();this.setAttribute("detailed-panel","detailed-panel");return panel}attachPanelItem(panel){const displayPanel=panel.parent;const index=displayPanel.items_.indexOf(panel);if(index===-1){return}if(panel.isConnected){return}displayPanel.panels_.appendChild(panel);displayPanel.updateSummaryPanel();this.setAriaHidden_()}addPanelItem(id){const panel=this.createPanelItem(id);this.attachPanelItem(panel);return panel}removePanelItem(item){const index=this.items_.indexOf(item);if(index===-1){return}item.remove();this.items_.splice(index,1);this.setAriaHidden_();this.updateSummaryPanel()}setAriaHidden_(){const hasItems=this.connectedPanelItems_().length>0;this.setAttribute("aria-hidden",!hasItems)}findPanelItemById(id){for(const item of this.items_){if(item.getAttribute("id")===id){return item}}return null}removeAllPanelItems(){for(const item of this.items_){item.remove()}this.items_=[];this.setAriaHidden_();this.updateSummaryPanel()}generateWarningMessage_(warnings){if(warnings<=0){console.warn(`generateWarningMessage_ expected warnings > 0, but got ${warnings}.`);return""}return warnings===1?str("WARNING_PROGRESS_SUMMARY_SINGLE"):strf("WARNING_PROGRESS_SUMMARY_PLURAL",warnings)}}window.customElements.define("xf-display-panel",DisplayPanel);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
async function validateEntryName(entry,name,areHiddenFilesVisible,volumeInfo,isRemovableRoot){if(isRemovableRoot){const diskFileSystemType=volumeInfo&&volumeInfo.diskFileSystemType;validateExternalDriveName(name,assert$1(diskFileSystemType))}else{const parentEntry=await getParentEntry(entry);await validateFileName(parentEntry,name,areHiddenFilesVisible)}}function validateExternalDriveName(name,fileSystem){const nameLength=name.length;const lengthLimit=VolumeManagerCommon.FileSystemTypeVolumeNameLengthLimit;if(lengthLimit.hasOwnProperty(fileSystem)&&nameLength>lengthLimit[fileSystem]){throw Error(strf("ERROR_EXTERNAL_DRIVE_LONG_NAME",lengthLimit[fileSystem]))}const validCharRegex=/[a-zA-Z0-9 \!\#\$\%\&\(\)\-\@\^\_\`\{\}\~]/;for(let i=0;i<nameLength;i++){if(!validCharRegex.test(name[i])){throw Error(strf("ERROR_EXTERNAL_DRIVE_INVALID_CHARACTER",name[i]))}}}async function validateFileName(parentEntry,name,areHiddenFilesVisible){const testResult=/[\/\\\<\>\:\?\*\"\|]/.exec(name);if(testResult){throw Error(strf("ERROR_INVALID_CHARACTER",testResult[0]))}if(/^\s*$/i.test(name)){throw Error(str("ERROR_WHITESPACE_NAME"))}if(/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(name)){throw Error(str("ERROR_RESERVED_NAME"))}if(!areHiddenFilesVisible&&/\.crdownload$/i.test(name)){throw Error(str("ERROR_RESERVED_NAME"))}if(!areHiddenFilesVisible&&name[0]=="."){throw Error(str("ERROR_HIDDEN_NAME"))}const isValid=await validatePathNameLength(parentEntry,name);if(!isValid){throw Error(str("ERROR_LONG_NAME"))}}async function renameEntry(entry,newName,volumeInfo,isRemovableRoot){if(isRemovableRoot){chrome.fileManagerPrivate.renameVolume(volumeInfo.volumeId,newName);return entry}return renameFile(entry,newName)}async function renameFile(entry,newName){try{const parent=await getParentEntry(entry);try{await getEntry$1(parent,newName,entry.isFile,{create:false})}catch(error){if(error.name==util.FileError.NOT_FOUND_ERR){return moveEntryTo(entry,parent,newName)}throw error}throw createDOMError(util.FileError.PATH_EXISTS_ERR)}catch(error){throw getRenameErrorMessage(error,entry,newName)}}function getRenameErrorMessage(error,entry,newName){if(error&&(error.name==util.FileError.PATH_EXISTS_ERR||error.name==util.FileError.TYPE_MISMATCH_ERR)){return Error(strf(entry.isFile&&error.name==util.FileError.PATH_EXISTS_ERR||!entry.isFile&&error.name==util.FileError.TYPE_MISMATCH_ERR?"FILE_ALREADY_EXISTS":"DIRECTORY_ALREADY_EXISTS",newName))}return Error(strf("ERROR_RENAMING",entry.name,util.getFileErrorString(error.name)))}function getTemplate$1(){return html$1`<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:568px;min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToastElement extends PolymerElement{constructor(){super(...arguments);this.hideTimeoutId_=null}static get is(){return"cr-toast"}static get template(){return getTemplate$1()}static get properties(){return{duration:{type:Number,value:0},open:{readOnly:true,type:Boolean,value:false,reflectToAttribute:true}}}static get observers(){return["resetAutoHide_(duration, open)"]}resetAutoHide_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout((()=>{this.hide()}),this.duration)}}show(){const shouldResetAutohide=this.open;this.removeAttribute("role");this.removeAttribute("aria-hidden");this._setOpen(true);this.setAttribute("role","alert");if(shouldResetAutohide){this.resetAutoHide_()}}hide(){this.setAttribute("aria-hidden","true");this._setOpen(false)}}customElements.define(CrToastElement.is,CrToastElement);function getTemplate(){return html$1`<!--_html_template_start_-->
<style>.container{--cr-toast-background:var(--cros-sys-base_elevated);--cr-toast-button-color:var(--cros-sys-primary);--cr-toast-text-color:var(--cros-sys-on_surface);border-radius:8px;box-shadow:var(--cros-elevation-2-shadow);font:var(--cros-body-2-font);justify-content:space-between;max-width:336px;min-height:48px;min-width:256px;padding:14px 0}:host-context(:root[dir=ltr]) .container{left:unset;right:0}:host-context(:root[dir=rtl]) .container{left:0;right:unset}.text{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;margin-inline-start:24px;overflow:hidden}.action{--ink-color:var(--cros-sys-ripple_neutral_on_subtle);--paper-ripple-opacity:100%;border-radius:18px;height:36px;margin-inline-end:12px}.action:active{box-shadow:none}:host-context(.focus-outline-visible) .action:focus{--focus-shadow-color:none;outline:2px solid var(--cros-sys-focus_ring)}</style>
<cr-toast class="container" id="container" duration="5000">
  <div class="text" id="text"></div>
  <cr-button class="action" id="action" on-click="onActionClicked_"></cr-button>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class FilesToast extends PolymerElement{constructor(){super(...arguments);this.action_=null;this.queue_=[];this.visible=false}static get is(){return"files-toast"}static get template(){return getTemplate()}static get properties(){return{visible:{type:Boolean,value:false}}}connectedCallback(){super.connectedCallback();this.$.container.ontransitionend=this.onTransitionEnd_.bind(this)}show(text,action){if(this.visible){this.queue_.push({text:text,action:action});return}this.visible=true;this.$.text.innerText=text;this.action_=action||null;if(this.action_){this.$.text.setAttribute("style","margin-inline-end: 0");this.$.action.innerText=this.action_.text;this.$.action.hidden=false}else{this.$.text.removeAttribute("style");this.$.action.innerText="";this.$.action.hidden=true}this.$.container.show()}onActionClicked_(){if(this.action_&&this.action_.callback){this.action_.callback();this.hide()}}onTransitionEnd_(){const hide=!this.$.container.open;if(hide&&this.visible){this.visible=false;if(this.queue_.length>0){const next=this.queue_.shift();setTimeout(this.show.bind(this),0,next.text,next.action)}}}hide(){if(this.visible){this.$.container.hide()}}}customElements.define(FilesToast.is,FilesToast);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:false},useGlobalRtlAttribute:{type:Boolean,value:false}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map((function(n){return this.name+":"+n}),this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},createIcon:function(iconName,targetIsRTL){return this._cloneIcon(iconName,this.rtlMirroring&&targetIsRTL)},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute("dir")==="rtl"}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&window.getComputedStyle(target)["direction"]==="rtl"}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach((function(icon){icons[icon.id]=icon}));return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});export{changeDirectory as $,AsyncQueue as A,isFileSystemFileEntry as B,isFileSystemDirectoryEntry as C,assertInstanceof$1 as D,FileType as E,FakeEntryImpl as F,assertNotReached$1 as G,getDlpMetadata as H,createDOMError as I,getDefaultSearchOptions as J,isEntryInsideDrive as K,SearchLocation as L,constants as M,NativeEventTarget as N,mountGuest as O,ConcurrentQueue as P,dispatchPropertyChange as Q,RateLimiter as R,SearchRecency as S,Aggregator as T,PropStatus as U,VolumeManagerCommon as V,getFileData as W,XfBase as X,getVolume as Y,getMyFiles as Z,__decorate$1 as _,requestUpdateOnAriaChange as a,htmlEscape as a$,clearSearch as a0,updateSearch as a1,getPropertyDescriptor as a2,define as a3,decorate as a4,swallowDoubleClick as a5,PropertyKind as a6,isTreeItem as a7,isTree as a8,handleTreeSlotChange as a9,queryRequiredElement as aA,DialogType as aB,recordBoolean as aC,updateSelection as aD,assertInstanceof as aE,FocusOutlineManager as aF,mouseEnterMaybeShowTooltip as aG,getCrActionMenuTop as aH,SEARCH_RESULTS_KEY as aI,XfCloudPanel as aJ,CloudPanelType as aK,isSearchEmpty as aL,PathComponent as aM,recordValue as aN,getDriveQuotaMetadata as aO,getSizeStats as aP,queryDecoratedElement as aQ,getFileTypeForName as aR,getKeyModifiers as aS,addAndroidApps as aT,EntryList as aU,limitInputWidth as aV,getFocusedTreeItem as aW,validateEntryName as aX,renameEntry as aY,readSubDirectoriesForRenamedEntry as aZ,getDisallowedTransfers as a_,refreshNavigationRoots as aa,NavigationType as ab,isVolumeEntry as ac,vmTypeToIconName as ad,isMyFilesEntry as ae,updateNavigationEntry as af,getVolumeType as ag,readSubDirectories as ah,isEntryInsideMyDrive as ai,isEntryInsideComputers as aj,isGrandRootEntryInDrives as ak,maybeShowTooltip as al,convertEntryToFileData as am,getEntry as an,driveRootEntryListKey as ao,VolumeEntry as ap,isTrashEntry as aq,recordUserAction as ar,getTrustedHTML as as,storage as at,refreshFolderShortcut as au,recordSmallCount as av,getPreferences as aw,addFolderShortcut as ax,removeFolderShortcut as ay,Group as az,redispatchEvent as b,getRootType as b0,isDirectoryTree as b1,grantAccess as b2,validateFileName as b3,getFile as b4,UserCanceledError as b5,getFileTasks as b6,INSTALL_LINUX_PACKAGE_TASK_DESCRIPTOR as b7,annotateTasks as b8,getDefaultTask as b9,toSandboxedURL as bA,updateDirectoryContent as bB,queryRequiredExactlyOne as bC,getBulkPinProgress as bD,updateBulkPinProgress as bE,getEmptyState as bF,getDialogCaller as bG,getDlpBlockedComponents as bH,updatePreferences as bI,getDriveConnectionState as bJ,updateDriveConnectionStatus as bK,updateDeviceConnectionState as bL,trashRootKey as bM,PaperRippleBehavior as bN,validateExternalDriveName as bO,recordTime as ba,parseActionId as bb,isFilesAppId as bc,LEGACY_FILES_EXTENSION_ID as bd,executeTask as be,USER_CANCELLED as bf,getDirectory as bg,updateMetadata as bh,TaskHistory as bi,getFilesData as bj,fetchFileTasks as bk,getMimeType as bl,recordDirectoryListLoadWithTolerance as bm,waitForState as bn,isDirectoryTreeItem as bo,isModal as bp,getHoldingSpaceState as bq,getDlpRestrictionDetails as br,addUiEntry as bs,removeUiEntry as bt,crostiniPlaceHolderKey as bu,isFolderDialogType as bv,updateIsInteractiveVolume as bw,createChild as bx,listMountableGuests as by,GuestOsPlaceholder as bz,assert as c,dispatchActivationClick as d,assertNotReached as e,assert$1 as f,getStore as g,strf as h,isActivationClick as i,str as j,startIOTask as k,getFilesAppIconURL as l,addVolume as m,dispatchSimpleEvent as n,openWindow as o,promisify as p,removeVolume as q,recordEnum as r,startInterval as s,toFilesAppURL as t,util as u,recordInterval as v,AllowedPaths as w,isNative as x,parseTrashInfoFiles as y,recordMediumCount as z};