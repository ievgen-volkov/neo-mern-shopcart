import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { FormTextField } from "./FormTextField";
import * as yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Mail is required"),
  password: yup
    .string()
    .min(6, "Password has to be longer than 6 characters!")
    .required("Password is required!"),
});

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(
        values: FormValues,
        formikHelpers: FormikHelpers<FormValues>
      ) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
        formikHelpers.setSubmitting(false);
      }}
    >
      {(formikProps: FormikProps<FormValues>) => (
        <Form noValidate autoComplete="off">
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <Field
                name="name"
                label="Name"
                size="small"
                component={FormTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                label="Email"
                size="small"
                component={FormTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                label="Password"
                type="password"
                size="small"
                component={FormTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="outlined"
                size="large"
                color="primary"
                disabled={formikProps.isSubmitting}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
