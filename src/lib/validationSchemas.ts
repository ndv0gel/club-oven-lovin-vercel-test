import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditProfileSchema = Yup.object({
  id: Yup.string().required(),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  image: Yup.string().default(""),
  dietaryRestrictions: Yup
    .array()
    .of(Yup.string().required()) // ← prevents undefined inside array
    .default([]),
});