interface ServerScriptService extends Instance {
	Plugin: Script & {
		Core: Folder;
		App: ModuleScript & {
			Modules: Folder;
			Config: Folder;
			Pages: Folder;
			Storybook: Folder;
			Context: Folder;
			Components: Folder & {
				Display: Folder;
				Base: Folder;
				Navbar: Folder;
			};
		};
		Lua: Folder;
		include: Folder & {
			RuntimeLib: ModuleScript;
			Promise: ModuleScript;
			node_modules: Folder & {
				["@rbxts"]: Folder & {
					["roact-hooked"]: Folder & {
						src: ModuleScript & {
							hoc: ModuleScript;
							Roact: ModuleScript;
							NoYield: ModuleScript;
							withHookDetection: ModuleScript;
							pureComponent: ModuleScript;
							hooks: ModuleScript;
						};
					};
					services: ModuleScript;
					["roact-hooks"]: Folder & {
						src: ModuleScript & {
							createUseState: ModuleScript;
							createUseEffect: ModuleScript;
							createUseMemo: ModuleScript;
							dependenciesDifferent: ModuleScript;
							createUseValue: ModuleScript;
							createUseReducer: ModuleScript;
							createUseCallback: ModuleScript;
							createUseContext: ModuleScript;
							createUseBinding: ModuleScript;
						};
					};
					["compiler-types"]: Folder & {
						types: Folder;
					};
					reflex: Folder & {
						out: ModuleScript & {
							utils: Folder & {
								object: ModuleScript;
							};
							types: ModuleScript;
							["combine-producers.spec"]: ModuleScript;
							["apply-middleware.spec"]: ModuleScript;
							["create-selector.spec"]: ModuleScript;
							["create-selector"]: ModuleScript;
							["apply-middleware"]: ModuleScript;
							["create-producer.spec"]: ModuleScript;
							["create-producer"]: ModuleScript;
							middleware: Folder & {
								["broadcast-receiver.spec"]: ModuleScript;
								["broadcast-receiver"]: ModuleScript;
								["broadcaster.spec"]: ModuleScript;
								broadcaster: ModuleScript;
								["logger-middleware"]: ModuleScript;
							};
							["combine-producers"]: ModuleScript;
						};
					};
					types: Folder & {
						include: Folder & {
							generated: Folder;
						};
					};
					StudioComponents: ModuleScript & {
						Label: ModuleScript;
						["Checkbox.story"]: ModuleScript;
						Constants: ModuleScript;
						["Splitter.story"]: ModuleScript;
						["VerticalExpandingList.story"]: ModuleScript;
						usePlugin: ModuleScript;
						ScrollFrame: ModuleScript & {
							ScrollBarHandle: ModuleScript;
							ScrollArrow: ModuleScript;
							Constants: ModuleScript;
						};
						useTheme: ModuleScript;
						["Slider.story"]: ModuleScript;
						PluginContext: ModuleScript;
						["Button.story"]: ModuleScript;
						["Dropdown.story"]: ModuleScript;
						Dropdown: ModuleScript & {
							DropdownItem: ModuleScript;
						};
						["TabContainer.story"]: ModuleScript;
						TabContainer: ModuleScript & {
							TabButton: ModuleScript;
						};
						PluginProvider: ModuleScript;
						BaseButton: ModuleScript;
						ThemeContext: ModuleScript;
						["ScrollFrame.story"]: ModuleScript;
						withTheme: ModuleScript;
						useDragInput: ModuleScript;
						["RadioButton.story"]: ModuleScript;
						ColorPicker: ModuleScript;
						["Widget.story"]: ModuleScript;
						Button: ModuleScript;
						MainButton: ModuleScript;
						VerticalExpandingList: ModuleScript;
						joinDictionaries: ModuleScript;
						Checkbox: ModuleScript;
						VerticalCollapsibleSection: ModuleScript & {
							CollapsibleSectionHeader: ModuleScript;
						};
						["Tooltip.story"]: ModuleScript;
						["Label.story"]: ModuleScript;
						["TextInput.story"]: ModuleScript;
						Tooltip: ModuleScript;
						TextInput: ModuleScript;
						Splitter: ModuleScript;
						Background: ModuleScript;
						["VerticalCollapsibleSection.story"]: ModuleScript;
						["Background.story"]: ModuleScript;
						RadioButton: ModuleScript;
						["MainButton.story"]: ModuleScript;
						["ColorPicker.story"]: ModuleScript;
						Widget: ModuleScript;
						Slider: ModuleScript;
					};
					roact: Folder & {
						src: ModuleScript & {
							createSpy: ModuleScript;
							createSignal: ModuleScript;
							oneChild: ModuleScript;
							Component: ModuleScript;
							createElement: ModuleScript;
							createReconciler: ModuleScript;
							GlobalConfig: ModuleScript;
							strict: ModuleScript;
							createRef: ModuleScript;
							Type: ModuleScript;
							Portal: ModuleScript;
							Symbol: ModuleScript;
							PropMarkers: Folder & {
								Ref: ModuleScript;
								Change: ModuleScript;
								Children: ModuleScript;
								Event: ModuleScript;
							};
							ComponentLifecyclePhase: ModuleScript;
							Config: ModuleScript;
							assign: ModuleScript;
							assertDeepEqual: ModuleScript;
							getDefaultInstanceProperty: ModuleScript;
							Binding: ModuleScript;
							NoopRenderer: ModuleScript;
							forwardRef: ModuleScript;
							internalAssert: ModuleScript;
							createReconcilerCompat: ModuleScript;
							createFragment: ModuleScript;
							RobloxRenderer: ModuleScript;
							PureComponent: ModuleScript;
							invalidSetStateMessages: ModuleScript;
							ElementKind: ModuleScript;
							createContext: ModuleScript;
							Logging: ModuleScript;
							ElementUtils: ModuleScript;
							SingleEventManager: ModuleScript;
							None: ModuleScript;
						};
					};
					rowindcss: Folder & {
						out: ModuleScript & {
							utils: Folder & {
								startsWith: ModuleScript;
								getClassValue: ModuleScript;
								formatClassName: ModuleScript;
								getElementProps: ModuleScript;
							};
							elements: Folder & {
								Text: ModuleScript;
								Input: ModuleScript;
								Div: ModuleScript;
								RowindElement: ModuleScript;
								Button: ModuleScript;
							};
							hooks: Folder & {
								useBreakpoint: ModuleScript;
							};
							values: Folder & {
								values: ModuleScript;
								maxH: ModuleScript;
								opacity: ModuleScript;
								scale: ModuleScript;
								minH: ModuleScript;
								maxW: ModuleScript;
								minW: ModuleScript;
							};
							ElementContext: ModuleScript;
							["rowindcss.story"]: ModuleScript;
							classes: ModuleScript;
							components: Folder & {
								Scale: ModuleScript;
								Flex: ModuleScript;
								Border: ModuleScript;
								MinMaxSize: ModuleScript;
								BgImage: ModuleScript;
								Overflow: ModuleScript;
								Padding: ModuleScript;
								Rounded: ModuleScript;
								Aspect: ModuleScript;
							};
							types: ModuleScript;
						};
					};
					["roact-hooked-plus"]: Folder & {
						out: ModuleScript & {
							["use-hotkeys"]: ModuleScript;
							["use-sequence-callback"]: ModuleScript;
							["use-bind-to-render-step"]: ModuleScript;
							["use-force-update"]: ModuleScript;
							utils: Folder & {
								["binding-utils"]: ModuleScript;
								["set-interval"]: ModuleScript;
								["set-timeout"]: ModuleScript;
								resolve: ModuleScript;
								motor: ModuleScript;
								["array-to-map"]: ModuleScript;
							};
							["use-viewport-size"]: ModuleScript;
							["use-single-motor"]: ModuleScript;
							["use-current"]: ModuleScript;
							["use-promise"]: ModuleScript;
							["use-idle"]: ModuleScript;
							["use-debounced-value"]: ModuleScript;
							["use-time"]: ModuleScript;
							["create-story"]: ModuleScript;
							["use-toggle"]: ModuleScript;
							["use-animation"]: ModuleScript;
							["use-set-state"]: ModuleScript;
							["use-group-motor"]: ModuleScript;
							["use-previous"]: ModuleScript;
							["use-mouse"]: ModuleScript;
							["use-interval"]: ModuleScript;
							["use-delayed-effect"]: ModuleScript;
							["use-event"]: ModuleScript;
							["use-click-outside"]: ModuleScript;
							["use-sequence"]: ModuleScript;
							["use-did-mount"]: ModuleScript;
							["use-delayed-value"]: ModuleScript;
							["use-camera"]: ModuleScript;
							["use-binding-event"]: ModuleScript;
							flipper: ModuleScript & {
								["use-spring"]: ModuleScript;
								["use-instant"]: ModuleScript;
								["use-linear"]: ModuleScript;
								["get-binding"]: ModuleScript;
								["use-motor"]: ModuleScript;
								["use-goal"]: ModuleScript;
							};
						};
					};
					["object-utils"]: ModuleScript;
					flipper: Folder & {
						typings: Folder;
						src: ModuleScript & {
							isMotor: ModuleScript;
							Spring: ModuleScript;
							GroupMotor: ModuleScript;
							Signal: ModuleScript;
							SingleMotor: ModuleScript;
							Instant: ModuleScript;
							Linear: ModuleScript;
							BaseMotor: ModuleScript;
						};
					};
				};
			};
		};
	};
}
