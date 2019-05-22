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
const express_1 = __importDefault(require("express"));
const cardsController = __importStar(require("./controllers/cartas"));
const app = express_1.default();
const cors = require('cors');
app.use(cors());
app.get('/cartas', cardsController.index);
app.get('/cartas/sorteio', cardsController.random);
exports.default = app;
//# sourceMappingURL=app.js.map