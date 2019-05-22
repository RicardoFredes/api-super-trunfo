"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cards_1 = __importDefault(require("../models/cards"));
const lotteryHelper = __importStar(require("../util/lotteryHelper"));
const { lotteryXElementsInArray } = lotteryHelper;
exports.index = (req, res) => res.send(cards_1.default);
exports.random = (req, res) => res.send(lotteryXElementsInArray(2, cards_1.default));
//# sourceMappingURL=cartas.js.map