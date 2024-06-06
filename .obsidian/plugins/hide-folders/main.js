/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HideFoldersPlugin,
  getFolderNameWithoutPrefix: () => getFolderNameWithoutPrefix
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// compat/compat-quickexplorer.ts
var CompatQuickExplorer = {
  getAdditionalDocumentSelectorStringForFolder: function(folderName, pluginSettings) {
    if (folderName.toLowerCase().startsWith("endswith::")) {
      return `.is-qe-folder[data-file-path$="${getFolderNameWithoutPrefix(folderName)}"${pluginSettings.matchCaseInsensitive ? " i" : ""}]`;
    } else if (folderName.toLowerCase().startsWith("startswith::")) {
      return `.is-qe-folder[data-file-path^="${getFolderNameWithoutPrefix(folderName)}"${pluginSettings.matchCaseInsensitive ? " i" : ""}], .is-qe-folder[data-file-path*="/${getFolderNameWithoutPrefix(folderName)}"${pluginSettings.matchCaseInsensitive ? " i" : ""}]`;
    } else {
      return `.is-qe-folder[data-file-path$="/${folderName.trim()}"${pluginSettings.matchCaseInsensitive ? " i" : ""}], .is-qe-folder[data-file-path="${folderName.trim()}"${pluginSettings.matchCaseInsensitive ? " i" : ""}]`;
    }
  },
  shouldMutationRecordTriggerFolderReProcessing: (record) => {
    var _a, _b;
    for (const addedNode of record.addedNodes) {
      if (!addedNode.tagName)
        continue;
      if (addedNode.classList.contains("qe-popup-menu")) {
        const firstQePopUpMenu = document.getElementsByClassName("qe-popup-menu")[0];
        if (!firstQePopUpMenu)
          return true;
        firstQePopUpMenu.style.top = "";
        firstQePopUpMenu.style.bottom = "1.7rem";
        return true;
      }
    }
    if ((_b = (_a = record.target) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.classList.contains("is-qe-folder")) {
      return true;
    }
    return false;
  }
};

// main.ts
var DEFAULT_SETTINGS = {
  areFoldersHidden: true,
  matchCaseInsensitive: true,
  addHiddenFoldersToObsidianIgnoreList: false,
  enableCompatQuickExplorer: false,
  attachmentFolderNames: ["attachments"]
};
var HideFoldersPlugin = class extends import_obsidian.Plugin {
  async processFolders(recheckPreviouslyHiddenFolders) {
    if (this.settings.attachmentFolderNames.length === 0)
      return;
    if (recheckPreviouslyHiddenFolders) {
      document.querySelectorAll(".obsidian-hide-folders--hidden").forEach((folder) => {
        folder.style.height = "";
        folder.style.overflow = "";
        folder.removeClass("obsidian-hide-folders--hidden");
      });
    }
    this.settings.attachmentFolderNames.forEach((folderName) => {
      var _a, _b;
      if (getFolderNameWithoutPrefix(folderName) === "")
        return;
      const folderElements = document.querySelectorAll([
        this.getQuerySelectorStringForFolderName(folderName),
        this.settings.enableCompatQuickExplorer ? (_b = (_a = CompatQuickExplorer).getAdditionalDocumentSelectorStringForFolder) == null ? void 0 : _b.call(_a, folderName, this.settings) : null
      ].filter((o) => o != null).join(", "));
      folderElements.forEach((folder) => {
        if (!folder) {
          return;
        }
        folder.addClass("obsidian-hide-folders--hidden");
        folder.style.height = this.settings.areFoldersHidden ? "0" : "";
        folder.style.display = this.settings.areFoldersHidden ? "none" : "";
        folder.style.overflow = this.settings.areFoldersHidden ? "hidden" : "";
      });
    });
  }
  getQuerySelectorStringForFolderName(folderName) {
    if (folderName.toLowerCase().startsWith("endswith::")) {
      return `*:has(> [data-path$="${getFolderNameWithoutPrefix(folderName)}"${this.settings.matchCaseInsensitive ? " i" : ""}])`;
    } else if (folderName.toLowerCase().startsWith("startswith::")) {
      return `*:has(> .nav-folder-title[data-path^="${getFolderNameWithoutPrefix(folderName)}"${this.settings.matchCaseInsensitive ? " i" : ""}]), *:has(> .nav-folder-title[data-path*="/${getFolderNameWithoutPrefix(folderName)}"${this.settings.matchCaseInsensitive ? " i" : ""}])`;
    } else {
      return `*:has(> [data-path$="/${folderName.trim()}"${this.settings.matchCaseInsensitive ? " i" : ""}]), *:has(> [data-path="${folderName.trim()}"${this.settings.matchCaseInsensitive ? " i" : ""}])`;
    }
  }
  async toggleFunctionality() {
    this.settings.areFoldersHidden = !this.settings.areFoldersHidden;
    this.ribbonIconButton.ariaLabel = this.settings.areFoldersHidden ? "Show hidden folders" : "Hide hidden folders again";
    (0, import_obsidian.setIcon)(this.ribbonIconButton, this.settings.areFoldersHidden ? "eye" : "eye-off");
    this.statusBarItem.innerHTML = this.settings.areFoldersHidden ? "Configured folders are hidden" : "";
    await this.processFolders();
    await this.saveSettings();
    await this.updateObsidianIgnoreList();
  }
  createIgnoreListRegExpForFolderName(rawFolderName) {
    const folderName = this.settings.matchCaseInsensitive ? getFolderNameWithoutPrefix(rawFolderName).split("").map((c) => c.toLowerCase() != c.toUpperCase() ? `[${c.toLowerCase()}${c.toUpperCase()}]` : c).join("") : getFolderNameWithoutPrefix(rawFolderName);
    if (rawFolderName.toLowerCase().startsWith("endswith::")) {
      return `/(${folderName}$)|(${folderName}/)/`;
    } else if (rawFolderName.toLowerCase().startsWith("startswith::")) {
      return `/(^${folderName})|(/${folderName})/`;
    } else {
      return `/${folderName}/`;
    }
  }
  async updateObsidianIgnoreList(processFeatureDisabling) {
    var _a;
    if (!this.settings.addHiddenFoldersToObsidianIgnoreList && !processFeatureDisabling)
      return;
    let ignoreList = (_a = this.app.vault.getConfig("userIgnoreFilters")) != null ? _a : [];
    if (this.settings.areFoldersHidden && !processFeatureDisabling) {
      this.settings.attachmentFolderNames.forEach((folderName) => {
        if (getFolderNameWithoutPrefix(folderName).trim() === "")
          return;
        if (ignoreList.contains(this.createIgnoreListRegExpForFolderName(folderName)))
          return;
        ignoreList.push(this.createIgnoreListRegExpForFolderName(folderName));
      });
    } else {
      const folderNameRegexes = this.settings.attachmentFolderNames.map((folderName) => this.createIgnoreListRegExpForFolderName(folderName));
      ignoreList = ignoreList.filter((s) => !folderNameRegexes.includes(s));
    }
    this.app.vault.setConfig("userIgnoreFilters", ignoreList);
  }
  async removeSpecificFoldersFromObsidianIgnoreList(folderNames) {
    folderNames.forEach((folderName) => {
      var _a;
      (_a = this.app.vault.config.userIgnoreFilters) == null ? void 0 : _a.remove(this.createIgnoreListRegExpForFolderName(folderName));
      this.app.vault.trigger("config-changed");
    });
  }
  async onload() {
    console.log("loading plugin hide-folders");
    await this.loadSettings();
    this.ribbonIconButton = this.addRibbonIcon(this.settings.areFoldersHidden ? "eye" : "eye-off", this.settings.areFoldersHidden ? "Show hidden folders" : "Hide hidden folders again", (evt) => {
      this.toggleFunctionality();
    });
    this.statusBarItem = this.addStatusBarItem();
    this.statusBarItem.setText(this.settings.areFoldersHidden ? "Attachment folders are hidden" : "");
    this.addCommand({
      id: "toggle-attachment-folders",
      name: "Toggle visibility of hidden folders",
      callback: () => {
        this.toggleFunctionality();
      }
    });
    this.addSettingTab(new HideFoldersPluginSettingTab(this.app, this));
    this.mutationObserver = new MutationObserver((mutationRecord) => {
      mutationRecord.forEach((record) => {
        var _a, _b, _c, _d;
        if ((_b = (_a = record.target) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.classList.contains("nav-folder")) {
          this.processFolders();
          return;
        }
        if (this.settings.enableCompatQuickExplorer) {
          if ((_d = (_c = CompatQuickExplorer).shouldMutationRecordTriggerFolderReProcessing) == null ? void 0 : _d.call(_c, record)) {
            this.processFolders();
          }
        }
      });
    });
    this.mutationObserver.observe(window.document, { childList: true, subtree: true });
    this.registerEvent(this.app.vault.on("rename", () => {
      window.setTimeout(() => {
        this.processFolders();
      }, 10);
    }));
  }
  onunload() {
    this.mutationObserver.disconnect();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    await this.processFolders(true);
  }
};
var HideFoldersPluginSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const experimentalSettingsContainerEl = document.createElement("details");
    const experimentalSettingsTitleEl = document.createElement("summary");
    experimentalSettingsTitleEl.innerText = "Experimental & Unstable Settings";
    experimentalSettingsContainerEl.appendChild(experimentalSettingsTitleEl);
    new import_obsidian.Setting(containerEl).setName("Folders to hide").setDesc("The names of the folders to hide, one per line. Either exact folder-names, startsWith::FOLDERPREFIX, or endsWith::FOLDERSUFFIX").addTextArea((text) => text.setPlaceholder("attachments\nendsWith::_attachments").setValue(this.plugin.settings.attachmentFolderNames.join("\n")).onChange(async (value) => {
      const newSettingsValue = value.split("\n");
      await this.plugin.removeSpecificFoldersFromObsidianIgnoreList(this.plugin.settings.attachmentFolderNames.filter((e) => !newSettingsValue.includes(e)));
      this.plugin.settings.attachmentFolderNames = newSettingsValue;
      await this.plugin.saveSettings();
      await this.plugin.updateObsidianIgnoreList();
    }));
    new import_obsidian.Setting(containerEl).setName("Ignore Upper/lowercase").setDesc("If enabled, 'SOMEFOLDER', 'someFolder', or 'sOmeFoldEr' will all be treated the same and matched.").addToggle((toggle) => toggle.setValue(this.plugin.settings.matchCaseInsensitive).onChange(async (value) => {
      await this.plugin.removeSpecificFoldersFromObsidianIgnoreList(this.plugin.settings.attachmentFolderNames);
      this.plugin.settings.matchCaseInsensitive = value;
      await this.plugin.saveSettings();
      await this.plugin.updateObsidianIgnoreList();
    }));
    new import_obsidian.Setting(containerEl).setName("Hide folders").setDesc("If the configured folders should be hidden or not").addToggle((toggle) => toggle.setValue(this.plugin.settings.areFoldersHidden).onChange(async (value) => {
      this.plugin.settings.areFoldersHidden = value;
      await this.plugin.saveSettings();
      await this.plugin.updateObsidianIgnoreList();
    }));
    new import_obsidian.Setting(containerEl).setName("Add Hidden Folders to Obsidian Exclusion-List").setDesc("Excluded files will be hidden in Search, Graph View, and Unlinked Mentions, less noticeable in Quick Switcher and link suggestions.").addToggle((toggle) => toggle.setValue(this.plugin.settings.addHiddenFoldersToObsidianIgnoreList).onChange(async (value) => {
      this.plugin.settings.addHiddenFoldersToObsidianIgnoreList = value;
      await this.plugin.saveSettings();
      await this.plugin.updateObsidianIgnoreList(!value);
    }));
    new import_obsidian.Setting(experimentalSettingsContainerEl).setName("[EXPERIMENTAL] Compatibility: quick-explorer by pjeby").setDesc("[WARNING: UNSTABLE] Also hide hidden folders in the https://github.com/pjeby/quick-explorer plugin. Not affiliated with quick-explorer's author.").addToggle((toggle) => toggle.setValue(this.plugin.settings.enableCompatQuickExplorer).onChange(async (value) => {
      this.plugin.settings.enableCompatQuickExplorer = value;
      await this.plugin.saveSettings();
    }));
    containerEl.appendChild(document.createElement("br"));
    new import_obsidian.Setting(containerEl).setName("GitHub").setDesc("Report Issues or Ideas, see the Source Code and Contribute.").addButton((button) => button.buttonEl.innerHTML = '<a href="https://github.com/JonasDoesThings/obsidian-hide-folders" target="_blank">obsidian-hide-folders</a>');
    new import_obsidian.Setting(containerEl).setName("Donate").setDesc("If you like this open-source plugin, consider a small tip to support my unpaid work.").addButton((button) => button.buttonEl.outerHTML = "<a href='https://www.buymeacoffee.com/jonasdoesthings' target='_blank'><img src='https://cdn.buymeacoffee.com/buttons/default-orange.png' alt='Buy Me A Coffee' height='27' width='116'></a>");
    containerEl.appendChild(document.createElement("br"));
    containerEl.appendChild(experimentalSettingsContainerEl);
  }
};
function getFolderNameWithoutPrefix(folderName) {
  if (folderName.toLowerCase().startsWith("endswith::")) {
    return folderName.substring("endsWith::".length).trim();
  } else if (folderName.toLowerCase().startsWith("startswith::")) {
    return folderName.substring("startsWith::".length).trim();
  } else {
    return folderName;
  }
}
