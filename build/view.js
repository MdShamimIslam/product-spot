/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../bpl-tools/utils/data.js":
/*!**********************************!*\
  !*** ../bpl-tools/utils/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deskBreakpoint: () => (/* binding */ deskBreakpoint),
/* harmony export */   mobileBreakpoint: () => (/* binding */ mobileBreakpoint),
/* harmony export */   tabBreakpoint: () => (/* binding */ tabBreakpoint)
/* harmony export */ });
const deskBreakpoint = '@media only screen and (min-width: 1025px)';
const tabBreakpoint = '@media only screen and (max-width: 1024px)';
const mobileBreakpoint = '@media only screen and (max-width: 640px)';

/***/ }),

/***/ "./src/Components/Backend/HoverCardDraggble/HoverCardDraggble.js":
/*!***********************************************************************!*\
  !*** ./src/Components/Backend/HoverCardDraggble/HoverCardDraggble.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TtitleDesBack_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TtitleDesBack/Title */ "./src/Components/Backend/TtitleDesBack/Title.js");
/* harmony import */ var _TtitleDesBack_Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TtitleDesBack/Description */ "./src/Components/Backend/TtitleDesBack/Description.js");





const HoverCardDraggble = ({
  hotspot,
  containerSize,
  handleStop,
  activeHotspot,
  setActiveHotspot,
  handleDeleteHotspot,
  selectedHotspot,
  setAttributes,
  hotspots
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {
    position: {
      x: hotspot.x / 100 * containerSize.width - 12,
      y: hotspot.y / 100 * containerSize.height - 12
    },
    bounds: ".image",
    onStop: (e, data) => handleStop(e, data, hotspot.id)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`,
    onMouseEnter: () => setActiveHotspot(hotspot.id),
    onMouseLeave: () => setActiveHotspot(null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "icon"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "deleteIcon",
    onClick: e => {
      e.stopPropagation();
      handleDeleteHotspot(hotspot.id);
    }
  }, "x"), activeHotspot === hotspot.id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `info ${hotspot.x > 70 ? 'leftShift' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TtitleDesBack_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedHotspot,
    setAttributes,
    hotspots
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TtitleDesBack_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedHotspot,
    setAttributes,
    hotspots
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverCardDraggble);

/***/ }),

/***/ "./src/Components/Backend/TtitleDesBack/Description.js":
/*!*************************************************************!*\
  !*** ./src/Components/Backend/TtitleDesBack/Description.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/functions */ "./src/utils/functions.js");



const Description = ({
  selectedHotspot = {},
  setAttributes = () => {},
  hotspots = []
}) => {
  const {
    id,
    description
  } = selectedHotspot;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: description,
    onChange: val => (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.updateHotspotField)(hotspots, setAttributes, id, 'description', val),
    className: "desc"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);

/***/ }),

/***/ "./src/Components/Backend/TtitleDesBack/Title.js":
/*!*******************************************************!*\
  !*** ./src/Components/Backend/TtitleDesBack/Title.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/functions */ "./src/utils/functions.js");



const Title = ({
  selectedHotspot = {},
  setAttributes = () => {},
  hotspots = []
}) => {
  const {
    id,
    title
  } = selectedHotspot;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h3",
    value: title,
    onChange: val => (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.updateHotspotField)(hotspots, setAttributes, id, 'title', val),
    className: "title"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./src/Components/Common/ProductImg/ProductImg.js":
/*!********************************************************!*\
  !*** ./src/Components/Common/ProductImg/ProductImg.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/options */ "./src/utils/options.js");


const ProductImg = ({
  imageRef,
  img
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    ref: imageRef,
    src: img?.url || _utils_options__WEBPACK_IMPORTED_MODULE_1__.defaultImg,
    alt: img?.alt || 'product-image',
    className: "image"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductImg);

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bpl_tools_utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../bpl-tools/utils/data */ "../bpl-tools/utils/data.js");


const Style = ({
  attributes,
  id,
  device = "desktop"
}) => {
  const {
    alignment,
    styles
  } = attributes || {};
  const {
    width
  } = styles || {};
  const mainSl = `#${id}`;
  const productSpotWrapperSl = `${mainSl} .productSpotWrapper`;
  const productSpotSl = `${productSpotWrapperSl} .productSpot`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
		
		${productSpotWrapperSl} {
			justify-content: ${alignment};
		}

		${productSpotSl} {
			width: ${width[device]};
		}


		${_bpl_tools_utils_data__WEBPACK_IMPORTED_MODULE_1__.tabBreakpoint}{
			${productSpotSl} {
				width: ${width.tablet};
			}
		}


		${_bpl_tools_utils_data__WEBPACK_IMPORTED_MODULE_1__.mobileBreakpoint}{
			${productSpotSl} {
				width: ${width.mobile};
			}
		}
		

	`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Common/theme/HoverCard.js":
/*!**************************************************!*\
  !*** ./src/Components/Common/theme/HoverCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var _ProductImg_ProductImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductImg/ProductImg */ "./src/Components/Common/ProductImg/ProductImg.js");
/* harmony import */ var _hooks_useHotspotManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useHotspotManager */ "./src/hooks/useHotspotManager.js");
/* harmony import */ var _frontend_TitleDes_TitleF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../frontend/TitleDes/TitleF */ "./src/Components/frontend/TitleDes/TitleF.js");
/* harmony import */ var _frontend_TitleDes_DescriptionF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../frontend/TitleDes/DescriptionF */ "./src/Components/frontend/TitleDes/DescriptionF.js");
/* harmony import */ var _Backend_HoverCardDraggble_HoverCardDraggble__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Backend/HoverCardDraggble/HoverCardDraggble */ "./src/Components/Backend/HoverCardDraggble/HoverCardDraggble.js");







const HoverCard = ({
  attributes,
  setAttributes,
  isBackend = true
}) => {
  const {
    containerRef,
    imageRef,
    containerSize,
    activeHotspot,
    setActiveHotspot,
    selectedHotspot,
    handleAddHotspot,
    handleStop,
    handleDeleteHotspot,
    img,
    hotspots
  } = (0,_hooks_useHotspotManager__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes, setAttributes);
  const renderFrontendHotspot = hotspot => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: hotspot.id,
    className: `hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`,
    style: {
      left: `${hotspot.x}%`,
      top: `${hotspot.y}%`
    },
    onMouseEnter: () => setActiveHotspot(hotspot.id),
    onMouseLeave: () => setActiveHotspot(null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "icon"
  }), activeHotspot === hotspot.id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `info ${hotspot.x > 70 ? 'leftShift' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_TitleDes_TitleF__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedHotspot
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_TitleDes_DescriptionF__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedHotspot
  }))));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hoverCard",
    ref: containerRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: isBackend ? handleAddHotspot : undefined
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductImg_ProductImg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    imageRef,
    img
  })), containerSize.width > 0 && hotspots.map(hotspot => isBackend ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_HoverCardDraggble_HoverCardDraggble__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: hotspot.id,
    hotspot,
    containerSize,
    handleStop,
    activeHotspot,
    setActiveHotspot,
    handleDeleteHotspot,
    selectedHotspot,
    setAttributes,
    hotspots
  }) : renderFrontendHotspot(hotspot)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverCard);

