import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><!--
  -- Copyright 2022 The Chromium Authors
  -- Use of this source code is governed by a BSD-style license that can be
  -- found in the LICENSE file.
  -->
<style>
  form {
    border: 1px solid var(--cros-separator-color);
    border-radius: 12px;
    margin: 10px;
  }

  .sync-selection-row {
    align-items: center;
    border-bottom: 1px solid var(--cros-separator-color);
    display: flex;
    flex-wrap: wrap;
  }

  .sync-selection-row:last-child {
    border-bottom: none;
  }

  .radio-wrapper {
    margin-inline-start: 16px;
    width: 32px;
  }

  input[type='radio'] {
    margin: 0;
  }

  .sync-selection-description {
    padding: 16px 0 16px;
  }

  .sync-selection-description h2 {
    color: var(--cros-text-color-primary);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    padding: 0;
  }

  .sync-selection-description p {
    color: var(--cros-text-color-secondary);
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  }
</style>
<form>
  <label class="sync-selection-row">
    <div class="radio-wrapper">
      <input type="radio" name="selection" value="everything" id="everything">
    </div>
    <div class="sync-selection-description">
      <h2>Sync everything on this Chromebook</h2>
      <p>All files (except Play and Linux files) back up to Google Drive.</p>
    </div>
  </label>
  <label class="sync-selection-row">
    <div class="radio-wrapper">
      <input type="radio" name="selection" value="selected" id="selected">
    </div>
    <div class="sync-selection-description">
      <h2>Sync selected files or folders</h2>
    </div>
  </label>
  <folder-selector hidden></folder-selector>
</form>
<!--_html_template_end_-->`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlX21pcnJvcnN5bmMuaHRtbC5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL2NhY2hlL2Nocm9tZW9zLWNocm9tZS9jaHJvbWUtc3JjL3NyYy9vdXRfYXJtNjQtZ2VuZXJpYy9SZWxlYXNlL2dlbi9jaHJvbWUvYnJvd3Nlci9yZXNvdXJjZXMvY2hyb21lb3MvbWFuYWdlX21pcnJvcnN5bmMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL21hbmFnZV9taXJyb3JzeW5jLmh0bWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQzdFLE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU8sSUFBSSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBd0VjLENBQUM7QUFDNUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aHRtbH0gZnJvbSAnLy9yZXNvdXJjZXMvcG9seW1lci92M18wL3BvbHltZXIvcG9seW1lcl9idW5kbGVkLm1pbi5qcyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcGxhdGUoKSB7XG4gIHJldHVybiBodG1sYDwhLS1faHRtbF90ZW1wbGF0ZV9zdGFydF8tLT48IS0tXG4gIC0tIENvcHlyaWdodCAyMDIyIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4gIC0tIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgLS0gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cbiAgLS0+XG48c3R5bGU+XG4gIGZvcm0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNyb3Mtc2VwYXJhdG9yLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zeW5jLXNlbGVjdGlvbi1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNyb3Mtc2VwYXJhdG9yLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5zeW5jLXNlbGVjdGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIC5yYWRpby13cmFwcGVyIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxNnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnN5bmMtc2VsZWN0aW9uLWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNnB4IDAgMTZweDtcbiAgfVxuXG4gIC5zeW5jLXNlbGVjdGlvbi1kZXNjcmlwdGlvbiBoMiB7XG4gICAgY29sb3I6IHZhcigtLWNyb3MtdGV4dC1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5zeW5jLXNlbGVjdGlvbi1kZXNjcmlwdGlvbiBwIHtcbiAgICBjb2xvcjogdmFyKC0tY3Jvcy10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG48L3N0eWxlPlxuPGZvcm0+XG4gIDxsYWJlbCBjbGFzcz1cInN5bmMtc2VsZWN0aW9uLXJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby13cmFwcGVyXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNlbGVjdGlvblwiIHZhbHVlPVwiZXZlcnl0aGluZ1wiIGlkPVwiZXZlcnl0aGluZ1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzeW5jLXNlbGVjdGlvbi1kZXNjcmlwdGlvblwiPlxuICAgICAgPGgyPlN5bmMgZXZlcnl0aGluZyBvbiB0aGlzIENocm9tZWJvb2s8L2gyPlxuICAgICAgPHA+QWxsIGZpbGVzIChleGNlcHQgUGxheSBhbmQgTGludXggZmlsZXMpIGJhY2sgdXAgdG8gR29vZ2xlIERyaXZlLjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9sYWJlbD5cbiAgPGxhYmVsIGNsYXNzPVwic3luYy1zZWxlY3Rpb24tcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvLXdyYXBwZXJcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2VsZWN0aW9uXCIgdmFsdWU9XCJzZWxlY3RlZFwiIGlkPVwic2VsZWN0ZWRcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3luYy1zZWxlY3Rpb24tZGVzY3JpcHRpb25cIj5cbiAgICAgIDxoMj5TeW5jIHNlbGVjdGVkIGZpbGVzIG9yIGZvbGRlcnM8L2gyPlxuICAgIDwvZGl2PlxuICA8L2xhYmVsPlxuICA8Zm9sZGVyLXNlbGVjdG9yIGhpZGRlbj48L2ZvbGRlci1zZWxlY3Rvcj5cbjwvZm9ybT5cbjwhLS1faHRtbF90ZW1wbGF0ZV9lbmRfLS0+YDtcbn0iXX0=