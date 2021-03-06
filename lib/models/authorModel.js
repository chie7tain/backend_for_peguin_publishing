"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "an Author should have a name"],
    },
    age: Number,
    address: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});
// authorSchema.pre(/^find/, function() {
//   const book = this.books.map(el => )
// })
const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
