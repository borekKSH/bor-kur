import React from "react";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import jwt from "jsonwebtoken";
import { IPageSecretLink } from "../../types/generated/contentful";
import Layout from "../../components/Layout";
import { Input, ErrorLabel, Label, Submit } from "../../components/Form";
import { RequestBody, ResponseData } from "../api/secret-links";

enum ValidationErrors {
  REQUIRED = "REQUIRED",
  WRONG_PASSWORD = "WRONG_PASSWORD",
}

type LinkRedirectPageProps = {
  content: IPageSecretLink;
};

function LinkRedirectPage({ content }: LinkRedirectPageProps) {
  const { layout, secretLinkForm } = content.fields;
  const {
    title,
    emptyFieldMessage,
    password,
    passwordPlaceholder,
    submit,
    wrongPasswordMessage,
  } = secretLinkForm.fields;

  const router = useRouter();
  const { slug } = router.query;

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: yup.object({
      password: yup.string().trim().required(ValidationErrors.REQUIRED),
    }),
    onSubmit: async () => {
      try {
        const res = await fetch("/api/secret-links", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug, password: formik.values.password } as RequestBody),
        }).then((t) => t.json());

        const { token } = res as ResponseData;
        const { link } = jwt.decode(token) as { [key: string]: string };

        router.push(link);
      } catch (e) {
        formik.setFieldError("password", ValidationErrors.WRONG_PASSWORD);
      }
    },
  });

  return (
    <Layout content={layout} noindex nofollow>
      <div className="px-8 h-screen flex flex-col items-center justify-center gap-12">
        <h2
          className="
          font-bold text-3xl
          sm:text-4xl
          xl:text-5xl"
        >
          {title}
        </h2>
        <form
          className="max-w-prose w-full grid space-y-8 bg-yellow-100 dark:bg-neutral-600 transition-colors p-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="relative">
            <Label htmlFor="password">{password}</Label>
            <Input
              value={formik.values.password}
              changeHandler={formik.handleChange}
              blurHandler={formik.handleBlur}
              id="password"
              name="password"
              type="password"
              placeholder={passwordPlaceholder}
              error={formik.touched.password! && !!formik.errors.password}
            />
            <ErrorLabel>
              {formik.touched.password &&
                formik.errors.password &&
                formik.errors.password === ValidationErrors.REQUIRED &&
                emptyFieldMessage}
              {formik.touched.password &&
                formik.errors.password &&
                formik.errors.password === ValidationErrors.WRONG_PASSWORD &&
                wrongPasswordMessage}
            </ErrorLabel>
          </div>
          <Submit>{submit}</Submit>
        </form>
      </div>
    </Layout>
  );
}

async function getServerSideProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: "pageSecretLink", locale });
  const content = entries.items[0] as IPageSecretLink;

  return {
    props: {
      content,
    },
  };
}

export { getServerSideProps };

export default LinkRedirectPage;
