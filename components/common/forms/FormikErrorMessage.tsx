import { View } from "react-native";
import React from "react";
import Typography from "../Typography";
import { colors, spacing } from "@/theme";

interface FormikErrorMessageProps {
  errors: any;
  touched: any;
  inputName: string;
}

const FormikErrorMessage = ({
  errors,
  touched,
  inputName,
}: FormikErrorMessageProps) => {
  const isThereError = errors[inputName] && touched[inputName];

  if (!isThereError) return;

  return (
    <View style={{ marginTop: spacing.tiny }}>
      <Typography
        textStyles={{ textAlign: "left" }}
        content={isThereError ? errors[inputName] : ""}
        color={colors.red.red}
        variant="smallRegular"
      />
    </View>
  );
};

export default FormikErrorMessage;
