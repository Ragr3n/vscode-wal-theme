import * as Color from 'color';

export default (colors: Color[], bordered: boolean) => ({
	"type": "dark",
	"colors": {
		"activityBar.activeBackground": colors[0].lighten(0.2).hex(),
		"activityBar.activeBorder": colors[6].hex(),
		"activityBar.background": colors[0].hex(),
		"activityBar.foreground": colors[15].hex(),
		"activityBarBadge.background": colors[6].hex(),
		"activityBarBadge.foreground": colors[0].hex(),
		"badge.background": colors[6].hex(),
		"badge.foreground": colors[0].hex(),
		"button.background": colors[6].hex()+"ee",
		"button.foreground": colors[0].hex(),
		"button.hoverBackground": colors[6].hex(),
		"button.secondaryBackground": colors[0].lighten(0.5).hex(),
		"button.secondaryForeground": colors[15].hex(),
		"button.secondaryHoverBackground": colors[0].lighten(1.1).hex(),
		"charts.blue": colors[4].hex(),
		"charts.foreground": colors[15].hex(),
		"charts.green": colors[2].hex(),
		"charts.lines": colors[6].hex(),
		"charts.orange": colors[9].hex(),
		"charts.purple": colors[5].hex(),
		"charts.red": colors[1].hex(),
		"charts.yellow": colors[2].hex(),
		"debugConsole.errorForeground": colors[1].hex(),
		"debugConsole.infoForeground": colors[6].hex(),
		"debugConsole.sourceForeground": colors[15].darken(0.4).hex(),
		"debugConsole.warningForeground": colors[2].hex(),
		"debugConsoleInputIcon.foreground": colors[4].hex(),
		"debugExceptionWidget.background": colors[0].lighten(1.1).hex(),
		"debugExceptionWidget.border": colors[0].hex(),
		"debugToolBar.background": colors[0].lighten(0.2).hex(),
		"descriptionForeground": colors[15].hex()+"e6",
		"diffEditor.insertedTextBackground": colors[4].hex()+"33",
		"diffEditor.removedTextBackground": colors[1].hex()+"4d",
		"dropdown.background": colors[0].lighten(0.2).hex(),
		"dropdown.border": colors[0].lighten(0.2).hex(),
		"dropdown.foreground": colors[15].hex(),
		"editor.background": colors[0].hex(),
		"editor.findMatchBackground": colors[6].hex()+"66",
		"editor.findMatchHighlightBackground": colors[6].hex()+"33",
		"editor.findRangeHighlightBackground": colors[6].hex()+"33",
		"editor.focusedStackFrameHighlightBackground": colors[4].darken(0.3).hex(),
		"editor.foreground": colors[15].hex(),
		"editor.hoverHighlightBackground": colors[0].lighten(0.2).hex(),
		"editor.inactiveSelectionBackground": colors[0].lighten(0.5).hex()+"cc",
		"editor.inlineValuesBackground": colors[0].lighten(1.1).hex(),
		"editor.inlineValuesForeground": colors[15].hex(),
		"editor.lineHighlightBackground": colors[0].lighten(0.2).hex(),
		"editor.lineHighlightBorder": colors[0].lighten(0.2).hex(),
		"editor.rangeHighlightBackground": colors[0].lighten(0.5).hex()+"52",
		"editor.selectionBackground": colors[0].lighten(0.5).hex()+"cc",
		"editor.selectionHighlightBackground": colors[0].lighten(0.5).hex()+"cc",
		"editor.stackFrameHighlightBackground": colors[4].darken(0.3).hex(),
		"editor.wordHighlightBackground": colors[4].hex()+"66",
		"editor.wordHighlightStrongBackground": colors[4].hex()+"99",
		"editorActiveLineNumber.foreground": colors[15].hex()+"cc",
		"editorBracketHighlight.foreground1": colors[14].hex(),
		"editorBracketHighlight.foreground2": colors[6].hex(),
		"editorBracketHighlight.foreground3": colors[4].hex(),
		"editorBracketHighlight.foreground4": colors[4].darken(0.3).hex(),
		"editorBracketHighlight.foreground5": colors[14].hex(),
		"editorBracketHighlight.foreground6": colors[6].hex(),
		"editorBracketHighlight.unexpectedBracket.foreground": colors[1].hex(),
		"editorBracketMatch.background": colors[0].hex()+"00",
		"editorBracketMatch.border": colors[6].hex(),
		"editorCodeLens.foreground": colors[0].lighten(1.1).hex(),
		"editorCursor.foreground": colors[15].hex(),
		"editorError.border": colors[1].hex()+"00",
		"editorError.foreground": colors[1].hex(),
		"editorGroup.border": colors[0].lighten(0.2).hex()+"01",
		"editorGroup.dropBackground": colors[0].lighten(0.2).hex()+"99",
		"editorGroupHeader.border": colors[0].lighten(0.2).hex()+"00",
		"editorGroupHeader.noTabsBackground": colors[0].hex(),
		"editorGroupHeader.tabsBackground": colors[0].hex(),
		"editorGroupHeader.tabsBorder": colors[0].lighten(0.2).hex()+"00",
		"editorGutter.addedBackground": colors[2].hex(),
		"editorGutter.background": colors[0].hex(),
		"editorGutter.deletedBackground": colors[1].hex(),
		"editorGutter.modifiedBackground": colors[2].hex(),
		"editorHint.border": colors[2].hex()+"00",
		"editorHint.foreground": colors[2].hex(),
		"editorHoverWidget.background": colors[0].lighten(0.2).hex(),
		"editorHoverWidget.border": colors[0].lighten(0.2).hex(),
		"editorIndentGuide.activeBackground": colors[0].lighten(1.1).hex(),
		"editorIndentGuide.background": colors[0].lighten(0.5).hex()+"b3",
		"editorInlayHint.background": colors[0].lighten(0.5).hex(),
		"editorInlayHint.foreground": colors[15].hex(),
		"editorLineNumber.activeForeground": colors[15].hex(),
		"editorLineNumber.foreground": colors[0].lighten(1.1).hex(),
		"editorLink.activeForeground": colors[6].hex(),
		"editorMarkerNavigation.background": colors[4].darken(0.3).hex()+"c0",
		"editorMarkerNavigationError.background": colors[1].hex()+"c0",
		"editorMarkerNavigationWarning.background": colors[2].hex()+"c0",
		"editorOverviewRuler.addedForeground": colors[2].hex(),
		"editorOverviewRuler.border": colors[0].lighten(0.2).hex(),
		"editorOverviewRuler.currentContentForeground": colors[0].lighten(0.2).hex(),
		"editorOverviewRuler.deletedForeground": colors[1].hex(),
		"editorOverviewRuler.errorForeground": colors[1].hex(),
		"editorOverviewRuler.findMatchForeground": colors[6].hex()+"66",
		"editorOverviewRuler.incomingContentForeground": colors[0].lighten(0.2).hex(),
		"editorOverviewRuler.infoForeground": colors[4].hex(),
		"editorOverviewRuler.modifiedForeground": colors[2].hex(),
		"editorOverviewRuler.rangeHighlightForeground": colors[6].hex()+"66",
		"editorOverviewRuler.selectionHighlightForeground": colors[6].hex()+"66",
		"editorOverviewRuler.warningForeground": colors[2].hex(),
		"editorOverviewRuler.wordHighlightForeground": colors[6].hex()+"66",
		"editorOverviewRuler.wordHighlightStrongForeground": colors[6].hex()+"66",
		"editorRuler.foreground": colors[0].lighten(0.5).hex(),
		"editorSuggestWidget.background": colors[0].hex(),
		"editorSuggestWidget.border": colors[0].lighten(0.2).hex(),
		"editorSuggestWidget.focusHighlightForeground": colors[6].hex(),
		"editorSuggestWidget.foreground": colors[15].hex(),
		"editorSuggestWidget.highlightForeground": colors[6].hex(),
		"editorSuggestWidget.selectedBackground": colors[0].lighten(0.5).hex(),
		"editorSuggestWidget.selectedForeground": colors[15].hex(),
		"editorWarning.border": colors[2].hex()+"00",
		"editorWarning.foreground": colors[2].hex(),
		"editorWhitespace.foreground": colors[0].lighten(0.7).hex()+"b3",
		"editorWidget.background": colors[0].hex(),
		"editorWidget.border": colors[0].lighten(0.2).hex(),
		"errorForeground": colors[1].hex(),
		"extensionButton.prominentBackground": colors[0].lighten(0.5).hex(),
		"extensionButton.prominentForeground": colors[15].hex(),
		"extensionButton.prominentHoverBackground": colors[0].lighten(1.1).hex(),
		"focusBorder": colors[0].lighten(0.2).hex(),
		"foreground": colors[15].hex(),
		"gitDecoration.conflictingResourceForeground": colors[4].darken(0.3).hex(),
		"gitDecoration.deletedResourceForeground": colors[1].hex(),
		"gitDecoration.ignoredResourceForeground": colors[15].hex()+"66",
		"gitDecoration.modifiedResourceForeground": colors[2].hex(),
		"gitDecoration.stageDeletedResourceForeground": colors[1].hex(),
		"gitDecoration.stageModifiedResourceForeground": colors[2].hex(),
		"gitDecoration.submoduleResourceForeground": colors[14].hex(),
		"gitDecoration.untrackedResourceForeground": colors[2].hex(),
		"input.background": colors[0].lighten(0.2).hex(),
		"input.border": colors[0].lighten(0.2).hex(),
		"input.foreground": colors[15].hex(),
		"input.placeholderForeground": colors[15].hex()+"99",
		"inputOption.activeBackground": colors[4].darken(0.3).hex(),
		"inputOption.activeBorder": colors[4].darken(0.3).hex(),
		"inputOption.activeForeground": colors[15].hex(),
		"inputValidation.errorBackground": colors[1].hex(),
		"inputValidation.errorBorder": colors[1].hex(),
		"inputValidation.infoBackground": colors[4].hex(),
		"inputValidation.infoBorder": colors[4].hex(),
		"inputValidation.warningBackground": colors[9].hex(),
		"inputValidation.warningBorder": colors[9].hex(),
		"keybindingLabel.background": colors[0].lighten(1.1).hex(),
		"keybindingLabel.border": colors[0].lighten(1.1).hex(),
		"keybindingLabel.bottomBorder": colors[0].lighten(1.1).hex(),
		"keybindingLabel.foreground": colors[15].hex(),
		"list.activeSelectionBackground": colors[6].hex(),
		"list.activeSelectionForeground": colors[0].hex(),
		"list.dropBackground": colors[6].hex()+"99",
		"list.errorForeground": colors[1].hex(),
		"list.focusBackground": colors[6].hex()+"99",
		"list.focusForeground": colors[15].hex(),
		"list.focusHighlightForeground": colors[15].hex(),
		"list.highlightForeground": colors[6].hex(),
		"list.hoverBackground": colors[0].lighten(0.2).hex(),
		"list.hoverForeground": colors[15].hex(),
		"list.inactiveFocusBackground": colors[0].lighten(0.5).hex()+"cc",
		"list.inactiveSelectionBackground": colors[0].lighten(0.5).hex(),
		"list.inactiveSelectionForeground": colors[15].hex(),
		"list.warningForeground": colors[2].hex(),
		"merge.border": colors[0].lighten(0.2).hex()+"00",
		"merge.currentContentBackground": colors[4].hex()+"4d",
		"merge.currentHeaderBackground": colors[4].hex()+"66",
		"merge.incomingContentBackground": colors[14]+"4d",
		"merge.incomingHeaderBackground": colors[14]+"66",
		"minimap.background": colors[0].hex(),
		"minimap.errorHighlight": colors[1].hex()+"cc",
		"minimap.findMatchHighlight": colors[6].hex(),
		"minimap.selectionHighlight": colors[6].hex()+"cc",
		"minimap.warningHighlight": colors[2].hex()+"cc",
		"minimapGutter.addedBackground": colors[2].hex(),
		"minimapGutter.deletedBackground": colors[1].hex(),
		"minimapGutter.modifiedBackground": colors[2].hex(),
		"minimapSlider.activeBackground": colors[0].lighten(0.5).hex()+"aa",
		"minimapSlider.background": colors[0].lighten(0.5).hex()+"99",
		"minimapSlider.hoverBackground": colors[0].lighten(0.5).hex()+"aa",
		"notificationCenter.border": colors[0].lighten(0.2).hex()+"00",
		"notificationCenterHeader.background": colors[0].hex(),
		"notificationCenterHeader.foreground": colors[6].hex(),
		"notificationLink.foreground": colors[6].hex(),
		"notificationToast.border": colors[0].lighten(0.2).hex()+"00",
		"notifications.background": colors[0].lighten(0.2).hex(),
		"notifications.border": colors[0].hex(),
		"notifications.foreground": colors[15].hex(),
		"panel.background": colors[0].hex(),
		"panel.border": colors[0].lighten(0.2).hex(),
		"panelTitle.activeBorder": colors[6].hex()+"00",
		"panelTitle.activeForeground": colors[6].hex(),
		"panelTitle.inactiveForeground": colors[15].hex(),
		"peekView.border": colors[0].lighten(1.1).hex(),
		"peekViewEditor.background": colors[0].hex(),
		"peekViewEditor.matchHighlightBackground": colors[6].hex()+"4d",
		"peekViewEditorGutter.background": colors[0].hex(),
		"peekViewResult.background": colors[0].hex(),
		"peekViewResult.fileForeground": colors[6].hex(),
		"peekViewResult.lineForeground": colors[15].hex()+"66",
		"peekViewResult.matchHighlightBackground": colors[6].hex()+"cc",
		"peekViewResult.selectionBackground": colors[0].lighten(0.5).hex(),
		"peekViewResult.selectionForeground": colors[15].hex(),
		"peekViewTitle.background": colors[0].lighten(0.2).hex(),
		"peekViewTitleDescription.foreground": colors[15].hex(),
		"peekViewTitleLabel.foreground": colors[6].hex(),
		"pickerGroup.border": colors[0].lighten(0.2).hex(),
		"pickerGroup.foreground": colors[6].hex(),
		"progressBar.background": colors[6].hex(),
		"quickInputList.focusBackground": colors[6].hex(),
		"quickInputList.focusForeground": colors[0].hex(),
		"sash.hoverBorder": colors[6].hex(),
		"scrollbar.shadow": "#00000066",
		"scrollbarSlider.activeBackground": colors[0].lighten(0.5).hex()+"aa",
		"scrollbarSlider.background": colors[0].lighten(0.5).hex()+"99",
		"scrollbarSlider.hoverBackground": colors[0].lighten(0.5).hex()+"aa",
		"selection.background": colors[6].hex()+"99",
		"sideBar.background": colors[0].hex(),
		"sideBar.border": colors[0].lighten(0.2).hex(),
		"sideBar.foreground": colors[15].hex(),
		"sideBarSectionHeader.background": colors[0].lighten(0.2).hex(),
		"sideBarSectionHeader.foreground": colors[15].hex(),
		"sideBarTitle.foreground": colors[15].hex(),
		"statusBar.background": colors[0].lighten(0.2).hex(),
		"statusBar.border": colors[0].lighten(0.2).hex()+"00",
		"statusBar.debuggingBackground": colors[4].darken(0.3).hex(),
		"statusBar.debuggingForeground": colors[15].hex(),
		"statusBar.foreground": colors[15].hex(),
		"statusBar.noFolderBackground": colors[0].lighten(0.2).hex(),
		"statusBar.noFolderForeground": colors[15].hex(),
		"statusBarItem.activeBackground": colors[0].lighten(1.1).hex(),
		"statusBarItem.errorBackground": colors[0].lighten(0.2).hex(),
		"statusBarItem.errorForeground": colors[1].hex(),
		"statusBarItem.hoverBackground": colors[0].lighten(0.5).hex(),
		"statusBarItem.prominentBackground": colors[0].lighten(0.2).hex(),
		"statusBarItem.prominentHoverBackground": colors[0].lighten(0.5).hex(),
		"statusBarItem.warningBackground": colors[2].hex(),
		"statusBarItem.warningForeground": colors[0].hex(),
		"tab.activeBackground": colors[0].lighten(0.2).hex(),
		"tab.activeBorder": colors[6].hex()+"00",
		"tab.activeBorderTop": colors[6].hex()+"00",
		"tab.activeForeground": colors[15].hex(),
		"tab.border": colors[0].lighten(0.2).hex()+"00",
		"tab.hoverBackground": colors[0].lighten(0.2).hex()+"cc",
		"tab.hoverBorder": colors[6].hex()+"00",
		"tab.inactiveBackground": colors[0].hex(),
		"tab.inactiveForeground": colors[15].hex()+"66",
		"tab.lastPinnedBorder": colors[0].lighten(1.1).hex(),
		"tab.unfocusedActiveBorder": colors[6].hex()+"00",
		"tab.unfocusedActiveBorderTop": colors[6].hex()+"00",
		"tab.unfocusedActiveForeground": colors[15].hex()+"99",
		"tab.unfocusedHoverBackground": colors[0].lighten(0.2).hex()+"b3",
		"tab.unfocusedHoverBorder": colors[6].hex()+"00",
		"tab.unfocusedInactiveForeground": colors[15].hex()+"66",
		"terminal.ansiBlack": colors[0].lighten(0.2).hex(),
		"terminal.ansiBlue": colors[4].hex(),
		"terminal.ansiBrightBlack": colors[0].lighten(1.1).hex(),
		"terminal.ansiBrightBlue": colors[4].hex(),
		"terminal.ansiBrightCyan": colors[14].hex(),
		"terminal.ansiBrightGreen": colors[2].hex(),
		"terminal.ansiBrightMagenta": colors[5].hex(),
		"terminal.ansiBrightRed": colors[1].hex(),
		"terminal.ansiBrightWhite": colors[15].hex(),
		"terminal.ansiBrightYellow": colors[2].hex(),
		"terminal.ansiCyan": colors[6].hex(),
		"terminal.ansiGreen": colors[2].hex(),
		"terminal.ansiMagenta": colors[5].hex(),
		"terminal.ansiRed": colors[1].hex(),
		"terminal.ansiWhite": colors[7].hex(),
		"terminal.ansiYellow": colors[2].hex(),
		"terminal.background": colors[0].hex(),
		"terminal.foreground": colors[15].hex(),
		"terminal.tab.activeBorder": colors[6].hex(),
		"textBlockQuote.background": colors[0].lighten(0.2).hex(),
		"textBlockQuote.border": colors[4].hex(),
		"textCodeBlock.background": colors[0].lighten(1.1).hex(),
		"textLink.activeForeground": colors[6].hex(),
		"textLink.foreground": colors[6].hex(),
		"textPreformat.foreground": colors[14].hex(),
		"textSeparator.foreground": colors[15].hex(),
		"titleBar.activeBackground": colors[0].hex(),
		"titleBar.activeForeground": colors[15].hex(),
		"titleBar.border": colors[0].hex()+"00",
		"titleBar.inactiveBackground": colors[0].hex(),
		"titleBar.inactiveForeground": colors[15].hex()+"66",
		"tree.indentGuidesStroke": colors[15].darken(0.4).hex(),
		"walkThrough.embeddedEditorBackground": colors[0].hex(),
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
				"foreground": colors[15].darken(0.4).hex()
			}
		},
		{
			"scope": "constant.character",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "constant.character.escape",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "constant.language",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "constant.numeric",
			"settings": {
				"foreground": colors[5].hex()
			}
		},
		{
			"scope": "constant.regexp",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": [
				"entity.name.class",
				"entity.name.type.class"
			],
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "entity.name.function",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "entity.name.tag",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "entity.other.attribute-name",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "entity.other.inherited-class",
			"settings": {
				"foreground": colors[14].hex(),
				"fontStyle": "bold"
			}
		},
		{
			"scope": "invalid.deprecated",
			"settings": {
				"foreground": colors[15].hex(),
				"background": colors[2].hex()
			}
		},
		{
			"scope": "invalid.illegal",
			"settings": {
				"foreground": colors[15].hex(),
				"background": colors[1].hex()
			}
		},
		{
			"scope": "keyword",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "keyword.operator",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "keyword.other.new",
			"settings": {
				"foreground": colors[4].hex()
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
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "markup.deleted",
			"settings": {
				"foreground": colors[1].hex()
			}
		},
		{
			"scope": "markup.inserted",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "meta.preprocessor",
			"settings": {
				"foreground": colors[4].darken(0.3).hex()
			}
		},
		{
			"scope": "punctuation",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": [
				"punctuation.definition.method-parameters",
				"punctuation.definition.function-parameters",
				"punctuation.definition.parameters"
			],
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "punctuation.definition.tag",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": [
				"punctuation.definition.comment",
				"punctuation.end.definition.comment",
				"punctuation.start.definition.comment"
			],
			"settings": {
				"foreground": colors[15].darken(0.4).hex()
			}
		},
		{
			"scope": "punctuation.section",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": [
				"punctuation.section.embedded.begin",
				"punctuation.section.embedded.end"
			],
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "punctuation.terminator",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "punctuation.definition.variable",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "storage",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "string",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "string.regexp",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "support.class",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "support.constant",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "support.function",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "support.function.construct",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "support.type",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "support.type.exception",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "token.debug-token",
			"settings": {
				"foreground": colors[5].hex()
			}
		},
		{
			"scope": "token.error-token",
			"settings": {
				"foreground": colors[1].hex()
			}
		},
		{
			"scope": "token.info-token",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "token.warn-token",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "variable.other",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "variable.language",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "variable.parameter",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "punctuation.separator.pointer-access.c",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": [
				"source.c meta.preprocessor.include",
				"source.c string.quoted.other.lt-gt.include"
			],
			"settings": {
				"foreground": colors[14].hex()
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
				"foreground": colors[4].darken(0.3).hex(),
				"fontStyle": "bold"
			}
		},
		{
			"scope": "source.css constant.other.color.rgb-value",
			"settings": {
				"foreground": colors[5].hex()
			}
		},
		{
			"scope": "source.css meta.property-value",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": [
				"source.css keyword.control.at-rule.media",
				"source.css keyword.control.at-rule.media punctuation.definition.keyword"
			],
			"settings": {
				"foreground": colors[9].hex()
			}
		},
		{
			"scope": "source.css punctuation.definition.keyword",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "source.css support.type.property-name",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "source.diff meta.diff.range.context",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.diff meta.diff.header.from-file",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.diff punctuation.definition.from-file",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.diff punctuation.definition.range",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.diff punctuation.definition.separator",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "entity.name.type.module.elixir",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "variable.other.readwrite.module.elixir",
			"settings": {
				"foreground": colors[15].hex(),
				"fontStyle": "bold"
			}
		},
		{
			"scope": "constant.other.symbol.elixir",
			"settings": {
				"foreground": colors[15].hex(),
				"fontStyle": "bold"
			}
		},
		{
			"scope": "variable.other.constant.elixir",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.go constant.other.placeholder.go",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "source.java comment.block.documentation.javadoc punctuation.definition.entity.html",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "source.java constant.other",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "source.java keyword.other.documentation",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.java keyword.other.documentation.author.javadoc",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": [
				"source.java keyword.other.documentation.directive",
				"source.java keyword.other.documentation.custom"
			],
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.java keyword.other.documentation.see.javadoc",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.java meta.method-call meta.method",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": [
				"source.java meta.tag.template.link.javadoc",
				"source.java string.other.link.title.javadoc"
			],
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.java meta.tag.template.value.javadoc",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "source.java punctuation.definition.keyword.javadoc",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": [
				"source.java punctuation.definition.tag.begin.javadoc",
				"source.java punctuation.definition.tag.end.javadoc"
			],
			"settings": {
				"foreground": colors[15].darken(0.4).hex()
			}
		},
		{
			"scope": "source.java storage.modifier.import",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.java storage.modifier.package",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.java storage.type",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.java storage.type.annotation",
			"settings": {
				"foreground": colors[9].hex()
			}
		},
		{
			"scope": "source.java storage.type.generic",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "source.java storage.type.primitive",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": [
				"source.js punctuation.decorator",
				"source.js meta.decorator variable.other.readwrite",
				"source.js meta.decorator entity.name.function"
			],
			"settings": {
				"foreground": colors[9].hex()
			}
		},
		{
			"scope": "source.js meta.object-literal.key",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "source.js storage.type.class.jsdoc",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": [
				"source.js string.quoted.template punctuation.quasi.element.begin",
				"source.js string.quoted.template punctuation.quasi.element.end",
				"source.js string.template punctuation.definition.template-expression"
			],
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "source.js string.quoted.template meta.method-call.with-arguments",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": [
				"source.js string.template meta.template.expression support.variable.property",
				"source.js string.template meta.template.expression variable.other.object"
			],
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "source.js support.type.primitive",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "source.js variable.other.object",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "source.js variable.other.readwrite.alias",
			"settings": {
				"foreground": colors[14].hex()
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
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "text.html.basic constant.character.entity.html",
			"settings": {
				"foreground": colors[2].hex()
			}
		},
		{
			"scope": "text.html.basic constant.other.inline-data",
			"settings": {
				"foreground": colors[9].hex(),
				"fontStyle": "italic"
			}
		},
		{
			"scope": "text.html.basic meta.tag.sgml.doctype",
			"settings": {
				"foreground": colors[4].darken(0.3).hex()
			}
		},
		{
			"scope": "text.html.basic punctuation.definition.entity",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "source.properties entity.name.section.group-title.ini",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "source.properties punctuation.separator.key-value.ini",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": [
				"text.html.markdown markup.fenced_code.block",
				"text.html.markdown markup.fenced_code.block punctuation.definition"
			],
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "markup.heading",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": [
				"text.html.markdown markup.inline.raw",
				"text.html.markdown markup.inline.raw punctuation.definition.raw"
			],
			"settings": {
				"foreground": colors[14].hex()
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
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "text.html.markdown beginning.punctuation.definition.quote",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "text.html.markdown markup.quote",
			"settings": {
				"foreground": colors[15].darken(0.4).hex()
			}
		},
		{
			"scope": "text.html.markdown constant.character.math.tex",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": [
				"text.html.markdown punctuation.definition.math.begin",
				"text.html.markdown punctuation.definition.math.end"
			],
			"settings": {
				"foreground": colors[4].darken(0.3).hex()
			}
		},
		{
			"scope": "text.html.markdown punctuation.definition.function.math.tex",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "text.html.markdown punctuation.math.operator.latex",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "text.html.markdown punctuation.definition.heading",
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": [
				"text.html.markdown punctuation.definition.constant",
				"text.html.markdown punctuation.definition.string"
			],
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": [
				"text.html.markdown constant.other.reference.link",
				"text.html.markdown string.other.link.description",
				"text.html.markdown string.other.link.title"
			],
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "source.perl punctuation.definition.variable",
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": [
				"source.php meta.function-call",
				"source.php meta.function-call.object"
			],
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": [
				"source.python entity.name.function.decorator",
				"source.python meta.function.decorator support.type"
			],
			"settings": {
				"foreground": colors[9].hex()
			}
		},
		{
			"scope": "source.python meta.function-call.generic",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": "source.python support.type",
			"settings": {
				"foreground": colors[6].hex()
			}
		},
		{
			"scope": [
				"source.python variable.parameter.function.language"
			],
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": [
				"source.python meta.function.parameters variable.parameter.function.language.special.self"
			],
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": [
				"source.css.scss punctuation.definition.interpolation.begin.bracket.curly",
				"source.css.scss punctuation.definition.interpolation.end.bracket.curly"
			],
			"settings": {
				"foreground": colors[4].hex()
			}
		},
		{
			"scope": "source.css.scss variable.interpolation",
			"settings": {
				"foreground": colors[15].hex(),
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
				"foreground": colors[9].hex()
			}
		},
		{
			"scope": [
				"source.ts meta.object-literal.key",
				"source.tsx meta.object-literal.key"
			],
			"settings": {
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": [
				"source.ts meta.object-literal.key entity.name.function",
				"source.tsx meta.object-literal.key entity.name.function"
			],
			"settings": {
				"foreground": colors[6].hex()
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
				"foreground": colors[14].hex()
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
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": [
				"source.ts support.variable",
				"source.tsx support.variable"
			],
			"settings": {
				"foreground": colors[15].hex()
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
				"foreground": colors[15].hex()
			}
		},
		{
			"scope": "text.xml entity.name.tag.namespace",
			"settings": {
				"foreground": colors[14].hex()
			}
		},
		{
			"scope": "text.xml keyword.other.doctype",
			"settings": {
				"foreground": colors[4].darken(0.3).hex()
			}
		},
		{
			"scope": "text.xml meta.tag.preprocessor entity.name.tag",
			"settings": {
				"foreground": colors[4].darken(0.3).hex()
			}
		},
		{
			"scope": [
				"text.xml string.unquoted.cdata",
				"text.xml string.unquoted.cdata punctuation.definition.string"
			],
			"settings": {
				"foreground": colors[9].hex(),
				"fontStyle": "italic"
			}
		},
		{
			"scope": "source.yaml entity.name.tag",
			"settings": {
				"foreground": colors[14].hex()
			}
		}
	]
});
