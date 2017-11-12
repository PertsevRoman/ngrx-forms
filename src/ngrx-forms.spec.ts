import {
  addControl,
  cast,
  createFormArrayState,
  createFormControlState,
  createFormGroupState,
  disable,
  enable,
  focus,
  formArrayReducer,
  formControlReducer,
  formGroupReducer,
  isArrayState,
  isGroupState,
  markAsDirty,
  markAsPristine,
  markAsSubmitted,
  markAsTouched,
  markAsUnsubmitted,
  markAsUntouched,
  NgrxCheckboxControlValueAccessor,
  NgrxDefaultValueAccessor,
  NgrxFormControlDirective,
  NgrxFormDirective,
  NgrxFormsModule,
  NgrxNumberValueAccessor,
  NgrxRadioControlValueAccessor,
  NgrxRangeValueAccessor,
  NgrxSelectControlValueAccessor,
  NgrxSelectMultipleControlValueAccessor,
  NgrxSelectOption,
  NgrxValueConverters,
  removeControl,
  reset,
  setErrors,
  setUserDefinedProperty,
  setValue,
  unfocus,
  updateArray,
  updateGroup,
  updateRecursive,
  validate,
} from './ngrx-forms';

describe('ngrx-forms', () => {
  it('should export isArrayState', () => expect(isArrayState).toBeDefined());
  it('should export isGroupState', () => expect(isGroupState).toBeDefined());
  it('should export cast', () => expect(cast).toBeDefined());
  it('should export createFormControlState', () => expect(createFormControlState).toBeDefined());
  it('should export createFormGroupState', () => expect(createFormGroupState).toBeDefined());
  it('should export createFormArrayState', () => expect(createFormArrayState).toBeDefined());
  it('should export formControlReducer', () => expect(formControlReducer).toBeDefined());
  it('should export formGroupReducer', () => expect(formGroupReducer).toBeDefined());
  it('should export formArrayReducer', () => expect(formArrayReducer).toBeDefined());
  it('should export addControl', () => expect(addControl).toBeDefined());
  it('should export disable', () => expect(disable).toBeDefined());
  it('should export enable', () => expect(enable).toBeDefined());
  it('should export focus', () => expect(focus).toBeDefined());
  it('should export markAsDirty', () => expect(markAsDirty).toBeDefined());
  it('should export markAsPristine', () => expect(markAsPristine).toBeDefined());
  it('should export markAsSubmitted', () => expect(markAsSubmitted).toBeDefined());
  it('should export markAsTouched', () => expect(markAsTouched).toBeDefined());
  it('should export markAsUnsubmitted', () => expect(markAsUnsubmitted).toBeDefined());
  it('should export markAsUntouched', () => expect(markAsUntouched).toBeDefined());
  it('should export removeControl', () => expect(removeControl).toBeDefined());
  it('should export reset', () => expect(reset).toBeDefined());
  it('should export setErrors', () => expect(setErrors).toBeDefined());
  it('should export setUserDefinedProperty', () => expect(setUserDefinedProperty).toBeDefined());
  it('should export setValue', () => expect(setValue).toBeDefined());
  it('should export unfocus', () => expect(unfocus).toBeDefined());
  it('should export updateArray', () => expect(updateArray).toBeDefined());
  it('should export updateGroup', () => expect(updateGroup).toBeDefined());
  it('should export updateRecursive', () => expect(updateRecursive).toBeDefined());
  it('should export validate', () => expect(validate).toBeDefined());
  it('should export NgrxFormControlDirective', () => expect(NgrxFormControlDirective).toBeDefined());
  it('should export NgrxValueConverters', () => expect(NgrxValueConverters).toBeDefined());
  it('should export NgrxFormDirective', () => expect(NgrxFormDirective).toBeDefined());
  it('should export NgrxDefaultValueAccessor', () => expect(NgrxDefaultValueAccessor).toBeDefined());
  it('should export NgrxCheckboxControlValueAccessor', () => expect(NgrxCheckboxControlValueAccessor).toBeDefined());
  it('should export NgrxNumberValueAccessor', () => expect(NgrxNumberValueAccessor).toBeDefined());
  it('should export NgrxRangeValueAccessor', () => expect(NgrxRangeValueAccessor).toBeDefined());
  it('should export NgrxSelectControlValueAccessor', () => expect(NgrxSelectControlValueAccessor).toBeDefined());
  it('should export NgrxSelectMultipleControlValueAccessor', () => expect(NgrxSelectMultipleControlValueAccessor).toBeDefined());
  it('should export NgrxRadioControlValueAccessor', () => expect(NgrxRadioControlValueAccessor).toBeDefined());
  it('should export NgrxSelectOption', () => expect(NgrxSelectOption).toBeDefined());
  it('should export NgrxFormsModule', () => expect(NgrxFormsModule).toBeDefined());
});
