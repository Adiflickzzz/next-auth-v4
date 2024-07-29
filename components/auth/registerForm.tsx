import { CardWrapper } from "./cardWrapper";

export const RegisterForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      hello
    </CardWrapper>
  );
};
