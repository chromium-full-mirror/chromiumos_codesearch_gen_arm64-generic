import {svg} from "chrome://resources/mwc/lit/index.js";export const preloadImagesList = [
  "barcode_scan_box_border_mask.svg",
  "camera_mode_photo.svg"
];export const preloadedImages = new Map([["barcode_chevron_down.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.41 6L10 10.9447L14.59 6L16 7.52227L10 14L4 7.52227L5.41 6Z"/>
</svg>
`],["barcode_chevron_up.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.59 14L10 9.05533L5.41 14L4 12.4777L10 6L16 12.4777L14.59 14Z"/>
</svg>
`],["barcode_copy.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 16H5V8H3V16C3 17.1 3.9 18 5 18H13V16ZM18 12V4C18 2.9 17.1 2 16 2H9C7.9 2 7 2.9 7 4V12C7 13.1 7.9 14 9 14H16C17.1 14 18 13.1 18 12ZM16 12H9V4H16V12Z"/>
</svg>
`],["barcode_url.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18C8.90278 18 7.86806 17.7917 6.89583 17.375C5.92361 16.9583 5.06944 16.3889 4.33333 15.6667C3.61111 14.9306 3.04167 14.0764 2.625 13.1042C2.20833 12.1319 2 11.0972 2 10C2 8.88889 2.20833 7.85417 2.625 6.89583C3.04167 5.92361 3.61111 5.07639 4.33333 4.35417C5.06944 3.61805 5.92361 3.04167 6.89583 2.625C7.86806 2.20833 8.90278 2 10 2C11.1111 2 12.1458 2.20833 13.1042 2.625C14.0764 3.04167 14.9236 3.61805 15.6458 4.35417C16.3819 5.07639 16.9583 5.92361 17.375 6.89583C17.7917 7.85417 18 8.88889 18 10C18 11.0972 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3819 14.9306 15.6458 15.6667C14.9236 16.3889 14.0764 16.9583 13.1042 17.375C12.1458 17.7917 11.1111 18 10 18ZM10 16.4375C10.2361 16.2014 10.4722 15.7639 10.7083 15.125C10.9444 14.4722 11.125 13.7639 11.25 13H8.75C8.875 13.7639 9.05556 14.4722 9.29167 15.125C9.52778 15.7639 9.76389 16.2014 10 16.4375ZM8.10417 16.2292C7.90972 15.8125 7.73611 15.3333 7.58333 14.7917C7.44444 14.25 7.32639 13.6528 7.22917 13H4.25C4.65278 13.7917 5.1875 14.4722 5.85417 15.0417C6.52083 15.5972 7.27083 15.9931 8.10417 16.2292ZM11.8958 16.2292C12.7292 15.9931 13.4792 15.5972 14.1458 15.0417C14.8125 14.4722 15.3472 13.7917 15.75 13H12.7708C12.6736 13.6528 12.5486 14.25 12.3958 14.7917C12.2569 15.3333 12.0903 15.8125 11.8958 16.2292ZM12.9583 11.5H16.3125C16.3819 11.2361 16.4306 10.9861 16.4583 10.75C16.4861 10.5 16.5 10.25 16.5 10C16.5 9.75 16.4861 9.5 16.4583 9.25C16.4306 9 16.3819 8.75 16.3125 8.5H12.9583C12.9861 8.76389 13 9.02778 13 9.29167C13.0139 9.54167 13.0208 9.79167 13.0208 10.0417C13.0208 10.2917 13.0139 10.5417 13 10.7917C13 11.0278 12.9861 11.2639 12.9583 11.5ZM8.5625 11.5H11.4375C11.4653 11.2222 11.4792 10.9653 11.4792 10.7292C11.4931 10.4792 11.5 10.2361 11.5 10C11.5 9.76389 11.4931 9.52083 11.4792 9.27083C11.4792 9.02083 11.4653 8.76389 11.4375 8.5H8.5625C8.53472 8.76389 8.51389 9.02083 8.5 9.27083C8.5 9.52083 8.5 9.76389 8.5 10C8.5 10.2361 8.5 10.4792 8.5 10.7292C8.51389 10.9792 8.53472 11.2361 8.5625 11.5ZM3.6875 11.5H7.04167C7.01389 11.2361 6.99306 10.9792 6.97917 10.7292C6.97917 10.4653 6.97917 10.2083 6.97917 9.95833C6.97917 9.70833 6.97917 9.46528 6.97917 9.22917C6.99306 8.97917 7.01389 8.73611 7.04167 8.5H3.6875C3.61806 8.76389 3.56944 9.02083 3.54167 9.27083C3.51389 9.50694 3.5 9.75 3.5 10C3.5 10.25 3.51389 10.5 3.54167 10.75C3.56944 10.9861 3.61806 11.2361 3.6875 11.5ZM12.7708 7H15.75C15.3472 6.20833 14.8125 5.53472 14.1458 4.97917C13.4792 4.40972 12.7292 4.00694 11.8958 3.77083C12.0903 4.1875 12.2569 4.66667 12.3958 5.20833C12.5486 5.75 12.6736 6.34722 12.7708 7ZM8.75 7H11.25C11.125 6.23611 10.9444 5.53472 10.7083 4.89583C10.4722 4.24305 10.2361 3.79861 10 3.5625C9.76389 3.79861 9.52778 4.24305 9.29167 4.89583C9.05556 5.53472 8.875 6.23611 8.75 7ZM4.25 7H7.22917C7.32639 6.34722 7.44444 5.75 7.58333 5.20833C7.73611 4.66667 7.90972 4.1875 8.10417 3.77083C7.27083 4.00694 6.52083 4.40972 5.85417 4.97917C5.1875 5.53472 4.65278 6.20833 4.25 7Z"/>
</svg>
`],["camera_button_fps_30.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 12.5C11.4231 12.5 11.7751 12.8195 11.8268 13.2292L11.8333 13.3333V15C11.8333 15.4231 11.5138 15.7751 11.1042 15.8268L11 15.8333H9.33333V17.5H8.08333V12.5H11ZM16.75 12.5V13.75H14.25V14.375H15.9167C16.375 14.375 16.75 14.75 16.75 15.2083V16.6667C16.75 17.125 16.375 17.5 15.9167 17.5H13V16.25H15.5V15.625H13.625C13.2833 15.625 13 15.3417 13 15V13.3333C13 12.875 13.375 12.5 13.8333 12.5H16.75ZM6.75 12.5V13.75H4.25V14.5833H6.75V15.7833L4.25 15.8333V17.5H3V12.5H6.75ZM10.5833 13.75H9.33333V14.5833H10.5833V13.75ZM7.5 2C8.32843 2 9 2.67157 9 3.5V5.5C9 5.88469 8.85519 6.23556 8.61709 6.50107C8.85554 6.76529 9 7.11577 9 7.5V9.5C9 10.3284 8.32843 11 7.5 11H3V9H7V7.5H4V5.5H7V4H3V2H7.5ZM15.5 2C16.3284 2 17 2.57563 17 3.28571V9.71429C17 10.4244 16.3284 11 15.5 11H12.5C11.6716 11 11 10.4244 11 9.71429V3.28571C11 2.57563 11.6716 2 12.5 2H15.5ZM15 4H13V9H15V4Z"/>
</svg>
`],["camera_button_fps_60.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 12.5C11.4231 12.5 11.7751 12.8195 11.8268 13.2292L11.8333 13.3333V15C11.8333 15.4231 11.5138 15.7751 11.1042 15.8268L11 15.8333H9.33333V17.5H8.08333V12.5H11ZM16.75 12.5V13.75H14.25V14.375H15.9167C16.375 14.375 16.75 14.75 16.75 15.2083V16.6667C16.75 17.125 16.375 17.5 15.9167 17.5H13V16.25H15.5V15.625H13.625C13.2833 15.625 13 15.3417 13 15V13.3333C13 12.875 13.375 12.5 13.8333 12.5H16.75ZM6.75 12.5V13.75H4.25V14.5833H6.75V15.7833L4.25 15.8333V17.5H3V12.5H6.75ZM10.5833 13.75H9.33333V14.5833H10.5833V13.75ZM9 2V3.92857H5V5.21429H7C8.05636 5.21429 8.91835 5.99918 8.99453 6.99867L9 7.14286V9.07143C9 10.0901 8.18603 10.9213 7.14952 10.9947L7 11H5C3.94364 11 3.08165 10.2151 3.00547 9.21561L3 9.07143V3.92857C3 2.90994 3.81397 2.07874 4.85048 2.00528L5 2H9ZM15.5 2C16.3284 2 17 2.57563 17 3.28571V9.71429C17 10.4244 16.3284 11 15.5 11H12.5C11.6716 11 11 10.4244 11 9.71429V3.28571C11 2.57563 11.6716 2 12.5 2H15.5ZM7 7H5V9H7V7ZM15 4H13V9H15V4Z"/>
</svg>
`],["camera_button_grid_off.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.00015 2.08579L17.5565 17.6421L16.1423 19.0563L15.0859 18H4.00015C2.89558 18 2.00015 17.1046 2.00015 16L1.99994 4.914L0.585938 3.5L2.00015 2.08579ZM10.0859 13H8.00015V16H12.0002L11.9999 14.914L10.0859 13ZM7.00015 13H4.00015V16H7.00015V13ZM16.0002 2C17.1047 2 18.0002 2.89543 18.0002 4V15L15.0002 12H16.0002V8H13.0002V10L12.0002 9V8H11.0002L10.0002 7H12.0002V4H8.00015V5L5.00015 2H16.0002ZM9.08594 12L7.99994 10.914L8.00015 12H9.08594ZM5.08594 8H4.00015V12H7.00015L6.99994 9.914L5.08594 8ZM16.0002 4H13.0002V7H16.0002V4Z"/>
</svg>
`],["camera_button_grid_on.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2C17.1046 2 18 2.89543 18 4V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16ZM7 13H4V16H7V13ZM16 13H13V16H16V13ZM12 13H8V16H12V13ZM7 8H4V12H7V8ZM16 8H13V12H16V8ZM12 8H8V12H12V8ZM7 4H4V7H7V4ZM16 4H13V7H16V4ZM12 4H8V7H12V4Z"/>
</svg>
`],["camera_button_mic_off.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5715 4.5L12.5629 9.5C12.5629 9.95509 12.4395 10.3813 12.2233 10.7484L11.0073 9.53245C11.0076 9.52428 11.0077 9.51608 11.0078 9.50786L11.0469 4.5078C11.0513 3.95249 10.6023 3.5 10.047 3.5C9.49779 3.5 9.05136 3.94294 9.04706 4.49214L9.02314 7.54828L7.4286 5.95375V4.5C7.4286 3.11667 8.57717 2 10 2C11.4229 2 12.5715 3.11667 12.5715 4.5Z"/>
<path d="M2.23742 3.23744L1 4.47486L10.3834 13.8582C10.2564 13.8685 10.1285 13.8737 10 13.8737C7.6343 13.8737 5.45715 12.1053 5.45715 9.57898H4.00001C4.00001 12.459 6.33144 14.8253 9.14287 15.2379V18H10.8572V15.2379C11.1112 15.2014 11.3614 15.1488 11.6063 15.0811L15.5251 19L16.7626 17.7626L2.23742 3.23744Z"/>
<path d="M13.6393 12.1645L14.6382 13.1633C15.4813 12.1835 16 10.9374 16 9.57898H14.5429C14.5429 10.5811 14.2003 11.4639 13.6393 12.1645Z"/>
</svg>
`],["camera_button_mic_on.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 12.1053C11.4229 12.1053 12.5629 10.9768 12.5629 9.57895L12.5714 4.52632C12.5714 3.12842 11.4229 2 10 2C8.57716 2 7.42859 3.12842 7.42859 4.52632V9.57895C7.42859 10.9768 8.57716 12.1053 10 12.1053ZM14.5429 9.57898C14.5429 12.1053 12.3657 13.8737 10 13.8737C7.63429 13.8737 5.45714 12.1053 5.45714 9.57898H4C4 12.459 6.33143 14.8253 9.14286 15.2379V18H10.8571V15.2379C13.6686 14.8337 16 12.459 16 9.57898H14.5429Z"/>
</svg>
`],["camera_button_mirror_off.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.00015 2.08579L17.5565 17.6421L16.1423 19.0563L14.9999 17.914L15.0002 18H13.0002V16H13.0859L10.9999 13.914L11.0002 19H9.00015L8.99994 11.914L3.99994 6.914L4.00015 16H7.00015V18H4.00015C2.94579 18 2.08199 17.1841 2.00564 16.1493L2.00015 16L1.99994 4.914L0.585938 3.5L2.00015 2.08579ZM18.0002 12V14H17.0002L16.0002 13V12H18.0002ZM18.0002 9V11H16.0002V9H18.0002ZM18.0002 6V8H16.0002V6H18.0002ZM11.0002 1V8L9.00015 6V1H11.0002ZM16.0002 2L16.1494 2.00549C17.1325 2.07802 17.918 2.86123 17.9941 3.84335L18.0002 4V5H16.0002V2ZM7.00015 2V4L5.00015 2H7.00015ZM15.0002 2V4H13.0002V2H15.0002Z"/>
</svg>
`],["camera_button_mirror_on.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 1V19H9V1H11ZM15 16V18H13V16H15ZM18 15V16C18 17.0544 17.1841 17.9182 16.1493 17.9945L16 18V15H18ZM7 2V4H4V16H7V18H4C2.94564 18 2.08183 17.1841 2.00549 16.1493L2 16V4C2 2.94564 2.81588 2.08183 3.85074 2.00549L4 2H7ZM18 12V14H16V12H18ZM18 9V11H16V9H18ZM18 6V8H16V6H18ZM16 2L16.1493 2.00549C17.1324 2.07802 17.9179 2.86123 17.994 3.84335L18 4V5H16V2ZM15 2V4H13V2H15Z"/>
</svg>
`],["camera_button_ptz_panel.svg", svg`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.64166 5.38329L5.46666 4.19996L8.99999 0.666626L12.5333 4.19996L11.3583 5.38329L8.99999 3.02496L6.64166 5.38329ZM4.19999 5.46663L0.666656 8.99996L4.19999 12.5333L5.38332 11.3583L3.02499 8.99996L5.38332 6.64163L4.19999 5.46663ZM8.99999 11.5C10.3807 11.5 11.5 10.3807 11.5 8.99996C11.5 7.61925 10.3807 6.49996 8.99999 6.49996C7.61928 6.49996 6.49999 7.61925 6.49999 8.99996C6.49999 10.3807 7.61928 11.5 8.99999 11.5ZM13.8 5.46663L12.6167 6.64163L14.975 8.99996L12.6167 11.3583L13.8 12.5333L17.3333 8.99996L13.8 5.46663ZM6.64166 12.6166L8.99999 14.975L11.3583 12.6166L12.5333 13.8L8.99999 17.3333L5.46666 13.8L6.64166 12.6166Z"/>
</svg>
`],["camera_button_settings.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4781 18H8.51899C7.92717 18 7.43132 17.5783 7.35934 17.0083L7.14341 15.5325C6.92747 15.4231 6.71954 15.306 6.5116 15.1733L5.07204 15.7355C4.51221 15.9385 3.89639 15.7121 3.62448 15.2279L2.16092 12.7526C1.881 12.2372 2.00097 11.6281 2.44883 11.2845L3.67246 10.3553C3.66446 10.2382 3.65647 10.121 3.65647 9.9961C3.65647 9.87897 3.66446 9.75403 3.67246 9.6369L2.45683 8.70766C1.98497 8.35627 1.86501 7.72377 2.16092 7.23963L3.64047 4.74866C3.91239 4.26452 4.5282 4.04588 5.07204 4.25671L6.5196 4.82674C6.72753 4.694 6.93547 4.57687 7.14341 4.46755L7.35934 2.97609C7.43132 2.42948 7.92717 2 8.51099 2H11.4701C12.0619 2 12.5578 2.42167 12.6297 2.9917L12.8457 4.46755C13.0616 4.57687 13.2695 4.694 13.4775 4.82674L14.917 4.26452C15.4849 4.06149 16.1007 4.28795 16.3726 4.77208L17.8442 7.25525C18.1321 7.77062 18.0041 8.3797 17.5562 8.72328L16.3406 9.65251C16.3486 9.76964 16.3566 9.88677 16.3566 10.0117C16.3566 10.1367 16.3486 10.2538 16.3406 10.3709L17.5562 11.3001C18.0041 11.6515 18.1321 12.2606 17.8522 12.7526L16.3646 15.267C16.0927 15.7511 15.4769 15.9697 14.925 15.7589L13.4855 15.1967C13.2775 15.3294 13.0696 15.4466 12.8617 15.5559L12.6457 17.0473C12.5658 17.5783 12.0699 18 11.4781 18ZM8.94703 16H11.0606L11.344 14.1455L11.7498 13.9855C12.0868 13.8545 12.4237 13.6655 12.776 13.4182L13.1206 13.1709L14.9432 13.8691L16 12.1236L14.4454 10.9745L14.499 10.5673C14.522 10.3782 14.545 10.1964 14.545 10C14.545 9.80364 14.522 9.61455 14.499 9.43273L14.4454 9.02545L16 7.87636L14.9355 6.13091L13.1053 6.82909L12.7607 6.57455C12.4391 6.34182 12.0944 6.15273 11.7422 6.01455L11.344 5.85455L11.0606 4H8.94703L8.66369 5.85455L8.25782 6.00727C7.92087 6.14545 7.58392 6.32727 7.23165 6.58182L6.88705 6.82182L5.06445 6.13091L4 7.86909L5.55456 9.01818L5.50096 9.42545C5.47798 9.61455 5.45501 9.81091 5.45501 10C5.45501 10.1891 5.47033 10.3855 5.50096 10.5673L5.55456 10.9745L4 12.1236L5.0568 13.8691L6.88705 13.1709L7.23165 13.4255C7.56094 13.6655 7.89024 13.8473 8.25016 13.9855L8.65603 14.1455L8.94703 16ZM10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"/>
</svg>
`],["camera_button_switch_device.svg", svg`<?xml version="1.0" encoding="UTF-8"?>
<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="translate(4.000000, 4.000000)">
        <circle cx="20" cy="20" r="6"></circle>
        <path d="M36.0014647,32 C32.3526394,36.8577868 26.5432713,40 20,40 C8.954305,40 0,31.045695 0,20 L3,20 C3,29.3888407 10.6111593,37 20,37 C24.704999,37 28.9635724,35.0886249 32.0415948,32 L36.0014647,32 Z M40,20 L37,20 C37,10.6111593 29.3888407,3 20,3 C15.295001,3 11.0364276,4.91137512 7.9584052,8 L3.99853525,8 C7.64736057,3.14221319 13.4567287,0 20,0 C31.045695,0 40,8.954305 40,20 Z"></path>
        <polygon points="3 2 13 12 3 12"></polygon>
        <polygon transform="translate(32.000000, 33.000000) rotate(180.000000) translate(-32.000000, -33.000000) " points="27 28 37 38 27 38"></polygon>
    </g>
</svg>
`],["camera_button_timer_off.svg", svg`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9142 13.5858L27.3284 15L25.7017 16.6274C26.8229 17.9381 27.5 19.64 27.5 21.5C27.5 25.6421 24.1421 29 20 29C15.8579 29 12.5 25.6421 12.5 21.5C12.5 17.3579 15.8579 14 20 14C21.5601 14 23.0089 14.4763 24.209 15.2915L25.9142 13.5858ZM20 16C16.9624 16 14.5 18.4624 14.5 21.5C14.5 24.5376 16.9624 27 20 27C23.0376 27 25.5 24.5376 25.5 21.5C25.5 18.4624 23.0376 16 20 16ZM21 17V22H19V17H21ZM23 11V13H17V11H23Z"/>
</svg>
`],["camera_button_timer_on_10s.svg", svg`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9142 13.5858L27.3284 15L25.7017 16.6274C26.8229 17.9381 27.5 19.64 27.5 21.5C27.5 25.6421 24.1421 29 20 29C15.8579 29 12.5 25.6421 12.5 21.5C12.5 17.3579 15.8579 14 20 14C21.5601 14 23.0089 14.4763 24.209 15.2915L25.9142 13.5858ZM20 16C16.9624 16 14.5 18.4624 14.5 21.5C14.5 24.5376 16.9624 27 20 27C23.0376 27 25.5 24.5376 25.5 21.5C25.5 18.4624 23.0376 16 20 16ZM23 11V13H17V11H23Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 18V25H17V19.5H16.5V18H18.5ZM22.5 18C23.0523 18 23.5 18.4477 23.5 19V24C23.5 24.5523 23.0523 25 22.5 25H20.5C19.9477 25 19.5 24.5523 19.5 24V19C19.5 18.4477 19.9477 18 20.5 18H22.5ZM22 19.5H21V23.5H22V19.5Z"/>
</svg>
`],["camera_button_timer_on_3s.svg", svg`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9142 13.5858L27.3284 15L25.7017 16.6274C26.8229 17.9381 27.5 19.64 27.5 21.5C27.5 25.6421 24.1421 29 20 29C15.8579 29 12.5 25.6421 12.5 21.5C12.5 17.3579 15.8579 14 20 14C21.5601 14 23.0089 14.4763 24.209 15.2915L25.9142 13.5858ZM20 16C16.9624 16 14.5 18.4624 14.5 21.5C14.5 24.5376 16.9624 27 20 27C23.0376 27 25.5 24.5376 25.5 21.5C25.5 18.4624 23.0376 16 20 16ZM23 11V13H17V11H23Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 25V23.25H21.3333V22.375H18V20.625H21.3333V19.75H18V18H21.5C22.3284 18 23 18.6716 23 19.5V20C23 20.8284 22.3284 21.5 21.5 21.5C22.3284 21.5 23 22.1716 23 23V23.5C23 24.3284 22.3284 25 21.5 25H18Z"/>
</svg>
`],["camera_focus_aim.svg", svg`<svg id="inner_circle_focus" xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" transform="scale(0.6)" >
    <g id="outer_circle_focus_outlines_position" transform="translate(60,60)" >
        <g id="outer_circle_focus_outlines_rotation" transform="rotate(0)" >
            <g id="outer_circle_focus_outlines_scale_x" transform="scale(1.42353, 1)" >
                <g id="outer_circle_focus_outlines_scale_y" transform="scale(1, 1.42353)" >
                    <g id="outer_circle_focus_outlines_pivot" transform="translate(-42.5,-42.5)" >
                        <g id="outer_circle_focus_outlines" opacity="0" >
                            <g id="group_1_transform" transform="translate(42.5,42.5)" >
                                <g id="group_1" >
                                    <path id="path_1" d="M 0.0,40.0 c 22.091003418,0.0 40.0,-17.908996582 40.0,-40.0 c 0.0,-22.091003418 -17.908996582,-40.0 -40.0,-40.0 c -22.091003418,0.0 -40.0,17.908996582 -40.0,40.0 c 0.0,22.091003418 17.908996582,40.0 40.0,40.0 Z" stroke="var(--secondary-color)" stroke-width="2" fill="none" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
    <g id="inner_circle_focus_outlines_position" transform="translate(60,60)" >
        <g id="inner_circle_focus_outlines_rotation" transform="rotate(0)" >
            <g id="inner_circle_focus_outlines_scale_x" transform="scale(0.37324, 1)" >
                <g id="inner_circle_focus_outlines_scale_y" transform="scale(1, 0.35973)" >
                    <g id="inner_circle_focus_outlines_pivot" transform="translate(-37,-37)" >
                        <g id="inner_circle_focus_outlines" opacity="0" >
                            <g id="group_1_transform_0" transform="translate(37.5,37.5)" >
                                <g id="group_2" >
                                    <path id="path_2" d="M -32.5,-0.5 c 0.0,17.6730041504 14.3269958496,32.0 32.0,32.0 c 17.6730041504,0.0 32.0,-14.3269958496 32.0,-32.0 c 0.0,-17.6730041504 -14.3269958496,-32.0 -32.0,-32.0 c -17.6730041504,0.0 -32.0,14.3269958496 -32.0,32.0 Z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
    <style>
      @keyframes outer_circle_focus_outlines_scale_x_animation {
        0% {
          transform: scale(1.42353, 1);
          animation-timing-function: cubic-bezier(0.174606606667, 0.0997861131319, 0.593112952494, 0.780748340468);
        }
        60% {
          transform: scale(0.97887, 1);
          animation-timing-function: cubic-bezier(0.351379547454, 2.65658848267, 0.698426429671, 1.0);
        }
        100% {
          transform: scale(1.0, 1);
        }
      }
      #outer_circle_focus_outlines_scale_x {
        animation: .29s forwards outer_circle_focus_outlines_scale_x_animation;
      }
      @keyframes outer_circle_focus_outlines_scale_y_animation {
        0% {
          transform: scale(1, 1.42353);
          animation-timing-function: cubic-bezier(0.174606606667, 0.0997861131319, 0.593112952494, 0.780748340468);
        }
        60% {
          transform: scale(1, 0.97887);
          animation-timing-function: cubic-bezier(0.351379547454, 2.65658848267, 0.698426429671, 1.0);
        }
        100% {
          transform: scale(1, 1.0);
        }
      }
      #outer_circle_focus_outlines_scale_y {
        animation: .29s forwards outer_circle_focus_outlines_scale_y_animation;
      }
      @keyframes outer_circle_focus_outlines_animation {
        0% {
          opacity: 0;
          animation-timing-function: cubic-bezier(0.0, 0.0, 0.66666667, 1.0);
        }
        54.54545454550001% {
          opacity: 1;
          animation-timing-function: cubic-bezier(0.0, 0.0, 0.66666667, 1.0);
        }
        100% {
          opacity: 0;
        }
      }
      #outer_circle_focus_outlines {
        animation: 1.09s forwards outer_circle_focus_outlines_animation;
      }
      @keyframes inner_circle_focus_outlines_scale_x_animation {
        0% {
          transform: scale(0.37324, 1);
          animation-timing-function: cubic-bezier(0.0, 0.0, 0.66666667, 1.0);
        }
        100% {
          transform: scale(1.22973, 1);
        }
      }
      #inner_circle_focus_outlines_scale_x {
        animation: .29s forwards inner_circle_focus_outlines_scale_x_animation;
      }
      @keyframes inner_circle_focus_outlines_scale_y_animation {
        0% {
          transform: scale(1, 0.35973);
          animation-timing-function: cubic-bezier(0.0, 0.0, 0.66666667, 1.0);
        }
        100% {
          transform: scale(1, 1.22973);
        }
      }
      #inner_circle_focus_outlines_scale_y {
        animation: .29s forwards inner_circle_focus_outlines_scale_y_animation;
      }
      @keyframes inner_circle_focus_outlines_animation {
        0% {
          opacity: 0;
          animation-timing-function: cubic-bezier(0.0, 0.0, 0.66666667, 1.0);
        }
        50% {
          opacity: 0.8;
          animation-timing-function: cubic-bezier(0.0, 0.0, 0.66666667, 1.0);
        }
        100% {
          opacity: 0;
        }
      }
      #inner_circle_focus_outlines {
        animation: .58s forwards inner_circle_focus_outlines_animation;
      }
    </style>
