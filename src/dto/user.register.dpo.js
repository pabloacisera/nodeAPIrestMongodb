import {Type} from '@sinclair/typebox';

const RegisterDtoSchema=Type.Object({
  _id: Type.string(),
  name:Type.string(),
  email:Type.string(),
  password:Type.string()
})