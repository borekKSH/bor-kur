import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Label from "./Label";
import Input from "./Input";
import ErrorLabel from "./ErrorLabel";
import TextArea from "./TextArea";
import Submit from "./Submit";
import { ISectionContact } from "../../types/generated/contentful";

enum ValidationErrors {
  REQUIRED = "REQUIRED",
  EMAIL = "EMAIL",
}

type FormProps = {
  content: ISectionContact;
};

function Form({ content }: FormProps) {
  const {
    formActionLink,
    email,
    emailPlaceholder,
    message,
    messagePlaceholder,
    submit,
    emptyFieldMessage,
    invalidEmailMessage,
    emailSubject,
    thankYouPageUrl,
  } = content.fields;

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .trim()
        .required(ValidationErrors.REQUIRED)
        .email(ValidationErrors.EMAIL),
      message: yup.string().trim().required(ValidationErrors.REQUIRED),
    }),
    onSubmit: () => {},
  });

  return (
    <form
      className="max-w-prose w-full grid space-y-8 bg-yellow-100 dark:bg-neutral-600 transition-colors p-8"
      action={formActionLink}
      method="POST"
      onSubmit={(event) => {
        if (
          !formik.isValid ||
          formik.values.email === "" ||
          formik.values.message === ""
        ) {
          event.preventDefault();
        }
      }}
    >
      <div className="relative">
        <Label htmlFor="email">{email}</Label>
        <Input
          value={formik.values.email}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
          id="email"
          name="email"
          type="email"
          placeholder={emailPlaceholder}
          error={formik.touched.email! && !!formik.errors.email}
        />
        <ErrorLabel>
          {formik.touched.email &&
            ((formik.errors.email === ValidationErrors.EMAIL && invalidEmailMessage) ||
              (formik.errors.email === ValidationErrors.REQUIRED && emptyFieldMessage))}
        </ErrorLabel>
      </div>
      <div className="relative">
        <Label htmlFor="message">{message}</Label>
        <TextArea
          value={formik.values.message}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
          id="message"
          name="message"
          placeholder={messagePlaceholder}
          error={formik.touched.message! && !!formik.errors.message}
        />
        <ErrorLabel>
          {formik.touched.message && formik.errors.message && emptyFieldMessage}
        </ErrorLabel>
      </div>
      <div className="hidden">
        <input type="hidden" name="_subject" value={emailSubject} />
        <input type="hidden" name="_next" value={thankYouPageUrl} />
      </div>
      <div className="pt-8">
        <Submit>{submit}</Submit>
      </div>
    </form>
  );
}

export default Form;
