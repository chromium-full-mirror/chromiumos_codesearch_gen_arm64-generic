// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/heap-number.tq?l=8&c=3
template<class D, class P>
double TorqueGeneratedHeapNumber<D, P>::value() const {
  double value = this->template ReadField<double>(kValueOffset);
  return value;
}

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/heap-number.tq?l=8&c=3
template<class D, class P>
void TorqueGeneratedHeapNumber<D, P>::set_value(double value) {
  this->template WriteField<double>(kValueOffset, value);
}

// https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/heap-number.tq?l=5&c=1
template<class D, class P>
Tagged<D> TorqueGeneratedHeapNumber<D, P>::cast(Tagged<Object> object) {
    return Tagged<D>(D(object.ptr()));
}

template<class D, class P>
inline TorqueGeneratedHeapNumber<D, P>::TorqueGeneratedHeapNumber(Address ptr)
    : P(ptr) {
  SLOW_DCHECK(IsHeapNumber_NonInline(*this));
}
