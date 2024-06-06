---
database-plugin: basic
tags:
  - database
---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 3
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  author:
    input: text
    accessorKey: author
    key: author
    id: author
    label: author
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 150
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  rating:
    input: select
    accessorKey: rating
    key: rating
    id: rating
    label: rating
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 152
    options:
      - { label: "★★★★★", value: "★★★★★", color: "hsl(177, 95%, 90%)"}
      - { label: "★★☆☆☆", value: "★★☆☆☆", color: "hsl(140, 95%, 90%)"}
      - { label: "★☆☆☆☆", value: "★☆☆☆☆", color: "hsl(230, 95%, 90%)"}
      - { label: "★★★☆☆", value: "★★★☆☆", color: "hsl(26, 95%, 90%)"}
      - { label: "★★★★☆", value: "★★★★☆", color: "hsl(181, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
      content_alignment: text-align-center
      wrap_content: true
      content_vertical_alignment: align-middle
  cover:
    input: text
    accessorKey: cover
    key: cover
    id: cover
    label: cover
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 106
    config:
      enable_media_view: true
      link_alias_enabled: false
      media_width: 110
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  status:
    input: select
    accessorKey: status
    key: status
    id: status
    label: status
    position: 1
    skipPersist: false
    isHidden: false
    sortIndex: 1
    isSorted: true
    isSortedDesc: true
    width: 128
    options:
      - { label: "Not_read", value: "Not_read", color: "hsl(348,96%,90%)"}
      - { label: "Read", value: "Read", color: "hsl(138,96%,90%)"}
      - { label: "Paused", value: "Paused", color: "hsl(258,96%,90%)"}
      - { label: "Reading", value: "Reading", color: "hsl(34, 95%, 90%)"}
      - { label: "Rereading", value: "Rereading", color: "hsl(284, 95%, 90%)"}
      - { label: "Finished", value: "Finished", color: "hsl(150, 95%, 90%)"}
      - { label: "Ready to read", value: "Ready to read", color: "hsl(95, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
  date_read:
    input: text
    accessorKey: date_read
    key: date_read
    id: date_read
    label: date read
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  category:
    input: text
    accessorKey: category
    key: category
    id: category
    label: category
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: boo
  pagination_size: 155
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```