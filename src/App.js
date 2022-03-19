import { createContext, useState } from "react";
import { Form, Formik } from "formik";
import {
  checkoutFormModel,
  formInitialValues,
  validationSchema,
} from "./formik";
import { StepForm, StepBanner, Header } from "./components/layout";
const FormContext = createContext();

function App() {
  const [step, setStep] = useState(1);
  const { formId } = checkoutFormModel;
  const currentValidationSchema = validationSchema[step - 1];

  function submitForm(values, actions) {
    actions.setSubmitting(false);
    setStep(step + 1);
    alert(JSON.stringify(values));
  }

  function handleSubmit(values, actions) {
    if (step > 4) {
      submitForm(values, actions);
    } else {
      setStep(step + 1);
      actions.setTouched({});
    }
  }

  function handleStep(step) {
    setStep(step);
  }

  return (
    <>
      <Header />
      <StepBanner step={step} />
      <Formik
        initialValues={formInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form id={formId}>
          <FormContext.Provider value={{ handleStep }}>
            <StepForm step={step} />
          </FormContext.Provider>
        </Form>
      </Formik>
    </>
  );
}

export { FormContext };
export default App;
