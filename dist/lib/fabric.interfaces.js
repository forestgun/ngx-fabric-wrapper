/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var FABRIC_CONFIG = new InjectionToken('FABRIC_CONFIG');
/** @type {?} */
export var FabricEvents = [
    'drop',
    'dragover',
    'dragenter',
    'dragleave',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'mousemove',
    'mousewheel',
    'mousedblclick',
    'mouseupBefore',
    'mousedownBefore',
    'mousemoveBefore',
    'mouseUp',
    'mouseDown',
    'mouseOver',
    'mouseOut',
    'mouseMove',
    'mouseDblclick',
    'mouseUpBefore',
    'mouseDownBefore',
    'mouseMoveBefore',
    'pathCreated',
    'alterRender',
    'objectAdded',
    'objectMoved',
    'objectScaled',
    'objectSkewed',
    'objectRotated',
    'objectRemoved',
    'objectModified',
    'objectSelected',
    'objectMoving',
    'objectScaling',
    'objectSkewing',
    'objectRotating',
    'selectionCleared',
    'selectionCreated',
    'selectionUpdated',
    'beforeTransform',
    'beforeSelectionCleared'
];
/**
 * @record
 */
export function FabricConfigInterface() { }
if (false) {
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.allowTouchScrolling;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.altActionKey;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.altSelectionKey;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.backgroundColor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.backgroundImage;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.backgroundVpt;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.centeredKey;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.centeredRotation;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.centeredScaling;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.clipTo;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.containerClass;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.controlsAboveOverlay;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.defaultCursor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.enableRetinaScaling;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.fireMiddleClick;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.fireRightClick;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.freeDrawingCursor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.FX_DURATION;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.hoverCursor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.imageSmoothingEnabled;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.includeDefaultValues;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.interactive;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.isDrawingMode;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.moveCursor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.notAllowedCursor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.overlayColor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.overlayImage;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.overlayVpt;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.perPixelTargetFind;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.preserveObjectStacking;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.renderOnAddRemove;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.rotationCursor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.selection;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.selectionBorderColor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.selectionColor;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.selectionDashArray;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.selectionKey;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.selectionLineWidth;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.skipOffscreen;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.skipTargetFind;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.snapAngle;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.snapThreshold;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.stateful;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.stopContextMenu;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.svgViewportTransformation;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.targetFindToTolerance;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.uniScaleKey;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.uniScaleTransform;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.viewportTransform;
    /** @type {?|undefined} */
    FabricConfigInterface.prototype.vptCoords;
}
var FabricConfig = /** @class */ (function () {
    function FabricConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    FabricConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        for (var key in config) {
            this[(/** @type {?} */ (key))] = config[(/** @type {?} */ (key))];
        }
    };
    return FabricConfig;
}());
export { FabricConfig };
if (false) {
    /** @type {?} */
    FabricConfig.prototype.allowTouchScrolling;
    /** @type {?} */
    FabricConfig.prototype.altActionKey;
    /** @type {?} */
    FabricConfig.prototype.altSelectionKey;
    /** @type {?} */
    FabricConfig.prototype.backgroundColor;
    /** @type {?} */
    FabricConfig.prototype.backgroundImage;
    /** @type {?} */
    FabricConfig.prototype.backgroundVpt;
    /** @type {?} */
    FabricConfig.prototype.centeredKey;
    /** @type {?} */
    FabricConfig.prototype.centeredRotation;
    /** @type {?} */
    FabricConfig.prototype.centeredScaling;
    /** @type {?} */
    FabricConfig.prototype.clipTo;
    /** @type {?} */
    FabricConfig.prototype.containerClass;
    /** @type {?} */
    FabricConfig.prototype.controlsAboveOverlay;
    /** @type {?} */
    FabricConfig.prototype.defaultCursor;
    /** @type {?} */
    FabricConfig.prototype.enableRetinaScaling;
    /** @type {?} */
    FabricConfig.prototype.fireMiddleClick;
    /** @type {?} */
    FabricConfig.prototype.fireRightClick;
    /** @type {?} */
    FabricConfig.prototype.freeDrawingCursor;
    /** @type {?} */
    FabricConfig.prototype.FX_DURATION;
    /** @type {?} */
    FabricConfig.prototype.hoverCursor;
    /** @type {?} */
    FabricConfig.prototype.imageSmoothingEnabled;
    /** @type {?} */
    FabricConfig.prototype.includeDefaultValues;
    /** @type {?} */
    FabricConfig.prototype.interactive;
    /** @type {?} */
    FabricConfig.prototype.isDrawingMode;
    /** @type {?} */
    FabricConfig.prototype.moveCursor;
    /** @type {?} */
    FabricConfig.prototype.notAllowedCursor;
    /** @type {?} */
    FabricConfig.prototype.overlayColor;
    /** @type {?} */
    FabricConfig.prototype.overlayImage;
    /** @type {?} */
    FabricConfig.prototype.overlayVpt;
    /** @type {?} */
    FabricConfig.prototype.perPixelTargetFind;
    /** @type {?} */
    FabricConfig.prototype.preserveObjectStacking;
    /** @type {?} */
    FabricConfig.prototype.renderOnAddRemove;
    /** @type {?} */
    FabricConfig.prototype.rotationCursor;
    /** @type {?} */
    FabricConfig.prototype.selection;
    /** @type {?} */
    FabricConfig.prototype.selectionBorderColor;
    /** @type {?} */
    FabricConfig.prototype.selectionColor;
    /** @type {?} */
    FabricConfig.prototype.selectionDashArray;
    /** @type {?} */
    FabricConfig.prototype.selectionKey;
    /** @type {?} */
    FabricConfig.prototype.selectionLineWidth;
    /** @type {?} */
    FabricConfig.prototype.skipOffscreen;
    /** @type {?} */
    FabricConfig.prototype.skipTargetFind;
    /** @type {?} */
    FabricConfig.prototype.snapAngle;
    /** @type {?} */
    FabricConfig.prototype.snapThreshold;
    /** @type {?} */
    FabricConfig.prototype.stateful;
    /** @type {?} */
    FabricConfig.prototype.stopContextMenu;
    /** @type {?} */
    FabricConfig.prototype.svgViewportTransformation;
    /** @type {?} */
    FabricConfig.prototype.targetFindToTolerance;
    /** @type {?} */
    FabricConfig.prototype.uniScaleKey;
    /** @type {?} */
    FabricConfig.prototype.uniScaleTransform;
    /** @type {?} */
    FabricConfig.prototype.viewportTransform;
    /** @type {?} */
    FabricConfig.prototype.vptCoords;
}
//# sourceMappingURL=fabric.interfaces.js.map