/***/ }),

/***/ "./src/Components/Common/theme/SidePanel.js":
/*!**************************************************!*\
  !*** ./src/Components/Common/theme/SidePanel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useHotspotManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useHotspotManager */ "./src/hooks/useHotspotManager.js");
/* harmony import */ var _ProductImg_ProductImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductImg/ProductImg */ "./src/Components/Common/ProductImg/ProductImg.js");
/* harmony import */ var _Backend_TtitleDesBack_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Backend/TtitleDesBack/Title */ "./src/Components/Backend/TtitleDesBack/Title.js");
/* harmony import */ var _Backend_TtitleDesBack_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Backend/TtitleDesBack/Description */ "./src/Components/Backend/TtitleDesBack/Description.js");
/* harmony import */ var _frontend_TitleDes_TitleF__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../frontend/TitleDes/TitleF */ "./src/Components/frontend/TitleDes/TitleF.js");
/* harmony import */ var _frontend_TitleDes_DescriptionF__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../frontend/TitleDes/DescriptionF */ "./src/Components/frontend/TitleDes/DescriptionF.js");







const SidePanel = ({
  attributes,
  setAttributes,
  isBackend = true,
  Hotspot
}) => {
  const {
    containerRef,
    imageRef,
    containerSize,
    activeHotspot,
    setActiveHotspot,
    selectedHotspot,
    handleAddHotspot,
    handleStop,
    handleDeleteHotspot,
    img,
    hotspots
  } = (0,_hooks_useHotspotManager__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, setAttributes);
  const backendHotspotProps = isBackend ? {
    containerSize,
    boundsTarget: ".imageAndHotspot",
    handleStop,
    handleDeleteHotspot
  } : {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidePanel",
    ref: containerRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "imageAndHotspot"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: isBackend ? handleAddHotspot : undefined
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductImg_ProductImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageRef,
    img
  })), containerSize.width > 0 && hotspots?.map(hotspot => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Hotspot, {
    key: hotspot?.id,
    hotspot,
    activeHotspot,
    setActiveHotspot,
    ...backendHotspotProps
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infoBox"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "info"
  }, isBackend ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_TtitleDesBack_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedHotspot,
    setAttributes,
    hotspots
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_TtitleDesBack_Description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedHotspot,
    setAttributes,
    hotspots
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_TitleDes_TitleF__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedHotspot
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_TitleDes_DescriptionF__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedHotspot
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btnGroup"
  }, hotspots.map(hotspot => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: hotspot.id,
    className: `indexBtn ${activeHotspot === hotspot.id ? "activeIdx" : ""}`,
    onClick: () => setActiveHotspot(hotspot.id)
  }, hotspot.id))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidePanel);

/***/ }),

/***/ "./src/Components/Common/theme/Simple.js":
/*!***********************************************!*\
  !*** ./src/Components/Common/theme/Simple.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useHotspotManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useHotspotManager */ "./src/hooks/useHotspotManager.js");
/* harmony import */ var _Backend_TtitleDesBack_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Backend/TtitleDesBack/Title */ "./src/Components/Backend/TtitleDesBack/Title.js");
/* harmony import */ var _Backend_TtitleDesBack_Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Backend/TtitleDesBack/Description */ "./src/Components/Backend/TtitleDesBack/Description.js");
/* harmony import */ var _frontend_TitleDes_TitleF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../frontend/TitleDes/TitleF */ "./src/Components/frontend/TitleDes/TitleF.js");
/* harmony import */ var _frontend_TitleDes_DescriptionF__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../frontend/TitleDes/DescriptionF */ "./src/Components/frontend/TitleDes/DescriptionF.js");
/* harmony import */ var _ProductImg_ProductImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProductImg/ProductImg */ "./src/Components/Common/ProductImg/ProductImg.js");







const Simple = ({
  attributes,
  setAttributes,
  isBackend = true,
  Hotspot
}) => {
  const {
    containerRef,
    imageRef,
    containerSize,
    activeHotspot,
    setActiveHotspot,
    selectedHotspot,
    handleAddHotspot,
    handleStop,
    handleDeleteHotspot,
    img,
    hotspots
  } = (0,_hooks_useHotspotManager__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, setAttributes);
  const backendHotspotProps = isBackend ? {
    containerSize,
    handleStop,
    handleDeleteHotspot
  } : {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "simple",
    ref: containerRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: isBackend ? handleAddHotspot : undefined
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductImg_ProductImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    imageRef,
    img
  })), containerSize.width > 0 && hotspots?.map(hotspot => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Hotspot, {
    key: hotspot?.id,
    hotspot,
    activeHotspot,
    setActiveHotspot,
    ...backendHotspotProps
  }))), activeHotspot !== null && selectedHotspot && (isBackend ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_TtitleDesBack_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedHotspot,
    setAttributes,
    hotspots
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_TtitleDesBack_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedHotspot,
    setAttributes,
    hotspots
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_TitleDes_TitleF__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedHotspot
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_TitleDes_DescriptionF__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedHotspot
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Simple);

