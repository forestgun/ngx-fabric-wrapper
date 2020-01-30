/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fabric } from 'fabric';
import ResizeObserver from 'resize-observer-polyfill';
import { Directive, Optional, Inject, Input, Output, EventEmitter, NgZone, ElementRef, KeyValueDiffers } from '@angular/core';
import { FABRIC_CONFIG, FabricConfig, FabricEvents } from './fabric.interfaces';
var FabricDirective = /** @class */ (function () {
    function FabricDirective(zone, elementRef, differs, defaults) {
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.objectsJSON = null;
        this.initialZoom = null;
        this.initialWidth = null;
        this.initialHeight = null;
        this.configDiff = null;
        this.disabled = false;
        this.drop = new EventEmitter();
        this.dragover = new EventEmitter();
        this.dragenter = new EventEmitter();
        this.dragleave = new EventEmitter();
        this.mouseup = new EventEmitter();
        this.mousedown = new EventEmitter();
        this.mouseover = new EventEmitter();
        this.mouseout = new EventEmitter();
        this.mousemove = new EventEmitter();
        this.mousewheel = new EventEmitter();
        this.mousedblclick = new EventEmitter();
        this.mouseupBefore = new EventEmitter();
        this.mousedownBefore = new EventEmitter();
        this.mousemoveBefore = new EventEmitter();
        this.mouseUp = new EventEmitter();
        this.mouseDown = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.mouseMove = new EventEmitter();
        this.mouseDblclick = new EventEmitter();
        this.mouseUpBefore = new EventEmitter();
        this.mouseDownBefore = new EventEmitter();
        this.mouseMoveBefore = new EventEmitter();
        this.pathCreated = new EventEmitter();
        this.alterRender = new EventEmitter();
        this.objectAdded = new EventEmitter();
        this.objectMoved = new EventEmitter();
        this.objectScaled = new EventEmitter();
        this.objectSkewed = new EventEmitter();
        this.objectRotated = new EventEmitter();
        this.objectRemoved = new EventEmitter();
        this.objectModified = new EventEmitter();
        this.objectSelected = new EventEmitter();
        this.objectMoving = new EventEmitter();
        this.objectScaling = new EventEmitter();
        this.objectSkewing = new EventEmitter();
        this.objectRotating = new EventEmitter();
        this.selectionCleared = new EventEmitter();
        this.selectionCreated = new EventEmitter();
        this.selectionUpdated = new EventEmitter();
        this.beforeTransform = new EventEmitter();
        this.beforeSelectionCleared = new EventEmitter();
    }
    Object.defineProperty(FabricDirective.prototype, "zoom", {
        set: /**
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            this.setZoom(zoom);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabricDirective.prototype, "width", {
        set: /**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            this.setWidth(width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabricDirective.prototype, "height", {
        set: /**
         * @param {?} height
         * @return {?}
         */
        function (height) {
            this.setHeight(height);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FabricDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var params = new FabricConfig(this.defaults);
        params.assign(this.config); // Custom configuration
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (!_this.disabled) {
                _this.instance = new fabric.Canvas(_this.elementRef.nativeElement, params);
            }
            else {
                _this.instance = new fabric.StaticCanvas(_this.elementRef.nativeElement, params);
            }
            if (_this.initialZoom) {
                _this.setZoom(_this.initialZoom);
            }
            if (_this.initialWidth) {
                _this.setWidth(_this.initialWidth);
            }
            if (_this.initialHeight) {
                _this.setHeight(_this.initialHeight);
            }
            if (_this.objectsJSON !== null) {
                _this.loadFromJSON(_this.objectsJSON);
            }
        }));
        // Add native Fabric event handling
        FabricEvents.forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            /** @type {?} */
            var fabricEvent = eventName.replace(/([A-Z])/g, (/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return ":" + c.toLowerCase(); }));
            if (_this.instance) {
                _this.instance.on(fabricEvent, (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (_this[eventName].observers.length) {
                            _this[eventName].emit(event);
                        }
                    }));
                }));
            }
        }));
        if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create();
            this.configDiff.diff(this.config || {});
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.ro = new ResizeObserver((/**
             * @param {?} entries
             * @param {?} observer
             * @return {?}
             */
            function (entries, observer) {
                /** @type {?} */
                var element = _this.elementRef.nativeElement.parentElement.parentElement;
                if (!_this.initialWidth) {
                    _this.setWidth(element.offsetWidth);
                }
                if (!_this.initialHeight) {
                    _this.setHeight(element.offsetHeight);
                }
            }));
            _this.ro.observe(_this.elementRef.nativeElement.parentElement.parentElement);
        }));
    };
    /**
     * @return {?}
     */
    FabricDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.ro) {
            this.ro.disconnect();
        }
        if (this.instance) {
            this.objectsJSON = this.instance.toObject();
            this.instance.dispose();
            delete this.instance;
            this.instance = null;
        }
    };
    /**
     * @return {?}
     */
    FabricDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.configDiff) {
            /** @type {?} */
            var changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.instance && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    /**
     * @return {?}
     */
    FabricDirective.prototype.fabric = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    FabricDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        if (this.instance) {
            this.instance.clear();
        }
    };
    /**
     * @return {?}
     */
    FabricDirective.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.instance) {
            this.instance.renderAll();
        }
    };
    /**
     * @param {?} zoom
     * @return {?}
     */
    FabricDirective.prototype.setZoom = /**
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        this.initialZoom = zoom;
        if (this.instance) {
            this.instance.setZoom(zoom);
        }
    };
    /**
     * @param {?} width
     * @return {?}
     */
    FabricDirective.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.initialWidth = width;
        if (this.instance) {
            this.instance.setWidth(width);
        }
    };
    /**
     * @param {?} height
     * @return {?}
     */
    FabricDirective.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.initialHeight = height;
        if (this.instance) {
            this.instance.setHeight(height);
        }
    };
    /**
     * @param {?} json
     * @param {?=} callback
     * @param {?=} reviverOpt
     * @return {?}
     */
    FabricDirective.prototype.loadFromJSON = /**
     * @param {?} json
     * @param {?=} callback
     * @param {?=} reviverOpt
     * @return {?}
     */
    function (json, callback, reviverOpt) {
        var _this = this;
        if (this.instance) {
            this.instance.loadFromJSON(json, (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var renderAll = true;
                if (callback) {
                    renderAll = callback();
                }
                if (renderAll && _this.instance) {
                    _this.instance.renderAll();
                }
            }), reviverOpt);
        }
    };
    FabricDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fabric]',
                    exportAs: 'ngxFabric'
                },] }
    ];
    /** @nocollapse */
    FabricDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: KeyValueDiffers },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FABRIC_CONFIG,] }] }
    ]; };
    FabricDirective.propDecorators = {
        zoom: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        disabled: [{ type: Input }],
        config: [{ type: Input, args: ['fabric',] }],
        drop: [{ type: Output }],
        dragover: [{ type: Output }],
        dragenter: [{ type: Output }],
        dragleave: [{ type: Output }],
        mouseup: [{ type: Output }],
        mousedown: [{ type: Output }],
        mouseover: [{ type: Output }],
        mouseout: [{ type: Output }],
        mousemove: [{ type: Output }],
        mousewheel: [{ type: Output }],
        mousedblclick: [{ type: Output }],
        mouseupBefore: [{ type: Output }],
        mousedownBefore: [{ type: Output }],
        mousemoveBefore: [{ type: Output }],
        mouseUp: [{ type: Output }],
        mouseDown: [{ type: Output }],
        mouseOver: [{ type: Output }],
        mouseOut: [{ type: Output }],
        mouseMove: [{ type: Output }],
        mouseDblclick: [{ type: Output }],
        mouseUpBefore: [{ type: Output }],
        mouseDownBefore: [{ type: Output }],
        mouseMoveBefore: [{ type: Output }],
        pathCreated: [{ type: Output }],
        alterRender: [{ type: Output }],
        objectAdded: [{ type: Output }],
        objectMoved: [{ type: Output }],
        objectScaled: [{ type: Output }],
        objectSkewed: [{ type: Output }],
        objectRotated: [{ type: Output }],
        objectRemoved: [{ type: Output }],
        objectModified: [{ type: Output }],
        objectSelected: [{ type: Output }],
        objectMoving: [{ type: Output }],
        objectScaling: [{ type: Output }],
        objectSkewing: [{ type: Output }],
        objectRotating: [{ type: Output }],
        selectionCleared: [{ type: Output }],
        selectionCreated: [{ type: Output }],
        selectionUpdated: [{ type: Output }],
        beforeTransform: [{ type: Output }],
        beforeSelectionCleared: [{ type: Output }]
    };
    return FabricDirective;
}());
export { FabricDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.ro;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.objectsJSON;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.initialZoom;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.initialWidth;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.initialHeight;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.configDiff;
    /** @type {?} */
    FabricDirective.prototype.disabled;
    /** @type {?} */
    FabricDirective.prototype.config;
    /** @type {?} */
    FabricDirective.prototype.drop;
    /** @type {?} */
    FabricDirective.prototype.dragover;
    /** @type {?} */
    FabricDirective.prototype.dragenter;
    /** @type {?} */
    FabricDirective.prototype.dragleave;
    /** @type {?} */
    FabricDirective.prototype.mouseup;
    /** @type {?} */
    FabricDirective.prototype.mousedown;
    /** @type {?} */
    FabricDirective.prototype.mouseover;
    /** @type {?} */
    FabricDirective.prototype.mouseout;
    /** @type {?} */
    FabricDirective.prototype.mousemove;
    /** @type {?} */
    FabricDirective.prototype.mousewheel;
    /** @type {?} */
    FabricDirective.prototype.mousedblclick;
    /** @type {?} */
    FabricDirective.prototype.mouseupBefore;
    /** @type {?} */
    FabricDirective.prototype.mousedownBefore;
    /** @type {?} */
    FabricDirective.prototype.mousemoveBefore;
    /** @type {?} */
    FabricDirective.prototype.mouseUp;
    /** @type {?} */
    FabricDirective.prototype.mouseDown;
    /** @type {?} */
    FabricDirective.prototype.mouseOver;
    /** @type {?} */
    FabricDirective.prototype.mouseOut;
    /** @type {?} */
    FabricDirective.prototype.mouseMove;
    /** @type {?} */
    FabricDirective.prototype.mouseDblclick;
    /** @type {?} */
    FabricDirective.prototype.mouseUpBefore;
    /** @type {?} */
    FabricDirective.prototype.mouseDownBefore;
    /** @type {?} */
    FabricDirective.prototype.mouseMoveBefore;
    /** @type {?} */
    FabricDirective.prototype.pathCreated;
    /** @type {?} */
    FabricDirective.prototype.alterRender;
    /** @type {?} */
    FabricDirective.prototype.objectAdded;
    /** @type {?} */
    FabricDirective.prototype.objectMoved;
    /** @type {?} */
    FabricDirective.prototype.objectScaled;
    /** @type {?} */
    FabricDirective.prototype.objectSkewed;
    /** @type {?} */
    FabricDirective.prototype.objectRotated;
    /** @type {?} */
    FabricDirective.prototype.objectRemoved;
    /** @type {?} */
    FabricDirective.prototype.objectModified;
    /** @type {?} */
    FabricDirective.prototype.objectSelected;
    /** @type {?} */
    FabricDirective.prototype.objectMoving;
    /** @type {?} */
    FabricDirective.prototype.objectScaling;
    /** @type {?} */
    FabricDirective.prototype.objectSkewing;
    /** @type {?} */
    FabricDirective.prototype.objectRotating;
    /** @type {?} */
    FabricDirective.prototype.selectionCleared;
    /** @type {?} */
    FabricDirective.prototype.selectionCreated;
    /** @type {?} */
    FabricDirective.prototype.selectionUpdated;
    /** @type {?} */
    FabricDirective.prototype.beforeTransform;
    /** @type {?} */
    FabricDirective.prototype.beforeSelectionCleared;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.differs;
    /**
     * @type {?}
     * @private
     */
    FabricDirective.prototype.defaults;
}
//# sourceMappingURL=fabric.directive.js.map