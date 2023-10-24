import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><!--
  -- Copyright 2022 The Chromium Authors
  -- Use of this source code is governed by a BSD-style license that can be
  -- found in the LICENSE file.
  -->
<style>
  #select-folders {
    border: 1px solid var(--cros-separator-color);
    border-radius: 8px;
    margin-bottom: 28px;
    margin-inline: 48px;
    margin-top: 22px;
    max-height: 168px;
    overflow-y: auto;
    padding-bottom: 16px;
  }

  #select-folders ul {
    list-style-type: none;
    margin: 0;
    padding-inline-start: 16px;
  }

  /* When a folder is not expanded, hide it's children */
  #select-folders li:not([expanded]) + ul {
    display: none;
  }

  #select-folders li > .expand-icon {
    -webkit-mask-image: url(/images/expand_arrow.svg);
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    background-color: var(--cros-text-color-primary);
    display: inline-block;
    height: 8px;
    transform: rotate(-90deg);
    transition: all 150ms;
    vertical-align: middle;
    width: 8px;
  }

  #select-folders li[expanded] > .expand-icon {
    transform: rotate(0);
  }

  #select-folders li {
    padding-top: 16px;
  }
</style>
<template id="folder-selector-template">
  <li>
    <span class="expand-icon"></span>
    <input type="checkbox" name="folders">
  </li>
  <ul>
  </ul>
</template>
<div id="select-folders">
  <ul>
    <li expanded>
      <span class="expand-icon"></span>
      <input type="checkbox" name="folders" data-full-path="/">
      <!-- TODO(b/237066325): Use the i18n version of this. -->
      My files
    </li>
    <ul></ul>
  </ul>
</div><!--_html_template_end_-->`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVyX3NlbGVjdG9yLmh0bWwuanMiLCJzb3VyY2VSb290IjoiL3Zhci9jYWNoZS9jaHJvbWVvcy1jaHJvbWUvY2hyb21lLXNyYy9zcmMvb3V0X2FybTY0LWdlbmVyaWMvUmVsZWFzZS9nZW4vY2hyb21lL2Jyb3dzZXIvcmVzb3VyY2VzL2Nocm9tZW9zL21hbmFnZV9taXJyb3JzeW5jLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2xkZXJfc2VsZWN0b3IuaHRtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0seURBQXlELENBQUM7QUFDN0UsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTyxJQUFJLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBbUVvQixDQUFDO0FBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2h0bWx9IGZyb20gJy8vcmVzb3VyY2VzL3BvbHltZXIvdjNfMC9wb2x5bWVyL3BvbHltZXJfYnVuZGxlZC5taW4uanMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlKCkge1xuICByZXR1cm4gaHRtbGA8IS0tX2h0bWxfdGVtcGxhdGVfc3RhcnRfLS0+PCEtLVxuICAtLSBDb3B5cmlnaHQgMjAyMiBUaGUgQ2hyb21pdW0gQXV0aG9yc1xuICAtLSBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gIC0tIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG4gIC0tPlxuPHN0eWxlPlxuICAjc2VsZWN0LWZvbGRlcnMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNyb3Mtc2VwYXJhdG9yLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICBtYXJnaW4taW5saW5lOiA0OHB4O1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgbWF4LWhlaWdodDogMTY4cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gICNzZWxlY3QtZm9sZGVycyB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTZweDtcbiAgfVxuXG4gIC8qIFdoZW4gYSBmb2xkZXIgaXMgbm90IGV4cGFuZGVkLCBoaWRlIGl0J3MgY2hpbGRyZW4gKi9cbiAgI3NlbGVjdC1mb2xkZXJzIGxpOm5vdChbZXhwYW5kZWRdKSArIHVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI3NlbGVjdC1mb2xkZXJzIGxpID4gLmV4cGFuZC1pY29uIHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgvaW1hZ2VzL2V4cGFuZF9hcnJvdy5zdmcpO1xuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcm9zLXRleHQtY29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDhweDtcbiAgfVxuXG4gICNzZWxlY3QtZm9sZGVycyBsaVtleHBhbmRlZF0gPiAuZXhwYW5kLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG5cbiAgI3NlbGVjdC1mb2xkZXJzIGxpIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuPC9zdHlsZT5cbjx0ZW1wbGF0ZSBpZD1cImZvbGRlci1zZWxlY3Rvci10ZW1wbGF0ZVwiPlxuICA8bGk+XG4gICAgPHNwYW4gY2xhc3M9XCJleHBhbmQtaWNvblwiPjwvc3Bhbj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZvbGRlcnNcIj5cbiAgPC9saT5cbiAgPHVsPlxuICA8L3VsPlxuPC90ZW1wbGF0ZT5cbjxkaXYgaWQ9XCJzZWxlY3QtZm9sZGVyc1wiPlxuICA8dWw+XG4gICAgPGxpIGV4cGFuZGVkPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleHBhbmQtaWNvblwiPjwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZm9sZGVyc1wiIGRhdGEtZnVsbC1wYXRoPVwiL1wiPlxuICAgICAgPCEtLSBUT0RPKGIvMjM3MDY2MzI1KTogVXNlIHRoZSBpMThuIHZlcnNpb24gb2YgdGhpcy4gLS0+XG4gICAgICBNeSBmaWxlc1xuICAgIDwvbGk+XG4gICAgPHVsPjwvdWw+XG4gIDwvdWw+XG48L2Rpdj48IS0tX2h0bWxfdGVtcGxhdGVfZW5kXy0tPmA7XG59Il19