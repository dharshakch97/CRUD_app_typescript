"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const postRoute_1 = __importDefault(require("./routes/postRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const connectionString = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;
app.use('/post', postRoute_1.default);
app.listen(PORT, () => {
    mongoose_1.default.connect(connectionString).then((res) => {
        console.log(`DB Connected! Server listening on PORT ${PORT}`);
    })
        .catch((e) => {
        console.log(`Error in connecting to database, ${e}`);
    });
});
//# sourceMappingURL=app.js.map