/***/ }),

/***/ "./src/Components/Common/theme/TippyHotspot.js":
/*!*****************************************************!*\
  !*** ./src/Components/Common/theme/TippyHotspot.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TippyHotspots: () => (/* binding */ TippyHotspots)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var _hooks_useHotspotManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useHotspotManager */ "./src/hooks/useHotspotManager.js");
/* harmony import */ var _ProductImg_ProductImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductImg/ProductImg */ "./src/Components/Common/ProductImg/ProductImg.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Backend_TtitleDesBack_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Backend/TtitleDesBack/Title */ "./src/Components/Backend/TtitleDesBack/Title.js");
/* harmony import */ var _Backend_TtitleDesBack_Description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Backend/TtitleDesBack/Description */ "./src/Components/Backend/TtitleDesBack/Description.js");
/* harmony import */ var _frontend_TitleDes_TitleF__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../frontend/TitleDes/TitleF */ "./src/Components/frontend/TitleDes/TitleF.js");
/* harmony import */ var _frontend_TitleDes_DescriptionF__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../frontend/TitleDes/DescriptionF */ "./src/Components/frontend/TitleDes/DescriptionF.js");











function TippyHotspots({
  attributes,
  setAttributes,
  isBackend = true
}) {
  const {
    containerRef,
    imageRef,
    containerSize,
    activeHotspot,
    setActiveHotspot,
    selectedHotspot,
    handleAddHotspot,
    handleStop,
    handleDeleteHotspot,
    img,
    hotspots
  } = (0,_hooks_useHotspotManager__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes, setAttributes);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tippy",
    ref: containerRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: isBackend ? handleAddHotspot : undefined
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductImg_ProductImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageRef,
    img
  })), containerSize.width > 0 && hotspots.map(hotspot => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_draggable__WEBPACK_IMPORTED_MODULE_4___default()), {
    key: hotspot.id,
    position: {
      x: hotspot.x / 100 * containerSize.width - 12,
      y: hotspot.y / 100 * containerSize.height - 12
    },
    bounds: ".tippy",
    onStop: (e, data) => handleStop(e, data, hotspot.id)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "icon"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "deleteIcon",
    onClick: e => {
      e.stopPropagation();
      handleDeleteHotspot(hotspot.id);
    }
  }, "x")))));
}

/***/ }),

/***/ "./src/Components/Common/theme/index.js":
/*!**********************************************!*\
  !*** ./src/Components/Common/theme/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HoverCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HoverCard */ "./src/Components/Common/theme/HoverCard.js");
/* harmony import */ var _SidePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidePanel */ "./src/Components/Common/theme/SidePanel.js");
/* harmony import */ var _Simple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Simple */ "./src/Components/Common/theme/Simple.js");
/* harmony import */ var _TippyHotspot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TippyHotspot */ "./src/Components/Common/theme/TippyHotspot.js");





const Theme = props => {
  const {
    attributes
  } = props;
  const {
    themeSl = 'simple'
  } = attributes || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ThemeSwitch, {
    themeSl: themeSl,
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);
const ThemeSwitch = ({
  themeSl,
  ...props
}) => {
  switch (themeSl) {
    case 'sidepanel':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SidePanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ...props
      });
    case 'tippy':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TippyHotspot__WEBPACK_IMPORTED_MODULE_4__.TippyHotspots, {
        ...props
      });
    case 'hoverCard':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HoverCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props
      });
    default:
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Simple__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ...props
      });
  }
};

/***/ }),

/***/ "./src/Components/frontend/Hotspot/Hotspot.js":
/*!****************************************************!*\
  !*** ./src/Components/frontend/Hotspot/Hotspot.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");


const Hotspot = ({
  activeHotspot,
  hotspot,
  setActiveHotspot
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`,
    onClick: () => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id),
    style: {
      left: `${hotspot.x}%`,
      top: `${hotspot.y}%`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hotspot);

/***/ }),

/***/ "./src/Components/frontend/TitleDes/DescriptionF.js":
/*!**********************************************************!*\
  !*** ./src/Components/frontend/TitleDes/DescriptionF.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DescriptionF = ({
  selectedHotspot: {
    description
  }
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "desc"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DescriptionF);

/***/ }),

/***/ "./src/Components/frontend/TitleDes/TitleF.js":
/*!****************************************************!*\
  !*** ./src/Components/frontend/TitleDes/TitleF.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TitleF = ({
  selectedHotspot: {
    title
  }
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    dangerouslySetInnerHTML: {
      __html: title
    },
    className: "title"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleF);

/***/ }),

