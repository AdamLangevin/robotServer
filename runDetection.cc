#include <node.h>

namesapce run {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args){
  Isolate* iso = args.GetIsolate();
  args.GetReturnValues().Set(String::NewFromUtf8(iso, "run"));
}

void init(Local<Object> exports){
  NODE_SET_METHOD(exports, "running", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)
}
