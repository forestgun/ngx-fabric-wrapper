/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, HostBinding, ViewEncapsulation } from '@angular/core';
import { FabricDirective } from './fabric.directive';
var FabricComponent = /** @class */ (function () {
    function FabricComponent() {
        this.json = null;
        this.zoom = null;
        this.width = null;
        this.height = null;
        this.disabled = false;
        this.useFabricClass = true;
        this.dataLoaded = new EventEmitter();
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
    Object.defineProperty(FabricComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.setJSON(data);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FabricComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.json != null) {
            this.setJSON(this.json, true);
        }
    };
    /**
     * @private
     * @param {?} json
     * @param {?=} force
     * @return {?}
     */
    FabricComponent.prototype.setJSON = /**
     * @private
     * @param {?} json
     * @param {?=} force
     * @return {?}
     */
    function (json, force) {
        var _this = this;
        if (force || json !== this.json) {
            if (this.directiveRef) {
                this.directiveRef.loadFromJSON(json, (/**
                 * @return {?}
                 */
                function () {
                    if (_this.directiveRef && _this.directiveRef.fabric()) {
                        _this.dataLoaded.emit(_this.directiveRef.fabric());
                    }
                }));
            }
            this.json = json;
        }
    };
    FabricComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fabric',
                    exportAs: 'ngxFabric',
                    template: "<canvas [fabric]=\"config\" [zoom]=\"zoom\" [width]=\"width\" [height]=\"height\" [disabled]=\"disabled\" (mouseUp)=\"mouseUp.emit($event)\" (mouseDown)=\"mouseDown.emit($event)\" (mouseOver)=\"mouseOver.emit($event)\" (mouseOut)=\"mouseOut.emit($event)\" (mouseMove)=\"mouseMove.emit($event)\" (mouseDblclick)=\"mouseDblclick.emit($event)\" (pathCreated)=\"pathCreated.emit($event)\" (objectAdded)=\"objectAdded.emit($event)\" (objectRemoved)=\"objectRemoved.emit($event)\" (objectModified)=\"objectModified.emit($event)\" (objectMoving)=\"objectMoving.emit($event)\" (objectScaling)=\"objectScaling.emit($event)\" (objectRotating)=\"objectRotating.emit($event)\" (objectSelected)=\"objectSelected.emit($event)\" (selectionCleared)=\"selectionCleared.emit($event)\" (selectionCreated)=\"selectionCreated.emit($event)\" (selectionUpdated)=\"selectionUpdated.emit($event)\" (beforeSelectionCleared)=\"beforeSelectionCleared.emit($event)\">\n</canvas>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["fabric[fxflex] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: column;\n  -webkit-box-orient: column;\n}\n\nfabric.fabric {\n  width: 100%;\n  height: 100%;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    FabricComponent.ctorParameters = function () { return []; };
    FabricComponent.propDecorators = {
        data: [{ type: Input }],
        zoom: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        disabled: [{ type: Input }],
        config: [{ type: Input }],
        useFabricClass: [{ type: HostBinding, args: ['class.fabric',] }, { type: Input }],
        dataLoaded: [{ type: Output }],
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
        beforeSelectionCleared: [{ type: Output }],
        directiveRef: [{ type: ViewChild, args: [FabricDirective, { static: true },] }]
    };
    return FabricComponent;
}());
export { FabricComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricComponent.prototype.json;
    /** @type {?} */
    FabricComponent.prototype.zoom;
    /** @type {?} */
    FabricComponent.prototype.width;
    /** @type {?} */
    FabricComponent.prototype.height;
    /** @type {?} */
    FabricComponent.prototype.disabled;
    /** @type {?} */
    FabricComponent.prototype.config;
    /** @type {?} */
    FabricComponent.prototype.useFabricClass;
    /** @type {?} */
    FabricComponent.prototype.dataLoaded;
    /** @type {?} */
    FabricComponent.prototype.drop;
    /** @type {?} */
    FabricComponent.prototype.dragover;
    /** @type {?} */
    FabricComponent.prototype.dragenter;
    /** @type {?} */
    FabricComponent.prototype.dragleave;
    /** @type {?} */
    FabricComponent.prototype.mouseup;
    /** @type {?} */
    FabricComponent.prototype.mousedown;
    /** @type {?} */
    FabricComponent.prototype.mouseover;
    /** @type {?} */
    FabricComponent.prototype.mouseout;
    /** @type {?} */
    FabricComponent.prototype.mousemove;
    /** @type {?} */
    FabricComponent.prototype.mousewheel;
    /** @type {?} */
    FabricComponent.prototype.mousedblclick;
    /** @type {?} */
    FabricComponent.prototype.mouseupBefore;
    /** @type {?} */
    FabricComponent.prototype.mousedownBefore;
    /** @type {?} */
    FabricComponent.prototype.mousemoveBefore;
    /** @type {?} */
    FabricComponent.prototype.mouseUp;
    /** @type {?} */
    FabricComponent.prototype.mouseDown;
    /** @type {?} */
    FabricComponent.prototype.mouseOver;
    /** @type {?} */
    FabricComponent.prototype.mouseOut;
    /** @type {?} */
    FabricComponent.prototype.mouseMove;
    /** @type {?} */
    FabricComponent.prototype.mouseDblclick;
    /** @type {?} */
    FabricComponent.prototype.mouseUpBefore;
    /** @type {?} */
    FabricComponent.prototype.mouseDownBefore;
    /** @type {?} */
    FabricComponent.prototype.mouseMoveBefore;
    /** @type {?} */
    FabricComponent.prototype.pathCreated;
    /** @type {?} */
    FabricComponent.prototype.alterRender;
    /** @type {?} */
    FabricComponent.prototype.objectAdded;
    /** @type {?} */
    FabricComponent.prototype.objectMoved;
    /** @type {?} */
    FabricComponent.prototype.objectScaled;
    /** @type {?} */
    FabricComponent.prototype.objectSkewed;
    /** @type {?} */
    FabricComponent.prototype.objectRotated;
    /** @type {?} */
    FabricComponent.prototype.objectRemoved;
    /** @type {?} */
    FabricComponent.prototype.objectModified;
    /** @type {?} */
    FabricComponent.prototype.objectSelected;
    /** @type {?} */
    FabricComponent.prototype.objectMoving;
    /** @type {?} */
    FabricComponent.prototype.objectScaling;
    /** @type {?} */
    FabricComponent.prototype.objectSkewing;
    /** @type {?} */
    FabricComponent.prototype.objectRotating;
    /** @type {?} */
    FabricComponent.prototype.selectionCleared;
    /** @type {?} */
    FabricComponent.prototype.selectionCreated;
    /** @type {?} */
    FabricComponent.prototype.selectionUpdated;
    /** @type {?} */
    FabricComponent.prototype.beforeTransform;
    /** @type {?} */
    FabricComponent.prototype.beforeSelectionCleared;
    /** @type {?} */
    FabricComponent.prototype.directiveRef;
}
//# sourceMappingURL=fabric.component.js.map