/***/ "./src/hooks/useHotspotManager.js":
/*!****************************************!*\
  !*** ./src/hooks/useHotspotManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHotspotManager = (attributes = {}, setAttributes = () => {}) => {
  const {
    img = {},
    hotspots = []
  } = attributes;
  const [activeHotspot, setActiveHotspot] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes?.themeSl === "sidepanel" ? 1 : null);
  const [containerSize, setContainerSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: 0,
    height: 0
  });
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const selectedHotspot = hotspots.find(h => h.id === activeHotspot);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (activeHotspot !== null) {
      const index = hotspots.findIndex(h => h.id === activeHotspot);
      if (index !== -1) {
        setAttributes({
          activeIndex: index
        });
      }
    }
  }, [activeHotspot, hotspots]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const image = imageRef.current;
    if (!image) return;
    const observer = new ResizeObserver(() => {
      const rect = image.getBoundingClientRect();
      setContainerSize({
        width: rect.width,
        height: rect.height
      });
    });
    observer.observe(image);
    return () => {
      observer.disconnect();
    };
  }, []);
  const handleAddHotspot = e => {
    if (e.target.closest('.hotspot')) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    const nextId = hotspots.length > 0 ? Math.max(...hotspots.map(h => h.id)) + 1 : 1;
    const newHotspot = {
      id: nextId,
      x,
      y,
      title: `Hotspot Title ${nextId}`,
      description: `Hotspot Description ${nextId}`
    };
    setAttributes({
      hotspots: [...hotspots, newHotspot]
    });
    setActiveHotspot(newHotspot.id);
  };
  const handleStop = (_e, data, hotspotId) => {
    const rect = imageRef.current.getBoundingClientRect();
    const xPercent = (data.x + 12) / rect.width * 100;
    const yPercent = (data.y + 12) / rect.height * 100;
    const updatedHotspots = hotspots.map(hotspot => hotspot.id === hotspotId ? {
      ...hotspot,
      x: xPercent,
      y: yPercent
    } : hotspot);
    setAttributes({
      hotspots: updatedHotspots
    });
  };
  const handleDeleteHotspot = id => {
    const updated = hotspots.filter(h => h.id !== id);
    setAttributes({
      hotspots: updated
    });
    setActiveHotspot(null);
  };

  // const defaultImg = defaultImg;

  return {
    containerRef,
    imageRef,
    containerSize,
    setContainerSize,
    activeHotspot,
    setActiveHotspot,
    selectedHotspot,
    handleAddHotspot,
    handleStop,
    handleDeleteHotspot,
    img,
    hotspots
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHotspotManager);

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNextId: () => (/* binding */ getNextId),
/* harmony export */   sanitizePerUnitValue: () => (/* binding */ sanitizePerUnitValue),
/* harmony export */   updateHotspotField: () => (/* binding */ updateHotspotField)
/* harmony export */ });
const sanitizePerUnitValue = value => {
  if (typeof value === 'string') {
    if (value.endsWith('%')) {
      const num = parseFloat(value);
      if (num > 100) {
        return '100%';
      }
    }
  }
  return value;
};
const getNextId = hotspots => {
  const ids = hotspots.map(h => h.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};
const updateHotspotField = (hotspots, setAttributes, hotspotId, field, value) => {
  const updatedHotspots = hotspots?.map(h => h?.id === hotspotId ? {
    ...h,
    [field]: value
  } : h);
  setAttributes({
    hotspots: updatedHotspots
  });
};

/***/ }),

/***/ "./src/utils/options.js":
/*!******************************!*\
  !*** ./src/utils/options.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultImg: () => (/* binding */ defaultImg),
/* harmony export */   generalStyleTabs: () => (/* binding */ generalStyleTabs),
/* harmony export */   themeOptions: () => (/* binding */ themeOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const generalStyleTabs = [{
  name: 'general',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'product-spot')
}, {
  name: 'style',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'product-spot')
}];
const defaultImg = "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB0ZWNoJTIwcHJvZHVjdHMlMjBlbGVjdHJvbmljc3xlbnwwfHx8fDE3NDcwNTE1ODh8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800";
const themeOptions = [{
  label: "Simple",
  value: "simple"
}, {
  label: "Side Panel",
  value: "sidepanel"
}, {
  label: "Tippy",
  value: "tippy"
}, {
  label: "Hover Card",
  value: "hoverCard"
}];

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.js":
/*!****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.js ***!
  \****************************************/
