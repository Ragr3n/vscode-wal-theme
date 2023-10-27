import * as Color from 'color';
type pywalD = {[key: string]: { [key: string]: Color }} 

export default (colorObjects: pywalD) => ({
	"type": "dark",
	"colors": {
		"activityBar.activeBackground": colorObjects.special.background.lighten(0.2).hex(),
		"activityBar.activeBorder": colorObjects.colors.color6.hex(),
		"activityBar.background": colorObjects.special.background.hex(),
		"activityBar.foreground": colorObjects.special.foreground.hex(),
		"activityBarBadge.background": colorObjects.colors.color6.hex(),
		"activityBarBadge.foreground": colorObjects.special.background.hex(),
		"badge.background": colorObjects.colors.color6.hex(),
		"badge.foreground": colorObjects.special.background.hex(),
		"button.background": colorObjects.colors.color6.hex()+"ee",
		"button.foreground": colorObjects.special.background.hex(),
		"button.hoverBackground": colorObjects.colors.color6.hex(),
		"button.secondaryBackground": colorObjects.special.background.lighten(0.5).hex(),
		"button.secondaryForeground": colorObjects.special.foreground.hex(),
		"button.secondaryHoverBackground": colorObjects.special.background.lighten(1.1).hex(),
		"charts.blue": colorObjects.colors.color4.hex(),
		"charts.foreground": colorObjects.special.foreground.hex(),
		"charts.green": colorObjects.colors.color2.hex(),
		"charts.lines": colorObjects.colors.color6.hex(),
		"charts.orange": colorObjects.colors.color9.hex(),
		"charts.purple": colorObjects.colors.color5.hex(),
		"charts.red": colorObjects.colors.color1.hex(),
		"charts.yellow": colorObjects.colors.color2.hex(),
		"debugConsole.errorForeground": colorObjects.colors.color1.hex(),
		"debugConsole.infoForeground": colorObjects.colors.color6.hex(),
		"debugConsole.sourceForeground": colorObjects.special.foreground.darken(0.4).hex(),
		"debugConsole.warningForeground": colorObjects.colors.color2.hex(),
		"debugConsoleInputIcon.foreground": colorObjects.colors.color4.hex(),
		"debugExceptionWidget.background": colorObjects.special.background.lighten(1.1).hex(),
		"debugExceptionWidget.border": colorObjects.special.background.hex(),
		"debugToolBar.background": colorObjects.special.background.lighten(0.2).hex(),
		"descriptionForeground": colorObjects.special.foreground.hex()+"e6",
		"diffEditor.insertedTextBackground": colorObjects.colors.color4.hex()+"33",
		"diffEditor.removedTextBackground": colorObjects.colors.color1.hex()+"4d",
		"dropdown.background": colorObjects.special.background.lighten(0.2).hex(),
		"dropdown.border": colorObjects.special.background.lighten(0.2).hex(),
		"dropdown.foreground": colorObjects.special.foreground.hex(),
		"editor.background": colorObjects.special.background.hex(),
		"editor.findMatchBackground": colorObjects.colors.color6.hex()+"66",
		"editor.findMatchHighlightBackground": colorObjects.colors.color6.hex()+"33",
		"editor.findRangeHighlightBackground": colorObjects.colors.color6.hex()+"33",
		"editor.focusedStackFrameHighlightBackground": colorObjects.colors.color4.darken(0.3).hex(),
		"editor.foreground": colorObjects.special.foreground.hex(),
		"editor.hoverHighlightBackground": colorObjects.special.background.lighten(0.2).hex(),
		"editor.inactiveSelectionBackground": colorObjects.special.background.lighten(0.5).hex()+"cc",
		"editor.inlineValuesBackground": colorObjects.special.background.lighten(1.1).hex(),
		"editor.inlineValuesForeground": colorObjects.special.foreground.hex(),
		"editor.lineHighlightBackground": colorObjects.special.background.lighten(0.2).hex(),
		"editor.lineHighlightBorder": colorObjects.special.background.lighten(0.2).hex(),
		"editor.rangeHighlightBackground": colorObjects.special.background.lighten(0.5).hex()+"52",
		"editor.selectionBackground": colorObjects.special.background.lighten(0.5).hex()+"cc",
		"editor.selectionHighlightBackground": colorObjects.special.background.lighten(0.5).hex()+"cc",
		"editor.stackFrameHighlightBackground": colorObjects.colors.color4.darken(0.3).hex(),
		"editor.wordHighlightBackground": colorObjects.colors.color4.hex()+"66",
		"editor.wordHighlightStrongBackground": colorObjects.colors.color4.hex()+"99",
		"editorActiveLineNumber.foreground": colorObjects.special.foreground.hex()+"cc",
		"editorBracketHighlight.foreground1": colorObjects.colors.color14.hex(),
		"editorBracketHighlight.foreground2": colorObjects.colors.color6.hex(),
		"editorBracketHighlight.foreground3": colorObjects.colors.color4.hex(),
		"editorBracketHighlight.foreground4": colorObjects.colors.color4.darken(0.3).hex(),
		"editorBracketHighlight.foreground5": colorObjects.colors.color14.hex(),
		"editorBracketHighlight.foreground6": colorObjects.colors.color6.hex(),
		"editorBracketHighlight.unexpectedBracket.foreground": colorObjects.colors.color1.hex(),
		"editorBracketMatch.background": colorObjects.special.background.hex()+"00",
		"editorBracketMatch.border": colorObjects.colors.color6.hex(),
		"editorCodeLens.foreground": colorObjects.special.background.lighten(1.1).hex(),
		"editorCursor.foreground": colorObjects.special.foreground.hex(),
		"editorError.border": colorObjects.colors.color1.hex()+"00",
		"editorError.foreground": colorObjects.colors.color1.hex(),
		"editorGroup.border": colorObjects.special.background.lighten(0.2).hex()+"01",
		"editorGroup.dropBackground": colorObjects.special.background.lighten(0.2).hex()+"99",
		"editorGroupHeader.border": colorObjects.special.background.lighten(0.2).hex()+"00",
		"editorGroupHeader.noTabsBackground": colorObjects.special.background.hex(),
		"editorGroupHeader.tabsBackground": colorObjects.special.background.hex(),
		"editorGroupHeader.tabsBorder": colorObjects.special.background.lighten(0.2).hex()+"00",
		"editorGutter.addedBackground": colorObjects.colors.color2.hex(),
		"editorGutter.background": colorObjects.special.background.hex(),
		"editorGutter.deletedBackground": colorObjects.colors.color1.hex(),
		"editorGutter.modifiedBackground": colorObjects.colors.color2.hex(),
		"editorHint.border": colorObjects.colors.color2.hex()+"00",
		"editorHint.foreground": colorObjects.colors.color2.hex(),
		"editorHoverWidget.background": colorObjects.special.background.lighten(0.2).hex(),
		"editorHoverWidget.border": colorObjects.special.background.lighten(0.2).hex(),
		"editorIndentGuide.activeBackground": colorObjects.special.background.lighten(1.1).hex(),
		"editorIndentGuide.background": colorObjects.special.background.lighten(0.5).hex()+"b3",
		"editorInlayHint.background": colorObjects.special.background.lighten(0.5).hex(),
		"editorInlayHint.foreground": colorObjects.special.foreground.hex(),
		"editorLineNumber.activeForeground": colorObjects.special.foreground.hex(),
		"editorLineNumber.foreground": colorObjects.special.background.lighten(1.1).hex(),
		"editorLink.activeForeground": colorObjects.colors.color6.hex(),
		"editorMarkerNavigation.background": colorObjects.colors.color4.darken(0.3).hex()+"c0",
		"editorMarkerNavigationError.background": colorObjects.colors.color1.hex()+"c0",
		"editorMarkerNavigationWarning.background": colorObjects.colors.color2.hex()+"c0",
		"editorOverviewRuler.addedForeground": colorObjects.colors.color2.hex(),
		"editorOverviewRuler.border": colorObjects.special.background.lighten(0.2).hex(),
		"editorOverviewRuler.currentContentForeground": colorObjects.special.background.lighten(0.2).hex(),
		"editorOverviewRuler.deletedForeground": colorObjects.colors.color1.hex(),
		"editorOverviewRuler.errorForeground": colorObjects.colors.color1.hex(),
		"editorOverviewRuler.findMatchForeground": colorObjects.colors.color6.hex()+"66",
		"editorOverviewRuler.incomingContentForeground": colorObjects.special.background.lighten(0.2).hex(),
		"editorOverviewRuler.infoForeground": colorObjects.colors.color4.hex(),
		"editorOverviewRuler.modifiedForeground": colorObjects.colors.color2.hex(),
		"editorOverviewRuler.rangeHighlightForeground": colorObjects.colors.color6.hex()+"66",
		"editorOverviewRuler.selectionHighlightForeground": colorObjects.colors.color6.hex()+"66",
		"editorOverviewRuler.warningForeground": colorObjects.colors.color2.hex(),
		"editorOverviewRuler.wordHighlightForeground": colorObjects.colors.color6.hex()+"66",
		"editorOverviewRuler.wordHighlightStrongForeground": colorObjects.colors.color6.hex()+"66",
		"editorRuler.foreground": colorObjects.special.background.lighten(0.5).hex(),
		"editorSuggestWidget.background": colorObjects.special.background.hex(),
		"editorSuggestWidget.border": colorObjects.special.background.lighten(0.2).hex(),
		"editorSuggestWidget.focusHighlightForeground": colorObjects.colors.color6.hex(),
		"editorSuggestWidget.foreground": colorObjects.special.foreground.hex(),
		"editorSuggestWidget.highlightForeground": colorObjects.colors.color6.hex(),
		"editorSuggestWidget.selectedBackground": colorObjects.special.background.lighten(0.5).hex(),
		"editorSuggestWidget.selectedForeground": colorObjects.special.foreground.hex(),
		"editorWarning.border": colorObjects.colors.color2.hex()+"00",
		"editorWarning.foreground": colorObjects.colors.color2.hex(),
		"editorWhitespace.foreground": colorObjects.special.background.lighten(0.7).hex()+"b3",
		"editorWidget.background": colorObjects.special.background.hex(),
		"editorWidget.border": colorObjects.special.background.lighten(0.2).hex(),
		"errorForeground": colorObjects.colors.color1.hex(),
		"extensionButton.prominentBackground": colorObjects.special.background.lighten(0.5).hex(),
		"extensionButton.prominentForeground": colorObjects.special.foreground.hex(),
		"extensionButton.prominentHoverBackground": colorObjects.special.background.lighten(1.1).hex(),
		"focusBorder": colorObjects.special.background.lighten(0.2).hex(),
		"foreground": colorObjects.special.foreground.hex(),
		"gitDecoration.conflictingResourceForeground": colorObjects.colors.color4.darken(0.3).hex(),
		"gitDecoration.deletedResourceForeground": colorObjects.colors.color1.hex(),
		"gitDecoration.ignoredResourceForeground": colorObjects.special.foreground.hex()+"66",
		"gitDecoration.modifiedResourceForeground": colorObjects.colors.color2.hex(),
		"gitDecoration.stageDeletedResourceForeground": colorObjects.colors.color1.hex(),
		"gitDecoration.stageModifiedResourceForeground": colorObjects.colors.color2.hex(),
		"gitDecoration.submoduleResourceForeground": colorObjects.colors.color14.hex(),
		"gitDecoration.untrackedResourceForeground": colorObjects.colors.color2.hex(),
		"input.background": colorObjects.special.background.lighten(0.2).hex(),
		"input.border": colorObjects.special.background.lighten(0.2).hex(),
		"input.foreground": colorObjects.special.foreground.hex(),
		"input.placeholderForeground": colorObjects.special.foreground.hex()+"99",
		"inputOption.activeBackground": colorObjects.colors.color4.darken(0.3).hex(),
		"inputOption.activeBorder": colorObjects.colors.color4.darken(0.3).hex(),
		"inputOption.activeForeground": colorObjects.special.foreground.hex(),
		"inputValidation.errorBackground": colorObjects.colors.color1.hex(),
		"inputValidation.errorBorder": colorObjects.colors.color1.hex(),
		"inputValidation.infoBackground": colorObjects.colors.color4.hex(),
		"inputValidation.infoBorder": colorObjects.colors.color4.hex(),
		"inputValidation.warningBackground": colorObjects.colors.color9.hex(),
		"inputValidation.warningBorder": colorObjects.colors.color9.hex(),
		"keybindingLabel.background": colorObjects.special.background.lighten(1.1).hex(),
		"keybindingLabel.border": colorObjects.special.background.lighten(1.1).hex(),
		"keybindingLabel.bottomBorder": colorObjects.special.background.lighten(1.1).hex(),
		"keybindingLabel.foreground": colorObjects.special.foreground.hex(),
		"list.activeSelectionBackground": colorObjects.colors.color6.hex(),
		"list.activeSelectionForeground": colorObjects.special.background.hex(),
		"list.dropBackground": colorObjects.colors.color6.hex()+"99",
		"list.errorForeground": colorObjects.colors.color1.hex(),
		"list.focusBackground": colorObjects.colors.color6.hex()+"99",
		"list.focusForeground": colorObjects.special.foreground.hex(),
		"list.focusHighlightForeground": colorObjects.special.foreground.hex(),
		"list.highlightForeground": colorObjects.colors.color6.hex(),
		"list.hoverBackground": colorObjects.special.background.lighten(0.2).hex(),
		"list.hoverForeground": colorObjects.special.foreground.hex(),
		"list.inactiveFocusBackground": colorObjects.special.background.lighten(0.5).hex()+"cc",
		"list.inactiveSelectionBackground": colorObjects.special.background.lighten(0.5).hex(),
		"list.inactiveSelectionForeground": colorObjects.special.foreground.hex(),
		"list.warningForeground": colorObjects.colors.color2.hex(),
		"merge.border": colorObjects.special.background.lighten(0.2).hex()+"00",
		"merge.currentContentBackground": colorObjects.colors.color4.hex()+"4d",
		"merge.currentHeaderBackground": colorObjects.colors.color4.hex()+"66",
		"merge.incomingContentBackground": colorObjects.colors.color14+"4d",
		"merge.incomingHeaderBackground": colorObjects.colors.color14+"66",
		"minimap.background": colorObjects.special.background.hex(),
		"minimap.errorHighlight": colorObjects.colors.color1.hex()+"cc",
		"minimap.findMatchHighlight": colorObjects.colors.color6.hex(),
		"minimap.selectionHighlight": colorObjects.colors.color6.hex()+"cc",
		"minimap.warningHighlight": colorObjects.colors.color2.hex()+"cc",
		"minimapGutter.addedBackground": colorObjects.colors.color2.hex(),
		"minimapGutter.deletedBackground": colorObjects.colors.color1.hex(),
		"minimapGutter.modifiedBackground": colorObjects.colors.color2.hex(),
		"minimapSlider.activeBackground": colorObjects.special.background.lighten(0.5).hex()+"aa",
		"minimapSlider.background": colorObjects.special.background.lighten(0.5).hex()+"99",
		"minimapSlider.hoverBackground": colorObjects.special.background.lighten(0.5).hex()+"aa",
		"notificationCenter.border": colorObjects.special.background.lighten(0.2).hex()+"00",
		"notificationCenterHeader.background": colorObjects.special.background.hex(),
		"notificationCenterHeader.foreground": colorObjects.colors.color6.hex(),
		"notificationLink.foreground": colorObjects.colors.color6.hex(),
		"notificationToast.border": colorObjects.special.background.lighten(0.2).hex()+"00",
		"notifications.background": colorObjects.special.background.lighten(0.2).hex(),
		"notifications.border": colorObjects.special.background.hex(),
		"notifications.foreground": colorObjects.special.foreground.hex(),
		"panel.background": colorObjects.special.background.hex(),
		"panel.border": colorObjects.special.background.lighten(0.2).hex(),
		"panelTitle.activeBorder": colorObjects.colors.color6.hex()+"00",
		"panelTitle.activeForeground": colorObjects.colors.color6.hex(),
		"panelTitle.inactiveForeground": colorObjects.special.foreground.hex(),
		"peekView.border": colorObjects.special.background.lighten(1.1).hex(),
		"peekViewEditor.background": colorObjects.special.background.hex(),
		"peekViewEditor.matchHighlightBackground": colorObjects.colors.color6.hex()+"4d",
		"peekViewEditorGutter.background": colorObjects.special.background.hex(),
		"peekViewResult.background": colorObjects.special.background.hex(),
		"peekViewResult.fileForeground": colorObjects.colors.color6.hex(),
		"peekViewResult.lineForeground": colorObjects.special.foreground.hex()+"66",
		"peekViewResult.matchHighlightBackground": colorObjects.colors.color6.hex()+"cc",
		"peekViewResult.selectionBackground": colorObjects.special.background.lighten(0.5).hex(),
		"peekViewResult.selectionForeground": colorObjects.special.foreground.hex(),
		"peekViewTitle.background": colorObjects.special.background.lighten(0.2).hex(),
		"peekViewTitleDescription.foreground": colorObjects.special.foreground.hex(),
		"peekViewTitleLabel.foreground": colorObjects.colors.color6.hex(),
		"pickerGroup.border": colorObjects.special.background.lighten(0.2).hex(),
		"pickerGroup.foreground": colorObjects.colors.color6.hex(),
		"progressBar.background": colorObjects.colors.color6.hex(),
		"quickInputList.focusBackground": colorObjects.colors.color6.hex(),
		"quickInputList.focusForeground": colorObjects.special.background.hex(),
		"sash.hoverBorder": colorObjects.colors.color6.hex(),
		"scrollbar.shadow": "#00000066",
		"scrollbarSlider.activeBackground": colorObjects.special.background.lighten(0.5).hex()+"aa",
		"scrollbarSlider.background": colorObjects.special.background.lighten(0.5).hex()+"99",
		"scrollbarSlider.hoverBackground": colorObjects.special.background.lighten(0.5).hex()+"aa",
		"selection.background": colorObjects.colors.color6.hex()+"99",
		"sideBar.background": colorObjects.special.background.hex(),
		"sideBar.border": colorObjects.special.background.lighten(0.2).hex(),
		"sideBar.foreground": colorObjects.special.foreground.hex(),
		"sideBarSectionHeader.background": colorObjects.special.background.lighten(0.2).hex(),
		"sideBarSectionHeader.foreground": colorObjects.special.foreground.hex(),
		"sideBarTitle.foreground": colorObjects.special.foreground.hex(),
		"statusBar.background": colorObjects.special.background.lighten(0.2).hex(),
		"statusBar.border": colorObjects.special.background.lighten(0.2).hex()+"00",
		"statusBar.debuggingBackground": colorObjects.colors.color4.darken(0.3).hex(),
		"statusBar.debuggingForeground": colorObjects.special.foreground.hex(),
		"statusBar.foreground": colorObjects.special.foreground.hex(),
		"statusBar.noFolderBackground": colorObjects.special.background.lighten(0.2).hex(),
		"statusBar.noFolderForeground": colorObjects.special.foreground.hex(),
		"statusBarItem.activeBackground": colorObjects.special.background.lighten(1.1).hex(),
		"statusBarItem.errorBackground": colorObjects.special.background.lighten(0.2).hex(),
		"statusBarItem.errorForeground": colorObjects.colors.color1.hex(),
		"statusBarItem.hoverBackground": colorObjects.special.background.lighten(0.5).hex(),
		"statusBarItem.prominentBackground": colorObjects.special.background.lighten(0.2).hex(),
		"statusBarItem.prominentHoverBackground": colorObjects.special.background.lighten(0.5).hex(),
		"statusBarItem.warningBackground": colorObjects.colors.color2.hex(),
		"statusBarItem.warningForeground": colorObjects.special.background.hex(),
		"tab.activeBackground": colorObjects.special.background.lighten(0.2).hex(),
		"tab.activeBorder": colorObjects.colors.color6.hex()+"00",
		"tab.activeBorderTop": colorObjects.colors.color6.hex()+"00",
		"tab.activeForeground": colorObjects.special.foreground.hex(),
		"tab.border": colorObjects.special.background.lighten(0.2).hex()+"00",
		"tab.hoverBackground": colorObjects.special.background.lighten(0.2).hex()+"cc",
		"tab.hoverBorder": colorObjects.colors.color6.hex()+"00",
		"tab.inactiveBackground": colorObjects.special.background.hex(),
		"tab.inactiveForeground": colorObjects.special.foreground.hex()+"66",
		"tab.lastPinnedBorder": colorObjects.special.background.lighten(1.1).hex(),
		"tab.unfocusedActiveBorder": colorObjects.colors.color6.hex()+"00",
		"tab.unfocusedActiveBorderTop": colorObjects.colors.color6.hex()+"00",
		"tab.unfocusedActiveForeground": colorObjects.special.foreground.hex()+"99",
		"tab.unfocusedHoverBackground": colorObjects.special.background.lighten(0.2).hex()+"b3",
		"tab.unfocusedHoverBorder": colorObjects.colors.color6.hex()+"00",
		"tab.unfocusedInactiveForeground": colorObjects.special.foreground.hex()+"66",
		"terminal.ansiBlack": colorObjects.special.background.lighten(0.2).hex(),
		"terminal.ansiBlue": colorObjects.colors.color4.hex(),
		"terminal.ansiBrightBlack": colorObjects.special.background.lighten(1.1).hex(),
		"terminal.ansiBrightBlue": colorObjects.colors.color4.hex(),
		"terminal.ansiBrightCyan": colorObjects.colors.color14.hex(),
		"terminal.ansiBrightGreen": colorObjects.colors.color2.hex(),
		"terminal.ansiBrightMagenta": colorObjects.colors.color5.hex(),
		"terminal.ansiBrightRed": colorObjects.colors.color1.hex(),
		"terminal.ansiBrightWhite": colorObjects.special.foreground.hex(),
		"terminal.ansiBrightYellow": colorObjects.colors.color2.hex(),
		"terminal.ansiCyan": colorObjects.colors.color6.hex(),
		"terminal.ansiGreen": colorObjects.colors.color2.hex(),
		"terminal.ansiMagenta": colorObjects.colors.color5.hex(),
		"terminal.ansiRed": colorObjects.colors.color1.hex(),
		"terminal.ansiWhite": colorObjects.colors.color7.hex(),
		"terminal.ansiYellow": colorObjects.colors.color2.hex(),
		"terminal.background": colorObjects.special.background.hex(),
		"terminal.foreground": colorObjects.special.foreground.hex(),
		"terminal.tab.activeBorder": colorObjects.colors.color6.hex(),
		"textBlockQuote.background": colorObjects.special.background.lighten(0.2).hex(),
		"textBlockQuote.border": colorObjects.colors.color4.hex(),
		"textCodeBlock.background": colorObjects.special.background.lighten(1.1).hex(),
		"textLink.activeForeground": colorObjects.colors.color6.hex(),
		"textLink.foreground": colorObjects.colors.color6.hex(),
		"textPreformat.foreground": colorObjects.colors.color14.hex(),
		"textSeparator.foreground": colorObjects.special.foreground.hex(),
		"titleBar.activeBackground": colorObjects.special.background.hex(),
		"titleBar.activeForeground": colorObjects.special.foreground.hex(),
		"titleBar.border": colorObjects.special.background.hex()+"00",
		"titleBar.inactiveBackground": colorObjects.special.background.hex(),
		"titleBar.inactiveForeground": colorObjects.special.foreground.hex()+"66",
		"tree.indentGuidesStroke": colorObjects.special.foreground.darken(0.4).hex(),
		"walkThrough.embeddedEditorBackground": colorObjects.special.background.hex(),
		"widget.shadow": "#00000066",
	},
	"tokenColors": [
		{
			"scope": "emphasis",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": "strong",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"scope": "comment",
			"settings": {
				"foreground": colorObjects.special.foreground.darken(0.4).hex()
			}
		},
		{
			"scope": "constant.character",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "constant.character.escape",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "constant.language",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "constant.numeric",
			"settings": {
				"foreground": colorObjects.colors.color5.hex()
			}
		},
		{
			"scope": "constant.regexp",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": [
				"entity.name.class",
				"entity.name.type.class"
			],
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "entity.name.function",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "entity.name.tag",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "entity.other.attribute-name",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "entity.other.inherited-class",
			"settings": {
				"foreground": colorObjects.colors.color14.hex(),
				"fontStyle": "bold"
			}
		},
		{
			"scope": "invalid.deprecated",
			"settings": {
				"foreground": colorObjects.special.foreground.hex(),
				"background": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "invalid.illegal",
			"settings": {
				"foreground": colorObjects.special.foreground.hex(),
				"background": colorObjects.colors.color1.hex()
			}
		},
		{
			"scope": "keyword",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "keyword.operator",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "keyword.other.new",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "markup.bold",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"scope": "markup.changed",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "markup.deleted",
			"settings": {
				"foreground": colorObjects.colors.color1.hex()
			}
		},
		{
			"scope": "markup.inserted",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "meta.preprocessor",
			"settings": {
				"foreground": colorObjects.colors.color4.darken(0.3).hex()
			}
		},
		{
			"scope": "punctuation",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": [
				"punctuation.definition.method-parameters",
				"punctuation.definition.function-parameters",
				"punctuation.definition.parameters"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "punctuation.definition.tag",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": [
				"punctuation.definition.comment",
				"punctuation.end.definition.comment",
				"punctuation.start.definition.comment"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.darken(0.4).hex()
			}
		},
		{
			"scope": "punctuation.section",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": [
				"punctuation.section.embedded.begin",
				"punctuation.section.embedded.end"
			],
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "punctuation.terminator",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "punctuation.definition.variable",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "storage",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "string",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "string.regexp",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "support.class",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "support.constant",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "support.function",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "support.function.construct",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "support.type",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "support.type.exception",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "token.debug-token",
			"settings": {
				"foreground": colorObjects.colors.color5.hex()
			}
		},
		{
			"scope": "token.error-token",
			"settings": {
				"foreground": colorObjects.colors.color1.hex()
			}
		},
		{
			"scope": "token.info-token",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "token.warn-token",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "variable.other",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "variable.language",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "variable.parameter",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "punctuation.separator.pointer-access.c",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": [
				"source.c meta.preprocessor.include",
				"source.c string.quoted.other.lt-gt.include"
			],
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": [
				"source.cpp keyword.control.directive.conditional",
				"source.cpp punctuation.definition.directive",
				"source.c keyword.control.directive.conditional",
				"source.c punctuation.definition.directive"
			],
			"settings": {
				"foreground": colorObjects.colors.color4.darken(0.3).hex(),
				"fontStyle": "bold"
			}
		},
		{
			"scope": "source.css constant.other.color.rgb-value",
			"settings": {
				"foreground": colorObjects.colors.color5.hex()
			}
		},
		{
			"scope": "source.css meta.property-value",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": [
				"source.css keyword.control.at-rule.media",
				"source.css keyword.control.at-rule.media punctuation.definition.keyword"
			],
			"settings": {
				"foreground": colorObjects.colors.color9.hex()
			}
		},
		{
			"scope": "source.css punctuation.definition.keyword",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "source.css support.type.property-name",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "source.diff meta.diff.range.context",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.diff meta.diff.header.from-file",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.diff punctuation.definition.from-file",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.diff punctuation.definition.range",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.diff punctuation.definition.separator",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "entity.name.type.module.elixir",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "variable.other.readwrite.module.elixir",
			"settings": {
				"foreground": colorObjects.special.foreground.hex(),
				"fontStyle": "bold"
			}
		},
		{
			"scope": "constant.other.symbol.elixir",
			"settings": {
				"foreground": colorObjects.special.foreground.hex(),
				"fontStyle": "bold"
			}
		},
		{
			"scope": "variable.other.constant.elixir",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.go constant.other.placeholder.go",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "source.java comment.block.documentation.javadoc punctuation.definition.entity.html",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "source.java constant.other",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "source.java keyword.other.documentation",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.java keyword.other.documentation.author.javadoc",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": [
				"source.java keyword.other.documentation.directive",
				"source.java keyword.other.documentation.custom"
			],
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.java keyword.other.documentation.see.javadoc",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.java meta.method-call meta.method",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": [
				"source.java meta.tag.template.link.javadoc",
				"source.java string.other.link.title.javadoc"
			],
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.java meta.tag.template.value.javadoc",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "source.java punctuation.definition.keyword.javadoc",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": [
				"source.java punctuation.definition.tag.begin.javadoc",
				"source.java punctuation.definition.tag.end.javadoc"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.darken(0.4).hex()
			}
		},
		{
			"scope": "source.java storage.modifier.import",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.java storage.modifier.package",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.java storage.type",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.java storage.type.annotation",
			"settings": {
				"foreground": colorObjects.colors.color9.hex()
			}
		},
		{
			"scope": "source.java storage.type.generic",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "source.java storage.type.primitive",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": [
				"source.js punctuation.decorator",
				"source.js meta.decorator variable.other.readwrite",
				"source.js meta.decorator entity.name.function"
			],
			"settings": {
				"foreground": colorObjects.colors.color9.hex()
			}
		},
		{
			"scope": "source.js meta.object-literal.key",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "source.js storage.type.class.jsdoc",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": [
				"source.js string.quoted.template punctuation.quasi.element.begin",
				"source.js string.quoted.template punctuation.quasi.element.end",
				"source.js string.template punctuation.definition.template-expression"
			],
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "source.js string.quoted.template meta.method-call.with-arguments",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": [
				"source.js string.template meta.template.expression support.variable.property",
				"source.js string.template meta.template.expression variable.other.object"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "source.js support.type.primitive",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "source.js variable.other.object",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "source.js variable.other.readwrite.alias",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": [
				"source.js meta.embedded.line meta.brace.square",
				"source.js meta.embedded.line meta.brace.round",
				"source.js string.quoted.template meta.brace.square",
				"source.js string.quoted.template meta.brace.round"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "text.html.basic constant.character.entity.html",
			"settings": {
				"foreground": colorObjects.colors.color2.hex()
			}
		},
		{
			"scope": "text.html.basic constant.other.inline-data",
			"settings": {
				"foreground": colorObjects.colors.color9.hex(),
				"fontStyle": "italic"
			}
		},
		{
			"scope": "text.html.basic meta.tag.sgml.doctype",
			"settings": {
				"foreground": colorObjects.colors.color4.darken(0.3).hex()
			}
		},
		{
			"scope": "text.html.basic punctuation.definition.entity",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "source.properties entity.name.section.group-title.ini",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "source.properties punctuation.separator.key-value.ini",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": [
				"text.html.markdown markup.fenced_code.block",
				"text.html.markdown markup.fenced_code.block punctuation.definition"
			],
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "markup.heading",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": [
				"text.html.markdown markup.inline.raw",
				"text.html.markdown markup.inline.raw punctuation.definition.raw"
			],
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "text.html.markdown markup.italic",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": "text.html.markdown markup.underline.link",
			"settings": {
				"fontStyle": "underline"
			}
		},
		{
			"scope": "text.html.markdown beginning.punctuation.definition.list",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "text.html.markdown beginning.punctuation.definition.quote",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "text.html.markdown markup.quote",
			"settings": {
				"foreground": colorObjects.special.foreground.darken(0.4).hex()
			}
		},
		{
			"scope": "text.html.markdown constant.character.math.tex",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": [
				"text.html.markdown punctuation.definition.math.begin",
				"text.html.markdown punctuation.definition.math.end"
			],
			"settings": {
				"foreground": colorObjects.colors.color4.darken(0.3).hex()
			}
		},
		{
			"scope": "text.html.markdown punctuation.definition.function.math.tex",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "text.html.markdown punctuation.math.operator.latex",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "text.html.markdown punctuation.definition.heading",
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": [
				"text.html.markdown punctuation.definition.constant",
				"text.html.markdown punctuation.definition.string"
			],
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": [
				"text.html.markdown constant.other.reference.link",
				"text.html.markdown string.other.link.description",
				"text.html.markdown string.other.link.title"
			],
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "source.perl punctuation.definition.variable",
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": [
				"source.php meta.function-call",
				"source.php meta.function-call.object"
			],
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": [
				"source.python entity.name.function.decorator",
				"source.python meta.function.decorator support.type"
			],
			"settings": {
				"foreground": colorObjects.colors.color9.hex()
			}
		},
		{
			"scope": "source.python meta.function-call.generic",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": "source.python support.type",
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": [
				"source.python variable.parameter.function.language"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": [
				"source.python meta.function.parameters variable.parameter.function.language.special.self"
			],
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": [
				"source.css.scss punctuation.definition.interpolation.begin.bracket.curly",
				"source.css.scss punctuation.definition.interpolation.end.bracket.curly"
			],
			"settings": {
				"foreground": colorObjects.colors.color4.hex()
			}
		},
		{
			"scope": "source.css.scss variable.interpolation",
			"settings": {
				"foreground": colorObjects.special.foreground.hex(),
				"fontStyle": "italic"
			}
		},
		{
			"scope": [
				"source.ts punctuation.decorator",
				"source.ts meta.decorator variable.other.readwrite",
				"source.ts meta.decorator entity.name.function",
				"source.tsx punctuation.decorator",
				"source.tsx meta.decorator variable.other.readwrite",
				"source.tsx meta.decorator entity.name.function"
			],
			"settings": {
				"foreground": colorObjects.colors.color9.hex()
			}
		},
		{
			"scope": [
				"source.ts meta.object-literal.key",
				"source.tsx meta.object-literal.key"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": [
				"source.ts meta.object-literal.key entity.name.function",
				"source.tsx meta.object-literal.key entity.name.function"
			],
			"settings": {
				"foreground": colorObjects.colors.color6.hex()
			}
		},
		{
			"scope": [
				"source.ts support.class",
				"source.ts support.type",
				"source.ts entity.name.type",
				"source.ts entity.name.class",
				"source.tsx support.class",
				"source.tsx support.type",
				"source.tsx entity.name.type",
				"source.tsx entity.name.class"
			],
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": [
				"source.ts support.constant.math",
				"source.ts support.constant.dom",
				"source.ts support.constant.json",
				"source.tsx support.constant.math",
				"source.tsx support.constant.dom",
				"source.tsx support.constant.json"
			],
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": [
				"source.ts support.variable",
				"source.tsx support.variable"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": [
				"source.ts meta.embedded.line meta.brace.square",
				"source.ts meta.embedded.line meta.brace.round",
				"source.tsx meta.embedded.line meta.brace.square",
				"source.tsx meta.embedded.line meta.brace.round"
			],
			"settings": {
				"foreground": colorObjects.special.foreground.hex()
			}
		},
		{
			"scope": "text.xml entity.name.tag.namespace",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		},
		{
			"scope": "text.xml keyword.other.doctype",
			"settings": {
				"foreground": colorObjects.colors.color4.darken(0.3).hex()
			}
		},
		{
			"scope": "text.xml meta.tag.preprocessor entity.name.tag",
			"settings": {
				"foreground": colorObjects.colors.color4.darken(0.3).hex()
			}
		},
		{
			"scope": [
				"text.xml string.unquoted.cdata",
				"text.xml string.unquoted.cdata punctuation.definition.string"
			],
			"settings": {
				"foreground": colorObjects.colors.color9.hex(),
				"fontStyle": "italic"
			}
		},
		{
			"scope": "source.yaml entity.name.tag",
			"settings": {
				"foreground": colorObjects.colors.color14.hex()
			}
		}
	]
});
