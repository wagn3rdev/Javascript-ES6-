"use strict";
// fetch('http://jsonplaceholder.typicode.com/photos?_start=0&&limit=3')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "http://jsonplaceholder.typicode.com/photos?_start=0&&limit=3";
function enhancedFetch(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        const data = yield res.json();
        return {
            status: res.status,
            data
        };
    });
}
enhancedFetch(url)
    .then(res => {
    res.data.map(item => console.log(item.albumId));
});