/***/ ((module) => {

function r(e){var o,t,f="";if("string"==typeof e||"number"==typeof e)f+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(t=r(e[o]))&&(f&&(f+=" "),f+=t)}else for(t in e)e[t]&&(f&&(f+=" "),f+=t);return f}function e(){for(var e,o,t=0,f="",n=arguments.length;t<n;t++)(e=arguments[t])&&(o=r(e))&&(f&&(f+=" "),f+=o);return f}module.exports=e,module.exports.clsx=e;

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/Icon.js":
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "svg",
    {
      ref,
      ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
      ...!children && !(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasA11yProp)(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(
        `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)((0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/plus.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/plus.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("plus", __iconNode);


//# sourceMappingURL=plus.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasA11yProp: () => (/* binding */ hasA11yProp),
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase),
/* harmony export */   toPascalCase: () => (/* binding */ toPascalCase)
/* harmony export */ });
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/tippy.js/dist/tippy.css":
/*!**********************************************!*\
  !*** ./node_modules/tippy.js/dist/tippy.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/Draggable.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/Draggable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DraggableCore", ({
  enumerable: true,
  get: function () {
    return _DraggableCore.default;
  }
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var _clsx = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.js");
var _domFns = __webpack_require__(/*! ./utils/domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");
var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "./node_modules/react-draggable/build/cjs/utils/positionFns.js");
var _shims = __webpack_require__(/*! ./utils/shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");
var _DraggableCore = _interopRequireDefault(__webpack_require__(/*! ./DraggableCore */ "./node_modules/react-draggable/build/cjs/DraggableCore.js"));
var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "./node_modules/react-draggable/build/cjs/utils/log.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*:: import type {ControlPosition, PositionOffsetControlPosition, DraggableCoreProps, DraggableCoreDefaultProps} from './DraggableCore';*/
/*:: import type {Bounds, DraggableEventHandler} from './utils/types';*/
/*:: import type {Element as ReactElement} from 'react';*/
/*:: type DraggableState = {
  dragging: boolean,
  dragged: boolean,
  x: number, y: number,
  slackX: number, slackY: number,
  isElementSVG: boolean,
  prevPropsPosition: ?ControlPosition,
};*/
/*:: export type DraggableDefaultProps = {
  ...DraggableCoreDefaultProps,
  axis: 'both' | 'x' | 'y' | 'none',
  bounds: Bounds | string | false,
  defaultClassName: string,
  defaultClassNameDragging: string,
  defaultClassNameDragged: string,
  defaultPosition: ControlPosition,
  scale: number,
};*/
/*:: export type DraggableProps = {
  ...DraggableCoreProps,
  ...DraggableDefaultProps,
  positionOffset: PositionOffsetControlPosition,
  position: ControlPosition,
};*/
//
// Define <Draggable>
//
class Draggable extends React.Component /*:: <DraggableProps, DraggableState>*/{
  // React 16.3+
  // Arity (props, state)
  static getDerivedStateFromProps(_ref /*:: */, _ref2 /*:: */) /*: ?Partial<DraggableState>*/{
    let {
      position
    } /*: DraggableProps*/ = _ref /*: DraggableProps*/;
    let {
      prevPropsPosition
    } /*: DraggableState*/ = _ref2 /*: DraggableState*/;
    // Set x/y if a new position is provided in props that is different than the previous.
    if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
      (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
        position,
        prevPropsPosition
      });
      return {
        x: position.x,
        y: position.y,
        prevPropsPosition: {
          ...position
        }
      };
    }
    return null;
  }
  constructor(props /*: DraggableProps*/) {
    super(props);
    _defineProperty(this, "onDragStart", (e, coreData) => {
      (0, _log.default)('Draggable: onDragStart: %j', coreData);

      // Short-circuit if user's callback killed it.
      const shouldStart = this.props.onStart(e, (0, _positionFns.createDraggableData)(this, coreData));
      // Kills start event on core as well, so move handlers are never bound.
      if (shouldStart === false) return false;
      this.setState({
        dragging: true,
        dragged: true
      });
    });
    _defineProperty(this, "onDrag", (e, coreData) => {
      if (!this.state.dragging) return false;
      (0, _log.default)('Draggable: onDrag: %j', coreData);
      const uiData = (0, _positionFns.createDraggableData)(this, coreData);
      const newState = {
        x: uiData.x,
        y: uiData.y,
        slackX: 0,
        slackY: 0
      };

      // Keep within bounds.
      if (this.props.bounds) {
        // Save original x and y.
        const {
          x,
          y
        } = newState;

        // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.
        newState.x += this.state.slackX;
        newState.y += this.state.slackY;

        // Get bound position. This will ceil/floor the x and y within the boundaries.
        const [newStateX, newStateY] = (0, _positionFns.getBoundPosition)(this, newState.x, newState.y);
        newState.x = newStateX;
        newState.y = newStateY;

        // Recalculate slack by noting how much was shaved by the boundPosition handler.
        newState.slackX = this.state.slackX + (x - newState.x);
        newState.slackY = this.state.slackY + (y - newState.y);

        // Update the event we fire to reflect what really happened after bounds took effect.
        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - this.state.x;
        uiData.deltaY = newState.y - this.state.y;
      }

      // Short-circuit if user's callback killed it.
      const shouldUpdate = this.props.onDrag(e, uiData);
      if (shouldUpdate === false) return false;
      this.setState(newState);
    });
    _defineProperty(this, "onDragStop", (e, coreData) => {
      if (!this.state.dragging) return false;

      // Short-circuit if user's callback killed it.
      const shouldContinue = this.props.onStop(e, (0, _positionFns.createDraggableData)(this, coreData));
      if (shouldContinue === false) return false;
      (0, _log.default)('Draggable: onDragStop: %j', coreData);
      const newState /*: Partial<DraggableState>*/ = {
        dragging: false,
        slackX: 0,
        slackY: 0
      };

      // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
      const controlled = Boolean(this.props.position);
      if (controlled) {
        const {
          x,
          y
        } = this.props.position;
        newState.x = x;
        newState.y = y;
      }
      this.setState(newState);
    });
    this.state = {
      // Whether or not we are currently dragging.
      dragging: false,
      // Whether or not we have been dragged before.
      dragged: false,
      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,
      prevPropsPosition: {
        ...props.position
      },
      // Used for compensating for out-of-bounds drags
      slackX: 0,
      slackY: 0,
      // Can only determine if SVG after mounting
      isElementSVG: false
    };
    if (props.position && !(props.onDrag || props.onStop)) {
      // eslint-disable-next-line no-console
      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
    }
  }
  componentDidMount() {
    // Check to see if the element passed is an instanceof SVGElement
    if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
      this.setState({
        isElementSVG: true
      });
    }
  }
  componentWillUnmount() {
    if (this.state.dragging) {
      this.setState({
        dragging: false
      }); // prevents invariant if unmounted while dragging
    }
  }

  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() /*: ?HTMLElement*/{
    return this.props?.nodeRef?.current ?? _reactDom.default.findDOMNode(this);
  }
  render() /*: ReactElement<any>*/{
    const {
      axis,
      bounds,
      children,
      defaultPosition,
      defaultClassName,
      defaultClassNameDragging,
      defaultClassNameDragged,
      position,
      positionOffset,
      scale,
      ...draggableCoreProps
    } = this.props;
    let style = {};
    let svgTransform = null;

    // If this is controlled, we don't want to move it - unless it's dragging.
    const controlled = Boolean(position);
    const draggable = !controlled || this.state.dragging;
    const validPosition = position || defaultPosition;
    const transformOpts = {
      // Set left if horizontal drag is enabled
      x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
      // Set top if vertical drag is enabled
      y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
    };

    // If this element was SVG, we use the `transform` attribute.
    if (this.state.isElementSVG) {
      svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
    } else {
      // Add a CSS transform to move the element around. This allows us to move the element around
      // without worrying about whether or not it is relatively or absolutely positioned.
      // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
      // has a clean slate.
      style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
    }

    // Mark with class while dragging
    const className = (0, _clsx.clsx)(children.props.className || '', defaultClassName, {
      [defaultClassNameDragging]: this.state.dragging,
      [defaultClassNameDragged]: this.state.dragged
    });

    // Reuse the child provided
    // This makes it flexible to use whatever element is wanted (div, ul, etc)
    return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
      onStart: this.onDragStart,
      onDrag: this.onDrag,
      onStop: this.onDragStop
    }), /*#__PURE__*/React.cloneElement(React.Children.only(children), {
      className: className,
      style: {
        ...children.props.style,
        ...style
      },
      transform: svgTransform
    }));
  }
}
exports["default"] = Draggable;
_defineProperty(Draggable, "displayName", 'Draggable');
_defineProperty(Draggable, "propTypes", {
  // Accepts all props <DraggableCore> accepts.
  ..._DraggableCore.default.propTypes,
  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),
  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
    left: _propTypes.default.number,
    right: _propTypes.default.number,
    top: _propTypes.default.number,
    bottom: _propTypes.default.number
  }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
  defaultClassName: _propTypes.default.string,
  defaultClassNameDragging: _propTypes.default.string,
  defaultClassNameDragged: _propTypes.default.string,
  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  positionOffset: _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),
  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});
_defineProperty(Draggable, "defaultProps", {
  ..._DraggableCore.default.defaultProps,
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: {
    x: 0,
    y: 0
  },
  scale: 1
});

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/DraggableCore.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/DraggableCore.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var _domFns = __webpack_require__(/*! ./utils/domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");
var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "./node_modules/react-draggable/build/cjs/utils/positionFns.js");
var _shims = __webpack_require__(/*! ./utils/shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");
var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "./node_modules/react-draggable/build/cjs/utils/log.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/
/*:: import type {Element as ReactElement} from 'react';*/
// Simple abstraction for dragging events names.
const eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
};

// Default to mouse events.
let dragEventFor = eventsFor.mouse;
/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/
/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void | false;*/
/*:: export type ControlPosition = {x: number, y: number};*/
/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/
/*:: export type DraggableCoreDefaultProps = {
  allowAnyClick: boolean,
  allowMobileScroll: boolean,
  disabled: boolean,
  enableUserSelectHack: boolean,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/
/*:: export type DraggableCoreProps = {
  ...DraggableCoreDefaultProps,
  cancel: string,
  children: ReactElement<any>,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
};*/
//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//

class DraggableCore extends React.Component /*:: <DraggableCoreProps>*/{
  constructor() {
    super(...arguments);
    _defineProperty(this, "dragging", false);
    // Used while dragging to determine deltas.
    _defineProperty(this, "lastX", NaN);
    _defineProperty(this, "lastY", NaN);
    _defineProperty(this, "touchIdentifier", null);
    _defineProperty(this, "mounted", false);
    _defineProperty(this, "handleDragStart", e => {
      // Make it possible to attach event handlers on top of this one.
      this.props.onMouseDown(e);

      // Only accept left-clicks.
      if (!this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;

      // Get nodes. Be sure to grab relative document (could be iframed)
      const thisNode = this.findDOMNode();
      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }
      const {
        ownerDocument
      } = thisNode;

      // Short circuit if handle or cancel prop was provided and selector doesn't match.
      if (this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.handle, thisNode) || this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.cancel, thisNode)) {
        return;
      }

      // Prevent scrolling on mobile devices, like ipad/iphone.
      // Important that this is after handle/cancel.
      if (e.type === 'touchstart' && !this.props.allowMobileScroll) e.preventDefault();

      // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.
      const touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
      this.touchIdentifier = touchIdentifier;

      // Get the current drag point from the event. This is used as the offset.
      const position = (0, _positionFns.getControlPosition)(e, touchIdentifier, this);
      if (position == null) return; // not possible but satisfies flow
      const {
        x,
        y
      } = position;

      // Create an event object with all the data parents need to make a decision here.
      const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
      (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent);

      // Call event handler. If it returns explicit false, cancel.
      (0, _log.default)('calling', this.props.onStart);
      const shouldUpdate = this.props.onStart(e, coreEvent);
      if (shouldUpdate === false || this.mounted === false) return;

      // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.
      if (this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument);

      // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.
      this.dragging = true;
      this.lastX = x;
      this.lastY = y;

      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, this.handleDrag);
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, this.handleDragStop);
    });
    _defineProperty(this, "handleDrag", e => {
      // Get the current drag point from the event. This is used as the offset.
      const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
      if (position == null) return;
      let {
        x,
        y
      } = position;

      // Snap to grid if prop has been provided
      if (Array.isArray(this.props.grid)) {
        let deltaX = x - this.lastX,
          deltaY = y - this.lastY;
        [deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
        if (!deltaX && !deltaY) return; // skip useless drag
        x = this.lastX + deltaX, y = this.lastY + deltaY;
      }
      const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
      (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent);

      // Call event handler. If it returns explicit false, trigger end.
      const shouldUpdate = this.props.onDrag(e, coreEvent);
      if (shouldUpdate === false || this.mounted === false) {
        try {
          // $FlowIgnore
          this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          const event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
          // I see why this insanity was deprecated
          // $FlowIgnore
          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          this.handleDragStop(event);
        }
        return;
      }
      this.lastX = x;
      this.lastY = y;
    });
    _defineProperty(this, "handleDragStop", e => {
      if (!this.dragging) return;
      const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
      if (position == null) return;
      let {
        x,
        y
      } = position;

      // Snap to grid if prop has been provided
      if (Array.isArray(this.props.grid)) {
        let deltaX = x - this.lastX || 0;
        let deltaY = y - this.lastY || 0;
        [deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
        x = this.lastX + deltaX, y = this.lastY + deltaY;
      }
      const coreEvent = (0, _positionFns.createCoreData)(this, x, y);

      // Call event handler
      const shouldContinue = this.props.onStop(e, coreEvent);
      if (shouldContinue === false || this.mounted === false) return false;
      const thisNode = this.findDOMNode();
      if (thisNode) {
        // Remove user-select hack
        if (this.props.enableUserSelectHack) (0, _domFns.scheduleRemoveUserSelectStyles)(thisNode.ownerDocument);
      }
      (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent);

      // Reset the el.
      this.dragging = false;
      this.lastX = NaN;
      this.lastY = NaN;
      if (thisNode) {
        // Remove event handlers
        (0, _log.default)('DraggableCore: Removing handlers');
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, this.handleDrag);
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, this.handleDragStop);
      }
    });
    _defineProperty(this, "onMouseDown", e => {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return this.handleDragStart(e);
    });
    _defineProperty(this, "onMouseUp", e => {
      dragEventFor = eventsFor.mouse;
      return this.handleDragStop(e);
    });
    // Same as onMouseDown (start drag), but now consider this a touch device.
    _defineProperty(this, "onTouchStart", e => {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return this.handleDragStart(e);
    });
    _defineProperty(this, "onTouchEnd", e => {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return this.handleDragStop(e);
    });
  }
  componentDidMount() {
    this.mounted = true;
    // Touch handlers must be added with {passive: false} to be cancelable.
    // https://developers.google.com/web/updates/2017/01/scrolling-intervention
    const thisNode = this.findDOMNode();
    if (thisNode) {
      (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
        passive: false
      });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    // Remove any leftover event handlers. Remove both touch and mouse handlers in case
    // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
    const thisNode = this.findDOMNode();
    if (thisNode) {
      const {
        ownerDocument
      } = thisNode;
      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
      (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
        passive: false
      });
      if (this.props.enableUserSelectHack) (0, _domFns.scheduleRemoveUserSelectStyles)(ownerDocument);
    }
  }

  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() /*: ?HTMLElement*/{
    return this.props?.nodeRef ? this.props?.nodeRef?.current : _reactDom.default.findDOMNode(this);
  }
  render() /*: React.Element<any>*/{
    // Reuse the child provided
    // This makes it flexible to use whatever element is wanted (div, ul, etc)
    return /*#__PURE__*/React.cloneElement(React.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
}
exports["default"] = DraggableCore;
_defineProperty(DraggableCore, "displayName", 'DraggableCore');
_defineProperty(DraggableCore, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,
  /**
   * `allowMobileScroll` turns off cancellation of the 'touchstart' event
   * on mobile devices. Only enable this if you are having trouble with click
   * events. Prefer using 'handle' / 'cancel' instead.
   *
   * Defaults to `false`.
   */
  allowMobileScroll: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function (props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});
_defineProperty(DraggableCore, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  allowMobileScroll: false,
  disabled: false,
  enableUserSelectHack: true,
  onStart: function () {},
  onDrag: function () {},
  onStop: function () {},
  onMouseDown: function () {},
  scale: 1
});

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/cjs.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
  default: Draggable,
  DraggableCore
} = __webpack_require__(/*! ./Draggable */ "./node_modules/react-draggable/build/cjs/Draggable.js");

// Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266
module.exports = Draggable;
module.exports["default"] = Draggable;
module.exports.DraggableCore = DraggableCore;

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/domFns.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/domFns.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addClassName = addClassName;
exports.addEvent = addEvent;
exports.addUserSelectStyles = addUserSelectStyles;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.getTranslation = getTranslation;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.offsetXYFromParent = offsetXYFromParent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.removeClassName = removeClassName;
exports.removeEvent = removeEvent;
exports.scheduleRemoveUserSelectStyles = scheduleRemoveUserSelectStyles;
var _shims = __webpack_require__(/*! ./shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");
var _getPrefix = _interopRequireWildcard(__webpack_require__(/*! ./getPrefix */ "./node_modules/react-draggable/build/cjs/utils/getPrefix.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/*:: import type {ControlPosition, PositionOffsetControlPosition, MouseTouchEvent} from './types';*/
let matchesSelectorFunc = '';
function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/{
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, _shims.isFunction)(el[method]);
    });
  }

  // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable
  if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false;

  // $FlowIgnore: Doesn't think elements are indexable
  return el[matchesSelectorFunc](selector);
}

// Works up the tree to the draggable itself attempting to match selector.
function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/{
  let node = el;
  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    // $FlowIgnore[incompatible-type]
    node = node.parentNode;
  } while (node);
  return false;
}
function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/, inputOptions /*: Object*/) /*: void*/{
  if (!el) return;
  const options = {
    capture: true,
    ...inputOptions
  };
  // $FlowIgnore[method-unbinding]
  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}
function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/, inputOptions /*: Object*/) /*: void*/{
  if (!el) return;
  const options = {
    capture: true,
    ...inputOptions
  };
  // $FlowIgnore[method-unbinding]
  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}
function outerHeight(node /*: HTMLElement*/) /*: number*/{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  let height = node.clientHeight;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims.int)(computedStyle.borderTopWidth);
  height += (0, _shims.int)(computedStyle.borderBottomWidth);
  return height;
}
function outerWidth(node /*: HTMLElement*/) /*: number*/{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  let width = node.clientWidth;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims.int)(computedStyle.borderLeftWidth);
  width += (0, _shims.int)(computedStyle.borderRightWidth);
  return width;
}
function innerHeight(node /*: HTMLElement*/) /*: number*/{
  let height = node.clientHeight;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims.int)(computedStyle.paddingTop);
  height -= (0, _shims.int)(computedStyle.paddingBottom);
  return height;
}
function innerWidth(node /*: HTMLElement*/) /*: number*/{
  let width = node.clientWidth;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims.int)(computedStyle.paddingLeft);
  width -= (0, _shims.int)(computedStyle.paddingRight);
  return width;
}
/*:: interface EventWithOffset {
  clientX: number, clientY: number
}*/
// Get from offsetParent
function offsetXYFromParent(evt /*: EventWithOffset*/, offsetParent /*: HTMLElement*/, scale /*: number*/) /*: ControlPosition*/{
  const isBody = offsetParent === offsetParent.ownerDocument.body;
  const offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  const x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  const y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x,
    y
  };
}
function createCSSTransform(controlPos /*: ControlPosition*/, positionOffset /*: PositionOffsetControlPosition*/) /*: Object*/{
  const translation = getTranslation(controlPos, positionOffset, 'px');
  return {
    [(0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default)]: translation
  };
}
function createSVGTransform(controlPos /*: ControlPosition*/, positionOffset /*: PositionOffsetControlPosition*/) /*: string*/{
  const translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}
function getTranslation(_ref /*:: */, positionOffset /*: PositionOffsetControlPosition*/, unitSuffix /*: string*/) /*: string*/{
  let {
    x,
    y
  } /*: ControlPosition*/ = _ref /*: ControlPosition*/;
  let translation = `translate(${x}${unitSuffix},${y}${unitSuffix})`;
  if (positionOffset) {
    const defaultX = `${typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix}`;
    const defaultY = `${typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix}`;
    translation = `translate(${defaultX}, ${defaultY})` + translation;
  }
  return translation;
}
function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/{
  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, t => identifier === t.identifier) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, t => identifier === t.identifier);
}
function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/{
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}

// User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.

// Note we're passing `document` b/c we could be iframed
function addUserSelectStyles(doc /*: ?Document*/) {
  if (!doc) return;
  let styleEl = doc.getElementById('react-draggable-style-el');
  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }
  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}
function scheduleRemoveUserSelectStyles(doc /*: ?Document*/) {
  // Prevent a possible "forced reflow"
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(() => {
      removeUserSelectStyles(doc);
    });
  } else {
    removeUserSelectStyles(doc);
  }
}
function removeUserSelectStyles(doc /*: ?Document*/) {
  if (!doc) return;
  try {
    if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
    // $FlowIgnore: IE
    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      // Remove selection caused by scroll, unless it's a focused input
      // (we use doc.defaultView in case we're in an iframe)
      const selection = (doc.defaultView || window).getSelection();
      if (selection && selection.type !== 'Caret') {
        selection.removeAllRanges();
      }
    }
  } catch (e) {
    // probably IE
  }
}
function addClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp(`(?:^|\\s)${className}(?!\\S)`))) {
      el.className += ` ${className}`;
    }
  }
}
function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp(`(?:^|\\s)${className}(?!\\S)`, 'g'), '');
  }
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/getPrefix.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/getPrefix.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
exports["default"] = void 0;
exports.getPrefix = getPrefix;
const prefixes = ['Moz', 'Webkit', 'O', 'ms'];
function getPrefix() /*: string*/{
  let prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Ensure we're running in an environment where there is actually a global
  // `window` obj
  if (typeof window === 'undefined') return '';

  // If we're in a pseudo-browser server-side environment, this access
  // path may not exist, so bail out if it doesn't.
  const style = window.document?.documentElement?.style;
  if (!style) return '';
  if (prop in style) return '';
  for (let i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }
  return '';
}
function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/{
  return prefix ? `${prefix}${kebabToTitleCase(prop)}` : prop;
}
function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/{
  return prefix ? `-${prefix.toLowerCase()}-${prop}` : prop;
}
function kebabToTitleCase(str /*: string*/) /*: string*/{
  let out = '';
  let shouldCapitalize = true;
  for (let i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}

// Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`
var _default = exports["default"] = (getPrefix() /*: string*/);

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = log;
/*eslint no-console:0*/
function log() {
  if (false) {}
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/positionFns.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/positionFns.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;
exports.getBoundPosition = getBoundPosition;
exports.getControlPosition = getControlPosition;
exports.snapToGrid = snapToGrid;
var _shims = __webpack_require__(/*! ./shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");
var _domFns = __webpack_require__(/*! ./domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");
/*:: import type Draggable from '../Draggable';*/
/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
/*:: import type DraggableCore from '../DraggableCore';*/
function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/{
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y];

  // Clone new bounds
  let {
    bounds
  } = draggable.props;
  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  const node = findDOMNode(draggable);
  if (typeof bounds === 'string') {
    const {
      ownerDocument
    } = node;
    const ownerWindow = ownerDocument.defaultView;
    let boundNode;
    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      // Flow assigns the wrong return type (Node) for getRootNode(),
      // so we cast it to one of the correct types (Element).
      // The others are Document and ShadowRoot.
      // All three implement querySelector() so it's safe to call.
      const rootNode = ((node.getRootNode() /*: any*/) /*: Element*/);
      boundNode = rootNode.querySelector(bounds);
    }
    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }
    const boundNodeEl /*: HTMLElement*/ = boundNode; // for Flow, can't seem to refine correctly
    const nodeStyle = ownerWindow.getComputedStyle(node);
    const boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
    bounds = {
      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
      right: (0, _domFns.innerWidth)(boundNodeEl) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
      bottom: (0, _domFns.innerHeight)(boundNodeEl) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
    };
  }

  // Keep x and y below right and bottom limits...
  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);

  // But above left and top limits.
  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}
function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/{
  const x = Math.round(pendingX / grid[0]) * grid[0];
  const y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}
function canDragX(draggable /*: Draggable*/) /*: boolean*/{
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}
function canDragY(draggable /*: Draggable*/) /*: boolean*/{
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
}

// Get {x, y} positions from event.
function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/{
  const touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
  const node = findDOMNode(draggableCore);
  // User can provide an offsetParent if desired.
  const offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
}

// Create an data object exposed by <DraggableCore>'s events
function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/{
  const isStart = !(0, _shims.isNum)(draggable.lastX);
  const node = findDOMNode(draggable);
  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x,
      y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node,
      deltaX: x - draggable.lastX,
      deltaY: y - draggable.lastY,
      lastX: draggable.lastX,
      lastY: draggable.lastY,
      x,
      y
    };
  }
}

