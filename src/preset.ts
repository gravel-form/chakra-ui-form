import { FixedObjectMw, FixedArrayMw, LocalRefMw, ExtraPropsMw, withName } from './core';
import { FormControlTemplateMw, FormControlLabelMw } from './middlewares/FormControlTemplateMw';
import NotSupportedMw from './middlewares/NotSupportedMw';
import { InputMw, TextAreaMw } from './middlewares/InputMw';
import NumberInputMw from './middlewares/NumberInputMw';
import FieldsetTemplateMw from './middlewares/FieldsetTemplateMw';
import CheckboxGroupMw from './middlewares/CheckboxGroupMw';
import SelectMw from './middlewares/SelectMw';
import { SubmitButtonWithValidationMw } from './middlewares/SubmitButtonMw';
import RadioGroupMw from './middlewares/RadioGroupMw';
import CheckboxMw from './middlewares/CheckboxMw';
import SwitchMw from './middlewares/SwitchMw';
import SliderMw from './middlewares/SliderMw';

export const schemaMws = [FixedObjectMw, FixedArrayMw];

export const formControlMws = [
  FormControlTemplateMw,
  withName(CheckboxMw, undefined),
  FormControlLabelMw,
  withName(RadioGroupMw, 'RadioGroup'),
  withName(SliderMw, 'Slider'),
  withName(SwitchMw, 'Switch'),
  withName(TextAreaMw, 'TextArea'),
  CheckboxGroupMw,
  SelectMw,
  InputMw,
  NumberInputMw,
  NotSupportedMw,
];

export const presetMws = [
  SubmitButtonWithValidationMw,
  ExtraPropsMw,
  LocalRefMw,
  FieldsetTemplateMw,
  ...schemaMws,
  ...formControlMws,
  NotSupportedMw,
];

export default presetMws;
