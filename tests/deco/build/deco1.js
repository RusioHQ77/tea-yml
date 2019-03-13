"use strict";


var akessrfljlrgqgd_decorate = function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var akessrfljlrgqgd_metadata = function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var akessrfljlrgqgd_param = function (paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
};
;

const classDeco = (...args) => {
  console.log('classDeco', classDeco.prototype);
};

const methodDeco = (...args) => {};

const fieldDeco = (...args) => {};

const argsDeco = (...args) => {};

const argsDeco2 = (...args) => {};

class Reference {}

class TestClass {
  constructor() {
    this.field1 = void 0;
    this.field2 = void 0;
    this.field3 = void 0;
  }

  method(arg) {}

  method2(arg1, arg2) {}

}

akessrfljlrgqgd_decorate([fieldDeco, fieldDeco, akessrfljlrgqgd_metadata("design:type", Number)], TestClass.prototype, "field1", void 0)
akessrfljlrgqgd_decorate([fieldDeco, fieldDeco, akessrfljlrgqgd_metadata("design:type", Object)], TestClass.prototype, "field2", void 0)
akessrfljlrgqgd_decorate([fieldDeco, fieldDeco, akessrfljlrgqgd_metadata("design:type", typeof Reference === "undefined" ? Object : Reference)], TestClass.prototype, "field3", void 0)
akessrfljlrgqgd_decorate([methodDeco, methodDeco, akessrfljlrgqgd_param(0, argsDeco), akessrfljlrgqgd_metadata("design:type", Function), akessrfljlrgqgd_metadata("design:paramtypes", [String]), akessrfljlrgqgd_metadata("design:returntype", Number)], TestClass.prototype, "method", null)
akessrfljlrgqgd_decorate([akessrfljlrgqgd_param(0, argsDeco), akessrfljlrgqgd_param(0, argsDeco2), akessrfljlrgqgd_param(1, argsDeco), akessrfljlrgqgd_metadata("design:type", Function), akessrfljlrgqgd_metadata("design:paramtypes", [Number, Object]), akessrfljlrgqgd_metadata("design:returntype", typeof Reference === "undefined" ? Object : Reference)], TestClass.prototype, "method2", null)
TestClass = akessrfljlrgqgd_decorate([classDeco, classDeco], TestClass)