// Create an data exposed by <Draggable>'s events
function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/{
  const scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
}

// A lot faster than stringify/parse
function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/{
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}
function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/{
  const node = draggable.findDOMNode();
  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  }
  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
  return node;
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/shims.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/shims.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dontSetMe = dontSetMe;
exports.findInArray = findInArray;
exports.int = int;
exports.isFunction = isFunction;
exports.isNum = isNum;
// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/{
  for (let i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}
function isFunction(func /*: any*/) /*: boolean %checks*/{
  // $FlowIgnore[method-unbinding]
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}
function isNum(num /*: any*/) /*: boolean %checks*/{
  return typeof num === 'number' && !isNaN(num);
}
function int(a /*: string*/) /*: number*/{
  return parseInt(a, 10);
}
function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) /*: ?Error*/{
  if (props[propName]) {
    return new Error(`Invalid prop ${propName} passed to ${componentName} - do not set this, set it on the child.`);
  }
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Common_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/theme */ "./src/Components/Common/theme/index.js");
/* harmony import */ var _Components_frontend_Hotspot_Hotspot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/frontend/Hotspot/Hotspot */ "./src/Components/frontend/Hotspot/Hotspot.js");






document.addEventListener('DOMContentLoaded', () => {
  const blockNameEls = document.querySelectorAll('.wp-block-psb-product-spot');
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(blockNameEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: blockNameEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "productSpotWrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "productSpot"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_theme__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes,
      isBackend: false,
      Hotspot: _Components_frontend_Hotspot_Hotspot__WEBPACK_IMPORTED_MODULE_5__["default"]
    })))));
    blockNameEl?.removeAttribute('data-attributes');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map