</svg>
`],["camera_intent_result_cancel.svg", svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.88L14.12 0L8 6.12L1.88 0L0 1.88L6.12 8L0 14.12L1.88 16L8 9.88L14.12 16L16 14.12L9.88 8L16 1.88Z"/>
</svg>
`],["camera_intent_result_confirm.svg", svg`<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.68182 12.6567L1.67045 7.64179L0 9.31343L6.68182 16L21 1.67164L19.3295 0L6.68182 12.6567Z"/>
</svg>
`],["camera_mode_photo.svg", svg`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.8,9.22222222 L27.728,9.22222222 L24.8,6 L15.2,6 L12.272,9.22222222 L7.2,9.22222222 C5.44,9.22222222 4,10.6722222 4,12.4444444 L4,31.7777778 C4,33.55 5.44,35 7.2,35 L32.8,35 C34.56,35 36,33.55 36,31.7777778 L36,12.4444444 C36,10.6722222 34.56,9.22222222 32.8,9.22222222 Z M33,32 L7,32 L7,12 L33,12 L33,32 Z M20,15.6666667 C16.464,15.6666667 13.6,18.5505556 13.6,22.1111111 C13.6,25.6716667 16.464,28.5555556 20,28.5555556 C23.536,28.5555556 26.4,25.6716667 26.4,22.1111111 C26.4,18.5505556 23.536,15.6666667 20,15.6666667 Z"/>
</svg>
`],["camera_mode_portrait.svg", svg`<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20,20.086667 C22.0666667,20.086667 23.75,18.4033337 23.75,16.336667 C23.75,14.2700003 22.0666667,12.586667 20,12.586667 C17.9333333,12.586667 16.25,14.2700003 16.25,16.336667 C16.25,18.4033337 17.9333333,20.086667 20,20.086667 Z M27.5,26.753333 C27.5,24.253333 22.5,23.003333 20,23.003333 C17.5,23.003333 12.5,24.253333 12.5,26.753333 L12.5,28.003333 L27.5,28.003333 L27.5,26.753333 Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.6666667,5 L8.33333333,5 C6.5,5 5,6.5 5,8.33333333 L5,31.6666667 C5,33.5 6.5,35 8.33333333,35 L31.6666667,35 C33.5,35 35,33.5 35,31.6666667 L35,8.33333333 C35,6.5 33.5,5 31.6666667,5 Z M32,32 L8,32 L8,8 L32,8 L32,32 Z"></path>
</svg>
`],["camera_mode_scan.svg", svg`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.32 9.61719V14.5391H36V9.61719C36 8.91406 35.7333 8.30208 35.2 7.78125C34.6667 7.26042 34.04 7 33.32 7H28.28V9.61719H33.32ZM4 9.61719V14.5391H6.68V9.61719H11.72V7H6.68C5.96 7 5.33333 7.26042 4.8 7.78125C4.26667 8.30208 4 8.91406 4 9.61719ZM28.28 29.3828V32H33.32C34.04 32 34.6667 31.7396 35.2 31.2188C35.7333 30.6979 36 30.0859 36 29.3828V24.4609H33.32V29.3828H28.28ZM4.8 31.2188C5.33333 31.7396 5.96 32 6.68 32H11.72V29.3828H6.68V24.4609H4V29.3828C4 30.0859 4.26667 30.6979 4.8 31.2188ZM39 18H1V20.5H39V18Z"/>
</svg>
`],["camera_mode_video.svg", svg`<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30,17.4666667 L30,10 C30,8.16666667 28.5,6.66666667 26.6666667,6.66666667 L6.66666667,6.66666667 C4.83333333,6.66666667 3.33333333,8.16666667 3.33333333,10 L3.33333333,30 C3.33333333,31.8333333 4.83333333,33.3333333 6.66666667,33.3333333 L26.6666667,33.3333333 C28.5,33.3333333 30,31.8333333 30,30 L30,22.5333333 L36.6666667,29.1666667 L36.6666667,10.8333333 L30,17.4666667 Z M26.6666667,16.15 L26.6666667,30 L6.66666667,30 L6.66666667,10 L26.6666667,10 L26.6666667,16.15 Z"/>
</svg>
`],["camera_shutter_photo_start.svg", svg`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="30" fill="var(--secondary-color)"/>
  <circle cx="30" cy="30" r="25"/>
</svg>
`],["camera_shutter_photo_stop.svg", svg`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 23.88L36.12 22L30 28.12L23.88 22L22 23.88L28.12 30L22 36.12L23.88 38L30 31.88L36.12 38L38 36.12L31.88 30L38 23.88Z" fill="var(--secondary-color)"/>
</svg>
`],["camera_shutter_video_pause.svg", svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 15H6V1H2V15ZM10 15H14V1H10V15Z"/>
</svg>
`],["camera_shutter_video_snapshot.svg", svg`<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="23" cy="23" r="23" fill="var(--secondary-color)"/>
  <circle cx="23" cy="23" r="19"/>
</svg>
`],["circle_warning_icon.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 14H11V10H9V14ZM10 2C5.584 2 2 5.584 2 10C2 14.416 5.584 18 10 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 10 2ZM10 16C6.6925 16 4 13.3075 4 10C4 6.6925 6.6925 4 10 4C13.3075 4 16 6.6925 16 10C16 13.3075 13.3075 16 10 16ZM9 12H11V6H9V12Z"/>
</svg>
`],["crop_document_clockwise_rotate.svg", svg`<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.3208 0.92041L6.82144 2.42041L8.14419 3.74274C3.8074 4.07318 0.391365 7.69675 0.391365 12.1182C0.391365 16.7574 4.15217 20.5182 8.79136 20.5182C9.93035 20.5182 11.0164 20.2915 12.0068 19.8808L10.1005 17.9749C9.6791 18.0687 9.24101 18.1182 8.79136 18.1182C5.47766 18.1182 2.79136 15.4319 2.79136 12.1182C2.79136 8.86772 5.37609 6.22095 8.60233 6.1211L6.82144 7.90561L8.3208 9.40569L12.5634 5.16305L8.3208 0.92041ZM14.2605 6.86011L8.3208 12.7998L14.2605 18.7395L20.2002 12.7998L14.2605 6.86011ZM14.2605 10.2542L16.8061 12.7998L14.2605 15.3454L11.7149 12.7998L14.2605 10.2542Z"/>
</svg>
`],["crop_document_counterclockwise_rotate.svg", svg`<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6792 0.92041L14.1786 2.42041L12.8558 3.74274C17.1926 4.07318 20.6086 7.69675 20.6086 12.1182C20.6086 16.7574 16.8478 20.5182 12.2086 20.5182C11.0696 20.5182 9.98361 20.2915 8.99317 19.8808L10.8995 17.9749C11.3209 18.0687 11.759 18.1182 12.2086 18.1182C15.5223 18.1182 18.2086 15.4319 18.2086 12.1182C18.2086 8.86772 15.6239 6.22095 12.3977 6.1211L14.1786 7.90561L12.6792 9.40569L8.43656 5.16305L12.6792 0.92041ZM6.7395 6.86011L12.6792 12.7998L6.7395 18.7395L0.799805 12.7998L6.7395 6.86011ZM6.7395 10.2542L4.19392 12.7998L6.7395 15.3454L9.28509 12.7998L6.7395 10.2542Z"/>
</svg>
`],["document_mode_spinner.svg", svg`<!-- This version of the throbber is good for size 28x28dp or more. -->
<svg version="1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 28 28">
  <!-- 28= RADIUS*2 + STROKEWIDTH -->
  <title>Material design circular activity spinner with CSS3 animation</title>
  <style type="text/css">
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/
      /*
       * Constants:
       *      RADIUS      = 12.5
       *      STROKEWIDTH = 3
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 2).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *
       *      SHRINK_TIME = 400ms
       */
      .qp-circular-loader {
        width:28px;  /* 2*RADIUS + STROKEWIDTH */
        height:28px; /* 2*RADIUS + STROKEWIDTH */
      }
      .qp-circular-loader-path {
        stroke-dasharray: 58.9;  /* 2*RADIUS*PI * ARCSIZE/360 */
        stroke-dashoffset: 58.9; /* 2*RADIUS*PI * ARCSIZE/360 */
                                 /* hides things initially */
      }
      /* SVG elements seem to have a different default origin */
      .qp-circular-loader, .qp-circular-loader * {
        transform-origin: 50% 50%;
      }
      /* Rotating the whole thing */
      @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
      }
      .qp-circular-loader {
        animation-duration: 1568.63ms; /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        animation-iteration-count: infinite;
        animation-name: rotate;
        animation-timing-function: linear;
      }
      /* Filling and unfilling the arc */
      @keyframes fillunfill {
        from {
          stroke-dashoffset: 58.8 /* 2*RADIUS*PI * ARCSIZE/360 - 0.1 */
                                  /* 0.1 a bit of a magic constant here */
        }
        50% {
          stroke-dashoffset: 0;
        }
        to {
          stroke-dashoffset: -58.4 /* -(2*RADIUS*PI * ARCSIZE/360 - 0.5) */
                                   /* 0.5 a bit of a magic constant here */
        }
      }
      @keyframes rot {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-360deg);
        }
      }
      .qp-circular-loader-path {
        animation-duration: 1333ms, 5332ms; /* ARCTIME, 4*ARCTIME */
        animation-fill-mode: forwards;
        animation-iteration-count: infinite, infinite;
        animation-name: fillunfill, rot;
        animation-play-state: running, running;
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1), steps(4);
      }
  </style>
  <!-- 3= STROKEWIDTH -->
  <!-- 14= RADIUS + STROKEWIDTH/2 -->
  <!-- 12.5= RADIUS -->
  <!-- 1.5=  STROKEWIDTH/2 -->
  <!-- ARCSIZE would affect the 1.5,14 part of this... 1.5,14 is specific to
       270 degrees -->
  <g class="qp-circular-loader">
    <path class="qp-circular-loader-path" fill="none"
          d="M 14,1.5 A 12.5,12.5 0 1 1 1.5,14" stroke-width="3"
          stroke-linecap="round"></path>
  </g>
</svg>
`],["document_review_add_page.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3334 13.3334V3.33335C18.3334 2.41669 17.5834 1.66669 16.6667 1.66669H6.66675C5.75008 1.66669 5.00008 2.41669 5.00008 3.33335V13.3334C5.00008 14.25 5.75008 15 6.66675 15H16.6667C17.5834 15 18.3334 14.25 18.3334 13.3334ZM15.0001 16.6667H3.33341V5.00002H1.66675V16.6667C1.66675 17.5834 2.41675 18.3334 3.33341 18.3334H15.0001V16.6667ZM16.6667 3.33335H6.66675V13.3334H16.6667V3.33335ZM12.5001 11.6667H10.8334V9.16669H8.33342V7.50002H10.8334V5.00002H12.5001V7.50002H15.0001V9.16669H12.5001V11.6667Z"/>
</svg>
`],["document_review_delete_page.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 3V2H7V3H3V5H4V16C4 17.1 4.9 18 6 18H14C15.1 18 16 17.1 16 16V5H17V3H13ZM14 16H6V5H14V16Z"/>
</svg>
`],["document_review_fix_page.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8833 2.99165L17.0083 4.11665C17.6667 4.76665 17.6667 5.82498 17.0083 6.47498L5.98333 17.5H2.5V14.0167L13.525 2.99165C14.175 2.34165 15.2333 2.34165 15.8833 2.99165ZM4.16667 15.8333L5.34167 15.8833L13.525 7.69165L12.35 6.51665L4.16667 14.7V15.8333Z"/>
</svg>
`],["external_link_icon.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.00003 15H15V11H17V15C17 16 16 17 15 17H5.00003C4.00003 17 3.00003 16 3.00003 15V5C3.00003 4 4.00003 3 5.00003 3H9.00003V5H5.00003V15Z"/>
<path d="M11 5V3H17V9H15V6.5L8.49997 13L6.99997 11.5L13.5 5H11Z"/>
</svg>
`],["more_horizontal.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 10C14 8.896 14.896 8 16 8C17.105 8 18 8.896 18 10C18 11.105 17.105 12 16 12C14.896 12 14 11.105 14 10ZM12 10C12 11.105 11.105 12 10 12C8.896 12 8 11.105 8 10C8 8.896 8.896 8 10 8C11.105 8 12 8.896 12 10ZM6 10C6 11.105 5.105 12 4 12C2.896 12 2 11.105 2 10C2 8.896 2.896 8 4 8C5.105 8 6 8.896 6 10Z"/>
</svg>
`],["new_feature_toast_icon.svg", svg`<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.375 4.375L6.5 0.25L4.625 4.375L0.5 6.25L4.625 8.125L6.5 12.25L8.375 8.125L12.5 6.25L8.375 4.375ZM12.5 7.75L11.5625 9.8125L9.5 10.75L11.5625 11.6875L12.5 13.75L13.4375 11.6875L15.5 10.75L13.4375 9.8125L12.5 7.75Z"/>
</svg>
`],["ptz_pan_left.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 14.59L9.05533 10L14 5.41L12.4777 4L6 10L12.4777 16L14 14.59Z"/>
</svg>
`],["ptz_pan_right.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.41L10.9447 10L6 14.59L7.52227 16L14 10L7.52227 4L6 5.41Z"/>
</svg>
`],["ptz_reset_all.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C6.136 3 3 6.136 3 10C3 13.864 6.136 17 10 17C12.1865 17 14.1399 15.9959 15.4239 14.4239L13.9984 12.9984C13.0852 14.2129 11.6325 15 10 15C7.24375 15 5 12.7563 5 10C5 7.24375 7.24375 5 10 5C11.6318 5 13.0839 5.78641 13.9972 7H11V9H17V3H15V5.10253C13.7292 3.80529 11.9581 3 10 3Z"/>
</svg>
`],["ptz_tilt_down.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.41 6L10 10.9447L14.59 6L16 7.52227L10 14L4 7.52227L5.41 6Z"/>
</svg>
`],["ptz_tilt_up.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.41 14L10 9.05533L14.59 14L16 12.4777L10 6L4 12.4777L5.41 14Z"/>
</svg>
`],["ptz_zoom_in.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.49 16L13.76 12.27C14.53 11.2 15 9.91 15 8.5C15 4.91 12.09 2 8.5 2C4.91 2 2 4.91 2 8.5C2 12.09 4.91 15 8.5 15C9.91 15 11.2 14.53 12.27 13.76L16 17.49L17.49 16ZM8.5 13C6.01 13 4 10.99 4 8.5C4 6.01 6.01 4 8.5 4C10.99 4 13 6.01 13 8.5C13 10.99 10.99 13 8.5 13ZM9.5 7.5H11.5V9.5H9.5V11.5H7.5V9.5H5.5V7.5H7.5V5.5H9.5V7.5Z"/>
</svg>
`],["ptz_zoom_out.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.49 16L13.76 12.27C14.53 11.2 15 9.91 15 8.5C15 4.91 12.09 2 8.5 2C4.91 2 2 4.91 2 8.5C2 12.09 4.91 15 8.5 15C9.91 15 11.2 14.53 12.27 13.76L16 17.49L17.49 16ZM8.5 13C6.01 13 4 10.99 4 8.5C4 6.01 6.01 4 8.5 4C10.99 4 13 6.01 13 8.5C13 10.99 10.99 13 8.5 13ZM11.5 7.5V9.5H5.5V7.5H11.5Z"/>
</svg>
`],["review_share.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C13.21 12 12.5 12.31 11.97 12.81L7.91 10.7C7.96 10.47 8 10.24 8 10C8 9.76 7.96 9.53 7.91 9.3L11.96 7.19C12.49 7.69 13.21 8 14 8C15.66 8 17 6.66 17 5C17 3.34 15.66 2 14 2C12.34 2 11 3.34 11 5C11 5.24 11.04 5.48 11.09 5.7L7.04 7.81C6.5 7.31 5.79 7 5 7C3.34 7 2 8.34 2 10C2 11.66 3.34 13 5 13C5.79 13 6.5 12.69 7.04 12.19L11.09 14.31C11.04 14.53 11 14.76 11 15C11 16.66 12.34 18 14 18C15.66 18 17 16.66 17 15C17 13.34 15.66 12 14 12ZM14 4C14.55 4 15 4.45 15 5C15 5.55 14.55 6 14 6C13.45 6 13 5.55 13 5C13 4.45 13.45 4 14 4ZM5 11C4.45 11 4 10.55 4 10C4 9.45 4.45 9 5 9C5.55 9 6 9.45 6 10C6 10.55 5.55 11 5 11ZM14 16C13.45 16 13 15.55 13 15C13 14.45 13.45 14 14 14C14.55 14 15 14.45 15 15C15 15.55 14.55 16 14 16Z"/>
</svg>
`],["settings_aspect_ratio.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 6.5H9.5V8.5H7.5V10.5H5.5V6.5Z"/>
<path d="M14.5 9.5H12.5V11.5H10.5V13.5H14.5V9.5Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3ZM4 5V15H16V5H4Z"/>
</svg>
`],["settings_button_back.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.43718 9L11.4538 4.23375L10.1795 3L3 10L10.1795 17L11.4449 15.7662L6.43718 11H17V9H6.43718Z"/>
</svg>
`],["settings_button_expand.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.66797 13.825L10.7885 10L6.66797 6.175L7.93652 5L13.3346 10L7.93652 15L6.66797 13.825Z"/>
</svg>
`],["settings_expert.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10,3 L18,7.5 L18,13.5 L16,13.5 L16,8.625 L15,9.188 L15,13.741037 L10,16.6577037 L5,13.741037 L5,9.188 L2,7.5 L10,3 Z M13,10.313 L10,12 L7,10.313 L7,12.592 L10,14.342 L13,12.591 L13,10.313 Z M10,5.295 L6.08,7.499 L10,9.704 L13.919,7.499 L10,5.295 Z" fill-rule="nonzero"/>
</svg>
`],["settings_feedback.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2C17.1046 2 18 2.89543 18 4V13C18 14.1046 17.1046 15 16 15H6L2 18V4C2 2.89543 2.89543 2 4 2H16ZM16 4H4V14L5.33333 13H16V4ZM11 10V12H9V10H11ZM11 5V9H9V5H11Z"/>
</svg>
`],["settings_help.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16666667,15 L10.8333333,15 L10.8333333,13.3333333 L9.16666667,13.3333333 L9.16666667,15 Z M10,1.66666667 C5.4,1.66666667 1.66666667,5.4 1.66666667,10 C1.66666667,14.6 5.4,18.3333333 10,18.3333333 C14.6,18.3333333 18.3333333,14.6 18.3333333,10 C18.3333333,5.4 14.6,1.66666667 10,1.66666667 Z M10,16.6666667 C6.325,16.6666667 3.33333333,13.675 3.33333333,10 C3.33333333,6.325 6.325,3.33333333 10,3.33333333 C13.675,3.33333333 16.6666667,6.325 16.6666667,10 C16.6666667,13.675 13.675,16.6666667 10,16.6666667 Z M10,5 C8.15833333,5 6.66666667,6.49166667 6.66666667,8.33333333 L8.33333333,8.33333333 C8.33333333,7.41666667 9.08333333,6.66666667 10,6.66666667 C10.9166667,6.66666667 11.6666667,7.41666667 11.6666667,8.33333333 C11.6666667,10 9.16666667,9.79166667 9.16666667,12.5 L10.8333333,12.5 C10.8333333,10.625 13.3333333,10.4166667 13.3333333,8.33333333 C13.3333333,6.49166667 11.8416667,5 10,5 Z"/>
</svg>
`],["settings_resolution.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 13V16H7V13H10ZM16 13V16H13V13H16ZM7 10V13H4V10H7ZM13 10V13H10V10H13ZM10 7V10H7V7H10ZM16 7V10H13V7H16ZM7 4V7H4V4H7ZM13 4V7H10V4H13Z"/>
</svg>
`],["wifi.svg", svg`<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.555 16.729a.706.706 0 0 1-1.113 0L2.157 7.495a.734.734 0 0 1 .155-1.055C3.505 5.611 6.268 4 10 4c3.733 0 6.495 1.611 7.688 2.441.344.24.416.724.155 1.055l-7.288 9.233ZM5.468 8.463 4.61 7.378C5.858 6.713 7.721 6 10 6c2.279 0 4.143.713 5.389 1.377l-.857 1.086A11.335 11.335 0 0 0 9.998 7.5a11.33 11.33 0 0 0-4.531.963Z"/></svg>`]]);